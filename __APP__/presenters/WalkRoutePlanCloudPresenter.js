"use strict";
"use strict";
function t(t) {
  return t && t.__esModule ? t : { default: t };
}
function e(t) {
  return function () {
    var e = t.apply(this, arguments);
    return new Promise(function (t, r) {
      function n(i, a) {
        try {
          var s = e[i](a),
            u = s.value;
        } catch (t) {
          return void r(t);
        }
        if (!s.done)
          return Promise.resolve(u).then(
            function (t) {
              n("next", t);
            },
            function (t) {
              n("throw", t);
            }
          );
        t(u);
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
var a = (function () {
    function t(t, e) {
      var r = [],
        n = !0,
        i = !1,
        a = void 0;
      try {
        for (
          var s, u = t[Symbol.iterator]();
          !(n = (s = u.next()).done) && (r.push(s.value), !e || r.length !== e);
          n = !0
        );
      } catch (t) {
        (i = !0), (a = t);
      } finally {
        try {
          !n && u.return && u.return();
        } finally {
          if (i) throw a;
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
  s = (function () {
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
  u = t(require("./BasePresenter")),
  o = t(require("../utils/MapRenderHelper")),
  l = require("../models/RequestAPI"),
  h = require("../utils/utils"),
  c = (function (t) {
    if (t && t.__esModule) return t;
    var e = {};
    if (null != t)
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    return (e.default = t), e;
  })(h),
  d = require("../libs/geometry/geometryLib"),
  f = require("../libs/runtime"),
  p = new d.GeoMetry(),
  y = (function (t) {
    function d(t) {
      r(this, d);
      var e = n(this, (d.__proto__ || Object.getPrototypeOf(d)).call(this, t));
      return (e.mapRender = new o.default()), e;
    }
    return (
      i(d, u.default),
      s(d, [
        {
          key: "walk",
          value: (function () {
            var t = e(
              f.mark(function t() {
                var e,
                  r,
                  n,
                  i,
                  s,
                  u,
                  o,
                  d,
                  y,
                  k,
                  b =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                return f.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (
                            (this.destroy(),
                            (t.prev = 1),
                            (this.start = b.start),
                            (this.end = b.end),
                            (e = this.notifyWalkFail.bind(this)),
                            c.isValidParams(b, e))
                          ) {
                            t.next = 7;
                            break;
                          }
                          return t.abrupt("return");
                        case 7:
                          return (
                            (t.prev = 7),
                            (t.next = 10),
                            Promise.all([
                              this.handleMyLocation(b.start),
                              this.handleMyLocation(b.end),
                            ])
                          );
                        case 10:
                          (r = t.sent),
                            (n = a(r, 2)),
                            (i = n[0]),
                            (s = n[1]),
                            (this.start = i),
                            (this.end = s),
                            (t.next = 22);
                          break;
                        case 18:
                          return (
                            (t.prev = 18),
                            (t.t0 = t.catch(7)),
                            this.notifyWalkFail(t.t0),
                            t.abrupt("return")
                          );
                        case 22:
                          if (
                            c.isValidStartEndPoints(
                              { start: this.start, end: this.end },
                              e
                            )
                          ) {
                            t.next = 24;
                            break;
                          }
                          return t.abrupt("return");
                        case 24:
                          return (t.next = 26), (0, h.checkNetwork)();
                        case 26:
                          if (
                            !(
                              (u = p.getLength(
                                [
                                  parseFloat(this.start.latitude),
                                  parseFloat(this.start.longitude),
                                ],
                                [
                                  parseFloat(this.end.latitude),
                                  parseFloat(this.end.longitude),
                                ]
                              )) >= 3e5
                            )
                          ) {
                            t.next = 32;
                            break;
                          }
                          return (
                            this.notifyWalkFail({
                              status: -1004,
                              message: "步行路线过长，建议采用其他出行方式",
                            }),
                            t.abrupt("return")
                          );
                        case 32:
                          if (!(u < 20)) {
                            t.next = 35;
                            break;
                          }
                          return (
                            this.notifyWalkFail({
                              status: -1004,
                              message: "起终点距离太短",
                            }),
                            t.abrupt("return")
                          );
                        case 35:
                          return (
                            (t.next = 37),
                            l.requestAPI.walking({
                              from:
                                this.start.latitude +
                                "," +
                                this.start.longitude,
                              to: this.end.latitude + "," + this.end.longitude,
                              to_poi: this.end.poiid || "",
                            })
                          );
                        case 37:
                          return (
                            (o = t.sent),
                            (d = o.data),
                            (t.next = 41),
                            wx.cloud.callFunction({
                              name: "getWalk",
                              data: {
                                queryOptions: {
                                  start: this.start,
                                  end: this.end,
                                  walkingRoutes: d,
                                },
                                key: l.requestAPI.getKey(),
                              },
                            })
                          );
                        case 41:
                          0 === (y = t.sent).result.status
                            ? ((k = y.result.result),
                              this._initMarker(),
                              this.view.handleNoNetworkError(),
                              this.view.setBounds(k.bounds),
                              this.view.setWalkSuccess(k))
                            : this.notifyWalkFail(y.result),
                            (t.next = 49);
                          break;
                        case 45:
                          (t.prev = 45),
                            (t.t1 = t.catch(1)),
                            -1e3 === t.t1.status &&
                              wx.showToast({
                                title: "网络异常请重试",
                                icon: "none",
                                image: "",
                                duration: 1500,
                                mask: !1,
                              }),
                            this.notifyWalkFail(t.t1);
                        case 49:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  this,
                  [
                    [1, 45],
                    [7, 18],
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
          key: "notifyWalkFail",
          value: function (t) {
            this._initMarker(),
              this.view.setWalkFail({
                status: t.status || -1e3,
                message: t.message,
                meta: { markers: this._startEndMarkerWxJson().reverse() },
              });
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
        {
          key: "destroy",
          value: function () {
            (this.start = null),
              (this.end = null),
              (this.walkRoutePlanEntity = null),
              (this.startMarker = null),
              (this.endMarker = null),
              (this.firstGuideLine = null),
              (this.lastGuideLine = null);
          },
        },
      ]),
      d
    );
  })();
exports.default = y;
