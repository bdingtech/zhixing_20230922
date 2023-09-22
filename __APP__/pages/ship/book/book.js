!(function () {
  "use strict";
  require("../sub-vendors.js"),
    require("../sub-common/51797e256fe5d32eb00654f03ad3a427.js"),
    require("../sub-common/fecc9c60875b710a8101d0d50626beef.js"),
    require("../sub-common/a6b9ed7171073b2dbf848c56c2af4e8b.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [63810],
      {
        5885: function (e, t, n) {
          var a = n(32180),
            i = n(57042),
            r = n(24460),
            s = n(81876),
            o = n(21867),
            l = n(86066),
            c = n(52500),
            u = n(65573),
            d = n(92954),
            f = n.n(d),
            m = n(81957),
            p = n(71515),
            h = n(79792),
            g = n(45023),
            v = n(41991),
            N = n(298),
            Z = {
              state: { shipInfo: null },
              reducers: {
                setShipInfo: function (e, t) {
                  return (0, N.Z)((0, N.Z)({}, e), {}, { shipInfo: t });
                },
              },
            },
            w = {
              state: {
                ticketPhoneNumber: "",
                totalFee: 0,
                seatTicketLeft: 0,
                priceDetails: [],
                isWithCar: !1,
                carType: "",
                carNum: "",
              },
              reducers: {
                setTicketPhoneNumber: function (e, t) {
                  return (0, N.Z)(
                    (0, N.Z)({}, e),
                    {},
                    { ticketPhoneNumber: t }
                  );
                },
                setTotalFee: function (e, t) {
                  return (0, N.Z)((0, N.Z)({}, e), {}, { totalFee: t });
                },
                setSeatTicketLeft: function (e, t) {
                  return (0, N.Z)((0, N.Z)({}, e), {}, { seatTicketLeft: t });
                },
                setPriceDetails: function (e, t) {
                  return (0, N.Z)((0, N.Z)({}, e), {}, { priceDetails: t });
                },
                setIsWithCar: function (e, t) {
                  return (0, N.Z)((0, N.Z)({}, e), {}, { isWithCar: t });
                },
                setCarType: function (e, t) {
                  return (0, N.Z)((0, N.Z)({}, e), {}, { carType: t });
                },
                setCarNum: function (e, t) {
                  return (0, N.Z)((0, N.Z)({}, e), {}, { carNum: t });
                },
              },
            },
            y = {
              state: { allPasList: [], displayPasList: [], fetcher: null },
              reducers: {
                setAllPasList: function (e, t) {
                  return (0, N.Z)((0, N.Z)({}, e), {}, { allPasList: t });
                },
                setDisplayPasList: function (e, t) {
                  return (0, N.Z)((0, N.Z)({}, e), {}, { displayPasList: t });
                },
                setFetcher: function (e, t) {
                  return (0, N.Z)((0, N.Z)({}, e), {}, { fetcher: t });
                },
              },
            },
            T = (function (e) {
              (0, o.Z)(n, e);
              var t = (0, l.Z)(n);
              function n() {
                return (0, i.Z)(this, n), t.apply(this, arguments);
              }
              return (0, r.Z)(n);
            })(v.Z);
          (0, g.Z)(T, "store", {
            models: { shiftInfoModel: Z, otherModel: w, passengerModel: y },
          });
          var P,
            C = n(74921),
            D = n(79301),
            b = n(95308),
            x = n(49120),
            k = n(18783),
            S = n(25297),
            I = (function () {
              var e = (0, b.Z)(
                (0, D.Z)().mark(function e() {
                  var t, n, a;
                  return (0, D.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (0, x.showLoading)(),
                              (t = T.getPage()),
                              (n = (null == t ? void 0 : t.queryParams) || {}),
                              (e.next = 6),
                              (0, S.ob)(n)
                            );
                          case 6:
                            return (
                              (1 === (null == (a = e.sent) ? void 0 : a.code) &&
                                null != a &&
                                a.data) ||
                                t.showCommonDialog({
                                  content:
                                    (null == a ? void 0 : a.message) ||
                                    "网络异常，请稍后再试",
                                  title: "温馨提示",
                                  buttonName: "我知道了",
                                  onButtonClick: function () {
                                    t.navigateBack();
                                  },
                                }),
                              e.abrupt("return", a.data)
                            );
                          case 11:
                            (e.prev = 11),
                              (e.t0 = e.catch(0)),
                              console.log(e.t0),
                              (0, x.showToast)("网络异常，请稍后再试");
                          case 15:
                            return (
                              (e.prev = 15), (0, x.hideLoading)(), e.finish(15)
                            );
                          case 18:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 11, 15, 18]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            M = function (e) {
              T.getDispatch().shiftInfoModel.setShipInfo(e);
            },
            V = n(98920).Z.getInstance("SHIP_MOBILE_NUMBER"),
            L = n(79910),
            B = n(79295),
            X = n(39886);
          !(function (e) {
            (e.PriceDetailDrawer = "PriceDetailDrawer"),
              (e.BookingRuleDrawer = "BookingRuleDrawer"),
              (e.CarTypeSelectDrawer = "CarTypeSelectDrawer"),
              (e.RuleDescDrawer = "RuleDescDrawer");
          })(P || (P = {}));
          var F,
            A = n(93621),
            E = (function () {
              var e = (0, b.Z)(
                (0, D.Z)().mark(function e() {
                  var t,
                    n,
                    a,
                    i = arguments;
                  return (0, D.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (t = i.length > 0 && void 0 !== i[0] ? i[0] : []),
                              (e.prev = 1),
                              (0, x.showLoading)(),
                              (e.next = 5),
                              (0, X.zr)()
                            );
                          case 5:
                            1 === (a = e.sent).code &&
                            (null === (n = a.data) || void 0 === n
                              ? void 0
                              : n.length) > 0
                              ? (a.data.forEach(function (e) {
                                  (e.ticketTypeId = A.Z.getTicketTypeId(
                                    e.PassengerType
                                  )),
                                    (e.passengerTypeDesc =
                                      A.Z.getDisplayPassengerType(
                                        e.PassengerType
                                      ));
                                }),
                                T.getDispatch().passengerModel.setAllPasList(
                                  a.data
                                ),
                                O(t))
                              : T.getDispatch().passengerModel.setAllPasList(
                                  []
                                ),
                              (e.next = 13);
                            break;
                          case 9:
                            (e.prev = 9),
                              (e.t0 = e.catch(1)),
                              console.log(e.t0),
                              T.getDispatch().passengerModel.setAllPasList([]);
                          case 13:
                            return (
                              (e.prev = 13), (0, x.hideLoading)(), e.finish(13)
                            );
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
            O = (function () {
              var e = (0, b.Z)(
                (0, D.Z)().mark(function e() {
                  var t,
                    n,
                    a,
                    i,
                    r,
                    s,
                    o,
                    l = arguments;
                  return (0, D.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          (t = l.length > 0 && void 0 !== l[0] ? l[0] : []),
                            (n =
                              (null == t ? void 0 : t.length) > 3
                                ? t.length
                                : 3),
                            (a = T.getState().passengerModel.allPasList),
                            (i = []),
                            (null == t ? void 0 : t.length) > 0 && t.length <= n
                              ? ((r = t.map(function (e) {
                                  return e.PassengerID;
                                })),
                                (s = []),
                                a.forEach(function (e) {
                                  r.includes(e.PassengerID) || s.push(e);
                                }),
                                (o = s.slice(0, n - t.length)),
                                (i = t.concat(o)))
                              : (i = a.slice(0, n)),
                            T.getDispatch().passengerModel.setDisplayPasList(i),
                            ne(),
                            H();
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
            j = (function () {
              var e = (0, b.Z)(
                (0, D.Z)().mark(function e(t) {
                  var n, a, i, r;
                  return (0, D.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (t.isSelected) {
                            e.next = 6;
                            break;
                          }
                          return (e.next = 3), z(t);
                        case 3:
                          if (e.sent) {
                            e.next = 6;
                            break;
                          }
                          return e.abrupt("return");
                        case 6:
                          (n = T.getState().passengerModel.displayPasList),
                            (a = []),
                            n.forEach(function (e) {
                              e.PassengerID !== t.PassengerID
                                ? a.push(e)
                                : a.push(
                                    (0, N.Z)(
                                      (0, N.Z)({}, t),
                                      {},
                                      { isSelected: !t.isSelected }
                                    )
                                  );
                            }),
                            T.getDispatch().passengerModel.setDisplayPasList(a),
                            (i = T.getState().passengerModel.allPasList || []),
                            (r = []),
                            i.forEach(function (e) {
                              e.PassengerID !== t.PassengerID
                                ? r.push(e)
                                : r.push(
                                    (0, N.Z)(
                                      (0, N.Z)({}, t),
                                      {},
                                      { isSelected: !t.isSelected }
                                    )
                                  );
                            }),
                            T.getDispatch().passengerModel.setAllPasList(r),
                            ne(),
                            H();
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
            W = function () {
              var e = T.getState().shiftInfoModel.shipInfo,
                t = T.getPage().queryParams,
                n = T.getState().passengerModel.displayPasList;
              if ((null == n ? void 0 : n.length) > 0) {
                var a = T.getState().passengerModel.allPasList;
                T.getPage().navigateTo({
                  url: "/pages/ship/passengerList/index",
                  data: {
                    shipInfo: e,
                    allPassengerList: a,
                    seatName: t.seatName,
                    maxPassengerCount: e.maxPassengerCount,
                  },
                  callback: (function () {
                    var e = (0, b.Z)(
                      (0, D.Z)().mark(function e(t) {
                        var n, a;
                        return (0, D.Z)().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                (n = t.allPassengerList) &&
                                  n.length > 0 &&
                                  (T.getDispatch().passengerModel.setAllPasList(
                                    n
                                  ),
                                  (a =
                                    (null == n
                                      ? void 0
                                      : n.filter(function (e) {
                                          return e.isSelected;
                                        })) || []),
                                  O(a));
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
              } else R();
            },
            R = function () {
              var e,
                t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : null,
                n = L.Z.isEmptyObject(t),
                a = T.getState().shiftInfoModel.shipInfo,
                i = a.foreignPassenger,
                r = a.passenger,
                s = L.Z.isNotEmptyObj(i),
                o = s ? i : r,
                l = {
                  supportCardList: o,
                  ticketTypeList:
                    (null === (e = a.ticketTypeRuleDescList) || void 0 === e
                      ? void 0
                      : e.ticketTypeRuleDesc) || [],
                  isForeign: s,
                };
              n || (l.passengerInfo = t),
                T.getPage().navigateTo({
                  url: "/pages/ship/editPassenger/index",
                  data: l,
                  callback: function (e) {
                    if (L.Z.isNotEmptyObj(e)) {
                      var t;
                      e.isSelected = !0;
                      var a,
                        i =
                          (null === (t = T.getState().passengerModel) ||
                          void 0 === t
                            ? void 0
                            : t.allPasList) || [];
                      (a = n
                        ? i.unshift(e)
                        : i.map(function (t) {
                            return t.PassengerID === e.PassengerID ? e : t;
                          })).length > 0 &&
                        T.getDispatch().passengerModel.setAllPasList(a);
                      var r = q().filter(function (t) {
                          return t.PassengerID !== e.PassengerID;
                        }),
                        s = [e].concat(r);
                      O(s);
                    }
                  },
                });
            },
            H = function () {
              var e,
                t,
                n =
                  null === (e = T.getState().passengerModel) || void 0 === e
                    ? void 0
                    : e.fetcher,
                a = (
                  null === (t = T.getState().passengerModel) || void 0 === t
                    ? void 0
                    : t.displayPasList
                ).filter(function (e) {
                  return e.isSelected;
                });
              if ((null == a ? void 0 : a.length) > 0) {
                for (var i = null, r = !1, s = 0; s < a.length; s++) {
                  var o = a[s];
                  if (n && o.PassengerID === n.PassengerID) {
                    (i = o), (r = !0);
                    break;
                  }
                }
                if (!r)
                  for (var l = 0; l < a.length; l++) {
                    var c = a[l].ticketTypeId;
                    if (
                      "child" !== c &&
                      "childBoy" !== c &&
                      "childCarry" !== c
                    ) {
                      i = a[l];
                      break;
                    }
                  }
                T.getDispatch().passengerModel.setFetcher(i);
              }
            },
            $ = function (e) {
              var t = T.getState().passengerModel.displayPasList,
                n =
                  null == t
                    ? void 0
                    : t.find(function (t) {
                        return t.PassengerID == e.PassengerID;
                      });
              if (n.passengerTypeDesc) return n.passengerTypeDesc;
              var a = n.PassengerType;
              return A.Z.getDisplayPassengerType(a);
            },
            q = function () {
              return (
                T.getState().passengerModel.displayPasList.filter(function (e) {
                  return e.isSelected;
                }) || []
              );
            },
            z = (function () {
              var e = (0, b.Z)(
                (0, D.Z)().mark(function e(t) {
                  var n,
                    a,
                    i,
                    r,
                    s,
                    o,
                    l,
                    c,
                    u,
                    d,
                    f,
                    m,
                    p,
                    g,
                    v,
                    N,
                    Z,
                    w,
                    y,
                    P,
                    C,
                    b,
                    k,
                    S,
                    I;
                  return (0, D.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (n = !1),
                              (e.prev = 1),
                              (i = T.getState().shiftInfoModel.shipInfo),
                              (r = i.vendor),
                              (s = i.website),
                              (o = i.fromStationName),
                              (l = i.toStationName),
                              (c = i.fromCityName),
                              (u = i.toCityName),
                              (d = i.shipName),
                              (f = i.fromDate),
                              (m = i.fromTime),
                              (p = i.foreignPassenger),
                              (g = i.passenger),
                              (v =
                                null === (a = T.getPage().queryParams) ||
                                void 0 === a
                                  ? void 0
                                  : a.seatName),
                              (N = L.Z.isNotEmptyObj(p)),
                              (Z = N ? p : g),
                              (w = {
                                ship: {
                                  isForeign: N,
                                  vendor: r,
                                  website: s,
                                  fromStationName: o,
                                  toStationName: l,
                                  fromCityName: c,
                                  toCityName: u,
                                  shipName: d,
                                  fromDate: f,
                                  fromTime: m,
                                },
                                psg: A.Z.getPassengerFormatData(t, Z, N, !0),
                                seatName: v,
                                utmSource: A.Z.getShipUtmSource(),
                                isForeign: N,
                                baseCommonTypes: {
                                  channel: A.Z.getChannelValue(),
                                  partner: h.default.partner,
                                },
                              }),
                              (e.next = 10),
                              (0, X.Wj)(w)
                            );
                          case 10:
                            1 === (y = e.sent).code && y.data
                              ? ((P = y.data),
                                (C = P.ticketType),
                                (b = P.ticketList),
                                (k = P.ticketTypeId),
                                (S = P.isMinor),
                                (t.isMinor = S),
                                (!b || b.length <= 1) &&
                                  ((t.ticketTypeId = k || "adult"),
                                  (t.passengerTypeDesc = C || "成人票")),
                                (n = !0))
                              : 0 === y.code &&
                                T.showMultiButtonDialog({
                                  content:
                                    (null === (I = y.data) || void 0 === I
                                      ? void 0
                                      : I.errorMessage) ||
                                    "该乘客证件信息缺失，请补全信息",
                                  leftButtonName: "取消",
                                  rightButtonName: "编辑乘客",
                                  onRightButtonClick: function () {
                                    R(t);
                                  },
                                }),
                              (e.next = 18);
                            break;
                          case 14:
                            (e.prev = 14),
                              (e.t0 = e.catch(1)),
                              console.log(e.t0),
                              (0, x.showToast)("网络不给力，请重试");
                          case 18:
                            return e.abrupt("return", n);
                          case 19:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[1, 14]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            Y = function () {
              var e = V.get();
              e && J(e);
            },
            _ = (function () {
              var e = (0, b.Z)(
                (0, D.Z)().mark(function e() {
                  var t, n, a, i, r, s, o, l, c, u, d, f, m, p, h;
                  return (0, D.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (n = T.getPage().queryParams),
                            (a = n.fromCityName),
                            (i = n.toCityName),
                            (r = n.fromStationName),
                            (s = n.toStationName),
                            (o = n.fromDate),
                            (l = n.fromTime),
                            (c = n.seatName),
                            (u = n.shipName),
                            (d = n.vendor),
                            (f = n.website),
                            (m = n.utmSource),
                            (p = {
                              fromCityName: a,
                              toCityName: i,
                              fromStationName: r,
                              toStationName: s,
                              fromDate: o,
                              fromTime: l,
                              seatName: c,
                              shipName: u,
                              vendor: d,
                              website: f,
                              utmSource: m,
                            }),
                            (e.next = 5),
                            (0, X.or)(p)
                          );
                        case 5:
                          1 === (null == (h = e.sent) ? void 0 : h.code) &&
                            null !== (t = h.data) &&
                            void 0 !== t &&
                            t.seatTicketLeft &&
                            T.getDispatch().otherModel.setSeatTicketLeft(
                              h.data.seatTicketLeft
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
            U = function () {
              var e = T.getState().shiftInfoModel.shipInfo,
                t = null == e ? void 0 : e.carInfo;
              if (L.Z.isNotEmptyObj(t) && t.isSupported) {
                var n,
                  a,
                  i = T.getPage().isWithCarFromXPage;
                i && T.getDispatch().otherModel.setIsWithCar(i);
                var r =
                  null === (n = t.carTypes) ||
                  void 0 === n ||
                  null === (a = n[0]) ||
                  void 0 === a
                    ? void 0
                    : a.name;
                r && T.getDispatch().otherModel.setCarType(r), ne();
              }
            },
            J = function (e) {
              T.getDispatch().otherModel.setTicketPhoneNumber(e);
            },
            G = function () {
              K() && Q();
            },
            K = function () {
              var e = q().length;
              if (e <= 0) return (0, x.showToast)("请至少添加一名登船人"), !1;
              var t = T.getState().shiftInfoModel.shipInfo.maxPassengerCount;
              if (!(t > 0 && e > t)) {
                var n = T.getState().otherModel.ticketPhoneNumber;
                if (!/^[0-9]{11}$/.test(n))
                  return (0, x.showToast)("请填写正确的手机号"), !1;
                V.set(n);
                var a = T.getState().otherModel.isWithCar,
                  i = T.getState().otherModel.carNum;
                return !(
                  a &&
                  !A.Z.isVehicleNumber(i) &&
                  ((0, x.showToast)("请填写正确的车牌号码，仅限汉字/英文/数字"),
                  1)
                );
              }
              (0, x.showToast)("本订单最多可添加".concat(t, "位乘客"));
            },
            Q = function () {
              try {
                var e,
                  t,
                  n = T.getState().shiftInfoModel.shipInfo,
                  a = T.getPage().pickedSeat,
                  i = T.getPage().queryParams,
                  r = B.Z.getUnionData(),
                  s = T.getState().passengerModel.fetcher,
                  o = L.Z.isNotEmptyObj(n.foreignPassenger),
                  l = o ? n.foreignPassenger : n.passenger,
                  c = A.Z.getCardInfo(s, l, o) || {},
                  u = T.getState().passengerModel.displayPasList.filter(
                    function (e) {
                      return e.isSelected;
                    }
                  ),
                  d =
                    null == u
                      ? void 0
                      : u.map(function (e) {
                          var t = A.Z.getCardInfo(e, l, o);
                          return {
                            name: e.CNName,
                            lastName: e.ENLastName,
                            firstName: e.ENFirstName,
                            passengerType: A.Z.covertPassengerType(
                              e.ticketTypeId
                            ),
                            gender: e.Gender,
                            birth: e.Birthday,
                            nationality: e.Nationality,
                            idCard: [{ idType: t.cardType, idNum: t.cardNo }],
                          };
                        }),
                  f = {
                    productLine: 2,
                    fromCity: n.fromCityName,
                    toCity: n.toCityName,
                    fromStation: n.fromStationName,
                    toStation: n.toStationName,
                    fromDate: n.fromDate,
                    fromTime: n.fromTime,
                    toDate: n.toDate,
                    toTime: n.toTime,
                    lineCode: n.shipName,
                    website: i.website,
                    fetcher: {
                      name: null == s ? void 0 : s.CNName,
                      lastName: (null == s ? void 0 : s.ENLastName) || "",
                      firstName: (null == s ? void 0 : s.ENFirstName) || "",
                      idNum: null == c ? void 0 : c.cardNo,
                      idType: (null == c ? void 0 : c.cardType) || "",
                      contactMobile:
                        T.getState().otherModel.ticketPhoneNumber || "",
                    },
                    passengers: d,
                    union: {
                      utmSource: i.utmSource,
                      allianceid: "" + r.aid,
                      sid: "" + r.sid,
                    },
                    passengerNum: (null == u ? void 0 : u.length) || 0,
                    appendProductList: [],
                    seatName: a.seatName,
                  },
                  m = T.getState().otherModel.isWithCar,
                  p = T.getState().otherModel.carType,
                  h = T.getState().otherModel.carNum,
                  g =
                    null == n ||
                    null === (e = n.carInfo) ||
                    void 0 === e ||
                    null === (t = e.carTypes) ||
                    void 0 === t
                      ? void 0
                      : t.find(function (e) {
                          return e.name === p;
                        });
                if (m && g) {
                  var v = h[0],
                    N = h.substring(1);
                  f.carInfo = { carType: p, plateNumber: N, plateProvince: v };
                }
                (0, X.LV)(f).then(function (e) {
                  1 === (null == e ? void 0 : e.code) && e.data
                    ? T.getPage().navigateTo({
                        url: "/pages/ship/orderdetail/orderdetail",
                        data: { orderId: e.data.orderNumber },
                      })
                    : (0, x.showToast)(
                        (null == e ? void 0 : e.message) ||
                          "下单失败，请稍后再试~"
                      );
                });
              } catch (e) {
                console.log("create ship order", e),
                  (0, x.showToast)("下单失败，请稍后再试~");
              }
            },
            ee = function (e) {
              var t = T.getPage().pickedSeat,
                n = parseFloat(t.passengerPrice[e]);
              return isNaN(n) && (n = 0), n;
            },
            te = function (e) {
              var t = "成人票";
              switch (e) {
                case "adult":
                  t = "成人票";
                  break;
                case "child":
                  t = "儿童票";
                  break;
                case "childCarry":
                  t = "携童票";
              }
              return t;
            },
            ne = function () {
              var e = T.getState().shiftInfoModel.shipInfo,
                t = [],
                n = 0,
                a = 0,
                i = (function () {
                  var e = T.getState().passengerModel.displayPasList.filter(
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
                r = [];
              for (var s in i) {
                var o = ee(s),
                  l = i[s].count || 0;
                r.push({ name: te(s), desc: "¥".concat(o, "x").concat(l) }),
                  (a += o * l),
                  (n += l);
              }
              r.length > 0 && t.push({ title: "票价", detailItems: r });
              var c = [];
              if (
                (e.isService &&
                  n > 0 &&
                  (c.push({
                    name: e.serviceDesc ? e.serviceDesc : "服务费",
                    desc: "¥".concat(e.serviceFee, "x").concat(n, "份"),
                  }),
                  (a += ((null == e ? void 0 : e.serviceFee) || 0) * n)),
                T.getState().otherModel.isWithCar)
              ) {
                var u,
                  d = T.getState().otherModel.carType,
                  f =
                    null === (u = e.carInfo.carTypes) || void 0 === u
                      ? void 0
                      : u.find(function (e) {
                          return e.name === d;
                        });
                c.push({
                  name: "车票",
                  desc: "¥".concat(null == f ? void 0 : f.carPrice, "x1辆"),
                }),
                  (a += (null == f ? void 0 : f.carPrice) || 0);
              }
              c.length > 0 && t.push({ title: "增值服务", detailItems: c }),
                T.getDispatch().otherModel.setTotalFee(a),
                T.getDispatch().otherModel.setPriceDetails(t);
            },
            ae = function () {
              var e = T.getState().otherModel.totalFee,
                t = T.getState().otherModel.priceDetails;
              ce({
                toast: {
                  toastCode: P.PriceDetailDrawer,
                  data: { totalFee: e, priceDetails: t },
                },
              });
            },
            ie = function (e, t) {
              switch (t) {
                case "carNum":
                  T.getDispatch().otherModel.setCarNum(
                    null == e ? void 0 : e.trim()
                  );
                  break;
                case "carType":
                  T.getDispatch().otherModel.setCarType(
                    null == e ? void 0 : e.trim()
                  );
              }
            },
            re = function () {
              var e,
                t = T.getState().otherModel.carType,
                n = T.getState().shiftInfoModel.shipInfo;
              ce({
                toast: {
                  toastCode: P.CarTypeSelectDrawer,
                  data: {
                    currentCarType: t,
                    carTypes:
                      null == n || null === (e = n.carInfo) || void 0 === e
                        ? void 0
                        : e.carTypes,
                  },
                },
              });
            },
            se = function () {
              var e = T.getState().shiftInfoModel.shipInfo;
              ce({
                toast: {
                  toastCode: P.RuleDescDrawer,
                  data: e.instructionsDesc,
                },
              });
            },
            oe = ["onConfirm", "onCancel"],
            le = (function () {
              var e = (0, b.Z)(
                (0, D.Z)().mark(function e() {
                  var t;
                  return (0, D.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (k.ZP.isLogin) {
                            e.next = 3;
                            break;
                          }
                          return (e.next = 3), k.ZP.doLogin();
                        case 3:
                          return (e.next = 5), I();
                        case 5:
                          if ((t = e.sent)) {
                            e.next = 9;
                            break;
                          }
                          return (
                            (0, x.showToast)("网络错误，请刷新重试!"),
                            e.abrupt("return")
                          );
                        case 9:
                          M(t), Y(), _(), U(), E();
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
            ce = (function () {
              var e = (0, b.Z)(
                (0, D.Z)().mark(function e(t) {
                  var n, a, i;
                  return (0, D.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (n = t.onConfirm),
                            (a = t.onCancel),
                            (i = (0, C.Z)(t, oe)),
                            e.abrupt(
                              "return",
                              new Promise(function (e) {
                                var t;
                                null === (t = T.getPage().$CommonToast) ||
                                  void 0 === t ||
                                  t.showToast(
                                    (0, N.Z)(
                                      (0, N.Z)({}, i),
                                      {},
                                      {
                                        onConfirm: function () {
                                          for (
                                            var t = arguments.length,
                                              a = new Array(t),
                                              i = 0;
                                            i < t;
                                            i++
                                          )
                                            a[i] = arguments[i];
                                          null == n || n.apply(void 0, a),
                                            e({ code: 1, data: a });
                                        },
                                        onCancel: function () {
                                          for (
                                            var t = arguments.length,
                                              n = new Array(t),
                                              i = 0;
                                            i < t;
                                            i++
                                          )
                                            n[i] = arguments[i];
                                          null == a || a.apply(void 0, n),
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
            ue = n(8271),
            de = n.n(ue),
            fe = n(17368),
            me = n(48813),
            pe = (0, u.$j)(function (e) {
              return { shipDetail: e.shiftInfoModel.shipInfo };
            })(function (e) {
              var t,
                n,
                a,
                i,
                r = e.shipDetail;
              if (!r) return (0, me.tZ)(me.HY, {});
              var s = de()(r.fromDate).format("MM月DD日"),
                o = L.Z.getWeekInfo(r.fromDate),
                l = "".concat(s, " ").concat(o, " ").concat(r.fromTime),
                c = ""
                  .concat(
                    3 == r.shipCategory
                      ? "套票票价"
                      : null === (t = r.seatInfo) ||
                        void 0 === t ||
                        null === (n = t[0]) ||
                        void 0 === n
                      ? void 0
                      : n.seatName,
                    " ¥"
                  )
                  .concat(
                    null === (a = r.seatInfo) || void 0 === a
                      ? void 0
                      : a[0].storeSeatPrice
                  );
              return (0, me.BX)(p.View, {
                className: "ship-book-shift",
                children: [
                  (0, me.BX)(p.View, {
                    className: "detail-box",
                    children: [
                      (0, me.BX)(p.View, {
                        className: "top flex-align-items-center",
                        children: [
                          (0, me.tZ)(p.View, {
                            className: "tag",
                            children: "出发",
                          }),
                          (0, me.tZ)(p.View, {
                            className: "normal-txt flex-1",
                            children: l,
                          }),
                          (0, me.tZ)(p.View, {
                            className: "normal-txt gray2 time",
                            children: r.useTimeFmt,
                          }),
                        ],
                      }),
                      (0, me.BX)(p.View, {
                        className: "mid flex-align-items-center",
                        children: [
                          (0, me.tZ)(p.Image, {
                            className: "sta-icon",
                            src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/xxjt@3x.png",
                          }),
                          (0, me.BX)(p.View, {
                            className: "flex flex-column",
                            children: [
                              (0, me.tZ)(p.Text, {
                                className: "sta-txt mb16",
                                children: r.fromStationName,
                              }),
                              (0, me.tZ)(p.Text, {
                                className: "sta-txt",
                                children: r.toStationName,
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, me.tZ)(p.View, { className: "h-line" }),
                      (0, me.BX)(p.View, {
                        className: "botm flex-align-items-center",
                        children: [
                          (0, me.tZ)(p.View, {
                            className: "normal-txt gray1",
                            children: c,
                          }),
                          (0, me.tZ)(p.View, { className: "v-line" }),
                          (0, me.tZ)(p.View, {
                            className: "normal-txt gray1",
                            children: "退改政策/取票方式",
                          }),
                          (0, me.tZ)(fe.Z, {
                            customizeStyle: {
                              icon: {
                                fontSize: "".concat(f().pxTransform(22)),
                              },
                            },
                            onClickHandle: function () {
                              ce({
                                toast: {
                                  toastCode: P.BookingRuleDrawer,
                                  data: r.instructionsDesc,
                                },
                              });
                            },
                          }),
                        ],
                      }),
                    ],
                  }),
                  (null === (i = r.tagDescList) || void 0 === i
                    ? void 0
                    : i.length) > 0 &&
                    (0, me.tZ)(p.View, {
                      className: "tips",
                      children: r.tagDescList.map(function (e, t) {
                        return (0,
                        me.BX)(p.View, { className: "flex-align-items-center", children: [(0, me.tZ)(p.Image, { className: "tips-icon", src: e.icon }), (0, me.tZ)(p.Text, { className: "tips-txt", style: { color: e.colour }, children: e.title })] }, t);
                      }),
                    }),
                ],
              });
            }),
            he = (0, u.$j)(function (e) {
              return { ticketPhoneNumber: e.otherModel.ticketPhoneNumber };
            })(function (e) {
              var t = e.ticketPhoneNumber;
              return (0, me.BX)(p.View, {
                className: "ship-booking-mobile flex-align-items-center",
                children: [
                  (0, me.tZ)(p.View, {
                    className: "label",
                    children: "取票手机",
                  }),
                  (0, me.tZ)(p.Input, {
                    className: "input-mobile",
                    type: "number",
                    onInput: function (e) {
                      return J(e.detail.value.trim());
                    },
                    placeholder: "请填写取票手机号码",
                    placeholderClass: "input-placeholder",
                    value: t,
                  }),
                ],
              });
            }),
            ge = c.default.memo(function () {
              return (0,
              me.BX)(p.View, { className: "ship-booking-btips flex-align-items-center flex-column", children: [(0, me.BX)(p.View, { className: "note", children: [(0, me.tZ)(p.Text, { children: "*订单包含船票、附加选购产品、部分线路含服务费（包含技术接入费、支付手续费等）、燃油费、港口清理费。本产品支付成功后，需等待商家确认是否可以出行，具体出票结果可在订单详情页和短信中查看。" }), (0, me.tZ)(p.Text, { className: "important-tips", id: "AOAC", onClick: se, children: "船票购票须知" })] }), (0, me.tZ)(p.Image, { className: "gold-service", src: "https://pages.c-ctrip.com/bus-images/zhixing/zx-bus-logo.png" })] });
            }),
            ve = (0, u.$j)(function (e) {
              return { totalFee: e.otherModel.totalFee };
            })(function (e) {
              var t = e.totalFee;
              return (0,
              me.BX)(p.View, { className: "ship-booking-bfp flex-align-items-center", children: [(0, me.BX)(p.View, { className: "total-fee flex-1", children: [(0, me.tZ)(p.Text, { children: "¥" }), (0, me.tZ)(p.Text, { className: "fee", children: t })] }), (0, me.BX)(p.View, { className: "price-detail-btn", id: "AOAA", onClick: ae, children: [(0, me.tZ)(p.Text, { children: "明细" }), (0, me.tZ)(p.Text, { className: "iconfont ifont-arrup" })] }), (0, me.tZ)(p.View, { className: "buy-btn", id: "AOAB", onClick: G, children: "立即预订" })] });
            }),
            Ne = function (e) {
              var t = e.pasInfo,
                n = e.shipInfo,
                a = L.Z.isNotEmptyObj(null == n ? void 0 : n.foreignPassenger),
                i = a
                  ? null == n
                    ? void 0
                    : n.foreignPassenger
                  : null == n
                  ? void 0
                  : n.passenger,
                r = A.Z.getCardInfo(t, i, a),
                s = null == t ? void 0 : t.CNName;
              (("护照" == r.cardType && !a) || !s) &&
                null != t &&
                t.ENLastName &&
                null != t &&
                t.ENFirstName &&
                (s = t.ENLastName + "/" + t.ENFirstName);
              var o = r.cardNo
                ? A.Z.maskCardNum(r.cardNo)
                : "证件信息缺失，请补充";
              return (0, me.BX)(p.View, {
                className: "pas-item flex-align-items-center",
                id: "AOAF",
                onClick: function () {
                  return j(t);
                },
                children: [
                  (0, me.tZ)(p.View, { className: "p-name", children: s }),
                  (null == t ? void 0 : t.isSelected) &&
                    (0, me.tZ)(p.View, { className: "p-type", children: $(t) }),
                  (0, me.tZ)(p.View, {
                    className: "p-idcard flex-1",
                    children: o,
                  }),
                  (0, me.tZ)(p.View, {
                    className: "p30",
                    children: (0, me.tZ)(p.Text, {
                      className: "iconfont2 ".concat(
                        null != t && t.isSelected
                          ? "ifont2-checkboxed"
                          : "ifont2-checkbox"
                      ),
                    }),
                  }),
                ],
              });
            },
            Ze = (0, u.$j)(function (e) {
              var t = e.passengerModel,
                n = e.shiftInfoModel;
              return {
                displayPasList: null == t ? void 0 : t.displayPasList,
                shipInfo: null == n ? void 0 : n.shipInfo,
              };
            })(function (e) {
              var t,
                n = e.displayPasList,
                a = e.shipInfo,
                i =
                  (null == n ||
                  null ===
                    (t = n.filter(function (e) {
                      return e.isSelected;
                    })) ||
                  void 0 === t
                    ? void 0
                    : t.length) || 0,
                r = (null == a ? void 0 : a.maxPassengerCount) || 0;
              return (0, me.BX)(p.View, {
                className: "ship-booking-passenger",
                children: [
                  (0, me.BX)(p.View, {
                    className: "hd flex-align-items-center",
                    children: [
                      0 === i &&
                        (0, me.BX)(me.HY, {
                          children: [
                            (0, me.tZ)(p.View, {
                              className: "txt",
                              children: "选择乘客",
                            }),
                            (0, me.BX)(p.View, {
                              className: "desc",
                              children: ["最多可选择", r, "人"],
                            }),
                          ],
                        }),
                      i > 0 &&
                        (0, me.BX)(me.HY, {
                          children: [
                            (0, me.tZ)(p.View, {
                              className: "txt",
                              children: "已选：",
                            }),
                            (0, me.BX)(p.View, {
                              className: "txt",
                              children: [i, "人"],
                            }),
                          ],
                        }),
                    ],
                  }),
                  (0, me.tZ)(p.View, {
                    className: "pas-list",
                    children:
                      null == n
                        ? void 0
                        : n.map(function (e, t) {
                            return (0,
                            me.tZ)(Ne, { pasInfo: e, shipInfo: a }, t);
                          }),
                  }),
                  (0, me.BX)(p.View, {
                    className: "btn-row flex-center",
                    id: "AOAG",
                    onClick: W,
                    children: [
                      (0, me.tZ)(p.Text, { className: "iconfont ifont-add" }),
                      (0, me.tZ)(p.Text, {
                        className: "btn-desc",
                        children:
                          (null == n ? void 0 : n.length) > 0
                            ? "添加/修改"
                            : "添加乘客",
                      }),
                    ],
                  }),
                ],
              });
            }),
            we = n(94262),
            ye = n(90129),
            Te = n(34229),
            Pe = c.default.memo(function (e) {
              var t = e.visible,
                n = void 0 !== t && t,
                a = e.priceDetail,
                i = void 0 === a ? null : a,
                r = e.onClose,
                s = void 0 === r ? function () {} : r;
              if (!i) return (0, me.tZ)(me.HY, {});
              var o = i.priceDetails || [];
              return (0, me.tZ)(Te.ZtDrawer, {
                show: n,
                onClose: s,
                className: "ship-booking-pd-drawer",
                children: (0, me.BX)(p.View, {
                  className: "content",
                  children: [
                    (0, me.tZ)(p.View, {
                      className: "title",
                      children: "价格详情",
                    }),
                    (0, me.BX)(p.View, {
                      className: "price-detail",
                      children: [
                        (0, me.BX)(p.View, {
                          className: "total flex-align-items-center",
                          children: [
                            (0, me.tZ)(p.Text, {
                              className: "tit_1",
                              children: "订单总价",
                            }),
                            (0, me.BX)(p.Text, {
                              className: "price",
                              children: ["¥", i.totalFee || 0],
                            }),
                          ],
                        }),
                        o.map(function (e, t) {
                          var n;
                          return (0, me.BX)(
                            p.View,
                            {
                              className: "detail-item",
                              children: [
                                (0, me.tZ)(p.View, { className: "split-line" }),
                                (0, me.tZ)(p.View, {
                                  className: "tit_1",
                                  children: e.title,
                                }),
                                null == e ||
                                null === (n = e.detailItems) ||
                                void 0 === n
                                  ? void 0
                                  : n.map(function (e, t) {
                                      return (0,
                                      me.BX)(p.View, { className: "sub-item flex-align-items-center", children: [(0, me.tZ)(p.Text, { className: "tit_2", children: e.name }), (0, me.tZ)(p.Text, { className: "price price_2", children: e.desc })] }, t);
                                    }),
                              ],
                            },
                            t
                          );
                        }),
                      ],
                    }),
                  ],
                }),
              });
            }),
            Ce = n(31251),
            De = c.default.memo(function (e) {
              var t = e.visible,
                n = void 0 !== t && t,
                a = e.currentCarType,
                i = void 0 === a ? "" : a,
                r = e.carTypes,
                s = void 0 === r ? [] : r,
                o = e.onClose,
                l = void 0 === o ? function () {} : o,
                u = (0, c.useState)(i),
                d = (0, ye.Z)(u, 2),
                f = d[0],
                m = d[1];
              if ((null == s ? void 0 : s.length) <= 0)
                return (0, me.tZ)(p.View, {});
              return (0, me.tZ)(Te.ZtDrawer, {
                show: n,
                isDefineHead: !0,
                className: "ship-booking-cartype-drawer",
                onWrapClose: l,
                children: (0, me.BX)(p.View, {
                  className: "content",
                  children: [
                    (0, me.tZ)(p.View, {
                      className: "drawer-tit",
                      children: "选择车辆类型",
                    }),
                    (0, me.tZ)(p.View, {
                      className: "iconfont2 ifont2-close",
                      id: "AOAD",
                      onClick: l,
                    }),
                    (0, me.tZ)(p.View, {
                      className: "type-list",
                      children: s.map(function (e, t) {
                        return (0, me.BX)(
                          c.Fragment,
                          {
                            children: [
                              (0, me.BX)(p.View, {
                                className: "item",
                                id: "AOAE",
                                onClick: function () {
                                  return (function (e) {
                                    m(e.name), ie(e.name, "carType"), l();
                                  })(e);
                                },
                                children: [
                                  (0, me.tZ)(p.Text, {
                                    className: "desc ".concat(
                                      f === (null == e ? void 0 : e.name)
                                        ? "active"
                                        : ""
                                    ),
                                    children: ""
                                      .concat(null == e ? void 0 : e.name, " ¥")
                                      .concat(null == e ? void 0 : e.carPrice),
                                  }),
                                  f === (null == e ? void 0 : e.name) &&
                                    (0, me.tZ)(p.Text, {
                                      className: "iconfont ifont-selected",
                                    }),
                                ],
                              }),
                              t !== s.length - 1 &&
                                (0, me.tZ)(p.View, { className: "h-line" }),
                            ],
                          },
                          t
                        );
                      }),
                    }),
                  ],
                }),
              });
            }),
            be = function (e) {
              var t,
                n,
                a = e.data;
              return !a ||
                (null === (t = a.content) || void 0 === t
                  ? void 0
                  : t.length) <= 0
                ? (0, me.tZ)(me.HY, {})
                : (0, me.BX)(p.View, {
                    className: "normal-item",
                    children: [
                      (0, me.tZ)(p.View, {
                        className: "title",
                        children: null == a ? void 0 : a.title,
                      }),
                      (0, me.tZ)(p.View, {
                        className: "desc-list",
                        children:
                          null == a || null === (n = a.content) || void 0 === n
                            ? void 0
                            : n.map(function (e, t) {
                                return (0, me.tZ)(p.Text, { children: e }, t);
                              }),
                      }),
                    ],
                  });
            },
            xe = c.default.memo(function (e) {
              var t = e.visible,
                n = void 0 !== t && t,
                a = e.instructionList,
                i = void 0 === a ? [] : a,
                r = e.onClose,
                s = void 0 === r ? function () {} : r;
              if ((null == i ? void 0 : i.length) <= 0)
                return (0, me.tZ)(p.View, {});
              var o = [];
              return (
                i.forEach(function (e) {
                  var t;
                  (null == e || null === (t = e.newContent) || void 0 === t
                    ? void 0
                    : t.length) > 0
                    ? (o = o.concat(e.newContent))
                    : o.push({
                        title: null == e ? void 0 : e.title,
                        content: null == e ? void 0 : e.desc,
                      });
                }),
                (0, me.tZ)(Te.ZtDrawer, {
                  show: n,
                  isDefineHead: !0,
                  className: "ship-booking-desc-drawer",
                  children: (0, me.BX)(p.View, {
                    className: "content",
                    children: [
                      (0, me.tZ)(p.View, {
                        className: "drawer-tit",
                        children: "取、退票、改签规则",
                      }),
                      (0, me.tZ)(p.View, {
                        className: "iconfont2 ifont2-close",
                        id: "AOAH",
                        onClick: s,
                      }),
                      (0, me.tZ)(c.Fragment, {
                        children:
                          o.length > 0 &&
                          (0, me.tZ)(p.ScrollView, {
                            scrollY: !0,
                            scrollWithAnimation: !0,
                            className: "cont-scroll",
                            children: (function (e) {
                              return (0, me.tZ)(c.Fragment, {
                                children:
                                  null == e
                                    ? void 0
                                    : e.map(function (e, t) {
                                        return (0, me.tZ)(be, { data: e }, t);
                                      }),
                              });
                            })(o),
                          }),
                      }),
                    ],
                  }),
                })
              );
            }),
            ke = void 0,
            Se = function () {},
            Ie = (0, u.$j)(function (e) {
              return (0, we.Z)(e), {};
            })(function (e) {
              var t,
                n,
                a = e.onRef,
                i = (0, c.useState)(null),
                r = (0, ye.Z)(i, 2),
                s = r[0],
                o = r[1],
                l = (0, c.useState)(!1),
                u = (0, ye.Z)(l, 2),
                d = u[0],
                f = u[1];
              (0, c.useImperativeHandle)(a, function () {
                return {
                  showToast: function (e) {
                    o(null == e ? void 0 : e.toast),
                      f(!0),
                      null == e || e.onConfirm,
                      (Se =
                        (null == e ? void 0 : e.onCancel) || function () {});
                  },
                  closeToast: function () {
                    f(!1);
                  },
                };
              });
              var m = function () {
                for (
                  var e, t = arguments.length, n = new Array(t), a = 0;
                  a < t;
                  a++
                )
                  n[a] = arguments[a];
                null === (e = Se) ||
                  void 0 === e ||
                  e.call.apply(e, [ke].concat(n)),
                  f(!1),
                  (Se = function () {});
              };
              if (!d) return null;
              switch (s.toastCode) {
                case P.PriceDetailDrawer:
                  return (0,
                  me.tZ)(Pe, { visible: !0, priceDetail: s.data, onClose: m });
                case P.BookingRuleDrawer:
                  return (0,
                  me.tZ)(Ce.Z, { visible: !0, instructionList: s.data, onClose: m });
                case P.CarTypeSelectDrawer:
                  return (0,
                  me.tZ)(De, { visible: !0, currentCarType: null === (t = s.data) || void 0 === t ? void 0 : t.currentCarType, carTypes: null === (n = s.data) || void 0 === n ? void 0 : n.carTypes, onClose: m });
                case P.RuleDescDrawer:
                  return (0,
                  me.tZ)(xe, { visible: !0, instructionList: s.data, onClose: m });
                default:
                  return null;
              }
            }),
            Me = (0, u.$j)(function (e) {
              var t = e.otherModel,
                n = e.shiftInfoModel;
              return {
                isWithCar: null == t ? void 0 : t.isWithCar,
                carType: null == t ? void 0 : t.carType,
                carNum: null == t ? void 0 : t.carNum,
                shipInfo: null == n ? void 0 : n.shipInfo,
              };
            })(function (e) {
              var t,
                n,
                a = e.isWithCar,
                i = e.carType,
                r = e.cardNum,
                s = e.shipInfo,
                o = null == s ? void 0 : s.carInfo;
              if (
                !o ||
                !o.isSupported ||
                (null === (t = o.carTypes) || void 0 === t
                  ? void 0
                  : t.length) <= 0
              )
                return (0, me.tZ)(me.HY, {});
              var l = o.carDescList || [],
                c =
                  (null ===
                    (n = o.carTypes.find(function (e) {
                      return e.name === i;
                    })) || void 0 === n
                    ? void 0
                    : n.carPrice) || "";
              return (0, me.BX)(p.View, {
                className: "ship-book-with-car",
                children: [
                  (0, me.BX)(p.View, {
                    className: "hd flex-align-items-center",
                    children: [
                      (0, me.tZ)(p.Text, {
                        className: "title flex-1",
                        children: "带车上船",
                      }),
                      (0, me.tZ)(p.Text, {
                        className: "price",
                        children: "¥".concat(c, "/辆"),
                      }),
                      (0, me.tZ)(p.Text, {
                        className: "iconfont2 ".concat(
                          a ? "ifont2-checkboxed" : "ifont2-checkbox"
                        ),
                        id: "AOAI",
                        onClick: function () {
                          return (function (e) {
                            T.getDispatch().otherModel.setIsWithCar(e), ne();
                          })(!a);
                        },
                      }),
                    ],
                  }),
                  l.length > 0 &&
                    l.map(function (e, t) {
                      return (0,
                      me.tZ)(p.View, { className: "desc-item flex-align-items-center", children: "· ".concat(e) }, t);
                    }),
                  a &&
                    (0, me.BX)(p.View, {
                      className: "car-info",
                      children: [
                        (0, me.BX)(p.View, {
                          className: "car-item flex-align-items-center",
                          children: [
                            (0, me.tZ)(p.Text, {
                              className: "label",
                              children: "车辆类型",
                            }),
                            (0, me.tZ)(p.Text, {
                              className: "input-val flex-1",
                              id: "AOAJ",
                              onClick: re,
                              children: i,
                            }),
                            (0, me.tZ)(p.Text, {
                              className: "iconfont ifont-arrdown",
                              id: "AOAK",
                              onClick: re,
                            }),
                          ],
                        }),
                        (0, me.BX)(p.View, {
                          className: "car-item flex-align-items-center",
                          children: [
                            (0, me.tZ)(p.Text, {
                              className: "label",
                              children: "车辆号码",
                            }),
                            (0, me.tZ)(p.Input, {
                              className: "input-val flex-1",
                              placeholderClass: "phc-val",
                              placeholder: "如：沪A88888",
                              onInput: function (e) {
                                var t;
                                return ie(
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
            Ve =
              (0, m.h)(!1, { usePageWrapper: !0 })(
                (F = (function (e) {
                  (0, o.Z)(n, e);
                  var t = (0, l.Z)(n);
                  function n(e) {
                    var a;
                    return (
                      (0, i.Z)(this, n),
                      ((a = t.call(this, e)).pageId = "10650060010"),
                      (a.store = T.create((0, s.Z)(a)).store),
                      a
                    );
                  }
                  return (
                    (0, r.Z)(n, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          this.setPageData(), le();
                        },
                      },
                      {
                        key: "setPageData",
                        value: function () {
                          var e,
                            t,
                            n,
                            a,
                            i =
                              (null === (e = this.$instance) ||
                              void 0 === e ||
                              null === (t = e.router) ||
                              void 0 === t
                                ? void 0
                                : t.params) || {},
                            r = {
                              fromCityName: i.fromCityName,
                              toCityName: i.toCityName,
                              fromStationName: i.fromStationName,
                              toStationName: i.toStationName,
                              shipName: i.shipName,
                              vendor: i.vendor,
                              fromDate: i.fromDate,
                              fromTime: i.fromTime,
                              toDate: i.toDate,
                              toTime: i.toTime,
                              seatName:
                                null === (n = i.pickedSeat) || void 0 === n
                                  ? void 0
                                  : n.seatName,
                              seatPrice:
                                null === (a = i.pickedSeat) || void 0 === a
                                  ? void 0
                                  : a.seatPrice,
                              useTime: i.useTime,
                              useTimeFmt: i.useTimeFmt,
                              website: i.website,
                              fromPage: "bookingPage",
                              isReturn: !1,
                              carChecked: !1,
                              utmSource: A.Z.getShipUtmSource(),
                              baseCommonTypes: {
                                channel: A.Z.getChannelValue(),
                                partner: h.default.partner,
                              },
                            };
                          (this.queryParams = r),
                            (this.pickedSeat = i.pickedSeat),
                            (this.isWithCarFromXPage = i.isWithCar);
                        },
                      },
                      {
                        key: "renderTitleView",
                        value: function () {
                          var e = this.$instance.router.params || {},
                            t = e.fromCityName,
                            n = e.toCityName;
                          return (0, me.BX)(p.View, { children: [t, "-", n] });
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this;
                          return (0, me.BX)(u.zt, {
                            store: this.store,
                            children: [
                              (0, me.tZ)(pe, {}),
                              (0, me.tZ)(Ze, {}),
                              (0, me.tZ)(he, {}),
                              (0, me.tZ)(Me, {}),
                              (0, me.tZ)(ge, {}),
                              (0, me.tZ)(ve, {}),
                              (0, me.tZ)(c.Fragment, {
                                children: (0, me.tZ)(Ie, {
                                  onRef: function (t) {
                                    e.$CommonToast = t;
                                  },
                                }),
                              }),
                            ],
                          });
                        },
                      },
                    ]),
                    n
                  );
                })(c.default.Component))
              ) || F;
          Page(
            (0, a.createPageConfig)(
              Ve,
              "pages/ship/book/book",
              { root: { cn: [] } },
              {
                navigationBarTitleText: "订单填写",
                navigationBarBackgroundColor: "#0066E6",
                backgroundColorTop: "#F5F5F5",
                backgroundColorBottom: "#F5F5F5",
                enablePullDownRefresh: !1,
                navigationStyle: "custom",
              } || {}
            )
          );
        },
      },
      function (e) {
        e.O(
          0,
          [606, 8014, 81198, 35203, 4978, 2632, 19559, 11216, 68592],
          function () {
            return (function (t) {
              return e((e.s = t));
            })(5885);
          }
        ),
          e.O();
      },
    ]);
})();
