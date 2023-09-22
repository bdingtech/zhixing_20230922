!(function () {
  "use strict";
  require("../sub-vendors.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [65517],
      {
        33524: function (e, n, r) {
          var t,
            o = r(32180),
            a = r(57042),
            i = r(24460),
            u = r(81876),
            c = r(21867),
            l = r(86066),
            s = r(45023),
            d = r(52500),
            g = r(92954),
            p = r.n(g),
            f = r(71515),
            v = r(39509),
            h = r(79792),
            y = r(81957),
            C = r(48813),
            Z =
              (0, y.h)()(
                (t = (function (e) {
                  (0, c.Z)(r, e);
                  var n = (0, l.Z)(r);
                  function r() {
                    var e;
                    (0, a.Z)(this, r);
                    for (
                      var t = arguments.length, o = new Array(t), i = 0;
                      i < t;
                      i++
                    )
                      o[i] = arguments[i];
                    return (
                      (e = n.call.apply(n, [this].concat(o))),
                      (0, s.Z)((0, u.Z)(e), "pageId", "10650060349"),
                      e
                    );
                  }
                  return (
                    (0, i.Z)(r, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          console.log("h5打开小程序中转页面");
                          var e = "";
                          if (h.default.isAlipay) {
                            var n,
                              r = (
                                (null === (n = (0, g.getLaunchOptionsSync)()) ||
                                void 0 === n
                                  ? void 0
                                  : n.query) || {}
                              ).qrCode;
                            console.log("qrCode=", r), (e = r);
                          } else {
                            var t = (
                              (0, g.getCurrentInstance)().router &&
                              (0, g.getCurrentInstance)().router.params
                            ).q;
                            e = decodeURIComponent(void 0 === t ? "" : t);
                          }
                          if (!e) return this.redirectToPage();
                          var o = (
                            new v.Z(e.split("?")[1]) ||
                            "url=%2Fpages%2Ftrain%2Findex%2Findex"
                          ).get("url");
                          try {
                            o = decodeURIComponent(o);
                          } catch (e) {
                            console.log(e);
                          }
                          this.redirectToPage(o);
                        },
                      },
                      {
                        key: "redirectToPage",
                        value: function () {
                          var e =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : "/pages/home/index";
                          console.log("跳转url", e), p().reLaunch({ url: e });
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          return (0, C.tZ)(f.View, {});
                        },
                      },
                    ]),
                    r
                  );
                })(d.default.Component))
              ) || t;
          Page(
            (0, o.createPageConfig)(
              Z,
              "functionalPages/transit/index",
              { root: { cn: [] } },
              {} || {}
            )
          );
        },
      },
      function (e) {
        e.O(0, [19559, 11216, 68592], function () {
          return (function (n) {
            return e((e.s = n));
          })(33524);
        }),
          e.O();
      },
    ]);
})();
