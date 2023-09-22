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
      [7833],
      {
        58499: function (t, e, r) {
          var i,
            a = r(32180),
            n = r(57042),
            o = r(24460),
            s = r(21867),
            l = r(86066),
            c = r(90983),
            d = r(298),
            u = r(79301),
            h = r(95308),
            p = r(45023),
            f = r(22276),
            m = r(52500),
            g = r(71515),
            D = r(92954),
            v = r.n(D),
            y = r(48792),
            S = r.n(y),
            T = r(3205),
            F = r(18783),
            C = r(70352),
            Z = r(79846),
            b = r(2326),
            L = r(79910),
            N = r(79792),
            w = r(20592),
            k = r(9062),
            P = r(2576),
            A = r(49120),
            M = r(24383),
            x = r(8271),
            H = r.n(x),
            I = r(21999),
            B = r(4102),
            Y = r(13975),
            _ = r(41335),
            R = r(78996),
            q = r(53237),
            W = r(46260),
            K = r(92794),
            O = r(48813),
            U = m.default.memo(function (t) {
              var e = t.departCity,
                r = t.arriveCity;
              return (0,
              O.tZ)(g.View, { className: "title-view flex-center", children: e && r && (0, O.BX)(O.HY, { children: [(0, O.tZ)(g.Text, { className: "from city", children: e || "" }), (0, O.tZ)(g.Text, { className: "iconfont2 ifont2-wangfan_linea_12" }), (0, O.tZ)(g.Text, { className: "to city", children: r || "" })] }) });
            }),
            V = r(45245),
            j = r(81957),
            X = b.Z.getDateStr(),
            E = "YYYY-MM-DD",
            Q = H()().add(1, "day").format(E),
            z = "网络错误，请稍候再试",
            J = N.default.isTieyou,
            G = {
              pageId: J ? "10650028623" : "10650026934",
              data: {
                isTieyou: J,
                isIPhoneX: V.Z.isIPhoneX(),
                isLogin: F.ZP.isLogin,
                departureSkeleton: !0,
                returnSkeleton: !0,
                departureSelectFlight: !1,
                returnSelectFlight: !1,
                departureList: [],
                returnList: [],
                departureNoFlight: !1,
                returnNoFlight: !1,
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
                flightDrawShow: !1,
                selectedSegments: [],
                goselected: {},
                returnSelected: {},
                departureTransfers: [],
                returnTransfers: [],
                isHaveTransfer: !1,
                entrancePopup: null,
                tipAndFloat: null,
                announcementShow: !1,
                filterTab: [
                  { active: !0, subIndex: 0, type: "depart" },
                  { active: !1, subIndex: 0, type: "return" },
                ],
                departureFilterList: [],
                returnFilterList: [],
                entrancePopupHidden: !1,
                entranceDrawerTips: [],
              },
              onLoad: function (t) {
                console.log(t),
                  (this.pageOptions = t),
                  b.Z.compareTodayToDate(t.departDate) && (t.departDate = Q),
                  b.Z.compareDateToDate(t.departDate, t.returnDate) &&
                    (t.returnDate = H()(t.departDate).format(E));
                var e = t.departDate,
                  r = void 0 === e ? Q : e,
                  i = t.departCityCode,
                  a = void 0 === i ? "SHA" : i,
                  n = t.arriveCityCode,
                  o = void 0 === n ? "BJS" : n,
                  s = t.departCity,
                  l = void 0 === s ? "上海" : s,
                  c = t.arriveCity,
                  d = void 0 === c ? "北京" : c,
                  u = t.returnDate,
                  h = void 0 === u ? "" : u,
                  p = t.data || {},
                  f = p.hasChild,
                  m = void 0 !== f && f,
                  g = p.hasBaby,
                  D = void 0 !== g && g,
                  v = p.dAirportName,
                  y = void 0 === v ? "" : v,
                  S = p.aAirportName,
                  T = void 0 === S ? "" : S,
                  C = H()(r),
                  Z = H()(h),
                  L = b.Z.initNewFilter(k.UQ),
                  N = b.Z.initNewFilter(k.UQ);
                this.setData({
                  roundTrip: !0,
                  departDate: r,
                  returnDate: h,
                  departDateCN: ""
                    .concat(C.format("M月DD日"), " ")
                    .concat(B.Z.getWeekDayDesc(C)),
                  returnDateCN: ""
                    .concat(Z.format("M月DD日"), " ")
                    .concat(B.Z.getWeekDayDesc(Z)),
                  departCity: decodeURIComponent(l),
                  departCityCode: a,
                  arriveCity: decodeURIComponent(d),
                  arriveCityCode: o,
                  dAirportName: y,
                  aAirportName: T,
                  hasChild: m,
                  hasBaby: D,
                  departureFilterList: L,
                  returnFilterList: N,
                  isLogin: F.ZP.isLogin,
                }),
                  (this._backups = {}),
                  this.getFlightList();
              },
              onReady: function () {
                var t = this.data,
                  e = t.departCity,
                  r = t.arriveCity;
                L.Z.setTitle(e && r ? "".concat(e, "⇌").concat(r) : "航班列表");
              },
              onShow: function () {
                w.IK.forceListRefresh &&
                  ((w.IK.cacheUsage = 1),
                  (w.IK.forceListRefresh = !1),
                  this.getFlightList());
              },
              onHide: function () {
                var t;
                this.closeFlightDetail(),
                  null === (t = this.closeCommonDrawer) ||
                    void 0 === t ||
                    t.call(this);
              },
              onShareAppMessage: function () {
                return {
                  title: "".concat(
                    N.default.partnerCN,
                    "火车机票酒店汽车票门票"
                  ),
                  path: "/pages/flight/roundtrip/roundtrip?".concat(
                    L.Z.stringifyQuery(this.pageOptions)
                  ),
                };
              },
              getFlightList: function () {
                var t = this,
                  e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : "",
                  r =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : "depart";
                this.showSkeleton(r);
                var i = this.data,
                  a = i.departCityCode,
                  n = i.arriveCityCode,
                  o = i.departDate,
                  s = i.returnDate,
                  l = i.goFlightNumber,
                  c = i.hasChild,
                  d = i.hasBaby,
                  u = i.departureTransfers,
                  h = void 0 === u ? [] : u,
                  m = i.departureFilterList,
                  g = i.returnFilterList,
                  D = "return" === r,
                  v = (0, f.Z)(h).filter(function (t) {
                    return t.selected;
                  }),
                  y = D ? o : e || o,
                  S = (D && e) || s,
                  T = null;
                this.updateDateInfo(),
                  D &&
                    v.length &&
                    (T = v[0].sequences.map(function (t) {
                      return {
                        arrCode: t.arrivalCode,
                        dptCode: t.departureCode,
                        dptDate: t.dptTime,
                        flightNo: t.flightNo,
                      };
                    }));
                var F = {
                  data: {
                    version: 12,
                    source: 0,
                    cacheUsage: w.IK.cacheUsage || 0,
                    hasChild: c,
                    hasBaby: d,
                    segments: [
                      { dptDate: y, dptCode: a, arrCode: n, transferInfo: T },
                      {
                        dptDate: S,
                        dptCode: n,
                        arrCode: a,
                        transferInfo: null,
                      },
                    ],
                  },
                };
                (this._pass_query = F.data),
                  D && (F.data.segments[0].flightNo = l),
                  this.flightListModelPromise(F)
                    .then(function (e) {
                      var i = e || {},
                        a = i.resultCode,
                        n = i.resultMessage,
                        o = i.data,
                        s = void 0 === o ? {} : o,
                        l = (s || {}).announcement || {},
                        c = l.entrancePopup,
                        d = l.tipAndFloat,
                        u = l.tips;
                      if (1 !== a) return (0, A.showModal)(n || z);
                      var h = t.handleFlightData((s && s.singles) || [], r),
                        v = t.handleFlightData((s && s.transfers) || [], r);
                      if (!h.length && !v.length) return t.setNoFlight(r);
                      var y = D ? L.Z.deepCopy(g) : L.Z.deepCopy(m),
                        S = b.Z.updateNewFilter(
                          [].concat((0, f.Z)(h), (0, f.Z)(v)),
                          { filterList: y }
                        ).filterList,
                        T = D ? "returnFilterList" : "departureFilterList";
                      (t._backups[r] = {
                        singles: L.Z.deepCopy(h),
                        transfers: v,
                      }),
                        t.setData(
                          (0, p.Z)(
                            {
                              flightView: 0,
                              tipAndFloat: d,
                              entrancePopup: c || {},
                              entranceDrawerTips: u,
                            },
                            "".concat(T),
                            S
                          )
                        ),
                        t.filterFlightsList(r);
                    })
                    .catch(function (e) {
                      (0, A.showModal)(JSON.stringify(e) || z), t.setNoFlight();
                    })
                    .finally(function () {
                      D &&
                        ((w.IK.cacheUsage = 0),
                        setTimeout(function () {
                          t.getDomProps("#roundtripBd", "#head-wrap");
                        }, 0));
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
              couponFixedShow: function () {
                this.setData({ isShowNewCoupon: !0 });
              },
              handleNewCouponClose: function () {
                this.setData({ isShowNewCoupon: !1 });
              },
              handleCouponReceive: function () {
                this.getFlightList();
              },
              getReturnFlightList: function (t) {
                this.getFlightList(t, "return");
              },
              flightListModelPromise: function (t) {
                var e = this;
                return (0, h.Z)(
                  (0, u.Z)().mark(function r() {
                    return (0, u.Z)().wrap(
                      function (r) {
                        for (;;)
                          switch ((r.prev = r.next)) {
                            case 0:
                              return (r.prev = 0), (r.next = 3), (0, F.M9)();
                            case 3:
                              return r.abrupt(
                                "return",
                                (0, Y.IW)(t, {
                                  loginCB: function () {
                                    e.setData({ isLogin: !0 }),
                                      e.getFlightList();
                                  },
                                  cacheControl: { useCache: !0, dedup: !0 },
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
              formatSegmentData: function (t, e) {
                return t.map(function (t) {
                  var r = H()(t.dptTime).format("YYYY-MM-DD");
                  if (e)
                    return {
                      dtls: t.transfer ? t.dtls : [],
                      dptName: t.dptName,
                      arrName: t.arrName,
                      flights: t.sequences.map(function (e) {
                        var i = e.dptTime,
                          a = e.arrTime,
                          n = e.dtls,
                          o = e.dpt,
                          s = e.arr,
                          l = H()(i).format("YYYY-MM-DD"),
                          c = H()(a).format("YYYY-MM-DD"),
                          u = e.cftn,
                          h = e.facDesc,
                          p = e.cfts;
                        return (0,
                        d.Z)((0, d.Z)((0, d.Z)({}, e), t), {}, { dptTimeStr: H()(i).format("HH:mm"), dptMonthDay: H()(i).format("M月D日"), dptWeekDay: L.Z.getWeekInfo(i), arrTimeStr: H()(a).format("HH:mm"), arrMonthDay: H()(a).format("M月D日"), dptDayDiff: r !== l ? H()(i).format("MM-DD") : "", arrDayDiff: r !== c ? H()(a).format("MM-DD") : "", dtlsStr: Array.isArray(n) ? n.join(" ") : n, dptAName: o, arrAName: s, planeType: "".concat(u).concat(p ? "(".concat(p, ")") : ""), mealType: h, dptTrm: "", arrTrm: "" });
                      }),
                    };
                  var i = t.dptTime,
                    a = t.arrTime,
                    n = t.dtls,
                    o = t.sequences,
                    s = t.dptAFullName,
                    l = t.arrAFullName,
                    c = t.costTime,
                    u = H()(i).format("YYYY-MM-DD"),
                    h = H()(a).format("YYYY-MM-DD"),
                    p = (o && o.length && o[0]) || [],
                    f = p.cftn,
                    m = p.facDesc,
                    g = p.cfts;
                  return {
                    flights: [
                      (0, d.Z)(
                        (0, d.Z)((0, d.Z)({}, t), p),
                        {},
                        {
                          dptTimeStr: H()(i).format("HH:mm"),
                          dptMonthDay: H()(i).format("M月D日"),
                          dptWeekDay: L.Z.getWeekInfo(i),
                          arrTimeStr: H()(a).format("HH:mm"),
                          arrMonthDay: H()(a).format("M月D日"),
                          dptDayDiff: r !== u ? H()(i).format("MM-DD") : "",
                          arrDayDiff: r !== h ? H()(a).format("MM-DD") : "",
                          dtlsStr: Array.isArray(n) ? n.join(" ") : n,
                          dptAName: s,
                          arrAName: l,
                          planeType: ""
                            .concat(f)
                            .concat(g ? "(".concat(g, ")") : ""),
                          mealType: m,
                          ct: c,
                        }
                      ),
                    ],
                  };
                });
              },
              handleFlightData: function (t) {
                var e =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : "depart",
                  r = this.data.goPrice;
                return t.map(function (t) {
                  var i = H()(V.Z.formatDateWithSlash(t.dptTime)),
                    a = H()(V.Z.formatDateWithSlash(t.arrTime)),
                    n =
                      (t.abbr && t.abbr.split("|") && t.abbr.split("|")) || [];
                  return (0,
                  d.Z)((0, d.Z)({}, t), {}, { dptTimeStr: i.format("HH:mm"), arrTimeStr: a.format("HH:mm"), dayDiff: b.Z.getDayDiff(i.format(E), a.format(E)), abbr: n[0] ? n[1] : "", transfer: t.sequences.length > 1, airCode: t.sequences[0].airCode, cfts: t.sequences[0].cfts, departTimeHourSection: Math.floor(new Date(V.Z.formatDateWithSlash(t.dptTime)).getHours() / 6), priceDifferences: "return" === e ? t.apr - r : 0, selected: !1 });
                });
              },
              setNoFlight: function () {
                var t,
                  e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : "depart",
                  r = "return" === e ? "returnNoFlight" : "departureNoFlight";
                this.hideSkeleton("depart" === e ? "" : e),
                  "depart" === e &&
                    this.setData({ departureList: [], departureTransfers: [] }),
                  this.setData(
                    ((t = {}),
                    (0, p.Z)(t, "".concat(r), !0),
                    (0, p.Z)(t, "returnList", []),
                    (0, p.Z)(t, "returnTransfers", []),
                    t)
                  );
              },
              openFilterList: function () {
                var t = this.data,
                  e = t.departureFilterList,
                  r = t.returnFilterList,
                  i = t.filterTab;
                (this.departureFilterList_backup = L.Z.deepCopy(e)),
                  (this.returnFilterList_backup = L.Z.deepCopy(r)),
                  (0, K.x)({
                    tripType: k.zM.round,
                    filterTab: i,
                    departureFilterList: e,
                    returnFilterList: r,
                    handleFilterTabClick: this.handleFilterTabClick,
                    cancelFilter: this.cancelFilter,
                    confirmFilter: this.confirmFilter,
                    selectKey: this.selectKey,
                    filterSelected: this.filterSelected,
                  });
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
                var o = this.data,
                  s = o.departureFilterList,
                  l = o.returnFilterList,
                  d = r.findIndex(function (t) {
                    return t.active;
                  }),
                  u = 1 === d,
                  h = L.Z.deepCopy(u ? l : s),
                  f = u ? "returnFilterList" : "departureFilterList",
                  m = r[d].subIndex,
                  g = h[m],
                  D = g.list[t].selected;
                if (((h[m].list[t].selected = !D), D)) {
                  var v,
                    y = !1,
                    S = (0, c.Z)(g.list);
                  try {
                    for (S.s(); !(v = S.n()).done; ) {
                      var T = v.value;
                      if (T.selected) {
                        y = !0;
                        break;
                      }
                    }
                  } catch (t) {
                    S.e(t);
                  } finally {
                    S.f();
                  }
                  g.active = y;
                } else g.active = !0;
                this.setData((0, p.Z)({}, "".concat(f), h)),
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
                    var o,
                      s = t.value,
                      l = (0, c.Z)(s.list);
                    try {
                      for (l.s(); !(o = l.n()).done; ) {
                        if (o.value.selected) {
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
                var d,
                  u = (0, c.Z)(i);
                try {
                  for (u.s(); !(d = u.n()).done; ) {
                    var h,
                      p = d.value,
                      f = (0, c.Z)(p.list);
                    try {
                      for (f.s(); !(h = f.n()).done; ) {
                        if (h.value.selected) {
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
                  u.e(t);
                } finally {
                  u.f();
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
                  o = "return" === t,
                  s = this._backups[t],
                  l = s.singles,
                  c = s.transfers,
                  d = o ? n : a,
                  u = b.Z.filterNewList(l, c, d),
                  h = u.straight,
                  p = u.transfer;
                o
                  ? "time" === i
                    ? this.sortByTime(h, t, p)
                    : "price" === i && this.sortByPrice(h, t, p)
                  : "time" === r
                  ? this.sortByTime(h, t, p)
                  : "price" === r && this.sortByPrice(h, t, p);
              },
              handleSortAction: function (t) {
                var e = t.type,
                  r = t.sort,
                  i = this.data,
                  a = i.departureSortType,
                  n = i.departurePriceSort,
                  o = i.departureTimeSort,
                  s = i.returnSortType,
                  l = i.returnPriceSort,
                  c = i.returnTimeSort,
                  d = i.departureNoFlight,
                  u = i.returnNoFlight,
                  h = i.departureList,
                  f = i.returnList,
                  m = i.returnTransfers,
                  g = i.departureTransfers,
                  D = "return" === e;
                if ((!d || g.length) && (!u || !D || m.length)) {
                  var v = D ? f : h,
                    y = D ? m : g,
                    S = D ? s : a,
                    T = D ? "returnSortType" : "departureSortType",
                    F = D ? l : n,
                    C = D ? "returnPriceSort" : "departurePriceSort",
                    Z = D ? c : o,
                    b = D ? "returnTimeSort" : "departureTimeSort";
                  "price" === r
                    ? ("price" === S
                        ? this.setData(
                            (0, p.Z)(
                              {},
                              "".concat(C),
                              "ascend" === F ? "descend" : "ascend"
                            )
                          )
                        : this.setData((0, p.Z)({}, "".concat(T), "price")),
                      this.sortByPrice(v, e, y))
                    : "time" === r &&
                      ("time" === S
                        ? this.setData(
                            (0, p.Z)(
                              {},
                              "".concat(b),
                              "ascend" === Z ? "descend" : "ascend"
                            )
                          )
                        : this.setData((0, p.Z)({}, "".concat(T), "time")),
                      this.sortByTime(v, e, y));
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
                  r =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : [],
                  i = this.data,
                  a = i.departureTimeSort,
                  n = i.returnTimeSort,
                  o = "return" === e ? n : a,
                  s = L._.sortBy(t, this.sortByTimeKey(o, "dptTime")),
                  l = L._.sortBy(r, this.sortByTimeKey(o, "dptTime"));
                this.renderList({ singles: s, transfers: l, type: e });
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
                  r =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : [],
                  i = this.data,
                  a = i.departurePriceSort,
                  n = i.returnPriceSort,
                  o = "return" === e ? n : a,
                  s = L._.sortBy(t, this.sortByPriceKey(o, "apr")),
                  l = L._.sortBy(r, this.sortByPriceKey(o, "apr"));
                if (
                  (this.renderList({ singles: s, transfers: l, type: e }),
                  "depart" === e && s.length)
                ) {
                  var c = s[0],
                    d = c.apr,
                    u = c.dptTime,
                    h = c.dptCode,
                    p = c.arrCode;
                  this.setData({
                    surpriseParams: {
                      version: 3,
                      source: "flightretlist",
                      minPrice: d,
                      depDate: H()(V.Z.formatDateWithSlash(u)).format(E),
                      depCityCode: h,
                      arrCityCode: p,
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
                  var i = new Date(V.Z.formatDateWithSlash(r[e])).getTime();
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
                  i = t.transfers,
                  a = void 0 === i ? [] : i,
                  n = t.type,
                  o = void 0 === n ? "depart" : n,
                  s = r.findIndex(function (t) {
                    return t.selected;
                  }),
                  l = a.findIndex(function (t) {
                    return t.selected;
                  }),
                  c = "return" === o,
                  d = c ? "returnList" : "departureList",
                  u = c ? "returnTransfers" : "departureTransfers",
                  h = "return" === o ? "returnNoFlight" : "departureNoFlight";
                s > -1 && (r[s].selected = !1),
                  l > -1 && (a[l].selected = !1),
                  r[0] &&
                    ((r[0].selected = !0),
                    c
                      ? this.setReturnFlight(r[0])
                      : this.setDepartureFlight(r[0])),
                  null != a && a.length && this.setData((0, p.Z)({}, u, a)),
                  a[0] &&
                    !r[0] &&
                    ((a[0].selected = !0),
                    c
                      ? this.setReturnFlight(a[0])
                      : this.setDepartureFlight(a[0])),
                  this.hideSkeleton(o),
                  r[0] || a[0]
                    ? (this.setData((0, p.Z)({}, h, !1)),
                      this.setData((0, p.Z)({}, "".concat(d), r)))
                    : this.setNoFlight(o);
              },
              handleFlightClick: function (t) {
                var e,
                  r = t.item,
                  i = t.type,
                  a = this.data,
                  n = a.departureList,
                  o = a.returnList,
                  s = a.departureTransfers,
                  l = a.returnTransfers,
                  c = "return" === i,
                  d = c ? o : n,
                  u = c ? l : s,
                  h = c ? "returnList" : "departureList",
                  m = c ? "returnTransfers" : "departureTransfers";
                d.forEach(function (t) {
                  return (t.selected = t.token === r.token);
                }),
                  u.forEach(function (t) {
                    return (t.selected = t.token === r.token);
                  }),
                  this.setData(
                    ((e = {}),
                    (0, p.Z)(e, h, (0, f.Z)(d)),
                    (0, p.Z)(e, m, (0, f.Z)(u)),
                    e)
                  ),
                  c ? this.setReturnFlight(r) : this.setDepartureFlight(r);
              },
              toNextStep: function () {
                var t = this.data,
                  e = t.goFlightNumber,
                  r = t.returnFlightNumber;
                if (!e || !r) return (0, A.showToast)("请先选择航班");
                this.toBookX();
              },
              formatSegmentsParams: function (t) {
                var e = (t || {}).sequences;
                return {
                  flights:
                    (null == e
                      ? void 0
                      : e.map(function (t) {
                          return {
                            dptTime: t.dptTime,
                            arrTime: t.arrTime,
                            airFullName: t.airFullName,
                            flightNo: t.flightNo,
                            dptAName: t.dpt,
                            arrAName: t.arr,
                            stop: t.stop,
                          };
                        })) || [],
                };
              },
              toBookX: function () {
                var t = this.data,
                  e = t.returnList,
                  r = t.returnTransfers,
                  i = t.departureList,
                  a = t.departureTransfers,
                  n = this._pass_query,
                  o = n.hasChild,
                  s = n.hasBaby,
                  l = n.segments,
                  c = [].concat((0, f.Z)(i), (0, f.Z)(a)).filter(function (t) {
                    return t.selected;
                  })[0],
                  d = [].concat((0, f.Z)(r), (0, f.Z)(e)).filter(function (t) {
                    return t.selected;
                  })[0],
                  u = [
                    this.formatSegmentsParams(c),
                    this.formatSegmentsParams(d),
                  ];
                console.log("--segmentsFlights--", u);
                var h = l;
                (h[0].flightNo = u[0].flights[0].flightNo),
                  (h[1].flightNo = u[1].flights[0].flightNo),
                  this.navigateTo({
                    url: "../bookx/bookx?token=".concat(
                      encodeURIComponent(d.token),
                      "&tripType=2"
                    ),
                    data: { query: { segments: h, hasChild: o, hasBaby: s } },
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
              setDepartureFlight: function (t) {
                var e = t.dptTime,
                  r = t.arrTime,
                  i = t.sequences,
                  a = t.apr,
                  n = i[0].flightNo,
                  o = t.transfer ? "".concat(i[0].airName, "等") : i[0].airName,
                  s = H()(V.Z.formatDateWithSlash(e)),
                  l = H()(V.Z.formatDateWithSlash(r));
                this.setData({
                  goFlightNumber: n,
                  goPrice: a,
                  goselected: {
                    flightAirName: o,
                    flightTime: ""
                      .concat(s.format("HH:mm"), "-")
                      .concat(l.format("HH:mm")),
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
                  o = this.data,
                  s = o.departureList,
                  l = o.departureTransfers,
                  c = i[0].flightNo,
                  d = t.transfer ? "".concat(i[0].airName, "等") : i[0].airName,
                  u = H()(V.Z.formatDateWithSlash(e)),
                  h = H()(V.Z.formatDateWithSlash(r)),
                  p = [].concat((0, f.Z)(s), (0, f.Z)(l)).filter(function (t) {
                    return t.selected;
                  }),
                  m = [].concat((0, f.Z)(p), [t]),
                  g = p.length && p[0].transfer,
                  D = t.transfer,
                  v = g || D;
                this.setData({
                  returnFlightNumber: c,
                  totalPrice: a,
                  couponTag: n,
                  isHaveTransfer: v,
                  selectedSegments: this.formatSegmentData(m, v),
                  returnSelected: {
                    flightAirName: d,
                    flightTime: ""
                      .concat(u.format("HH:mm"), "-")
                      .concat(h.format("HH:mm")),
                    pirce: a,
                  },
                });
              },
              handleResetAirpot: function (t) {
                var e = this.data,
                  r = e.departureFilterList,
                  i = e.returnFilterList,
                  a = "return" === t,
                  n = a ? i : r,
                  o = a ? "returnFilterList" : "departureFilterList";
                n.forEach(function (t) {
                  var e = t.prop;
                  ("dptACode" !== e && "arrACode" !== e) ||
                    ((t.active = !1),
                    t.list.forEach(function (t) {
                      t.selected = !1;
                    }));
                }),
                  this.setData((0, p.Z)({}, o, (0, f.Z)(n))),
                  this.confirmFilter(!0, t);
              },
              onListScroll: function (t) {
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
                      returnNoFlight: !1,
                      totalPrice: 0,
                    })
                  : this.setData({
                      departureSkeleton: !0,
                      returnSkeleton: !0,
                      departureNoFlight: !1,
                      totalPrice: 0,
                    });
              },
              getDomProps: function (t, e) {
                var r = this;
                v()
                  .createSelectorQuery()
                  .select(t)
                  .boundingClientRect()
                  .select(e)
                  .boundingClientRect()
                  .exec(function (t) {
                    var e, i;
                    2 === t.length &&
                      r.setData({
                        scrollListHeight:
                          (null === (e = t[0]) || void 0 === e
                            ? void 0
                            : e.height) -
                          (null === (i = t[1]) || void 0 === i
                            ? void 0
                            : i.height),
                      });
                  });
              },
              hideSkeleton: function (t) {
                "depart" === t
                  ? this.setData({ departureSkeleton: !1 })
                  : "return" === t
                  ? this.setData({ returnSkeleton: !1 })
                  : this.setData({ departureSkeleton: !1, returnSkeleton: !1 });
              },
              updateDateInfo: function () {
                var t = this.data,
                  e = t.departDate,
                  r = t.returnDate,
                  i = H()(e),
                  a = H()(r);
                this.setData({
                  departDateCN: ""
                    .concat(i.format("M月DD日"), " ")
                    .concat(B.Z.getWeekDayDesc(i)),
                  returnDateCN: ""
                    .concat(a.format("M月DD日"), " ")
                    .concat(B.Z.getWeekDayDesc(a)),
                });
              },
              openAnnouncement: function () {
                this.setData({ announcementShow: !0 });
              },
              handleAnnouncementClose: function () {
                this.setData({ announcementShow: !1 });
              },
              handleDateChangeAction: function (t, e) {
                var r = "depart" === e ? "departDate" : "returnDate";
                this.setData((0, p.Z)({}, r, H()(t).format("YYYY-MM-DD"))),
                  this.getFlightList();
              },
              toCalendar: function (t) {
                var e = this,
                  r = this.data,
                  i = r.departCityCode,
                  a = r.arriveCityCode,
                  n = r.departDate,
                  o = r.returnDate,
                  s = "return" === t,
                  l = H()().add(k.g2 - 1, "day");
                T.Z.calendar(
                  {
                    type: "checkInOut",
                    checkInDate: n,
                    checkOutDate: o,
                    beginDate: X,
                    endDate: l.format(E),
                    title: "选择日期",
                    bu: "flight",
                    haveRoundTotalPrice: !0,
                    flightType: k.C4.goback,
                    confirmBtn: !0,
                    sameDateAvailable: !0,
                    queryParams: {
                      data: {
                        departCityCode: s ? a : i,
                        arriveCityCode: s ? i : a,
                      },
                    },
                  },
                  function (t) {
                    var r = t.checkInDate,
                      i = t.checkOutDate;
                    e.setData({ departDate: r, returnDate: i }),
                      e.getFlightList();
                  }
                );
              },
              noop: function () {},
              onEntrancePopupClose: function () {
                var t = this.data.entrancePopup;
                this.setData({
                  entrancePopup: (0, d.Z)((0, d.Z)({}, t), {}, { sw: 0 }),
                  entrancePopupHidden: !0,
                  announcementShow: !1,
                });
              },
              onUnload: function () {
                var t = this.data,
                  e = t.departDate,
                  r = t.returnDate;
                (w.IK.selectDate = e), (w.IK.returnDate = r);
              },
              toggleFlightDetail: function () {
                var t,
                  e = this.data,
                  r = e.selectedSegments;
                e.flightDrawShow
                  ? null === (t = this.closeCommonDrawer) ||
                    void 0 === t ||
                    t.call(this)
                  : ((0, W.Q)({
                      tripType: k.zM.round,
                      segments: r,
                      fromPage: k.NU.roundList,
                      onDetailClose: this.closeFlightDetail.bind(this),
                    }),
                    this.setData({ flightDrawShow: !0 }));
              },
              closeFlightDetail: function () {
                this.setData({ flightDrawShow: !1 });
              },
              handleDateChange: function (t, e) {
                var r = this.data,
                  i = r.departDate,
                  a = r.returnDate,
                  n = "depart" === e ? t : i,
                  o = "return" === e ? t : a;
                B.Z.isSameDay(n, o) || B.Z.isAfter(o, n)
                  ? this.handleDateChangeAction(t, e)
                  : this.toCalendar(e);
              },
            },
            $ =
              (0, j.h)(!1, { usePageWrapper: !0 })(
                (i =
                  S()(G)(
                    (i = (function (t) {
                      (0, s.Z)(r, t);
                      var e = (0, l.Z)(r);
                      function r() {
                        return (0, n.Z)(this, r), e.apply(this, arguments);
                      }
                      return (
                        (0, o.Z)(r, [
                          {
                            key: "renderTitleView",
                            value: function () {
                              var t = this.pageOptions || {},
                                e = t.departCity,
                                r = t.arriveCity;
                              if (e && r)
                                return (0, O.tZ)(U, {
                                  departCity: e,
                                  arriveCity: r,
                                });
                            },
                          },
                          {
                            key: "render",
                            value: function () {
                              var t = this,
                                e = this.data,
                                r = e.isTieyou,
                                i = e.departureSortType,
                                a = e.departurePriceSort,
                                n = e.departureTimeSort,
                                o = e.returnSortType,
                                s = e.returnPriceSort,
                                l = e.returnTimeSort,
                                c = e.departureSkeleton,
                                d = e.departureSelectFlight,
                                u = e.departureList,
                                h = e.returnSkeleton,
                                p = e.returnSelectFlight,
                                f = e.returnList,
                                m = e.isFilter,
                                D = e.isIPhoneX,
                                v = e.totalPrice,
                                y = e.couponTag,
                                S = e.isFilterTabActive,
                                T = e.isShowNewCoupon,
                                F = e.surpriseParams,
                                b = e.couponAmount,
                                L = e.expiredTime,
                                w = e.scrollListHeight,
                                A = e.flightDrawShow,
                                x = e.goselected,
                                H = e.returnSelected,
                                B = e.departureTransfers,
                                Y = e.returnTransfers,
                                W = e.entrancePopup,
                                K = e.tipAndFloat,
                                U = e.announcementShow,
                                j = e.departureFilterList,
                                X = e.returnFilterList,
                                E = e.entrancePopupHidden,
                                Q = e.isLogin,
                                z = e.entranceDrawerTips,
                                J = e.departDate,
                                G = e.returnDate,
                                $ = { couponAmount: b, expiredTime: L },
                                tt = !u.length && !B.length && !c,
                                et =
                                  !c &&
                                  (u.length || B.length) &&
                                  !h &&
                                  (f.length || Y.length),
                                rt =
                                  1 === (null == W ? void 0 : W.sw) && !E && !T,
                                it = V.Z.getDateList(J),
                                at = V.Z.getDateList(G, J);
                              return (0, O.BX)(g.View, {
                                className:
                                  "flt-round-trip flex flex-column ".concat(
                                    r ? "ty" : "zx"
                                  ),
                                children: [
                                  K &&
                                    (0, O.tZ)(_.Z, {
                                      data: K,
                                      id: "AcGH",
                                      onClick: this.openAnnouncement,
                                    }),
                                  (0, O.BX)(g.View, {
                                    className: "round-trip-box flex flex-1",
                                    children: [
                                      (0, O.tZ)(g.View, {
                                        className: "depart trip flex-1",
                                        id: "roundtripBd",
                                        children: (0, O.tZ)(R.Z, {
                                          dateList: it,
                                          scrollListHeight: w,
                                          transferList: B,
                                          type: "depart",
                                          title: "去程",
                                          date: J,
                                          list: u,
                                          skeletonShow: c,
                                          handleFlightClick:
                                            this.handleFlightClick.bind(this),
                                          toCalendar:
                                            this.toCalendar.bind(this),
                                          orderType: i,
                                          priceSort: a,
                                          timeSort: n,
                                          onSortAction: this.handleSortAction,
                                          onListScroll: this.onListScroll,
                                          selectedData: x,
                                          selectedShow: d,
                                          isClear: tt,
                                          filterOpts: j,
                                          filterSelected: this.filterSelected,
                                          handleResetAirpot: function () {
                                            return t.handleResetAirpot(
                                              "depart"
                                            );
                                          },
                                          onDateChange: this.handleDateChange,
                                        }),
                                      }),
                                      (0, O.tZ)(g.View, {
                                        className: "arrive trip flex-1",
                                        children: (0, O.tZ)(R.Z, {
                                          dateList: at,
                                          scrollListHeight: w,
                                          type: "return",
                                          title: "返程",
                                          date: G,
                                          list: f,
                                          transferList: Y,
                                          skeletonShow: h,
                                          handleFlightClick:
                                            this.handleFlightClick,
                                          toCalendar: this.toCalendar,
                                          orderType: o,
                                          priceSort: s,
                                          timeSort: l,
                                          onSortAction: this.handleSortAction,
                                          onListScroll: this.onReturnScroll,
                                          selectedData: H,
                                          selectedShow: p,
                                          isClear: tt,
                                          filterOpts: X,
                                          filterSelected: this.filterSelected,
                                          handleResetAirpot: function () {
                                            return t.handleResetAirpot(
                                              "return"
                                            );
                                          },
                                          onDateChange: this.handleDateChange,
                                        }),
                                      }),
                                      tt &&
                                        (0, O.BX)(g.View, {
                                          className: "both-list-none",
                                          children: [
                                            (0, O.tZ)(g.Icon, {
                                              className: "icon-none",
                                            }),
                                            (0, O.tZ)(g.View, {
                                              className: "tit",
                                              children: "暂无内容",
                                            }),
                                            (0, O.tZ)(g.View, {
                                              className: "txt",
                                              children: this.checkFilterStatus()
                                                ? "请更改筛选条件"
                                                : "很抱歉！当前搜索暂无结果",
                                            }),
                                          ],
                                        }),
                                    ],
                                  }),
                                  !!et &&
                                    (0, O.tZ)(q.Z, {
                                      tripType: k.zM.round,
                                      price: v || 0,
                                      coupon: y,
                                      isDetailShow: A,
                                      onToggleDetail: this.toggleFlightDetail,
                                      onNextStep: this.toNextStep,
                                    }),
                                  (0, O.tZ)(g.View, {
                                    children:
                                      F.source &&
                                      (0, O.tZ)(C.Z, {
                                        className: "roundtrip-allowance-modal",
                                        params: F,
                                        getCouponInfomation:
                                          this.getCouponInfomation,
                                        outerShow: T,
                                        handleCouponClose:
                                          this.handleNewCouponClose,
                                        handleReceive: this.handleCouponReceive,
                                      }),
                                  }),
                                  !(
                                    h ||
                                    (((!u.length && !B.length) ||
                                      (!f.length && !Y.length)) &&
                                      !m)
                                  ) &&
                                    (0, O.BX)(g.Button, {
                                      className:
                                        "btn-screen " +
                                        (D ? "iphone-x" : "") +
                                        " " +
                                        (S ? "" : "hidden"),
                                      id: "AcGI",
                                      onClick: this.openFilterList,
                                      children: [
                                        (0, O.tZ)(g.Text, {
                                          className:
                                            "ifont-fltscreen iconfont " +
                                            (m ? "color-primary" : ""),
                                        }),
                                        "筛选",
                                      ],
                                    }),
                                  N.default.isWechat &&
                                    b &&
                                    !T &&
                                    (0, O.tZ)(P.Z, {
                                      params: $,
                                      couponFixedShow:
                                        this.couponFixedShow.bind(this),
                                    }),
                                  Q &&
                                    (0, O.tZ)(Z.Z, {
                                      ubtTrace: this.ubtTrace,
                                      pagId: this.pageId,
                                    }),
                                  (0, O.tZ)(M.Z, {
                                    isShow: rt || U,
                                    entrancePopup: W,
                                    entranceDrawerTips: z,
                                    onClose: this.onEntrancePopupClose,
                                  }),
                                  (0, O.tZ)(I.Z, {
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
                    })(m.default.Component))
                  ) || i)
              ) || i;
          ($.enableShareAppMessage = !0),
            Page(
              (0, a.createPageConfig)(
                $,
                "pages/flight/roundtrip/roundtrip",
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
            })(58499);
          }
        ),
          t.O();
      },
    ]);
})();
