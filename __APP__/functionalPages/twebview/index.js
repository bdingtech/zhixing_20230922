!(function () {
  "use strict";
  require("../sub-vendors.js"),
    require("../sub-common/efd0f73c48edfb2f4cf806204cb23544.js"),
    require("../sub-common/e006cce71bea1c38395fdd39436a77c2.js"),
    require("../sub-common/d89ce578031072031f3fc29a11a827dc.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [39079],
      {
        20497: function (e, n, r) {
          var u,
            c = r(32180),
            o = r(57042),
            t = r(24460),
            a = r(21867),
            s = r(86066),
            f = r(52500),
            i = (r(92954), r(48792)),
            p = r.n(i),
            b = r(81957),
            d = r(26799),
            g =
              (0, b.h)()(
                (u =
                  p()(d.Z)(
                    (u = (function (e) {
                      (0, a.Z)(r, e);
                      var n = (0, s.Z)(r);
                      function r() {
                        return (0, o.Z)(this, r), n.apply(this, arguments);
                      }
                      return (
                        (0, t.Z)(r, [
                          {
                            key: "onShareAppMessage",
                            value: function () {
                              return d.Z.onShareAppMessage();
                            },
                          },
                          {
                            key: "render",
                            value: function () {
                              return d.Z.render();
                            },
                          },
                        ]),
                        r
                      );
                    })(f.default.Component))
                  ) || u)
              ) || u;
          (g.enableShareAppMessage = !0),
            Page(
              (0, c.createPageConfig)(
                g,
                "functionalPages/twebview/index",
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
          })(20497);
        }),
          e.O();
      },
    ]);
})();
