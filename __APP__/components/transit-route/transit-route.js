"use strict";
"use strict";
function t(t) {
  return t && t.__esModule ? t : { default: t };
}
function e(t) {
  return function () {
    var e = t.apply(this, arguments);
    return new Promise(function (t, r) {
      function n(a, s) {
        try {
          var i = e[a](s),
            o = i.value;
        } catch (t) {
          return void r(t);
        }
        if (!i.done)
          return Promise.resolve(o).then(
            function (t) {
              n("next", t);
            },
            function (t) {
              n("throw", t);
            }
          );
        t(o);
      }
      return n("next");
    });
  };
}
var r =
    Object.assign ||
    function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = arguments[e];
        for (var n in r)
          Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
      }
      return t;
    },
  n = (function () {
    function t(t, e) {
      var r = [],
        n = !0,
        a = !1,
        s = void 0;
      try {
        for (
          var i, o = t[Symbol.iterator]();
          !(n = (i = o.next()).done) && (r.push(i.value), !e || r.length !== e);
          n = !0
        );
      } catch (t) {
        (a = !0), (s = t);
      } finally {
        try {
          !n && o.return && o.return();
        } finally {
          if (a) throw s;
        }
      }
      return r;
    }
    return function (e, r) {
      if (Array.isArray(e)) return e;
      if (Symbol.iterator in Object(e)) return t(e, r);
      throw new TypeError(
        "Invalid attempt to destructure non-iterable instance"
      );
    };
  })(),
  a = (function (t) {
    if (t && t.__esModule) return t;
    var e = {};
    if (null != t)
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    return (e.default = t), e;
  })(require("../../utils/icon.js")),
  s = require("../../config/appConfig"),
  i = t(require("../../utils/systemInfo")),
  o = require("../../models/RequestAPI"),
  u = require("../../utils/utils"),
  c = t(require("../../utils/RequestError")),
  l = require("../../libs/runtime"),
  d = [
    { name: "时间短优先", value: "LEAST_TIME" },
    { name: "少步行优先", value: "LEAST_WALKING" },
    { name: "少换乘优先", value: "LEAST_TRANSFER" },
  ],
  f = {
    LEAST_TIME: "时间短",
    LEAST_WALKING: "少步行",
    LEAST_TRANSFER: "少换乘",
  };
