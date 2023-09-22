!(function () {
  "use strict";
  require("../sub-vendors.js"),
    require("../sub-common/87dd7ca508f26cc44a96a97518946752.js"),
    require("../sub-common/1775d7c9f65b9a6f532fd61b25d0faaf.js"),
    require("../sub-common/99e1f8a4cc1290fc72ce9bc5d2852868.js"),
    require("../sub-common/1bc3053f48eb4d260bc28c0ff4efae15.js"),
    require("../sub-common/d33d0bff6905d6dc3872ed0c9fa55a20.js"),
    require("../sub-common/2e920853f1c2d7667026c4d194b5bc40.js"),
    require("../sub-common/b4b623867ae0351b46b8de2fb5023ee1.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [46155],
      {
        31076: function (t, e, r) {
          var i,
            a = r(32180),
            n = r(57042),
            s = r(24460),
            o = r(21867),
            l = r(86066),
            c = r(90983),
            h = r(22276),
            d = r(79301),
            u = r(95308),
            p = r(45023),
            f = r(298),
            m = r(90129),
            g = r(52500),
            D = r(71515),
            S = r(92954),
            F = r.n(S),
            T = r(48792),
            v = r.n(T),
            y = r(3205),
            b = r(2326),
            L = r(70352),
            Z = r(79846),
            w = r(18783),
            C = r(79910),
            N = r(20592),
            k = r(79792),
            A = r(9062),
            P = r(49120),
            x = r(24383),
            H = r(8271),
            M = r.n(H),
            I = r(4102),
            B = r(21999),
            _ = r(2576),
            Y = r(45245),
            R = r(81957),
            q = r(13975),
            W = r(41335),
            K = r(78996),
            O = r(53237),
            V = r(46260),
            X = r(92794),
            j = r(48813),
            U = b.Z.getDateStr(),
            E = "YYYY-MM-DD",
            J = M()().add(1, "day").format(E),
            z = "网络错误，请稍候再试",
            G = k.default.isTieyou,
            Q = {
              pageId: G ? "10650028623" : "10650026934",
              pageTitle: "多程航班",
              data: {
                isLogin: w.ZP.isLogin,
                isTieyou: G,
                isIPhoneX: Y.Z.isIPhoneX(),
                departureSkeleton: !0,
                returnSkeleton: !0,
                segments: [{}, {}],
                departureSelectFlight: !1,
                returnSelectFlight: !1,
                departureList: [],
                returnList: [],
                departureNoFlight: !1,
                returnNoFlight: !1,
                departureFilterList: [],
                returnFilterList: [],
                filterTab: [
                  { active: !0, subIndex: 0, type: "depart" },
                  { active: !1, subIndex: 0, type: "return" },
                ],
                departureSortType: "price",
                departurePriceSort: "ascend",
                departureTimeSort: "ascend",
                returnSortType: "price",
                returnPriceSort: "ascend",
                returnTimeSort: "ascend",
                isFilterTabActive: !0,
                isShowNewCoupon: !1,
                expiredTime: "",
                couponAmount: "",
                surpriseParams: {},
                scrollListHeight: 1e3,
                departureSelected: {},
                returnSelected: {},
                flightDrawShow: !1,
                selectedSegments: [],
                entrancePopupHidden: !1,
                entranceDrawerTips: [],
                firstDate: "",
                secondDate: "",
              },
              onLoad: function (t) {
                console.log("----options-----", t, JSON.stringify(t)),
                  (this.pageOptions = t);
                var e = t.data || {};
                if ("string" == typeof e)
                  try {
                    e = JSON.parse(decodeURIComponent(e));
                  } catch (t) {
                    console.log(t);
                  }
                var r = t.fromPage,
                  i = void 0 === r ? "" : r,
                  a = e,
                  n = a.hasChild,
                  s = void 0 !== n && n,
                  o = a.hasBaby,
                  l = void 0 !== o && o,
                  c = e.segments || [];
                c.forEach(function (t, e) {
                  0 === e
                    ? b.Z.compareTodayToDate(t.dptDate) && (t.dptDate = J)
                    : b.Z.compareDateToDate(c[e - 1].dptDate, t.dptDate) &&
                      (t.dptDate = M()(c[e - 1].dptDate)
                        .add(1, "day")
                        .format(E));
                });
                var h = (0, m.Z)(c, 2),
                  d = h[0],
                  u = h[1],
                  p = null == d ? void 0 : d.dptDate,
                  g = null == u ? void 0 : u.dptDate,
                  D = b.Z.initNewFilter([
                    "起飞时间",
                    "出发机场",
                    "到达机场",
                    "航空公司",
                    "机型",
                  ]),
                  S = b.Z.initNewFilter([
                    "起飞时间",
                    "出发机场",
                    "到达机场",
                    "航空公司",
                    "机型",
                  ]);
                this.setData({
                  hasChild: s,
                  hasBaby: l,
                  segments: c.map(function (t) {
                    return (0,
                    f.Z)((0, f.Z)({}, t), {}, { dateStr: M()(t.dptDate).format("MM-DD"), weekDay: I.Z.getWeekDayDesc(t.dptDate) });
                  }),
                  departureFilterList: D,
                  returnFilterList: S,
                  isLogin: w.ZP.isLogin,
                  firstDate: p,
                  secondDate: g,
                }),
                  (this._backups = {}),
                  this.getFlightList(),
                  b.Z.recordFromPage(i);
              },
              onShow: function () {
                N.IK.forceListRefresh &&
                  ((N.IK.cacheUsage = 1),
                  (N.IK.forceListRefresh = !1),
                  this.getFlightList());
              },
              onHide: function () {
                var t;
                null === (t = this.closeCommonDrawer) ||
                  void 0 === t ||
                  t.call(this),
                  this.closeFlightDetail();
              },
              onShareAppMessage: function () {
                return {
                  title: "".concat(
                    k.default.partnerCN,
                    "火车机票酒店汽车票门票"
                  ),
                  path: "/pages/flight/multiFlights/multiFlights?".concat(
                    C.Z.stringifyQuery(this.pageOptions)
                  ),
                };
              },
              getFlightList: function () {
                var t = this,
                  e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : "depart";
                this.showSkeleton(e);
                var r = this.data,
                  i = r.goFlightNumber,
                  a = r.hasChild,
                  n = r.hasBaby,
                  s = r.segments,
                  o = r.departureFilterList,
                  l = r.returnFilterList,
                  c = "return" === e,
                  h = {
                    data: {
                      version: 12,
                      source: 0,
                      cacheUsage: N.IK.cacheUsage || 0,
                      hasChild: a,
                      hasBaby: n,
                      segments: s.map(function (t) {
                        return {
                          dptDate: t.dptDate,
                          dptCode: t.dptCode,
                          arrCode: t.arrCode,
                        };
                      }),
                    },
                  };
                (this._pass_query = h.data),
                  c && (h.data.segments[0].flightNo = i),
                  this.flightListModelPromise(h)
                    .then(function (r) {
                      var i,
                        a = r || {},
                        n = a.resultCode,
                        s = a.resultMessage,
                        h = a.data,
                        d = void 0 === h ? {} : h;
                      if (1 !== n) return (0, P.showModal)(s || z);
                      var u = t.handleFlightData(
                        (null == d ? void 0 : d.singles) || [],
                        e
                      );
                      if (0 === u.length) return t.setNoFlight(e);
                      var f = c ? C.Z.deepCopy(l) : C.Z.deepCopy(o),
                        m = b.Z.updateNewFilter(u, {
                          filterList: f,
                        }).filterList,
                        g = c ? "returnFilterList" : "departureFilterList";
                      t._backups[e] = { singles: C.Z.deepCopy(u) };
                      var D = d.announcement || {},
                        S = D.entrancePopup,
                        F = D.tipAndFloat,
                        T = D.tips;
                      t.setData(
                        ((i = {
                          flightView: 0,
                          entrancePopup: S || {},
                          entranceDrawerTips: T,
                        }),
                        (0, p.Z)(i, "".concat(g), m),
                        (0, p.Z)(i, "tipAndFloat", F || {}),
                        i)
                      ),
                        t.filterFlightsList(e);
                    })
                    .catch(function (e) {
                      (0, P.showModal)(JSON.stringify(e) || z), t.setNoFlight();
                    })
                    .finally(function () {
                      c &&
                        ((N.IK.cacheUsage = 0),
                        setTimeout(function () {
                          t.getDomProps("#roundtripBd");
                        }, 0));
                    });
              },
              formatSegmentData: function (t) {
                return t.map(function (t) {
                  var e = M()(t.dptTime).format("YYYY-MM-DD"),
                    r = t.dptTime,
                    i = t.arrTime,
                    a = t.dtls,
                    n = t.sequences,
                    s = t.dptAFullName,
                    o = t.arrAFullName,
                    l = t.costTime,
                    c = M()(r).format("YYYY-MM-DD"),
                    h = M()(i).format("YYYY-MM-DD"),
                    d = (n && n.length && n[0]) || [],
                    u = d.cftn,
                    p = d.facDesc,
                    m = d.cfts;
                  return {
                    flights: [
                      (0, f.Z)(
                        (0, f.Z)((0, f.Z)({}, t), d),
                        {},
                        {
                          dptTimeStr: M()(r).format("HH:mm"),
                          dptMonthDay: M()(r).format("M月D日"),
                          dptWeekDay: C.Z.getWeekInfo(r),
                          arrTimeStr: M()(i).format("HH:mm"),
                          arrMonthDay: M()(i).format("M月D日"),
                          dptDayDiff: e !== c ? M()(r).format("MM-DD") : "",
                          arrDayDiff: e !== h ? M()(i).format("MM-DD") : "",
                          dtlsStr: Array.isArray(a) ? a.join(" ") : a,
                          dptAName: s,
                          arrAName: o,
                          planeType: ""
                            .concat(u)
                            .concat(m ? "(" + m + ")" : ""),
                          mealType: p,
                          ct: l,
                        }
                      ),
                    ],
                  };
                });
              },
              getCouponInfomation: function (t) {
                var e = t.expiredTime,
                  r = t.couponAmount,
                  i = t.isShowNewCoupon;
                this.setData({
                  couponAmount: r,
                  expiredTime: e,
                  isShowNewCoupon: i,
                });
              },
              getReturnFlightList: function () {
                this.getFlightList("return");
              },
              couponFixedShow: function () {
                this.setData({ isShowNewCoupon: !0 });
              },
              handleNewCouponClose: function () {
                this.setData({ isShowNewCoupon: !1 });
              },
              handleCouponReceive: function () {
                this.getFlightList();
              },
              flightListModelPromise: function (t) {
                var e = this;
                return (0, u.Z)(
                  (0, d.Z)().mark(function r() {
                    return (0, d.Z)().wrap(
                      function (r) {
                        for (;;)
                          switch ((r.prev = r.next)) {
                            case 0:
                              return (r.prev = 0), (r.next = 3), (0, w.M9)();
                            case 3:
                              return r.abrupt(
                                "return",
                                (0, q.Tx)(t, {
                                  loginCB: function () {
                                    e.setData({ isLogin: !0 }),
                                      e.getFlightList();
                                  },
                                })
                              );
                            case 6:
                              (r.prev = 6),
                                (r.t0 = r.catch(0)),
                                console.error(r.t0 || "获取openId失败");
                            case 9:
                            case "end":
                              return r.stop();
                          }
                      },
                      r,
                      null,
                      [[0, 6]]
                    );
                  })
                )();
              },
              handleFlightData: function (t) {
                var e =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : "depart",
                  r = this.data.goPrice;
                return t.map(function (t) {
                  var i = M()(Y.Z.formatDateWithSlash(t.dptTime)),
                    a = M()(Y.Z.formatDateWithSlash(t.arrTime)),
                    n =
                      (t.abbr && t.abbr.split("|") && t.abbr.split("|")) || [];
                  return (0,
                  f.Z)((0, f.Z)({}, t), {}, { dptTimeStr: i.format("HH:mm"), arrTimeStr: a.format("HH:mm"), dayDiff: b.Z.getDayDiff(i.format(E), a.format(E)), abbr: n[0] ? n[1] : "", transfer: t.sequences.length > 1, airCode: t.sequences[0].airCode, cfts: t.sequences[0].cfts, departTimeHourSection: Math.floor(new Date(Y.Z.formatDateWithSlash(t.dptTime)).getHours() / 6), priceDifferences: "return" === e ? t.apr - r : 0, selected: !1 });
                });
              },
              getDomProps: function (t) {
                var e = this;
                F()
                  .createSelectorQuery()
                  .select(t)
                  .boundingClientRect()
                  .exec(function (t) {
                    null != t &&
                      t[0] &&
                      e.setData({ scrollListHeight: t[0].height });
                  });
              },
              setNoFlight: function () {
                var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "depart";
                this.hideSkeleton("depart" === t ? "" : t),
                  "depart" === t &&
                    this.setData({ departureList: [], departureNoFlight: !0 }),
                  this.setData({ returnNoFlight: !0, returnList: [] });
              },
              handleResetAirpot: function (t) {
                var e = this.data,
                  r = e.departureFilterList,
                  i = e.returnFilterList,
                  a = "return" === t,
                  n = a ? i : r,
                  s = a ? "returnFilterList" : "departureFilterList";
                n.forEach(function (t) {
                  var e = t.prop;
                  ("dptACode" !== e && "arrACode" !== e) ||
                    ((t.active = !1),
                    t.list.forEach(function (t) {
                      t.selected = !1;
                    }));
                }),
                  this.setData((0, p.Z)({}, s, (0, h.Z)(n))),
                  this.confirmFilter(!0, t);
              },
              openFilterList: function () {
                var t = this.data,
                  e = t.departureFilterList,
                  r = t.returnFilterList,
                  i = t.filterTab;
                (this.departureFilterList_backup = C.Z.deepCopy(e)),
                  (this.returnFilterList_backup = C.Z.deepCopy(r)),
                  (0, X.x)({
                    tripType: A.zM.multi,
                    filterTab: i,
                    departureFilterList: e,
                    returnFilterList: r,
                    handleFilterTabClick: this.handleFilterTabClick.bind(this),
                    cancelFilter: this.cancelFilter.bind(this),
                    confirmFilter: this.confirmFilter.bind(this),
                    selectKey: this.selectKey.bind(this),
                    filterSelected: this.filterSelected.bind(this),
                  });
              },
              handleFilterTabClick: function (t) {
                var e = this.data.filterTab;
                e[t].active ||
                  (e.forEach(function (e, r) {
                    e.active = r === t;
                  }),
                  this.setData({ filterTab: e }));
              },
              selectKey: function (t, e) {
                var r = this.data.filterTab;
                (r[e].subIndex = t), this.setData({ filterTab: r });
              },
              filterSelected: function (t) {
                var e =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  r = this.data.filterTab,
                  i = e.triggerConfirmFilter,
                  a = e.mainTab,
                  n = e.type;
                a && (r = a);
                var s = this.data,
                  o = s.departureFilterList,
                  l = s.returnFilterList,
                  h = r.findIndex(function (t) {
                    return t.active;
                  }),
                  d = 1 === h,
                  u = C.Z.deepCopy(d ? l : o),
                  f = d ? "returnFilterList" : "departureFilterList",
                  m = r[h].subIndex,
                  g = u[m],
                  D = g.list[t].selected;
                if (((u[m].list[t].selected = !D), D)) {
                  var S,
                    F = !1,
                    T = (0, c.Z)(g.list);
                  try {
                    for (T.s(); !(S = T.n()).done; ) {
                      var v = S.value;
                      if (v.selected) {
                        F = !0;
                        break;
                      }
                    }
                  } catch (t) {
                    T.e(t);
                  } finally {
                    T.f();
                  }
                  g.active = F;
                } else g.active = !0;
                this.setData((0, p.Z)({}, "".concat(f), u)),
                  i && this.confirmFilter(!0, n);
              },
              cancelFilter: function () {
                this.setData({
                  departureFilterList: this.departureFilterList_backup,
                  returnFilterList: this.returnFilterList_backup,
                });
              },
              confirmFilter: function () {
                var t,
                  e =
                    arguments.length > 0 &&
                    void 0 !== arguments[0] &&
                    arguments[0],
                  r = arguments.length > 1 ? arguments[1] : void 0;
                this.filterFlightsList(r),
                  e ||
                    null === (t = this.closeCommonDrawer) ||
                    void 0 === t ||
                    t.call(this),
                  this.setData({ isFilter: this.checkFilterStatus() });
              },
              checkFilterStatus: function () {
                var t,
                  e = this.data,
                  r = e.departureFilterList,
                  i = e.returnFilterList,
                  a = !1,
                  n = (0, c.Z)(r);
                try {
                  for (n.s(); !(t = n.n()).done; ) {
                    var s,
                      o = t.value,
                      l = (0, c.Z)(o.list);
                    try {
                      for (l.s(); !(s = l.n()).done; ) {
                        if (s.value.selected) {
                          a = !0;
                          break;
                        }
                      }
                    } catch (t) {
                      l.e(t);
                    } finally {
                      l.f();
                    }
                  }
                } catch (t) {
                  n.e(t);
                } finally {
                  n.f();
                }
                if (a) return a;
                var h,
                  d = (0, c.Z)(i);
                try {
                  for (d.s(); !(h = d.n()).done; ) {
                    var u,
                      p = h.value,
                      f = (0, c.Z)(p.list);
                    try {
                      for (f.s(); !(u = f.n()).done; ) {
                        if (u.value.selected) {
                          a = !0;
                          break;
                        }
                      }
                    } catch (t) {
                      f.e(t);
                    } finally {
                      f.f();
                    }
                  }
                } catch (t) {
                  d.e(t);
                } finally {
                  d.f();
                }
                return a;
              },
              filterFlightsList: function () {
                var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : "depart",
                  e = this.data,
                  r = e.departureSortType,
                  i = e.returnSortType,
                  a = e.departureFilterList,
                  n = e.returnFilterList,
                  s = "return" === t,
                  o = this._backups[t].singles,
                  l = s ? n : a,
                  c = b.Z.filterNewList(o, [], l),
                  h = c.straight;
                s
                  ? "time" === i
                    ? this.sortByTime(h, t)
                    : "price" === i && this.sortByPrice(h, t)
                  : "time" === r
                  ? this.sortByTime(h, t)
                  : "price" === r && this.sortByPrice(h, t);
              },
              handleSortAction: function (t) {
                var e = t.type,
                  r = t.sort,
                  i = this.data,
                  a = i.departureSortType,
                  n = i.departurePriceSort,
                  s = i.departureTimeSort,
                  o = i.returnSortType,
                  l = i.returnPriceSort,
                  c = i.returnTimeSort,
                  h = i.departureNoFlight,
                  d = i.returnNoFlight,
                  u = i.departureList,
                  f = i.returnList,
                  m = "return" === e;
                if (!(h || (d && m))) {
                  var g = m ? f : u,
                    D = m ? o : a,
                    S = m ? "returnSortType" : "departureSortType",
                    F = m ? l : n,
                    T = m ? "returnPriceSort" : "departurePriceSort",
                    v = m ? c : s,
                    y = m ? "returnTimeSort" : "departureTimeSort";
                  "price" === r
                    ? ("price" === D
                        ? this.setData(
                            (0, p.Z)(
                              {},
                              "".concat(T),
                              "ascend" === F ? "descend" : "ascend"
                            )
                          )
                        : this.setData((0, p.Z)({}, "".concat(S), "price")),
                      this.sortByPrice(g, e))
                    : "time" === r &&
                      ("time" === D
                        ? this.setData(
                            (0, p.Z)(
                              {},
                              "".concat(y),
                              "ascend" === v ? "descend" : "ascend"
                            )
                          )
                        : this.setData((0, p.Z)({}, "".concat(S), "time")),
                      this.sortByTime(g, e));
                }
              },
              sortByTime: function () {
                var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : [],
                  e =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : "depart",
                  r = this.data,
                  i = r.departureTimeSort,
                  a = r.returnTimeSort,
                  n = "return" === e ? a : i,
                  s = C._.sortBy(t, this.sortByTimeKey(n, "dptTime"));
                this.renderList({ singles: s, type: e });
              },
              sortByPrice: function () {
                var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : [],
                  e =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : "depart",
                  r = this.data,
                  i = r.departurePriceSort,
                  a = r.returnPriceSort,
                  n = "return" === e ? a : i,
                  s = C._.sortBy(t, this.sortByPriceKey(n, "apr"));
                if (
                  (this.renderList({ singles: s, type: e }),
                  "depart" === e && s.length)
                ) {
                  var o = s[0],
                    l = o.apr,
                    c = o.dptTime,
                    h = o.dptCode,
                    d = o.arrCode;
                  this.setData({
                    surpriseParams: {
                      version: 3,
                      source: "flightmullist",
                      minPrice: l,
                      depDate: M()(Y.Z.formatDateWithSlash(c)).format(E),
                      depCityCode: h,
                      arrCityCode: d,
                    },
                  });
                }
              },
              sortByTimeKey: function (t) {
                var e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : "departTime";
                return function (r) {
                  var i = new Date(Y.Z.formatDateWithSlash(r[e])).getTime();
                  return "ascend" === t ? i : -i;
                };
              },
              sortByPriceKey: function (t) {
                var e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : "adultPrice";
                return function (r) {
                  return "ascend" === t ? r[e] : -r[e];
                };
              },
              renderList: function (t) {
                var e = t.singles,
                  r = void 0 === e ? [] : e,
                  i = t.type,
                  a = void 0 === i ? "depart" : i,
                  n = r.findIndex(function (t) {
                    return t.selected;
                  }),
                  s = "return" === a;
                n > 0 && (r[n].selected = !1),
                  r[0] &&
                    ((r[0].selected = !0),
                    s
                      ? this.setReturnFlight(r[0])
                      : this.setDepartureFlight(r[0])),
                  r[0] || this.setNoFlight(a);
                var o = s ? "returnList" : "departureList";
                this.setData((0, p.Z)({}, "".concat(o), r)),
                  this.hideSkeleton(a);
              },
              handleFlightClick: function (t) {
                var e = t.item,
                  r = t.type,
                  i = t.index,
                  a = this.data,
                  n = a.departureList,
                  s = a.returnList,
                  o = "return" === r,
                  l = o ? s : n;
                l.findIndex(function (t) {
                  return t.selected;
                }) !== i &&
                  (l.forEach(function (t) {
                    return (t.selected = !1);
                  }),
                  (e.selected = !0),
                  o ? this.setReturnFlight(e) : this.setDepartureFlight(e));
              },
              toNextStep: function () {
                var t = this.data,
                  e = t.goFlightNumber,
                  r = t.returnFlightNumber;
                if (!e || !r) return (0, P.showToast)("请先选择航班");
                this.toBookX();
              },
              toBookX: function () {
                var t = this.data,
                  e = t.returnList,
                  r = t.departureList,
                  i = this._pass_query,
                  a = i.hasChild,
                  n = i.hasBaby,
                  s = i.segments,
                  o = r.filter(function (t) {
                    return t.selected;
                  })[0],
                  l = e.filter(function (t) {
                    return t.selected;
                  })[0],
                  c = [{}, {}];
                (c[0].flights = o.sequences.map(function (t) {
                  return {
                    dptTime: t.dptTime,
                    arrTime: t.arrTime,
                    airFullName: t.airFullName,
                    flightNo: t.flightNo,
                    dptAName: t.dpt,
                    arrAName: t.arr,
                    stop: t.stop,
                  };
                })),
                  (c[1].flights = l.sequences.map(function (t) {
                    return {
                      dptTime: t.dptTime,
                      arrTime: t.arrTime,
                      airFullName: t.airFullName,
                      flightNo: t.flightNo,
                      dptAName: t.dpt,
                      arrAName: t.arr,
                      stop: t.stop,
                    };
                  }));
                var h = s;
                (h[0].flightNo = c[0].flights[0].flightNo),
                  (h[1].flightNo = c[1].flights[0].flightNo),
                  this.navigateTo({
                    url: "../bookx/bookx?token=".concat(
                      encodeURIComponent(l.token),
                      "&tripType=3&navTitle=选择舱位"
                    ),
                    data: {
                      segments: c,
                      query: { segments: h, hasChild: a, hasBaby: n },
                    },
                  });
              },
              setDepartureFlight: function (t) {
                var e = t.dptTime,
                  r = t.arrTime,
                  i = t.sequences,
                  a = t.apr,
                  n = i[0].flightNo,
                  s = M()(Y.Z.formatDateWithSlash(e)),
                  o = M()(Y.Z.formatDateWithSlash(r));
                this.setData({
                  goFlightTime: ""
                    .concat(s.format("HH:mm"), "-")
                    .concat(o.format("HH:mm")),
                  goFlightNumber: n,
                  goPrice: a,
                  departureSelected: {
                    flightAirName: i[0].airName,
                    flightTime: ""
                      .concat(s.format("HH:mm"), "-")
                      .concat(o.format("HH:mm")),
                    pirce: a,
                  },
                }),
                  this.getReturnFlightList();
              },
              setReturnFlight: function (t) {
                var e = t.dptTime,
                  r = t.arrTime,
                  i = t.sequences,
                  a = t.apr,
                  n = t.couponTag,
                  s = this.data.departureList,
                  o = i[0].flightNo,
                  l = M()(Y.Z.formatDateWithSlash(e)),
                  c = M()(Y.Z.formatDateWithSlash(r)),
                  d = s.filter(function (t) {
                    return t.selected;
                  }),
                  u = [].concat((0, h.Z)(d), [t]);
                this.setData({
                  returnFlightTime: ""
                    .concat(l.format("HH:mm"), "-")
                    .concat(c.format("HH:mm")),
                  returnFlightNumber: o,
                  totalPrice: a,
                  returnSelected: {
                    flightAirName: i[0].airName,
                    flightTime: ""
                      .concat(l.format("HH:mm"), "-")
                      .concat(c.format("HH:mm")),
                    pirce: a,
                  },
                  selectedSegments: this.formatSegmentData(u),
                  couponTag: n,
                });
              },
              onDepartureScroll: function (t) {
                var e = this,
                  r = (t.detail || {}).scrollTop,
                  i = void 0 === r ? 0 : r,
                  a = this.data.departureSelectFlight;
                i >= 100 && !a
                  ? this.setData({ departureSelectFlight: !0 })
                  : i < 100 && a && this.setData({ departureSelectFlight: !1 }),
                  this._tabHidden ||
                    (this.setData({ isFilterTabActive: !1 }),
                    (this._tabHidden = !0)),
                  this._timer && clearTimeout(this._timer),
                  (this._timer = setTimeout(function () {
                    e.slideToLeft();
                  }, 1e3));
              },
              onReturnScroll: function (t) {
                var e = this,
                  r = (t.detail || {}).scrollTop,
                  i = void 0 === r ? 0 : r,
                  a = this.data.returnSelectFlight;
                i >= 100 && !a
                  ? this.setData({ returnSelectFlight: !0 })
                  : i < 100 && a && this.setData({ returnSelectFlight: !1 }),
                  this._tabHidden ||
                    (this.setData({ isFilterTabActive: !1 }),
                    (this._tabHidden = !0)),
                  this._timer && clearTimeout(this._timer),
                  (this._timer = setTimeout(function () {
                    e.slideToLeft();
                  }, 1e3));
              },
              slideToLeft: function () {
                this.setData({ isFilterTabActive: !0 }), (this._tabHidden = !1);
              },
              showSkeleton: function () {
                var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "depart";
                "return" === t
                  ? this.setData({
                      returnSkeleton: !0,
                      returnListView: "r_top_view",
                      returnNoFlight: !1,
                      totalPrice: 0,
                    })
                  : this.setData({
                      departureSkeleton: !0,
                      returnSkeleton: !0,
                      departureListView: "d_top_view",
                      returnListView: "r_top_view",
                      departureNoFlight: !1,
                      totalPrice: 0,
                    });
              },
              hideSkeleton: function (t) {
                "depart" === t
                  ? this.setData({ departureSkeleton: !1 })
                  : "return" === t
                  ? this.setData({ returnSkeleton: !1 })
                  : this.setData({ departureSkeleton: !1, returnSkeleton: !1 });
              },
              toCalendar: function () {
                var t = this,
                  e = this.data.segments,
                  r = e[0].dptDate,
                  i = e[1].dptDate,
                  a = M()().add(A.g2 - 1, "day");
                y.Z.calendar(
                  {
                    type: "checkInOut",
                    checkInDate: r,
                    checkOutDate: i,
                    beginDate: U,
                    endDate: a.format(E),
                    checkInDesc: "第1程",
                    checkOutDesc: "第2程",
                    checkOutPlaceHolderDesc: "第2程",
                    title: "选择日期",
                    bu: "flight",
                    flightType: A.C4.multi,
                    showDayDiff: !1,
                    sameDateAvailable: !0,
                    selectedText: {
                      sameText: "1/2程",
                      dptText: "第一程",
                      rtnText: "第二程",
                    },
                  },
                  function (r) {
                    var i = r.checkInDate,
                      a = r.checkOutDate,
                      n = M()(i),
                      s = M()(a);
                    (e[0].dptDate = i),
                      (e[0].dateStr = n.format("MM-DD")),
                      (e[0].weekDay = I.Z.getWeekDayDesc(n)),
                      (e[1].dptDate = a),
                      (e[1].dateStr = s.format("MM-DD")),
                      (e[1].weekDay = I.Z.getWeekDayDesc(s)),
                      t.setData({ segments: e, firstDate: i, secondDate: a }),
                      t.getFlightList();
                  }
                );
              },
              onAnnouncementPopupClose: function () {
                var t = this.data.entrancePopup,
                  e = (0, f.Z)((0, f.Z)({}, t), {}, { sw: 0 });
                this.setData({
                  entrancePopup: e,
                  entrancePopupHidden: !0,
                  showTopAnnouncement: !1,
                });
              },
              toggleTopAnnouncement: function () {
                var t = this.data.showTopAnnouncement;
                this.setData({ showTopAnnouncement: !t });
              },
              noop: function () {},
              onUnload: function () {
                var t = this.data,
                  e = t.departDate,
                  r = t.returnDate;
                (N.IK.selectDate = e), (N.IK.returnDate = r);
              },
              toggleFlightDetail: function () {
                var t,
                  e = this.data,
                  r = e.selectedSegments;
                e.flightDrawShow
                  ? null === (t = this.closeCommonDrawer) ||
                    void 0 === t ||
                    t.call(this)
                  : ((0, V.Q)({
                      tripType: A.zM.multi,
                      segments: r,
                      fromPage: A.NU.roundList,
                      onDetailClose: this.closeFlightDetail.bind(this),
                    }),
                    this.setData({ flightDrawShow: !0 }));
              },
              closeFlightDetail: function () {
                this.setData({ flightDrawShow: !1 });
              },
              handleDateChangeAction: function (t, e) {
                var r = this.data.segments,
                  i = "depart" === e ? "firstDate" : "secondDate";
                (("depart" === e ? r[0] : r[1]).dptDate =
                  M()(t).format("YYYY-MM-DD")),
                  this.setData(
                    (0, p.Z)(
                      { segments: (0, h.Z)(r) },
                      i,
                      M()(t).format("YYYY-MM-DD")
                    )
                  ),
                  this.getFlightList();
              },
              handleDateChange: function (t, e) {
                var r = this.data,
                  i = r.firstDate,
                  a = r.secondDate,
                  n = "depart" === e ? t : i,
                  s = "return" === e ? t : a;
                I.Z.isSameDay(n, s) || I.Z.isAfter(s, n)
                  ? this.handleDateChangeAction(t, e)
                  : this.toCalendar(e);
              },
            },
            $ =
              (0, R.h)(!1, { usePageWrapper: !0 })(
                (i =
                  v()(Q)(
                    (i = (function (t) {
                      (0, o.Z)(r, t);
                      var e = (0, l.Z)(r);
                      function r() {
                        return (0, n.Z)(this, r), e.apply(this, arguments);
                      }
                      return (
                        (0, s.Z)(r, [
                          {
                            key: "render",
                            value: function () {
                              var t = this,
                                e = this.data,
                                r = e.tipAndFloat,
                                i = e.segments,
                                a = e.isTieyou,
                                n = e.departureSortType,
                                s = e.departurePriceSort,
                                o = e.departureTimeSort,
                                l = e.returnSortType,
                                c = e.returnPriceSort,
                                h = e.returnTimeSort,
                                d = e.departureSkeleton,
                                u = e.departureSelectFlight,
                                p = e.departureList,
                                f = e.returnSkeleton,
                                m = e.returnSelectFlight,
                                g = e.returnList,
                                S = e.isFilter,
                                F = e.isIPhoneX,
                                T = e.totalPrice,
                                v = e.couponTag,
                                y = e.isFilterTabActive,
                                b = e.departureFilterList,
                                w = e.returnFilterList,
                                C = e.entrancePopup,
                                N = e.showTopAnnouncement,
                                P = e.isShowNewCoupon,
                                H = e.surpriseParams,
                                M = e.couponAmount,
                                I = e.expiredTime,
                                R = e.scrollListHeight,
                                q = e.departureSelected,
                                V = e.returnSelected,
                                X = e.flightDrawShow,
                                U = e.entrancePopupHidden,
                                E = e.isLogin,
                                J = e.entranceDrawerTips,
                                z = e.firstDate,
                                G = e.secondDate,
                                Q = { couponAmount: M, expiredTime: I },
                                $ = !p.length && !d,
                                tt = !d && p.length && !f && g.length,
                                et = "",
                                rt = "";
                              i &&
                                i.length > 1 &&
                                ((et = ""
                                  .concat(i[0].dptName, "-")
                                  .concat(i[0].arrName)),
                                (rt = ""
                                  .concat(i[1].dptName, "-")
                                  .concat(i[1].arrName)));
                              var it =
                                  1 === (null == C ? void 0 : C.sw) && !U && !P,
                                at = Y.Z.getDateList(z),
                                nt = Y.Z.getDateList(G, z);
                              return (0, j.BX)(D.View, {
                                className: a ? "ty" : "zx",
                                children: [
                                  (0, j.BX)(D.View, {
                                    className:
                                      "flt-multi-trip flex flex-column",
                                    children: [
                                      r &&
                                        r.topText &&
                                        (0, j.tZ)(W.Z, {
                                          data: r,
                                          id: "AcGF",
                                          onClick: this.toggleTopAnnouncement,
                                        }),
                                      (0, j.BX)(D.View, {
                                        className: "trip-box flex flex-1",
                                        children: [
                                          (0, j.tZ)(D.View, {
                                            className: "first-trip trip flex-1",
                                            id: "roundtripBd",
                                            children: (0, j.tZ)(K.Z, {
                                              dateList: at,
                                              scrollListHeight: R,
                                              type: "depart",
                                              title: "第1程",
                                              date: z,
                                              cityData: et,
                                              list: p,
                                              skeletonShow: d,
                                              handleFlightClick:
                                                this.handleFlightClick,
                                              toCalendar: function () {
                                                return t.toCalendar("depart");
                                              },
                                              orderType: n,
                                              priceSort: s,
                                              timeSort: o,
                                              onSortAction:
                                                this.handleSortAction,
                                              isClear: $,
                                              onListScroll:
                                                this.onDepartureScroll,
                                              selectedData: q,
                                              selectedShow: u,
                                              filterOpts: b,
                                              filterSelected:
                                                this.filterSelected,
                                              handleResetAirpot: function () {
                                                return t.handleResetAirpot(
                                                  "depart"
                                                );
                                              },
                                              onDateChange:
                                                this.handleDateChange,
                                            }),
                                          }),
                                          (0, j.tZ)(D.View, {
                                            className:
                                              "second-trip trip flex-1",
                                            children: (0, j.tZ)(K.Z, {
                                              dateList: nt,
                                              scrollListHeight: R,
                                              type: "return",
                                              title: "第2程",
                                              date: G,
                                              cityData: rt,
                                              list: g,
                                              skeletonShow: f,
                                              handleFlightClick:
                                                this.handleFlightClick,
                                              toCalendar: function () {
                                                return t.toCalendar("return");
                                              },
                                              orderType: l,
                                              priceSort: c,
                                              timeSort: h,
                                              onSortAction:
                                                this.handleSortAction,
                                              isClear: $,
                                              onListScroll: this.onReturnScroll,
                                              selectedData: V,
                                              selectedShow: m,
                                              filterOpts: w,
                                              filterSelected:
                                                this.filterSelected,
                                              handleResetAirpot: function () {
                                                return t.handleResetAirpot(
                                                  "return"
                                                );
                                              },
                                              onDateChange:
                                                this.handleDateChange,
                                            }),
                                          }),
                                          $ &&
                                            (0, j.BX)(D.View, {
                                              className: "both-list-none",
                                              children: [
                                                (0, j.tZ)(D.Icon, {
                                                  className: "icon-none",
                                                }),
                                                (0, j.tZ)(D.View, {
                                                  className: "tit",
                                                  children: "暂无内容",
                                                }),
                                                (0, j.tZ)(D.View, {
                                                  className: "txt",
                                                  children:
                                                    this.checkFilterStatus()
                                                      ? "请更改筛选条件"
                                                      : "很抱歉！当前搜索暂无结果",
                                                }),
                                              ],
                                            }),
                                        ],
                                      }),
                                      tt &&
                                        (0, j.tZ)(O.Z, {
                                          tripType: A.zM.multi,
                                          price: T || 0,
                                          coupon: v,
                                          isDetailShow: X,
                                          onToggleDetail:
                                            this.toggleFlightDetail,
                                          onNextStep: this.toNextStep,
                                        }),
                                    ],
                                  }),
                                  H.source &&
                                    (0, j.tZ)(L.Z, {
                                      className: "allowance-container",
                                      params: H,
                                      getCouponInfomation:
                                        this.getCouponInfomation,
                                      outerShow: P,
                                      handleCouponClose:
                                        this.handleNewCouponClose,
                                      handleReceive: this.handleCouponReceive,
                                    }),
                                  !(f || ((!p.length || !g.length) && !S)) &&
                                    (0, j.BX)(D.Button, {
                                      className: "btn-screen "
                                        .concat(F ? "iphone-x" : "", " ")
                                        .concat(y ? "" : "hidden"),
                                      id: "AcGG",
                                      onClick: this.openFilterList,
                                      children: [
                                        (0, j.tZ)(D.Text, {
                                          className:
                                            "ifont-fltscreen iconfont " +
                                            (S ? "color-primary" : ""),
                                        }),
                                        "筛选",
                                      ],
                                    }),
                                  (0, j.tZ)(x.Z, {
                                    isShow: it || N,
                                    entrancePopup: C,
                                    entranceDrawerTips: J,
                                    onClose: this.onAnnouncementPopupClose,
                                  }),
                                  k.default.isWechat &&
                                    M &&
                                    !P &&
                                    (0, j.tZ)(_.Z, {
                                      params: Q,
                                      couponFixedShow:
                                        this.couponFixedShow.bind(this),
                                    }),
                                  (0, j.tZ)(D.View, {
                                    children:
                                      E &&
                                      (0, j.tZ)(Z.Z, {
                                        ubtTrace: this.ubtTrace,
                                        pageId: this.pageId,
                                      }),
                                  }),
                                  (0, j.tZ)(B.Z, {
                                    ref: function (e) {
                                      t.onDrawerAttach(e);
                                    },
                                  }),
                                ],
                              });
                            },
                          },
                        ]),
                        r
                      );
                    })(g.default.Component))
                  ) || i)
              ) || i;
          ($.enableShareAppMessage = !0),
            Page(
              (0, a.createPageConfig)(
                $,
                "pages/flight/multiFlights/multiFlights",
                { root: { cn: [] } },
                {
                  navigationStyle: "custom",
                  backgroundColor: "#fff",
                  disableScroll: !0,
                } || {}
              )
            );
        },
      },
      function (t) {
        t.O(
          0,
          [
            56620, 14906, 49608, 16048, 99010, 65982, 94885, 61857, 46263,
            80267, 73783, 42475, 46891, 19559, 11216, 68592,
          ],
          function () {
            return (function (e) {
              return t((t.s = e));
            })(31076);
          }
        ),
          t.O();
      },
    ]);
})();
