"use strict";
"use strict";
function e(e) {
  return function () {
    var t = e.apply(this, arguments);
    return new Promise(function (e, r) {
      function n(u, a) {
        try {
          var i = t[u](a),
            s = i.value;
        } catch (e) {
          return void r(e);
        }
        if (!i.done)
          return Promise.resolve(s).then(
            function (e) {
              n("next", e);
            },
            function (e) {
              n("throw", e);
            }
          );
        e(s);
      }
      return n("next");
    });
  };
}
function t(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
Object.defineProperty(exports, "__esModule", { value: !0 }),
  (exports.requestAPI = void 0);
var r =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r)
          Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
      }
      return e;
    },
  n = (function () {
    function e(e, t) {
      for (var r = 0; r < t.length; r++) {
        var n = t[r];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(e, n.key, n);
      }
    }
    return function (t, r, n) {
      return r && e(t.prototype, r), n && e(t, n), t;
    };
  })(),
  u = (function (e) {
    return e && e.__esModule ? e : { default: e };
  })(require("../utils/request")),
  a = "https://pr.map.qq.com/pingd",
  i = u.default.get,
  s = u.default.post,
  o = require("../libs/runtime"),
  c = (function () {
    function u() {
      var e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      t(this, u),
        (this.key = e.key || ""),
        (this.themeColor = e.themeColor || "#427CFF");
    }
    return (
      n(u, [
        {
          key: "setKey",
          value: function (e) {
            this.key = e || "";
          },
        },
        {
          key: "getKey",
          value: function () {
            return this.key;
          },
        },
        {
          key: "setThemeColor",
          value: function (e) {
            this.themeColor = e || "#427CFF";
          },
        },
        {
          key: "getThemeColor",
          value: function () {
            return this.themeColor;
          },
        },
        {
          key: "wxPromise",
          value: function (e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            return new Promise(function (r, n) {
              (t.success = function (e) {
                r(e);
              }),
                (t.fail = function (e) {
                  n(e);
                }),
                wx[e](t);
            });
          },
        },
        {
          key: "getLocation",
          value: (function () {
            var t = e(
              o.mark(function e() {
                var t;
                return o.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            this.wxPromise("getLocation", { type: "gcj02" })
                          );
                        case 2:
                          return (t = e.sent), e.abrupt("return", t);
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  this
                );
              })
            );
            return function () {
              return t.apply(this, arguments);
            };
          })(),
        },
        {
          key: "driving",
          value: (function () {
            var t = e(
              o.mark(function e(t) {
                var n;
                return o.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            i(
                              "https://apis.map.qq.com/ws/direction/v1/driving",
                              r(
                                {
                                  key: this.key,
                                  output: "json",
                                  get_speed: 1,
                                  get_mp: 1,
                                  policy: "LEAST_TIME",
                                },
                                t
                              )
                            )
                          );
                        case 2:
                          return (n = e.sent), e.abrupt("return", n);
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
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
          key: "transit",
          value: (function () {
            var t = e(
              o.mark(function e(t) {
                var n;
                return o.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (t = r(
                              {
                                key: this.key,
                                output: "json",
                                policy: "LEAST_TIME",
                              },
                              t
                            )),
                            (e.next = 3),
                            i(
                              "https://apis.map.qq.com/ws/direction/v1/transit",
                              t
                            )
                          );
                        case 3:
                          return (n = e.sent), e.abrupt("return", n);
                        case 5:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
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
          key: "walking",
          value: (function () {
            var t = e(
              o.mark(function e(t) {
                var n;
                return o.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (t = r({ key: this.key, output: "json" }, t)),
                            Object.keys(t).map(function (e) {
                              return t[e] || delete t[e], !0;
                            }),
                            (e.next = 4),
                            i(
                              "https://apis.map.qq.com/ws/direction/v1/walking",
                              t
                            )
                          );
                        case 4:
                          return (n = e.sent), e.abrupt("return", n);
                        case 6:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
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
          key: "getStopLines",
          value: (function () {
            var t = e(
              o.mark(function e(t) {
                return o.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (t = r(
                              {
                                key: "QCMBZ-B2RWP-UVCD4-LV5SU-ZQW26-CQBCI",
                                imei: "",
                              },
                              t
                            )),
                            (e.next = 3),
                            s(
                              "https://apis.map.qq.com/ws/rtbus/v1/batch_get_stop_lines",
                              t
                            )
                          );
                        case 3:
                          return e.abrupt("return", e.sent);
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
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
          key: "geocoder",
          value: (function () {
            var t = e(
              o.mark(function e(t) {
                return o.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (t = r({ key: this.key }, t)),
                            (e.next = 3),
                            i("https://apis.map.qq.com/ws/geocoder/v1", t)
                          );
                        case 3:
                          return e.abrupt("return", e.sent);
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
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
          key: "searchPoi",
          value: (function () {
            var t = e(
              o.mark(function e(t) {
                var r;
                return o.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (r = {
                              uid: t,
                              tp: 2,
                              qt: "dt",
                              referer: "qqmap_app",
                              enc: "utf8",
                              key: this.key,
                            }),
                            (e.prev = 1),
                            (e.next = 4),
                            i("https://apis.map.qq.com/ws/native/apic", r)
                          );
                        case 4:
                          return e.abrupt("return", e.sent);
                        case 7:
                          return (
                            (e.prev = 7),
                            (e.t0 = e.catch(1)),
                            e.abrupt("return", { err: "网络请求失败" })
                          );
                        case 10:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  this,
                  [[1, 7]]
                );
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })(),
        },
        {
          key: "getSuggestions",
          value: (function () {
            var t = e(
              o.mark(function e(t) {
                return o.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (t = r({ key: this.key }, t)),
                            (e.next = 3),
                            i(
                              "https://apis.map.qq.com/ws/place/v1/suggestion",
                              t
                            )
                          );
                        case 3:
                          return e.abrupt("return", e.sent);
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
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
          key: "getSearch",
          value: (function () {
            var t = e(
              o.mark(function e(t) {
                return o.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (t = r({ key: this.key }, t)),
                            (e.next = 3),
                            i("https://apis.map.qq.com/ws/place/v1/search", t)
                          );
                        case 3:
                          return e.abrupt("return", e.sent);
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
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
          key: "getLocationDetail",
          value: (function () {
            var t = e(
              o.mark(function e(t) {
                return o.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (t = r({}, t, { key: this.key })),
                            (e.next = 3),
                            i("https://apis.map.qq.com/ws/geocoder/v1/", t)
                          );
                        case 3:
                          return e.abrupt("return", e.sent);
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
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
          key: "sendPv",
          value: function (e) {
            var t = void 0;
            try {
              var n = wx.getAccountInfoSync();
              t = n.miniProgram.appId;
            } catch (e) {
              t = "";
            }
            return (
              (e = r(
                {
                  key: this.key,
                  appid: "miniprogram_plugin",
                  logid: "route_plan",
                  miniappid: t,
                  userid: this._getUserId(),
                },
                e
              )),
              i(a, e)
            );
          },
        },
        {
          key: "sendModePv",
          value: function (e) {
            var t = {
              appid: "miniprogram_plugin_routeplan",
              userid: this._getUserId(),
              type: e,
            };
            return i(a, t);
          },
        },
        {
          key: "checkAuth",
          value: (function () {
            var t = e(
              o.mark(function e(t) {
                var n, u;
                return o.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          n = void 0;
                          try {
                            (u = wx.getAccountInfoSync()),
                              (n = u.miniProgram.appId);
                          } catch (e) {
                            n = "";
                          }
                          return (
                            (t = r(
                              {
                                key: "LMQBZ-NZX33-XDQ36-YDW6A-QUNVT-Q5FFU",
                                pid2: n,
                                key2: this.key,
                                output: "json",
                              },
                              t
                            )),
                            (e.next = 5),
                            i(
                              "https://apikey.map.qq.com/mkey/index.php/mkey/check",
                              t
                            )
                          );
                        case 5:
                          return e.abrupt("return", e.sent);
                        case 6:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
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
          key: "_getUserId",
          value: function () {
            var e = wx.getStorageSync("userid");
            if (!e) {
              var t = this._getRandom();
              return wx.setStorageSync("userid", t), t;
            }
            if (e.split("_")[0] === this._getFullDate()) return e;
            var r = this._getRandom();
            return wx.setStorageSync("userid", r), r;
          },
        },
        {
          key: "_getRandom",
          value: function () {
            var e = +new Date();
            return (
              this._getFullDate(e) +
              "_" +
              e.toString(36) +
              "_" +
              Math.floor(1e4 * Math.random())
            );
          },
        },
        {
          key: "_getFullDate",
          value: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : +new Date(),
              t = new Date(e);
            return (
              t.getFullYear() + "-" + (t.getMonth() + 1) + "-" + t.getDate()
            );
          },
        },
      ]),
      u
    );
  })();
exports.default = c;
exports.requestAPI = new c();
