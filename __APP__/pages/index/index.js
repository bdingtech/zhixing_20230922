"use strict";
"use strict";
function t(t) {
  return function () {
    var e = t.apply(this, arguments);
    return new Promise(function (t, a) {
      function i(n, r) {
        try {
          var o = e[n](r),
            s = o.value;
        } catch (t) {
          return void a(t);
        }
        if (!o.done)
          return Promise.resolve(s).then(
            function (t) {
              i("next", t);
            },
            function (t) {
              i("throw", t);
            }
          );
        t(s);
      }
      return i("next");
    });
  };
}
var e =
    Object.assign ||
    function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var a = arguments[e];
        for (var i in a)
          Object.prototype.hasOwnProperty.call(a, i) && (t[i] = a[i]);
      }
      return t;
    },
  a = (function (t) {
    return t && t.__esModule ? t : { default: t };
  })(require("../../utils/systemInfo")),
  i = require("../../models/RequestAPI"),
  n = require("../../utils/icon"),
  r = require("../../utils/utils"),
  o = require("../../libs/runtime"),
  s = a.default.globalData.isIPhoneX ? 121 : 101,
  l = ["driving", "transit", "walking"];
wx.cloud.init({ env: "prod-0g3o69fcc7c9dde7" }),
  Page({
    data: {
      title: "路线规划",
      drivingCompHeight: 0,
      walkCompHeight: s,
      scale: 18,
      type: "driving",
      latitude: a.default.globalData.latitude,
      longitude: a.default.globalData.longitude,
      markers: [],
      includePoints: [],
      polyline: [],
      controls: [],
      routeDetailVisible: !1,
      contentHeight: a.default.globalData.windowHeight,
      pageHidden: !0,
      isNetworkError: !1,
      netWorkErrorImage: n.TRANSIT_ROUTEPLAN_ICON.NETWORK,
      detailButtonHeight: 35,
      isIPhoneX: a.default.globalData.isIPhoneX,
      isIOS: a.default.globalData.isIOS,
      routeSelectCompHeight: 116,
    },
    onReady: function () {
      this.map = wx.createMapContext("routeMap");
    },
    onLoad: (function () {
      var n = t(
        o.mark(function t(n) {
          var s, d, u, c, h, p, g, f, m;
          return o.wrap(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if (this.isValidKeyAndReferer(n)) {
                      t.next = 3;
                      break;
                    }
                    return (
                      console.error("请传入key和referer"), t.abrupt("return")
                    );
                  case 3:
                    if (
                      (this.setData({ subkey: n.key, mapShow: !0 }), n.endPoint)
                    ) {
                      t.next = 7;
                      break;
                    }
                    return console.error("请传入终点"), t.abrupt("return");
                  case 7:
                    return (
                      (s = n.themeColor || "#427CFF"),
                      (d = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(s)) ||
                        (console.error(
                          "您自定义的色号值无效，请重新配置，色值格式是 16 进制颜色"
                        ),
                        (s = "#427CFF")),
                      (u = n.navigation || 0),
                      (c =
                        (n.mode && -1 !== l.indexOf(n.mode) ? n.mode : "") ||
                        wx.getStorageSync("User_Selected_Tab_Index") ||
                        this.data.type),
                      (h = this.paramData = { type: c }),
                      (p = JSON.parse(n.endPoint)),
                      (h.endPoint = p),
                      i.requestAPI.setKey(n.key),
                      (a.default.globalData.themeColor = s),
                      (a.default.globalData.navigation = parseInt(u)),
                      (g =
                        1 === a.default.globalData.navigation
                          ? a.default.globalData.isIPhoneX
                            ? 163
                            : 143
                          : a.default.globalData.isIPhoneX
                          ? 141
                          : 121),
                      (this.referer = n.referer),
                      (a.default.globalData.referer = n.referer),
                      (t.prev = 21),
                      wx.showLoading({ title: "加载中" }),
                      (t.next = 25),
                      i.requestAPI.checkAuth()
                    );
                  case 25:
                    if (
                      ((f = t.sent), wx.hideLoading(), 0 === f.data.info.error)
                    ) {
                      t.next = 31;
                      break;
                    }
                    return (
                      (m = this._formateKeyError(f.data.info.error)),
                      console.error(m),
                      t.abrupt("return")
                    );
                  case 31:
                    t.next = 39;
                    break;
                  case 33:
                    if (
                      ((t.prev = 33),
                      (t.t0 = t.catch(21)),
                      wx.hideLoading(),
                      console.error(t.t0),
                      -1e3 === t.t0.status)
                    ) {
                      t.next = 39;
                      break;
                    }
                    return t.abrupt("return");
                  case 39:
                    return (
                      n.startPoint
                        ? (h.startPoint = JSON.parse(n.startPoint))
                        : (h.startPoint = { name: "我的位置" }),
                      (0, r.isValidLatlon)(p) &&
                        ((h.latitude = +p.latitude),
                        (h.longitude = +p.longitude)),
                      this.setData(
                        e({ pageHidden: !1, drivingCompHeight: g }, h)
                      ),
                      (this.drivingComp = this.selectComponent("#driving")),
                      (this.transitComp = this.selectComponent("#transit")),
                      (this.walkComp = this.selectComponent("#walk")),
                      this.loadTab(c),
                      (t.prev = 46),
                      (t.next = 49),
                      i.requestAPI.sendPv({ referer: this.referer })
                    );
                  case 49:
                    t.next = 54;
                    break;
                  case 51:
                    (t.prev = 51), (t.t1 = t.catch(46)), console.error(t.t1);
                  case 54:
                  case "end":
                    return t.stop();
                }
            },
            t,
            this,
            [
              [21, 33],
              [46, 51],
            ]
          );
        })
      );
      return function (t) {
        return n.apply(this, arguments);
      };
    })(),
    onShow: function () {
      var e = this;
      return t(
        o.mark(function t() {
          var a, i, n;
          return o.wrap(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    (a = e.data),
                      (i = a.type),
                      (n = a.routeDetailVisible),
                      e.currentBounds &&
                        e.map &&
                        "bus" !== i &&
                        !n &&
                        e.map.includePoints(e.currentBounds),
                      wx.setKeepScreenOn({ keepScreenOn: !0 });
                  case 3:
                  case "end":
                    return t.stop();
                }
            },
            t,
            e
          );
        })
      )();
    },
    loadTab: function (t) {
      var a = {};
      switch (t) {
        case "driving":
          (a.drivingCompData = {
            startPoint: this.paramData.startPoint,
            endPoint: this.paramData.endPoint,
          }),
            this.transitComp.destroy();
          break;
        case "transit":
          a.transitCompData = {
            startPoint: this.paramData.startPoint,
            endPoint: this.paramData.endPoint,
          };
          break;
        case "walking":
          (a.walkCompData = {
            startPoint: this.paramData.startPoint,
            endPoint: this.paramData.endPoint,
          }),
            this.transitComp.destroy();
      }
      this.setData(e({}, a, { polyline: [], markers: [] })),
        this.setLocationControl();
    },
    onControltap: function (t) {
      this.map.moveToLocation();
    },
    onGetTotalBarHeight: function (t) {
      this.setData({ totalBarHeight: t.detail });
    },
    onRouteDetailVisible: function (t) {
      this.setData({ routeDetailVisible: t.detail });
    },
    setLocationControl: function () {
      var t = a.default.globalData.windowHeight,
        e = this.data,
        i = e.type,
        n = e.drivingCompHeight,
        r = e.walkCompHeight,
        o = n;
      "walking" === i && (o = r);
      var s = t - o - 117 - 80;
      this.setData({
        controls: [
          {
            id: 1,
            iconPath: "./image/location.png",
            position: { left: 4, top: s, width: 48, height: 48 },
            clickable: !0,
          },
        ],
      });
    },
    onStartEndChange: function (t) {
      (this.paramData.startPoint = t.detail.startPoint),
        (this.paramData.endPoint = t.detail.endPoint),
        this.setData({
          startPoint: t.detail.startPoint,
          endPoint: t.detail.endPoint,
        }),
        this.loadTab(this.data.type);
    },
    onExchange: function () {
      (this.paramData.startPoint = this.data.endPoint),
        (this.paramData.endPoint = this.data.startPoint),
        this.setData({
          startPoint: this.data.endPoint,
          endPoint: this.data.startPoint,
        }),
        this.loadTab(this.data.type);
    },
    onChangeRouteType: function (t) {
      var e = t.detail.type;
      wx.setStorageSync("User_Selected_Tab_Index", e),
        this.setData({ type: e }),
        this.loadTab(e);
    },
    onToggleComponentRouteDetail: function (t) {
      "driving" === this.data.type
        ? this.drivingComp.onToggleRouteDetail()
        : "walking" === this.data.type && this.walkComp.onToggleRouteDetail();
    },
    onToggleRouteDetail: function (t) {
      var a = { routeDetailVisible: !this.data.routeDetailVisible };
      a.routeDetailVisible
        ? this.setData(
            e(
              {
                title:
                  "driving" === this.data.type
                    ? "驾车路线详情"
                    : "步行路线详情",
              },
              a
            )
          )
        : t.detail && t.detail.callback
        ? this.setData(e({ title: "路线规划" }, a), t.detail.callback)
        : this.setData(e({ title: "路线规划" }, a));
    },
    onMapDataChange: function (t) {
      var a = this;
      if (this.map) {
        var i = t.detail.data;
        void 0 === i.latitude && delete i.latitude,
          void 0 === i.longitude && delete i.longitude,
          this.setData(e({}, t.detail.data));
      } else
        setTimeout(function () {
          console.warn("onMapDataChange this.map is null"),
            a.onMapDataChange(t);
        }, 50);
    },
    onMapBoundsChange: function (t) {
      var a = this;
      this.map
        ? ((this.currentBounds = t.detail.data),
          this.map.includePoints(e({}, t.detail.data)))
        : setTimeout(function () {
            console.warn("onMapBoundsChange this.map is null"),
              a.onMapBoundsChange(t);
          }, 50);
    },
    onHandlePageError: function (t) {
      "locationAuthError" === t.detail.errorType &&
        wx.showModal({
          title: "用户未授权",
          content: '请在授权管理中打开"位置"',
          showCancel: !1,
        }),
        this.setData(e({}, t.detail));
    },
    onRetry: function () {
      this.data.retryCb && this.data.retryCb();
    },
    isValidKeyAndReferer: function (t) {
      return !(!t.key || !t.referer);
    },
    onSelectDriving: function (t) {
      this.drivingComp.drivingRoutePlanPresenter.selectDriving(
        t.detail.index,
        !1
      );
    },
    _formateKeyError: function (t) {
      var e = "";
      switch (t) {
        case -101:
          e = "IP 被封禁";
          break;
        case -102:
          e = "HTTP 请求路径错误";
          break;
        case -201:
          e = "key 参数未传递";
          break;
        case -202:
          e = "key 格式有误";
          break;
        case -203:
          e = "cb 格式有误";
          break;
        case -204:
          e = "channel 取值有误";
          break;
        case -301:
          e = "无效的 key";
          break;
        case -302:
        case -303:
        default:
          e = "请设置key授权本小程序appId";
      }
      return e;
    },
    onOpenMapApp: function (t) {
      this.map.openMapApp(e({}, t.detail));
    },
  });
