!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [53647],
    {
      72012: function (e, t, n) {
        var i = n(90129),
          a = n(52500),
          c = n(71515),
          o = n(79910),
          l = n(83924),
          r = n(16832),
          d = n(48813);
        t.Z = a.default.memo(function (e) {
          var t = e.tempKey,
            n = e.ticket,
            u = e.checkedTemplate,
            m = e.shareQRCodeImageUrl,
            s = e.onCanCel,
            v = e.isShowFlipButton,
            g = e.ubtTrace,
            I = e.pageId,
            h = e.coverInfoList,
            f = void 0 === h ? [] : h,
            p = e.handleGetPaidCoverInfo,
            Z = e.defaultTempKey,
            b = e.clickUbtKey,
            C = void 0 === b ? "" : b,
            T = e.PopupType,
            k = (0, a.useState)(0),
            w = (0, i.Z)(k, 2),
            N = w[0],
            y = w[1],
            V = (0, a.useState)(!1),
            B = (0, i.Z)(V, 2),
            K = B[0],
            P = B[1],
            x = (0, a.useState)(null),
            G = (0, i.Z)(x, 2),
            S = G[0],
            X = G[1],
            A = function (e) {
              if (e) {
                var t = {
                  coverId: e.coverId,
                  firstImg: e.firstImg,
                  secondImg: e.secondImg,
                  thirdImg: e.thirdImg,
                  bgImg: e.bgImg,
                  thumbnail: e.thumbnail,
                  adImg: e.adImg,
                  coverName: e.coverName,
                };
                p(t), X(t);
              } else p(null), X(null);
            };
          if (
            ((0, a.useEffect)(
              function () {
                if (f.length > 0 && n) {
                  var e = n.trainNum,
                    t = void 0 === e ? "" : e,
                    i = n.orderId,
                    a = void 0 === i ? "" : i,
                    c = n.ticketLongNum,
                    l = void 0 === c ? "" : c,
                    d = o.Z.getIsGDCTrain(t) ? r.a8.GDC : r.a8.KTZ;
                  d = u || d;
                  var m = f.findIndex(function (e) {
                    return 1 === e.source;
                  });
                  if (m > -1) y(m), P(!0), A(f[m]);
                  else {
                    var s = f.length;
                    y(s + 1), P(!1), p(null);
                  }
                  if (C) {
                    var v,
                      h = {
                        PageId: I,
                        orderid: a,
                        CardType: ""
                          .concat(r.ZZ[d])
                          .concat(
                            m > -1
                              ? null === (v = f[m]) || void 0 === v
                                ? void 0
                                : v.coverName
                              : "默认"
                          ),
                        TicketId: l,
                      };
                    T && (h.PopupType = T), g(C, h);
                  }
                }
              },
              [f, n]
            ),
            !t || !n)
          )
            return null;
          var D = n.trainNum,
            U = void 0 === D ? "" : D,
            L = n.orderId,
            F = void 0 === L ? "" : L,
            J = n.ticketLongNum,
            Q = void 0 === J ? "" : J,
            R = o.Z.getIsGDCTrain(U) ? r.a8.GDC : r.a8.KTZ;
          R = u || R;
          var _ = function (e) {
            var t;
            C &&
              g(C, {
                PageId: I,
                orderid: F,
                CardType: ""
                  .concat(r.ZZ[R])
                  .concat(
                    e < f.length
                      ? null === (t = f[e]) || void 0 === t
                        ? void 0
                        : t.coverName
                      : "默认"
                  ),
                TicketId: Q,
              }),
              y(e),
              e < f.length ? (P(!0), A(f[e])) : (P(!1), A(null));
          };
          return (0, d.BX)(c.View, {
            className: "share-collection-ticket-tab-view",
            children: [
              (0, d.tZ)(c.View, {
                className: "single-content",
                children: (0, d.tZ)(l.Z, {
                  tempKey: t,
                  ticket: n,
                  isPaidTemplate: K,
                  checkedTemplate: u || R,
                  shareQRCodeImageUrl: m,
                  onCanCel: s,
                  isShowFlipButton: v,
                  ubtTrace: g,
                  pageId: I,
                  paidTicketCoverInfo: S,
                }),
              }),
              (0, d.BX)(c.View, {
                className: "tab-content flex flex-center",
                children: [
                  f.length > 0 &&
                    f.map(function (e, t) {
                      return (0, d.BX)(
                        c.View,
                        {
                          className: "tab-item ".concat(
                            N === t ? "selected" : ""
                          ),
                          id: "AACW",
                          onClick: function () {
                            return _(t);
                          },
                          children: [
                            (0, d.tZ)(c.Image, {
                              webp: !0,
                              src: e.miniThumbnail,
                              className: "tab-img",
                            }),
                            (0, d.tZ)(c.View, { children: e.coverName }),
                          ],
                        },
                        "ticket_cover_".concat(t)
                      );
                    }),
                  (0, d.BX)(c.View, {
                    className: "tab-item ".concat(
                      N === (null == f ? void 0 : f.length) + 1 ||
                        0 == (null == f ? void 0 : f.length)
                        ? "selected"
                        : ""
                    ),
                    id: "AACX",
                    onClick: function () {
                      return _((null == f ? void 0 : f.length) + 1);
                    },
                    children: [
                      (0, d.tZ)(c.Image, {
                        webp: !0,
                        src: r.lU[Z],
                        className: "tab-img",
                      }),
                      (0, d.tZ)(c.View, { children: "默认" }),
                    ],
                  }),
                ],
              }),
            ],
          });
        });
      },
    },
  ]);
})();
