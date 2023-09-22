!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [63511],
    {
      2481: function (e, n, t) {
        var l = t(90129),
          a = t(52500),
          s = t(71515),
          c = t(34229),
          i = t(79792),
          o = t(9062),
          r = t(48813),
          u = i.default.isTieyou;
        n.Z = a.default.memo(function (e) {
          var n,
            t,
            i,
            w,
            d = e.show,
            h = e.bannerDrawInfo,
            m = e.onClose,
            p = (0, a.useState)(!1),
            N = (0, l.Z)(p, 2),
            Z = N[0],
            f = N[1],
            V = function () {
              null == m || m(!1);
            };
          return (0, r.tZ)(c.ZtDrawer, {
            show: d,
            onClose: V,
            onWrapClose: V,
            className: "advantage-drawer-container "
              .concat(
                null != h &&
                  null !== (n = h.newGrowth) &&
                  void 0 !== n &&
                  n.coupons
                  ? "pop-list-newguest"
                  : "normal-drawer-container",
                " "
              )
              .concat(u ? "ty" : "zx"),
            children: (0, r.tZ)(s.View, {
              className: "pop-list-newguest-bd",
              children:
                null != h &&
                null !== (t = h.newGrowth) &&
                void 0 !== t &&
                t.coupons
                  ? (0, r.BX)(s.View, {
                      className: "pop-list-newguest-rule",
                      children: [
                        (0, r.tZ)(s.View, {
                          className: "newguest-bd",
                          children:
                            null == h ||
                            null === (i = h.newGrowth) ||
                            void 0 === i
                              ? void 0
                              : i.coupons.map(function (e) {
                                  return (0,
                                  r.BX)(s.View, { className: "item ".concat(0 === e.status ? "cur" : ""), children: [(0, r.BX)(s.View, { className: "coupon", children: [(0, r.tZ)(s.View, { className: "price", children: e.price }), (0, r.tZ)(s.View, { className: "txt", children: e.title })] }), (0, r.tZ)(s.Text, { className: o.vL[e.status] }), (0, r.tZ)(s.View, { className: "tit", children: e.remark })] }, "index");
                                }),
                        }),
                        (0, r.BX)(s.View, {
                          className: "rule-txt",
                          children: [
                            (0, r.tZ)(s.View, {
                              className: "rule-height ".concat(Z ? "auto" : ""),
                              children: (0, r.tZ)(c.ZtRichText, {
                                className: "txt",
                                nodes:
                                  null == h ||
                                  null === (w = h.newGrowth) ||
                                  void 0 === w
                                    ? void 0
                                    : w.rules,
                              }),
                            }),
                            Z
                              ? null
                              : (0, r.BX)(s.View, {
                                  className: "more",
                                  id: "AACh",
                                  onClick: function () {
                                    return f(!0);
                                  },
                                  children: [
                                    "更多规则",
                                    (0, r.tZ)(s.Text, {
                                      className: "ifont-arr iconfont",
                                    }),
                                  ],
                                }),
                          ],
                        }),
                      ],
                    })
                  : null,
            }),
          });
        });
      },
    },
  ]);
})();
