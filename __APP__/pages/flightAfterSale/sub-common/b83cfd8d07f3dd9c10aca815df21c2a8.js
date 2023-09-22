!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [74278],
    {
      70120: function (e, t, i) {
        i.d(t, {
          F: function () {
            return u;
          },
          v: function () {
            return m;
          },
        }),
          i(52500);
        var n = i(71515),
          c = i(34229),
          l = i(49120),
          r = i(25949),
          s = i.n(r),
          a = i(48813),
          o = function (e) {
            var t = e.priceDetail;
            return (0, a.tZ)(n.View, {
              className: "flt-price-detail-bd",
              children: t.details.map(function (e, t) {
                return (0, a.BX)(
                  n.View,
                  {
                    className: "col",
                    children: [
                      (0, a.tZ)(n.View, {
                        className: "tit flex-align-items-center",
                        children: e.title,
                      }),
                      e.items &&
                        e.items.map(function (e) {
                          return (0,
                          a.tZ)(a.HY, { children: (0, a.BX)(n.View, { className: "lst flex-align-items-center", children: [(0, a.BX)(n.View, { className: "flex-1 flex-align-items-center", children: [(0, a.tZ)(c.ZtRichText, { nodes: e.title, space: "nbsp", className: "price-tit" }), e.icon && (0, a.tZ)(n.Image, { className: "price-icon", src: e.icon, mode: "heightFix" })] }), (0, a.BX)(n.Text, { className: s()({ "color-red": 2 == e.style || 3 == e.style }), children: ["￥" + e.price, 1 !== e.style && 2 !== e.style && (0, a.tZ)(n.Text, { children: "X " + e.count + e.unit })] })] }) });
                        }),
                    ],
                  },
                  t
                );
              }),
            });
          },
          m = function (e) {
            var t = e.title;
            return {
              title: t,
              price: e.totalPrice,
              details: [{ title: t, items: e.priceDetails }],
            };
          },
          u = function (e) {
            var t = e.priceDetail,
              i = e.className,
              n = e.beforeClose;
            (0, l.getCurrentPage)().showCommonDrawer({
              hideTitle: !0,
              hideClose: !0,
              content: function () {
                return (0, a.tZ)(o, { priceDetail: t });
              },
              className: i,
              beforeClose: n,
            });
          };
      },
    },
  ]);
})();
