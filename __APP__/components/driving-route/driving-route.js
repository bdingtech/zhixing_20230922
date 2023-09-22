"use strict";
"use strict";
function t(t) {
  return t && t.__esModule ? t : { default: t };
}
var e =
    Object.assign ||
    function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = arguments[e];
        for (var a in r)
          Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a]);
      }
      return t;
    },
  r = t(require("../../presenters/DrivingRoutePlanCloudPresenter")),
  a = require("../../config/appConfig"),
  i = t(require("../../utils/systemInfo")),
  n = require("../../models/RequestAPI"),
  s = (function (t) {
    if (t && t.__esModule) return t;
    var e = {};
    if (null != t)
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    return (e.default = t), e;
  })(require("../../utils/utils"));
Component({
  properties: {
    height: { type: Number },
    data: {
      type: Object,
      observer: function (t) {
        (this.queryOptions = t),
          t.startPoint &&
            t.endPoint &&
            (this._setLoading(),
            n.requestAPI.sendModePv("driving"),
            this.drivingRoutePlanPresenter.driving({
              start: t.startPoint,
              end: t.endPoint,
            }));
      },
    },
  },
  data: {
    status: null,
    scrollTop: 0,
    routeDetailVisible: !1,
    CDN_PATH: a.CDN_PATH,
  },
  lifetimes: {
    attached: function () {
      this.drivingRoutePlanPresenter = new r.default(this);
    },
    ready: function () {
      var t = i.default.globalData.themeColor,
        e = i.default.globalData.navigation;
      this.setData({ themeColor: t, navigation: e });
    },
  },
  methods: {
    setDrivingSuccess: function (t) {
      var r = {
        type: "driving",
        start: this.drivingRoutePlanPresenter.start,
        end: this.drivingRoutePlanPresenter.end,
        activeIndex: t.activeIndex,
        cardData: t.cardData,
      };
      this.setData(e({ status: !1 }, r)),
        this.triggerEvent("mapdatachange", {
          type: "driving",
          data: { sourceData: r, polyline: t.polyline },
        }),
        this.triggerEvent("handlpageerror", {
          isNetworkError: !1,
          retry: !1,
          retryCb: !1,
        });
    },
    setDrivingFail: function (t) {
      var e = this,
        r = "warning",
        a = function () {
          e.drivingRoutePlanPresenter.driving({
            start: e.queryOptions.startPoint,
            end: e.queryOptions.endPoint,
          });
        };
      switch (t.status) {
        case -1e3:
          (r = "loadError"),
            this.triggerEvent("handlpageerror", {
              errorType: r,
              isNetworkError: !0,
              retry: !0,
              retryCb: a,
            });
          break;
        case -1002:
          (r = "locationError"),
            this.setData({
              status: {
                type: r,
                loadErrorText: t.message || "网路异常，请稍后重试",
                retry: a,
              },
            });
          break;
        case -1003:
          (r = "locationAuthError"),
            this.triggerEvent("handlpageerror", { errorType: r });
          break;
        default:
          this.setData({
            status: {
              type: r,
              warningText: t.message,
              loadErrorText: t.message || "网路异常，请稍后重试",
              retry: a,
            },
          });
      }
      if (-1e3 !== t.status) {
        var i = t.meta || {};
        this.triggerEvent("mapdatachange", {
          type: "driving",
          data: { markers: i.markers || [], polyline: [] },
        }),
          i.markers && i.markers.length > 0 && this.setBounds(i.markers);
      }
    },
    setBounds: function (t) {
      (this.bounds = t),
        this.triggerEvent("mapboundschange", {
          type: "driving",
          data: { padding: [80, 80, 80, 80], points: t },
        });
    },
    setMarkers: function (t) {
      Array.isArray(t) &&
        t.length &&
        this.triggerEvent("mapdatachange", {
          type: "driving",
          data: { markers: t },
        });
    },
    _setLoading: function () {
      this.setData({
        status: { type: "loading", loadingText: "路线加载中..." },
      });
    },
    onRoutePlanTap: function (t) {
      var e = +t.currentTarget.dataset.index;
      e !== this.data.activeIndex
        ? (this.drivingRoutePlanPresenter.selectDriving(e),
          this.setData({ scrollTop: 0 }))
        : this.onToggleRouteDetail();
    },
    onToggleRouteDetail: function () {
      var t = this;
      this.setData({ routeDetailVisible: !this.data.routeDetailVisible }),
        this.triggerEvent("toggleroutedetail", {
          callback: function () {
            t.setBounds(t.bounds);
          },
        });
    },
    onNavigate: function () {
      var t = this.properties.data.endPoint,
        e = t.latitude,
        r = t.longitude,
        a = t.name,
        i = void 0 === a ? "" : a,
        n = wx.getSystemInfoSync().SDKVersion;
      s.compareVersion(n, "2.14.0") >= 0
        ? this.triggerEvent("onOpenMapApp", {
            latitude: parseFloat(e),
            longitude: parseFloat(r),
            destination: i,
          })
        : wx.openLocation({
            latitude: parseFloat(e),
            longitude: parseFloat(r),
            name: i,
          });
    },
  },
});
