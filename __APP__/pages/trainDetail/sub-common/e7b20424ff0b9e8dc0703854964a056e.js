!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [55490],
    {
      33410: function (e, i, t) {
        var c = t(90129),
          a = t(71515),
          n = (t(92954), t(79910)),
          o = t(34229),
          r = t(52500),
          s = t(79792),
          l = t(31952),
          d = t(33432),
          u = t(48813);
        i.Z = r.default.memo(function (e) {
          var i = e.show,
            t = e.productInfo,
            m = e.confirm,
            p = void 0 === m ? function () {} : m,
            b = e.ubtTrace,
            f = void 0 === b ? function () {} : b,
            w = e.expTrace,
            N = e.clickTrace,
            Z = e.className,
            h = void 0 === Z ? "" : Z,
            v = e.tagName,
            x = void 0 === v ? "" : v,
            y = (0, r.useState)(!1),
            T = (0, c.Z)(y, 2),
            g = T[0],
            V = T[1];
          if (
            ((0, r.useEffect)(
              function () {
                if (i && !n.Z.isEmptyObject(t)) {
                  var e = t.productId;
                  w &&
                    f(w.keyName, {
                      exposureType: "normal",
                      bizKey: w.bizKey,
                      productId: e,
                    });
                }
              },
              [i, t]
            ),
            !i || n.Z.isEmptyObject(t))
          )
            return null;
          var k = t.icon,
            I = t.title,
            z = t.subTitle,
            A = t.subTitleDetails,
            B = void 0 === A ? [] : A,
            X = t.buttonName,
            K = t.priceTag;
          return (0, u.BX)(a.View, {
            className: "train-new-force-bind-box "
              .concat(s.default.isTieyou ? "ty" : "zx", " ")
              .concat(h),
            children: [
              x && (0, u.tZ)(d.Z, { tagName1: x }),
              (0, u.BX)(a.View, {
                className: "force-bind-box-container",
                children: [
                  (0, u.tZ)(a.Image, { src: k, className: "icon-logo" }),
                  (0, u.BX)(a.View, {
                    className: "cont",
                    children: [
                      (0, u.tZ)(a.View, { className: "tit", children: I }),
                      z &&
                        (0, u.BX)(a.View, {
                          className: "sub-tit",
                          children: [
                            (0, u.tZ)(o.ZtRichText, {
                              space: "nbsp",
                              nodes: n.Z.convertAppTextToHtmlStr(z),
                            }),
                            (null == B ? void 0 : B.length) > 0 &&
                              (0, u.tZ)(a.View, {
                                className: "".concat(
                                  g ? "arrow-active" : "arrow",
                                  " ifont-open iconfont"
                                ),
                                id: "AADc",
                                onClick: function () {
                                  V(!g);
                                },
                              }),
                          ],
                        }),
                    ],
                  }),
                  (0, u.BX)(a.View, {
                    className: "right-area",
                    children: [
                      K &&
                        (0, u.tZ)(a.View, {
                          className: "origin-price-tag",
                          children: K,
                        }),
                      (0, u.tZ)(a.View, {
                        className: "btn-drawer bd-1rpx",
                        id: "AADd",
                        onClick: function () {
                          var e = t.productId;
                          N && f(N.keyName, { bizKey: N.bizKey, productId: e }),
                            p();
                        },
                        children: X,
                      }),
                    ],
                  }),
                ],
              }),
              g &&
                (0, u.tZ)(l.Z, {
                  tipList: B,
                  className: "train-force-bind-box-tip-list",
                }),
            ],
          });
        });
      },
    },
  ]);
})();
