!(function () {
  "use strict";
  require("../sub-vendors.js"),
    require("../sub-common/efd0f73c48edfb2f4cf806204cb23544.js"),
    require("../sub-common/e006cce71bea1c38395fdd39436a77c2.js"),
    require("../sub-common/d89ce578031072031f3fc29a11a827dc.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [69350],
      {
        42270: function (e, n, r) {
          var c,
            a = r(32180),
            u = r(57042),
            o = r(24460),
            t = r(81876),
            s = r(21867),
            i = r(86066),
            f = r(45023),
            p = r(52500),
            d = (r(92954), r(48792)),
            b = r.n(d),
            l = r(81957),
            g = r(26799),
            v =
              (0, l.h)()(
                (c =
                  b()(g.Z)(
                    (c = (function (e) {
                      (0, s.Z)(r, e);
                      var n = (0, i.Z)(r);
                      function r() {
                        var e;
                        (0, u.Z)(this, r);
                        for (
                          var c = arguments.length, a = new Array(c), o = 0;
                          o < c;
                          o++
                        )
                          a[o] = arguments[o];
                        return (
                          (e = n.call.apply(n, [this].concat(a))),
                          (0, f.Z)((0, t.Z)(e), "_middlePageType", "webview"),
                          e
                        );
                      }
                      return (
                        (0, o.Z)(r, [
                          {
                            key: "onShareAppMessage",
                            value: function () {
                              return g.Z.onShareAppMessage();
                            },
                          },
                          {
                            key: "render",
                            value: function () {
                              return g.Z.render();
                            },
                          },
                        ]),
                        r
                      );
                    })(p.default.Component))
                  ) || c)
              ) || c;
          (v.enableShareAppMessage = !0),
            Page(
              (0, a.createPageConfig)(
                v,
                "functionalPages/twebviewV2/index4",
                { root: { cn: [] } },
                {} || {}
              )
            );
        },
      },
      function (e) {
        e.O(0, [36793, 3322, 36332, 95854, 19559, 11216, 68592], function () {
          return (function (n) {
            return e((e.s = n));
          })(42270);
        }),
          e.O();
      },
    ]);
})();
