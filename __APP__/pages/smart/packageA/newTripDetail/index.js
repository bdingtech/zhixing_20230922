!(function () {
  "use strict";
  require("../sub-vendors.js"),
    require("../sub-common/1affc4a679af4ad334128041573c09c6.js"),
    require("../sub-common/fecc9c60875b710a8101d0d50626beef.js"),
    require("../sub-common/99e1f8a4cc1290fc72ce9bc5d2852868.js"),
    require("../sub-common/2eae4dfc35be5d14dfc1dc2d3e80f01e.js"),
    require("../sub-common/5de1d16dbb0559dc875a17959f3a651a.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [12835],
      {
        99388: function (e, t, i) {
          var n = i(32180),
            a = i(57042),
            o = i(24460),
            r = i(81876),
            c = i(21867),
            s = i(86066),
            l = i(52500),
            d = i(92954),
            u = i.n(d),
            f = i(81957),
            m = i(65573),
            p = i(71515),
            h = i(79792),
            v = i(49120),
            g = i(45023),
            w = i(41991),
            N = i(298),
            T = {
              state: {
                tripInfo: null,
                epidmicInfo: null,
                trafficGuideInfo: {},
              },
              reducers: {
                setTripInfo: function (e, t) {
                  return (0, N.Z)((0, N.Z)({}, e), {}, { tripInfo: t });
                },
                setEpidmicInfo: function (e, t) {
                  return (0, N.Z)((0, N.Z)({}, e), {}, { epidmicInfo: t });
                },
                setTrafficGuideInfo: function (e, t) {
                  return (0, N.Z)((0, N.Z)({}, e), {}, { trafficGuideInfo: t });
                },
              },
            },
            S = {
              state: {
                isCombine: !1,
                tripSeats: [],
                selectSeats: [],
                busBookNoticeInfo: null,
                scenicBusBookNoticeInfo: null,
                seatTips: [],
                isSeatChanged: !1,
              },
              reducers: {
                setIsCombine: function (e, t) {
                  return (0, N.Z)((0, N.Z)({}, e), {}, { isCombine: t });
                },
                setTripSeats: function (e, t) {
                  return (0, N.Z)((0, N.Z)({}, e), {}, { tripSeats: t });
                },
                setSelectSeats: function (e, t) {
                  return (0, N.Z)((0, N.Z)({}, e), {}, { selectSeats: t });
                },
                setSeatTips: function (e, t) {
                  return (0, N.Z)((0, N.Z)({}, e), {}, { seatTips: t });
                },
                setSeatChanged: function (e, t) {
                  return (0, N.Z)((0, N.Z)({}, e), {}, { isSeatChanged: t });
                },
              },
            },
            Z = {
              state: {
                productList: [],
                selectedProduct: null,
                isShowMemberPop: !1,
                memberPopInfo: null,
                unionVipCode: "",
                rescheduleTripData: null,
              },
              reducers: {
                setProductList: function (e, t) {
                  return (0, N.Z)((0, N.Z)({}, e), {}, { productList: t });
                },
                setSelectedProduct: function (e, t) {
                  return (0, N.Z)((0, N.Z)({}, e), {}, { selectedProduct: t });
                },
                setState: function (e, t) {
                  return (0, N.Z)((0, N.Z)({}, e), t);
                },
                setRescheduleTripData: function (e, t) {
                  return (0, N.Z)(
                    (0, N.Z)({}, e),
                    {},
                    { rescheduleTripData: t }
                  );
                },
              },
            },
            b = {
              state: { isLoaded: !1 },
              reducers: {
                setIsLoaded: function (e, t) {
                  return (0, N.Z)((0, N.Z)({}, e), {}, { isLoaded: t });
                },
              },
            },
            I = (function (e) {
              (0, c.Z)(i, e);
              var t = (0, s.Z)(i);
              function i() {
                return (0, a.Z)(this, i), t.apply(this, arguments);
              }
              return (0, o.Z)(i);
            })(w.Z);
          (0, g.Z)(I, "store", {
            models: {
              tripModel: T,
              seatModel: S,
              productModel: Z,
              pageModel: b,
            },
          });
          var C,
            V = i(74921),
            x = i(79301),
            y = i(95308),
            k = i(74867),
            _ = i(38911),
            B = i(25391),
            M = i(38561),
            P = i(3205);
          !(function (e) {
            (e.NOTICE = "noticeDrawer"),
              (e.FlightRefundRule = "FlightRefundRuleDrawer"),
              (e.BusRefundRule = "BusRefundRuleDrawer"),
              (e.ShipRefundRule = "ShipRefundRuleDrawer"),
              (e.CombineSeatIntroduction = "CombineSeatIntroductionDialog"),
              (e.RobTripTip = "RobTripTipDialog"),
              (e.TrafficGuidePop = "TrafficGuidePop");
          })(C || (C = {}));
          var D;
          !(function (e) {
            (e[(e.SEAT_CLICK = 0)] = "SEAT_CLICK"),
              (e[(e.PRODUCT_CLICK = 1)] = "PRODUCT_CLICK"),
              (e[(e.PRODUCT_EXPOSURE = 2)] = "PRODUCT_EXPOSURE");
          })(D || (D = {}));
          var L,
            X,
            R = i(13025),
            E = (function () {
              var e = (0, y.Z)(
                (0, x.Z)().mark(function e(t) {
                  var i, n, a;
                  return (0, x.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (i = F(t)),
                              I.getPage().isReschedule &&
                                (i.fromPage = "rescheduleTrainList"),
                              (e.next = 6),
                              (0, _.AM)(i)
                            );
                          case 6:
                            1 === (n = e.sent).resultCode &&
                              ((null === (a = n.tripDetailProductInfoList) ||
                              void 0 === a
                                ? void 0
                                : a.length) > 0 &&
                                I.getDispatch().productModel.setProductList(
                                  n.tripDetailProductInfoList
                                ),
                              n.rescheduleSmartTripInfo &&
                                I.getDispatch().productModel.setRescheduleTripData(
                                  n.rescheduleSmartTripInfo
                                ),
                              I.getState().seatModel.isSeatChanged &&
                                ($(D.SEAT_CLICK),
                                I.getDispatch().seatModel.setSeatChanged(!1))),
                              (e.next = 13);
                            break;
                          case 10:
                            (e.prev = 10),
                              (e.t0 = e.catch(0)),
                              console.log(e.t0);
                          case 13:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 10]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            F = function (e) {
              var t = I.getState().tripModel.tripInfo,
                i = I.getState().seatModel.selectSeats;
              return {
                tripInfoList: e.map(function (e, t) {
                  var n = (0, M.MW)(e),
                    a = n.seats.map(function (e) {
                      return {
                        seatName: e.seatName,
                        price: e.price,
                        ticketLeft: e.ticketLeft,
                        seatCode: e.ztCode,
                      };
                    }),
                    o = i[t] || {};
                  return {
                    tripType: e.tripType,
                    trainGrab: 0 === o.ticketLeft,
                    combinationSeatsNum: 0,
                    startTime: n.startTime,
                    startDate: n.startDate,
                    arriveTime: n.arriveTime,
                    arriveDate: n.arriveDate,
                    number: n.trainNo,
                    seatName: o.seatName || "",
                    tripSeatInfo: a,
                    ticketPrice: o.price,
                    tripIndex: t,
                    fromStation: n.fromStation,
                    fromCity: "",
                    fromStationCode: n.fromCode,
                    toStation: n.toStation,
                    toCity: "",
                    toStationCode: n.toCode,
                    onlyShowFlag: !1,
                    tripSeatType: 0,
                    jlTicket: n.jlTicket,
                  };
                }),
                tripId: t.tripId,
                totalMinutes: t.totalMinutes,
                cardType: t.cardType,
                dayDiff: t.dayDiff,
                toAreaId: t.toAreaId,
                fromAreaId: t.fromAreaId,
                transferInfoList: t.transferInfo,
              };
            },
            A = function () {
              I.getDispatch().productModel.setState({
                isShowMemberPop: !1,
                memberPopInfo: null,
                selectedProduct: null,
              });
            },
            z = function (e) {
              var t = [];
              e.forEach(function (e, i) {
                t.push(j(e, i));
              }),
                I.getDispatch().seatModel.setTripSeats(t),
                K();
            },
            j = function (e, t) {
              var i = (0, M.MW)(e),
                n = i.seats;
              if (
                (("B" !== e.tripType && "SC" !== e.tripType) ||
                  (n = [
                    {
                      seatName: "有座",
                      ticketLeft: i.ticketLeft,
                      price: i.minPrice,
                    },
                  ]),
                n.forEach(function (t) {
                  t.disabled = "F" !== e.tripType && 0 === t.ticketLeft;
                }),
                "S" === e.tripType &&
                  (n = n.filter(function (e) {
                    return e.ticketLeft > 0;
                  })),
                !n.some(function (e) {
                  return e.isSelected;
                }))
              ) {
                var a = I.getPage().defaultSeatNameList[t] || i.seatName,
                  o = n.findIndex(function (e) {
                    return e.seatName === a;
                  });
                -1 === o && (o = 0), (n[o].isSelected = !0);
                var r = I.getState().seatModel.selectSeats;
                (r[t] = n[o]), I.getDispatch().seatModel.setSelectSeats(r);
              }
              return {
                orderDesc: (0, M.gb)(t),
                tripType: e.tripType,
                typeName: (0, M.ur)(e.tripType, (0, M.Kn)(e)),
                jlTicket: i.jlTicket,
                seatList: (0, M.I8)(n),
              };
            },
            W = function (e) {
              var t = e.selected,
                i = e.order,
                n = e.seatIndex,
                a = e.isNeedGetProduct,
                o = void 0 !== a && a;
              if (!t) {
                var r = I.getState().seatModel,
                  c = r.tripSeats,
                  s = r.selectSeats,
                  l = c.slice(),
                  d = (0, M.I8)(l[i]);
                if (
                  (d.seatList.forEach(function (e, t) {
                    return (e.isSelected = n === t);
                  }),
                  (l[i] = d),
                  I.getDispatch().seatModel.setTripSeats(l),
                  (s[i] = d.seatList[n]),
                  I.getDispatch().seatModel.setSelectSeats(s),
                  K(),
                  o)
                ) {
                  var u,
                    f,
                    m =
                      null === (u = I.getState().tripModel) ||
                      void 0 === u ||
                      null === (f = u.tripInfo) ||
                      void 0 === f
                        ? void 0
                        : f.details;
                  E(m);
                }
              }
            },
            O = function (e) {
              var t = e.currentTarget.dataset,
                i = t.type,
                n = t.order,
                a = t.seat_index;
              switch (i) {
                case "T":
                  G();
                  break;
                case "F":
                  H(n, a);
                  break;
                case "S":
                  q(n, a);
                  break;
                case "B":
                  Q(n);
                  break;
                case "SC":
                  U(n);
              }
            },
            G = function () {
              var e = h.default.isTieyou ? "tieyou" : "suanya",
                t = "https://m.".concat(
                  e,
                  ".com/webapp/train/activity/ztrip-train-buy-ticket-rule?isHideNavBar=YES&type=refund"
                );
              P.Z.twebview({ data: { url: t } });
            },
            H = function (e, t) {
              var i = I.getState().tripModel.tripInfo.details,
                n = (0, M.MW)(i[e]);
              if (n && n.flightProducts) {
                var a = n.flightProducts[t].info;
                ye({ toast: { toastCode: C.FlightRefundRule, data: a } });
              }
            },
            Q = function (e) {
              var t = I.getState().tripModel.tripInfo,
                i = (null == t ? void 0 : t.details) || [],
                n = I.getState().seatModel.busBookNoticeInfo;
              (0, M.Qr)(n)
                ? Y({ shiftInfo: (0, M.MW)(i[e]), productLine: 1 }).then(
                    function (e) {
                      ye({ toast: { toastCode: C.BusRefundRule, data: e } });
                    }
                  )
                : ye({ toast: { toastCode: C.BusRefundRule, data: n } });
            },
            U = function (e) {
              var t = I.getState().tripModel.tripInfo,
                i = (null == t ? void 0 : t.details) || [],
                n = I.getState().seatModel.scenicBusBookNoticeInfo;
              (0, M.Qr)(n)
                ? Y({ shiftInfo: (0, M.MW)(i[e]), productLine: 3 }).then(
                    function (e) {
                      ye({ toast: { toastCode: C.BusRefundRule, data: e } });
                    }
                  )
                : ye({ toast: { toastCode: C.BusRefundRule, data: n } });
            },
            Y = function (e) {
              var t = e.shiftInfo,
                i = e.productLine;
              return new Promise(function (e) {
                var n = {
                  productLine: i,
                  busNumber: t.busNumber,
                  fromCity: t.fromCode,
                  fromStation: t.fromStation,
                  fromDate: t.startDate,
                  fromTime: t.startTime,
                  toCity: t.toCode,
                  toStation: t.toStation,
                  fullPrice: t.minPrice,
                  symbol: t.symbol,
                };
                (0, v.showLoading)("查询中"),
                  (0, _.oV)(n)
                    .then(function (t) {
                      if (((0, v.hideLoading)(), 1 !== t.code || !t.data))
                        return (0, v.showToast)(
                          "获取退改详情失败，请稍后重试~"
                        );
                      var i = [];
                      t.data.forEach(function (e) {
                        i.push(e.tag);
                      });
                      var n = { bookModalTabList: i };
                      t.data.length > 2
                        ? ((n.modelInfo = t.data[0].bookNotes[0]),
                          (n.mealInfo = t.data[0].bookNotes[1]),
                          (n.checkInfo = t.data[1].bookNotes[0]),
                          (n.retreatInfo = t.data[2].bookNotes[0]))
                        : ((n.orderInfo = t.data[0].bookNotes[0]),
                          (n.checkInfo = t.data[0].bookNotes[1]),
                          (n.wipeInfo = t.data[0].bookNotes[2]),
                          (n.retreatInfo = t.data[1].bookNotes)),
                        e(n);
                    })
                    .catch(function (e) {
                      (0, v.hideLoading)(),
                        console.log("获取汽车退改err", e),
                        (0, v.showToast)("获取退改详情失败，请稍后重试~");
                    });
              });
            },
            q = function (e, t) {
              var i = I.getState().tripModel.tripInfo,
                n = (null == i ? void 0 : i.details) || [],
                a = (0, M.MW)(n[e]),
                o = a.seats[t],
                r = {
                  fromCityName: a.fromCode,
                  fromStationName: a.fromStation,
                  fromDate: a.startDate,
                  fromTime: a.startTime,
                  toCityName: a.toCode,
                  toStationName: a.toStation,
                  shipName: a.shipName,
                  vendor: a.vendor,
                  seatName: o.seatName,
                  seatPrice: o.price,
                  fromPage: "smartx",
                };
              (0, v.showLoading)("查询中..."),
                (0, _.s9)(r)
                  .then(function (e) {
                    if (
                      ((0, v.hideLoading)(), 1 !== e.code || (0, M.Qr)(e.data))
                    )
                      return (0, v.showToast)(
                        "获取船退改详情失败，请稍后重试~"
                      );
                    e.data.instructionsDesc &&
                      ye({
                        toast: {
                          toastCode: C.ShipRefundRule,
                          data: e.data.instructionsDesc,
                        },
                      });
                  })
                  .catch(function (e) {
                    (0, v.hideLoading)(),
                      console.log("err", e),
                      (0, v.showToast)("获取船退改详情失败，请稍后重试~");
                  });
            },
            K = function () {
              var e,
                t,
                i =
                  null === (e = I.getState().seatModel) || void 0 === e
                    ? void 0
                    : e.tripSeats,
                n =
                  null === (t = I.getState().seatModel) || void 0 === t
                    ? void 0
                    : t.selectSeats,
                a = [];
              (null == n
                ? void 0
                : n.some(function (e, t) {
                    var n;
                    return (
                      (null == i || null === (n = i[t]) || void 0 === n
                        ? void 0
                        : n.jlTicket) && 0 === e.ticketLeft
                    );
                  })) &&
                a.push("预约票提示：车票暂未开售，系统将在开售后自动下单"),
                (null == n
                  ? void 0
                  : n.some(function (e, t) {
                      var n;
                      return (
                        !(
                          null != i &&
                          null !== (n = i[t]) &&
                          void 0 !== n &&
                          n.jlTicket
                        ) && 0 === e.ticketLeft
                      );
                    })) &&
                  a.push("抢票提示：所选坐席无余票，支付成功后自动开启抢票");
              var o =
                null == n
                  ? void 0
                  : n.filter(function (e) {
                      return e.ticketLeft > 0 && e.ticketLeft < 10;
                    });
              if ((null == o ? void 0 : o.length) > 0) {
                var r = 0;
                o.forEach(function (e) {
                  e.ticketLeft > r && (r = e.ticketLeft);
                });
                var c =
                  1 === r
                    ? "余票紧张：所选座席预计30秒后售罄，建议尽快下单"
                    : "余票紧张：所选座席预计".concat(
                        Math.round(0.5 * r),
                        "分钟后售罄，建议尽快下单"
                      );
                a.push(c);
              }
              I.getDispatch().seatModel.setSeatTips(a);
            },
            $ = function (e) {
              var t = [],
                i = I.getState().productModel.productList,
                n = "";
              switch (e) {
                case D.SEAT_CLICK:
                  (n = "TZWsmartX_Quote_Quote_Seat_click"),
                    null == i ||
                      i.forEach(function (e, i) {
                        t.push({
                          position: i + 1,
                          price: (null == e ? void 0 : e.tripPrice) || null,
                          product: (null == e ? void 0 : e.productCode) || null,
                        });
                      });
                  break;
                case D.PRODUCT_EXPOSURE:
                  (n = "TZWsmartX_Quote_Quote_exposure"),
                    null == i ||
                      i.forEach(function (e, i) {
                        t.push({
                          position: i + 1,
                          price: (null == e ? void 0 : e.tripPrice) || null,
                          product: (null == e ? void 0 : e.productCode) || null,
                        });
                      });
                  break;
                case D.PRODUCT_CLICK:
                  n = "TZWsmartX_Quote_Quote_Order_click";
                  var a = I.getState().productModel.selectedProduct,
                    o = {
                      position: (null == a ? void 0 : a.positionIdx) || null,
                      price: (null == a ? void 0 : a.tripPrice) || null,
                      product: (null == a ? void 0 : a.productCode) || null,
                    };
                  t.push(o);
              }
              var r = I.getState().seatModel.tripSeats,
                c = [],
                s = "";
              null == r ||
                r.forEach(function (e, t) {
                  var i;
                  (s += e.tripType),
                    null == e ||
                      null === (i = e.seatList) ||
                      void 0 === i ||
                      i.forEach(function (e) {
                        c.push({
                          amount: e.ticketLeft,
                          isSelected: e.isSelected || null,
                          price: e.price,
                          seatsName: e.seatName,
                          seq: t + 1,
                        });
                      });
                });
              var l = I.getState().seatModel.selectSeats,
                d = [];
              null == l ||
                l.forEach(function (e) {
                  0 === (null == e ? void 0 : e.ticketLeft) && d.push(e);
                });
              var u = "bb";
              d.length === (null == l ? void 0 : l.length)
                ? (u = "gg")
                : d.length > 0 && (u = "bg");
              var f = {
                PageId: I.getPage().pageId,
                TripType: u,
                CardType: s || null,
                seatsInfoListAll: { seatsInfo: c },
                combine: t.length > 0 ? t : null,
              };
              I.ubtTrace(n, f);
            },
            J = i(98221),
            ee = (function () {
              var e = (0, y.Z)(
                (0, x.Z)().mark(function e() {
                  var t,
                    i,
                    n,
                    a,
                    o,
                    r,
                    c,
                    s,
                    l,
                    d,
                    f,
                    m,
                    p,
                    h,
                    g,
                    w,
                    N,
                    T,
                    S,
                    Z,
                    b,
                    C,
                    V,
                    y,
                    k,
                    B,
                    M,
                    P,
                    D,
                    L,
                    X,
                    R,
                    E;
                  return (0, x.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (n = I.getPage().schemeInfoV1),
                              (e.next = 4),
                              (0, _.sC)({ schemeInfoV1: n })
                            );
                          case 4:
                            if (
                              1 !== (a = e.sent).resultCode ||
                              !(
                                (null !== (t = a.trip) &&
                                  void 0 !== t &&
                                  t.subTrain) ||
                                (null !== (i = a.trip) &&
                                  void 0 !== i &&
                                  i.transfer)
                              )
                            ) {
                              e.next = 17;
                              break;
                            }
                            if (
                              ((null === (o = a.trip) ||
                              void 0 === o ||
                              null === (r = o.epidemicRemind) ||
                              void 0 === r ||
                              null === (c = r.noticeRemindInfoList) ||
                              void 0 === c
                                ? void 0
                                : c.length) > 0 &&
                                ((d = a.trip.epidemicRemind),
                                (f = d.title),
                                (m = d.noticeRemindInfoList),
                                (p = {
                                  entrancePopup: { title: f, btn: "我知道了" },
                                  isShow: !1,
                                  entranceDrawerTips: m.map(function (e) {
                                    return {
                                      title: e.epidemicTitle,
                                      content: e.content,
                                    };
                                  }),
                                }),
                                I.getDispatch().tripModel.setEpidmicInfo(p)),
                              "SubTrain" !=
                                (null === (s = a.trip) || void 0 === s
                                  ? void 0
                                  : s.tripType))
                            ) {
                              e.next = 13;
                              break;
                            }
                            return (
                              (g =
                                (null == a ||
                                null === (h = a.trip) ||
                                void 0 === h
                                  ? void 0
                                  : h.subTrain) || {}),
                              (w = g.subTrains),
                              (N = g.totalMinutes),
                              (T = g.totalPrice),
                              (S = g.transferInfo),
                              (Z = g.originFromStation),
                              (b = g.originToStation),
                              (C = g.tripType),
                              (V = g.originArriveTime),
                              (y = void 0 === V ? "" : V),
                              (k = g.originStartTime),
                              (B = void 0 === k ? "" : k),
                              (M = g.originFromStationCode),
                              (P = void 0 === M ? "" : M),
                              (D = g.originToStationCode),
                              (L = void 0 === D ? "" : D),
                              (X = g.tripId),
                              (R = w.map(function (e) {
                                return { tripType: "T", train: e };
                              })),
                              (E = {
                                details: R,
                                totalMinutes: N,
                                totalPrice: T,
                                transferInfo: S,
                                originFromStation: Z,
                                originToStation: b,
                                subTrainTripType: C,
                                originArriveTime: y,
                                originStartTime: B,
                                originFromStationCode: P,
                                originToStationCode: L,
                                tripId: X,
                              }),
                              I.getDispatch().seatModel.setIsCombine({
                                isCombine: !0,
                              }),
                              e.abrupt("return", E)
                            );
                          case 13:
                            if (
                              "Transfer" !=
                              (null === (l = a.trip) || void 0 === l
                                ? void 0
                                : l.tripType)
                            ) {
                              e.next = 15;
                              break;
                            }
                            return e.abrupt("return", a.trip.transfer);
                          case 15:
                            e.next = 18;
                            break;
                          case 17:
                            u().showModal({
                              title: "温馨提示",
                              content: "行程方案已过期，请返回重新刷新一下吧～",
                              success: function () {
                                I.navigateBack();
                              },
                            });
                          case 18:
                            e.next = 24;
                            break;
                          case 20:
                            (e.prev = 20),
                              (e.t0 = e.catch(0)),
                              console.log(e.t0),
                              (0, v.showModal)({
                                title: "温馨提示",
                                content: "网络异常，请刷新重试~",
                              });
                          case 24:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 20]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            te = (function () {
              var e = (0, y.Z)(
                (0, x.Z)().mark(function e() {
                  var t, i;
                  return (0, x.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (t = I.getPage().schemeId),
                              (e.prev = 1),
                              (e.next = 4),
                              (0, _.$l)({ schemeIds: [t] })
                            );
                          case 4:
                            return (
                              (1 === (i = e.sent).resultCode &&
                                i.trips &&
                                0 !== i.trips.length) ||
                                u().showModal({
                                  title: "温馨提示",
                                  content:
                                    "行程方案已过期，请返回重新刷新一下吧～",
                                  success: function () {
                                    I.navigateBack();
                                  },
                                }),
                              e.abrupt("return", i.trips[0])
                            );
                          case 9:
                            (e.prev = 9),
                              (e.t0 = e.catch(1)),
                              console.log(e.t0),
                              (0, v.showModal)({
                                title: "温馨提示",
                                content: "网络异常，请刷新重试~",
                              });
                          case 13:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[1, 9]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            ie = (function () {
              var e = (0, y.Z)(
                (0, x.Z)().mark(function e() {
                  var t, i;
                  return (0, x.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ((t = I.getPage().schemeInfoV1), (i = null), !t)
                          ) {
                            e.next = 8;
                            break;
                          }
                          return (e.next = 5), ee();
                        case 5:
                          (i = e.sent), (e.next = 11);
                          break;
                        case 8:
                          return (e.next = 10), te();
                        case 10:
                          i = e.sent;
                        case 11:
                          return e.abrupt("return", i);
                        case 12:
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
            ne = function (e) {
              var t = I.getPage().searchParams;
              (0, M.Qr)(t) && ae(e),
                I.getDispatch().tripModel.setTripInfo(e),
                (I.getPage().isSingleShift = 1 === e.details.length);
            },
            ae = function (e) {
              I.getPage().searchParams = {
                fromAreaId: e.fromAreaId,
                fromGeoPoint: e.fromGeoPoint,
                fromLocation: e.fromLocation,
                fromStationType: e.fromStationType,
                toAreaId: e.toAreaId,
                toGeoPoint: e.toGeoPoint,
                toLocation: e.toLocation,
                toStationType: e.toStationType,
                departDate: (0, M.MW)(e.details && e.details[0]).startDate,
              };
            },
            oe = function (e, t) {
              t.forEach(function (t, i) {
                if (!(0, M.gd)(e, i) && !t.distance && !t.optimalMinutes) {
                  var n = e[i].tripType,
                    a = (0, M.MW)(e[i]),
                    o =
                      "F" == n
                        ? a.toCode
                        : "SC" == n
                        ? a.toAreaId
                        : a.toStation,
                    r = e[i + 1].tripType,
                    c = (0, M.MW)(e[i + 1]),
                    s = {
                      fromLocation: o || "",
                      fromStationType: n || "",
                      toLocation:
                        ("F" == r
                          ? c.fromCode
                          : "SC" == r
                          ? c.fromAreaId
                          : c.fromStation) || "",
                      toStationType: r || "",
                    };
                  (0, _.gR)(s).then(function (e) {
                    var n = e.areaTraffic;
                    if (1 == e.resultCode && !(0, M.Qr)(n)) {
                      var a,
                        o = I.getState().tripModel.tripInfo,
                        r =
                          null == o ||
                          null === (a = o.transferInfo) ||
                          void 0 === a
                            ? void 0
                            : a.slice();
                      (r[i] = (0, N.Z)(
                        (0, N.Z)({}, t),
                        {},
                        {
                          distance: n.distance,
                          optimalMinutes: n.optimalMinutes,
                          useHourMinutes: (0, M.zE)(n.optimalMinutes),
                        }
                      )),
                        (o.transferInfo = r),
                        I.getDispatch().tripModel.setTripInfo(o);
                    }
                  });
                }
              });
            },
            re = (function () {
              var e = (0, y.Z)(
                (0, x.Z)().mark(function e(t) {
                  return (0, x.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return e.abrupt(
                            "return",
                            new Promise(function (e, i) {
                              var n = [];
                              t.forEach(function (e, t) {
                                if ("F" === e.tripType) {
                                  var i = (0, M.MW)(e);
                                  n.push(ce(i, t));
                                }
                              }),
                                Promise.all(n)
                                  .then(function (i) {
                                    var n = (0, M.I8)(t);
                                    i.forEach(function (e) {
                                      var t = e.flight,
                                        i = e.order;
                                      n[i].flight = t;
                                    });
                                    var a = I.getState().tripModel.tripInfo;
                                    (a.details = n),
                                      I.getDispatch().tripModel.setTripInfo(a),
                                      z(n),
                                      e(n);
                                  })
                                  .catch(function (e) {
                                    (0, v.showModal)(
                                      e.message ||
                                        "获取航班舱位信息失败，请稍后重试~"
                                    ),
                                      i(e);
                                  });
                            })
                          );
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
            })(),
            ce = function (e, t) {
              return new Promise(function (i, n) {
                var a = {
                  isRoundTrip: !1,
                  version: 9,
                  business: !1,
                  segments: [
                    {
                      dptDate: e.startDate,
                      dptCode: e.departCityCode,
                      arrCode: e.arriveCityCode,
                      flightNo: e.flightNo,
                    },
                  ],
                  hasChild: !1,
                  source: 32,
                  student: !1,
                  cacheUsage: 0,
                  token: "",
                  queryHigherClass: !1,
                  hasBaby: !1,
                };
                (0, _.rY)({ data: a })
                  .then(function (a) {
                    if (
                      (console.log("获取航班信息", a),
                      1 !== a.resultCode || (0, M.Qr)(a.data))
                    )
                      return n({ message: a.resultMessage });
                    var o = a.data,
                      r = (0, M.I8)(e),
                      c = o.products;
                    r.flightProducts = c;
                    var s = [];
                    c.forEach(function (e, i) {
                      var n = {
                        isSelected: 0 === i,
                        seatName: (e.notes && e.notes[0]) || e.cabin,
                        originSeatName: e.cabin,
                        price: e.apr,
                        ticketLeft: e.btnTag,
                        ageTag: e.lpt,
                      };
                      if ((s.push(n), 0 === i)) {
                        var a = I.getState().seatModel.selectSeats;
                        (a[t] = n),
                          I.getDispatch().seatModel.setSelectSeats(a),
                          e.lpt &&
                            !I.getPage().hasToastFlightAgeSeat &&
                            ((I.getPage().hasToastFlightAgeSeat = !0),
                            setTimeout(function () {
                              (0,
                              v.showToast)("第".concat(t + 1, "程[").concat(e.lpt, "]座席仅适用于部分年龄段"));
                            }, 0));
                      }
                    }),
                      (r.seats = s);
                    var l =
                      (o.segments &&
                        o.segments.length &&
                        o.segments[0].flights) ||
                      [];
                    l.length > 0 &&
                      ((r.airIcon = l[0].airIcon),
                      (r.mealType = l[0].mealType),
                      (r.planeType = l[0].planeType),
                      (r.punctuality = l[0].punctuality)),
                      i({ flight: r, order: t });
                  })
                  .catch(function (e) {
                    console.warn("获取航班信息error", e),
                      n({ message: "网络异常，请稍后重试~" });
                  });
              });
            },
            se = (function () {
              var e = (0, y.Z)(
                (0, x.Z)().mark(function e(t) {
                  var i;
                  return (0, x.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.prev = 0), (e.next = 3), (0, M.qL)(t);
                          case 3:
                            if (
                              ((i = e.sent), console.log("newTicketInfo", i), i)
                            ) {
                              e.next = 7;
                              break;
                            }
                            return e.abrupt("return", t);
                          case 7:
                            return (
                              t.forEach(function (e) {
                                if ("T" == e.tripType) {
                                  var t = (0, M.MW)(e),
                                    n =
                                      i[
                                        ""
                                          .concat(t.trainNo, "|")
                                          .concat(t.fromStation, "|")
                                          .concat(t.toStation)
                                      ] || [];
                                  t.seats.forEach(function (e) {
                                    var t = n.find(function (t) {
                                      return t.seatName === e.seatName;
                                    });
                                    t && t.ticketLeft
                                      ? (e.ticketLeft = parseInt(t.ticketLeft))
                                      : (e.ticketLeft = 0);
                                  });
                                }
                              }),
                              z(t),
                              e.abrupt("return", t)
                            );
                          case 12:
                            return (
                              (e.prev = 12),
                              (e.t0 = e.catch(0)),
                              console.log(e.t0),
                              e.abrupt("return", t)
                            );
                          case 16:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 12]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            le = function () {
              var e, t, i, n;
              I.ubtTrace("185869"), Te("232570"), de();
              var a =
                  null === (e = I.getState().tripModel) ||
                  void 0 === e ||
                  null === (t = e.tripInfo) ||
                  void 0 === t
                    ? void 0
                    : t.details,
                o =
                  null === (i = I.getState().seatModel) || void 0 === i
                    ? void 0
                    : i.tripSeats;
              if (
                (null === (n = I.getState().pageModel) || void 0 === n
                  ? void 0
                  : n.isLoaded) &&
                a.length
              ) {
                var r = (0, M.VL)(a),
                  c = Date.now() - I.getPage().pageStartTime >= 6e5;
                if (r && c)
                  return u().showModal({
                    content: "当前页面停留时间过久，请返回重新刷新看看吧～",
                    success: function () {
                      I.navigateBack();
                    },
                  });
                for (var s = 0; s < a.length; s++) {
                  var l = a[s].tripType;
                  if ("T" == l)
                    if (
                      !o[s].seatList.some(function (e) {
                        return e.isSelected;
                      })
                    )
                      return (0, v.showToast)(
                        "第".concat(s + 1, "程火车未选择坐席")
                      );
                  if ("S" == l) {
                    if (
                      !o[s].seatList.some(function (e) {
                        return e.isSelected;
                      })
                    )
                      return (0, v.showToast)(
                        "第".concat(s + 1, "程船未选择坐席")
                      );
                    if (
                      !o[s].seatList.some(function (e) {
                        return e.ticketLeft > 0;
                      })
                    )
                      return (0, v.showToast)(
                        "第".concat(s + 1, "程船无可选坐席，建议选择其他方案")
                      );
                  }
                }
                for (var d = 0; d < a.length; d++) {
                  var f = a[d],
                    m = (0, M.MW)(f);
                  if ("T" === f.tripType) {
                    var p = m.selectSeat && m.selectSeat.ticketLeft;
                    if (!p || p <= 0) {
                      I.ubtTrace("185870");
                      var h = m.jlTicket;
                      return void ye({
                        toast: {
                          toastCode: C.RobTripTip,
                          data: { isJlTicket: h },
                        },
                        onConfirm: function () {
                          ue();
                        },
                      });
                    }
                  }
                }
                ue();
              }
            },
            de = (function () {
              var e = (0, y.Z)(
                (0, x.Z)().mark(function e() {
                  var t, i, n, a, o;
                  return (0, x.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          (n =
                            null === (t = I.getState().tripModel) ||
                            void 0 === t
                              ? void 0
                              : t.tripInfo),
                            (a = I.getState().seatModel.selectSeats),
                            (o = I.getState().seatModel.isCombine),
                            null == n ||
                              null === (i = n.details) ||
                              void 0 === i ||
                              i.forEach(function (e, t) {
                                var i = a[t];
                                o && (i.isCombinedSeat = !0),
                                  ((0, M.MW)(e).selectSeat = a[t]);
                              }),
                            I.getDispatch().tripModel.setTripInfo(n);
                        case 5:
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
            ue = function () {
              var e,
                t,
                i =
                  null === (e = I.getState().tripModel) ||
                  void 0 === e ||
                  null === (t = e.tripInfo) ||
                  void 0 === t
                    ? void 0
                    : t.details,
                n = I.getState().seatModel.tripSeats,
                a = [];
              if (
                (i.forEach(function (e, t) {
                  var i = e.tripType,
                    o = (0, M.MW)(e);
                  if ("F" == i) {
                    var r = n[t].seatList.findIndex(function (e) {
                        return e.isSelected;
                      }),
                      c = o.flightProducts[r].token;
                    a.push(ve(c, t));
                  }
                  ["B", "S", "SC"].includes(i) && a.push(me(i, o, t));
                }),
                0 === a.length)
              )
                return fe();
              (0, v.showLoading)("校验中..."),
                Promise.all(a)
                  .then(function (e) {
                    (0, v.hideLoading)(),
                      console.log("下一步校验成功", e),
                      e.forEach(function (e) {
                        if (!(0, M.Qr)(e)) {
                          var t = e.fromIndex;
                          delete e.fromIndex;
                          var n = (0, M.MW)(i[t]);
                          "F" === i[t].tripType &&
                            (n.noticeContent = e.flightDetail.noticeContent),
                            Object.assign(n, e);
                        }
                      }),
                      fe();
                  })
                  .catch(function (e) {
                    (0, v.hideLoading)(),
                      3 === e.code
                        ? ((0, v.showModal)(e.message), re(i))
                        : (0, v.showToast)(e.message);
                  });
            },
            fe = function () {
              var e = I.getState().tripModel.tripInfo,
                t = I.getState().seatModel.isCombine,
                i = e.dayDiff,
                n = e.details,
                a = e.transferInfo,
                o = e.fromNearByFlag,
                r = e.toNearByFlag,
                c = e.tripId,
                s = e.fromStationInfo,
                l = e.toStationInfo,
                d = e.subTrainTripType,
                u = e.originFromStation,
                f = void 0 === u ? "" : u,
                m = e.originToStation,
                p = void 0 === m ? "" : m,
                h = e.originArriveTime,
                v = void 0 === h ? "" : h,
                g = e.originStartTime,
                w = void 0 === g ? "" : g,
                T = e.originFromStationCode,
                S = void 0 === T ? "" : T,
                Z = e.originToStationCode,
                b = void 0 === Z ? "" : Z,
                C = e.totalMinutes,
                V = I.getState().productModel.selectedProduct,
                x = {};
              if (
                V &&
                ((x = {
                  productCode: V.productCode,
                  productName: V.productName,
                  productPrice: V.productPrice,
                  lineExtraData: V.lineExtraData,
                  complexExtraData: V.complexExtraData,
                  outstandingRightCode: V.outstandingRightCode,
                  treasureInfo: V.treasureInfo,
                }),
                V.productCode === J.V_)
              ) {
                var y,
                  k,
                  _ =
                    (null === (y = I.getState().productModel) || void 0 === y
                      ? void 0
                      : y.unionVipCode) || "";
                x.vipCardInfo = (0, N.Z)(
                  (0, N.Z)({}, V.vipCardInfo),
                  {},
                  {
                    unionVipCode:
                      _ ||
                      (null === (k = V.vipCardInfo) || void 0 === k
                        ? void 0
                        : k.unionVipCode),
                  }
                );
              }
              I.navigateTo({
                url: "/pages/smart/packageA/booking/index",
                data: (0, N.Z)(
                  (0, N.Z)(
                    {
                      isCombine: t,
                      dayDiff: i,
                      details: n,
                      transferInfo: a,
                      fromNearByFlag: o,
                      toNearByFlag: r,
                      tripId: c,
                      fromStationInfo: s,
                      toStationInfo: l,
                      orderSource: I.getPage().orderSource,
                      schemeInfoV1: I.getPage().schemeInfoV1,
                      subTrainTripType: d,
                      originFromStationInfo: {
                        originFromStation: f,
                        originStartTime: w,
                        originFromStationCode: S,
                      },
                      originToStationInfo: {
                        originToStation: p,
                        originArriveTime: v,
                        originToStationCode: b,
                      },
                    },
                    I.getPage().searchParams
                  ),
                  {},
                  { totalMinutes: C, selectedProduct: x }
                ),
              });
            },
            me = function (e, t, i) {
              switch (e) {
                case "S":
                  return he(t, i);
                case "B":
                  return pe(t, i, 1);
                case "SC":
                  return pe(t, i, 3);
              }
            },
            pe = function (e, t, i) {
              return new Promise(function (n, a) {
                var o = {
                  productLine: i,
                  busNumber: e.busNumber,
                  fromCity: e.fromCode,
                  fromStation: e.fromStation,
                  fromDate: e.startDate,
                  fromTime: e.startTime,
                  toCity: e.toCode,
                  toStation: e.toStation,
                  symbol: e.symbol,
                  utmsource: "smartTrip",
                };
                (0, _.jn)(o)
                  .then(function (i) {
                    if (
                      (console.log("获取汽车儿童价", i),
                      1 !== i.code || (0, M.Qr)(i.data))
                    )
                      return a({
                        code: 1,
                        message: "第"
                          .concat(t + 1, "程汽车")
                          .concat(i.message || "获取汽车儿童票价失败"),
                      });
                    var o = i.data,
                      r = o.serviceChargeInfo,
                      c = void 0 === r ? {} : r,
                      s = o.buyTicketRule,
                      l = void 0 === s ? {} : s;
                    e.serviceFee = c.price;
                    var d = l.maxSaleTicketNumber,
                      u = l.ticketRuleDesc,
                      f = void 0 === u ? [] : u;
                    e.maxSaleTicketNumber = d;
                    var m =
                      f.find(function (e) {
                        return "儿童票" === e.ticketType && e.isSale;
                      }) || {};
                    (e.childPrice = m.ticketPrice), n({});
                  })
                  .catch(function (e) {
                    console.warn("获取汽车儿童价error", e),
                      a({
                        code: 1,
                        message: e.message || "查询失败，请稍后重试",
                      });
                  });
              });
            },
            he = function (e, t) {
              return new Promise(function (i, n) {
                var a = e.selectSeat;
                (0, _.s9)({
                  fromCityName: e.fromCode,
                  fromStationName: e.fromStation,
                  fromDate: e.startDate,
                  fromTime: e.startTime,
                  toCityName: e.toCode,
                  toStationName: e.toStation,
                  shipName: e.shipName,
                  vendor: e.vendor,
                  seatName: a.seatName,
                  seatPrice: a.price,
                  fromPage: "smartx",
                })
                  .then(function (o) {
                    if (
                      (console.log("获取船票儿童价", o),
                      1 !== o.code || (0, M.Qr)(o.data))
                    )
                      return n({
                        code: 1,
                        message: "第"
                          .concat(t + 1, "程船")
                          .concat(o.message || "获取汽车儿童票价失败"),
                      });
                    var r = o.data,
                      c = r.serviceFee,
                      s = r.maxPassengerCount,
                      l = r.seatInfo,
                      d = void 0 === l ? [] : l,
                      u = r.child,
                      f = void 0 === u ? {} : u;
                    if (
                      ((e.serviceFee = c),
                      (e.maxSaleTicketNumber = s),
                      1 == f.isSupport)
                    ) {
                      var m =
                        d.find(function (e) {
                          return e.seatName == a.seatName;
                        }) || {};
                      e.childPrice = m.seatChildPrice;
                    }
                    i({});
                  })
                  .catch(function (e) {
                    console.warn("获取船票儿童价error", e),
                      n({
                        code: 1,
                        message: e.message || "查询失败，请稍后重试",
                      });
                  });
              });
            },
            ve = function (e, t) {
              return new Promise(function (i, n) {
                var a = { token: e, policyVersion: 6, source: 32 };
                (0, _.q6)({ data: a })
                  .then(function (e) {
                    if (
                      (console.log("飞机校验请求结果", e), 1 !== e.resultCode)
                    )
                      return n({
                        code: 1,
                        message: e.resultMessage || "查询失败，请稍后重试",
                      });
                    if ((0, M.Qr)(e.data))
                      return n({
                        code: 3,
                        message: "第".concat(t + 1, "程行程选中座席已售完"),
                      });
                    var a = e.data,
                      o = a.priceChange && a.priceChange.changeType;
                    if (o > 1) {
                      var r, c;
                      (0, v.showToast)(
                        "请注意，第".concat(t + 1, "程机票价格变动")
                      );
                      var s =
                          null === (r = I.getState().tripModel) ||
                          void 0 === r ||
                          null === (c = r.tripInfo) ||
                          void 0 === c
                            ? void 0
                            : c.details,
                        l = I.getState().seatModel.tripSeats,
                        d = (0, M.MW)(s[t]),
                        u = (0, M.I8)(l),
                        f = u[t].seatList.find(function (e) {
                          return e.isSelected;
                        }),
                        m =
                          2 == o
                            ? a.priceChange.price
                            : f.price - a.priceChange.price;
                      parseFloat(m) > 0 &&
                        ((f.price = parseFloat(m)),
                        I.getDispatch().seatModel.setTripSeats(u),
                        (d.selectSeat = f));
                    }
                    var p = { flightDetail: a, fromIndex: t },
                      h = a.product && a.product.cpr;
                    parseFloat(h) > 0 && (p.childPrice = parseFloat(h)), i(p);
                  })
                  .catch(function (e) {
                    console.warn("机票校验请求error", e),
                      n({
                        code: 1,
                        message: e.message || "查询失败，请稍后重试",
                      });
                  });
              });
            },
            ge = (function () {
              var e = (0, y.Z)(
                (0, x.Z)().mark(function e() {
                  var t,
                    i,
                    n,
                    a = arguments;
                  return (0, x.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ((t = a.length > 0 && void 0 !== a[0] ? a[0] : {}),
                            (i = t.type),
                            (n = void 0 === i ? "start" : i),
                            I.getState().tripModel.trafficGuideInfo[n])
                          ) {
                            e.next = 5;
                            break;
                          }
                          return (e.next = 5), Ne({ type: n });
                        case 5:
                          we({ type: n });
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
            we = function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                t = e.type,
                i = void 0 === t ? "start" : t,
                n = I.getState().tripModel.trafficGuideInfo,
                a = n[i] || {},
                o = a.taxiPrice,
                r = a.distance,
                c = a.optimalTrafficDTO,
                s = a.airExpressTransfer;
              if (!(o || r || c || s)) return (0, v.showToast)("暂无线路数据");
              var l = I.getState().tripModel.tripInfo,
                d = l.fromStationInfo,
                u = l.toStationInfo,
                f = l.fromLocation,
                m = l.toLocation;
              ye({
                toast: {
                  toastCode: C.TrafficGuidePop,
                  data: {
                    trafficGuideInfo: n[i],
                    fromLocation:
                      "start" == i
                        ? f
                        : ""
                            .concat(null == u ? void 0 : u.stationName)
                            .concat(
                              "T" == (null == u ? void 0 : u.stationType)
                                ? "站"
                                : ""
                            ),
                    toLocation:
                      "end" == i
                        ? m
                        : ""
                            .concat(null == d ? void 0 : d.stationName)
                            .concat(
                              "T" == (null == d ? void 0 : d.stationType)
                                ? "站"
                                : ""
                            ),
                  },
                },
              });
            },
            Ne = function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                t = e.type,
                i = void 0 === t ? "start" : t,
                n = I.getPage().searchParams,
                a = n.fromGeoPoint,
                o = n.toGeoPoint,
                r = I.getState().tripModel.tripInfo,
                c = r.fromStationInfo,
                s = r.toStationInfo,
                l = {
                  fromGeoPoint: a,
                  toGeoPoint: null == c ? void 0 : c.geoPoint,
                };
              return (
                "end" === i &&
                  (l = {
                    fromGeoPoint: null == s ? void 0 : s.geoPoint,
                    toGeoPoint: o,
                  }),
                (0, v.showLoading)(),
                (0, _.TQ)(l)
                  .then(function (e) {
                    if (1 === e.resultCode && e.areaTraffic) {
                      var t = I.getState().tripModel.trafficGuideInfo;
                      (t[i] = e.areaTraffic),
                        I.getDispatch().tripModel.setTrafficGuideInfo(t);
                    }
                  })
                  .catch(function (e) {
                    return console.log(e);
                  })
                  .finally(function () {
                    return (0, v.hideLoading)();
                  })
              );
            },
            Te = function (e) {
              var t,
                i,
                n,
                a =
                  null === (t = I.getState().seatModel) || void 0 === t
                    ? void 0
                    : t.tripSeats,
                o =
                  null === (i = I.getState().seatModel) || void 0 === i
                    ? void 0
                    : i.selectSeats,
                r =
                  null == o
                    ? void 0
                    : o.some(function (e) {
                        return 0 === e.ticketLeft;
                      }),
                c =
                  (null === (n = I.getState().productModel) || void 0 === n
                    ? void 0
                    : n.productList) || [],
                s =
                  null == c
                    ? void 0
                    : c.map(function (e, t) {
                        return {
                          position: t + 1,
                          price: (null == e ? void 0 : e.tripPrice) || null,
                          product:
                            (null == e ? void 0 : e.productCode) || "null",
                          isGrab: r ? 1 : 0,
                        };
                      }),
                l = [],
                d = [];
              null == a ||
                a.forEach(function (e, t) {
                  var i;
                  l.push(e.tripType),
                    null == e ||
                      null === (i = e.seatList) ||
                      void 0 === i ||
                      i.forEach(function (e) {
                        e &&
                          d.push({
                            amount: e.ticketLeft,
                            isSelected: !!e.isSelected,
                            price: e.price,
                            seatsName: e.seatName,
                            seq: t + 1,
                          });
                      });
                });
              var u = l.join(","),
                f = "bb",
                m = o.filter(function (e) {
                  return 0 === (null == e ? void 0 : e.ticketLeft);
                });
              m.length > 0 &&
                (f =
                  m.length === (null == o ? void 0 : o.length) ? "gg" : "bg");
              var p = {
                PageId: I.getPage().pageId,
                CardType: u,
                ChannelNum: c.length,
                TripType: f,
                seatsInfoListAll: { seatsInfo: d || [] },
                combineList: s || [],
              };
              I.ubtTrace(e, p);
            },
            Se = (function () {
              var e = (0, y.Z)(
                (0, x.Z)().mark(function e(t, i) {
                  var n, a, o, r, c, s;
                  return (0, x.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (t && i) {
                              e.next = 2;
                              break;
                            }
                            return e.abrupt("return");
                          case 2:
                            return (
                              (n = {
                                stations: [
                                  { stationName: t, transferMinutes: i },
                                ],
                              }),
                              (a = 10),
                              (o = ""),
                              (e.prev = 5),
                              (e.next = 8),
                              (0, _.I7)(n)
                            );
                          case 8:
                            1 ===
                              (null == (c = e.sent) ? void 0 : c.resultCode) &&
                              (null == c ||
                              null === (r = c.stations) ||
                              void 0 === r
                                ? void 0
                                : r.length) > 0 &&
                              ((s = c.stations[0]),
                              (a = s.transferTime),
                              (o = s.jumpUrl)),
                              (e.next = 15);
                            break;
                          case 12:
                            (e.prev = 12),
                              (e.t0 = e.catch(5)),
                              console.log(e.t0);
                          case 15:
                            return e.abrupt("return", {
                              transferTime: a,
                              jumpUrl: o,
                            });
                          case 16:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[5, 12]]
                  );
                })
              );
              return function (t, i) {
                return e.apply(this, arguments);
              };
            })(),
            Ze = (function () {
              var e = (0, y.Z)(
                (0, x.Z)().mark(function e(t) {
                  var i, n, a, o, r, c, s, l, d, u, f, m;
                  return (0, x.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((a = {}),
                              !(
                                (null ==
                                (o =
                                  null === (i = I.getState().tripModel) ||
                                  void 0 === i ||
                                  null === (n = i.tripInfo) ||
                                  void 0 === n
                                    ? void 0
                                    : n.details)
                                  ? void 0
                                  : o.length) > 0
                              ))
                            ) {
                              e.next = 17;
                              break;
                            }
                            if (
                              ((d =
                                null === (r = o[t]) ||
                                void 0 === r ||
                                null === (c = r.train) ||
                                void 0 === c
                                  ? void 0
                                  : c.fromGeography),
                              (u =
                                null === (s = o[t + 1]) ||
                                void 0 === s ||
                                null === (l = s.train) ||
                                void 0 === l
                                  ? void 0
                                  : l.toGeography),
                              !d || !u)
                            ) {
                              e.next = 17;
                              break;
                            }
                            return (
                              (e.prev = 6),
                              (f = { fromGeoPoint: d, toGeoPoint: u }),
                              (e.next = 10),
                              (0, _.TQ)(f)
                            );
                          case 10:
                            1 ===
                              (null == (m = e.sent) ? void 0 : m.resultCode) &&
                              null != m &&
                              m.areaTraffic &&
                              (a = m.areaTraffic),
                              (e.next = 17);
                            break;
                          case 14:
                            (e.prev = 14),
                              (e.t0 = e.catch(6)),
                              console.log(e.t0);
                          case 17:
                            return e.abrupt("return", a);
                          case 18:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[6, 14]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            be = (function () {
              var e = (0, y.Z)(
                (0, x.Z)().mark(function e(t) {
                  var i,
                    n,
                    a,
                    o,
                    r,
                    c,
                    s,
                    l,
                    d,
                    u,
                    f,
                    m,
                    p,
                    h,
                    g,
                    w,
                    N,
                    T,
                    S,
                    Z;
                  return (0, x.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (0, v.showLoading)("查询攻略中..."),
                              (a =
                                null === (i = I.getState().tripModel) ||
                                void 0 === i ||
                                null === (n = i.tripInfo) ||
                                void 0 === n
                                  ? void 0
                                  : n.details),
                              (o = a[t].tripType),
                              (r = (0, M.MW)(a[t])),
                              (c =
                                "F" == o
                                  ? r.toCode
                                  : "SC" == o
                                  ? r.toAreaId
                                  : r.toStation),
                              (s = ""
                                .concat((0, M.MW)(a[t]).arriveDate, " ")
                                .concat((0, M.MW)(a[t]).arriveTime, ":00")),
                              (l = a[t + 1].tripType),
                              (d = (0, M.MW)(a[t + 1])),
                              (u =
                                "F" == l
                                  ? d.fromCode
                                  : "SC" == l
                                  ? d.fromAreaId
                                  : d.fromStation),
                              (f = {
                                fromLocation: c || "",
                                fromStationType: o || "",
                                toLocation: u || "",
                                toStationType: l || "",
                                transferDateTime: s,
                              }),
                              (m = c === u && o === l),
                              (e.next = 14),
                              (0, _.gR)(f)
                            );
                          case 14:
                            if (
                              1 !==
                                (null == (p = e.sent)
                                  ? void 0
                                  : p.resultCode) ||
                              (0, M.Qr)(p.areaTraffic)
                            ) {
                              e.next = 25;
                              break;
                            }
                            if (
                              ((h = p.areaTraffic),
                              (g =
                                (null == h ? void 0 : h.optimalTrafficDTO) ||
                                {}),
                              (w =
                                (null == h ? void 0 : h.airExpressTransfer) ||
                                {}),
                              !(
                                !(0, M.Qr)(g) ||
                                h.taxiMinutes > 0 ||
                                h.taxiPrice > 0
                              ) && (0, M.Qr)(w))
                            ) {
                              e.next = 24;
                              break;
                            }
                            return (
                              (S =
                                null === (N = (0, M.MW)(a[t])) || void 0 === N
                                  ? void 0
                                  : N.toStation),
                              (Z =
                                null === (T = (0, M.MW)(a[t + 1])) ||
                                void 0 === T
                                  ? void 0
                                  : T.fromStation),
                              ye({
                                toast: {
                                  toastCode: C.TrafficGuidePop,
                                  data: {
                                    trafficGuideInfo: h,
                                    fromLocation: S,
                                    toLocation: Z,
                                  },
                                },
                              }),
                              e.abrupt("return")
                            );
                          case 24:
                            return e.abrupt(
                              "return",
                              (0, v.showToast)(
                                m ? "同站换乘，暂无换乘攻略！" : "暂无换乘攻略"
                              )
                            );
                          case 25:
                            (0, v.showToast)("暂无换乘攻略"), (e.next = 32);
                            break;
                          case 28:
                            (e.prev = 28),
                              (e.t0 = e.catch(0)),
                              console.log(e.t0),
                              (0, v.showToast)("网络超时，请稍后再试!");
                          case 32:
                            return (
                              (e.prev = 32), (0, v.hideLoading)(), e.finish(32)
                            );
                          case 35:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 28, 32, 35]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            Ie = ["onConfirm", "onCancel"],
            Ce = (function () {
              var e = (0, y.Z)(
                (0, x.Z)().mark(function e() {
                  var t, i, n, a, o, r, c;
                  return (0, x.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.prev = 0), (e.next = 3), ie();
                          case 3:
                            if (!(t = e.sent)) {
                              e.next = 27;
                              break;
                            }
                            if (
                              ((n = t.details),
                              (a = void 0 === n ? [] : n),
                              (o = t.transferInfo),
                              1 !== (null == a ? void 0 : a.length))
                            ) {
                              e.next = 9;
                              break;
                            }
                            return ke(), e.abrupt("return");
                          case 9:
                            if (
                              (ne(t),
                              xe(),
                              (0, M.VL)(a) || z(a),
                              o && oe(a, o),
                              (r = a),
                              !(0, M.VL)(r))
                            ) {
                              e.next = 18;
                              break;
                            }
                            return (e.next = 17), re(a);
                          case 17:
                            r = e.sent;
                          case 18:
                            if (!(0, M.ti)(r) || h.default.isH5) {
                              e.next = 21;
                              break;
                            }
                            return (e.next = 21), se(r);
                          case 21:
                            if (!(0, M.E5)(r)) {
                              e.next = 24;
                              break;
                            }
                            return (e.next = 24), E(r);
                          case 24:
                            null === (i = I.getDispatch().pageModel) ||
                              void 0 === i ||
                              i.setIsLoaded(!0),
                              Ve(),
                              Te("232465");
                          case 27:
                            e.next = 34;
                            break;
                          case 29:
                            (e.prev = 29),
                              (e.t0 = e.catch(0)),
                              null === (c = I.getDispatch().pageModel) ||
                                void 0 === c ||
                                c.setIsLoaded(!0),
                              console.log(e.t0),
                              k.Z.commonDebugTrace(
                                "init page err: ".concat(e.t0)
                              );
                          case 34:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 29]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            Ve = function () {
              var e = {
                fromSource: I.getPage().fromSource,
                type: I.getPage().isSingleShift ? "single" : "multiple",
              };
              I.ubtTrace("186339", e);
            },
            xe = function () {
              var e = I.getState().tripModel.tripInfo.details || [],
                t = (0, M.MW)(e[0]).fromStation,
                i = (0, M.MW)(e[e.length - 1]).toStation;
              u().setNavigationBarTitle({
                title: "".concat(t, " ⇀ ").concat(i),
              });
            },
            ye = (function () {
              var e = (0, y.Z)(
                (0, x.Z)().mark(function e(t) {
                  var i, n, a;
                  return (0, x.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (i = t.onConfirm),
                            (n = t.onCancel),
                            (a = (0, V.Z)(t, Ie)),
                            e.abrupt(
                              "return",
                              new Promise(function (e) {
                                var t;
                                null === (t = I.getPage().$CommonToast) ||
                                  void 0 === t ||
                                  t.showToast(
                                    (0, N.Z)(
                                      (0, N.Z)({}, a),
                                      {},
                                      {
                                        onConfirm: function () {
                                          for (
                                            var t = arguments.length,
                                              n = new Array(t),
                                              a = 0;
                                            a < t;
                                            a++
                                          )
                                            n[a] = arguments[a];
                                          null == i || i.apply(void 0, n),
                                            e({ code: 1, data: n });
                                        },
                                        onCancel: function () {
                                          for (
                                            var t = arguments.length,
                                              i = new Array(t),
                                              a = 0;
                                            a < t;
                                            a++
                                          )
                                            i[a] = arguments[a];
                                          null == n || n.apply(void 0, i),
                                            e({ code: 0, data: i });
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
            ke = function () {
              var e,
                t,
                i = "/pages/smart/packageA/tripDetail/index?",
                n =
                  null === (e = I.getPage().$instance) ||
                  void 0 === e ||
                  null === (t = e.router) ||
                  void 0 === t
                    ? void 0
                    : t.params;
              null != n &&
                n.schemeId &&
                (i = "".concat(i, "schemeId=").concat(n.schemeId, "&")),
                null != n &&
                  n.schemeInfo &&
                  (i = "".concat(i, "schemeInfo=").concat(n.schemeInfo, "&")),
                null != n &&
                  n.schemeInfoV1 &&
                  (i = ""
                    .concat(i, "schemeInfoV1=")
                    .concat(n.schemeInfoV1, "&")),
                null != n &&
                  n.fromSource &&
                  (i = "".concat(i, "fromSource=").concat(n.fromSource, "&")),
                null != n &&
                  n.orderSource &&
                  (i = "".concat(i, "orderSource=").concat(n.orderSource, "&"));
              var a = { url: i };
              null != n && n.data && (a.data = n.data), I.redirectTo(a);
            },
            _e = i(37451),
            Be = i(48813),
            Me = (0, m.$j)(function (e) {
              var t,
                i = e.tripModel,
                n = e.productModel,
                a = e.pageModel;
              return {
                details:
                  null == i || null === (t = i.tripInfo) || void 0 === t
                    ? void 0
                    : t.details,
                productList: null == n ? void 0 : n.productList,
                rescheduleTripData: null == n ? void 0 : n.rescheduleTripData,
                isLoaded: null == a ? void 0 : a.isLoaded,
              };
            })(function (e) {
              var t = e.details,
                i = void 0 === t ? [] : t,
                n = e.productList,
                a = void 0 === n ? [] : n,
                o = e.rescheduleTripData,
                r = void 0 === o ? null : o,
                c = e.isLoaded;
              return ((0, M.E5)(i) &&
                (0 !== (null == a ? void 0 : a.length) || r)) ||
                !c
                ? (0, Be.tZ)(Be.HY, {})
                : (0, Be.tZ)(p.View, {
                    className: "smart-tripdetail-bottomlayer ".concat(_e.S),
                    children: (0, Be.tZ)(p.Button, {
                      className: "button",
                      id: "ANBP",
                      onClick: le,
                      children: "下一步",
                    }),
                  });
            }),
            Pe = i(90129),
            De = i(24383),
            Le = i(15125),
            Xe = i(33680),
            Re =
              (0, f.h)(!0)(
                (L = (function (e) {
                  (0, c.Z)(i, e);
                  var t = (0, s.Z)(i);
                  function i(e) {
                    return (0, a.Z)(this, i), t.call(this, e);
                  }
                  return (
                    (0, o.Z)(i, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          var e = this.props,
                            t = e.tdWidth,
                            i = e.columnInfo,
                            n = e.rowInfo;
                          this.setState({
                            columnInfo: i,
                            rowInfo: n,
                            tdWidth: t,
                          });
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this.state,
                            t = e.columnInfo,
                            i = e.rowInfo,
                            n = e.tdWidth;
                          return (0, Be.tZ)(p.View, {
                            className: "smart-mini-table",
                            children: (0, Be.BX)(p.View, {
                              className: "zx-table",
                              children: [
                                (0, Be.tZ)(p.View, {
                                  className: "tr thead s-class-header",
                                  children:
                                    null == t
                                      ? void 0
                                      : t.map(function (e, t) {
                                          return (0,
                                          Be.tZ)(p.View, { className: "td", style: "width:".concat(u().pxTransform(n)), children: e }, t);
                                        }),
                                }),
                                (0, Be.tZ)(p.View, {
                                  children:
                                    null == i
                                      ? void 0
                                      : i.map(function (e, t) {
                                          return (0, Be.tZ)(
                                            p.View,
                                            {
                                              className: "tr s-class-row",
                                              children: e.map(function (e, t) {
                                                return (0,
                                                Be.tZ)(p.View, { className: "td", style: "width:".concat(u().pxTransform(n)), children: e }, t);
                                              }),
                                            },
                                            t
                                          );
                                        }),
                                }),
                              ],
                            }),
                          });
                        },
                      },
                    ]),
                    i
                  );
                })(l.default.Component))
              ) || L,
            Ee =
              (0, f.h)(!0)(
                (X = (function (e) {
                  (0, c.Z)(i, e);
                  var t = (0, s.Z)(i);
                  function i(e) {
                    var n;
                    return (
                      (0, a.Z)(this, i),
                      ((n = t.call(this, e)).state = {
                        isTieyou: h.default.isTieyou,
                        rowInfo: [],
                        columnInfo: [],
                        isShow: !1,
                        isShowTab: 1,
                        scrollIntoView: "",
                        retreatDomHeight: 0,
                        section3Height: 0,
                        section4Height: 0,
                        isOtherMode: !1,
                      }),
                      n
                    );
                  }
                  return (
                    (0, o.Z)(i, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          var e = this.props.info,
                            t = e.bookModalTabList,
                            i = void 0 === t ? {} : t,
                            n = e.orderInfo,
                            a = void 0 === n ? {} : n,
                            o = e.checkInfo,
                            r = void 0 === o ? {} : o,
                            c = e.wipeInfo,
                            s = void 0 === c ? {} : c,
                            l = e.retreatInfo,
                            d = void 0 === l ? {} : l,
                            u = e.modelInfo,
                            f = void 0 === u ? {} : u,
                            m = e.mealInfo,
                            p = void 0 === m ? {} : m,
                            h = [],
                            v = [],
                            g = "",
                            w = [],
                            N = "",
                            T = "",
                            S = {},
                            Z = "";
                          if (Object.keys(f).length > 0) {
                            var b = d.noticeContent[0].content;
                            (Z = d.title),
                              this.setState({
                                itemContent: b,
                                isOtherMode: !0,
                              });
                          } else {
                            var I = JSON.parse(
                              d[0].noticeContent[0].content[0]
                            )[1];
                            (g = I.ticketRefundDesc),
                              I.refundRuleModelList.forEach(function (e, t) {
                                if (0 === t)
                                  Object.keys(e).forEach(function (t) {
                                    h.push(e[t]);
                                  });
                                else {
                                  var i = [];
                                  Object.keys(e).forEach(function (t) {
                                    var n = [];
                                    n.push(e.timeDesc),
                                      n.push(e.ruleDesc),
                                      i.push(e[t]);
                                  }),
                                    v.push(i);
                                }
                              }),
                              (N = JSON.parse(
                                r.noticeContent[0].content[0]
                              ).address),
                              (T = JSON.parse(
                                r.noticeContent[0].content[0]
                              ).stationName),
                              console.log("name", T),
                              (w = [
                                {
                                  id: 1,
                                  latitude: (S = JSON.parse(
                                    r.noticeContent[0].content[0]
                                  )).baiduY,
                                  longitude: S.baiduX,
                                  iconPath:
                                    "https://images3.c-ctrip.com/train/wechat/bus/buslogo.png",
                                  width: 20,
                                  height: 20,
                                  callout: {
                                    display: "ALWAYS",
                                    content: T,
                                    borderRadius: 18,
                                    bgColor: "#FFFFFF",
                                    padding: 5,
                                    textAlign: "center",
                                  },
                                },
                              ]),
                              (Z = d[0].title);
                          }
                          this.setState({
                            rowInfo: v,
                            columnInfo: h,
                            bookModalTabList: i,
                            orderInfo: a,
                            checkInfo: r,
                            wipeInfo: s,
                            retreatInfo: d,
                            modelInfo: f,
                            mealInfo: p,
                            mapInfo: S,
                            markers: w,
                            checkAddress: N,
                            checkName: T,
                            ticketRefundDesc: g,
                            retreatTitle: Z,
                          }),
                            this.setState({ isShow: this.props.visible });
                        },
                      },
                      {
                        key: "onClickMask",
                        value: function () {
                          this.props.onClose();
                        },
                      },
                      {
                        key: "onSwitchTab",
                        value: function (e) {
                          var t,
                            i,
                            n = this.state.isOtherMode,
                            a = e.currentTarget.dataset.type;
                          (t = "tab1" === a ? 2 : "tab2" === a ? 3 : 1),
                            (i = n
                              ? "tab0" === a
                                ? "section0"
                                : "tab1" === a
                                ? "section3"
                                : "section4"
                              : "tab0" === a
                              ? "section0"
                              : "section4"),
                            this.setState({ isShowTab: t, scrollIntoView: i });
                        },
                      },
                      {
                        key: "onBookModalScroll",
                        value: function (e) {
                          var t = this,
                            i = e.detail.scrollTop,
                            n = this.state,
                            a = n.retreatDomHeight,
                            o = n.isOtherMode,
                            r = n.section3Height,
                            c = n.section4Height,
                            s = new Date().getTime();
                          if (this._lastScrollTopTime) {
                            if (!(s - this._lastScrollTopTime < 200)) {
                              this._lastScrollTopTime = s;
                              var l = a,
                                d = r,
                                u = c;
                              if (l)
                                o
                                  ? i >= r && i < c
                                    ? this.setState({ isShowTab: 2 })
                                    : i >= c
                                    ? this.setState({ isShowTab: 3 })
                                    : this.setState({ isShowTab: 1 })
                                  : i >= l
                                  ? this.setState({ isShowTab: 2 })
                                  : this.setState({ isShowTab: 1 });
                              else if (o) {
                                var f = [1, 2, 3, 4].map(function (e) {
                                  return t.getHeightPromise(
                                    "#section".concat(e)
                                  );
                                });
                                Promise.all(f).then(function (e) {
                                  for (var n = 0; n < e.length; n++) l += e[n];
                                  (d = l - e[4]),
                                    (u = l),
                                    t.setState({
                                      retreatDomHeight: l,
                                      section3Height: d,
                                      section4Height: u,
                                    }),
                                    i >= r && i < c
                                      ? t.setState({ isShowTab: 2 })
                                      : i >= c
                                      ? t.setState({ isShowTab: 3 })
                                      : t.setState({ isShowTab: 1 });
                                });
                              } else {
                                var m = [1, 2, 3].map(function (e) {
                                  return t.getHeightPromise(
                                    "#section".concat(e)
                                  );
                                });
                                Promise.all(m).then(function (e) {
                                  for (var n = 0; n < e.length; n++) l += e[n];
                                  t.setState({ retreatDomHeight: l }),
                                    i >= l
                                      ? t.setState({ isShowTab: 2 })
                                      : t.setState({ isShowTab: 1 });
                                });
                              }
                            }
                          } else this._lastScrollTopTime = s;
                        },
                      },
                      {
                        key: "getHeightPromise",
                        value: function (e) {
                          return new Promise(function (t, i) {
                            var n = h.default.isH5
                              ? u().createSelectorQuery()
                              : u()
                                  .createSelectorQuery()
                                  .in((0, v.getCurrentPage)());
                            n.select("".concat(e)).boundingClientRect(),
                              n.exec(function (e) {
                                e[0] && e[0].height
                                  ? t(e[0].height)
                                  : i("获取高度失败");
                              });
                          });
                        },
                      },
                      {
                        key: "gotoMapPage",
                        value: function () {
                          var e = this.state,
                            t = e.mapInfo,
                            i = e.checkName,
                            n = e.checkAddress;
                          u().openLocation({
                            latitude: parseFloat(t.baiduY),
                            longitude: parseFloat(t.baiduX),
                            name: i,
                            address: n,
                          });
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this,
                            t = this.state,
                            i = t.isTieyou,
                            n = t.bookModalTabList,
                            a = t.orderInfo,
                            o = t.checkInfo,
                            r = t.wipeInfo,
                            c = t.retreatInfo,
                            s = t.modelInfo,
                            l = t.mealInfo,
                            d = t.rowInfo,
                            u = t.columnInfo,
                            f = t.isShow,
                            m = t.isShowTab,
                            v = t.mapInfo,
                            g = t.scrollIntoView,
                            w = t.markers,
                            N = t.itemContent,
                            T = t.ticketRefundDesc,
                            S = t.retreatTitle,
                            Z = t.isOtherMode;
                          return f
                            ? (0, Be.tZ)(p.View, {
                                className: "smart-bus-refund-pop",
                                children: (0, Be.BX)(p.View, {
                                  className: "".concat(
                                    i ? "ty" : "zx",
                                    " mod-book-modal"
                                  ),
                                  children: [
                                    (0, Be.tZ)(p.View, {
                                      className: "modal-mask ".concat(
                                        f ? "visible" : "hidden"
                                      ),
                                      id: "ANBQ",
                                      onClick: this.onClickMask.bind(this),
                                    }),
                                    (0, Be.BX)(p.View, {
                                      className: "modal-wrapper "
                                        .concat(f ? "visible" : "hidden", " ")
                                        .concat(h.default.isH5 ? "h5" : ""),
                                      children: [
                                        (0, Be.tZ)(p.View, {
                                          className: "tabbar "
                                            .concat(
                                              1 === m
                                                ? "fir"
                                                : 2 === m
                                                ? "sec"
                                                : "thir",
                                              " "
                                            )
                                            .concat(
                                              n.length > 2 ? "adapt" : ""
                                            ),
                                          children: n.map(function (t, i) {
                                            return (0,
                                            Be.tZ)(p.Text, { className: "item", "data-type": "tab".concat(i), id: "ANBR", onClick: e.onSwitchTab.bind(e), children: t }, i);
                                          }),
                                        }),
                                        (0, Be.BX)(p.ScrollView, {
                                          className: "content",
                                          scrollY: !0,
                                          scrollWithAnimation: !0,
                                          scrollIntoView: g,
                                          onScroll:
                                            this.onBookModalScroll.bind(this),
                                          children: [
                                            (0, Be.tZ)(p.View, {
                                              id: "section0",
                                              className: "hid",
                                            }),
                                            a &&
                                              a.noticeContent &&
                                              (0, Be.BX)(p.View, {
                                                id: "section1",
                                                className: "order",
                                                children: [
                                                  (0, Be.tZ)(p.View, {
                                                    className: "desc",
                                                    children: a.title,
                                                  }),
                                                  (0, Be.BX)(p.View, {
                                                    className: "deta",
                                                    children: [
                                                      (0, Be.BX)(p.View, {
                                                        className: "item",
                                                        children: [
                                                          (0, Be.tZ)(p.View, {
                                                            className: "tit",
                                                            children:
                                                              a.noticeContent[0]
                                                                .title,
                                                          }),
                                                          (0, Be.tZ)(p.View, {
                                                            className: "con",
                                                            children:
                                                              a.noticeContent[0].content.join(
                                                                "/"
                                                              ),
                                                          }),
                                                        ],
                                                      }),
                                                      (0, Be.BX)(p.View, {
                                                        className: "item",
                                                        children: [
                                                          (0, Be.tZ)(p.View, {
                                                            className: "tit",
                                                            children:
                                                              a.noticeContent[1]
                                                                .title,
                                                          }),
                                                          (0, Be.tZ)(p.View, {
                                                            className: "con",
                                                            children:
                                                              a.noticeContent[1].content.join(
                                                                "/"
                                                              ),
                                                          }),
                                                        ],
                                                      }),
                                                      (0, Be.BX)(p.View, {
                                                        className: "item",
                                                        children: [
                                                          (0, Be.tZ)(p.View, {
                                                            className: "tit",
                                                            children:
                                                              a.noticeContent[2]
                                                                .title,
                                                          }),
                                                          (0, Be.tZ)(p.View, {
                                                            className: "con",
                                                            children:
                                                              a.noticeContent[2]
                                                                .content,
                                                          }),
                                                        ],
                                                      }),
                                                      (0, Be.BX)(p.View, {
                                                        className: "item",
                                                        children: [
                                                          (0, Be.tZ)(p.View, {
                                                            className: "tit",
                                                            children:
                                                              a.noticeContent[3]
                                                                .title,
                                                          }),
                                                          (0, Be.tZ)(p.View, {
                                                            className: "con",
                                                            children:
                                                              a.noticeContent[3]
                                                                .content,
                                                          }),
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                            s.noticeContent &&
                                              (0, Be.BX)(p.View, {
                                                id: "section1",
                                                className: "model",
                                                children: [
                                                  (0, Be.tZ)(p.View, {
                                                    className: "desc",
                                                    children: s.title,
                                                  }),
                                                  (0, Be.BX)(p.View, {
                                                    className: "deta",
                                                    children: [
                                                      (0, Be.tZ)(p.Swiper, {
                                                        className: "img-cont",
                                                        indicatorDots:
                                                          "".concat(
                                                            s.noticeContent[0]
                                                              .content.length >
                                                              1
                                                          ),
                                                        children:
                                                          s.noticeContent[0].content.map(
                                                            function (e, t) {
                                                              return (0, Be.tZ)(
                                                                p.SwiperItem,
                                                                {
                                                                  className:
                                                                    "img-item",
                                                                  children: (0,
                                                                  Be.tZ)(
                                                                    p.View,
                                                                    {
                                                                      className:
                                                                        "car-img",
                                                                      style:
                                                                        "background: url(".concat(
                                                                          e,
                                                                          ") no-repeat;background-size:contain;height:260rpx;"
                                                                        ),
                                                                    }
                                                                  ),
                                                                },
                                                                t
                                                              );
                                                            }
                                                          ),
                                                      }),
                                                      s.noticeContent.map(
                                                        function (e, t) {
                                                          return (
                                                            0 !== t &&
                                                            (0, Be.tZ)(
                                                              p.View,
                                                              {
                                                                className:
                                                                  "tit",
                                                                children:
                                                                  e.title,
                                                              },
                                                              t
                                                            )
                                                          );
                                                        }
                                                      ),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                            l.noticeContent &&
                                              (0, Be.BX)(p.View, {
                                                id: "section2",
                                                className: "meal",
                                                children: [
                                                  (0, Be.tZ)(p.View, {
                                                    className: "desc",
                                                    children: l.title,
                                                  }),
                                                  (0, Be.tZ)(p.View, {
                                                    className: "deta",
                                                    children: (0, Be.BX)(
                                                      p.View,
                                                      {
                                                        className: "item",
                                                        children: [
                                                          (0, Be.tZ)(p.View, {
                                                            className: "tit",
                                                            children:
                                                              l.noticeContent[0]
                                                                .title,
                                                          }),
                                                          (0, Be.tZ)(p.View, {
                                                            className: "con",
                                                            children:
                                                              l.noticeContent[0]
                                                                .content,
                                                          }),
                                                        ],
                                                      }
                                                    ),
                                                  }),
                                                ],
                                              }),
                                            (0, Be.BX)(p.View, {
                                              id: "".concat(
                                                Z ? "section3" : "section2"
                                              ),
                                              className: "check",
                                              children: [
                                                (0, Be.tZ)(p.View, {
                                                  className: "desc",
                                                  children: o.title,
                                                }),
                                                Z
                                                  ? (0, Be.tZ)(p.View, {
                                                      className: "deta",
                                                      children:
                                                        o.noticeContent.map(
                                                          function (e, t) {
                                                            return (0, Be.BX)(
                                                              p.View,
                                                              {
                                                                className:
                                                                  "item",
                                                                children: [
                                                                  (0, Be.tZ)(
                                                                    p.Text,
                                                                    {
                                                                      className:
                                                                        "tit",
                                                                      children:
                                                                        e.title,
                                                                    }
                                                                  ),
                                                                  (0, Be.tZ)(
                                                                    p.Text,
                                                                    {
                                                                      className:
                                                                        "con",
                                                                      children:
                                                                        e.content,
                                                                    }
                                                                  ),
                                                                ],
                                                              },
                                                              t
                                                            );
                                                          }
                                                        ),
                                                    })
                                                  : v &&
                                                    v.id &&
                                                    (0, Be.BX)(p.Block, {
                                                      children: [
                                                        (0, Be.tZ)(p.Map, {
                                                          className: "map",
                                                          longitude: v.baiduX,
                                                          latitude: v.baiduY,
                                                          scale: 18,
                                                          markers: w,
                                                          showLocation: !0,
                                                          enableScroll: !1,
                                                          enableZoom: !1,
                                                          enableRotate: !1,
                                                          id: "ANBS",
                                                          onClick:
                                                            this.gotoMapPage,
                                                        }),
                                                        (0, Be.tZ)(p.View, {
                                                          className: "deta",
                                                          children:
                                                            o.noticeContent.map(
                                                              function (e, t) {
                                                                return (
                                                                  0 !== t &&
                                                                  (0, Be.BX)(
                                                                    p.View,
                                                                    {
                                                                      className:
                                                                        "item",
                                                                      children:
                                                                        [
                                                                          (0,
                                                                          Be.tZ)(
                                                                            p.Text,
                                                                            {
                                                                              className:
                                                                                "tit",
                                                                              children:
                                                                                e.title,
                                                                            }
                                                                          ),
                                                                          (0,
                                                                          Be.tZ)(
                                                                            p.Text,
                                                                            {
                                                                              className:
                                                                                "con",
                                                                              children:
                                                                                e.content,
                                                                            }
                                                                          ),
                                                                        ],
                                                                    },
                                                                    String(t)
                                                                  )
                                                                );
                                                              }
                                                            ),
                                                        }),
                                                      ],
                                                    }),
                                              ],
                                            }),
                                            r.noticeContent &&
                                              (0, Be.BX)(p.View, {
                                                id: "section3",
                                                className: "wipe",
                                                children: [
                                                  (0, Be.tZ)(p.View, {
                                                    className: "desc",
                                                    children: r.title,
                                                  }),
                                                  (0, Be.tZ)(p.View, {
                                                    className: "deta",
                                                    children:
                                                      r.noticeContent.map(
                                                        function (e, t) {
                                                          return (0, Be.BX)(
                                                            p.View,
                                                            {
                                                              className: "item",
                                                              children: [
                                                                (0, Be.tZ)(
                                                                  p.Text,
                                                                  {
                                                                    className:
                                                                      "tit",
                                                                    children:
                                                                      e.title,
                                                                  }
                                                                ),
                                                                (0, Be.tZ)(
                                                                  p.Text,
                                                                  {
                                                                    className:
                                                                      "con",
                                                                    children:
                                                                      e.content,
                                                                  }
                                                                ),
                                                              ],
                                                            },
                                                            t
                                                          );
                                                        }
                                                      ),
                                                  }),
                                                ],
                                              }),
                                            (0, Be.BX)(p.View, {
                                              id: "section4",
                                              className: "retreat",
                                              children: [
                                                (0, Be.tZ)(p.View, {
                                                  className: "desc",
                                                  children: S,
                                                }),
                                                (0, Be.BX)(p.View, {
                                                  className: "deta",
                                                  children: [
                                                    N && N.length > 1
                                                      ? (0, Be.BX)(p.Block, {
                                                          children: [
                                                            (0, Be.tZ)(p.View, {
                                                              className:
                                                                "tit no-wrap",
                                                              children:
                                                                c
                                                                  .noticeContent[0]
                                                                  .title,
                                                            }),
                                                            N.map(function (
                                                              e,
                                                              t
                                                            ) {
                                                              return (0, Be.tZ)(
                                                                p.View,
                                                                {
                                                                  className:
                                                                    "con",
                                                                  children: e,
                                                                },
                                                                t
                                                              );
                                                            }),
                                                          ],
                                                        })
                                                      : (0, Be.BX)(p.Block, {
                                                          children: [
                                                            (0, Be.tZ)(p.View, {
                                                              className:
                                                                "tit no-wrap",
                                                              children:
                                                                c[0]
                                                                  .noticeContent[0]
                                                                  .title,
                                                            }),
                                                            (0, Be.tZ)(Re, {
                                                              tdWidth: "300",
                                                              columnInfo: u,
                                                              rowInfo: d,
                                                            }),
                                                            (0, Be.tZ)(p.View, {
                                                              className: "lst",
                                                              children: T,
                                                            }),
                                                          ],
                                                        }),
                                                    (0, Be.BX)(p.View, {
                                                      className: "aff",
                                                      children: [
                                                        (0, Be.tZ)(p.View, {
                                                          className:
                                                            "tit no-wrap",
                                                          children:
                                                            c[0]
                                                              .noticeContent[1]
                                                              .title,
                                                        }),
                                                        (0, Be.tZ)(p.View, {
                                                          className: "con",
                                                          children:
                                                            c[0]
                                                              .noticeContent[1]
                                                              .content,
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              })
                            : (0, Be.tZ)(p.View, {});
                        },
                      },
                    ]),
                    i
                  );
                })(l.default.Component))
              ) || X,
            Fe = i(67751),
            Ae = i(34229),
            ze = i(91006),
            je = i.n(ze),
            We = {
              robImg:
                "https://images3.c-ctrip.com/ztrip/train.xin/2022_02/smart/toast_pic_4.webp",
              subRobImg:
                "https://images3.c-ctrip.com/ztrip/train.xin/2022_02/smart/toast_pic_5.webp",
            },
            Oe = {
              robImg:
                "https://images3.c-ctrip.com/ztrip/train.xin/2022_02/smart/toast_pic_4_ty.webp",
              subRobImg:
                "https://images3.c-ctrip.com/ztrip/train.xin/2022_02/smart/toast_pic_5_ty.webp",
            },
            Ge = function (e) {
              var t = e.isShow,
                i = e.isJlTicket,
                n = e.onClose,
                a = e.onConfirm,
                o = e.subTrainTripType,
                r = i ? "「未开售」" : "「需抢票」";
              return (
                "_1_0" === o
                  ? (r = "「上车补票」")
                  : "_1_1_" === o && (r = "「跨站多买」"),
                (0, Be.tZ)(Ae.ZtActivityPop, {
                  show: t,
                  onClose: n,
                  onWrapClose: n,
                  children: (0, Be.BX)(p.View, {
                    className: "smart-tripdetail-robmodal",
                    children: [
                      (0, Be.tZ)(p.Text, {
                        className: "title",
                        children: i ? "预约票提示" : "抢票提示",
                      }),
                      (0, Be.BX)(p.Text, {
                        className: "sub-title",
                        children: [
                          "当前行程包含",
                          (0, Be.tZ)(p.Text, {
                            className: "color-primary",
                            children: r,
                          }),
                          "车票",
                        ],
                      }),
                      (0, Be.BX)(p.Text, {
                        className: "sub-title",
                        children: [
                          "支付成功后系统将自动开启",
                          i ? "预约抢票" : "抢票",
                        ],
                      }),
                      (0, Be.tZ)(p.Image, {
                        className: "icon",
                        src: h.default.isTieyou
                          ? Oe[i ? "subRobImg" : "robImg"]
                          : We[i ? "subRobImg" : "robImg"],
                      }),
                      (0, Be.tZ)(p.Text, {
                        className: "desc",
                        children:
                          "若抢票失败，平台不承担已出票部分的退票手续费",
                      }),
                      (0, Be.BX)(p.View, {
                        className: "flex btn-wrap",
                        children: [
                          (0, Be.tZ)(p.View, {
                            className: "btn cancle",
                            id: "ANBE",
                            onClick: n,
                            children: "我再看看",
                          }),
                          (0, Be.tZ)(p.View, {
                            className: "btn confirm",
                            id: "ANBF",
                            onClick: a,
                            children: "继续预订",
                          }),
                        ],
                      }),
                    ],
                  }),
                })
              );
            };
          (Ge.propTypes = {
            isShow: je().bool,
            isJlTicket: je().bool,
            onClose: je().func,
            onConfirm: je().func,
            subTrainTripType: je().string,
          }),
            (Ge.defaultProps = {
              isShow: !1,
              isJlTicket: !1,
              onClose: function () {},
              onConfirm: function () {},
              subTrainTripType: "",
            });
          var He = (0, l.memo)(Ge),
            Qe = i(80836),
            Ue = void 0,
            Ye = function () {},
            qe = function () {},
            Ke = (0, m.$j)(function (e) {
              var t,
                i = e.tripModel;
              return {
                subTrainTripType:
                  null == i || null === (t = i.tripInfo) || void 0 === t
                    ? void 0
                    : t.subTrainTripType,
              };
            })(function (e) {
              var t,
                i,
                n,
                a,
                o,
                r = e.onRef,
                c = e.subTrainTripType,
                s = (0, l.useState)(null),
                d = (0, Pe.Z)(s, 2),
                u = d[0],
                f = d[1],
                m = (0, l.useState)(!1),
                p = (0, Pe.Z)(m, 2),
                h = p[0],
                v = p[1];
              (0, l.useImperativeHandle)(r, function () {
                return {
                  showToast: function (e) {
                    f(null == e ? void 0 : e.toast),
                      v(!0),
                      (Ye =
                        (null == e ? void 0 : e.onConfirm) || function () {}),
                      (qe =
                        (null == e ? void 0 : e.onCancel) || function () {});
                  },
                  closeToast: function () {
                    v(!1);
                  },
                };
              });
              var g = function () {
                for (
                  var e, t = arguments.length, i = new Array(t), n = 0;
                  n < t;
                  n++
                )
                  i[n] = arguments[n];
                null === (e = qe) ||
                  void 0 === e ||
                  e.call.apply(e, [Ue].concat(i)),
                  v(!1),
                  (Ye = qe = function () {});
              };
              if (!h) return null;
              var w = I.getPage().orderSource;
              switch (u.toastCode) {
                case C.NOTICE:
                  return (0,
                  Be.tZ)(De.Z, { isShow: !0, entrancePopup: null === (t = u.data) || void 0 === t ? void 0 : t.entrancePopup, entranceDrawerTips: null === (i = u.data) || void 0 === i ? void 0 : i.entranceDrawerTips, onClose: g });
                case C.FlightRefundRule:
                  return (0,
                  Be.tZ)(Xe.Z, { visible: !0, info: u.data, onClose: g });
                case C.BusRefundRule:
                  return (0,
                  Be.tZ)(Ee, { visible: !0, info: u.data, onClose: g });
                case C.ShipRefundRule:
                  return (0,
                  Be.tZ)(Fe.Z, { visible: !0, info: u.data, onClose: g });
                case C.CombineSeatIntroduction:
                  return (0,
                  Be.tZ)(Le.Z, { visible: !0, type: w, subTrain: "", train: "", departDate: "", onClose: g });
                case C.RobTripTip:
                  return (0, Be.tZ)(He, {
                    isShow: !0,
                    isJlTicket: u.data.isJlTicket,
                    subTrainTripType: c,
                    onClose: g,
                    onConfirm: function () {
                      for (
                        var e, t = arguments.length, i = new Array(t), n = 0;
                        n < t;
                        n++
                      )
                        i[n] = arguments[n];
                      null === (e = Ye) ||
                        void 0 === e ||
                        e.call.apply(e, [Ue].concat(i)),
                        v(!1),
                        (Ye = qe = function () {});
                    },
                  });
                case C.TrafficGuidePop:
                  return (0,
                  Be.tZ)(Qe.Z, { visible: !0, trafficGuideInfo: null == u || null === (n = u.data) || void 0 === n ? void 0 : n.trafficGuideInfo, fromLocation: null == u || null === (a = u.data) || void 0 === a ? void 0 : a.fromLocation, toLocation: null == u || null === (o = u.data) || void 0 === o ? void 0 : o.toLocation, fixAtBottom: !0, onClose: g });
                default:
                  return null;
              }
            }),
            $e = (0, m.$j)(function (e) {
              return {
                visible: e.productModel.isShowMemberPop,
                content: e.productModel.memberPopInfo,
              };
            })(function (e) {
              var t,
                i,
                n = e.visible,
                a = e.content,
                o = (0, l.useState)(0),
                r = (0, Pe.Z)(o, 2),
                c = r[0],
                s = r[1];
              if (!a) return (0, Be.tZ)(p.View, {});
              var d = a.title,
                u = a.openVipDescEntity,
                f = a.vipCoreRights,
                m = a.vipGradeRights;
              return (0, Be.BX)(Ae.ZtDrawer, {
                show: n,
                isShowClose: !1,
                onWrapClose: A,
                className: "smart-x-member-pop",
                drawerStyle: { borderRadius: "20px 20px 0 0" },
                children: [
                  (0, Be.BX)(p.View, {
                    className: "header",
                    children: [
                      (0, Be.tZ)(p.Image, {
                        className: "bg",
                        src: "https://images3.c-ctrip.com/ztrip/train_bin/22-06/xcx/img_hytc_bg_v@3x.png",
                      }),
                      (0, Be.tZ)(Ae.ZtRichText, { className: "tit", nodes: d }),
                      (0, Be.tZ)(p.Image, {
                        src: "https://images3.c-ctrip.com/ztrip/train_bin/22-09/icon_hytc_close@3x.png",
                        className: "header-icon-closed",
                        id: "ANBT",
                        onClick: A,
                      }),
                    ],
                  }),
                  (0, Be.BX)(p.View, {
                    className: "container",
                    children: [
                      f &&
                        (0, Be.BX)(p.View, {
                          className: "core-rights-box",
                          children: [
                            (0, Be.BX)(p.View, {
                              className: "tit-box",
                              children: [
                                (0, Be.tZ)(p.View, { className: "line" }),
                                (0, Be.tZ)(Ae.ZtRichText, {
                                  className: "tit",
                                  nodes: f.title,
                                }),
                              ],
                            }),
                            (0, Be.tZ)(p.View, {
                              className: "detail-box",
                              children:
                                n &&
                                (0, Be.tZ)(p.Swiper, {
                                  className: "vip-core-rights-box",
                                  interval: "2000",
                                  autoplay: !0,
                                  previousMargin: "204rpx",
                                  nextMargin: "194rpx",
                                  current: c,
                                  onChange: function (e) {
                                    s(e.detail.current);
                                  },
                                  circular: !0,
                                  children:
                                    null == f ||
                                    null === (t = f.coreRightEntityList) ||
                                    void 0 === t
                                      ? void 0
                                      : t.map(function (e, t) {
                                          return (0,
                                          Be.tZ)(p.SwiperItem, { className: "vip-core-right", children: (0, Be.BX)(p.View, { className: "content ".concat(t === c ? "cur" : ""), children: [(0, Be.tZ)(p.Image, { className: "img-tit", src: e.imageUrl }), (0, Be.tZ)(p.View, { className: "tit", children: e.title }), (0, Be.tZ)(p.View, { className: "sub-tit", children: e.subTitle })] }) }, t);
                                        }),
                                }),
                            }),
                          ],
                        }),
                      m &&
                        (0, Be.BX)(p.View, {
                          className: "vip-grade-rights-box",
                          children: [
                            (0, Be.BX)(p.View, {
                              className: "tit-box",
                              children: [
                                (0, Be.tZ)(p.View, { className: "line" }),
                                (0, Be.tZ)(Ae.ZtRichText, {
                                  className: "tit",
                                  nodes: m.title,
                                }),
                              ],
                            }),
                            (0, Be.tZ)(p.View, {
                              className: "detail-box",
                              children:
                                null == m ||
                                null === (i = m.coreRightEntityList) ||
                                void 0 === i
                                  ? void 0
                                  : i.map(function (e) {
                                      return (0,
                                      Be.BX)(p.View, { className: "platform-vip-box", children: [(0, Be.tZ)(p.Image, { className: "icon", src: e.imageUrl }), (0, Be.tZ)(p.View, { className: "tit", children: e.title }), (0, Be.tZ)(p.View, { className: "desc", children: e.subTitle })] }, e.bgUrl);
                                    }),
                            }),
                          ],
                        }),
                      (0, Be.tZ)(p.View, { className: "blank" }),
                    ],
                  }),
                  (0, Be.tZ)(p.View, {
                    className: "footer",
                    children: (0, Be.BX)(p.View, {
                      className: "button-box",
                      children: [
                        (0, Be.tZ)(p.View, {
                          className: "price",
                          children: u.salePrice,
                        }),
                        (0, Be.tZ)(p.View, {
                          className: "unit",
                          children: u.unit,
                        }),
                        (0, Be.tZ)(p.View, {
                          className: "tag",
                          children: u.tag,
                        }),
                        (0, Be.tZ)(p.View, {
                          className: "btn-confirm",
                          id: "ANBU",
                          onClick: function () {
                            !(function () {
                              var e =
                                arguments.length > 0 && void 0 !== arguments[0]
                                  ? arguments[0]
                                  : "";
                              I.getDispatch().productModel.setState({
                                isShowMemberPop: !1,
                                memberPopInfo: null,
                                unionVipCode: e,
                              }),
                                $(D.PRODUCT_CLICK),
                                le();
                            })();
                          },
                          children: u.buttonName,
                        }),
                      ],
                    }),
                  }),
                ],
              });
            }),
            Je = (0, m.$j)(function (e) {
              var t = e.pageModel;
              return { isLoaded: null == t ? void 0 : t.isLoaded };
            })(function (e) {
              return e.isLoaded
                ? (0, Be.tZ)(Be.HY, {})
                : (0, Be.BX)(p.View, {
                    className: "skeleton",
                    children: [
                      (0, Be.BX)(p.View, {
                        className: " _cp _i _m",
                        children: [
                          (0, Be.tZ)(p.View, {
                            className: ""
                              .concat(" _Hg _nc", " ")
                              .concat(" _yd _pa _dp"),
                          }),
                          (0, Be.tZ)(p.View, {
                            className: ""
                              .concat(" _ep _nc", " ")
                              .concat(" _yd _pa _dp"),
                          }),
                        ],
                      }),
                      (0, Be.BX)(p.View, {
                        className: " _fp _i _m _l",
                        children: [
                          (0, Be.BX)(p.View, {
                            children: [
                              (0, Be.tZ)(p.View, {
                                className: ""
                                  .concat(" _lk _db", " ")
                                  .concat(" _yd _pa _dp"),
                              }),
                              (0, Be.tZ)(p.View, {
                                className: ""
                                  .concat(" _gp _nc _Ac", " ")
                                  .concat(" _yd _pa _dp"),
                              }),
                            ],
                          }),
                          (0, Be.tZ)(p.View, {
                            className: ""
                              .concat(" _Qb _hp", " ")
                              .concat(" _yd _pa _dp"),
                          }),
                          (0, Be.BX)(p.View, {
                            className: " _i _k _pf",
                            children: [
                              (0, Be.tZ)(p.View, {
                                className: ""
                                  .concat(" _lk _db", " ")
                                  .concat(" _yd _pa _dp"),
                              }),
                              (0, Be.tZ)(p.View, {
                                className: ""
                                  .concat(" _gp _nc _Ac", " ")
                                  .concat(" _yd _pa _dp"),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, Be.BX)(p.View, {
                        className: " _a _dc _ip _jp _p _i",
                        children: [
                          (0, Be.tZ)(p.View, {
                            className: ""
                              .concat(" _cc _Wk", " ")
                              .concat(" _yd _pa _dp"),
                          }),
                          (0, Be.BX)(p.View, {
                            className: " _kp",
                            children: [
                              (0, Be.tZ)(p.View, {
                                className: ""
                                  .concat(" _lp _nc", " ")
                                  .concat(" _yd _pa _dp"),
                              }),
                              (0, Be.BX)(p.View, {
                                className: " _mp _i",
                                children: [
                                  (0, Be.tZ)(p.View, {
                                    className: ""
                                      .concat(" _lk _De _np", " ")
                                      .concat(" _yd _pa _dp"),
                                  }),
                                  (0, Be.tZ)(p.View, {
                                    className: ""
                                      .concat(" _op _De", " ")
                                      .concat(" _yd _pa _dp"),
                                  }),
                                ],
                              }),
                              (0, Be.tZ)(p.View, {
                                className: ""
                                  .concat(" _lp _nc", " ")
                                  .concat(" _yd _pa _dp"),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, Be.BX)(p.View, {
                        className: " _zo _a _dc _pp",
                        children: [
                          [0, 1].map(function (e, t) {
                            return (0,
                            Be.BX)(p.View, { className: " _Yn _i", children: [(0, Be.tZ)(p.View, { className: "".concat(" _qp _mh _Qf", " ").concat(" _yd _pa _dp") }), (0, Be.tZ)(p.View, { className: "".concat(" _rp _mh _Qf", " ").concat(" _yd _pa _dp") }), (0, Be.tZ)(p.View, { className: "".concat(" _rp _mh _Qf", " ").concat(" _yd _pa _dp") }), (0, Be.tZ)(p.View, { className: "".concat(" _vb _mh", " ").concat(" _yd _pa _dp") })] }, t);
                          }),
                          [0, 1].map(function (e, t) {
                            return (0,
                            Be.BX)(p.View, { className: " _sp _i", children: [(0, Be.tZ)(p.View, { className: "".concat(" _tp _lc _up", " ").concat(" _yd _pa _dp") }), (0, Be.tZ)(p.View, { className: "".concat(" _Tk _lc", " ").concat(" _yd _pa _dp") }), (0, Be.tZ)(p.View, { className: "".concat(" _If _lc _vp", " ").concat(" _yd _pa _dp") })] }, t);
                          }),
                        ],
                      }),
                    ],
                  });
            }),
            et = l.default.memo(function (e) {
              var t,
                i,
                n,
                a,
                o = e.data,
                r = e.onShow,
                c = e.details,
                s =
                  null === (t = (0, M.MW)(c[0])) || void 0 === t
                    ? void 0
                    : t.fromStation,
                d =
                  null === (i = (0, M.MW)(c[c.length - 1])) || void 0 === i
                    ? void 0
                    : i.toStation;
              return (
                (0, l.useEffect)(function () {
                  I.ubtTrace("221096", { ODName: "".concat(s, "-").concat(d) });
                }),
                null != o &&
                null !== (n = o.entranceDrawerTips) &&
                void 0 !== n &&
                n.length
                  ? (0, Be.tZ)(p.Swiper, {
                      autoplay: !0,
                      vertical: !0,
                      className: "smart-x-notice-swiper",
                      interval: 3e3,
                      circular: !0,
                      children:
                        null == o ||
                        null === (a = o.entranceDrawerTips) ||
                        void 0 === a
                          ? void 0
                          : a.map(function (e, t) {
                              return (0, Be.tZ)(
                                p.SwiperItem,
                                {
                                  id: "ANBD",
                                  onClick: function () {
                                    var e;
                                    r(),
                                      null === (e = I.getPage()) ||
                                        void 0 === e ||
                                        e.ubtTrace("221095", {
                                          ODName: "".concat(s, "-").concat(d),
                                        });
                                  },
                                  children: (0, Be.BX)(p.View, {
                                    className:
                                      "notice-item flex-align-items-center",
                                    children: [
                                      (0, Be.BX)(p.View, {
                                        className: "flex-1 content",
                                        children: [
                                          null == e ? void 0 : e.title,
                                          "：",
                                          null == e ? void 0 : e.content,
                                        ],
                                      }),
                                      (0, Be.tZ)(p.Text, {
                                        className: "ifont-arr iconfont arrow",
                                      }),
                                    ],
                                  }),
                                },
                                "notice_".concat(t)
                              );
                            }),
                    })
                  : (0, Be.tZ)(p.View, {})
              );
            }),
            tt = (0, m.$j)(function (e) {
              var t = e.tripModel;
              return (0, N.Z)({}, t);
            })(function (e) {
              var t = e.epidmicInfo,
                i = void 0 === t ? null : t,
                n = e.tripInfo,
                a = void 0 === n ? null : n;
              if ((0, M.Qr)(a) || (0, M.Qr)(i)) return null;
              var o = a.details;
              return (0, Be.tZ)(p.View, {
                className: "smart-tripdetail-notice",
                children: (0, Be.tZ)(et, {
                  data: i,
                  details: o,
                  onShow: function () {
                    ye({ toast: { toastCode: C.NOTICE, data: i } });
                  },
                }),
              });
            }),
            it = (0, m.$j)(function (e) {
              var t = e.tripModel;
              return (0, N.Z)({}, t);
            })(function (e) {
              var t,
                i = e.tripInfo,
                n = void 0 === i ? null : i;
              if (
                !n ||
                0 ===
                  (null === (t = n.details) || void 0 === t ? void 0 : t.length)
              )
                return null;
              var a = n.details,
                o = (0, M.MW)(a[0]),
                r = (0, M.MW)(a[a.length - 1]),
                c = (0, M.e6)(o.startDate),
                s = (0, M.GD)(o.startDate),
                d = (0, M.zE)(n.totalMinutes),
                u = a[0].tripType,
                f =
                  "T" === u
                    ? "".concat((0, M.ur)(u, o.trainNo)).concat((0, M.Kn)(a[0]))
                    : (0, M.Kn)(a[0]),
                m = a[a.length - 1].tripType,
                h =
                  "T" === m
                    ? ""
                        .concat((0, M.ur)(m, r.trainNo))
                        .concat((0, M.Kn)(a[a.length - 1]))
                    : (0, M.Kn)(a[a.length - 1]);
              return (0,
              Be.BX)(p.View, { className: "smart-tripdetail-simple", children: [(0, Be.BX)(p.View, { className: "top-box flex", children: [(0, Be.BX)(p.View, { className: "l-time", children: [c, " ", s, "出发"] }), (0, Be.BX)(p.View, { className: "r-shift flex-align-items-center", children: [(0, Be.tZ)(p.View, { className: "zz-tag", children: "中转" }), a.length < 3 && (0, Be.BX)(l.Fragment, { children: [(0, Be.tZ)(p.View, { className: "trip-no", children: f }), (0, Be.tZ)(p.Image, { className: "zz-icon", src: "https://images3.c-ctrip.com/ztrip/train.xin/2022_12/mini_icon_switch.png" }), (0, Be.tZ)(p.View, { className: "trip-no", children: h })] }), a.length >= 3 && (0, Be.tZ)(p.View, { className: "trip-no", children: (0, M.DC)(a.length - 1) })] })] }), (0, Be.BX)(p.View, { className: "sta-box flex", children: [(0, Be.BX)(p.View, { className: "l-box", children: [(0, Be.tZ)(p.View, { className: "time", children: o.startTime }), (0, Be.tZ)(p.View, { className: "sta", children: o.fromStation })] }), (0, Be.BX)(p.View, { className: "m-box flex-align-items-center flex-column", children: [(0, Be.BX)(p.View, { className: "time-tips", children: ["全程", d] }), (0, Be.tZ)(p.Image, { className: "transfer-icon", src: "https://images3.c-ctrip.com/ztrip/train.xin/2021_09/searchlist/line_transfer@3x.png" })] }), (0, Be.BX)(p.View, { className: "r-box", children: [(0, Be.tZ)(p.View, { className: "time", children: r.arriveTime }), (0, Be.tZ)(p.View, { className: "sta", children: r.toStation })] })] })] });
            }),
            nt = i(22276),
            at = i(79910),
            ot = i(17368),
            rt = function (e) {
              var t,
                i,
                n = e.isCombine,
                a = e.currentTripIdx,
                o = e.details,
                r = e.transferInfo,
                c = e.onEmitMultiLineShow,
                s = (0, l.useState)({}),
                d = (0, Pe.Z)(s, 2),
                u = d[0],
                f = d[1];
              if (at.Z.isEmptyObject(r)) return (0, Be.tZ)(Be.HY, {});
              var m =
                  "T" ===
                    (null === (t = o[a]) || void 0 === t
                      ? void 0
                      : t.tripType) &&
                  "T" ===
                    (null === (i = o[a + 1]) || void 0 === i
                      ? void 0
                      : i.tripType),
                v = (0, M.gd)(o, a),
                g = m && v,
                w = (0, M.m0)(o, a);
              (0, l.useEffect)(function () {
                g
                  ? Se(r.transferStation, w).then(function (e) {
                      f(e);
                    })
                  : Ze(a).then(function (e) {
                      f(e);
                    });
              }, []);
              var N = "https://".concat(
                  h.default.isTieyou ? "m.tieyou.com" : "m.suanya.com",
                  "/webapp/train/activity/20230608-train-transfer-virtual-navigation?isHideNavBar=YES"
                ),
                T = (null == u ? void 0 : u.jumpUrl) || N,
                S = !(null == u || !u.jumpUrl),
                Z = (null == u ? void 0 : u.transferTime) || 0,
                b = (null == u ? void 0 : u.taxiMinutes) || 0,
                I = (null == u ? void 0 : u.taxiPrice) || 0,
                C = b && I && b < 30 && I < 50,
                V = (null == r ? void 0 : r.optimalMinutes) || 0,
                x = C ? (0, M.zE)(b) : (0, M.zE)(V),
                y = "",
                k = "";
              if (g)
                (y = S
                  ? "实景导航·无需出站"
                  : "".concat(
                      (0, M._g)(
                        (null == r ? void 0 : r.transferStation) ||
                          (null == r ? void 0 : r.transferAreaName),
                        5
                      ) || "",
                      "·站内换乘"
                    )),
                  (k = S && Z > 0 ? "换乘时间约".concat(Z, "分钟") : "");
              else {
                var _ = v ? "站内换乘" : "异站换乘";
                (y = ""
                  .concat(
                    (0, M._g)(
                      (null == r ? void 0 : r.transferStation) ||
                        (null == r ? void 0 : r.transferAreaName),
                      5
                    ) || "",
                    "·"
                  )
                  .concat(_)),
                  (k = x
                    ? C
                      ? "预计打车耗时".concat(x, ",花费").concat(I, "元")
                      : "预计耗时".concat(x)
                    : "");
              }
              (0, l.useEffect)(
                function () {
                  ((!(null == u || !u.jumpUrl) &&
                    (null == u ? void 0 : u.transferTime) > 0) ||
                    (null == u ? void 0 : u.taxiMinutes) > 0 ||
                    (null == r ? void 0 : r.optimalMinutes) > 0) &&
                    c(a);
                },
                [u, r]
              );
              var B = function () {
                g ? at.Z.commonNavigator(T) : be(a);
              };
              return (0, Be.BX)(p.View, {
                className: "smart-x-transfer-card",
                children: [
                  n &&
                    (0, Be.BX)(p.View, {
                      className: "combine",
                      children: [
                        (0, Be.tZ)(p.Text, { children: "同车换座" }),
                        (0, Be.tZ)(p.Text, {
                          className: "exchange-desc",
                          children: "无需下车, 只要换个座位",
                        }),
                      ],
                    }),
                  !n &&
                    (0, Be.BX)(p.View, {
                      className: "exchange-box",
                      id: "smartXGuidClick",
                      onClick: B,
                      children: [
                        (0, Be.BX)(p.View, {
                          className: "transfer-tips flex-align-items-center",
                          children: [
                            (!g || S) &&
                              (0, Be.tZ)(p.Image, {
                                className: "t-icon",
                                src: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/23_04/zhuancheng/icon_daohang.webp",
                                webp: !0,
                              }),
                            (0, Be.tZ)(p.View, {
                              className: "desc",
                              children: y,
                            }),
                            g &&
                              !S &&
                              (0, Be.tZ)(ot.Z, {
                                customizeStyle: { icon: "color: #198cff;" },
                                onClickHandle: function (e) {
                                  e.stopPropagation(), B();
                                },
                              }),
                          ],
                        }),
                        !!k &&
                          (0, Be.BX)(p.View, {
                            className: "stay-info flex-align-items-center",
                            children: [
                              (0, Be.tZ)(p.Image, {
                                className: "t-icon",
                                src: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/23_04/zhuancheng/icon_shijian.webp",
                                webp: !0,
                              }),
                              (0, Be.tZ)(p.View, {
                                className: "desc",
                                children: k,
                              }),
                            ],
                          }),
                      ],
                    }),
                ],
              });
            },
            ct = l.default.memo(function (e) {
              var t = e.details,
                i = void 0 === t ? [] : t,
                n = e.transferInfo,
                a = void 0 === n ? [] : n,
                o = e.isCombine,
                r = void 0 !== o && o,
                c = (0, l.useState)([]),
                s = (0, Pe.Z)(c, 2),
                d = s[0],
                u = s[1];
              if (!i || 0 === (null == i ? void 0 : i.length))
                return (0, Be.tZ)(Be.HY, {});
              var f = i.map(function (e) {
                  return (0, M.MW)(e);
                }),
                m = function (e) {
                  var t = "",
                    i = a[e];
                  return (
                    i && (t = "间隔".concat((0, M.zE)(i.transferMinutes))), t
                  );
                },
                h = function (e) {
                  d.includes(e) || u([].concat((0, nt.Z)(d), [e]));
                };
              return (0, Be.BX)(p.View, {
                className: "collapse-trip-info flex",
                children: [
                  (0, Be.tZ)(p.View, {
                    className:
                      "sequence-box flex-align-items-center flex-column",
                    children: f.map(function (e, t) {
                      return (0,
                      Be.BX)(p.View, { className: "s-item flex flex-column", children: [(0, Be.tZ)(p.View, { className: "idx", children: t + 1 }), t != f.length - 1 && (0, Be.BX)(p.View, { className: "icons flex-align-items-center flex-column ".concat(d.includes(t) ? "m36" : ""), children: [(0, Be.tZ)(p.View, { className: "icon" }), (0, Be.tZ)(p.View, { className: "icon mid-icon" }), (0, Be.tZ)(p.View, { className: "icon" })] })] }, t);
                    }),
                  }),
                  (0, Be.tZ)(p.View, {
                    className: "train-info",
                    children: f.map(function (e, t) {
                      return (0,
                      Be.BX)(l.Fragment, { children: [(0, Be.BX)(p.View, { className: "train-item flex-align-items-center", children: [(0, Be.tZ)(p.View, { className: "time", children: "".concat(e.startTime, "-").concat(e.arriveTime) }), (0, Be.tZ)(p.View, { className: "v-line" }), (0, Be.tZ)(p.View, { className: "station", children: "".concat(e.fromStation, " ⇀ ").concat(e.toStation) })] }), t != f.length - 1 && (0, Be.BX)(p.View, { className: "transfer-item flex-align-items-center", children: [(0, Be.tZ)(p.View, { className: "duration", children: m(t) }), (0, Be.tZ)(rt, { isCombine: r, currentTripIdx: t, details: i, transferInfo: null == a ? void 0 : a[t], onEmitMultiLineShow: h })] })] }, t);
                    }),
                  }),
                ],
              });
            }),
            st = function (e) {
              switch (e.tripType) {
                case "T":
                  return (0, Be.tZ)(p.Text, {
                    className: "ifont-train2 iconfont trip-icon",
                  });
                case "F":
                  return (0, Be.tZ)(p.Text, {
                    className: "ifont-flight2 iconfont trip-icon",
                  });
                case "S":
                  return (0, Be.tZ)(p.Text, {
                    className: "ifont-ship iconfont trip-icon",
                  });
                case "B":
                case "SC":
                  return (0, Be.tZ)(p.Text, {
                    className: "ifont-bus iconfont trip-icon",
                  });
                default:
                  return (0, Be.tZ)(p.Text, {
                    className: "ifont-train2 iconfont trip-icon",
                  });
              }
            },
            lt = l.default.memo(function (e) {
              var t,
                i = e.tripData,
                n = (0, M.MW)(i),
                a = null == i ? void 0 : i.tripType;
              if (!n) return (0, Be.tZ)(p.View, {});
              var o =
                  "T" == a
                    ? (0, M.aj)(null == n ? void 0 : n.trainNo)
                    : "F" == a
                    ? "飞机"
                    : "B" == a || "SC" == a
                    ? "汽车"
                    : "船",
                r = null == n ? void 0 : n.useMinutes,
                c = (0, M.zE)(r),
                s = (0, M.zK)(null == n ? void 0 : n.startDate),
                l = (0, M.Dw)(i),
                d = null == n ? void 0 : n.airIcon,
                u = null == n ? void 0 : n.planeType,
                f = null == n ? void 0 : n.punctuality,
                m = null == n ? void 0 : n.onlyShowFlag,
                v = "T" === a && (null == n ? void 0 : n.jlTicket),
                g =
                  (null == n || null === (t = n.selectSeat) || void 0 === t
                    ? void 0
                    : t.ticketLeft) <= 0,
                w = !m && (g || v);
              return (0, Be.BX)(p.View, {
                className: "flex smart-tripdetail-trip-item",
                children: [
                  (0, Be.BX)(p.View, {
                    className: "left flex-column",
                    children: [
                      (0, Be.BX)(p.View, {
                        className: "left-head flex-align-items-center",
                        children: [
                          (0, Be.tZ)(p.View, {
                            className: "icon-bg flex-center ".concat(
                              h.default.isTieyou ? "ty" : "zx"
                            ),
                            children: (0, Be.tZ)(st, { tripType: a }),
                          }),
                          (0, Be.tZ)(p.View, {
                            className: "type-name",
                            children: o,
                          }),
                        ],
                      }),
                      (0, Be.BX)(p.View, {
                        className: "time",
                        children: [
                          (0, Be.tZ)(p.View, {
                            className: "time-txt",
                            children: null == n ? void 0 : n.startTime,
                          }),
                          (0, Be.tZ)(p.View, {
                            className: "cost-time",
                            children: c,
                          }),
                          (0, Be.BX)(p.View, {
                            className: "time-txt arriive-time",
                            children: [
                              !(null == n || !n.dayDiff) &&
                                (0, Be.BX)(p.Text, {
                                  className: "day-diff",
                                  children: ["+", n.dayDiff],
                                }),
                              null == n ? void 0 : n.arriveTime,
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, Be.tZ)(p.Image, {
                    src: "https://images3.c-ctrip.com/ztrip/train.xin/2022_08/mini_travel_line@3x.webp",
                    className: "line-wrap",
                  }),
                  (0, Be.BX)(p.View, {
                    className: "right flex-1",
                    children: [
                      (0, Be.BX)(p.View, {
                        className: "flex-align-items-center",
                        children: [
                          (0, Be.tZ)(p.View, {
                            className: "date",
                            children: s,
                          }),
                          (0, Be.tZ)(p.View, { className: "split-line" }),
                          !!d &&
                            (0, Be.tZ)(p.Image, {
                              src: d,
                              className: "air-icon",
                            }),
                          (0, Be.tZ)(p.View, {
                            className: "number",
                            children: l,
                          }),
                          w &&
                            (0, Be.tZ)(p.View, {
                              className: "rob-tag",
                              children: v ? "预约" : "抢票",
                            }),
                        ],
                      }),
                      (0, Be.BX)(p.View, {
                        className: "flex flex-1",
                        children: [
                          (0, Be.BX)(p.View, {
                            className: "station flex-1",
                            children: [
                              (0, Be.BX)(p.View, {
                                className: "station-txt",
                                children: [
                                  null == n ? void 0 : n.fromStation,
                                  "T" == a ? "站" : "",
                                  "F" == a
                                    ? null == n
                                      ? void 0
                                      : n.departTerminal
                                    : "",
                                ],
                              }),
                              (0, Be.BX)(p.View, {
                                className: "station-txt to-station",
                                children: [
                                  n.toStation,
                                  "T" == a ? "站" : "",
                                  "F" == a ? n.arriveTerminal : "",
                                ],
                              }),
                            ],
                          }),
                          "F" === a &&
                            (0, Be.BX)(p.View, {
                              className: "flight flex flex-column",
                              children: [
                                (0, Be.tZ)(p.View, { children: u }),
                                !!f &&
                                  (0, Be.tZ)(p.View, {
                                    className: "flight-cal",
                                    children: f,
                                  }),
                              ],
                            }),
                          "T" === a &&
                            (0, Be.BX)(p.View, {
                              className: "train-info flex",
                              id: "ANBH",
                              onClick: function () {
                                return (function (e) {
                                  var t = e.fromStation,
                                    i = e.toStation,
                                    n = e.startDate,
                                    a = e.trainNo;
                                  B.ZP.goTimeTable(t, i, a, n);
                                })(n);
                              },
                              children: [
                                (0, Be.tZ)(p.View, {
                                  className: "flight-cal",
                                  children: "时刻表",
                                }),
                                (0, Be.tZ)(p.View, {
                                  className: "iconfont ifont-arr",
                                }),
                              ],
                            }),
                        ],
                      }),
                    ],
                  }),
                ],
              });
            }),
            dt = function (e) {
              var t,
                i,
                n = e.transferInfo,
                a = void 0 === n ? {} : n,
                o = e.index,
                r = e.details,
                c = e.isCombine,
                s = e.checkCombineSeat;
              if (at.Z.isEmptyObject(a)) return (0, Be.tZ)(Be.HY, {});
              var d = (0, l.useState)({}),
                u = (0, Pe.Z)(d, 2),
                f = u[0],
                m = u[1],
                v =
                  "T" ===
                    (null === (t = r[o]) || void 0 === t
                      ? void 0
                      : t.tripType) &&
                  "T" ===
                    (null === (i = r[o + 1]) || void 0 === i
                      ? void 0
                      : i.tripType),
                g = (0, M.gd)(r, o),
                w = v && g,
                N = (0, M.m0)(r, o);
              (0, l.useEffect)(function () {
                w
                  ? Se(a.transferStation, N).then(function (e) {
                      m(e);
                    })
                  : Ze(o).then(function (e) {
                      m(e);
                    });
              }, []);
              var T = "https://".concat(
                  h.default.isTieyou ? "m.tieyou.com" : "m.suanya.com",
                  "/webapp/train/activity/20230608-train-transfer-virtual-navigation?isHideNavBar=YES"
                ),
                S = (null == f ? void 0 : f.jumpUrl) || T,
                Z = (null == f ? void 0 : f.taxiMinutes) || 0,
                b = (null == f ? void 0 : f.taxiPrice) || 0,
                I = Z && b && Z < 30 && b < 50,
                C = (null == a ? void 0 : a.optimalMinutes) || 0,
                V = I ? Z : C,
                x = (0, M.zE)(V),
                y = a.transferAreaName,
                k = c
                  ? "同车换座"
                  : ""
                      .concat((0, M._g)(y, 5) || "", "·")
                      .concat(g ? "站内换乘" : "异站换乘"),
                _ = "";
              c
                ? (_ = "无需下车, 只要换个座位")
                : g
                ? (_ = "停留".concat((0, M.rN)(r, o)))
                : V && (_ = "".concat(I ? "打车" : "", "耗时约").concat(x));
              var B = h.default.isTieyou
                ? "https://images3.c-ctrip.com/ztrip/train.xin/2021_02/order/changeseat_ty.png"
                : "https://images3.c-ctrip.com/ztrip/train.xin/2021_02/order/changeseat_zx.png";
              return (0, Be.tZ)(p.View, {
                className: "smart-transfer-panel",
                children: (0, Be.BX)(p.View, {
                  className: "transit flex-align-items-center",
                  children: [
                    !c &&
                      (0, Be.tZ)(p.Text, {
                        className: "".concat(
                          g
                            ? "ifont-transfer-same color-blue"
                            : "ifont-transfer-different color-red",
                          " iconfont"
                        ),
                      }),
                    c &&
                      (0, Be.tZ)(p.Image, {
                        className: "combine-seat-icon",
                        src: B,
                      }),
                    (0, Be.tZ)(p.Text, {
                      className: "transit-type ".concat(
                        g ? "color-blue" : "color-red"
                      ),
                      children: k,
                    }),
                    (0, Be.tZ)(p.View, {
                      className: "transit-info flex-1",
                      children: _,
                    }),
                    c &&
                      (0, Be.tZ)(p.View, {
                        className: "ifont-qus iconfont",
                        id: "ANBG",
                        onClick: s,
                      }),
                    !c &&
                      (0, Be.BX)(p.View, {
                        className: "guide-box flex-align-items-center",
                        id: "smartXTransferPanelClick",
                        onClick: function () {
                          w ? at.Z.commonNavigator(S) : be(o);
                        },
                        children: [
                          (0, Be.tZ)(p.Image, {
                            className: "guide-icon",
                            src: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/23_04/zhuancheng/icon_daohang_grey.webp",
                            webp: !0,
                          }),
                          (0, Be.tZ)(p.View, {
                            className: "guide-txt",
                            children: w ? "站内快速通道换乘" : "换乘攻略",
                          }),
                        ],
                      }),
                  ],
                }),
              });
            },
            ut = l.default.memo(function (e) {
              var t = e.details,
                i = void 0 === t ? [] : t,
                n = e.isCombine,
                a = void 0 !== n && n,
                o = e.fromNearByFlag,
                r = void 0 !== o && o,
                c = e.toNearByFlag,
                s = void 0 !== c && c,
                l = e.fromStationInfo,
                d = void 0 === l ? {} : l,
                u = e.transferInfo,
                f = void 0 === u ? [] : u,
                m = e.toLocation,
                h = void 0 === m ? "" : m,
                v = e.toStationInfo,
                g = void 0 === v ? {} : v,
                w = e.isOpen,
                N = void 0 !== w && w,
                T = e.checkCombineSeat,
                S = void 0 === T ? function () {} : T,
                Z = e.onNearByBannerClick,
                b = void 0 === Z ? function () {} : Z;
              return (0, Be.BX)(p.View, {
                className: "unfold-trip-info ".concat(N ? "unfold" : ""),
                style: {
                  maxHeight: "".concat(N ? "80vh" : 0),
                  opacity: N ? 1 : 0,
                  visibility: "".concat(N ? "visible" : "hidden"),
                },
                children: [
                  !!r &&
                    (0, Be.BX)(p.View, {
                      className: "start-box flex-align-items-center",
                      id: "ANBN",
                      onClick: function () {
                        return b({ type: "start" });
                      },
                      children: [
                        (0, Be.tZ)(p.View, {
                          className: "tag",
                          children: "始",
                        }),
                        (0, Be.BX)(p.View, {
                          className: "txt tit",
                          children: ["前往", d.stationName],
                        }),
                        (0, Be.BX)(p.View, {
                          className: "txt sub-tit",
                          children: ["距离", d.stationDistance],
                        }),
                      ],
                    }),
                  (0, Be.tZ)(p.View, {
                    className: "trip-list-box",
                    children: i.map(function (e, t) {
                      return (0,
                      Be.BX)(p.View, { className: "trip-and-transfer", children: [(t < i.length - 1 || s) && (0, Be.tZ)(p.View, { className: "connector" }), (0, Be.tZ)(lt, { tripData: e }), t !== i.length - 1 && (0, Be.tZ)(dt, { transferInfo: f[t], index: t, details: i, isCombine: a, checkCombineSeat: S })] }, String(t));
                    }),
                  }),
                  !!s &&
                    (0, Be.BX)(p.View, {
                      className: "end-box flex-align-items-center",
                      id: "ANBO",
                      onClick: function () {
                        return b({ type: "end" });
                      },
                      children: [
                        (0, Be.tZ)(p.View, {
                          className: "tag",
                          children: "终",
                        }),
                        (0, Be.BX)(p.View, {
                          className: "txt tit",
                          children: ["前往", h],
                        }),
                        (0, Be.BX)(p.View, {
                          className: "txt sub-tit",
                          children: ["距离", g.stationDistance],
                        }),
                      ],
                    }),
                ],
              });
            }),
            ft = (0, m.$j)(function (e) {
              var t,
                i,
                n,
                a,
                o,
                r,
                c,
                s,
                l,
                d = e.tripModel,
                u = e.seatModel;
              return {
                details:
                  null === (t = d.tripInfo) || void 0 === t
                    ? void 0
                    : t.details,
                fromNearByFlag:
                  null === (i = d.tripInfo) || void 0 === i
                    ? void 0
                    : i.fromNearByFlag,
                toNearByFlag:
                  null === (n = d.tripInfo) || void 0 === n
                    ? void 0
                    : n.toNearByFlag,
                fromStationInfo:
                  null === (a = d.tripInfo) || void 0 === a
                    ? void 0
                    : a.fromStationInfo,
                originFromStation:
                  null === (o = d.tripInfo) || void 0 === o
                    ? void 0
                    : o.originFromStation,
                originToStation:
                  null === (r = d.tripInfo) || void 0 === r
                    ? void 0
                    : r.originToStation,
                subTrainTripType:
                  null === (c = d.tripInfo) || void 0 === c
                    ? void 0
                    : c.subTrainTripType,
                transferInfo:
                  null === (s = d.tripInfo) || void 0 === s
                    ? void 0
                    : s.transferInfo,
                toStationInfo:
                  null === (l = d.tripInfo) || void 0 === l
                    ? void 0
                    : l.toStationInfo,
                isCombine: u.isCombine,
              };
            })(function (e) {
              var t,
                i = e.details,
                n = e.fromNearByFlag,
                a = e.toNearByFlag,
                o = e.fromStationInfo,
                r = e.originFromStation,
                c = e.originToStation,
                s = e.subTrainTripType,
                d = e.transferInfo,
                u = e.toStationInfo,
                f = e.isCombine,
                m = (0, l.useState)(!1),
                h = (0, Pe.Z)(m, 2),
                v = h[0],
                g = h[1],
                w =
                  (null === (t = I.getPage().searchParams) || void 0 === t
                    ? void 0
                    : t.toLocation) || "";
              return (0, Be.BX)(p.View, {
                className: "smart-tripdetail-trip ".concat(v ? "unfold" : ""),
                children: [
                  !v &&
                    (0, Be.tZ)(ct, {
                      details: i,
                      transferInfo: d,
                      isCombine: f,
                    }),
                  (0, Be.tZ)(ut, {
                    details: i,
                    fromNearByFlag: n,
                    toNearByFlag: a,
                    fromStationInfo: o,
                    originFromStation: r,
                    originToStation: c,
                    subTrainTripType: s,
                    transferInfo: d,
                    toStationInfo: u,
                    isCombine: f,
                    toLocation: w,
                    isOpen: v,
                    checkCombineSeat: function () {
                      ye({ toast: { toastCode: C.CombineSeatIntroduction } });
                    },
                    onNearByBannerClick: ge,
                  }),
                  (0, Be.tZ)(p.View, {
                    className: "status-icon flex",
                    id: "ANBX",
                    onClick: function () {
                      g(!v);
                    },
                    children: (0, Be.tZ)(p.Image, {
                      className: "icon ".concat(v ? "opend" : ""),
                      src: "https://images3.c-ctrip.com/ztrip/train.xin/2022_01/arrow@3x.png",
                    }),
                  }),
                ],
              });
            }),
            mt = l.default.memo(function (e) {
              var t = e.tripSeats,
                i = void 0 === t ? [] : t,
                n = e.productList,
                a = void 0 === n ? [] : n,
                o = e.seatTips,
                r = void 0 === o ? "" : o,
                c = e.onSeatSelected,
                s = void 0 === c ? function () {} : c,
                l = e.onNextStep,
                d = void 0 === l ? function () {} : l,
                u = e.onShowMemberPop,
                f = void 0 === u ? function () {} : u;
              if (!i || 0 === i.length) return (0, Be.tZ)(Be.HY, {});
              var m = function (e) {
                var t, i;
                return null == e ||
                  null === (t = e.tripDetailProductTagInfoList) ||
                  void 0 === t ||
                  null === (i = t[0]) ||
                  void 0 === i
                  ? void 0
                  : i.tagDesc;
              };
              return (0, Be.BX)(p.View, {
                className: "smart-tripdetail-trainseats",
                children: [
                  (0, Be.tZ)(p.View, {
                    className: "trip-seat-box",
                    children: i.map(function (e, t) {
                      var i;
                      return (0, Be.BX)(
                        p.View,
                        {
                          className: "ts-item flex",
                          children: [
                            (0, Be.BX)(p.View, {
                              className: "sequence",
                              children: ["第", t + 1, "程"],
                            }),
                            (0, Be.tZ)(p.View, {
                              className: "seat-scroll flex",
                              children:
                                null === (i = e.seatList) || void 0 === i
                                  ? void 0
                                  : i.map(function (i, n) {
                                      return (0, Be.BX)(
                                        p.View,
                                        {
                                          className:
                                            "seat-item flex-center flex-column "
                                              .concat(
                                                i.isSelected ? "current" : "",
                                                " "
                                              )
                                              .concat(
                                                n != e.seatList.length - 1
                                                  ? "not-last"
                                                  : ""
                                              ),
                                          id: "ANBL",
                                          onClick: function () {
                                            return s({
                                              selected: i.isSelected,
                                              order: t,
                                              seatIndex: n,
                                              isNeedGetProduct: !0,
                                            });
                                          },
                                          children: [
                                            (0, Be.tZ)(p.View, {
                                              className: "seat-name",
                                              children: i.seatName,
                                            }),
                                            (0, Be.BX)(p.View, {
                                              className:
                                                "seat-num flex-align-items-center",
                                              children: [
                                                (0, Be.BX)(p.Text, {
                                                  className: "nor-txt",
                                                  children: ["¥", i.price],
                                                }),
                                                (0, Be.tZ)(p.Text, {
                                                  className:
                                                    "nor-txt ml4 ".concat(
                                                      0 === i.ticketLeft
                                                        ? "no-ticket"
                                                        : "ticket"
                                                    ),
                                                  children: (0, M.t0)(
                                                    i,
                                                    e.tripType
                                                  ),
                                                }),
                                                0 == i.ticketLeft &&
                                                  (0, Be.tZ)(p.Text, {
                                                    className: "nor-txt rob",
                                                    children: e.jlTicket
                                                      ? "(预约)"
                                                      : "(抢)",
                                                  }),
                                              ],
                                            }),
                                          ],
                                        },
                                        "seat_".concat(n)
                                      );
                                    }),
                            }),
                          ],
                        },
                        t
                      );
                    }),
                  }),
                  r.map(function (e, t) {
                    return (0,
                    Be.BX)(p.View, { className: "tips-box flex-align-items-center", children: [(0, Be.tZ)(p.Text, { className: "ifont-detail iconfont" }), (0, Be.tZ)(p.View, { className: "t-cont", children: e })] }, t);
                  }),
                  (null == a ? void 0 : a.length) > 0 &&
                    (0, Be.tZ)(p.View, {
                      className: "product-box",
                      children: a.map(function (e, t) {
                        var i, n, a, o, r, c;
                        return (0, Be.BX)(
                          p.View,
                          {
                            className: "product-item flex",
                            children: [
                              (0, Be.BX)(p.View, {
                                className: "l-box flex flex-1",
                                children: [
                                  (0, Be.BX)(p.View, {
                                    className: "tit-box",
                                    children: [
                                      (0, Be.BX)(p.View, {
                                        className: "flex-align-items-center",
                                        children: [
                                          (0, Be.tZ)(p.View, {
                                            className: "tit",
                                            children: e.productShowName,
                                          }),
                                          !(null == e || !e.productCode) &&
                                            (0, Be.tZ)(ot.Z, {
                                              onClickHandle: function () {
                                                return (function (e) {
                                                  (null == e
                                                    ? void 0
                                                    : e.productCode) === J.V_ &&
                                                  null != e &&
                                                  e.vipCardInfo
                                                    ? f(e)
                                                    : e &&
                                                      e.h5Url &&
                                                      at.Z.commonNavigator(
                                                        e.h5Url
                                                      );
                                                })(
                                                  (0, N.Z)(
                                                    (0, N.Z)({}, e),
                                                    {},
                                                    { positionIdx: t + 1 }
                                                  )
                                                );
                                              },
                                            }),
                                        ],
                                      }),
                                      (0, Be.tZ)(p.View, {
                                        className: "desc-box flex mt8 "
                                          .concat(m(e) ? "mw252" : "", " ")
                                          .concat(
                                            null != e && e.productPriceDesc
                                              ? "mw302"
                                              : ""
                                          ),
                                        children:
                                          null == e ||
                                          null ===
                                            (i = e.tripDetailProductDescList) ||
                                          void 0 === i
                                            ? void 0
                                            : i.map(function (t, i) {
                                                return (0,
                                                Be.BX)(p.View, { className: "desc-item flex-align-items-center", children: [(null == t ? void 0 : t.icon) && (0, Be.tZ)(p.Image, { className: "d-icon", src: t.icon }), (0, Be.tZ)(Ae.ZtRichText, { className: "desc", nodes: t.desc }), i !== e.tripDetailProductDescList.length - 1 && (0, Be.tZ)(p.View, { className: "v-line" })] }, i);
                                              }),
                                      }),
                                    ],
                                  }),
                                  (0, Be.BX)(p.View, {
                                    className: "price-box flex flex-column",
                                    children: [
                                      (0, Be.BX)(p.View, {
                                        className: "ticket-price",
                                        children: [
                                          "¥",
                                          null == e ? void 0 : e.tripPrice,
                                        ],
                                      }),
                                      (0, Be.BX)(p.View, {
                                        className:
                                          "mt8 flex-align-items-center",
                                        children: [
                                          (null == e ||
                                          null ===
                                            (n =
                                              e.tripDetailProductTagInfoList) ||
                                          void 0 === n ||
                                          null === (a = n[0]) ||
                                          void 0 === a
                                            ? void 0
                                            : a.tagDesc) &&
                                            (0, Be.tZ)(p.View, {
                                              className: "tag",
                                              children:
                                                e
                                                  .tripDetailProductTagInfoList[0]
                                                  .tagDesc,
                                            }),
                                          (0, Be.tZ)(Ae.ZtRichText, {
                                            className: "p-price",
                                            nodes:
                                              null == e
                                                ? void 0
                                                : e.productPriceDesc,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, Be.BX)(p.View, {
                                className: "r-box flex-center flex-column",
                                style: "background: ".concat(
                                  (null == e ||
                                  null === (o = e.buttonInfo) ||
                                  void 0 === o
                                    ? void 0
                                    : o.color) || "",
                                  ";"
                                ),
                                id: "ANBM",
                                onClick: function () {
                                  return d(
                                    (0, N.Z)(
                                      (0, N.Z)({}, e),
                                      {},
                                      { positionIdx: t + 1 }
                                    )
                                  );
                                },
                                children: [
                                  (0, Be.tZ)(p.View, {
                                    className: "btn-name",
                                    children:
                                      null == e ||
                                      null === (r = e.buttonInfo) ||
                                      void 0 === r
                                        ? void 0
                                        : r.name,
                                  }),
                                  (0, Be.tZ)(p.View, {
                                    className: "btn-desc",
                                    children:
                                      null == e ||
                                      null === (c = e.buttonInfo) ||
                                      void 0 === c
                                        ? void 0
                                        : c.desc,
                                  }),
                                ],
                              }),
                            ],
                          },
                          t
                        );
                      }),
                    }),
                ],
              });
            });
          var pt,
            ht = function (e) {
              var t = e.data,
                i = void 0 === t ? {} : t,
                n = e.order,
                a = e.onSeatSelected,
                o = e.getRefundRuleByType;
              return (
                i.seatList &&
                  i.seatList.map(function (e) {
                    e.ticketDesc = (0, M.t0)(e, i.tripType);
                  }),
                (0, Be.tZ)(p.View, {
                  className: "smart-trip-seat",
                  children: (0, Be.BX)(p.View, {
                    className: "seat " + _e.S,
                    children: [
                      (0, Be.BX)(p.View, {
                        className: "header",
                        children: [
                          (0, Be.tZ)(p.Text, {
                            className: "title",
                            children: i.orderDesc + " " + i.typeName,
                          }),
                          ["T", "B", "SC"].includes(i.tripType) &&
                            (0, Be.BX)(p.View, {
                              className: "refund-rule",
                              "data-type": i.tripType,
                              "data-order": n,
                              id: "ANBI",
                              onClick: o,
                              children: [
                                "退改规则",
                                (0, Be.tZ)(p.Text, {
                                  className: "ifont-arr iconfont",
                                }),
                              ],
                            }),
                        ],
                      }),
                      (0, Be.tZ)(p.View, {
                        className: "seatlist",
                        children:
                          i.seatList &&
                          i.seatList.map(function (e, t) {
                            return (0, Be.BX)(
                              p.View,
                              {
                                className:
                                  "item " +
                                  (e.isSelected ? "current " : "") +
                                  (e.disabled ? "disabled" : ""),
                                id: "ANBJ",
                                onClick: function () {
                                  return a({
                                    selected: e.isSelected,
                                    order: n,
                                    seatIndex: t,
                                    disabled: e.disabled,
                                  });
                                },
                                children: [
                                  (0, Be.tZ)(p.View, {
                                    className: "seat-name",
                                    children: e.seatName,
                                  }),
                                  "T" === i.tripType &&
                                    (0, Be.BX)(p.View, {
                                      className: "seat-num",
                                      children: [
                                        e.ticketDesc,
                                        0 == e.ticketLeft &&
                                          (0, Be.tZ)(p.View, {
                                            className: "rob",
                                            children: i.jlTicket
                                              ? "(预约)"
                                              : "(抢)",
                                          }),
                                      ],
                                    }),
                                  (0, Be.tZ)(p.View, {
                                    className: "seat-price color-red",
                                    children:
                                      e.price +
                                      (["F", "S"].includes(i.tripType)
                                        ? e.ticketDesc
                                        : ""),
                                  }),
                                  ["F", "S"].includes(i.tripType) &&
                                    (0, Be.BX)(p.View, {
                                      className: "refund-rule",
                                      "data-type": i.tripType,
                                      "data-order": n,
                                      "data-seat_index": t,
                                      id: "ANBK",
                                      onClick: o,
                                      children: [
                                        "退改规则",
                                        (0, Be.tZ)(p.Text, {
                                          className: "ifont-arr iconfont",
                                        }),
                                      ],
                                    }),
                                  ["B", "SC"].includes(i.tripType) &&
                                    (0, Be.tZ)(p.View, {
                                      className: "seat-num bus",
                                      children: e.ticketDesc,
                                    }),
                                  (0, Be.tZ)(p.Text, {
                                    className: "ifont-select iconfont",
                                  }),
                                ],
                              },
                              ""
                                .concat(e.seatName, "-")
                                .concat(e.price, "-")
                                .concat(t)
                            );
                          }),
                      }),
                    ],
                  }),
                })
              );
            },
            vt = l.default.memo(function (e) {
              var t,
                i = e.tripData,
                n = void 0 === i ? null : i,
                a = e.onTripClick,
                o = void 0 === a ? function () {} : a;
              if (
                !n ||
                0 ===
                  (null === (t = n.rescheduleSmartTripCardInfo) || void 0 === t
                    ? void 0
                    : t.length)
              )
                return (0, Be.tZ)(Be.HY, {});
              var r = n.rescheduleSmartTripCardInfo;
              return (0, Be.BX)(p.View, {
                className: "smartx-reschedule-trips-area",
                children: [
                  r.map(function (e, t) {
                    var i, n;
                    return (0, Be.BX)(
                      l.Fragment,
                      {
                        children: [
                          (0, Be.BX)(p.View, {
                            className: "tripinfo flex-align-items-center",
                            onClick: function () {
                              return o(e);
                            },
                            children: [
                              (0, Be.BX)(p.View, {
                                className: "l-box flex-1",
                                children: [
                                  (0, Be.tZ)(p.View, {
                                    className: "price flex",
                                    children: e.tripTitle,
                                  }),
                                  (0, Be.tZ)(p.View, {
                                    className: "station",
                                    children: e.tripDesc,
                                  }),
                                ],
                              }),
                              (0, Be.tZ)(p.View, {
                                className: "m-tripidx",
                                children: e.tripIndexDesc,
                              }),
                              (0, Be.tZ)(p.View, {
                                className: "r-btn",
                                style: "background: ".concat(
                                  null === (i = e.buttonInfo) || void 0 === i
                                    ? void 0
                                    : i.color,
                                  ";"
                                ),
                                children:
                                  null === (n = e.buttonInfo) || void 0 === n
                                    ? void 0
                                    : n.name,
                              }),
                            ],
                          }),
                          t !== r.length - 1 &&
                            (0, Be.tZ)(p.View, { className: "h-line" }),
                        ],
                      },
                      t
                    );
                  }),
                  (0, Be.BX)(p.View, {
                    className: "book-tips flex-align-items-center",
                    children: [
                      (0, Be.tZ)(p.Image, {
                        className: "icon",
                        src: "https://images3.c-ctrip.com/ztrip/train_snow/2023_06/wz@3x.png",
                      }),
                      (0, Be.tZ)(p.View, {
                        className: "txt",
                        children: "两程分开订",
                      }),
                    ],
                  }),
                ],
              });
            }),
            gt = (0, m.$j)(function (e) {
              var t,
                i = e.tripModel,
                n = e.seatModel,
                a = e.productModel;
              return {
                details:
                  null == i || null === (t = i.tripInfo) || void 0 === t
                    ? void 0
                    : t.details,
                tripSeats: null == n ? void 0 : n.tripSeats,
                productList: null == a ? void 0 : a.productList,
                seatTips: null == n ? void 0 : n.seatTips,
                rescheduleTripData: null == a ? void 0 : a.rescheduleTripData,
              };
            })(function (e) {
              var t = e.details,
                i = void 0 === t ? [] : t,
                n = e.tripSeats,
                a = void 0 === n ? [] : n,
                o = e.productList,
                r = void 0 === o ? [] : o,
                c = e.seatTips,
                s = void 0 === c ? "" : c,
                d = e.rescheduleTripData,
                u = void 0 === d ? null : d;
              if (
                ((0, l.useEffect)(
                  function () {
                    (null == r ? void 0 : r.length) > 0 &&
                      $(D.PRODUCT_EXPOSURE);
                  },
                  [r]
                ),
                !a || 0 === a.length)
              )
                return (0, Be.tZ)(Be.HY, {});
              var f =
                null == i
                  ? void 0
                  : i.every(function (e) {
                      return "T" === e.tripType;
                    });
              return (0, Be.BX)(p.View, {
                className: "smart-tripdetail-seat",
                children: [
                  f &&
                    (0, Be.tZ)(mt, {
                      tripSeats: a,
                      productList: r,
                      seatTips: s,
                      onSeatSelected: function (e) {
                        e.selected ||
                          (W(e), I.getDispatch().seatModel.setSeatChanged(!0));
                      },
                      onNextStep: function (e) {
                        null != e && e.productCode
                          ? I.getDispatch().productModel.setSelectedProduct(e)
                          : I.getDispatch().productModel.setSelectedProduct(
                              null
                            ),
                          $(D.PRODUCT_CLICK),
                          le();
                      },
                      onShowMemberPop: function (e) {
                        I.getDispatch().productModel.setSelectedProduct(e),
                          (function (e) {
                            (0, R.Pk)({
                              cardCode:
                                (null == e ? void 0 : e.vipCardCode) || "",
                              scene: 500,
                            })
                              .then(function (t) {
                                var i;
                                if (
                                  1 === (null == t ? void 0 : t.resultCode) &&
                                  (null == t ||
                                  null === (i = t.vipDetailInfoV1List) ||
                                  void 0 === i
                                    ? void 0
                                    : i.length) > 0
                                ) {
                                  var n,
                                    a =
                                      null == t ||
                                      null === (n = t.vipDetailInfoV1List) ||
                                      void 0 === n
                                        ? void 0
                                        : n[0];
                                  I.getDispatch().productModel.setState({
                                    isShowMemberPop: !0,
                                    memberPopInfo: (0, N.Z)(
                                      (0, N.Z)({}, a),
                                      {},
                                      {
                                        vipCardCode:
                                          null == e ? void 0 : e.vipCardCode,
                                        unionVipCode:
                                          (null == e
                                            ? void 0
                                            : e.unionVipCode) || "",
                                      }
                                    ),
                                  });
                                } else I.getDispatch().productModel.setState({ isShowMemberPop: !1, memberPopInfo: null });
                              })
                              .catch(function (e) {
                                console.log(e);
                              });
                          })(e.vipCardInfo);
                      },
                    }),
                  f &&
                    (0, Be.tZ)(vt, {
                      tripData: u,
                      onTripClick: function (e) {
                        var t = e.tripIndex,
                          i = e.buttonInfo;
                        if (0 === t)
                          return 1 === (null == i ? void 0 : i.type)
                            ? (0, v.showToast)(
                                "暂不支持改签抢中转，建议您更换改签其他有票车次"
                              )
                            : void (function () {
                                var e,
                                  t,
                                  i =
                                    null === (e = I.getState().tripModel) ||
                                    void 0 === e ||
                                    null === (t = e.tripInfo) ||
                                    void 0 === t
                                      ? void 0
                                      : t.details,
                                  n = I.getState().seatModel.tripSeats,
                                  a = (0, M.MW)(i[0]),
                                  o = n[0].seatList;
                                (0, v.showLoading)("校验中..."),
                                  B.ZP.getTrainList({
                                    DepartStation: a.fromStation,
                                    ArriveStation: a.toStation,
                                    DepartDate: a.startDate,
                                    TrainName: a.trainNo,
                                  })
                                    .then(function (e) {
                                      var t;
                                      (0, v.hideLoading)();
                                      var i = e;
                                      if (0 == i.length)
                                        return (0, v.showToast)(
                                          "获取车次详情失败"
                                        );
                                      var n = o.findIndex(function (e) {
                                          return e.isSelected;
                                        }),
                                        r = (i = (0, M.qd)(
                                          i,
                                          a.startDate,
                                          n
                                        ))[0];
                                      if ((console.log("trainData", r), !r))
                                        return (0, v.showModal)(
                                          "查询车次详情失败，请稍后重试"
                                        );
                                      var c =
                                        null ===
                                          (t = I.getState().productModel) ||
                                        void 0 === t
                                          ? void 0
                                          : t.rescheduleTripData;
                                      I.navigateTo({
                                        url: "/pages/train/booking/booking",
                                        data: {
                                          train: r,
                                          isReschedule: !0,
                                          fromPage: "smartx",
                                          smartTripId:
                                            null == c ? void 0 : c.smartTripId,
                                        },
                                      });
                                    })
                                    .catch(function (e) {
                                      (0, v.hideLoading)(),
                                        console.warn("单程火车校验error", e),
                                        (0, v.showModal)(
                                          "网络异常，请稍后重试~"
                                        );
                                    });
                              })();
                        if (1 === t) {
                          var n =
                            1 === (null == i ? void 0 : i.type)
                              ? "第二程目前暂无余票，建议您更换其他改签车次方案"
                              : "改签第1程后再预订第2程";
                          (0, v.showToast)(n);
                        }
                      },
                    }),
                  !f &&
                    a.map(function (e, t) {
                      return (0,
                      Be.tZ)(ht, { data: e, order: t, onSeatSelected: W, getRefundRuleByType: O }, String(t));
                    }),
                ],
              });
            }),
            wt = (0, m.$j)(function (e) {
              var t,
                i = e.tripModel;
              return {
                details:
                  null == i || null === (t = i.tripInfo) || void 0 === t
                    ? void 0
                    : t.details,
              };
            })(function (e) {
              var t = e.details,
                i = void 0 === t ? [] : t,
                n = (0, l.useState)(!1),
                a = (0, Pe.Z)(n, 2),
                o = a[0],
                r = a[1];
              if (null == i || !i.length) return null;
              var c = function () {
                  var e = "https://".concat(
                    h.default.isTieyou ? "m.tieyou.com" : "m.suanya.com",
                    "/webapp/train/activity/ztrip-train-buy-ticket-rule?isHideNavBar=YES&type=refund"
                  );
                  at.Z.commonNavigator(e);
                },
                s = [];
              return (
                i.every(function (e) {
                  return "F" === e.tripType;
                }) && i.length > 1
                  ? s.push({
                      title: "预订提示：",
                      content:
                        "如因其中 一段航班变动或取消，需要改变行程的，另一段航班的退改费用由旅客自行承担。",
                    })
                  : s.push({
                      title: "预订提示：",
                      content:
                        "若因无票或承运商的其他不可抗力因素，导致部分行程出票失败、延误或取消（包含用户自行取消），平台不承担其相关费用损失",
                    }),
                i.every(function (e) {
                  return "T" === e.tripType;
                }) &&
                  s.push({
                    title: "火车票购票须知：",
                    content:
                      '<span>原规定开车前15天以上不收取退票手续费，新规定<span style="color:#198cff;">开车前8天以</span>上不收取退票手续费。新规定自2021年1月14日起生效。退款<span style="color:#198cff">1-15个工作日内</span>到账。智行不能帮您加快退款速度，请耐心等待。更多有关退票/改签手续费标准可以查看</span>',
                    isShowRuleEntry: !0,
                  }),
                (0, Be.BX)(p.View, {
                  className: "smart-tripdetail-tips",
                  children: [
                    s.map(function (e, t) {
                      return (0,
                      Be.BX)(p.View, { className: "tip-item", children: [(0, Be.tZ)(p.View, { className: "txt tit", children: e.title }), (0, Be.BX)(p.View, { className: "txt content ".concat(o ? "" : "unfold"), children: [!e.isShowRuleEntry && (0, Be.tZ)(Ae.ZtRichText, { nodes: e.content }), e.isShowRuleEntry && (0, Be.BX)(l.Fragment, { children: [(0, Be.tZ)(p.View, { className: "train-cont", dangerouslySetInnerHTML: { __html: e.content } }), (0, Be.tZ)(p.Text, { className: "train-rule", id: "ANBV", onClick: c, children: "《退票/改签说明》" })] })] })] }, t);
                    }),
                    !o &&
                      s.length > 1 &&
                      (0, Be.BX)(p.View, {
                        className: "view-all",
                        id: "ANBW",
                        onClick: function () {
                          r(!o);
                        },
                        children: [
                          (0, Be.tZ)(p.Text, {
                            className: "txt",
                            children: "查看全部",
                          }),
                          (0, Be.tZ)(p.Text, {
                            className: "iconfont2 ifont2-zhankai_linea_12",
                          }),
                        ],
                      }),
                  ],
                })
              );
            }),
            Nt = (0, m.$j)(function (e) {
              var t = e.pageModel;
              return { isLoaded: null == t ? void 0 : t.isLoaded };
            })(function (e) {
              return e.isLoaded
                ? (0, Be.BX)(p.View, {
                    className: "page-detail ".concat(_e.S),
                    children: [
                      (0, Be.tZ)(it, {}),
                      (0, Be.tZ)(tt, {}),
                      (0, Be.tZ)(ft, {}),
                      (0, Be.tZ)(gt, {}),
                      (0, Be.tZ)(wt, {}),
                    ],
                  })
                : (0, Be.tZ)(Be.HY, {});
            }),
            Tt =
              (0, f.h)()(
                (pt = (function (e) {
                  (0, c.Z)(i, e);
                  var t = (0, s.Z)(i);
                  function i(e) {
                    var n;
                    return (
                      (0, a.Z)(this, i),
                      ((n = t.call(this, e)).store = I.create(
                        (0, r.Z)(n)
                      ).store),
                      (n.pageId = h.default.isTieyou
                        ? "10650054395"
                        : "10650054393"),
                      (n.pageStartTime = Date.now()),
                      (n.orderSource = "smarthome"),
                      n
                    );
                  }
                  return (
                    (0, o.Z)(i, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          this.setPageData(), Ce();
                        },
                      },
                      {
                        key: "setPageData",
                        value: function () {
                          (0, v.setPageConfig)({
                            backgroundColor: h.default.isTieyou
                              ? "#3C4365"
                              : "#0066E6",
                            backgroundColorBottom: "#efefef",
                          }),
                            (this.hasToastFlightAgeSeat = !1);
                          var e = this.$instance.router.params || {},
                            t = e.data || {};
                          this.schemeId = decodeURIComponent(
                            e.schemeId || t.schemeId
                          );
                          var i = e.schemeInfoV1 || t.schemeInfoV1;
                          (this.schemeInfoV1 = decodeURIComponent(i)),
                            (this.fromSource =
                              e.fromSource || t.fromSource || "else"),
                            (this.searchParams = t.searchParams || {});
                          var n = e.orderSource || t.orderSource;
                          n && (this.orderSource = n),
                            (this.isReschedule = e.isReschedule),
                            (this.defaultSeatNameList = e.seatNameList || []);
                        },
                      },
                      {
                        key: "onAddToFavorites",
                        value: function () {
                          return {
                            query: "schemeInfoV1=".concat(
                              encodeURIComponent(this.schemeInfoV1)
                            ),
                          };
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this;
                          return (0, Be.BX)(m.zt, {
                            store: this.store,
                            children: [
                              (0, Be.BX)(p.View, {
                                className: "smart-trip-detail",
                                children: [
                                  (0, Be.tZ)(Je, {}),
                                  (0, Be.tZ)(Nt, {}),
                                  (0, Be.tZ)(Me, {}),
                                ],
                              }),
                              (0, Be.tZ)(l.Fragment, {
                                children: (0, Be.tZ)(Ke, {
                                  onRef: function (t) {
                                    e.$CommonToast = t;
                                  },
                                }),
                              }),
                              (0, Be.tZ)($e, {}),
                            ],
                          });
                        },
                      },
                    ]),
                    i
                  );
                })(l.default.Component))
              ) || pt;
          Page(
            (0, n.createPageConfig)(
              Tt,
              "pages/smart/packageA/newTripDetail/index",
              { root: { cn: [] } },
              {
                navigationBarTitleText: "",
                backgroundColor: "#0066E6",
                backgroundColorBottom: "#efefef",
              } || {}
            )
          );
        },
      },
      function (e) {
        e.O(
          0,
          [
            5572, 71229, 35203, 4978, 16048, 99010, 80683, 67289, 72508, 19559,
            11216, 68592,
          ],
          function () {
            return (function (t) {
              return e((e.s = t));
            })(99388);
          }
        ),
          e.O();
      },
    ]);
})();
