"use strict";
"use strict";
function t(t) {
  return t && t.__esModule ? t : { default: t };
}
function e() {
  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
    e = [];
  for (var r in o) t[r] && e.push({ val: t[r], text: o[r] });
  return e;
}
var r =
    Object.assign ||
    function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = arguments[e];
        for (var a in r)
          Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a]);
      }
      return t;
    },
  a = t(require("../../presenters/WalkRoutePlanCloudPresenter")),
  s = require("../../config/appConfig"),
  n = t(require("../../utils/systemInfo")),
  i = require("../../models/RequestAPI"),
  o = {};
Component({
  properties: {
    data: {
      type: Object,
      observer: function (t) {
        (this.start = t.startPoint),
          (this.end = t.endPoint),
          t.startPoint &&
            t.endPoint &&
            (this._setLoading(),
            i.requestAPI.sendModePv("walk"),
            this.walkRoutePlanPresenter.walk({
              start: this.start,
              end: this.end,
            }));
      },
    },
    height: { type: Number },
  },
  data: {
    CDN_PATH: s.CDN_PATH,
    contentHeight: n.default.globalData.windowHeight,
    routeDetailVisible: !1,
  },
  lifetimes: {
    attached: function () {
      this.walkRoutePlanPresenter = new a.default(this);
    },
  },
  methods: {
    setWalkSuccess: function (t) {
      this.setData(r({ status: !1, des: e(t.cardData) }, t)),
        this.triggerEvent("mapdatachange", {
          type: "walk",
          data: r({}, t, {
            sourceData: {
              cardData: this.data.cardData,
              start: this.walkRoutePlanPresenter.start,
              end: this.walkRoutePlanPresenter.end,
              segmentList: this.data.segmentList,
              type: "walk",
            },
          }),
        }),
        this.triggerEvent("handlpageerror", {
          isNetworkError: !1,
          retry: !1,
          retryCb: !1,
        });
    },
    setWalkFail: function (t) {
      console.error("步行方案规划失败", t);
      var e = this,
        r = "warning",
        a = function () {
          e.walkRoutePlanPresenter.walk({ start: e.start, end: e.end });
        };
      switch (t.status) {
        case -1e3:
          (r = "loadError"),
            this.triggerEvent("handlpageerror", {
              isNetworkError: !0,
              retry: !0,
              retryCb: a,
            });
          break;
        case -1002:
          r = "locationError";
          break;
        case -1003:
          (r = "locationAuthError"),
            this.triggerEvent("handlpageerror", { errorType: r });
      }
      this.setData({
        markers: [],
        polyline: [],
        status: {
          type: 8 === t.status ? "loadError" : r,
          warningText: t.message || "未知错误",
          loadErrorText: t.message || "网路异常，请稍后重试",
          retry: a,
        },
      });
      var s = t.meta || {};
      this.triggerEvent("mapdatachange", {
        type: "walk",
        data: { markers: s.markers || [], polyline: [] },
      }),
        s.markers && s.markers.length > 0 && this.setBounds(s.markers);
    },
    setBounds: function (t) {
      this.triggerEvent("mapboundschange", {
        type: "walk",
        data: { padding: [80, 80, 80, 80], points: t },
      });
    },
    _setLoading: function () {
      this.setData({
        status: { type: "loading", loadingText: "路线加载中..." },
      });
    },
    onToggleRouteDetail: function () {
      this.setData({ routeDetailVisible: this.data.routeDetailVisible }),
        this.triggerEvent("toggleroutedetail");
    },
    handleNoNetworkError: function () {
      this.triggerEvent("handlpageerror", {
        isNetworkError: !1,
        retry: !1,
        retryCb: !1,
      });
    },
  },
});
