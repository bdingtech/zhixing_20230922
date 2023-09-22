!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [64540],
    {
      57885: function (e, n, t) {
        var c = t(71515),
          i = (t(92954), t(79910)),
          s = t(34229),
          a = (t(52500), t(48813));
        n.Z = function (e) {
          var n = e.onClose,
            t = e.onCancel,
            o = e.onConfirm,
            l = e.placeOrderRetainJsonV1,
            r = e.visible,
            m = void 0 === r || r,
            d = JSON.parse(l),
            p = d.subTitle,
            h = d.options,
            w = void 0 === h ? [] : h,
            u = d.confirmButtonText,
            N = d.cancelButtonText,
            Z = d.backgroundImg,
            V = d.titleImg,
            b = d.desc;
          return (0, a.tZ)(s.ZtActivityPop, {
            show: m,
            onClose: n,
            onWrapClose: n,
            isShowClose: !1,
            animation: "comeup",
            className: "train-shevels-retainv1-pop",
            children: (0, a.BX)(c.View, {
              className: "train-shevels-retainv1",
              children: [
                (0, a.tZ)(c.View, {
                  children: (0, a.tZ)(c.Image, {
                    className: "background-img",
                    src: Z,
                  }),
                }),
                (0, a.BX)(c.View, {
                  className: "content",
                  children: [
                    (0, a.tZ)(c.View, {
                      children: (0, a.tZ)(c.Image, {
                        className: "title-img",
                        src: V,
                      }),
                    }),
                    (0, a.BX)(c.View, {
                      className: "desc-content",
                      children: [
                        (0, a.tZ)(c.View, {
                          className: "sub-title",
                          children: p,
                        }),
                        w.length > 0 &&
                          w.map(function (e, n) {
                            return (0,
                            a.BX)(c.View, { className: "options", children: [(0, a.tZ)(c.Image, { className: "option-icon", src: e.icon }), (0, a.tZ)(s.ZtRichText, { space: "nbsp", nodes: i.Z.convertAppTextToHtmlStr(e.desc) })] }, "".concat(n, "_options"));
                          }),
                      ],
                    }),
                  ],
                }),
                b && (0, a.tZ)(c.View, { className: "tips-desc", children: b }),
                (0, a.BX)(c.View, {
                  className: "button-content",
                  children: [
                    (0, a.tZ)(c.View, {
                      className: "btn cancel",
                      id: "AJAN",
                      onClick: t,
                      children: N,
                    }),
                    (0, a.tZ)(c.View, {
                      className: "btn confirm",
                      id: "AJAO",
                      onClick: o,
                      children: u,
                    }),
                  ],
                }),
              ],
            }),
          });
        };
      },
    },
  ]);
})();
