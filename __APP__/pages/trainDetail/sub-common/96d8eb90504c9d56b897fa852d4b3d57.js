!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [24903],
    {
      72347: function (e, t, r) {
        r.d(t, {
          E: function () {
            return V;
          },
        });
        var n = r(22276),
          o = r(79301),
          i = r(95308),
          a = r(92954),
          l = r.n(a),
          s = r(52500),
          c = r(71515),
          d = r(34229),
          u = r(79910),
          m = r(25391),
          p = r(93761),
          f = r(79792),
          v = r(10741),
          T = r(8271),
          g = r.n(T),
          h = r(49120),
          b = r(70273),
          N = r(27941),
          y = r(73751),
          Z = r(62564),
          w = r(31952),
          x = r(48813);
        function I(e) {
          l().redirectTo({ url: m.ZP.getTrainDetailUrl(e) });
        }
        function C(e) {
          l().redirectTo({ url: m.ZP.getTrainGrabOrderDetailUrl(e) });
        }
        function S(e) {
          var t = (0, b.j)();
          l().redirectTo({
            url: ""
              .concat(t, "?schemeInfoV1=")
              .concat(
                encodeURIComponent(e),
                "&orderSource=TrainTicketFailCombineSeat"
              ),
          });
        }
        function k() {
          return O.apply(this, arguments);
        }
        function O() {
          return (O = (0, i.Z)(
            (0, o.Z)().mark(function e() {
              var t,
                r,
                n,
                i,
                a,
                l,
                s,
                c = arguments;
              return (0, o.Z)().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (t = c.length > 0 && void 0 !== c[0] ? c[0] : {}),
                          (r = t.orderNumber),
                          (n = t.payCallback),
                          (i = void 0 === n ? function () {} : n),
                          (0, h.showLoading)(),
                          (e.prev = 2),
                          (e.next = 5),
                          (0, v.Ahv)(
                            { orderNumber: r },
                            {
                              extension: [
                                { name: "correctVersion", value: "39" },
                              ],
                            }
                          )
                        );
                      case 5:
                        1 === (a = e.sent).resultCode &&
                          ((l = a.paymentID),
                          (s = f.default.isBaidu ? "checkstand" : "direct"),
                          p.ZP.doPayment({
                            payway: s,
                            orderNumber: r,
                            goodsId: l,
                            title: "火车票订单",
                          }).then(
                            function () {
                              setTimeout(function () {
                                i();
                              }, 200);
                            },
                            function (e) {
                              console.log(e);
                            }
                          )),
                          (e.next = 12);
                        break;
                      case 9:
                        (e.prev = 9), (e.t0 = e.catch(2)), console.log(e.t0);
                      case 12:
                        return (
                          (e.prev = 12), (0, h.hideLoading)(), e.finish(12)
                        );
                      case 15:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[2, 9, 12, 15]]
              );
            })
          )).apply(this, arguments);
        }
        function P() {
          return F.apply(this, arguments);
        }
        function F() {
          return (F = (0, i.Z)(
            (0, o.Z)().mark(function e() {
              var t,
                r,
                n,
                a,
                l,
                s,
                c,
                d,
                u,
                m,
                p,
                T,
                g,
                b,
                N,
                y,
                Z,
                w,
                x,
                C,
                S,
                O,
                F,
                D,
                A = arguments;
              return (0, o.Z)().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          ((t = A.length > 0 && void 0 !== A[0] ? A[0] : {}),
                          (r = t.orderNumber),
                          (n = void 0 === r ? "" : r),
                          (a = t.smartHoldSeatOrderNumber),
                          (l = void 0 === a ? "" : a),
                          (s = t.curPollingKey),
                          (c = void 0 === s ? "" : s),
                          (d = t.curPollingTime),
                          (u = void 0 === d ? 0 : d),
                          (m = t.curTotalPollingTime),
                          (p = void 0 === m ? 10 : m),
                          (T = u),
                          (e.prev = 2),
                          !(T > p))
                        ) {
                          e.next = 6;
                          break;
                        }
                        return (0, h.showToast)("超时"), e.abrupt("return");
                      case 6:
                        return (
                          (g = {
                            orderNumber: n,
                            confirmType: 101,
                            pollingKey: c,
                          }),
                          (e.next = 9),
                          (0, v.xIW)(g)
                        );
                      case 9:
                        if (0 == (b = e.sent).payFlag) {
                          e.next = 13;
                          break;
                        }
                        return (
                          k({
                            orderNumber: b.payOrderNumber,
                            payCallback: function () {
                              return I(l);
                            },
                          }),
                          e.abrupt("return")
                        );
                      case 13:
                        if (-1 != b.resultCode && 2 != b.resultCode) {
                          e.next = 16;
                          break;
                        }
                        return (
                          (0, h.showModal)({
                            title:
                              (null === (N = b.confirmFailToast) || void 0 === N
                                ? void 0
                                : N.title) || "提示",
                            content:
                              (null === (y = b.confirmFailToast) ||
                              void 0 === y ||
                              null === (Z = y.content) ||
                              void 0 === Z
                                ? void 0
                                : Z[0]) || "出票失败",
                            confirmText: "我知道了",
                            confirmColor: f.default.isTieyou
                              ? "#fc6e51"
                              : "#0080FF",
                            success: function (e) {
                              e.confirm && I(l);
                            },
                          }),
                          e.abrupt("return")
                        );
                      case 16:
                        1 === b.resultCode
                          ? I(l)
                          : 3 === b.resultCode
                          ? ((w = b.pollingInfo || {}),
                            (x = w.pollingInterval),
                            (C = void 0 === x ? 1 : x),
                            (S = w.totalPollingTime),
                            (O = void 0 === S ? 10 : S),
                            (F = w.pollingKey),
                            (T += C),
                            (D = setTimeout(
                              (0, i.Z)(
                                (0, o.Z)().mark(function e() {
                                  return (0, o.Z)().wrap(function (e) {
                                    for (;;)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          return (
                                            clearTimeout(D),
                                            (e.next = 3),
                                            P({
                                              orderNumber: n,
                                              smartHoldSeatOrderNumber: l,
                                              curPollingKey: F,
                                              newCurPollingTime: T,
                                              curTotalPollingTime: O,
                                            })
                                          );
                                        case 3:
                                        case "end":
                                          return e.stop();
                                      }
                                  }, e);
                                })
                              ),
                              1e3 * C
                            )))
                          : (0, h.showModal)({
                              title: "提示",
                              content: b.resultMessage || "出票失败",
                              confirmText: "我知道了",
                              confirmColor: f.default.isTieyou
                                ? "#fc6e51"
                                : "#0080FF",
                              success: function (e) {
                                e.confirm && I(l);
                              },
                            }),
                          (e.next = 22);
                        break;
                      case 19:
                        (e.prev = 19), (e.t0 = e.catch(2)), console.log(e.t0);
                      case 22:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[2, 19]]
              );
            })
          )).apply(this, arguments);
        }
        function D() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = e.orderNumber,
            r = void 0 === t ? "" : t,
            n = e.smartHoldSeatOrderNumber,
            o = void 0 === n ? "" : n;
          (0, h.showLoading)(),
            P({ orderNumber: r, smartHoldSeatOrderNumber: o }).finally(
              function () {
                return (0, h.hideLoading)();
              }
            );
        }
        function A(e) {
          var t,
            r,
            n = e.mobile,
            o = e.orderInfo,
            i = e.originTicketInfo,
            a = e.userAuth12306Status,
            l = e.allPas,
            s = {},
            c = (function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                t = e.ticketInfoList,
                r = void 0 === t ? [] : t;
              return r.map(function (e) {
                return {
                  passengerName: e.passengerName,
                  passengerType: e.passengerType,
                  identityType: e.passportType,
                  identityNo: e.idCardNo,
                  passengerFlag: 2,
                  contactMobileNo: e.mobile,
                  expireDate: "",
                };
              });
            })(
              null == o || null === (t = o.orderTicketList) || void 0 === t
                ? void 0
                : t[0]
            );
          (s.contactMobile =
            n ||
            (null === (r = c[0]) || void 0 === r ? void 0 : r.contactMobileNo)),
            (s.bookType = 1001),
            (s.passengerList = o
              ? c
              : l.map(function (e) {
                  return {
                    passengerName: e.pasName
                      ? e.pasName.trim().toUpperCase()
                      : e.CNName.trim().toUpperCase(),
                    passengerType:
                      3 != e.PassengerType
                        ? e.isChild
                          ? "儿童票"
                          : "成人票"
                        : e.convertStu || e.isStudentToAdult
                        ? "成人票"
                        : "学生票",
                    identityType: m.ZP.getCardType(parseInt(e.cardType)),
                    identityNo: e.isInvited
                      ? e.identityNoPass
                      : e.idcard.no.toUpperCase(),
                    passengerFlag: e.isInvited ? 3 : 2,
                    contactMobileNo: e.Mobile,
                    expireDate: e.CardTimeLimit || "",
                  };
                }));
          var d = [
            {
              trainNumber: i.trainNo,
              departStation: i.fromStation,
              arriveStation: i.toStation,
            },
          ];
          return (
            (s.trainInfo = {
              trainNo: i.trainNo,
              seatName: i.seatName,
              fromName: i.fromStation,
              toName: i.toStation,
              fromDate: i.fromDate,
              mainFromTime: i.fromTime,
              mainToTime: i.toTime,
              trainStationInfos: d,
            }),
            (s.nearTrainFlag = 0),
            (s.candidateFlag = 0),
            (s.userAuth12306Status = a || -1),
            (s.trainNoCanCandidate = 0),
            s
          );
        }
        var V = function (e) {
            var t = e.orderNumber,
              r = e.grabOrderInfo,
              n = e.refuseCallback,
              a = void 0 === n ? function () {} : n;
            (0, h.showLoading)(),
              (0, v.bhf)({ orderNumber: t, refuseType: 101 })
                .then(
                  (function () {
                    var e = (0, i.Z)(
                      (0, o.Z)().mark(function e(t) {
                        var n, i, l;
                        return (0, o.Z)().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if ((console.log(t), 1 != t.resultCode)) {
                                    e.next = 18;
                                    break;
                                  }
                                  return (
                                    (n = function () {
                                      var e =
                                        arguments.length > 0 &&
                                        void 0 !== arguments[0]
                                          ? arguments[0]
                                          : {};
                                      return (0, h.showModal)(
                                        e.resultMessage ||
                                          "提交失败，请稍候再试~"
                                      );
                                    }),
                                    (e.prev = 3),
                                    (i = A(r)),
                                    (e.next = 7),
                                    (0, v.EpB)(i)
                                  );
                                case 7:
                                  if (1 === (l = e.sent).resultCode) {
                                    e.next = 11;
                                    break;
                                  }
                                  return n(l), e.abrupt("return");
                                case 11:
                                  C(l.orderNumber), a(), (e.next = 18);
                                  break;
                                case 15:
                                  (e.prev = 15), (e.t0 = e.catch(3)), n();
                                case 18:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          null,
                          [[3, 15]]
                        );
                      })
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })()
                )
                .finally(function () {
                  return (0, h.hideLoading)();
                });
          },
          L = f.default.isTieyou
            ? "https://images3.c-ctrip.com/ztrip/train_xie/2021-12/img_ip_ty.png"
            : "https://images3.c-ctrip.com/ztrip/train_xie/2021-12/img_ip_zx.png";
        t.Z = s.default.memo(function (e) {
          var t = e.visible,
            r = e.orderNumber,
            o = void 0 === r ? "" : r,
            i = e.smartHoldSeatDetail,
            a = e.onClose,
            m = e.onConfirm,
            p = void 0 === m ? function () {} : m,
            v = e.onRefuse,
            T = void 0 === v ? function () {} : v,
            b = e.onTimeup,
            I = void 0 === b ? function () {} : b,
            C = e.ubtTrace,
            k = void 0 === C ? function () {} : C,
            O = e.expKeyName,
            P = void 0 === O ? "" : O,
            F = e.cancelCliKeyName,
            A = void 0 === F ? "" : F,
            H = e.confirmCliKeyName,
            B = void 0 === H ? "" : H,
            M = e.mobile,
            _ = void 0 === M ? "" : M,
            E = e.allPas,
            U = void 0 === E ? [] : E,
            K = e.userAuth12306Status,
            z = e.orderInfo,
            X = l().getCurrentPages(),
            R = X ? X.length : 1,
            J = (0, h.getCurrentPage)().pageId;
          if (
            ((0, s.useEffect)(
              function () {
                var e;
                i &&
                  t &&
                  k(P, {
                    PageId: J,
                    scmType: null == i ? void 0 : i.tripType,
                    OldOrderID: o,
                    NewOrderID:
                      null == i || null === (e = i.holdSeatTrip) || void 0 === e
                        ? void 0
                        : e.smartHoldSeatOrderNumber,
                    ExpoType: 1 == R ? 0 : 1,
                  });
              },
              [i, t]
            ),
            !i)
          )
            return null;
          var W = i.tripType,
            j = void 0 === W ? "train" : W,
            G = i.headInfo,
            Y = i.originTicketInfo,
            q = i.holdSeatTrip,
            Q = i.recommendTrip,
            $ = i.tipList,
            ee = i.travelFlagIconUrl,
            te = G || {},
            re = te.title,
            ne = te.descList,
            oe = void 0 === ne ? [] : ne,
            ie = !["subtrain", "transfer"].includes(j);
          return ie && g()().isAfter(g()(q.orderTimeout))
            ? null
            : (0, x.tZ)(c.View, {
                className: " ".concat(f.default.isTieyou ? "ty" : "zx"),
                children: (0, x.tZ)(d.ZtDrawer, {
                  show: t,
                  className: "smart-hold-seat-detail-pop",
                  drawerStyle: { borderRadius: "32rpx 32rpx 0 0" },
                  isShowClose: !1,
                  children: (0, x.BX)(c.View, {
                    className: "smart-hold-seat-detail-container",
                    children: [
                      (0, x.BX)(c.View, {
                        className: "smart-hold-seat-detail-header-bar",
                        children: [
                          (0, x.tZ)(c.Image, {
                            src: "https://images3.c-ctrip.com/ztrip/train_xie/2021-12/icon_tc_gb.png",
                            className: "close-icon",
                            id: "AABx",
                            onClick: function () {
                              a();
                            },
                          }),
                          (0, x.tZ)(c.Image, {
                            src: L,
                            className: "head-icon",
                          }),
                        ],
                      }),
                      (0, x.tZ)(c.ScrollView, {
                        scrollY: !0,
                        scrollWithAnimation: !0,
                        className: "smart-hold-seat-detail-scroll-area",
                        children: (0, x.BX)(c.View, {
                          className: "smart-hold-seat-detail-content",
                          children: [
                            (0, x.BX)(c.View, {
                              className: "smart-hold-seat-detail-head",
                              children: [
                                (0, x.tZ)(c.View, {
                                  className: "title",
                                  children: (0, x.tZ)(d.ZtRichText, {
                                    nodes: u.Z.convertAppTextToHtmlStr(re),
                                    space: "nbsp",
                                  }),
                                }),
                                (0, x.tZ)(c.View, {
                                  className: "desc",
                                  children: oe.map(function (e, t) {
                                    return (0,
                                    x.BX)(c.View, { className: "desc-item ".concat(0 === t && ee ? "with-logo" : ""), children: [0 === t && ee && (0, x.tZ)(c.Image, { src: i.travelFlagIconUrl, mode: "aspectFit", className: "logo-icon" }), (0, x.tZ)(c.View, { className: "desc-txt", children: (0, x.tZ)(d.ZtRichText, { nodes: u.Z.convertAppTextToHtmlStr(e.content), space: "nbsp" }) })] }, t);
                                  }),
                                }),
                              ],
                            }),
                            (0, x.tZ)(N.Z, {
                              tripType: j,
                              holdSeatTrip: q,
                              recommendTrip: Q,
                              tipList: $,
                            }),
                            (0, x.tZ)(y.Z, { train: Y }),
                            ie &&
                              (0, x.tZ)(w.Z, {
                                tipList: [].concat((0, n.Z)($), [
                                  ["subtrain", "stagger", "cross"].includes(j)
                                    ? '<font color="'.concat(
                                        f.default.isTieyou
                                          ? "#03B86F"
                                          : "#F76E21",
                                        '">风险提示：</font>若接受上车补票方案，请主动找列车员补票。利用“买短乘长”故意逃票属于违法行为。情节严重的将被追究法律责任。'
                                      )
                                    : "",
                                ]),
                                className: "smart-hold-seat-detail-tip-list",
                              }),
                          ],
                        }),
                      }),
                      (0, x.BX)(c.View, {
                        className: "smart-hold-seat-detail-bottom",
                        children: [
                          (0, x.tZ)(c.View, {
                            className: "refuse-button btm-button",
                            id: "AABy",
                            onClick: function () {
                              k(A, {
                                PageId: J,
                                scmType: null == i ? void 0 : i.tripType,
                                OldOrderID: o,
                                NewOrderID:
                                  null == q
                                    ? void 0
                                    : q.smartHoldSeatOrderNumber,
                                ExpoType: 1 == R ? 0 : 1,
                              }),
                                ie
                                  ? T()
                                  : V({
                                      orderNumber: o,
                                      refuseCallback: a,
                                      grabOrderInfo: {
                                        mobile: _,
                                        orderInfo: z,
                                        originTicketInfo: Y,
                                        userAuth12306Status: K,
                                        allPas: U,
                                      },
                                    });
                            },
                            children: "抢原方案",
                          }),
                          ie
                            ? (0, x.tZ)(Z.Z, {
                                endTime: q.orderTimeout,
                                onTimeup: I,
                                onConfirm: function () {
                                  k(B, {
                                    PageId: J,
                                    scmType: null == i ? void 0 : i.tripType,
                                    OldOrderID: o,
                                    NewOrderID:
                                      null == q
                                        ? void 0
                                        : q.smartHoldSeatOrderNumber,
                                    ExpoType: 1 == R ? 0 : 1,
                                  }),
                                    p(),
                                    D({
                                      orderNumber: o,
                                      smartHoldSeatOrderNumber:
                                        q.smartHoldSeatOrderNumber,
                                    });
                                },
                              })
                            : (0, x.tZ)(c.View, {
                                className: "confirm-button btm-button",
                                id: "AABz",
                                onClick: function () {
                                  var e;
                                  S(
                                    null == Q ||
                                      null === (e = Q.combineTrainInfo) ||
                                      void 0 === e
                                      ? void 0
                                      : e.schemeInfo
                                  ),
                                    k(B, {
                                      PageId: J,
                                      scmType: null == i ? void 0 : i.tripType,
                                      OldOrderID: o,
                                      NewOrderID:
                                        null == q
                                          ? void 0
                                          : q.smartHoldSeatOrderNumber,
                                      ExpoType: 1 == R ? 0 : 1,
                                    });
                                },
                                children: "立即预订",
                              }),
                        ],
                      }),
                    ],
                  }),
                }),
              });
        });
      },
    },
  ]);
})();
