!(function () {
  "use strict";
  require("../sub-vendors.js"),
    require("../sub-common/efd0f73c48edfb2f4cf806204cb23544.js"),
    require("../sub-common/e006cce71bea1c38395fdd39436a77c2.js"),
    require("../sub-common/d89ce578031072031f3fc29a11a827dc.js"),
    require("../sub-common/849af97262623a3a03a4c9ba6f8707d6.js"),
    require("../sub-common/dc0cfe7c36c66175a01e7585a0cfebf3.js"),
    require("../sub-common/9cf383cff2ba8ce0456965e69ba11b63.js"),
    require("../sub-common/023c833735f89bfd8e4bfa6050ae7715.js"),
    require("../sub-common/b3c2309a95e8a51ddd777bd490fa43e7.js"),
    require("../sub-common/19f27d7cebe94aa1035a5e0048e105a3.js"),
    require("../sub-common/8e7fedfd866fcd380b23fd0a31b6f284.js"),
    require("../sub-common/72f6836a38da788b04d6df340945e671.js"),
    require("../sub-common/3cd35e0ae0d34a9b944389e4550448dd.js"),
    require("../sub-common/6deb9d1305c2b84d9103247c2ddc9f3d.js"),
    require("../sub-common/997c205d01c5de4e84ea7969bc153c7a.js"),
    require("../sub-common/96d8eb90504c9d56b897fa852d4b3d57.js"),
    require("../sub-common/dac718cff8bcf1ac12775119a6edc31f.js"),
    require("../sub-common/8c56ed24216c9dc53e56531706bca2c2.js"),
    require("../sub-common/0c39378aae0ca231220273f5d3cdbf79.js"),
    require("../sub-common/65ce5d264830c3d1e459d8c647c137d0.js"),
    require("../sub-common/9f1c8e3fd6be93673b313b3b7859ca13.js"),
    require("../sub-common/9a9d51767ad829cabf4abeb8dadc881f.js"),
    require("../sub-common/5ab7860032c7e24a4cea38de75b4d44e.js"),
    require("../sub-common/eb393c6b4ec96aa37c882bf265b5f0e3.js"),
    require("../sub-common/8bd87e8d4f7c97dcb9e11d021209fdcc.js"),
    require("../sub-common/01e9d2595839abcf7ae11c5d8e410df9.js"),
    require("../sub-common/06da63d43ec51bd594f418aac8b2d05f.js"),
    require("../sub-common/3f909430656e46492e236548c9d68ac2.js"),
    require("../sub-common/09aa6290e731a15e4672f1e105aee948.js"),
    require("../sub-common/262942292aeddab6d86214964fedcb9a.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [38699],
      {
        70157: function (e, t, n) {
          var a = {};
          n.r(a),
            n.d(a, {
              configModel: function () {
                return E;
              },
              pointBookingModel: function () {
                return O;
              },
              tipsModel: function () {
                return L;
              },
            });
          var i = {};
          n.r(i),
            n.d(i, {
              appointSeatModel: function () {
                return ne;
              },
              assignCarriageModel: function () {
                return re;
              },
              authFailProductModel: function () {
                return ie;
              },
              combinationSeatModel: function () {
                return oe;
              },
              couponDeuctModel: function () {
                return de;
              },
              crossProModel: function () {
                return Q;
              },
              holdSeatProductModel: function () {
                return le;
              },
              lowerBerthProductModel: function () {
                return ae;
              },
              memberSaledModel: function () {
                return ee;
              },
              nightBookingModel: function () {
                return te;
              },
              productPopupModel: function () {
                return se;
              },
              seatSelectorModel: function () {
                return ce;
              },
              specialCardModel: function () {
                return ue;
              },
              xProModel: function () {
                return $;
              },
            });
          var r = {};
          n.r(r),
            n.d(r, {
              holderModel: function () {
                return fe;
              },
            });
          var o = {};
          n.r(o),
            n.d(o, {
              reschduleModel: function () {
                return he;
              },
            });
          var c = {};
          n.r(c),
            n.d(c, {
              secSkillModel: function () {
                return ge;
              },
            });
          var l = n(32180),
            s = n(57042),
            d = n(24460),
            u = n(81876),
            p = n(21867),
            m = n(86066),
            f = n(52500),
            h = n(65573),
            g = n(81957),
            S = n(92954),
            v = n.n(S),
            b = n(45742),
            T = n(22672),
            Z = n(90129),
            y = n(71515),
            P = n(79792),
            N = n(3205),
            M = n(13025),
            w = n(48813),
            C = (function (e) {
              (0, p.Z)(n, e);
              var t = (0, m.Z)(n);
              function n() {
                return (0, s.Z)(this, n), t.apply(this, arguments);
              }
              return (
                (0, d.Z)(n, [
                  {
                    key: "render",
                    value: function () {
                      var e = this.props.data || {},
                        t = e.bookingProtocal,
                        n = void 0 === t ? [] : t,
                        a = e.showType;
                      return (0, w.tZ)(y.Block, {
                        children:
                          "bookingProtocal" === a &&
                          (0, w.BX)(y.View, {
                            className: "pop-full",
                            id: "AKBk",
                            onClick: this.props.hideBackDrop,
                            children: [
                              (0, w.tZ)(y.View, {
                                className: "pop-full-bd",
                                children: (0, w.tZ)(y.View, {
                                  className: "pop-tick-desc",
                                  children: n.map(function (e) {
                                    return (0, w.BX)(
                                      y.View,
                                      {
                                        children: [
                                          (0, w.tZ)(y.View, {
                                            className: "txt-blue color-primary",
                                            children: e.title,
                                          }),
                                          e.content.map(function (e) {
                                            return (0,
                                            w.tZ)(y.View, { className: "s", children: e }, "index");
                                          }),
                                        ],
                                      },
                                      "title"
                                    );
                                  }),
                                }),
                              }),
                              (0, w.tZ)(y.View, {
                                className: "pop-full-closed",
                                children: (0, w.tZ)(y.Icon, {
                                  className: "icon-full-closed",
                                }),
                              }),
                            ],
                          }),
                      });
                    },
                  },
                ]),
                n
              );
            })(f.default.Component);
          function I(e) {
            var t = e.isShowWrapper,
              n = void 0 === t || t,
              a = e.showType,
              i = void 0 === a ? "" : a,
              r = e.hideBackDrop,
              o = void 0 === r ? function () {} : r,
              c = (0, f.useState)([]),
              l = (0, Z.Z)(c, 2),
              s = l[0],
              d = l[1],
              u = function () {
                return s.length
                  ? Promise.resolve(s)
                  : (0, M.fu)({ ConfigKey: "tieyou_wx_booking_protocal" })
                      .then(function (e) {
                        var t = (e.ConfigInfo || {}).Content;
                        return (
                          (t = (function (e) {
                            return (
                              P.default.isTieyou
                                ? (e = (e = (e = e.replace(
                                    /\u849c\u82bd/g,
                                    "迅途"
                                  )).replace(/\u667a\u884c/g, "铁友")).replace(
                                    /\u643a\u7a0b/g,
                                    "铁友"
                                  ))
                                : (e = (e = (e = e.replace(
                                    /\u8fc5\u9014/g,
                                    "蒜芽"
                                  )).replace(/\u94c1\u53cb/g, "智行")).replace(
                                    /\u643a\u7a0b/g,
                                    "智行"
                                  )),
                              e
                            );
                          })(t)),
                          (t = JSON.parse(t)),
                          d(t),
                          t
                        );
                      })
                      .catch(function (e) {
                        return console.error(e);
                      });
              };
            return (
              (0, f.useEffect)(function () {
                u();
              }, []),
              (0, w.BX)(y.Block, {
                children: [
                  n &&
                    (0, w.BX)(y.View, {
                      className: "checkbox-wrapper",
                      children: [
                        "请您在提交订单前仔细阅读",
                        (0, w.tZ)(y.Text, {
                          className: "color-primary",
                          id: "AKBh",
                          onClick: function () {
                            var e = P.default.isTieyou;
                            N.Z.twebview({
                              data: {
                                url: e
                                  ? "https://pages.ctrip.com/ztrip/document/policy.html"
                                  : "https://pages.ctrip.com/ztrip/document/policyzx.html",
                              },
                            });
                          },
                          children: "《火车票服务协议》",
                        }),
                        "、",
                        (0, w.tZ)(y.Text, {
                          className: "color-primary",
                          id: "AKBi",
                          onClick: function () {
                            var e = P.default.isTieyou,
                              t = "https://m.".concat(
                                e ? "tieyou" : "suanya",
                                ".com/webapp/train/activity/ztrip-train-buy-ticket-rule?isHideNavBar=YES&type=purchase"
                              );
                            N.Z.twebview({ data: { url: t } });
                          },
                          children: "《购票须知》",
                        }),
                        "和",
                        (0, w.tZ)(y.Text, {
                          className: "color-primary",
                          id: "AKBj",
                          onClick: function () {
                            var e = P.default.isTieyou;
                            N.Z.twebview({
                              data: {
                                url: e
                                  ? "https://market.suanya.com/document/static/train/TPersonalInformationAuthorizationStatement.html"
                                  : "https://market.suanya.com/document/static/train/PersonalInformationAuthorizationStatement.html",
                              },
                            });
                          },
                          children: "《个人信息授权声明》",
                        }),
                      ],
                    }),
                  (0, w.tZ)(y.View, {
                    className: "bookNotice-pop",
                    children: (0, w.tZ)(C, {
                      data: { showType: i, bookingProtocal: s },
                      hideBackDrop: o,
                    }),
                  }),
                ],
              })
            );
          }
          var k,
            D,
            x,
            B = n(49120),
            V = n(20592),
            A = n(298),
            _ = n(50196),
            R = n(40852),
            E = {
              state: {
                train12306Config: { isWorkTime: !0 },
                isBind12306Config: !1,
                passengerCountConfig: 5,
                passengerChildConfig: 5,
                isChooseSeatOnlineButtonVisible: !1,
                isWuPiaoScene: !1,
                isRecommendBuy: "",
                smartMarkValue: "",
                firstTripOrderNumber: "",
              },
              reducers: {
                updatePageBasic: function (e) {
                  var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    n = t.isWuPiaoScene,
                    a = void 0 !== n && n,
                    i = t.isRecommendBuy,
                    r = void 0 !== i && i,
                    o = t.smartMarkValue,
                    c = void 0 === o ? "" : o,
                    l = t.firstTripOrderNumber,
                    s = void 0 === l ? "" : l;
                  return (0, A.Z)(
                    (0, A.Z)({}, e),
                    {},
                    {
                      isWuPiaoScene: a,
                      isRecommendBuy: r,
                      smartMarkValue: c,
                      firstTripOrderNumber: s,
                    }
                  );
                },
                update12306Config: function (e, t) {
                  return (0, A.Z)((0, A.Z)({}, e), {}, { train12306Config: t });
                },
                updateIsBind12306Config: function (e, t) {
                  return (0, A.Z)(
                    (0, A.Z)({}, e),
                    {},
                    { isBind12306Config: t }
                  );
                },
                updateUseUpper12306Text: function (e, t) {
                  return (0, A.Z)(
                    (0, A.Z)({}, e),
                    {},
                    { useUpper12306Text: t }
                  );
                },
                updatePassengerCountConfig: function (e, t) {
                  return (0, A.Z)(
                    (0, A.Z)({}, e),
                    {},
                    { passengerCountConfig: t }
                  );
                },
                updatePassengerChildConfig: function (e, t) {
                  return (0, A.Z)(
                    (0, A.Z)({}, e),
                    {},
                    { passengerChildConfig: t }
                  );
                },
                updateIsChooseSeatOnlineButtonVisible: function (e, t) {
                  return (0, A.Z)(
                    (0, A.Z)({}, e),
                    {},
                    { isChooseSeatOnlineButtonVisible: t }
                  );
                },
              },
            },
            O = {
              state: {
                isPointPayMode: !1,
                memberInfoWith12306: null,
                ifPointOrder: !1,
              },
              reducers: {
                togglePointPayMode: function (e, t) {
                  return (0, A.Z)((0, A.Z)({}, e), {}, { isPointPayMode: t });
                },
                update12306MemberInfo: function (e, t) {
                  return (0, A.Z)(
                    (0, A.Z)({}, e),
                    {},
                    { memberInfoWith12306: t }
                  );
                },
                updateUserIfPointOrder: function (e, t) {
                  return (0, A.Z)((0, A.Z)({}, e), {}, { ifPointOrder: t });
                },
              },
            },
            L = {
              state: { tips: [] },
              reducers: {
                addTip: function (e, t) {
                  var n = t.key,
                    a = t.text,
                    i = e.tips;
                  return (
                    i.push({ key: n, text: a }),
                    (0, A.Z)(
                      (0, A.Z)({}, e),
                      {},
                      { tips: JSON.parse(JSON.stringify(i)) }
                    )
                  );
                },
                removeTip: function (e, t) {
                  return (0, A.Z)(
                    (0, A.Z)({}, e),
                    {},
                    {
                      tips: e.tips.filter(function (e) {
                        return e.key !== t;
                      }),
                    }
                  );
                },
              },
            },
            F = n(8271),
            H = n.n(F),
            X = {
              state: {
                allPas: [],
                childTicketCopyFromAdult: [],
                freeChildren: [],
                isStudentPreferenceNumLack: -1,
                selfStudentPreferenceInfo: null,
                assigneesPas: [],
                hasSelectAssignPas: !1,
                hasNoFreeChild: !1,
                hasElderlyPassenger: !1,
                haStudentTicket: !1,
              },
              reducers: {
                updateAllPas: function (e, t) {
                  return (0, A.Z)(
                    (0, A.Z)({}, e),
                    {},
                    {
                      allPas: t,
                      hasNoFreeChild: !!t.find(function (e) {
                        return e.isChild;
                      }),
                      hasElderlyPassenger: !!t.find(function (e) {
                        return (
                          e.Birthday &&
                          !H()(e.Birthday).isAfter(H()().subtract(60, "year"))
                        );
                      }),
                      haStudentTicket: !!t.find(function (e) {
                        return (
                          3 == e.PassengerType &&
                          !e.convertStu &&
                          !e.isStudentToAdult
                        );
                      }),
                    }
                  );
                },
                updateFreeChildren: function (e, t) {
                  return (0, A.Z)((0, A.Z)({}, e), {}, { freeChildren: t });
                },
                updateChildTicketCopyFromAdult: function (e, t) {
                  return (0, A.Z)(
                    (0, A.Z)({}, e),
                    {},
                    { childTicketCopyFromAdult: t }
                  );
                },
                updateStudentPreferenceNumLack: function (e, t) {
                  return (0, A.Z)(
                    (0, A.Z)({}, e),
                    {},
                    { isStudentPreferenceNumLack: t }
                  );
                },
                updateSelfStudentPreferenceInfo: function (e, t) {
                  return (0, A.Z)(
                    (0, A.Z)({}, e),
                    {},
                    { selfStudentPreferenceInfo: t }
                  );
                },
                updateAssigneesPas: function (e, t) {
                  return (0, A.Z)((0, A.Z)({}, e), {}, { assigneesPas: t });
                },
                updateHasSelectAssignPas: function (e, t) {
                  return (0, A.Z)(
                    (0, A.Z)({}, e),
                    {},
                    { hasSelectAssignPas: t }
                  );
                },
              },
            },
            K = n(79910),
            z = {
              state: {
                trainInfo: {},
                isBed: !1,
                departDateStr: "",
                arriveDateStr: "",
                departWeekDay: "",
                arriveDateWeekDay: "",
                trainViewModeType: "",
                selectTrainInfo: {},
                isStride: !1,
                orderSource: "",
                isGDC: !1,
                isKTZ: !1,
              },
              reducers: {
                updateTrain: function (e, t) {
                  return (0, A.Z)(
                    (0, A.Z)({}, e),
                    {},
                    {
                      trainInfo: t,
                      isGDC: K.Z.getIsGDCTrain(t.TrainNumber),
                      isKTZ: K.Z.getIsKTZTrain(t.TrainNumber),
                    }
                  );
                },
                updateStrideFlag: function (e, t) {
                  return (0, A.Z)((0, A.Z)({}, e), {}, { isStride: !!t });
                },
                updateSelectTrainInfo: function (e, t) {
                  return (0, A.Z)((0, A.Z)({}, e), {}, { selectTrainInfo: t });
                },
                updateStatus: function (e, t) {
                  var n = t.isBed,
                    a = t.departDateStr,
                    i = t.arriveDateStr,
                    r = t.departWeekDay,
                    o = t.arriveDateWeekDay;
                  return (0, A.Z)(
                    (0, A.Z)({}, e),
                    {},
                    {
                      isBed: n,
                      departDateStr: a,
                      arriveDateStr: i,
                      departWeekDay: r,
                      arriveDateWeekDay: o,
                    }
                  );
                },
                updateTrainViewModeType: function (e, t) {
                  return (0, A.Z)(
                    (0, A.Z)({}, e),
                    {},
                    { trainViewModeType: t }
                  );
                },
                updateOrderSource: function (e, t) {
                  return (0, A.Z)((0, A.Z)({}, e), {}, { orderSource: t });
                },
              },
            },
            j = n(45023),
            W = "YYYY-MM-DD";
          (function (e) {
            (e.TrainHotelCrossPop = "@min/TrainHotelCrossPop"),
              (e.DarkIntercept = "@min/DarkIntercept"),
              (e.Holder = "@mini/Holder"),
              (e.SmartHolderFail = "@mini/SmartHolderFail"),
              (e.SmartHolderFailRefuse = "@mini/SmartHolderFailRefuse"),
              (e.SeasonMemberShipDrawer = "@mini/SeasonMemberShipDrawer"),
              (e.HotelCrossRulePop = "@mini/HotelCrossRulePop"),
              (e.PaymentUpsellModal = "@mini/PaymentUpsellModal"),
              (e.NightTicketPKConfirm = "@mini/NightTicketPKConfirm"),
              (e.ConflictOrderRemindModal = "@mini/ConflictOrderRemindModal"),
              (e.ImageDrawer = "@mini/ImageDrawer");
          })(D || (D = {})),
            (function (e) {
              (e.pre = "pre"), (e.hold = "holdSeat");
            })(x || (x = {}));
          var G, U, Y;
          (function (e) {
            (e.preHoldTimeoutTimer = "preHoldTimeoutTimer"),
              (e.showHotelCouponTimer = "showHotelCouponTimer"),
              (e.preholdSeatTimer = "preholdSeatId"),
              (e.displayPreholdTimer = "displayPreholdId");
          })(G || (G = {})),
            (function (e) {
              (e.ACCIDENT = "accidentIns"), (e.DELAY = "delay");
            })(U || (U = {})),
            (function (e) {
              (e.ParentChildCard = "ParentChildCard"),
                (e.SeniorCard = "SeniorCard"),
                (e.StudentCard = "StudentCard");
            })(Y || (Y = {}));
          var J,
            q =
              ((k = {}),
              (0, j.Z)(k, Y.ParentChildCard, "亲子卡"),
              (0, j.Z)(k, Y.SeniorCard, "敬老卡"),
              (0, j.Z)(k, Y.StudentCard, "同窗卡"),
              k);
          !(function (e) {
            (e.adjacentSeat = "adjacentSeat"),
              (e.accessibleCarriages = "accessibleCarriages"),
              (e.sameRoom = "sameRoom");
          })(J || (J = {}));
          var $ = {
              state: {
                paidProductAppointSeatType: 0,
                canAppointPaidProduct: !1,
                canAppointFreeBedding: !1,
                cantAppointPaidProductDesc: "",
              },
              reducers: {
                updateAppointSeatType: function (e, t) {
                  return (0, A.Z)(
                    (0, A.Z)({}, e),
                    {},
                    {
                      paidProductAppointSeatType: t,
                      canAppointPaidProduct: 1 === t,
                      cantAppointPaidProductDesc:
                        3 == t
                          ? "学生票不支持"
                          : 2 == t
                          ? "非身份证购票不支持"
                          : "",
                    }
                  );
                },
                updateCanAppointFreeBedding: function (e, t) {
                  return (0, A.Z)(
                    (0, A.Z)({}, e),
                    {},
                    { canAppointFreeBedding: t }
                  );
                },
              },
            },
            Q = {
              state: {
                hotelCouponIconOnHoldPop: null,
                trainHotelReturnCashInfo: null,
                hotelTagCashBackJson: null,
              },
              reducers: {
                updateHotelCouponIconOnHoldPop: function (e, t) {
                  return (0, A.Z)(
                    (0, A.Z)({}, e),
                    {},
                    { hotelCouponIconOnHoldPop: t }
                  );
                },
                updateTrainHotelReturnCashInfo: function (e, t) {
                  return (0, A.Z)(
                    (0, A.Z)({}, e),
                    {},
                    { trainHotelReturnCashInfo: t }
                  );
                },
                updateHotelTagCashBackJson: function (e, t) {
                  return (0, A.Z)(
                    (0, A.Z)({}, e),
                    {},
                    { hotelTagCashBackJson: t }
                  );
                },
              },
            },
            ee = {
              state: {
                isBindMemberSaled: !1,
                memberShipCardVisible: !1,
                buyMemberShip: !1,
                useMemberShip: !1,
                memberShipBagInfo: null,
                memberShipDrawerInfo: null,
                appointSeatMemberInfo: null,
                nightBookMemberInfo: null,
                memberProductFrom: null,
                treasureGoodsInfoFromX: null,
              },
              reducers: {
                updateStatus: function (e, t) {
                  var n = t.isBindMemberSaled;
                  return (0, A.Z)(
                    (0, A.Z)({}, e),
                    {},
                    { isBindMemberSaled: n, buyMemberShip: !!n }
                  );
                },
                updateMemberShipBagInfo: function (e, t) {
                  return (0, A.Z)(
                    (0, A.Z)({}, e),
                    {},
                    { memberShipBagInfo: t }
                  );
                },
                toggleMemberCardVisible: function (e, t) {
                  return (0, A.Z)(
                    (0, A.Z)({}, e),
                    {},
                    { memberShipCardVisible: !!t }
                  );
                },
                toggleBuyMember: function (e, t) {
                  return (0, A.Z)((0, A.Z)({}, e), {}, { buyMemberShip: !!t });
                },
                toggleUseMemberShip: function (e, t) {
                  return (0, A.Z)((0, A.Z)({}, e), {}, { useMemberShip: !!t });
                },
                updateMemberShipDrawerInfo: function (e, t) {
                  return (0, A.Z)(
                    (0, A.Z)({}, e),
                    {},
                    { memberShipDrawerInfo: t }
                  );
                },
                updateAppointSeatMemberInfo: function (e, t) {
                  return (0, A.Z)(
                    (0, A.Z)({}, e),
                    {},
                    { appointSeatMemberInfo: t }
                  );
                },
                updateNightBookMemberInfo: function (e, t) {
                  return (0, A.Z)(
                    (0, A.Z)({}, e),
                    {},
                    { nightBookMemberInfo: t }
                  );
                },
                updateMemberProductFrom: function (e, t) {
                  return (0, A.Z)(
                    (0, A.Z)({}, e),
                    {},
                    { memberProductFrom: t }
                  );
                },
                updateTreasureGoodsInfoFromX: function (e, t) {
                  return (0, A.Z)(
                    (0, A.Z)({}, e),
                    {},
                    { treasureGoodsInfoFromX: t }
                  );
                },
              },
            },
            te = {
              state: {
                nightEledeliveryInfo: null,
                selectNightEleDelivery: !1,
                nightEledeliveryInfoFromX: null,
                interceptToast: null,
              },
              reducers: {
                updateNightEledeliveryInfo: function (e, t) {
                  return (0, A.Z)(
                    (0, A.Z)({}, e),
                    {},
                    { nightEledeliveryInfo: t }
                  );
                },
                updateSelectNightEleDelivery: function (e, t) {
                  return (0, A.Z)(
                    (0, A.Z)({}, e),
                    {},
                    { selectNightEleDelivery: t }
                  );
                },
                updateEledeliveryInfoFromX: function (e, t) {
                  return (0, A.Z)(
                    (0, A.Z)({}, e),
                    {},
                    { nightEledeliveryInfoFromX: t }
                  );
                },
                updateInterceptToast: function (e, t) {
                  return (0, A.Z)((0, A.Z)({}, e), {}, { interceptToast: t });
                },
              },
            },
            ne = {
              state: {
                appointSeatDetail: null,
                showAppointSeatBox: !1,
                appointSeatIndexList: [],
                sameRoom: null,
                total: 0,
              },
              reducers: {
                updateAppointSeatDetail: function (e, t) {
                  return (0, A.Z)(
                    (0, A.Z)({}, e),
                    {},
                    { appointSeatDetail: JSON.parse(JSON.stringify(t)) }
                  );
                },
                toggleAppointSeatBoxVisible: function (e, t) {
                  return (0, A.Z)(
                    (0, A.Z)({}, e),
                    {},
                    { showAppointSeatBox: !!t }
                  );
                },
                updateAppointSeatIndexList: function (e) {
                  var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : [];
                  return (0, A.Z)(
                    (0, A.Z)({}, e),
                    {},
                    { appointSeatIndexList: t }
                  );
                },
                updateSameRoomStatus: function (e, t) {
                  return (0, A.Z)(
                    (0, A.Z)({}, e),
                    {},
                    { sameRoom: JSON.parse(JSON.stringify(t)) }
                  );
                },
                updateTotal: function (e, t) {
                  return (0, A.Z)((0, A.Z)({}, e), {}, { total: t });
                },
              },
            },
            ae = {
              state: { lowerBerthProductInfo: null, buySleepCouponBag: !1 },
              reducers: {
                updateLowerBerthProductInfo: function (e, t) {
                  return (0, A.Z)(
                    (0, A.Z)({}, e),
                    {},
                    { lowerBerthProductInfo: t }
                  );
                },
                toggleBuySleepCouponBag: function (e, t) {
                  return (0, A.Z)(
                    (0, A.Z)({}, e),
                    {},
                    { buySleepCouponBag: t }
                  );
                },
              },
            },
            ie = {
              state: {
                authFailToastInfo: null,
                abTestMap: {},
                userRoleInfo: null,
                interceptScene: "",
              },
              reducers: {
                updateAuthFailToastInfo: function (e, t) {
                  var n = t.authFailToastInfo,
                    a = t.abTestMap,
                    i = t.userRoleInfo,
                    r = t.interceptScene,
                    o = void 0 === r ? x.pre : r;
                  return (0, A.Z)(
                    (0, A.Z)({}, e),
                    {},
                    {
                      authFailToastInfo: n,
                      abTestMap: a,
                      userRoleInfo: i,
                      interceptScene: o,
                    }
                  );
                },
              },
            },
            re = {
              state: { assignCarriageInfo: null, selectedCarriages: [] },
              reducers: {
                updateAssignCarriageInfo: function (e, t) {
                  return (0, A.Z)(
                    (0, A.Z)({}, e),
                    {},
                    { assignCarriageInfo: t }
                  );
                },
                updateSelectedCarriages: function (e, t) {
                  return (0, A.Z)(
                    (0, A.Z)({}, e),
                    {},
                    { selectedCarriages: JSON.parse(JSON.stringify(t)) }
                  );
                },
              },
            },
            oe = {
              state: { combinationSeat: null, manualSelectSeatInfo: null },
              reducers: {
                updateCombinationSeatInfo: function (e, t) {
                  return (0, A.Z)((0, A.Z)({}, e), {}, { combinationSeat: t });
                },
                updateManualSelectSeatInfo: function (e, t) {
                  return (0, A.Z)(
                    (0, A.Z)({}, e),
                    {},
                    { manualSelectSeatInfo: JSON.parse(JSON.stringify(t)) }
                  );
                },
              },
            },
            ce = {
              state: { selectedSeats: [] },
              reducers: {
                updateSelectedSeats: function (e, t) {
                  return (0, A.Z)((0, A.Z)({}, e), {}, { selectedSeats: t });
                },
              },
            },
            le = {
              state: { holdSeatProduct: null, isChoosedHoldSeatProduct: !1 },
              reducers: {
                setHoldSeatProduct: function (e, t) {
                  return (0, A.Z)((0, A.Z)({}, e), {}, { holdSeatProduct: t });
                },
                toggleChoosedHoldSeatProduct: function (e, t) {
                  return (0, A.Z)(
                    (0, A.Z)({}, e),
                    {},
                    { isChoosedHoldSeatProduct: t }
                  );
                },
              },
            },
            se = {
              state: { product: null, checked: !1, canPop: !0, isTestB: !1 },
              reducers: {
                setProductPopup: function (e, t) {
                  return (0, A.Z)((0, A.Z)({}, e), {}, { product: t });
                },
                toggleProductPopupChecked: function (e, t) {
                  return (0, A.Z)((0, A.Z)({}, e), {}, { checked: t });
                },
                setCanPop: function (e, t) {
                  return (0, A.Z)((0, A.Z)({}, e), {}, { canPop: t });
                },
                setABTestWithBValue: function (e, t) {
                  return (0, A.Z)((0, A.Z)({}, e), {}, { isTestB: t });
                },
              },
            },
            de = {
              state: { couponDeductDesc: "", couponId: "" },
              reducers: {
                updateCouponDeuctInfo: function (e) {
                  var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    n = t.couponDeductDesc,
                    a = void 0 === n ? "" : n,
                    i = t.couponId,
                    r = void 0 === i ? "" : i;
                  return (0, A.Z)(
                    (0, A.Z)({}, e),
                    {},
                    { couponDeductDesc: a, couponId: r }
                  );
                },
              },
            },
            ue = {
              state: {
                checked: !1,
                displayCard: null,
                cardInfos: [],
                cardRights: [],
                activeCardTypes: new Set(),
                sdjacentSeatRightsExtInfo: null,
                hasSpecialCarriageRights: !1,
                hassSdjacentSeatRights: !1,
                hasSameRoomRights: !1,
                sameRoomRightsExtInfo: null,
                displayCardText: "",
              },
              reducers: {
                toggleCheckedStatus: function (e, t) {
                  return (0, A.Z)((0, A.Z)({}, e), {}, { checked: t });
                },
                updateCardInfos: function (e, t) {
                  return (0, A.Z)((0, A.Z)({}, e), {}, { cardInfos: t });
                },
                updateSpecialCard: function (e, t) {
                  return (0, A.Z)(
                    (0, A.Z)({}, e),
                    {},
                    {
                      displayCard: t,
                      displayCardText: t
                        ? q[(null == t ? void 0 : t.cardType) || ""]
                        : "",
                    }
                  );
                },
                updateCardRights: function (e, t) {
                  var n = t.find(function (e) {
                      return e.type === J.accessibleCarriages && !e.disable;
                    }),
                    a = t.find(function (e) {
                      return e.type === J.adjacentSeat && !e.disable;
                    }),
                    i = t.find(function (e) {
                      return e.type === J.sameRoom && !e.disable;
                    });
                  return (0, A.Z)(
                    (0, A.Z)({}, e),
                    {},
                    {
                      cardRights: t,
                      hasSpecialCarriageRights: !!n,
                      hassSdjacentSeatRights: !!a,
                      sdjacentSeatRightsExtInfo: null == a ? void 0 : a.extInfo,
                      hasSameRoomRights: !!i,
                      sameRoomRightsExtInfo: null == i ? void 0 : i.extInfo,
                      hasRights: !!n || !!a || !!i,
                    }
                  );
                },
                updateActiveCardTypes: function (e, t) {
                  return (0, A.Z)((0, A.Z)({}, e), {}, { activeCardTypes: t });
                },
              },
            },
            pe = n(97939),
            me = {
              state: { accountHealthStatus: 3, accountHealthOriginalCode: 0 },
              reducers: {
                updateAccountStatus: function (e, t) {
                  return (0, A.Z)(
                    (0, A.Z)({}, e),
                    {},
                    {
                      accountHealthOriginalCode: -1 === t ? 0 : t,
                      accountHealthStatus: -1 === t ? 1 : 0 === t ? 3 : 2,
                      authFailType: (0, pe.Bh)(-1 === t ? 0 : t),
                    }
                  );
                },
              },
            },
            fe = {
              state: {
                oid: null,
                rescheduleOrderNumber: null,
                isShowOrderDetailEnry: !1,
                isShowHoldSeatProduct: !1,
                isShowHotelCoupon: !1,
                preholdDisplayStep: !1,
                preHoldPercent: 0,
                holdSeatProduct: null,
                smartHoldSeatDetail: null,
              },
              reducers: {
                setOrder: function (e, t) {
                  return (0, A.Z)((0, A.Z)({}, e), {}, { oid: t });
                },
                setRescheduleOrderNumber: function (e, t) {
                  return (0, A.Z)(
                    (0, A.Z)({}, e),
                    {},
                    { rescheduleOrderNumber: t }
                  );
                },
                toggleShowOrderDetailEntry: function (e, t) {
                  return (0, A.Z)(
                    (0, A.Z)({}, e),
                    {},
                    { isShowOrderDetailEnry: !!t }
                  );
                },
                toggleShowHoldSeatProduct: function (e, t) {
                  return (0, A.Z)(
                    (0, A.Z)({}, e),
                    {},
                    { isShowHoldSeatProduct: !!t }
                  );
                },
                toggleShowHotelCoupon: function (e, t) {
                  return (0, A.Z)(
                    (0, A.Z)({}, e),
                    {},
                    { isShowHotelCoupon: !!t }
                  );
                },
                updatePreholdDisplayStep: function (e, t) {
                  return (0, A.Z)(
                    (0, A.Z)({}, e),
                    {},
                    { preholdDisplayStep: t }
                  );
                },
                updatePreHoldPercent: function (e, t) {
                  return (0, A.Z)((0, A.Z)({}, e), {}, { preHoldPercent: t });
                },
                setSmartHoldSeatDetail: function (e, t) {
                  return (0, A.Z)(
                    (0, A.Z)({}, e),
                    {},
                    { smartHoldSeatDetail: t }
                  );
                },
              },
            },
            he = {
              state: {
                isReschduleMode: !1,
                oldOrderInfo: null,
                reschedulePrice: 0,
                originPrice: 0,
                reschedulePayTips: "",
              },
              reducers: {
                toggleReschduleMode: function (e, t) {
                  return (0, A.Z)((0, A.Z)({}, e), {}, { isReschduleMode: t });
                },
                setReschduleOrderInfo: function (e, t) {
                  return (0, A.Z)((0, A.Z)({}, e), {}, { oldOrderInfo: t });
                },
                setReschedulePrice: function (e, t) {
                  return (0, A.Z)((0, A.Z)({}, e), {}, { reschedulePrice: t });
                },
                setOriginPricePrice: function (e, t) {
                  return (0, A.Z)((0, A.Z)({}, e), {}, { originPrice: t });
                },
              },
            },
            ge = {
              state: { isPreSecKill: !1, secSkillBannerInfo: null },
              reducers: {
                setSecSkillInfo: function (e, t) {
                  var n = t.isPreSecKill,
                    a = t.secSkillBannerInfo;
                  return (0, A.Z)(
                    (0, A.Z)({}, e),
                    {},
                    { isPreSecKill: n, secSkillBannerInfo: a }
                  );
                },
              },
            },
            Se = (0, A.Z)(
              (0, A.Z)(
                (0, A.Z)(
                  (0, A.Z)(
                    (0, A.Z)({}, a),
                    {},
                    { passengerModel: X, trainModel: z },
                    i
                  ),
                  {},
                  { my12306Model: R.Z, darkModel: me },
                  r
                ),
                o
              ),
              c
            ),
            ve = (0, _.M)({ models: Se }),
            be = n(74921),
            Te = n(79301),
            Ze = n(95308),
            ye = n(86977),
            Pe = n(94190),
            Ne = n(18783),
            Me = n(25391),
            we = n(74867),
            Ce = n(96158),
            Ie = n(10741),
            ke = n(93212),
            De = n(9416),
            xe = n(81437),
            Be = function (e) {
              var t,
                n = (
                  null === (t = ve.getState().trainModel) || void 0 === t
                    ? void 0
                    : t.trainInfo
                ).SeatName;
              if (!K.Z.isEmptyObject(e)) {
                var a = e.vipSeatList,
                  i = void 0 === a ? [] : a,
                  r = e.sleepNightEntity,
                  o = e.pkResult,
                  c = e.newMember,
                  l = e.cardCode,
                  s = void 0 === l ? "" : l,
                  d = e.openMemberBagInfo,
                  u = void 0 === d ? {} : d,
                  p = i.some(function (e) {
                    return e.name === n;
                  });
                ve
                  .getDispatch()
                  .memberSaledModel.updateMemberShipBagInfo(p ? e : null),
                  ve.getDispatch().memberSaledModel.toggleMemberCardVisible(p),
                  p && !r && ve.ubtTrace(197369),
                  r || Ve(s),
                  r &&
                    r.amount > 0 &&
                    ve.getState().xProModel.canAppointPaidProduct &&
                    p &&
                    ve.getDispatch().memberSaledModel.toggleUseMemberShip(!0),
                  c &&
                    2 === o &&
                    ve
                      .getDispatch()
                      .memberSaledModel.updateNightBookMemberInfo(c),
                  c &&
                    1 === o &&
                    ve
                      .getDispatch()
                      .memberSaledModel.updateAppointSeatMemberInfo(c),
                  ve.getState().memberSaledModel.isBindMemberSaled ||
                    ve
                      .getDispatch()
                      .memberSaledModel.updateMemberProductFrom(
                        null == u ? void 0 : u.productFrom
                      );
              }
            },
            Ve = (function () {
              var e = (0, Ze.Z)(
                (0, Te.Z)().mark(function e(t) {
                  var n, a, i, r, o, c, l, s, d;
                  return (0, Te.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              (0, Ie.cSR)({
                                source: 1,
                                gVipRecommendType: 1,
                                scene: 0,
                                cardCode: t,
                              })
                            );
                          case 3:
                            if (1 !== (n = e.sent).resultCode) {
                              e.next = 12;
                              break;
                            }
                            (a = n.vipDetailInfo),
                              (i = a.unionVipRight),
                              (o = (r = i || {}).coreRightEntityList),
                              (c = void 0 === o ? [] : o),
                              (l = r.title),
                              c.length > 0 &&
                                ((s = []),
                                c.map(function (e) {
                                  var t = {};
                                  (t.bgUrl = e.imageUrl),
                                    (t.name = e.title),
                                    (t.desc = e.subTitle),
                                    s.push(t);
                                }),
                                (d = {
                                  unionVipRight: { title: l, rightList: s },
                                }),
                                (a.vipPackageEntity = d)),
                              ve
                                .getDispatch()
                                .memberSaledModel.updateMemberShipDrawerInfo(a),
                              (e.next = 13);
                            break;
                          case 12:
                            throw new Error(n.resultMessage);
                          case 13:
                            e.next = 18;
                            break;
                          case 15:
                            (e.prev = 15),
                              (e.t0 = e.catch(0)),
                              ve
                                .getDispatch()
                                .memberSaledModel.toggleMemberCardVisible(!1);
                          case 18:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 15]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            Ae = function () {
              var e,
                t = ve.getState().memberSaledModel,
                n = t.buyMemberShip,
                a = t.memberShipBagInfo,
                i = ve.getState().configModel.isChooseSeatOnlineButtonVisible,
                r = ve.getState().trainModel.trainInfo;
              ve.ubtTrace("TZWBuyBook_Member_click", {
                PageId: P.default.isTieyou ? "10320660965" : "10320660961",
                product:
                  (null == a || null === (e = a.xMemberBagInfo) || void 0 === e
                    ? void 0
                    : e.titlePrefix) || "",
                Type: i ? "GDC" : "KTZ",
                seatScmType: r.SeatName,
                position: 1,
                clickType: n ? 0 : 1,
              }),
                yt()
                  ? (ve.getDispatch().memberSaledModel.toggleBuyMember(!n),
                    n || (na("#train-sleep-section"), ve.ubtTrace(197370)))
                  : Nt();
            },
            _e = function () {
              var e = ve.getState().memberSaledModel,
                t = e.useMemberShip,
                n = e.memberShipBagInfo,
                a = ve.getState().xProModel,
                i = a.canAppointPaidProduct,
                r = a.canAppointFreeBedding;
              if (
                (!i || r) &&
                !t &&
                n &&
                1 === (null == n ? void 0 : n.pkResult)
              )
                return ve.showCommonDialog({
                  title: "温馨提示",
                  content: r
                    ? "本次选铺不消耗会员权益"
                    : "下铺/夜间会员礼包权益暂不支持购买学生票，本次不消耗会员权益次数",
                });
              1 === yt() || t || !n || 2 !== (null == n ? void 0 : n.pkResult)
                ? (ve.getDispatch().memberSaledModel.toggleUseMemberShip(!t),
                  t || (na("#train-sleep-section"), ve.ubtTrace(197372)))
                : Nt();
            },
            Re = n(22276),
            Ee = function (e) {
              var t,
                n = e.elecTicketResult,
                a = e.sameRoom,
                i = void 0 === a ? {} : a,
                r = (
                  null === (t = ve.getState().trainModel) || void 0 === t
                    ? void 0
                    : t.trainInfo
                ).SeatName,
                o = ve.getState().passengerModel.allPas;
              if (n.appointSeatInfo) {
                var c = ve.getState().trainModel.isBed,
                  l = n.appointSeatInfo.seatInfoList.map(function (e) {
                    return (0, A.Z)((0, A.Z)({}, e), {}, { num: 0 });
                  });
                r.indexOf("软卧") >= 0 &&
                  (l = l.filter(function (e) {
                    return "中铺" != e.seatName;
                  }));
                var s = {
                    title: n.appointSeatInfo.title,
                    _subTitle: n.appointSeatInfo._subTitle,
                    desc: n.appointSeatInfo.desc,
                    topTip: "",
                    acceptOtherSeat: n.appointSeatInfo.acceptOtherSeat,
                    acceptOtherSeatDesc: n.appointSeatInfo.acceptOtherSeatDesc,
                    acceptOtherSeatVipDesc:
                      n.appointSeatInfo.acceptOtherSeatVipDesc,
                    seatInfoList: l,
                    tag: n.appointSeatInfo.tag,
                    detailToast: n.appointSeatInfo.detailToast,
                    tips: n.appointSeatInfo.tips,
                    appointSeatFor12306: n.appointSeatInfo.appointSeatFor12306,
                  },
                  d = c;
                ve.getDispatch().appointSeatModel.updateAppointSeatDetail(s),
                  ve
                    .getDispatch()
                    .appointSeatModel.toggleAppointSeatBoxVisible(d),
                  ve
                    .getDispatch()
                    .appointSeatModel.updateAppointSeatIndexList([]),
                  ve
                    .getDispatch()
                    .appointSeatModel.updateSameRoomStatus(i.title ? i : null),
                  s &&
                    d &&
                    o.length &&
                    !P.default.isTieyou &&
                    ve.ubtTrace(134041);
              }
            },
            Oe = function () {
              var e = ve.getState().passengerModel.allPas,
                t = ve.getState().trainModel.isBed,
                n = ve.getState().appointSeatModel.appointSeatDetail,
                a = e.some(function (e) {
                  return (
                    3 === e.PassengerType &&
                    !e.convertStu &&
                    !e.isStudentToAdult
                  );
                }),
                i = e.some(function (e) {
                  return "身份证" !== e.IdentityType;
                }),
                r = a ? 3 : i ? 2 : 1;
              ve.getDispatch().xProModel.updateAppointSeatType(r),
                ve
                  .getDispatch()
                  .xProModel.updateCanAppointFreeBedding(
                    1 == (null == n ? void 0 : n.appointSeatFor12306) && !!t
                  );
            },
            Le = function () {
              var e = ve.getState().appointSeatModel.sameRoom;
              e &&
                ((e._selected = !1),
                ve.getDispatch().appointSeatModel.updateSameRoomStatus(e));
            },
            Fe = function () {
              return new Promise(function (e) {
                var t = ve.getState().xProModel,
                  n = t.paidProductAppointSeatType;
                t.canAppointFreeBedding
                  ? e("allow")
                  : 3 == n
                  ? ve.showCommonDialog({
                      title: "",
                      content: "学生票暂不支持优先选铺",
                      buttonName: "知道了",
                      onButtonClick: function () {
                        e("forbid");
                      },
                    })
                  : 2 == n
                  ? ve.showCommonDialog({
                      title: "",
                      content: "选铺服务只支持身份证购票",
                      buttonName: "知道了",
                      onButtonClick: function () {
                        e("forbid");
                      },
                    })
                  : e("allow");
              });
            },
            He = function (e) {
              var t,
                n =
                  "number" == typeof e
                    ? e
                    : null === (t = e.target.dataset) || void 0 === t
                    ? void 0
                    : t.index,
                a = ve.getState().appointSeatModel,
                i = a.appointSeatDetail,
                r = a.appointSeatIndexList,
                o = ve.getState().passengerModel.allPas,
                c = ve.getState().configModel.isChooseSeatOnlineButtonVisible,
                l = ve.getState().trainModel.trainInfo;
              ve.ubtTrace("TZWBuyBook_Seat_click", {
                PageId: P.default.isTieyou ? "10320660965" : "10320660961",
                Type: c ? "GDC" : "KTZ",
                seatScmType: l.SeatName,
                position: 2,
                product: i.seatInfoList[n].seatName,
                clickType: 1,
              });
              var s = o.length,
                d = i.seatInfoList[n].num;
              P.default.isTieyou || ve.ubtTrace(134042),
                Fe().then(function (e) {
                  if ("forbid" !== e) {
                    var t = 0;
                    i.seatInfoList.forEach(function (e) {
                      t += e.num;
                    }),
                      t + 1 <= s
                        ? ((i.seatInfoList[n].num = d + 1),
                          i.seatInfoList.map(function (e, t) {
                            return (e.canShowDiscount = t === n);
                          }),
                          r.push(n),
                          t++,
                          ve
                            .getDispatch()
                            .appointSeatModel.updateAppointSeatDetail(i),
                          ve.getDispatch().appointSeatModel.updateTotal(t),
                          ve
                            .getDispatch()
                            .appointSeatModel.updateAppointSeatIndexList(r))
                        : (0, B.showToast)({
                            title: "人数已经达到上限",
                            icon: "none",
                          });
                  }
                });
            },
            Xe = function (e) {
              var t = e.target.dataset.index,
                n = ve.getState().appointSeatModel,
                a = n.appointSeatDetail,
                i = n.appointSeatIndexList,
                r = (0, Re.Z)(i),
                o = ve.getState().configModel.isChooseSeatOnlineButtonVisible,
                c = ve.getState().trainModel.trainInfo;
              ve.ubtTrace("TZWBuyBook_Seat_click", {
                PageId: P.default.isTieyou ? "10320660965" : "10320660961",
                Type: o ? "GDC" : "KTZ",
                seatScmType: c.SeatName,
                position: 2,
                product: a.seatInfoList[t].seatName,
                clickType: 0,
              });
              var l = a.seatInfoList[t].num,
                s = 0;
              P.default.isTieyou || ve.ubtTrace(134042),
                Fe().then(function (e) {
                  if ("forbid" !== e)
                    if (
                      (a.seatInfoList.forEach(function (e) {
                        s += e.num;
                      }),
                      l - 1 >= 0)
                    ) {
                      a.seatInfoList[t].num = l - 1;
                      var n = 0,
                        i = [];
                      if (r.includes(t))
                        for (var o = r.length - 1; o >= 0; o--)
                          r[o] !== t || n ? i.push(r[o]) : (n += 1);
                      var c = (r = i.reverse()).length,
                        d = 0;
                      a.seatInfoList.map(function (e, t) {
                        t !== r[c - 1] || d
                          ? (e.canShowDiscount = !1)
                          : ((e.canShowDiscount = !0), (d += 1));
                      }),
                        s--,
                        ve
                          .getDispatch()
                          .appointSeatModel.updateAppointSeatDetail(a),
                        ve.getDispatch().appointSeatModel.updateTotal(s),
                        ve
                          .getDispatch()
                          .appointSeatModel.updateAppointSeatIndexList(r);
                    } else (0, B.showToast)({ title: "人数已经达到下限" });
                });
            },
            Ke = function () {
              var e = ve.getState().appointSeatModel.appointSeatDetail;
              P.default.isTieyou || ve.ubtTrace(134045),
                Fe(),
                ve
                  .getDispatch()
                  .appointSeatModel.updateAppointSeatDetail(
                    (0, A.Z)(
                      (0, A.Z)({}, e),
                      {},
                      { acceptOtherSeat: !e.acceptOtherSeat }
                    )
                  );
            },
            ze = function () {
              var e = ve.getState().memberSaledModel.buyMemberShip,
                t = ve.getState().appointSeatModel.total,
                n = ve.getState().assignCarriageModel.selectedCarriages,
                a = ve.getState().seatSelectorModel.selectedSeats,
                i = ve.getState().lowerBerthProductModel.buySleepCouponBag;
              return e || t > 0 || n.length > 0 || a.length > 0 || i
                ? "积分兑换的车票不可与".concat(
                    (e ? ' "会员权益（月卡会员、季卡会员、年卡会员）" ' : "") +
                      (t > 0 ? ' "优选铺席" ' : "") +
                      (n.length > 0 ? ' "指定车厢" ' : "") +
                      (a.length > 0 ? ' "指定坐席" ' : "") +
                      (i > 0 ? ' "下铺优惠券" ' : ""),
                    "等功能同时使用，请确认是否兑换~"
                  )
                : "";
            },
            je = function (e) {
              if (!e) return !0;
              var t = ze();
              return (
                !t ||
                new Promise(function (e) {
                  ve.showMultiButtonDialog({
                    title: "温馨提示",
                    content: t,
                    leftButtonName: "取消",
                    rightButtonName: "使用积分",
                    onRightButtonClick: e.bind(void 0, !0),
                    onLeftButtonClick: e.bind(void 0, !1),
                  });
                })
              );
            },
            We = (function () {
              var e = (0, Ze.Z)(
                (0, Te.Z)().mark(function e(t) {
                  return (0, Te.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), je(!!t);
                        case 2:
                          if (e.sent) {
                            e.next = 5;
                            break;
                          }
                          return e.abrupt("return");
                        case 5:
                          ve
                            .getDispatch()
                            .pointBookingModel.togglePointPayMode(t),
                            Ge();
                        case 7:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            Ge = (function () {
              var e = (0, Ze.Z)(
                (0, Te.Z)().mark(function e() {
                  var t, n, a, i, r;
                  return (0, Te.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            ve
                              .getDispatch()
                              .memberSaledModel.toggleBuyMember(!1),
                            ve
                              .getDispatch()
                              .memberSaledModel.toggleUseMemberShip(!1),
                            ve
                              .getDispatch()
                              .lowerBerthProductModel.toggleBuySleepCouponBag(
                                !1
                              ),
                            ve
                              .getDispatch()
                              .assignCarriageModel.updateSelectedCarriages([]),
                            Le(),
                            Tt(),
                            Pt(),
                            (t =
                              ve.getState().pointBookingModel.isPointPayMode),
                            (n = ve.getState().passengerModel),
                            (a = n.allPas),
                            (i = n.assigneesPas),
                            tt([]),
                            ve
                              .getDispatch()
                              .passengerModel.updateChildTicketCopyFromAdult(
                                []
                              ),
                            (e.next = 13),
                            (0, Ce.yR)({
                              isPointPayMode: t,
                              allPas: a,
                              assigneesPas: i,
                            })
                          );
                        case 13:
                          (r = e.sent), tt(r);
                        case 15:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            Ue = (function () {
              var e = (0, Ze.Z)(
                (0, Te.Z)().mark(function e() {
                  var t, n, a, i, r, o, c, l, s;
                  return (0, Te.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (t = ve.getState().passengerModel.allPas),
                            (n = ve.getState().trainModel.trainInfo),
                            (a =
                              ve.getState().pointBookingModel.isPointPayMode),
                            (e.next = 5),
                            Promise.all([(0, Ce.S3)(), (0, Ce.Hu)()])
                          );
                        case 5:
                          (i = e.sent),
                            (r = (0, Z.Z)(i, 2)),
                            (o = r[0]),
                            (c = r[1]),
                            (l = (o || {}).memberPoint),
                            (s =
                              parseInt(
                                (null == l ? void 0 : l.totalPoint) || 0
                              ) / 100),
                            ve
                              .getDispatch()
                              .pointBookingModel.updateUserIfPointOrder(c),
                            ve
                              .getDispatch()
                              .pointBookingModel.update12306MemberInfo(o),
                            ve
                              .getDispatch()
                              .pointBookingModel.togglePointPayMode(
                                n.IsCanPointsPay &&
                                  a &&
                                  s > 0 &&
                                  t.length * n.Price <= s
                              ),
                            a !==
                              ve.getState().pointBookingModel.isPointPayMode &&
                              Ge();
                        case 15:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            Ye = n(25014),
            Je = (function () {
              var e = (0, Ze.Z)(
                (0, Te.Z)().mark(function e() {
                  return (0, Te.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), ut();
                        case 2:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            qe = function () {
              var e = ve.getState().reschduleModel,
                t = e.isReschduleMode,
                n = e.oldOrderInfo;
              if (t) {
                var a = n.ticketInfos.map(function (e) {
                  return {
                    _disableDelete: !0,
                    CNName: e.passengerName,
                    pasName: e.passengerName,
                    PassengerType: e.passengerType,
                    ShowPassportCode: e.passportCode,
                  };
                });
                tt(a);
              }
            },
            $e = function () {
              var e = ve.getState().passengerModel.allPas,
                t = ve.getState().configModel.passengerChildConfig,
                n = ve.getState().passengerModel.childTicketCopyFromAdult;
              if (it(e)) {
                var a = rt(e);
                if (!a)
                  return (0, B.showToast)("儿童不能单独出行，请先添加成人");
                if (
                  e.filter(function (e) {
                    return e.CNName == a.CNName && e.isCopyFromAdult;
                  }).length == t &&
                  !(a = e.find(function (e) {
                    return e.CNName != a.CNName && at(e);
                  }))
                )
                  return (0, B.showToast)(
                    "每个成人最多可添加".concat(t, "为随行儿童")
                  );
                var i = "使用".concat(a.pasName, "的证件进出站"),
                  r = Object.assign(
                    {},
                    (0, A.Z)(
                      (0, A.Z)({}, a),
                      {},
                      {
                        PassengerType: 2,
                        isChild: !0,
                        isCopyFromAdult: !0,
                        desc: i,
                      }
                    )
                  );
                ve
                  .getDispatch()
                  .passengerModel.updateChildTicketCopyFromAdult(
                    [].concat((0, Re.Z)(n), [r])
                  ),
                  tt(e),
                  ve.ubtTrace(133511, e);
              }
            },
            Qe = function (e) {
              var t = e.idx,
                n = ve.getState().passengerModel,
                a = n.allPas,
                i = n.freeChildren,
                r = ve.getState().passengerModel.childTicketCopyFromAdult,
                o = [].concat((0, Re.Z)(a), (0, Re.Z)(i))[t];
              if (o.isFreeChild) {
                var c = t - a.length;
                return (
                  i.splice(c, 1),
                  void ve.getDispatch().passengerModel.updateFreeChildren(i)
                );
              }
              if (!xe.Z.checkDeletable(o, a))
                return (0, B.showToast)("请先删除儿童");
              a.splice(t, 1)[0].isCopyFromAdult &&
                (r.splice(0, 1),
                ve
                  .getDispatch()
                  .passengerModel.updateChildTicketCopyFromAdult(r)),
                tt(a),
                ve.ubtTrace(133511, a);
            },
            et = (function () {
              var e = (0, Ze.Z)(
                (0, Te.Z)().mark(function e() {
                  var t,
                    n,
                    a,
                    i,
                    r,
                    o,
                    c,
                    l,
                    s,
                    d,
                    u,
                    p,
                    m,
                    f,
                    h,
                    g,
                    S,
                    v,
                    b,
                    T;
                  return (0, Te.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (t = ve.getState().passengerModel),
                            (n = t.allPas),
                            (a = t.freeChildren),
                            (i = !!ve.getState().configModel.useUpper12306Text),
                            (r =
                              ve.getState().configModel.passengerCountConfig),
                            (o =
                              ve.getState().pointBookingModel.isPointPayMode),
                            (c =
                              ve.getState().pointBookingModel
                                .memberInfoWith12306),
                            (l = ve.getState().trainModel.trainInfo),
                            (s = {
                              selectedPasList: [].concat(
                                (0, Re.Z)(n),
                                (0, Re.Z)(a)
                              ),
                              useUpper12306Text: i,
                              passengerCountConfig: r,
                              gotoH5PageSwitchOn: !1,
                              isPointPayMode: o,
                              isSupportShowAssigneeTab: l.IsCanPointsPay,
                              pointPayTrainSeatPrice: l.Price,
                              switchPointPayModeTips: !o && ze(),
                              isCrossEnvTrain: l._isCrossEnv,
                              memberInfoWith12306: c,
                            }),
                            (d = Me.ZP.is2023NewRule4Kids(
                              null == l ? void 0 : l.DepartureDate
                            )
                              ? "1"
                              : ""),
                            (e.next = 10),
                            ve.navigateToAsync({
                              url: ""
                                .concat(
                                  Me.ZP.getTrainPsgListUrl(),
                                  "?isJianLou=",
                                  0,
                                  "&is2023NewRule4Kids="
                                )
                                .concat(d),
                              data: s,
                              ignoreError: !0,
                            })
                          );
                        case 10:
                          if (
                            ((u = e.sent),
                            (p = u.res),
                            (m = p.selectedPasList),
                            (f = p.selectedAssignees),
                            (h = p.isPointPayMode),
                            (g = p.freeChildren),
                            ve
                              .getDispatch()
                              .passengerModel.updateFreeChildren(g),
                            ve
                              .getDispatch()
                              .pointBookingModel.togglePointPayMode(h),
                            o !== h &&
                              (ve
                                .getDispatch()
                                .memberSaledModel.toggleBuyMember(!1),
                              ve
                                .getDispatch()
                                .memberSaledModel.toggleUseMemberShip(!1),
                              ve
                                .getDispatch()
                                .lowerBerthProductModel.toggleBuySleepCouponBag(
                                  !1
                                )),
                            (S = h ? Me.ZP.formAssigneesToPassengerList(f) : m),
                            (v = S.filter(function (e) {
                              return e.isChild && !e.IdentityNo;
                            })),
                            (b = S.filter(function (e) {
                              return !e.isChild || (e.isChild && e.IdentityNo);
                            })),
                            (T = v.length || 0) > 0)
                          )
                            for (
                              ve.getDispatch().passengerModel.updateAllPas(b),
                                S = S.filter(function (e) {
                                  return !(e.isChild && !e.IdentityNo);
                                });
                              T > 0;

                            )
                              $e(), T--;
                          else tt(S), ve.ubtTrace(133511, S);
                        case 21:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            tt = function (e) {
              var t = e.filter(function (e) {
                  return !e.isCopyFromAdult;
                }),
                n = ve.getState().passengerModel.childTicketCopyFromAdult,
                a = ve.getState().pointBookingModel.isPointPayMode;
              if (t.length > 0 && n && n.length > 0 && !a) {
                var i = t.filter(function (e) {
                  return at(e);
                });
                t.push.apply(
                  t,
                  (0, Re.Z)(
                    n.filter(function (e) {
                      return i.some(function (t) {
                        return t.pasName === e.pasName;
                      });
                    })
                  )
                );
              }
              !ve.getState().passengerModel.hasSelectAssignPas &&
                null != t &&
                t.some(function (e) {
                  return e.isAssignee;
                }) &&
                ve.getDispatch().passengerModel.updateHasSelectAssignPas(!0),
                ve.getDispatch().passengerModel.updateAllPas(t),
                nt();
            },
            nt = function () {
              qn(), Mt();
            },
            at = function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              return (
                1 == e.PassengerType ||
                (3 == e.PassengerType && e.convertStu) ||
                (3 == e.PassengerType && !e.convertStu && e.isStudentToAdult)
              );
            },
            it = function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : [],
                t = ve.getState().configModel.passengerCountConfig;
              return !(
                e.length >= t &&
                (ve.showCommonDialog({
                  content: "一个订单最多只能添加".concat(
                    t,
                    "名乘客，超过请分批购买"
                  ),
                }),
                1)
              );
            },
            rt = function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : [];
              return e.find(function (e) {
                return at(e);
              });
            },
            ot = function (e) {
              var t,
                n =
                  e.Birthday ||
                  H()(
                    (
                      (null === (t = e.idcard) || void 0 === t
                        ? void 0
                        : t.no) || e.IdentityNo
                    ).substring(6, 14)
                  ).format("YYYY-MM-DD");
              return !H()().subtract(18, "year").isBefore(n);
            },
            ct = function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : [];
              return e.find(function (e) {
                return ot(e);
              });
            },
            lt = function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : [];
              return !!e.find(function (e) {
                return "身份证" !== e.IdentityType;
              });
            },
            st = function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : [];
              return e.find(function (e) {
                return (
                  3 == e.PassengerType && !e.convertStu && !e.isStudentToAdult
                );
              });
            },
            dt = (function () {
              var e = (0, Ze.Z)(
                (0, Te.Z)().mark(function e() {
                  var t, n, a;
                  return (0, Te.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ((t = ve.getState().passengerModel.allPas),
                            !ve.getState().pointBookingModel.isPointPayMode)
                          ) {
                            e.next = 4;
                            break;
                          }
                          return e.abrupt("return");
                        case 4:
                          return (
                            (n = t.filter(function (e) {
                              return e.isInvited;
                            })),
                            (a = t.filter(function (e) {
                              return !e.isInvited;
                            })),
                            e.abrupt(
                              "return",
                              Me.ZP.getCommonPassenger()
                                .then(function (e) {
                                  var t,
                                    i = [];
                                  if (e.length > 0) {
                                    var r = [];
                                    e.forEach(function (e) {
                                      var t = a.find(function (t) {
                                        return (
                                          t.chosen &&
                                          t.PassengerID == e.PassengerID
                                        );
                                      });
                                      (e.chosen = !!t),
                                        t &&
                                          (t.isStudentToAdult &&
                                            ((e.isStudentToAdult =
                                              t.isStudentToAdult),
                                            (e.PassengerType = 1)),
                                          r.push(e));
                                    }),
                                      (i = [].concat(r, (0, Re.Z)(n)));
                                  } else i = n;
                                  var o =
                                    (null ===
                                      (t = Pe.WG.getAttr("bind12306")) ||
                                    void 0 === t
                                      ? void 0
                                      : t.passengerList12306) || [];
                                  i.forEach(function (e) {
                                    var t;
                                    e.isSelf =
                                      null ===
                                        (t = o.find(function (t) {
                                          return (
                                            t.PassengerName === e.CNName &&
                                            (0, Ye.B9)(
                                              e.IdentityNo,
                                              (0, Ye.MW)(e.IdentityType)
                                            ) === t.IDNo
                                          );
                                        })) || void 0 === t
                                        ? void 0
                                        : t.isSelf;
                                  }),
                                    tt(i),
                                    ve.ubtTrace(133511, i);
                                })
                                .catch(function (e) {
                                  return console.log(e);
                                })
                            )
                          );
                        case 7:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            ut = (function () {
              var e = (0, Ze.Z)(
                (0, Te.Z)().mark(function e() {
                  var t;
                  return (0, Te.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), (0, Ce.tp)();
                        case 2:
                          (t = e.sent) &&
                            ve
                              .getDispatch()
                              .passengerModel.updateAssigneesPas(t);
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            pt = function (e) {
              ve.getDispatch().specialCardModel.updateCardInfos(e || []);
            },
            mt = function () {
              var e,
                t = ve.getState().pointBookingModel.isPointPayMode,
                n = ve.getState().passengerModel,
                a = n.hasElderlyPassenger,
                i = n.hasNoFreeChild,
                r = n.haStudentTicket,
                o = n.allPas,
                c = n.freeChildren,
                l = ve.getState().specialCardModel,
                s = l.cardInfos,
                d = l.displayCard,
                u = ve.getState().appointSeatModel.sameRoom,
                p = ve.getState().assignCarriageModel.assignCarriageInfo,
                m = ve.getState().combinationSeatModel.manualSelectSeatInfo,
                h = ve.getState().trainModel.isKTZ,
                g = ve.getState().xProModel,
                S = g.canAppointPaidProduct,
                v = g.cantAppointPaidProductDesc,
                b = null == d ? void 0 : d.cardType,
                T = o.length + c.length,
                P = o.length,
                N = null;
              !t &&
                T > 1 &&
                (r
                  ? (N = s.find(function (e) {
                      return e.cardType === Y.StudentCard;
                    }))
                  : i || c.length > 0
                  ? (N = s.find(function (e) {
                      return e.cardType === Y.ParentChildCard;
                    }))
                  : a &&
                    (N = s.find(function (e) {
                      return e.cardType === Y.SeniorCard;
                    })));
              var M = [];
              if (N) {
                var C,
                  I,
                  k = N,
                  D = k.adjacentSeat,
                  x = k.accessibleCarriages,
                  B = k.sameRoom,
                  V =
                    !h ||
                    !(
                      null == m ||
                      null === (C = m.many) ||
                      void 0 === C ||
                      null === (I = C.seatTypes) ||
                      void 0 === I ||
                      !I.find(function (e) {
                        return "near" === e.code;
                      })
                    ),
                  A =
                    P < 2 ||
                    (!!D && !!D.passengerLimit && P > D.passengerLimit) ||
                    (!S && h);
                V &&
                  D &&
                  M.push({
                    type: J.adjacentSeat,
                    icon: D.icon,
                    text: D.title,
                    tag: D.desc,
                    extInfo: D.adjacentSeatExtInfo,
                    rightView: function () {
                      var e,
                        t = (0, f.useState)(!1),
                        n = (0, Z.Z)(t, 2),
                        a = n[0],
                        i = n[1];
                      return !S && h
                        ? (0, w.tZ)(y.View, { children: v })
                        : P < 2
                        ? (0, w.tZ)(y.View, { children: "仅有一座席" })
                        : A
                        ? (0, w.tZ)(y.View, {
                            children: "".concat(
                              D.passengerLimit,
                              "人以上不支持"
                            ),
                          })
                        : null != D &&
                          null !== (e = D.detailList) &&
                          void 0 !== e &&
                          e.length
                        ? (0, w.BX)(y.View, {
                            className: "switch-seat",
                            onClick: function () {
                              i(!a);
                            },
                            children: [
                              (0, w.tZ)(y.Text, {
                                children: a ? D.detailList[0] : D.detailList[1],
                              }),
                              (0, w.tZ)(y.Image, {
                                src: "https://images3.c-ctrip.com/ztrip/Z-jxl/202308/qiehuan.png",
                                className: "switch-icon",
                              }),
                            ],
                          })
                        : (0, w.tZ)(y.View, {
                            style: "text-decoration: line-through",
                            children: D.priceDesc,
                          });
                    },
                    disable: A,
                  });
                var _ = !(null != x && x.carriageNo && S);
                p &&
                  x &&
                  M.push({
                    type: J.accessibleCarriages,
                    icon: x.icon,
                    text: x.title,
                    tag: x.desc,
                    rightView: function () {
                      return S
                        ? (0, w.tZ)(y.View, {
                            style: "text-decoration: line-through",
                            children: x.priceDesc,
                          })
                        : (0, w.tZ)(y.View, { children: v });
                    },
                    disable: _,
                  });
                var R =
                  P < 2 ||
                  (!!B && !!B.passengerLimit && P > B.passengerLimit) ||
                  !S;
                u &&
                  B &&
                  M.push({
                    type: J.sameRoom,
                    icon: B.icon,
                    text: B.title,
                    extInfo: B.sameRoomExtInfo,
                    tag: B.desc,
                    rightView: function () {
                      return P < 2
                        ? (0, w.tZ)(y.View, { children: "仅有一座席" })
                        : S
                        ? R
                          ? (0, w.tZ)(y.View, {
                              children: "".concat(
                                B.passengerLimit,
                                "人以上不支持"
                              ),
                            })
                          : (0, w.tZ)(y.View, {
                              style: "text-decoration: line-through",
                              children: B.priceDesc,
                            })
                        : (0, w.tZ)(y.View, { children: v });
                    },
                    disable: R,
                  });
              }
              ve.getDispatch().specialCardModel.updateSpecialCard(N),
                ve.getDispatch().specialCardModel.updateCardRights(M),
                b !== (null === (e = N) || void 0 === e ? void 0 : e.cardType)
                  ? ht(!1)
                  : ft();
            },
            ft = function () {
              var e = ve.getState().specialCardModel,
                t = e.hasSpecialCarriageRights,
                n = e.hassSdjacentSeatRights,
                a = e.displayCard,
                i = e.checked,
                r = e.hasSameRoomRights,
                o = ve.getState().combinationSeatModel.manualSelectSeatInfo;
              if (i) {
                if (o && n) {
                  var c,
                    l,
                    s =
                      null === (c = o.many) ||
                      void 0 === c ||
                      null === (l = c.seatTypes) ||
                      void 0 === l
                        ? void 0
                        : l.find(function (e) {
                            return "near" === e.code;
                          });
                  s && (s.selected = !0),
                    (o.acceptOtherSeat = 1),
                    ve
                      .getDispatch()
                      .combinationSeatModel.updateManualSelectSeatInfo(o);
                }
                if (t) {
                  var d,
                    u =
                      null == a ||
                      null === (d = a.accessibleCarriages) ||
                      void 0 === d
                        ? void 0
                        : d.carriageNo;
                  u &&
                    ve
                      .getDispatch()
                      .assignCarriageModel.updateSelectedCarriages([u]);
                }
                if (r) {
                  var p = ve.getState().appointSeatModel.sameRoom;
                  p && (p._selected = !0),
                    ve.getDispatch().appointSeatModel.updateSameRoomStatus(p);
                }
              }
            },
            ht = function (e) {
              var t = ve.getState().assignCarriageModel.selectedCarriages,
                n = ve.getState().specialCardModel.hasSpecialCarriageRights;
              e && t.length > 0 && n
                ? ve.showCommonDialog(
                    "福利卡中无障碍车厢权益与指定车厢服务冲突，无法同时勾选"
                  )
                : (ve.getDispatch().specialCardModel.toggleCheckedStatus(e),
                  Pt(),
                  wt(),
                  ft());
            },
            gt = function () {
              var e,
                t,
                n = ve.getState().specialCardModel.displayCard;
              null != n &&
                null !== (e = n.cardBanner) &&
                void 0 !== e &&
                e.canNotUserUrl &&
                $n({
                  toast: {
                    toastCode: D.ImageDrawer,
                    data: {
                      imageUrl:
                        null === (t = n.cardBanner) || void 0 === t
                          ? void 0
                          : t.canNotUserUrl,
                    },
                  },
                });
            },
            St = function (e) {
              return (
                (function (e) {
                  var t = e.buyMemberSeasonCard,
                    n = e.isNightChoose,
                    a = e.xMemberProductFrom,
                    i = e.chooseNightSeatInfoFromX,
                    r = e.treasureGoodsInfoOfMemberCardFromX;
                  ve
                    .getDispatch()
                    .memberSaledModel.updateStatus({ isBindMemberSaled: t }),
                    t &&
                      (ve
                        .getDispatch()
                        .memberSaledModel.updateMemberProductFrom(a),
                      ve
                        .getDispatch()
                        .memberSaledModel.updateTreasureGoodsInfoFromX(r)),
                    ve
                      .getDispatch()
                      .nightBookingModel.updateSelectNightEleDelivery(!!n),
                    ve
                      .getDispatch()
                      .nightBookingModel.updateEledeliveryInfoFromX(i),
                    Oe();
                })(e),
                Promise.all([vt(!0), It()]).then(function () {
                  mt();
                })
              );
            },
            vt = (function () {
              var e = (0, Ze.Z)(
                (0, Te.Z)().mark(function e() {
                  var t,
                    n,
                    a,
                    i,
                    r,
                    o,
                    c,
                    l,
                    s,
                    d,
                    u,
                    p,
                    m,
                    f,
                    h,
                    g,
                    S,
                    v,
                    b,
                    T,
                    Z,
                    y,
                    N,
                    M,
                    w,
                    C,
                    I,
                    k,
                    D,
                    x,
                    B,
                    V,
                    A,
                    _,
                    R,
                    E,
                    O,
                    L,
                    F,
                    X,
                    K,
                    z,
                    j,
                    W,
                    G,
                    U,
                    Y,
                    J,
                    q,
                    $,
                    Q,
                    ee,
                    te,
                    ne,
                    ae,
                    ie,
                    re,
                    oe,
                    ce,
                    le,
                    se,
                    de,
                    ue,
                    me,
                    fe,
                    he = arguments;
                  return (0, Te.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((n = he.length > 0 && void 0 !== he[0] && he[0]),
                              (a =
                                ve.getState().darkModel
                                  .accountHealthOriginalCode),
                              (i =
                                ve.getState().memberSaledModel
                                  .isBindMemberSaled),
                              (r =
                                null === (t = ve.getState().trainModel) ||
                                void 0 === t
                                  ? void 0
                                  : t.trainInfo),
                              (o = r.seats),
                              (c = void 0 === o ? [] : o),
                              (l = r.DepartureDate),
                              (s = void 0 === l ? "" : l),
                              (d = r.DepartTime),
                              (u = void 0 === d ? "" : d),
                              (p = r.DepartTimeStamp),
                              (m = r.SeatName),
                              (f = r.ArriveTime),
                              (h = r.TakeDays),
                              (g = r.TrainNumber),
                              (S = r.DepartStation),
                              (v = r.ArriveStation),
                              (b = r.Price),
                              (T = ve.getState().passengerModel.allPas),
                              0 !==
                                (Z = Array.isArray(c)
                                  ? c.map(function (e) {
                                      return {
                                        name: e.SeatName,
                                        price: e.SeatPrice,
                                        amount: e.SeatInventory,
                                      };
                                    })
                                  : []).length)
                            ) {
                              e.next = 8;
                              break;
                            }
                            return e.abrupt("return");
                          case 8:
                            return (
                              (y = ve.getState().darkModel.account12306Status),
                              (N = Z.find(function (e) {
                                return e.name === m;
                              })),
                              (M = N ? N.amount : 0),
                              (w = H()(p).add(h, "day").format("YYYY-MM-DD")),
                              (C = [
                                {
                                  departStationName: S,
                                  arriveStationName: v,
                                  departDateTime: H()(p).format(
                                    "YYYY-MM-DD HH:mm:ss"
                                  ),
                                  arriveDateTime: ""
                                    .concat(w, " ")
                                    .concat(f, ":00"),
                                  trainNum: g,
                                  seatName: m,
                                  routeSequence: 1,
                                  price: b,
                                  leftTicketNum: M,
                                },
                              ]),
                              (I = T.map(function (e) {
                                return {
                                  passengerName: e.pasName,
                                  passengerType: e.PassengerType,
                                  identityType: e.cardType,
                                  identityNumber: e.IdentityNo,
                                };
                              })),
                              (k = {
                                departureTime: ""
                                  .concat(s, " ")
                                  .concat(u, ":00"),
                                arriveTime: "".concat(w, " ").concat(f, ":00"),
                                seatList: Z,
                              }),
                              (D = {
                                trainNo: g,
                                departureTime: ""
                                  .concat(s, " ")
                                  .concat(u, ":00"),
                                departureStation: S,
                                arriveTime: "".concat(w, " ").concat(f, ":00"),
                                commonSeatInfos: Z,
                                arriveStation: v,
                              }),
                              (x = {
                                elecTicketInfo: {
                                  seatList: [N],
                                  departureTime: ""
                                    .concat(s, " ")
                                    .concat(u, ":00"),
                                  trainNo: g,
                                },
                                account12306Status: y,
                                passengerInfos: I,
                                orderTicketList: C,
                                vipInfo: k,
                                fromPage: 2,
                                wechatProductChoseFlag: i ? 1 : 0,
                                commonTrainInfo: D,
                              }),
                              n || (x.authFailType = (0, pe.Bh)(a)),
                              (e.prev = 18),
                              (e.next = 21),
                              (n ? De.xX : De.eb)(x)
                            );
                          case 21:
                            if (1 !== (B = e.sent).resultCode) {
                              e.next = 46;
                              break;
                            }
                            if (
                              ((A = (V = B).elecTicketResult),
                              (_ = void 0 === A ? {} : A),
                              (R = V.memberShipBagInfo),
                              (E = V.activityInfo),
                              (O = V.lowerBerthProductInfo),
                              (L = V.authFailToastInfo),
                              (F = V.assignCarriageInfo),
                              (X = V.abTestMap),
                              (K = void 0 === X ? {} : X),
                              (z = V.userRoleInfo),
                              (j = void 0 === z ? {} : z),
                              (W = V.trainHotelReturnCashInfo),
                              (G = void 0 === W ? {} : W),
                              (U = V.manualSelectSeatInfo),
                              (Y = void 0 === U ? "" : U),
                              (J = V.combinationSeat),
                              (q = void 0 === J ? {} : J),
                              ($ = V.sameRoom),
                              (Q = void 0 === $ ? {} : $),
                              (ee = V.hotelTagCashBackJson),
                              (te = V.maxCanDeductCouponInfo),
                              (ne = V.exclusiveCrowdList),
                              !n)
                            ) {
                              e.next = 45;
                              break;
                            }
                            if (
                              (Be(R),
                              Ee({ elecTicketResult: _, sameRoom: Q }),
                              pt(ne || []),
                              E && E.hotelCouponInfo)
                            )
                              try {
                                (re = JSON.parse(E.hotelCouponInfo)),
                                  ve
                                    .getDispatch()
                                    .crossProModel.updateHotelCouponIconOnHoldPop(
                                      re.icon
                                    );
                              } catch (e) {
                                console.log(e);
                              }
                            if (
                              (ve
                                .getDispatch()
                                .crossProModel.updateTrainHotelReturnCashInfo(
                                  G.desc ? G : null
                                ),
                              ve
                                .getDispatch()
                                .lowerBerthProductModel.updateLowerBerthProductInfo(
                                  O
                                ),
                              ve
                                .getDispatch()
                                .nightBookingModel.updateNightEledeliveryInfo(
                                  null == _ ? void 0 : _.nightEledeliveryInfo
                                ),
                              ve
                                .getDispatch()
                                .nightBookingModel.updateInterceptToast(
                                  null == _ ? void 0 : _.toastV1
                                ),
                              ve
                                .getDispatch()
                                .assignCarriageModel.updateAssignCarriageInfo(
                                  F
                                ),
                              ve
                                .getDispatch()
                                .combinationSeatModel.updateCombinationSeatInfo(
                                  q.title ? q : null
                                ),
                              Y &&
                                ((oe = JSON.parse(Y)).single.seatTypes.map(
                                  function (e) {
                                    return (e.num = 0);
                                  }
                                ),
                                (oe.single.total = 0),
                                ve
                                  .getDispatch()
                                  .combinationSeatModel.updateManualSelectSeatInfo(
                                    oe
                                  )),
                              ee &&
                                n &&
                                ((ce = JSON.parse(ee)),
                                ve.ubtTrace(
                                  "TZWBuyBook_PriceModule_Hotel_exposure",
                                  {
                                    PageId: P.default.isTieyou
                                      ? "10320660965"
                                      : "10320660961",
                                    ActivityType: ce.content,
                                  }
                                ),
                                ve
                                  .getDispatch()
                                  .crossProModel.updateHotelTagCashBackJson(
                                    ce
                                  )),
                              !(
                                ((null == R ||
                                null === (ae = R.sleepNightEntity) ||
                                void 0 === ae
                                  ? void 0
                                  : ae.amount) > 0 ||
                                  (2 == (null == R ? void 0 : R.vipCardType) &&
                                    ve.getState().memberSaledModel
                                      .buyMemberShip)) &&
                                ve.getState().xProModel.canAppointPaidProduct &&
                                ve.getState().appointSeatModel
                                  .showAppointSeatBox &&
                                1 !=
                                  (null == _ ||
                                  null === (ie = _.appointSeatInfo) ||
                                  void 0 === ie
                                    ? void 0
                                    : ie.appointSeatFor12306)
                              ))
                            ) {
                              e.next = 43;
                              break;
                            }
                            if (
                              (ve
                                .getDispatch()
                                .memberSaledModel.toggleUseMemberShip(!0),
                              !(
                                (null === (le = ve.getState().passengerModel) ||
                                void 0 === le ||
                                null === (se = le.allPas) ||
                                void 0 === se
                                  ? void 0
                                  : se.length) <= 0
                              ))
                            ) {
                              e.next = 41;
                              break;
                            }
                            return e.abrupt("return");
                          case 41:
                            -1 !==
                              (fe =
                                null ===
                                  (de = ve.getState().appointSeatModel) ||
                                void 0 === de ||
                                null === (ue = de.appointSeatDetail) ||
                                void 0 === ue ||
                                null === (me = ue.seatInfoList) ||
                                void 0 === me
                                  ? void 0
                                  : me.findIndex(function (e) {
                                      return "下铺" === e.seatName;
                                    })) && He(fe || 0);
                          case 43:
                            return (
                              ve
                                .getDispatch()
                                .couponDeuctModel.updateCouponDeuctInfo(te),
                              e.abrupt("return")
                            );
                          case 45:
                            return e.abrupt("return", {
                              authFailToastInfo: L,
                              abTestMap: K,
                              userRoleInfo: j,
                              statusOn12306Account: a,
                            });
                          case 46:
                            e.next = 51;
                            break;
                          case 48:
                            (e.prev = 48),
                              (e.t0 = e.catch(18)),
                              console.log(e.t0);
                          case 51:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[18, 48]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            bt = function (e, t) {
              var n = ve.getState().combinationSeatModel.manualSelectSeatInfo;
              n.single.seatTypes.map(function (n) {
                n.code === t.code &&
                  (n.num = "add" === e ? n.num + 1 : n.num - 1);
              });
              var a = 0;
              n.single.seatTypes.map(function (e) {
                a += e.num;
              }),
                (n.single.total = a),
                ve
                  .getDispatch()
                  .combinationSeatModel.updateManualSelectSeatInfo(n);
            },
            Tt = function () {
              var e,
                t,
                n,
                a,
                i = ve.getState().combinationSeatModel.manualSelectSeatInfo;
              null == i ||
                null === (e = i.many) ||
                void 0 === e ||
                null === (t = e.seatTypes) ||
                void 0 === t ||
                t.map(function (e) {
                  return (e.selected = !1);
                }),
                null == i ||
                  null === (n = i.single) ||
                  void 0 === n ||
                  null === (a = n.seatTypes) ||
                  void 0 === a ||
                  a.map(function (e) {
                    return (e.num = 0);
                  }),
                null != i && i.single && (i.single.total = 0),
                i && (i.acceptOtherSeat = 0),
                ve
                  .getDispatch()
                  .combinationSeatModel.updateManualSelectSeatInfo(i);
            },
            Zt = function (e) {
              var t, n, a;
              return (
                (null == e || null === (t = e.single) || void 0 === t
                  ? void 0
                  : t.total) > 0 ||
                (null == e ||
                null === (n = e.many) ||
                void 0 === n ||
                null === (a = n.seatTypes) ||
                void 0 === a
                  ? void 0
                  : a.some(function (e) {
                      return e.selected;
                    }))
              );
            },
            yt = function () {
              var e = ve.getState().passengerModel.allPas;
              return e.length > 0 &&
                e.some(function (e) {
                  return (
                    3 === e.PassengerType ||
                    4 === e.PassengerType ||
                    "外国人永久居留身份证" === e.IdentityType
                  );
                })
                ? 0
                : 1;
            },
            Pt = function () {
              ve.getDispatch().seatSelectorModel.updateSelectedSeats([]);
            },
            Nt = function () {
              ve.showCommonDialog("当前乘客不支持夜间通道出票");
            },
            Mt = function () {
              Pt(), Oe();
              var e = ve.getState().appointSeatModel.total,
                t = ve.getState().appointSeatModel.appointSeatDetail,
                n = ve.getState().xProModel,
                a = n.canAppointPaidProduct,
                i = n.canAppointFreeBedding,
                r = ve.getState().passengerModel.allPas,
                o = ve.getState().trainModel.isBed,
                c = ve.getState().memberSaledModel,
                l = c.memberShipCardVisible,
                s = c.useMemberShip,
                d = c.memberShipBagInfo,
                u = ve.getState().nightBookingModel.selectNightEleDelivery,
                p = P.default.isTieyou,
                m = r.length,
                f = r.some(function (e) {
                  return (
                    3 == e.PassengerType && !e.convertStu && !e.isStudentToAdult
                  );
                }),
                h = r.some(function (e) {
                  return "身份证" !== e.IdentityType;
                });
              if (
                s &&
                (!a || i) &&
                d &&
                1 === (null == d ? void 0 : d.pkResult) &&
                (ve.getDispatch().memberSaledModel.toggleUseMemberShip(!1),
                l && 0 == e)
              ) {
                var g = f
                  ? "卧铺选座服务暂不支持购买学生票"
                  : "卧铺选座服务暂不支持身份证外的其他证件类型";
                (0, B.showToast)(g);
              }
              if (
                (1 !== yt() &&
                  (u &&
                    (ve
                      .getDispatch()
                      .nightBookingModel.updateSelectNightEleDelivery(!1),
                    Nt()),
                  s &&
                    2 === (null == d ? void 0 : d.pkResult) &&
                    (ve.getDispatch().memberSaledModel.toggleUseMemberShip(!1),
                    Nt())),
                t && o && r.length && !p && ve.ubtTrace(134041),
                o &&
                  t &&
                  t.seatInfoList &&
                  e >= 1 &&
                  1 != (null == t ? void 0 : t.appointSeatFor12306))
              ) {
                if (f) {
                  if (t && t.seatInfoList) {
                    var S = t.seatInfoList.map(function (e) {
                      return (0, A.Z)((0, A.Z)({}, e), {}, { num: 0 });
                    });
                    ve
                      .getDispatch()
                      .appointSeatModel.updateAppointSeatDetail(
                        (0, A.Z)((0, A.Z)({}, t), {}, { seatInfoList: S })
                      ),
                      ve.getDispatch().appointSeatModel.updateTotal(0);
                  }
                  return void (0, B.showToast)("学生票暂不支持优先选铺服务");
                }
                if (h) {
                  if (t && t.seatInfoList) {
                    var v = t.seatInfoList.map(function (e) {
                      return (0, A.Z)((0, A.Z)({}, e), {}, { num: 0 });
                    });
                    ve
                      .getDispatch()
                      .appointSeatModel.updateAppointSeatDetail(
                        (0, A.Z)((0, A.Z)({}, t), {}, { seatInfoList: v })
                      ),
                      ve.getDispatch().appointSeatModel.updateTotal(0);
                  }
                  return void (0, B.showToast)("选铺服务只支持身份证购票");
                }
                console.log("可以优选座席～");
              }
              var b = xe.Z.isHasChild(r),
                T = xe.Z.isHasOld(r);
              if (t)
                if (b || T) {
                  var Z;
                  if (T) {
                    var y =
                      (!!t.tips &&
                        t.tips.find(function (e) {
                          return 2 === e.type;
                        })) ||
                      {};
                    ve.getDispatch().appointSeatModel.updateAppointSeatDetail(
                      (0, A.Z)((0, A.Z)({}, t), {}, { topTip: y.tip || "" })
                    );
                  } else {
                    var N =
                      (!!t.tips &&
                        t.tips.find(function (e) {
                          return 1 === e.type;
                        })) ||
                      {};
                    ve.getDispatch().appointSeatModel.updateAppointSeatDetail(
                      (0, A.Z)((0, A.Z)({}, t), {}, { topTip: N.tip || "" })
                    );
                  }
                  !p &&
                    null !==
                      (Z = ve.getState().appointSeatModel.appointSeatDetail) &&
                    void 0 !== Z &&
                    Z.topTip &&
                    ve.ubtTrace(134043);
                } else
                  ve.getDispatch().appointSeatModel.updateAppointSeatDetail(
                    (0, A.Z)((0, A.Z)({}, t), {}, { topTip: "" })
                  );
              if (e > m && t && t.seatInfoList) {
                for (
                  var M = e - m,
                    w = t.seatInfoList.findIndex(function (e) {
                      return "上铺" === e.seatName;
                    }),
                    C = t.seatInfoList.findIndex(function (e) {
                      return "中铺" === e.seatName;
                    }),
                    I = t.seatInfoList.findIndex(function (e) {
                      return "下铺" === e.seatName;
                    }),
                    k = w > -1 ? t.seatInfoList[w].num : 0,
                    D = C > -1 ? t.seatInfoList[C].num : 0,
                    x = I > -1 ? t.seatInfoList[I].num : 0;
                  M > 0 &&
                  (k > 0 ? k-- : D > 0 ? D-- : x--,
                  0 !== (M = (e = k + D + x) - m));

                );
                w > -1 &&
                  (t.seatInfoList[w] = (0, A.Z)(
                    (0, A.Z)({}, t.seatInfoList[w]),
                    {},
                    { num: k }
                  )),
                  C > -1 &&
                    (t.seatInfoList[C] = (0, A.Z)(
                      (0, A.Z)({}, t.seatInfoList[C]),
                      {},
                      { num: D }
                    )),
                  I > -1 &&
                    (t.seatInfoList[I] = (0, A.Z)(
                      (0, A.Z)({}, t.seatInfoList[I]),
                      {},
                      { num: x }
                    )),
                  ve.getDispatch().appointSeatModel.updateAppointSeatDetail(t),
                  ve.getDispatch().appointSeatModel.updateTotal(e);
              }
              a || wt(), mt();
            },
            wt = function () {
              Tt(),
                ve
                  .getDispatch()
                  .assignCarriageModel.updateSelectedCarriages([]),
                Le();
            },
            Ct = function (e) {
              for (
                var t = [U.ACCIDENT, U.DELAY],
                  n = function (n) {
                    var a = e.find(function (e) {
                      return e.productType == t[n];
                    });
                    if (a) return { v: a };
                  },
                  a = 0;
                a < t.length;
                a++
              ) {
                var i = n(a);
                if ("object" === (0, ke.Z)(i)) return i.v;
              }
              return null;
            },
            It = (function () {
              var e = (0, Ze.Z)(
                (0, Te.Z)().mark(function e() {
                  var t, n, a;
                  return (0, Te.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (t = ve.getState().trainModel.trainInfo),
                            (e.next = 3),
                            (0, De.Gb)({
                              trainInfo: {
                                trainNo: t.TrainNumber,
                                departureTime: ""
                                  .concat(t.DepartureDate, " ")
                                  .concat(t.DepartTime, ":00"),
                                departureStation: t.DepartStation,
                                arriveTime: ""
                                  .concat(t.ArriveDate, " ")
                                  .concat(t.ArriveTime, ":00"),
                                arriveStation: t.ArriveStation,
                                seatInfo: {
                                  name: t.chosenSeat.SeatName,
                                  price: t.chosenSeat.SeatPrice,
                                  amount: t.chosenSeat.SeatInventory,
                                },
                              },
                            })
                          );
                        case 3:
                          (n = e.sent), (a = n.productInfoList), xt(a);
                        case 6:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            kt = (function () {
              var e = (0, Ze.Z)(
                (0, Te.Z)().mark(function e() {
                  var t, n, a, i, r, o, c, l, s, d, u, p, m;
                  return (0, Te.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ((t = ve.getState().passengerModel.allPas),
                            (n = ve.getState().secSkillModel.isPreSecKill),
                            (a =
                              ve.getState().pointBookingModel.isPointPayMode),
                            !(
                              ve.getState().reschduleModel.isReschduleMode ||
                              n ||
                              a ||
                              lt(t)
                            ) && ct(t))
                          ) {
                            e.next = 7;
                            break;
                          }
                          return (
                            we.Z.commonDebugTrace(
                              "改签、秒杀、积分、非身份证乘客、无成人乘客订单不搭售前产品"
                            ),
                            e.abrupt("return")
                          );
                        case 7:
                          if (
                            ((i = ve.getState().productPopupModel),
                            (r = i.product),
                            (o = i.checked),
                            (c = i.canPop),
                            (l = i.isTestB),
                            !r || o || !c || !l)
                          ) {
                            e.next = 18;
                            break;
                          }
                          s = "";
                          try {
                            s =
                              null ===
                                (d = JSON.parse(
                                  null === (u = r.basicInfo) ||
                                    void 0 === u ||
                                    null === (p = u.placeOrderRetainJson) ||
                                    void 0 === p
                                    ? void 0
                                    : p.json
                                )) || void 0 === d
                                ? void 0
                                : d.title;
                          } catch (e) {}
                          return (
                            ve.ubtTrace("TZWBuyBook_XProductPop_exposure", {
                              PageId: ve.getPage().pageId,
                              ProductName: s,
                            }),
                            (e.next = 14),
                            $n(D.PaymentUpsellModal)
                          );
                        case 14:
                          return (
                            (m = e.sent),
                            1 === m.code
                              ? (ve
                                  .getDispatch()
                                  .productPopupModel.toggleProductPopupChecked(
                                    !0
                                  ),
                                ve.ubtTrace(
                                  "TZWBuyBook_XProductPop_Accept_click",
                                  {
                                    PageId: ve.getPage().pageId,
                                    ProductName: s,
                                  }
                                ))
                              : ve.ubtTrace(
                                  "TZWBuyBook_XProductPop_Reject_click",
                                  {
                                    PageId: ve.getPage().pageId,
                                    ProductName: s,
                                  }
                                ),
                            e.abrupt("return")
                          );
                        case 18:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            Dt = function () {
              ve.getDispatch().productPopupModel.setCanPop(!1);
            },
            xt = (function () {
              var e = (0, Ze.Z)(
                (0, Te.Z)().mark(function e(t) {
                  var n;
                  return (0, Te.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          (n = Ct(t)),
                            ve
                              .getDispatch()
                              .productPopupModel.setProductPopup(n);
                        case 2:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            Bt = (function () {
              var e = (0, Ze.Z)(
                (0, Te.Z)().mark(function e() {
                  return (0, Te.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          ve.getDispatch().productPopupModel.setABTestWithBValue(
                            !0
                          );
                        case 1:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            Vt = n(79295),
            At = n(4102),
            _t = n(77900),
            Rt = n(44830),
            Et = function () {
              ve.getDispatch().holderModel.setOrder(""),
                ve.getDispatch().holderModel.updatePreHoldPercent(0),
                ve.getDispatch().holderModel.updatePreholdDisplayStep(0),
                ve.getDispatch().holderModel.toggleShowHotelCoupon(!1),
                ve.getDispatch().holderModel.toggleShowHoldSeatProduct(!1),
                ve.getDispatch().holdSeatProductModel.setHoldSeatProduct(null),
                ve
                  .getDispatch()
                  .authFailProductModel.updateAuthFailToastInfo({});
            },
            Ot = function e(t) {
              var n,
                a,
                i = t,
                r = ve.getState().trainModel.trainInfo,
                o = {
                  orderNumber: i,
                  clientId: "",
                  reqTime: "",
                  clientInfo: "",
                  appVersion: P.default.appVersion,
                  deviceId: "",
                  partnerName: P.default.partner,
                  trainInfo: {
                    seatNumber:
                      (null == r ||
                      null === (n = r.seats) ||
                      void 0 === n ||
                      null ===
                        (a = n.find(function (e) {
                          return (
                            e.SeatName == (null == r ? void 0 : r.SeatName)
                          );
                        })) ||
                      void 0 === a
                        ? void 0
                        : a.SeatInventory) || 0,
                  },
                };
              return (
                ve.destoryPageTimer(G.preholdSeatTimer),
                (0, Ie.BFI)(o)
                  .then(function (t) {
                    var n, a, r, o, c;
                    if (
                      [-1, 2, 3].includes(t.resultCode) &&
                      t.authFailToastInfo
                    )
                      return (
                        ve.destoryPageTimer(G.preholdSeatTimer),
                        ve.destoryPageTimer(G.preHoldTimeoutTimer),
                        "stuQlf" ===
                        (null == t ||
                        null === (c = t.authFailToastInfo) ||
                        void 0 === c
                          ? void 0
                          : c.interceptType)
                          ? on(i)
                          : (bn(
                              { authFailToastInfo: t.authFailToastInfo },
                              x.hold
                            ),
                            { isPreHoldIntercept: !0 })
                      );
                    if (t.holdSeatFailCode && 6 == t.holdSeatFailCode)
                      return (
                        fn(i),
                        we.Z.commonDebugTrace(
                          "扣位等待弹窗 14岁以下儿童需要使用儿童票出票限制扣位中断"
                        ),
                        { isPreHoldIntercept: !0 }
                      );
                    if (
                      [-1, 2].includes(t.resultCode) &&
                      1 != t.smartHoldSeatState
                    )
                      return (
                        Qn(),
                        void we.Z.commonDebugTrace(
                          "前置扣位失败，异常, 且不在智能推荐扣位中或扣位成功"
                        )
                      );
                    if (
                      null === (n = t.holdSeatShowFlagInfo) ||
                      void 0 === n ||
                      !n.holdSeatAutoJumpDetailFlag
                    ) {
                      if (
                        1 ==
                        (null == t ||
                        null === (a = t.holdSeatShowFlagInfo) ||
                        void 0 === a
                          ? void 0
                          : a.holdSeatAutoJumpInterruptFlag)
                      ) {
                        var l = x.hold;
                        return (
                          v().redirectTo({
                            url: "/pages/12306/dark/index?interceptScene="
                              .concat(l, "&oid=")
                              .concat(i),
                          }),
                          we.Z.commonDebugTrace("扣位中断 跳中断页场景"),
                          { isPreHoldIntercept: !0 }
                        );
                      }
                      if (2 == t.smartHoldSeatState)
                        return Lt(i), { isPreHoldIntercept: !0 };
                      var s, d, u, p, m, f, h;
                      if (t.holdSeatFailCode && 5 == t.holdSeatFailCode)
                        return (
                          ve.destoryPageTimer(G.preholdSeatTimer),
                          ve.showCommonDialog({
                            content:
                              (null == t ||
                              null === (s = t.commonToasts) ||
                              void 0 === s ||
                              null === (d = s[0]) ||
                              void 0 === d ||
                              null === (u = d.content) ||
                              void 0 === u
                                ? void 0
                                : u.join("")) || "下单失败，请重试",
                            title:
                              (null == t ||
                              null === (p = t.commonToasts) ||
                              void 0 === p ||
                              null === (m = p[0]) ||
                              void 0 === m
                                ? void 0
                                : m.title) || "下单失败",
                            buttonName:
                              (null == t ||
                              null === (f = t.commonToasts) ||
                              void 0 === f ||
                              null === (h = f[0]) ||
                              void 0 === h
                                ? void 0
                                : h.buttonName) || "知道了",
                            onButtonClick: function () {
                              ve.navigateBack();
                            },
                          }),
                          { isPreHoldIntercept: !0 }
                        );
                      null !== (r = t.holdSeatShowFlagInfo) &&
                        void 0 !== r &&
                        r.holdSeatWaitToastUserGoToDetailFlag &&
                        (we.Z.commonDebugTrace("扣位等待弹窗 露出跳转详情标记"),
                        ve
                          .getDispatch()
                          .holderModel.toggleShowOrderDetailEntry(!0));
                      var g =
                        null == t ||
                        null === (o = t.productInfoList) ||
                        void 0 === o
                          ? void 0
                          : o[0];
                      if (1 == t.resultCode) {
                        if (ve.getState().holderModel.preholdDisplayStep < 4)
                          return void ve
                            .getDispatch()
                            .holderModel.updatePreholdDisplayStep(5);
                        var S = 200,
                          b = !1,
                          T = !1,
                          Z = function () {
                            if (T) b = !0;
                            else {
                              var e =
                                ve.getState().holderModel.preHoldPercent +
                                Math.round(5 * Math.random()) +
                                1;
                              if (e > 100)
                                return (
                                  (e = 100),
                                  ve
                                    .getDispatch()
                                    .holderModel.updatePreHoldPercent(e),
                                  ve
                                    .getDispatch()
                                    .holderModel.updatePreholdDisplayStep(5),
                                  ve
                                    .getDispatch()
                                    .holderModel.toggleShowOrderDetailEntry(!0),
                                  (S = 1e3),
                                  void (T = !0)
                                );
                              ve.getDispatch().holderModel.updatePreHoldPercent(
                                e
                              );
                            }
                          };
                        return (function e() {
                          if (!b) {
                            var t = xe.Z.wait(S),
                              n = t.promise,
                              a = t.timeoutId;
                            return (
                              ve.registerTimer(a, G.preholdSeatTimer),
                              n.then(Z).then(e)
                            );
                          }
                        })();
                      }
                      var y = 0,
                        P = g ? 400 : 80,
                        N = 1e3 * (t.requestRate > 0 ? t.requestRate : 4),
                        M = function () {
                          if (
                            !(ve.getState().holderModel.preholdDisplayStep < 4)
                          ) {
                            var e =
                              ve.getState().holderModel.preHoldPercent +
                              Math.round(2 * Math.random());
                            e > 80 && (P = 1e3),
                              e > 99 && ((e = 99), Kt({ isTimeEnd: !0 })),
                              ve
                                .getDispatch()
                                .holderModel.updatePreHoldPercent(e),
                              ve
                                .getDispatch()
                                .holderModel.toggleShowOrderDetailEntry(
                                  99 === e ||
                                    ve.getDispatch().holderModel
                                      .isShowOrderDetailEnry
                                );
                          }
                        },
                        w = (function () {
                          var e = (0, Ze.Z)(
                            (0, Te.Z)().mark(function e(t) {
                              return (0, Te.Z)().wrap(function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (e.next = 2),
                                        K.Z.awaitTime(80 === P ? 400 : P)
                                      );
                                    case 2:
                                      t() || (M(), w(t));
                                    case 3:
                                    case "end":
                                      return e.stop();
                                  }
                              }, e);
                            })
                          );
                          return function (t) {
                            return e.apply(this, arguments);
                          };
                        })();
                      return (function t() {
                        if (g && !ve.getPage().isCancelPreHoldProduct) {
                          w(function () {
                            return ve.getPage().isCancelPreHoldProduct;
                          });
                          var n = {};
                          try {
                            n = JSON.parse(g.productStyleJson);
                          } catch (e) {}
                          return Ft({
                            productInfo: (0, A.Z)(
                              (0, A.Z)({}, g),
                              {},
                              { _productStyle: n }
                            ),
                            oid: i,
                          });
                        }
                        if (y * P < N) {
                          y++;
                          var a = xe.Z.wait(P),
                            r = a.promise,
                            o = a.timeoutId;
                          return (
                            ve.registerTimer(o, G.preholdSeatTimer),
                            r.then(M).then(t)
                          );
                        }
                        return e(i);
                      })();
                    }
                    we.Z.commonDebugTrace(
                      "扣位等待自动服务判断超时跳转订单详情"
                    );
                  })
                  .catch(function (e) {
                    e && console.error(e), Qn(), on(i);
                  })
              );
            },
            Lt = function (e) {
              return (
                ve.destoryPageTimer(G.displayPreholdTimer),
                (0, B.showLoading)(),
                (0, Ie.ZBM)({ orderNumber: e })
                  .then(function (t) {
                    if (1 == t.resultCode && t.tripType) {
                      var n = t.holdSeatTrip;
                      if (
                        n &&
                        n.orderTimeout &&
                        H()().isAfter(H()(n.orderTimeout))
                      )
                        return on(e);
                      ve
                        .getDispatch()
                        .holderModel.setSmartHoldSeatDetail({
                          tripType: t.tripType,
                          headInfo: t.headInfo,
                          originTicketInfo: t.originTicketInfo,
                          holdSeatTrip: t.holdSeatTrip,
                          recommendTrip: t.recommendTrip,
                          tipList: t.tipList,
                          travelFlagIconUrl: t.travelFlagIconUrl,
                        }),
                        $n(D.SmartHolderFail);
                    } else on(e);
                  })
                  .catch(function (t) {
                    console.log(t), on(e);
                  })
                  .finally(function () {
                    return (0, B.hideLoading)();
                  })
              );
            },
            Ft = function (e) {
              var t = e.productInfo,
                n = e.oid;
              return new Promise(
                (function () {
                  var e = (0, Ze.Z)(
                    (0, Te.Z)().mark(function e(n) {
                      var a;
                      return (0, Te.Z)().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                ve.destoryPageTimer(G.showHotelCouponTimer),
                                (e.next = 3),
                                K.Z.awaitTime(1500)
                              );
                            case 3:
                              return (
                                ve
                                  .getDispatch()
                                  .holderModel.toggleShowHotelCoupon(!1),
                                ve
                                  .getDispatch()
                                  .holderModel.toggleShowHoldSeatProduct(!0),
                                ve
                                  .getDispatch()
                                  .holdSeatProductModel.setHoldSeatProduct(t),
                                ve
                                  .getDispatch()
                                  .holdSeatProductModel.toggleChoosedHoldSeatProduct(
                                    !1
                                  ),
                                (ve.getPage().doPreHoldInterceptReslove = n),
                                (a =
                                  (Number.isFinite(t.closeTimeLimit)
                                    ? t.closeTimeLimit
                                    : 2e3) + 2e3),
                                (e.next = 11),
                                K.Z.awaitTime(a)
                              );
                            case 11:
                              Kt({ isNoHandle: !0 });
                            case 12:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })()
              ).then(
                (0, Ze.Z)(
                  (0, Te.Z)().mark(function e() {
                    var a,
                      i,
                      r,
                      o,
                      c,
                      l,
                      s,
                      d,
                      u = arguments;
                    return (0, Te.Z)().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                ((a =
                                  u.length > 0 && void 0 !== u[0] ? u[0] : {}),
                                (i = a.isSure),
                                (r = a.isCancel),
                                (o = a.isNoHandle),
                                (ve.getPage().isCancelPreHoldProduct = !0),
                                ve
                                  .getDispatch()
                                  .holderModel.toggleShowHoldSeatProduct(!1),
                                !i)
                              ) {
                                e.next = 24;
                                break;
                              }
                              return (
                                we.Z.commonDebugTrace("on choose product"),
                                (0, B.showLoading)(),
                                (e.prev = 6),
                                (e.next = 9),
                                (0, Ie.Auc)({
                                  orderNumber: n,
                                  convertType: t.convertType,
                                  productId: t.treasureGoodsInfo
                                    ? void 0
                                    : t.productId,
                                  goodsInfo: t.treasureGoodsInfo,
                                })
                              );
                            case 9:
                              if (
                                ((c = e.sent),
                                (l = c.resultCode),
                                (s = c.resultMessage),
                                1 === l)
                              ) {
                                e.next = 14;
                                break;
                              }
                              throw { _msg: s };
                            case 14:
                              ve
                                .getDispatch()
                                .holdSeatProductModel.toggleChoosedHoldSeatProduct(
                                  !0
                                ),
                                on(n),
                                (e.next = 22);
                              break;
                            case 18:
                              (e.prev = 18),
                                (e.t0 = e.catch(6)),
                                we.Z.commonDebugTrace(
                                  "doPreHoldIntercept fail: ".concat(e.t0)
                                ),
                                (0, B.showToast)(
                                  e.t0._msg || "网络错误，请稍候重试~"
                                );
                            case 22:
                              return (
                                (0, B.hideLoading)(),
                                e.abrupt("return", { isPreHoldIntercept: !0 })
                              );
                            case 24:
                              if (!r) {
                                e.next = 30;
                                break;
                              }
                              return (
                                we.Z.commonDebugTrace("on cancel product"),
                                (d =
                                  (Number.isFinite(t.cancelShowTimeLimit)
                                    ? t.cancelShowTimeLimit
                                    : 2e3) + 1e3),
                                (e.next = 29),
                                K.Z.awaitTime(d)
                              );
                            case 29:
                              return e.abrupt("return", Ot(n));
                            case 30:
                              if (!o) {
                                e.next = 33;
                                break;
                              }
                              return (
                                we.Z.commonDebugTrace("no user action"),
                                e.abrupt("return", Ot(n))
                              );
                            case 33:
                              return (
                                we.Z.commonDebugTrace("time is end"),
                                e.abrupt("return", { isPreHoldIntercept: !0 })
                              );
                            case 35:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[6, 18]]
                    );
                  })
                )
              );
            },
            Ht = function () {
              Kt({ isSure: !0 });
            },
            Xt = function () {
              Kt({ isCancel: !0 });
            },
            Kt = function () {
              for (
                var e, t, n = arguments.length, a = new Array(n), i = 0;
                i < n;
                i++
              )
                a[i] = arguments[i];
              null === (e = (t = ve.getPage()).doPreHoldInterceptReslove) ||
                void 0 === e ||
                e.call.apply(e, [t].concat(a)),
                (ve.getPage().doPreHoldInterceptReslove = null);
            },
            zt = function () {
              ve.destoryPageTimer(G.displayPreholdTimer);
              var e = !1,
                t = function () {
                  var e = ve.getState().holderModel.preholdDisplayStep;
                  ve.getDispatch().holderModel.updatePreholdDisplayStep(e + 1);
                },
                n = [
                  { keyPercent: 12, fn: t },
                  { keyPercent: 25, fn: t },
                  { keyPercent: 36, fn: t },
                  {
                    keyPercent: 49,
                    fn: function () {
                      t(), (e = !0);
                    },
                  },
                ],
                a = n.shift(),
                i = 0,
                r = function () {
                  var e = ve.getState().holderModel.preHoldPercent;
                  (i = e),
                    (i += 1),
                    ve.getDispatch().holderModel.updatePreHoldPercent(i),
                    a && i >= a.keyPercent && (a.fn(), (a = n.shift()));
                };
              return (function t() {
                if (!e) {
                  var n = xe.Z.wait(80),
                    a = n.promise,
                    i = n.timeoutId;
                  return (
                    ve.registerTimer(i, G.displayPreholdTimer),
                    a.then(r).then(t)
                  );
                }
              })();
            },
            jt = function e(t) {
              var n = t.riskOrderNumber,
                a = t.rescheduleOrderNumber,
                i = { orderNumber: n, rescheduleOrderNumber: a };
              return (
                ve.destoryPageTimer(G.preholdSeatTimer),
                (0, Ie.AoH)(i)
                  .then(function (t) {
                    if (t.rescheduleInterceptUrl && 1 !== t.resultCode) {
                      ve.destoryPageTimer(G.preholdSeatTimer);
                      v().redirectTo({
                        url: "/pages/12306/dark/index?interceptScene="
                          .concat("reschedule", "&oid=")
                          .concat(n, "&rescheduleOrderNumber=")
                          .concat(a),
                      });
                    } else {
                      if (![-1, 3].includes(t.resultCode)) {
                        if (1 == t.resultCode) {
                          if (ve.getState().holderModel.preholdDisplayStep < 4)
                            return void ve
                              .getDispatch()
                              .holderModel.updatePreholdDisplayStep(5);
                          var i = 200,
                            r = !1,
                            o = !1,
                            c = function () {
                              if (o) r = !0;
                              else {
                                var e =
                                  ve.getState().holderModel.preHoldPercent +
                                  Math.round(5 * Math.random()) +
                                  1;
                                if (e > 100)
                                  return (
                                    (e = 100),
                                    ve
                                      .getDispatch()
                                      .holderModel.updatePreHoldPercent(e),
                                    ve
                                      .getDispatch()
                                      .holderModel.updatePreholdDisplayStep(5),
                                    ve
                                      .getDispatch()
                                      .holderModel.toggleShowOrderDetailEntry(
                                        !0
                                      ),
                                    (i = 1e3),
                                    void (o = !0)
                                  );
                                ve.getDispatch().holderModel.updatePreHoldPercent(
                                  e
                                );
                              }
                            };
                          return (function e() {
                            if (!r) {
                              var t = xe.Z.wait(i),
                                n = t.promise,
                                a = t.timeoutId;
                              return (
                                ve.registerTimer(a, G.preholdSeatTimer),
                                n.then(c).then(e)
                              );
                            }
                          })();
                        }
                        var l = 0,
                          s = 80,
                          d = 1e3 * (t.requestRate > 0 ? t.requestRate : 4),
                          u = function () {
                            if (
                              !(
                                ve.getState().holderModel.preholdDisplayStep < 4
                              )
                            ) {
                              var e =
                                ve.getState().holderModel.preHoldPercent +
                                Math.round(2 * Math.random());
                              e > 80 && (s = 1e3),
                                e > 99 && (e = 99),
                                ve
                                  .getDispatch()
                                  .holderModel.updatePreHoldPercent(e),
                                ve
                                  .getDispatch()
                                  .holderModel.toggleShowOrderDetailEntry(
                                    99 === e ||
                                      ve.getDispatch().holderModel
                                        .isShowOrderDetailEnry
                                  );
                            }
                          };
                        return (function t() {
                          if (l * s < d) {
                            l++;
                            var i = xe.Z.wait(s),
                              r = i.promise,
                              o = i.timeoutId;
                            return (
                              ve.registerTimer(o, G.preholdSeatTimer),
                              r.then(u).then(t)
                            );
                          }
                          return e({
                            riskOrderNumber: n,
                            rescheduleOrderNumber: a,
                          });
                        })();
                      }
                      ve.destoryPageTimer(G.preholdSeatTimer);
                    }
                  })
                  .catch(function (e) {
                    e && console.error(e), Qn(D.Holder), on(n);
                  })
              );
            },
            Wt = function (e) {
              var t = e.riskOrderNumber,
                n = e.rescheduleOrderNumber;
              return (
                ve.registerTimer(
                  setTimeout(function () {
                    ve.destoryPageTimer(G.preholdSeatTimer),
                      ve
                        .getDispatch()
                        .holderModel.toggleShowOrderDetailEntry(!0),
                      on(t);
                  }, 55e3),
                  G.preHoldTimeoutTimer
                ),
                Et(),
                ve.getDispatch().holderModel.setOrder(t),
                ve.getDispatch().holderModel.setRescheduleOrderNumber(n),
                $n({
                  toast: { toastCode: D.Holder },
                  onConfirm: function () {
                    on(t);
                  },
                }),
                ve.ubtTrace("s_trn_z_trace_10320660961", {
                  bizKey: "mini_t_frontGetseat_show",
                  exposureType: "normal",
                  sceneType: "resign",
                }),
                Promise.all([
                  jt({ riskOrderNumber: t, rescheduleOrderNumber: n }),
                  zt(),
                ])
                  .then(function () {
                    ve.getDispatch().holderModel.toggleShowOrderDetailEntry(!1),
                      on(t);
                  })
                  .catch(function () {
                    on(t);
                  })
              );
            },
            Gt = (function () {
              var e = (0, Ze.Z)(
                (0, Te.Z)().mark(function e() {
                  var t, n, a, i, r, o, c, l;
                  return (0, Te.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (yt()) {
                            e.next = 3;
                            break;
                          }
                          return (
                            console.log("不支持夜间产品 不拦截"),
                            e.abrupt("return")
                          );
                        case 3:
                          if (
                            ((t = ve.getState().nightBookingModel),
                            (n = t.nightEledeliveryInfo),
                            (a = t.selectNightEleDelivery),
                            (i = t.interceptToast),
                            K.Z.isEmptyObject(n) || K.Z.isEmptyObject(i) || a)
                          ) {
                            e.next = 23;
                            break;
                          }
                          return (
                            Dt(),
                            ve.ubtTrace("TZWBuyBook_NightSerPop_exposure", {
                              PageId: ve.getPage().pageId,
                              Type: "非当日夜间",
                            }),
                            (e.next = 9),
                            $n({
                              toast: {
                                toastCode: D.NightTicketPKConfirm,
                                data: i,
                              },
                            })
                          );
                        case 9:
                          if (
                            ((r = e.sent),
                            (o = r.code),
                            (c = r.data),
                            (l = 1 === (null == c ? void 0 : c[0])),
                            1 !== o)
                          ) {
                            e.next = 22;
                            break;
                          }
                          if (!l) {
                            e.next = 18;
                            break;
                          }
                          return (
                            ve
                              .getDispatch()
                              .nightBookingModel.updateSelectNightEleDelivery(
                                !0
                              ),
                            ve.ubtTrace("TZWBuyBook_NightSerPop_Now_click", {
                              PageId: ve.getPage().pageId,
                              Type: "非当日夜间",
                            }),
                            e.abrupt("return")
                          );
                        case 18:
                          return (
                            ve.ubtTrace("TZWBuyBook_NightSerPop_Wait_click", {
                              PageId: ve.getPage().pageId,
                            }),
                            e.abrupt("return", { specialOrderFlag: !0 })
                          );
                        case 22:
                          throw "夜间浮层放弃选择";
                        case 23:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            Ut = (function () {
              var e = (0, Ze.Z)(
                (0, Te.Z)().mark(function e() {
                  var t, n;
                  return (0, Te.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              we.Z.commonDebugTrace("step: handerOrder start"),
                              (e.prev = 1),
                              ve.getDispatch().productPopupModel.setCanPop(!0),
                              (e.next = 5),
                              $t()
                            );
                          case 5:
                            return (0, B.hideLoading)(), (e.next = 8), hn();
                          case 8:
                            if (e.sent) {
                              e.next = 11;
                              break;
                            }
                            return e.abrupt("return");
                          case 11:
                            return (0, B.showLoading)(), (e.next = 14), Bt();
                          case 14:
                            return (0, B.hideLoading)(), (e.next = 17), Gt();
                          case 17:
                            if (((e.t0 = e.sent), e.t0)) {
                              e.next = 20;
                              break;
                            }
                            e.t0 = {};
                          case 20:
                            return (
                              (t = e.t0),
                              (n = t.specialOrderFlag),
                              (0, B.showLoading)(),
                              (e.next = 25),
                              Qt()
                            );
                          case 25:
                            return (0, B.hideLoading)(), (e.next = 28), kt();
                          case 28:
                            if (((0, B.showLoading)(), !n)) {
                              e.next = 33;
                              break;
                            }
                            return (e.next = 32), Pn();
                          case 32:
                            return e.abrupt("return", e.sent);
                          case 33:
                            return (e.next = 35), en();
                          case 35:
                            e.next = 41;
                            break;
                          case 37:
                            (e.prev = 37),
                              (e.t1 = e.catch(1)),
                              we.Z.commonDebugTrace(
                                "step: handerOrder fail: ".concat(e.t1)
                              ),
                              setTimeout(B.hideLoading, 1500);
                          case 41:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[1, 37]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            Yt = function () {
              var e =
                !(arguments.length > 0 && void 0 !== arguments[0]) ||
                arguments[0];
              return new Promise(function (t, n) {
                var a = ve.getState().passengerModel,
                  i = a.allPas,
                  r = a.freeChildren;
                return K.Z.isEmptyArray(i)
                  ? (e && (0, B.showToast)("请添加有效乘客"),
                    n("请添加有效乘客"))
                  : i.map(function (e) {
                      return e.isChild;
                    }).length < r.length
                  ? (e &&
                      ve.showCommonDialog(
                        "免费乘车儿童数量已超过持票成年旅客数量，超过的儿童需按照儿童票价购买儿童票。"
                      ),
                    n(
                      "免费乘车儿童数量已超过持票成年旅客数量，超过的儿童需按照儿童票价购买儿童票。"
                    ))
                  : t();
              });
            },
            Jt = function () {
              var e =
                !(arguments.length > 0 && void 0 !== arguments[0]) ||
                arguments[0];
              return new Promise(function (t, n) {
                var a,
                  i,
                  r =
                    null === (a = ve.getPage().$TableRef) ||
                    void 0 === a ||
                    null === (i = a.tel) ||
                    void 0 === i
                      ? void 0
                      : i.value;
                return _t.Z.isMobile(r)
                  ? t()
                  : (e && (0, B.showToast)("请输入正确的手机号"),
                    n("请输入正确的手机号"));
              });
            },
            qt = function () {
              var e =
                !(arguments.length > 0 && void 0 !== arguments[0]) ||
                arguments[0];
              return new Promise(function (t, n) {
                var a,
                  i,
                  r = ve.getState().passengerModel.allPas,
                  o =
                    [
                      null === (a = ve.getState().trainModel) ||
                      void 0 === a ||
                      null === (i = a.trainInfo) ||
                      void 0 === i
                        ? void 0
                        : i.SeatName,
                    ] || 0,
                  c = [V.ET.selectDate],
                  l = r.filter(function (e) {
                    return 3 == e.PassengerType;
                  });
                if (
                  l.every(function (e) {
                    return e.convertStu;
                  })
                )
                  return t();
                var s = (0, Rt.e)({ stuPsgs: l, seatNames: o, dates: c });
                return s.isPass
                  ? t()
                  : (e &&
                      ve.showMultiButtonDialog({
                        content: s.errMsg,
                        rightButtonName: s.btnName,
                        leftButtonName: "成人票",
                        onLeftButtonClick: function () {
                          l.forEach(function (e) {
                            r
                              .filter(function (t) {
                                return (
                                  3 == t.PassengerType &&
                                  e.PassengerID === t.PassengerID
                                );
                              })
                              .forEach(function (e) {
                                (e.convertStu = !0), (e.isStudentToAdult = !0);
                              }),
                              (e.convertStu = !0),
                              (e.isStudentToAdult = !0);
                          }),
                            tt(r);
                        },
                      }),
                    n(s.errMsg));
              });
            },
            $t = (function () {
              var e = (0, Ze.Z)(
                (0, Te.Z)().mark(function e() {
                  var t;
                  return (0, Te.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (Ne.ZP.isLogin) {
                            e.next = 3;
                            break;
                          }
                          return (e.next = 3), Ne.ZP.doLogin();
                        case 3:
                          return (
                            (e.next = 5),
                            new Promise(
                              (function () {
                                var e = (0, Ze.Z)(
                                  (0, Te.Z)().mark(function e(t, n) {
                                    var a, i, r, o, c, l, s, d, u, p, m, f;
                                    return (0, Te.Z)().wrap(
                                      function (e) {
                                        for (;;)
                                          switch ((e.prev = e.next)) {
                                            case 0:
                                              if (
                                                ((e.prev = 0),
                                                (r =
                                                  ve.getState().trainModel
                                                    .trainInfo),
                                                (o = r.TrainNumber),
                                                (c = r.DepartStation),
                                                (l = r.ArriveStation),
                                                (s = r.DepartureDate),
                                                (d = r.SeatName),
                                                null != (u = r.SeatList) &&
                                                  u.find(function (e) {
                                                    return (
                                                      e.SeatName === d &&
                                                      e.SeatInventory <= 20
                                                    );
                                                  }))
                                              ) {
                                                e.next = 4;
                                                break;
                                              }
                                              return e.abrupt("return", t());
                                            case 4:
                                              return (
                                                (0, B.showLoading)(
                                                  "余票检验中"
                                                ),
                                                (e.next = 7),
                                                (0, Ie.tMK)({
                                                  productLine:
                                                    P.default.partner ||
                                                    "zhixing",
                                                  trainNumber: o,
                                                  fromStationName: c,
                                                  toStationName: l,
                                                  departDate: s,
                                                })
                                              );
                                            case 7:
                                              if (
                                                ((p = e.sent),
                                                (m = p.trains),
                                                !(
                                                  (f =
                                                    (null ===
                                                      (a = m.find(function (e) {
                                                        return (
                                                          e.trainNo === o &&
                                                          e.toStationName ==
                                                            l &&
                                                          e.fromStationName == c
                                                        );
                                                      })) || void 0 === a
                                                      ? void 0
                                                      : a.seats) || [])
                                                    .length <= 0
                                                ))
                                              ) {
                                                e.next = 12;
                                                break;
                                              }
                                              return e.abrupt("return", t());
                                            case 12:
                                              if (
                                                !(
                                                  (null ===
                                                    (i = f.find(function (e) {
                                                      return e.seatName === d;
                                                    })) || void 0 === i
                                                    ? void 0
                                                    : i.ticketLeft) <= 0
                                                )
                                              ) {
                                                e.next = 17;
                                                break;
                                              }
                                              return (
                                                ve.showMultiButtonDialog({
                                                  content:
                                                    "抱歉，您选择的坐席已售罄",
                                                  leftButtonName: "我知道了",
                                                  rightButtonName: "去抢票",
                                                  onRightButtonClick:
                                                    function () {
                                                      ve.redirectTo({
                                                        url: "/pages/trainRob/setgrab/setgrab",
                                                        data: {
                                                          departStation:
                                                            c || "",
                                                          departDate: s || "",
                                                          trainNumber: o || "",
                                                          arriveStation:
                                                            l || "",
                                                          seatName: d || "",
                                                          fromPage: "bookx",
                                                        },
                                                      });
                                                    },
                                                }),
                                                ve.ubtDevTrace(
                                                  "o_mini_no_ticket_intercept"
                                                ),
                                                e.abrupt("return", n())
                                              );
                                            case 17:
                                              t(), (e.next = 24);
                                              break;
                                            case 20:
                                              (e.prev = 20),
                                                (e.t0 = e.catch(0)),
                                                we.Z.commonDebugTrace(
                                                  "queryLeftTicket err：" +
                                                    ("object" ===
                                                    (0, ke.Z)(e.t0)
                                                      ? JSON.stringify(e.t0)
                                                      : e.t0)
                                                ),
                                                t();
                                            case 24:
                                              return (
                                                (e.prev = 24),
                                                (0, B.hideLoading)(),
                                                e.finish(24)
                                              );
                                            case 27:
                                            case "end":
                                              return e.stop();
                                          }
                                      },
                                      e,
                                      null,
                                      [[0, 20, 24, 27]]
                                    );
                                  })
                                );
                                return function (t, n) {
                                  return e.apply(this, arguments);
                                };
                              })()
                            )
                          );
                        case 5:
                          return (e.next = 7), Yt();
                        case 7:
                          return (e.next = 9), Jt();
                        case 9:
                          return (e.next = 11), qt();
                        case 11:
                          if (
                            ((t = ve.getState().passengerModel.allPas),
                            !sn(t) || ve.getPage().kidTipHasDetained)
                          ) {
                            e.next = 20;
                            break;
                          }
                          return (
                            (ve.getPage().kidTipHasDetained = !0),
                            (e.next = 16),
                            ve.showMultiButtonDialogWithPromise({
                              title: "儿童监护人申明",
                              content:
                                "本人是该未成年人的监护人或已征得监护人同意，允许平台以提供产品或服务为目的，处理未成年人信息",
                              leftButtonName: "取消",
                              rightButtonName: "确认并预订",
                            })
                          );
                        case 16:
                          if ("right" == e.sent) {
                            e.next = 19;
                            break;
                          }
                          throw "儿童监护人申明取消";
                        case 19:
                          Dt();
                        case 20:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            Qt = (function () {
              var e = (0, Ze.Z)(
                (0, Te.Z)().mark(function e() {
                  var t, n, a, i, r, o, c, l, s, d, u, p;
                  return (0, Te.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (!(v().getStorageSync("activityId") || "")) {
                            e.next = 3;
                            break;
                          }
                          return e.abrupt("return");
                        case 3:
                          if (
                            ((i = ve.getState().trainModel.isBed),
                            (r = ve.getState().appointSeatModel),
                            (o = r.total),
                            (c = r.appointSeatDetail),
                            !(
                              i &&
                              o > 0 &&
                              1 != (null == c ? void 0 : c.appointSeatFor12306)
                            ))
                          ) {
                            e.next = 7;
                            break;
                          }
                          return e.abrupt("return");
                        case 7:
                          if (
                            !ve.getState().nightBookingModel
                              .selectNightEleDelivery
                          ) {
                            e.next = 13;
                            break;
                          }
                          return (
                            (0, B.showToastAsync)("正在为您占位"),
                            (e.next = 12),
                            K.Z.awaitTime(1e3)
                          );
                        case 12:
                          return e.abrupt("return");
                        case 13:
                          if (
                            ((l = ve.getState().memberSaledModel),
                            (s = l.useMemberShip),
                            (d = l.memberShipBagInfo),
                            !s)
                          ) {
                            e.next = 20;
                            break;
                          }
                          if (
                            !(
                              d &&
                              2 === d.pkResult &&
                              d.sleepNightEntity.amount > 0
                            )
                          ) {
                            e.next = 20;
                            break;
                          }
                          return (
                            (0, B.showToastAsync)("正在为您占位"),
                            (e.next = 19),
                            K.Z.awaitTime(1e3)
                          );
                        case 19:
                          return e.abrupt("return");
                        case 20:
                          if (
                            null ==
                              (u = ve.getState().appointSeatModel.sameRoom) ||
                            !u._selected
                          ) {
                            e.next = 23;
                            break;
                          }
                          return e.abrupt("return");
                        case 23:
                          if (
                            !(
                              ve.getState().assignCarriageModel
                                .selectedCarriages.length > 0
                            )
                          ) {
                            e.next = 26;
                            break;
                          }
                          return e.abrupt("return");
                        case 26:
                          if (
                            ((p =
                              ve.getState().combinationSeatModel
                                .manualSelectSeatInfo),
                            !(
                              (null == p ||
                              null === (t = p.single) ||
                              void 0 === t
                                ? void 0
                                : t.total) > 0 ||
                              (null == p ||
                              null === (n = p.many) ||
                              void 0 === n ||
                              null === (a = n.seatTypes) ||
                              void 0 === a
                                ? void 0
                                : a.some(function (e) {
                                    return e.selected;
                                  }))
                            ))
                          ) {
                            e.next = 30;
                            break;
                          }
                          return e.abrupt("return");
                        case 30:
                          return (e.next = 32), Sn();
                        case 32:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            en = function (e) {
              we.Z.commonDebugTrace("step: add order...");
              var t = tn(e);
              return nn(t);
            },
            tn = function () {
              var e,
                t,
                n,
                a,
                i,
                r,
                o =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                c = o.convertEleTicketInfo,
                l = void 0 === c ? null : c,
                s = o.convertEleTicketTreasuresGoodsInfo,
                d = void 0 === s ? null : s,
                u = o.virtualOrder,
                p = void 0 === u ? 0 : u,
                m = o.specialOrderFlag,
                f = void 0 === m ? 0 : m,
                h = Vt.Z.getUnionData(),
                g = h.aid,
                S = void 0 === g ? 0 : g,
                v = h.sid,
                b = void 0 === v ? 0 : v,
                T = h.ouid,
                Z = void 0 === T ? 0 : T,
                y =
                  null === (e = ve.getPage().$TableRef) ||
                  void 0 === e ||
                  null === (t = e.tel) ||
                  void 0 === t
                    ? void 0
                    : t.value,
                P = ve.getState().my12306Model,
                N = P.login12306Name,
                M = P.login12306Pas,
                w = P.userName12306,
                C = ve.getPage().isSmartTrip,
                I = ve.getState().appointSeatModel,
                k = I.appointSeatDetail,
                D = I.total,
                x = I.sameRoom,
                B = ve.getState().trainModel,
                _ = B.trainInfo,
                R = B.isBed,
                E = B.selectTrainInfo,
                O = B.isStride,
                L = B.orderSource,
                F = B.trainViewModeType,
                H = ve.getState().memberSaledModel,
                X = H.memberShipCardVisible,
                z = H.buyMemberShip,
                j = H.useMemberShip,
                W = H.memberShipBagInfo,
                G = H.isBindMemberSaled,
                U = H.memberProductFrom,
                Y = H.treasureGoodsInfoFromX,
                J = ve.getState().assignCarriageModel,
                q = J.selectedCarriages,
                $ = J.assignCarriageInfo,
                Q = ve.getState().pointBookingModel.isPointPayMode,
                ee = ve.getState().crossProModel,
                te = ee.trainHotelReturnCashInfo,
                ne = ee.hotelTagCashBackJson,
                ae = ve.getState().combinationSeatModel.manualSelectSeatInfo,
                ie = ve.getState().configModel,
                re = ie.isWuPiaoScene,
                oe = ie.isRecommendBuy,
                ce = ie.smartMarkValue,
                le = ie.firstTripOrderNumber,
                se = !1,
                de = dn(),
                ue = pn(),
                pe = ve.getState().nightBookingModel,
                me = pe.selectNightEleDelivery,
                fe = pe.nightEledeliveryInfo,
                he = pe.nightEledeliveryInfoFromX,
                ge = ve.getState().productPopupModel,
                Se = ge.checked,
                be = ge.product,
                Te = ve.getState().holderModel.oid,
                Ze = void 0 === Te ? "" : Te,
                ye = ve.getState().authFailProductModel.authFailToastInfo,
                Pe = void 0 === ye ? {} : ye,
                we = ve.getState().specialCardModel,
                Ce = we.hasSpecialCarriageRights,
                Ie = we.displayCard,
                ke = we.checked,
                De = we.hasSameRoomRights,
                xe = we.hassSdjacentSeatRights,
                Be = null,
                Ve = [],
                Ae =
                  !Se ||
                  !be ||
                  (null !== (n = be.productBizInfo) &&
                    void 0 !== n &&
                    n.treasureGoodsInfo)
                    ? ""
                    : null === (a = be.productBizInfo) || void 0 === a
                    ? void 0
                    : a.productCode;
              Se &&
                null != be &&
                null !== (i = be.productBizInfo) &&
                void 0 !== i &&
                i.treasureGoodsInfo &&
                Ve.push(be.productBizInfo.treasureGoodsInfo);
              var _e = ve.getState().passengerModel,
                Re = _e.allPas,
                Ee = void 0 === Re ? [] : Re,
                Oe = _e.freeChildren,
                Le = void 0 === Oe ? [] : Oe,
                Fe = un(Le),
                He = {
                  receiverName: "",
                  receiveMobile: "",
                  address: "",
                  areaId: "",
                  remark: "",
                },
                Xe = Me.ZP.encode12306Account({
                  login12306Name: w || N,
                  login12306Pas: M,
                });
              if (R && D >= 1 && k && k.seatInfoList) {
                var Ke = k.seatInfoList.map(function (e) {
                    return {
                      amount: e.num,
                      seatCode: e.seatCode,
                      seatName: e.seatName,
                    };
                  }),
                  ze = k.acceptOtherSeat;
                Be = { selectSeatList: Ke, acceptOtherSeat: ze };
              }
              var je = (0, A.Z)(
                {
                  userMobile: y || Ne.ZP.userName,
                  orderType: V.ET.train.isAcceptDelivery ? "P" : "E",
                  userName12306: Xe.login12306Name,
                  userPass12306: Xe.login12306Pas,
                  isOffsetTicket: re ? 1 : 0,
                  frontHoldSeatFlag: 0,
                  orderTicketList: ue,
                  passengerList: de,
                  deliveryInfo: He,
                  freePassengerList: Fe,
                  invoiceInfo: null,
                  mediaClientDesc: "",
                },
                Q ? { frontTicketCenterInfo: { isPointExchange: 1 } } : {}
              );
              if (
                (1 === p && (je.virtualOrder = p),
                1 === f && (je.specialOrderFlag = f),
                Ae && (je.productCodes = Ae),
                l && ((je.convertEleTicketInfo = l), d && Ve.push(d)),
                Be)
              ) {
                X && j && (Be.useSeatRight = !0),
                  (je = (0, A.Z)((0, A.Z)({}, je), {}, { appointSeat: Be }));
                var We = k.seatInfoList
                  .filter(function (e) {
                    return e.num > 0;
                  })
                  .map(function (e) {
                    return e.treasureGoodsInfo;
                  })
                  .filter(function (e) {
                    return !!e;
                  });
                Ve = Ve.concat(We);
              }
              (je.mediaClientDesc =
                S && b
                  ? C
                    ? "aid="
                        .concat(S, "|sid=")
                        .concat(b, "|ouid=")
                        .concat(Z, "|smarthome")
                    : "aid=".concat(S, "|sid=").concat(b, "|ouid=").concat(Z)
                  : C
                  ? "smarthome"
                  : ""),
                "1" == oe &&
                  (je.mediaClientDesc = je.mediaClientDesc + "|recommendBuy=1"),
                !O ||
                  !K.Z.isNotEmptyObj(E) ||
                  (null != L && L.includes("SmartJianlouSystem_")) ||
                  (je.mediaClientDesc =
                    je.mediaClientDesc + "|subTrainByStride"),
                L && (je.mediaClientDesc = je.mediaClientDesc + "|".concat(L)),
                F && (je.mediaClientDesc = je.mediaClientDesc + "|".concat(F)),
                ce && (je.mediaClientDesc = ce);
              var Ge = yt();
              if (
                (1 === Ge &&
                  me &&
                  ((je.selectNightEleDelivery = !0),
                  ((null != he && he.treasureGoodsInfo) ||
                    (null != fe && fe.treasureGoodsInfo)) &&
                    Ve.push(
                      (null == he ? void 0 : he.treasureGoodsInfo) ||
                        fe.treasureGoodsInfo
                    )),
                j &&
                  1 === Ge &&
                  W &&
                  2 === W.pkResult &&
                  W.sleepNightEntity.amount > 0 &&
                  ((je.selectNightEleDelivery = !0),
                  ((null != he && he.treasureGoodsInfo) ||
                    (null != fe && fe.treasureGoodsInfo)) &&
                    Ve.push(
                      (null == he ? void 0 : he.treasureGoodsInfo) ||
                        fe.treasureGoodsInfo
                    )),
                X &&
                  (z || G) &&
                  ((je.vipSaleInfoList = [
                    {
                      packageType: 1,
                      rightsType: W.vipCardType,
                      code: W.cardCode,
                      reNew: !1,
                    },
                  ]),
                  U && (je.productFromList = [U]),
                  Ve.push(Y || W.treasureGoodsInfo)),
                (je.selectLowerBerthProduct = se ? 1 : 0),
                (je.carriageInfo = {
                  carriageNumber: q.join(","),
                  sameRoom: null != x && x._selected ? 1 : 0,
                  carriageFree: Ce && ke ? 1 : 0,
                  sameRoomFree: De && ke ? 1 : 0,
                }),
                (null === (r = je.carriageInfo.carriageNumber) || void 0 === r
                  ? void 0
                  : r.length) > 0 &&
                  null != $ &&
                  $.treasureGoodsInfo &&
                  Ve.push($.treasureGoodsInfo),
                (null == x ? void 0 : x._selected) &&
                  x.treasureGoodsInfo &&
                  Ve.push(x.treasureGoodsInfo),
                ae)
              ) {
                var Ue,
                  Ye,
                  Je,
                  qe,
                  $e,
                  Qe = "",
                  et = 0;
                null == ae ||
                  null === (Ue = ae.single) ||
                  void 0 === Ue ||
                  null === (Ye = Ue.seatTypes) ||
                  void 0 === Ye ||
                  Ye.map(function (e) {
                    e.num > 0 &&
                      ((Qe = e.code),
                      (et = e.num),
                      ($e = e.treasureGoodsInfoDTO));
                  }),
                  null == ae ||
                    null === (Je = ae.many) ||
                    void 0 === Je ||
                    null === (qe = Je.seatTypes) ||
                    void 0 === qe ||
                    qe.map(function (e) {
                      e.selected &&
                        ((Qe = e.code),
                        (et = Ee.length),
                        ($e = e.treasureGoodsInfoDTO));
                    }),
                  Qe &&
                    ((je.multiManualSelectSeat = {
                      code: Qe,
                      amount: et,
                      acceptOtherSeat: null != ae && ae.acceptOtherSeat ? 1 : 0,
                      selectSeatFree: xe && ke ? 1 : 0,
                    }),
                    $e && Ve.push($e));
              }
              if (
                ((je.exclusiveCrowdInfo = ke
                  ? { cardType: null == Ie ? void 0 : Ie.cardType }
                  : void 0),
                (je.trainHotelReturnFlag = te ? 1 : 0),
                (je.hotelTagCashBack = null != ne && ne.title ? 1 : 0),
                (je.treasuresGoods = Ve.filter(function (e) {
                  return !!e;
                })),
                K.Z.isNotEmptyObj(E))
              ) {
                var tt = (0, A.Z)(
                  (0, A.Z)({}, E),
                  {},
                  {
                    departDate: V.ET.selectDate,
                    trainNo: _.TrainNumber,
                    seatName: _.SeatName,
                  }
                );
                (je.userSelectTrainInfo = JSON.stringify(tt)),
                  console.log("#### 最终的参数书:", tt, je.userSelectTrainInfo);
              }
              return (
                le && (je.smartTripFirstOrderNumber = le),
                Ze &&
                  "cancel3" === (null == Pe ? void 0 : Pe.interceptType) &&
                  (je.reBookInfo = { originalOrderNumber: Ze }),
                je
              );
            },
            nn = function (e) {
              return (
                (0, B.showLoading)("正在提交订单..."),
                (e.allowOneClickPayment = 0),
                (0, De.Qo)(e)
                  .then(function (t) {
                    if (-96 != t.resultCode) {
                      if (
                        (K.Z.orderLog("train_dg"),
                        1 == t.resultCode && t.orderNumber)
                      )
                        try {
                          var n, a;
                          rn(t.orderNumber);
                          var i = e.appointSeat,
                            r = e.orderTicketList,
                            o = e.multiManualSelectSeat;
                          (((null == r ? void 0 : r.length) > 0 &&
                            null !== (n = r[0]) &&
                            void 0 !== n &&
                            n.selectedSeats) ||
                            (null == i ||
                            null === (a = i.selectSeatList) ||
                            void 0 === a
                              ? void 0
                              : a.length) > 0) &&
                            cn(t.orderNumber, e),
                            o && "near" !== o.code && ln(t.orderNumber, e),
                            ve.ubtTrace("TZWBuyBook_GetReserve_click", {
                              PageId: P.default.isTieyou
                                ? "10320660965"
                                : "10320660961",
                              orderId: t.orderNumber,
                            }),
                            ve.getPage()._isAcceptSelfStuRightsIntercept &&
                              ve.ubtTrace(
                                "TZWBuyBook_StuRemindPop_Adult_click",
                                {
                                  PageId: ve.getPage().pageId,
                                  orderid: t.orderNumber,
                                }
                              );
                        } catch (e) {
                          console.log(e);
                        }
                      if (
                        (1 === t.resultCode &&
                          V.ET.robShareNavigateBackHome &&
                          ve.ubtTrace(106277, {
                            openId: Ne.ZP.openid,
                            orderNumber: t.orderNumber,
                          }),
                        1 === t.resultCode && 1 === e.virtualOrder)
                      )
                        return t;
                      if (1 == t.resultCode && 1 === e.specialOrderFlag)
                        return on(t.orderNumber);
                      if (1 == t.resultCode && 1 == t.isPreHoldSeat)
                        return (
                          (0, B.hideLoading)(),
                          void (function (e) {
                            ve.registerTimer(
                              setTimeout(function () {
                                ve.destoryPageTimer(G.preholdSeatTimer),
                                  ve
                                    .getDispatch()
                                    .holderModel.toggleShowOrderDetailEntry(!0),
                                  ve
                                    .getDispatch()
                                    .holderModel.toggleShowHoldSeatProduct(!1),
                                  Kt({ isTimeEnd: !0 }),
                                  on(e);
                              }, 55e3),
                              G.preHoldTimeoutTimer
                            ),
                              Et(),
                              ve.getDispatch().holderModel.setOrder(e),
                              $n({
                                toast: { toastCode: D.Holder },
                                onConfirm: on,
                              }),
                              Promise.all([Ot(e), zt()])
                                .then(function () {
                                  var t =
                                      arguments.length > 0 &&
                                      void 0 !== arguments[0]
                                        ? arguments[0]
                                        : [],
                                    n = (0, Z.Z)(t, 1),
                                    a = n[0],
                                    i = (a = void 0 === a ? {} : a)
                                      .isPreHoldIntercept,
                                    r = void 0 !== i && i;
                                  r || on(e);
                                })
                                .catch(function () {}),
                              ve.ubtTrace("s_trn_z_trace_10320660961", {
                                bizKey: "mini_t_frontGetseat_show",
                                exposureType: "normal",
                                sceneType: "getBuy",
                              });
                          })(t.orderNumber)
                        );
                      if (1 == t.resultCode && 1 != t.isPreHoldSeat)
                        return on(t.orderNumber);
                      (0, B.hideLoading)(),
                        -99 === t.resultCode && t.riskOrderNumber
                          ? ve.showMultiButtonDialog({
                              content: t.resultMessage,
                              leftButtonName: "查看订单",
                              rightButtonName: "取消订单",
                              onLeftButtonClick: function () {
                                var e = t.riskOrderNumber,
                                  n = void 0 === e ? "" : e;
                                if (1 == t.riskOrderType)
                                  K.Z.commonNavigator(
                                    "https://m.suanya.com/webapp/train/activity/20210517-ztrip-blind-box?&isHideNavBar=YES&source=AppTrainPaywx"
                                  );
                                else {
                                  var a = Me.ZP.getTrainDetailUrl(n);
                                  ve.navigateTo({ url: a });
                                }
                              },
                              onRightButtonClick: function () {
                                mn(t.riskOrderNumber);
                              },
                            })
                          : ve.showCommonDialog(
                              t.resultMessage ||
                                "系统异常，提交订单失败。我们正在努力修复，请稍候再试。"
                            );
                    } else
                      Ne.ZP.doLogin()
                        .then(function () {
                          an();
                        })
                        .catch(function (e) {
                          console.log(e);
                        });
                  })
                  .catch(function (e) {
                    console.log("add order fail", e),
                      (0, B.hideLoading)(),
                      ve.showCommonDialog(
                        "系统异常，提交订单失败。我们正在努力修复，请稍候再试。"
                      );
                  })
              );
            },
            an = (function () {
              var e = (0, Ze.Z)(
                (0, Te.Z)().mark(function e(t) {
                  return (0, Te.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), $t();
                        case 2:
                          return e.abrupt("return", en(t));
                        case 3:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            rn = function (e) {
              var t = ve.getState().trainModel.trainInfo,
                n = H()(V.ET.selectDate)
                  .add(V.ET.train.TakeDays, "day")
                  .format(W);
              ve.ubtTrace("booking_Product_Params_Order", {
                userId: Ne.ZP.uid || "",
                orderId: e,
                orderTime: At.Z.getNow(),
                partner: P.default.isTieyou ? "tieyou" : "zhixing",
                trainInfo: JSON.stringify({
                  arriveStation: t.ArriveStation,
                  arriveDateTime: "".concat(n, " ").concat(t.ArriveTime, ":00"),
                  trainNumber: t.TrainNumber,
                  departStation: t.DepartStation,
                  departDateTime: ""
                    .concat(t.DepartureDate, " ")
                    .concat(t.DepartTime, ":00"),
                }),
                seatList: JSON.stringify(
                  t.SeatList.map(function (e) {
                    return { name: e.SeatName, amount: e.SeatInventory };
                  })
                ),
              });
            },
            on = function (e) {
              if (ve.getState().reschduleModel.isReschduleMode)
                return (function (e) {
                  var t = Me.ZP.getTrainDetailUrl(e);
                  v().reLaunch({ url: t });
                })(e);
              !(function (e) {
                var t = ve.getState().productPopupModel.isTestB,
                  n = "/pages/trainDetail/shelves/shelves?oid="
                    .concat(e, "&payAutoFlag=")
                    .concat(t ? 1 : 0);
                v().reLaunch({ url: n });
              })(e);
            },
            cn = function (e, t) {
              var n,
                a,
                i = t.appointSeat,
                r = t.orderTicketList,
                o = [];
              if (
                (null == r ? void 0 : r.length) > 0 &&
                null !== (n = r[0]) &&
                void 0 !== n &&
                n.selectedSeats
              ) {
                var c = r[0].selectedSeats.split(",");
                null == c ||
                  c.map(function (e) {
                    var t = e.slice(e.length - 1);
                    o.push(t);
                  });
              }
              (null == i || null === (a = i.selectSeatList) || void 0 === a
                ? void 0
                : a.length) > 0 &&
                i.selectSeatList.map(function (e) {
                  if (e.amount > 0)
                    for (var t = 0; t < e.amount; ++t) o.push(e.seatName);
                });
              var l = P.default.isTieyou
                  ? "c_trn_z_10320660965"
                  : "c_trn_z_10320660961",
                s = (null == o ? void 0 : o.length) > 0 ? o.join(",") : "";
              ve.ubtTrace(l, {
                bizKey: "booking_Product_SelectSeat_Click",
                orderId: e,
                partner: P.default.isTieyou ? "tieyou" : "zhixing",
                hasSelectSeat: s || "",
              });
            },
            ln = function (e, t) {
              var n = t.multiManualSelectSeat,
                a = P.default.isTieyou
                  ? "c_trn_z_10320660965"
                  : "c_trn_z_10320660961";
              ve.ubtTrace(a, {
                bizKey: "booking_Product_SelectSeat_Click_Kcgd",
                userId: Ne.ZP.uid || "",
                orderId: e,
                partner: P.default.isTieyou ? "tieyou" : "zhixing",
                hasSelectSeat: "window" === n.code ? "A" : "C",
              });
            },
            sn = function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : [];
              return e.find(function (e) {
                return e.isChild;
              });
            },
            dn = function () {
              var e = ve.getState().passengerModel.allPas,
                t = void 0 === e ? [] : e,
                n = [];
              if (K.Z.isEmptyArray(t)) return n;
              var a = { 1: "成人票", 2: "儿童票", 3: "学生票" };
              return (n = t.map(function (e) {
                var t = e.Birthday,
                  n = void 0 === t ? "" : t,
                  i = e.pasName,
                  r = void 0 === i ? "" : i,
                  o = e.PassengerType,
                  c = void 0 === o ? "" : o,
                  l = e.IdentityNo,
                  s = void 0 === l ? "" : l,
                  d = e.isInvited,
                  u = void 0 !== d && d,
                  p = e.identityNoPass,
                  m = void 0 === p ? "" : p,
                  f = e.Mobile,
                  h = void 0 === f ? "" : f,
                  g = e.cardType,
                  S = void 0 === g ? "" : g,
                  v = e.CardTimeLimit,
                  b = void 0 === v ? "" : v,
                  T = e.Nationality,
                  Z = e.countryCode,
                  y = void 0 === Z ? "86" : Z,
                  P = {
                    passengerName: r,
                    passengerType: a[c],
                    identityType: Me.ZP.getCardType(parseInt(S)),
                    identityNo: u ? m : s,
                    nationality: T,
                    birthDay: n,
                    studentInfo: {},
                    passengerFlag: u ? 3 : 2,
                    contactMobileNo: h,
                    expireDate: b,
                    contactMobileCountryCode: y,
                  };
                return (
                  3 == e.PassengerType &&
                    (e.convertStu || e.isStudentToAdult) &&
                    (P.passengerType = "成人票"),
                  P
                );
              }));
            },
            un = function (e) {
              return e.length
                ? e.map(function (e) {
                    var t = e.pasName,
                      n = void 0 === t ? "" : t,
                      a = e.IdentityNo,
                      i = void 0 === a ? "" : a,
                      r = e.isInvited,
                      o = void 0 !== r && r,
                      c = e.identityNoPass,
                      l = void 0 === c ? "" : c,
                      s = e.Mobile,
                      d = void 0 === s ? "" : s,
                      u = e.cardType,
                      p = void 0 === u ? "" : u;
                    return {
                      freeType: 1,
                      passengerName: n,
                      identityType: Me.ZP.getCardType(parseInt(p)),
                      identityNo: o ? l : i,
                      contactMobileNo: d,
                      relatedPassportName: "",
                      relatedPassportNumber: "",
                    };
                  })
                : [];
            },
            pn = function () {
              var e = ""
                  .concat(V.ET.selectDate, " ")
                  .concat(V.ET.train.DepartTime, ":00"),
                t = H()(V.ET.selectDate)
                  .add(V.ET.train.TakeDays, "day")
                  .format(W),
                n = "".concat(t, " ").concat(V.ET.train.ArriveTime, ":00"),
                a = (function () {
                  var e = ve.getState().seatSelectorModel.selectedSeats;
                  return ve.getState().configModel
                    .isChooseSeatOnlineButtonVisible
                    ? e.join(",")
                    : "";
                })(),
                i = V.ET.train.SeatName || "",
                r = V.ET.train.SeatList.find(function (e) {
                  return e.SeatName === i;
                }).SeatInventory;
              return [
                {
                  departStationName: V.ET.train.DepartStation,
                  arriveStationName: V.ET.train.ArriveStation,
                  departDateTime: e,
                  arriveDateTime: n,
                  trainNum: V.ET.train.TrainNumber,
                  seatName: V.ET.train.SeatName,
                  routeSequence: 1,
                  pid: "",
                  price: V.ET.train.Price || "",
                  fastPassFlag: 0,
                  selectedSeats: a,
                  leftTicketNum: r,
                },
              ];
            },
            mn = K.Z.throttle(function (e) {
              (0, B.showLoading)("正在取消订单...");
              var t = { orderNumber: e, partnerName: P.default.partner };
              (0, Ie.FHX)(t)
                .then(function (e) {
                  1 === e.resultCode
                    ? (0, B.showToast)("订单已取消")
                    : ve.showCommonDialog(
                        e.resultMessage || "网络错误，请稍后再试"
                      );
                })
                .finally(function () {
                  setTimeout(B.hideLoading, 800);
                });
            }, 1500),
            fn = (function () {
              var e = (0, Ze.Z)(
                (0, Te.Z)().mark(function e(t) {
                  var n, a;
                  return (0, Te.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            (0, De.Ar)({ orderNumber: t, type: 2 })
                          );
                        case 2:
                          (n = e.sent), (a = n.orderNumber), on(a || t);
                        case 5:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            hn = (function () {
              var e = (0, Ze.Z)(
                (0, Te.Z)().mark(function e() {
                  var t, n, a, i, r, o, c, l, s, d, u;
                  return (0, Te.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (t = ve.getState().passengerModel.allPas),
                              (n = void 0 === t ? [] : t),
                              (a = K.Z.isEmptyArray(n)
                                ? []
                                : n.map(function (e) {
                                    var t = e.pasName,
                                      n = void 0 === t ? "" : t,
                                      a = e.IdentityNo,
                                      i = void 0 === a ? "" : a,
                                      r = e.isInvited,
                                      o = void 0 !== r && r,
                                      c = e.identityNoPass,
                                      l = void 0 === c ? "" : c,
                                      s = e.cardType,
                                      d = void 0 === s ? "" : s;
                                    return {
                                      passportName: n,
                                      passportType: Me.ZP.getCardType(
                                        parseInt(d)
                                      ),
                                      passportNumber: o ? l : i,
                                    };
                                  })),
                              (i = H()(V.ET.selectDate)
                                .add(V.ET.train.TakeDays, "day")
                                .format(W)),
                              (r = {
                                passengers: a,
                                trainInfoList: [
                                  {
                                    ticketTime: "".concat(
                                      V.ET.train.DepartTime,
                                      ":00"
                                    ),
                                    ticketDate: V.ET.selectDate,
                                    arriveStationName: V.ET.train.ArriveStation,
                                    arriveDateTime: ""
                                      .concat(i, " ")
                                      .concat(V.ET.train.ArriveTime, ":00"),
                                    trainNumber: V.ET.train.TrainNumber,
                                    departStationName: V.ET.train.DepartStation,
                                  },
                                ],
                                scene: 1,
                              }),
                              (e.prev = 4),
                              (e.next = 7),
                              (0, Ie.pR5)(r)
                            );
                          case 7:
                            if (
                              1 !==
                                (null == (l = e.sent)
                                  ? void 0
                                  : l.resultCode) ||
                              2 !==
                                (null == l ||
                                null === (o = l.conflictOrders) ||
                                void 0 === o ||
                                null === (c = o[0]) ||
                                void 0 === c
                                  ? void 0
                                  : c.conflictType)
                            ) {
                              e.next = 18;
                              break;
                            }
                            return (
                              (s = l.conflictOrders[0].title),
                              Dt(),
                              ve.ubtTrace("TZWBuyBook_Conflict_exposure", {
                                PageId: ve.getPage().pageId,
                              }),
                              (e.next = 14),
                              $n({
                                toast: {
                                  toastCode: D.ConflictOrderRemindModal,
                                  data: s,
                                },
                              })
                            );
                          case 14:
                            return (
                              (d = e.sent),
                              1 === (u = d.code) &&
                                ve.ubtTrace("TZWBuyBook_Conflict_Order_click", {
                                  PageId: ve.getPage().pageId,
                                }),
                              e.abrupt("return", 1 === u)
                            );
                          case 18:
                            return e.abrupt("return", !0);
                          case 21:
                            return (
                              (e.prev = 21),
                              (e.t0 = e.catch(4)),
                              e.abrupt("return", !0)
                            );
                          case 24:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[4, 21]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            gn = (function () {
              var e = (0, Ze.Z)(
                (0, Te.Z)().mark(function e() {
                  var t;
                  return (0, Te.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            new Promise(
                              (function () {
                                var e = (0, Ze.Z)(
                                  (0, Te.Z)().mark(function e(t) {
                                    var n, a, i;
                                    return (0, Te.Z)().wrap(
                                      function (e) {
                                        for (;;)
                                          switch ((e.prev = e.next)) {
                                            case 0:
                                              if (
                                                ((n =
                                                  ve.getState().my12306Model),
                                                (a = n.login12306Name),
                                                (i = n.login12306Pas),
                                                a || i)
                                              ) {
                                                e.next = 4;
                                                break;
                                              }
                                              return t(-1), e.abrupt("return");
                                            case 4:
                                              return (
                                                (e.prev = 4),
                                                (e.next = 7),
                                                (0, pe.ml)({
                                                  UserName: a,
                                                  Password: i,
                                                  Channel: "zhixing",
                                                })
                                              );
                                            case 7:
                                              t(0), (e.next = 16);
                                              break;
                                            case 10:
                                              if (
                                                ((e.prev = 10),
                                                (e.t0 = e.catch(4)),
                                                e.t0 && e.t0.Code)
                                              ) {
                                                e.next = 15;
                                                break;
                                              }
                                              return t(0), e.abrupt("return");
                                            case 15:
                                              t(e.t0.Code);
                                            case 16:
                                            case "end":
                                              return e.stop();
                                          }
                                      },
                                      e,
                                      null,
                                      [[4, 10]]
                                    );
                                  })
                                );
                                return function (t) {
                                  return e.apply(this, arguments);
                                };
                              })()
                            )
                          );
                        case 2:
                          (t = e.sent),
                            ve.getDispatch().darkModel.updateAccountStatus(t);
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            Sn = function () {
              return (
                we.Z.commonDebugTrace("step: accountCheck"),
                new Promise(
                  (function () {
                    var e = (0, Ze.Z)(
                      (0, Te.Z)().mark(function e(t, n) {
                        var a, i;
                        return (0, Te.Z)().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (0, B.showLoading)(), (e.next = 3), gn();
                              case 3:
                                if (
                                  3 !==
                                  (a =
                                    ve.getState().darkModel.accountHealthStatus)
                                ) {
                                  e.next = 6;
                                  break;
                                }
                                return e.abrupt("return", t());
                              case 6:
                                return (e.next = 8), vt(!1);
                              case 8:
                                if (
                                  ((i = e.sent),
                                  (0, B.hideLoading)(),
                                  null != i && i.authFailToastInfo)
                                ) {
                                  e.next = 20;
                                  break;
                                }
                                if (1 !== a) {
                                  e.next = 19;
                                  break;
                                }
                                return (
                                  (e.next = 14),
                                  ve.commonDrawerConfirmAsync({
                                    content: "请先登录您的12306账号",
                                    cancelText: "取消",
                                    confirmText: "去登录",
                                  })
                                );
                              case 14:
                                if (e.sent) {
                                  e.next = 17;
                                  break;
                                }
                                return e.abrupt(
                                  "return",
                                  n("handleAccountCheck force intercept")
                                );
                              case 17:
                                return (
                                  Me.ZP.goto12306H5({ pageName: "login" })
                                    .then(function () {
                                      ve.getDispatch().my12306Model.refresh(),
                                        t();
                                    })
                                    .catch(n),
                                  e.abrupt("return")
                                );
                              case 19:
                                return e.abrupt("return", t());
                              case 20:
                                bn(i), Dt(), n("handleAccountCheck intercept");
                              case 23:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      })
                    );
                    return function (t, n) {
                      return e.apply(this, arguments);
                    };
                  })()
                )
              );
            },
            vn = function (e, t) {
              var n = e.authFailToastInfo,
                a = e.abTestMap,
                i = e.userRoleInfo,
                r = e.statusOn12306Account,
                o = "";
              void 0 !== r
                ? (o = (0, pe.Bh)(r))
                : ((null == n ? void 0 : n.authToastInfoList) || []).filter(
                    function (e) {
                      return !!e.interruptType;
                    }
                  ).length > 0 && (o = "f"),
                ve
                  .getDispatch()
                  .authFailProductModel.updateAuthFailToastInfo({
                    authFailToastInfo: n
                      ? (0, A.Z)(
                          (0, A.Z)({}, n),
                          {},
                          { authFailType: o || "x" }
                        )
                      : null,
                    abTestMap: a,
                    userRoleInfo: i,
                    interceptScene: t,
                  });
            },
            bn = (function () {
              var e = (0, Ze.Z)(
                (0, Te.Z)().mark(function e(t) {
                  var n,
                    a,
                    i,
                    r,
                    o,
                    c = arguments;
                  return (0, Te.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          (n = c.length > 1 && void 0 !== c[1] ? c[1] : "pre"),
                            vn(t, n),
                            (a = ve.getState().authFailProductModel),
                            (i = a.authFailToastInfo),
                            (r = a.abTestMap),
                            (o = a.userRoleInfo),
                            $n({
                              toast: {
                                toastCode: D.DarkIntercept,
                                data: {
                                  abTestMap: r,
                                  authFailToastInfo: i,
                                  userRoleInfo: o,
                                  canUseNewstyle: n === x.pre,
                                },
                              },
                              onConfirm: function (e, t) {
                                Tn(e, t);
                              },
                              onCancel: function () {
                                we.Z.commonDebugTrace(
                                  "step: 售前拦截：用户主动取消"
                                );
                              },
                            }),
                            ve.ubtTrace("TZWBuyBook_PreInterceptPop_exposure", {
                              PageId: ve.getPage().pageId,
                              Type: null == i ? void 0 : i.authFailType,
                              clickType: i.authToastInfoList.map(function (e) {
                                return e.toastType;
                              }),
                              IsNew:
                                "Y" ===
                                (null == o ? void 0 : o.trainPayNewConsumer)
                                  ? 1
                                  : 0,
                            });
                        case 5:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            Tn = function (e, t) {
              var n =
                ve.getState().authFailProductModel.interceptScene === x.hold;
              we.Z.commonDebugTrace(
                "step: "
                  .concat(n ? "扣位" : "售前", "中断处理 - ")
                  .concat(null == e ? void 0 : e.toastType)
              );
              var a = null == e ? void 0 : e.toastType;
              if (a) {
                var i = ve.getState().authFailProductModel,
                  r = i.userRoleInfo,
                  o = void 0 === r ? {} : r,
                  c = i.authFailToastInfo;
                if (
                  (ve.ubtTrace("TZWBuyBook_PreInterceptPop_click", {
                    PageId: ve.getPage().pageId,
                    Type: null == c ? void 0 : c.authFailType,
                    clickType: a,
                    IsNew: "Y" === o.trainPayNewConsumer ? 1 : 0,
                  }),
                  1 == a)
                )
                  return (
                    Qn(),
                    ve.ubtTrace("c_trn_z_10320660961", {
                      bizKey: "z_mini_ow_ndark_fc_click_result",
                      status: null == c ? void 0 : c.authFailType,
                      clickmethod: a + "",
                      click_result: 1,
                      productId: (null == e ? void 0 : e.productId) || "",
                      newScene: "Y" === o.trainPayNewConsumer ? "1" : "0",
                    }),
                    an({
                      convertEleTicketInfo: { productCodes: [e.productId] },
                      convertEleTicketTreasuresGoodsInfo: e.treasureGoodsInfo,
                    })
                  );
                if (n || (2 != a && 3 != a))
                  if (
                    n &&
                    2 == a &&
                    "f" === (null == e ? void 0 : e.interruptType)
                  )
                    Mn(e, t);
                  else if (4 != a && 5 != a && 6 != a) {
                    if ((8 == a && (Qn(), Nn()), 9 != a))
                      return 10 == a ? (Qn(), void Pn()) : void 0;
                    Qn();
                  } else yn(5 == a ? 2 : 1, a, n ? 3 : 1);
                else Zn(a);
              }
            },
            Zn = function (e, t) {
              console.log(e, t);
              var n = ve.getState().trainModel,
                a = n.trainInfo,
                i = n.departDateStr,
                r = ve.getState().passengerModel.allPas,
                o = ve.getState().authFailProductModel,
                c = o.authFailToastInfo,
                l = o.userRoleInfo,
                s = void 0 === l ? {} : l,
                d = r
                  .map(function (e) {
                    return e.pasName;
                  })
                  .slice(0, 2)
                  .join("、");
              r.length > 2 && (d += "等");
              var u = tn();
              (u.virtualOrder = 1),
                ve.navigateTo({
                  url: "/pages/12306/dark/predark",
                  data: {
                    type:
                      2 == e
                        ? "FACE_LOGIN"
                        : 3 == e
                        ? "MESSAGE_LOGIN"
                        : "RESET_PASSWORD",
                    extraInfo: t,
                    productInfos:
                      (null == c ? void 0 : c.saleProductInfoList) || [],
                    unSaleProductInfos:
                      (null == c ? void 0 : c.unSaleProductInfoList) || [],
                    authPageInfo: null == c ? void 0 : c.authPageInfo,
                    orderInfo: {
                      fromStation: a.DepartStation,
                      toStation: a.ArriveStation,
                      passengerStr: d,
                      fromDate: i,
                    },
                    createOrderParams: u,
                  },
                  callback: function (t) {
                    setTimeout(function () {
                      Qn(),
                        ve.getDispatch().my12306Model.refresh(),
                        ve.ubtTrace("c_trn_z_10320660961", {
                          bizKey: "z_mini_ow_ndark_fc_click_result",
                          status: null == c ? void 0 : c.authFailType,
                          clickmethod: e + "",
                          click_result: 1,
                          productId: t.productId || "",
                          newScene: "Y" === s.trainPayNewConsumer ? "1" : "0",
                        }),
                        an({
                          convertEleTicketInfo: t.productId && {
                            productCodes: [t.productId],
                          },
                          convertEleTicketTreasuresGoodsInfo:
                            t.treasureGoodsInfo,
                        });
                    }, 300);
                  },
                });
            },
            yn = function (e, t, n) {
              var a = ve.getState().authFailProductModel,
                i = a.authFailToastInfo,
                r = a.userRoleInfo,
                o = void 0 === r ? {} : r,
                c = ve.getState().my12306Model,
                l = c.login12306Name,
                s = void 0 === l ? "" : l,
                d = c.login12306Pas,
                u = void 0 === d ? "" : d;
              Me.ZP.goto12306H5({
                autoAction: 2 == e ? "register" : 3 == e ? "resetpassword" : "",
                pageName: "booking",
                userAccount: s,
                passWord: u,
                scene: n,
              })
                .then(function () {
                  ve.getDispatch().my12306Model.refresh(),
                    Qn(),
                    ve.ubtTrace("c_trn_z_10320660961", {
                      bizKey: "z_mini_ow_ndark_fc_click_result",
                      status: null == i ? void 0 : i.authFailType,
                      clickmethod: t + "",
                      click_result: 1,
                      newScene: "Y" === o.trainPayNewConsumer ? "1" : "0",
                    }),
                    en();
                })
                .catch(function () {});
            },
            Pn = function () {
              return en({ specialOrderFlag: 1 });
            },
            Nn = (function () {
              var e = (0, Ze.Z)(
                (0, Te.Z)().mark(function e() {
                  var t, n, a, i;
                  return (0, Te.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              ve.navigateToAsync({
                                url: "/pages/12306/retrievePassWord/retrievePassWord",
                                data: {
                                  resetType: "pc",
                                  mobile: ve.getState().my12306Model.mobile,
                                },
                              })
                            );
                          case 3:
                            return (
                              (t = e.sent),
                              (n = t.res),
                              (a = n.account),
                              (i = n.password),
                              we.Z.commonDebugTrace(
                                "修改密码成功: ".concat(a, " ").concat(i)
                              ),
                              (0, B.showLoading)(),
                              (e.next = 10),
                              (0, Ce.Mm)(a, i)
                            );
                          case 10:
                            (0, B.hideLoading)(),
                              ve.getDispatch().my12306Model.refresh(),
                              we.Z.commonDebugTrace("静默登录成功"),
                              (0, B.showToast)("密码修改成功"),
                              (e.next = 18);
                            break;
                          case 16:
                            (e.prev = 16), (e.t0 = e.catch(0));
                          case 18:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 16]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            Mn = function (e, t) {
              var n,
                a,
                i,
                r,
                o,
                c = e.interruptOperateInfo,
                l = e.interruptType,
                s = ve.getState().my12306Model,
                d = s.login12306Name,
                u = void 0 === d ? "" : d,
                p = s.login12306Pas,
                m = void 0 === p ? "" : p,
                f =
                  (null == c ||
                  null === (n = c.currentOrderAccountInfo) ||
                  void 0 === n
                    ? void 0
                    : n.userName) || u,
                h = m,
                g = e.operateFailMaxTimes || 3;
              if (
                ((ve.getPage().faceTimes = ve.getPage().faceTimes
                  ? ve.getPage().faceTimes + 1
                  : 1),
                ve.getPage().faceTimes > g)
              )
                return (
                  (0, B.showToast)("暂时无法扫脸，请稍候重试"),
                  Qn(),
                  void (t && on(t))
                );
              var S =
                  null != c && c.currentOrderAccountInfo
                    ? {
                        name: encodeURIComponent(
                          (null == c ||
                          null === (a = c.currentOrderAccountInfo) ||
                          void 0 === a
                            ? void 0
                            : a.passengerName) || ""
                        ),
                        passportType:
                          null == c ||
                          null === (i = c.currentOrderAccountInfo) ||
                          void 0 === i
                            ? void 0
                            : i.accountPassportType,
                        passportNumber:
                          null == c ||
                          null === (r = c.currentOrderAccountInfo) ||
                          void 0 === r
                            ? void 0
                            : r.accountPassportNumber,
                        mobile:
                          null == c ||
                          null === (o = c.currentOrderAccountInfo) ||
                          void 0 === o
                            ? void 0
                            : o.accountMobile,
                      }
                    : "",
                v = "/pages/12306/face/face?userName="
                  .concat(f, "&certificationInfo=")
                  .concat(
                    JSON.stringify(S),
                    "&fromType=",
                    4,
                    "&failAction=return"
                  );
              ve.navigateTo({
                url: v,
                callback: (function () {
                  var e = (0, Ze.Z)(
                    (0, Te.Z)().mark(function e(n) {
                      var a, i, r, o, c;
                      return (0, Te.Z)().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (a = n.certificationResultCode),
                                (i = n.retMessage),
                                (r = void 0 === i ? "" : i),
                                {},
                                "OT",
                                (c = Me.ZP.encode12306Account({
                                  login12306Name: f,
                                  login12306Pas: h,
                                })),
                                (o = {
                                  orderNumber: t,
                                  loginName: f,
                                  password: c.login12306Pas,
                                  operateType: l,
                                  operateSceneType: "OT",
                                  operateResult: 1 === a ? 1 : 2,
                                  failMsg: ""
                                    .concat(
                                      r || (1 === a ? "扫脸成功" : "扫脸失败")
                                    )
                                    .concat(
                                      ve.getPage().faceTimes === g && 1 !== a
                                        ? "(扣位)"
                                        : ""
                                    ),
                                }),
                                (0, B.showLoading)(),
                                (e.next = 8),
                                (0, Ie.BWQ)(o).catch(console.log)
                              );
                            case 8:
                              if (
                                ((0, B.hideLoading)(),
                                (0, B.showToast)(
                                  1 === a
                                    ? "核验成功~"
                                    : "核验失败，请稍后重试~"
                                ),
                                1 !== a)
                              ) {
                                e.next = 16;
                                break;
                              }
                              return Qn(), (e.next = 14), K.Z.awaitTime(800);
                            case 14:
                              return on(t), e.abrupt("return");
                            case 16:
                              if (ve.getPage().faceTimes !== g) {
                                e.next = 21;
                                break;
                              }
                              return Qn(), (e.next = 20), K.Z.awaitTime(800);
                            case 20:
                              on(t);
                            case 21:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              });
            },
            wn = function (e) {
              var t = (e.data || {}).isReschedule,
                n = void 0 !== t && t;
              ve.getDispatch().reschduleModel.toggleReschduleMode(!!n);
              var a = Cn();
              ve.getDispatch().reschduleModel.setReschduleOrderInfo(a), Dn();
            },
            Cn = function () {
              var e = V.ET.rescheduleInfo || {},
                t = e.orderInfo,
                n = void 0 === t ? {} : t,
                a = e.isSelfResign,
                i = void 0 !== a && a,
                r = n.ticketInfos,
                o = void 0 === r ? [] : r;
              return !Array.isArray(o) || o.length < 1
                ? {}
                : (0, A.Z)(
                    (0, A.Z)({}, n),
                    {},
                    {
                      isSelfResign: i,
                      ticketInfos: o.filter(function (e) {
                        return e.selected;
                      }),
                    }
                  );
            },
            In = function () {
              var e, t, n;
              if (kn()) {
                var a = ve.getState().reschduleModel,
                  i = a.oldOrderInfo,
                  r = a.reschedulePrice,
                  o = ve.getState().appointSeatModel.appointSeatDetail,
                  c = ve.getState().trainModel.trainInfo,
                  l = i.ticketInfos,
                  s = void 0 === l ? [] : l,
                  d = ""
                    .concat(V.ET.selectDate, " ")
                    .concat(V.ET.train.DepartTime),
                  u = ""
                    .concat(
                      H()(V.ET.selectDate).add(c.TakeDays, "day").format(W),
                      " "
                    )
                    .concat(V.ET.train.ArriveTime),
                  p = {
                    originalElectronicLongNums: s
                      .map(function (e) {
                        return e.electronicLongNum;
                      })
                      .join(","),
                    originalOrderNumber: i.tyOrderNo,
                    trainNumber: c.TrainNumber,
                    departStationName: c.DepartStation,
                    arriveStationName: c.ArriveStation,
                    departTime: d,
                    arriveTime: u,
                    ticketPrice: r,
                    seatName: c.SeatName,
                    rescheduleType: i.isSelfResign ? 1 : 0,
                    rescheduleAppointSeat: {
                      selectSeatList:
                        (null == o ||
                        null === (e = o.seatInfoList) ||
                        void 0 === e ||
                        null ===
                          (t = e.filter(function (e) {
                            return e.num > 0;
                          })) ||
                        void 0 === t
                          ? void 0
                          : t.map(function (e) {
                              return {
                                amount: e.num,
                                seatCode: e.seatCode,
                                seatName: e.seatName,
                              };
                            })) || [],
                    },
                  };
                null !== (n = ve.getPage()) &&
                  void 0 !== n &&
                  n.smartTripId &&
                  (p.smartTripId = ve.getPage().smartTripId),
                  (0, De.BG)(p)
                    .then(
                      (function () {
                        var e = (0, Ze.Z)(
                          (0, Te.Z)().mark(function e(t) {
                            return (0, Te.Z)().wrap(function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    1 != t.resultCode
                                      ? ve.showCommonDialog(
                                          t.resultMessage ||
                                            "改签失败，请稍后重试"
                                        )
                                      : Wt({
                                          riskOrderNumber: i.tyOrderNo,
                                          rescheduleOrderNumber:
                                            t.rescheduleOrderNumber,
                                        });
                                  case 1:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                          })
                        );
                        return function (t) {
                          return e.apply(this, arguments);
                        };
                      })()
                    )
                    .catch(function (e) {
                      console.log(e),
                        ve.showCommonDialog("改签失败，请稍后重试");
                    })
                    .finally(B.hideLoading);
              }
            },
            kn = function () {
              var e =
                  ve.getState().reschduleModel.oldOrderInfo.ticketInfos || [],
                t = V.ET.train.SeatList.filter(function (e) {
                  return e.SeatName === V.ET.train.SeatName;
                }),
                n = t.length && t[0];
              return 0 == e.length
                ? (ve.showCommonDialog("请选择改签乘客"), !1)
                : n && n.SeatInventory > 0 && n.SeatBookable
                ? -1 !== n.SeatName.indexOf("卧") &&
                  e.length > 1 &&
                  !(0, ye.Uy)("isOpenResignBedMulti")
                  ? (ve.showCommonDialog(
                      "很抱歉，卧铺不支持同时多人改签，请分开改签"
                    ),
                    !1)
                  : !(
                      n.SeatInventory < e.length &&
                      (ve.showCommonDialog(
                        "当前席位余票小于".concat(
                          e.length,
                          "张，请您更改改签乘客人数，或更换余票充足的席位、车次。"
                        )
                      ),
                      1)
                    )
                : (ve.showCommonDialog(
                    "暂时不支持改签抢，请选择其它座席或车次"
                  ),
                  !1);
            },
            Dn = function () {
              var e = ve.getState().reschduleModel.oldOrderInfo,
                t = ve.getState().trainModel.trainInfo,
                n = e.ticketInfos,
                a = void 0 === n ? [] : n;
              if (Array.isArray(a) && 0 != a.length) {
                var i = a.reduce(function (e, t) {
                    return e + t.ticketPrice;
                  }, 0),
                  r = t.Price * a.length;
                ve.getDispatch().reschduleModel.setReschedulePrice(r),
                  ve.getDispatch().reschduleModel.setOriginPricePrice(i);
              }
            },
            xn = (function () {
              var e = (0, Ze.Z)(
                (0, Te.Z)().mark(function e() {
                  var t, n;
                  return (0, Te.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          (t = ve.getState().trainModel.trainInfo),
                            (n = Me.ZP.isPreSecKill(t)),
                            ve
                              .getDispatch()
                              .secSkillModel.setSecSkillInfo({
                                isPreSecKill: n,
                              }),
                            En();
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            Bn = (function () {
              var e = (0, Ze.Z)(
                (0, Te.Z)().mark(function e() {
                  var t,
                    n,
                    a,
                    i,
                    r = arguments;
                  return (0, Te.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ((t = r.length > 0 && void 0 !== r[0] ? r[0] : {}),
                            (n = t.onlyValid),
                            (a = void 0 !== n && n),
                            Ne.ZP.isLogin)
                          ) {
                            e.next = 4;
                            break;
                          }
                          return (e.next = 4), Ne.ZP.doLogin();
                        case 4:
                          return (e.next = 6), Yt(!a);
                        case 6:
                          return (e.next = 8), Jt(!a);
                        case 8:
                          return (e.next = 10), qt(!a);
                        case 10:
                          if (a) {
                            e.next = 18;
                            break;
                          }
                          if (
                            ((i = ve.getState().passengerModel.allPas), !sn(i))
                          ) {
                            e.next = 18;
                            break;
                          }
                          return (
                            (e.next = 15),
                            ve.showMultiButtonDialogWithPromise({
                              title: "儿童监护人申明",
                              content:
                                "本人是该未成年人的监护人或已征得监护人同意，允许平台以提供产品或服务为目的，处理未成年人信息",
                              leftButtonName: "取消",
                              rightButtonName: "确认并预订",
                            })
                          );
                        case 15:
                          if ("right" == e.sent) {
                            e.next = 18;
                            break;
                          }
                          throw "儿童监护人申明取消";
                        case 18:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            Vn = (function () {
              var e = (0, Ze.Z)(
                (0, Te.Z)().mark(function e() {
                  return (0, Te.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              we.Z.commonDebugTrace(
                                "step: handleSecSkillOrder start"
                              ),
                              (ve.getPage()._isStartSecKill = !0),
                              ve.ubtTrace("TZWBuyBook_SeckillButton_click", {
                                PageId: ve.getPage().pageId,
                              }),
                              (e.prev = 3),
                              (e.next = 6),
                              Bn()
                            );
                          case 6:
                            return (
                              (e.next = 8),
                              we.Z.commonDebugTrace("step: accountCheck"),
                              new Promise(
                                (function () {
                                  var e = (0, Ze.Z)(
                                    (0, Te.Z)().mark(function e(t, n) {
                                      return (0, Te.Z)().wrap(function (e) {
                                        for (;;)
                                          switch ((e.prev = e.next)) {
                                            case 0:
                                              if (
                                                ve.getState().my12306Model
                                                  .logedin
                                              ) {
                                                e.next = 8;
                                                break;
                                              }
                                              return (
                                                (e.next = 3),
                                                ve.commonDrawerConfirmAsync({
                                                  content:
                                                    "请先登录您的12306账号",
                                                  cancelText: "取消",
                                                  confirmText: "去登录",
                                                })
                                              );
                                            case 3:
                                              if (e.sent) {
                                                e.next = 6;
                                                break;
                                              }
                                              return e.abrupt(
                                                "return",
                                                n(
                                                  "handleAccountCheck force intercept"
                                                )
                                              );
                                            case 6:
                                              return (
                                                Me.ZP.goto12306H5({
                                                  pageName: "login",
                                                })
                                                  .then(function () {
                                                    ve
                                                      .getDispatch()
                                                      .my12306Model.refresh(),
                                                      t();
                                                  })
                                                  .catch(n),
                                                e.abrupt("return")
                                              );
                                            case 8:
                                              return e.abrupt("return", t());
                                            case 9:
                                            case "end":
                                              return e.stop();
                                          }
                                      }, e);
                                    })
                                  );
                                  return function (t, n) {
                                    return e.apply(this, arguments);
                                  };
                                })()
                              )
                            );
                          case 8:
                            if (ve.getState().secSkillModel.isPreSecKill) {
                              e.next = 12;
                              break;
                            }
                            return (
                              (0, B.showToast)("秒杀已结束"), e.abrupt("return")
                            );
                          case 12:
                            return (e.next = 14), Rn();
                          case 14:
                            e.next = 20;
                            break;
                          case 16:
                            (e.prev = 16),
                              (e.t0 = e.catch(3)),
                              we.Z.commonDebugTrace(
                                "step: handleSecSkillOrder fail: ".concat(e.t0)
                              ),
                              setTimeout(B.hideLoading, 1500);
                          case 20:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[3, 16]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            An = function (e) {
              var t = "";
              return (
                Array.isArray(e) &&
                  e.length > 0 &&
                  (t = e
                    .map(function (e) {
                      return e.trainNumber;
                    })
                    .join(",")),
                t
              );
            },
            _n = function () {
              var e,
                t,
                n = {},
                a = dn(),
                i = un(ve.getState().passengerModel.freeChildren),
                r =
                  null === (e = ve.getPage().$TableRef) ||
                  void 0 === e ||
                  null === (t = e.tel) ||
                  void 0 === t
                    ? void 0
                    : t.value,
                o = ve.getState().trainModel.trainInfo,
                c = Me.ZP.encode12306Account({
                  login12306Name:
                    ve.getState().my12306Model.userName12306 ||
                    ve.getState().my12306Model.login12306Name ||
                    "",
                  login12306Pas: ve.getState().my12306Model.login12306Pas || "",
                });
              (n.mobile = r),
                (n.productCodes = ""),
                (n.userName = c.login12306Name),
                (n.password = c.login12306Pas),
                (n.freePassengerList = i);
              var l = [o]
                .map(function (e) {
                  var t = {
                    trainNumber: e.TrainNumber,
                    departStation: e.DepartStation,
                    arriveStation: e.ArriveStation,
                  };
                  return (
                    (t.departTime = e.DepartTime),
                    (t.arriveTime = e.ArriveTime),
                    (t.time = e.TimesCost),
                    (t.durationMinute = e.RunTime),
                    (!1 !== e.IsFastPass && !0 !== e.IsFastPass) ||
                      ((t.exchangeable = e.IsCanPointsPay ? 1 : 2),
                      (t.fastPass = e.IsFastPass ? 1 : 2),
                      (t.isJy = e.IsCanSilent ? 1 : 2)),
                    t
                  );
                })
                .concat(ve.getPage().$TrainSeletor.getValues());
              return (
                (n.contactMobile = r),
                (n.bookType = 1004),
                (n.passengerList = a),
                (n.trainInfo = {
                  trainNo: An(l),
                  seatName: o.SeatName,
                  fromName: o.DepartStation,
                  toName: o.ArriveStation,
                  fromDate: o.DepartureDate,
                  mainFromTime: o.DepartTime,
                  mainToTime: o.ArriveTime,
                  trainStationInfos: l,
                }),
                (n.candidateFlag = 0),
                (n.userAuth12306Status =
                  ve.getState().my12306Model.auth12306Status || -1),
                (n.trainNoCanCandidate = 0),
                (n.businessTag = "userAheadBooking"),
                n
              );
            },
            Rn = (function () {
              var e = (0, Ze.Z)(
                (0, Te.Z)().mark(function e() {
                  var t, n, a, i, r, o, c, l;
                  return (0, Te.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            we.Z.commonDebugTrace(
                              "step: addSecSkillOrder start"
                            ),
                            (t = _n()),
                            (0, B.showLoading)("加载中，请稍候"),
                            (e.next = 5),
                            (0, Ie.EpB)(t)
                          );
                        case 5:
                          if (
                            ((n = e.sent),
                            (a = n.resultCode),
                            (i = n.orderNumber),
                            (r = n.riskOrderNumber),
                            (o = n.resultMessage),
                            (c = n.endDateTime),
                            1 === a)
                          ) {
                            e.next = 16;
                            break;
                          }
                          return (
                            (0, B.hideLoading)(),
                            r &&
                              ve.showMultiButtonDialog({
                                content: o,
                                leftButtonName: "查看订单",
                                rightButtonName: "取消订单",
                                onLeftButtonClick: function () {
                                  var e = Me.ZP.getTrainDetailUrl(r);
                                  ve.navigateTo({ url: e });
                                },
                                onRightButtonClick: function () {
                                  mn(r);
                                },
                              }),
                            (0, B.showToast)("网络错误，请稍候重试~"),
                            e.abrupt("return")
                          );
                        case 16:
                          (0, B.hideLoading)(),
                            (l = ve.getState().trainModel.trainInfo),
                            ve.navigateTo({
                              url: "/pages/trainDetail/secSkill/secSkill?oid=".concat(
                                i
                              ),
                              data: {
                                originalTrain: l,
                                passengerList: dn(),
                                freeChildren: un(
                                  ve.getState().passengerModel.freeChildren
                                ),
                                saleDate: l._saleDate,
                                endDateTime: c,
                                chosenList: ve
                                  .getPage()
                                  .$TrainSeletor.getValues(),
                              },
                            });
                        case 19:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            En = (function () {
              var e = (0, Ze.Z)(
                (0, Te.Z)().mark(function e() {
                  var t, n, a, i;
                  return (0, Te.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((e.prev = 0),
                              (t = ve.getState().secSkillModel.isPreSecKill),
                              (n =
                                ve.getState().trainModel.trainInfo._saleDate),
                              (a = !!ve.getState().my12306Model.logedin),
                              t && !ve.getPage()._isStartSecKill)
                            ) {
                              e.next = 6;
                              break;
                            }
                            return e.abrupt("return");
                          case 6:
                            if (
                              ((i = H()(n).subtract(5, "second")),
                              !H()().isAfter(i) || !a)
                            ) {
                              e.next = 16;
                              break;
                            }
                            return (
                              we.Z.commonDebugTrace(
                                "step: handleSecSkillOrder auto"
                              ),
                              (e.next = 11),
                              Bn()
                            );
                          case 11:
                            return (
                              (ve.getPage()._isStartSecKill = !0),
                              (e.next = 14),
                              Rn()
                            );
                          case 14:
                            e.next = 19;
                            break;
                          case 16:
                            return (e.next = 18), K.Z.awaitTime(1e3);
                          case 18:
                            return e.abrupt("return", En());
                          case 19:
                            e.next = 24;
                            break;
                          case 21:
                            (e.prev = 21),
                              (e.t0 = e.catch(0)),
                              we.Z.commonDebugTrace(
                                "handleSecSkillBreath err: ".concat(e.t0)
                              );
                          case 24:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 21]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            On = (function () {
              var e = (0, Ze.Z)(
                (0, Te.Z)().mark(function e() {
                  return (0, Te.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (!!ve.getState().my12306Model.logedin) {
                            e.next = 3;
                            break;
                          }
                          return e.abrupt("return", Yn());
                        case 3:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            Ln = function (e) {
              var t, n, a, i, r, o;
              console.log("options===", e);
              var c =
                  null == e || null === (t = e.data) || void 0 === t
                    ? void 0
                    : t.strideInfo,
                l =
                  (null === (n = e.data) || void 0 === n
                    ? void 0
                    : n.isStride) || (null == e ? void 0 : e.isStride),
                s =
                  (null == e || null === (a = e.data) || void 0 === a
                    ? void 0
                    : a.orderSource) ||
                  (null == e ? void 0 : e.orderSource) ||
                  "";
              console.log("orderSource", s);
              var d =
                (null === (i = e.data) || void 0 === i
                  ? void 0
                  : i.trainViewModeType) || "";
              null != s &&
                s.includes("SmartJianlouSystem_") &&
                (c =
                  null != e && e.strideInfo
                    ? JSON.parse(
                        decodeURIComponent(
                          (null == e ? void 0 : e.strideInfo) || "{}"
                        )
                      )
                    : {}),
                (ve.getPage().smartTripId =
                  null == e || null === (r = e.data) || void 0 === r
                    ? void 0
                    : r.smartTripId),
                ve.getDispatch().trainModel.updateSelectTrainInfo(c),
                ve.getDispatch().trainModel.updateStrideFlag(l),
                ve.getDispatch().trainModel.updateOrderSource(s),
                ve.getDispatch().trainModel.updateTrainViewModeType(d);
              var u = xe.Z.getOutParams(e);
              return e && u.trainName
                ? Fn(u)
                : "smartx" ===
                  (null == e || null === (o = e.data) || void 0 === o
                    ? void 0
                    : o.fromPage)
                ? (Hn(e.data), Promise.resolve())
                : e && e.data && "trainx" === e.data.fromPage
                ? (Kn(e.data), Promise.resolve())
                : V.ET.train
                ? (1 === V.ET.train.newBooking &&
                    ((V.ET.train.Price = V.ET.train.chosenSeat.SeatPrice),
                    (V.ET.train.SeatName = V.ET.train.chosenSeat.SeatName)),
                  Xn(V.ET.train),
                  Promise.resolve(V.ET.train))
                : Promise.reject();
            },
            Fn = function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              if (xe.Z.isNotEmptyObj(e)) {
                var t = e.dStation,
                  n = e.aStation,
                  a = e.trainName,
                  i = e.dDate || H()().add(1, "day").format(W),
                  r = {
                    DepartStation: t,
                    ArriveStation: n,
                    DepartDate: i,
                    TrainName: a,
                  },
                  o = function () {
                    (0, S.getCurrentPages)().length < 2
                      ? K.Z.relaunchHome()
                      : ve.navigateBack();
                  };
                return (
                  (0, B.showLoading)(),
                  Me.ZP.getTrainList(r)
                    .then(function (t) {
                      var n, a;
                      if (((0, B.hideLoading)(), t && t.length)) {
                        var i = t;
                        n = (i = xe.Z.handleTrains(i, r.DepartDate))[0];
                      }
                      if (!n || !n.SeatList || !n.SeatList.length)
                        throw (
                          (ve.showCommonDialog({
                            content: "未找到该车次，请重新选择",
                            onButtonClick: o,
                          }),
                          new Error("未查询到车次信息"))
                        );
                      if (
                        !(function (e) {
                          var t = new Date().getTime(),
                            n = e.DepartTime.split(":"),
                            a = (0, Z.Z)(n, 2),
                            i = a[0],
                            o = a[1],
                            c = new Date(
                              H()(r.DepartDate).format("YYYY/MM/DD")
                            );
                          return (
                            c.setHours(i), c.setMinutes(o), Number(c) - t > 0
                          );
                        })(n)
                      )
                        throw (
                          (ve.showCommonDialog({
                            content: "已过发车时间，请选择其他车次",
                            onButtonClick: o,
                          }),
                          "已过发车时间，请选择其他车次")
                        );
                      if (
                        ((V.ET.selectDate = e.dDate),
                        e.seat &&
                          n.SeatList &&
                          n.SeatList.forEach(function (t) {
                            t.SeatName === e.seat && (a = t);
                          }),
                        a || (a = n.SeatList && n.SeatList[0]),
                        (n.SeatName = a.SeatName),
                        (n.Price = a.ShowSeatPrice || a.SeatPrice),
                        (n.chosenSeat = a),
                        Xn(n),
                        a.SeatInventory <= 0)
                      )
                        throw "坐席余票不足或者未开售";
                      return n;
                    })
                    .catch(function (e) {
                      (0, B.hideLoading)(),
                        ve.showCommonDialog({
                          content:
                            "string" == typeof e ? e : "系统异常，请重试",
                          onButtonClick: o,
                        });
                    })
                );
              }
            },
            Hn = function () {
              var e,
                t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                n = t.train;
              if (!n)
                return ve.showCommonDialog({
                  content: "系统异常，请稍后重试",
                  onButtonClick: ve.navigateBack,
                });
              (ve.getPage().isSmartTrip = !0),
                (V.ET.selectDate = n.DepartureDate),
                (n.chosenSeat =
                  null === (e = n.seats) || void 0 === e
                    ? void 0
                    : e.find(function (e) {
                        return e.SeatName == n.SeatName;
                      })),
                Xn(n);
            },
            Xn = function (e) {
              V.ET.train = e;
              var t = V.ET.selectDate;
              (e.DepartureDate = t),
                (e.dayOfweek = At.Z.getWeekDay(e.DepartTimeStamp));
              var n = e.SeatName.indexOf("卧") > -1,
                a = H()(t).format("M月D日"),
                i = H()(t).add(e.TakeDays, "day").format("M月D日"),
                r = At.Z.getWeekDay(t),
                o = H()(t).add(e.TakeDays, "day").format(W),
                c = At.Z.getWeekDay(o),
                l = n;
              ve
                .getPage()
                .setPageTitle(
                  "".concat(a, " ").concat(At.Z.getWeekDayDesc(t), "出发")
                ),
                ve.getDispatch().trainModel.updateTrain(e),
                ve
                  .getDispatch()
                  .trainModel.updateStatus({
                    isBed: n,
                    departDateStr: a,
                    arriveDateStr: i,
                    departWeekDay: r,
                    arriveDateWeekDay: c,
                    showAppointSeatBox: l,
                  }),
                qn();
            },
            Kn = function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                t = e.train;
              if (!t)
                return ve.showCommonDialog({
                  content: "系统异常，请稍后重试",
                  onButtonClick: ve.navigateBack,
                });
              (V.ET.selectDate = t.selectDate),
                (t.Price = t.chosenSeat.SeatPrice),
                (t.SeatName = t.chosenSeat.SeatName),
                Xn(t);
            },
            zn = (function () {
              var e = (0, Ze.Z)(
                (0, Te.Z)().mark(function e() {
                  var t,
                    n,
                    a,
                    i,
                    r,
                    o,
                    c,
                    l,
                    s,
                    d,
                    u,
                    p,
                    m,
                    f,
                    h,
                    g,
                    S,
                    v,
                    b,
                    T,
                    Z;
                  return (0, Te.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((n =
                                null === (t = ve.getState().trainModel) ||
                                void 0 === t
                                  ? void 0
                                  : t.trainInfo),
                              (a = n.seats),
                              (i = void 0 === a ? [] : a),
                              (r = n.DepartureDate),
                              (o = void 0 === r ? "" : r),
                              (c = n.DepartTime),
                              (l = void 0 === c ? "" : c),
                              (s = n.DepartTimeStamp),
                              (d = n.ArriveTime),
                              (u = n.TakeDays),
                              (p = n.TrainNumber),
                              (m = n.DepartStation),
                              (f = n.ArriveStation),
                              (h = n.canChooseBedFlag),
                              (g = n.SeatName),
                              (S = H()(s).add(u, "day").format("YYYY-MM-DD")),
                              0 !==
                                (v = Array.isArray(i)
                                  ? i
                                      .filter(function (e) {
                                        return e.SeatName == g;
                                      })
                                      .map(function (e) {
                                        return {
                                          name: e.SeatName,
                                          price: e.SeatPrice,
                                          amount: e.SeatInventory,
                                        };
                                      })
                                  : []).length)
                            ) {
                              e.next = 5;
                              break;
                            }
                            return e.abrupt("return");
                          case 5:
                            return (
                              (b = {
                                trainNo: p,
                                departureTime: ""
                                  .concat(o, " ")
                                  .concat(l, ":00"),
                                departureStation: m,
                                arriveTime: "".concat(S, " ").concat(d, ":00"),
                                seatInfo: v[0],
                                arriveStation: f,
                                appointSeat: h ? 1 : 0,
                              }),
                              (e.prev = 6),
                              (e.next = 9),
                              (0, De.UA)({ trainInfo: b })
                            );
                          case 9:
                            if (
                              ((T = e.sent),
                              (Z = T.appointSeatInfo),
                              1 === T.resultCode)
                            ) {
                              e.next = 14;
                              break;
                            }
                            return e.abrupt("return");
                          case 14:
                            Ee({
                              elecTicketResult: {
                                appointSeatInfo: (0, A.Z)(
                                  (0, A.Z)({}, Z),
                                  {},
                                  {
                                    _subTitle: Z.subTitle,
                                    appointSeatFor12306: h ? 1 : 0,
                                  }
                                ),
                              },
                            }),
                              Oe(),
                              (e.next = 20);
                            break;
                          case 18:
                            (e.prev = 18), (e.t0 = e.catch(6));
                          case 20:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[6, 18]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            jn = ["onConfirm", "onCancel"],
            Wn = (function () {
              var e = (0, Ze.Z)(
                (0, Te.Z)().mark(function e(t) {
                  return (0, Te.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            ve.getDispatch().my12306Model.refresh(),
                            Un(t),
                            (e.next = 4),
                            Ln(t)
                          );
                        case 4:
                          if (
                            (wn(t),
                            !ve.getState().reschduleModel.isReschduleMode)
                          ) {
                            e.next = 10;
                            break;
                          }
                          return qe(), zn(), e.abrupt("return");
                        case 10:
                          if (
                            (Gn(),
                            Je(),
                            xn(),
                            !ve.getState().secSkillModel.isPreSecKill)
                          ) {
                            e.next = 17;
                            break;
                          }
                          return (
                            we.Z.commonDebugTrace("秒杀状态不处理其他产品信息"),
                            e.abrupt("return")
                          );
                        case 17:
                          Ue(), St(t);
                        case 19:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            Gn = function () {
              var e,
                t = Ne.ZP.userName,
                n = ve.getState().trainModel.trainInfo;
              if (Pe.WG.get()) {
                var a,
                  i = Pe.WG.get(),
                  r = i.allPas || [];
                t = i.mobile || Ne.ZP.userName;
                var o = r
                  .filter(function (e) {
                    return (
                      2 != e.PassengerType && !!e.Mobile && 3 != e.PassengerType
                    );
                  })
                  .map(function (e) {
                    return (0,
                    A.Z)((0, A.Z)({}, e), {}, { _isShownStudentRightsTip: !1, _isStudentPreferenceNumLack: !1, _zxQueryStudentInfo: null });
                  });
                (null === (a = ve.getState().passengerModel.allPas) ||
                void 0 === a
                  ? void 0
                  : a.length) <= 0 &&
                  !n._isCrossEnv &&
                  tt(o),
                  ve.ubtTrace(102395, { allPas: o, mobile: t });
              } else Pe.WG.set({});
              null !== (e = ve.getPage().$TableRef) &&
                void 0 !== e &&
                e.tel &&
                (ve.getPage().$TableRef.tel.value = t);
            },
            Un = function (e) {
              Jn(),
                Me.ZP.getTrain12306Config().then(function (e) {
                  ve.getDispatch().configModel.update12306Config({
                    isWorkTime: e.isIn12306WorkTime,
                  });
                }),
                ve
                  .getDispatch()
                  .configModel.updatePageBasic({
                    isWuPiaoScene:
                      "wupiaoscene" === (null == e ? void 0 : e.wuPiaoScene),
                    isRecommendBuy: e.isRecommendBuy || "",
                    smartMarkValue: e.smartMarkValue || "",
                    firstTripOrderNumber: e.firstTripOrderNumber || "",
                  });
            },
            Yn = (function () {
              var e = (0, Ze.Z)(
                (0, Te.Z)().mark(function e() {
                  return (0, Te.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            ve.navigateToAsync({
                              url: "/pages/12306/login/login",
                              ignoreError: !0,
                            })
                          );
                        case 2:
                          ve.getDispatch().my12306Model.refresh();
                        case 3:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            Jn = function () {
              return (0, M.fu)({ ConfigKey: "tieyou_wx_booking_key" })
                .then(function (e) {
                  if (e.ConfigInfo && e.ConfigInfo.Content) {
                    var t = JSON.parse(e.ConfigInfo.Content);
                    ve
                      .getDispatch()
                      .configModel.updateIsBind12306Config(1 === t.bind12306),
                      ve
                        .getDispatch()
                        .configModel.updateUseUpper12306Text(
                          1 === t.useUpper12306Text
                        ),
                      ve
                        .getDispatch()
                        .configModel.updatePassengerCountConfig(
                          t.passengerCountConfig || 5
                        ),
                      ve
                        .getDispatch()
                        .configModel.updatePassengerChildConfig(
                          t.passengerChildConfig || 4
                        );
                  }
                })
                .catch(function (e) {
                  return console.log(e);
                });
            },
            qn = function () {
              var e = (0, ye.Uy)("booking"),
                t = ve.getState().passengerModel.allPas,
                n = ve.getState().trainModel.trainInfo,
                a =
                  (null == e ? void 0 : e.pasLenLimit4SeatSelectable) >=
                    t.length &&
                  Me.ZP.isChoosingCRM(n.SeatName) &&
                  Me.ZP.isCDGTrain(n.TrainNumber);
              ve.getDispatch().configModel.updateIsChooseSeatOnlineButtonVisible(
                a
              );
            },
            $n = (function () {
              var e = (0, Ze.Z)(
                (0, Te.Z)().mark(function e(t) {
                  var n, a, i, r;
                  return (0, Te.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (a = (n =
                              "string" == typeof t
                                ? { toast: { toastCode: t }, data: {} }
                                : t).onConfirm),
                            (i = n.onCancel),
                            (r = (0, be.Z)(n, jn)),
                            e.abrupt(
                              "return",
                              new Promise(function (e) {
                                var t;
                                null === (t = ve.getPage().$CommonToast) ||
                                  void 0 === t ||
                                  t.showToast(
                                    (0, A.Z)(
                                      (0, A.Z)({}, r),
                                      {},
                                      {
                                        onConfirm: function () {
                                          for (
                                            var t = arguments.length,
                                              n = new Array(t),
                                              i = 0;
                                            i < t;
                                            i++
                                          )
                                            n[i] = arguments[i];
                                          null == a || a.apply(void 0, n),
                                            e({ code: 1, data: n });
                                        },
                                        onCancel: function () {
                                          for (
                                            var t = arguments.length,
                                              n = new Array(t),
                                              a = 0;
                                            a < t;
                                            a++
                                          )
                                            n[a] = arguments[a];
                                          null == i || i.apply(void 0, n),
                                            e({ code: 0, data: n });
                                        },
                                      }
                                    )
                                  );
                              })
                            )
                          );
                        case 2:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            Qn = function (e) {
              var t, n;
              null === (t = ve.getPage().$CommonToast) ||
                void 0 === t ||
                null === (n = t.closeToast) ||
                void 0 === n ||
                n.call(t, e);
            },
            ea = function () {
              var e = ve.getState().passengerModel.allPas,
                t = void 0 === e ? [] : e;
              (t = t.filter(function (e) {
                return !(
                  e.isCopyFromAdult ||
                  e.isStudentToAdult ||
                  e.isInvited ||
                  3 == e.PassengerType ||
                  e.isAssignee
                );
              })),
                Pe.WG.setAttr("allPas", t);
            },
            ta = function () {
              var e,
                t,
                n =
                  null === (e = ve.getPage().$TableRef) ||
                  void 0 === e ||
                  null === (t = e.tel) ||
                  void 0 === t
                    ? void 0
                    : t.value;
              n && Pe.WG.setAttr("mobile", n);
            },
            na = function (e) {
              v().pageScrollTo({ selector: e });
            },
            aa = function (e) {
              var t;
              if (
                "friendBuy" ===
                (null == e || null === (t = e.target) || void 0 === t
                  ? void 0
                  : t.id)
              )
                return (function () {
                  var e = new Promise(
                    (function () {
                      var e = (0, Ze.Z)(
                        (0, Te.Z)().mark(function e(t) {
                          var n, a, i, r, o, c;
                          return (0, Te.Z)().wrap(function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (0, B.showLoading)("正在生成分享数据"),
                                    (e.next = 3),
                                    en({ virtualOrder: 1 })
                                  );
                                case 3:
                                  (n = e.sent),
                                    (0, B.hideLoading)(),
                                    n &&
                                      1 == n.resultCode &&
                                      n.shareKey &&
                                      ((a = ve.getState().authFailProductModel),
                                      (i = a.authFailToastInfo),
                                      (r = a.userRoleInfo),
                                      (o = void 0 === r ? {} : r),
                                      ve.ubtTrace("c_trn_z_10320660961", {
                                        bizKey:
                                          "z_mini_ow_ndark_fc_click_result",
                                        status:
                                          null == i ? void 0 : i.authFailType,
                                        clickmethod: "9",
                                        click_result: 1,
                                        newScene:
                                          "Y" === o.trainPayNewConsumer
                                            ? "1"
                                            : "0",
                                      }),
                                      (c =
                                        "/pages/train/friendbuy/index?shareKey=".concat(
                                          encodeURIComponent(n.shareKey)
                                        )),
                                      t({
                                        title: "Hi,可以帮我用".concat(
                                          P.default.isTieyou ? "铁友" : "智行",
                                          "买张火车票吗？十万火急~"
                                        ),
                                        path: c,
                                        imageUrl: P.default.isTieyou
                                          ? "https://images3.c-ctrip.com/ztrip/train_xie/2021-10/WeChat/img_help_t.png"
                                          : "https://images3.c-ctrip.com/ztrip/train_xie/2021-10/WeChat/img_help.png",
                                      }));
                                case 6:
                                case "end":
                                  return e.stop();
                              }
                          }, e);
                        })
                      );
                      return function (t) {
                        return e.apply(this, arguments);
                      };
                    })()
                  );
                  return {
                    title: "Hi，快看我发现了一个宝藏小程序~",
                    path: K.Z.getHomePath(),
                    imageUrl:
                      "https://images3.c-ctrip.com/ztrip/train_xie/2022-04/xcx_fxtjpg.jpg",
                    promise: e,
                  };
                })();
            },
            ia = n(34229),
            ra = n(26862),
            oa = n(49981),
            ca = (0, h.$j)(function (e) {
              return { trainInfo: e.trainModel.trainInfo };
            })(function (e) {
              var t = (e || {}).trainInfo;
              if (!t) return null;
              var n = function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  t = e.reverse,
                  n = void 0 !== t && t,
                  a = e.time,
                  i = void 0 === a ? "" : a,
                  r = e.stationName,
                  o = void 0 === r ? "" : r,
                  c = e.takeDays,
                  l = void 0 === c ? "" : c;
                return (0, w.BX)(y.View, {
                  className:
                    "sation-view  flex-1 flex flex-column flex-center ".concat(
                      n ? "rv" : ""
                    ),
                  children: [
                    (0, w.BX)(y.View, {
                      className: "time",
                      children: [
                        !!l &&
                          (0, w.BX)(y.View, {
                            className: "take-day",
                            children: ["+", l, "天"],
                          }),
                        i,
                      ],
                    }),
                    (0, w.tZ)(y.View, { className: "station", children: o }),
                  ],
                });
              };
              return (0, w.BX)(y.View, {
                className: "tb-travel-info",
                children: [
                  (0, w.BX)(y.View, {
                    className: "hd flex flex-center",
                    children: [
                      (0, w.tZ)(n, {
                        stationName: t.DepartStation,
                        time: t.DepartTime,
                      }),
                      (0, w.BX)(y.View, {
                        className: "train-travel flex flex-column flex-center",
                        children: [
                          (0, w.tZ)(y.View, {
                            className: "jt-tag",
                            id: "AKAz",
                            onClick: function () {
                              var e = t,
                                n = e.DepartStation,
                                a = void 0 === n ? "" : n,
                                i = e.ArriveStation,
                                r = void 0 === i ? "" : i,
                                o = e.TrainNumber,
                                c = void 0 === o ? "" : o,
                                l = e.selectDate;
                              Me.ZP.goTimeTable(a, r, c, l);
                            },
                            children: "时刻表",
                          }),
                          (0, w.BX)(y.View, {
                            className: "info flex flex-center",
                            children: [
                              (0, w.BX)(y.Text, {
                                className: "desc",
                                children: [
                                  t.TrainNumber,
                                  t.TimesCost ? "·".concat(t.TimesCost) : "",
                                ],
                              }),
                              t.IsFastPass &&
                                (0, w.tZ)(y.Image, {
                                  className: "tag",
                                  src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/V10.0/xy/tag_sfz@3x.webp",
                                  webp: !0,
                                }),
                              t.IsCanPointsPay &&
                                (0, w.tZ)(y.Image, {
                                  className: "tag",
                                  src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/V10.0/xy/tag_dh@3x.webp",
                                  webp: !0,
                                }),
                            ],
                          }),
                        ],
                      }),
                      (0, w.tZ)(n, {
                        reverse: !0,
                        stationName: t.ArriveStation,
                        time: t.ArriveTime,
                        takeDays: t.TakeDays,
                      }),
                    ],
                  }),
                  t.SeatName &&
                    (0, w.BX)(y.View, {
                      className: "seat-desc",
                      children: [t.SeatName, " ", (0, w.tZ)(ra.Z, {}), t.Price],
                    }),
                ],
              });
            }),
            la = function (e) {
              var t = e.children;
              return (0, w.tZ)(y.View, {
                className: "train-booking-cell",
                children: t,
              });
            },
            sa = function (e) {
              var t = e.name,
                n = void 0 === t ? "" : t,
                a = e.children,
                i = e.icon,
                r = void 0 === i ? "" : i,
                o = e.iconSize,
                c = void 0 === o ? 12 : o,
                l = e.onClick,
                s = void 0 === l ? function () {} : l;
              return (0, w.BX)(y.View, {
                className: "table-cell flex flex-center",
                id: "AKBB",
                onClick: s,
                children: [
                  (0, w.tZ)(y.View, { className: "name", children: n }),
                  (0, w.tZ)(y.View, {
                    className: "content flex-1",
                    children: a,
                  }),
                  r &&
                    (0, w.tZ)(y.Text, {
                      className: "icon iconfont2 ".concat(r),
                      style: { fontSize: "".concat(c, "px") },
                    }),
                ],
              });
            },
            da = function (e) {
              var t = e.trainHotelReturnCashInfo;
              if (!t) return null;
              return (0, w.BX)(y.View, {
                className: "tmb-train-hotel-cross",
                id: "train-hotel-cross-pop",
                children: [
                  (0, w.tZ)(y.Image, {
                    className: "left-icon",
                    src: t.icon,
                    webp: !0,
                  }),
                  (0, w.BX)(y.View, {
                    className: "desc",
                    id: "AKBA",
                    onClick: function () {
                      $n({ toast: { toastCode: D.TrainHotelCrossPop } });
                    },
                    children: [
                      (0, w.tZ)(y.Text, { children: t.desc }),
                      (0, w.tZ)(y.Text, {
                        className: "ifont-detail iconfont right-tips-color",
                      }),
                    ],
                  }),
                ],
              });
            },
            ua = (0, h.$j)(function (e) {
              var t,
                n,
                a = e.combinationSeatModel,
                i = e.passengerModel,
                r = e.assignCarriageModel,
                o = e.configModel,
                c = e.trainModel,
                l = e.specialCardModel;
              return {
                manualSelectSeatInfo: a.manualSelectSeatInfo,
                allPas: i.allPas,
                combinationSeat: a.combinationSeat,
                checkedCarriage:
                  (null === (t = r.selectedCarriages) || void 0 === t
                    ? void 0
                    : t.length) > 0,
                isChooseSeatOnlineButtonVisible:
                  o.isChooseSeatOnlineButtonVisible,
                SeatName:
                  null === (n = c.trainInfo) || void 0 === n
                    ? void 0
                    : n.SeatName,
                hassSdjacentSeatRights: l.hassSdjacentSeatRights && l.checked,
                sdjacentSeatRightsExtInfo: l.sdjacentSeatRightsExtInfo,
              };
            })(function (e) {
              var t = e.manualSelectSeatInfo,
                n = e.allPas,
                a = void 0 === n ? [] : n,
                i = e.combinationSeat,
                r = e.checkedCarriage,
                o = e.isChooseSeatOnlineButtonVisible,
                c = e.SeatName,
                l = e.hassSdjacentSeatRights,
                s = e.sdjacentSeatRightsExtInfo,
                d = (0, f.useState)(0),
                u = (0, Z.Z)(d, 2),
                p = u[0],
                m = u[1],
                h = (0, f.useState)(a.length),
                g = (0, Z.Z)(h, 2),
                S = g[0],
                b = g[1],
                T = (0, f.useState)(!1),
                N = (0, Z.Z)(T, 2),
                M = N[0],
                C = N[1],
                I = (0, f.useState)(!1),
                k = (0, Z.Z)(I, 2),
                D = k[0],
                x = k[1],
                V = t || {},
                A = V.title,
                _ = V.single,
                R = V.many,
                E = V.acceptOtherSeatDesc,
                O = V.peopleTitle,
                L = ve.ubtTrace;
              if (
                ((0, f.useEffect)(
                  function () {
                    p &&
                      (function () {
                        if (2 === S || 3 === S) {
                          if (1 === a.length || a.length > 3) return !0;
                        } else if (2 === a.length || 3 === a.length) return !0;
                      })() &&
                      (m(0), C(!1), Tt()),
                      b(a.length);
                  },
                  [a]
                ),
                (0, f.useEffect)(
                  function () {
                    if (t) {
                      var e,
                        n,
                        i,
                        r,
                        l,
                        s,
                        d = a.length > 1 ? ["相邻座位"] : ["靠窗", "靠过道"];
                      L("TZWBuyBook_Seat_exposure", {
                        PageId: P.default.isTieyou
                          ? "10320660965"
                          : "10320660961",
                        Type: o ? "GDC" : "KTZ",
                        seatScmType: c,
                        position: 2,
                        product: d,
                      });
                      var u =
                        (null === (e = t.many) ||
                        void 0 === e ||
                        null === (n = e.seatTypes) ||
                        void 0 === n ||
                        null ===
                          (i = n.find(function (e) {
                            return e.selected;
                          })) ||
                        void 0 === i
                          ? void 0
                          : i.type) ||
                        (null === (r = t.single) ||
                        void 0 === r ||
                        null === (l = r.seatTypes) ||
                        void 0 === l ||
                        null ===
                          (s = l.find(function (e) {
                            return e.num > 0;
                          })) ||
                        void 0 === s
                          ? void 0
                          : s.type);
                      m(u || 0);
                    }
                  },
                  [t, a]
                ),
                (0, f.useEffect)(
                  function () {
                    var e = (null == i ? void 0 : i.discount) && r && 0 === p;
                    x(!!e || (!(!D || 0 === p) && !!r));
                  },
                  [r, p]
                ),
                !t)
              )
                return null;
              var F = function () {
                  l
                    ? (0, B.showToast)("不可与其他权益同享")
                    : (C(!M),
                      (function (e) {
                        var t =
                          ve.getState().combinationSeatModel
                            .manualSelectSeatInfo;
                        (t.acceptOtherSeat = e),
                          ve
                            .getDispatch()
                            .combinationSeatModel.updateManualSelectSeatInfo(t);
                      })(!M));
                },
                H = function (e, t) {
                  l
                    ? ht(!1)
                    : (function (e, t) {
                        var n =
                            ve.getState().combinationSeatModel
                              .manualSelectSeatInfo,
                          a =
                            ve.getState().configModel
                              .isChooseSeatOnlineButtonVisible,
                          i = ve.getState().trainModel.trainInfo;
                        ve.ubtTrace("TZWBuyBook_Seat_click", {
                          PageId: P.default.isTieyou
                            ? "10320660965"
                            : "10320660961",
                          Type: a ? "GDC" : "KTZ",
                          seatScmType: i.SeatName,
                          position: 2,
                          product:
                            "window" === e.code
                              ? "靠窗"
                              : "next" === e.code
                              ? "靠过道"
                              : "相邻座位",
                          clickType: e.selected ? 0 : 1,
                        }),
                          (e.selected = !e.selected),
                          console.log("seatTypeList", t),
                          null == t ||
                            t.seatTypes.forEach(function (t) {
                              (null == t ? void 0 : t.type) ===
                                (null == e ? void 0 : e.type) &&
                                (t.selected = e.selected);
                            }),
                          (n.many = JSON.parse(JSON.stringify(t))),
                          ve
                            .getDispatch()
                            .combinationSeatModel.updateManualSelectSeatInfo(n);
                      })(e, t);
                },
                X = function (e, n) {
                  var i = a.length,
                    r = n.num;
                  (0 === r && _.total > 0) ||
                    ("add" === e
                      ? t.single.total + 1 <= i
                        ? bt(e, n)
                        : v().showToast({
                            title: "人数已经达到上限",
                            icon: "none",
                          })
                      : r - 1 >= 0
                      ? bt(e, n)
                      : v().showToast({
                          title: "人数已经达到下限",
                          icon: "none",
                        }));
                };
              return (0, w.BX)(y.View, {
                className: "train-booking-combination-manual-selection",
                children: [
                  (0, w.tZ)(y.View, {
                    className: "manual-select-title",
                    children: A,
                  }),
                  (0, w.tZ)(y.View, {
                    className: "manual-select-content",
                    children:
                      a.length > 1 && a.length <= 3
                        ? null == R
                          ? void 0
                          : R.seatTypes.map(function (e, t) {
                              return (0, w.BX)(
                                y.View,
                                {
                                  className: "seat-type-item many "
                                    .concat(
                                      e.type === p ? "selected-border" : "",
                                      " "
                                    )
                                    .concat(l ? "special" : ""),
                                  id: "AKAl",
                                  onClick: function () {
                                    return H(e, R);
                                  },
                                  children: [
                                    (0, w.BX)(y.View, {
                                      className: "name",
                                      children: [
                                        (0, w.tZ)(y.Text, {
                                          children: e.name.includes("要")
                                            ? e.name.split("要")[1]
                                            : e.name,
                                        }),
                                        !l &&
                                          (0, w.tZ)(y.Text, {
                                            className: "tit-tag",
                                            children: O.split(" ")[1],
                                          }),
                                      ],
                                    }),
                                    (0, w.BX)(y.View, {
                                      className: "price-tag",
                                      children: [
                                        D &&
                                          (0, w.tZ)(y.View, {
                                            className: "discount-tip",
                                            children:
                                              0 === p
                                                ? "可减".concat(
                                                    Math.abs(i.discount),
                                                    "元"
                                                  )
                                                : "已减".concat(
                                                    Math.abs(i.discount),
                                                    "元"
                                                  ),
                                          }),
                                        l &&
                                          (null == s ? void 0 : s.priceDesc) &&
                                          (0, w.tZ)(y.View, {
                                            className: "free-tag",
                                            children:
                                              null == s ? void 0 : s.priceDesc,
                                          }),
                                        (0, w.tZ)(y.View, {
                                          style: {
                                            textDecoration: l
                                              ? "line-through"
                                              : "",
                                          },
                                          children: e.priceTag,
                                        }),
                                      ],
                                    }),
                                    (0, w.tZ)(y.View, {
                                      className: "click-icon ".concat(
                                        e.type === p ? "selected-color" : ""
                                      ),
                                    }),
                                  ],
                                },
                                "many_".concat(t)
                              );
                            })
                        : null == _
                        ? void 0
                        : _.seatTypes.map(function (e, t) {
                            return (0, w.BX)(
                              y.View,
                              {
                                className: "seat-type-item single ".concat(
                                  e.type === p ? "selected-border" : ""
                                ),
                                children: [
                                  (0, w.BX)(y.View, {
                                    className: "name flex flex-column",
                                    children: [
                                      (0, w.tZ)(y.View, {
                                        children: e.name.includes("要")
                                          ? e.name.split("要")[1]
                                          : e.name,
                                      }),
                                      (0, w.BX)(y.View, {
                                        className: "price",
                                        children: [
                                          "".concat(e.priceTag),
                                          D &&
                                            (0 === p || p === e.type) &&
                                            (0, w.tZ)(y.Text, {
                                              style: { position: "absolute" },
                                              className: "discount-tip",
                                              children:
                                                0 === p
                                                  ? "可减".concat(
                                                      Math.abs(i.discount),
                                                      "元"
                                                    )
                                                  : "已减".concat(
                                                      Math.abs(i.discount),
                                                      "元"
                                                    ),
                                            }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, w.BX)(y.View, {
                                    className: "select",
                                    children: [
                                      (0, w.tZ)(y.View, {
                                        id: "AKGA",
                                        className: "minus ".concat(
                                          0 === e.num ||
                                            (0 === e.num && _.total > 0)
                                            ? "disabled"
                                            : ""
                                        ),
                                        onClick: function () {
                                          return X("minus", e);
                                        },
                                        "data-index": t,
                                      }),
                                      (0, w.tZ)(y.Input, {
                                        type: "txt",
                                        className: "input-s",
                                        value: e.num,
                                        disabled: !0,
                                      }),
                                      (0, w.tZ)(y.View, {
                                        id: "AKGB",
                                        className: "add ".concat(
                                          _.total === a.length ||
                                            (0 === e.num && _.total > 0)
                                            ? "disabled"
                                            : ""
                                        ),
                                        onClick: function () {
                                          return X("add", e);
                                        },
                                        "data-index": t,
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              "single_".concat(t)
                            );
                          }),
                  }),
                  !l &&
                    0 !== p &&
                    (0, w.BX)(y.View, {
                      className: "desc-select-content",
                      id: "AKAm",
                      onClick: F,
                      children: [
                        (0, w.tZ)(y.Text, { children: E }),
                        (0, w.tZ)(y.Text, {
                          className: "".concat(
                            M ? "extra-checked" : "extra-check"
                          ),
                        }),
                      ],
                    }),
                  l &&
                    (null == s ? void 0 : s.cardDesc) &&
                    (0, w.tZ)(y.View, {
                      className: "desc-select-content",
                      id: "AKAm",
                      onClick: F,
                      children: (0, w.tZ)(y.Text, { children: s.cardDesc }),
                    }),
                ],
              });
            }),
            pa = n(26498),
            ma = function (e) {
              var t = e.seatLen,
                n = e.sameRoom,
                a = void 0 === n ? {} : n,
                i = e.allPas,
                r = e.checked,
                o = e.onChange,
                c = e.appointSeatDetail,
                l = e.total,
                s = e.combinationSeat,
                d = e.buyMemberShip,
                u = e.useMemberShip,
                p = e.checkedCarriage,
                m = e.sameRoomRightsExtInfo,
                h = e.hasSameRoomRights,
                g = e.canAppointPaidProduct,
                S = e.cantAppointPaidProductDesc,
                v = e.disableDiscount,
                b = (0, f.useState)(!1),
                T = (0, Z.Z)(b, 2),
                P = T[0],
                N = T[1],
                M = (0, f.useState)(""),
                C = (0, Z.Z)(M, 2),
                I = C[0],
                k = C[1],
                D = (0, f.useState)(!1),
                x = (0, Z.Z)(D, 2),
                V = x[0],
                A = x[1],
                _ = i.length > 1,
                R = !K.Z.isEmptyObject(a),
                E = a || {},
                O = E.title,
                L = E.tag,
                F = E.priceTip,
                H = E.disabledTitle,
                X = E.disabledDesc,
                z = E.desc,
                j = function (e) {
                  r && (0, B.showToast)(e), k(e), N(!0), o(!1);
                };
              if (
                ((0, f.useEffect)(
                  function () {
                    !_ &&
                      r &&
                      ((0, B.showToast)(
                        "当前还剩1名乘客，已帮您取消选同房间功能"
                      ),
                      o(!1));
                  },
                  [_, r]
                ),
                (0, f.useEffect)(
                  function () {
                    var e,
                      n = "",
                      a =
                        null == c ||
                        null === (e = c.seatInfoList) ||
                        void 0 === e
                          ? void 0
                          : e.some(function (e) {
                              return e.num > 2;
                            });
                    3 === t && i.length > 6
                      ? ((n =
                          (null == X ? void 0 : X.hardSleep) ||
                          "当前人数不支持选同房间"),
                        j(n))
                      : 2 === t && i.length > 4
                      ? ((n =
                          (null == X ? void 0 : X.softSleep) ||
                          "当前人数不支持选同房间"),
                        j(n))
                      : a
                      ? ((n =
                          (null == X ? void 0 : X.single) ||
                          "一个房间最多2个上/中/下铺"),
                        j(n))
                      : g
                      ? N(!1)
                      : (k(S || "当前不支持"), N(!0));
                  },
                  [i, r, l, g, S]
                ),
                (0, f.useEffect)(
                  function () {
                    var e =
                      (null == s ? void 0 : s.discount) &&
                      !(d || u) &&
                      (p || l > 0) &&
                      !r;
                    A(!(v || (!e && (!V || !r || d || u || !(p || l > 0)))));
                  },
                  [r, p, l, d, u, v]
                ),
                !_ || !R)
              )
                return null;
              return p && l > 0
                ? (0, w.BX)(y.View, {
                    className: "same-room-can-not",
                    children: [
                      (0, w.tZ)(y.View, { className: "title", children: O }),
                      (0, w.tZ)(y.View, {
                        className: "desc",
                        children: "仅支持同时选择2项",
                      }),
                    ],
                  })
                : (0, w.tZ)(y.View, {
                    className: "train-booking-combination-same-room ".concat(
                      2 === t ? "soft-same-room" : ""
                    ),
                    children: P
                      ? (0, w.BX)(y.View, {
                          className: "same-room-disabled",
                          children: [
                            (0, w.tZ)(y.View, {
                              className: "disable-title",
                              children: H,
                            }),
                            (0, w.tZ)(y.View, {
                              className: "disable-desc",
                              children: I,
                            }),
                          ],
                        })
                      : (0, w.BX)(y.Block, {
                          children: [
                            (0, w.BX)(y.View, {
                              className: "same-room-head",
                              children: [
                                (0, w.BX)(y.View, {
                                  className: "flex flex-center left",
                                  style: { justifyContent: "flex-start" },
                                  children: [
                                    (0, w.tZ)(y.View, {
                                      className: "title",
                                      children: O,
                                    }),
                                    (0, w.tZ)(y.View, {
                                      className: "tag",
                                      children: L,
                                    }),
                                  ],
                                }),
                                (0, w.BX)(y.View, {
                                  className: "right",
                                  children: [
                                    h &&
                                      (null == m ? void 0 : m.priceDesc) &&
                                      (0, w.tZ)(y.View, {
                                        className: "free-tag",
                                        children: m.priceDesc,
                                      }),
                                    (0, w.BX)(y.View, {
                                      className: "price-tip",
                                      children: [
                                        V &&
                                          !h &&
                                          (0, w.tZ)(y.Text, {
                                            className: "discount-tip",
                                            children: r
                                              ? "已减".concat(
                                                  Math.abs(s.discount),
                                                  "元"
                                                )
                                              : "立减".concat(
                                                  Math.abs(s.discount),
                                                  "元"
                                                ),
                                          }),
                                        (0, w.tZ)(y.Text, {
                                          style: {
                                            textDecoration: h
                                              ? "line-through"
                                              : "",
                                          },
                                          children: F,
                                        }),
                                      ],
                                    }),
                                    (0, w.tZ)(pa.Z, {
                                      className: ""
                                        .concat(
                                          r
                                            ? "same-room-checked"
                                            : "same-room-check",
                                          " "
                                        )
                                        .concat(h ? "free" : ""),
                                      checked: r,
                                      onClick: function () {
                                        h
                                          ? ht(!1)
                                          : P
                                          ? (0, B.showToast)(I)
                                          : o(!r);
                                      },
                                      id: "AKAb",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            r &&
                              (0, w.tZ)(y.View, {
                                className: "desc",
                                children: h
                                  ? null == m
                                    ? void 0
                                    : m.cardDesc
                                  : z,
                              }),
                          ],
                        }),
                  });
            },
            fa = (0, h.$j)(function (e) {
              var t,
                n,
                a = e.appointSeatModel,
                i = e.memberSaledModel,
                r = e.passengerModel,
                o = e.combinationSeatModel,
                c = e.assignCarriageModel,
                l = e.trainModel,
                s = e.configModel,
                d = e.specialCardModel,
                u = e.xProModel;
              return {
                appointSeatDetail: a.appointSeatDetail,
                buyMemberShip: i.buyMemberShip,
                useMemberShip: i.useMemberShip,
                total: a.total,
                allPas: r.allPas,
                hasStudent: !!st(r.allPas),
                isCombinationStyle: o.combinationSeat,
                sameRoom: a.sameRoom,
                appointSeatMemberInfo: i.appointSeatMemberInfo,
                combinationSeat: o.combinationSeat,
                checkedCarriage: c.selectedCarriages.length > 0,
                memberShipBagInfo: i.memberShipBagInfo,
                isChooseSeatOnlineButtonVisible:
                  s.isChooseSeatOnlineButtonVisible,
                SeatName:
                  null === (t = l.trainInfo) || void 0 === t
                    ? void 0
                    : t.SeatName,
                sameRoomRightsExtInfo: d.sameRoomRightsExtInfo,
                hasSameRoomRights: d.hasSameRoomRights && d.checked,
                isCheckedSameRoom:
                  null === (n = a.sameRoom) || void 0 === n
                    ? void 0
                    : n._selected,
                canAppointPaidProduct: u.canAppointPaidProduct,
                cantAppointPaidProductDesc: u.cantAppointPaidProductDesc,
                disableDiscount: d.checked && d.hasRights,
              };
            })(function (e) {
              var t = e.appointSeatDetail,
                n = e.buyMemberShip,
                a = e.useMemberShip,
                i = e.total,
                r = e.allPas,
                o = e.hasStudent,
                c = e.isCombinationStyle,
                l = e.sameRoom,
                s = e.appointSeatMemberInfo,
                d = e.combinationSeat,
                u = e.checkedCarriage,
                p = e.memberShipBagInfo,
                m = e.isChooseSeatOnlineButtonVisible,
                h = e.SeatName,
                g = e.sameRoomRightsExtInfo,
                S = e.hasSameRoomRights,
                v = e.isCheckedSameRoom,
                b = e.cantAppointPaidProductDesc,
                T = e.canAppointPaidProduct,
                N = e.disableDiscount,
                M = (0, f.useState)(!1),
                C = (0, Z.Z)(M, 2),
                I = C[0],
                k = C[1],
                D = ve.ubtTrace;
              if (
                ((0, f.useEffect)(
                  function () {
                    var e,
                      i = [],
                      o =
                        null == t ||
                        null === (e = t.seatInfoList) ||
                        void 0 === e
                          ? void 0
                          : e.length;
                    if (t) {
                      var c =
                        3 === o
                          ? ["上铺", "中铺", "下铺"]
                          : 2 === o
                          ? ["上铺", "下铺"]
                          : [];
                      i = i.concat(c);
                    }
                    r.length >= 2 && (i = i.concat(["同房间"])),
                      (n || a || (null != p && p.sleepNightEntity)) &&
                        (i = i.concat(["会员联动"])),
                      D("TZWBuyBook_Seat_exposure", {
                        PageId: P.default.isTieyou
                          ? "10320660965"
                          : "10320660961",
                        Type: m ? "GDC" : "KTZ",
                        seatScmType: h,
                        position: 2,
                        product: i,
                      });
                  },
                  [r]
                ),
                (0, f.useEffect)(
                  function () {
                    var e =
                      (null == d ? void 0 : d.discount) &&
                      !(n || a) &&
                      (u || v) &&
                      0 === i;
                    k(!(N || (!e && (!(I && i > 0) || n || a || (!u && !v)))));
                  },
                  [i, u, v, n, a, N]
                ),
                !t)
              )
                return (0, w.tZ)(y.View, {});
              var x = t.seatInfoList.length,
                B = r.some(function (e) {
                  return "身份证" !== e.IdentityType;
                }),
                V = function (e) {
                  !(function (e) {
                    var t = ve.getState().appointSeatModel.sameRoom,
                      n =
                        ve.getState().configModel
                          .isChooseSeatOnlineButtonVisible,
                      a = ve.getState().trainModel.trainInfo;
                    ve.ubtTrace("TZWBuyBook_Seat_click", {
                      PageId: P.default.isTieyou
                        ? "10320660965"
                        : "10320660961",
                      Type: n ? "GDC" : "KTZ",
                      seatScmType: a.SeatName,
                      position: 2,
                      product: "同房间",
                      clickType: e ? 1 : 0,
                    }),
                      (t._selected = e),
                      ve.getDispatch().appointSeatModel.updateSameRoomStatus(t);
                  })(e);
                },
                A = function () {
                  D("TZWBuyBook_Seat_click", {
                    PageId: P.default.isTieyou ? "10320660965" : "10320660961",
                    Type: m ? "GDC" : "KTZ",
                    seatScmType: h,
                    position: 2,
                    product: "会员联动",
                    clickType: a ? 0 : 1,
                  }),
                    _e();
                },
                _ = function () {
                  return (
                    (n || a || (p && p.sleepNightEntity)) &&
                    s &&
                    (0, w.BX)(y.View, {
                      className: "".concat(
                        2 == x && c ? "member-solft-desc" : "member-desc"
                      ),
                      children: [
                        (0, w.tZ)(ia.ZtRichText, {
                          className: "text",
                          space: "nbsp",
                          nodes: K.Z.convertAppTextToHtmlStr(
                            null == s ? void 0 : s.rightDesc
                          ),
                        }),
                        p &&
                          p.sleepNightEntity &&
                          p.sleepNightEntity.amount > 0 &&
                          (0, w.BX)(y.Block, {
                            children: [
                              (0, w.tZ)(y.Text, { className: "split-line" }),
                              (0, w.BX)(y.View, {
                                className: "switch-content",
                                children: [
                                  (0, w.tZ)(y.Text, {
                                    className: "tit",
                                    children: a ? "使用" : "不使用",
                                  }),
                                  (0, w.tZ)(ia.ZtSwitch, {
                                    className: "switch ".concat(
                                      P.default.isTieyou ? "ty" : "zx"
                                    ),
                                    color: "".concat(
                                      P.default.isTieyou ? "#FC6E51" : "#198CFF"
                                    ),
                                    checked: a,
                                    onChange: A,
                                  }),
                                ],
                              }),
                            ],
                          }),
                      ],
                    })
                  );
                },
                R =
                  1 == (null == t ? void 0 : t.appointSeatFor12306) ||
                  (!o && !B);
              return (0, w.tZ)(y.Block, {
                children: (0, w.BX)(y.View, {
                  className: "train-sleep "
                    .concat(c ? "combination-train-sleep" : "", " ")
                    .concat(2 == x && c ? "combination-soft-sleep" : "", " ")
                    .concat(
                      2 == x && c && (n || a || (p && p.sleepNightEntity))
                        ? "combination-soft-member-sleep"
                        : "",
                      " "
                    )
                    .concat(3 == x && u && v ? "train-sleep-can-not" : ""),
                  id: "train-sleep-section",
                  children: [
                    3 == x && u && v
                      ? (0, w.BX)(y.Block, {
                          children: [
                            (0, w.tZ)(y.View, {
                              className: "tit",
                              children: t.title,
                            }),
                            (0, w.BX)(y.View, {
                              className: "content",
                              children: [
                                (0, w.tZ)(y.View, {
                                  className: "title",
                                  children: "选择上/中/下铺",
                                }),
                                (0, w.tZ)(y.View, {
                                  className: "desc",
                                  children: "仅支持同时选择2项",
                                }),
                              ],
                            }),
                          ],
                        })
                      : (0, w.BX)(y.Block, {
                          children: [
                            (0, w.BX)(y.View, {
                              className: "train-sleep-hd",
                              children: [
                                2 == x && c && _(),
                                (3 == x || (2 == x && !c)) &&
                                  (0, w.BX)(y.View, {
                                    className: "tit",
                                    children: [
                                      (0, w.tZ)(y.View, { children: t.title }),
                                      (0, w.BX)(y.View, {
                                        className: "flex flex-center",
                                        children: [
                                          t._subTitle &&
                                            (0, w.tZ)(y.View, {
                                              className: "sub-tit",
                                              children: t._subTitle,
                                            }),
                                          _(),
                                        ],
                                      }),
                                    ],
                                  }),
                                !(n || a) &&
                                  t.tag &&
                                  (0, w.tZ)(y.View, {
                                    className:
                                      "tag color-primary bdcolor-primary",
                                    children: t.tag,
                                  }),
                              ],
                            }),
                            (0, w.BX)(y.View, {
                              className: "train-sleep-body",
                              children: [
                                3 == x &&
                                  t.seatInfoList.map(function (e, t) {
                                    return (0, w.BX)(
                                      y.View,
                                      {
                                        className:
                                          "item " +
                                          (P.default.isTieyou ? "ty" : "zx") +
                                          (e.num >= 1 ? " high-light" : "") +
                                          (e.num >= 1 && (n || a)
                                            ? " member-high-light"
                                            : ""),
                                        children: [
                                          (0, w.BX)(y.View, {
                                            className: "item-hd",
                                            children: [
                                              (0, w.tZ)(y.View, {
                                                className: "seat",
                                                children: e.seatName,
                                              }),
                                              (0, w.BX)(y.View, {
                                                className: "price "
                                                  .concat(
                                                    n || a ? "free" : "",
                                                    " "
                                                  )
                                                  .concat(
                                                    I &&
                                                      (e.canShowDiscount ||
                                                        0 === i)
                                                      ? "show-discount"
                                                      : ""
                                                  ),
                                                children: [
                                                  (0, w.tZ)(y.View, {
                                                    children: e.priceDesc,
                                                  }),
                                                  I &&
                                                    (e.canShowDiscount ||
                                                      0 === i) &&
                                                    (0, w.tZ)(y.View, {
                                                      className: "discount-tip",
                                                      children:
                                                        e.num > 0
                                                          ? "已减".concat(
                                                              Math.abs(
                                                                d.discount
                                                              ),
                                                              "元"
                                                            )
                                                          : "立减".concat(
                                                              Math.abs(
                                                                d.discount
                                                              ),
                                                              "元"
                                                            ),
                                                    }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          (0, w.BX)(y.View, {
                                            className: "select",
                                            children: [
                                              (0, w.tZ)(y.View, {
                                                id: "AKFu",
                                                className: "minus "
                                                  .concat(
                                                    P.default.isTieyou
                                                      ? "ty"
                                                      : "zx",
                                                    " "
                                                  )
                                                  .concat(
                                                    0 == i || 0 == e.num
                                                      ? "disabled"
                                                      : "",
                                                    " "
                                                  )
                                                  .concat(
                                                    (n || a) &&
                                                      e.num > 0 &&
                                                      i <= r.length
                                                      ? "member-color"
                                                      : ""
                                                  ),
                                                onClick: Xe,
                                                "data-index": t,
                                              }),
                                              (0, w.tZ)(y.Input, {
                                                type: "txt",
                                                className: "input-s",
                                                value: e.num,
                                                disabled: !0,
                                              }),
                                              (0, w.tZ)(y.View, {
                                                id: "AKFv",
                                                className: "add "
                                                  .concat(
                                                    P.default.isTieyou
                                                      ? "ty"
                                                      : "zx",
                                                    " "
                                                  )
                                                  .concat(
                                                    i != r.length && R
                                                      ? ""
                                                      : "disabled",
                                                    " "
                                                  )
                                                  .concat(
                                                    (n || a) &&
                                                      e.num >= 0 &&
                                                      i !== r.length
                                                      ? "member-color"
                                                      : ""
                                                  ),
                                                onClick: He,
                                                "data-index": t,
                                              }),
                                            ],
                                          }),
                                        ],
                                      },
                                      t
                                    );
                                  }),
                                2 == x &&
                                  t.seatInfoList.map(function (e, t) {
                                    return (0, w.BX)(
                                      y.View,
                                      {
                                        className:
                                          "item item-2 " +
                                          (P.default.isTieyou ? "ty" : "zx") +
                                          (e.num >= 1 ? " high-light" : "") +
                                          (e.num >= 1 && (n || a)
                                            ? " member-high-light"
                                            : ""),
                                        children: [
                                          (0, w.BX)(y.View, {
                                            className: "item-hd item-hb-2",
                                            children: [
                                              (0, w.tZ)(y.View, {
                                                className: "seat",
                                                children: e.seatName,
                                              }),
                                              e.priceDesc &&
                                                (0, w.BX)(y.View, {
                                                  className: "price ".concat(
                                                    n || a ? "free" : ""
                                                  ),
                                                  children: [
                                                    e.priceDesc,
                                                    I &&
                                                      (e.canShowDiscount ||
                                                        0 === i) &&
                                                      (0, w.tZ)(y.Text, {
                                                        style: {
                                                          position: "absolute",
                                                          bottom: "2px",
                                                        },
                                                        className:
                                                          "discount-tip",
                                                        children:
                                                          e.num > 0
                                                            ? "已减".concat(
                                                                Math.abs(
                                                                  d.discount
                                                                ),
                                                                "元"
                                                              )
                                                            : "可减".concat(
                                                                Math.abs(
                                                                  d.discount
                                                                ),
                                                                "元"
                                                              ),
                                                      }),
                                                  ],
                                                }),
                                            ],
                                          }),
                                          (0, w.BX)(y.View, {
                                            className: "select",
                                            children: [
                                              (0, w.tZ)(y.View, {
                                                id: "AKFw",
                                                className: "minus "
                                                  .concat(
                                                    P.default.isTieyou
                                                      ? "ty"
                                                      : "zx",
                                                    " "
                                                  )
                                                  .concat(
                                                    0 == i || 0 == e.num
                                                      ? "disabled"
                                                      : "",
                                                    " "
                                                  )
                                                  .concat(
                                                    (n || a) &&
                                                      e.num > 0 &&
                                                      i <= r.length
                                                      ? "member-color"
                                                      : ""
                                                  ),
                                                onClick: Xe,
                                                "data-index": t,
                                              }),
                                              (0, w.tZ)(y.Input, {
                                                type: "txt",
                                                className: "input-s",
                                                value: e.num,
                                                disabled: !0,
                                              }),
                                              (0, w.tZ)(y.View, {
                                                id: "AKFx",
                                                className: "add "
                                                  .concat(
                                                    P.default.isTieyou
                                                      ? "ty"
                                                      : "zx",
                                                    " "
                                                  )
                                                  .concat(
                                                    i != r.length && R
                                                      ? ""
                                                      : "disabled",
                                                    " "
                                                  )
                                                  .concat(
                                                    (n || a) &&
                                                      e.num >= 0 &&
                                                      i !== r.length
                                                      ? "member-color"
                                                      : ""
                                                  ),
                                                onClick: He,
                                                "data-index": t,
                                              }),
                                            ],
                                          }),
                                        ],
                                      },
                                      t
                                    );
                                  }),
                              ],
                            }),
                            i >= 1 &&
                              1 !== t.appointSeatFor12306 &&
                              (0, w.BX)(y.View, {
                                className: "train-sleep-botm",
                                children: [
                                  (0, w.tZ)(y.View, {
                                    className: "txt",
                                    children:
                                      n || a
                                        ? t.acceptOtherSeatVipDesc
                                        : t.acceptOtherSeatDesc,
                                  }),
                                  (0, w.tZ)(y.Text, {
                                    className: t.acceptOtherSeat
                                      ? "ifont-radio-checked"
                                      : "ifont-radio-check",
                                    id: "AKAa",
                                    onClick: Ke,
                                  }),
                                ],
                              }),
                          ],
                        }),
                    (0, w.tZ)(ma, {
                      seatLen: x,
                      sameRoom: l,
                      allPas: r,
                      checked: v,
                      onChange: function (e) {
                        return V(e);
                      },
                      appointSeatDetail: t,
                      total: i,
                      combinationSeat: d,
                      buyMemberShip: n,
                      useMemberShip: a,
                      checkedCarriage: u,
                      hasSameRoomRights: S,
                      sameRoomRightsExtInfo: g,
                      canAppointPaidProduct: T,
                      cantAppointPaidProductDesc: b,
                      disableDiscount: N,
                    }),
                  ],
                }),
              });
            }),
            ha = (0, h.$j)(
              function (e) {
                var t,
                  n = e.assignCarriageModel,
                  a = e.xProModel,
                  i = e.crossProModel,
                  r = e.combinationSeatModel,
                  o = e.memberSaledModel,
                  c = e.appointSeatModel,
                  l = e.configModel,
                  s = e.trainModel,
                  d = e.specialCardModel;
                return {
                  carriageInfo: n.assignCarriageInfo,
                  selectedCarriages: n.selectedCarriages,
                  canSelectCarriage: a.canAppointPaidProduct,
                  trainHotelReturnCashInfo: i.trainHotelReturnCashInfo,
                  isCombinationStyle: !!r.combinationSeat,
                  paidProductAppointSeatType: a.paidProductAppointSeatType,
                  combinationSeat: r.combinationSeat,
                  buyMemberShip: o.buyMemberShip,
                  useMemberShip: o.useMemberShip,
                  checkedSleepSeat: c.total > 0,
                  checkedSameRoom:
                    null === (t = c.sameRoom) || void 0 === t
                      ? void 0
                      : t._selected,
                  checkedManualTicket: Zt(r.manualSelectSeatInfo),
                  isChooseSeatOnlineButtonVisible:
                    l.isChooseSeatOnlineButtonVisible,
                  SeatName: s.trainInfo.SeatName,
                  displayCardText: d.displayCardText,
                  hasSelectSpecialCarriage:
                    d.checked && d.hasSpecialCarriageRights,
                  disableDiscount: d.checked && d.hasRights,
                };
              },
              function (e) {
                return {
                  onSelectChange: e.assignCarriageModel.updateSelectedCarriages,
                };
              }
            )(function () {
              var e,
                t,
                n,
                a,
                i = this,
                r =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                o = r.carriageInfo,
                c = r.onSelectChange,
                l = void 0 === c ? function () {} : c,
                s = r.selectedCarriages,
                d = void 0 === s ? [] : s,
                u = r.canSelectCarriage,
                p = void 0 === u || u,
                m = r.trainHotelReturnCashInfo,
                h = r.isCombinationStyle,
                g = r.paidProductAppointSeatType,
                S = r.combinationSeat,
                v = r.buyMemberShip,
                b = r.useMemberShip,
                T = r.checkedSleepSeat,
                N = r.checkedSameRoom,
                M = r.checkedManualTicket,
                C = r.isChooseSeatOnlineButtonVisible,
                I = r.SeatName,
                k = r.hasSelectSpecialCarriage,
                D = r.displayCardText,
                x = r.disableDiscount,
                V = ve.ubtTrace;
              (0, f.useEffect)(function () {
                V("s_trn_z_trace_10320660961", {
                  bizKey: "z_mini_designated_carriage_show",
                }),
                  p || l([]);
              }, []),
                (0, f.useEffect)(
                  function () {
                    l([]);
                  },
                  [p]
                );
              var A = 3,
                _ = (0, f.useState)(""),
                R = (0, Z.Z)(_, 2),
                E = R[0],
                O = R[1],
                L = (0, f.useState)(!1),
                F = (0, Z.Z)(L, 2),
                H = F[0],
                X = F[1],
                z = function (e) {
                  if (Array.isArray(e) && e.length > 0) {
                    for (var t = 0, n = 0; n < e.length; n++)
                      if (
                        1 === e[n].carriageAvailable &&
                        0 === e[n].carriageFlag
                      ) {
                        t = n;
                        break;
                      }
                    var a = "carriage-item-".concat(t);
                    O(a);
                  }
                };
              (0, f.useEffect)(
                function () {
                  o &&
                    (z(null == o ? void 0 : o.carriageInfoList),
                    V("TZWBuyBook_Carriage_exposure", {
                      PageId: P.default.isTieyou
                        ? "10320660965"
                        : "10320660961",
                      Type: C ? "GDC" : "KTZ",
                      seatScmType: I,
                      position: 3,
                    }));
                },
                [o]
              );
              var j =
                null == o || null === (e = o.carriageInfoList) || void 0 === e
                  ? void 0
                  : e.find(function (e) {
                      return 1 == e.carriageAvailable;
                    });
              (0, f.useEffect)(
                function () {
                  j &&
                    m &&
                    !h &&
                    null != o &&
                    o.returnCashFlag &&
                    V("TZWBuyBook_Hotel_exposure", {
                      PageId: P.default.isTieyou
                        ? "10320660965"
                        : "10320660961",
                      Type: C ? "GDC" : "KTZ",
                      seatScmType: I,
                      position: 4,
                    });
                },
                [m]
              ),
                (0, f.useEffect)(
                  function () {
                    console.log("on selectedCarriages change", d);
                  },
                  [d]
                ),
                (0, f.useEffect)(
                  function () {
                    var e,
                      t,
                      n =
                        (null == S ? void 0 : S.discount) &&
                        !(v || b) &&
                        (T || N || M) &&
                        0 ===
                          (null === (e = d) || void 0 === e
                            ? void 0
                            : e.length);
                    x
                      ? X(!1)
                      : n
                      ? X(!0)
                      : H &&
                        (null === (t = d) || void 0 === t ? void 0 : t.length) >
                          0
                      ? X(!(v || b || !(T || N || M)))
                      : X(!1);
                  },
                  [d, T, N, M, v, b, x]
                );
              var W = function (e) {
                var t = e.carriageNo,
                  n = e.carriageAvailable,
                  a = e.carriageFlag;
                if (k) ht(!1);
                else if (
                  (V("c_trn_z_10320660961", {
                    bizKey: "z_mini_designated_carriage_click",
                  }),
                  1 === n && 1 != a)
                ) {
                  var i = 0;
                  d.includes(t)
                    ? (d = d.filter(function (e) {
                        return e !== t;
                      }))
                    : d.length < A
                    ? ((i = 1), d.push(t))
                    : (0, B.showToast)("最多仅可选择3个车厢"),
                    V("TZWBuyBook_Carriage_click", {
                      PageId: P.default.isTieyou
                        ? "10320660965"
                        : "10320660961",
                      Type: C ? "GDC" : "KTZ",
                      seatScmType: I,
                      position: 3,
                      clickType: i,
                    }),
                    l(d);
                } else (0, B.showToast)("此车厢座席无法预订");
              };
              console.log("selectedCarriages---", d);
              var G =
                d.length > 0
                  ? "已指定".concat(d.join("/"), "车厢")
                  : null == o
                  ? void 0
                  : o.title;
              G += d.length
                ? d.length === A
                  ? ""
                  : "(还可选".concat(A - d.length, "个)")
                : "(可选".concat(A, "个)");
              var U = null == o ? void 0 : o.salePrice,
                Y = null == o ? void 0 : o.descList,
                J = P.default.isTieyou,
                q = function () {
                  var e,
                    t = null === (e = o.tag) || void 0 === e ? void 0 : e.url;
                  K.Z.commonNavigator(t);
                };
              if (k)
                return (0, w.BX)(y.View, {
                  className: "carriage-selector-can-not",
                  children: [
                    (0, w.tZ)(y.View, {
                      className: "title",
                      children: "指定车厢",
                    }),
                    (0, w.BX)(y.View, {
                      className: "desc",
                      children: [D, "-无障碍车厢"],
                    }),
                  ],
                });
              if (j && !p) {
                var $ = g,
                  Q =
                    3 === $ ? "学生票暂不支持购买" : "非身份证购票暂不支持购买";
                return (0, w.BX)(y.View, {
                  className: "carriage-selector-can-not",
                  children: [
                    (0, w.tZ)(y.View, {
                      className: "title",
                      children: "指定车厢",
                    }),
                    (0, w.tZ)(y.View, { className: "desc", children: Q }),
                  ],
                });
              }
              return j && h && T && N
                ? (0, w.BX)(y.View, {
                    className: "carriage-selector-can-not disabled",
                    children: [
                      (0, w.tZ)(y.View, {
                        className: "title",
                        children: "指定车厢",
                      }),
                      (0, w.tZ)(y.View, {
                        className: "desc",
                        children: "仅支持同时选择2项",
                      }),
                    ],
                  })
                : j
                ? (0, w.BX)(y.Block, {
                    children: [
                      (0, w.BX)(y.View, {
                        className: "carriage-selector "
                          .concat(h ? "combination" : "", " ")
                          .concat(J ? "ty" : ""),
                        children: [
                          !h &&
                            (0, w.tZ)(y.Image, {
                              src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/V10.0/txy/img_zdxp@3x.webp",
                              className: "right-background",
                              webp: !0,
                            }),
                          (0, w.BX)(y.View, {
                            className: "carriage-selector-hd",
                            children: [
                              (0, w.tZ)(y.View, {
                                className: "title",
                                children: G,
                              }),
                              (0, w.BX)(y.View, {
                                className: "price-info",
                                children: [
                                  H &&
                                    (0, w.tZ)(y.Text, {
                                      className: "discount-tip",
                                      children:
                                        (null === (t = d) || void 0 === t
                                          ? void 0
                                          : t.length) > 0
                                          ? "已减".concat(
                                              Math.abs(S.discount),
                                              "元"
                                            )
                                          : "立减".concat(
                                              Math.abs(S.discount),
                                              "元"
                                            ),
                                    }),
                                  (0, w.tZ)(y.Text, {
                                    children: "".concat(U, "元/人"),
                                  }),
                                ],
                              }),
                              !h &&
                                (null === (n = o.tag) || void 0 === n
                                  ? void 0
                                  : n.url) &&
                                (0, w.tZ)(y.Text, {
                                  className:
                                    "iconfont2 ifont2-zhushi_linea_12 tag",
                                  id: "AKAc",
                                  onClick: q,
                                }),
                            ],
                          }),
                          !h &&
                            (null == Y ? void 0 : Y.length) > 0 &&
                            (0, w.tZ)(y.View, {
                              className: "carriage-selector-desc not-combine",
                              children: (0, w.tZ)(y.View, {
                                className: "desc",
                                children: Y[0],
                              }),
                            }),
                          (0, w.tZ)(y.View, {
                            className: "carriage-selector-content",
                            children: (0, w.tZ)(y.ScrollView, {
                              className: "carriage-list",
                              scrollX: !0,
                              scrollIntoView: E,
                              scrollWithAnimation: !0,
                              children:
                                null == o
                                  ? void 0
                                  : o.carriageInfoList.map(function (e, t) {
                                      var n = e.carriageNo,
                                        a = e.carriageAvailable,
                                        r = e.carriageFlag;
                                      return (0, w.tZ)(
                                        y.View,
                                        {
                                          className: "carriage "
                                            .concat(
                                              1 != a ? "disabled" : "",
                                              " "
                                            )
                                            .concat(1 == r ? "eat" : "", " ")
                                            .concat(
                                              d.includes(n) ? "active" : ""
                                            ),
                                          id: "carriage-item-".concat(t),
                                          onClick: W.bind(i, {
                                            carriageNo: n,
                                            carriageAvailable: a,
                                            carriageFlag: r,
                                          }),
                                          children: 1 == r ? "餐车" : n,
                                        },
                                        t
                                      );
                                    }),
                            }),
                          }),
                          (0, w.tZ)(y.Block, {
                            children:
                              h &&
                              (null === (a = d) || void 0 === a
                                ? void 0
                                : a.length) > 0 &&
                              (null == Y ? void 0 : Y.length) > 0 &&
                              (0, w.tZ)(y.View, {
                                className: "carriage-selector-desc",
                                children:
                                  null == Y
                                    ? void 0
                                    : Y.map(function (e, t) {
                                        return (
                                          0 === t &&
                                          (0, w.tZ)(
                                            y.View,
                                            { className: "desc", children: e },
                                            t
                                          )
                                        );
                                      }),
                              }),
                          }),
                        ],
                      }),
                      m && !h && (0, w.tZ)(da, { trainHotelReturnCashInfo: m }),
                    ],
                  })
                : null;
            }),
            ga = (0, h.$j)(function (e) {
              var t,
                n = e.xProModel,
                a = e.combinationSeatModel,
                i = e.crossProModel,
                r = e.passengerModel,
                o = e.memberSaledModel,
                c = e.appointSeatModel,
                l = e.trainModel,
                s = e.assignCarriageModel,
                d = e.specialCardModel;
              return {
                paidProductAppointSeatType: n.paidProductAppointSeatType,
                isSupportAppointBerthBox: l.isBed,
                canAppointPaidProduct: n.canAppointPaidProduct,
                canAppointFreeBedding: n.canAppointFreeBedding,
                combinationSeat: a.combinationSeat,
                trainHotelReturnCashInfo: i.trainHotelReturnCashInfo,
                allPas: r.allPas,
                buyMemberShip: o.buyMemberShip,
                useMemberShip: o.useMemberShip,
                memberShipBagInfo: o.memberShipBagInfo,
                appointSeatDetail: c.appointSeatDetail,
                SeatName:
                  (null === (t = l.trainInfo) || void 0 === t
                    ? void 0
                    : t.SeatName) || "",
                carriageInfo: s.assignCarriageInfo,
                manualSelectSeatInfo: a.manualSelectSeatInfo,
                disableDiscount: d.checked && d.hasRights,
              };
            })(
              f.default.memo(function (e) {
                var t,
                  n = e.allPas,
                  a = void 0 === n ? [] : n,
                  i = e.combinationSeat,
                  r = void 0 === i ? {} : i,
                  o = e.trainHotelReturnCashInfo,
                  c = e.buyMemberShip,
                  l = e.useMemberShip,
                  s = e.canAppointPaidProduct,
                  d = e.paidProductAppointSeatType,
                  u = e.appointSeatDetail,
                  p = e.isSupportAppointBerthBox,
                  m = e.memberShipBagInfo,
                  h = e.isChooseSeatOnlineButtonVisible,
                  g = e.SeatName,
                  S = e.canAppointFreeBedding,
                  v = e.carriageInfo,
                  b = e.manualSelectSeatInfo,
                  T = e.disableDiscount,
                  Z = a.length > 0,
                  N = ve.ubtTrace,
                  M = (null == u ? void 0 : u.seatInfoList.length) || 0;
                if (
                  ((0, f.useEffect)(
                    function () {
                      null != r &&
                        r.returnCashFlag &&
                        o &&
                        N("TZWBuyBook_Hotel_exposure", {
                          PageId: P.default.isTieyou
                            ? "10320660965"
                            : "10320660961",
                          Type: h ? "GDC" : "KTZ",
                          seatScmType: g,
                          position: 4,
                        });
                    },
                    [r]
                  ),
                  !Z)
                )
                  return null;
                if (!s && !S) {
                  var C =
                    3 === d ? "学生票暂不支持购买" : "非身份证购票暂不支持购买";
                  return (0, w.BX)(y.View, {
                    className: "train-booking-combination-can-not",
                    children: [
                      (0, w.tZ)(y.View, {
                        className: "title",
                        children:
                          (2 === M && a.length < 2
                            ? null == u
                              ? void 0
                              : u.title
                            : (null == r ? void 0 : r.title) ||
                              (null == v ? void 0 : v.title) ||
                              (null == b ? void 0 : b.title)) ||
                          "指定车厢/坐席/铺席",
                      }),
                      (0, w.tZ)(y.View, { className: "desc", children: C }),
                    ],
                  });
                }
                return (0, w.BX)(y.Block, {
                  children: [
                    (0, w.BX)(y.View, {
                      className: r ? "train-booking-combination-seat" : "",
                      children: [
                        r &&
                          (0, w.BX)(y.View, {
                            className: "head",
                            children: [
                              (0, w.BX)(y.View, {
                                className: "title-content",
                                children: [
                                  (0, w.tZ)(y.View, {
                                    className: "title",
                                    children:
                                      2 === M && a.length < 2
                                        ? null == u
                                          ? void 0
                                          : u.title
                                        : null == r
                                        ? void 0
                                        : r.title,
                                  }),
                                  !(
                                    null === (t = r.tag) ||
                                    void 0 === t ||
                                    !t.url
                                  ) &&
                                    (0, w.tZ)(y.Text, {
                                      className:
                                        "iconfont2 ifont2-zhushi_linea_12 tit-tag",
                                      id: "AKAh",
                                      onClick: function () {
                                        var e,
                                          t =
                                            null === (e = r.tag) || void 0 === e
                                              ? void 0
                                              : e.url;
                                        K.Z.commonNavigator(t);
                                      },
                                    }),
                                  !(c || l) &&
                                    (null == r ? void 0 : r.priceTip) &&
                                    (!M ||
                                      3 === M ||
                                      (2 === M && a.length > 1)) &&
                                    !T &&
                                    (0, w.BX)(y.View, {
                                      className: "tag",
                                      children: [
                                        (0, w.tZ)(y.View, {
                                          className: "tag-tit",
                                          children: "满减",
                                        }),
                                        (0, w.tZ)(y.View, {
                                          className: "tag-tip",
                                          children:
                                            null == r ? void 0 : r.priceTip,
                                        }),
                                      ],
                                    }),
                                ],
                              }),
                              (!M ||
                                3 === M ||
                                (2 === M &&
                                  !c &&
                                  !l &&
                                  !(m && null != m && m.sleepNightEntity))) &&
                                (0, w.tZ)(y.View, {
                                  className: "desc",
                                  children: null == r ? void 0 : r.desc,
                                }),
                              (0, w.tZ)(y.Image, {
                                className: "icon",
                                src:
                                  u && p
                                    ? "https://images3.c-ctrip.com/ztrip/train.song/order_details/V10.0/txy/img_yxpx@3x.webp"
                                    : "https://images3.c-ctrip.com/ztrip/train.song/order_details/V10.0/txy/img_xzzx@3x.webp",
                                webp: !0,
                              }),
                            ],
                          }),
                        s && (0, w.tZ)(ua, {}),
                        p && (0, w.tZ)(fa, {}),
                        (0, w.tZ)(ha, {}),
                      ],
                    }),
                    r &&
                      (null == r ? void 0 : r.returnCashFlag) &&
                      o &&
                      (0, w.tZ)(da, { trainHotelReturnCashInfo: o }),
                  ],
                });
              })
            );
          function Sa(e) {
            var t = e.isCanPointsPay,
              n = e.onLogin;
            return (0, w.BX)(y.View, {
              className: "login-bar-with-12306 flex-align-items-center",
              children: [
                (0, w.BX)(y.View, {
                  className: "lbox flex-1 flex-align-items-center",
                  children: [
                    (0, w.tZ)(y.Text, { className: "ifont-12306 iconfont" }),
                    (0, w.BX)(y.View, {
                      className: "cont",
                      children: [
                        (0, w.tZ)(y.View, {
                          className: "title",
                          children: "登录12306完成实名认证",
                        }),
                        (0, w.tZ)(y.View, {
                          className: "sub-cont",
                          children: t
                            ? ["积分兑票", "极速退改", "专业渠道"].map(
                                function (e, t) {
                                  return (0, w.BX)(
                                    y.View,
                                    {
                                      className: "right-item",
                                      children: [
                                        (0, w.tZ)(y.Text, {
                                          className: "ifont2-gou iconfont2",
                                        }),
                                        (0, w.tZ)(y.Text, {
                                          className: "txt",
                                          children: e,
                                        }),
                                      ],
                                    },
                                    t
                                  );
                                }
                              )
                            : (0, w.tZ)(y.Text, {
                                className: "txt",
                                children: "登录账号查看积分，可兑免费车票",
                              }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, w.tZ)(y.View, {
                  className: "rbox",
                  children: (0, w.tZ)(y.View, {
                    className: "login-btn",
                    id: "AKAk",
                    onClick: n,
                    children: "去登录",
                  }),
                }),
              ],
            });
          }
          var va = (0, h.$j)(function (e) {
              var t = e.pointBookingModel,
                n = e.passengerModel;
              return {
                train: e.trainModel.trainInfo,
                memberInfoWith12306: t.memberInfoWith12306,
                ifPointOrder: t.ifPointOrder,
                isPointPayMode: t.isPointPayMode,
                allPas: n.allPas,
                assigneesPas: n.assigneesPas,
                hasSelectAssignPas: n.hasSelectAssignPas,
              };
            })(function (e) {
              var t,
                n = e.train,
                a = e.memberInfoWith12306,
                i = e.ifPointOrder,
                r = e.isPointPayMode,
                o = e.allPas,
                c = e.assigneesPas,
                l = e.hasSelectAssignPas,
                s =
                  !!o.length &&
                  o.every(function (e) {
                    return c.some(function (t) {
                      return (
                        t.id_no.slice(0, 4) === e.idcard.no.slice(0, 4) &&
                        t.id_no.slice(15) === e.idcard.no.slice(15) &&
                        t.name === e.pasName
                      );
                    });
                  }),
                d = a || {},
                u = d.isMember,
                p = void 0 !== u && u,
                m = d.memberPoint,
                h = void 0 === m ? { totalPoint: 0 } : m,
                g = parseInt((null == h ? void 0 : h.totalPoint) || 0) / 100,
                S = n.IsCanPointsPay,
                v =
                  p &&
                  S &&
                  g > n.Price * (o.length || 1) &&
                  s &&
                  ((null == h ? void 0 : h.totalPoint) >= 1e4 || i || r || l),
                b = ve.ubtTrace,
                T = "",
                Z = "查看",
                P = !1;
              if (p)
                if (
                  !S ||
                  (null == a || null === (t = a.memberPoint) || void 0 === t
                    ? void 0
                    : t.totalPoint) <= 0
                )
                  (T = "本单成功出行后12306会员<font color='#00C777'>+"
                    .concat(Math.floor(5 * n.Price), "积分·价值")
                    .concat(Math.floor(5 * n.Price) / 100, "元</font>")),
                    (P = !0);
                else if (v)
                  r
                    ? ((T =
                        "已使用12306积分兑换免费车票，本单<font color='#00C777'>已减￥".concat(
                          n.Price * (o.length || 1),
                          "</font>"
                        )),
                      (P = !0))
                    : s
                    ? (T =
                        "使用12306积分兑换免费车票，本单<font color='#ff5959'>立减￥".concat(
                          n.Price * (o.length || 1),
                          "</font>"
                        ))
                    : ((T = "本单成功出行后12306会员<font color='#00C777'>+"
                        .concat(Math.floor(5 * n.Price), "积分·价值")
                        .concat(Math.floor(5 * n.Price) / 100, "元</font>")),
                      (P = !0));
                else {
                  var N, M;
                  T = "积分余额"
                    .concat(
                      null == a || null === (N = a.memberPoint) || void 0 === N
                        ? void 0
                        : N.totalPoint,
                      "，最高可兑换"
                    )
                    .concat(
                      parseInt(
                        null == a ||
                          null === (M = a.memberPoint) ||
                          void 0 === M
                          ? void 0
                          : M.totalPoint
                      ) / 100,
                      "元车票"
                    );
                }
              else
                (T =
                  "开通12306会员享积分<font color='#ff5959'>免费兑换车票</font>"),
                  (Z = "去开通");
              (0, f.useEffect)(
                function () {
                  p ||
                    b("s_trn_z_trace_10320660961", {
                      bizKey: "z_mini_bookPage_memberBanner_show",
                    }),
                    p &&
                      b("s_trn_z_trace_10320660961", {
                        bizKey: "z_mini_bookPage_creditTrain_show",
                        creditTrainUser: p && g > n.Price ? 0 : 1,
                      });
                },
                [p, b, g, n]
              );
              var C = function () {
                  b("c_trn_z_10320660961", {
                    bizKey: "z_mini_bookPage_memberBanner_click",
                  }),
                    ve.navigateTo({ url: "/pages/12306/member/member" });
                },
                I = function () {
                  b("c_trn_z_10320660961", {
                    bizKey: "z_mini_bookPage_creditTrain_click",
                    creditTrainUser: p && g > n.Price ? 0 : 1,
                  }),
                    p ? (0, Ce.wk)() : C();
                },
                k = function () {
                  p ? (v ? We(!r) : I()) : C();
                };
              return (0,
              w.BX)(y.View, { className: "point-info-banner flex ".concat(P ? "green-bg" : ""), children: [(0, w.BX)(y.View, { className: "lbox flex-1 flex-align-items-center", id: "AKAv", onClick: k, children: [(0, w.tZ)(ia.ZtRichText, { className: "cont-txt", nodes: T }), ""] }), (0, w.tZ)(y.View, { className: "rbox flex-align-items-center", children: v ? (0, w.tZ)(y.View, { className: "exchange-btn ".concat(r ? "active" : ""), id: "AKAw", onClick: k }) : (0, w.BX)(y.View, { className: "rule-btn", stopPropagation: !0, id: "AKAx", onClick: I, children: [(0, w.tZ)(y.Text, { children: Z }), (0, w.tZ)(y.Text, { className: "ifont2-arr iconfont2" })] }) })] });
            }),
            ba = function (e) {
              var t = [];
              return (
                1 == e.PassengerType ||
                (3 == e.PassengerType && e.convertStu) ||
                (3 == e.PassengerType && !e.convertStu && e.isStudentToAdult)
                  ? t.push({ tagName: "成人票" })
                  : 2 == e.PassengerType
                  ? (t.push({ tagName: "儿童票" }),
                    e.isFreeChild &&
                      t.push({ tagName: "免费", extraClass: "free" }))
                  : 3 != e.PassengerType ||
                    e.convertStu ||
                    e.isStudentToAdult ||
                    t.push({ tagName: "学生票" }),
                e.isAssignee &&
                  t.push({ tagName: "受让人", extraClass: "assignee" }),
                t
              );
            },
            Ta = function () {
              K.Z.commonNavigator(
                "https://pages.ctrip.com/ztrip/document/info_child.html"
              );
            },
            Za = function (e) {
              var t;
              return e.isCopyFromAdult
                ? (0, w.BX)(y.View, {
                    children: [
                      "使用",
                      (0, w.tZ)(y.Text, {
                        style: { color: "#FD9227" },
                        children: e.pasName,
                      }),
                      "的证件进出站",
                      (0, w.tZ)(y.Text, {
                        className: "iconfont2 ifont2-zhushi_linea_12",
                        style: { fontSize: "10px", marginLeft: "2px" },
                        id: "AKAn",
                        onClick: Ta,
                      }),
                    ],
                  })
                : (0, w.BX)(y.Text, {
                    children: [
                      e.IdentityType,
                      " ",
                      e.ShowPassportCode ||
                        (null == e || null === (t = e.idcard) || void 0 === t
                          ? void 0
                          : t.showCode) ||
                        e.IdentityNo,
                    ],
                  });
            },
            ya = f.default.memo(function (e) {
              var t = e.passengers,
                n = void 0 === t ? [] : t,
                a = e.onDelete,
                i = void 0 === a ? function () {} : a,
                r = e.disableOperate,
                o = void 0 !== r && r,
                c = (0, f.useState)(-1),
                l = (0, Z.Z)(c, 2),
                s = l[0],
                d = l[1],
                u = (0, f.useState)(0),
                p = (0, Z.Z)(u, 2),
                m = p[0],
                h = p[1],
                g = (0, f.useState)(0),
                S = (0, Z.Z)(g, 2),
                v = S[0],
                b = S[1],
                T = function (e) {
                  d(-1),
                    h(e.changedTouches[0].clientX),
                    b(e.changedTouches[0].clientY);
                },
                P = function (e, t) {
                  var n = t.changedTouches[0].clientX,
                    a = t.changedTouches[0].clientY,
                    i = (function (e, t) {
                      var n = t.X - e.X,
                        a = t.Y - e.Y;
                      return Math.abs((180 * Math.atan2(a, n)) / Math.PI);
                    })({ X: m, Y: v }, { X: n, Y: a });
                  i < 30 ? d(-1) : i > 150 && d(e);
                };
              return (0, w.tZ)(y.View, {
                className: "pas-list",
                children: n.map(function (e, t) {
                  return (0, w.tZ)(
                    y.View,
                    {
                      className: "pas-item",
                      onTouchStart: o ? function () {} : T,
                      onTouchMove: o
                        ? function () {}
                        : function (e) {
                            return P(t, e);
                          },
                      children: (0, w.BX)(y.View, {
                        className: "pas-cont flex-align-items-center ".concat(
                          t === s ? "del-active" : ""
                        ),
                        children: [
                          (0, w.BX)(y.View, {
                            className: "lbox flex-1",
                            id: "AKAo",
                            onClick: function () {
                              d(-1);
                            },
                            children: [
                              (0, w.BX)(y.View, {
                                className:
                                  "pas-cont-tit flex-align-items-center",
                                children: [
                                  (0, w.tZ)(y.Text, {
                                    className: "pas-name",
                                    children: e.pasName || e.CNName,
                                  }),
                                  ba(e).map(function (e) {
                                    var t;
                                    return (0,
                                    w.tZ)(y.Text, { className: "pas-tag ".concat(null !== (t = e.extraClass) && void 0 !== t ? t : ""), children: e.tagName }, e.tagName);
                                  }),
                                ],
                              }),
                              (0, w.tZ)(y.View, {
                                className: "sub-cont",
                                children: Za(e),
                              }),
                            ],
                          }),
                          !o &&
                            (0, w.BX)(w.HY, {
                              children: [
                                (0, w.tZ)(y.Text, {
                                  className:
                                    "ifont2-shanchu_linea_20 iconfont2 del-icon",
                                  id: "AKAp",
                                  onClick: function () {
                                    !(function (e) {
                                      d(e == s ? -1 : e);
                                    })(t);
                                  },
                                }),
                                (0, w.tZ)(y.View, {
                                  className: "delete-btn flex-center",
                                  id: "AKAq",
                                  onClick: function () {
                                    !(function (e) {
                                      d(-1), i(e);
                                    })({ pas: e, idx: t });
                                  },
                                  children: "删除",
                                }),
                                (0, w.tZ)(y.View, {
                                  className: "cancel-btn flex-center",
                                  id: "AKAr",
                                  onClick: function () {
                                    d(-1);
                                  },
                                  children: "取消",
                                }),
                              ],
                            }),
                        ],
                      }),
                    },
                    t
                  );
                }),
              });
            }),
            Pa = f.default.memo(function (e) {
              var t = e.logedin,
                n = e.isShow12306InfoBar,
                a = e.isPointPayMode,
                i = e.passengers,
                r = void 0 === i ? [] : i,
                o = e.disableOperate;
              return (0, w.BX)(y.View, {
                className: "passenger-list-card",
                children: [
                  !!t && n && (0, w.tZ)(va, {}),
                  (0, w.tZ)(ya, {
                    passengers: r,
                    onDelete: Qe,
                    disableOperate: o,
                  }),
                  !o &&
                    (0, w.tZ)(function () {
                      return 0 === r.length || a
                        ? (0, w.tZ)(y.View, {
                            className: "select-pas-btn flex-center",
                            children: (0, w.BX)(y.Button, {
                              className: "txt flex-center",
                              id: "AKAs",
                              onClick: et,
                              children: [
                                (0, w.tZ)(y.Text, {
                                  className: "ifont2-add iconfont2",
                                }),
                                a ? "添加受让人" : "选择乘客(成人/学生/儿童)",
                              ],
                            }),
                          })
                        : (0, w.tZ)(y.View, {
                            className: "edit-pas-wrap flex-center",
                            children: (0, w.tZ)(y.View, {
                              className: "txt add-pas flex-1 flex-center",
                              id: "AKAt",
                              onClick: et,
                              children: "添加/编辑乘客",
                            }),
                          });
                    }, {}),
                ],
              });
            }),
            Na = (0, h.$j)(function (e) {
              var t = e.my12306Model,
                n = e.pointBookingModel,
                a = e.passengerModel,
                i = e.reschduleModel,
                r = e.secSkillModel;
              return {
                disableOperate: i.isReschduleMode,
                logedin: t.logedin,
                isShow12306InfoBar: !i.isReschduleMode && !r.isPreSecKill,
                isPointPayMode: n.isPointPayMode,
                passengers: [].concat(
                  (0, Re.Z)(a.allPas),
                  (0, Re.Z)(a.freeChildren)
                ),
              };
            })(Pa),
            Ma = n(94262),
            wa = n(94488),
            Ca = n(72347),
            Ia = n(75677),
            ka = n(43809),
            Da = n(12386),
            xa = { backgroundColor: "#F5F5F5" },
            Ba = function (e) {
              var t = e.visible,
                n = e.onClose,
                a = [
                  "1、本权益仅限在平台内购买火车票付费购买了选座、选铺服务的用户可享；",
                  "2、若火车票出票成功后15天内在平台内预定酒店，可享受返上述服务费特权；",
                  "3、酒店成功离店后可申请返服务费，若在酒店成功离店之前发生火车票退票行为，则不再享受该特权；",
                  "4、一个酒店订单最多可返一人服务费；",
                  "5、本权益不可与会员免服务费等权益共享；",
                  "6、若发现恶意下单、盗刷等行为，平台有权封禁用户账号并收回所有权益；",
                ];
              return (0, w.tZ)(ia.ZtDrawer, {
                show: t,
                title: "火酒联订特权说明",
                onClose: n,
                closeIconParams: {
                  type: "cancel",
                  size: "24px",
                  color: "#c3c3c3",
                },
                drawerStyle: xa,
                children: (0, w.tZ)(y.View, {
                  className: "tmb-train-hotel-cross-pop",
                  id: "train-hotel-cross",
                  children: (0, w.tZ)(y.View, {
                    className: "content",
                    children:
                      a &&
                      a.map(function (e, t) {
                        return (0,
                        w.tZ)(y.View, { className: "desc", children: e }, t);
                      }),
                  }),
                }),
              });
            },
            Va = ["comp"],
            Aa = (0, h.$j)(
              function (e) {
                return { models: e };
              },
              function (e) {
                return { dispatchs: e };
              }
            )(function (e) {
              var t = e.comp,
                n = void 0 === t ? function () {} : t,
                a = (0, be.Z)(e, Va);
              return (
                console.log("restProps---", a),
                (null == n ? void 0 : n(a)) || null
              );
            }),
            _a = n(15798),
            Ra = function (e) {
              var t = e || {},
                n = t.disabled,
                a = void 0 === n || n,
                i = t.onConfirm,
                r = void 0 === i ? function () {} : i,
                o = t.onCancel,
                c = void 0 === o ? function () {} : o,
                l = t.data,
                s = null == l ? void 0 : l._productStyle;
              return (0, w.tZ)(y.View, {
                className: "train-booking-holdSeat-view",
                children:
                  !!l &&
                  (0, w.BX)(y.Block, {
                    children: [
                      (0, w.BX)(y.View, {
                        className: "content",
                        children: [
                          (0, w.tZ)(y.Image, {
                            src: s.icon,
                            className: "avatar",
                            webp: !0,
                          }),
                          (0, w.BX)(y.View, {
                            className: "c-r",
                            children: [
                              (0, w.tZ)(y.View, {
                                className: "title",
                                children: s.title,
                              }),
                              (0, w.tZ)(y.View, {
                                className: "sub-title",
                                children: s.subTitle,
                              }),
                            ],
                          }),
                          (0, w.tZ)(y.View, {
                            className: "price",
                            children: s.priceTag,
                          }),
                        ],
                      }),
                      (0, w.BX)(y.View, {
                        className: "bottom-view",
                        children: [
                          (0, w.tZ)(y.View, {
                            className: "btn cancel",
                            id: "AKBC",
                            onClick: a ? function () {} : c,
                            children: "否",
                          }),
                          (0, w.tZ)(y.View, {
                            className: "btn sure",
                            id: "AKBD",
                            onClick: a ? function () {} : r,
                            children: "是",
                          }),
                        ],
                      }),
                    ],
                  }),
              });
            },
            Ea = (0, h.$j)(function (e) {
              var t = e.holderModel,
                n = e.crossProModel,
                a = e.holdSeatProductModel,
                i = e.trainModel,
                r = e.passengerModel;
              return {
                hotelCouponIcon: n.hotelCouponIconOnHoldPop,
                isShowHoldSeatProduct: t.isShowHoldSeatProduct,
                holdSeatProduct: a.holdSeatProduct,
                preholdDisplayStep: t.preholdDisplayStep,
                isShowOrderDetailEnry: t.isShowOrderDetailEnry,
                preHoldPercent: t.preHoldPercent,
                isTieyou: P.default.isTieyou,
                isChoosedHoldSeatProduct: a.isChoosedHoldSeatProduct,
                train: i.trainInfo,
                allPas: r.allPas,
                oid: t.oid,
              };
            })(function (e) {
              var t,
                n,
                a,
                i,
                r = e.visible,
                o = e.hotelCouponIcon,
                c = e.isShowHoldSeatProduct,
                l = e.holdSeatProduct,
                s = e.preholdDisplayStep,
                d = e.isChoosedHoldSeatProduct,
                u = e.isShowOrderDetailEnry,
                p = e.isTieyou,
                m = e.train,
                f = e.preHoldPercent,
                h = e.allPas,
                g = e.oid,
                S = void 0 === g ? "" : g,
                v = e.onConfirm;
              return (0, w.tZ)(ia.ZtActivityPop, {
                show: r,
                animation: "comeup",
                isShowClose: !1,
                children: (0, w.BX)(y.View, {
                  className: "tb-holder",
                  children: [
                    (0, w.tZ)(y.View, {
                      className: "hold-seat-product ".concat(c ? "active" : ""),
                      children: (0, w.tZ)(Ra, {
                        disabled: !c,
                        onConfirm: Ht,
                        onCancel: Xt,
                        data: l,
                      }),
                    }),
                    (0, w.BX)(y.View, {
                      className: "qianzhi-box",
                      children: [
                        (0, w.BX)(y.View, {
                          className: "qianzhi-loading",
                          children: [
                            (0, w.BX)(y.View, {
                              className: "rate-detail",
                              children: [
                                (0, w.BX)(y.View, {
                                  className: "left",
                                  children: [
                                    (0, w.tZ)(y.View, {
                                      className: "banner-tit",
                                      children:
                                        s >= 5
                                          ? "占座完成"
                                          : s < 4
                                          ? "订单校验中..."
                                          : (d &&
                                              (null == l ||
                                              null === (t = l._productStyle) ||
                                              void 0 === t
                                                ? void 0
                                                : t.bannerTitle)) ||
                                            "占座中...",
                                    }),
                                    (0, w.tZ)(y.View, {
                                      className: "desc-tit",
                                      children:
                                        d &&
                                        null != l &&
                                        null !== (n = l._productStyle) &&
                                        void 0 !== n &&
                                        n.bannerTitle
                                          ? (0, w.tZ)(y.Text, {
                                              children:
                                                null == l ||
                                                null ===
                                                  (a = l._productStyle) ||
                                                void 0 === a
                                                  ? void 0
                                                  : a.bannerTitle,
                                            })
                                          : 4 == s
                                          ? (0, w.tZ)(_a.Z, {})
                                          : s >= 5
                                          ? (0, w.tZ)(y.Text, {
                                              children:
                                                "占座完成，即将跳转支付",
                                            })
                                          : (0, w.tZ)(y.Text, {
                                              children:
                                                "正在核验乘车人，请耐心等候...",
                                            }),
                                    }),
                                  ],
                                }),
                                (0, w.tZ)(y.Block, {
                                  children: u
                                    ? (0, w.BX)(y.Text, {
                                        className: "fr " + (p ? "ty" : "zx"),
                                        id: "AKAj",
                                        onClick: function () {
                                          null == v || v(S);
                                        },
                                        children: [
                                          "查看订单",
                                          (0, w.tZ)(y.Text, {
                                            className: "ifont-arr iconfont",
                                          }),
                                        ],
                                      })
                                    : (0, w.tZ)(y.Text, {
                                        className:
                                          "fr percent " + (p ? "ty" : "zx"),
                                        children: f + "%",
                                      }),
                                }),
                              ],
                            }),
                            (0, w.tZ)(y.View, {
                              className: "loading-bar " + (p ? "ty" : "zx"),
                              children: (0, w.tZ)(y.View, {
                                className: "pros",
                                style: "width:" + f + "%;",
                              }),
                            }),
                          ],
                        }),
                        (0, w.BX)(y.View, {
                          className: "qianzhi-list",
                          children: [
                            (0, w.BX)(y.View, {
                              className: "item",
                              children: [
                                (0, w.tZ)(y.View, {
                                  className: "tit",
                                  children: "请确认车次信息",
                                }),
                                (0, w.tZ)(y.View, {
                                  className: "txt",
                                  children:
                                    (m.DepartStation ||
                                      m.DepartureStationName) +
                                    " - " +
                                    (m.ArriveStation || m.ArrivalStationName) +
                                    "  " +
                                    m.TrainNumber,
                                }),
                                (0, w.tZ)(y.Text, {
                                  className:
                                    "ifont-suc iconfont color-primary " +
                                    (s >= 1 ? "active" : "inactive"),
                                }),
                              ],
                            }),
                            (0, w.BX)(y.View, {
                              className: "item",
                              children: [
                                (0, w.tZ)(y.View, {
                                  className: "tit",
                                  children: "出发时间",
                                }),
                                (0, w.tZ)(y.View, {
                                  className: "txt",
                                  children:
                                    m.DepartureDate +
                                    " " +
                                    m.dayOfweek +
                                    " " +
                                    m.DepartTime +
                                    " 发车",
                                }),
                                (0, w.tZ)(y.Text, {
                                  className:
                                    "ifont-suc iconfont color-primary " +
                                    (s >= 2 ? "active" : "inactive"),
                                }),
                              ],
                            }),
                            (0, w.BX)(y.View, {
                              className: "item",
                              children: [
                                (0, w.tZ)(y.View, {
                                  className: "tit",
                                  children: "乘车人",
                                }),
                                (0, w.tZ)(y.View, {
                                  className: "txt",
                                  children:
                                    (null == h ||
                                    null === (i = h[0]) ||
                                    void 0 === i
                                      ? void 0
                                      : i.pasName) +
                                    " " +
                                    ((null == h ? void 0 : h.length) > 1
                                      ? "等"
                                      : ""),
                                }),
                                (0, w.tZ)(y.Text, {
                                  className:
                                    "ifont-suc iconfont color-primary " +
                                    (s >= 3 ? "active" : "inactive"),
                                }),
                              ],
                            }),
                            !!o &&
                              (0, w.tZ)(y.Image, {
                                className: "hotel-coupon-icon-v2",
                                src: o,
                                webp: !0,
                                mode: "aspectFit",
                              }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              });
            }),
            Oa = function (e) {
              var t,
                n,
                a,
                i,
                r,
                o,
                c = e.onConfirm,
                l = e.onCancel,
                s = e.visible,
                d = e.data;
              return (0, w.BX)(ia.ZtDrawer, {
                className: "night-confirm-view",
                show: s,
                isShowClose: !1,
                children: [
                  (0, w.BX)(y.View, {
                    className: "head",
                    children: [
                      d.title || "选择出票方式",
                      (0, w.tZ)(y.View, {
                        className: "iconfont2 ifont2-close close-btn",
                        onClick: l,
                      }),
                    ],
                  }),
                  d.subTitle &&
                    (0, w.tZ)(y.View, {
                      className: "desc",
                      children: d.subTitle,
                    }),
                  (0, w.BX)(y.View, {
                    className: "content flex",
                    children: [
                      (0, w.BX)(y.View, {
                        className: "flex-1 item left",
                        children: [
                          (0, w.tZ)(y.View, {
                            className: "title",
                            children:
                              null === (t = d.normalContext) || void 0 === t
                                ? void 0
                                : t.title,
                          }),
                          null === (n = d.normalContext) ||
                          void 0 === n ||
                          null === (a = n.context) ||
                          void 0 === a
                            ? void 0
                            : a.map(function (e, t) {
                                return (0,
                                w.tZ)(y.View, { className: "desc".concat(t + 1), children: e }, t);
                              }),
                        ],
                      }),
                      (0, w.tZ)(y.Image, {
                        src: "https://images3.c-ctrip.com/ztrip/train_xie/2023/06/img_vs.png",
                        mode: "aspectFit",
                        className: "pk-img",
                      }),
                      (0, w.BX)(y.View, {
                        className: "flex-1 item right",
                        children: [
                          (0, w.BX)(y.View, {
                            className: "title title2",
                            children: [
                              null === (i = d.productContext) || void 0 === i
                                ? void 0
                                : i.title,
                              (0, w.tZ)(y.View, {
                                className: "price-tag",
                                children: d.productContext.priceTag,
                              }),
                            ],
                          }),
                          null === (r = d.productContext) ||
                          void 0 === r ||
                          null === (o = r.context) ||
                          void 0 === o
                            ? void 0
                            : o.map(function (e, t) {
                                return (0,
                                w.tZ)(y.View, { className: "desc".concat(t + 1), children: e }, t);
                              }),
                        ],
                      }),
                    ],
                  }),
                  (0, w.BX)(y.View, {
                    className: "flex btm-layer",
                    children: [
                      (0, w.tZ)(y.View, {
                        className: "flex-1 btn left",
                        onClick: function () {
                          c(-1);
                        },
                        children: d.cancelButtonName || "再看看",
                      }),
                      (0, w.tZ)(y.View, {
                        className: "flex-1 btn right",
                        onClick: function () {
                          c(1);
                        },
                        children: d.confirmButtonName || "立即出票",
                      }),
                    ],
                  }),
                ],
              });
            },
            La = n(57885),
            Fa = n(22373),
            Ha = function (e) {
              var t = e.visible,
                n = e.content,
                a = e.onConfirm,
                i = e.onCancel;
              if (!n) return (0, w.tZ)(w.HY, {});
              return (0, w.tZ)(Fa.Z, {
                title: "温馨提示",
                icon: "https://images3.c-ctrip.com/ztrip/train_xie/2023/09/img_wxts.png",
                visible: t,
                content: n,
                onCancel: i,
                buttons: [
                  { name: "再看看", type: 1 },
                  { name: "继续下单", type: 2 },
                ],
                clickOption: function (e) {
                  1 === (null == e ? void 0 : e.type) ? i() : a();
                },
                iconTop: 0,
                iconStyle: { width: "280px", height: "148px" },
              });
            },
            Xa = function (e) {
              var t = e.visible,
                n = e.content,
                a = e.onCancel;
              return null != n && n.imageUrl
                ? (0, w.BX)(ia.ZtDrawer, {
                    show: t,
                    className: "trn-img-drawer",
                    isDefineHead: !0,
                    children: [
                      (0, w.tZ)(y.View, {
                        className: "iconfont2 ifont2-close close-btn",
                        id: "AAAw",
                        onClick: a,
                      }),
                      (0, w.tZ)(y.Image, {
                        src: n.imageUrl,
                        mode: "widthFix",
                        className: "img-drawer",
                      }),
                    ],
                  })
                : null;
            },
            Ka = void 0,
            za = function () {},
            ja = function () {},
            Wa = function (e) {
              (0, Ma.Z)(e);
              var t = (0, f.useState)(null),
                n = (0, Z.Z)(t, 2),
                a = n[0],
                i = n[1],
                r = (0, f.useState)(!1),
                o = (0, Z.Z)(r, 2),
                c = o[0],
                l = o[1],
                s = (0, f.useState)(!1),
                d = (0, Z.Z)(s, 2),
                u = d[0],
                p = d[1];
              (0, f.useImperativeHandle)(
                function (e) {
                  ve.getPage().$CommonToast = e;
                },
                function () {
                  return {
                    showToast: function (e) {
                      i(null == e ? void 0 : e.toast),
                        (za =
                          (null == e ? void 0 : e.onConfirm) || function () {}),
                        (ja =
                          (null == e ? void 0 : e.onCancel) || function () {}),
                        p(!0);
                    },
                    closeToast: function (e) {
                      (e && e !== (null == a ? void 0 : a.toastCode)) || l(!1);
                    },
                  };
                }
              ),
                (0, f.useLayoutEffect)(
                  function () {
                    a &&
                      u &&
                      v().nextTick(function () {
                        l(!0), p(!1);
                      });
                  },
                  [u, a]
                );
              var m = function () {
                  for (
                    var e, t = arguments.length, n = new Array(t), a = 0;
                    a < t;
                    a++
                  )
                    n[a] = arguments[a];
                  null === (e = ja) ||
                    void 0 === e ||
                    e.call.apply(e, [Ka].concat(n)),
                    l(!1),
                    (za = ja = function () {});
                },
                h = function () {
                  for (
                    var e, t = arguments.length, n = new Array(t), a = 0;
                    a < t;
                    a++
                  )
                    n[a] = arguments[a];
                  null === (e = za) ||
                    void 0 === e ||
                    e.call.apply(e, [Ka].concat(n)),
                    l(!1),
                    (za = ja = function () {});
                };
              if (!a) return null;
              switch (a.toastCode) {
                case D.TrainHotelCrossPop:
                  return (0, w.tZ)(Ba, { visible: c, onClose: m });
                case D.DarkIntercept:
                  return (0, w.tZ)(
                    wa.Z,
                    (0, A.Z)(
                      (0, A.Z)({ show: c }, a.data),
                      {},
                      {
                        ubtTrace: ve.ubtTrace,
                        id: "AKAi",
                        onActionClick: za,
                        handleClose: m,
                      }
                    )
                  );
                case D.SmartHolderFail:
                  return (0, w.tZ)(Aa, {
                    comp: function (e) {
                      var t,
                        n,
                        a = e.models,
                        i = a.holderModel,
                        r = a.passengerModel,
                        o = a.my12306Model;
                      return (0, w.tZ)(Ca.Z, {
                        visible: c,
                        orderNumber: i.oid,
                        ubtTrace: ve.ubtTrace,
                        expKeyName: "TZWBuyBook_RecommendPop_exposure",
                        cancelCliKeyName:
                          "TZWBuyBook_RecommendPop_Reject_click",
                        confirmCliKeyName:
                          "TZWBuyBook_RecommendPop_Accept_click",
                        smartHoldSeatDetail: i.smartHoldSeatDetail,
                        mobile:
                          null === (t = ve.getPage().$TableRef) ||
                          void 0 === t ||
                          null === (n = t.tel) ||
                          void 0 === n
                            ? void 0
                            : n.value,
                        allPas: r.allPas,
                        userAuth12306Status: o.auth12306Status,
                        onClose: m,
                        onRefuse: function () {
                          return $n(D.SmartHolderFailRefuse);
                        },
                        onTimeup: function () {
                          return on(i.oid);
                        },
                      });
                    },
                  });
                case D.SmartHolderFailRefuse:
                  return (0, w.tZ)(Aa, {
                    comp: function (e) {
                      var t,
                        n,
                        a = e.models,
                        i = a.holderModel,
                        r = a.passengerModel,
                        o = a.my12306Model;
                      return (0, w.tZ)(Ia.Z, {
                        visible: c,
                        orderNumber: i.oid,
                        ubtTrace: ve.ubtTrace,
                        expKeyName: "s_trn_z_trace_10320660961",
                        cliKeyName: "c_trn_z_10320660961",
                        smartHoldSeatDetail: i.smartHoldSeatDetail,
                        mobile:
                          null === (t = ve.getPage().$TableRef) ||
                          void 0 === t ||
                          null === (n = t.tel) ||
                          void 0 === n
                            ? void 0
                            : n.value,
                        allPas: r.allPas,
                        userAuth12306Status: o.auth12306Status,
                        onClose: m,
                        onCancel: function () {
                          return $n(D.SmartHolderFail);
                        },
                      });
                    },
                  });
                case D.Holder:
                  return (0, w.tZ)(Ea, { visible: c, onConfirm: za });
                case D.SeasonMemberShipDrawer:
                  return (0, w.tZ)(Aa, {
                    comp: function (e) {
                      var t = e.models.memberSaledModel;
                      return (0, w.tZ)(ka.Z, {
                        visible: c,
                        content: t.memberShipDrawerInfo,
                        onClose: m,
                        onConfirm: function () {
                          t.buyMemberShip || Ae(), h();
                        },
                      });
                    },
                  });
                case D.HotelCrossRulePop:
                  return (0, w.tZ)(Aa, {
                    comp: function (e) {
                      var t,
                        n = e.models.crossProModel;
                      return (0, w.tZ)(Da.Z, {
                        visible: c,
                        content:
                          null === (t = n.hotelTagCashBackJson) || void 0 === t
                            ? void 0
                            : t.crossRulePop,
                        onClose: m,
                      });
                    },
                  });
                case D.PaymentUpsellModal:
                  return (0, w.tZ)(Aa, {
                    comp: function (e) {
                      var t,
                        n,
                        a,
                        i = e.models.productPopupModel,
                        r =
                          null == i ||
                          null === (t = i.product) ||
                          void 0 === t ||
                          null === (n = t.basicInfo) ||
                          void 0 === n ||
                          null === (a = n.placeOrderRetainJson) ||
                          void 0 === a
                            ? void 0
                            : a.json;
                      return (0, w.tZ)(La.Z, {
                        visible: c,
                        onClose: m,
                        onCancel: m,
                        onConfirm: h,
                        placeOrderRetainJsonV1: r,
                      });
                    },
                  });
                case D.NightTicketPKConfirm:
                  return (0, w.tZ)(Oa, {
                    visible: c,
                    data: a.data,
                    onCancel: m,
                    onConfirm: h,
                  });
                case D.ConflictOrderRemindModal:
                  return (0, w.tZ)(Ha, {
                    visible: c,
                    content: a.data,
                    onCancel: m,
                    onConfirm: h,
                  });
                case D.ImageDrawer:
                  return (0, w.tZ)(Xa, {
                    visible: c,
                    content: a.data,
                    onCancel: m,
                  });
                default:
                  return null;
              }
            },
            Ga = ["A", "B", "C", "D", "F"],
            Ua = f.default.memo(function (e) {
              var t = e.SeatName,
                n = e.allPas,
                a = e.disabled,
                i = e.onChange,
                r = e.hasCheckedSpecialGroupCard,
                o = (0, f.useState)([]),
                c = (0, Z.Z)(o, 2),
                l = c[0],
                s = c[1],
                d = (0, f.useMemo)(
                  function () {
                    var e = [],
                      t = new Array(5).fill(!1);
                    return (
                      n.length && e.push((0, Re.Z)(t)),
                      n.length > 1 && !a && e.push((0, Re.Z)(t)),
                      l.length &&
                        l.forEach(function (t) {
                          e[t[0]] && (e[t[0]][t[1]] = !0);
                        }),
                      e
                    );
                  },
                  [l, n, a]
                );
              (0, f.useEffect)(
                function () {
                  s([]), i([]);
                },
                [n]
              );
              var u = !1,
                p = !1,
                m = !1;
              if (null == n || !n.length || r) return null;
              (null == t ? void 0 : t.indexOf("二等")) > -1
                ? (p = !0)
                : (null == t ? void 0 : t.indexOf("一等")) > -1
                ? (u = !0)
                : (m = !0);
              var h = function (e, t) {
                if (!a) {
                  var r = [];
                  d[e][t]
                    ? (r = l.filter(function (n) {
                        return n[0] !== e || n[1] !== t;
                      }))
                    : l.length < n.length
                    ? (l.push([e, t]), (r = (0, Re.Z)(l)))
                    : (l.shift(), l.push([e, t]), (r = (0, Re.Z)(l)));
                  var o = r.map(function (e) {
                    return "".concat(e[0] + 1).concat(Ga[e[1]]);
                  });
                  s(r), null == i || i(o);
                }
              };
              return (0, w.BX)(y.View, {
                className: "seat-selector-wrap ".concat(a ? "disable" : ""),
                children: [
                  (0, w.BX)(y.View, {
                    className: "seat-selector-hd flex",
                    children: [
                      (0, w.tZ)(y.Text, {
                        className: "hd-title flex-1",
                        children: "在线选座",
                      }),
                      (0, w.BX)(y.Text, {
                        className: "select-count",
                        children: [
                          (0, w.tZ)(y.Text, {
                            className: "dark",
                            children: l.length,
                          }),
                          "/",
                          n.length,
                        ],
                      }),
                    ],
                  }),
                  (0, w.tZ)(y.View, {
                    className: "seat-selector-bd ".concat(
                      p ? "second-seat" : u ? "first-seat" : "business-seat"
                    ),
                    children: d.map(function (e, t) {
                      return (0, w.tZ)(
                        y.View,
                        {
                          className: "seat-row flex",
                          children: e.map(function (e, n) {
                            var a = (1 === n && !p) || (3 === n && m);
                            return (0, w.BX)(
                              f.default.Fragment,
                              {
                                children: [
                                  0 === n &&
                                    (0, w.tZ)(y.View, {
                                      className: "window flex-center",
                                      children: "靠窗",
                                    }),
                                  !a &&
                                    (0, w.tZ)(y.View, {
                                      className: "seat ".concat(
                                        e ? "selected" : ""
                                      ),
                                      id: "AKAy",
                                      onClick: function () {
                                        h(t, n);
                                      },
                                      children: (0, w.tZ)(y.Text, {
                                        className: "seat-text",
                                        children: Ga[n],
                                      }),
                                    }),
                                  2 === n &&
                                    (0, w.tZ)(y.View, {
                                      className: "aisle flex-center",
                                      children: "过道",
                                    }),
                                  4 === n &&
                                    (0, w.tZ)(y.View, {
                                      className: "window flex-center",
                                      children: "靠窗",
                                    }),
                                ],
                              },
                              n
                            );
                          }),
                        },
                        t
                      );
                    }),
                  }),
                  (0, w.tZ)(y.View, {
                    className: "seat-selector-btm",
                    children:
                      !a &&
                      l.length > 0 &&
                      (0, w.tZ)(y.View, {
                        className: "tip-cont",
                        children:
                          "优先按指定座席出票，若指定座席无票将转购其他座席",
                      }),
                  }),
                ],
              });
            }),
            Ya = (0, h.$j)(
              function (e) {
                var t = e.trainModel,
                  n = e.passengerModel,
                  a = e.specialCardModel;
                return {
                  SeatName: t.trainInfo.SeatName,
                  allPas: n.allPas,
                  hasCheckedSpecialGroupCard: a.checked,
                };
              },
              function (e) {
                return { onChange: e.seatSelectorModel.updateSelectedSeats };
              }
            )(Ua),
            Ja = f.default.memo(function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                t = e.strideInfo,
                n = t || {},
                a = n.originDepartStation,
                i = n.originArrivalStation,
                r = n.recommendDepartStation,
                o = n.recommendArrivalStation,
                c = n.recommendDepOffset,
                l = n.recommendOffset,
                s = c > 0,
                d = l > 0;
              return s || d
                ? (0, w.BX)(y.View, {
                    className: "cross-station-info-banner",
                    children: [
                      (0, w.BX)(y.View, {
                        className: "cross-top-content flex-align-items-center",
                        children: [
                          s &&
                            (0, w.BX)(w.HY, {
                              children: [
                                (0, w.tZ)(y.View, {
                                  className: "node",
                                  children: (0, w.tZ)(y.View, {
                                    className: "station start grey",
                                    children: r,
                                  }),
                                }),
                                (0, w.tZ)(y.View, {
                                  className: "dash-line",
                                  children: (0, w.BX)(y.View, {
                                    className: "info-tag",
                                    children: ["多买", c, "站"],
                                  }),
                                }),
                              ],
                            }),
                          (0, w.BX)(y.View, {
                            className: "from-station flex-center",
                            children: [
                              "上车",
                              (0, w.tZ)(y.View, {
                                className: "station mid",
                                children: a,
                              }),
                            ],
                          }),
                          (0, w.tZ)(y.View, { className: "line" }),
                          (0, w.BX)(y.View, {
                            className: "to-station flex-center",
                            children: [
                              "下车",
                              (0, w.tZ)(y.View, {
                                className: "station end",
                                children: i,
                              }),
                            ],
                          }),
                          d &&
                            (0, w.BX)(w.HY, {
                              children: [
                                (0, w.tZ)(y.View, {
                                  className: "dash-line",
                                  children: (0, w.BX)(y.View, {
                                    className: "info-tag",
                                    children: ["多买", l, "站"],
                                  }),
                                }),
                                (0, w.tZ)(y.View, {
                                  className: "node",
                                  children: (0, w.tZ)(y.View, {
                                    className: "station end grey",
                                    children: o,
                                  }),
                                }),
                              ],
                            }),
                        ],
                      }),
                      (0, w.BX)(y.View, {
                        className: "cross-btm-content",
                        children: [
                          (0, w.tZ)(y.Image, {
                            src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/V10.0/xy/img_jlsq@3x.webp",
                            webp: !0,
                            className: "logo",
                          }),
                          "多买",
                          1 * c + 1 * l,
                          "站，",
                          d
                            ? "提前在「".concat(i, "」下车")
                            : s
                            ? "正常在「".concat(a, "」上车；")
                            : "",
                        ],
                      }),
                    ],
                  })
                : null;
            }),
            qa = n(63899),
            $a = function (e) {
              var t = e.isShowPriceDetail,
                n = e.priceDetails,
                a = e.togglePriceDetail;
              return (0, w.tZ)(ia.ZtDrawer, {
                className: "trainOrderDetailv2-price-detail",
                show: t,
                onClose: a,
                onWrapClose: a,
                title: "价格明细",
                drawerStyle: { borderRadius: "40rpx 40rpx 0 0" },
                children: (0, w.tZ)(y.View, {
                  className: "content",
                  children:
                    null == n
                      ? void 0
                      : n.map(function (e, t) {
                          return (0, w.BX)(
                            y.View,
                            {
                              className: "price-detail",
                              children: [
                                (0, w.tZ)(y.View, {
                                  className: "tit",
                                  children: e.typeName,
                                }),
                                e.priceItem.map(function (e, t) {
                                  return (0,
                                  w.BX)(y.View, { className: "price-item flex-center", children: [(0, w.tZ)(y.View, { style: { flex: 1 }, children: e.name }), (0, w.tZ)(y.View, { children: (0, w.tZ)(ia.ZtRichText, { nodes: e.desc }) })] }, t);
                                }),
                              ],
                            },
                            t
                          );
                        }),
                }),
              });
            },
            Qa = (0, h.$j)(function (e) {
              var t,
                n,
                a,
                i = e.trainModel,
                r = e.passengerModel;
              return {
                seatPrice:
                  null === (t = i.trainInfo) || void 0 === t ? void 0 : t.Price,
                seatLength:
                  null === (n = r.allPas) || void 0 === n ? void 0 : n.length,
                freeSeatLength:
                  null === (a = r.freeChildren) || void 0 === a
                    ? void 0
                    : a.length,
              };
            })(function (e) {
              var t = e.seatPrice,
                n = e.seatLength,
                a = e.freeSeatLength,
                i = (0, f.useState)(!1),
                r = (0, Z.Z)(i, 2),
                o = r[0],
                c = r[1],
                l = function (e) {
                  if (n <= 0) return (0, B.showToast)("请选择乘客");
                  c(e);
                };
              return (
                (0, f.useEffect)(function () {
                  ve.ubtTrace("TZWBuyBook_SeckillButton_exposure", {
                    PageId: ve.getPage().pageId,
                  });
                }, []),
                (0, w.BX)(w.HY, {
                  children: [
                    (0, w.BX)(qa.Z, {
                      className:
                        "flex flex-center trn-booking-sec-skill-bottom",
                      children: [
                        (0, w.tZ)(y.View, {
                          className: "price-content",
                          children: (0, w.BX)(y.View, {
                            className: "price",
                            children: [
                              (0, w.tZ)(y.Text, {
                                className: "rmb-sign",
                                children: (0, w.tZ)(ra.Z, {}),
                              }),
                              n > 0 ? t * n : "--",
                            ],
                          }),
                        }),
                        (0, w.BX)(y.View, {
                          className: "right-view flex-center",
                          children: [
                            (0, w.tZ)(y.Text, {
                              className: "detail",
                              id: "AKAe",
                              onClick: function () {
                                l(!o);
                              },
                              children: "明细",
                            }),
                            (0, w.tZ)(y.Text, {
                              className: "iconfont2 ".concat(
                                o
                                  ? "ifont2-zhankai_linea_12"
                                  : "ifont2-shouqi_linea_12"
                              ),
                              id: "AKAf",
                              onClick: function () {
                                l(!o);
                              },
                            }),
                            (0, w.tZ)(y.View, {
                              className: "pay-btn",
                              id: "AKAg",
                              onClick: Vn,
                              children: "提交秒杀",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, w.tZ)(y.View, {
                      style: { position: "relative", zIndex: "21" },
                      children: (0, w.tZ)($a, {
                        togglePriceDetail: l,
                        isShowPriceDetail: o,
                        priceDetails: [
                          {
                            typeName: "票价",
                            priceItem: [
                              {
                                name: "成人票",
                                desc: "￥".concat(t, "x").concat(n),
                              },
                            ].concat(
                              (0, Re.Z)(
                                a > 0
                                  ? [
                                      {
                                        name: "免费儿童票",
                                        desc: "￥".concat(0, "x", a),
                                      },
                                    ]
                                  : []
                              )
                            ),
                          },
                        ],
                      }),
                    }),
                  ],
                })
              );
            }),
            ei = (0, h.$j)(function (e) {
              var t,
                n = e.reschduleModel,
                a = e.pointBookingModel,
                i = e.appointSeatModel,
                r = e.assignCarriageModel,
                o = e.trainModel,
                c = e.combinationSeatModel,
                l = e.passengerModel,
                s = e.secSkillModel,
                d = e.couponDeuctModel;
              return {
                isReschduleMode: n.isReschduleMode,
                isPointPayMode: a.isPointPayMode,
                reschedulePrice: n.reschedulePrice,
                originPrice: n.originPrice,
                total: i.total,
                selectedCarriages: r.selectedCarriages,
                manualSelectSeatInfo: c.manualSelectSeatInfo,
                allPas: l.allPas,
                freeChildren: l.freeChildren,
                isBed: o.isBed,
                isAppointSeatFor12306:
                  1 ==
                  (null === (t = i.appointSeatDetail) || void 0 === t
                    ? void 0
                    : t.appointSeatFor12306),
                isPreSecKill: s.isPreSecKill,
                couponDeductDesc: d.couponDeductDesc,
              };
            })(function (e) {
              var t = e.isReschduleMode,
                n = e.isPointPayMode,
                a = e.allPas,
                i = void 0 === a ? [] : a,
                r = e.isBed,
                o = e.reschedulePrice,
                c = e.originPrice,
                l = e.freeChildren,
                s = void 0 === l ? [] : l,
                d = e.isPreSecKill,
                u = e.couponDeductDesc,
                p = e.isAppointSeatFor12306;
              if (d) return (0, w.tZ)(Qa, {});
              var m = (function () {
                  var e = [];
                  ((function () {
                    var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : [];
                    return e.find(function (e) {
                      return e.isChild;
                    });
                  })(i) ||
                    !!s.length) &&
                    e.push(
                      "儿童票实际收费以铁路局为准。如遇付款时按成人票价计算，不必担心，差价将在成功出票后1~3个工作日退还。"
                    ),
                    r &&
                      !p &&
                      e.push(
                        "实际支付金额按下铺价格收取，如有差价将于1-3个工作日退回"
                      );
                  var t = (function (e) {
                    var t = e.reschedulePrice,
                      n = e.originPrice,
                      a = "";
                    return (
                      t > n &&
                        (a =
                          "改签车次与原车次存在差价，我们将先收取改签车次票价，改签成功后退还差价"),
                      t < n &&
                        (a = "改签车次与原车次存在差价，改签成功后将退还差价"),
                      a
                    );
                  })({ reschedulePrice: o, originPrice: c });
                  return (
                    t && e.push(t),
                    n &&
                      e.push(
                        "温馨提示：使用积分兑换的车票不支持退票和变更到站业务"
                      ),
                    e
                  );
                })(),
                h = [];
              t
                ? h.push({ text: "立即改签", action: In })
                : h.push({
                    text: n ? "立即兑换（￥0）" : "立即预订",
                    action: Ut,
                  });
              var g = function (e) {
                var t = e.desc;
                return t
                  ? (0, w.BX)(y.View, {
                      className: "btn-tag",
                      children: [
                        (0, w.tZ)(y.Image, {
                          className: "bg",
                          src: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/23_05/tag_sellingpoint_ticket.webp",
                          mode: "aspectFill",
                          webp: !0,
                        }),
                        (0, w.tZ)(y.View, { className: "text", children: t }),
                      ],
                    })
                  : (0, w.tZ)(w.HY, {});
              };
              return (0, w.BX)(y.View, {
                className: "tb-PayDesk-view",
                children: [
                  m.length > 0 &&
                    (0, w.tZ)(y.View, {
                      className: "tip-layer",
                      children: m.map(function (e, t) {
                        return (0,
                        w.BX)(y.View, { className: "tip-item flex", children: [m.length > 1 && (0, w.tZ)(y.Text, { className: "dot", children: "·" }), (0, w.tZ)(y.View, { className: "flex-1", children: e })] }, t);
                      }),
                    }),
                  (0, w.tZ)(y.View, {
                    className: "desk flex flex-center",
                    children: h.slice(0, 2).map(function (e, t) {
                      return (0,
                      f.createElement)(y.View, (0, A.Z)((0, A.Z)({ id: "AKFy", className: "btm-btn flex-1 ".concat(0 === t && h.length > 1 ? "left" : "") }, e.shareType ? (0, j.Z)({ openType: "share" }, "data-share-type", e.shareType) : {}), {}, { key: t, onClick: e.action }), (0, w.tZ)(g, { desc: u }), e.text);
                    }),
                  }),
                ],
              });
            });
          var ti = function (e) {
            var t = e.nightBookInfo,
              n = e.buyMemberShip,
              a = e.onSeleckNight,
              i = e.isNightChoose,
              r = void 0 !== i && i,
              o = e.useMemberShip,
              c = e.canChooseNiget,
              l = e.memberShipBagInfo,
              s = e.selectNightEleDelivery,
              d = e.nightEledeliveryInfo,
              u = e.showNightCanNotModal,
              p = e.ubtTrace,
              m = (l || {}).sleepNightEntity,
              h = (0, f.useState)(r),
              g = (0, Z.Z)(h, 2),
              S = g[0],
              v = g[1],
              b = function () {
                if (1 !== c()) return v(!1), a(!1), void u();
                var e = !S;
                v(e), a(e);
              };
            if (
              ((0, f.useEffect)(
                function () {
                  (!n && !o) || S || m || b();
                },
                [n, o]
              ),
              (0, f.useEffect)(
                function () {
                  !s && S && v(!1);
                },
                [s]
              ),
              (0, f.useEffect)(
                function () {
                  (!m || (m && 0 === m.amount)) &&
                    (t || d) &&
                    p("TZWBuyBook_NightSer_exposure", {
                      PageId: ve.getPage().pageId,
                      Status: r ? 1 : 0,
                    });
                },
                [t, d]
              ),
              m && m.amount > 0)
            )
              return (0, w.tZ)(y.View, {});
            if (!t && !d) return (0, w.tZ)(y.View, {});
            if (t) {
              var T = t.title,
                P = t.ticketDesc,
                N = t.rightDesc,
                M = t.desc,
                C = t.priceTag;
              return (0, w.tZ)(y.Block, {
                children: (0, w.BX)(y.View, {
                  className: "train-booking-night-book-banner",
                  children: [
                    (0, w.BX)(y.View, {
                      className: "head",
                      children: [
                        (0, w.tZ)(y.View, {
                          className: "ticketDesc",
                          children: P,
                        }),
                        n || o
                          ? (0, w.BX)(y.View, {
                              className: "desc",
                              children: [
                                (0, w.tZ)(ia.ZtRichText, {
                                  space: "nbsp",
                                  nodes: K.Z.convertAppTextToHtmlStr(N),
                                }),
                                " ",
                              ],
                            })
                          : (0, w.tZ)(y.View, {
                              className: "desc",
                              children: M,
                            }),
                      ],
                    }),
                    (0, w.BX)(y.View, {
                      className: "content",
                      children: [
                        (0, w.tZ)(y.Text, { className: "left", children: T }),
                        (0, w.BX)(y.View, {
                          className: "right",
                          children: [
                            (0, w.tZ)(y.Text, {
                              className: "price-tag ".concat(
                                (n || o) && S ? "free" : ""
                              ),
                              children: C,
                            }),
                            (0, w.tZ)(y.Text, {
                              className: "".concat(
                                (n || o) && S
                                  ? "night-member-checkboxed"
                                  : S && s
                                  ? "night-checkboxed"
                                  : "night-checkbox"
                              ),
                              id: "AKBH",
                              onClick: b,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              });
            }
            var I = d.desc,
              k = d.subTitle,
              D = d.title,
              x = d.priceTag;
            return (0, w.tZ)(y.Block, {
              children: (0, w.BX)(y.View, {
                className: "train-booking-night-book-banner",
                children: [
                  (0, w.BX)(y.View, {
                    className: "head",
                    children: [
                      (0, w.tZ)(y.View, {
                        className: "ticketDesc",
                        children: I,
                      }),
                      (0, w.tZ)(y.View, {
                        className: "desc",
                        children: (0, w.tZ)(ia.ZtRichText, {
                          space: "nbsp",
                          nodes: K.Z.convertAppTextToHtmlStr(k),
                        }),
                      }),
                    ],
                  }),
                  (0, w.BX)(y.View, {
                    className: "content",
                    children: [
                      (0, w.tZ)(y.Text, { className: "left", children: D }),
                      (0, w.BX)(y.View, {
                        className: "right",
                        children: [
                          (0, w.tZ)(y.Text, {
                            className: "price-tag ".concat(
                              (n || o) && S ? "free" : ""
                            ),
                            children: x,
                          }),
                          (0, w.tZ)(y.Text, {
                            className: "".concat(
                              (n || o) && S
                                ? "night-member-checkboxed"
                                : S && s
                                ? "night-checkboxed"
                                : "night-checkbox"
                            ),
                            id: "AKBI",
                            onClick: b,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            });
          };
          var ni,
            ai = function (e) {
              var t = e.visible,
                n = e.memberShipBagInfo,
                a = void 0 === n ? {} : n,
                i = e.toggleMemberShipSwitch,
                r = e.buyMemberShip,
                o = void 0 !== r && r,
                c = e.useMemberShip,
                l = void 0 !== c && c,
                s = e.buyMemberSeasonCard,
                d = void 0 !== s && s,
                u = e.toggleUseMemberShipRadio,
                p = e.onShowDrawer,
                m = e.isChooseSeatOnlineButtonVisible,
                h = e.SeatName,
                g = e.ubtTrace;
              (0, f.useEffect)(
                function () {
                  var e;
                  g("TZWBuyBook_Member_exposure", {
                    PageId: P.default.isTieyou ? "10320660965" : "10320660961",
                    product:
                      (null == a ||
                      null === (e = a.xMemberBagInfo) ||
                      void 0 === e
                        ? void 0
                        : e.titlePrefix) || "",
                    Type: m ? "GDC" : "KTZ",
                    seatScmType: h,
                    position: 1,
                  });
                },
                [t]
              );
              var S = a.openMemberBagInfo,
                v = a.sleepNightEntity,
                b = a.pkResult;
              if (!t) return (0, w.tZ)(y.View, {});
              if (v && 1 !== b) {
                var T = v.amount,
                  Z = v.icon,
                  N = v.subTitle,
                  M = v.tag,
                  C = v.title;
                return (0, w.tZ)(y.Block, {
                  children: (0, w.BX)(y.View, {
                    className: "train-booking-membership-card",
                    children: [
                      (0, w.BX)(y.View, {
                        className: "head",
                        children: [
                          (0, w.tZ)(y.Image, {
                            className: "head-icon",
                            src: Z,
                          }),
                          (0, w.tZ)(y.RichText, {
                            className: "title",
                            nodes: K.Z.convertAppTextToHtmlStr(C),
                            space: "nbsp",
                          }),
                        ],
                      }),
                      (0, w.BX)(y.View, {
                        className: "subtitle",
                        children: [
                          N,
                          M &&
                            (0, w.tZ)(y.Text, {
                              className: "tag",
                              children: M,
                            }),
                        ],
                      }),
                      T > 0 &&
                        (0, w.BX)(y.View, {
                          className: "membership-radio-box",
                          id: "AKBE",
                          onClick: u,
                          children: [
                            (0, w.BX)(y.View, {
                              className: "membership-radio",
                              children: [
                                (0, w.tZ)(y.Text, {
                                  className: "".concat(
                                    l ? "ifont-radioed" : "ifont-radio",
                                    " iconfont"
                                  ),
                                }),
                                (0, w.tZ)(y.Text, {
                                  className: "radio-txt",
                                  children: "权益生效",
                                }),
                              ],
                            }),
                            (0, w.tZ)(y.View, {
                              className: "amount-desc",
                              children: "(剩余".concat(T, "次)"),
                            }),
                          ],
                        }),
                    ],
                  }),
                });
              }
              if (!S) return (0, w.tZ)(y.View, {});
              var I = S.xPageVipBooking,
                k = (void 0 === I ? {} : I).vipInfo,
                D = void 0 === k ? {} : k,
                x = D.priceTag,
                B = D.sendVipDesc,
                V = void 0 === B ? [] : B,
                A = D.newTitle,
                _ = D.sendVipImage,
                R = void 0 === _ ? "" : _;
              return V.length > 0
                ? (0, w.tZ)(y.Block, {
                    children: (0, w.BX)(y.View, {
                      className: "train-booking-new-membership-card",
                      children: [
                        (0, w.tZ)(y.View, {
                          className: "left",
                          children: (0, w.tZ)(y.Image, {
                            className: "icon",
                            src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/V10.0/txy/icon_ktbj@3x.webp",
                            webp: !0,
                          }),
                        }),
                        (0, w.BX)(y.View, {
                          className: "middle",
                          children: [
                            (0, w.tZ)(y.View, {
                              className: "title",
                              children: (0, w.tZ)(ia.ZtRichText, {
                                space: "nbsp",
                                nodes: A,
                              }),
                            }),
                            (0, w.BX)(y.View, {
                              className: "desc",
                              id: "AKBF",
                              onClick: p,
                              children: [
                                (0, w.tZ)(y.Image, {
                                  mode: "heightFix",
                                  className: "icon-box-img",
                                  src: R,
                                  webp: !0,
                                }),
                                V &&
                                  V.map(function (e, t) {
                                    return (0,
                                    w.BX)(w.HY, { children: [(0, w.tZ)(y.Text, { children: e }), t !== V.length - 1 && (0, w.tZ)(y.Text, { className: "split-line" })] });
                                  }),
                                (0, w.tZ)(y.Text, {
                                  className: "ifont-arr iconfont",
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, w.BX)(y.View, {
                          className: "right",
                          children: [
                            (0, w.tZ)(y.Text, { children: x }),
                            !d &&
                              (0, w.tZ)(y.Image, {
                                className: "right-select-button",
                                src: o
                                  ? "https://images3.c-ctrip.com/ztrip/train.song/order_details/V10.0/txy/btn_hyyx@3x.webp"
                                  : "https://images3.c-ctrip.com/ztrip/train_xie/2022-06/icon_dx_wx.png",
                                id: "AKBG",
                                onClick: i,
                                webp: !0,
                              }),
                          ],
                        }),
                      ],
                    }),
                  })
                : (0, w.tZ)(y.View, {});
            },
            ii = (0, h.$j)(
              function (e) {
                var t = e.specialCardModel;
                return {
                  checked: t.checked,
                  rightList: t.cardRights,
                  displayCard: t.displayCard,
                };
              },
              function () {
                return {};
              }
            )(function (e) {
              var t,
                n,
                a,
                i,
                r,
                o,
                c,
                l = e.checked,
                s = e.rightList,
                d = e.displayCard;
              if (
                ((0, f.useEffect)(
                  function () {
                    d &&
                      (function () {
                        var e,
                          t = ve.getState();
                        ve.ubtTrace("TZWBuyBook_BenefitCard_exposure", {
                          PageId: ve.getPage().pageId,
                          Type: t.trainModel.isGDC ? "GDC" : "KTZ",
                          product: t.specialCardModel.displayCardText,
                          position: 1,
                          seatScmType:
                            null === (e = t.trainModel.trainInfo) ||
                            void 0 === e
                              ? void 0
                              : e.SeatName,
                        });
                      })();
                  },
                  [d]
                ),
                !d)
              )
                return null;
              var u = "card-".concat(d.cardType),
                p = !l,
                m =
                  null === (t = d.cardBanner) || void 0 === t
                    ? void 0
                    : t.bottomDesc,
                h = p
                  ? null === (n = d.cardBanner) || void 0 === n
                    ? void 0
                    : n.closeBackImage
                  : null === (a = d.cardBanner) || void 0 === a
                  ? void 0
                  : a.openBackImage;
              return (0, w.tZ)(y.View, {
                className: "trn-special-card-module ".concat(u),
                style: { backgroundImage: h ? "url(".concat(h, ")") : "" },
                children: (0, w.BX)(y.View, {
                  className: "card-module",
                  children: [
                    (0, w.BX)(y.View, {
                      className: "flex flex-center header-content",
                      children: [
                        (0, w.BX)(y.View, {
                          className: "flex flex-center flex-1",
                          children: [
                            (null === (i = d.cardBanner) || void 0 === i
                              ? void 0
                              : i.icon) &&
                              (0, w.tZ)(y.Image, {
                                src:
                                  null === (r = d.cardBanner) || void 0 === r
                                    ? void 0
                                    : r.icon,
                                className: "icon",
                              }),
                            (0, w.tZ)(ia.ZtRichText, {
                              className: " flex-1 txt-content",
                              nodes:
                                (null === (o = d.cardBanner) || void 0 === o
                                  ? void 0
                                  : o.title) || "",
                            }),
                          ],
                        }),
                        (0, w.tZ)(y.View, {
                          className: "left",
                          children:
                            s.filter(function (e) {
                              return !e.disable;
                            }).length >= 1
                              ? (0, w.BX)(w.HY, {
                                  children: [
                                    (0, w.tZ)(y.Text, {
                                      className: "free-text",
                                      children:
                                        null === (c = d.cardBanner) ||
                                        void 0 === c
                                          ? void 0
                                          : c.useDesc,
                                    }),
                                    (0, w.tZ)(pa.Z, {
                                      className: "use-radio",
                                      checked: l,
                                      onClick: function () {
                                        (function () {
                                          var e,
                                            t = ve.getState();
                                          ve.ubtTrace(
                                            "TZWBuyBook_BenefitCard_click",
                                            {
                                              PageId: ve.getPage().pageId,
                                              Type: t.trainModel.isGDC
                                                ? "GDC"
                                                : "KTZ",
                                              product:
                                                t.specialCardModel
                                                  .displayCardText,
                                              position: 1,
                                              seatScmType:
                                                null ===
                                                  (e =
                                                    t.trainModel.trainInfo) ||
                                                void 0 === e
                                                  ? void 0
                                                  : e.SeatName,
                                            }
                                          );
                                        })(),
                                          ht(!l);
                                      },
                                    }),
                                  ],
                                })
                              : (0, w.BX)(w.HY, {
                                  children: [
                                    (0, w.tZ)(y.Text, {
                                      className: "free-text",
                                      style: { marginRight: 0 },
                                      onClick: gt,
                                      children: "使用条件",
                                    }),
                                    (0, w.tZ)(y.Text, {
                                      className:
                                        "btn-condition iconfont2 ifont2-arr",
                                    }),
                                  ],
                                }),
                        }),
                      ],
                    }),
                    !p &&
                      s.length > 0 &&
                      (0, w.BX)(y.View, {
                        className: "fold-content",
                        children: [
                          (0, w.tZ)(y.View, {
                            className: "right-list",
                            children: s.map(function (e, t) {
                              return (0,
                              w.BX)(y.View, { className: "flex flex-center right-item ".concat(e.disable ? "disabled" : ""), children: [(0, w.BX)(y.View, { className: "flex-1 flex flex-center left-content", children: [e.icon && (0, w.tZ)(y.Image, { className: "right-icon", src: e.icon }), (0, w.tZ)(y.View, { className: "right-text", children: e.text }), (0, w.tZ)(y.View, { className: "tag", children: e.tag })] }), (0, w.tZ)(y.View, { className: "rv", children: "function" == typeof e.rightView ? e.rightView() : e.rightView })] }, t);
                            }),
                          }),
                          m &&
                            (0, w.BX)(w.HY, {
                              children: [
                                (0, w.tZ)(y.View, { className: "dashed" }),
                                (0, w.tZ)(y.View, {
                                  className: "btm-desc",
                                  children: m,
                                }),
                              ],
                            }),
                        ],
                      }),
                  ],
                }),
              });
            }),
            ri = function (e) {
              var t = e.saleDate;
              if (!e.isPreSecKill) return null;
              return (0, w.BX)(y.View, {
                className:
                  "flex flex-column flex-center trn-booking-secskill-banner",
                children: [
                  (0, w.BX)(y.View, {
                    className: "tit",
                    children: [
                      (0, w.tZ)(y.Text, {
                        className: "pre-text",
                        children: "距开售秒杀仅剩",
                      }),
                      (0, w.tZ)(ia.ZtCountdown, {
                        className: "sec-kill-count-down",
                        isShowHour: !1,
                        format: { minute: ":", second: "" },
                        endTime: H()(t).format("YYYY-MM-DD HH:mm:ss"),
                        onTimeup: function () {
                          ve.getPage()._isStartSecKill ||
                            (0, B.showToast)("秒杀已结束"),
                            Wn((0, S.getCurrentInstance)().router.params);
                        },
                      }),
                    ],
                  }),
                  (0, w.tZ)(y.View, {
                    className: "desc",
                    children: "开售前，需将出行信息填写完整且快速提交",
                  }),
                ],
              });
            },
            oi = (0, h.$j)(
              function (e) {
                var t,
                  n,
                  a,
                  i,
                  r = e.trainModel,
                  o = e.passengerModel,
                  c = e.my12306Model,
                  l = e.configModel,
                  s = e.memberSaledModel,
                  d = e.nightBookingModel,
                  u = e.pointBookingModel,
                  p = e.reschduleModel,
                  m = e.crossProModel,
                  f = e.secSkillModel;
                return {
                  seatPrice:
                    null === (t = r.trainInfo) || void 0 === t
                      ? void 0
                      : t.Price,
                  isWorkTime: !(
                    null === (n = l.train12306Config) ||
                    void 0 === n ||
                    !n.isWorkTime
                  ),
                  logedin: c.logedin,
                  train: r.trainInfo,
                  pasLen:
                    (null === (a = o.allPas) || void 0 === a
                      ? void 0
                      : a.length) || 0,
                  selectTrainInfo: r.selectTrainInfo,
                  hasSelectedPas:
                    (null === (i = o.allPas) || void 0 === i
                      ? void 0
                      : i.length) > 0,
                  nightBookInfo: s.nightBookMemberInfo,
                  buyMemberShip: s.buyMemberShip,
                  useMemberShip: s.useMemberShip,
                  memberShipBagInfo: s.memberShipBagInfo,
                  nightEledeliveryInfo: d.nightEledeliveryInfo,
                  selectNightEleDelivery: d.selectNightEleDelivery,
                  isShowMemberShipCard:
                    s.memberShipCardVisible && !p.isReschduleMode,
                  isPointPayMode: u.isPointPayMode,
                  isBindMemberSaled: s.isBindMemberSaled,
                  isChooseSeatOnlineButtonVisible:
                    l.isChooseSeatOnlineButtonVisible,
                  isShowNightBookBanner:
                    s.nightBookMemberInfo || d.nightEledeliveryInfo,
                  isReschduleMode: p.isReschduleMode,
                  hotelTagCashBackJson: m.hotelTagCashBackJson,
                  isPreSecKill: f.isPreSecKill,
                };
              },
              function (e) {
                return {
                  onSeleckNight:
                    e.nightBookingModel.updateSelectNightEleDelivery,
                };
              }
            )(function (e) {
              var t = e.seatPrice,
                n = e.isWorkTime,
                a = e.logedin,
                i = e.train,
                r = e.selectTrainInfo,
                o = e.pasLen,
                c = e.hasSelectedPas,
                l = e.nightBookInfo,
                s = e.nightEledeliveryInfo,
                d = e.buyMemberShip,
                u = e.useMemberShip,
                p = e.selectNightEleDelivery,
                m = e.memberShipBagInfo,
                f = e.onSeleckNight,
                h = e.isShowMemberShipCard,
                g = e.isBindMemberSaled,
                S = e.isChooseSeatOnlineButtonVisible,
                v = e.isShowNightBookBanner,
                b = e.isReschduleMode,
                T = e.isPointPayMode,
                Z = e.hotelTagCashBackJson,
                N = e.isPreSecKill,
                M = !(N || b || T);
              return (0, w.BX)(y.Block, {
                children: [
                  (0, w.tZ)(ca, {}),
                  (0, w.tZ)(ri, {
                    isPreSecKill: N,
                    saleDate: null == i ? void 0 : i._saleDate,
                  }),
                  !b &&
                    n &&
                    !a &&
                    (0, w.tZ)(Sa, {
                      onLogin: Yn,
                      isCanPointsPay: !!i.IsCanPointsPay,
                    }),
                  (0, w.tZ)(Ja, { strideInfo: r }),
                  M &&
                    !T &&
                    c &&
                    h &&
                    (0, w.tZ)(ai, {
                      visible: !0,
                      memberShipBagInfo: m,
                      buyMemberShip: d,
                      buyMemberSeasonCard: g,
                      toggleMemberShipSwitch: Ae,
                      toggleUseMemberShipRadio: _e,
                      useMemberShip: u,
                      onShowDrawer: function () {
                        return $n(D.SeasonMemberShipDrawer);
                      },
                      isChooseSeatOnlineButtonVisible: S,
                      SeatName: i.SeatName,
                      ubtTrace: ve.ubtTrace,
                    }),
                  (0, w.tZ)(Na, {}),
                  (0, w.tZ)(ii, { cardType: Y.ParentChildCard }),
                  N &&
                    (0, w.tZ)(oa.Z, {
                      ref: function (e) {
                        ve.getPage().$TrainSeletor = e;
                      },
                      isShowPreChosenList: !0,
                      mainTrain: i,
                      handleCheck12306Auth: On,
                      className: "trn-booking-sec-skill-selector",
                    }),
                  c &&
                    M &&
                    (0, w.BX)(w.HY, {
                      children: [
                        S && (0, w.tZ)(Ya, {}),
                        (0, w.tZ)(ga, {}),
                        v &&
                          (0, w.tZ)(ti, {
                            nightBookInfo: l,
                            nightEledeliveryInfo: s,
                            buyMemberShip: d,
                            useMemberShip: u,
                            isNightChoose: p,
                            selectNightEleDelivery: p,
                            memberShipBagInfo: m,
                            onSeleckNight: function (e) {
                              ve.ubtTrace("TZWBuyBook_NightSer_click", {
                                PageId: ve.getPage().pageId,
                                clickType: e ? 1 : 0,
                              }),
                                f(e);
                            },
                            canChooseNiget: yt,
                            showNightCanNotModal: Nt,
                            ubtTrace: ve.ubtTrace,
                          }),
                      ],
                    }),
                  !b &&
                    (0, w.BX)(w.HY, {
                      children: [
                        (0, w.tZ)(la, {
                          children: (0, w.tZ)(sa, {
                            name: "通知手机",
                            icon: "ifont2-tongxunlu_linea_20",
                            iconSize: 20,
                            children: (0, w.tZ)(y.Input, {
                              placeholder: "输入联系人手机号",
                              placeholderClass: "placeholder",
                              ref: function (e) {
                                return (ve.getPage().$TableRef.tel = e);
                              },
                              cursorSpacing: 50,
                            }),
                          }),
                        }),
                        !N &&
                          c &&
                          (0, w.BX)(la, {
                            children: [
                              (0, w.BX)(sa, {
                                name: "票价明细",
                                children: [
                                  (0, w.tZ)(ra.Z, {}),
                                  T ? 0 : t,
                                  "x",
                                  o,
                                ],
                              }),
                              Z &&
                                (0, w.tZ)(sa, {
                                  name: Z.title,
                                  icon: "ifont2-arr",
                                  id: "AKAd",
                                  onClick: function () {
                                    ve.ubtTrace(
                                      "TZWBuyBook_PriceModule_Hotel_click",
                                      {
                                        PageId: P.default.isTieyou
                                          ? "10320660965"
                                          : "10320660961",
                                        ActivityType: Z.content,
                                      }
                                    ),
                                      $n(D.HotelCrossRulePop);
                                  },
                                  children: (0, w.tZ)(ia.ZtRichText, {
                                    nodes: Z.content,
                                  }),
                                }),
                            ],
                          }),
                      ],
                    }),
                  (0, w.tZ)(ei, {}),
                  (0, w.tZ)(Wa, {}),
                ],
              });
            }),
            ci =
              (0, g.h)(!1, { usePageWrapper: !0 })(
                (ni = (function (e) {
                  (0, p.Z)(n, e);
                  var t = (0, m.Z)(n);
                  function n(e) {
                    var a;
                    return (
                      (0, s.Z)(this, n),
                      ((a = t.call(this, e)).store = ve.create(
                        (0, u.Z)(a)
                      ).store),
                      (a.pageRootClassName = "train-booking-v2"),
                      (a.$TableRef = {}),
                      (a.pageId = P.default.isTieyou
                        ? "10320660965"
                        : "10320660961"),
                      a
                    );
                  }
                  return (
                    (0, d.Z)(n, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          var e = (0, S.getCurrentInstance)().router.params;
                          Wn(e),
                            (this.active12306Event = S.eventCenter.on(
                              b.n.ACTIVE_12306_MEMBER_STATUS,
                              Ue
                            )),
                            (this.editPsgEvent = S.eventCenter.on(
                              b.n.EDIT_PASSENGER,
                              dt
                            )),
                            (this.login12306Event = S.eventCenter.on(
                              b.n.LOGIN_12306_SUCCESS,
                              function () {
                                ve.getDispatch().my12306Model.refresh(), Ue();
                              }
                            )),
                            (this.t6AccountIsLostEffectEvent = S.eventCenter.on(
                              b.n.T6_PWD_IS_LOSE_EFFECT,
                              function () {
                                (0, B.showToast)("缓存已过期，请重新登录12306"),
                                  ve.getDispatch().my12306Model.refresh(),
                                  Ue();
                              }
                            )),
                            V.ET.isClearT6Pwd &&
                              !ve.getState().my12306Model.logedin &&
                              ((V.ET.isClearT6Pwd = !1),
                              ve.showMultiButtonDialog({
                                content: "您的账号缓存已过期，请重新登录12306",
                                leftButtonName: "知道了",
                                rightButtonName: "重新登录",
                                onRightButtonClick: Yn,
                              }));
                        },
                      },
                      {
                        key: "componentWillUnmount",
                        value: function () {
                          ve.getState().reschduleModel.isReschduleMode ||
                            (ta(), ea()),
                            this.active12306Event.off(),
                            this.editPsgEvent.off(),
                            this.login12306Event.off(),
                            this.t6AccountIsLostEffectEvent.off();
                        },
                      },
                      {
                        key: "componentDidShow",
                        value: function () {
                          ve.getDispatch().my12306Model.refresh();
                        },
                      },
                      {
                        key: "onShareAppMessage",
                        value: function (e) {
                          return aa(e);
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          return (0, w.BX)(h.zt, {
                            store: this.store,
                            children: [
                              (0, w.tZ)(oi, {}),
                              (0, w.tZ)(I, {}),
                              (0, w.tZ)(T.Z, {}),
                            ],
                          });
                        },
                      },
                    ]),
                    n
                  );
                })(f.default.Component))
              ) || ni;
          (ci.enableShareAppMessage = !0),
            Page(
              (0, l.createPageConfig)(
                ci,
                "pages/train/booking/booking",
                { root: { cn: [] } },
                {
                  navigationBarTitleText: "预定",
                  navigationBarBackgroundColor: "#0066E6",
                  backgroundColorTop: "#F5F5F5",
                  backgroundColorBottom: "#F5F5F5",
                  navigationStyle: "custom",
                } || {}
              )
            );
        },
      },
      function (e) {
        e.O(
          0,
          [
            98655, 3322, 36332, 95854, 31162, 77, 61094, 30120, 26450, 8905,
            34335, 37513, 71341, 55525, 25323, 80391, 72407, 55076, 59337,
            24903, 36188, 12213, 48139, 17604, 92387, 24696, 39618, 64540,
            50914, 67377, 87799, 86837, 4334, 80673, 57714, 96422, 88540, 37354,
            75092, 45542, 29487, 71838, 26968, 90186, 55317, 19559, 11216,
            68592,
          ],
          function () {
            return (function (t) {
              return e((e.s = t));
            })(70157);
          }
        ),
          e.O();
      },
    ]);
})();
