!(function () {
  "use strict";
  require("../sub-vendors.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [74557],
      {
        40680: function (t, e, a) {
          var i,
            r = a(32180),
            n = a(57042),
            s = a(24460),
            c = a(21867),
            o = a(86066),
            l = a(45023),
            d = a(298),
            h = a(52500),
            p = a(71515),
            m = a(92954),
            y = a.n(m),
            u = a(48792),
            f = a.n(u),
            g = a(81957),
            D = a(3205),
            C = a(98920),
            w = a(2326),
            v = a(79792),
            Z = a(8271),
            N = a.n(Z),
            k = a(79910),
            T = a(4102),
            V = a(2809),
            x = a(58676),
            _ = a(29386),
            b = a(48813),
            A = w.Z.getDateStr(),
            P = "YYYY-MM-DD",
            F = v.default.isTieyou,
            B = [
              { title: "一", value: 1 },
              { title: "二", value: 2 },
              { title: "三", value: 3 },
              { title: "四", value: 4 },
              { title: "五", value: 5 },
              { title: "六", value: 6 },
              { title: "日", value: 7 },
            ],
            I = "xcx_flt_multprice_zx",
            L = F ? "10650045480" : "10650045478",
            S = C.Z.getInstance("FLIGHT_PRICE_PARITY_STORE"),
            X = {
              pageId: L,
              data: {
                source: 0,
                isTieyou: F,
                isIPhoneX: V.ZP.isIPhoneX,
                isTop: !0,
                showTopTitle: !1,
                weekDayFilters: [],
                filterStr: "周几出发",
                leftPercent: 0,
                rightPercent: 0,
                minDays: 2,
                maxDays: 14,
                flightList: [],
              },
              onLoad: function (t) {
                var e = t.data || S.get() || {};
                if ("string" == typeof e)
                  try {
                    e = JSON.parse(e);
                  } catch (t) {
                    console.log(t);
                  }
                var a = e,
                  i = a.departCity,
                  r = void 0 === i ? "上海" : i,
                  n = a.departCityCode,
                  s = void 0 === n ? "SHA" : n,
                  c = a.departCountryId,
                  o = void 0 === c ? 1 : c,
                  l = a.arriveCities,
                  h = void 0 === l ? [] : l,
                  p = a.segmentType,
                  m = void 0 === p ? 1 : p,
                  y = a.minDays,
                  u = void 0 === y ? 2 : y,
                  f = a.maxDays,
                  g = void 0 === f ? 14 : f,
                  D = a.source,
                  C = void 0 === D ? 0 : D,
                  v =
                    e.weekDayFilters ||
                    B.map(function (t) {
                      return (0, d.Z)((0, d.Z)({}, t), {}, { selected: !1 });
                    }),
                  Z = e.startDate || "",
                  k = e.endDate || "";
                (e.startDate && !w.Z.compareTodayToDate(Z)) || (Z = A),
                  (e.endDate && !w.Z.compareDateToDate(Z, k)) ||
                    (k = N()(A).add(2, "day").format(P)),
                  this.setData({
                    departCity: decodeURIComponent(r),
                    departCityCode: s,
                    departCountryId: o,
                    arriveCities: h,
                    startDate: Z,
                    endDate: k,
                    arriveCitiesStr: h
                      .map(function (t) {
                        return t.name;
                      })
                      .join("、"),
                    startDateStr: N()(Z).format("MM.DD"),
                    endDateStr: N()(k).format("MM.DD"),
                    segmentType: m,
                    weekDayFilters: v,
                    minDays: u,
                    maxDays: g,
                    source: C,
                    filterStr:
                      (2 === m ? "".concat(u, "-").concat(g, "天 ") : "") +
                      (v.some(function (t) {
                        return t.selected;
                      })
                        ? v
                            .filter(function (t) {
                              return t.selected;
                            })
                            .map(function (t) {
                              return "周".concat(t.title);
                            })
                            .join("、") + "出发"
                        : "周几出发"),
                  }),
                  this.getFlightList();
              },
              setUbtTrace: function () {
                var t = this.data,
                  e = t.arriveCities,
                  a = t.startDateStr,
                  i = t.endDateStr,
                  r = t.weekDayFilters,
                  n = t.segmentType,
                  s = t.flightList,
                  c = t.minDays,
                  o = t.maxDays;
                this.ubtTrace("200853", {
                  Pagecode: L,
                  arrivecitylist: e.map(function (t) {
                    return t.name;
                  }),
                  traveldate: "".concat(a, "-").concat(i),
                  departweek: r
                    .filter(function (t) {
                      return t.selected;
                    })
                    .map(function (t) {
                      return t.title;
                    }),
                  traveldays: 1 == n ? null : "".concat(c, "-").concat(o, "天"),
                  triptype: 1 == n ? "单程" : "往返",
                  airlinelist: s,
                  TriggerType: "Load",
                });
              },
              onReady: function () {
                var t = this,
                  e = this.data,
                  a = e.minDays,
                  i = e.maxDays;
                y().nextTick(function () {
                  var e = y().createSelectorQuery(),
                    r = t;
                  e.select(".date-select")
                    .boundingClientRect(function (t) {
                      var e = t.left,
                        n = t.right;
                      (r._sliderLeft = e), (r._sliderRight = n);
                      r.setData({
                        leftPercent: ((a - 2) / 13) * 100,
                        rightPercent: ((14 - i) / 13) * 100,
                      });
                    })
                    .exec();
                });
              },
              setQueryStore: function () {
                var t = this.data,
                  e = t.departCity,
                  a = t.departCityCode,
                  i = t.departCountryId,
                  r = t.arriveCities,
                  n = t.startDate,
                  s = t.endDate,
                  c = t.segmentType,
                  o = t.weekDayFilters,
                  l = t.minDays,
                  d = t.maxDays;
                S.set({
                  departCity: e,
                  departCityCode: a,
                  departCountryId: i,
                  arriveCities: r,
                  startDate: n,
                  endDate: s,
                  segmentType: c,
                  weekDayFilters: o,
                  minDays: l,
                  maxDays: d,
                });
              },
              chooseCity: function (t) {
                var e = this,
                  a = t.currentTarget.dataset.type,
                  i = this.data,
                  r = i.departCountryId,
                  n = i.arriveCities,
                  s = i.segmentType,
                  c =
                    "arrive" === a
                      ? !n.some(function (t) {
                          return 1 === t.countryId;
                        })
                      : 2 === r,
                  o = n.map(function (t) {
                    var e;
                    return 2 ===
                      (null === (e = t.code) || void 0 === e
                        ? void 0
                        : e.length)
                      ? t
                      : t.code;
                  });
                D.Z.flightCity({
                  data: {
                    title: "arrive" === a ? "请选择到达城市" : "请选择出发城市",
                    intlHidden: v.default.isAlipay,
                    isIntl: !v.default.isAlipay && c,
                    multiple: "arrive" === a,
                    multiSelectedCities: o,
                    segmentType: s,
                  },
                  callback: function (t) {
                    console.log(t);
                    var i = t.cityName,
                      r = t.cityCode,
                      n = t.countryID;
                    "arrive" === a
                      ? e.setData({
                          arriveCities: t.map(function (t) {
                            return {
                              name: t.cityName,
                              code: t.cityCode,
                              countryId: t.countryID,
                            };
                          }),
                          arriveCitiesStr: t
                            .map(function (t) {
                              return t.cityName;
                            })
                            .join("、"),
                        })
                      : e.setData({
                          departCity: i,
                          departCityCode: r,
                          departCountryId: n,
                        }),
                      e.getFlightList();
                  },
                });
              },
              toCalendar: function () {
                var t = this,
                  e = this.data,
                  a = e.startDate,
                  i = e.endDate;
                D.Z.calendar(
                  {
                    checkInDate: a,
                    checkOutDate: i,
                    checkInDesc: "最早出发日期",
                    checkOutDesc: "最晚出发日期",
                    checkOutPlaceHolderDesc: "最晚出发",
                    beginDate: A,
                    endDate: N()(A).add(179, "day").format(P),
                    title: "选择日期",
                    type: "checkInOut",
                    bu: "flight",
                  },
                  function (e) {
                    var a = e.checkInDate,
                      i = e.checkOutDate;
                    t.setData({
                      startDate: a,
                      endDate: i,
                      startDateStr: N()(a).format("MM.DD"),
                      endDateStr: N()(i).format("MM.DD"),
                    }),
                      t.getFlightList();
                  }
                );
              },
              switchRoundTrip: function (t) {
                var e = t.currentTarget.dataset.type,
                  a = this.data,
                  i = a.segmentType,
                  r = a.minDays,
                  n = a.maxDays,
                  s = a.weekDayFilters;
                i !== parseInt(e) &&
                  (this.setData({
                    segmentType: parseInt(e),
                    filterStr:
                      (2 === parseInt(e)
                        ? "".concat(r, "-").concat(n, "天 ")
                        : "") +
                      (s.some(function (t) {
                        return t.selected;
                      })
                        ? s
                            .filter(function (t) {
                              return t.selected;
                            })
                            .map(function (t) {
                              return "周".concat(t.title);
                            })
                            .join("、") + "出发"
                        : "周几出发"),
                  }),
                  this.getFlightList());
              },
              openFilterPanel: function () {
                var t = this,
                  e = this.data.weekDayFilters;
                (this._week_filter_backup = k.Z.deepCopy(e)),
                  this.setData({
                    mask: !0,
                    maskType: "filter",
                    showFilter: !0,
                  }),
                  setTimeout(function () {
                    t.setData({ transition: !0 });
                  }, 10);
              },
              closeFilterPanel: function () {
                this.setData({
                  weekDayFilters: this._week_filter_backup,
                  mask: !1,
                  maskType: "",
                  showFilter: !1,
                  transition: !1,
                });
              },
              sliderChange: function (t) {
                var e = t.changedTouches[0].pageX,
                  a = t.target.dataset.type,
                  i = this._sliderRight - this._sliderLeft,
                  r = e - this._sliderLeft,
                  n = r / i;
                if ("start" === a) {
                  if (r <= 0 || r > (this._rightOffset || i)) return;
                  (this._leftOffset = r),
                    this.setData({
                      leftPercent: 100 * n,
                      minDays: Math.floor(2 + 13 * n),
                    });
                } else {
                  if (r >= i || r < (this._leftOffset || 0)) return;
                  (this._rightOffset = r),
                    this.setData({
                      rightPercent: 100 - 100 * n,
                      maxDays: Math.floor(2 + 13 * n),
                    });
                }
              },
              handleWeekDayClick: function (t) {
                var e = t.currentTarget.dataset.index,
                  a = this.data.weekDayFilters,
                  i = a[e].selected;
                this.setData(
                  (0, l.Z)(
                    {},
                    "weekDayFilters[".concat(e, "]"),
                    (0, d.Z)((0, d.Z)({}, a[e]), {}, { selected: !i })
                  )
                );
              },
              handleFilterConfirm: function () {
                var t = this.data,
                  e = t.segmentType,
                  a = t.minDays,
                  i = t.maxDays,
                  r = t.weekDayFilters;
                this.setData({
                  mask: !1,
                  maskType: "",
                  showFilter: !1,
                  transition: !1,
                  filterStr:
                    (2 === e ? "".concat(a, "-").concat(i, "天 ") : "") +
                    (r.some(function (t) {
                      return t.selected;
                    })
                      ? r
                          .filter(function (t) {
                            return t.selected;
                          })
                          .map(function (t) {
                            return "周".concat(t.title);
                          })
                          .join("、") + "出发"
                      : "周几出发"),
                }),
                  this.getFlightList();
              },
              getFlightList: function () {
                var t = this;
                console.log("get flight list");
                var e = this.data,
                  a = e.departCityCode,
                  i = e.startDate,
                  r = e.endDate,
                  n = e.arriveCities,
                  s = e.segmentType,
                  c = e.weekDayFilters,
                  o = e.minDays,
                  l = e.maxDays,
                  d = {
                    data: {
                      source: e.source,
                      startDate: i,
                      endDate: r,
                      depCode: a,
                      arrCodeList: n.map(function (t) {
                        return t.code;
                      }),
                      arrHazyList: n.length > 0 ? [] : ["NATL-QSJ"],
                      segmentType: s,
                      weekList: c
                        .filter(function (t) {
                          return t.selected;
                        })
                        .map(function (t) {
                          return t.value;
                        }),
                      stayDayList: [],
                    },
                  };
                if (2 === s)
                  for (var h = o; h <= l; ) d.data.stayDayList.push(h), h++;
                this.setData({
                  showSkeleton: !0,
                  flightList: [],
                  noFlight: !1,
                }),
                  (0, _.A)(d)
                    .then(function (e) {
                      var a = e || {},
                        i = a.resultCode,
                        r = a.resultMessage;
                      if (1 !== i)
                        return t.showCommonDialog(
                          r || "暂无航班，请更换搜索条件"
                        );
                      var n = (e.data || {}).resultList || [];
                      if (0 === n.length)
                        return t.setData({ noFlight: !0 }), t.hideSkeleton();
                      t.setData(
                        { flightList: t.handleFlightListData(n) },
                        function () {
                          t.setUbtTrace();
                        }
                      ),
                        t.hideSkeleton(),
                        t.setQueryStore();
                    })
                    .catch(function (t) {
                      return console.log(t);
                    });
              },
              handleFlightListData: function (t) {
                return t.map(function (t) {
                  var e = N()(t.depDate),
                    a = N()(t.retDate || "");
                  return (0,
                  d.Z)((0, d.Z)({}, t), {}, { dptMonthDay: e.format("MM.DD"), dptWeekDay: T.Z.getWeekDay(t.depDate), arrMonthDay: 2 === t.segmentType ? a.format("MM.DD") : "", arrWeekDay: 2 === t.segmentType ? T.Z.getWeekDay(t.retDate) : "" });
                });
              },
              handleFlightItemClick: function (t) {
                var e = t.currentTarget.dataset.index,
                  a = this.data.flightList[e],
                  i = {
                    departCity: a.depCityName,
                    departCityCode: a.depCityCode,
                    arriveCity: a.arrCityName,
                    arriveCityCode: a.arrCityCode,
                    departDate: a.depDate,
                    returnDate: a.retDate,
                    isDomestic: a.isDomestic,
                  };
                this.toListPage(i);
              },
              toListPage: function (t) {
                t.isDomestic
                  ? t.returnDate
                    ? this.navigateTo({
                        url: "/pages/flight/roundtrip/roundtrip?departCity="
                          .concat(t.departCity, "&departCityCode=")
                          .concat(t.departCityCode, "&arriveCity=")
                          .concat(t.arriveCity, "&arriveCityCode=")
                          .concat(t.arriveCityCode, "&departDate=")
                          .concat(t.departDate, "&returnDate=")
                          .concat(t.returnDate, "&fromPage=")
                          .concat(I),
                      })
                    : this.navigateTo({
                        url: "/pages/flight/list/list?departCity="
                          .concat(t.departCity, "&departCityCode=")
                          .concat(t.departCityCode, "&arriveCity=")
                          .concat(t.arriveCity, "&arriveCityCode=")
                          .concat(t.arriveCityCode, "&departDate=")
                          .concat(t.departDate, "&nearby=1&fromPage=")
                          .concat(I),
                      })
                  : this.navigateTo({
                      url: "/pages/flightIntl/list/list?departCity="
                        .concat(t.departCity, "&departCityCode=")
                        .concat(t.departCityCode, "&arriveCity=")
                        .concat(t.arriveCity, "&arriveCityCode=")
                        .concat(t.arriveCityCode, "&departDate=")
                        .concat(t.departDate, "&nearby=")
                        .concat(t.returnDate ? 0 : 1)
                        .concat(
                          t.returnDate ? "&returnDate=" + t.returnDate : "",
                          "&fromPage="
                        )
                        .concat(I),
                    });
              },
              toAllLowerPriceList: function (t) {
                var e = t.currentTarget.dataset.index,
                  a = this.data,
                  i = a.departCity,
                  r = a.departCityCode,
                  n = a.departCountryId,
                  s = a.flightList,
                  c = a.segmentType,
                  o = s[e],
                  l = o.depCityName,
                  d = o.depCityCode,
                  h = o.arrCityName,
                  p = o.arrCityCode,
                  m = o.depDate,
                  y = o.retDate,
                  u = o.isDomestic;
                if (1 === c) {
                  var f = {
                    departCity: l,
                    departCityCode: d,
                    arriveCity: h,
                    arriveCityCode: p,
                    departDate: m,
                    isDomestic: u,
                  };
                  return this.toListPage(f);
                }
                var g = "?departureCityName="
                  .concat(i, "&departureCityCode=")
                  .concat(r, "&arrivalCityName=")
                  .concat(h, "&arrivalCityCode=")
                  .concat(p, "&departureInternational=")
                  .concat(2 === n ? 1 : 0, "&arrivalInternational=")
                  .concat(u ? 0 : 1, "&round=")
                  .concat(y ? 1 : 0, "&hideHeader=1&partner=")
                  .concat(v.default.partner, "&fromPage=")
                  .concat(I);
                k.Z.commonNavigator(
                  ""
                    .concat(
                      "https://market.suanya.com/activity/flight/2019tejiasearch/"
                    )
                    .concat(g)
                );
              },
              onBack: function () {
                var t = y().getCurrentPages();
                console.log(t),
                  t.length <= 1
                    ? k.Z.relaunchHome("flight")
                    : this.navigateBack();
              },
              onPageScroll: function (t) {
                if (!v.default.isAlipay) {
                  var e = (t || {}).scrollTop,
                    a = void 0 === e ? 0 : e,
                    i = this.data,
                    r = i.isTop,
                    n = i.showTopTitle;
                  a > 0 && r
                    ? this.setData({ isTop: !1 })
                    : 0 !== a || r || this.setData({ isTop: !0 }),
                    a >= 166 && !n
                      ? this.setData({ showTopTitle: !0 })
                      : a < 166 && n && this.setData({ showTopTitle: !1 });
                }
              },
              hideSkeleton: function () {
                this.setData({ showSkeleton: !1 });
              },
              closeMask: function () {
                var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : { currentTarget: { dataset: "" } },
                  e = t.currentTarget.dataset.type;
                "filter" === e && this.closeFilterPanel();
              },
              noop: function () {},
            },
            M =
              (0, g.h)()(
                (i =
                  f()(X)(
                    (i = (function (t) {
                      (0, c.Z)(a, t);
                      var e = (0, o.Z)(a);
                      function a() {
                        return (0, n.Z)(this, a), e.apply(this, arguments);
                      }
                      return (
                        (0, s.Z)(a, [
                          {
                            key: "render",
                            value: function () {
                              var t = this,
                                e = this.data,
                                a = e.isIPhoneX,
                                i = e.isTop,
                                r = e.isBaidu,
                                n = e.showTopTitle,
                                s = e.departCity,
                                c = e.arriveCitiesStr,
                                o = e.startDateStr,
                                l = e.endDateStr,
                                d = e.isTieyou,
                                h = e.segmentType,
                                m = e.filterStr,
                                y = e.showSkeleton,
                                u = e.flightList,
                                f = e.noFlight,
                                g = e.transition,
                                D = e.mask,
                                C = e.maskType,
                                w = e.showFilter,
                                v = e.minDays,
                                Z = e.maxDays,
                                N = e.leftPercent,
                                k = e.rightPercent,
                                T = e.weekDayFilters,
                                _ = e.isAlipay,
                                A = V.ZP.statusBarHeight
                                  ? "padding-top: ".concat(
                                      V.ZP.statusBarHeight,
                                      "px"
                                    )
                                  : "";
                              return (0, b.BX)(b.HY, {
                                children: [
                                  (0, b.BX)(p.View, {
                                    className: "topbox " + (a ? "iphone" : ""),
                                    style: A,
                                    children: [
                                      !_ &&
                                        (0, b.BX)(p.View, {
                                          className:
                                            "top-bar flex-align-items-center " +
                                            (i ? "" : "fixed"),
                                          children: [
                                            !r &&
                                              (0, b.tZ)(p.Text, {
                                                className:
                                                  "ifont2-fanhui_linea_24 iconfont2",
                                                id: "AZAN",
                                                onClick: this.onBack,
                                              }),
                                            n
                                              ? (0, b.BX)(p.View, {
                                                  className:
                                                    "top-tit flex-center flex-column flex-1",
                                                  children: [
                                                    (0, b.tZ)(p.View, {
                                                      className: "tit",
                                                      children:
                                                        s +
                                                        "-" +
                                                        (c || "全世界"),
                                                    }),
                                                    (0, b.tZ)(p.View, {
                                                      className: "txt",
                                                      children:
                                                        "日期 " + o + "-" + l,
                                                    }),
                                                  ],
                                                })
                                              : (0, b.tZ)(p.View, {
                                                  className:
                                                    "top-tit flex-center flex-1",
                                                  children: "找低价机票",
                                                }),
                                          ],
                                        }),
                                      (0, b.BX)(p.View, {
                                        className:
                                          "top-searchbox " + (i ? "" : "mt188"),
                                        children: [
                                          (0, b.tZ)(p.View, {
                                            className: "from",
                                            "data-type": "depart",
                                            "data-ubt-key":
                                              "flt_lowprice_priceradio_departcity_button",
                                            id: "AZAO",
                                            onClick: this.chooseCity,
                                            children: s,
                                          }),
                                          (0, b.tZ)(p.Icon, {
                                            className: "icon-flight",
                                          }),
                                          (0, b.tZ)(p.View, {
                                            className: "to",
                                            "data-type": "arrive",
                                            "data-ubt-key":
                                              "flt_lowprice_priceradio_arrivecity_button",
                                            id: "AZAP",
                                            onClick: this.chooseCity,
                                            children: c || "全世界",
                                          }),
                                          (0, b.BX)(p.View, {
                                            className: "date",
                                            "data-ubt-key":
                                              "flt_lowprice_priceradio_traveldate_button",
                                            id: "AZAQ",
                                            onClick: this.toCalendar,
                                            children: [
                                              (0, b.tZ)(p.View, {
                                                className: "label",
                                                children: "出发日期范围",
                                              }),
                                              (0, b.tZ)(p.Text, {
                                                className: "strong",
                                                children: o,
                                              }),
                                              "-",
                                              (0, b.tZ)(p.Text, {
                                                className: "strong",
                                                children: l,
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, b.BX)(p.View, {
                                    className: "wrap",
                                    children: [
                                      (0, b.BX)(p.View, {
                                        className: "part-hd",
                                        children: [
                                          (0, b.BX)(p.View, {
                                            className:
                                              "part-type " + (d ? "ty" : "zx"),
                                            children: [
                                              (0, b.tZ)(p.View, {
                                                className:
                                                  "item " +
                                                  (1 === h ? "cur" : ""),
                                                "data-type": "1",
                                                "data-ubt-key":
                                                  "flt_lowprice_priceradio_singleorroundtrip_tab",
                                                id: "AZAR",
                                                onClick: this.switchRoundTrip,
                                                children: "单程",
                                              }),
                                              (0, b.tZ)(p.View, {
                                                className:
                                                  "item " +
                                                  (2 === h ? "cur" : ""),
                                                "data-type": "2",
                                                id: "AZAS",
                                                onClick: this.switchRoundTrip,
                                                children: "往返",
                                              }),
                                              (0, b.tZ)(p.View, {
                                                className: "scroll",
                                              }),
                                            ],
                                          }),
                                          (0, b.BX)(p.View, {
                                            className: "part-time",
                                            "data-ubt-key":
                                              "flt_lowprice_priceradio_traveldays_button",
                                            id: "AZAT",
                                            onClick: this.openFilterPanel,
                                            children: [
                                              (0, b.tZ)(p.Text, {
                                                className:
                                                  "label color-primary",
                                                children: m,
                                              }),
                                              (0, b.tZ)(p.Text, {
                                                className: "ifont-arr iconfont",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      y &&
                                        (0, b.tZ)(p.View, {
                                          id: "AZAU",
                                          onClick: function (t) {
                                            t.stopPropagation();
                                          },
                                          catchMove: !0,
                                          children: [0, 1, 2, 3, 4, 5, 6].map(
                                            function () {
                                              return (0, b.BX)(
                                                p.View,
                                                {
                                                  className: "skeleton-item",
                                                  children: [
                                                    (0, b.tZ)(p.View, {
                                                      className: "left",
                                                      children: (0, b.tZ)(
                                                        p.View,
                                                        { className: "image" }
                                                      ),
                                                    }),
                                                    (0, b.BX)(p.View, {
                                                      className: "right",
                                                      children: [
                                                        (0, b.tZ)(p.View, {
                                                          className: "title",
                                                        }),
                                                        (0, b.tZ)(p.View, {
                                                          className: "desc",
                                                        }),
                                                        (0, b.tZ)(p.View, {
                                                          className: "desc2",
                                                        }),
                                                        (0, b.tZ)(p.View, {
                                                          className: "bottom",
                                                          children: (0, b.tZ)(
                                                            p.View,
                                                            {
                                                              className:
                                                                "price",
                                                            }
                                                          ),
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                },
                                                "index"
                                              );
                                            }
                                          ),
                                        }),
                                      u.map(function (e, a) {
                                        var i;
                                        return (0, b.tZ)(b.HY, {
                                          children:
                                            !y &&
                                            (0, b.BX)(p.View, {
                                              className: "part-list",
                                              children: [
                                                (0, b.BX)(p.View, {
                                                  className: "lbox",
                                                  children: [
                                                    e.tag &&
                                                      (0, b.tZ)(p.View, {
                                                        className: "tag",
                                                        children: e.tag,
                                                      }),
                                                    (0, b.tZ)(p.Image, {
                                                      src: e.arrCityImgUrl,
                                                      className: "img",
                                                    }),
                                                  ],
                                                }),
                                                (0, b.BX)(p.View, {
                                                  className: "cont",
                                                  children: [
                                                    (0, b.BX)(p.View, {
                                                      className: "past-list-hd",
                                                      children: [
                                                        (0, b.BX)(p.View, {
                                                          className: "tit",
                                                          children: [
                                                            e.depCityName,
                                                            "-",
                                                            e.arrCityName,
                                                          ],
                                                        }),
                                                        (0, b.tZ)(p.View, {
                                                          className: "tgrey",
                                                          children: e.country,
                                                        }),
                                                        (0, b.BX)(p.View, {
                                                          className: "more",
                                                          "data-index": a,
                                                          "data-ubt-key":
                                                            "flt_lowprice_priceradio_alllowprice_button",
                                                          id: "AZAV",
                                                          onClick:
                                                            t.toAllLowerPriceList,
                                                          children: [
                                                            "全部低价",
                                                            (0, b.tZ)(p.Text, {
                                                              className:
                                                                "ifont-arr iconfont",
                                                            }),
                                                          ],
                                                        }),
                                                      ],
                                                    }),
                                                    e.scenics &&
                                                      (0, b.tZ)(p.View, {
                                                        className:
                                                          "past-list-tag " +
                                                          (d ? "ty" : "zx"),
                                                        children: e.scenics.map(
                                                          function (t) {
                                                            return (0, b.tZ)(
                                                              p.View,
                                                              {
                                                                className:
                                                                  "item",
                                                                children: t,
                                                              },
                                                              "index"
                                                            );
                                                          }
                                                        ),
                                                      }),
                                                    (0, b.BX)(p.View, {
                                                      className:
                                                        "past-list-info",
                                                      children: [
                                                        (0, b.tZ)(p.View, {
                                                          className: "strong",
                                                          children:
                                                            e.dptMonthDay +
                                                            " " +
                                                            e.dptWeekDay,
                                                        }),
                                                        2 === e.segmentType &&
                                                          (0, b.BX)(p.View, {
                                                            className: "strong",
                                                            children: [
                                                              (0, b.tZ)(
                                                                p.Text,
                                                                {
                                                                  style:
                                                                    "margin-right: 8rpx",
                                                                  children: "-",
                                                                }
                                                              ),
                                                              e.arrMonthDay +
                                                                " " +
                                                                e.arrWeekDay,
                                                            ],
                                                          }),
                                                        e.costTime &&
                                                          (0, b.tZ)(p.View, {
                                                            className: "item",
                                                            children:
                                                              e.costTime,
                                                          }),
                                                        e.stayDays &&
                                                          (0, b.tZ)(p.View, {
                                                            className: "item",
                                                            children:
                                                              e.stayDays,
                                                          }),
                                                        e.flightTrip &&
                                                          (0, b.tZ)(p.View, {
                                                            className: "item",
                                                            children:
                                                              e.flightTrip,
                                                          }),
                                                      ],
                                                    }),
                                                    (0, b.BX)(p.View, {
                                                      className:
                                                        "past-list-price color-red",
                                                      "data-index": a,
                                                      "data-ubt-key":
                                                        "flt_lowprice_priceradio_airlinelowprice_button",
                                                      id: "AZAW",
                                                      onClick:
                                                        t.handleFlightItemClick,
                                                      children: [
                                                        e.lowestPriceTag &&
                                                          (0, b.tZ)(p.Image, {
                                                            className:
                                                              "lowest-price-tag",
                                                            src: e.lowestPriceTag,
                                                          }),
                                                        (0, b.tZ)(p.View, {
                                                          className: "price",
                                                          children: e.price,
                                                        }),
                                                        (0, b.tZ)(p.Text, {
                                                          className:
                                                            "ifont-go iconfont",
                                                        }),
                                                      ],
                                                    }),
                                                    (0, b.tZ)(p.View, {
                                                      className:
                                                        "past-list-jiang color-red",
                                                      children:
                                                        null ===
                                                          (i = e.priceTags) ||
                                                        void 0 === i
                                                          ? void 0
                                                          : i.map(function (t) {
                                                              return (0,
                                                              b.BX)(b.HY, { children: [0 === t.style && (0, b.BX)(b.HY, { children: [t.icon && (0, b.tZ)(p.Image, { className: "icon", src: t.icon }), (0, b.tZ)(p.View, { className: "txt", children: t.text })] }), 1 === t.style && (0, b.tZ)(b.HY, { children: (0, b.tZ)(p.View, { className: "tag", children: t.text }) })] });
                                                            }),
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                        });
                                      }),
                                      f &&
                                        (0, b.BX)(p.View, {
                                          className: "list-none",
                                          children: [
                                            (0, b.tZ)(p.Icon, {
                                              className:
                                                "img-selnone " +
                                                (d ? "ty" : "zx"),
                                            }),
                                            (0, b.tZ)(p.View, {
                                              className: "tit",
                                              children: "暂无合适的行程",
                                            }),
                                            (0, b.tZ)(p.View, {
                                              className: "txt",
                                              children:
                                                "你可以尝试删除筛选或扩大搜索范围",
                                            }),
                                            (0, b.tZ)(p.View, {
                                              className:
                                                "btn-reload " +
                                                (d ? "ty" : "zx"),
                                              id: "AZAX",
                                              onClick: this.getFlightList,
                                              children: "重新加载",
                                            }),
                                          ],
                                        }),
                                    ],
                                  }),
                                  D &&
                                    (0, b.tZ)(p.View, {
                                      className:
                                        "pop-mask " + (g ? "active" : ""),
                                      "data-type": C,
                                      id: "AZAY",
                                      onClick: function (e) {
                                        e.stopPropagation(), t.closeMask(e);
                                      },
                                      catchMove: !0,
                                    }),
                                  (0, b.BX)(p.View, {
                                    className:
                                      "pop-botm " + (w ? "active" : ""),
                                    children: [
                                      (0, b.BX)(p.View, {
                                        className: "pop-botm-hd",
                                        id: "AZAZ",
                                        onClick: function (t) {
                                          t.stopPropagation();
                                        },
                                        catchMove: !0,
                                        children: [
                                          (0, b.tZ)(p.View, {
                                            className: "tit",
                                            children: "出行时间偏好",
                                          }),
                                          (0, b.tZ)(p.View, {
                                            className: "icon-closed",
                                            id: "AZAa",
                                            onClick: this.closeFilterPanel,
                                          }),
                                        ],
                                      }),
                                      (0, b.BX)(p.View, {
                                        className: "pop-botm-bd",
                                        id: "AZAb",
                                        onClick: function (t) {
                                          t.stopPropagation();
                                        },
                                        catchMove: !0,
                                        children: [
                                          !(w && 2 !== h) &&
                                            (0, b.BX)(p.View, {
                                              className: "txt",
                                              children: [
                                                "出行天数:",
                                                (0, b.tZ)(p.Text, {
                                                  className: "color-primary",
                                                  children:
                                                    v + "天-" + Z + "天",
                                                }),
                                              ],
                                            }),
                                          !(w && 2 !== h) &&
                                            (0, b.BX)(p.View, {
                                              className: "date-select",
                                              children: [
                                                (0, b.tZ)(p.View, {
                                                  className: "circle",
                                                  style: "left:" + N + "%",
                                                  "data-type": "start",
                                                  onTouchMove:
                                                    this.sliderChange,
                                                }),
                                                (0, b.tZ)(p.View, {
                                                  className:
                                                    "line bgcolor-primary",
                                                  style:
                                                    "left:" +
                                                    N +
                                                    "%;right:" +
                                                    k +
                                                    "%",
                                                }),
                                                (0, b.tZ)(p.View, {
                                                  className: "circle",
                                                  style: "right:" + k + "%",
                                                  "data-type": "end",
                                                  onTouchMove:
                                                    this.sliderChange,
                                                }),
                                              ],
                                            }),
                                          (0, b.tZ)(p.View, {
                                            className: "txt",
                                            children: "周几出发:",
                                          }),
                                          (0, b.tZ)(p.View, {
                                            className:
                                              "week-select " +
                                              (d ? "ty" : "zx"),
                                            children: T.map(function (e, a) {
                                              return (0,
                                              b.BX)(p.View, { className: "item " + (e.selected ? "cur" : ""), "data-index": a, id: "AZAc", onClick: t.handleWeekDayClick, children: [e.title, e.selected && (0, b.tZ)(p.Text, { className: "ifont-selected iconfont" })] }, "index");
                                            }),
                                          }),
                                        ],
                                      }),
                                      (0, b.tZ)(p.View, {
                                        className: "pop-botm-btn",
                                        children: (0, b.tZ)(p.Button, {
                                          className: "btn-primary btn-submit",
                                          id: "AZAd",
                                          onClick: this.handleFilterConfirm,
                                          children: "确定",
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, b.tZ)(x.Z, {
                                    ref: function (e) {
                                      t.onDialogAttach(e);
                                    },
                                  }),
                                ],
                              });
                            },
                          },
                        ]),
                        a
                      );
                    })(h.default.Component))
                  ) || i)
              ) || i;
          Page(
            (0, r.createPageConfig)(
              M,
              "pages/flightSecondary/priceparity/priceparity",
              { root: { cn: [] } },
              {
                navigationBarTitleText: "多地比价",
                backgroundColor: "#f5f5f5",
                navigationBarTextStyle: "white",
                navigationStyle: "custom",
              } || {}
            )
          );
        },
      },
      function (t) {
        t.O(0, [21969, 19559, 11216, 68592], function () {
          return (function (e) {
            return t((t.s = e));
          })(40680);
        }),
          t.O();
      },
    ]);
})();
