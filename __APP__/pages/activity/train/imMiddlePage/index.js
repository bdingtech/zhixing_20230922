!(function () {
  "use strict";
  require("../sub-vendors.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [85791],
      {
        52560: function (e, n, r) {
          var t,
            o = r(32180),
            u = r(57042),
            c = r(24460),
            a = r(21867),
            i = r(86066),
            s = r(79301),
            f = r(95308),
            p = r(52500),
            d = (r(92954), r(71515)),
            Z = r(81957),
            l = r(48792),
            v = r.n(l),
            w = r(10741),
            g = r(17917),
            h = r(48813),
            m = {
              onLoad: function (e) {
                return (0, f.Z)(
                  (0, s.Z)().mark(function n() {
                    var r, t;
                    return (0, s.Z)().wrap(function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (
                              (r = e.orderNumber),
                              (n.next = 3),
                              (0, w.LJ5)({ orderNumber: r, fromPage: 0 })
                            );
                          case 3:
                            1 == (t = n.sent).resultCode
                              ? (0, g.e)(t.ChatScenceUrl, !0)
                              : console.error("获取跳转链接出错", t);
                          case 5:
                          case "end":
                            return n.stop();
                        }
                    }, n);
                  })
                )();
              },
            },
            b =
              (0, Z.h)()(
                (t =
                  v()(m)(
                    (t = (function (e) {
                      (0, a.Z)(r, e);
                      var n = (0, i.Z)(r);
                      function r() {
                        return (0, u.Z)(this, r), n.apply(this, arguments);
                      }
                      return (
                        (0, c.Z)(r, [
                          {
                            key: "render",
                            value: function () {
                              return (0, h.tZ)(d.View, {});
                            },
                          },
                        ]),
                        r
                      );
                    })(p.default.Component))
                  ) || t)
              ) || t;
          Page(
            (0, o.createPageConfig)(
              b,
              "pages/activity/train/imMiddlePage/index",
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
          })(52560);
        }),
          e.O();
      },
    ]);
})();
