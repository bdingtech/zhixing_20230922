!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [20324],
    {
      61957: function (e, t, r) {
        var c = r(22276),
          n = r(90129),
          a = r(52500),
          i = r(71515),
          s = r(80254),
          u = r(94190),
          l = r(48813),
          o = [0, 1, 2, 5, 8, 7, 6, 3];
        t.Z = a.default.memo(function (e) {
          var t = e.orderNumber,
            r = void 0 === t ? "" : t,
            d = e.payRemindInfo,
            m = void 0 === d ? {} : d,
            p = e.noFromSmartRSPage,
            f = void 0 !== p && p,
            w = e.closeModal,
            Z = void 0 === w ? function () {} : w,
            h = (0, a.useState)(!1),
            v = (0, n.Z)(h, 2),
            N = v[0],
            V = v[1],
            B = (0, a.useState)(!1),
            S = (0, n.Z)(B, 2),
            b = S[0],
            g = S[1],
            T = (0, a.useState)([]),
            k = (0, n.Z)(T, 2),
            x = k[0],
            X = k[1],
            y = (0, a.useState)(0),
            F = (0, n.Z)(y, 2),
            I = F[0],
            P = F[1],
            R = (null == m ? void 0 : m.couponPrice) || 0;
          (0, a.useEffect)(function () {
            var e;
            if (
              (null == m || null === (e = m.rotaryTables) || void 0 === e
                ? void 0
                : e.length) > 0
            ) {
              var t = (0, c.Z)(m.rotaryTables);
              t.splice(4, 0, {});
              var n = t.findIndex(function (e) {
                return e.selected;
              });
              if ((n >= 0 && P(n), !f && r)) {
                var a = u._w.get() || {};
                (a[r] = r), u._w.set(a);
              }
              V(!0), X(t);
            }
          }, []);
          var A = (0, a.useState)(0),
            C = (0, n.Z)(A, 2),
            E = C[0],
            J = C[1],
            U = (0, a.useState)(0),
            _ = (0, n.Z)(U, 2),
            M = _[0],
            j = _[1],
            q = (0, a.useState)(0),
            z = (0, n.Z)(q, 2),
            D = z[0],
            G = z[1],
            H = (0, a.useRef)();
          return (
            (H.current = M),
            (0, s.Z)(
              function () {
                E === o[o.length - 1]
                  ? (J(o[0]), G(0), j(M + 1))
                  : (G(D + 1), J(o[D]), M + 1 == 3 && E == I && j(M + 1));
              },
              N && M < 3 ? 100 : null
            ),
            (0, a.useEffect)(
              function () {
                if (3 === H.current && N) {
                  var e = setTimeout(function () {
                    g(!0), V(!1);
                  }, 500);
                  return function () {
                    return clearTimeout(e);
                  };
                }
              },
              [H.current, N]
            ),
            (0, l.BX)(i.View, {
              className: "smart-rs-luck-draw-popup",
              id: "AFBT",
              onClick: Z,
              children: [
                N &&
                  (0, l.BX)(i.View, {
                    className: "rs-popup draw-popup",
                    children: [
                      (0, l.BX)(i.View, {
                        className: "draw-hd",
                        children: [
                          "恭喜您获得",
                          (0, l.tZ)(i.Text, {
                            className: "num",
                            children: "1次",
                          }),
                          "抽奖机会",
                        ],
                      }),
                      (0, l.tZ)(i.View, {
                        className: "draw-bd",
                        children: x.map(function (e, t) {
                          return (0,
                          l.tZ)(i.Block, { children: 4 === t ? (0, l.tZ)(i.View, { className: "draw-btn", children: "开奖中" }) : (0, l.BX)(i.View, { className: "item ".concat(M < 3 ? (E === t ? "cur" : "") : e.selected ? "cur" : ""), children: [(0, l.tZ)(i.Image, { src: e.imgUrl, className: "img" }), (0, l.tZ)(i.View, { className: "txt", children: e.couponPrice })] }) }, t);
                        }),
                      }),
                    ],
                  }),
                b &&
                  (0, l.BX)(i.View, {
                    className: "rs-popup result-popup",
                    children: [
                      (0, l.BX)(i.View, {
                        className: "price",
                        children: [
                          (0, l.tZ)(i.Text, {
                            className: "unit",
                            children: "￥",
                          }),
                          R,
                        ],
                      }),
                      (0, l.tZ)(i.View, {
                        className: "receive-btn",
                        id: "AFBU",
                        onClick: Z,
                      }),
                    ],
                  }),
              ],
            })
          );
        });
      },
    },
  ]);
})();