Component({
  properties: {
    data: {
      type: Object,
      observer: function (t) {
        (this.start = t.startPoint),
          (this.end = t.endPoint),
          t.startPoint &&
            t.endPoint &&
            this.transit({
              start: this.start,
              end: this.end,
              policy: this.data.currentPolicy,
            });
      },
    },
  },
  data: {
    policies: d,
    currentPolicy: "LEAST_TIME",
    status: null,
    CDN_PATH: s.CDN_PATH,
    transitList: [],
    rtbuses: [],
    markerPolicy: f,
    bus_icon: "icon-route_ic_bus",
  },
  lifetimes: {
    ready: function () {
      var t = i.default.globalData.themeColor;
      this.setData({ themeColor: t });
    },
    detached: function () {
      this.rtTimeout &&
        (clearInterval(this.rtTimeout), (this.rtTimeout = null));
    },
  },
  methods: {
    setTransitPolicy: function (t) {
      var e = t.target.dataset.policy;
      e &&
        (this.setData({ currentPolicy: e }),
        this.transit({ start: this.start, end: this.end, policy: e }));
    },
    transit: function () {
      var t = this,
        a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return e(
        l.mark(function e() {
          var s, i, c, d, f, h, p, v, y;
          return l.wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      t.destroy(),
                      (t.start = a.start),
                      (t.end = a.end),
                      (t.queryOptions = a),
                      t.setLoading(),
                      (e.prev = 5),
                      (e.next = 8),
                      Promise.all([
                        t.handleMyLocation(a.start),
                        t.handleMyLocation(a.end),
                      ])
                    );
                  case 8:
                    (s = e.sent),
                      (i = n(s, 2)),
                      (c = i[0]),
                      (d = i[1]),
                      (t.start = c),
                      (t.end = d),
                      (e.next = 22);
                    break;
                  case 16:
                    return (
                      (e.prev = 16),
                      (e.t0 = e.catch(5)),
                      console.log(e.t0),
                      t.setTransitFail(e.t0),
                      t.notifyViewFail(e.t0),
                      e.abrupt("return")
                    );
                  case 22:
                    return (
                      (e.prev = 22),
                      t.rtTimeout && clearInterval(t.rtTimeout),
                      (f = []),
                      (h = ""),
                      (e.next = 28),
                      (0, u.checkNetwork)()
                    );
                  case 28:
                    return (
                      (e.next = 30),
                      o.requestAPI.transit({
                        from: t.start.latitude + "," + t.start.longitude,
                        to: t.end.latitude + "," + t.end.longitude,
                        policy: a.policy,
                      })
                    );
                  case 30:
                    return (
                      (p = e.sent),
                      (e.next = 33),
                      wx.cloud.callFunction({
                        name: "getTransit",
                        data: {
                          queryOptions: r({}, a, { transitRoutes: p.data }),
                          type: "model",
                          key: o.requestAPI.getKey(),
                        },
                      })
                    );
                  case 33:
                    0 === (v = e.sent).result.status
                      ? ((f = v.result.result.data),
                        (h = v.result.result.status),
                        (t.transitResult = v.result.result),
                        o.requestAPI.sendModePv("transit"),
                        f
                          ? ((y = f),
                            t.setData({ transitList: y }),
                            t.getStopLinesData(y),
                            (t.rtTimeout = setInterval(function () {
                              t.getStopLinesData(y);
                            }, 1e4)),
                            t.setStatus(null))
                          : t.setStatus(h),
                        t.triggerEvent("handlpageerror", {
                          isNetworkError: !1,
                          retry: !1,
                          retryCb: !1,
                        }))
                      : t.setTransitFail(v.result),
                      (e.next = 41);
                    break;
                  case 37:
                    (e.prev = 37),
                      (e.t1 = e.catch(22)),
                      -1e3 === e.t1.status &&
                        wx.showToast({
                          title: "网络异常请重试",
                          icon: "none",
                          image: "",
                          duration: 1500,
                          mask: !1,
                        }),
                      t.setTransitFail(e.t1);
                  case 41:
                  case "end":
                    return e.stop();
                }
            },
            e,
            t,
            [
              [5, 16],
              [22, 37],
            ]
          );
        })
      )();
    },
    handleMyLocation: function (t) {
      var r = this;
      return e(
        l.mark(function e() {
          var n;
          return l.wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (((e.prev = 0), "我的位置" !== t.name)) {
                      e.next = 7;
                      break;
                    }
                    return (e.next = 4), r.getLocation();
                  case 4:
                    (n = e.sent),
                      (t.latitude = n.latitude),
                      (t.longitude = n.longitude);
                  case 7:
                    e.next = 17;
                    break;
                  case 9:
                    if (
                      ((e.prev = 9),
                      (e.t0 = e.catch(0)),
                      console.log("location error", e.t0),
                      "getLocation:fail auth deny" !== e.t0.errMsg)
                    ) {
                      e.next = 16;
                      break;
                    }
                    throw new c.default("用户未授权位置服务", -1003);
                  case 16:
                    throw new c.default("GPS信号弱，请稍后再试", -1002);
                  case 17:
                    return e.abrupt("return", t);
                  case 18:
                  case "end":
                    return e.stop();
                }
            },
            e,
            r,
            [[0, 9]]
          );
        })
      )();
    },
    getLocation: function () {
      var t = this;
      return e(
        l.mark(function e() {
          var r;
          return l.wrap(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (t.next = 2), o.requestAPI.getLocation();
                  case 2:
                    return (r = t.sent), t.abrupt("return", r);
                  case 4:
                  case "end":
                    return t.stop();
                }
            },
            e,
            t
          );
        })
      )();
    },
    setTransitFail: function (t) {
      var e = this;
      console.error("公交方案规划失败", t);
      var r = void 0;
      switch (t.status) {
        case 8:
        case -1e3:
          (r = "loadError"),
            this.triggerEvent("handlpageerror", {
              isNetworkError: !0,
              retry: !0,
              retryCb: function () {
                e.transit(e.queryOptions);
              },
            });
          break;
        case -1002:
          (r = "locationError"),
            this.setStatus({
              des: t.message || "网络异常，请稍后重试",
              iconUrl: a.TRANSIT_ROUTEPLAN_ICON.NETWORK,
              retry: !0,
              retryCb: function () {
                e.transit(e.queryOptions);
              },
            });
          break;
        case -1003:
          (r = "locationAuthError"),
            this.triggerEvent("handlpageerror", { errorType: r });
          break;
        default:
          this.setStatus(null);
      }
    },
    setLoading: function () {
      this.setStatus({
        type: "loading",
        des: "路线加载中...",
        iconUrl: a.TRANSIT_LOADING,
      });
    },
    setStatus: function (t) {
      this.setData({ status: t });
    },
    handleRetry: function () {
      this.data.status &&
        this.data.status.retryCb &&
        this.data.status.retryCb();
    },
    onSelectTransitLine: function (t) {
      var e = JSON.stringify(this.transitResult.start),
        r = JSON.stringify(this.transitResult.end),
        n = t.currentTarget.dataset,
        a =
          "../../pages/transit-detail/detail?start=" +
          e +
          "&end=" +
          r +
          "&index=" +
          n.lineindex +
          "&policy=" +
          n.policy;
      wx.navigateTo({ url: a });
    },
    getStopLinesData: function (t) {
      var r = this;
      return e(
        l.mark(function e() {
          var n, a, s, i, u;
          return l.wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.prev = 0),
                      (n = t.filter(function (t) {
                        return t.firstBusLineId && t.firstBusStopId;
                      })),
                      (a = n.map(function (t) {
                        return {
                          stop_uid: t.firstBusStopId,
                          line_uid: [t.firstBusLineId],
                          max_bus_size: 1,
                        };
                      })),
                      (e.next = 5),
                      o.requestAPI.getStopLines({ batch_requests: a })
                    );
                  case 5:
                    (s = e.sent),
                      (i = s.data.data.batch_details),
                      (u = {}),
                      i.forEach(function (t, e) {
                        var a = n[e].firstBusStopId + "-" + n[e].firstBusLineId;
                        (u[a] = {
                          isrt: t.lines[0] ? t.lines[0].has_rtbus : 0,
                          rtbus: t.lines[0] ? t.lines[0].rtbuses[0] : {},
                        }),
                          u[a].isrt &&
                            u[a].rtbus &&
                            (u[a].text = r._formateRtText(u[a].rtbus));
                      }),
                      r.setData({ rtData: u }),
                      (e.next = 15);
                    break;
                  case 12:
                    (e.prev = 12), (e.t0 = e.catch(0)), console.error(e.t0);
                  case 15:
                  case "end":
                    return e.stop();
                }
            },
            e,
            r,
            [[0, 12]]
          );
        })
      )();
    },
    _formateRtText: function (t) {
      var e = t.eta,
        r = t.stop_num,
        n = t.distance;
      return n < 50
        ? "已经到站"
        : n > 50 && 0 === r
        ? "即将到站"
        : r >= 1
        ? Math.ceil(e / 60) + "分钟·" + r + "站"
        : "";
    },
    notifyViewFail: function (t) {
      this._initMarker(),
        this.view.setDrivingFail({
          status: t.status,
          message: t.message || "网路异常，请稍后重试",
          meta: { markers: this._startEndMarkerWxJson().reverse() },
        });
    },
    destroy: function () {
      this.setData({ transitList: [] });
    },
  },
});
