!(function () {
  "use strict";
  require("../sub-vendors.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [4744],
      {
        79749: function (e, t, i) {
          var a,
            r = i(32180),
            n = i(57042),
            s = i(24460),
            l = i(21867),
            o = i(86066),
            c = i(45023),
            d = i(90983),
            h = i(22276),
            p = i(298),
            f = i(52500),
            m = i(71515),
            u = i(92954),
            g = i.n(u),
            y = i(81957),
            C = i(48792),
            v = i.n(C),
            N = i(34229),
            T = i(60370),
            w = i(79910),
            Z = i(2326),
            x = i(2809),
            D = i(79792),
            I = i(18783),
            V = i(3205),
            L = i(20592),
            B = i(9062),
            _ = i(55916),
            k = i(49120),
            S = i(62657),
            F = i(8271),
            P = i.n(F),
            b = i(32132),
            X = i(61695),
            q = i(48813),
            A = f.default.memo(function (e) {
              var t = e.data,
                i = e.onSwitchTransferCity,
                a = t.find(function (e) {
                  return e.selected;
                }).transferAction;
              return (0, q.BX)(m.View, {
                className: "multi-transfer-switch flex",
                children: [
                  (0, q.BX)(m.View, {
                    className: "desc flex-align-items-center",
                    children: ["飞机", a, "城市"],
                  }),
                  (0, q.tZ)(m.View, {
                    className:
                      "transfer-stations flex-align-items-center flex-1",
                    children:
                      null == t
                        ? void 0
                        : t.map(function (e, t) {
                            return (0, q.tZ)(
                              m.View,
                              {
                                id: "AaBV",
                                onClick: function () {
                                  null == i || i(e);
                                },
                                className: "station-item ".concat(
                                  e.selected ? "select" : ""
                                ),
                                children: e.transferCityName,
                              },
                              t
                            );
                          }),
                  }),
                ],
              });
            }),
            R = f.default.memo(function (e) {
              var t = e.data,
                i = e.departDate,
                a = e.onSwitchTransferCity,
                r =
                  null == t
                    ? void 0
                    : t.find(function (e) {
                        return e.selected;
                      });
              if (!r) return (0, q.tZ)(q.HY, {});
              var n = r.transferList,
                s = n.find(function (e) {
                  return 1 == e.segmentNo;
                }),
                l = n.find(function (e) {
                  return 2 == e.segmentNo;
                }),
                o = "".concat(s.type, "+").concat(l.type);
              return (0, q.BX)(q.HY, {
                children: [
                  (0, q.BX)(m.View, {
                    className: "no-direct",
                    children: [
                      (0, q.BX)(m.View, {
                        className: "no-direct-hd flex-center",
                        children: [
                          (0, q.tZ)(m.View, { className: "title-mark left" }),
                          (0, q.BX)(m.Text, {
                            className: "title",
                            children: [
                              "暂无直达航线，推荐",
                              (0, q.tZ)(m.Text, {
                                className: "color-primary",
                                children: o,
                              }),
                              "方案",
                            ],
                          }),
                          (0, q.tZ)(m.View, { className: "title-mark right" }),
                        ],
                      }),
                      (0, q.BX)(m.View, {
                        className: "trip-recommend flex-align-items-center",
                        children: [
                          (0, q.BX)(m.View, {
                            className: "trip-marker flex-align-items-center",
                            children: [
                              (0, q.tZ)(m.View, {
                                className: "trip-tag flex-center",
                                children: "1",
                              }),
                              (0, q.tZ)(m.View, {
                                className: "trip-tag-separator flex-1",
                              }),
                              (0, q.tZ)(m.View, {
                                className: "trip-tag flex-center",
                                children: "2",
                              }),
                            ],
                          }),
                          (0, q.tZ)(m.View, {
                            className: "trip-recommend-info flex-1 flex",
                            children: [s, l].map(function (e) {
                              return (0, q.BX)(
                                m.View,
                                {
                                  className: "trip flex",
                                  children: [
                                    (0, q.BX)(m.View, {
                                      className: "lbox flex-align-items-center",
                                      children: [
                                        (0, q.tZ)(m.View, {
                                          className: "trip-type",
                                          children: e.type,
                                        }),
                                        (0, q.tZ)(m.View, {
                                          className: "divider",
                                        }),
                                        (0, q.BX)(m.View, {
                                          className: "from-to",
                                          children: [
                                            e.departCityName,
                                            "-",
                                            e.arriveCityName,
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, q.BX)(m.View, {
                                      className:
                                        "rbox flex-align-items-center flex-1",
                                      id: "AaBW",
                                      onClick: function () {
                                        return (function (e) {
                                          "火车" == e.type.trim() &&
                                            g().navigateTo({
                                              url: "/pages/train/list/list?dstation="
                                                .concat(
                                                  e.departCityName,
                                                  "&astation="
                                                )
                                                .concat(
                                                  e.arriveCityName,
                                                  "&date="
                                                )
                                                .concat(
                                                  i,
                                                  "&isGaotieOnly=false"
                                                ),
                                            });
                                        })(e);
                                      },
                                      children: [
                                        (0, q.tZ)(m.Text, {
                                          className: "other-info",
                                          children: e.tipInfo,
                                        }),
                                        "火车" == e.type.trim() &&
                                          (0, q.tZ)(m.Text, {
                                            className: "iconfont2 ifont2-arr",
                                          }),
                                      ],
                                    }),
                                  ],
                                },
                                e
                              );
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (null == t ? void 0 : t.length) > 1 &&
                    (0, q.tZ)(A, { data: t, onSwitchTransferCity: a }),
                ],
              });
            }),
            M = i(71251),
            G = f.default.memo(function (e) {
              var t = e.preferentialInfo,
                i = t || {},
                a = i.priceTag,
                r = i.activityIcon,
                n = i.couponTag;
              if (!(a || r || n)) return (0, q.tZ)(q.HY, {});
              return (0, q.BX)(m.View, {
                className: "flex flex-align-items-center",
                style: "justify-content: flex-end;margin-top: 4px",
                children: [
                  (0, q.tZ)(function () {
                    return a || r
                      ? (0, q.BX)(m.View, {
                          className: "".concat(
                            " _Ze _af _i _l _n _kc _p -J",
                            " border-1rpx"
                          ),
                          children: [
                            !!r &&
                              (0, q.tZ)(m.View, {
                                className: " _df _ef _b _af _Mb _ff _gf _Ne",
                                children: r,
                              }),
                            !!a &&
                              (0, q.tZ)(N.ZtRichText, {
                                nodes: a,
                                style: "".concat(
                                  t.activityIcon ? "margin-right: 4px" : ""
                                ),
                              }),
                          ],
                        })
                      : (0, q.tZ)(q.HY, {});
                  }, {}),
                  (0, q.tZ)(function () {
                    return n
                      ? (0, q.tZ)(m.View, {
                          className: " _bf _Na _Q _cf",
                          children: (0, q.tZ)(N.ZtRichText, { nodes: n }),
                        })
                      : (0, q.tZ)(q.HY, {});
                  }, {}),
                ],
              });
            }),
            H = 0,
            O = D.default.isTieyou,
            U = "YYYY-MM-DD",
            Y = {
              pageId: O ? "10650024363" : "10650024362",
              isAirTrain: !1,
              _curSearchDate: "",
              _pollingSearchTimer: null,
              _fromSource: "flight",
              data: {
                isTieyou: O,
                isIPhoneX: x.ZP.isIPhoneX,
                isLogin: !0,
                showSkeleton: !0,
                couponPopInfo: null,
                notSingle: !1,
                flightList: [],
                transferList: [],
                bannerList: [],
                noFlight: !1,
                hasTransferGroup: !1,
                showNearby: !1,
                departCityCode: "",
                departCity: "",
                arrivalCityCode: "",
                arriveCity: "",
                filterList: X.Z.initIntlFilter(),
                listLowestPrice: 0,
                process: 0,
                roundTrip: 0,
                returnDate: "",
                showFilter: !1,
                transition: !1,
                filterIndex: 0,
                isFilter: !1,
                selectedFilters: [],
                isHigherClass: !1,
                showStraight: !1,
                sortType: "default",
                sortTimeOrder: "descend",
                sortPriceOrder: "ascend",
                dateMap: [],
                priceTrendHidden: !0,
                filterFlightNumber: -1,
                isShowToast: !1,
                toastTransition: !1,
                toastMsg: "",
                hiddenBar: !1,
                departIsChina: !1,
                arrivalIsChina: !1,
                init: !0,
                departCountryId: "",
                arriveCountryId: "",
                priceList: [],
                selectDate: "",
                seatGradeIndex: 0,
                headTitleInfo: null,
                listHeader: "",
                trainFlightJointProductList: null,
              },
              onLoad: function (e) {
                var t, i;
                Z.Z.compareTodayToDate(e.departDate) &&
                  (e.departDate = P()().add(1, "day").format(U));
                var a = e.departDate,
                  r = e.departCityCode,
                  n = e.departCountryId,
                  s = e.arriveCityCode,
                  l = e.arriveCountryId,
                  o = e.departCity,
                  c = void 0 === o ? "" : o,
                  d = e.arriveCity,
                  h = void 0 === d ? "" : d,
                  p = e.nearby,
                  f = void 0 === p ? "0" : p,
                  m = e.data,
                  u = void 0 === m ? {} : m,
                  g = e.airlineName,
                  y = void 0 === g ? "" : g,
                  C = e.roundTrip,
                  v = void 0 === C ? "0" : C,
                  N = e.returnDate,
                  T = void 0 === N ? "" : N,
                  w = e.fromPage,
                  x = void 0 === w ? "home_flight" : w,
                  D = u.passengerList,
                  V = void 0 === D ? [1, 0] : D,
                  L = u.seatGradeIndex,
                  B = void 0 === L ? 0 : L,
                  _ = u.dAirportName,
                  k = void 0 === _ ? "" : _,
                  S = u.aAirportName,
                  F = void 0 === S ? "" : S,
                  b = u.goDate,
                  X = void 0 === b ? "" : b,
                  q = u.goTime,
                  A = void 0 === q ? "" : q,
                  R = u.goFlight,
                  M = void 0 === R ? "" : R,
                  G = u.searchViToken,
                  H = void 0 === G ? "" : G,
                  O = u.pt,
                  Y = u.ext,
                  j = 2 === parseInt(v) ? 2 : T ? 1 : 0,
                  z = {
                    selectDate: a,
                    departCityCode: r,
                    arriveCityCode: s,
                    departCity: decodeURIComponent(c),
                    arriveCity: decodeURIComponent(h),
                  };
                (this.query = z),
                  (this._searchViToken = H),
                  (this._pt = O),
                  (this._ext = Y),
                  (this._fromSource =
                    "traffic_intl_flight_recommend" === x ? "train" : "flight"),
                  this.setData({
                    isLogin: I.ZP.isLogin,
                    selectDate: a,
                    nearby: "0" !== f,
                    dAirportName: k,
                    departCity:
                      (null === (t = this.query) || void 0 === t
                        ? void 0
                        : t.departCity) || "",
                    arriveCity:
                      (null === (i = this.query) || void 0 === i
                        ? void 0
                        : i.arriveCity) || "",
                    aAirportName: F,
                    returnDate: T,
                    roundTrip: j,
                    goDate: X,
                    goTime: A,
                    goFlight: M,
                    passengerList: V,
                    notSingle:
                      1 !==
                      V.reduce(function (e, t) {
                        return e + t;
                      }, 0),
                    seatGradeIndex: parseInt(B),
                    departCountryId: n,
                    arriveCountryId: l,
                    departIsChina:
                      1 == n || "HKG" == r || "MFM" == r || "TPE" == r,
                    arrivalIsChina:
                      1 == l || "HKG" == s || "MFM" == s || "TPE" == s,
                  }),
                  this.handleDefaultFilter(y, k, F),
                  this.getIntlFlightList(a),
                  this.getCalendarLowestPrice(),
                  this.getBannerList(),
                  this.getListPopUp();
              },
              onShow: function () {
                var e = L.wq.intlListRefresh,
                  t = L.wq.listRefreshParams,
                  i = this.query.selectDate,
                  a = (t || {}).passengerList;
                a && this.setData({ passengerList: a }),
                  e &&
                    (this.resetData(),
                    this.getIntlFlightList(i),
                    (L.wq.intlListRefresh = !1));
              },
              getListPopUp: function () {
                var e = this;
                (0, _.cz)({
                  version: 0,
                  source: "",
                  sourcePage: "flight_list_intl",
                }).then(function (t) {
                  var i = t || {},
                    a = i.resultCode,
                    r = i.extendData;
                  1 == a && e.setData({ couponPopInfo: r });
                });
              },
              handlePopupClick: function (e) {
                var t = e.popType,
                  i = e.jumpUrl;
                t !== S.A0.H5 && i && w.Z.commonNavigator(i);
              },
              handlePopupClose: function () {
                this.setData({ couponPopInfo: null });
              },
              getBannerList: function () {
                var e,
                  t,
                  i = this,
                  a = {
                    source: this._fromSource,
                    page: "list",
                    arrCityCode:
                      (null === (e = this.query) || void 0 === e
                        ? void 0
                        : e.arriveCityCode) || "",
                    depCityCode:
                      (null === (t = this.query) || void 0 === t
                        ? void 0
                        : t.departCityCode) || "",
                  };
                (0, b.Al)(a).then(function (e) {
                  if (1 == e.resultCode) {
                    var t,
                      a,
                      r =
                        (null == e ||
                        null === (t = e.data) ||
                        void 0 === t ||
                        null === (a = t.bannerList) ||
                        void 0 === a
                          ? void 0
                          : a.map(function (e) {
                              var t;
                              return (0,
                              p.Z)((0, p.Z)({}, e), {}, { backgroundImage: e.backgroundUrl, content: e.text, showClose: "arrCoupon" === e.type, rightContent: "arrCoupon" !== e.type || (null !== (t = e.arrCityCouponInfo) && void 0 !== t && t.couponToken) ? "" : "hidden" });
                            })) || [];
                    i.setData({ bannerList: r });
                  }
                });
              },
              getCreateSelectQuery: function () {
                var e = g().createSelectorQuery(),
                  t = g().createSelectorQuery();
                e.select("#time-tip-con").boundingClientRect(),
                  t.select("#top").boundingClientRect(),
                  e.exec(function (e) {
                    (H = e[0].top), console.log(H);
                  });
              },
              handleScroll: function (e) {
                var t = e.detail.scrollTop,
                  i = this.data.init;
                if (t > H) i && this.setData({ init: !1 });
                else {
                  if (!(t <= H && t >= 0)) return;
                  this.setData({ init: !0 });
                }
              },
              doIntlAirTrainSearch: function (e) {
                if (e) {
                  var t = this.data,
                    i = t.departCountryId,
                    a = t.arriveCountryId,
                    r = this.query,
                    n = r.departCityCode,
                    s = r.departCity,
                    l = r.arriveCityCode,
                    o = r.arriveCity,
                    c = r.selectDate,
                    d = n,
                    h = l,
                    p = s,
                    f = o,
                    m = e.transferCityCode,
                    u = e.transferCityName;
                  1 == i ? (d = m) : (h = m), 1 == i ? (p = u) : (f = u);
                  var g = this.getSearchParams({
                    departCityName: p,
                    departCityCode: d,
                    departCountryId: i,
                    arriveCityName: f,
                    arriveCityCode: h,
                    arriveCountryId: a,
                    selectDate: c,
                    isAirTrain: !0,
                  });
                  this.intlFlightListSearch(g, c, !0);
                }
              },
              getSearchParams: function (e) {
                var t = e.departCityName,
                  i = e.departCityCode,
                  a = e.departCountryId,
                  r = e.arriveCityName,
                  n = e.arriveCityCode,
                  s = e.arriveCountryId,
                  l = e.date,
                  o = e.isAirTrain,
                  c = void 0 !== o && o,
                  d = this.data,
                  h = d.seatGradeIndex,
                  p = d.passengerList,
                  f = d.roundTrip,
                  m = d.goDate,
                  u = d.returnDate,
                  g = this.query.selectDate,
                  y = L.wq.cacheUsage,
                  C = void 0 === y ? 0 : y;
                L.wq.cacheUsage = 0;
                var v = l || g,
                  N = 2 === f;
                this.query.selectDate = v;
                var T = N ? m : v,
                  w = N ? v : u;
                Z.Z.compareDateToDate(T, w) &&
                  ((w = P()(T).add(1, "day").format(U)),
                  this.setData({ returnDate: w }));
                var x = {
                  data: {
                    version: 6,
                    tripType: 0 === f ? 0 : 1,
                    tripSegmentNo: 0 === f ? 1 : f,
                    cacheUsage: C,
                    seatGrade: h,
                    segmentList: [],
                    passengerList: [{ passengerType: 1, passengerCount: p[0] }],
                    searchViToken: "",
                    partitionSearchToken: "",
                    searchType: c ? 1 : 0,
                  },
                };
                return (
                  0 !== p[1] &&
                    x.data.passengerList.push({
                      passengerType: 2,
                      passengerCount: p[1],
                    }),
                  0 === f
                    ? x.data.segmentList.push({
                        segmentNo: 1,
                        departCityCode: i,
                        internationalDepartures: 1 != a,
                        departCityName: t,
                        arriveCityCode: n,
                        arriveCityName: r,
                        internationalArrivals: 1 != s,
                        departDate: v,
                      })
                    : (x.data.segmentList.push({
                        segmentNo: 1,
                        departCityCode: N ? n : i,
                        departCityName: N ? r : t,
                        internationalDepartures: N ? 1 != s : 1 != a,
                        arriveCityCode: N ? i : n,
                        arriveCityName: N ? t : r,
                        internationalArrivals: N ? 1 != a : 1 != s,
                        departDate: N ? m : v,
                      }),
                      x.data.segmentList.push({
                        segmentNo: 2,
                        departCityCode: N ? i : n,
                        departCityName: N ? t : r,
                        internationalDepartures: N ? 1 != a : 1 != s,
                        arriveCityCode: N ? n : i,
                        arriveCityName: N ? r : t,
                        internationalArrivals: N ? 1 != s : 1 != a,
                        departDate: N ? v : u,
                      }),
                      (x.data.searchViToken = this._searchViToken),
                      (x.data.pt = this._pt),
                      (x.data.ext = this._ext)),
                  (x.data.partitionSearchToken =
                    (this._token && this._token.partitionSearchToken) || ""),
                  (L.wq.bookQueryInfo = {
                    tripType: x.data.tripType,
                    searchSegmentList: x.data.segmentList,
                    searchPassengerList: x.data.passengerList,
                    seatGrade: x.data.seatGrade,
                  }),
                  x
                );
              },
              intlFlightListSearch: function (e, t) {
                var i = this,
                  a =
                    arguments.length > 2 &&
                    void 0 !== arguments[2] &&
                    arguments[2];
                (this.isLoading = !0), this.setShowSkeleton();
                var r = this.data,
                  n = r.roundTrip,
                  s = r.filterList,
                  l = r.isFilter,
                  o = r.selectedFilters;
                (this._curSearchDate = t),
                  this.intlFlightListModelPromise(e)
                    .then(
                      function (e) {
                        if (i._curSearchDate === t) {
                          var r = e.partitionSearchRateInfo,
                            c = e.searchViToken,
                            d = void 0 === c ? "" : c,
                            f = e.pt,
                            m = void 0 === f ? "" : f,
                            u = e.transactionID,
                            g = void 0 === u ? "" : u,
                            y = e.headTitleInfo,
                            C = e.trainFlightJointProductList,
                            v = e.productGroupList,
                            N = void 0 === v ? [] : v,
                            T = e.transferRecommendProductList,
                            Z = void 0 === T ? [] : T,
                            x = e.specialProductList,
                            D = void 0 === x ? [] : x,
                            I = e.transferPreferenceProductList,
                            V = void 0 === I ? [] : I;
                          i.handleRequestInfos({
                            partitionSearchRateInfo: r,
                            searchViToken: d,
                            transactionID: g,
                            pt: m,
                          });
                          var L = D.filter(function (e) {
                              return 0 === e.changeCityList.length;
                            }).map(function (e) {
                              return (0,
                              p.Z)((0, p.Z)({}, e), {}, { specialTag: !0 });
                            }),
                            B = D.filter(function (e) {
                              return e.changeCityList.length > 0;
                            }).map(function (e) {
                              return (0,
                              p.Z)((0, p.Z)({}, e), {}, { specialTag: !0 });
                            });
                          if (
                            ((N = [].concat((0, h.Z)(N), (0, h.Z)(L))),
                            (Z = [].concat((0, h.Z)(Z), (0, h.Z)(B))),
                            (i.chaosList = {
                              productGroupList: w.Z.deepCopy(N),
                              transferList: w.Z.deepCopy(Z),
                            }),
                            N.length + Z.length === 0)
                          ) {
                            if (0 === (null == r ? void 0 : r.mtimeline))
                              return (null == C ? void 0 : C.length) > 0 && !a
                                ? (C.forEach(function (e, t) {
                                    return (e.selected = 0 == t);
                                  }),
                                  i.setData({ trainFlightJointProductList: C }),
                                  void i.doIntlAirTrainSearch(C[0]))
                                : i.handleNoFlight();
                            i.doPollingRequest(r);
                          } else {
                            var _ = X.Z.handleIntlFlightData(N),
                              k = X.Z.handleIntlFlightData(Z),
                              S = X.Z.handleIntlFlightData(D),
                              F = s,
                              P = l,
                              b = o;
                            if (100 === r.processBar) {
                              var q = X.Z.updateIntlFilter(
                                _,
                                k,
                                s,
                                n,
                                i.defaultFilter
                              );
                              (F = q.filterList),
                                (P = q.isFilter),
                                (b = q.selectedFilters);
                            }
                            i.rawList = {
                              productGroupList: w.Z.deepCopy(_),
                              transferList: w.Z.deepCopy(k),
                            };
                            var A = V[0]
                                ? V[0].policyInfo.showSalePrice
                                : 9999999999,
                              R = i.getListLowestPrice(_),
                              M = i.getListLowestPrice(k),
                              G = w._.min([A, R, M]);
                            i.checkCalendarPrice(t, G),
                              i.handleTransferPreference(V),
                              i.setData({
                                specialTagList: S,
                                listLowestPrice: G,
                                filterList: F,
                                isFilter: P,
                                selectedFilters: b,
                                headTitleInfo: y,
                              }),
                              i.filterFlightsList(2),
                              i.doPollingRequest(r);
                          }
                        }
                      },
                      function (e) {
                        (0, k.showModal)(e), i.setNoFlight();
                      }
                    )
                    .finally(function () {
                      i.isLoading = !1;
                    });
              },
              getIntlFlightList: function (e) {
                var t = this.data,
                  i = t.departCountryId,
                  a = t.arriveCountryId,
                  r = this.query,
                  n = r.departCityCode,
                  s = r.arriveCityCode,
                  l = r.departCity,
                  o = r.arriveCity,
                  c = r.selectDate,
                  d = e || c,
                  h = this.getSearchParams({
                    departCityName: l,
                    departCityCode: n,
                    departCountryId: i,
                    arriveCityName: o,
                    arriveCityCode: s,
                    arriveCountryId: a,
                    date: d,
                  });
                this.intlFlightListSearch(h, d);
              },
              intlFlightListModelPromise: function (e) {
                return new Promise(function (t, i) {
                  (0, b.hF)(e)
                    .then(function (e) {
                      var a = e.resultCode,
                        r = e.resultMessage;
                      1 === a ? t(e.data) : i(r);
                    })
                    .catch(function () {
                      i("网络错误，请稍候再试");
                    });
                });
              },
              handleSwitchTransferCity: function (e) {
                this.data.trainFlightJointProductList.forEach(function (t) {
                  return (t.selected =
                    t.transferCityCode == e.transferCityCode);
                }),
                  this.doIntlAirTrainSearch(e);
              },
              doPollingRequest: function (e) {
                var t = this,
                  i = e.mtimeline;
                if (0 === i)
                  return (
                    this._pollingSearchTimer &&
                      clearTimeout(this._pollingSearchTimer),
                    void this.setData({ process: -1 })
                  );
                (this._noNeedSkeleton = !0),
                  (this._pollingSearchTimer = setTimeout(function () {
                    t.getIntlFlightList();
                  }, i));
              },
              handleRequestInfos: function (e) {
                var t = e.partitionSearchRateInfo,
                  i = void 0 === t ? {} : t,
                  a = e.searchViToken,
                  r = void 0 === a ? "" : a,
                  n = e.transactionID,
                  s = void 0 === n ? "" : n,
                  l = e.pt,
                  o = void 0 === l ? "" : l,
                  c = i || {},
                  d = c.partitionSearchToken,
                  h = c.processBar;
                (this._token = {
                  partitionSearchToken: d,
                  searchViToken: r,
                  transactionID: s,
                  pt: o,
                }),
                  this.setData({ process: h });
              },
              setNoFlight: function () {
                this.setData({
                  flightList: [],
                  transferList: [],
                  specialTagList: [],
                  noFlight: !0,
                  showSkeleton: !1,
                  process: -1,
                });
              },
              handleNoFlight: function () {
                console.log("搜索无结果"), this.setNoFlight();
              },
              handleTransferPreference: function (e) {
                if (e && e.length >= 1) {
                  var t = X.Z.handleIntlFlightData(e);
                  console.log(t),
                    this.setData({ transferPreference: t[0] }),
                    (this.chaosPreference = e[0]);
                }
              },
              getListLowestPrice: function (e) {
                var t,
                  i = 9999999999,
                  a = (0, d.Z)(e);
                try {
                  for (a.s(); !(t = a.n()).done; ) {
                    var r = t.value;
                    i > r.showSalePrice && (i = r.showSalePrice);
                  }
                } catch (e) {
                  a.e(e);
                } finally {
                  a.f();
                }
                return i;
              },
              checkCalendarPrice: function (e, t) {
                var i = this.data,
                  a = i.dateMap,
                  r = i.roundTrip,
                  n = a.findIndex(function (t) {
                    return t.flightDate === e;
                  });
                0 === r &&
                  a.length &&
                  -1 !== n &&
                  this.setData(
                    (0, c.Z)(
                      {},
                      "dateMap[".concat(n, "]"),
                      (0, p.Z)((0, p.Z)({}, a[n]), {}, { price: t })
                    )
                  );
              },
              renderList: function (e, t) {
                this.originRenderList = {
                  productGroupList: w.Z.deepCopy(e),
                  transferList: w.Z.deepCopy(t),
                };
                var i = e.length;
                this.setData({
                  flightList: e,
                  transferList: t.slice(0, 550 - i),
                  noFlight: e.length + t.length === 0,
                  hasTransferGroup: 0 !== t.length,
                }),
                  this.hideSkeleton();
              },
              toggleStraight: function () {
                var e = this.data.showStraight;
                if (0 === this.chaosList.productGroupList.length)
                  return this.showToastAction("该航线暂无直飞航班");
                this.setData({
                  showStraight: !e,
                  sortType: e ? "default" : "price",
                  sortPriceOrder: "ascend",
                }),
                  this.filterFlightsList(e ? 2 : 0);
              },
              togglePriceSort: function () {
                var e = this.data,
                  t = e.sortType,
                  i = e.showStraight,
                  a =
                    ("price" === t && i) || "price" !== t || i
                      ? "price"
                      : "default";
                this.setData({
                  showStraight: !1,
                  sortType: a,
                  sortPriceOrder: "ascend",
                }),
                  this.filterFlightsList("price" === a ? 0 : 2);
              },
              showToastAction: function (e) {
                var t = this,
                  i =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 1500;
                this.setData({ isShowToast: !0, toastMsg: e }),
                  setTimeout(function () {
                    t.setData({ toastTransition: !0 });
                  }, 10),
                  setTimeout(function () {
                    t.setData({ isShowToast: !1, toastTransition: !1 });
                  }, i);
              },
              sortBy: function (e) {
                var t = e.currentTarget.dataset.type,
                  i = this.data,
                  a = i.sortTimeOrder,
                  r = i.sortPriceOrder,
                  n = this.originRenderList,
                  s = n.productGroupList,
                  l = void 0 === s ? [] : s,
                  o = n.transferList,
                  c = void 0 === o ? [] : o;
                "time" === t
                  ? (this.setData({
                      sortType: "time",
                      sortTimeOrder: "ascend" === a ? "descend" : "ascend",
                      sortPriceOrder: "descend",
                    }),
                    this.sortByTime(l, c))
                  : (this.setData({
                      sortType: "price",
                      sortPriceOrder: "ascend" === r ? "descend" : "ascend",
                      sortTimeOrder: "descend",
                    }),
                    this.sortByPrice(l, c));
              },
              sortByTime: function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : [],
                  t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : [],
                  i = this.data.sortTimeOrder,
                  a = w._.sortBy(e, X.Z.sortByTimeKey(i)),
                  r = w._.sortBy(t, X.Z.sortByTimeKey(i));
                this.renderList(a, r);
              },
              sortByPrice: function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : [],
                  t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : [],
                  i = this.data,
                  a = i.sortPriceOrder,
                  r = i.isHigherClass,
                  n = w._.sortBy(e, X.Z.sortByPriceKey(a, r)),
                  s = w._.sortBy(t, X.Z.sortByPriceKey(a, r));
                this.renderList(n, s);
              },
              handleDefaultFilter: function (e, t, i) {
                (this.defaultFilter = []),
                  e && this.defaultFilter.push({ key: "航空公司", title: e }),
                  t && this.defaultFilter.push({ key: "起飞机场", title: t }),
                  i && this.defaultFilter.push({ key: "到达机场", title: i });
              },
              openFilter: function () {
                var e = this,
                  t = this.data,
                  i = t.filterList,
                  a = t.selectedFilters,
                  r = void 0 === a ? [] : a,
                  n = t.filterFlightNumber;
                (this.tempFilter = w.Z.deepCopy(i)),
                  (this.selectedFilters = w.Z.deepCopy(r)),
                  (this.filterFlightNumber = n),
                  this.setData({ showFilter: !0 }),
                  setTimeout(function () {
                    e.setData({ transition: !0 });
                  }, 10);
              },
              cancelFilter: function () {
                console.log(this.selectedFilters),
                  this.setData({
                    showFilter: !1,
                    filterList: this.tempFilter,
                    selectedFilters: this.selectedFilters,
                    filterFlightNumber: this.filterFlightNumber || "",
                    filterIndex: 0,
                    transition: !1,
                  });
              },
              confirmFilter: function () {
                var e = this.data.filterList,
                  t = X.Z.getFilterNameIndex(e, "舱位"),
                  i =
                    e.filter(function (e) {
                      return e.active;
                    }).length > 0,
                  a = e[t].list[1].isChecked && !e[t].list[0].isChecked;
                this.setData({
                  showFilter: !1,
                  transition: !1,
                  isFilter: i,
                  isHigherClass: a,
                }),
                  this.filterFlightsList();
              },
              selectKey: function (e) {
                var t = e.currentTarget.dataset.index;
                this.setData({ filterIndex: t });
              },
              filterSelected: function (e) {
                var t = e.currentTarget.dataset,
                  i = t.index,
                  a = t.allow,
                  r = this.data,
                  n = r.filterIndex,
                  s = r.filterList,
                  l = r.selectedFilters,
                  o = void 0 === l ? [] : l,
                  c = s[n].list[i].isChecked,
                  d = "";
                if (0 !== Number(a)) {
                  if (((s[n].list[i].isChecked = !c), c)) {
                    var h = o.findIndex(function (e) {
                      return e.title === s[n].list[i].title;
                    });
                    console.log(h), h > -1 && o.splice(h, 1), (d = o);
                  } else
                    o.push({
                      key: s[n].list[i].key,
                      title: s[n].list[i].title,
                    }),
                      (d = o);
                  0 ===
                  s[n].list.filter(function (e) {
                    return e.isChecked;
                  }).length
                    ? (s[n].active = !1)
                    : (s[n].active = !0),
                    this.setData({ filterList: s, selectedFilters: d }),
                    this.filterFlightsList(1);
                }
              },
              removeFilterKey: function (e) {
                var t,
                  i = e.currentTarget.dataset.index,
                  a = this.data,
                  r = a.selectedFilters,
                  n = a.filterList,
                  s = (0, d.Z)(n);
                try {
                  for (s.s(); !(t = s.n()).done; ) {
                    var l = t.value;
                    if (l.name === r[i].key) {
                      var o,
                        c = 0,
                        h = (0, d.Z)(l.list);
                      try {
                        for (h.s(); !(o = h.n()).done; ) {
                          var p = o.value;
                          p.title === r[i].title && (p.isChecked = !1),
                            p.isChecked && c++;
                        }
                      } catch (e) {
                        h.e(e);
                      } finally {
                        h.f();
                      }
                      0 === c && (l.active = !1);
                    }
                  }
                } catch (e) {
                  s.e(e);
                } finally {
                  s.f();
                }
                r.splice(i, 1),
                  this.setData({ selectedFilters: r, filterList: n }),
                  this.filterFlightsList(1);
              },
              filterFlightsList: function (e) {
                var t = this.data,
                  i = t.sortType,
                  a = t.filterList,
                  r = this.rawList,
                  n = r.productGroupList,
                  s = r.transferList;
                if (2 === e) return this.renderList(n, s);
                var l = X.Z.filterList(n, s, a),
                  o = l.straight,
                  c = l.transfer;
                if (
                  (this.setData({ filterFlightNumber: o.length + c.length }),
                  1 !== e &&
                    ("time" === i && this.sortByTime(o, c), "price" === i))
                ) {
                  var d = X.Z.getFilterNameIndex(a, "舱位"),
                    h = a[d].list[1].isChecked && !a[d].list[0].isChecked;
                  this.sortByPrice(o, c, h);
                }
              },
              getCalendarLowestPrice: function () {
                var e = this,
                  t = this.query,
                  i = t.departCityCode,
                  a = t.arriveCityCode,
                  r = t.selectDate,
                  n = {
                    data: {
                      departCityCode: i,
                      arriveCityCode: a,
                      isDomestic: 1,
                    },
                  };
                (0, _.MX)(n)
                  .then(function (t) {
                    t && t.data && t.data.length
                      ? (console.log(t),
                        e.setData({
                          priceList: t.data,
                          dateMap: Z.Z.generateDateMap({
                            priceList: t.data,
                            currentDate: r,
                          }),
                        }))
                      : e.setData({
                          dateMap: Z.Z.generateDateMap({
                            priceList: [],
                            currentDate: r,
                          }),
                        });
                  })
                  .catch(function () {
                    e.setData({
                      dateMap: Z.Z.generateDateMap({
                        priceList: [],
                        currentDate: r,
                      }),
                    });
                  })
                  .finally(function () {
                    e.refreshDateMap(r);
                  });
              },
              chooseDate: function (e) {
                var t = this,
                  i = this.data,
                  a = i.roundTrip,
                  r = i.returnDate,
                  n = i.goDate;
                1 === a && Z.Z.compareDateToDate(e, r)
                  ? this.showToastAction("日期不能晚于后一程的出发日期")
                  : 2 === a && Z.Z.compareDateToDate(n, e)
                  ? this.showToastAction("日期不能早于前一程的出发日期")
                  : this.setData({ selectDate: e }, function () {
                      t.resetData(),
                        t.getIntlFlightList(e),
                        t.refreshDateMap(e);
                    });
              },
              goToCalendar: function () {
                var e = this,
                  t = this.data,
                  i = t.goDate,
                  a = t.roundTrip,
                  r = t.returnDate,
                  n = this.query,
                  s = n.departCityCode,
                  l = n.arriveCityCode,
                  o = n.selectDate,
                  c = P()(o).format(U),
                  d = P()(),
                  h = P()().add(B.g2 - 1, "day");
                V.Z.calendar(
                  {
                    chooseDate: c,
                    beginDate: 2 === a ? i : d.format(U),
                    endDate: h.format(U),
                    title: 2 === a ? "请选择返程日期" : "请选择出发日期",
                    bu: "flight",
                    queryParams: {
                      data: {
                        departCityCode: s,
                        arriveCityCode: l,
                        isDomestic: 1,
                      },
                    },
                  },
                  function (t) {
                    if (1 === a && Z.Z.compareDateToDate(t, r))
                      e.showToastAction("日期不能晚于后一程的出发日期");
                    else {
                      var i = e.data,
                        n = i.dateMap,
                        s = i.priceList;
                      n.some(function (e) {
                        return e.flightDate == t;
                      }) ||
                        e.setData({
                          dateMap: Z.Z.generateDateMap({
                            priceList: s,
                            currentDate: t,
                          }),
                        }),
                        e.setData({ selectDate: t }, function () {
                          e.resetData(),
                            e.getIntlFlightList(t),
                            e.refreshDateMap(t);
                        });
                    }
                  }
                );
              },
              refreshDateMap: function (e) {
                var t,
                  i = this.data.goDate,
                  a = P()().format(U),
                  r = P()().add(1, "day").format(U);
                (t =
                  e === a || e === r
                    ? a
                    : e === i
                    ? i
                    : P()(e).subtract(2, "day").format(U)),
                  this.setData({ dateView: "c-".concat(t) });
              },
              goToNearby: function () {
                var e = this.data,
                  t = e.nearbyInfo,
                  i = e.passengerList,
                  a = e.seatGradeIndex,
                  r = Z.Z.searchCityInfoFromStorage(
                    t.departureCityCode,
                    "cityCode"
                  ),
                  n = Z.Z.searchCityInfoFromStorage(
                    t.arrivalCityCode,
                    "cityCode"
                  ),
                  s = r.countryID,
                  l = n.countryID;
                this.navigateTo({
                  url: "/pages/flightlntl/list/list?departCity="
                    .concat(t.departureCityName, "&departCityCode=")
                    .concat(t.departureCityCode, "&arriveCity=")
                    .concat(t.arrivalCityName, "&arriveCityCode=")
                    .concat(t.arrivalCityCode, "&departDate=")
                    .concat(t.departureDate, "&nearby=0&departCountryId=")
                    .concat(s, "&arriveCountryId=")
                    .concat(l, "&fromPage=xcx_flt_linjin"),
                  data: { passengerList: i, seatGradeIndex: a },
                });
              },
              toRoundRecommendList: function () {
                var e = this.data,
                  t = e.roundRecommend,
                  i = t.departureCityName,
                  a = t.departureCityCode,
                  r = t.arrivalCityName,
                  n = t.arrivalCityCode,
                  s = t.goTripDate,
                  l = t.backTripDate,
                  o = e.passengerList,
                  c = e.seatGradeIndex,
                  d = Z.Z.searchCityInfoFromStorage(a, "cityCode"),
                  h = Z.Z.searchCityInfoFromStorage(n, "cityCode"),
                  p = d.countryID,
                  f = h.countryID;
                this.navigateTo({
                  url: "/pages/flightIntl/list/list?departCity="
                    .concat(i, "&departCityCode=")
                    .concat(a, "&arriveCity=")
                    .concat(r, "&arriveCityCode=")
                    .concat(n, "&departDate=")
                    .concat(s, "&returnDate=")
                    .concat(l, "&departCountryId=")
                    .concat(p, "&arriveCountryId=")
                    .concat(f, "&nearby=0"),
                  data: { passengerList: o, seatGradeIndex: c },
                });
              },
              clickItem: function (e) {
                var t = e.currentTarget.dataset,
                  i = t.type,
                  a = t.index,
                  r = this.data,
                  n = r.flightList,
                  s = r.transferList,
                  l = r.roundTrip,
                  o = r.passengerList,
                  c = r.seatGradeIndex,
                  d = r.goDate,
                  h = r.specialTagList,
                  p = a,
                  f = i;
                if ("tag" === i) {
                  var m,
                    u = h[a];
                  u.isTransfer
                    ? ((m = s.findIndex(function (e) {
                        return e.ext === u.ext;
                      })),
                      (f = "transfer"))
                    : ((m = n.findIndex(function (e) {
                        return e.ext === u.ext;
                      })),
                      (f = "straight")),
                    (p = m);
                }
                var g = ("straight" === f ? n : "transfer" === f ? s : [])[p],
                  y = (
                    "straight" === f
                      ? this.chaosList.productGroupList
                      : "transfer" === f
                      ? this.chaosList.transferList
                      : []
                  ).filter(function (e) {
                    return e.policyInfo.ext === g.ext;
                  })[0];
                console.log(y);
                var C = this.query,
                  v = C.selectDate,
                  N = C.departCityCode,
                  T = C.arriveCityCode,
                  w = C.departCity,
                  Z = C.arriveCity;
                0 === l
                  ? ((L.wq.flightOverview = y),
                    (L.wq.flightOverviewReturn = {}),
                    console.log(this._token),
                    this.toBookX({
                      roundTrip: l,
                      passengerList: o,
                      seatGradeIndex: c,
                      ext: y.policyInfo.ext,
                      token: this._token,
                      queryInfo: {
                        departCityCode: N,
                        arriveCityCode: T,
                        departCity: w,
                        arriveCity: Z,
                        departDate: v,
                      },
                    }))
                  : 1 === l
                  ? ((L.wq.flightOverview = y), this.toReturnFlight(y))
                  : 2 === l &&
                    ((L.wq.flightOverviewReturn = y),
                    console.log(this._token),
                    this.toBookX({
                      roundTrip: l,
                      passengerList: o,
                      seatGradeIndex: c,
                      ext: y.policyInfo.ext,
                      token: this._token,
                      queryInfo: {
                        departCityCode: N,
                        arriveCityCode: T,
                        departCity: w,
                        arriveCity: Z,
                        departDate: d,
                        returnDate: v,
                      },
                    }));
              },
              clickPreferenceItem: function () {
                var e = this.data,
                  t = e.roundTrip,
                  i = e.passengerList,
                  a = e.seatGradeIndex,
                  r = e.goDate,
                  n = this.query,
                  s = n.selectDate,
                  l = n.departCityCode,
                  o = n.arriveCityCode,
                  c = n.departCity,
                  d = n.arriveCity,
                  h = this.chaosPreference;
                0 === t
                  ? ((L.wq.flightOverview = h),
                    (L.wq.flightOverviewReturn = {}),
                    this.toBookX({
                      roundTrip: t,
                      passengerList: i,
                      seatGradeIndex: a,
                      token: this._token,
                      queryInfo: {
                        departCityCode: l,
                        arriveCityCode: o,
                        departCity: c,
                        arriveCity: d,
                        departDate: s,
                      },
                    }))
                  : 1 === t
                  ? ((L.wq.flightOverview = h), this.toReturnFlight(h))
                  : 2 === t &&
                    ((L.wq.flightOverviewReturn = h),
                    console.log(this._token),
                    this.toBookX({
                      roundTrip: t,
                      passengerList: i,
                      seatGradeIndex: a,
                      token: this._token,
                      queryInfo: {
                        departCityCode: l,
                        arriveCityCode: o,
                        departCity: c,
                        arriveCity: d,
                        departDate: r,
                        returnDate: s,
                      },
                    }));
              },
              toReturnFlight: function (e) {
                var t = this.data,
                  i = t.returnDate,
                  a = t.dAirportName,
                  r = t.aAirportName,
                  n = t.passengerList,
                  s = t.seatGradeIndex,
                  l = t.departCountryId,
                  o = t.arriveCountryId,
                  c = this.query,
                  d = c.departCity,
                  h = c.departCityCode,
                  p = c.arriveCity,
                  f = c.arriveCityCode,
                  m = c.selectDate,
                  u = this._token || {},
                  g = u.searchViToken,
                  y = u.pt;
                console.log(i);
                var C = e.policyInfo.ext,
                  v = e.flightList,
                  N = P()(v[0].dateInfo.departDate).format("HH:mm"),
                  T = v
                    .map(function (e) {
                      return e.basicInfo.flightNo;
                    })
                    .join("&");
                this.navigateTo({
                  url: "/pages/flightIntl/list/list?departCity="
                    .concat(p, "&departCityCode=")
                    .concat(f, "&arriveCity=")
                    .concat(d, "&arriveCityCode=")
                    .concat(h, "&departDate=")
                    .concat(i, "&nearby=0&departCountryId=")
                    .concat(o, "&arriveCountryId=")
                    .concat(l, "&roundTrip=2"),
                  data: {
                    dAirportName: r,
                    aAirportName: a,
                    goDate: m,
                    goTime: N,
                    goFlight: T,
                    searchViToken: g,
                    pt: y,
                    ext: C,
                    passengerList: n,
                    seatGradeIndex: s,
                  },
                });
              },
              toBookX: function (e) {
                this.navigateTo({
                  url: "/pages/flightIntl/bookx/bookx",
                  data: (0, p.Z)({}, e),
                });
              },
              refreshFlightList: function () {
                var e = this.query.selectDate;
                (L.wq.cacheUsage = 2), this.getIntlFlightList(e);
              },
              goToPriceTrend: function () {
                var e = this.data,
                  t = e.trendData.trendType,
                  i = e.listLowestPrice,
                  a = e.roundTrip,
                  r = this.query,
                  n = r.selectDate,
                  s = r.departCity,
                  l = r.arriveCity,
                  o = r.departCityCode,
                  c = r.arriveCityCode;
                if (2 !== t && 0 === a) {
                  var d =
                    "https://market.suanya.com/activity/flight/tendency/?departCity="
                      .concat(encodeURIComponent(s), "&departCityCode=")
                      .concat(o, "&arriveCity=")
                      .concat(encodeURIComponent(l), "&arriveCityCode=")
                      .concat(c, "&departDate=")
                      .concat(n, "&lowestPrice=")
                      .concat(i, "&fromtype=1");
                  V.Z.twebview({
                    data: {
                      url: d,
                      titleColor: "#ffffff",
                      titleBgColor: "#013862",
                    },
                  });
                }
              },
              onShareAppMessage: function () {
                var e = this.data,
                  t = e.roundTrip,
                  i = e.goDate,
                  a = e.returnDate,
                  r = this.query,
                  n = r.departCity,
                  s = r.departCityCode,
                  l = r.arriveCity,
                  o = r.arriveCityCode,
                  c = r.selectDate,
                  d = "机票预订",
                  h = "",
                  p = "&departDate=".concat(c),
                  f = 2 === t ? l : n,
                  m = 2 === t ? n : l,
                  u = 2 === t ? o : s,
                  g = 2 === t ? s : o;
                return (
                  n && l && (d = "".concat(f, " - ").concat(m, " 机票")),
                  1 === t
                    ? (h = "&returnDate=".concat(a))
                    : 2 === t &&
                      ((p = "&departDate=".concat(i)),
                      (h = "&returnDate=".concat(c))),
                  {
                    bu: "flight",
                    title: d,
                    desc: "安全预订，品质飞行！【".concat(
                      D.default.partnerCN,
                      "旅行】"
                    ),
                    path: "/pages/flightIntl/list/list?departCity="
                      .concat(f, "&departCityCode=")
                      .concat(u, "&arriveCity=")
                      .concat(m, "&arriveCityCode=")
                      .concat(g)
                      .concat(p)
                      .concat(h, "&nearby=1"),
                  }
                );
              },
              onUnload: function () {
                var e = this.data.roundTrip;
                this._pollingSearchTimer &&
                  clearTimeout(this._pollingSearchTimer),
                  2 !== e
                    ? (L.IK.selectDate = this.query.selectDate)
                    : 2 === e && (L.IK.returnDate = this.query.selectDate);
              },
              setShowSkeleton: function () {
                var e = !0;
                this._noNeedSkeleton && ((e = !1), (this._noNeedSkeleton = !1)),
                  e && this.setData({ showSkeleton: !0 });
              },
              hideSkeleton: function () {
                this.setData({ showSkeleton: !1 });
              },
              resetData: function () {
                this.setData({
                  roundRecommend: {},
                  nearbyInfo: {},
                  transferPreference: "",
                }),
                  (this._token = {}),
                  (this._noForecast = !1),
                  (this._noNearBy = !1);
              },
              noop: function () {},
            },
            j =
              (0, y.h)(!1, { usePageWrapper: !0 })(
                (a =
                  v()(Y)(
                    (a = (function (e) {
                      (0, l.Z)(i, e);
                      var t = (0, o.Z)(i);
                      function i(e) {
                        var a;
                        return (
                          (0, n.Z)(this, i),
                          ((a = t.call(this, e)).autoExpose = !0),
                          a
                        );
                      }
                      return (
                        (0, s.Z)(i, [
                          {
                            key: "renderTitleView",
                            value: function () {
                              var e = this.data,
                                t = e.roundTrip,
                                i = e.departCity,
                                a = e.arriveCity,
                                r = 0 !== t,
                                n = 2 === t;
                              return i && a
                                ? (0, q.BX)(m.View, {
                                    className: "title-view flex-center",
                                    children: [
                                      r &&
                                        (0, q.tZ)(m.Text, {
                                          className: "title-amount",
                                          children: n ? "返程：" : "去程：",
                                        }),
                                      (0, q.tZ)(m.Text, {
                                        className: "from city",
                                        children: i || "",
                                      }),
                                      (0, q.tZ)(m.Text, {
                                        className:
                                          "iconfont2 ifont2-dancheng_linea_12",
                                      }),
                                      (0, q.tZ)(m.Text, {
                                        className: "to city",
                                        children: a || "",
                                      }),
                                    ],
                                  })
                                : "航班列表";
                            },
                          },
                          {
                            key: "receiveBannerCoupon",
                            value: function (e) {
                              var t = this;
                              if (e) {
                                var i = { couponToken: e };
                                (0, b.vT)(i)
                                  .then(function (e) {
                                    1 == e.resultCode
                                      ? ((0, k.showToast)("领取成功"),
                                        t.getBannerList())
                                      : (0, k.showToast)(e.resultMessage);
                                  })
                                  .catch(function (e) {
                                    return console.error(e);
                                  });
                              }
                            },
                          },
                          {
                            key: "handleBannerClick",
                            value: function (e) {
                              var t;
                              if (
                                0 ===
                                (null == e ||
                                null === (t = e.bigCouponInfo) ||
                                void 0 === t
                                  ? void 0
                                  : t.status)
                              )
                                return (0, k.showToast)("该功能小程序暂不支持");
                              if ("arrCoupon" != e.type)
                                null != e &&
                                  e.jumpUrl &&
                                  (e.jumpUrl.startsWith("http")
                                    ? V.Z.twebview({ data: { url: e.jumpUrl } })
                                    : this.navigateTo({ url: e.jumpUrl }));
                              else {
                                var i = (e || {}).arrCityCouponInfo;
                                i && this.receiveBannerCoupon(i.couponToken);
                              }
                            },
                          },
                          {
                            key: "handleBannerClose",
                            value: function () {
                              (0, b.pq)(), this.setData({ bannerList: [] });
                            },
                          },
                          {
                            key: "render",
                            value: function () {
                              var e = this,
                                t = this.data,
                                i = t.goDate,
                                a = t.goTime,
                                r = t.goFlight,
                                n = t.roundTrip,
                                s = t.dateView,
                                l = t.dateMap,
                                o = t.process,
                                c = t.couponPopInfo,
                                d = t.isIPhoneX,
                                h = t.showSkeleton,
                                p = t.showFilter,
                                f = t.monitorPopupShow,
                                u = t.flightView,
                                g = t.isTieyou,
                                y = t.priceTrendHidden,
                                C = t.noFlight,
                                v = t.trendData,
                                w = t.roundRecommend,
                                Z = t.showNearby,
                                x = t.nearbyInfo,
                                D = t.transferPreference,
                                I = t.sortType,
                                V = t.specialTagList,
                                L = t.flightList,
                                B = t.showStraight,
                                _ = t.transferList,
                                k = t.isFilter,
                                S = t.sortTimeOrder,
                                F = t.transition,
                                P = t.filterFlightNumber,
                                b = t.selectedFilters,
                                X = t.filterList,
                                A = t.seatGradeIndex,
                                H = t.bannerList,
                                O = t.filterIndex,
                                U = t.toastTransition,
                                Y = t.isShowToast,
                                j = t.toastMsg,
                                z = t.selectDate,
                                K = t.headTitleInfo,
                                J = t.listHeader,
                                E = t.trainFlightJointProductList;
                              return (0, q.BX)(q.HY, {
                                children: [
                                  (0, q.BX)(m.View, {
                                    className: "flt-intl-list-page page",
                                    children: [
                                      (0, q.BX)(m.View, {
                                        className: "top",
                                        children: [
                                          2 === n &&
                                            (0, q.tZ)(m.View, {
                                              className: "onward-info",
                                              children: (0, q.BX)(m.View, {
                                                children: [
                                                  "去程：",
                                                  (0, q.tZ)(m.Text, {
                                                    children:
                                                      i + " " + a + " " + r,
                                                  }),
                                                ],
                                              }),
                                            }),
                                          (0, q.BX)(m.View, {
                                            className: "datePicker",
                                            id: "top",
                                            children: [
                                              (0, q.tZ)(m.View, {
                                                className: "calendar-list",
                                                children: (0, q.tZ)(
                                                  m.ScrollView,
                                                  {
                                                    className:
                                                      "calendar-scroll-list",
                                                    scrollX: !0,
                                                    scrollWithAnimation: "true",
                                                    scrollIntoView: s,
                                                    children: l.map(function (
                                                      t
                                                    ) {
                                                      return (0, q.tZ)(q.HY, {
                                                        children: (0, q.BX)(
                                                          m.View,
                                                          {
                                                            className:
                                                              "item ".concat(
                                                                t.flightDate ==
                                                                  z
                                                                  ? "cur bgcolor-primary"
                                                                  : ""
                                                              ),
                                                            id: "c-".concat(
                                                              t.flightDate
                                                            ),
                                                            onClick:
                                                              function () {
                                                                return e.chooseDate(
                                                                  t.flightDate
                                                                );
                                                              },
                                                            children: [
                                                              (0, q.tZ)(
                                                                m.View,
                                                                {
                                                                  className:
                                                                    "date",
                                                                  children:
                                                                    t.dateDesc,
                                                                }
                                                              ),
                                                              (0, q.tZ)(
                                                                m.View,
                                                                {
                                                                  className:
                                                                    "week",
                                                                  children:
                                                                    t.weekDay,
                                                                }
                                                              ),
                                                              (0, q.tZ)(
                                                                m.View,
                                                                {
                                                                  className:
                                                                    "price",
                                                                  children:
                                                                    t.price ||
                                                                    "--",
                                                                }
                                                              ),
                                                            ],
                                                          }
                                                        ),
                                                      });
                                                    }),
                                                  }
                                                ),
                                              }),
                                              (0, q.BX)(m.View, {
                                                className: "calendar-all",
                                                id: "AaBX",
                                                onClick: this.goToCalendar,
                                                children: [
                                                  (0, q.tZ)(m.Text, {
                                                    children: "价格日历",
                                                  }),
                                                  (0, q.tZ)(m.Text, {
                                                    className:
                                                      "ifont-triangle iconfont",
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          (0, q.tZ)(m.View, {
                                            className:
                                              "node-isolate-progress-bar",
                                            children:
                                              -1 !== o &&
                                              (0, q.tZ)(m.View, {
                                                className: "process",
                                                children: (0, q.tZ)(m.View, {
                                                  className:
                                                    "process-bg bgcolor-primary",
                                                  style: "width: " + o + "%",
                                                }),
                                              }),
                                          }),
                                        ],
                                      }),
                                      (0, q.BX)(m.View, {
                                        className:
                                          "fltlist " +
                                          (2 === n ? "return" : "") +
                                          "  " +
                                          (d ? "iphone-x" : ""),
                                        children: [
                                          h &&
                                            (0, q.tZ)(m.View, {
                                              id: "AaBY",
                                              onClick: function (e) {
                                                e.stopPropagation();
                                              },
                                              catchMove: !0,
                                              children:
                                                h &&
                                                (0, q.tZ)(q.HY, {
                                                  children: [
                                                    0, 1, 2, 3, 4, 5, 6,
                                                  ].map(function () {
                                                    return (0,
                                                    q.tZ)(q.HY, { children: (0, q.BX)(m.View, { className: "skeleton-item", children: [(0, q.BX)(m.View, { className: "bd", children: [(0, q.BX)(m.View, { className: "place", children: [(0, q.tZ)(m.View, { className: "title" }), (0, q.tZ)(m.View, { className: "desc" })] }), (0, q.tZ)(m.View, { className: "division" }), (0, q.BX)(m.View, { className: "place", children: [(0, q.tZ)(m.View, { className: "title" }), (0, q.tZ)(m.View, { className: "desc" })] }), (0, q.BX)(m.View, { className: "price", children: [(0, q.tZ)(m.View, { className: "title" }), (0, q.tZ)(m.View, { className: "desc" })] })] }), (0, q.tZ)(m.View, { className: "hd", children: (0, q.tZ)(m.View, { className: "desc" }) })] }) });
                                                  }),
                                                }),
                                            }),
                                          !h &&
                                            (0, q.BX)(m.ScrollView, {
                                              className: "flight-scroll-list",
                                              scrollY: !p && !f,
                                              enableBackToTop: !0,
                                              scrollTop: u,
                                              onScroll: this.handleScroll,
                                              children: [
                                                (0, q.tZ)(M.s, {
                                                  banners: H,
                                                  onBannerClick:
                                                    this.handleBannerClick.bind(
                                                      this
                                                    ),
                                                  onBannerClose:
                                                    this.handleBannerClose,
                                                }),
                                                (0, q.BX)(m.View, {
                                                  className: "scroll-bd",
                                                  children: [
                                                    !(y || C) &&
                                                      (0, q.BX)(m.View, {
                                                        className:
                                                          "trend " +
                                                          (g ? "ty" : "zx"),
                                                        id: "trend",
                                                        onClick:
                                                          this.goToPriceTrend,
                                                        children: [
                                                          (0, q.tZ)(m.Image, {
                                                            className:
                                                              "trend-logo",
                                                            src: v.trendIconUrl,
                                                          }),
                                                          (0, q.tZ)(
                                                            N.ZtRichText,
                                                            {
                                                              className: "txt",
                                                              nodes: v.title,
                                                            }
                                                          ),
                                                          2 !== v.trendType &&
                                                            0 === n &&
                                                            (0, q.tZ)(m.Text, {
                                                              className:
                                                                "ifont-arr iconfont",
                                                            }),
                                                        ],
                                                      }),
                                                    (0, q.tZ)(R, {
                                                      data: E,
                                                      departDate: z,
                                                      onSwitchTransferCity:
                                                        this
                                                          .handleSwitchTransferCity,
                                                    }),
                                                    !!K &&
                                                      (0, q.tZ)(m.View, {
                                                        className:
                                                          "list-header flex-align-items-center ".concat(
                                                            J
                                                          ),
                                                        ref: this.doObserver,
                                                        children: [
                                                          K.firstTitle,
                                                          K.secondTitle,
                                                          K.thirdTitle,
                                                        ].map(function (e) {
                                                          return (0,
                                                          q.tZ)(m.Text, { className: "title-item", children: e }, e);
                                                        }),
                                                      }),
                                                    Z &&
                                                      w &&
                                                      w.lowestPrice &&
                                                      !C &&
                                                      (0, q.BX)(m.View, {
                                                        className:
                                                          "list-recomd",
                                                        id: "AaBZ",
                                                        onClick:
                                                          this
                                                            .toRoundRecommendList,
                                                        children: [
                                                          (0, q.tZ)(m.View, {
                                                            className:
                                                              "label round",
                                                          }),
                                                          (0, q.BX)(m.View, {
                                                            className:
                                                              "cont " +
                                                              (g ? "ty" : "zx"),
                                                            children: [
                                                              (0, q.BX)(
                                                                m.View,
                                                                {
                                                                  children: [
                                                                    (0, q.tZ)(
                                                                      m.Text,
                                                                      {
                                                                        className:
                                                                          "station",
                                                                        children:
                                                                          w.departureCityName,
                                                                      }
                                                                    ),
                                                                    (0, q.tZ)(
                                                                      m.Text,
                                                                      {
                                                                        className:
                                                                          "ifont-chage iconfont",
                                                                      }
                                                                    ),
                                                                    (0, q.tZ)(
                                                                      m.Text,
                                                                      {
                                                                        className:
                                                                          "station",
                                                                        children:
                                                                          w.arrivalCityName,
                                                                      }
                                                                    ),
                                                                  ],
                                                                }
                                                              ),
                                                              w.dateDescription &&
                                                                (0, q.tZ)(
                                                                  m.View,
                                                                  {
                                                                    className:
                                                                      "desc",
                                                                    children:
                                                                      w.dateDescription,
                                                                  }
                                                                ),
                                                            ],
                                                          }),
                                                          (0, q.BX)(m.View, {
                                                            className: "rbox",
                                                            children: [
                                                              (0, q.BX)(
                                                                m.View,
                                                                {
                                                                  className:
                                                                    "rb-top",
                                                                  children: [
                                                                    (0, q.tZ)(
                                                                      m.Text,
                                                                      {
                                                                        className:
                                                                          "tag",
                                                                        children:
                                                                          "往返特惠",
                                                                      }
                                                                    ),
                                                                    (0, q.tZ)(
                                                                      m.Text,
                                                                      {
                                                                        className:
                                                                          "price color-red",
                                                                        children:
                                                                          w.lowestPrice,
                                                                      }
                                                                    ),
                                                                  ],
                                                                }
                                                              ),
                                                              (0, q.tZ)(
                                                                m.Text,
                                                                {
                                                                  className:
                                                                    "price-tip",
                                                                  children:
                                                                    "往返总价",
                                                                }
                                                              ),
                                                            ],
                                                          }),
                                                        ],
                                                      }),
                                                    Z &&
                                                      x &&
                                                      x.lowestPrice &&
                                                      !C &&
                                                      (0, q.BX)(m.View, {
                                                        className:
                                                          "list-recomd",
                                                        id: "AaBa",
                                                        onClick:
                                                          this.goToNearby,
                                                        children: [
                                                          (0, q.tZ)(m.View, {
                                                            className:
                                                              "label " +
                                                              (g ? "ty" : "zx"),
                                                          }),
                                                          (0, q.BX)(m.View, {
                                                            className:
                                                              "cont " +
                                                              (g ? "ty" : "zx"),
                                                            children: [
                                                              (0, q.BX)(
                                                                m.View,
                                                                {
                                                                  children: [
                                                                    (0, q.tZ)(
                                                                      m.Text,
                                                                      {
                                                                        className:
                                                                          "station",
                                                                        children:
                                                                          x.departureCityName,
                                                                      }
                                                                    ),
                                                                    (0, q.tZ)(
                                                                      m.Text,
                                                                      {
                                                                        className:
                                                                          "ifont-flightto iconfont",
                                                                      }
                                                                    ),
                                                                    (0, q.tZ)(
                                                                      m.Text,
                                                                      {
                                                                        className:
                                                                          "station",
                                                                        children:
                                                                          x.arrivalCityName,
                                                                      }
                                                                    ),
                                                                  ],
                                                                }
                                                              ),
                                                              x.distanceDescription &&
                                                                (0, q.tZ)(
                                                                  m.View,
                                                                  {
                                                                    className:
                                                                      "desc",
                                                                    children:
                                                                      x.distanceDescription,
                                                                  }
                                                                ),
                                                            ],
                                                          }),
                                                          (0, q.tZ)(m.View, {
                                                            className: "rbox",
                                                            children: (0, q.tZ)(
                                                              m.Text,
                                                              {
                                                                className:
                                                                  "price color-red",
                                                                children:
                                                                  x.lowestPrice,
                                                              }
                                                            ),
                                                          }),
                                                        ],
                                                      }),
                                                    D &&
                                                      (0, q.BX)(m.View, {
                                                        className:
                                                          "fltlist_item " +
                                                          (g ? "ty" : "zx"),
                                                        "data-type":
                                                          "preference",
                                                        id: "AaBb",
                                                        onClick:
                                                          this
                                                            .clickPreferenceItem,
                                                        children: [
                                                          (0, q.tZ)(m.View, {
                                                            className:
                                                              "flight-new-tag",
                                                            children:
                                                              "中转特惠",
                                                          }),
                                                          (0, q.BX)(m.View, {
                                                            className:
                                                              "flt_intro",
                                                            children: [
                                                              (0, q.BX)(
                                                                m.View,
                                                                {
                                                                  className:
                                                                    "flt_col",
                                                                  children: [
                                                                    (0, q.BX)(
                                                                      m.View,
                                                                      {
                                                                        className:
                                                                          "flt_depart",
                                                                        children:
                                                                          [
                                                                            (0,
                                                                            q.tZ)(
                                                                              m.Text,
                                                                              {
                                                                                className:
                                                                                  "flt_time",
                                                                                children:
                                                                                  D.departTime,
                                                                              }
                                                                            ),
                                                                            (0,
                                                                            q.tZ)(
                                                                              m.Text,
                                                                              {
                                                                                className:
                                                                                  "flt_airport",
                                                                                children:
                                                                                  D.departAirportTerminal,
                                                                              }
                                                                            ),
                                                                          ],
                                                                      }
                                                                    ),
                                                                    (0, q.BX)(
                                                                      m.View,
                                                                      {
                                                                        className:
                                                                          "separator",
                                                                        children:
                                                                          [
                                                                            (0,
                                                                            q.tZ)(
                                                                              m.View,
                                                                              {
                                                                                className:
                                                                                  "spt_time",
                                                                                children:
                                                                                  D.costTime,
                                                                              }
                                                                            ),
                                                                            (0,
                                                                            q.tZ)(
                                                                              m.View,
                                                                              {
                                                                                className:
                                                                                  "spt_arr",
                                                                              }
                                                                            ),
                                                                            (0,
                                                                            q.tZ)(
                                                                              m.View,
                                                                              {
                                                                                className:
                                                                                  "spt_type color-primary",
                                                                                children:
                                                                                  D.transferStr,
                                                                              }
                                                                            ),
                                                                          ],
                                                                      }
                                                                    ),
                                                                    (0, q.BX)(
                                                                      m.View,
                                                                      {
                                                                        className:
                                                                          "flt_arrival",
                                                                        children:
                                                                          [
                                                                            (0,
                                                                            q.tZ)(
                                                                              m.Text,
                                                                              {
                                                                                className:
                                                                                  "flt_time",
                                                                                children:
                                                                                  D.arriveTime,
                                                                              }
                                                                            ),
                                                                            (0,
                                                                            q.tZ)(
                                                                              m.Text,
                                                                              {
                                                                                className:
                                                                                  "flt_airport",
                                                                                children:
                                                                                  D.arriveAirportTerminal,
                                                                              }
                                                                            ),
                                                                          ],
                                                                      }
                                                                    ),
                                                                    D.dayDiff >
                                                                      0 &&
                                                                      (0, q.tZ)(
                                                                        m.Text,
                                                                        {
                                                                          className:
                                                                            "next",
                                                                          children:
                                                                            "+" +
                                                                            D.dayDiff,
                                                                        }
                                                                      ),
                                                                  ],
                                                                }
                                                              ),
                                                              (0, q.BX)(
                                                                m.View,
                                                                {
                                                                  className:
                                                                    "price_col",
                                                                  children: [
                                                                    (0, q.BX)(
                                                                      m.View,
                                                                      {
                                                                        className:
                                                                          "top",
                                                                        children:
                                                                          [
                                                                            D.quantity <
                                                                              9 &&
                                                                              (0,
                                                                              q.tZ)(
                                                                                m.Text,
                                                                                {
                                                                                  className:
                                                                                    "quantity bdcolor-red color-red",
                                                                                  children:
                                                                                    D.quantity +
                                                                                    "张",
                                                                                }
                                                                              ),
                                                                            (0,
                                                                            q.tZ)(
                                                                              m.Text,
                                                                              {
                                                                                className:
                                                                                  "flt_price color-red " +
                                                                                  (D.showSalePrice >=
                                                                                  1e5
                                                                                    ? "small"
                                                                                    : D.showSalePrice >=
                                                                                      1e4
                                                                                    ? "middle"
                                                                                    : ""),
                                                                                children:
                                                                                  D.showSalePrice,
                                                                              }
                                                                            ),
                                                                          ],
                                                                      }
                                                                    ),
                                                                    (0, q.tZ)(
                                                                      G,
                                                                      {
                                                                        preferentialInfo:
                                                                          D.preferentialInfo,
                                                                      }
                                                                    ),
                                                                    D.couponTag &&
                                                                      (0, q.tZ)(
                                                                        m.Text,
                                                                        {
                                                                          className:
                                                                            "discount-info bdcolor-red color-red",
                                                                          children:
                                                                            D.couponTag,
                                                                        }
                                                                      ),
                                                                  ],
                                                                }
                                                              ),
                                                            ],
                                                          }),
                                                          (0, q.BX)(m.View, {
                                                            className:
                                                              "airline_info",
                                                            children: [
                                                              (0, q.tZ)(
                                                                m.Image,
                                                                {
                                                                  className:
                                                                    "airline_logo",
                                                                  src: D.airlineIcon,
                                                                }
                                                              ),
                                                              (0, q.tZ)(
                                                                m.Text,
                                                                {
                                                                  className:
                                                                    "airline_num",
                                                                  style:
                                                                    "max-width:" +
                                                                    (D.isShared
                                                                      ? "410rpx"
                                                                      : "480rpx"),
                                                                  children:
                                                                    D.flightInfo,
                                                                }
                                                              ),
                                                              (0, q.tZ)(
                                                                m.Text,
                                                                {
                                                                  className:
                                                                    "airline_share color-primary",
                                                                  children:
                                                                    D.isShared
                                                                      ? "[共享]"
                                                                      : "",
                                                                }
                                                              ),
                                                              (0, q.tZ)(
                                                                m.Text,
                                                                {
                                                                  className:
                                                                    "round-trip " +
                                                                    (g
                                                                      ? "ty"
                                                                      : "zx"),
                                                                }
                                                              ),
                                                            ],
                                                          }),
                                                        ],
                                                      }),
                                                    "default" === I &&
                                                      (0, q.tZ)(q.HY, {
                                                        children: V.map(
                                                          function (t, i) {
                                                            return (0, q.BX)(
                                                              m.View,
                                                              {
                                                                className:
                                                                  "fltlist_item",
                                                                "data-type":
                                                                  "tag",
                                                                "data-index": i,
                                                                id: "AaBc",
                                                                onClick:
                                                                  e.clickItem,
                                                                children: [
                                                                  t.tagUrl &&
                                                                    (0, q.tZ)(
                                                                      m.View,
                                                                      {
                                                                        className:
                                                                          "flight-tag",
                                                                        style:
                                                                          "background-image: url(" +
                                                                          t.tagUrl +
                                                                          ")",
                                                                      }
                                                                    ),
                                                                  (0, q.BX)(
                                                                    m.View,
                                                                    {
                                                                      className:
                                                                        "flt_intro",
                                                                      children:
                                                                        [
                                                                          (0,
                                                                          q.BX)(
                                                                            m.View,
                                                                            {
                                                                              className:
                                                                                "flt_col",
                                                                              children:
                                                                                [
                                                                                  (0,
                                                                                  q.BX)(
                                                                                    m.View,
                                                                                    {
                                                                                      className:
                                                                                        "flt_depart",
                                                                                      children:
                                                                                        [
                                                                                          (0,
                                                                                          q.tZ)(
                                                                                            m.Text,
                                                                                            {
                                                                                              className:
                                                                                                "flt_time",
                                                                                              children:
                                                                                                t.departTime,
                                                                                            }
                                                                                          ),
                                                                                          (0,
                                                                                          q.tZ)(
                                                                                            m.Text,
                                                                                            {
                                                                                              className:
                                                                                                "flt_airport",
                                                                                              children:
                                                                                                t.departAirportTerminal,
                                                                                            }
                                                                                          ),
                                                                                        ],
                                                                                    }
                                                                                  ),
                                                                                  (0,
                                                                                  q.BX)(
                                                                                    m.View,
                                                                                    {
                                                                                      className:
                                                                                        "separator",
                                                                                      children:
                                                                                        [
                                                                                          (0,
                                                                                          q.tZ)(
                                                                                            m.View,
                                                                                            {
                                                                                              className:
                                                                                                "spt_time",
                                                                                              children:
                                                                                                t.costTime,
                                                                                            }
                                                                                          ),
                                                                                          (0,
                                                                                          q.tZ)(
                                                                                            m.View,
                                                                                            {
                                                                                              className:
                                                                                                "spt_arr",
                                                                                            }
                                                                                          ),
                                                                                          (0,
                                                                                          q.tZ)(
                                                                                            m.View,
                                                                                            {
                                                                                              className:
                                                                                                "spt_type color-primary",
                                                                                              children:
                                                                                                t.isTransfer
                                                                                                  ? t.transferStr
                                                                                                  : t.jingtingStr
                                                                                                  ? t.jingtingStr
                                                                                                  : "直飞",
                                                                                            }
                                                                                          ),
                                                                                        ],
                                                                                    }
                                                                                  ),
                                                                                  (0,
                                                                                  q.BX)(
                                                                                    m.View,
                                                                                    {
                                                                                      className:
                                                                                        "flt_arrival",
                                                                                      children:
                                                                                        [
                                                                                          (0,
                                                                                          q.tZ)(
                                                                                            m.Text,
                                                                                            {
                                                                                              className:
                                                                                                "flt_time",
                                                                                              children:
                                                                                                t.arriveTime,
                                                                                            }
                                                                                          ),
                                                                                          (0,
                                                                                          q.tZ)(
                                                                                            m.Text,
                                                                                            {
                                                                                              className:
                                                                                                "flt_airport",
                                                                                              children:
                                                                                                t.arriveAirportTerminal,
                                                                                            }
                                                                                          ),
                                                                                        ],
                                                                                    }
                                                                                  ),
                                                                                  t.dayDiff >
                                                                                    0 &&
                                                                                    (0,
                                                                                    q.tZ)(
                                                                                      m.Text,
                                                                                      {
                                                                                        className:
                                                                                          "next",
                                                                                        children:
                                                                                          "+" +
                                                                                          t.dayDiff,
                                                                                      }
                                                                                    ),
                                                                                ],
                                                                            }
                                                                          ),
                                                                          (0,
                                                                          q.BX)(
                                                                            m.View,
                                                                            {
                                                                              className:
                                                                                "price_col",
                                                                              children:
                                                                                [
                                                                                  (0,
                                                                                  q.BX)(
                                                                                    m.View,
                                                                                    {
                                                                                      className:
                                                                                        "top",
                                                                                      children:
                                                                                        [
                                                                                          t.quantity <
                                                                                            9 &&
                                                                                            (0,
                                                                                            q.tZ)(
                                                                                              m.Text,
                                                                                              {
                                                                                                className:
                                                                                                  "quantity bdcolor-red color-red",
                                                                                                children:
                                                                                                  t.quantity +
                                                                                                  "张",
                                                                                              }
                                                                                            ),
                                                                                          (0,
                                                                                          q.tZ)(
                                                                                            m.Text,
                                                                                            {
                                                                                              className:
                                                                                                "flt_price color-red " +
                                                                                                (t.showSalePrice >=
                                                                                                1e5
                                                                                                  ? "small"
                                                                                                  : t.showSalePrice >=
                                                                                                    1e4
                                                                                                  ? "middle"
                                                                                                  : ""),
                                                                                              children:
                                                                                                t.showSalePrice,
                                                                                            }
                                                                                          ),
                                                                                        ],
                                                                                    }
                                                                                  ),
                                                                                  (0,
                                                                                  q.tZ)(
                                                                                    G,
                                                                                    {
                                                                                      preferentialInfo:
                                                                                        t.preferentialInfo,
                                                                                    }
                                                                                  ),
                                                                                  t.couponTag &&
                                                                                    (0,
                                                                                    q.tZ)(
                                                                                      m.Text,
                                                                                      {
                                                                                        className:
                                                                                          "discount-info bdcolor-red color-red",
                                                                                        children:
                                                                                          t.couponTag,
                                                                                      }
                                                                                    ),
                                                                                ],
                                                                            }
                                                                          ),
                                                                        ],
                                                                    }
                                                                  ),
                                                                  (0, q.BX)(
                                                                    m.View,
                                                                    {
                                                                      className:
                                                                        "airline_info",
                                                                      children:
                                                                        [
                                                                          (0,
                                                                          q.tZ)(
                                                                            m.Image,
                                                                            {
                                                                              className:
                                                                                "airline_logo",
                                                                              src: t.airlineIcon,
                                                                            }
                                                                          ),
                                                                          (0,
                                                                          q.tZ)(
                                                                            m.Text,
                                                                            {
                                                                              className:
                                                                                "airline_num",
                                                                              style:
                                                                                "max-width:" +
                                                                                (t.isShared
                                                                                  ? "410rpx"
                                                                                  : "480rpx"),
                                                                              children:
                                                                                t.flightInfo,
                                                                            }
                                                                          ),
                                                                          (0,
                                                                          q.tZ)(
                                                                            m.Text,
                                                                            {
                                                                              className:
                                                                                "airline_share color-primary",
                                                                              children:
                                                                                t.isShared
                                                                                  ? "[共享]"
                                                                                  : "",
                                                                            }
                                                                          ),
                                                                          (0,
                                                                          q.tZ)(
                                                                            m.Text,
                                                                            {
                                                                              className:
                                                                                "round-trip " +
                                                                                (g
                                                                                  ? "ty"
                                                                                  : "zx"),
                                                                            }
                                                                          ),
                                                                        ],
                                                                    }
                                                                  ),
                                                                ],
                                                              },
                                                              "index"
                                                            );
                                                          }
                                                        ),
                                                      }),
                                                    L.map(function (t, i) {
                                                      return (0,
                                                      q.tZ)(q.HY, { children: !("default" === I && t.specialTag) && (0, q.BX)(m.View, { className: "fltlist_item", "data-type": "straight", "data-index": i, id: "AaBd", onClick: e.clickItem, children: [t.tagUrl && (0, q.tZ)(m.View, { className: "flight-tag", style: "background-image: url(" + t.tagUrl + ")" }), (0, q.BX)(m.View, { className: "flt_intro", children: [(0, q.BX)(m.View, { className: "flt_col", children: [(0, q.BX)(m.View, { className: "flt_depart", children: [(0, q.tZ)(m.Text, { className: "flt_time", children: t.departTime }), (0, q.tZ)(m.Text, { className: "flt_airport", children: t.departAirportTerminal })] }), (0, q.BX)(m.View, { className: "separator", children: [(0, q.tZ)(m.View, { className: "spt_time", children: t.costTime }), (0, q.tZ)(m.View, { className: "spt_arr" }), (0, q.tZ)(m.View, { className: "spt_type color-primary", children: t.jingtingStr ? t.jingtingStr : "直飞" })] }), (0, q.BX)(m.View, { className: "flt_arrival", children: [(0, q.tZ)(m.Text, { className: "flt_time", children: t.arriveTime }), (0, q.tZ)(m.Text, { className: "flt_airport", children: t.arriveAirportTerminal })] }), t.dayDiff > 0 && (0, q.tZ)(m.Text, { className: "next", children: "+" + t.dayDiff })] }), (0, q.BX)(m.View, { className: "price_col", children: [(0, q.BX)(m.View, { className: "top", children: [t.quantity < 9 && (0, q.tZ)(m.Text, { className: "quantity bdcolor-red color-red", children: t.quantity + "张" }), (0, q.tZ)(m.Text, { className: "flt_price color-red " + (t.showSalePrice >= 1e5 ? "small" : t.showSalePrice >= 1e4 ? "middle" : ""), children: t.showSalePrice })] }), (0, q.tZ)(G, { preferentialInfo: t.preferentialInfo }), t.couponTag && (0, q.tZ)(m.Text, { className: "discount-info bdcolor-red color-red", children: t.couponTag })] })] }), (0, q.BX)(m.View, { className: "airline_info", children: [(0, q.tZ)(m.Image, { className: "airline_logo", src: t.airlineIcon }), (0, q.tZ)(m.Text, { className: "airline_num", style: "max-width:" + (t.isShared ? "410rpx" : "480rpx"), children: t.flightInfo }), (0, q.tZ)(m.Text, { className: "airline_share color-primary", children: t.isShared ? "[共享]" : "" }), (0, q.tZ)(m.Text, { className: "round-trip " + (g ? "ty" : "zx") })] })] }) });
                                                    }),
                                                    0 !== _.length &&
                                                      !(C || B) &&
                                                      (0, q.tZ)(m.View, {
                                                        className:
                                                          "time-tip-raw",
                                                        children: (0, q.tZ)(
                                                          m.Text,
                                                          {
                                                            children:
                                                              "中转航班推荐",
                                                          }
                                                        ),
                                                      }),
                                                    _ &&
                                                      _.length > 0 &&
                                                      (0, q.tZ)(q.HY, {
                                                        children: _.map(
                                                          function (t, i) {
                                                            return B ||
                                                              ("default" ===
                                                                I &&
                                                                t.specialTag)
                                                              ? (0, q.tZ)(
                                                                  m.View,
                                                                  {
                                                                    children:
                                                                      " ",
                                                                  },
                                                                  "index"
                                                                )
                                                              : (0, q.BX)(
                                                                  m.View,
                                                                  {
                                                                    className:
                                                                      "fltlist_item " +
                                                                      (t.clicked
                                                                        ? "clicked"
                                                                        : ""),
                                                                    "data-index":
                                                                      i,
                                                                    "data-type":
                                                                      "transfer",
                                                                    id: "AaBe",
                                                                    onClick:
                                                                      e.clickItem,
                                                                    children: [
                                                                      t.tagUrl &&
                                                                        (0,
                                                                        q.tZ)(
                                                                          m.View,
                                                                          {
                                                                            className:
                                                                              "flight-tag",
                                                                            style:
                                                                              "background-image: url(" +
                                                                              t.tagUrl +
                                                                              ")",
                                                                          }
                                                                        ),
                                                                      (0, q.BX)(
                                                                        m.View,
                                                                        {
                                                                          className:
                                                                            "flt_intro",
                                                                          children:
                                                                            [
                                                                              (0,
                                                                              q.BX)(
                                                                                m.View,
                                                                                {
                                                                                  className:
                                                                                    "flt_col",
                                                                                  children:
                                                                                    [
                                                                                      (0,
                                                                                      q.BX)(
                                                                                        m.View,
                                                                                        {
                                                                                          className:
                                                                                            "flt_depart",
                                                                                          children:
                                                                                            [
                                                                                              (0,
                                                                                              q.tZ)(
                                                                                                m.Text,
                                                                                                {
                                                                                                  className:
                                                                                                    "flt_time",
                                                                                                  children:
                                                                                                    t.departTime,
                                                                                                }
                                                                                              ),
                                                                                              (0,
                                                                                              q.tZ)(
                                                                                                m.Text,
                                                                                                {
                                                                                                  className:
                                                                                                    "flt_airport",
                                                                                                  children:
                                                                                                    t.departAirportTerminal,
                                                                                                }
                                                                                              ),
                                                                                            ],
                                                                                        }
                                                                                      ),
                                                                                      (0,
                                                                                      q.BX)(
                                                                                        m.View,
                                                                                        {
                                                                                          className:
                                                                                            "separator",
                                                                                          children:
                                                                                            [
                                                                                              (0,
                                                                                              q.tZ)(
                                                                                                m.View,
                                                                                                {
                                                                                                  className:
                                                                                                    "spt_time",
                                                                                                  children:
                                                                                                    t.costTime,
                                                                                                }
                                                                                              ),
                                                                                              (0,
                                                                                              q.tZ)(
                                                                                                m.View,
                                                                                                {
                                                                                                  className:
                                                                                                    "spt_arr",
                                                                                                }
                                                                                              ),
                                                                                              (0,
                                                                                              q.tZ)(
                                                                                                m.View,
                                                                                                {
                                                                                                  className:
                                                                                                    "spt_type color-primary",
                                                                                                  children:
                                                                                                    t.transferStr,
                                                                                                }
                                                                                              ),
                                                                                            ],
                                                                                        }
                                                                                      ),
                                                                                      (0,
                                                                                      q.BX)(
                                                                                        m.View,
                                                                                        {
                                                                                          className:
                                                                                            "flt_arrival",
                                                                                          children:
                                                                                            [
                                                                                              (0,
                                                                                              q.tZ)(
                                                                                                m.Text,
                                                                                                {
                                                                                                  className:
                                                                                                    "flt_time",
                                                                                                  children:
                                                                                                    t.arriveTime,
                                                                                                }
                                                                                              ),
                                                                                              (0,
                                                                                              q.tZ)(
                                                                                                m.Text,
                                                                                                {
                                                                                                  className:
                                                                                                    "flt_airport",
                                                                                                  children:
                                                                                                    t.arriveAirportTerminal,
                                                                                                }
                                                                                              ),
                                                                                            ],
                                                                                        }
                                                                                      ),
                                                                                      t.dayDiff >
                                                                                        0 &&
                                                                                        (0,
                                                                                        q.tZ)(
                                                                                          m.Text,
                                                                                          {
                                                                                            className:
                                                                                              "next",
                                                                                            children:
                                                                                              "+" +
                                                                                              t.dayDiff,
                                                                                          }
                                                                                        ),
                                                                                    ],
                                                                                }
                                                                              ),
                                                                              (0,
                                                                              q.BX)(
                                                                                m.View,
                                                                                {
                                                                                  className:
                                                                                    "price_col",
                                                                                  children:
                                                                                    [
                                                                                      (0,
                                                                                      q.BX)(
                                                                                        m.View,
                                                                                        {
                                                                                          className:
                                                                                            "top",
                                                                                          children:
                                                                                            [
                                                                                              t.quantity <
                                                                                                9 &&
                                                                                                (0,
                                                                                                q.tZ)(
                                                                                                  m.Text,
                                                                                                  {
                                                                                                    className:
                                                                                                      "quantity bdcolor-red color-red",
                                                                                                    children:
                                                                                                      t.quantity +
                                                                                                      "张",
                                                                                                  }
                                                                                                ),
                                                                                              (0,
                                                                                              q.tZ)(
                                                                                                m.Text,
                                                                                                {
                                                                                                  className:
                                                                                                    "flt_price color-red " +
                                                                                                    (t.showSalePrice >=
                                                                                                    1e5
                                                                                                      ? "small"
                                                                                                      : t.showSalePrice >=
                                                                                                        1e4
                                                                                                      ? "middle"
                                                                                                      : ""),
                                                                                                  children:
                                                                                                    t.showSalePrice,
                                                                                                }
                                                                                              ),
                                                                                            ],
                                                                                        }
                                                                                      ),
                                                                                      (0,
                                                                                      q.tZ)(
                                                                                        G,
                                                                                        {
                                                                                          preferentialInfo:
                                                                                            t.preferentialInfo,
                                                                                        }
                                                                                      ),
                                                                                      t.couponTag &&
                                                                                        (0,
                                                                                        q.tZ)(
                                                                                          m.Text,
                                                                                          {
                                                                                            className:
                                                                                              "discount-info bdcolor-red color-red",
                                                                                            children:
                                                                                              t.couponTag,
                                                                                          }
                                                                                        ),
                                                                                    ],
                                                                                }
                                                                              ),
                                                                            ],
                                                                        }
                                                                      ),
                                                                      (0, q.BX)(
                                                                        m.View,
                                                                        {
                                                                          className:
                                                                            "airline_info",
                                                                          children:
                                                                            [
                                                                              (0,
                                                                              q.tZ)(
                                                                                m.Image,
                                                                                {
                                                                                  className:
                                                                                    "airline_logo",
                                                                                  src: t.airlineIcon,
                                                                                }
                                                                              ),
                                                                              (0,
                                                                              q.tZ)(
                                                                                m.Text,
                                                                                {
                                                                                  className:
                                                                                    "airline_num",
                                                                                  style:
                                                                                    "max-width:" +
                                                                                    (t.isShared
                                                                                      ? "410rpx"
                                                                                      : "480rpx"),
                                                                                  children:
                                                                                    t.flightInfo,
                                                                                }
                                                                              ),
                                                                              (0,
                                                                              q.tZ)(
                                                                                m.Text,
                                                                                {
                                                                                  className:
                                                                                    "airline_share color-primary",
                                                                                  children:
                                                                                    t.isShared
                                                                                      ? "[共享]"
                                                                                      : "",
                                                                                }
                                                                              ),
                                                                              (0,
                                                                              q.tZ)(
                                                                                m.Text,
                                                                                {
                                                                                  className:
                                                                                    "round-trip " +
                                                                                    (g
                                                                                      ? "ty"
                                                                                      : "zx"),
                                                                                }
                                                                              ),
                                                                            ],
                                                                        }
                                                                      ),
                                                                    ],
                                                                  },
                                                                  "index"
                                                                );
                                                          }
                                                        ),
                                                      }),
                                                    L.length + _.length > 0 &&
                                                      (0, q.tZ)(m.View, {
                                                        className:
                                                          "fltlist_end " +
                                                          (d ? "iphone-x" : ""),
                                                      }),
                                                    C &&
                                                      (0, q.tZ)(m.View, {
                                                        children: (0, q.tZ)(
                                                          m.View,
                                                          {
                                                            className:
                                                              "fltlist_none",
                                                            children: k
                                                              ? "条件太苛刻了, 换个筛选条件试试看~"
                                                              : "很遗憾！没有找到航班，换个条件试试吧~",
                                                          }
                                                        ),
                                                      }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                        ],
                                      }),
                                      (0, q.BX)(m.View, {
                                        className:
                                          "fltlist_filter " +
                                          (-1 !== o || h ? "" : "active") +
                                          " " +
                                          (g ? "ty" : "zx") +
                                          " " +
                                          (d ? "iphone-x" : ""),
                                        children: [
                                          (0, q.BX)(m.View, {
                                            className:
                                              "item " + (k ? "current" : ""),
                                            id: "AaBf",
                                            onClick: this.openFilter,
                                            children: [
                                              (0, q.tZ)(m.Text, {
                                                className:
                                                  "ifont-fltscreen iconfont",
                                              }),
                                              (0, q.tZ)(m.View, {
                                                className: "txt",
                                                children: "筛选",
                                              }),
                                            ],
                                          }),
                                          (0, q.BX)(m.View, {
                                            className:
                                              "item " + (B ? "current" : ""),
                                            id: "AaBg",
                                            onClick: this.toggleStraight,
                                            children: [
                                              (0, q.tZ)(m.Text, {
                                                className:
                                                  "ifont-nonstop iconfont",
                                              }),
                                              (0, q.tZ)(m.View, {
                                                className: "txt",
                                                children: "直飞优先",
                                              }),
                                            ],
                                          }),
                                          (0, q.BX)(m.View, {
                                            className:
                                              "item " +
                                              ("price" != I || B
                                                ? ""
                                                : "current"),
                                            "data-type": "price",
                                            id: "AaBh",
                                            onClick: this.togglePriceSort,
                                            children: [
                                              (0, q.tZ)(m.Text, {
                                                className:
                                                  "ifont-fltprice iconfont",
                                              }),
                                              (0, q.tZ)(m.View, {
                                                className: "txt",
                                                children: "低价优先",
                                              }),
                                            ],
                                          }),
                                          (0, q.BX)(m.View, {
                                            className:
                                              "item " +
                                              ("time" == I ? "current" : ""),
                                            "data-type": "time",
                                            id: "AaBi",
                                            onClick: this.sortBy,
                                            children: [
                                              (0, q.tZ)(m.Text, {
                                                className:
                                                  "ifont-flttime iconfont",
                                              }),
                                              "time" == I
                                                ? (0, q.tZ)(m.View, {
                                                    className: "txt",
                                                    children:
                                                      "ascend" === S
                                                        ? "早-晚"
                                                        : "晚-早",
                                                  })
                                                : (0, q.tZ)(m.View, {
                                                    className: "txt",
                                                    children: "时间",
                                                  }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  p &&
                                    (0, q.tZ)(m.View, {
                                      className:
                                        "pop-filter " + (F ? "active" : ""),
                                      id: "AaBj",
                                      onClick: this.cancelFilter,
                                    }),
                                  (0, q.BX)(m.View, {
                                    className:
                                      "pop-filter-box " + (F ? "active" : ""),
                                    children: [
                                      (0, q.BX)(m.View, {
                                        className: "pop-filter-hd",
                                        children: [
                                          (0, q.tZ)(m.View, {
                                            className: "tit",
                                            children:
                                              -1 !== P
                                                ? "共" + P + "个航班"
                                                : "筛选航班",
                                          }),
                                          (0, q.tZ)(m.Button, {
                                            className:
                                              "btn-submit color-primary",
                                            id: "AaBk",
                                            onClick: this.confirmFilter,
                                            children: "确定",
                                          }),
                                          (0, q.tZ)(m.Button, {
                                            className: "btn-cancel",
                                            id: "AaBl",
                                            onClick: this.cancelFilter,
                                            children: "取消",
                                          }),
                                        ],
                                      }),
                                      b &&
                                        b.length > 0 &&
                                        (0, q.tZ)(m.ScrollView, {
                                          className: "pop-filter-select",
                                          scrollY: !0,
                                          children: b.map(function (t, i) {
                                            return (0,
                                            q.tZ)(q.HY, { children: (0, q.BX)(m.View, { className: "item", children: [(0, q.tZ)(m.Text, { children: t.title }), (0, q.tZ)(m.Text, { className: "icon-del", "data-index": i, id: "AaBm", onClick: e.removeFilterKey, children: "×" })] }) });
                                          }),
                                        }),
                                      (0, q.BX)(m.View, {
                                        className:
                                          "pop-filter-bd " + (g ? "ty" : "zx"),
                                        children: [
                                          (0, q.tZ)(m.View, {
                                            className: "lbox",
                                            children: X.map(function (t, i) {
                                              return (0,
                                              q.tZ)(q.HY, { children: !("舱位" === t.name && 0 !== A) && (0, q.BX)(m.View, { className: "item " + (O === i ? "cur" : "") + " " + (X[i].active ? "active" : ""), "data-index": i, id: "AaBn", onClick: e.selectKey, children: [t.name, X[i].active && (0, q.tZ)(m.Icon, { className: "i-dot bgcolor-primary" })] }) });
                                            }),
                                          }),
                                          (0, q.tZ)(m.View, {
                                            className: "rbox",
                                            children:
                                              X &&
                                              X[O] &&
                                              X[O].list.map(function (t, i) {
                                                return (0,
                                                q.tZ)(q.HY, { children: (0, q.BX)(m.View, { className: "item " + (t.isChecked ? "color-primary" : "") + " " + (t.disabled ? "disabled" : ""), "data-allow": t.disabled ? 0 : 1, "data-index": i, id: "AaBo", onClick: e.filterSelected, children: [t.airlineIcon && (0, q.tZ)(m.Image, { className: "airline_logo", src: t.airlineIcon }), t.title, (0, q.tZ)(m.Text, { className: (t.isChecked ? "ifont-checkboxed" : "ifont-checkbox") + "  iconfont" })] }) });
                                              }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  Y &&
                                    (0, q.tZ)(m.View, {
                                      className:
                                        "common-toast " + (U ? "active" : ""),
                                      children: j,
                                    }),
                                  (0, q.tZ)(T.m, {
                                    popupInfo: c,
                                    onClose: this.handlePopupClose,
                                    onClick: this.handlePopupClick,
                                    pageId: this.pageId,
                                    ubtTrace: this.ubtTrace,
                                  }),
                                ],
                              });
                            },
                          },
                        ]),
                        i
                      );
                    })(f.default.Component))
                  ) || a)
              ) || a;
          (j.enableShareAppMessage = !0),
            Page(
              (0, r.createPageConfig)(
                j,
                "pages/flightIntl/list/list",
                { root: { cn: [] } },
                {
                  navigationBarBackgroundColor: "#fff",
                  navigationBarTitleText: "",
                  navigationBarTextStyle: "black",
                  navigationStyle: "custom",
                  backgroundColor: "#fff",
                  disableScroll: !0,
                } || {}
              )
            );
        },
      },
      function (e) {
        e.O(0, [25859, 19559, 11216, 68592], function () {
          return (function (t) {
            return e((e.s = t));
          })(79749);
        }),
          e.O();
      },
    ]);
})();
