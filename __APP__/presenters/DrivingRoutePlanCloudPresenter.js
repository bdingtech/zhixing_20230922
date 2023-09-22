"use strict";
"use strict";
function t(t) {
  return t && t.__esModule ? t : { default: t };
}
function e(t) {
  return function () {
    var e = t.apply(this, arguments);
    return new Promise(function (t, r) {
      function n(i, s) {
        try {
          var a = e[i](s),
            o = a.value;
        } catch (t) {
          return void r(t);
        }
        if (!a.done)
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
function r(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function n(t, e) {
  if (!t)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
}
function i(t, e) {
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
var s =
    Object.assign ||
    function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = arguments[e];
        for (var n in r)
          Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
      }
      return t;
    },
  a = (function () {
    function t(t, e) {
      var r = [],
        n = !0,
        i = !1,
        s = void 0;
      try {
        for (
          var a, o = t[Symbol.iterator]();
          !(n = (a = o.next()).done) && (r.push(a.value), !e || r.length !== e);
          n = !0
        );
      } catch (t) {
        (i = !0), (s = t);
      } finally {
        try {
          !n && o.return && o.return();
        } finally {
          if (i) throw s;
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
  o = (function () {
    function t(t, e) {
      for (var r = 0; r < e.length; r++) {
        var n = e[r];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(t, n.key, n);
      }
    }
    return function (e, r, n) {
      return r && t(e.prototype, r), n && t(e, n), e;
    };
  })(),
  u = t(require("./BasePresenter.js")),
  l = require("../libs/geometry/geometryLib"),
  c = t(require("../utils/MapRenderHelper")),
  h = require("../models/RequestAPI"),
  d = (function (t) {
    if (t && t.__esModule) return t;
    var e = {};
    if (null != t)
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    return (e.default = t), e;
  })(require("../utils/utils")),
  f = new l.GeoMetry(),
  p = require("../libs/runtime"),
  v = ["#9FE3B8", "#FED180", "#EAABA4", "#0000FF40", "#EAABA4"],
  y = ["#88C29E", "#DAB36D", "#C8928C", "#0000FFFF", "#C8928C"],
  b = ["#11CA53", "#FFA300", "#E64938", "#0000FFFF", "#E64938"],
  g = ["#0EAD47", "#DB8B00", "#C53E30", "#0000FFFF", "#C53E30"],
  k = (function (t) {
    function l(t) {
      r(this, l);
      var e = n(this, (l.__proto__ || Object.getPrototypeOf(l)).call(this, t));
      return (e.mapRender = new c.default()), e;
    }
    return (
      i(l, u.default),
      o(l, [
        {
          key: "destroy",
          value: function () {
            (this.startMarker = null),
              (this.endMarker = null),
              (this.startWalkRoutePlanEntity = null),
              (this.endWalkRoutePlanEntity = null),
              (this.drivingRoutePlanEntities = []),
              (this.firstGuideLine = null),
              (this.lastGuideLine = null),
              (this.queryOptions = null),
              (this.start = null),
              (this.end = null);
          },
        },
        {
          key: "driving",
          value: (function () {
            var t = e(
              p.mark(function t() {
                var e,
                  r,
                  n,
                  i,
                  s,
                  o,
                  u,
                  l,
                  c,
                  v =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                return p.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (
                            (this.destroy(),
                            (v = v || {}),
                            (e = void 0),
                            (r = void 0),
                            (this.queryOptions = v),
                            (this.start = v.start),
                            (this.end = v.end),
                            (this.queryOptions.drivingIndex =
                              this.queryOptions.drivingIndex || 0),
                            (n = this.notifyViewFail.bind(this)),
                            d.isValidParams(v, n))
                          ) {
                            t.next = 10;
                            break;
                          }
                          return t.abrupt("return");
                        case 10:
                          return (
                            (t.prev = 10),
                            (t.next = 13),
                            Promise.all([
                              this.handleMyLocation(v.start),
                              this.handleMyLocation(v.end),
                            ])
                          );
                        case 13:
                          (i = t.sent),
                            (s = a(i, 2)),
                            (e = s[0]),
                            (r = s[1]),
                            (this.start = e),
                            (this.end = r),
                            (t.next = 25);
                          break;
                        case 21:
                          return (
                            (t.prev = 21),
                            (t.t0 = t.catch(10)),
                            this.notifyViewFail(t.t0),
                            t.abrupt("return")
                          );
                        case 25:
                          if (
                            d.isValidStartEndPoints(
                              { start: this.start, end: this.end },
                              n
                            )
                          ) {
                            t.next = 27;
                            break;
                          }
                          return t.abrupt("return");
                        case 27:
                          if (
                            !(
                              (o = f.getLength(
                                [e.latitude, e.longitude],
                                [r.latitude, r.longitude]
                              )) < 200
                            )
                          ) {
                            t.next = 31;
                            break;
                          }
                          return (
                            this.notifyViewFail({
                              status: -1001,
                              message: "起终点距离太短，请切换到步行路线",
                            }),
                            t.abrupt("return", !1)
                          );
                        case 31:
                          return (t.prev = 31), (t.next = 34), d.checkNetwork();
                        case 34:
                          return (
                            (t.next = 36),
                            h.requestAPI.driving({
                              from:
                                this.start.latitude +
                                "," +
                                this.start.longitude,
                              to: this.end.latitude + "," + this.end.longitude,
                            })
                          );
                        case 36:
                          return (
                            (u = t.sent),
                            (l = u.data),
                            (t.next = 40),
                            wx.cloud.callFunction({
                              name: "getDriving",
                              data: {
                                queryOptions: {
                                  start: this.start,
                                  end: this.end,
                                  drivingRoutes: l,
                                },
                                key: h.requestAPI.getKey(),
                              },
                            })
                          );
                        case 40:
                          0 === (c = t.sent).result.status
                            ? (this._initMarker(),
                              this.view.setMarkers(
                                this._startEndMarkerWxJson()
                              ),
                              (this.drivingData = c.result.result),
                              this.selectDriving(v.drivingIndex || 0))
                            : this.notifyViewFail(c.result),
                            (t.next = 50);
                          break;
                        case 44:
                          return (
                            (t.prev = 44),
                            (t.t1 = t.catch(31)),
                            console.error(t.t1),
                            -1e3 === t.t1.status &&
                              wx.showToast({
                                title: "网络异常请重试",
                                icon: "none",
                                image: "",
                                duration: 1500,
                                mask: !1,
                              }),
                            this.notifyViewFail({
                              status: t.t1.status || -1e3,
                            }),
                            t.abrupt("return")
                          );
                        case 50:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  this,
                  [
                    [10, 21],
                    [31, 44],
                  ]
                );
              })
            );
            return function () {
              return t.apply(this, arguments);
            };
          })(),
        },
        {
          key: "selectDriving",
          value: function (t) {
            var e =
              !(arguments.length > 1 && void 0 !== arguments[1]) ||
              arguments[1];
            this.routePlanIndex = t;
            var r = d.deepClone(this.drivingData),
              n = r.drivingPolyline,
              i = n.splice(t, 1),
              o = a(i, 1)[0];
            o.forEach(function (t) {
              var e = t._speedLevel;
              (t.color = b[e]), (t.borderColor = g[e]);
            }),
              n.forEach(function (t) {
                t.forEach(function (t) {
                  var e = t._speedLevel;
                  (t.color = v[e]), (t.borderColor = y[e]);
                }),
                  (r.polyline = r.polyline.concat(t));
              }),
              (r.polyline = r.polyline.concat(o));
            var u = s({ activeIndex: t }, r);
            u.cardData &&
              u.cardData.length > 0 &&
              this.view.setDrivingSuccess(u),
              e && this.view.setBounds(u.bounds);
          },
        },
        {
          key: "notifyViewFail",
          value: function (t) {
            this._initMarker(),
              this.view.setDrivingFail({
                status: t.status,
                message: t.message || "网路异常，请稍后重试",
                meta: { markers: this._startEndMarkerWxJson().reverse() },
              });
          },
        },
        {
          key: "_initMarker",
          value: function () {
            this.start &&
              this.start.latitude &&
              this.start.longitude &&
              (this.startMarker = this.mapRender.createStartMarker(
                this.start,
                1
              )),
              this.end &&
                this.end.latitude &&
                this.end.longitude &&
                (this.endMarker = this.mapRender.createDestMarker(this.end, 1));
          },
        },
        {
          key: "_startEndMarkerWxJson",
          value: function () {
            var t = [];
            return (
              this.startMarker && t.push(this.startMarker.toJson()),
              this.endMarker && t.push(this.endMarker.toJson()),
              t
            );
          },
        },
      ]),
      l
    );
  })();
exports.default = k;
