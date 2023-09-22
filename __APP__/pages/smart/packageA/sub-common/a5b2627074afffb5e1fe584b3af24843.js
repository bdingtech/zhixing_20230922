!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [30747],
    {
      38797: function (t, e, n) {
        var r = n(298),
          a = n(79301),
          c = n(57042),
          i = n(24460),
          s = n(95308),
          o = n(21294),
          u = n(92954),
          p = n.n(u),
          h = null;
        function l(t) {
          for (
            var e = "",
              n =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
              r = n.length,
              a = 0;
            a < t;
            a++
          )
            e += n.charAt(Math.floor(Math.random() * r));
          return e;
        }
        function f(t) {
          return d.apply(this, arguments);
        }
        function d() {
          return (d = (0, s.Z)(
            (0, a.Z)().mark(function t(e) {
              var n,
                c,
                i,
                s = arguments;
              return (0, a.Z)().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (n = s.length > 1 && void 0 !== s[1] ? s[1] : {}),
                        (c = s.length > 2 && void 0 !== s[2] ? s[2] : "post"),
                        (i = {
                          method: c,
                          body: n,
                          headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json",
                          },
                        }),
                        console.log(
                          "track params",
                          (0, r.Z)((0, r.Z)({}, i), {}, { url: e, data: n })
                        ),
                        t.abrupt(
                          "return",
                          new Promise(function (t) {
                            p().request(
                              (0, r.Z)(
                                (0, r.Z)({}, i),
                                {},
                                {
                                  url: e,
                                  data: n,
                                  complete: function (e) {
                                    t(e);
                                  },
                                  fail: function (t) {
                                    console.log("netErr:" + JSON.stringify(t));
                                  },
                                }
                              )
                            );
                          })
                        )
                      );
                    case 5:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          )).apply(this, arguments);
        }
        var v = (function () {
          function t() {
            (0, c.Z)(this, t),
              (this.recordList = []),
              (this.trackId = ""),
              (this.channel = "ctrip"),
              (this.md5Key = "ctrip20210910abab"),
              (this.productLine = "");
          }
          return (
            (0, i.Z)(t, [
              {
                key: "clear",
                value: function () {
                  (this.recordList = []),
                    (this.trackId = ""),
                    (this.productLine = "");
                },
              },
              {
                key: "start",
                value: function () {
                  var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  this.clear(),
                    (this.trackId = l(64)),
                    "string" == typeof t
                      ? (this.productLine = t)
                      : t.productLine && (this.productLine = t.productLine);
                },
              },
              {
                key: "track",
                value: function (t) {
                  console.log("track params", t),
                    this.recordList.push([
                      this.productLine,
                      t.desc || "",
                      t.type || "",
                      t.title || "",
                      new Date().getTime(),
                    ]);
                },
              },
              {
                key: "setTrackId",
                value: function (t) {
                  this.trackId = t;
                },
              },
              {
                key: "getTrackId",
                value: function () {
                  return this.trackId;
                },
              },
              {
                key: "getSign",
                value: (function () {
                  var t = (0, s.Z)(
                    (0, a.Z)().mark(function t(e) {
                      var n, r;
                      return (0, a.Z)().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (n =
                                    this.channel +
                                    e +
                                    this.trackId +
                                    this.md5Key),
                                  (r = o.Z.MD5(n)),
                                  t.abrupt("return", r.toLowerCase())
                                );
                              case 3:
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
                key: "baseUrl",
                value: (function () {
                  var t = (0, s.Z)(
                    (0, a.Z)().mark(function t() {
                      var e, n, r, c;
                      return (0, a.Z)().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (e = new Date().getTime()),
                                  (t.next = 3),
                                  this.getSign(e)
                                );
                              case 3:
                                if (
                                  ((n = t.sent),
                                  (r =
                                    "https://smart.zhongan.com/outer/policy/agree/save"),
                                  h)
                                ) {
                                  t.next = 9;
                                  break;
                                }
                                return (
                                  (t.next = 8),
                                  new Promise(function (t) {
                                    t(p().getStorageSync("GLOBAL_ENV"));
                                  })
                                );
                              case 8:
                                h = t.sent;
                              case 9:
                                return (
                                  "uat" == h &&
                                    (r =
                                      "https://smart-test2.zhongan.com/outer/policy/agree/save"),
                                  (c = [
                                    "sign=".concat(n),
                                    "timestamp=".concat(e),
                                  ].join("&")),
                                  t.abrupt("return", r + "?" + c)
                                );
                              case 12:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
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
                key: "params",
                get: function () {
                  return {
                    traceCode: this.trackId,
                    traceType: "1",
                    channel: "ctrip",
                    bizParams: JSON.stringify(this.recordList),
                  };
                },
              },
              {
                key: "send",
                value: (function () {
                  var t = (0, s.Z)(
                    (0, a.Z)().mark(function t() {
                      var e, n, r;
                      return (0, a.Z)().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (
                                  (e = this.params),
                                  (t.next = 3),
                                  this.baseUrl()
                                );
                              case 3:
                                return (
                                  (n = t.sent),
                                  (t.prev = 4),
                                  (t.next = 7),
                                  f(n, e)
                                );
                              case 7:
                                (r = t.sent),
                                  console.log("res", r),
                                  (t.next = 13);
                                break;
                              case 11:
                                (t.prev = 11), (t.t0 = t.catch(4));
                              case 13:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this,
                        [[4, 11]]
                      );
                    })
                  );
                  return function () {
                    return t.apply(this, arguments);
                  };
                })(),
              },
            ]),
            t
          );
        })();
        e.Z = v;
      },
    },
  ]);
})();
