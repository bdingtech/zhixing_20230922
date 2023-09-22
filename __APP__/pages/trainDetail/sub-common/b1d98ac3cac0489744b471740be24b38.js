!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [52306],
    {
      83924: function (e, t, c) {
        var i = c(79301),
          a = c(95308),
          n = c(90129),
          r = c(52500),
          l = c(8271),
          s = c.n(l),
          o = c(71515),
          d = c(79792),
          m = c(94190),
          u = c(13025),
          f = c(16832),
          p = c(80335),
          g = c(48813),
          h = d.default.isTieyou
            ? "https://images3.c-ctrip.com/ztrip/train_xie/2022-05/fx_hz_ty.png"
            : "https://images3.c-ctrip.com/ztrip/train_bin/22-07/wdpj/img_yz_hcp@3x.png";
        t.Z = r.default.memo(function (e) {
          var t = e.tempKey,
            c = e.ticket,
            l = e.checkedTemplate,
            v = e.shareQRCodeImageUrl,
            Z = e.isPaidTemplate,
            x = e.onCanCel,
            w = e.isShowFlipButton,
            N = e.ubtTrace,
            k = e.pageId,
            I = e.paidTicketCoverInfo,
            T = (0, r.useState)("GDC" === t),
            V = (0, n.Z)(T, 2),
            b = V[0],
            _ = V[1],
            B = (0, r.useState)(!1),
            y = (0, n.Z)(B, 2),
            C = y[0],
            X = y[1],
            z = (0, r.useState)(!1),
            D = (0, n.Z)(z, 2),
            A = D[0],
            S = D[1],
            G = (0, r.useState)(!1),
            M = (0, n.Z)(G, 2),
            R = M[0],
            F = M[1],
            H = (0, r.useState)(!(null == c || !c.isGrantReward)),
            P = (0, n.Z)(H, 2),
            Y = P[0],
            j = P[1];
          (0, r.useEffect)(
            function () {
              if ((l && _(l.includes("GDC")), c)) {
                var e = c.canBeFlip,
                  t = void 0 !== e && e,
                  i = c.orderId,
                  a = void 0 === i ? "" : i,
                  n = c.ticketLongNum;
                t &&
                  w &&
                  N("TZWBuyOrderDetail_MemoraTicket_Turnover_exposure", {
                    PageId: k,
                    orderid: a,
                    TicketId: void 0 === n ? "" : n,
                    CardType: ""
                      .concat(f.ZZ[l])
                      .concat(I ? (null == I ? void 0 : I.coverName) : "默认"),
                    clickType: t ? "1" : "2",
                  });
              }
            },
            [l, null == c ? void 0 : c.canBeFlip, w, I]
          );
          if (
            ((0, r.useEffect)(
              function () {
                C &&
                  setTimeout(function () {
                    X(!1),
                      S(!1),
                      j(!(null == c || !c.isGrantReward)),
                      F(!0),
                      setTimeout(function () {
                        F(!1);
                      }, 500);
                  }, 0);
              },
              [null == c ? void 0 : c.passengerName]
            ),
            !t || !c)
          )
            return null;
          var K = c.departure,
            E = void 0 === K ? "" : K,
            J = c.arrival,
            L = void 0 === J ? "" : J,
            O = c.departureTime,
            Q = void 0 === O ? "" : O,
            W = c.arrivalTime,
            q = void 0 === W ? "" : W,
            U = c.ticketPrice,
            $ = void 0 === U ? 0 : U,
            ee = c.trainNum,
            te = void 0 === ee ? "" : ee,
            ce = c.carriageNum,
            ie = void 0 === ce ? "" : ce,
            ae = c.seatNum,
            ne = void 0 === ae ? "" : ae,
            re = c.seatType,
            le = void 0 === re ? "" : re,
            se = c.identificationNum,
            oe = void 0 === se ? "" : se,
            de = c._flipResult,
            me = void 0 === de ? {} : de,
            ue = c.passengerName,
            fe = void 0 === ue ? "" : ue,
            pe = c.ticketLongNum,
            ge = void 0 === pe ? "" : pe,
            he = c.canBeFlip,
            ve = void 0 !== he && he,
            Ze = c.isGrantReward,
            xe = void 0 !== Ze && Ze,
            we = c.orderId,
            Ne = void 0 === we ? "" : we,
            ke = ""
              .concat(s()(Q).format("YYYY年M月D日"), " ")
              .concat(s()(Q).format("HH:mm"), " 开"),
            Ie = ""
              .concat(s()(q).format("M月D日"), " ")
              .concat(s()(q).format("HH:mm"), " 到"),
            Te = "".concat(ie).concat(ne, " ").concat(le),
            Ve = f.I2.find(function (e) {
              return e.type === (l || t);
            }).bg,
            be = b
              ? "https://images3.c-ctrip.com/ztrip/train_xie/2022-11/img_fz_l1.png"
              : "https://images3.c-ctrip.com/ztrip/train_xie/2022-11/img_fz_h1.png",
            _e = Z ? (null == I ? void 0 : I.firstImg) : "",
            Be = Z ? (null == I ? void 0 : I.secondImg) : "",
            ye = Z ? (null == I ? void 0 : I.thirdImg) : "",
            Ce = Z ? (null == I ? void 0 : I.adImg) : "",
            Xe = ge + fe + te + Z ? (null == I ? void 0 : I.coverId) : "",
            ze = m.ZK.getAttr(Xe);
          Ce && (ze ? (Ce = "") : m.ZK.setAttr(Xe, !0));
          var De = (function () {
              var e = (0, a.Z)(
                (0, i.Z)().mark(function e() {
                  var t, c;
                  return (0, i.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (t = {
                                ticketNumber: ge,
                                coverId: I ? I.coverId : 0,
                              }),
                              (e.prev = 1),
                              (e.next = 4),
                              (0, u.D0)(t)
                            );
                          case 4:
                            if (
                              (c = e.sent) &&
                              1 === c.resultCode &&
                              c.resultMessage
                            ) {
                              e.next = 9;
                              break;
                            }
                            return e.abrupt("return", null);
                          case 9:
                            return e.abrupt("return", c.resultMessage);
                          case 10:
                            e.next = 16;
                            break;
                          case 12:
                            return (
                              (e.prev = 12),
                              (e.t0 = e.catch(1)),
                              console.log(e.t0),
                              e.abrupt("return", null)
                            );
                          case 16:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[1, 12]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            Ae = (function () {
              var e = (0, a.Z)(
                (0, i.Z)().mark(function e() {
                  var t;
                  return (0, i.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (!ve || !w) {
                            e.next = 17;
                            break;
                          }
                          if (C) {
                            e.next = 15;
                            break;
                          }
                          if (xe) {
                            e.next = 9;
                            break;
                          }
                          return (e.next = 5), De(c);
                        case 5:
                          e.sent && (j(!0), X(!C), S(C)), (e.next = 12);
                          break;
                        case 9:
                          j(!0), X(!C), S(C);
                        case 12:
                          N("TZWBuyOrderDetail_MemoraTicket_Turnover_click", {
                            PageId: k,
                            orderid: Ne,
                            TicketId: "".concat(ge),
                            clickType: ve ? "1" : "2",
                            ActivityStatus:
                              (null == me ||
                              null === (t = me.reward) ||
                              void 0 === t
                                ? void 0
                                : t.title) || "",
                            CardType: ""
                              .concat(f.ZZ[l])
                              .concat(I ? I.coverName : "默认"),
                          }),
                            (e.next = 17);
                          break;
                        case 15:
                          X(!C), S(C);
                        case 17:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          return (0, g.BX)(o.View, {
            className: "share-collection-card-filp "
              .concat(C ? "flip" : "", " ")
              .concat(R ? "reset" : ""),
            children: [
              (0, g.BX)(o.View, {
                className: "front share-collection-oldTicket flex flex-center "
                  .concat(ve && !Y ? "swing-ani" : "", " ")
                  .concat(b ? "gdc-padding" : "ktz-padding", " ")
                  .concat(C ? "front-click" : ""),
                id: "AACQ",
                onClick: Ae,
                children: [
                  (0, g.tZ)(o.Image, { className: "bg", src: Ve }),
                  (0, g.BX)(o.View, {
                    className: "content flex flex-column",
                    children: [
                      (0, g.tZ)(o.View, {
                        className: "long-num",
                        children: ge,
                      }),
                      (0, g.BX)(o.View, {
                        className: "trian-info flex",
                        children: [
                          (0, g.BX)(o.View, {
                            className: "from flex flex-column",
                            children: [
                              (0, g.tZ)(o.View, {
                                className: "name",
                                children: E,
                              }),
                              (0, g.tZ)(o.View, {
                                className: "desc",
                                children: "Chu fa zhan",
                              }),
                            ],
                          }),
                          (0, g.BX)(o.View, {
                            class: "trian-num flex flex-column flex-center",
                            children: [
                              (0, g.tZ)(o.View, { children: te }),
                              (0, g.tZ)(o.View, { className: "arrow" }),
                            ],
                          }),
                          (0, g.BX)(o.View, {
                            className: "to flex flex-column",
                            children: [
                              (0, g.tZ)(o.View, {
                                className: "name",
                                children: L,
                              }),
                              (0, g.tZ)(o.View, {
                                className: "desc",
                                children: "Dao Da zhan",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, g.BX)(o.View, {
                        className: "time flex",
                        children: [
                          (0, g.tZ)(o.View, { children: ke }),
                          (0, g.tZ)(o.View, { children: Ie }),
                        ],
                      }),
                      (0, g.BX)(o.View, {
                        className: "detail flex",
                        children: [
                          (0, g.BX)(o.View, {
                            className: "price",
                            children: [
                              (0, g.tZ)(o.Text, {
                                children: "￥".concat($, "元"),
                              }),
                              (0, g.tZ)(o.Text, {
                                className: "tit",
                                children: "网",
                              }),
                            ],
                          }),
                          (0, g.tZ)(o.View, { children: Te }),
                        ],
                      }),
                      (0, g.BX)(o.View, {
                        className: "ident-content flex",
                        children: [
                          (0, g.BX)(o.View, {
                            className: "left flex flex-column",
                            children: [
                              (0, g.tZ)(o.View, {
                                className: "ident",
                                children: "".concat(oe, " ").concat(fe),
                              }),
                              (0, g.BX)(o.View, {
                                class: "tip-box flex flex-column flex-center",
                                children: [
                                  (0, g.tZ)(o.Text, {
                                    children: "扫码查看我的火车票夹",
                                  }),
                                  (0, g.tZ)(o.Text, {
                                    children: "".concat(
                                      d.default.isTieyou ? "铁友" : "智行",
                                      "火车票祝您旅途愉快"
                                    ),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, g.tZ)(o.View, {
                            className: "right",
                            children: (0, g.tZ)(o.Image, {
                              className: "qr-img",
                              src: v,
                            }),
                          }),
                        ],
                      }),
                      (0, g.tZ)(o.Image, { className: "seal-img", src: h }),
                      b &&
                        (0, g.tZ)(o.View, {
                          class: "bottom-tip",
                          children: "ZX2022ZX2022ZX2022ZX2022",
                        }),
                    ],
                  }),
                  !!ve &&
                    !Y &&
                    (0, g.tZ)(o.Image, {
                      className: "guide-flip",
                      src: "https://images3.c-ctrip.com/ztrip/train_xie/2023/04/img_djyjx.png",
                    }),
                  !!ve &&
                    w &&
                    (0, g.tZ)(o.Image, {
                      className: "can-flip ".concat(b ? "gdc" : ""),
                      src: be,
                    }),
                  _e &&
                    !Ce &&
                    (0, g.tZ)(o.Image, { className: "paid-top", src: _e }),
                  Be &&
                    !Ce &&
                    (0, g.tZ)(o.Image, { className: "paid-bottom", src: Be }),
                  ye &&
                    (0, g.tZ)(o.Image, {
                      className: "paid-left-bottom",
                      src: ye,
                    }),
                  Ce &&
                    (0, g.tZ)(o.Image, { className: "paid-bottom", src: Ce }),
                ],
              }),
              (0, g.tZ)(o.View, {
                className:
                  "back share-collection-oldTicket flex flex-center ".concat(
                    A ? "front-back-click" : ""
                  ),
                id: "AACR",
                onClick: Ae,
                children: (0, g.tZ)(p.Z, {
                  isGDC: b,
                  ticket: c,
                  firstImg: _e,
                  secondImg: Be,
                  thirdImg: ye,
                  adImg: Ce,
                  onCanCel: x,
                }),
              }),
            ],
          });
        });
      },
    },
  ]);
})();
