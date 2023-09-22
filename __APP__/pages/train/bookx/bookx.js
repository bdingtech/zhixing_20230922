!(function () {
  "use strict";
  require("../sub-vendors.js"),
    require("../sub-common/fecc9c60875b710a8101d0d50626beef.js"),
    require("../sub-common/849af97262623a3a03a4c9ba6f8707d6.js"),
    require("../sub-common/dc0cfe7c36c66175a01e7585a0cfebf3.js"),
    require("../sub-common/b3c2309a95e8a51ddd777bd490fa43e7.js"),
    require("../sub-common/72f6836a38da788b04d6df340945e671.js"),
    require("../sub-common/3cd35e0ae0d34a9b944389e4550448dd.js"),
    require("../sub-common/2eae4dfc35be5d14dfc1dc2d3e80f01e.js"),
    require("../sub-common/5de1d16dbb0559dc875a17959f3a651a.js"),
    require("../sub-common/0e7f26768e9d25a41ca9ec04be52b877.js"),
    require("../sub-common/997c205d01c5de4e84ea7969bc153c7a.js"),
    require("../sub-common/bf8d08333ee1f94c22729af905231683.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [53127],
      {
        98943: function (e, t, r) {
          var n = {};
          r.r(n),
            r.d(n, {
              grabModel: function () {
                return k;
              },
              secSkillModel: function () {
                return B;
              },
            });
          var a = r(32180),
            i = r(79301),
            o = r(95308),
            c = r(57042),
            s = r(24460),
            l = r(81876),
            u = r(21867),
            d = r(86066),
            m = r(52500),
            f = r(65573),
            p = r(92954),
            b = r.n(p),
            h = r(22672),
            g = r(71515),
            S = r(81957),
            v = r(8271),
            x = r.n(v),
            w = r(79910),
            N = r(298),
            T = r(45023),
            Z = r(41991),
            y = r(40852),
            _ = {
              state: {
                fromStation: "",
                toStation: "",
                departDate: "",
                trainNo: "",
                train: null,
                isReschedule: !1,
                trainViewModeType: "",
                isPointReschedule: !1,
                isStudent: !1,
                isRecommendBuy: 0,
                friendTripInfo: null,
                commonTipsList: [],
                smartMarkValue: "",
                firstTripOrderNumber: "",
              },
              reducers: {
                setTrainParams: function (e, t) {
                  var r = t || {},
                    n = r.fromStation,
                    a = r.toStation,
                    i = r.departDate,
                    o = r.trainNo,
                    c = r.train,
                    s = r.isReschedule,
                    l = r.trainViewModeType,
                    u = r.isStudent,
                    d = r.isRecommendBuy,
                    m = r.friendTripInfo,
                    f = r.isPointReschedule,
                    p = r.smartMarkValue,
                    b = r.firstTripOrderNumber;
                  return (0, N.Z)(
                    (0, N.Z)({}, e),
                    {},
                    {
                      fromStation: n,
                      toStation: a,
                      departDate: i,
                      trainNo: o,
                      train: c,
                      isReschedule: s,
                      trainViewModeType: l,
                      isStudent: u,
                      isRecommendBuy: d,
                      friendTripInfo: m,
                      isPointReschedule: 1 == f,
                      smartMarkValue: p,
                      firstTripOrderNumber: b,
                    }
                  );
                },
                setTrain: function (e, t) {
                  return (0, N.Z)(
                    (0, N.Z)({}, e),
                    {},
                    { train: JSON.parse(JSON.stringify(t)) }
                  );
                },
                setCommonTipsList: function (e, t) {
                  return (0, N.Z)((0, N.Z)({}, e), {}, { commonTipsList: t });
                },
              },
            },
            I = {
              state: {
                subTrains: [],
                sTSimilarTrainsInfo: null,
                subTrainType: 0,
                smartSchemeInfo: null,
              },
              reducers: {
                setSubTrains: function (e, t) {
                  return (0, N.Z)((0, N.Z)({}, e), {}, { subTrains: t });
                },
                setSTSimilarTrainsInfo: function (e, t) {
                  return (0, N.Z)(
                    (0, N.Z)({}, e),
                    {},
                    { sTSimilarTrainsInfo: t }
                  );
                },
                setSubTrainType: function (e, t) {
                  return (0, N.Z)((0, N.Z)({}, e), {}, { subTrainType: t });
                },
                setSmartSchemeInfo: function (e, t) {
                  return (0, N.Z)((0, N.Z)({}, e), {}, { smartSchemeInfo: t });
                },
              },
            },
            P = {
              state: {
                memberShipBagInfo: {},
                memberSeasonCardVisible: !1,
                seasonMemberShipDrawerInfo: null,
                pickerSeat: null,
                nightEleDeliverySeat: null,
                isMemberSeatCardHeader: !1,
                hotelTagCashBackJsonForXPage: null,
                xMemberProductFrom: null,
              },
              reducers: {
                setMemberShipBagInfo: function (e, t) {
                  return (0, N.Z)(
                    (0, N.Z)({}, e),
                    {},
                    { memberShipBagInfo: t }
                  );
                },
                setMemberSeasonCardVisible: function (e, t) {
                  return (0, N.Z)(
                    (0, N.Z)({}, e),
                    {},
                    { memberSeasonCardVisible: t }
                  );
                },
                setSeasonMemberShipDrawerInfo: function (e, t) {
                  return (0, N.Z)(
                    (0, N.Z)({}, e),
                    {},
                    { seasonMemberShipDrawerInfo: t }
                  );
                },
                setPickerSeat: function (e, t) {
                  return (0, N.Z)((0, N.Z)({}, e), {}, { pickerSeat: t });
                },
                setNightEleDeliverySeat: function (e, t) {
                  return (0, N.Z)(
                    (0, N.Z)({}, e),
                    {},
                    { nightEleDeliverySeat: t }
                  );
                },
                setIsMemberSeatCardHeader: function (e, t) {
                  return (0, N.Z)(
                    (0, N.Z)({}, e),
                    {},
                    { isMemberSeatCardHeader: t }
                  );
                },
                setHotelTagCashBackJsonForXPage: function (e, t) {
                  return (0, N.Z)(
                    (0, N.Z)({}, e),
                    {},
                    { hotelTagCashBackJsonForXPage: JSON.parse(t) }
                  );
                },
                setXMemberProductFrom: function (e, t) {
                  return (0, N.Z)(
                    (0, N.Z)({}, e),
                    {},
                    { xMemberProductFrom: t }
                  );
                },
              },
            },
            k = {
              state: {
                isCommonGrabBtnTop: !1,
                grab24HoursInfo: null,
                grabGreenChannelInfo: null,
                memberForRobInfo: null,
                isShowGrabMemberShipDrawer: !1,
                grabSeasonMemberShipDrawerInfo: null,
                successRateInfo: null,
                grabProductExperiment: "",
                unionVipCode: "",
                selectedSeatInfo: null,
                seatGrabProductSequenceInfos: [],
                grabSeatUpgradeInfos: null,
              },
              reducers: {
                setIsCommonGrabBtnTop: function (e, t) {
                  return (0, N.Z)(
                    (0, N.Z)({}, e),
                    {},
                    { isCommonGrabBtnTop: t }
                  );
                },
                setGrab24HoursInfo: function (e, t) {
                  return (0, N.Z)((0, N.Z)({}, e), {}, { grab24HoursInfo: t });
                },
                setGrabGreenChannelInfo: function (e, t) {
                  return (0, N.Z)(
                    (0, N.Z)({}, e),
                    {},
                    { grabGreenChannelInfo: t }
                  );
                },
                setMemberForRobInfo: function (e, t) {
                  return (0, N.Z)((0, N.Z)({}, e), {}, { memberForRobInfo: t });
                },
                setIsShowGrabMemberShipDrawer: function (e, t) {
                  return (0, N.Z)(
                    (0, N.Z)({}, e),
                    {},
                    { isShowGrabMemberShipDrawer: t }
                  );
                },
                setGrabSeasonMemberShipDrawerInfo: function (e, t) {
                  return (0, N.Z)(
                    (0, N.Z)({}, e),
                    {},
                    { grabSeasonMemberShipDrawerInfo: t }
                  );
                },
                setSuccessRateInfo: function (e, t) {
                  return (0, N.Z)((0, N.Z)({}, e), {}, { successRateInfo: t });
                },
                setGrabProductExperiment: function (e, t) {
                  return (0, N.Z)(
                    (0, N.Z)({}, e),
                    {},
                    { grabProductExperiment: t }
                  );
                },
                setUnionVipCode: function (e, t) {
                  return (0, N.Z)((0, N.Z)({}, e), {}, { unionVipCode: t });
                },
                setSelectedSeatInfo: function (e, t) {
                  return (0, N.Z)((0, N.Z)({}, e), {}, { selectedSeatInfo: t });
                },
                setSeatGrabProductSequenceInfos: function (e, t) {
                  return (0, N.Z)(
                    (0, N.Z)({}, e),
                    {},
                    { seatGrabProductSequenceInfos: t }
                  );
                },
                setGrabSeatUpgradeInfos: function (e, t) {
                  return (0, N.Z)(
                    (0, N.Z)({}, e),
                    {},
                    { grabSeatUpgradeInfos: t }
                  );
                },
              },
            },
            B = {
              state: { isPreSecKill: !1, secSkillBannerInfo: null },
              reducers: {
                setSecSkillInfo: function (e, t) {
                  var r = t.isPreSecKill,
                    n = t.secSkillBannerInfo;
                  return (0, N.Z)(
                    (0, N.Z)({}, e),
                    {},
                    { isPreSecKill: r, secSkillBannerInfo: n }
                  );
                },
              },
            },
            V = (function (e) {
              (0, u.Z)(r, e);
              var t = (0, d.Z)(r);
              function r() {
                return (0, c.Z)(this, r), t.apply(this, arguments);
              }
              return (0, s.Z)(r);
            })(Z.Z);
          (0, T.Z)(V, "store", {
            models: (0, N.Z)(
              {
                my12306Model: y.Z,
                trainInfoModel: _,
                otherTrainsModel: I,
                productModel: P,
              },
              n
            ),
          });
          var D,
            C = r(74921),
            M = r(90129),
            z = r(49120),
            X = r(4102),
            R = r(79792),
            K = r(18783),
            A = r(25391),
            L = r(96158),
            F = r(3205),
            G = r(93212),
            E = r(70273),
            H = r(74867),
            q = r(44830),
            U = r(10741),
            j = r(20592),
            O = r(9416),
            Y = (function () {
              var e = (0, o.Z)(
                (0, i.Z)().mark(function e() {
                  var t,
                    r,
                    n,
                    a,
                    o,
                    c,
                    s,
                    l,
                    u,
                    d,
                    m,
                    f,
                    p = arguments;
                  return (0, i.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (t = p.length > 0 && void 0 !== p[0] ? p[0] : {}),
                              (r = t.realFromStation),
                              (n = t.realToStation),
                              (e.prev = 1),
                              (a = V.getState().trainInfoModel),
                              (o = a.fromStation),
                              (c = a.toStation),
                              (s = a.departDate),
                              (l = a.trainNo),
                              (u = {
                                DepartStation: o,
                                ArriveStation: c,
                                DepartDate: s,
                                TrainName: l,
                                ChannelName: R.default.isTieyou
                                  ? "tieyou"
                                  : "zhixing",
                              }),
                              r && (u.DepartStation = r),
                              n && (u.ArriveStation = n),
                              (e.next = 8),
                              A.ZP.getTrainList(u)
                            );
                          case 8:
                            if (
                              ((d = e.sent),
                              (m = A.ZP.handleTrains(d, s)),
                              (f = m.find(function (e) {
                                return (
                                  e.TrainNumber == u.TrainName &&
                                  e.DepartStation == u.DepartStation &&
                                  e.ArriveStation == u.ArriveStation
                                );
                              })))
                            ) {
                              e.next = 13;
                              break;
                            }
                            throw new Error("暂无车次信息，请稍后重试~");
                          case 13:
                            return e.abrupt("return", f);
                          case 16:
                            return (
                              (e.prev = 16),
                              (e.t0 = e.catch(1)),
                              console.log(e.t0),
                              e.abrupt("return", null)
                            );
                          case 20:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[1, 16]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            J = function (e) {
              V.getDispatch().trainInfoModel.setTrain(e);
            },
            W = (function () {
              var e = (0, o.Z)(
                (0, i.Z)().mark(function e() {
                  var t,
                    r,
                    n,
                    a,
                    o,
                    c,
                    s,
                    l,
                    u,
                    d,
                    m,
                    f,
                    p,
                    b,
                    h,
                    g,
                    S,
                    v,
                    x,
                    w,
                    N;
                  return (0, i.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((t = V.getState().trainInfoModel),
                              (r = t.train),
                              (n = t.departDate),
                              r)
                            ) {
                              e.next = 3;
                              break;
                            }
                            return e.abrupt("return", null);
                          case 3:
                            return (
                              (a = r.TrainNumber),
                              (o = void 0 === a ? "" : a),
                              (c = r.DepartStation),
                              (s = void 0 === c ? "" : c),
                              (l = r.ArriveStation),
                              (u = void 0 === l ? "" : l),
                              (d = r.DepartTime),
                              (m = void 0 === d ? "" : d),
                              (f = r.SeatName),
                              (p = void 0 === f ? "" : f),
                              (b = r.isJianLou),
                              (h = void 0 !== b && b),
                              (g = r.seats),
                              (S = void 0 === g ? [] : g),
                              (v = 0),
                              h ||
                                ((x =
                                  S.find(function (e) {
                                    return e.SeatName === p;
                                  }) || {}),
                                (v = x.SeatInventory || 0)),
                              (w = {
                                departStation: s,
                                arriveStation: u,
                                trainNo: o,
                                departDateTime: ""
                                  .concat(n, " ")
                                  .concat(m, ":00"),
                                seatName: p,
                                ticketLeftNum: v,
                              }),
                              (e.prev = 7),
                              (e.next = 10),
                              (0, O.kW)(w)
                            );
                          case 10:
                            if (
                              1 !== (N = e.sent).resultCode ||
                              !N.commonTipsList ||
                              !N.commonTipsList.length
                            ) {
                              e.next = 13;
                              break;
                            }
                            return e.abrupt("return", N.commonTipsList);
                          case 13:
                            return e.abrupt("return", null);
                          case 16:
                            return (
                              (e.prev = 16),
                              (e.t0 = e.catch(7)),
                              console.log(e.t0),
                              e.abrupt("return", null)
                            );
                          case 20:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[7, 16]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            $ = function (e) {
              e && V.getDispatch().trainInfoModel.setCommonTipsList(e);
            },
            Q = (function () {
              var e = (0, o.Z)(
                (0, i.Z)().mark(function e(t) {
                  var r,
                    n,
                    a,
                    o,
                    c,
                    s,
                    l,
                    u,
                    d,
                    m,
                    f,
                    p,
                    h,
                    g,
                    S,
                    v,
                    x,
                    w,
                    T,
                    Z,
                    y,
                    _,
                    I,
                    P,
                    k,
                    B,
                    D,
                    C,
                    M,
                    z,
                    X,
                    R,
                    A,
                    L,
                    F,
                    G,
                    H,
                    U,
                    O,
                    J,
                    W,
                    $,
                    Q,
                    ee;
                  return (0, i.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((r = t.seat),
                              (n = t.buyMemberSeasonCard),
                              (a = t.isNightChoose),
                              (o = t.xbookShowedProducts),
                              (c = t.xbookSelectedProduct),
                              (s = V.getState().trainInfoModel),
                              (l = s.departDate),
                              (u = s.isReschedule),
                              (d = r.isCombinedSeat),
                              (m = r.isStride),
                              (f = r.isBuyRob),
                              (p = r.isRobBuy),
                              (h = r.isCombineBuyMore),
                              !(d || f || p || h))
                            ) {
                              e.next = 14;
                              break;
                            }
                            return (
                              d &&
                                V.ubtTrace(202013, {
                                  bizKey: "z_mini_xpage_zhcx_plan_click",
                                  type: "combine",
                                }),
                              (f || p) &&
                                V.ubtTrace(202013, {
                                  bizKey: "z_mini_xpage_zhcx_plan_click",
                                  type: f ? "buy_grab" : "grab_buy",
                                }),
                              (g = ""),
                              h &&
                                ((S = r.subTrainSegments),
                                (g =
                                  S[0].fromStationDiff > 0 &&
                                  S[1].toStationDiff < 0
                                    ? "smartcntc"
                                    : "smarctc"),
                                V.ubtTrace(202013, {
                                  bizKey: "z_mini_xpage_zhcx_plan_click",
                                  type: "combine_cross",
                                })),
                              (v = r.schemeInfoV1),
                              (x = r.subTrainSegments),
                              (w =
                                null == x
                                  ? void 0
                                  : x.map(function (e) {
                                      return e.seatName;
                                    })),
                              (T = d
                                ? "smarttcs"
                                : f
                                ? "smartsttx"
                                : h
                                ? g
                                : "smartgrt"),
                              (Z = (0, E.j)()),
                              V.navigateTo({
                                url: Z,
                                data: {
                                  fromSource: "trainx",
                                  orderSource: T,
                                  schemeInfoV1: encodeURIComponent(v),
                                  seatNameList: w,
                                },
                              }),
                              e.abrupt("return")
                            );
                          case 14:
                            if (!u || (r.SeatInventory > 0 && r.SeatBookable)) {
                              e.next = 16;
                              break;
                            }
                            return e.abrupt(
                              "return",
                              V.showCommonDialog(
                                "暂时不支持改签抢，请选择其它座席或车次"
                              )
                            );
                          case 16:
                            if (
                              ((y = {}),
                              (_ = V.getState().trainInfoModel.train),
                              !m)
                            ) {
                              e.next = 31;
                              break;
                            }
                            return (
                              V.ubtTrace(202013, {
                                bizKey: "z_mini_xpage_zhcx_plan_click",
                                type: "cross",
                              }),
                              (A = r.subTrainSegments),
                              (L = void 0 === A ? [] : A),
                              (y = {
                                originDepartStation: _.DepartStation,
                                originArrivalStation: _.ArriveStation,
                                originDepartTime: _.DepartTime,
                                originArrivalTime: _.ArriveTime,
                                recommendDepartStation:
                                  null === (I = L[0]) || void 0 === I
                                    ? void 0
                                    : I.fromStation,
                                recommendArrivalStation:
                                  null === (P = L[0]) || void 0 === P
                                    ? void 0
                                    : P.toStation,
                                recommendDepartTime:
                                  null === (k = L[0]) || void 0 === k
                                    ? void 0
                                    : k.startTime,
                                recommendArrivalTime:
                                  null === (B = L[0]) || void 0 === B
                                    ? void 0
                                    : B.arriveTime,
                                recommendOffset:
                                  null === (D = L[0]) || void 0 === D
                                    ? void 0
                                    : D.toStationDiff,
                                recommendDepOffset:
                                  null === (C = L[0]) || void 0 === C
                                    ? void 0
                                    : C.fromStationDiff,
                                fromStationDiff:
                                  null === (M = L[0]) || void 0 === M
                                    ? void 0
                                    : M.fromStationDiff,
                                toStationDiff:
                                  null === (z = L[0]) || void 0 === z
                                    ? void 0
                                    : z.toStationDiff,
                              }),
                              (e.next = 24),
                              Y({
                                realFromStation:
                                  null === (X = L[0]) || void 0 === X
                                    ? void 0
                                    : X.fromStation,
                                realToStation:
                                  null === (R = L[0]) || void 0 === R
                                    ? void 0
                                    : R.toStation,
                              })
                            );
                          case 24:
                            if (!(F = e.sent)) {
                              e.next = 29;
                              break;
                            }
                            (_ = F), (e.next = 31);
                            break;
                          case 29:
                            return (
                              V.showCommonDialog("网络异常，请稍后重试"),
                              e.abrupt("return")
                            );
                          case 31:
                            if (
                              ((_.chosenSeat = r),
                              (_.selectDate = l),
                              (G = !1),
                              K.ZP.isLogin)
                            ) {
                              e.next = 44;
                              break;
                            }
                            return (e.prev = 35), (e.next = 38), K.ZP.doLogin();
                          case 38:
                            (G = !0), (e.next = 44);
                            break;
                          case 41:
                            (e.prev = 41),
                              (e.t0 = e.catch(35)),
                              console.log("取消登陆");
                          case 44:
                            if (!K.ZP.isLogin) {
                              e.next = 55;
                              break;
                            }
                            if (
                              ("SMART_HOLD_DEBUG",
                              b().getStorageSync("SMART_HOLD_DEBUG") &&
                                r.SeatInventory <= 0 &&
                                (r.SeatInventory = 1),
                              !u)
                            ) {
                              e.next = 54;
                              break;
                            }
                            if (
                              ((W =
                                (null === j.ET ||
                                void 0 === j.ET ||
                                null === (U = j.ET.rescheduleInfo) ||
                                void 0 === U ||
                                null === (O = U.orderInfo) ||
                                void 0 === O ||
                                null === (J = O.ticketInfos) ||
                                void 0 === J
                                  ? void 0
                                  : J.filter(function (e) {
                                      return (
                                        e.selected &&
                                        "学生票" == e.passengerType
                                      );
                                    })) || []),
                              ($ = (0, q.e)({
                                stuPsgs: W,
                                seatNames: [r.SeatName],
                                dates: [j.ET.selectDate],
                              })).isPass)
                            ) {
                              e.next = 54;
                              break;
                            }
                            return (
                              V.showCommonDialog($.errMsg), e.abrupt("return")
                            );
                          case 54:
                            r.SeatInventory > 0 ||
                            (null != t &&
                              null !== (H = t.xbookSelectedProduct) &&
                              void 0 !== H &&
                              H._isPreSecKillProduct)
                              ? _e({
                                  train: (0, N.Z)(
                                    (0, N.Z)({}, _),
                                    {},
                                    {
                                      IsCanPointsPay:
                                        (null == t ||
                                          null ===
                                            (Q = t.xbookSelectedProduct) ||
                                          void 0 === Q ||
                                          !Q._isPreSecKillProduct) &&
                                        _.IsCanPointsPay,
                                    }
                                  ),
                                  isStride: m,
                                  strideInfo: y,
                                  buyMemberSeasonCard: n,
                                  isNightChoose: a,
                                  isPreSecKill:
                                    null == t ||
                                    null === (ee = t.xbookSelectedProduct) ||
                                    void 0 === ee
                                      ? void 0
                                      : ee._isPreSecKillProduct,
                                  chooseNightSeatInfo:
                                    null == t ? void 0 : t.chooseNightSeatInfo,
                                })
                              : G
                              ? Ze()
                              : Ie(
                                  _,
                                  o,
                                  c,
                                  V.getState().trainInfoModel.trainViewModeType
                                );
                          case 55:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[35, 41]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            ee = function (e) {
              V.getDispatch().productModel.setPickerSeat(e);
            },
            te = function () {
              var e = V.getState().trainInfoModel.commonTipsList;
              console.log("commonTipsList", e);
              var t = e
                .map(function (e) {
                  return e.subTitle;
                })
                .join("<br/>");
              console.log("infos", t),
                V.showCommonDialog({ title: "公告", content: t });
            },
            re = function () {
              var e = V.getState().my12306Model || {},
                t = e.login12306Name,
                r = void 0 === t ? "" : t,
                n = e.login12306Pas,
                a = void 0 === n ? "" : n;
              A.ZP.goto12306H5({
                pageName: "bookx",
                userAccount: r,
                passWord: a,
                scene: 2,
              })
                .then(function () {
                  V.getDispatch().my12306Model.refresh();
                })
                .catch(function () {});
            },
            ne = (function () {
              var e = (0, o.Z)(
                (0, i.Z)().mark(function e() {
                  var t, r, n, a, o, c, s, l, u, d, m, f, p;
                  return (0, i.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((e.prev = 0),
                              (o = V.getState().trainInfoModel),
                              (c = o.trainNo),
                              (s = o.fromStation),
                              (l = o.toStation),
                              (u = o.departDate),
                              (d = o.train),
                              null !== (t = d.seats) &&
                                void 0 !== t &&
                                t.find(function (e) {
                                  return (
                                    e.SeatInventory <= 20 &&
                                    0 !== e.SeatInventory
                                  );
                                }))
                            ) {
                              e.next = 4;
                              break;
                            }
                            return e.abrupt("return");
                          case 4:
                            return (
                              (e.next = 6),
                              (0, U.tMK)({
                                productLine: R.default.partner || "zhixing",
                                trainNumber: c,
                                fromStationName: s,
                                toStationName: l,
                                departDate: u,
                                scene: "CheckOrder",
                                userName:
                                  V.getState().my12306Model.userName12306,
                              })
                            );
                          case 6:
                            (m = e.sent),
                              (f = m.trains),
                              (p =
                                (null ===
                                  (r = f.find(function (e) {
                                    return (
                                      e.trainNo === c &&
                                      e.toStationName == l &&
                                      e.fromStationName == s
                                    );
                                  })) || void 0 === r
                                  ? void 0
                                  : r.seats) || []),
                              V.getDispatch().trainInfoModel.setTrain(
                                (0, N.Z)(
                                  (0, N.Z)({}, d),
                                  {},
                                  {
                                    SeatList:
                                      (null === (n = d.SeatList) || void 0 === n
                                        ? void 0
                                        : n.map(function (e) {
                                            var t, r;
                                            return (0, N.Z)(
                                              (0, N.Z)({}, e),
                                              {},
                                              {
                                                SeatInventory:
                                                  1 *
                                                    (null ===
                                                      (t = p.find(function (t) {
                                                        return (
                                                          t.seatName ===
                                                          e.SeatName
                                                        );
                                                      })) || void 0 === t
                                                      ? void 0
                                                      : t.ticketLeft) >=
                                                  0
                                                    ? null ===
                                                        (r = p.find(function (
                                                          t
                                                        ) {
                                                          return (
                                                            t.seatName ===
                                                            e.SeatName
                                                          );
                                                        })) || void 0 === r
                                                      ? void 0
                                                      : r.ticketLeft
                                                    : e.SeatInventory,
                                              }
                                            );
                                          })) || [],
                                    seats:
                                      (null === (a = d.seats) || void 0 === a
                                        ? void 0
                                        : a.map(function (e) {
                                            var t, r;
                                            return (0, N.Z)(
                                              (0, N.Z)({}, e),
                                              {},
                                              {
                                                SeatInventory:
                                                  1 *
                                                    (null ===
                                                      (t = p.find(function (t) {
                                                        return (
                                                          t.seatName ===
                                                          e.SeatName
                                                        );
                                                      })) || void 0 === t
                                                      ? void 0
                                                      : t.ticketLeft) >=
                                                  0
                                                    ? null ===
                                                        (r = p.find(function (
                                                          t
                                                        ) {
                                                          return (
                                                            t.seatName ===
                                                            e.SeatName
                                                          );
                                                        })) || void 0 === r
                                                      ? void 0
                                                      : r.ticketLeft
                                                    : e.SeatInventory,
                                              }
                                            );
                                          })) || [],
                                  }
                                )
                              ),
                              (e.next = 15);
                            break;
                          case 12:
                            (e.prev = 12),
                              (e.t0 = e.catch(0)),
                              H.Z.commonDebugTrace(
                                "queryLeftTicket err：" +
                                  ("object" === (0, G.Z)(e.t0)
                                    ? JSON.stringify(e.t0)
                                    : e.t0)
                              );
                          case 15:
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
              return function () {
                return e.apply(this, arguments);
              };
            })();
          !(function (e) {
            (e.seasonMemberShipDrawer = "SeasonMemberShipDrawer"),
              (e.seatPriceModal = "SeatPriceModal"),
              (e.combineSeatIntroDialog = "CombineSeatIntroDialog"),
              (e.grabMemberShipDrawer = "GrabMemberShipDrawer"),
              (e.grabSeatUpgradeDrawer = "GrabSeatUpgradeDrawer"),
              (e.hotelCrossRulePop = "HotelCrossRulePop");
          })(D || (D = {}));
          var ae = (function () {
              var e = (0, o.Z)(
                (0, i.Z)().mark(function e() {
                  var t, r, n, a, o, c, s, l, u, d, m, f, p, b, h;
                  return (0, i.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((t = V.getState().trainInfoModel),
                              (r = t.departDate),
                              (n = t.isReschedule),
                              (a = t.train),
                              !n)
                            ) {
                              e.next = 3;
                              break;
                            }
                            return e.abrupt("return", null);
                          case 3:
                            if (
                              ((o = a.TrainNumber),
                              (c = void 0 === o ? "" : o),
                              (s = a.DepartStation),
                              (l = void 0 === s ? "" : s),
                              (u = a.ArriveStation),
                              (d = void 0 === u ? "" : u),
                              (m = a.seats),
                              (f = void 0 === m ? [] : m),
                              a)
                            ) {
                              e.next = 6;
                              break;
                            }
                            return e.abrupt("return", null);
                          case 6:
                            if (
                              (p = f
                                .filter(function (e) {
                                  if (
                                    0 == e.SeatInventory &&
                                    "无座" != e.SeatName
                                  )
                                    return e.SeatName;
                                })
                                .map(function (e) {
                                  return e.SeatName;
                                })
                                .join(",")) &&
                              p.length
                            ) {
                              e.next = 9;
                              break;
                            }
                            return e.abrupt("return", null);
                          case 9:
                            return (
                              (b = {
                                departureStation: l,
                                arriveStation: d,
                                departureDate: r.replace(/-/g, ""),
                                trainNum: c,
                                grabType: a.isPreSale ? 0 : 2,
                                onSaleTime: "",
                                stationsMappingList: [],
                                withoutTicketSeatNames: p,
                              }),
                              a.isPreSale &&
                                (b.onSaleTime = A.ZP.getPreSaleTimeFormat(
                                  a,
                                  r
                                )),
                              (e.prev = 11),
                              (e.next = 14),
                              (0, O.wX)(b, {
                                checkLogin: !1,
                                checkFrameworkLogin: !1,
                              })
                            );
                          case 14:
                            if (
                              (h = e.sent) &&
                              1 == h.resultCode &&
                              h.bookingTip
                            ) {
                              e.next = 19;
                              break;
                            }
                            return e.abrupt("return", null);
                          case 19:
                            return e.abrupt(
                              "return",
                              (0, N.Z)(
                                (0, N.Z)({}, h.bookingTip),
                                {},
                                { isPreSale: a.isPreSale }
                              )
                            );
                          case 20:
                            e.next = 26;
                            break;
                          case 22:
                            return (
                              (e.prev = 22),
                              (e.t0 = e.catch(11)),
                              console.log(e.t0),
                              e.abrupt("return", null)
                            );
                          case 26:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[11, 22]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            ie = function (e) {
              e && V.getDispatch().grabModel.setSuccessRateInfo(e);
            },
            oe = (function () {
              var e = (0, o.Z)(
                (0, i.Z)().mark(function e(t) {
                  return (0, i.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            V.getDispatch().grabModel.setUnionVipCode(t),
                            (e.next = 3),
                            Q(V.getState().grabModel.selectedSeatInfo)
                          );
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
            ce = (function () {
              var e = (0, o.Z)(
                (0, i.Z)().mark(function e(t) {
                  var r, n, a, o, c, s, l;
                  return (0, i.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (r = { isAllStudent: 0, scene: 103 }),
                            t.seatPrice &&
                              (r.currentTrainInfo = {
                                mainTrainPrice: t.seatPrice,
                              }),
                            (e.next = 4),
                            (0, O.Z8)(r)
                          );
                        case 4:
                          1 === (n = e.sent).resultCode &&
                            n.wechatVipInfoV1 &&
                            (V.getDispatch().grabModel.setSelectedSeatInfo(t),
                            (s =
                              null ===
                                (a = n.wechatVipInfoV1.vipDetailInfoList) ||
                              void 0 === a
                                ? void 0
                                : a[0]),
                            (l =
                              (null == s ||
                              null === (o = s.choseUnionVipRight) ||
                              void 0 === o ||
                              null === (c = o.rightList) ||
                              void 0 === c
                                ? void 0
                                : c[0].rightCode) || ""),
                            V.getDispatch().grabModel.setUnionVipCode(l),
                            V.getDispatch().grabModel.setGrabSeasonMemberShipDrawerInfo(
                              s
                            ),
                            Be({
                              toast: {
                                toastCode: D.grabMemberShipDrawer,
                                data: { content: s, unionVipCode: l },
                              },
                              onConfirm: function (e) {
                                oe(e);
                              },
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
            })(),
            se = (function () {
              var e = (0, o.Z)(
                (0, i.Z)().mark(function e(t) {
                  return (0, i.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          Be({
                            toast: {
                              toastCode: D.grabSeatUpgradeDrawer,
                              data: { content: t },
                            },
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
            })(),
            le = (function () {
              var e = (0, o.Z)(
                (0, i.Z)().mark(function e() {
                  var t, r;
                  return (0, i.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          (t = V.getState().trainInfoModel.train),
                            (r = A.ZP.isPreSecKill(t)),
                            V.getDispatch().secSkillModel.setSecSkillInfo({
                              isPreSecKill: r,
                            });
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
            ue = (function () {
              var e = (0, o.Z)(
                (0, i.Z)().mark(function e() {
                  var t, r, n, a, o, c, s, l, u;
                  return (0, i.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((t = V.getState().trainInfoModel),
                              (r = t.fromStation),
                              (n = t.toStation),
                              (a = t.departDate),
                              (o = t.trainNo),
                              (c = t.train))
                            ) {
                              e.next = 3;
                              break;
                            }
                            return e.abrupt("return", null);
                          case 3:
                            return (
                              (s = {
                                fromStationName: r,
                                toStationName: n,
                                departDate: a,
                                trainNo: o,
                                seats:
                                  c.seats &&
                                  c.seats.map(function (e) {
                                    return {
                                      seatName: e.SeatName,
                                      price: e.SeatPrice,
                                      ticketLeft: e.SeatInventory,
                                    };
                                  }),
                                runTime: c.RunTime,
                              }),
                              (e.prev = 4),
                              (e.next = 7),
                              (0, U.yTF)(s)
                            );
                          case 7:
                            if (
                              !(
                                1 === (u = e.sent).resultCode &&
                                (null === (l = u.subTrains) || void 0 === l
                                  ? void 0
                                  : l.length) > 0
                              )
                            ) {
                              e.next = 12;
                              break;
                            }
                            return e.abrupt("return", u.subTrains);
                          case 12:
                            return e.abrupt("return", null);
                          case 13:
                            e.next = 19;
                            break;
                          case 15:
                            return (
                              (e.prev = 15),
                              (e.t0 = e.catch(4)),
                              console.log(e.t0),
                              e.abrupt("return", null)
                            );
                          case 19:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[4, 15]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            de = function (e) {
              e && V.getDispatch().otherTrainsModel.setSubTrains(e);
            },
            me = (function () {
              var e = (0, o.Z)(
                (0, i.Z)().mark(function e() {
                  var t, r, n, a, o, c, s, l, u, d, m;
                  return (0, i.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (n = V.getState().trainInfoModel),
                              (a = n.fromStation),
                              (o = n.toStation),
                              (c = n.departDate),
                              (s = n.trainNo),
                              (l = n.train),
                              (u = {
                                fromStationName: a,
                                toStationName: o,
                                departDate: c,
                                arriveDate: X.Z.getSpecialDay(c, l.TakeDays),
                                trainNo: s,
                                toTime: l.ArriveTime,
                                fromTime: l.DepartTime,
                                seats:
                                  l.seats &&
                                  l.seats.map(function (e) {
                                    return {
                                      seatName: e.SeatName,
                                      price: e.SeatPrice,
                                      ticketLeft: e.SeatInventory,
                                    };
                                  }),
                                totalPrice:
                                  null === (t = l.seats) ||
                                  void 0 === t ||
                                  null === (r = t[0]) ||
                                  void 0 === r
                                    ? void 0
                                    : r.SeatPrice,
                              }),
                              (e.prev = 2),
                              (e.next = 5),
                              (0, U.tUD)(u)
                            );
                          case 5:
                            if (
                              1 === (m = e.sent).resultCode &&
                              null !== (d = m.sTSimilarTrains) &&
                              void 0 !== d &&
                              d.length
                            ) {
                              e.next = 8;
                              break;
                            }
                            return e.abrupt("return", null);
                          case 8:
                            return e.abrupt("return", m);
                          case 11:
                            return (
                              (e.prev = 11),
                              (e.t0 = e.catch(2)),
                              e.abrupt("return", null)
                            );
                          case 14:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[2, 11]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            fe = function (e) {
              e && V.getDispatch().otherTrainsModel.setSTSimilarTrainsInfo(e);
            },
            pe = function (e) {
              var t = e.index,
                r = e.schemeInfoV1,
                n = e.type;
              V.ubtTrace("c_trn_z_10650069070", {
                bizKey: "z_mini_xPage_transfer_recomend_click",
                recommendType: n,
                exposureIndex: t,
              });
              var a = (0, E.j)();
              V.navigateTo({
                url: a,
                data: {
                  fromSource: "trainx",
                  orderSource: "Transfer_xcx",
                  schemeInfoV1: r,
                },
              });
            },
            be = (function () {
              var e = (0, o.Z)(
                (0, i.Z)().mark(function e() {
                  var t, r, n, a, o, c, s, l;
                  return (0, i.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((t = V.getState().trainInfoModel),
                              (r = t.fromStation),
                              (n = t.toStation),
                              (a = t.departDate),
                              (o = t.trainNo),
                              (c = t.train))
                            ) {
                              e.next = 3;
                              break;
                            }
                            return e.abrupt("return", null);
                          case 3:
                            return (
                              (s = {
                                departDate: a,
                                fromStationName: r,
                                toStationName: n,
                                trainNo: o,
                                source: "miniTrainTripDetail",
                                seats:
                                  c.seats &&
                                  c.seats.map(function (e) {
                                    return {
                                      seatName: e.SeatName,
                                      price: e.SeatPrice,
                                      ticketLeft: e.SeatInventory,
                                    };
                                  }),
                              }),
                              (e.prev = 4),
                              (e.next = 7),
                              (0, U.WCA)(s)
                            );
                          case 7:
                            if (
                              1 !== (l = e.sent).resultCode ||
                              !l.tripDetailSmartSchemeInfo
                            ) {
                              e.next = 12;
                              break;
                            }
                            return e.abrupt(
                              "return",
                              l.tripDetailSmartSchemeInfo
                            );
                          case 12:
                            return e.abrupt("return", null);
                          case 13:
                            e.next = 19;
                            break;
                          case 15:
                            return (
                              (e.prev = 15),
                              (e.t0 = e.catch(4)),
                              console.log(e.t0),
                              e.abrupt("return", null)
                            );
                          case 19:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[4, 15]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            he = function (e) {
              e && V.getDispatch().otherTrainsModel.setSmartSchemeInfo(e);
            },
            ge = r(13025),
            Se = (function () {
              var e = (0, o.Z)(
                (0, i.Z)().mark(function e() {
                  var t;
                  return (0, i.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (t = !1),
                            K.ZP.isLogin &&
                              (0, ge.wu)()
                                .then(function (e) {
                                  if (1 === e.resultCode) {
                                    var r = null == e ? void 0 : e.labels;
                                    0 ===
                                      (null == r
                                        ? void 0
                                        : r.filter(function (e) {
                                            return (
                                              111040 ===
                                                Number(
                                                  null == e
                                                    ? void 0
                                                    : e.labelCode
                                                ) &&
                                              1 ===
                                                Number(
                                                  null == e
                                                    ? void 0
                                                    : e.labelValue
                                                )
                                            );
                                          })
                                      ).length && (t = !0);
                                  } else console.warn("19786/getUserLabels", e);
                                })
                                .catch(function (e) {
                                  console.warn("19786/getUserLabels", e);
                                }),
                            e.abrupt("return", t)
                          );
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
            ve = (function () {
              var e = (0, o.Z)(
                (0, i.Z)().mark(function e() {
                  var t, r, n, a, o, c, s, l;
                  return (0, i.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (t = V.getState().trainInfoModel.train),
                            (r = t.seats),
                            (n = void 0 === r ? [] : r),
                            (a = t.isPreSale),
                            (e.next = 3),
                            Se()
                          );
                        case 3:
                          return (
                            (o = e.sent),
                            (c = V.getState().grabModel.successRateInfo),
                            (s = Array.isArray(n)
                              ? n.filter(function (e) {
                                  return e.SeatBookable;
                                })
                              : []),
                            (l = c),
                            e.abrupt("return", !o && !a && s.length > 0 && !l)
                          );
                        case 8:
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
            xe = (function () {
              var e = (0, o.Z)(
                (0, i.Z)().mark(function e(t) {
                  var r, n, a, o, c, s, l, u, d;
                  return (0, i.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              (0, U.cSR)({
                                source: 1,
                                gVipRecommendType: 1,
                                cardCode: t,
                              })
                            );
                          case 3:
                            if (1 !== (r = e.sent).resultCode) {
                              e.next = 12;
                              break;
                            }
                            (n = r.vipDetailInfo),
                              (a = n.unionVipRight),
                              (c = (o = a || {}).coreRightEntityList),
                              (s = void 0 === c ? [] : c),
                              (l = o.title),
                              s.length > 0 &&
                                ((u = []),
                                s.map(function (e) {
                                  var t = {};
                                  (t.bgUrl = e.imageUrl),
                                    (t.name = e.title),
                                    (t.desc = e.subTitle),
                                    u.push(t);
                                }),
                                (d = {
                                  unionVipRight: { title: l, rightList: u },
                                }),
                                (n.vipPackageEntity = d)),
                              V.getDispatch().productModel.setSeasonMemberShipDrawerInfo(
                                n
                              ),
                              (e.next = 13);
                            break;
                          case 12:
                            throw new Error(r.resultMessage);
                          case 13:
                            e.next = 19;
                            break;
                          case 15:
                            (e.prev = 15),
                              (e.t0 = e.catch(0)),
                              console.log(e.t0),
                              V.getDispatch().productModel.setMemberSeasonCardVisible(
                                !1
                              );
                          case 19:
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
            we = (function () {
              var e = (0, o.Z)(
                (0, i.Z)().mark(function e() {
                  var t,
                    r,
                    n,
                    a,
                    o,
                    c,
                    s,
                    l,
                    u,
                    d,
                    m,
                    f,
                    p,
                    b,
                    h,
                    g,
                    S,
                    v,
                    w,
                    N,
                    T,
                    Z,
                    y,
                    _,
                    I,
                    P,
                    k,
                    B,
                    D,
                    C,
                    M;
                  return (0, i.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (t = V.getState().trainInfoModel),
                              (r = t.train),
                              (n = t.departDate),
                              (a = t.fromStation),
                              (o = t.toStation),
                              (s = (c = r || {}).seats),
                              (l = void 0 === s ? [] : s),
                              (u = c.DepartTime),
                              (d = void 0 === u ? "" : u),
                              (m = c.DepartStation),
                              (f = c.ArriveStation),
                              (p = c.DepartTimeStamp),
                              (b = c.SeatName),
                              (h = c.ArriveTime),
                              (g = c.TakeDays),
                              (S = c.TrainNumber),
                              (v = c.isPreSale),
                              (w = Array.isArray(l)
                                ? l.map(function (e) {
                                    return {
                                      name: e.SeatName,
                                      price: e.ShowSeatPrice || e.SeatPrice,
                                      amount: e.SeatInventory,
                                    };
                                  })
                                : []),
                              (N = [
                                {
                                  departDateTime: x()(p).format(
                                    "YYYY-MM-DD HH:mm:ss"
                                  ),
                                  seatName: b,
                                  routeSequence: 1,
                                  trainNum: S,
                                },
                              ]),
                              (T = x()(p).add(g, "day").format("YYYY-MM-DD")),
                              (Z = x()(p).format("YYYY-MM-DD HH:mm:ss")),
                              (y = {
                                departureTime: Z,
                                arriveTime: "".concat(T, " ").concat(h, ":00"),
                                seatList: w,
                              }),
                              (_ = {
                                trainNo: S,
                                departureTime: ""
                                  .concat(n, " ")
                                  .concat(d, ":00"),
                                departureStation: m,
                                arriveTime: "".concat(T, " ").concat(h, ":00"),
                                arriveStation: f,
                                commonSeatInfos: w,
                                preSellTime: A.ZP.getPreSaleTimeFormat(r, n),
                              }),
                              (I = Array.isArray(l)
                                ? l
                                    .filter(function (e) {
                                      return 0 === e.SeatInventory;
                                    })
                                    .map(function (e) {
                                      return e.SeatName;
                                    })
                                : []),
                              (P = {
                                orderType: v ? 3 : 0,
                                fromNames: a,
                                toNames: o,
                                fromDates: n,
                                trainNums: S,
                                seats: I,
                                mainFromTime: Z,
                              }),
                              (k = { seats: I }),
                              (B = Array.isArray(l)
                                ? l
                                    .filter(function (e) {
                                      return !e.SeatBookable;
                                    })
                                    .map(function (e) {
                                      return {
                                        seatName: e.SeatName,
                                        salePrice:
                                          e.SeatPrice || e.ShowSeatPrice,
                                      };
                                    })
                                : []),
                              (e.next = 14),
                              ve()
                            );
                          case 14:
                            return (
                              (D = e.sent),
                              (C = {
                                elecTicketInfo: {
                                  seatList: w,
                                  departureTime: Z,
                                },
                                orderTicketList: N,
                                vipInfo: y,
                                fromPage: 1,
                                nightTicketReq: {
                                  seats: I,
                                  orderType: v ? 3 : 0,
                                  mainFromTime: Z,
                                  seatInfoList: B,
                                },
                                commonTrainInfo: _,
                                grabGreenChannelRequestInfo: P,
                                saleVipRequestlInfo: k,
                                canTopCondition: D ? 1 : 0,
                              }),
                              (e.prev = 16),
                              (e.next = 19),
                              (0, O.cJ)(C, {
                                checkLogin: !1,
                                checkFrameworkLogin: !1,
                              })
                            );
                          case 19:
                            if (1 !== (M = e.sent).resultCode) {
                              e.next = 22;
                              break;
                            }
                            return e.abrupt("return", M);
                          case 22:
                            e.next = 27;
                            break;
                          case 24:
                            (e.prev = 24),
                              (e.t0 = e.catch(16)),
                              console.log(e.t0);
                          case 27:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[16, 24]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            Ne = (function () {
              var e = (0, o.Z)(
                (0, i.Z)().mark(function e(t) {
                  var r, n, a, o, c, s, l, u, d, m, f, p, b;
                  return (0, i.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (t) {
                            e.next = 2;
                            break;
                          }
                          return e.abrupt("return");
                        case 2:
                          if (
                            ((r = t.memberShipBagInfo),
                            (n = t.nightEleDeliverySeatInfos),
                            (a = t.nightTicketInfo),
                            (o = t.grabGreenChannelResponseInfo),
                            (c = t.saleVipList),
                            (s = t.researchCode),
                            (l = t.grabSeatUpgradeInfos),
                            (u = t.seatGrabProductSequenceInfos),
                            (d = t.hotelTagCashBackJsonForXPage),
                            (m = t.topFlag),
                            !r)
                          ) {
                            e.next = 11;
                            break;
                          }
                          return (
                            (f = r.xMemberBagInfo),
                            (p = r.cardCode),
                            (b = void 0 === p ? "" : p),
                            V.getDispatch().productModel.setMemberShipBagInfo(
                              r
                            ),
                            V.getDispatch().productModel.setMemberSeasonCardVisible(
                              !0
                            ),
                            V.getDispatch().productModel.setIsMemberSeatCardHeader(
                              !w.Z.isEmptyObject(
                                null == f ? void 0 : f.topAreaVipInfoEntity
                              )
                            ),
                            V.getDispatch().productModel.setXMemberProductFrom(
                              null == f ? void 0 : f.productFrom
                            ),
                            (e.next = 11),
                            xe(b)
                          );
                        case 11:
                          n &&
                            V.getDispatch().productModel.setNightEleDeliverySeat(
                              n
                            ),
                            a &&
                              V.getDispatch().grabModel.setGrab24HoursInfo(a),
                            V.getDispatch().grabModel.setIsCommonGrabBtnTop(
                              1 === m
                            ),
                            o &&
                              V.getDispatch().grabModel.setGrabGreenChannelInfo(
                                o
                              ),
                            c &&
                              V.getDispatch().grabModel.setMemberForRobInfo(c),
                            s &&
                              V.getDispatch().grabModel.setGrabProductExperiment(
                                s
                              ),
                            u &&
                              V.getDispatch().grabModel.setSeatGrabProductSequenceInfos(
                                u
                              ),
                            l &&
                              V.getDispatch().grabModel.setGrabSeatUpgradeInfos(
                                l
                              ),
                            d &&
                              V.getDispatch().productModel.setHotelTagCashBackJsonForXPage(
                                d
                              );
                        case 20:
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
            Te = ["onConfirm", "onCancel"],
            Ze = (function () {
              var e = (0, o.Z)(
                (0, i.Z)().mark(function e() {
                  var t, r, n, a, o, c, s, l, u, d, m, f, p, b, h, g, S;
                  return (0, i.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((e.prev = 0),
                              (0, z.showLoading)(),
                              (t =
                                V.getPage().$instance.router.params.data || {}),
                              "miniNearTrainFromH5SmartSystem" ===
                                (V.getPage().$instance.router.params.fromPage ||
                                  "") &&
                                ((r = V.getPage().$instance.router.params.info),
                                ((t = r
                                  ? JSON.parse(decodeURIComponent(r || "{}"))
                                  : {}).isReschedule = !1)),
                              (a = (n = t).train),
                              (o = n.isReschedule),
                              (c = n.isShowSmartJianLou),
                              V.getDispatch().my12306Model.refresh(),
                              V.getDispatch().trainInfoModel.setTrainParams(t),
                              a)
                            ) {
                              e.next = 15;
                              break;
                            }
                            return (e.next = 11), Y();
                          case 11:
                            (s = e.sent), J(s), (e.next = 17);
                            break;
                          case 15:
                            return (e.next = 17), ne();
                          case 17:
                            return (
                              o || le(),
                              V.getPage().setState({ initDataSuccess: !0 }),
                              (e.next = 21),
                              Promise.all([ae(), W()])
                            );
                          case 21:
                            if (
                              ((l = e.sent),
                              (u = (0, M.Z)(l, 2)),
                              (d = u[0]),
                              (m = u[1]),
                              ie(d),
                              $(m),
                              o)
                            ) {
                              e.next = 48;
                              break;
                            }
                            return (e.next = 30), Promise.all([me(), we()]);
                          case 30:
                            if (
                              ((f = e.sent),
                              (p = (0, M.Z)(f, 2)),
                              (b = p[0]),
                              (h = p[1]),
                              c)
                            ) {
                              e.next = 41;
                              break;
                            }
                            return (e.next = 37), ue();
                          case 37:
                            (g = e.sent), de(g), (e.next = 45);
                            break;
                          case 41:
                            return (e.next = 43), be();
                          case 43:
                            (S = e.sent), he(S);
                          case 45:
                            return fe(b), (e.next = 48), Ne(h);
                          case 48:
                            ye(), (e.next = 54);
                            break;
                          case 51:
                            (e.prev = 51),
                              (e.t0 = e.catch(0)),
                              console.log(e.t0);
                          case 54:
                            (0, z.hideLoading)(),
                              V.getPage().unfreezePullDown();
                          case 56:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 51]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            ye = function () {
              var e = V.getState().trainInfoModel,
                t = e.train,
                r = e.fromStation,
                n = e.toStation,
                a = e.departDate,
                i = e.trainNo,
                o = X.Z.getSpecialDay(a, t.TakeDays),
                c = {
                  userid: K.ZP.uid || "",
                  orderId: "",
                  partner: R.default.isTieyou ? "tieyou" : "zhixing",
                  trainInfo: JSON.stringify({
                    arriveStation: n,
                    arriveDateTime: ""
                      .concat(o, " ")
                      .concat(t.ArriveTime, ":00"),
                    trainNumber: i,
                    departStation: r,
                    departDateTime: ""
                      .concat(a, " ")
                      .concat(t.DepartTime, ":00"),
                  }),
                  seatList: JSON.stringify(
                    t.seats.map(function (e) {
                      return {
                        name: e.SeatName,
                        amount: e.SeatInventory,
                        price: e.SeatPrice,
                      };
                    })
                  ),
                };
              V.ubtTrace("booking_Product_Params_X", c);
            },
            _e = function () {
              var e,
                t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                r = t.train,
                n = t.isStride,
                a = t.strideInfo,
                i = t.buyMemberSeasonCard,
                o = t.isNightChoose,
                c = t.chooseNightSeatInfo,
                s = V.getState().trainInfoModel,
                l = s.isReschedule,
                u = s.friendTripInfo,
                d = s.isRecommendBuy,
                m = s.smartMarkValue,
                f = s.firstTripOrderNumber,
                p = s.trainViewModeType,
                b = V.getState().productModel,
                h = b.xMemberProductFrom,
                g = b.memberShipBagInfo,
                S =
                  (null === (e = V.getPage().$instance.router.params) ||
                  void 0 === e
                    ? void 0
                    : e.fromPage) || "";
              V.navigateTo({
                url: ""
                  .concat(A.ZP.getTrainBookingUrl(), "?isRecommendBuy=")
                  .concat(d ? 1 : 0),
                data: {
                  train: r,
                  isReschedule: l,
                  trainViewModeType: p,
                  isStride: n,
                  strideInfo: a,
                  fromPage: "trainx",
                  friendTripInfo: u,
                  buyMemberSeasonCard: i,
                  isNightChoose: o,
                  chooseNightSeatInfoFromX: c,
                  xMemberProductFrom: i && h ? h : null,
                  treasureGoodsInfoOfMemberCardFromX:
                    i && h ? g.treasureGoodsInfo : null,
                  smartMarkValue: m,
                  firstTripOrderNumber: f,
                  orderSource: S,
                },
              });
            },
            Ie = function (e, t, r, n) {
              var a,
                i = {
                  departStation: e.DepartStation || "",
                  departDate: e.selectDate || "",
                  trainNumber: e.TrainNumber || "",
                  arriveStation: e.ArriveStation || "",
                  isPreSale: (null == e ? void 0 : e.isPreSale) || !1,
                  seatName:
                    (null == e || null === (a = e.chosenSeat) || void 0 === a
                      ? void 0
                      : a.SeatName) || "",
                  fromPage: "bookx",
                  xbookShowedProducts: t,
                  xbookSelectedProduct: r,
                  trainViewModeType: n,
                  unionVipCode: V.getState().grabModel.unionVipCode,
                };
              console.log(JSON.stringify(i)),
                V.navigateTo({
                  data: i,
                  url: "/pages/trainRob/setgrab/setgrab",
                });
            },
            Pe = function () {
              V.ubtTrace("c_trn_z_10650069070", {
                bizKey: "z_mini_xPage_creditTrainStrategy_click",
              }),
                (0, L.tV)();
            },
            ke = function () {
              var e =
                "https://m.ctrip.com/webapp/train/activity/static/ztrip/train/electronic-ticket-info.html?partner=".concat(
                  R.default.isTieyou ? "tieyou" : "zhixing"
                );
              console.log("H5Url", e), F.Z.twebview({ data: { url: e } });
            },
            Be = (function () {
              var e = (0, o.Z)(
                (0, i.Z)().mark(function e(t) {
                  var r, n, a;
                  return (0, i.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (r = t.onConfirm),
                            (n = t.onCancel),
                            (a = (0, C.Z)(t, Te)),
                            e.abrupt(
                              "return",
                              new Promise(function (e) {
                                var t;
                                null === (t = V.getPage().$CommonToast) ||
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
                                          null == r || r.apply(void 0, n),
                                            e({ code: 1, data: n });
                                        },
                                        onCancel: function () {
                                          for (
                                            var t = arguments.length,
                                              r = new Array(t),
                                              a = 0;
                                            a < t;
                                            a++
                                          )
                                            r[a] = arguments[a];
                                          null == n || n.apply(void 0, r),
                                            e({ code: 0, data: r });
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
            Ve = r(48813),
            De = m.default.memo(function (e) {
              var t = e.train,
                r = e.isShowDepartArrivalTip,
                n = void 0 !== r && r,
                a = e.departDate;
              if (!t) return (0, Ve.tZ)(g.View, {});
              var i = w.Z.timeCost(t.RunTime),
                o = "";
              if (w.Z.getCommonDayInfo(a).indexOf("今天") >= 0) {
                var c = x()(t.DepartTimeStamp).format("YYYY-MM-DD HH:mm:ss"),
                  s = x()().format("YYYY-MM-DD HH:mm:ss"),
                  l = x()(c).diff(s, "minute");
                if (l > 0) {
                  var u = w.Z.timeCost(l);
                  o = "剩".concat(u, "发车");
                }
              }
              return (0, Ve.tZ)(g.View, {
                className: "train-info-view ",
                children: (0, Ve.BX)(g.View, {
                  className: "modify ".concat(R.default.isTieyou ? "ty" : "zx"),
                  children: [
                    o &&
                      (0, Ve.tZ)(g.View, {
                        className: "show-diff-time",
                        children: o,
                      }),
                    (0, Ve.BX)(g.View, {
                      className: "flex",
                      children: [
                        (0, Ve.BX)(g.View, {
                          className: "item from",
                          children: [
                            (0, Ve.tZ)(g.View, {
                              className: "strong",
                              children: t.DepartTime,
                            }),
                            (0, Ve.tZ)(g.View, {
                              className: "station",
                              children: t.DepartStation,
                            }),
                            n &&
                              (0, Ve.tZ)(g.View, {
                                className: "tu-tips",
                                children: "请确认您的出发到达站",
                              }),
                          ],
                        }),
                        (0, Ve.BX)(g.View, {
                          className: "item mid",
                          children: [
                            (0, Ve.tZ)(g.View, {
                              className: "jt-info",
                              id: "AKBc",
                              onClick: function () {
                                A.ZP.goTimeTable(
                                  t.DepartStation,
                                  t.ArriveStation,
                                  t.TrainNumber,
                                  a
                                );
                              },
                              "data-ubt-key": "wx_booking_goTT",
                              children: "时刻表",
                            }),
                            (0, Ve.BX)(g.View, {
                              className: "text flex-center",
                              children: [
                                (0, Ve.tZ)(g.View, {
                                  className: "num",
                                  children: ""
                                    .concat(t.TrainNumber, "·")
                                    .concat(i),
                                }),
                                t.IsFastPass &&
                                  (0, Ve.tZ)(g.Image, {
                                    className: "sfz-img",
                                    src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/V10.0/xy/tag_sfz@3x.webp",
                                    webp: !0,
                                  }),
                                t.IsCanPointsPay &&
                                  (0, Ve.tZ)(g.Image, {
                                    className: "sfz-img",
                                    src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/V10.0/xy/tag_dh@3x.webp",
                                    webp: !0,
                                  }),
                              ],
                            }),
                          ],
                        }),
                        (0, Ve.BX)(g.View, {
                          className: "item to",
                          children: [
                            (0, Ve.BX)(g.View, {
                              className: "strong",
                              children: [
                                t.ArriveTime,
                                !!t.TakeDays &&
                                  (0, Ve.tZ)(g.Text, {
                                    className: "em",
                                    children:
                                      t.TakeDays > 0
                                        ? "+" + "".concat(t.TakeDays, "天")
                                        : "",
                                  }),
                              ],
                            }),
                            (0, Ve.tZ)(g.View, {
                              className: "station",
                              children: t.ArriveStation,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              });
            }),
            Ce = r(91006),
            Me = r.n(Ce),
            ze = function (e) {
              var t = e.goTo12306,
                r = e.ubtTrace;
              (0, m.useEffect)(function () {
                r("s_trn_z_trace_10650069070", {
                  bizKey: "z_mini_xPage_loginBanner_show",
                });
              }, []);
              return (0, Ve.BX)(g.View, {
                className: "points-banner",
                id: "AKBb",
                onClick: function () {
                  r("c_trn_z_10650069070", {
                    bizKey: "z_mini_xPage_loginBanner_click",
                  }),
                    K.ZP.isLogin
                      ? t()
                      : K.ZP.doLogin().then(function () {
                          t();
                        });
                },
                children: [
                  (0, Ve.tZ)(g.Image, {
                    src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/V10.0/xy/tag_dh_d@3x.png",
                    className: "tickect-icon",
                  }),
                  (0, Ve.tZ)(g.Text, {
                    className: "txt",
                    style: { flex: 1 },
                    children: "本车次可积分兑换免费车票",
                  }),
                  (0, Ve.tZ)(g.Text, {
                    className: "txt-desc",
                    children: "登录12306兑换",
                  }),
                  (0, Ve.tZ)(g.Text, { className: "points-icon-more" }),
                ],
              });
            };
          (ze.propTypes = { goTo12306: Me().func, ubtTrace: Me().func }),
            (ze.defaultProps = {
              goTo12306: function () {},
              ubtTrace: function () {},
            });
          var Xe = ze,
            Re = function (e) {
              var t = e.commonTipsList,
                r = e.onClickTips;
              return (
                console.log("commonTipsList", t),
                (0, Ve.BX)(g.View, {
                  className: "notice-board",
                  id: "AKBa",
                  onClick: r,
                  children: [
                    (0, Ve.tZ)(g.Swiper, {
                      autoplay: "true",
                      vertical: "true",
                      interval: "2000",
                      circular: "true",
                      duration: "400",
                      className: "notice-content",
                      children: t.map(function (e, t) {
                        return (0,
                        Ve.tZ)(g.SwiperItem, { className: "notice-item", children: (0, Ve.BX)(g.Text, { space: "nbsp", className: "notice-text", children: [(0, Ve.tZ)(g.Text, { className: "title", children: "出行提醒: " }), e.subTitle] }) }, t);
                      }),
                    }),
                    (0, Ve.tZ)(g.View, { className: "notice-board-arr" }),
                  ],
                })
              );
            },
            Ke = (0, f.$j)(function (e) {
              var t = e.trainInfoModel,
                r = e.my12306Model;
              return {
                train: t.train,
                departDate: t.departDate,
                commonTipsList: t.commonTipsList,
                logedin: r.logedin,
              };
            })(function (e) {
              var t = e.train,
                r = e.departDate,
                n = e.commonTipsList,
                a = e.logedin;
              if (!t) return null;
              var i = (!!t && !!t.IsCanPointsPay) || !1;
              return (0,
              Ve.BX)(g.Block, { children: [n && n[0] && (0, Ve.tZ)(Re, { commonTipsList: n, onClickTips: te }), (0, Ve.tZ)(De, { train: t, departDate: r }), i && !a && (0, Ve.tZ)(Xe, { goTo12306: re, ubtTrace: V.ubtTrace })] });
            }),
            Ae = r(30301),
            Le = m.default.memo(function (e) {
              var t = e.friendTripInfo,
                r = void 0 === t ? {} : t,
                n = e.fromPage,
                a = void 0 === n ? "bookx" : n,
                i = r.passengers,
                o = void 0 === i ? [] : i;
              if (0 == o.length) return null;
              var c = o
                  .map(function (e) {
                    return ""
                      .concat(e.passengerName, " ")
                      .concat(e.seatNum, "(")
                      .concat(e.seatName, ")");
                  })
                  .join("；"),
                s = R.default.isTieyou
                  ? "https://images3.c-ctrip.com/ztrip/train.xin/2021_11/mini_seat_ty@3x.png"
                  : "https://images3.c-ctrip.com/ztrip/train.xin/2021_11/mini_seat_zx@3x.png";
              return (0,
              Ve.tZ)(g.View, { className: "friend-trip-info-banner ".concat("bookx" == a ? "changetop" : ""), children: (0, Ve.BX)(g.View, { className: "friend-trip-info-inner", children: [(0, Ve.tZ)(g.Image, { className: "seat-icon", src: s }), (0, Ve.BX)(g.View, { className: "seat-desc", children: ["好友坐席：", (0, Ve.tZ)(g.View, { className: "friend-trip-marquee-text", children: (0, Ve.tZ)(Ae.Z, { message: c, animationName: "friendTripInfoMarquee", mode: Ae.V.right }) })] })] }) });
            }),
            Fe = (0, f.$j)(function (e) {
              var t = e.trainInfoModel;
              return {
                isRecommendBuy: t.isRecommendBuy,
                friendTripInfo: t.friendTripInfo,
              };
            })(function (e) {
              var t = e.isRecommendBuy,
                r = e.friendTripInfo;
              return t ? (0, Ve.tZ)(Le, { friendTripInfo: r }) : null;
            });
          var Ge = function (e) {
              var t,
                r,
                n = e.memberShipBagInfo,
                a = e.train,
                i = e.chooseSeat,
                o = void 0 === i ? function () {} : i,
                c = e.onShowDrawer,
                s = void 0 === c ? function () {} : c,
                l = e.pickerSeat,
                u = void 0 === l ? function () {} : l,
                d = e.ubtTrace,
                f = void 0 === d ? function () {} : d,
                p = n.xMemberBagInfo,
                b = void 0 === p ? {} : p,
                h = n.vipSeatList,
                S = void 0 === h ? [] : h,
                v = n.cardCode,
                x = n.discountTag,
                T = void 0 === x ? "" : x,
                Z = n.firstOrderDiscountPrice,
                y = void 0 === Z ? 0 : Z,
                _ =
                  a.seats &&
                  a.seats.filter(function (e) {
                    return (
                      e.SeatInventory > 0 &&
                      S.some(function (t) {
                        return t.name === e.SeatName;
                      })
                    );
                  }),
                I =
                  _ &&
                  _.map(function (e) {
                    return (0,
                    N.Z)((0, N.Z)({}, e), {}, { ticketLeftDesc: e.SeatInventory < 20 ? "".concat(e.SeatInventory, "张") : "有票" });
                  }),
                P = I.map(function (e) {
                  return e.SeatName;
                }),
                k = (0, m.useState)("0"),
                B = (0, M.Z)(k, 2),
                V = B[0],
                D = B[1],
                C = b.title,
                z = b.jumpTitle,
                X = b.sendVipDesc,
                R = b.imageUrl,
                K = b.newSendVipImage,
                A = b.titlePrefix;
              if (
                ((0, m.useEffect)(
                  function () {
                    f("202012", {
                      keyname: "s_trn_z_trace_10650069070",
                      exposureType: "normal",
                      bizKey: "z_mini_xPage_xproduct_show",
                      getprofitName: A,
                      cardCode: v,
                    });
                  },
                  [v]
                ),
                (0, m.useEffect)(
                  function () {
                    var e = I[V];
                    u(e);
                  },
                  [V]
                ),
                !a || w.Z.isEmptyObject(b))
              )
                return null;
              var L =
                  (null === (t = I[V]) || void 0 === t
                    ? void 0
                    : t.ShowSeatPrice) || 0,
                F = L > y ? "￥".concat(L - y) : L,
                G =
                  null === (r = I[V]) || void 0 === r
                    ? void 0
                    : r.ticketLeftDesc,
                E = P[V];
              return (0, Ve.tZ)(g.Block, {
                children: (0, Ve.BX)(g.View, {
                  className: "train-member-season-card",
                  children: [
                    (0, Ve.BX)(g.View, {
                      className: "head",
                      children: [
                        (0, Ve.tZ)(g.View, {
                          className: "left-tag-content",
                          children: (0, Ve.tZ)(g.Image, {
                            className: "left-tag",
                            mode: "aspectFill",
                            src: R,
                          }),
                        }),
                        (0, Ve.tZ)(g.View, {
                          className: "desc",
                          children:
                            (null == C ? void 0 : C.split(" ")[1]) || "",
                        }),
                        (0, Ve.BX)(g.View, {
                          className: "button-arr",
                          id: "AKBM",
                          onClick: function () {
                            return s({ item: I[V], name: A });
                          },
                          children: [
                            (0, Ve.tZ)(g.Text, {
                              className: "text",
                              children: z,
                            }),
                            (0, Ve.tZ)(g.Image, {
                              className: "arr-img",
                              src: "https://images3.c-ctrip.com/ztrip/train_zhu/icon_v10_jt_Golden_12.png",
                              webp: !0,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, Ve.BX)(g.View, {
                      className: "content",
                      children: [
                        (0, Ve.BX)(g.View, {
                          className: "up",
                          children: [
                            (0, Ve.tZ)(g.Picker, {
                              mode: "selector",
                              range: P,
                              onChange: function (e) {
                                D(e.detail.value);
                              },
                              children: (0, Ve.BX)(g.View, {
                                className: "picker",
                                children: [
                                  (0, Ve.tZ)(g.View, {
                                    className: "name",
                                    children: E,
                                  }),
                                  (0, Ve.tZ)(g.View, {
                                    className: "triangle-img",
                                  }),
                                ],
                              }),
                            }),
                            (0, Ve.BX)(g.View, {
                              className: "price",
                              children: [
                                (0, Ve.BX)(g.View, {
                                  className: "flex",
                                  children: [
                                    (0, Ve.tZ)(g.View, { children: F }),
                                    (0, Ve.tZ)(g.View, {
                                      className: "desc flex flex-center",
                                      children:
                                        (null == C
                                          ? void 0
                                          : C.split(" ")[0]) || "",
                                    }),
                                  ],
                                }),
                                T &&
                                  (0, Ve.tZ)(g.View, {
                                    className: "discount-tag",
                                    children: T,
                                  }),
                              ],
                            }),
                            (0, Ve.tZ)(g.View, {
                              className: "count",
                              children: G,
                            }),
                            (0, Ve.tZ)(g.View, {
                              className: "btn",
                              id: "AKBN",
                              onClick: function () {
                                var e = I[V];
                                f("202013", {
                                  keyname: "c_trn_z_10650069070",
                                  bizKey: "z_mini_xPage_xproduct_click",
                                  getprofitName: A,
                                  clickType: "getReserve",
                                  seatType: e.SeatName,
                                  ticketPrice: e.ShowSeatPrice,
                                }),
                                  o({ seat: e, buyMemberSeasonCard: !0 });
                              },
                              children: "预订",
                            }),
                          ],
                        }),
                        (0, Ve.BX)(g.View, {
                          className: "bottom",
                          children: [
                            K &&
                              (0, Ve.tZ)(g.Image, {
                                mode: "heightFix",
                                className: "bottom-icon",
                                webp: !0,
                                src: K,
                              }),
                            (0, Ve.tZ)(g.View, {
                              className: "desc",
                              children:
                                X &&
                                X.map(function (e, t) {
                                  return (0,
                                  Ve.BX)(Ve.HY, { children: [(0, Ve.tZ)(g.Text, { className: "text", children: e }), t !== X.length - 1 && (0, Ve.tZ)(g.Text, { className: "split-line" })] });
                                }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              });
            },
            Ee = (0, f.$j)(function (e) {
              var t = e.trainInfoModel,
                r = e.productModel,
                n = e.secSkillModel;
              return {
                train: t.train,
                isReschedule: t.isReschedule,
                memberShipBagInfo: r.memberShipBagInfo,
                memberSeasonCardVisible: r.memberSeasonCardVisible,
                isMemberSeatCardHeader: r.isMemberSeatCardHeader,
                isPreSecKill: !!n.isPreSecKill,
              };
            })(function (e) {
              var t = e.train,
                r = e.isReschedule,
                n = e.memberShipBagInfo,
                a = e.memberSeasonCardVisible,
                i = e.isMemberSeatCardHeader,
                o = e.isPreSecKill;
              return !a || r || o || i
                ? null
                : (0, Ve.tZ)(Ge, {
                    memberShipBagInfo: n,
                    train: t,
                    chooseSeat: function (e) {
                      return Q(e);
                    },
                    onShowDrawer: function (e) {
                      return (function (e) {
                        Be({
                          toast: {
                            toastCode: D.seasonMemberShipDrawer,
                            data: {
                              pickerSeat: V.getState().productModel.pickerSeat,
                              content:
                                V.getState().productModel
                                  .seasonMemberShipDrawerInfo,
                            },
                          },
                        }),
                          V.ubtTrace("202013", {
                            keyname: "c_trn_z_10650069070",
                            bizKey: "z_mini_xPage_xproduct_click",
                            getprofitName: e.name,
                            clickType: "detailExpand",
                            seatType: e.item.SeatName,
                            ticketPrice: e.item.ShowSeatPrice,
                          });
                      })(e);
                    },
                    pickerSeat: ee,
                    ubtTrace: V.ubtTrace,
                  });
            });
          var He,
            qe = function (e) {
              var t,
                r,
                n = e.memberShipBagInfo,
                a = e.train,
                i = e.chooseSeat,
                o = void 0 === i ? function () {} : i,
                c = e.onShowDrawer,
                s = void 0 === c ? function () {} : c,
                l = e.pickerSeat,
                u = void 0 === l ? function () {} : l,
                d = e.ubtTrace,
                f = void 0 === d ? function () {} : d,
                p = n.xMemberBagInfo,
                b = void 0 === p ? {} : p,
                h = n.vipSeatList,
                S = void 0 === h ? [] : h,
                v = n.cardCode,
                x = n.discountTag,
                T = void 0 === x ? "" : x,
                Z = n.firstOrderDiscountPrice,
                y = void 0 === Z ? 0 : Z,
                _ =
                  a.seats &&
                  a.seats.filter(function (e) {
                    return (
                      e.SeatInventory > 0 &&
                      S.some(function (t) {
                        return t.name === e.SeatName;
                      })
                    );
                  }),
                I =
                  _ &&
                  _.map(function (e) {
                    return (0,
                    N.Z)((0, N.Z)({}, e), {}, { ticketLeftDesc: e.SeatInventory < 20 ? "剩".concat(e.SeatInventory, "张") : "有票" });
                  }),
                P = I.map(function (e) {
                  return e.SeatName;
                }),
                k = (0, m.useState)("0"),
                B = (0, M.Z)(k, 2),
                V = B[0],
                D = B[1],
                C = b.topAreaVipInfoEntity,
                z = void 0 === C ? {} : C,
                X = b.titlePrefix,
                K = void 0 === X ? "" : X;
              if (
                ((0, m.useEffect)(
                  function () {
                    f("202012", {
                      keyname: "s_trn_z_trace_10650069070",
                      exposureType: "normal",
                      bizKey: "z_mini_xPage_xproduct_show",
                      getprofitName: K,
                      cardCode: v,
                    });
                  },
                  [v]
                ),
                (0, m.useEffect)(
                  function () {
                    var e = I[V];
                    u(e);
                  },
                  [V]
                ),
                !a || w.Z.isEmptyObject(b))
              )
                return null;
              var A = z.unionVipRights,
                L = void 0 === A ? [] : A,
                F = z.arrowIcon,
                G = z.vipButtonText,
                E =
                  (null === (t = I[V]) || void 0 === t
                    ? void 0
                    : t.ShowSeatPrice) || 0,
                H = E > y ? "￥".concat(E - y) : E,
                q =
                  null === (r = I[V]) || void 0 === r
                    ? void 0
                    : r.ticketLeftDesc,
                U = P[V];
              return (0, Ve.tZ)(g.Block, {
                children: (0, Ve.BX)(g.View, {
                  className: "train-member-seat-card-header",
                  children: [
                    (0, Ve.BX)(g.View, {
                      className: "head",
                      children: [
                        (0, Ve.tZ)(g.ScrollView, {
                          scrollX: !0,
                          scrollWithAnimation: !0,
                          className: "union-vip-rights",
                          children:
                            (null == L ? void 0 : L.length) > 0 &&
                            L.map(function (e, t) {
                              return (0,
                              Ve.tZ)(g.View, { className: "item-box", children: (0, Ve.BX)(g.View, { className: "rights-item", children: [(0, Ve.tZ)(g.Image, { className: "icon", src: e.icon, webp: !0 }), (0, Ve.tZ)(g.View, { className: "title", children: e.title })] }) }, "".concat(t, "-union-vip-rights"));
                            }),
                        }),
                        (0, Ve.tZ)(g.View, {
                          className: "button-arr",
                          id: "AKBO",
                          onClick: function () {
                            return s({ item: I[V], name: K });
                          },
                          children: (0, Ve.tZ)(g.Image, {
                            className: "arrow-icon",
                            mode: "aspectFill",
                            src: F,
                            webp: !0,
                          }),
                        }),
                      ],
                    }),
                    (0, Ve.tZ)(g.View, {
                      className: "content",
                      children: (0, Ve.BX)(g.View, {
                        className: "up",
                        children: [
                          (0, Ve.tZ)(g.Picker, {
                            mode: "selector",
                            range: P,
                            onChange: function (e) {
                              D(e.detail.value);
                            },
                            children: (0, Ve.BX)(g.View, {
                              className: "picker",
                              children: [
                                (0, Ve.tZ)(g.View, {
                                  className: "name",
                                  children: U,
                                }),
                                (0, Ve.tZ)(g.View, {
                                  className: "triangle-img",
                                }),
                              ],
                            }),
                          }),
                          (0, Ve.BX)(g.View, {
                            className: "price",
                            children: [
                              (0, Ve.BX)(g.View, {
                                className: "flex",
                                children: [
                                  (0, Ve.tZ)(g.Text, { children: H }),
                                  (0, Ve.tZ)(g.Text, {
                                    className: "text flex flex-center",
                                    children: "+".concat(G),
                                  }),
                                ],
                              }),
                              T &&
                                (0, Ve.tZ)(g.View, {
                                  className: "discount-tag",
                                  children: T,
                                }),
                            ],
                          }),
                          (0, Ve.tZ)(g.View, {
                            className: "count",
                            children: q,
                          }),
                          (0, Ve.tZ)(g.View, {
                            className: "btn ".concat(
                              R.default.isTieyou ? "ty" : "zx"
                            ),
                            id: "AKBP",
                            onClick: function () {
                              var e = I[V];
                              f("202013", {
                                keyname: "c_trn_z_10650069070",
                                bizKey: "z_mini_xPage_xproduct_click",
                                getprofitName: K,
                                clickType: "getReserve",
                                seatType: e.SeatName,
                                ticketPrice: e.ShowSeatPrice,
                              }),
                                o({ seat: e, buyMemberSeasonCard: !0 });
                            },
                            children: "预订",
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              });
            },
            Ue = (0, f.$j)(function (e) {
              var t = e.trainInfoModel,
                r = e.productModel;
              return {
                train: t.train,
                isReschedule: t.isReschedule,
                memberShipBagInfo: r.memberShipBagInfo,
                memberSeasonCardVisible: r.memberSeasonCardVisible,
                isMemberSeatCardHeader: r.isMemberSeatCardHeader,
                pickerSeat: r.pickerSeat,
                seasonMemberShipDrawerInfo: r.seasonMemberShipDrawerInfo,
              };
            })(function (e) {
              var t = e.train,
                r = e.isReschedule,
                n = e.memberShipBagInfo,
                a = e.memberSeasonCardVisible,
                i = e.isMemberSeatCardHeader,
                o = e.pickerSeat,
                c = e.seasonMemberShipDrawerInfo;
              return !a || r
                ? null
                : i
                ? (0, Ve.tZ)(qe, {
                    memberShipBagInfo: n,
                    train: t,
                    chooseSeat: function (e) {
                      return Q(e);
                    },
                    onShowDrawer: function () {
                      return Be({
                        toast: {
                          toastCode: D.seasonMemberShipDrawer,
                          data: { pickerSeat: o, content: c },
                        },
                      });
                    },
                    pickerSeat: ee,
                    ubtTrace: V.ubtTrace,
                  })
                : null;
            }),
            je = r(22276),
            Oe = r(34229),
            Ye = r(17368),
            Je = function (e, t) {
              var r =
                e.SeatInventory > 0
                  ? "预订"
                  : "无座" == e.SeatName
                  ? "抢票"
                  : "候补抢票";
              return t && (r = e.SeatInventory > 0 ? "改签" : "改签抢票"), r;
            },
            We = function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                t = arguments.length > 1 ? arguments[1] : void 0,
                r = arguments.length > 2 ? arguments[2] : void 0,
                n =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : function () {};
              "grab24Hours" === e.grabBoxName
                ? "exposure" === t
                  ? n("s_trn_z_10650069070", {
                      exposureType: "normal",
                      bizKey: "z_xpage_grab_salea24hzrq_module_show",
                      researchCode: r,
                    })
                  : "click" === t &&
                    n("c_trn_z_10650069070", {
                      bizKey: "z_xpage_grab_salea24hzrq_module_click",
                      researchCode: r,
                    })
                : "grabGreenChannel" === e.grabBoxName
                ? "exposure" === t
                  ? n("s_trn_z_10650069070", {
                      exposureType: "normal",
                      bizKey: "z_xpage_grab_saleaxq_module_show",
                      researchCode: r,
                    })
                  : "click" === t &&
                    n("c_trn_z_10650069070", {
                      bizKey: "z_xpage_grab_saleaxq_module_click",
                      researchCode: r,
                    })
                : "memberForRob" === e.grabBoxName
                ? "exposure" === t
                  ? n("s_trn_z_10650069070", {
                      exposureType: "normal",
                      bizKey: "z_xpage_grab_salevip_module_show",
                      researchCode: r,
                    })
                  : "click" === t &&
                    n("c_trn_z_10650069070", {
                      bizKey: "z_xpage_grab_salevip_module_click",
                      researchCode: r,
                    })
                : "grabSeatUpgrade" === e.grabBoxName
                ? "exposure" === t
                  ? n("TZWXpage_UpSeatButton_exposure", {
                      PageId: "10650069070",
                    })
                  : "click" === t &&
                    n("TZWXpage_UpSeatButton_click", { PageId: "10650069070" })
                : "exposure" === t
                ? n("s_trn_z_10650069070", {
                    exposureType: "normal",
                    bizKey: "z_xpage_grab_nomal_module_show",
                    researchCode: r,
                  })
                : "click" === t &&
                  n("c_trn_z_10650069070", {
                    bizKey: "z_xpage_grab_nomal_module_click",
                    researchCode: r,
                  });
            },
            $e = {
              grab24Hours:
                "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/06/icon_linea_10_quanyi.webp",
              grabGreenChannel:
                "https://images3.c-ctrip.com/ztrip/train.song/order_details/V10.0/xy/icon_xqy@3x.webp",
              memberForRob:
                "https://images3.c-ctrip.com/ztrip/train_xie/2022-06/icon_dg_3.png",
              grabSeatUpgrade:
                "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/06/icon_linea_10_quanyi.webp",
            },
            Qe = {
              data: { bizKey: "z_mini_xPage_intelligenceMore_show" },
              ubtKeyName: "s_trn_z_trace_10650069070",
            },
            et = [],
            tt = ["二等座", "硬座", "硬卧", "无座"],
            rt = function (e) {
              var t = e.grabBoxProduct,
                r = void 0 === t ? {} : t,
                n = e.seatIndex,
                a = (0, m.useState)(0),
                i = (0, M.Z)(a, 2),
                o = i[0],
                c = i[1];
              return (
                (0, m.useEffect)(function () {
                  c(1e3);
                  var e = setTimeout(function () {
                    c(0);
                  }, 2e3);
                  return function () {
                    clearTimeout(e);
                  };
                }, []),
                "memberForRob" === r.grabBoxName
                  ? (0, Ve.BX)(Ve.HY, {
                      children: [
                        r.nodes &&
                          (0, Ve.tZ)(g.ScrollView, {
                            scrollX: !0,
                            className: "product-box",
                            enableFlex: !0,
                            scrollWithAnimation: !0,
                            scrollLeft: o,
                            children: r.nodes.map(function (e) {
                              return (0,
                              Ve.BX)(g.View, { className: "item", style: "grab24Hours" === r.grabBoxName ? "font-size: 20rpx" : "", children: [(0, Ve.tZ)(g.Image, { className: "desc-icon", webp: !0, src: $e[r.grabBoxName] }), (0, Ve.tZ)(Oe.ZtRichText, { space: "nbsp", className: "rich-text", nodes: w.Z.convertAppTextToHtmlStr(e) })] }, "".concat(n, "_d"));
                            }),
                          }),
                        r.priceDesc &&
                          (0, Ve.BX)(g.View, {
                            className: "desc-price",
                            children: ["+", r.priceDesc],
                          }),
                      ],
                    })
                  : (0, Ve.BX)(Ve.HY, {
                      children: [
                        r.nodes &&
                          r.nodes.map(function (e) {
                            return (0,
                            Ve.BX)(g.View, { className: "item", style: "grab24Hours" === r.grabBoxName ? "font-size: 20rpx" : "", children: [(0, Ve.tZ)(g.Image, { className: "desc-icon", webp: !0, src: $e[r.grabBoxName] }), (0, Ve.tZ)(Oe.ZtRichText, { space: "nbsp", nodes: w.Z.convertAppTextToHtmlStr(e) })] }, "".concat(n, "_d"));
                          }),
                        r.price &&
                          (0, Ve.tZ)(g.View, {
                            className: "price",
                            children: "+￥".concat(r.price, "/人"),
                          }),
                      ],
                    })
              );
            },
            nt = function (e) {
              var t = e.isPreSecKill,
                r = e.train,
                n = e.subTrains,
                a = void 0 === n ? [] : n,
                i = e.isReschedule,
                o = e.isStudent,
                c = e.nightEleDeliverySeatInfos,
                s = void 0 === c ? [] : c,
                l = e.grab24HoursInfo,
                u = e.grabGreenChannelInfo,
                d = e.memberForRobInfo,
                f = e.grabSeatUpgradeInfos,
                p = e.chooseSeat,
                h = e.checkCombineSeat,
                S = e.experimentCode,
                v = e.isCommonGrabBtnTop,
                x = void 0 !== v && v,
                w = e.seatGrabProductSequenceInfos,
                T = void 0 === w ? [] : w,
                Z = e.ubtTrace,
                y = void 0 === Z ? function () {} : Z,
                _ = e.onShowSeatPriceModal,
                I = e.onShowMemberProductInfo,
                P = void 0 === I ? function () {} : I,
                k = e.onShowSeatUpgradeDrawer,
                B = void 0 === k ? function () {} : k,
                V = (0, m.useState)(!1),
                D = (0, M.Z)(V, 2),
                C = D[0],
                X = D[1],
                K = (0, m.useState)(""),
                A = (0, M.Z)(K, 2),
                L = A[0],
                G = A[1],
                E = (0, m.useState)(""),
                H = (0, M.Z)(E, 2),
                q = H[0],
                U = H[1],
                j = (0, m.useRef)({}).current;
              (0, m.useEffect)(
                function () {
                  a.length > 0 &&
                    2 == a[0].type &&
                    y(202012, {
                      exposureType: "normal",
                      bizKey: "z_mini_xpage_zhcx_plan_show",
                      type: "combine",
                    }),
                    a.length > 0 &&
                      3 == a[0].type &&
                      y(202012, {
                        exposureType: "normal",
                        bizKey: "z_mini_xpage_zhcx_plan_show",
                        type: "cross",
                      }),
                    a.length > 0 &&
                      [1, 4].includes(a[0].type) &&
                      y(202012, {
                        exposureType: "normal",
                        bizKey: "z_mini_xpage_zhcx_plan_show",
                        type: 1 == a[0].type ? "buy_grab" : "grab_buy",
                      }),
                    a.length > 0 &&
                      5 == a[0].type &&
                      y(202012, {
                        exposureType: "normal",
                        bizKey: "z_mini_xpage_zhcx_plan_show",
                        type: "combine_cross",
                      }),
                    a.length > 0 &&
                      [1, 2, 3, 4].includes(a[0].type) &&
                      y("s_trn_z_trace_10650069070", {
                        bizKey: "z_mini_xPage_intelligence_originalFirst_show",
                        originalFirstPlan: a[0].type,
                      });
                },
                [a]
              ),
                (0, m.useEffect)(
                  function () {
                    r &&
                      s &&
                      y("s_trn_z_trace_10650069070", {
                        bizKey: "z_mini_xPage_nightAgent_drawer_show",
                      });
                  },
                  [s]
                );
              var O = (0, m.useMemo)(
                function () {
                  if (t) return [];
                  var e = [];
                  return (
                    a
                      .filter(function (e) {
                        return [1, 2, 3, 4, 5].includes(e.type);
                      })
                      .forEach(function (t) {
                        e.some(function (e) {
                          return e.type === t.type;
                        }) || e.push(t);
                      }),
                    e.map(function (e, t) {
                      return (0, N.Z)(
                        (0, N.Z)(
                          {},
                          (function (e) {
                            var t = e.subTrainTripCard,
                              r = e.type,
                              n = t.seatName,
                              a = t.additionSeatName,
                              i = t.totalPrice,
                              o = t.ticketLeftDesc,
                              c = t.button;
                            return (0, N.Z)(
                              {
                                isSubTrain: !0,
                                isCombinedSeat: 2 === r,
                                isStride: 3 === r,
                                isBuyRob: 1 === r,
                                isRobBuy: 4 === r,
                                isCombineBuyMore: 5 === r,
                                SeatName: ""
                                  .concat(n)
                                  .concat(a ? "+".concat(a) : ""),
                                SeatPrice: i,
                                SeatInventory: 1,
                                ticketLeftDesc: o,
                                seatBtnText:
                                  (null == c ? void 0 : c.value) || "预订",
                              },
                              e
                            );
                          })(e)
                        ),
                        {},
                        { _subTrainIndex: t, _isSubTrain: !0 }
                      );
                    })
                  );
                },
                [a]
              );
              if (!r) return (0, Ve.tZ)(g.View, {});
              var Y =
                r.seats &&
                r.seats.map(function (e) {
                  return (0,
                  N.Z)((0, N.Z)({}, e), {}, { ticketLeftDesc: r.isPreSale ? "未开售" : e.SeatInventory <= 0 ? "无票" : e.SeatInventory < 20 ? "剩".concat(e.SeatInventory, "张") : "有票", seatBtnText: t ? "预订" : r.isPreSale ? "预约抢票" : Je(e, i) });
                });
              s &&
                Y.forEach(function (e) {
                  s.forEach(function (t) {
                    t.name === e.SeatName &&
                      (e.nightEleDeliverySeatDesc = t.nightEleDeliverySeatDesc);
                  });
                }),
                l &&
                  Y.forEach(function (e) {
                    var t;
                    if (
                      null !== (t = l.seats) &&
                      void 0 !== t &&
                      t.some(function (t) {
                        return t === e.SeatName;
                      })
                    ) {
                      var r,
                        n,
                        a = (0, N.Z)({}, l);
                      if (
                        ((a.grabBoxName = "grab24Hours"),
                        (a.code = a.experimentCode),
                        Array.isArray(l.salePriceInfoList))
                      ) {
                        var i = l.salePriceInfoList.find(function (t) {
                          return t.seatName === e.SeatName;
                        });
                        i &&
                          ((a.price = i.price),
                          (a.type = i.salePriceCode),
                          (a.goodsInfo = i.goodsInfo));
                      }
                      var o =
                        null ===
                          (n = (
                            (null ===
                              (r = T.find(function (t) {
                                return t.seatName === e.SeatName;
                              })) || void 0 === r
                              ? void 0
                              : r.seatGrabProductSequences) || []
                          ).find(function (e) {
                            return e.productType === l.productType;
                          })) || void 0 === n
                          ? void 0
                          : n.sequence;
                      2 === o
                        ? ((a.position = "second"),
                          (e.grabBoxSecondProduct = a),
                          (j.grab24Hours = "second"))
                        : 1 === o &&
                          ((a.position = "first"),
                          (j.grab24Hours = "first"),
                          (e.grabBoxProduct = a));
                    }
                  }),
                u &&
                  Y.forEach(function (e) {
                    u.grabGreenChannels.forEach(function (t) {
                      if (t.seatName === e.SeatName) {
                        var r,
                          n,
                          a,
                          i =
                            (null === (r = t.greenChannelProducts) ||
                            void 0 === r
                              ? void 0
                              : r.filter(function (e) {
                                  return "普通抢票" !== e.title;
                                })[0]) || {};
                        (i.grabBoxName = "grabGreenChannel"),
                          (i.nodes = i.tagList),
                          (i.tag = i.productTag),
                          (i.code = i.productCode),
                          (i.type = i.type),
                          (i.goodsInfo = i.goodsInfo);
                        var o =
                          null ===
                            (a = (
                              (null ===
                                (n = T.find(function (t) {
                                  return t.seatName === e.SeatName;
                                })) || void 0 === n
                                ? void 0
                                : n.seatGrabProductSequences) || []
                            ).find(function (e) {
                              return e.productType === u.productType;
                            })) || void 0 === a
                            ? void 0
                            : a.sequence;
                        2 === o
                          ? ((e.grabBoxSecondProduct = i),
                            (j.grabGreenChannel = "second"))
                          : 1 === o &&
                            ((e.grabBoxProduct = i),
                            (j.grabGreenChannel = "first"));
                      }
                    });
                  }),
                d &&
                  Y.forEach(function (e) {
                    d.forEach(function (t) {
                      if (t.seatName === e.SeatName) {
                        var r,
                          n,
                          a = JSON.parse(t.vipDetailJsonInfo),
                          i = a.vipDrawerInfo,
                          o = a.deductPrice,
                          c = void 0 === o ? 0 : o,
                          s = (0, N.Z)({}, i);
                        (s.grabBoxName = "memberForRob"),
                          (s.icon =
                            "https://images3.c-ctrip.com/ztrip/train.song/order_details/V10.0/xy/icon_wyqp@3x.webp"),
                          (s.nodes = s.openCardDescs),
                          (s.deductPrice = c);
                        var l =
                          null ===
                            (n = (
                              (null ===
                                (r = T.find(function (t) {
                                  return t.seatName === e.SeatName;
                                })) || void 0 === r
                                ? void 0
                                : r.seatGrabProductSequences) || []
                            ).find(function (e) {
                              return e.productType === t.productType;
                            })) || void 0 === n
                            ? void 0
                            : n.sequence;
                        2 === l
                          ? ((e.grabBoxSecondProduct = s),
                            (j.memberForRob = "second"))
                          : 1 === l &&
                            ((e.grabBoxProduct = s),
                            (j.memberForRob = "first"));
                      }
                    });
                  });
              f &&
                Y.forEach(function (e) {
                  f.forEach(function (t) {
                    if (t.originSeatName === e.SeatName) {
                      var r,
                        n,
                        a = (0, N.Z)({}, t);
                      (a.grabBoxName = "grabSeatUpgrade"),
                        (a.icon = t.icon),
                        (a.nodes = t.nodes),
                        (a.title = t.productName),
                        (a.remark = t.remark),
                        (a.price = t.salePrice),
                        (a.extraTag = t.seatUpTag),
                        (a.toastInfo = (function () {
                          var e =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : {},
                            t = e.toastInfo || {},
                            r = t.serveInfos || [],
                            n =
                              r.find(function (e) {
                                return 1 === e.type;
                              }) || {},
                            a =
                              r.find(function (e) {
                                return 2 === e.type;
                              }) || {},
                            i =
                              r.find(function (e) {
                                return 3 === e.type;
                              }) || {};
                          return {
                            headTitle: t.headTitle,
                            headTag: e.seatUpTag,
                            serveName: "包含以下内容",
                            topServe: {
                              title: n.title,
                              subTitle: n.subTitle,
                              icon: n.icon,
                            },
                            bottomServes: [
                              {
                                title: a.title,
                                subTitle: a.subTitle,
                                icon: a.icon,
                              },
                              {
                                title: i.title,
                                subTitle: i.subTitle,
                                icon: i.icon,
                              },
                            ],
                            descs: t.descs,
                            price: e.salePrice,
                          };
                        })(t)),
                        (a.goodsInfo = t.goodsInfo),
                        (a.code = a.productCode),
                        (a.type = a.productType);
                      var i =
                        null ===
                          (n = (
                            (null ===
                              (r = T.find(function (t) {
                                return t.seatName === e.SeatName;
                              })) || void 0 === r
                              ? void 0
                              : r.seatGrabProductSequences) || []
                          ).find(function (e) {
                            return e.productType === a.productType;
                          })) || void 0 === n
                          ? void 0
                          : n.sequence;
                      2 === i
                        ? ((e.grabBoxSecondProduct = a),
                          (j.grabSeatUpgrade = "second"))
                        : 1 === i &&
                          ((e.grabBoxProduct = a),
                          (j.grabSeatUpgrade = "first"));
                    }
                  });
                });
              var J = function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    t = 0;
                  return (
                    e.grabBoxProduct &&
                      "memberForRob" === e.grabBoxProduct.grabBoxName &&
                      e.grabBoxProduct.deductPrice > 0 &&
                      (t = e.grabBoxProduct.deductPrice),
                    e.grabBoxSecondProduct &&
                      "memberForRob" === e.grabBoxSecondProduct.grabBoxName &&
                      e.grabBoxSecondProduct.deductPrice > 0 &&
                      (t = e.grabBoxSecondProduct.deductPrice),
                    t > 0
                  );
                },
                W = function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    r = 0,
                    n = e.ShowSeatPrice || "";
                  return (
                    t &&
                      "memberForRob" === t.grabBoxName &&
                      t.deductPrice > 0 &&
                      (r = t.deductPrice),
                    n - r || ""
                  );
                },
                $ = function () {
                  X(!0),
                    y("c_trn_z_10650069070", {
                      bizKey: "z_mini_xPage_intelligenceMore_click",
                      plans: O.map(function (e) {
                        return e.type;
                      }),
                      totalNum: O.length,
                    });
                },
                Q = function (e, t, r) {
                  var n =
                      arguments.length > 3 && void 0 !== arguments[3]
                        ? arguments[3]
                        : {},
                    a = n.nightSeatInfo;
                  if (e._isSubTrain) {
                    var i = e.SeatInventory > 0 ? 1 : 0;
                    et.push({
                      index: e._subTrainIndex,
                      type: e.type,
                      result: i,
                    }),
                      O.length > 1 &&
                        y("c_trn_z_10650069070", {
                          bizKey: "z_mini_xPage_intelligenceMore_plan_click",
                          plans: O.map(function (e) {
                            return e.type;
                          }),
                          totalNum: O.length,
                          steps: et,
                          clickResult: i,
                        }),
                      0 === e._subTrainIndex &&
                        1 === O.length &&
                        y("c_trn_z_10650069070", {
                          bizKey:
                            "z_mini_xPage_intelligence_originalFirst_click",
                          originalFirstPlan: e.type,
                          clickResult: i,
                        });
                  }
                  var o = {
                    seat: e,
                    buyMemberSeasonCard: !1,
                    isNightChoose: r,
                    xbookShowedProducts: j,
                    xbookSelectedProduct: t,
                    chooseNightSeatInfo: a,
                  };
                  p(o);
                };
              if (O.length > 0) {
                var ee =
                    O.length <= 1
                      ? []
                      : C
                      ? O.slice(1)
                      : [{ isShowMoreSubTrainBtn: !0 }],
                  te = O[0].subTrainTripCard.totalPrice,
                  re = Y.findIndex(function (e) {
                    return te < e.SeatPrice;
                  });
                re < 0 && (re = Y.length),
                  Y.splice.apply(Y, [re, 0, O[0]].concat((0, je.Z)(ee)));
              }
              var ne = function (e, t, r) {
                  "普通预订" === t
                    ? (We({}, "click", S, y), Q(e, r, !1))
                    : (We(r, "click", S, y), Q(e, r, !1));
                },
                ae = function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    t = arguments.length > 1 ? arguments[1] : void 0;
                  switch (e.grabBoxName) {
                    case "grabGreenChannel":
                      var r =
                        "https://pages.c-ctrip.com/ztrip/document/zx_axqpfw.html";
                      R.default.isTieyou &&
                        (r =
                          "https://pages.c-ctrip.com/ztrip/document/ty_axqpfw.html"),
                        F.Z.twebview({ data: { url: r } });
                      break;
                    case "grab24Hours":
                      var n =
                        "https://market.suanya.com/document/static/zx_24zrqpfw.html";
                      R.default.isTieyou &&
                        (n =
                          "https://market.suanya.com/document/static/ty_24zrqpfw.html"),
                        F.Z.twebview({ data: { url: n } });
                      break;
                    case "memberForRob":
                      var a = t.ShowSeatPrice || t.SeatPrice,
                        i = {
                          seat: t,
                          buyMemberSeasonCard: !1,
                          isNightChoose: !1,
                          xbookShowedProducts: j,
                          xbookSelectedProduct: e,
                          seatPrice: a,
                        };
                      P(i);
                      break;
                    case "grabSeatUpgrade":
                      B(e.toastInfo);
                  }
                },
                ie = function () {
                  (0, z.getCurrentPage)().showCommonDialog({
                    title: "风险提示",
                    content:
                      "若接受上车补票方案，请主动找列车员补票。利用“买短乘长”故意逃票属于违法行为。情节严重的将被追究法律责任。",
                  });
                },
                oe = !t && x;
              return (0, Ve.tZ)(g.View, {
                className: "seat-list",
                children:
                  Y &&
                  Y.map(function (e, n) {
                    return e.isShowMoreSubTrainBtn
                      ? (0, Ve.BX)(g.View, {
                          className: "show-more-view autoExpose",
                          id: "AKBT",
                          onClick: $,
                          "data-expose": Qe,
                          children: [
                            "更多有票方案",
                            (0, Ve.tZ)(g.Text, {
                              className:
                                " ifont-triangle iconfont show-more-triangle",
                            }),
                          ],
                        })
                      : (0, Ve.BX)(g.Block, {
                          children: [
                            (0, Ve.BX)(
                              g.View,
                              {
                                className: "seat "
                                  .concat(
                                    q.includes("".concat(n)) ||
                                      L.includes("".concat(n))
                                      ? "border-bottom-white"
                                      : "",
                                    " "
                                  )
                                  .concat(
                                    n !== Y.length - 1 &&
                                      Y[n + 1].isShowMoreSubTrainBtn
                                      ? "before-show-more"
                                      : ""
                                  ),
                                children: [
                                  (0, Ve.BX)(g.View, {
                                    className: "name-content flex flex-column",
                                    children: [
                                      (0, Ve.tZ)(g.View, {
                                        className: "name flex flex-center",
                                        children: (0, Ve.BX)(g.View, {
                                          className: "con flex flex-center",
                                          children: [
                                            e.SeatName,
                                            [1, 3, 4, 5].includes(e.type)
                                              ? (0, Ve.BX)(g.View, {
                                                  className:
                                                    "seat-tip flex flex-center",
                                                  id: "AKBU",
                                                  onClick: ie.bind(void 0),
                                                  children: [
                                                    "提示",
                                                    (0, Ve.tZ)(g.Text, {
                                                      className:
                                                        "iconfont ifont-arr",
                                                    }),
                                                  ],
                                                })
                                              : (0, Ve.BX)(g.Block, {
                                                  children: [
                                                    tt.includes(e.SeatName) &&
                                                      o &&
                                                      (0, Ve.tZ)(g.View, {
                                                        className:
                                                          "carriage-icon",
                                                        children: "学",
                                                      }),
                                                    (null == r
                                                      ? void 0
                                                      : r.IsCanSilent) &&
                                                      0 === n &&
                                                      (0, Ve.tZ)(g.View, {
                                                        className:
                                                          "carriage-icon",
                                                        children: "静",
                                                      }),
                                                  ],
                                                }),
                                          ],
                                        }),
                                      }),
                                      (e.isCombinedSeat || e.isStride) &&
                                        (0, Ve.BX)(g.View, {
                                          className: "combine-seat-tag",
                                          id: "AKBV",
                                          onClick: function () {
                                            return h(e);
                                          },
                                          children: [
                                            (0, Ve.tZ)(g.Text, {
                                              children: e.typeNamePrefix || "",
                                            }),
                                            (0, Ve.tZ)(g.Text, {
                                              className:
                                                "ifont-detail iconfont",
                                            }),
                                          ],
                                        }),
                                      (e.isBuyRob || e.isRobBuy) &&
                                        (0, Ve.BX)(g.View, {
                                          className: "buy-rob-tag",
                                          id: "AKBW",
                                          onClick: function () {
                                            return h(e);
                                          },
                                          children: [
                                            (0, Ve.tZ)(Ae.Z, {
                                              message: ""
                                                .concat(e.typeNamePrefix || "")
                                                .concat(
                                                  e.typeNamePostfix ? "，" : ""
                                                )
                                                .concat(
                                                  e.typeNamePostfix || ""
                                                ),
                                              customDuration: 2,
                                              animationName: "marqueeAnimation",
                                              mode: "enterFromRight",
                                            }),
                                            (0, Ve.tZ)(g.Text, {
                                              className:
                                                "ifont-detail iconfont",
                                            }),
                                          ],
                                        }),
                                      e.isCombineBuyMore &&
                                        (0, Ve.BX)(g.View, {
                                          className: "combine-seat-tag",
                                          id: "AKBX",
                                          onClick: function () {
                                            return h(e);
                                          },
                                          children: [
                                            (0, Ve.tZ)(g.Text, {
                                              children: e.typeNamePrefix || "",
                                            }),
                                            (0, Ve.tZ)(g.Text, {
                                              className:
                                                "ifont-detail iconfont",
                                            }),
                                          ],
                                        }),
                                    ],
                                  }),
                                  (0, Ve.BX)(g.View, {
                                    className: "price",
                                    id: "AKBY",
                                    onClick: function () {
                                      return (function (e) {
                                        if (
                                          !e.isSubTrain &&
                                          e.SeatName.includes("卧")
                                        ) {
                                          var t = {
                                            info: e.OtherSeatInfoList,
                                            seatName: e.SeatName,
                                          };
                                          _(t);
                                        }
                                      })(e);
                                    },
                                    children: [
                                      (0, Ve.tZ)(g.Text, {
                                        children: "￥".concat(
                                          e.ShowSeatPrice || e.SeatPrice
                                        ),
                                      }),
                                      !e.isSubTrain &&
                                        e.SeatName.includes("卧") &&
                                        (0, Ve.tZ)(g.Text, {
                                          className: "ifont-triangle iconfont",
                                        }),
                                    ],
                                  }),
                                  (0, Ve.tZ)(g.View, {
                                    className: "count ".concat(
                                      0 == e.SeatInventory ? "disable" : ""
                                    ),
                                    children: e.ticketLeftDesc,
                                  }),
                                  (0, Ve.tZ)(g.View, {
                                    id: "AKGC",
                                    className: "btn ".concat(
                                      e.nightEleDeliverySeatDesc ||
                                        (q.includes("".concat(n)) && t)
                                        ? "normoal-border"
                                        : e.SeatInventory > 0 || t
                                        ? "normal"
                                        : q.includes("".concat(n))
                                        ? "grab-hours"
                                        : "rob"
                                    ),
                                    onClick: function () {
                                      return (function (e, r) {
                                        var n = "".concat(r);
                                        if (e.nightEleDeliverySeatDesc) {
                                          var a = L;
                                          if (L.includes(n)) {
                                            if (a === n) a = "";
                                            else {
                                              var i = a.split(n);
                                              a = i.join("");
                                            }
                                            G(a);
                                          } else {
                                            G(a + n);
                                          }
                                        } else if (
                                          e.grabBoxProduct ||
                                          e.grabBoxSecondProduct ||
                                          t
                                        ) {
                                          var o = q;
                                          if (q.includes(n)) {
                                            if (o === n) o = "";
                                            else {
                                              var c = o.split(n);
                                              o = c.join("");
                                            }
                                            U(o);
                                          } else {
                                            var s =
                                              (null == Y ? void 0 : Y[r]) || {};
                                            s.grabBoxProduct &&
                                              We(
                                                s.grabBoxProduct,
                                                "exposure",
                                                S,
                                                y
                                              ),
                                              s.grabBoxSecondProduct &&
                                                We(
                                                  s.grabBoxSecondProduct,
                                                  "exposure",
                                                  S,
                                                  y
                                                ),
                                              We({}, "exposure", S, y),
                                              U(o + n);
                                          }
                                        } else Q(e, !1, !1);
                                      })(e, n);
                                    },
                                    children: q.includes("".concat(n))
                                      ? "收起"
                                      : t
                                      ? "提前下单"
                                      : e.seatBtnText,
                                  }),
                                ],
                              },
                              n
                            ),
                            L.includes(n) &&
                              e.nightEleDeliverySeatDesc &&
                              (0, Ve.tZ)(g.View, {
                                className: "normal-night-content",
                                children: e.nightEleDeliverySeatDesc.map(
                                  function (t, r) {
                                    return (0, Ve.BX)(
                                      g.View,
                                      {
                                        className: "night-box ".concat(
                                          0 === r ? "grab-up" : "grab-bottom"
                                        ),
                                        children: [
                                          (0, Ve.tZ)(g.Image, {
                                            className: "icon",
                                            src: t.buyWayIconUrl,
                                          }),
                                          (0, Ve.BX)(g.View, {
                                            className: "desc ".concat(
                                              0 === r ? "desc-bottom" : ""
                                            ),
                                            children: [
                                              (0, Ve.BX)(g.View, {
                                                className: "up",
                                                children: [
                                                  (0, Ve.tZ)(g.Text, {
                                                    className: "left",
                                                    children: t.buyWayName,
                                                  }),
                                                  t.priceDesc &&
                                                    (0, Ve.tZ)(g.Text, {
                                                      className: "right",
                                                      children: t.priceDesc,
                                                    }),
                                                ],
                                              }),
                                              (0, Ve.tZ)(g.View, {
                                                className: "bottom",
                                                children:
                                                  t.buyWayDesc &&
                                                  t.buyWayDesc.map(function (
                                                    e
                                                  ) {
                                                    return (0, Ve.BX)(
                                                      g.View,
                                                      {
                                                        className: "item",
                                                        children: [
                                                          t.iconUrl &&
                                                            (0, Ve.tZ)(
                                                              g.Image,
                                                              {
                                                                className:
                                                                  "desc-icon",
                                                                src: t.iconUrl,
                                                              }
                                                            ),
                                                          (0, Ve.tZ)(g.Text, {
                                                            children: e,
                                                          }),
                                                        ],
                                                      },
                                                      "".concat(n, "_d")
                                                    );
                                                  }),
                                              }),
                                            ],
                                          }),
                                          (0, Ve.tZ)(g.View, {
                                            id: "AKGD",
                                            className: "box-btn "
                                              .concat(
                                                0 === r ? "box-btn-bottom" : "",
                                                " "
                                              )
                                              .concat(
                                                e.SeatInventory > 0
                                                  ? "normal"
                                                  : "rob"
                                              ),
                                            onClick: function () {
                                              return (function (e, t) {
                                                t.bookType
                                                  ? (y("c_trn_z_10650069070", {
                                                      bizKey:
                                                        "z_mini_xPage_nightAgent_drawer_cilck",
                                                      clickType: 1,
                                                    }),
                                                    Q(e, !1, !0, {
                                                      nightSeatInfo: t,
                                                    }))
                                                  : (y("c_trn_z_10650069070", {
                                                      bizKey:
                                                        "z_mini_xPage_nightAgent_drawer_cilck",
                                                      clickType: 0,
                                                    }),
                                                    Q(e, !1, !1));
                                              })(e, t);
                                            },
                                            children: e.seatBtnText,
                                          }),
                                        ],
                                      },
                                      "".concat(n, "_night")
                                    );
                                  }
                                ),
                              }),
                            (e.grabBoxProduct || e.grabBoxSecondProduct || t) &&
                              q.includes("".concat(n)) &&
                              (0, Ve.BX)(g.View, {
                                className: "normal-night-content",
                                children: [
                                  oe &&
                                    (0, Ve.BX)(Ve.HY, {
                                      children: [
                                        (0, Ve.BX)(g.View, {
                                          className: "night-box grab-bottom",
                                          children: [
                                            (0, Ve.tZ)(g.Image, {
                                              className: "icon",
                                              src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/V10.0/xy/icon_ptqp@3x.webp",
                                              webp: !0,
                                            }),
                                            (0, Ve.BX)(g.View, {
                                              className: "desc",
                                              children: [
                                                (0, Ve.BX)(g.View, {
                                                  className: "up",
                                                  children: [
                                                    (0, Ve.tZ)(g.Text, {
                                                      className: "left",
                                                      children: "普通抢票",
                                                    }),
                                                    J(e) &&
                                                      (0, Ve.BX)(g.View, {
                                                        className:
                                                          "ticket-price",
                                                        children: ["¥", W(e)],
                                                      }),
                                                  ],
                                                }),
                                                (0, Ve.tZ)(g.View, {
                                                  className: "bottom",
                                                  children: (0, Ve.tZ)(g.View, {
                                                    className: "item",
                                                    children:
                                                      "将为您持续监控余票",
                                                  }),
                                                }),
                                              ],
                                            }),
                                            (0, Ve.tZ)(g.View, {
                                              id: "AKGE",
                                              className: "box-btn ".concat(
                                                e.SeatInventory > 0
                                                  ? "normal"
                                                  : "rob"
                                              ),
                                              onClick: function () {
                                                return ne(e, "普通预订");
                                              },
                                              children: "抢票",
                                            }),
                                          ],
                                        }),
                                        (0, Ve.tZ)(g.View, {
                                          className: "box-line",
                                        }),
                                      ],
                                    }),
                                  e.grabBoxProduct &&
                                    (0, Ve.BX)(Ve.HY, {
                                      children: [
                                        (0, Ve.BX)(g.View, {
                                          className: "grab-up-box",
                                          children: [
                                            (0, Ve.BX)(g.View, {
                                              className: "night-box grab-up",
                                              children: [
                                                (0, Ve.tZ)(g.Image, {
                                                  className: "icon",
                                                  src: e.grabBoxProduct.icon,
                                                  webp: !0,
                                                }),
                                                (0, Ve.BX)(g.View, {
                                                  className:
                                                    "desc desc-bottom-v2",
                                                  children: [
                                                    (0, Ve.BX)(g.View, {
                                                      className: "up",
                                                      children: [
                                                        (0, Ve.tZ)(g.View, {
                                                          className: "left",
                                                          children:
                                                            e.grabBoxProduct
                                                              .title,
                                                        }),
                                                        J(e) &&
                                                          (0, Ve.BX)(g.View, {
                                                            className:
                                                              "ticket-price",
                                                            children: [
                                                              "¥",
                                                              W(
                                                                e,
                                                                e.grabBoxProduct
                                                              ),
                                                            ],
                                                          }),
                                                        e.grabBoxProduct.tag &&
                                                          (0, Ve.tZ)(g.View, {
                                                            className: "tag",
                                                            children:
                                                              e.grabBoxProduct
                                                                .tag,
                                                          }),
                                                        (0, Ve.tZ)(Ye.Z, {
                                                          mode: "img",
                                                          iconUrl:
                                                            "https://images3.c-ctrip.com/ztrip/train_zhu/icon_ty_info_12.png",
                                                          customizeStyle: {
                                                            icon: "width: "
                                                              .concat(
                                                                b().pxTransform(
                                                                  24
                                                                ),
                                                                ";height: "
                                                              )
                                                              .concat(
                                                                b().pxTransform(
                                                                  24
                                                                )
                                                              ),
                                                          },
                                                          onClickHandle:
                                                            function () {
                                                              return ae(
                                                                e.grabBoxProduct,
                                                                e
                                                              );
                                                            },
                                                        }),
                                                      ],
                                                    }),
                                                    (0, Ve.tZ)(g.View, {
                                                      className: "bottom",
                                                      children: (0, Ve.tZ)(rt, {
                                                        grabBoxProduct:
                                                          e.grabBoxProduct,
                                                        seatIndex: n,
                                                      }),
                                                    }),
                                                  ],
                                                }),
                                                (0, Ve.tZ)(g.View, {
                                                  id: "AKGF",
                                                  className: "box-btn ".concat(
                                                    e.SeatInventory > 0
                                                      ? "normal"
                                                      : "rob"
                                                  ),
                                                  onClick: function () {
                                                    return ne(
                                                      e,
                                                      "通道预订",
                                                      e.grabBoxProduct
                                                    );
                                                  },
                                                  children: "抢票",
                                                }),
                                              ],
                                            }),
                                            "grabSeatUpgrade" ===
                                              e.grabBoxProduct.grabBoxName &&
                                              (0, Ve.BX)(g.View, {
                                                className: "extra-info",
                                                children: [
                                                  (0, Ve.tZ)(g.View, {
                                                    className: "extra-tag",
                                                    children:
                                                      e.grabBoxProduct.extraTag,
                                                  }),
                                                  (0, Ve.tZ)(g.View, {
                                                    className: "line",
                                                  }),
                                                  (0, Ve.tZ)(g.View, {
                                                    className: "extra-remark",
                                                    children:
                                                      e.grabBoxProduct.remark,
                                                  }),
                                                ],
                                              }),
                                          ],
                                        }),
                                        oe &&
                                          e.grabBoxSecondProduct &&
                                          (0, Ve.tZ)(g.View, {
                                            className: "box-line",
                                          }),
                                      ],
                                    }),
                                  e.grabBoxSecondProduct &&
                                    (0, Ve.BX)(Ve.HY, {
                                      children: [
                                        (0, Ve.BX)(g.View, {
                                          className: "grab-up-box",
                                          children: [
                                            (0, Ve.BX)(g.View, {
                                              className: "night-box grab-up",
                                              style: "border-radius: 0;",
                                              children: [
                                                (0, Ve.tZ)(g.Image, {
                                                  className: "icon",
                                                  src: e.grabBoxSecondProduct
                                                    .icon,
                                                  webp: !0,
                                                }),
                                                (0, Ve.BX)(g.View, {
                                                  className:
                                                    "desc desc-bottom-v2",
                                                  children: [
                                                    (0, Ve.BX)(g.View, {
                                                      className: "up",
                                                      children: [
                                                        (0, Ve.tZ)(g.View, {
                                                          className: "left",
                                                          children:
                                                            e
                                                              .grabBoxSecondProduct
                                                              .title,
                                                        }),
                                                        J(e) &&
                                                          (0, Ve.BX)(g.View, {
                                                            className:
                                                              "ticket-price",
                                                            children: [
                                                              "¥",
                                                              W(
                                                                e,
                                                                e.grabBoxSecondProduct
                                                              ),
                                                            ],
                                                          }),
                                                        e.grabBoxSecondProduct
                                                          .tag &&
                                                          (0, Ve.tZ)(g.View, {
                                                            className: "tag",
                                                            children:
                                                              e
                                                                .grabBoxSecondProduct
                                                                .tag,
                                                          }),
                                                        (0, Ve.tZ)(Ye.Z, {
                                                          mode: "img",
                                                          iconUrl:
                                                            "https://images3.c-ctrip.com/ztrip/train_zhu/icon_ty_info_12.png",
                                                          customizeStyle: {
                                                            icon: "width: "
                                                              .concat(
                                                                b().pxTransform(
                                                                  24
                                                                ),
                                                                "; height: "
                                                              )
                                                              .concat(
                                                                b().pxTransform(
                                                                  24
                                                                )
                                                              ),
                                                          },
                                                          onClickHandle:
                                                            function () {
                                                              return ae(
                                                                e.grabBoxSecondProduct,
                                                                e
                                                              );
                                                            },
                                                        }),
                                                      ],
                                                    }),
                                                    (0, Ve.tZ)(g.View, {
                                                      className: "bottom",
                                                      children: (0, Ve.tZ)(rt, {
                                                        grabBoxProduct:
                                                          e.grabBoxSecondProduct,
                                                        seatIndex: n,
                                                      }),
                                                    }),
                                                  ],
                                                }),
                                                (0, Ve.tZ)(g.View, {
                                                  id: "AKGG",
                                                  className: "box-btn ".concat(
                                                    e.SeatInventory > 0
                                                      ? "normal"
                                                      : "rob"
                                                  ),
                                                  onClick: function () {
                                                    return ne(
                                                      e,
                                                      "通道预订",
                                                      e.grabBoxSecondProduct
                                                    );
                                                  },
                                                  children: "抢票",
                                                }),
                                              ],
                                            }),
                                            "grabSeatUpgrade" ===
                                              e.grabBoxSecondProduct
                                                .grabBoxName &&
                                              (0, Ve.BX)(g.View, {
                                                className: "extra-info",
                                                children: [
                                                  (0, Ve.tZ)(g.View, {
                                                    className: "extra-tag",
                                                    children:
                                                      e.grabBoxSecondProduct
                                                        .extraTag,
                                                  }),
                                                  (0, Ve.tZ)(g.View, {
                                                    className: "line",
                                                  }),
                                                  (0, Ve.tZ)(g.View, {
                                                    className: "extra-remark",
                                                    children:
                                                      e.grabBoxSecondProduct
                                                        .remark,
                                                  }),
                                                ],
                                              }),
                                          ],
                                        }),
                                        !oe &&
                                          (0, Ve.tZ)(g.View, {
                                            className: "box-line",
                                          }),
                                      ],
                                    }),
                                  t
                                    ? (0, Ve.BX)(g.View, {
                                        className: "night-box grab-bottom",
                                        children: [
                                          (0, Ve.tZ)(g.Image, {
                                            className: "icon",
                                            src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/V10.0/xy/icon_ptqp@3x.webp",
                                            webp: !0,
                                          }),
                                          (0, Ve.BX)(g.View, {
                                            className: "desc",
                                            children: [
                                              (0, Ve.BX)(g.View, {
                                                className: "up",
                                                children: [
                                                  (0, Ve.tZ)(g.Text, {
                                                    className: "left",
                                                    children: "秒杀抢票",
                                                  }),
                                                  (0, Ve.BX)(g.View, {
                                                    className: "ticket-price",
                                                    children: [
                                                      "¥",
                                                      e.ShowSeatPrice ||
                                                        e.SeatPrice,
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              (0, Ve.tZ)(g.View, {
                                                className: "bottom",
                                                children: (0, Ve.tZ)(g.View, {
                                                  className: "item",
                                                  children:
                                                    "开售享自动秒杀抢票",
                                                }),
                                              }),
                                            ],
                                          }),
                                          (0, Ve.tZ)(g.View, {
                                            className: "box-btn normal",
                                            id: "AKBZ",
                                            onClick: function () {
                                              return ne(e, "秒杀预订", {
                                                _isPreSecKillProduct: !0,
                                              });
                                            },
                                            children: "提前下单",
                                          }),
                                        ],
                                      })
                                    : oe
                                    ? (0, Ve.tZ)(g.View, {})
                                    : (0, Ve.BX)(g.View, {
                                        className: "night-box grab-bottom",
                                        children: [
                                          (0, Ve.tZ)(g.Image, {
                                            className: "icon",
                                            src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/V10.0/xy/icon_ptqp@3x.webp",
                                            webp: !0,
                                          }),
                                          (0, Ve.BX)(g.View, {
                                            className: "desc",
                                            children: [
                                              (0, Ve.BX)(g.View, {
                                                className: "up",
                                                children: [
                                                  (0, Ve.tZ)(g.Text, {
                                                    className: "left",
                                                    children: "普通抢票",
                                                  }),
                                                  J(e) &&
                                                    (0, Ve.BX)(g.View, {
                                                      className: "ticket-price",
                                                      children: ["¥", W(e)],
                                                    }),
                                                ],
                                              }),
                                              (0, Ve.tZ)(g.View, {
                                                className: "bottom",
                                                children: (0, Ve.tZ)(g.View, {
                                                  className: "item",
                                                  children:
                                                    "将为您持续监控余票",
                                                }),
                                              }),
                                            ],
                                          }),
                                          (0, Ve.tZ)(g.View, {
                                            id: "AKGH",
                                            className: "box-btn ".concat(
                                              e.SeatInventory > 0
                                                ? "normal"
                                                : "rob"
                                            ),
                                            onClick: function () {
                                              return ne(e, "普通预订");
                                            },
                                            children: "抢票",
                                          }),
                                        ],
                                      }),
                                ],
                              }),
                          ],
                        });
                  }),
              });
            },
            at = function (e) {
              var t = e.robRateInfo;
              if (!t) return (0, Ve.tZ)(g.View, {});
              return (0, Ve.BX)(g.View, {
                className: "train-rob-info-banner ".concat(
                  R.default.isTieyou ? "ty" : ""
                ),
                id: "AKBS",
                onClick: function () {
                  t.isPreSale ||
                    F.Z.twebview({
                      data: {
                        url: "https://market.suanya.com/activity/train/2019hbpintro/?partner=zhixing&needcache=1",
                      },
                    });
                },
                children: [
                  (0, Ve.tZ)(g.Image, {
                    className: "background-img",
                    src: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/23_01/bg_notice.webp",
                    webp: !0,
                  }),
                  (0, Ve.BX)(g.View, {
                    className: "box",
                    children: [
                      (0, Ve.tZ)(Oe.ZtRichText, {
                        className: "tit",
                        space: "ensp",
                        nodes: null == t ? void 0 : t.title,
                      }),
                      (0, Ve.tZ)(Oe.ZtRichText, {
                        className: "sub-tit",
                        space: "ensp",
                        nodes: w.Z.convertAppTextToHtmlStr(
                          null == t ? void 0 : t.subTitle
                        ),
                      }),
                    ],
                  }),
                ],
              });
            },
            it = function (e) {
              var t = e.saleDate,
                r = e.isPreSecKill;
              if (
                ((0, m.useEffect)(
                  function () {
                    r &&
                      V.ubtTrace("TZWXpage_SeckillBanner_exposure", {
                        PageId: V.getPage().pageId,
                      });
                  },
                  [r]
                ),
                !r)
              )
                return (0, Ve.tZ)(g.View, {});
              var n = "该车次".concat(
                x()(t).format("MM月DD日HH:mm开售"),
                "，可提前下单"
              );
              return (0, Ve.BX)(g.View, {
                className: "trn-x-secskill-banner",
                children: [
                  (0, Ve.tZ)(g.Image, {
                    className: "background-img",
                    mode: "widthFix",
                    src: "https://images3.c-ctrip.com/ztrip/train_snow/2023_03/img_tqxd@3x.png",
                  }),
                  (0, Ve.BX)(g.View, {
                    className: "box",
                    children: [
                      (0, Ve.tZ)(Oe.ZtRichText, {
                        className: "tit",
                        space: "ensp",
                        nodes: n,
                      }),
                      (0, Ve.BX)(g.View, {
                        className: "sub-tit",
                        children: [
                          "开售倒计时",
                          (0, Ve.tZ)(Oe.ZtCountdown, {
                            className: "sec-kill-count-down",
                            isShowHour: !1,
                            format: { minute: "分", second: "秒" },
                            endTime: x()(t).format("YYYY-MM-DD HH:mm:ss"),
                            onTimeup: function () {
                              V.showCommonDialog({
                                content: "秒杀已结束，请返回刷新列表页重试",
                                onButtonClick: function () {
                                  V.navigateBack();
                                },
                              }),
                                le();
                            },
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              });
            },
            ot = (0, f.$j)(function (e) {
              var t = e.trainInfoModel,
                r = e.productModel,
                n = e.otherTrainsModel,
                a = e.grabModel,
                i = e.secSkillModel;
              return {
                isCommonGrabBtnTop: a.isCommonGrabBtnTop,
                train: t.train,
                successRateInfo: a.successRateInfo,
                subTrains: n.subTrains,
                isReschedule: t.isReschedule,
                isStudent: t.isStudent,
                nightEleDeliverySeatInfos: r.nightEleDeliverySeat,
                grab24HoursInfo: a.grab24HoursInfo,
                grabGreenChannelInfo: a.grabGreenChannelInfo,
                memberForRobInfo: a.memberForRobInfo,
                grabSeatUpgradeInfos: a.grabSeatUpgradeInfos,
                grabProductExperiment: a.grabProductExperiment,
                seatGrabProductSequenceInfos: a.seatGrabProductSequenceInfos,
                isPreSecKill: !!i.isPreSecKill,
              };
            })(function (e) {
              var t = e.train,
                r = e.isCommonGrabBtnTop,
                n = e.successRateInfo,
                a = e.subTrains,
                i = e.isReschedule,
                o = e.isStudent,
                c = e.nightEleDeliverySeatInfos,
                s = e.grab24HoursInfo,
                l = e.grabGreenChannelInfo,
                u = e.memberForRobInfo,
                d = e.grabSeatUpgradeInfos,
                m = e.grabProductExperiment,
                f = e.seatGrabProductSequenceInfos,
                p = e.isPreSecKill;
              return (0, Ve.BX)(g.View, {
                className: "seat-box",
                children: [
                  !p && (0, Ve.tZ)(at, { robRateInfo: n }),
                  (0, Ve.tZ)(it, {
                    saleDate: null == t ? void 0 : t._saleDate,
                    isPreSecKill: p,
                  }),
                  (0, Ve.tZ)(nt, {
                    isCommonGrabBtnTop: r,
                    isPreSecKill: p,
                    train: t,
                    subTrains: a,
                    isReschedule: i,
                    isStudent: o,
                    nightEleDeliverySeatInfos: c,
                    grab24HoursInfo: s,
                    grabGreenChannelInfo: l,
                    memberForRobInfo: u,
                    grabSeatUpgradeInfos: d,
                    experimentCode: m,
                    seatGrabProductSequenceInfos: f,
                    chooseSeat: function (e) {
                      return Q(e);
                    },
                    checkCombineSeat: function (e) {
                      return (function (e) {
                        var t = 0;
                        e.isCombinedSeat
                          ? (t = 2)
                          : e.isStride
                          ? (t = 3)
                          : e.isBuyRob
                          ? (t = 1)
                          : e.isRobBuy
                          ? (t = 4)
                          : e.isCombineBuyMore && (t = 5),
                          Be({
                            toast: {
                              toastCode: D.combineSeatIntroDialog,
                              data: {
                                subTrainType: t,
                                clickSubTrain: e,
                                train: V.getState().trainInfoModel.train,
                                departDate:
                                  V.getState().trainInfoModel.departDate,
                              },
                            },
                          });
                      })(e);
                    },
                    ubtTrace: V.ubtTrace,
                    onShowSeatPriceModal: function (e) {
                      return Be({
                        toast: { toastCode: D.seatPriceModal, data: e },
                      });
                    },
                    onShowMemberProductInfo: function (e) {
                      return ce(e);
                    },
                    onShowSeatUpgradeDrawer: function (e) {
                      return se(e);
                    },
                  }),
                ],
              });
            }),
            ct = r(46408),
            st = function (e) {
              var t = e.sTSimilarTrainsInfo,
                r = e.onChooseWay;
              (0, m.useEffect)(
                function () {
                  ct.Z.refreshObserve(b().getCurrentInstance().page);
                },
                [t]
              );
              var n = (0, m.useState)(!1),
                a = (0, M.Z)(n, 2),
                i = a[0],
                o = a[1];
              if (!t) return null;
              null == t ||
                t.sTSimilarTrains.map(function (e) {
                  var t,
                    r = (null == e ? void 0 : e.sTSimilar4TrainDTO) || {},
                    n =
                      (null == r ||
                      null === (t = r.sTTransferDetails) ||
                      void 0 === t
                        ? void 0
                        : t[0]) || {},
                    a = (null == n ? void 0 : n.transferMinutes) || "0",
                    i = Number(a),
                    o = "换乘";
                  i > 60
                    ? (o = o + Math.floor(i / 60) + "时" + (i % 60) + "分")
                    : 60 === i
                    ? (o += "1时")
                    : (o = o + i + "分"),
                    (e.transferMinutesNumberStr = o);
                });
              console.log("sTSimilarTrainsInfo", JSON.stringify(t));
              var c = t.title,
                s = t.sTSimilarTrains,
                l = function (e) {
                  return s.length <= 3 || !!i || e < 3;
                };
              return (0, Ve.BX)(g.View, {
                className: "train-bookx-similarTravel-view",
                children: [
                  (0, Ve.tZ)(g.View, {
                    className: "tit-view",
                    children: (0, Ve.tZ)(g.Text, { children: c }),
                  }),
                  (0, Ve.BX)(g.View, {
                    className: "con-view",
                    children: [
                      s.map(function (e, t) {
                        var n,
                          a = e.sTSimilar4TrainDTO,
                          i = e.schemeInfoV1,
                          o = e.type,
                          c = e.transferMinutesNumberStr;
                        return (
                          l(t) &&
                          (0, Ve.tZ)(
                            g.View,
                            {
                              className: "st-train-li autoExpose",
                              "data-expose": {
                                data: {
                                  bizKey: "z_mini_xPage_transfer_recomend_show",
                                  recommendType: o,
                                  exposureIndex: t,
                                },
                                ubtKeyName: "s_trn_z_trace_10650069070",
                              },
                              children: (0, Ve.BX)(g.View, {
                                className: "content",
                                children: [
                                  (0, Ve.BX)(g.View, {
                                    className: "c-l",
                                    children: [
                                      (0, Ve.BX)(g.View, {
                                        className: "t-c-l",
                                        children: [
                                          (0, Ve.BX)(g.View, {
                                            className: "station from",
                                            children: [
                                              (0, Ve.tZ)(g.View, {
                                                className: "time",
                                                children: a.startTime,
                                              }),
                                              (0, Ve.tZ)(g.View, {
                                                className: "name",
                                                children: a.fromStation,
                                              }),
                                            ],
                                          }),
                                          a.sTTransferDetails.map(function (
                                            e,
                                            t
                                          ) {
                                            return (0, Ve.BX)(
                                              g.View,
                                              {
                                                className: "transfer-info",
                                                children: [
                                                  (0, Ve.tZ)(g.View, {
                                                    className: "desc",
                                                    children: e.transferDesc,
                                                  }),
                                                  (0, Ve.tZ)(g.View, {
                                                    className:
                                                      "transfer-station",
                                                    children:
                                                      e.transferAreaName,
                                                  }),
                                                  (0, Ve.tZ)(g.View, {
                                                    className: "desc",
                                                    children: c,
                                                  }),
                                                ],
                                              },
                                              t
                                            );
                                          }),
                                          (0, Ve.BX)(g.View, {
                                            className: "station to",
                                            children: [
                                              (0, Ve.BX)(g.View, {
                                                className: "time",
                                                children: [
                                                  a.arriveTime,
                                                  !!a.dayDiff &&
                                                    (0, Ve.BX)(g.View, {
                                                      className: "diff",
                                                      children: [
                                                        "+",
                                                        a.dayDiff,
                                                      ],
                                                    }),
                                                ],
                                              }),
                                              (0, Ve.tZ)(g.View, {
                                                className: "name",
                                                children: a.toStation,
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, Ve.BX)(g.View, {
                                        className: "b-c-l flex",
                                        children: [
                                          !!a.tag &&
                                            (0, Ve.tZ)(g.Text, {
                                              className: "tag",
                                              children: a.tag,
                                            }),
                                          (0, Ve.tZ)(g.View, {
                                            className: "split",
                                          }),
                                          (null === (n = a.sTTripDetails) ||
                                          void 0 === n
                                            ? void 0
                                            : n.length) &&
                                            (0, Ve.tZ)(g.View, {
                                              className:
                                                "flex-center detail-content",
                                              children: a.sTTripDetails.map(
                                                function (e, t) {
                                                  return (0, Ve.BX)(
                                                    g.View,
                                                    {
                                                      className: "flex-center",
                                                      children: [
                                                        (0, Ve.tZ)(g.View, {
                                                          className:
                                                            "index-text",
                                                          children: t + 1,
                                                        }),
                                                        (0, Ve.tZ)(g.View, {
                                                          children:
                                                            e.seatName + " 有",
                                                        }),
                                                      ],
                                                    },
                                                    "sTTripDetails_".concat(t)
                                                  );
                                                }
                                              ),
                                            }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, Ve.BX)(g.View, {
                                    className: "c-r",
                                    children: [
                                      (0, Ve.tZ)(g.View, {
                                        className: "price",
                                        children: a.totalPrice,
                                      }),
                                      (0, Ve.tZ)(g.View, {
                                        className: "buy-btn",
                                        id: "AKBQ",
                                        onClick: r.bind(void 0, {
                                          index: t,
                                          schemeInfoV1: i,
                                          type: o,
                                        }),
                                        children: "预订",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            },
                            t
                          )
                        );
                      }),
                      s.length > 3 &&
                        (0, Ve.tZ)(g.View, {
                          className: "show-more-content flex-center",
                          id: "AKBR",
                          onClick: function () {
                            o(!i);
                          },
                          children: i
                            ? (0, Ve.BX)(g.View, {
                                children: [
                                  "收起方案",
                                  (0, Ve.tZ)(g.Text, {
                                    className:
                                      "ifont2-shouqi_linea_12 iconfont2 arr-more",
                                  }),
                                ],
                              })
                            : (0, Ve.BX)(g.View, {
                                children: [
                                  "更多方案",
                                  (0, Ve.tZ)(g.Text, {
                                    className:
                                      "ifont2-zhankai_linea_12 iconfont2 arr-more",
                                  }),
                                ],
                              }),
                        }),
                    ],
                  }),
                ],
              });
            },
            lt = (0, f.$j)(function (e) {
              var t = e.otherTrainsModel,
                r = e.secSkillModel;
              return {
                sTSimilarTrainsInfo: t.sTSimilarTrainsInfo,
                isPreSecKill: !!r.isPreSecKill,
              };
            })(function (e) {
              var t = e.sTSimilarTrainsInfo;
              return e.isPreSecKill
                ? (0, Ve.tZ)(g.View, {})
                : (0, Ve.tZ)(st, {
                    sTSimilarTrainsInfo: t,
                    onChooseWay: pe.bind(void 0),
                  });
            }),
            ut = (0, f.$j)(function (e) {
              return { train: e.trainInfoModel.train };
            })(function (e) {
              var t = e.train;
              if (!t) return null;
              var r = (!!t && !!t.IsCanPointsPay) || !1;
              return r || (null != t && t.IsFastPass)
                ? (0, Ve.BX)(g.View, {
                    className: "bookx-tips",
                    children: [
                      (null == t ? void 0 : t.IsFastPass) &&
                        (0, Ve.BX)(g.View, {
                          className: "points-tips tips-bottom",
                          id: "AKBJ",
                          onClick: ke,
                          children: [
                            (0, Ve.tZ)(g.View, { className: "round" }),
                            (0, Ve.tZ)(g.Text, {
                              className: "txt",
                              children: "本车次为电子客票，可直接持证件乘车",
                            }),
                            (0, Ve.tZ)(g.Text, {
                              className: "iconfont ifont-qus qus-icon txt",
                            }),
                          ],
                        }),
                      r &&
                        (0, Ve.BX)(g.View, {
                          className: "points-tips",
                          id: "AKBK",
                          onClick: Pe,
                          children: [
                            (0, Ve.tZ)(g.View, { className: "round" }),
                            (0, Ve.tZ)(g.Text, {
                              className: "txt",
                              children: "本车次可使用12306积分抵扣票价",
                            }),
                            (0, Ve.tZ)(g.Text, {
                              className: "iconfont ifont-qus qus-icon txt",
                            }),
                          ],
                        }),
                    ],
                  })
                : null;
            }),
            dt = r(43809),
            mt = r(15125),
            ft = r(53346),
            pt = R.default.isTieyou
              ? "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/icon_wsjts%202@3x.webp"
              : "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/icon_wsjts@3x.webp",
            bt = function (e) {
              var t = e.show,
                r = e.priceModalInfo,
                n = e.onClose;
              if (!t) return (0, Ve.tZ)(g.View, {});
              var a = r.info,
                i = void 0 === a ? [] : a,
                o = r.seatName;
              return (0, Ve.tZ)(Oe.ZtDrawer, {
                show: t,
                onClose: n,
                onWrapClose: n,
                closeIconParams: {
                  type: "cancel",
                  size: "22px",
                  color: "#c3c3c3",
                },
                drawerStyle: {
                  backgroundColor: "#ffffff",
                  fontWeight: 600,
                  borderRadius: "40rpx 40rpx 0 0",
                },
                title: "".concat(o || "卧铺", "价格参考"),
                children: (0, Ve.tZ)(g.View, {
                  className: "train-bookx-seat-price-modal",
                  children:
                    (null == i ? void 0 : i.length) > 0
                      ? (0, Ve.BX)(g.View, {
                          className: "content",
                          children: [
                            (0, Ve.tZ)(g.View, {
                              className: "head-tips",
                              children:
                                "卧铺价格供参考，以实际出票结果价格为准",
                            }),
                            i.map(function (e, t) {
                              return (0,
                              Ve.BX)(g.View, { className: "price-item", children: [(0, Ve.tZ)(g.View, { className: "name", children: e.seatName }), (0, Ve.tZ)(g.View, { className: "price", children: "￥".concat(e.price) })] }, "".concat(t, "_seat_price"));
                            }),
                          ],
                        })
                      : (0, Ve.BX)(g.View, {
                          className: "no-info-content",
                          children: [
                            (0, Ve.tZ)(g.Image, {
                              className: "no-tips-img",
                              src: pt,
                              webp: !0,
                            }),
                            (0, Ve.tZ)(g.View, {
                              className: "text",
                              children: "抱歉，暂无具体卧铺信息",
                            }),
                            (0, Ve.tZ)(g.View, {
                              children:
                                "卧铺价格供参考，以实际出票结果价格为准",
                            }),
                          ],
                        }),
                }),
              });
            },
            ht = r(12386),
            gt = void 0,
            St = function () {},
            vt = function () {},
            xt = function (e) {
              var t = e.onRef,
                r = (0, m.useState)(null),
                n = (0, M.Z)(r, 2),
                a = n[0],
                i = n[1],
                o = (0, m.useState)(!1),
                c = (0, M.Z)(o, 2),
                s = c[0],
                l = c[1];
              (0, m.useImperativeHandle)(t, function () {
                return {
                  showToast: function (e) {
                    i(null == e ? void 0 : e.toast),
                      l(!0),
                      (St =
                        (null == e ? void 0 : e.onConfirm) || function () {}),
                      (vt =
                        (null == e ? void 0 : e.onCancel) || function () {});
                  },
                  closeToast: function () {
                    l(!1);
                  },
                };
              });
              var u = function () {
                for (
                  var e, t = arguments.length, r = new Array(t), n = 0;
                  n < t;
                  n++
                )
                  r[n] = arguments[n];
                null === (e = vt) ||
                  void 0 === e ||
                  e.call.apply(e, [gt].concat(r)),
                  l(!1),
                  (St = vt = function () {});
              };
              if (!s) return null;
              switch (a.toastCode) {
                case D.seasonMemberShipDrawer:
                  return (0, Ve.tZ)(dt.Z, {
                    visible: !0,
                    content: a.data.content,
                    onClose: u,
                    onConfirm: function () {
                      var e = {
                        seat: a.data.pickerSeat,
                        buyMemberSeasonCard: !0,
                      };
                      Q(e), u();
                    },
                  });
                case D.seatPriceModal:
                  return (0, Ve.tZ)(bt, {
                    show: !0,
                    onClose: u,
                    priceModalInfo: a.data,
                  });
                case D.combineSeatIntroDialog:
                  return (0, Ve.tZ)(mt.Z, {
                    visible: !0,
                    onClose: u,
                    type: a.data.subTrainType,
                    subTrain: a.data.clickSubTrain,
                    train: a.data.train,
                    departDate: a.data.departDate,
                  });
                case D.grabMemberShipDrawer:
                  return (0, Ve.tZ)(dt.Z, {
                    visible: !0,
                    content: a.data.content,
                    unionVipCode: a.data.unionVipCode,
                    onClose: u,
                    onConfirm: function (e) {
                      return (function () {
                        for (
                          var e, t = arguments.length, r = new Array(t), n = 0;
                          n < t;
                          n++
                        )
                          r[n] = arguments[n];
                        null === (e = St) ||
                          void 0 === e ||
                          e.call.apply(e, [gt].concat(r)),
                          l(!1),
                          (St = vt = function () {});
                      })(e);
                    },
                  });
                case D.grabSeatUpgradeDrawer:
                  return (0, Ve.tZ)(ft.Z, {
                    visible: !0,
                    content: a.data.content,
                    onClose: u,
                    ubtTrace: V.ubtTrace,
                  });
                case D.hotelCrossRulePop:
                  return (0, Ve.tZ)(ht.Z, {
                    visible: !0,
                    content: a.data,
                    onClose: u,
                  });
                default:
                  return null;
              }
            },
            wt = (0, f.$j)(function (e) {
              return {
                hotelTagCashBackJsonForXPage:
                  e.productModel.hotelTagCashBackJsonForXPage,
              };
            })(function (e) {
              var t = e.hotelTagCashBackJsonForXPage;
              if (!t) return null;
              var r = t.icon,
                n = t.content,
                a = t.crossRulePop;
              return (0, Ve.BX)(g.View, {
                className: "bookx-hotel-cash-back flex flex-center",
                id: "AKBL",
                onClick: function () {
                  return (function (e) {
                    Be({ toast: { toastCode: D.hotelCrossRulePop, data: e } });
                  })(a);
                },
                children: [
                  (0, Ve.tZ)(g.Image, { className: "icon-img", src: r }),
                  (0, Ve.tZ)(Oe.ZtRichText, {
                    className: "text",
                    nodes: w.Z.convertAppTextToHtmlStr(n),
                  }),
                  (0, Ve.tZ)(g.Image, {
                    className: "icon-tip",
                    src: "https://images3.c-ctrip.com/ztrip/train_xie/2022-08/icon_zs.png",
                  }),
                ],
              });
            }),
            Nt = r(58117),
            Tt = (0, f.$j)(function (e) {
              var t = e.otherTrainsModel,
                r = e.trainInfoModel;
              return {
                smartSchemeInfo: t.smartSchemeInfo,
                train: r.train,
                departDate: r.departDate,
              };
            })(function (e) {
              var t = e.smartSchemeInfo,
                r = e.train,
                n = e.departDate;
              if (!t) return null;
              var a = {
                fromStation: r.DepartStation,
                toStation: r.ArriveStation,
                trainNum: r.TrainNumber,
                runTime: r.RunTime,
                fromDate: n,
                fromTime: r.DepartTime,
                toTime: r.ArriveTime,
                source: "miniTrainTripDetail",
              };
              return (0,
              Ve.tZ)(Nt.Z, { smartSchemeInfo: t, trainInfo: a, isNewDesc: !0 });
            }),
            Zt =
              (0, S.h)(!1, { usePageWrapper: !0 })(
                (He = (function (e) {
                  (0, u.Z)(r, e);
                  var t = (0, d.Z)(r);
                  function r(e) {
                    var n;
                    return (
                      (0, c.Z)(this, r),
                      ((n = t.call(this, e)).store = V.create(
                        (0, l.Z)(n)
                      ).store),
                      (n.pageRootClassName = "train-bookx"),
                      (n.autoExpose = !0),
                      (n.pageId = "10650069070"),
                      (n.pageTitle = "车次详情页"),
                      (n.state = { initDataSuccess: !1 }),
                      n
                    );
                  }
                  return (
                    (0, s.Z)(r, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          Ze();
                        },
                      },
                      {
                        key: "onPullDownRefresh",
                        value: (function () {
                          var e = (0, o.Z)(
                            (0, i.Z)().mark(function e() {
                              return (0, i.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (
                                          ((e.t0 = !this.isFreezePullDown),
                                          !e.t0)
                                        ) {
                                          e.next = 4;
                                          break;
                                        }
                                        return (e.next = 4), Ze();
                                      case 4:
                                        b().stopPullDownRefresh();
                                      case 5:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "freezePullDown",
                        value: function () {
                          this.isFreezePullDown = !0;
                        },
                      },
                      {
                        key: "unfreezePullDown",
                        value: function () {
                          this.isFreezePullDown = !1;
                        },
                      },
                      {
                        key: "renderTitleView",
                        value: function () {
                          var e = (this.$instance.router.params || {})
                              .departDate,
                            t = void 0 === e ? "" : e,
                            r = x()(t).format("M月D日"),
                            n = w.Z.getCommonDayInfo(t);
                          return t
                            ? (0, Ve.tZ)(g.View, {
                                className: "hotel-booking-title",
                                children: (0, Ve.tZ)(g.View, {
                                  className: "title",
                                  children: "".concat(r, " ").concat(n, "出发"),
                                }),
                              })
                            : (0, Ve.tZ)(g.View, { children: "车次详情页" });
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this,
                            t = this.state.initDataSuccess;
                          return (0, Ve.BX)(f.zt, {
                            store: this.store,
                            children: [
                              (0, Ve.tZ)(Ke, {}),
                              (0, Ve.tZ)(Fe, {}),
                              (0, Ve.tZ)(Ue, {}),
                              (0, Ve.tZ)(ot, {}),
                              (0, Ve.tZ)(Ee, {}),
                              (0, Ve.tZ)(Tt, {}),
                              (0, Ve.tZ)(wt, {}),
                              (0, Ve.tZ)(lt, {}),
                              (0, Ve.tZ)(ut, {}),
                              t && (0, Ve.tZ)(h.Z, {}),
                              (0, Ve.tZ)(xt, {
                                onRef: function (t) {
                                  e.$CommonToast = t;
                                },
                              }),
                            ],
                          });
                        },
                      },
                    ]),
                    r
                  );
                })(m.default.Component))
              ) || He;
          Page(
            (0, a.createPageConfig)(
              Zt,
              "pages/train/bookx/bookx",
              { root: { cn: [] } },
              {
                navigationBarTitleText: "车次详情页",
                navigationBarBackgroundColor: "#0066E6",
                backgroundColorTop: "#F5F5F5",
                backgroundColorBottom: "#F5F5F5",
                enablePullDownRefresh: !0,
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
            98655, 35203, 4978, 31162, 77, 34335, 55525, 25323, 80391, 72407,
            80683, 67289, 72508, 53533, 31882, 59337, 30341, 51059, 19559,
            11216, 68592,
          ],
          function () {
            return (function (t) {
              return e((e.s = t));
            })(98943);
          }
        ),
          e.O();
      },
    ]);
})();
