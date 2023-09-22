"use strict";
"use strict";
function t(t) {
  if (Array.isArray(t)) {
    for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
    return n;
  }
  return Array.from(t);
}
function e(t) {
  return function () {
    var e = t.apply(this, arguments);
    return new Promise(function (t, n) {
      function r(a, i) {
        try {
          var s = e[a](i),
            o = s.value;
        } catch (t) {
          return void n(t);
        }
        if (!s.done)
          return Promise.resolve(o).then(
            function (t) {
              r("next", t);
            },
            function (t) {
              r("throw", t);
            }
          );
        t(o);
      }
      return r("next");
    });
  };
}
function n(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function r(t, e) {
  if (!t)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
}
function a(t, e) {
  if ("function" != typeof e && null !== e)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof e
    );
  (t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 },
  })),
    e &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
}
Object.defineProperty(exports, "__esModule", { value: !0 });
var i = (function () {
    function t(t, e) {
      var n = [],
        r = !0,
        a = !1,
        i = void 0;
      try {
        for (
          var s, o = t[Symbol.iterator]();
          !(r = (s = o.next()).done) && (n.push(s.value), !e || n.length !== e);
          r = !0
        );
      } catch (t) {
        (a = !0), (i = t);
      } finally {
        try {
          !r && o.return && o.return();
        } finally {
          if (a) throw i;
        }
      }
      return n;
    }
    return function (e, n) {
      if (Array.isArray(e)) return e;
      if (Symbol.iterator in Object(e)) return t(e, n);
      throw new TypeError(
        "Invalid attempt to destructure non-iterable instance"
      );
    };
  })(),
  s =
    Object.assign ||
    function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
      }
      return t;
    },
  o = (function () {
    function t(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    return function (e, n, r) {
      return n && t(e.prototype, n), r && t(e, r), e;
    };
  })(),
  u = (function (t) {
    return t && t.__esModule ? t : { default: t };
  })(require("./BasePresenter.js")),
  l = require("../utils/utils"),
  c = (function (t) {
    if (t && t.__esModule) return t;
    var e = {};
    if (null != t)
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    return (e.default = t), e;
  })(require("../utils/icon.js")),
  d = require("../models/RequestAPI"),
  f = require("../libs/geometry/geometryLib"),
  p = require("../libs/runtime"),
  h = new f.GeoMetry(),
  y = (function (f) {
    function y(t) {
      var e =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      n(this, y);
      var a = r(this, (y.__proto__ || Object.getPrototypeOf(y)).call(this, t));
      return (
        (a.viewInterface = ["setTransitSuccess", "setTransitFail"]),
        (a.transitPlanEntity = []),
        (a.currentPlanIndex = e.currentPlanIndex || 0),
        a
      );
    }
    return (
      a(y, u.default),
      o(y, [
        {
          key: "transit",
          value: (function () {
            var t = e(
              p.mark(function t() {
                var e,
                  n,
                  r,
                  a,
                  i = this,
                  o =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                return p.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (this.start = o.start),
                            (this.end = o.end),
                            this.view.setLoading(),
                            (t.prev = 3),
                            wx.showLoading({ mask: !0, title: "加载中..." }),
                            (t.next = 7),
                            (0, l.checkNetwork)()
                          );
                        case 7:
                          return (
                            (t.next = 9),
                            d.requestAPI.transit({
                              from:
                                this.start.latitude +
                                "," +
                                this.start.longitude,
                              to: this.end.latitude + "," + this.end.longitude,
                              policy: o.policy,
                            })
                          );
                        case 9:
                          return (
                            (e = t.sent),
                            (t.next = 12),
                            wx.cloud.callFunction({
                              name: "getTransit",
                              data: {
                                queryOptions: s({}, o, {
                                  index: this.currentPlanIndex,
                                  transitRoutes: e.data,
                                }),
                                type: "detail",
                                key: d.requestAPI.getKey(),
                              },
                            })
                          );
                        case 12:
                          if (
                            ((n = t.sent),
                            wx.hideLoading(),
                            (r = n.result.result),
                            (a = r.data.transitList),
                            (this.routePlanData = r.data),
                            !a)
                          ) {
                            t.next = 25;
                            break;
                          }
                          return (
                            (this.transitPlanEntity = a),
                            (t.next = 21),
                            this.switchPlan(this.currentPlanIndex)
                          );
                        case 21:
                          return this.view.setStatus(null), t.abrupt("return");
                        case 25:
                          this.view.setStatus(r.status);
                        case 26:
                          t.next = 34;
                          break;
                        case 28:
                          (t.prev = 28),
                            (t.t0 = t.catch(3)),
                            console.error(t.t0),
                            wx.hideLoading(),
                            -1e3 === t.t0.status &&
                              wx.showToast({
                                title: "网络异常请重试",
                                icon: "none",
                                image: "",
                                duration: 1500,
                                mask: !1,
                              }),
                            this.view.setStatus({
                              des: t.t0.message || "网络异常，请稍后重试",
                              iconUrl: c.TRANSIT_ROUTEPLAN_ICON.NETWORK,
                              retry: !0,
                              retryCb: function () {
                                i.transit(o);
                              },
                            });
                        case 34:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  this,
                  [[3, 28]]
                );
              })
            );
            return function () {
              return t.apply(this, arguments);
            };
          })(),
        },
        {
          key: "switchPlan",
          value: (function () {
            var t = e(
              p.mark(function t(e) {
                return p.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (this.currentPlanEntity =
                              this.routePlanData.transitList[e]),
                            (this.currentPlanIndex = e),
                            this.view.setTransitSuccess({
                              currentPlanIndex: e,
                            }),
                            (t.next = 5),
                            this.updateIndoorRoute(this.currentPlanEntity)
                          );
                        case 5:
                          this.resetTransitData();
                        case 6:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  this
                );
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })(),
        },
        {
          key: "getStopLinesData",
          value: (function () {
            var t = e(
              p.mark(function t(e) {
                var n,
                  r,
                  a,
                  i,
                  s,
                  o,
                  u = this;
                return p.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (
                            ((t.prev = 0),
                            (n = {}),
                            (r = e.stationList),
                            (a = r.filter(function (t) {
                              return "BUS" === t.lineInfo.vehicle;
                            })).length)
                          ) {
                            t.next = 7;
                            break;
                          }
                          return (
                            "function" == typeof this.view.setRtBusesData &&
                              this.view.setRtBusesData(n),
                            t.abrupt("return")
                          );
                        case 7:
                          return (
                            (i = a.map(function (t) {
                              return {
                                stop_uid: t.lineInfo.geton.id,
                                line_uid: [t.lineInfo.id],
                                max_bus_size: 1,
                              };
                            })),
                            (t.next = 10),
                            d.requestAPI.getStopLines({ batch_requests: i })
                          );
                        case 10:
                          (s = t.sent),
                            (o = s.data.data.batch_details).forEach(function (
                              t,
                              e
                            ) {
                              var r =
                                a[e].lineInfo.geton.id + "-" + a[e].lineInfo.id;
                              (n[r] = {
                                isrt: t.lines[0] ? t.lines[0].has_rtbus : 0,
                                rtbus: t.lines[0] ? t.lines[0].rtbuses[0] : {},
                              }),
                                n[r].isrt &&
                                  n[r].rtbus &&
                                  (n[r].text = u._formateRtText(n[r].rtbus));
                            }),
                            (n.latitude = e.firstGeton.latitude),
                            (n.longitude = e.firstGeton.longitude),
                            "function" == typeof this.view.setRtBusesData &&
                              this.view.setRtBusesData(n),
                            (t.next = 21);
                          break;
                        case 18:
                          (t.prev = 18),
                            (t.t0 = t.catch(0)),
                            console.error(t.t0);
                        case 21:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  this,
                  [[0, 18]]
                );
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })(),
        },
        {
          key: "_formateRtText",
          value: function (t) {
            var e = t.eta,
              n = t.stop_num,
              r = t.distance;
            return r < 50
              ? "已经到站"
              : r > 50 && 0 === n
              ? "即将到站"
              : n >= 1
              ? Math.ceil(e / 60) + "分钟·" + n + "站"
              : "";
          },
        },
        {
          key: "updateIndoorRoute",
          value: (function () {
            var n = e(
              p.mark(function e(n) {
                var r,
                  a,
                  s,
                  o,
                  u = this;
                return p.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (!n.__isIndoorRouteLoaded) {
                            e.next = 2;
                            break;
                          }
                          return e.abrupt("return");
                        case 2:
                          return (
                            (r = n.firstGeton),
                            (a = n.lastGetoff),
                            (s = void 0),
                            (o = void 0),
                            (this.timer = setTimeout(function () {
                              wx.showLoading({ mask: !0, title: "加载中..." }),
                                clearTimeout(u.timer),
                                (u.timer = null);
                            }, 500)),
                            (e.next = 8),
                            Promise.all([
                              this.getStartWalk(r),
                              this.getEndWalk(a),
                            ])
                              .then(function (e) {
                                var r = i(e, 2);
                                if (
                                  ((s = r[0]),
                                  (o = r[1]),
                                  s.polyline && s.polyline.length)
                                ) {
                                  for (
                                    var a, u = s.polyline.length - 1;
                                    u >= 0;
                                    u--
                                  )
                                    if (s.polyline[u].dottedLine) {
                                      (s.polyline[u].dottedLine = !1),
                                        (s.polyline[u].color = "#427cff"),
                                        (s.polyline[u].width = 8),
                                        (s.polyline[u].style = 1),
                                        (s.polyline[u].arrowLine = !0);
                                      break;
                                    }
                                  (a = n.polyline).push.apply(a, t(s.polyline));
                                }
                                if (
                                  (s.cardData &&
                                    n.steps.length &&
                                    !n.steps[0].isShow &&
                                    ((s.cardData.formatDistance =
                                      s.cardData.distance),
                                    (s.cardData.formatDuration =
                                      s.cardData.time),
                                    (s.cardData.mode = "WALKING"),
                                    (s.cardData.isShow = !0),
                                    n.steps.unshift(s.cardData)),
                                  o.polyline && o.polyline.length)
                                ) {
                                  for (var l, c = 0; c < o.polyline.length; c++)
                                    if (o.polyline[c].dottedLine) {
                                      (o.polyline[c].dottedLine = !1),
                                        (o.polyline[c].color = "#427cff"),
                                        (o.polyline[c].width = 8),
                                        (o.polyline[c].style = 1),
                                        (o.polyline[c].arrowLine = !0);
                                      break;
                                    }
                                  (l = n.polyline).push.apply(l, t(o.polyline));
                                }
                                o.cardData &&
                                  n.steps.length &&
                                  !n.steps[n.steps.length - 1].isShow &&
                                  ((o.cardData.formatDistance =
                                    n.steps.distance),
                                  (o.cardData.formatDuration = o.cardData.time),
                                  (o.cardData.mode = "WALKING"),
                                  (o.cardData.isShow = !0),
                                  n.steps.push(o.cardData));
                              })
                              .catch(function (t) {
                                console.error(t);
                              })
                          );
                        case 8:
                          return (
                            this.timer &&
                              (clearTimeout(this.timer), (this.timer = null)),
                            wx.hideLoading(),
                            e.abrupt("return")
                          );
                        case 11:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  this
                );
              })
            );
            return function (t) {
              return n.apply(this, arguments);
            };
          })(),
        },
        {
          key: "resetTransitData",
          value: function () {
            var t = this;
            this.rtTimeout && clearInterval(this.rtTimeout);
            var e = this.routePlanData.bounds;
            (this.parsedTransitList = this.routePlanData.transitList),
              this.getStopLinesData(
                this.parsedTransitList[this.currentPlanIndex]
              ),
              (this.rtTimeout = setInterval(function () {
                t.getStopLinesData(t.parsedTransitList[t.currentPlanIndex]);
              }, 1e4)),
              this.view.setTransitSuccess({
                bounds: e,
                transitList: this.parsedTransitList,
                currentPlan: this.parsedTransitList[this.currentPlanIndex],
              });
          },
        },
        {
          key: "getStartWalk",
          value: function (t) {
            var n = this;
            return new Promise(
              (function () {
                var r = e(
                  p.mark(function e(r, a) {
                    var i, s, o;
                    return p.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                !(
                                  (i = h.getLength(
                                    [
                                      parseFloat(n.start.latitude),
                                      parseFloat(n.start.longitude),
                                    ],
                                    [
                                      parseFloat(t.latitude),
                                      parseFloat(t.longitude),
                                    ]
                                  )) >= 3e5
                                )
                              ) {
                                e.next = 6;
                                break;
                              }
                              return r({}), e.abrupt("return");
                            case 6:
                              if (!(i < 20)) {
                                e.next = 9;
                                break;
                              }
                              return r({}), e.abrupt("return");
                            case 9:
                              return (
                                (e.next = 11),
                                d.requestAPI.walking({
                                  from:
                                    n.start.latitude + "," + n.start.longitude,
                                  to: t.latitude + "," + t.longitude,
                                })
                              );
                            case 11:
                              (s = e.sent),
                                (o = s.data),
                                wx.cloud
                                  .callFunction({
                                    name: "getWalk",
                                    data: {
                                      queryOptions: {
                                        start: n.start,
                                        end: {
                                          latitude: t.latitude,
                                          longitude: t.longitude,
                                          name: t.name,
                                        },
                                        walkingRoutes: o,
                                      },
                                      key: d.requestAPI.getKey(),
                                    },
                                  })
                                  .then(function (t) {
                                    r(t.result.result);
                                  })
                                  .catch(function (t) {
                                    console.error(t);
                                  });
                            case 14:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      n
                    );
                  })
                );
                return function (t, e) {
                  return r.apply(this, arguments);
                };
              })()
            );
          },
        },
        {
          key: "getEndWalk",
          value: function (t) {
            var n = this;
            return new Promise(
              (function () {
                var r = e(
                  p.mark(function e(r, a) {
                    var i, s, o;
                    return p.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                !(
                                  (i = h.getLength(
                                    [
                                      parseFloat(t.latitude),
                                      parseFloat(t.longitude),
                                    ],
                                    [
                                      parseFloat(n.end.latitude),
                                      parseFloat(n.end.longitude),
                                    ]
                                  )) >= 3e5
                                )
                              ) {
                                e.next = 6;
                                break;
                              }
                              return r({}), e.abrupt("return");
                            case 6:
                              if (!(i < 20)) {
                                e.next = 9;
                                break;
                              }
                              return r({}), e.abrupt("return");
                            case 9:
                              return (
                                (e.next = 11),
                                d.requestAPI.walking({
                                  from: t.latitude + "," + t.longitude,
                                  to: n.end.latitude + "," + n.end.longitude,
                                })
                              );
                            case 11:
                              (s = e.sent),
                                (o = s.data),
                                wx.cloud
                                  .callFunction({
                                    name: "getWalk",
                                    data: {
                                      queryOptions: {
                                        start: {
                                          latitude: t.latitude,
                                          longitude: t.longitude,
                                          name: t.name,
                                        },
                                        end: n.end,
                                        walkingRoutes: o,
                                      },
                                      key: d.requestAPI.getKey(),
                                    },
                                  })
                                  .then(function (t) {
                                    r(t.result.result);
                                  })
                                  .catch(function (t) {
                                    console.error(t);
                                  });
                            case 14:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      n
                    );
                  })
                );
                return function (t, e) {
                  return r.apply(this, arguments);
                };
              })()
            );
          },
        },
        {
          key: "loading",
          set: function (t) {
            this.view.setLoading(t);
          },
        },
      ]),
      y
    );
  })();
exports.default = y;
