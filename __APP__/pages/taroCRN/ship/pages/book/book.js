!(function () {
  "use strict";
  require("../../../sub-vendors.js"),
    require("../../../sub-common/efd0f73c48edfb2f4cf806204cb23544.js"),
    require("../../../sub-common/e006cce71bea1c38395fdd39436a77c2.js"),
    require("../../../sub-common/d89ce578031072031f3fc29a11a827dc.js"),
    require("../../../sub-common/85ff8bfdb9e5cfb18ee76e4e8cb46fa1.js"),
    require("../../../sub-common/c4422581445eda73db4c516eb8354cb7.js"),
    require("../../../sub-common/eb635746e4cf69f6f56cdca895562f47.js"),
    require("../../../sub-common/087ed44e3e56dbc6f151a4673bb163ed.js"),
    require("../../../sub-common/fb7248052b528df6da065d22b415ea8c.js"),
    require("../../../sub-common/6deb9d1305c2b84d9103247c2ddc9f3d.js"),
    require("../../../sub-common/8bd87e8d4f7c97dcb9e11d021209fdcc.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [20935],
      {
        76135: function (e, t, i) {
          var n,
            a = i(32180),
            r = i(57042),
            o = i(24460),
            l = i(81876),
            s = i(21867),
            c = i(86066),
            u = i(52500),
            d = i(65573),
            f = i(92954),
            m = i(71515),
            h = i(87298),
            p = i(23577),
            g = i(50196),
            v = i(298),
            N = {
              shiftInfoModel: {
                state: { shipInfo: null },
                reducers: {
                  setShipInfo: function (e, t) {
                    return (0, v.Z)((0, v.Z)({}, e), {}, { shipInfo: t });
                  },
                },
              },
              otherModel: {
                state: {
                  ticketPhoneNumber: "",
                  totalFeeWithoutCoupon: 0,
                  totalFee: 0,
                  seatTicketLeft: 0,
                  priceDetails: [],
                  isWithCar: !1,
                  carType: "",
                  carNum: "",
                  title: "",
                  busNotice: null,
                  supportCardList: [],
                  isForeign: !1,
                  isTimePeriod: 0,
                  timePeriodInfo: null,
                  selectedTimePeriod: "",
                },
                reducers: {
                  setState: function (e, t) {
                    return (0, v.Z)((0, v.Z)({}, e), t);
                  },
                  setBusNotice: function (e, t) {
                    return (0, v.Z)((0, v.Z)({}, e), {}, { busNotice: t });
                  },
                  setTitle: function (e, t) {
                    return (0, v.Z)((0, v.Z)({}, e), {}, { title: t });
                  },
                  setTicketPhoneNumber: function (e, t) {
                    return (0, v.Z)(
                      (0, v.Z)({}, e),
                      {},
                      { ticketPhoneNumber: t }
                    );
                  },
                  setTotalFee: function (e, t) {
                    return (0, v.Z)((0, v.Z)({}, e), {}, { totalFee: t });
                  },
                  setSeatTicketLeft: function (e, t) {
                    return (0, v.Z)((0, v.Z)({}, e), {}, { seatTicketLeft: t });
                  },
                  setPriceDetails: function (e, t) {
                    return (0, v.Z)((0, v.Z)({}, e), {}, { priceDetails: t });
                  },
                  setIsWithCar: function (e, t) {
                    return (0, v.Z)((0, v.Z)({}, e), {}, { isWithCar: t });
                  },
                  setCarType: function (e, t) {
                    return (0, v.Z)((0, v.Z)({}, e), {}, { carType: t });
                  },
                  setCarNum: function (e, t) {
                    return (0, v.Z)((0, v.Z)({}, e), {}, { carNum: t });
                  },
                },
              },
              passengerModel: {
                state: { allPasList: [], displayPasList: [], fetcher: null },
                reducers: {
                  setAllPasList: function (e, t) {
                    return (0, v.Z)((0, v.Z)({}, e), {}, { allPasList: t });
                  },
                  setDisplayPasList: function (e, t) {
                    return (0, v.Z)((0, v.Z)({}, e), {}, { displayPasList: t });
                  },
                  setFetcher: function (e, t) {
                    return (0, v.Z)((0, v.Z)({}, e), {}, { fetcher: t });
                  },
                },
              },
              couponModel: {
                state: { isShow: !1, couponList: [], selectedCoupon: null },
                reducers: {
                  setState: function (e, t) {
                    return (0, v.Z)((0, v.Z)({}, e), t);
                  },
                },
              },
              flightInfoModel: {
                state: {
                  isAirLine: 0,
                  airLineDesc: "",
                  flightNo: "",
                  flightDate: "",
                  flightTime: "",
                  flightDeparture: "",
                  flightDestination: "",
                  flightCompany: "",
                },
                reducers: {
                  setState: function (e, t) {
                    return (0, v.Z)((0, v.Z)({}, e), t);
                  },
                },
              },
            },
            Z = (0, g.M)({ models: N }),
            w = i(74921),
            C = i(79301),
            y = i(95308),
            x = i(35707),
            b = i(19972),
            T = i(981),
            D = i(21961),
            S = (function () {
              var e = (0, y.Z)(
                (0, C.Z)().mark(function e() {
                  var t, i, n;
                  return (0, C.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (0, b.Q)(),
                              (t = Z.getPage()),
                              (i = (null == t ? void 0 : t.queryParams) || {}),
                              (e.next = 6),
                              (0, D.ob)(i)
                            );
                          case 6:
                            if (
                              1 === (null == (n = e.sent) ? void 0 : n.code) &&
                              null != n &&
                              n.data
                            ) {
                              e.next = 10;
                              break;
                            }
                            return (
                              t.showCommonDialog({
                                content:
                                  (null == n ? void 0 : n.message) ||
                                  "网络异常，请稍后再试",
                                title: "温馨提示",
                                buttonName: "我知道了",
                                onButtonClick: function () {
                                  t.navigateBack();
                                },
                              }),
                              e.abrupt("return")
                            );
                          case 10:
                            return e.abrupt("return", n.data);
                          case 13:
                            (e.prev = 13),
                              (e.t0 = e.catch(0)),
                              console.log(e.t0),
                              (0, T.C)("网络异常，请稍后再试");
                          case 17:
                            return (e.prev = 17), (0, b.Z)(), e.finish(17);
                          case 20:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 13, 17, 20]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            I = function (e) {
              var t,
                i = Z.getDispatch(),
                n = i.shiftInfoModel,
                a = i.couponModel,
                r = i.otherModel,
                o = i.flightInfoModel;
              n.setShipInfo(e);
              var l = T.Z.isNotEmptyObj(
                  null == e ? void 0 : e.foreignPassenger
                ),
                s = l
                  ? null == e
                    ? void 0
                    : e.foreignPassenger
                  : null == e
                  ? void 0
                  : e.passenger;
              r.setState({ supportCardList: s || [], isForeign: l });
              var c = e.isTimePeriod,
                u = e.timePeriodInfo,
                d = e.isOpenCoupon,
                f = e.couponList,
                m = e.isAirLine;
              1 == c &&
                (null == u || null === (t = u.timePeriod) || void 0 === t
                  ? void 0
                  : t.length) > 0 &&
                r.setState({
                  isTimePeriod: c,
                  timePeriodInfo: u,
                  selectedTimePeriod: u.timePeriod[0],
                }),
                1 == m &&
                  o.setState({ isAirLine: 1, airLineDesc: e.airLineDesc }),
                1 == d &&
                  (null == f ? void 0 : f.length) > 0 &&
                  a.setState({ couponList: e.couponList });
            };
          !(function (e) {
            (e.PriceDetailDrawer = "PriceDetailDrawer"),
              (e.BookingRuleDrawer = "BookingRuleDrawer"),
              (e.CarTypeSelectDrawer = "CarTypeSelectDrawer"),
              (e.RuleDescDrawer = "RuleDescDrawer");
          })(n || (n = {}));
          var P = i(99090),
            V = i(49528),
            k = i(48813),
            M = (0, V.lW)({
              iconClose: { position: "absolute", top: 16, right: 16 },
            }),
            L = function (e) {
              var t = e.priceDetail,
                i = void 0 === t ? null : t,
                n = e.onClose;
              if (!i) return (0, k.tZ)(k.HY, {});
              var a = i.priceDetails || [];
              return (0, k.BX)(m.View, {
                className: "price-detail-content",
                children: [
                  (0, k.tZ)(m.View, {
                    onClick: n,
                    style: { position: "relative", zIndex: 1 },
                    children: (0, k.tZ)(P.bM, {
                      size: 24,
                      color: "#ccc",
                      style: M.iconClose,
                    }),
                  }),
                  (0, k.tZ)(m.View, {
                    className: "pd-title",
                    children: "价格明细",
                  }),
                  (0, k.BX)(m.View, {
                    className: "price-detail",
                    children: [
                      (0, k.BX)(m.View, {
                        className: "flex-align-items-center total flex-row",
                        children: [
                          (0, k.tZ)(m.Text, {
                            className: "tit_1",
                            children: "订单总价",
                          }),
                          (0, k.BX)(m.Text, {
                            className: "price",
                            children: ["¥", i.totalFee || 0],
                          }),
                        ],
                      }),
                      a.map(function (e, t) {
                        var i;
                        return (0, k.BX)(
                          m.View,
                          {
                            className: "detail-item",
                            children: [
                              (0, k.tZ)(m.View, { className: "split-line" }),
                              (0, k.tZ)(m.View, {
                                className: "tit_1 mb8",
                                children: e.title,
                              }),
                              null == e ||
                              null === (i = e.detailItems) ||
                              void 0 === i
                                ? void 0
                                : i.map(function (t, i) {
                                    return (0,
                                    k.BX)(m.View, { className: "sub-item flex-align-items-center flex-row", children: [(0, k.tZ)(m.Text, { className: "tit_2", children: t.name }), (0, k.tZ)(m.Text, { className: "price price_2", style: "deduction" == e.type ? (0, v.Z)((0, v.Z)({}, V.FS.zxRegular), {}, { color: "#FE4839" }) : V.FS.zxRegular, children: t.desc })] }, i);
                                  }),
                            ],
                          },
                          t
                        );
                      }),
                    ],
                  }),
                ],
              });
            },
            B = u.default.memo(L),
            X = i(90113),
            F = i(90129),
            R = i(79295).Z,
            z = i(98920).Z.getInstance("SHIP_MOBILE_NUMBER"),
            W = function (e) {
              var t,
                i = Z.getState().shiftInfoModel.shipInfo,
                n = i.vendor,
                a = i.website,
                r = i.fromStationName,
                o = i.toStationName,
                l = i.fromCityName,
                s = i.toCityName,
                c = i.shipName,
                u = i.fromDate,
                d = i.fromTime,
                f = i.foreignPassenger,
                m = i.passenger,
                h =
                  null === (t = Z.getPage().queryParams) || void 0 === t
                    ? void 0
                    : t.seatName,
                g = T.Z.isNotEmptyObj(f),
                v = g ? f : m,
                N = Z.getPage().queryParams;
              return {
                ship: {
                  isForeign: g,
                  vendor: n,
                  website: a,
                  fromStationName: r,
                  toStationName: o,
                  fromCityName: l,
                  toCityName: s,
                  shipName: c,
                  fromDate: u,
                  fromTime: d,
                },
                psg: e && T.Z.getPassengerFormatData(e, v, g, !0),
                seatName: h,
                utmSource: N.utmSource,
                isForeign: g,
                baseCommonTypes: {
                  channel: T.Z.getChannelValue(),
                  partner: p.Z.partner,
                },
              };
            },
            j = (function () {
              var e = (0, y.Z)(
                (0, C.Z)().mark(function e(t) {
                  var i, n, a, r, o, l, s, c, u, d;
                  return (0, C.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (i = !1),
                              (e.prev = 1),
                              (n = W(t)),
                              (e.next = 5),
                              (0, D.Wj)(n)
                            );
                          case 5:
                            if (1 !== (a = e.sent).code || !a.data) {
                              e.next = 19;
                              break;
                            }
                            if (
                              ((r = a.data),
                              (o = r.ticketType),
                              (l = r.ticketList),
                              (s = r.ticketTypeId),
                              (c = r.isMinor),
                              (u = r.ticketTitle),
                              (t.isMinor = c),
                              l && !(l.length <= 1))
                            ) {
                              e.next = 13;
                              break;
                            }
                            return (
                              (t.ticketTypeId = s || "adult"),
                              (t.passengerTypeDesc = o || "成人票"),
                              e.abrupt("return", !0)
                            );
                          case 13:
                            if (
                              l.some(function (e) {
                                return e.ticketTypeId == t.ticketTypeId;
                              })
                            ) {
                              e.next = 16;
                              break;
                            }
                            return (
                              Z.showMultiButtonDialog({
                                title: "温馨提示",
                                content: "".concat(u, "(").concat(
                                  l
                                    .map(function (e) {
                                      return e.ticketType;
                                    })
                                    .join("/"),
                                  ")"
                                ),
                                leftButtonName: "取消",
                                rightButtonName: "编辑乘客",
                                onRightButtonClick: function () {
                                  q(
                                    t,
                                    l.map(function (e) {
                                      return e.ticketTypeId;
                                    })
                                  );
                                },
                              }),
                              e.abrupt("return", !1)
                            );
                          case 16:
                            return e.abrupt("return", !0);
                          case 19:
                            0 === a.code &&
                              Z.showMultiButtonDialog({
                                content:
                                  (null === (d = a.data) || void 0 === d
                                    ? void 0
                                    : d.errorMessage) ||
                                  "该乘客证件信息缺失，请补全信息",
                                leftButtonName: "取消",
                                rightButtonName: "编辑乘客",
                                onRightButtonClick: function () {
                                  q(t);
                                },
                              });
                          case 20:
                            e.next = 26;
                            break;
                          case 22:
                            (e.prev = 22),
                              (e.t0 = e.catch(1)),
                              console.log(e.t0),
                              (0, T.C)("网络不给力，请重试");
                          case 26:
                            return e.abrupt("return", i);
                          case 27:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[1, 22]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            A = function () {
              var e,
                t,
                i =
                  null === (e = Z.getState().passengerModel) || void 0 === e
                    ? void 0
                    : e.fetcher,
                n = (
                  null === (t = Z.getState().passengerModel) || void 0 === t
                    ? void 0
                    : t.displayPasList
                ).filter(function (e) {
                  return e.isSelected;
                });
              if ((null == n ? void 0 : n.length) > 0) {
                for (var a = null, r = !1, o = 0; o < n.length; o++) {
                  var l = n[o];
                  if (i && l.PassengerID === i.PassengerID) {
                    (a = l), (r = !0);
                    break;
                  }
                }
                if (!r)
                  for (var s = 0; s < n.length; s++) {
                    var c = n[s].ticketTypeId;
                    if (
                      "child" !== c &&
                      "childBoy" !== c &&
                      "childCarry" !== c
                    ) {
                      a = n[s];
                      break;
                    }
                  }
                Z.getDispatch().passengerModel.setFetcher(a);
              }
            },
            E = (function () {
              var e = (0, y.Z)(
                (0, C.Z)().mark(function e() {
                  var t,
                    i,
                    n,
                    a,
                    r,
                    o,
                    l,
                    s = arguments;
                  return (0, C.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          (t = s.length > 0 && void 0 !== s[0] ? s[0] : []),
                            (i =
                              (null == t ? void 0 : t.length) > 3
                                ? t.length
                                : 3),
                            (n = Z.getState().passengerModel.allPasList),
                            (a = []),
                            (null == t ? void 0 : t.length) > 0 && t.length <= i
                              ? ((r = t.map(function (e) {
                                  return e.PassengerID;
                                })),
                                (o = []),
                                n.forEach(function (e) {
                                  r.includes(e.PassengerID) || o.push(e);
                                }),
                                (l = o.slice(0, i - t.length)),
                                (a = t.concat(l)))
                              : (a = n.slice(0, i)),
                            Z.getDispatch().passengerModel.setDisplayPasList(a),
                            fe(),
                            A();
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
            Y = (function () {
              var e = (0, y.Z)(
                (0, C.Z)().mark(function e() {
                  var t,
                    i,
                    n,
                    a = arguments;
                  return (0, C.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (t = a.length > 0 && void 0 !== a[0] ? a[0] : []),
                              (e.prev = 1),
                              (0, b.Q)(),
                              (e.next = 5),
                              (0, D.zr)()
                            );
                          case 5:
                            1 === (n = e.sent).code &&
                            (null === (i = n.data) || void 0 === i
                              ? void 0
                              : i.length) > 0
                              ? (n.data.forEach(function (e) {
                                  (e.ticketTypeId = T.Z.getTicketTypeId(
                                    e.PassengerType
                                  )),
                                    (e.passengerTypeDesc =
                                      T.Z.getDisplayPassengerType(
                                        e.PassengerType
                                      ));
                                }),
                                Z.getDispatch().passengerModel.setAllPasList(
                                  n.data
                                ),
                                E(t))
                              : Z.getDispatch().passengerModel.setAllPasList(
                                  []
                                ),
                              (e.next = 13);
                            break;
                          case 9:
                            (e.prev = 9),
                              (e.t0 = e.catch(1)),
                              console.log(e.t0),
                              Z.getDispatch().passengerModel.setAllPasList([]);
                          case 13:
                            return (e.prev = 13), (0, b.Z)(), e.finish(13);
                          case 16:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[1, 9, 13, 16]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            H = function () {
              return (
                Z.getState().passengerModel.displayPasList.filter(function (e) {
                  return e.isSelected;
                }) || []
              );
            },
            q = function () {
              var e,
                t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : null,
                i =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : [];
              i.length > 0 && t && (t.ticketTypeIdList = i);
              var n = T.Z.isEmptyObject(t),
                a = Z.getState().shiftInfoModel.shipInfo,
                r = a.foreignPassenger,
                o = a.passenger,
                l = T.Z.isNotEmptyObj(r),
                s = l ? r : o,
                c = {
                  supportCardList: s,
                  ticketTypeList:
                    (null === (e = a.ticketTypeRuleDescList) || void 0 === e
                      ? void 0
                      : e.ticketTypeRuleDesc) || [],
                  isForeign: l,
                  ticketTypeIdList: i,
                  checkPassengerTypeParams: W(t),
                };
              n || (c.passengerInfo = t),
                Z.getPage().navigateTo({
                  url: "/pages/taroCRN/ship/pages/editPassenger/index",
                  data: c,
                  callback: (function () {
                    var e = (0, y.Z)(
                      (0, C.Z)().mark(function e(t) {
                        var i, a, r, o, l, s;
                        return (0, C.Z)().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (!T.Z.isNotEmptyObj(t)) {
                                  e.next = 18;
                                  break;
                                }
                                if (
                                  (n || (t.isSelected = !0),
                                  (a =
                                    (null ===
                                      (i = Z.getState().passengerModel) ||
                                    void 0 === i
                                      ? void 0
                                      : i.allPasList) || []),
                                  (r = []),
                                  !n)
                                ) {
                                  e.next = 12;
                                  break;
                                }
                                return (e.next = 7), j(t);
                              case 7:
                                e.sent && (t.isSelected = !0),
                                  (r = a.unshift(t)),
                                  (e.next = 13);
                                break;
                              case 12:
                                r = a.map(function (e) {
                                  return e.PassengerID === t.PassengerID
                                    ? t
                                    : e;
                                });
                              case 13:
                                r.length > 0 &&
                                  Z.getDispatch().passengerModel.setAllPasList(
                                    r
                                  ),
                                  (o = H()),
                                  (l = o.filter(function (e) {
                                    return e.PassengerID !== t.PassengerID;
                                  })),
                                  (s = [t].concat(l)),
                                  E(s);
                              case 18:
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
            O = (function () {
              var e = (0, y.Z)(
                (0, C.Z)().mark(function e(t) {
                  var i, n, a, r;
                  return (0, C.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (t.isSelected) {
                            e.next = 6;
                            break;
                          }
                          return (e.next = 3), j(t);
                        case 3:
                          if (e.sent) {
                            e.next = 6;
                            break;
                          }
                          return e.abrupt("return");
                        case 6:
                          (i = Z.getState().passengerModel.displayPasList),
                            (n = []),
                            i.forEach(function (e) {
                              e.PassengerID !== t.PassengerID
                                ? n.push(e)
                                : n.push(
                                    (0, v.Z)(
                                      (0, v.Z)({}, t),
                                      {},
                                      { isSelected: !t.isSelected }
                                    )
                                  );
                            }),
                            Z.getDispatch().passengerModel.setDisplayPasList(n),
                            (a = Z.getState().passengerModel.allPasList || []),
                            (r = []),
                            a.forEach(function (e) {
                              e.PassengerID !== t.PassengerID
                                ? r.push(e)
                                : r.push(
                                    (0, v.Z)(
                                      (0, v.Z)({}, t),
                                      {},
                                      { isSelected: !t.isSelected }
                                    )
                                  );
                            }),
                            Z.getDispatch().passengerModel.setAllPasList(r),
                            fe(),
                            A();
                        case 16:
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
            $ = function () {
              var e = Z.getState().shiftInfoModel.shipInfo,
                t = Z.getPage().queryParams,
                i = Z.getState().passengerModel.displayPasList;
              if ((null == i ? void 0 : i.length) > 0) {
                var n = Z.getState().passengerModel.allPasList;
                Z.getPage().navigateTo({
                  url: "/pages/taroCRN/ship/pages/passengerList/index",
                  data: {
                    shipInfo: e,
                    allPassengerList: n,
                    seatName: t.seatName,
                    maxPassengerCount: e.maxPassengerCount,
                    utmSource: t.utmSource,
                  },
                  callback: (function () {
                    var e = (0, y.Z)(
                      (0, C.Z)().mark(function e(t) {
                        var i, n;
                        return (0, C.Z)().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                (i = t.allPassengerList) &&
                                  i.length > 0 &&
                                  (Z.getDispatch().passengerModel.setAllPasList(
                                    i
                                  ),
                                  (n =
                                    (null == i
                                      ? void 0
                                      : i.filter(function (e) {
                                          return e.isSelected;
                                        })) || []),
                                  E(n));
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
                });
              } else q();
            },
            _ = function (e) {
              var t = Z.getState().passengerModel.displayPasList,
                i =
                  null == t
                    ? void 0
                    : t.find(function (t) {
                        return t.PassengerID == e.PassengerID;
                      });
              if (i.passengerTypeDesc) return i.passengerTypeDesc;
              var n = i.PassengerType;
              return T.Z.getDisplayPassengerType(n);
            },
            U = i(22276),
            G = function (e) {
              for (
                var t,
                  i = (function (e) {
                    return null === e
                      ? []
                      : (e.sort(function (e, t) {
                          var i = e.deductionAmount || "0",
                            n = t.deductionAmount || "0",
                            a = parseInt(i);
                          return parseInt(n) - a;
                        }),
                        e);
                  })(Z.getState().couponModel.couponList),
                  n = 0;
                n < i.length;
                n++
              ) {
                var a = i[n],
                  r = a || {},
                  o = r.deductionStrategyTypeID,
                  l = void 0 === o ? 0 : o,
                  s = r.deductionAmount,
                  c = void 0 === s ? "0" : s,
                  u = r.deductionStrategy,
                  d = void 0 === u ? [] : u,
                  f = parseFloat(c) || 0;
                if (3 === l && (null == d ? void 0 : d.length) > 0) {
                  var m = d[0].startAmount;
                  if (e > (void 0 === m ? 0 : m)) {
                    t = a;
                    break;
                  }
                } else if (!(e < f)) {
                  t = a;
                  break;
                }
              }
              return (
                t
                  ? Z.getDispatch().couponModel.setState({
                      isShow: !0,
                      selectedCoupon: t,
                    })
                  : Z.getDispatch().couponModel.setState({
                      isShow: !1,
                      selectedCoupon: null,
                    }),
                t
              );
            };
          var K,
            Q = function () {
              if (0 == H().length) return (0, T.C)("请先选择乘客");
              var e = Z.getState(),
                t = e.otherModel,
                i = e.couponModel,
                n = t.totalFeeWithoutCoupon,
                a = i.couponList,
                r = i.selectedCoupon;
              Z.getPage().navigateTo({
                url: "/pages/taroCRN/ship/pages/couponList/index",
                data: { couponList: a, selectedCoupon: r, totalPrice: n },
                callback: function (e) {
                  var t = e.coupon,
                    i = e.unSelectCoupon;
                  Z.getDispatch().couponModel.setState({
                    selectedCoupon: i ? null : t,
                  }),
                    fe({ coupon: t, unSelectCoupon: i });
                },
              });
            },
            J = i(32970),
            ee = (0, V.lW)({
              iconClose: { position: "absolute", top: 16, right: 16 },
            }),
            te = function (e) {
              var t = e.onClose,
                i = e.vendorName,
                n = e.saleVendor,
                a = e.vendorLicenseImg;
              return (0, k.BX)(m.View, {
                className: "vd-content",
                children: [
                  (0, k.tZ)(m.View, {
                    onClick: t,
                    style: { zIndex: 1 },
                    children: (0, k.tZ)(P.bM, {
                      size: 24,
                      color: "#ccc",
                      style: ee.iconClose,
                    }),
                  }),
                  (0, k.tZ)(m.View, {
                    className: "vd-hd flex-center flex-row",
                    children: (0, k.tZ)(m.Text, {
                      className: "vd-title",
                      children: "供应商资质",
                    }),
                  }),
                  (0, k.BX)(m.View, {
                    className: "vd-card",
                    children: [
                      (0, k.BX)(m.View, {
                        className: "vd-item flex-align-items-center flex-row",
                        children: [
                          (0, k.tZ)(m.View, {
                            className: "vd-label",
                            children: "承运方",
                          }),
                          (0, k.tZ)(m.View, {
                            className: "vd-value",
                            children: i,
                          }),
                        ],
                      }),
                      (0, k.tZ)(m.View, { className: "vd-line" }),
                      (0, k.BX)(m.View, {
                        className: "vd-item flex-align-items-center flex-row",
                        children: [
                          (0, k.tZ)(m.View, {
                            className: "vd-label",
                            children: "销售供应商",
                          }),
                          (0, k.tZ)(m.View, {
                            className: "vd-value",
                            children: n,
                          }),
                        ],
                      }),
                      (0, k.tZ)(m.View, {
                        className: "flex-center flex-column",
                        onClick: function () {
                          return (0, J.im)({ title: "营业执照", url: a });
                        },
                        children: (0, k.tZ)(m.Image, {
                          src: a,
                          className: "vd-license",
                        }),
                      }),
                    ],
                  }),
                ],
              });
            },
            ie = function () {
              var e = Z.getState().shiftInfoModel.shipInfo,
                t = Z.getPage().queryParams,
                i = t.fromCityName,
                n = t.toCityName,
                a = t.fromStationName,
                r = t.toStationName,
                o = t.fromTime,
                l = t.fromDate,
                s = t.shipName,
                c = {
                  page: 3,
                  fromTime: o ? "".concat(l, " ").concat(o) : "",
                  fromCity: i,
                  toCity: n,
                  fromStation: a,
                  toStation: r,
                  plateNumber: s,
                  website: e.website,
                };
              (0, D.WF)(c).then(function (e) {
                1 == (null == e ? void 0 : e.code) &&
                  null != e &&
                  e.data &&
                  Z.getDispatch().otherModel.setBusNotice(e.data);
              });
            },
            ne = function () {
              var e = z.get();
              e && oe(e);
            },
            ae = (function () {
              var e = (0, y.Z)(
                (0, C.Z)().mark(function e() {
                  var t, i, n, a, r, o, l, s, c, u, d, f, m, h, p;
                  return (0, C.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (i = Z.getPage().queryParams),
                            (n = i.fromCityName),
                            (a = i.toCityName),
                            (r = i.fromStationName),
                            (o = i.toStationName),
                            (l = i.fromDate),
                            (s = i.fromTime),
                            (c = i.seatName),
                            (u = i.shipName),
                            (d = i.vendor),
                            (f = i.website),
                            (m = i.utmSource),
                            (h = {
                              fromCityName: n,
                              toCityName: a,
                              fromStationName: r,
                              toStationName: o,
                              fromDate: l,
                              fromTime: s,
                              seatName: c,
                              shipName: u,
                              vendor: d,
                              website: f,
                              utmSource: m,
                            }),
                            (e.next = 5),
                            (0, D.or)(h)
                          );
                        case 5:
                          1 === (null == (p = e.sent) ? void 0 : p.code) &&
                            null !== (t = p.data) &&
                            void 0 !== t &&
                            t.seatTicketLeft &&
                            Z.getDispatch().otherModel.setSeatTicketLeft(
                              p.data.seatTicketLeft
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
            re = function () {
              var e = Z.getState().shiftInfoModel.shipInfo,
                t = null == e ? void 0 : e.carInfo;
              if (T.Z.isNotEmptyObj(t) && t.isSupported) {
                var i,
                  n,
                  a = Z.getPage().isWithCarFromXPage;
                a && Z.getDispatch().otherModel.setIsWithCar(a);
                var r =
                  null === (i = t.carTypes) ||
                  void 0 === i ||
                  null === (n = i[0]) ||
                  void 0 === n
                    ? void 0
                    : n.name;
                r && Z.getDispatch().otherModel.setCarType(r), fe();
              }
            },
            oe = function (e) {
              Z.getDispatch().otherModel.setTicketPhoneNumber(e);
            },
            le = function () {
              se() && ce();
            },
            se = function () {
              var e = H().length;
              if (e <= 0) return (0, T.C)("请至少添加一名登船人"), !1;
              var t = Z.getState().shiftInfoModel.shipInfo.maxPassengerCount;
              if (!(t > 0 && e > t)) {
                var i = Z.getState().otherModel.ticketPhoneNumber;
                if (!/^[0-9]{11}$/.test(i))
                  return (0, T.C)("请填写正确的手机号"), !1;
                z.set(i);
                var n = Z.getState().otherModel.isWithCar,
                  a = Z.getState().otherModel.carNum;
                if (n && !T.Z.isVehicleNumber(a))
                  return (
                    (0, T.C)("请填写正确的车牌号码，仅限汉字/英文/数字"), !1
                  );
                var r = Z.getState().flightInfoModel,
                  o = r.isAirLine,
                  l = r.flightNo,
                  s = r.flightDate,
                  c = r.flightDestination;
                if (1 == o) {
                  if (!l || !s) return (0, T.C)("请补充填写航班信息"), !1;
                  if (!c)
                    return (0, T.C)("您填写的航班信息有误，请重新填写"), !1;
                }
                return !0;
              }
              (0, T.C)("本订单最多可添加".concat(t, "位乘客"));
            },
            ce = function () {
              try {
                var e,
                  t,
                  i = Z.getState().shiftInfoModel.shipInfo,
                  n = Z.getPage().pickedSeat,
                  a = Z.getPage().queryParams,
                  r = R.getUnionData(),
                  o = Z.getState().passengerModel.fetcher,
                  l = T.Z.isNotEmptyObj(i.foreignPassenger),
                  s = l ? i.foreignPassenger : i.passenger,
                  c = T.Z.getCardInfo(o || {}, s, l) || {},
                  u = Z.getState().passengerModel.displayPasList.filter(
                    function (e) {
                      return e.isSelected;
                    }
                  ),
                  d =
                    null == u
                      ? void 0
                      : u.map(function (e) {
                          var t = T.Z.getCardInfo(e, s, l);
                          return {
                            name: e.CNName || "",
                            lastName: e.ENLastName || "",
                            firstName: e.ENFirstName || "",
                            passengerType: T.Z.covertPassengerType(
                              e.ticketTypeId
                            ),
                            gender: e.Gender || "",
                            birth: e.Birthday || "",
                            nationality: e.Nationality || "",
                            idCard: [
                              {
                                idType: t.cardType || "",
                                idNum: t.cardNo || "",
                                visaDate: t.cardVisaDate,
                              },
                            ],
                          };
                        }),
                  f = {
                    productLine: 2,
                    fromCity: i.fromCityName,
                    toCity: i.toCityName,
                    fromStation: i.fromStationName,
                    toStation: i.toStationName,
                    fromDate: i.fromDate,
                    fromTime: i.fromTime,
                    toDate: i.toDate,
                    toTime: i.toTime,
                    lineCode: i.shipName,
                    website: i.website,
                    vendor: i.vendor,
                    fetcher: {
                      name: null == o ? void 0 : o.CNName,
                      lastName: (null == o ? void 0 : o.ENLastName) || "",
                      firstName: (null == o ? void 0 : o.ENFirstName) || "",
                      idNum: null == c ? void 0 : c.cardNo,
                      idType: (null == c ? void 0 : c.cardType) || "",
                      contactMobile: String(
                        Z.getState().otherModel.ticketPhoneNumber || ""
                      ),
                    },
                    passengers: d,
                    union: {
                      utmSource: a.utmSource,
                      allianceid: "" + r.aid,
                      sid: "" + r.sid,
                    },
                    passengerNum: (null == u ? void 0 : u.length) || 0,
                    appendProductList: [],
                    seatName: n.seatName,
                  },
                  m = Z.getState().couponModel.selectedCoupon;
                m &&
                  (f.couponInfo = {
                    couponCode: m.couponCode,
                    promotionId: m.promotionId,
                  });
                var h = Z.getState().otherModel.selectedTimePeriod;
                h && (f.customFromTime = h);
                var p = Z.getState().flightInfoModel,
                  g = p.isAirLine,
                  v = p.flightNo,
                  N = p.flightDate,
                  w = p.flightTime,
                  C = p.flightDeparture,
                  y = p.flightDestination,
                  x = p.flightCompany;
                g &&
                  (f.airLineInfo = {
                    airLineName: x,
                    airLineNo: v,
                    airLineDepartureTime: "".concat(N, " ").concat(w),
                    airLineDeparture: C,
                    airLineDestination: y,
                  });
                var S = Z.getState().otherModel.isWithCar,
                  I = Z.getState().otherModel.carType,
                  P = Z.getState().otherModel.carNum,
                  V =
                    null == i ||
                    null === (e = i.carInfo) ||
                    void 0 === e ||
                    null === (t = e.carTypes) ||
                    void 0 === t
                      ? void 0
                      : t.find(function (e) {
                          return e.name === I;
                        });
                if (S && V) {
                  var k = P[0],
                    M = P.substring(1);
                  f.carInfo = { carType: I, plateNumber: M, plateProvince: k };
                }
                (0, b.Q)(),
                  (0, D.LV)(f)
                    .then(function (e) {
                      1 === (null == e ? void 0 : e.code) && e.data
                        ? Z.getPage().navigateTo({
                            url: "/pages/taroCRN/ship/pages/orderdetail/orderdetail",
                            data: { orderId: e.data.orderNumber },
                          })
                        : Z.getPage().showCommonDialog({
                            title: "温馨提示",
                            content:
                              (null == e ? void 0 : e.message) ||
                              "下单失败，请稍后再试~",
                          });
                    })
                    .finally(function () {
                      return (0, b.Z)();
                    });
              } catch (e) {
                console.log("create ship order", e),
                  Z.getPage().showCommonDialog({
                    title: "温馨提示",
                    content: "下单失败，请稍后再试~",
                  });
              }
            },
            ue = function (e) {
              var t,
                i,
                n = Z.getState().shiftInfoModel.shipInfo,
                a =
                  null == n || null === (t = n.seatInfo) || void 0 === t
                    ? void 0
                    : t[0],
                r = parseFloat(
                  null == a || null === (i = a.passengerPrice) || void 0 === i
                    ? void 0
                    : i[e]
                );
              return r || (r = 0), r;
            },
            de = function (e) {
              var t = "成人票";
              switch (e) {
                case "adult":
                  t = "成人票";
                  break;
                case "child":
                  t = "儿童票";
                  break;
                case "childBoy":
                  t = "小童票";
                  break;
                case "childCarry":
                  t = "携童票";
                  break;
                case "elder":
                  t = "老人票";
              }
              return t;
            },
            fe = function (e) {
              var t = Z.getState().shiftInfoModel.shipInfo,
                i = [],
                n = 0,
                a = 0,
                r = (function () {
                  var e = Z.getState().passengerModel.displayPasList.filter(
                      function (e) {
                        return e.isSelected;
                      }
                    ),
                    t = {};
                  return (
                    e.forEach(function (e) {
                      t[e.ticketTypeId]
                        ? (t[e.ticketTypeId].count += 1)
                        : (t[e.ticketTypeId] = { count: 1 });
                    }),
                    t
                  );
                })(),
                o = [];
              for (var l in r) {
                var s = ue(l),
                  c = r[l].count || 0;
                o.push({ name: de(l), desc: "¥".concat(s, "x").concat(c) }),
                  (a += s * c),
                  (n += c);
              }
              o.length > 0 && i.push({ title: "票价", detailItems: o });
              var u = [];
              if (
                (t.isService &&
                  n > 0 &&
                  (u.push({
                    name: t.serviceDesc ? t.serviceDesc : "服务费",
                    desc: "¥".concat(t.serviceFee, "x").concat(n, "份"),
                  }),
                  (a += ((null == t ? void 0 : t.serviceFee) || 0) * n)),
                Z.getState().otherModel.isWithCar)
              ) {
                var d,
                  f = Z.getState().otherModel.carType,
                  m =
                    null === (d = t.carInfo.carTypes) || void 0 === d
                      ? void 0
                      : d.find(function (e) {
                          return e.name === f;
                        });
                u.push({
                  name: "车票",
                  desc: "¥".concat(null == m ? void 0 : m.carPrice, "x1辆"),
                }),
                  (a += (null == m ? void 0 : m.carPrice) || 0);
              }
              u.length > 0 && i.push({ title: "增值服务", detailItems: u }),
                Z.getDispatch().otherModel.setState({
                  totalFeeWithoutCoupon: a,
                });
              var h,
                p = e || {},
                g = p.coupon,
                v = p.unSelectCoupon,
                N = g;
              N || v || (N = G(a)),
                N &&
                  ((a -= N.deductionAmount),
                  i.push({
                    title: "优惠",
                    type: "deduction",
                    detailItems: [
                      {
                        name:
                          null === (h = N.displayName) || void 0 === h
                            ? void 0
                            : h.trim(),
                        desc: "-￥".concat(N.deductionAmount, "x1份"),
                      },
                    ],
                  })),
                Z.getDispatch().otherModel.setTotalFee(a),
                Z.getDispatch().otherModel.setPriceDetails(i);
            },
            me = function (e, t) {
              switch (t) {
                case "carNum":
                  Z.getDispatch().otherModel.setCarNum(
                    null == e ? void 0 : e.trim()
                  );
                  break;
                case "carType":
                  Z.getDispatch().otherModel.setCarType(
                    null == e ? void 0 : e.trim()
                  );
              }
            },
            he = function () {
              var e,
                t = Z.getState().otherModel.carType,
                i = Z.getState().shiftInfoModel.shipInfo;
              be({
                toast: {
                  toastCode: n.CarTypeSelectDrawer,
                  data: {
                    currentCarType: t,
                    carTypes:
                      null == i || null === (e = i.carInfo) || void 0 === e
                        ? void 0
                        : e.carTypes,
                  },
                },
              });
            },
            pe = function () {
              var e = Z.getState().shiftInfoModel.shipInfo;
              be({
                toast: {
                  toastCode: n.RuleDescDrawer,
                  data: e.instructionsDesc,
                },
              });
            },
            ge = function () {
              var e = Z.getState().shiftInfoModel.shipInfo;
              !(function (e) {
                var t = e.vendorName,
                  i = e.saleVendor,
                  n = e.vendorLicenseImg,
                  a = (0, f.getCurrentInstance)().page;
                null == a ||
                  a.showCommonDrawer({
                    hideClose: !0,
                    hideTitle: !0,
                    content: function (e) {
                      var a = e.onClose;
                      return (0, k.tZ)(te, {
                        onClose: a,
                        vendorName: t,
                        saleVendor: i,
                        vendorLicenseImg: n,
                      });
                    },
                    className: "ship-booking-vd-drawer",
                    iphoneXFooterColor: "#f5f5f5",
                  });
              })({
                vendorName: e.vendorName,
                saleVendor: e.saleVendor,
                vendorLicenseImg: e.vendorLicenseImg,
              });
            },
            ve = (0, V.lW)({
              iconClose: { position: "absolute", top: 16, right: 16 },
              ml5: { marginLeft: 5 },
            }),
            Ne = function (e) {
              var t = e.currentCarType,
                i = void 0 === t ? "" : t,
                n = e.carTypes,
                a = void 0 === n ? [] : n,
                r = e.onClose,
                o = void 0 === r ? function () {} : r,
                l = (0, u.useState)(i),
                s = (0, F.Z)(l, 2),
                c = s[0],
                d = s[1];
              if ((null == a ? void 0 : a.length) <= 0)
                return (0, k.tZ)(m.View, {});
              return (0, k.BX)(m.View, {
                className: "ctl-content",
                children: [
                  (0, k.tZ)(m.View, {
                    onClick: o,
                    style: { zIndex: 1 },
                    children: (0, k.tZ)(P.bM, {
                      size: 24,
                      color: "#ccc",
                      style: ve.iconClose,
                    }),
                  }),
                  (0, k.tZ)(m.View, {
                    className: "drawer-tit",
                    children: "选择车辆类型",
                  }),
                  (0, k.tZ)(m.View, {
                    className: "type-list",
                    children: a.map(function (e, t) {
                      return (0, k.BX)(
                        u.Fragment,
                        {
                          children: [
                            (0, k.BX)(m.View, {
                              className: "tl-item flex-center flex-row",
                              onClick: function () {
                                return (function (e) {
                                  d(e.name), me(e.name, "carType"), o();
                                })(e);
                              },
                              children: [
                                (0, k.tZ)(m.Text, {
                                  className: "tl-desc ".concat(
                                    c === (null == e ? void 0 : e.name)
                                      ? "active"
                                      : ""
                                  ),
                                  children: ""
                                    .concat(null == e ? void 0 : e.name, " ¥")
                                    .concat(null == e ? void 0 : e.carPrice),
                                }),
                                c === (null == e ? void 0 : e.name) &&
                                  (0, k.tZ)(P.NO, {
                                    size: 13,
                                    color: "#198cff",
                                    style: ve.ml5,
                                  }),
                              ],
                            }),
                            t !== a.length - 1 &&
                              (0, k.tZ)(m.View, { className: "h-line" }),
                          ],
                        },
                        t
                      );
                    }),
                  }),
                ],
              });
            },
            Ze = (0, V.lW)({
              iconClose: { position: "absolute", top: 16, right: 16 },
            }),
            we = function (e) {
              var t = e.instructionList,
                i = void 0 === t ? [] : t,
                n = e.onClose,
                a = void 0 === n ? function () {} : n;
              if ((null == i ? void 0 : i.length) <= 0)
                return (0, k.tZ)(m.View, {});
              var r = [];
              return (
                i.forEach(function (e) {
                  var t;
                  (null == e || null === (t = e.newContent) || void 0 === t
                    ? void 0
                    : t.length) > 0
                    ? (r = r.concat(e.newContent))
                    : r.push({
                        title: null == e ? void 0 : e.title,
                        content: null == e ? void 0 : e.desc,
                      });
                }),
                (0, k.BX)(m.View, {
                  className: "content",
                  children: [
                    (0, k.tZ)(m.View, {
                      onClick: a,
                      style: { position: "relative", zIndex: 1 },
                      children: (0, k.tZ)(P.bM, {
                        size: 24,
                        color: "#ccc",
                        style: Ze.iconClose,
                      }),
                    }),
                    (0, k.tZ)(m.View, {
                      className: "rd-drawer-tit",
                      children: "取、退票、改签规则",
                    }),
                    (0, k.tZ)(u.Fragment, {
                      children:
                        r.length > 0 &&
                        (0, k.tZ)(m.ScrollView, {
                          scrollY: !0,
                          scrollWithAnimation: !0,
                          className: "cont-scroll",
                          children: r.map(function (e, t) {
                            var i;
                            return (null == e ||
                            null === (i = e.content) ||
                            void 0 === i
                              ? void 0
                              : i.length) > 0
                              ? (0, k.BX)(
                                  m.View,
                                  {
                                    className: "normal-item",
                                    children: [
                                      (0, k.tZ)(m.View, {
                                        className: "ni-title",
                                        children: e.title,
                                      }),
                                      (0, k.tZ)(m.View, {
                                        className: "ni-desc-list",
                                        children: e.content.map(function (
                                          e,
                                          t
                                        ) {
                                          return (0, k.tZ)(
                                            m.Text,
                                            {
                                              className: "ni-desc",
                                              children: e,
                                            },
                                            t
                                          );
                                        }),
                                      }),
                                    ],
                                  },
                                  t
                                )
                              : (0, k.tZ)(k.HY, {});
                          }),
                        }),
                    }),
                  ],
                })
              );
            },
            Ce = function (e) {
              var t,
                i,
                a = e.toast;
              switch (a.toastCode) {
                case n.PriceDetailDrawer:
                  !(function (e) {
                    var t = (0, f.getCurrentInstance)().page;
                    null == t ||
                      t.showCommonDrawer({
                        hideTitle: !0,
                        hideClose: !0,
                        content: function (t) {
                          var i = t.onClose;
                          return (0, k.tZ)(L, { onClose: i, priceDetail: e });
                        },
                        iphoneXFooterColor: "#f5f5f5",
                      });
                  })(a.data);
                  break;
                case n.BookingRuleDrawer:
                  (0, X.F)(a.data);
                  break;
                case n.CarTypeSelectDrawer:
                  !(function (e) {
                    var t = e.currentCarType,
                      i = e.carTypes,
                      n = (0, f.getCurrentInstance)().page;
                    null == n ||
                      n.showCommonDrawer({
                        hideTitle: !0,
                        hideClose: !0,
                        content: function (e) {
                          var n = e.onClose;
                          return (0, k.tZ)(Ne, {
                            onClose: n,
                            currentCarType: t,
                            carTypes: i,
                          });
                        },
                        className: "ship-booking-cartype-drawer",
                        iphoneXFooterColor: "#f5f5f5",
                      });
                  })({
                    currentCarType:
                      null === (t = a.data) || void 0 === t
                        ? void 0
                        : t.currentCarType,
                    carTypes:
                      null === (i = a.data) || void 0 === i
                        ? void 0
                        : i.carTypes,
                  });
                  break;
                case n.RuleDescDrawer:
                  !(function (e) {
                    var t = (0, f.getCurrentInstance)().page;
                    null == t ||
                      t.showCommonDrawer({
                        hideTitle: !0,
                        hideClose: !0,
                        content: function (t) {
                          var i = t.onClose;
                          return (0, k.tZ)(we, {
                            onClose: i,
                            instructionList: e,
                          });
                        },
                        iphoneXFooterColor: "#f5f5f5",
                      });
                  })(a.data);
                  break;
                default:
                  return null;
              }
            },
            ye = ["onConfirm", "onCancel"],
            xe = (function () {
              var e = (0, y.Z)(
                (0, C.Z)().mark(function e() {
                  var t;
                  return (0, C.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (x.Z.isLogin) {
                            e.next = 3;
                            break;
                          }
                          return (e.next = 3), x.Z.doLogin();
                        case 3:
                          return (e.next = 5), S();
                        case 5:
                          (t = e.sent) && (I(t), ne(), ae(), re(), ie(), Y());
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
            be = (function () {
              var e = (0, y.Z)(
                (0, C.Z)().mark(function e(t) {
                  var i, n, a;
                  return (0, C.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (i = t.onConfirm),
                            (n = t.onCancel),
                            (a = (0, w.Z)(t, ye)),
                            e.abrupt(
                              "return",
                              new Promise(function (e) {
                                Ce(
                                  (0, v.Z)(
                                    (0, v.Z)({}, a),
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
            Te = i(8271),
            De = i.n(Te),
            Se = i(26282),
            Ie = (0, V.lW)({
              ml2: { marginLeft: 2 },
              scaleY05: { transform: [{ scaleY: 0.5 }] },
            }),
            Pe = (0, d.$j)(function (e) {
              var t = e.shiftInfoModel,
                i = e.otherModel;
              return { shipDetail: t.shipInfo, isTimePeriod: i.isTimePeriod };
            })(function (e) {
              var t,
                i,
                a = e.shipDetail,
                r = e.isTimePeriod;
              if (!a) return (0, k.tZ)(k.HY, {});
              var o = a.useTimeFmt,
                l = a.fromStationName,
                s = a.toStationName;
              if (!l || !s) return (0, k.tZ)(k.HY, {});
              var c = De()(a.fromDate).format("MM月DD日"),
                u = Se.Z.getWeekInfo(a.fromDate),
                d = ""
                  .concat(c, " ")
                  .concat(u, " ")
                  .concat(1 == r ? "固定时间段内" : a.fromTime, "出发"),
                f = "";
              (null == a || null === (t = a.seatInfo) || void 0 === t
                ? void 0
                : t.length) > 0 &&
                (f = ""
                  .concat(
                    3 == a.shipCategory ? "套票票价" : a.seatInfo[0].seatName,
                    " ¥"
                  )
                  .concat(a.seatInfo[0].storeSeatPrice));
              var h =
                (null === (i = a.tagDescList) || void 0 === i
                  ? void 0
                  : i.filter(function (e) {
                      return !!e;
                    })) || [];
              return (0, k.BX)(m.View, {
                className: "ship-book-shift",
                children: [
                  (0, k.BX)(m.View, {
                    className: "detail-box",
                    children: [
                      (0, k.BX)(m.View, {
                        className: "top flex-row flex-align-items-center",
                        children: [
                          (0, k.tZ)(m.View, {
                            className: "bs-tag",
                            children: "出发",
                          }),
                          (0, k.tZ)(m.View, {
                            className: "normal-txt flex-1",
                            children: d,
                          }),
                          (0, k.tZ)(m.View, {
                            className: "normal-txt gray2 ft12",
                            children: o,
                          }),
                        ],
                      }),
                      (0, k.BX)(m.View, {
                        className: "mid flex-align-items-center flex-row",
                        children: [
                          (0, k.tZ)(m.Image, {
                            className: "sta-icon",
                            src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/xxjt@3x.png",
                          }),
                          (0, k.BX)(m.View, {
                            className: "flex flex-column",
                            children: [
                              (0, k.tZ)(m.Text, {
                                className: "sta-txt mb16",
                                children: l,
                              }),
                              (0, k.tZ)(m.Text, {
                                className: "sta-txt",
                                children: s,
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, k.tZ)(m.View, {
                        className: "si-h-line",
                        style: Ie.scaleY05,
                      }),
                      (0, k.BX)(m.View, {
                        className: "botm flex-row flex-align-items-center",
                        children: [
                          f &&
                            (0, k.BX)(k.HY, {
                              children: [
                                (0, k.tZ)(m.View, {
                                  className: "normal-txt gray1",
                                  style: { maxWidth: "60%" },
                                  children: f,
                                }),
                                (0, k.tZ)(m.View, { className: "si-v-line" }),
                              ],
                            }),
                          (0, k.BX)(m.View, {
                            onClick: function () {
                              be({
                                toast: {
                                  toastCode: n.BookingRuleDrawer,
                                  data: a.instructionsDesc,
                                },
                              });
                            },
                            className: "flex-row flex-align-items-center",
                            children: [
                              (0, k.tZ)(m.View, {
                                className: "normal-txt gray1",
                                children: "退改政策/取票方式",
                              }),
                              (0, k.tZ)(P.U8, {
                                size: 12,
                                color: "#ccc",
                                style: Ie.ml2,
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  h.length > 0 &&
                    (0, k.tZ)(m.View, {
                      className: "tips",
                      children: (0, k.tZ)(m.Swiper, {
                        vertical: !0,
                        autoplay: !0,
                        circular: !0,
                        interval: 2e3,
                        itemHeight: 32,
                        sliderHeight: 32,
                        className: "tips-swiper",
                        children: h.map(function (e, t) {
                          return (0,
                          k.BX)(m.SwiperItem, { className: "flex-row flex-align-items-center", style: { height: 32 }, children: [(0, k.tZ)(m.Image, { className: "tips-icon", src: e.icon }), (0, k.tZ)(m.Text, { className: "tips-txt", style: { color: e.colour }, children: e.title })] }, t);
                        }),
                      }),
                    }),
                ],
              });
            }),
            Ve = (0, d.$j)(function (e) {
              var t = e.otherModel,
                i = e.shiftInfoModel;
              return {
                ticketPhoneNumber: t.ticketPhoneNumber,
                shipInfo: i.shipInfo,
              };
            })(function (e) {
              var t = e.ticketPhoneNumber;
              return e.shipInfo
                ? (0, k.BX)(m.View, {
                    className:
                      "ship-booking-mobile flex-align-items-center flex-row",
                    children: [
                      (0, k.BX)(m.View, {
                        className: "flex-1 flex-align-items-center flex-row",
                        children: [
                          (0, k.tZ)(m.View, {
                            className: "label",
                            children: "取票手机",
                          }),
                          (0, k.tZ)(m.Input, {
                            className: "input-mobile",
                            type: "number",
                            onInput: function (e) {
                              return oe(e.detail.value.trim());
                            },
                            placeholder: "请填写取票手机号码",
                            placeholderClass: "input-placeholder",
                            value: t,
                            style: t
                              ? {}
                              : {
                                  fontFamily: "PingFangSC-Regular",
                                  fontWeight: "400",
                                },
                          }),
                        ],
                      }),
                      (0, k.tZ)(m.View, {
                        onClick: function () {
                          (0, J.jw)().then(function (e) {
                            e && oe(e);
                          });
                        },
                        className: "flex-center flex-row",
                        children: (0, k.tZ)(P.r2, {
                          size: 20,
                          color: "#C7CDD9",
                        }),
                      }),
                    ],
                  })
                : (0, k.tZ)(k.HY, {});
            }),
            ke = i(92049),
            Me = i(47482),
            Le = (0, V.lW)({ mt12: { marginTop: 12 } }),
            Be = u.default.memo(
              (0, d.$j)(function (e) {
                var t,
                  i = e.shiftInfoModel,
                  n = e.otherModel;
                return {
                  vendorName:
                    null == i || null === (t = i.shipInfo) || void 0 === t
                      ? void 0
                      : t.vendorName,
                  busNotice: n.busNotice,
                };
              })(function (e) {
                var t = e.vendorName,
                  i = e.busNotice,
                  n = (0, u.useState)(!1),
                  a = (0, F.Z)(n, 2),
                  r = a[0],
                  o = a[1];
                return (0, k.BX)(m.View, {
                  className: "ship-booking-btips",
                  children: [
                    (0, k.BX)(m.View, {
                      children: [
                        (0, k.BX)(m.Text, {
                          className: "note",
                          children: [
                            "*订单包含船票、附加选购产品、部分线路含服务费（包含技术接入费、支付手续费等）、燃油费、港口清理费。本产品支付成功后，需等待商家确认是否可以出行，具体出票结果可在订单详情页和短信中查看。",
                            p.Z.isCRN &&
                              (0, k.tZ)(m.Text, {
                                className: "note important-tips",
                                onClick: pe,
                                children: "船票购票须知",
                              }),
                          ],
                        }),
                        !p.Z.isCRN &&
                          (0, k.tZ)(m.Text, {
                            className: "note important-tips",
                            onClick: pe,
                            children: "船票购票须知",
                          }),
                      ],
                    }),
                    !!t &&
                      (0, k.BX)(m.View, {
                        style: Le.mt12,
                        children: [
                          (0, k.BX)(m.Text, {
                            className: "note",
                            children: [
                              "供应商：",
                              t,
                              (0, k.tZ)(m.Text, { children: " " }),
                              p.Z.isCRN &&
                                (0, k.tZ)(m.Text, {
                                  className: "note important-tips",
                                  onClick: ge,
                                  children: "查看资质",
                                }),
                            ],
                          }),
                          !p.Z.isCRN &&
                            (0, k.tZ)(m.Text, {
                              className: "note important-tips",
                              onClick: ge,
                              children: "查看资质",
                            }),
                        ],
                      }),
                    !(null == i || !i.content) &&
                      (0, k.BX)(m.View, {
                        style: Le.mt12,
                        children: [
                          (0, k.tZ)(m.View, {
                            className: "tip-title",
                            children: "".concat(i.title || "温馨提示", "："),
                          }),
                          (0, k.tZ)(m.View, {
                            className: "tip-txt",
                            children: (0, k.tZ)(Me.Z, {
                              style: {
                                lineHeight: 17,
                                color: "#999",
                                fontSize: 12,
                                fontFamily: "PingFangSC-Regular",
                                fontWeight: "normal",
                              },
                              numberOfLines: 2,
                              expand: r,
                              children: i.content,
                            }),
                          }),
                          (0, k.tZ)(m.View, {
                            className: "flex-align-items-center flex-row mt8",
                            onClick: function () {
                              return o(!r);
                            },
                            children: r
                              ? (0, k.BX)(k.HY, {
                                  children: [
                                    (0, k.tZ)(m.Text, {
                                      className: "tip-title mr4",
                                      children: "收起",
                                    }),
                                    (0, k.tZ)(P.Cz, {
                                      size: 12,
                                      color: "#ccc",
                                    }),
                                  ],
                                })
                              : (0, k.BX)(k.HY, {
                                  children: [
                                    (0, k.tZ)(m.Text, {
                                      className: "tip-title mr4",
                                      children: "查看全部",
                                    }),
                                    (0, k.tZ)(P.BD, {
                                      size: 12,
                                      color: "#ccc",
                                    }),
                                  ],
                                }),
                          }),
                        ],
                      }),
                    (0, k.tZ)(m.View, {
                      className: "flex-center flex-column",
                      children: (0, k.tZ)(m.Image, {
                        className: "gold-service",
                        src: "https://pages.c-ctrip.com/bus-images/zhixing/zx-bus-logo.png",
                      }),
                    }),
                    (0, k.tZ)(ke.Z, {}),
                  ],
                });
              })
            ),
            Xe = i(10844),
            Fe = (0, V.lW)({
              arrowUp: { marginLeft: 4 },
              bottomViewStyle: {
                borderTopLeftRadius: 16,
                borderTopRightRadius: 16,
              },
              innerContainerStyle: {
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                backgroundColor: "#f5f5f5",
              },
            }),
            Re = (0, d.$j)(function (e) {
              var t = e.otherModel;
              return { totalFee: t.totalFee, priceDetails: t.priceDetails };
            })(function (e) {
              var t = e.totalFee,
                i = e.priceDetails,
                n = (0, u.useState)(!1),
                a = (0, F.Z)(n, 2),
                r = a[0],
                o = a[1];
              return (0, k.tZ)(Xe.Z, {
                bottomView: (0, k.BX)(m.View, {
                  className: "sb-btm-fx-pnl flex-row flex-align-items-center",
                  children: [
                    (0, k.BX)(m.View, {
                      className: "flex-1 flex-row",
                      children: [
                        (0, k.tZ)(m.Text, {
                          className: "total-fee color-red",
                          style: V.FS.zxRegular,
                          children: "¥",
                        }),
                        (0, k.tZ)(m.Text, {
                          className: "total-fee fee color-red",
                          style: V.FS.zxRegular,
                          children: t,
                        }),
                      ],
                    }),
                    (0, k.BX)(m.View, {
                      className: "flex-align-items-center flex-row",
                      onClick: function () {
                        return o(!r);
                      },
                      children: [
                        (0, k.tZ)(m.Text, {
                          className: "price-detail-btn",
                          children: "明细",
                        }),
                        (0, k.tZ)(P.Cz, {
                          size: 8,
                          color: "#999",
                          style: Fe.arrowUp,
                        }),
                      ],
                    }),
                    (0, k.tZ)(m.View, {
                      className: "buy-btn",
                      onClick: le,
                      children: "立即预订",
                    }),
                  ],
                }),
                bottomViewStyle: Fe.bottomViewStyle,
                extraView: (0, k.tZ)(B, {
                  priceDetail: { totalFee: t, priceDetails: i },
                  onClose: function () {
                    return o(!1);
                  },
                }),
                innerContainerStyle: Fe.innerContainerStyle,
                showExtraView: r,
                hideModal: function () {
                  return o(!1);
                },
                bottomViewHeight: 64,
              });
            }),
            ze = i(78633),
            We = (0, V.lW)({
              ml6: { marginLeft: 6 },
              mb1: { marginBottom: 1 },
            }),
            je = u.default.memo(function (e) {
              var t = e.pasInfo,
                i = e.supportCardList,
                n = e.isForeign;
              if (!t) return (0, k.tZ)(k.HY, {});
              var a = T.Z.getCardInfo(t, i, n) || {},
                r = null == t ? void 0 : t.CNName;
              (("护照" == a.cardType && !n) || !r) &&
                null != t &&
                t.ENLastName &&
                null != t &&
                t.ENFirstName &&
                (r = t.ENLastName + "/" + t.ENFirstName);
              var o = a.cardNo
                ? T.Z.maskCardNum(a.cardNo)
                : "证件信息缺失，请补充";
              return (0, k.BX)(m.View, {
                className: "pas-item flex-row flex-align-items-center",
                onClick: function () {
                  return O(t);
                },
                children: [
                  (0, k.tZ)(m.View, { className: "p-name", children: r }),
                  (null == t ? void 0 : t.isSelected) &&
                    (0, k.tZ)(ze.Z, { style: We.ml6, children: _(t) }),
                  (0, k.tZ)(m.View, {
                    className: "p-idcard flex-1",
                    children: o,
                  }),
                  (0, k.tZ)(m.View, {
                    className: "p30",
                    children:
                      null != t && t.isSelected
                        ? (0, k.tZ)(P.r5, {
                            size: 20,
                            color: "#0d71ff",
                            style: We.ml1,
                          })
                        : (0, k.tZ)(P.xG, {
                            size: 20,
                            color: "#cccccc",
                            style: We.ml1,
                          }),
                  }),
                ],
              });
            }),
            Ae = (0, V.lW)({
              line: {
                height: 1,
                backgroundColor: "#ededed",
                transform: [{ scaleY: 0.5 }],
              },
            }),
            Ee = (0, d.$j)(function (e) {
              var t = e.passengerModel,
                i = e.shiftInfoModel,
                n = e.otherModel;
              return {
                displayPasList: null == t ? void 0 : t.displayPasList,
                shipInfo: null == i ? void 0 : i.shipInfo,
                supportCardList: n.supportCardList,
                isForeign: n.isForeign,
              };
            })(function (e) {
              var t,
                i = e.displayPasList,
                n = e.shipInfo,
                a = e.supportCardList,
                r = e.isForeign;
              if (!n) return (0, k.tZ)(k.HY, {});
              var o =
                  (null == i ||
                  null ===
                    (t = i.filter(function (e) {
                      return e.isSelected;
                    })) ||
                  void 0 === t
                    ? void 0
                    : t.length) || 0,
                l = (null == n ? void 0 : n.maxPassengerCount) || 0;
              return (0, k.BX)(m.View, {
                className: "ship-booking-passenger",
                children: [
                  (0, k.BX)(m.View, {
                    className: "hd flex-row flex-align-items-center",
                    children: [
                      0 === o &&
                        (0, k.BX)(m.View, {
                          className: "flex flex-row",
                          children: [
                            (0, k.tZ)(m.View, {
                              className: "p-txt",
                              children: "选择乘客",
                            }),
                            (0, k.BX)(m.View, {
                              className:
                                "p-desc flex-align-items-center flex-row",
                              children: ["最多可选择", l, "人"],
                            }),
                          ],
                        }),
                      o > 0 &&
                        (0, k.BX)(m.View, {
                          className: "flex flex-row",
                          children: [
                            (0, k.tZ)(m.View, {
                              className: "p-txt",
                              children: "已选：",
                            }),
                            (0, k.BX)(m.View, {
                              className:
                                "p-txt flex-align-items-center flex-row",
                              children: [o, "人"],
                            }),
                          ],
                        }),
                    ],
                  }),
                  (0, k.tZ)(m.View, {
                    className: "pas-list",
                    children:
                      null == i
                        ? void 0
                        : i.map(function (e, t) {
                            return (0,
                            k.BX)(k.HY, { children: [(0, k.tZ)(je, { pasInfo: e, supportCardList: a, isForeign: r }, t), t != i.length - 1 && (0, k.tZ)(m.View, { style: Ae.line })] });
                          }),
                  }),
                  (0, k.BX)(m.View, {
                    className: "btn-row flex-row flex-center",
                    onClick: $,
                    children: [
                      (0, k.tZ)(m.Image, {
                        src: "https://images3.c-ctrip.com/ztrip/train_snow/2023_07/yy@3x.png",
                        className: "sbp-icon-plus",
                      }),
                      (0, k.tZ)(m.Text, {
                        className: "btn-desc",
                        children:
                          (null == i ? void 0 : i.length) > 0
                            ? "添加/修改"
                            : "添加乘客",
                      }),
                    ],
                  }),
                ],
              });
            }),
            Ye = (0, d.$j)(function (e) {
              var t = e.otherModel,
                i = e.shiftInfoModel;
              return {
                isWithCar: null == t ? void 0 : t.isWithCar,
                carType: null == t ? void 0 : t.carType,
                carNum: null == t ? void 0 : t.carNum,
                shipInfo: null == i ? void 0 : i.shipInfo,
              };
            })(function (e) {
              var t,
                i,
                n = e.isWithCar,
                a = e.carType,
                r = e.cardNum,
                o = e.shipInfo,
                l = null == o ? void 0 : o.carInfo;
              if (
                !l ||
                !l.isSupported ||
                (null === (t = l.carTypes) || void 0 === t
                  ? void 0
                  : t.length) <= 0
              )
                return (0, k.tZ)(k.HY, {});
              var s = l.carDescList || [],
                c =
                  (null ===
                    (i = l.carTypes.find(function (e) {
                      return e.name === a;
                    })) || void 0 === i
                    ? void 0
                    : i.carPrice) || "";
              return (0, k.BX)(m.View, {
                className: "ship-book-with-car",
                children: [
                  (0, k.BX)(m.View, {
                    className: "hd flex-row flex-align-items-center",
                    children: [
                      (0, k.tZ)(m.Text, {
                        className: "wc-title flex-1",
                        children: "带车上船",
                      }),
                      (0, k.tZ)(m.Text, {
                        className: "wc-price",
                        children: "¥".concat(c, "/辆"),
                      }),
                      (0, k.tZ)(m.View, {
                        onClick: function () {
                          return (function (e) {
                            Z.getDispatch().otherModel.setIsWithCar(e), fe();
                          })(!n);
                        },
                        children: n
                          ? (0, k.tZ)(P.r5, { size: 20, color: "#198cff" })
                          : (0, k.tZ)(P.xG, { size: 20, color: "#ccc" }),
                      }),
                    ],
                  }),
                  s.length > 0 &&
                    (0, k.tZ)(m.View, {
                      children: s.map(function (e, t) {
                        return (0,
                        k.tZ)(m.View, { className: "wc-desc-item", children: "· ".concat(e) }, t);
                      }),
                    }),
                  n &&
                    (0, k.BX)(m.View, {
                      className: "car-info",
                      children: [
                        (0, k.BX)(m.View, {
                          className:
                            "car-item flex-align-items-center flex-row",
                          children: [
                            (0, k.tZ)(m.Text, {
                              className: "wc-label",
                              children: "车辆类型",
                            }),
                            (0, k.tZ)(m.Text, {
                              className: "input-val flex-1",
                              onClick: he,
                              children: a,
                            }),
                            (0, k.tZ)(m.View, {
                              onClick: he,
                              children: (0, k.tZ)(P.BD, {
                                size: 12,
                                color: "#999",
                              }),
                            }),
                          ],
                        }),
                        (0, k.BX)(m.View, {
                          className:
                            "car-item flex-row flex-align-items-center",
                          children: [
                            (0, k.tZ)(m.Text, {
                              className: "wc-label",
                              children: "车辆号码",
                            }),
                            (0, k.tZ)(m.Input, {
                              className: "input-val flex-1",
                              placeholderClass: "phc-val",
                              placeholder: "如：沪A88888",
                              onInput: function (e) {
                                var t;
                                return me(
                                  null == e ||
                                    null === (t = e.detail) ||
                                    void 0 === t
                                    ? void 0
                                    : t.value,
                                  "carNum"
                                );
                              },
                              value: r,
                            }),
                          ],
                        }),
                      ],
                    }),
                ],
              });
            }),
            He = (0, d.$j)(function (e) {
              var t,
                i,
                n = e.passengerModel,
                a = e.shiftInfoModel;
              return {
                isShow:
                  null == n || null === (t = n.displayPasList) || void 0 === t
                    ? void 0
                    : t.some(function (e) {
                        return e.isSelected;
                      }),
                invoiceTypeDesc:
                  null == a || null === (i = a.shipInfo) || void 0 === i
                    ? void 0
                    : i.invoiceTypeDesc,
              };
            })(function (e) {
              var t = e.invoiceTypeDesc;
              return e.isShow && t
                ? (0, k.BX)(m.View, {
                    className: "ship-book-invoice-module",
                    children: [
                      (0, k.tZ)(m.View, {
                        className: "im-hd",
                        children: "报销/凭证",
                      }),
                      (0, k.tZ)(m.View, { className: "im-desc", children: t }),
                    ],
                  })
                : (0, k.tZ)(k.HY, {});
            }),
            qe = function (e) {
              var t = e.children,
                i = e.style;
              return (0, k.tZ)(m.View, {
                className: "ship-coupon-tag",
                style: i,
                children: t,
              });
            },
            Oe = (0, V.lW)({ mr11: { marginRight: 11 } }),
            $e = (0, d.$j)(function (e) {
              var t,
                i,
                n = e.couponModel,
                a = e.passengerModel;
              return {
                selectedCoupon: n.selectedCoupon,
                couponList: n.couponList,
                pasLen:
                  null === (t = a.displayPasList) ||
                  void 0 === t ||
                  null ===
                    (i = t.filter(function (e) {
                      return e.isSelected;
                    })) ||
                  void 0 === i
                    ? void 0
                    : i.length,
              };
            })(function (e) {
              var t,
                i = e.selectedCoupon,
                n = e.couponList;
              if (!n || 0 == n.length) return (0, k.tZ)(k.HY, {});
              if (i) t = "立减" + i.deductionAmount + i.currencyUnitName;
              else {
                var a = (function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : [],
                    t = Z.getState(),
                    i = t.otherModel,
                    n = i.totalFee,
                    a = (0, U.Z)(e);
                  return (
                    a.forEach(function (e) {
                      var t = e || {},
                        i = t.deductionStrategyTypeID,
                        a = void 0 === i ? 0 : i,
                        r = t.deductionAmount,
                        o = parseInt(void 0 === r ? "0" : r) || 0;
                      if (3 === a) {
                        var l = (e || {}).deductionStrategy,
                          s = void 0 === l ? [] : l;
                        if (s && s.length > 0) {
                          var c = s[0].startAmount,
                            u = void 0 === c ? 0 : c;
                          e.valid = n >= u;
                        } else e.valid = !1;
                      } else e.valid = n >= o;
                    }),
                    a.filter(function (e) {
                      return e.valid;
                    })
                  );
                })(n);
                t = a.length > 0 ? a.length + "张可用" : n.length + "张可用";
              }
              return (0,
              k.BX)(m.View, { className: "cm-box flex-align-items-center flex-row", onClick: Q, children: [(0, k.tZ)(m.View, { className: "cm-tit flex-1", children: "优惠券" }), (0, k.BX)(m.View, { className: "cm-rbox flex-align-items-center flex-row", children: [(0, k.tZ)(qe, { style: Oe.mr11, children: t }), (0, k.tZ)(m.Image, { src: "https://images3.c-ctrip.com/ztrip/train_snow/2023_06/sj@3x.png", className: "coupon-triag" })] })] });
            }),
            _e = i(36168),
            Ue = (0, V.lW)({
              iconClose: { position: "absolute", top: 16, right: 16 },
              ml5: { marginLeft: 5 },
              content: { paddingBottom: 60 },
            }),
            Ge = function (e) {
              var t = e.visible,
                i = e.timePeriod,
                n = e.selectedTimePeriod,
                a = e.onConfirm,
                r = e.onClose,
                o = (0, u.useState)(n),
                l = (0, F.Z)(o, 2),
                s = l[0],
                c = l[1];
              return (
                (0, u.useLayoutEffect)(
                  function () {
                    t && c(n);
                  },
                  [t]
                ),
                (0, k.BX)(m.View, {
                  className: "ctl-content",
                  children: [
                    (0, k.BX)(m.View, {
                      style: Ue.content,
                      children: [
                        (0, k.tZ)(m.View, {
                          onClick: r,
                          style: { zIndex: 1 },
                          children: (0, k.tZ)(P.bM, {
                            size: 24,
                            color: "#ccc",
                            style: Ue.iconClose,
                          }),
                        }),
                        (0, k.tZ)(m.View, {
                          className: "drawer-tit",
                          children: "选择时间段",
                        }),
                        (0, k.tZ)(m.View, {
                          className: "type-list",
                          children: i.map(function (e, t) {
                            return (0, k.BX)(
                              u.Fragment,
                              {
                                children: [
                                  (0, k.BX)(m.View, {
                                    className: "tl-item flex-center flex-row",
                                    onClick: function () {
                                      return c(e);
                                    },
                                    children: [
                                      (0, k.tZ)(m.Text, {
                                        className: "tl-desc ".concat(
                                          s === e ? "active" : ""
                                        ),
                                        children: e,
                                      }),
                                      s === e &&
                                        (0, k.tZ)(P.NO, {
                                          size: 13,
                                          color: "#198cff",
                                          style: Ue.ml5,
                                        }),
                                    ],
                                  }),
                                  t !== i.length - 1 &&
                                    (0, k.tZ)(m.View, { className: "h-line" }),
                                ],
                              },
                              t
                            );
                          }),
                        }),
                      ],
                    }),
                    (0, k.BX)(_e.Z, {
                      isShowIphoneXAdapter: !1,
                      children: [
                        (0, k.tZ)(m.Button, {
                          className: "pts-btn pts-cancel-btn flex-1",
                          onClick: r,
                          children: (0, k.tZ)(m.Text, {
                            className: "pts-btn-txt",
                            style: { color: "#198cff" },
                            children: "取消选择",
                          }),
                        }),
                        (0, k.tZ)(m.Button, {
                          className: "pts-btn pts-confirm-btn flex-1",
                          onClick: function () {
                            a(s), r();
                          },
                          children: (0, k.tZ)(m.Text, {
                            className: "pts-btn-txt",
                            style: { color: "#fff" },
                            children: "确定",
                          }),
                        }),
                      ],
                    }),
                  ],
                })
              );
            },
            Ke = (0, d.$j)(function (e) {
              var t = e.otherModel;
              return {
                isTimePeriod: t.isTimePeriod,
                timePeriodInfo: t.timePeriodInfo,
                selectedTimePeriod: t.selectedTimePeriod,
              };
            })(function (e) {
              var t,
                i = e.isTimePeriod,
                n = e.timePeriodInfo,
                a = e.selectedTimePeriod;
              return 1 != i ||
                !n ||
                (null === (t = n.timePeriod) || void 0 === t
                  ? void 0
                  : t.length) <= 0
                ? (0, k.tZ)(k.HY, {})
                : (0, k.BX)(m.View, {
                    className: "tp-picker flex-align-items-center flex-row",
                    onClick: function () {
                      !(function (e) {
                        var t = e.timePeriod,
                          i = e.selectedTimePeriod,
                          n = e.onConfirm,
                          a = (0, f.getCurrentInstance)().page;
                        null == a ||
                          a.showCommonDrawer({
                            hideTitle: !0,
                            hideClose: !0,
                            content: function (e) {
                              var a = e.onClose,
                                r = e.visible;
                              return (0, k.tZ)(Ge, {
                                onClose: a,
                                visible: r,
                                timePeriod: t,
                                selectedTimePeriod: i,
                                onConfirm: n,
                              });
                            },
                            className: "ship-booking-cartype-drawer",
                          });
                      })({
                        timePeriod: n.timePeriod,
                        selectedTimePeriod: a,
                        onConfirm: function (e) {
                          Z.getDispatch().otherModel.setState({
                            selectedTimePeriod: e,
                          });
                        },
                      });
                    },
                    children: [
                      (0, k.tZ)(m.View, {
                        className: "tp-tit flex-1",
                        children: "可选出发时间段",
                      }),
                      (0, k.BX)(m.View, {
                        className: "tp-rbox flex-align-items-center flex-row",
                        children: [
                          (0, k.tZ)(m.View, {
                            className: "tp-txt",
                            children: a,
                          }),
                          (0, k.tZ)(P.NK, {
                            size: 12,
                            color: "#ccc",
                            style: { marginLeft: 3 },
                          }),
                        ],
                      }),
                    ],
                  });
            }),
            Qe = i(19032),
            Je = (0, V.lW)({
              line: {
                height: 1,
                backgroundColor: "#ededed",
                transform: [{ scaleY: 0.5 }],
              },
            }),
            et = (0, d.$j)(function (e) {
              var t = e.flightInfoModel;
              return {
                flightNo: t.flightNo,
                flightDate: t.flightDate,
                flightDestination: t.flightDestination,
                flightCompany: t.flightCompany,
                airLineDesc: t.airLineDesc,
                isAirLine: t.isAirLine,
              };
            })(function (e) {
              var t = e.flightNo,
                i = e.flightDate,
                n = e.flightCompany,
                a = e.flightDestination,
                r = e.airLineDesc,
                o = e.isAirLine,
                l = (0, u.useState)(!1),
                s = (0, F.Z)(l, 2),
                c = s[0],
                d = s[1];
              return 1 != o
                ? (0, k.tZ)(k.HY, {})
                : (0, k.BX)(m.View, {
                    className: "sfl-module",
                    children: [
                      (0, k.BX)(m.View, {
                        className: "sfl-hd flex-row flex-align-items-center",
                        children: [
                          (0, k.tZ)(m.View, {
                            className: "sfl-tit",
                            children: "航班信息",
                          }),
                          (0, k.tZ)(m.View, {
                            className: "sfl-tip",
                            children: "上船必填",
                          }),
                        ],
                      }),
                      (0, k.BX)(m.View, {
                        className:
                          "sfl-input-item flex-row flex-align-items-center",
                        children: [
                          (0, k.tZ)(m.View, {
                            className: "sfl-input-label",
                            children: "航班号",
                          }),
                          (0, k.tZ)(m.Input, {
                            className: "slf-input",
                            onInput: function (e) {
                              Z.getDispatch().flightInfoModel.setState({
                                flightNo: e.detail.value.trim(),
                              });
                            },
                            placeholder: "请输入航班号(例如: MU5151)",
                            placeholderClass: "slf-input-placeholder",
                            value: t,
                          }),
                        ],
                      }),
                      (0, k.tZ)(m.View, { style: Je.line }),
                      (0, k.BX)(m.View, {
                        className:
                          "sfl-input-item flex-row flex-align-items-center",
                        children: [
                          (0, k.tZ)(m.View, {
                            className: "sfl-input-label",
                            children: "航班日期",
                          }),
                          t
                            ? (0, k.tZ)(Qe.Z, {
                                style: { flex: 1 },
                                mode: "date",
                                start: "1890-01-01",
                                end: "2099-12-31",
                                value: i,
                                titleTxt: "航班日期",
                                onChange: function (e) {
                                  Z.getDispatch().flightInfoModel.setState({
                                    flightDate: e,
                                  }),
                                    (function () {
                                      var e = Z.getState(),
                                        t = e.shiftInfoModel,
                                        i = e.flightInfoModel,
                                        n = t.shipInfo,
                                        a = {
                                          flightNo: i.flightNo,
                                          departureDate: i.flightDate,
                                          fromCityName: n.fromCityName,
                                          toCityName: n.toCityName,
                                          fromStationName: n.fromStationName,
                                          toStationName: n.toStationName,
                                          website: n.website,
                                          fromDate: n.fromDate,
                                          fromTime: n.fromTime,
                                          toDate: n.toDate,
                                          toTime: n.toTime,
                                          shipName: n.shipName,
                                          productionLine: "1",
                                        };
                                      (0, D.E4)(a).then(function (e) {
                                        if (
                                          e &&
                                          1 == e.code &&
                                          e.data &&
                                          e.data.data &&
                                          e.data.data.length
                                        ) {
                                          var t = e.data.data[0];
                                          Z.getDispatch().flightInfoModel.setState(
                                            {
                                              flightDeparture: t.departureCity,
                                              flightDestination: t.arrivalCity,
                                              flightCompany: t.airlineName,
                                              flightTime: t.departureTime,
                                            }
                                          );
                                        } else Z.getPage().showCommonDialog({ title: "温馨提示", content: e.message || "航班信息未找到，请重新输入" }), Z.getDispatch().flightInfoModel.setState({ flightDeparture: "", flightDestination: "", flightCompany: "", flightTime: "" });
                                      });
                                    })();
                                },
                                children: (0, k.BX)(m.View, {
                                  className: "flex-row flex-align-items-center",
                                  children: [
                                    (0, k.tZ)(m.Text, {
                                      className: "flex-1 ".concat(
                                        i ? "" : "slf-input-placeholder"
                                      ),
                                      children: i || "请选择",
                                    }),
                                    (0, k.tZ)(P.NK, {
                                      size: 12,
                                      color: "#ccc",
                                    }),
                                  ],
                                }),
                              })
                            : (0, k.BX)(m.View, {
                                className:
                                  "flex-1 flex-row flex-align-items-center",
                                onClick: function () {
                                  return Z.getPage().showCommonDialog({
                                    title: "温馨提示",
                                    content: "请输入航班号",
                                  });
                                },
                                children: [
                                  (0, k.tZ)(m.Text, {
                                    className: "flex-1 ".concat(
                                      i ? "" : "slf-input-placeholder"
                                    ),
                                    children: i || "请选择",
                                  }),
                                  (0, k.tZ)(P.NK, { size: 12, color: "#ccc" }),
                                ],
                              }),
                        ],
                      }),
                      (0, k.tZ)(m.View, { style: Je.line }),
                      (0, k.BX)(m.View, {
                        className:
                          "sfl-input-item flex-row flex-align-items-center",
                        children: [
                          (0, k.tZ)(m.View, {
                            className: "sfl-input-label",
                            children: "目的地",
                          }),
                          (0, k.tZ)(m.Input, {
                            disabled: !0,
                            className: "slf-input",
                            placeholder: "自动获取",
                            placeholderClass: "slf-input-placeholder",
                            value: a,
                          }),
                        ],
                      }),
                      (0, k.tZ)(m.View, { style: Je.line }),
                      (0, k.BX)(m.View, {
                        className:
                          "sfl-input-item flex-row flex-align-items-center",
                        children: [
                          (0, k.tZ)(m.View, {
                            className: "sfl-input-label",
                            children: "航班公司",
                          }),
                          (0, k.tZ)(m.Input, {
                            disabled: !0,
                            className: "slf-input",
                            placeholder: "自动获取",
                            placeholderClass: "slf-input-placeholder",
                            value: n,
                          }),
                        ],
                      }),
                      !!r &&
                        (0, k.BX)(m.View, {
                          className: "slf-tip-box",
                          children: [
                            (0, k.tZ)(m.View, {
                              onClick: function () {
                                return d(!c);
                              },
                              className: "slf-expand",
                              children: c ? "收起" : "全部",
                            }),
                            (0, k.BX)(Me.Z, {
                              style: {
                                lineHeight: 18,
                                color: "#666",
                                fontSize: 11,
                                fontFamily: "PingFangSC-Regular",
                                fontWeight: "400",
                                textAlign: "justify",
                                marginRight: c ? 0 : 34,
                              },
                              expand: c,
                              children: [
                                (0, k.tZ)(m.Text, {
                                  style: {
                                    fontFamily: "PingFangSC-Medium",
                                    fontWeight: "500",
                                  },
                                  children: "温馨提示:",
                                }),
                                " ",
                                r,
                              ],
                            }),
                          ],
                        }),
                    ],
                  });
            }),
            tt = i(30595),
            it = u.default.memo(
              (0, d.$j)(function (e) {
                return { title: e.otherModel.title };
              })(function (e) {
                var t = e.title;
                return (0, k.tZ)(tt.Z, { title: t });
              })
            ),
            nt = i(851),
            at = i(29799),
            rt =
              (0, h.h)()(
                (K = (function (e) {
                  (0, s.Z)(i, e);
                  var t = (0, c.Z)(i);
                  function i(e) {
                    var n;
                    return (
                      (0, r.Z)(this, i),
                      ((n = t.call(this, e)).pageId = p.Z.isCRN
                        ? "10650104526"
                        : "10650060010"),
                      (n.store = Z.create((0, l.Z)(n)).store),
                      n
                    );
                  }
                  return (
                    (0, o.Z)(i, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          this.setPageData(), xe();
                        },
                      },
                      {
                        key: "getPageId",
                        value: function () {
                          return this.pageId;
                        },
                      },
                      {
                        key: "setPageData",
                        value: function () {
                          var e,
                            t,
                            i,
                            n = (0, f.getCurrentInstance)(),
                            a =
                              (null == n ||
                              null === (e = n.router) ||
                              void 0 === e
                                ? void 0
                                : e.params) || {},
                            r = {
                              fromCityName: a.fromCityName,
                              toCityName: a.toCityName,
                              fromStationName: a.fromStationName,
                              toStationName: a.toStationName,
                              shipName: a.shipName,
                              vendor: a.vendor,
                              fromDate: a.fromDate,
                              fromTime: a.fromTime,
                              toDate: a.toDate,
                              toTime: a.toTime,
                              seatName:
                                null === (t = a.pickedSeat) || void 0 === t
                                  ? void 0
                                  : t.seatName,
                              seatPrice:
                                null === (i = a.pickedSeat) || void 0 === i
                                  ? void 0
                                  : i.seatPrice,
                              useTime: a.useTime,
                              useTimeFmt: a.useTimeFmt,
                              website: a.website,
                              fromPage: "bookingPage",
                              isReturn: !1,
                              carChecked: !1,
                              utmSource: a.utmSource || T.Z.getShipUtmSource(),
                            };
                          p.Z.isCRN ||
                            (r.baseCommonTypes = {
                              channel: T.Z.getChannelValue(),
                              partner: p.Z.partner,
                            }),
                            (this.queryParams = r),
                            (this.pickedSeat = a.pickedSeat),
                            (this.isWithCarFromXPage = a.isWithCar),
                            (this.title = ""
                              .concat(a.fromCityName, "-")
                              .concat(a.toCityName)),
                            Z.getDispatch().otherModel.setTitle(this.title);
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this;
                          return (0, k.tZ)(d.zt, {
                            store: this.store,
                            children: (0, k.BX)(m.View, {
                              className: "ship-booking-page flex flex-column",
                              children: [
                                (0, k.tZ)(it, {}),
                                (0, k.BX)(m.ScrollView, {
                                  className: "page-content flex-1",
                                  scrollY: !0,
                                  children: [
                                    (0, k.tZ)(Pe, {}),
                                    (0, k.tZ)(Ke, {}),
                                    (0, k.tZ)(et, {}),
                                    (0, k.tZ)(Ee, {}),
                                    (0, k.tZ)(Ve, {}),
                                    (0, k.tZ)(Ye, {}),
                                    (0, k.tZ)(He, {}),
                                    (0, k.tZ)($e, {}),
                                    (0, k.tZ)(Be, {}),
                                  ],
                                }),
                                (0, k.tZ)(Re, {}),
                                (0, k.tZ)(nt.Z, {
                                  ref: function (t) {
                                    e.onDrawerAttach(t);
                                  },
                                }),
                                (0, k.tZ)(at.Z, {
                                  ref: function (t) {
                                    e.onDialogAttach(t);
                                  },
                                }),
                              ],
                            }),
                          });
                        },
                      },
                    ]),
                    i
                  );
                })(u.default.Component))
              ) || K;
          Page(
            (0, a.createPageConfig)(
              rt,
              "pages/taroCRN/ship/pages/book/book",
              { root: { cn: [] } },
              {
                navigationBarTitleText: "订单填写",
                navigationBarBackgroundColor: "#0066E6",
                backgroundColorTop: "#F5F5F5",
                backgroundColorBottom: "#F5F5F5",
                enablePullDownRefresh: !1,
                disableScroll: !0,
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
            98946, 3322, 36332, 95854, 7160, 83004, 59188, 35048, 70486, 97709,
            6189, 22843, 6878, 55076, 57714, 19559, 11216, 68592,
          ],
          function () {
            return (function (t) {
              return e((e.s = t));
            })(76135);
          }
        ),
          e.O();
      },
    ]);
})();
