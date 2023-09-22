"use strict";
"use strict";
function e(e) {
  return function () {
    var t = e.apply(this, arguments);
    return new Promise(function (e, r) {
      function n(u, o) {
        try {
          var i = t[u](o),
            a = i.value;
        } catch (e) {
          return void r(e);
        }
        if (!i.done)
          return Promise.resolve(a).then(
            function (e) {
              n("next", e);
            },
            function (e) {
              n("throw", e);
            }
          );
        e(a);
      }
      return n("next");
    });
  };
}
function t(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
Object.defineProperty(exports, "__esModule", { value: !0 });
var r = (function () {
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
  n = require("../models/RequestAPI"),
  u = (function (e) {
    return e && e.__esModule ? e : { default: e };
  })(require("../utils/RequestError")),
  o = require("../libs/runtime"),
  i = (function () {
    function i(e) {
      if ((t(this, i), !e)) throw Error("view 不能为空");
      (this.view = e), (this.requestAPI = n.requestAPI);
    }
    return (
      r(i, [
        {
          key: "handleMyLocation",
          value: (function () {
            var t = e(
              o.mark(function e(t) {
                var r;
                return o.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (((e.prev = 0), "我的位置" !== t.name)) {
                            e.next = 7;
                            break;
                          }
                          return (e.next = 4), this.getLocation();
                        case 4:
                          (r = e.sent),
                            (t.latitude = r.latitude),
                            (t.longitude = r.longitude);
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
                          throw new u.default("用户未授权位置服务", -1003);
                        case 16:
                          throw new u.default("GPS信号弱，请稍后再试", -1002);
                        case 17:
                          return e.abrupt("return", t);
                        case 18:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  this,
                  [[0, 9]]
                );
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })(),
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
                          return (e.next = 2), this.requestAPI.getLocation();
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
      ]),
      i
    );
  })();
exports.default = i;
