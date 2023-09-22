!(function () {
  "use strict";
  require("../sub-vendors.js"),
    require("../sub-common/87dd7ca508f26cc44a96a97518946752.js"),
    require("../sub-common/1775d7c9f65b9a6f532fd61b25d0faaf.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [34059],
      {
        47513: function (e, t, i) {
          var a,
            r = i(32180),
            s = i(57042),
            n = i(24460),
            o = i(21867),
            c = i(86066),
            l = i(45023),
            d = i(298),
            h = i(22276),
            m = i(90129),
            u = i(90983),
            f = i(52500),
            p = i(71515),
            g = i(92954),
            N = i.n(g),
            C = i(48792),
            y = i.n(C),
            b = i(3205),
            w = i(18783),
            T = i(79792),
            Z = i(2326),
            v = i(79910),
            D = i(55916),
            x = i(20592),
            V = i(58676),
            k = i(9062),
            A = i(49120),
            F = i(8271),
            B = i.n(F),
            P = i(59086),
            S = i(13975),
            X = i(45245),
            _ = i(81957),
            R = i(48813);
          var L,
            M =
              y()({
                properties: {
                  start: { type: [Number, String], value: -288e5 },
                  end: { type: [Number, String], value: 576e5 },
                  startTime: { type: [Number, String], value: 0 },
                  endTime: { type: [Number, String], value: 72e5 },
                  step: { type: [Number, String], value: 18e5 },
                  width: { type: [Number, String], value: 750 },
                },
                data: {
                  screenRatio: 0,
                  start_value: 0,
                  end_value: 0,
                  value: 0,
                  startTimeFormat: "",
                  endTimeFormat: "",
                  sliderLeft: 0,
                  sliderRight: 0,
                  timelineWidth: 0,
                },
                attached: function () {
                  this.setData({ isTieyou: "tieyou" === T.default.partner });
                },
                ready: function () {
                  var e = this;
                  N().nextTick(function () {
                    var t = N().createSelectorQuery(),
                      i = e;
                    e.init(),
                      t
                        .select(".slider-container")
                        .boundingClientRect(function (e) {
                          if (e) {
                            var t = e.left,
                              a = e.right;
                            i.setData({ sliderLeft: t, sliderRight: a });
                          }
                        })
                        .exec();
                  });
                },
                methods: {
                  init: function () {
                    var e = x.IK.sliderStartTime,
                      t = x.IK.sliderEndTime,
                      i = e || -72e5,
                      a = t || 576e5,
                      r = this.properties,
                      s = r.width,
                      n = r.start,
                      o = r.end - n,
                      c = s * ((i - n) / o),
                      l = s * ((a - n) / o);
                    this.setData({
                      offsetStart: c,
                      offsetEnd: l,
                      startTime: e || i,
                      endTime: t || a,
                      screenRatio: 750 / N().getSystemInfoSync().screenWidth,
                    });
                  },
                  sliderChange: function (e) {
                    var t,
                      i = e.changedTouches[0].pageX,
                      a = this.data,
                      r = a.screenRatio,
                      s = a.width,
                      n = a.start,
                      o = a.end,
                      c = a.sliderLeft,
                      l = a.startTime,
                      d = a.endTime,
                      h = a.step,
                      m = a.offsetStart,
                      u = a.offsetEnd,
                      f = o - n,
                      p = e.target.dataset.type,
                      g = Number(l),
                      N = Number(d),
                      C = "start" === p ? g : N,
                      y = m,
                      b = u;
                    if (
                      ((t = (((i - c) * r) / Number(s)) * f), "start" === p)
                    ) {
                      if (t < -h || t + n > N - h) return;
                    } else if (t + n < g || t + n >= o) return;
                    var w = t - C,
                      T =
                        ((t =
                          (C +=
                            h *
                            (w > 0
                              ? Math.floor(w / h) + 1
                              : Math.floor(w / h))) + Number(n)) -
                          n) /
                        f;
                    "start" === p
                      ? ((y = s * T), (g = t))
                      : ((b = s * T), (N = t)),
                      this.setData({
                        offsetStart: y,
                        offsetEnd: b,
                        startTime: g,
                        endTime: N,
                      }),
                      this.triggerEvent("sliderChange", {
                        startTime: g,
                        endTime: N,
                      });
                  },
                },
              })(
                (a = (function (e) {
                  (0, o.Z)(i, e);
                  var t = (0, c.Z)(i);
                  function i() {
                    return (0, s.Z)(this, i), t.apply(this, arguments);
                  }
                  return (
                    (0, n.Z)(i, [
                      {
                        key: "render",
                        value: function () {
                          var e = this.data,
                            t = e.width,
                            i = e.isTieyou,
                            a = e.offsetStart,
                            r = e.offsetEnd;
                          return (0, R.tZ)(p.View, {
                            className: "flight-cslider",
                            children: (0, R.BX)(p.View, {
                              className: "slider-container",
                              style: "width: " + t + "rpx",
                              children: [
                                (0, R.tZ)(p.View, { className: "slider-line" }),
                                (0, R.tZ)(p.View, {
                                  className: "timeline " + (i ? "ty" : "zx"),
                                  style:
                                    "left: " +
                                    a +
                                    "rpx; right: " +
                                    (t - r) +
                                    "rpx;",
                                }),
                                (0, R.tZ)(p.View, {
                                  className:
                                    "icon-budget offset " + (i ? "ty" : "zx"),
                                  "data-type": "start",
                                  style: "left: " + a + "rpx;",
                                  onTouchMove: this.sliderChange,
                                }),
                                (0, R.tZ)(p.View, {
                                  className:
                                    "icon-budget offset " + (i ? "ty" : "zx"),
                                  "data-type": "end",
                                  style: "left: " + r + "rpx;",
                                  onTouchMove: this.sliderChange,
                                }),
                              ],
                            }),
                          });
                        },
                      },
                    ]),
                    i
                  );
                })(f.default.Component))
              ) || a,
            O = T.default.isTieyou,
            I = "YYYY-MM-DD";
          var j = [360, 480, 570, 600],
            q = {
              pageId: "10650060709",
              data: {
                isTieyou: O,
                isIPhoneX: X.Z.isIPhoneX(),
                fromPage: "",
                enableGrab: !1,
                currentTab: "condition",
                departCityName: "",
                arriveCityName: "",
                departCityCode: "",
                arriveCityCode: "",
                selectDate: "",
                selectLocalDate: "",
                exchange: !1,
                nonstop: !1,
                flightInfo: "全部航班",
                phoneNumber: "请输入手机号码",
                priceRange: v.Z.deepCopy(j),
                lowestPrice: "",
                lowestPriceDate: "",
                screenRatio: 0,
                sliderLeft: 0,
                sliderRight: 0,
                offsetX: 70.666,
                budgetColor: "green",
                budgetTxt: "成功率高",
                acceptablePrice: j[2],
                successRate: "40.0",
                mask: !1,
                maskType: "",
                showBox: !1,
                startTime: -72e5,
                endTime: 576e5,
                allFlights: !0,
                takeOffTimeFrom: "06:00",
                takeOffTimeTo: "23:59",
                departAirports: [],
                arriveAirports: [],
                specifiedFlightNumbers: [],
                isFlightLoading: !0,
              },
              onLoad: function (e) {
                var t,
                  i = e.departCityName,
                  a = e.departCityCode,
                  r = e.arriveCityName,
                  s = e.arriveCityCode,
                  n = e.orderNumber,
                  o = void 0 === n ? "" : n,
                  c = e.monitorType,
                  l = void 0 === c ? "add" : c,
                  d = e.fromPage,
                  h = e.data,
                  m = void 0 === h ? {} : h,
                  u = e.selectDate;
                m.selectDate && (u = m.selectDate),
                  (t = Array.isArray(u)
                    ? u
                        .map(function (e) {
                          return B()(e).format("M月D日");
                        })
                        .join(",")
                    : B()(u).format("M月D日"));
                var f = m.takeOffTimeFrom,
                  p = void 0 === f ? "06:00" : f,
                  g = m.takeOffTimeTo,
                  N = void 0 === g ? "23:59" : g,
                  C = m.nonstop,
                  y = void 0 !== C && C,
                  b = m.departureAirportCodes,
                  T = void 0 === b ? "" : b,
                  Z = m.arrivalAirportCodes,
                  v = void 0 === Z ? "" : Z,
                  D = m.specifiedFlightNumbers,
                  x = void 0 === D ? "" : D,
                  V = w.ZP.userName || "";
                this.setData({
                  fromPage: d || "xcx_flt_home",
                  monitorType: l,
                  orderNumber: o,
                  selectDate: u,
                  departCityName: decodeURIComponent(i),
                  departCityCode: a,
                  arriveCityName: decodeURIComponent(r),
                  arriveCityCode: s,
                  selectLocalDate: t,
                  phoneNumber: V,
                  takeOffTimeFrom: p,
                  takeOffTimeTo: N,
                  nonstop: y,
                  departureAirportCodes: T,
                  arrivalAirportCodes: v,
                  specifiedFlightNumbers: x,
                  flightInfo: x || "全部航班",
                }),
                  (this.updateFlightList = !0),
                  this.loadFlightStation(),
                  this.getRecommendPrice(),
                  (this._init_success_rate = X.Z.getRandomArbitrary(2, 5, 1)),
                  (this._rateRange = [this._init_success_rate, 10, 40, 100]),
                  console.log(this._init_success_rate);
              },
              onReady: function () {
                var e = this;
                N().nextTick(function () {
                  var t = N().createSelectorQuery(),
                    i = e,
                    a = 750 / N().getSystemInfoSync().screenWidth;
                  t.select(".budget-line").boundingClientRect(),
                    t.exec(function (t) {
                      var r = t[0],
                        s = r.left,
                        n = r.right,
                        o = 74.5 - (24 / a / (n - s)) * 100;
                      (e.originX = o),
                        i.setData({
                          sliderLeft: s,
                          sliderRight: n,
                          screenRatio: a,
                          offsetX: o,
                        });
                    });
                });
              },
              getRecommendPrice: function (e) {
                var t,
                  i = this,
                  a = this.data,
                  r = a.exchange,
                  s = a.departCityCode,
                  n = a.arriveCityCode,
                  o = a.selectDate,
                  c = a.nonstop,
                  l = a.takeOffTimeFrom,
                  d = a.takeOffTimeTo,
                  h = a.specifiedFlightNumbers,
                  m = a.departureAirportCodes,
                  u = a.arrivalAirportCodes;
                (t = e || {
                  data: {
                    departureCityCode: r ? n : s,
                    arrivalCityCode: r ? s : n,
                    departureDateRange: Array.isArray(o)
                      ? o
                          .map(function (e) {
                            return e.replace(/\//g, "-");
                          })
                          .join(",")
                      : o,
                    takeOffTimeFrom: l,
                    takeOffTimeTo: d,
                    nonstop: c,
                    departureAirportCodes: m,
                    arrivalAirportCodes: u,
                    specifiedFlightNumbers: h,
                  },
                }),
                  (0, A.showLoading)(),
                  this.getRecommendedPricePromise(t)
                    .then(function (e) {
                      var t = e.priceRange,
                        a = e.lowestPrice,
                        r = e.lowestPriceDate,
                        s = t.split(",").map(function (e) {
                          return parseInt(e);
                        });
                      i.setData({
                        enableGrab: !0,
                        priceRange: s,
                        lowestPrice: a,
                        lowestPriceDate: r,
                        acceptablePrice: s[2],
                      }),
                        i.resetPriceBudget();
                    })
                    .catch(function () {
                      i.setData({
                        enableGrab: !0,
                        priceRange: v.Z.deepCopy(j),
                        acceptablePrice: j[2],
                      }),
                        i.resetPriceBudget(),
                        i.resetData();
                    });
              },
              getRecommendedPricePromise: function (e) {
                return new Promise(function (t, i) {
                  (0, S.LJ)(e)
                    .then(function (e) {
                      var a = e.resultCode,
                        r = e.resultMessage,
                        s = e.data;
                      1 === a ? t(s) : i(r);
                    })
                    .finally(function () {
                      (0, A.hideLoading)();
                    });
                });
              },
              loadFlightStation: function () {
                var e = this;
                if (!P.Q2.get()) {
                  (0, D.c3)({
                    data: {
                      dataChangeLastTime: "2016-01-19T00:00:00",
                      distinctCity: !0,
                    },
                  })
                    .then(function (t) {
                      t && t.data && e.handleFlightStation(t.data);
                    })
                    .catch(function (e) {
                      console.log(e);
                    });
                }
              },
              handleFlightStation: function (e) {
                var t = {};
                v._.each(e, function (e) {
                  t[e.firstLetter] || (t[e.firstLetter] = []),
                    t[e.firstLetter].push({
                      cityName: e.cityName,
                      cityCode: e.cityCode,
                      py: e.cityNamePY,
                      pyHead: e.cityNameJP,
                    });
                });
                var i = Object.keys(t),
                  a = {};
                (i = i.sort()).forEach(function (e) {
                  a[e] = t[e];
                }),
                  P.Q2.setAttr("cityMainList", a);
              },
              exchangeStation: function () {
                var e = this.data.exchange;
                this.setData({ exchange: !e }),
                  this.getRecommendPrice(),
                  this.resetData();
              },
              chooseStation: function (e) {
                var t = this,
                  i = this.data.exchange,
                  a = e.currentTarget.dataset.type,
                  r = ("d" === a ? 1 : 0) ^ (i ? 1 : 0) ? "出发" : "到达";
                b.Z.flightCity({
                  data: { title: r, intlHidden: !0 },
                  callback: function (e) {
                    var i = e.cityName,
                      r = e.cityCode;
                    "d" == a
                      ? t.setData({ departCityName: i, departCityCode: r })
                      : t.setData({ arriveCityName: i, arriveCityCode: r }),
                      t.getRecommendPrice(),
                      t.resetData();
                  },
                });
              },
              chooseDate: function () {
                var e = this,
                  t = this.data,
                  i = t.departCityCode,
                  a = t.arriveCityCode,
                  r = t.selectDate,
                  s = t.exchange,
                  n = Array.isArray(r)
                    ? r.map(function (e) {
                        return B()(e).format(I);
                      })
                    : B()(r).format(I),
                  o = B()().format(I),
                  c = B()()
                    .add(k.g2 - 1, "day")
                    .format(I),
                  l = {
                    data: {
                      departCityCode: s ? a : i,
                      arriveCityCode: s ? i : a,
                    },
                  };
                b.Z.calendar(
                  {
                    chooseDate: n,
                    beginDate: o,
                    endDate: c,
                    type: "multiple",
                    confirmBtn: !0,
                    title: "选择出发日期",
                    bu: "flight",
                    tip: "建议选择多日期同时监控，成功率更高！",
                    queryParams: l,
                  },
                  function (t) {
                    console.log(t);
                    var i,
                      a = [],
                      r = (0, u.Z)(t);
                    try {
                      for (r.s(); !(i = r.n()).done; ) {
                        var s = i.value;
                        a.push(B()(s).format("M月D日"));
                      }
                    } catch (e) {
                      r.e(e);
                    } finally {
                      r.f();
                    }
                    e.setData({ selectDate: t, selectLocalDate: a.join(",") }),
                      e.getRecommendPrice(),
                      e.resetData();
                  }
                );
              },
              priceSliderChange: function (e) {
                var t,
                  i,
                  a,
                  r,
                  s,
                  n,
                  o = e.changedTouches[0].pageX,
                  c = this.data,
                  l = c.sliderLeft,
                  d = c.sliderRight,
                  h = c.screenRatio,
                  u = c.priceRange,
                  f = (0, m.Z)(u, 4),
                  p = f[0],
                  g = f[1],
                  N = f[2],
                  C = f[3],
                  y = (0, m.Z)(this._rateRange, 4),
                  b = y[0],
                  w = y[1],
                  T = y[2],
                  Z = y[3],
                  v = 24 / h,
                  D = d - l,
                  x = 0.255 * D - v,
                  V = 0.49 * D,
                  k = 0.255 * D - v,
                  A = 0.255 * D + l - v,
                  F = 0.745 * D + l - v;
                o > d - 2 * v
                  ? this.setData({ successRate: "100" })
                  : o < l
                  ? this.setData({ successRate: b })
                  : ((a = ((o - l) / D) * 100),
                    o <= A
                      ? ((r = "red"),
                        (i = ((t = o - l) / x) * (g - p) + p),
                        (s = "成功率低"),
                        (n = (t / x) * (w - b) + this._init_success_rate))
                      : o >= F
                      ? ((r = "green"),
                        (i = ((t = o - F) / k) * (C - N) + N),
                        (s = "成功率高"),
                        (n = (t / k) * (Z - T) + T))
                      : ((r = "orange"),
                        (i = ((t = o - A) / V) * (N - g) + g),
                        (s = "成功率中"),
                        (n = (t / V) * (T - w) + w)),
                    console.log(t, this._init_success_rate, n),
                    this.setData({
                      offsetX: a,
                      budgetColor: r,
                      acceptablePrice: Math.round(i),
                      budgetTxt: s,
                      successRate: n.toFixed(1),
                    }));
              },
              bindKeyInput: function (e) {
                this.setData({ phoneNumber: e.detail.value });
              },
              login: function (e) {
                var t = this;
                w.ZP.doLogin().then(function () {
                  var i = w.ZP.userName || "";
                  t.setData({ phoneNumber: i }), t.handleSubmit(e);
                });
              },
              loginCheck: function (e) {
                var t = e.detail.formId;
                w.ZP.isLogin ? this.handleSubmit(t) : this.login(t);
              },
              handleSubmit: function (e) {
                var t = this;
                if (!this._requested) {
                  var i = this.data,
                    a = i.fromPage,
                    r = i.currentTab,
                    s = i.phoneNumber,
                    n = i.selectDate,
                    o = i.departAirports,
                    c = i.arriveAirports,
                    l = i.arriveCityCode,
                    d = i.departCityCode,
                    h = i.takeOffTimeFrom,
                    m = i.takeOffTimeTo,
                    u = i.nonstop,
                    f = i.priceRange,
                    p = i.lowestPrice,
                    g = i.lowestPriceDate,
                    N = i.specifiedFlightNumbers,
                    C = i.acceptablePrice,
                    y = i.enableGrab,
                    b = i.exchange,
                    w = i.successRate,
                    T = i.monitorType,
                    Z = i.orderNumber,
                    v = {
                      fromPage: a,
                      version: 1,
                      orderType: 0,
                      departureCityCode: b ? l : d,
                      arrivalCityCode: b ? d : l,
                      acceptablePrice: C,
                      contactPhone: s,
                      historyPrice: p,
                      historyPriceDate: g,
                      recommendedPrice: f[2],
                      successRate: w,
                    };
                  if (!y)
                    return this.showCommonDialog(
                      "该筛选条件下无航班，放宽条件成功率更高"
                    );
                  if (d === l)
                    return this.showCommonDialog("出发城市与到达城市不能相同");
                  if (void 0 === s || 0 == s.trim().length)
                    return this.showCommonDialog("请输入手机号");
                  if (!/^1([3456789]\d{9})$/.test(s.trim()))
                    return this.showCommonDialog(
                      "手机号码格式不正确，请重新输入"
                    );
                  "condition" === r
                    ? Object.assign(v, {
                        departureDateRange: Array.isArray(n)
                          ? n
                              .map(function (e) {
                                return e.replace(/\//g, "-");
                              })
                              .join(",")
                          : n.replace(/\//g, "-"),
                        takeOffTimeFrom: h,
                        takeOffTimeTo: "24:00" === m ? "23:59" : m,
                        nonstop: u,
                        departureAirportCodes: o
                          .filter(function (e) {
                            return e.selected;
                          })
                          .map(function (e) {
                            return e.airportCode;
                          })
                          .join(","),
                        arrivalAirportCodes: c
                          .filter(function (e) {
                            return e.selected;
                          })
                          .map(function (e) {
                            return e.airportCode;
                          })
                          .join(","),
                      })
                    : Object.assign(v, {
                        departureDateRange: Array.isArray(n)
                          ? n
                              .map(function (e) {
                                return e.replace(/\//g, "-");
                              })
                              .join(",")
                          : n.replace(/\//g, "-"),
                        specifiedFlightNumbers: N.join(","),
                      }),
                    console.log("参数", v),
                    (this._requested = !0);
                  var D = {
                    data: v,
                    head: { extension: [{ name: "formId", value: e }] },
                  };
                  "edit" === T
                    ? ((D.data.orderNumber = Z),
                      (0, S.O6)(D)
                        .then(
                          function (e) {
                            var i = e || {},
                              a = i.resultCode,
                              r = i.resultMessage;
                            1 === a
                              ? ((x.IK._modifyGrabOrder = 1), t.navigateBack())
                              : t.showCommonDialog(
                                  r || "网络错误，请稍后再试~"
                                );
                          },
                          function (e) {
                            console.log(e), t.showCommonDialog(e);
                          }
                        )
                        .finally(function () {
                          t._requested = !1;
                        }))
                    : (0, S.km)(D).then(
                        function (e) {
                          var i = e || {},
                            a = i.resultCode,
                            r = i.resultMessage,
                            s = i.data,
                            o = void 0 === s ? {} : s,
                            c = o.orderNumber,
                            l = o.savedCash,
                            d = void 0 === l ? "" : l,
                            h = o.cashDesc,
                            m = void 0 === h ? "" : h,
                            u = o.sameMonitor || 0;
                          if (u)
                            t.setData({ orderNumber: c }),
                              t.showMultiButtonDialog({
                                content: "您已设置过相同监控",
                                rightButtonName: "去查看",
                                onRightButtonClick: function () {
                                  t.toMonitorDetail("sameMonitor");
                                },
                                leftButtonName: "返回",
                              });
                          else if (1 === a) {
                            if (
                              (t.setData({
                                orderNumber: c,
                                savedCash: d,
                                cashDesc: m,
                                monitorDateStr: B()(
                                  Array.isArray(n) ? n[0] : n
                                ).format("MM-DD"),
                              }),
                              u)
                            )
                              return t.showMultiButtonDialog({
                                content: "您已设置过相同监控",
                                rightButtonName: "去看看",
                                onRightButtonClick: function () {
                                  t.toMonitorDetail("sameMonitor");
                                },
                                leftButtonName: "返回",
                              });
                            t.resetData(), t.toggleSuccessPopup();
                          } else
                            t.showCommonDialog(r || "网络错误，请稍后再试~");
                        },
                        function (e) {
                          t.showCommonDialog(e || "网络错误，请稍后再试~");
                        },
                        function () {
                          t._requested = !1;
                        }
                      );
                }
              },
              toggleSuccessPopup: function (e) {
                var t = this,
                  i = this.data.showSuccessPopup;
                this.setData({
                  mask: !i,
                  showSuccessPopup: !i,
                  maskType: "success",
                }),
                  setTimeout(function () {
                    t.setData({ transition: !i }), e && e();
                  }, 10);
              },
              toMonitorDetail: function (e) {
                var t = this.data,
                  i = t.orderNumber,
                  a = t.monitorType,
                  r = 0;
                ("add" === a || ("add" !== a && "shareBtn" === e)) && (r = 1),
                  "sameMonitor" !== e && this.toggleSuccessPopup(),
                  this.navigateTo({
                    url: "/pages/flight/monitordetail/monitordetail?orderNumber="
                      .concat(i, "&autoShare=")
                      .concat(r),
                  });
              },
              toMonitorList: function () {
                N().reLaunch({
                  url: "/pages/trnshare/grablist/grablist?orderType=flightOrder&fromPage=xcx_jk_edit",
                });
              },
              resetData: function () {
                this.setData({
                  takeOffTimeFrom: "06:00",
                  takeOffTimeTo: "23:59",
                  startTime: -72e5,
                  endTime: 576e5,
                  nonstop: !1,
                  allFlights: !0,
                  flightInfo: "全部航班",
                  specifiedFlightNumbers: "",
                  isFlightLoading: !0,
                  currentTab: "condition",
                  successRate: "40.0",
                  departureAirportCodes: "",
                  arrivalAirportCodes: "",
                }),
                  this.cslider && this.cslider.init(),
                  (this.updateFlightList = !0);
              },
              refCSlider: function (e) {
                this.cslider = e;
              },
              resetPriceBudget: function () {
                this.setData({
                  offsetX: this.originX || 70.666,
                  budgetColor: "green",
                  budgetTxt: "成功率高",
                });
              },
              toggleFlightPanel: function () {
                var e = this,
                  t = this.data.showBox;
                this.setData({ mask: !t, showBox: !t, maskType: "flightBox" }),
                  setTimeout(function () {
                    e.setData({ transition: !t });
                  }, 10),
                  this.getFlightList();
              },
              closeMask: function (e) {
                var t = e.currentTarget.dataset.type;
                "flightBox" === t
                  ? this.toggleFlightPanel()
                  : "share" === t && this.toggleSharePanel();
              },
              switchTab: function (e) {
                var t = e.currentTarget.dataset.type;
                this.setData({ currentTab: t });
              },
              getFlightList: function () {
                var e = this;
                if (this.updateFlightList) {
                  var t,
                    i = this.data,
                    a = i.selectDate,
                    r = i.departCityCode,
                    s = i.arriveCityCode,
                    n = i.exchange,
                    o = i.specifiedFlightNumbers,
                    c = i.departureAirportCodes,
                    l = i.arrivalAirportCodes,
                    m = Array.isArray(a) ? a : [a],
                    f = n ? s : r,
                    p = n ? r : s,
                    g = "",
                    N = (0, u.Z)(m);
                  try {
                    for (N.s(); !(t = N.n()).done; ) {
                      var C = t.value;
                      if (!Z.Z.compareTodayToDate(C)) {
                        g = C;
                        break;
                      }
                    }
                  } catch (e) {
                    N.e(e);
                  } finally {
                    N.f();
                  }
                  var y = {
                    data: {
                      version: 4,
                      source: 0,
                      cacheUsage: 0,
                      hasChild: !1,
                      hasBaby: !1,
                      segments: [{ dptDate: g, dptCode: f, arrCode: p }],
                    },
                  };
                  this.flightListModelPromise(y)
                    .then(
                      function (t) {
                        console.log(t);
                        var i,
                          a,
                          r,
                          s = t.singles || [],
                          n = t.recommends || [],
                          m = e.handleFlightData(
                            [].concat((0, h.Z)(s), (0, h.Z)(n))
                          ),
                          u = m.flightList,
                          f = m.lowestPrice,
                          p = m.departAirports,
                          g = m.arriveAirports;
                        if (o) {
                          var N = o.split(",");
                          i = u.map(function (e) {
                            return (0, d.Z)(
                              (0, d.Z)({}, e),
                              {},
                              {
                                selected: N.some(function (t) {
                                  return t === e.sequences[0].flightNo;
                                }),
                              }
                            );
                          });
                        } else
                          i = u.map(function (e) {
                            return (0,
                            d.Z)((0, d.Z)({}, e), {}, { selected: !0 });
                          });
                        if (c) {
                          var C = c.split(",");
                          a = p.map(function (e) {
                            return (0, d.Z)(
                              (0, d.Z)({}, e),
                              {},
                              {
                                selected: C.some(function (t) {
                                  return t === e.airportCode;
                                }),
                              }
                            );
                          });
                        } else
                          a = p.map(function (e) {
                            return (0,
                            d.Z)((0, d.Z)({}, e), {}, { selected: !0 });
                          });
                        if (l) {
                          var y = l.split(",");
                          r = g.map(function (e) {
                            return (0, d.Z)(
                              (0, d.Z)({}, e),
                              {},
                              {
                                selected: y.some(function (t) {
                                  return t === e.airportCode;
                                }),
                              }
                            );
                          });
                        } else
                          r = g.map(function (e) {
                            return (0,
                            d.Z)((0, d.Z)({}, e), {}, { selected: !0 });
                          });
                        e.setData({
                          flightList: v._.sortBy(i, "touristClassPrice"),
                          lowestPrice: f,
                          departAirports: a,
                          arriveAirports: r,
                          isFlightLoading: !1,
                        });
                      },
                      function (e) {
                        console.log(e);
                      }
                    )
                    .finally(function () {
                      e.updateFlightList = !1;
                    });
                }
              },
              handleFlightData: function (e) {
                var t,
                  i = [],
                  a = 99999999,
                  r = [],
                  s = [],
                  n = (0, u.Z)(e);
                try {
                  var o = function () {
                    var e = t.value,
                      n = B()(X.Z.formatDateWithSlash(e.dptTime)),
                      o = B()(X.Z.formatDateWithSlash(e.arrTime)),
                      c = (0, d.Z)(
                        (0, d.Z)({}, e),
                        {},
                        {
                          dptTimeStr: n.format("HH:mm"),
                          arrTimeStr: o.format("HH:mm"),
                          dayDiff: Z.Z.getDayDiff(n.format(I), o.format(I)),
                          abbr: e.abbr ? e.abbr.replace("|", "") : "",
                          transfer: e.sequences.length > 1,
                          airCode: e.sequences[0].airCode,
                          cfts: e.sequences[0].cfts,
                          departTimeHourSection: Math.floor(
                            new Date(
                              X.Z.formatDateWithSlash(e.dptTime)
                            ).getHours() / 6
                          ),
                        }
                      );
                    a > e.apr && (a = e.apr),
                      r.some(function (t) {
                        return t.airportCode === e.dptACode;
                      }) ||
                        r.push({
                          airportName: e.dptAName,
                          airportCode: e.dptACode,
                        }),
                      s.some(function (t) {
                        return t.airportCode === e.arrACode;
                      }) ||
                        s.push({
                          airportName: e.arrAName,
                          airportCode: e.arrACode,
                        }),
                      i.push(c);
                  };
                  for (n.s(); !(t = n.n()).done; ) o();
                } catch (e) {
                  n.e(e);
                } finally {
                  n.f();
                }
                return {
                  flightList: i,
                  lowestPrice: a,
                  departAirports: r,
                  arriveAirports: s,
                };
              },
              flightListModelPromise: function (e) {
                return new Promise(function (t, i) {
                  (0, D.j7)(e)
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
              timeSliderChange: function (e) {
                var t = e.detail,
                  i = t.startTime,
                  a = t.endTime,
                  r = new Date(i).toTimeString().toString().slice(0, 5),
                  s = new Date(576e5 === a ? a - 6e4 : a)
                    .toTimeString()
                    .toString()
                    .slice(0, 5);
                this.setData({
                  startTime: i,
                  endTime: a,
                  takeOffTimeFrom: r,
                  takeOffTimeTo: s,
                });
              },
              chooseTransfer: function () {
                var e = this.data.nonstop;
                this.setData({ nonstop: !e });
              },
              chooseAirport: function (e) {
                var t = e.currentTarget.dataset,
                  i = t.type,
                  a = t.index,
                  r = this.data,
                  s = r.departAirports,
                  n = r.arriveAirports,
                  o = "depart" === i ? s : n,
                  c = o[a].selected,
                  h = "depart" === i ? "departAirports" : "arriveAirports";
                if (
                  1 ===
                    o.filter(function (e) {
                      return e.selected;
                    }).length &&
                  c
                )
                  return this.showCommonDialog(
                    "请\b至少保留一个".concat(
                      "depart" === i ? "出发" : "到达",
                      "机场"
                    )
                  );
                this.setData(
                  (0, l.Z)(
                    {},
                    "".concat(h, "[").concat(a, "]"),
                    (0, d.Z)((0, d.Z)({}, o[a]), {}, { selected: !c })
                  )
                );
              },
              chooseFlight: function (e) {
                var t,
                  i = e.currentTarget.dataset.index,
                  a = this.data.flightList,
                  r = a[i].selected,
                  s = r ? -1 : 1,
                  n = a.length,
                  o =
                    a.filter(function (e) {
                      return e.selected;
                    }).length + s;
                console.log(n, o),
                  this.setData(
                    ((t = {}),
                    (0, l.Z)(
                      t,
                      "flightList[".concat(i, "]"),
                      (0, d.Z)((0, d.Z)({}, a[i]), {}, { selected: !r })
                    ),
                    (0, l.Z)(t, "allFlights", n === o),
                    t)
                  );
              },
              toggleAllFlight: function () {
                var e = this.data,
                  t = e.flightList,
                  i = e.allFlights,
                  a = t.map(function (e) {
                    return (0, d.Z)((0, d.Z)({}, e), {}, { selected: !i });
                  });
                this.setData({ flightList: a, allFlights: !i });
              },
              handleConditionCheck: function () {
                var e = this.data,
                  t = e.currentTab,
                  i = e.departCityCode,
                  a = e.arriveCityCode,
                  r = e.exchange,
                  s = e.selectDate,
                  n = e.takeOffTimeFrom,
                  o = e.takeOffTimeTo,
                  c = e.nonstop,
                  l = e.departAirports,
                  h = e.arriveAirports,
                  m = e.flightList,
                  u = e.allFlights,
                  f = r ? a : i,
                  p = r ? i : a,
                  g = l
                    .filter(function (e) {
                      return e.selected;
                    })
                    .map(function (e) {
                      return e.airportCode;
                    })
                    .join(","),
                  N = h
                    .filter(function (e) {
                      return e.selected;
                    })
                    .map(function (e) {
                      return e.airportCode;
                    })
                    .join(","),
                  C = (
                    u
                      ? []
                      : m.filter(function (e) {
                          return e.selected;
                        })
                  ).map(function (e) {
                    return e.transfer
                      ? ""
                          .concat(e.sequences[0].flightNo, "-")
                          .concat(e.sequences[1].flightNo)
                      : e.sequences[0].flightNo;
                  }),
                  y = {
                    departureCityCode: f,
                    arrivalCityCode: p,
                    departureDateRange: Array.isArray(s)
                      ? s
                          .map(function (e) {
                            return e.replace(/\//g, "-");
                          })
                          .join(",")
                      : s,
                  },
                  b = "";
                if ("condition" === t)
                  (y = (0, d.Z)(
                    (0, d.Z)({}, y),
                    {},
                    {
                      takeOffTimeFrom: n,
                      takeOffTimeTo: o,
                      nonstop: c,
                      departureAirportCodes: g,
                      arrivalAirportCodes: N,
                      specifiedFlightNumbers: null,
                    }
                  )),
                    (b = ""
                      .concat(n, "-")
                      .concat(o, "起飞")
                      .concat(c ? "|直飞" : "")),
                    l.filter(function (e) {
                      return e.selected;
                    }).length < l.length &&
                      (b += "|".concat(
                        l.filter(function (e) {
                          return e.selected;
                        })[0].airportName,
                        "出发"
                      )),
                    h.filter(function (e) {
                      return e.selected;
                    }).length < h.length &&
                      (b += "|".concat(
                        h.filter(function (e) {
                          return e.selected;
                        })[0].airportName,
                        "到达"
                      ));
                else {
                  if (
                    !m.some(function (e) {
                      return e.selected;
                    })
                  )
                    return this.showCommonDialog("请至少选择一个航班");
                  (y = (0, d.Z)(
                    (0, d.Z)({}, y),
                    {},
                    {
                      takeOffTimeFrom: "00:00",
                      takeOffTimeTo: "23:59",
                      nonstop: !1,
                      departureAirportCodes: "",
                      arrivalAirportCodes: "",
                      specifiedFlightNumbers: u ? "" : C.join(","),
                    }
                  )),
                    (b = u ? "全部航班" : C.join(","));
                }
                console.log("params", y),
                  console.log(b),
                  this.setData({ flightInfo: b, specifiedFlightNumbers: C }),
                  this.toggleFlightPanel(b),
                  this.getRecommendPrice({ data: y });
              },
              noop: function () {},
            },
            z =
              (0, _.h)()(
                (L =
                  y()(q)(
                    (L = (function (e) {
                      (0, o.Z)(i, e);
                      var t = (0, c.Z)(i);
                      function i() {
                        return (0, s.Z)(this, i), t.apply(this, arguments);
                      }
                      return (
                        (0, n.Z)(i, [
                          {
                            key: "render",
                            value: function () {
                              var e = this,
                                t = this.data,
                                i = t.isTieyou,
                                a = t.exchange,
                                r = t.departCityName,
                                s = t.arriveCityName,
                                n = t.selectLocalDate,
                                o = t.flightInfo,
                                c = t.acceptablePrice,
                                l = t.budgetColor,
                                d = t.offsetX,
                                h = t.budgetTxt,
                                m = t.priceRange,
                                u = t.phoneNumber,
                                g = t.transition,
                                N = t.mask,
                                C = t.maskType,
                                y = t.showBox,
                                b = t.isIPhoneX,
                                w = t.currentTab,
                                T = t.takeOffTimeFrom,
                                Z = t.takeOffTimeTo,
                                v = t.startTime,
                                D = t.endTime,
                                x = t.nonstop,
                                k = t.isFlightLoading,
                                A = t.departAirports,
                                F = t.arriveAirports,
                                B = t.flightList,
                                P = t.allFlights,
                                S = t.showSuccessPopup,
                                X = t.monitorDateStr,
                                _ = t.savedCash,
                                L = t.cashDesc;
                              return (0, R.BX)(R.HY, {
                                children: [
                                  (0, R.BX)(p.View, {
                                    className: "page",
                                    children: [
                                      (0, R.BX)(p.View, {
                                        className: "monitor-box",
                                        children: [
                                          (0, R.tZ)(p.View, {
                                            className:
                                              "monitor-top " +
                                              (i ? "ty" : "zx"),
                                            children: (0, R.BX)(p.View, {
                                              className: "monitor-tit",
                                              children: [
                                                (0, R.tZ)(p.Icon, {
                                                  className: "eye-l",
                                                }),
                                                (0, R.tZ)(p.Icon, {
                                                  className: "eye-r",
                                                }),
                                              ],
                                            }),
                                          }),
                                          (0, R.BX)(p.View, {
                                            className: "monitor-white",
                                            children: [
                                              (0, R.BX)(p.View, {
                                                className: "monitor-station",
                                                children: [
                                                  (0, R.tZ)(p.View, {
                                                    className:
                                                      "from " +
                                                      (a ? "exchange" : ""),
                                                    "data-type": "d",
                                                    id: "AcFo",
                                                    onClick: this.chooseStation,
                                                    children: r,
                                                  }),
                                                  (0, R.tZ)(p.Text, {
                                                    className:
                                                      "ifont-chage iconfont",
                                                    style:
                                                      "transform: " +
                                                      (a
                                                        ? "rotate(360deg)"
                                                        : ""),
                                                    id: "AcFp",
                                                    onClick:
                                                      this.exchangeStation,
                                                  }),
                                                  (0, R.tZ)(p.View, {
                                                    className:
                                                      "to " +
                                                      (a ? "exchange" : ""),
                                                    "data-type": "a",
                                                    id: "AcFq",
                                                    onClick: this.chooseStation,
                                                    children: s,
                                                  }),
                                                ],
                                              }),
                                              (0, R.BX)(p.View, {
                                                className: "monitor-list",
                                                children: [
                                                  (0, R.BX)(p.View, {
                                                    className: "item",
                                                    id: "AcFr",
                                                    onClick: this.chooseDate,
                                                    children: [
                                                      (0, R.tZ)(p.View, {
                                                        className: "label",
                                                        children: "出发时间",
                                                      }),
                                                      (0, R.tZ)(p.View, {
                                                        className: "cont",
                                                        children: n,
                                                      }),
                                                      (0, R.BX)(p.View, {
                                                        className: "more",
                                                        children: [
                                                          "多选",
                                                          (0, R.tZ)(p.Text, {
                                                            className:
                                                              "ifont-arr iconfont",
                                                          }),
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                  (0, R.BX)(p.View, {
                                                    className: "item",
                                                    id: "AcFs",
                                                    onClick:
                                                      this.toggleFlightPanel,
                                                    children: [
                                                      (0, R.tZ)(p.View, {
                                                        className: "label",
                                                        children: "选择航班",
                                                      }),
                                                      (0, R.tZ)(p.View, {
                                                        className:
                                                          "cont hangban",
                                                        children: (0, R.tZ)(
                                                          p.View,
                                                          {
                                                            className: "txt",
                                                            children: o,
                                                          }
                                                        ),
                                                      }),
                                                      (0, R.BX)(p.View, {
                                                        className: "more",
                                                        children: [
                                                          "多选",
                                                          (0, R.tZ)(p.Text, {
                                                            className:
                                                              "ifont-arr iconfont",
                                                          }),
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              (0, R.tZ)(p.View, {
                                                className: "monitor-tips",
                                                children:
                                                  "可筛选具体航班（如:KN9565）、直飞/中转航班、起飞机场",
                                              }),
                                            ],
                                          }),
                                          (0, R.BX)(p.View, {
                                            className: "monitor-white",
                                            children: [
                                              (0, R.tZ)(p.View, {
                                                className: "monitor-list mt10",
                                                children: (0, R.BX)(p.View, {
                                                  className: "item",
                                                  children: [
                                                    (0, R.tZ)(p.View, {
                                                      className: "label",
                                                      children: "预算价格",
                                                    }),
                                                    (0, R.tZ)(p.View, {
                                                      className: "cont",
                                                      children: (0, R.tZ)(
                                                        p.Text,
                                                        {
                                                          className: "strong",
                                                          children:
                                                            c + " 元/人",
                                                        }
                                                      ),
                                                    }),
                                                  ],
                                                }),
                                              }),
                                              (0, R.BX)(p.View, {
                                                className: "budget-box",
                                                children: [
                                                  (0, R.BX)(p.View, {
                                                    className:
                                                      "budget-slide " + l,
                                                    style: "left: " + d + "%",
                                                    children: [
                                                      (0, R.tZ)(p.View, {
                                                        className: "tag",
                                                        children: h,
                                                      }),
                                                      (0, R.tZ)(p.View, {
                                                        className:
                                                          "icon-budget",
                                                        onTouchMove:
                                                          this
                                                            .priceSliderChange,
                                                      }),
                                                    ],
                                                  }),
                                                  (0, R.tZ)(p.View, {
                                                    className: "budget-line",
                                                  }),
                                                  (0, R.BX)(p.View, {
                                                    className: "budget-price",
                                                    children: [
                                                      (0, R.tZ)(p.View, {
                                                        className: "price",
                                                        children: "¥" + m[0],
                                                      }),
                                                      (0, R.tZ)(p.View, {
                                                        className: "price",
                                                        children: "¥" + m[1],
                                                      }),
                                                      (0, R.tZ)(p.View, {
                                                        className: "black",
                                                      }),
                                                      (0, R.BX)(p.View, {
                                                        className:
                                                          "price tgreen",
                                                        children: [
                                                          "¥" + m[2],
                                                          (0, R.tZ)(p.View, {
                                                            children:
                                                              "推荐价格",
                                                          }),
                                                        ],
                                                      }),
                                                      (0, R.BX)(p.View, {
                                                        className: "price",
                                                        children: [
                                                          "¥" + m[3],
                                                          (0, R.tZ)(p.View, {
                                                            children:
                                                              "当前最低",
                                                          }),
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          (0, R.tZ)(p.View, {
                                            className: "monitor-white",
                                            children: (0, R.tZ)(p.View, {
                                              className: "monitor-list",
                                              children: (0, R.BX)(p.View, {
                                                className: "item",
                                                children: [
                                                  (0, R.tZ)(p.View, {
                                                    className: "label",
                                                    children: "联系电话",
                                                  }),
                                                  (0, R.tZ)(p.View, {
                                                    className: "cont",
                                                    children: (0, R.tZ)(
                                                      p.Input,
                                                      {
                                                        type: "number",
                                                        confirmType: "done",
                                                        placeholder:
                                                          "请输入手机号码",
                                                        value: u,
                                                        onInput:
                                                          this.bindKeyInput,
                                                      }
                                                    ),
                                                  }),
                                                ],
                                              }),
                                            }),
                                          }),
                                          (0, R.tZ)(p.View, {
                                            className: "check-tips-txt",
                                            children:
                                              "我们会第一时间通过微信、短信为您推送低价",
                                          }),
                                        ],
                                      }),
                                      (0, R.tZ)(p.View, {
                                        className:
                                          "check-fixed-btn check-fixed-next",
                                        children: (0, R.tZ)(p.Form, {
                                          className: "form-group",
                                          onSubmit: this.loginCheck,
                                          reportSubmit: "true",
                                          children: (0, R.tZ)(p.Button, {
                                            formType: "submit",
                                            className:
                                              "btn-confirm btn-next btn-primary",
                                            children: "下一步",
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                  N &&
                                    (0, R.tZ)(p.View, {
                                      className:
                                        "shadow-box " + (g ? "active" : ""),
                                      "data-type": C,
                                      id: "AcFt",
                                      onClick: this.closeMask,
                                    }),
                                  (0, R.BX)(p.View, {
                                    className: "tip-bot " + (y ? "active" : ""),
                                    children: [
                                      (0, R.BX)(p.View, {
                                        className: "cui-hd",
                                        children: [
                                          (0, R.tZ)(p.View, {
                                            className: "cell cancel-btn",
                                            id: "AcFu",
                                            onClick: this.toggleFlightPanel,
                                            children: "取消",
                                          }),
                                          (0, R.tZ)(p.View, {
                                            className: "cell center-tit",
                                            children: "选择航班",
                                          }),
                                          (0, R.tZ)(p.View, {
                                            className:
                                              "cell ok-btn color-primary",
                                          }),
                                        ],
                                      }),
                                      (0, R.BX)(p.View, {
                                        className:
                                          "cui-bg pop-flight " +
                                          (b ? "iphone-x" : ""),
                                        children: [
                                          (0, R.BX)(p.View, {
                                            className:
                                              "choose-tab " + (i ? "ty" : "zx"),
                                            children: [
                                              (0, R.tZ)(p.View, {
                                                className:
                                                  "item " +
                                                  ("condition" === w
                                                    ? "cur"
                                                    : ""),
                                                "data-type": "condition",
                                                id: "AcFv",
                                                onClick: this.switchTab,
                                                children: "按条件选",
                                              }),
                                              (0, R.tZ)(p.View, {
                                                className:
                                                  "item " +
                                                  ("flight" === w ? "cur" : ""),
                                                "data-type": "flight",
                                                id: "AcFw",
                                                onClick: this.switchTab,
                                                children: "按航班选",
                                              }),
                                              (0, R.tZ)(p.Text, {
                                                className: "scrollbar",
                                              }),
                                            ],
                                          }),
                                          "condition" === w &&
                                            (0, R.BX)(p.View, {
                                              className:
                                                "choose-box choose-term",
                                              children: [
                                                (0, R.BX)(p.View, {
                                                  className: "time-slider",
                                                  children: [
                                                    (0, R.BX)(p.View, {
                                                      className: "tit",
                                                      children: [
                                                        "可接受的起飞时间",
                                                        (0, R.tZ)(p.Text, {
                                                          className: "time",
                                                          children: T + "-" + Z,
                                                        }),
                                                      ],
                                                    }),
                                                    (0, R.tZ)(p.View, {
                                                      className:
                                                        "time-slider-box",
                                                      children: (0, R.tZ)(M, {
                                                        ref: this.refCSlider,
                                                        id: "cslider",
                                                        width: "670",
                                                        startTime: v,
                                                        endTime: D,
                                                        onSliderChange:
                                                          this.timeSliderChange,
                                                      }),
                                                    }),
                                                  ],
                                                }),
                                                (0, R.BX)(p.View, {
                                                  className: "flight-screen",
                                                  children: [
                                                    (0, R.tZ)(p.View, {
                                                      className: "tit",
                                                      children: "直飞/中转",
                                                    }),
                                                    (0, R.BX)(p.View, {
                                                      className:
                                                        "flight-screen-list  " +
                                                        (i ? "ty" : "zx"),
                                                      children: [
                                                        (0, R.tZ)(p.View, {
                                                          className: "item cur",
                                                          children: "直飞",
                                                        }),
                                                        (0, R.tZ)(p.View, {
                                                          className:
                                                            "item " +
                                                            (x ? "" : "cur"),
                                                          id: "AcFx",
                                                          onClick:
                                                            this.chooseTransfer,
                                                          children: "中转",
                                                        }),
                                                      ],
                                                    }),
                                                    (0, R.tZ)(p.View, {
                                                      className: "tit",
                                                      children: "起飞机场",
                                                    }),
                                                    (0, R.BX)(p.View, {
                                                      className:
                                                        "flight-screen-list " +
                                                        (i ? "ty" : "zx"),
                                                      children: [
                                                        k &&
                                                          (0, R.BX)(
                                                            f.default.Fragment,
                                                            {
                                                              children: [
                                                                (0, R.tZ)(
                                                                  p.View,
                                                                  {
                                                                    className:
                                                                      "item loading",
                                                                  }
                                                                ),
                                                                (0, R.tZ)(
                                                                  p.View,
                                                                  {
                                                                    className:
                                                                      "item loading",
                                                                  }
                                                                ),
                                                              ],
                                                            }
                                                          ),
                                                        !k &&
                                                          (0, R.tZ)(
                                                            f.default.Fragment,
                                                            {
                                                              children: A.map(
                                                                function (
                                                                  t,
                                                                  i
                                                                ) {
                                                                  return (0,
                                                                  R.tZ)(
                                                                    f.default
                                                                      .Fragment,
                                                                    {
                                                                      children:
                                                                        (0,
                                                                        R.tZ)(
                                                                          p.View,
                                                                          {
                                                                            className:
                                                                              "item " +
                                                                              (t.selected
                                                                                ? "cur"
                                                                                : ""),
                                                                            "data-type":
                                                                              "depart",
                                                                            "data-index":
                                                                              i,
                                                                            id: "AcFy",
                                                                            onClick:
                                                                              e.chooseAirport,
                                                                            children:
                                                                              t.airportName,
                                                                          }
                                                                        ),
                                                                    },
                                                                    i
                                                                  );
                                                                }
                                                              ),
                                                            }
                                                          ),
                                                      ],
                                                    }),
                                                    (0, R.tZ)(p.View, {
                                                      className: "tit",
                                                      children: "到达机场",
                                                    }),
                                                    (0, R.BX)(p.View, {
                                                      className:
                                                        "flight-screen-list " +
                                                        (i ? "ty" : "zx"),
                                                      children: [
                                                        k &&
                                                          (0, R.BX)(R.HY, {
                                                            children: [
                                                              (0, R.tZ)(
                                                                p.View,
                                                                {
                                                                  className:
                                                                    "item loading",
                                                                }
                                                              ),
                                                              (0, R.tZ)(
                                                                p.View,
                                                                {
                                                                  className:
                                                                    "item loading",
                                                                }
                                                              ),
                                                            ],
                                                          }),
                                                        !k &&
                                                          (0, R.tZ)(
                                                            f.default.Fragment,
                                                            {
                                                              children: F.map(
                                                                function (
                                                                  t,
                                                                  i
                                                                ) {
                                                                  return (0,
                                                                  R.tZ)(
                                                                    f.default
                                                                      .Fragment,
                                                                    {
                                                                      children:
                                                                        (0,
                                                                        R.tZ)(
                                                                          p.View,
                                                                          {
                                                                            className:
                                                                              "item " +
                                                                              (t.selected
                                                                                ? "cur"
                                                                                : ""),
                                                                            "data-type":
                                                                              "arrive",
                                                                            "data-index":
                                                                              i,
                                                                            id: "AcFz",
                                                                            onClick:
                                                                              e.chooseAirport,
                                                                            children:
                                                                              t.airportName,
                                                                          }
                                                                        ),
                                                                    },
                                                                    i
                                                                  );
                                                                }
                                                              ),
                                                            }
                                                          ),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                          "flight" === w &&
                                            (0, R.BX)(p.View, {
                                              className:
                                                "choose-box choose-flt",
                                              children: [
                                                (0, R.BX)(p.View, {
                                                  className: "top-item",
                                                  id: "AcGA",
                                                  onClick: this.toggleAllFlight,
                                                  children: [
                                                    "全部航班(" +
                                                      B.length +
                                                      ")",
                                                    (0, R.tZ)(p.Text, {
                                                      className:
                                                        "iconfont " +
                                                        (P
                                                          ? "ifont-checkboxed color-primary"
                                                          : "ifont-checkbox"),
                                                    }),
                                                  ],
                                                }),
                                                B.map(function (t, a) {
                                                  return (0,
                                                  R.tZ)(R.HY, { children: (0, R.BX)(p.View, { className: "flight_item", "data-index": a, id: "AcGB", onClick: e.chooseFlight, children: [(0, R.BX)(p.View, { className: "flt_intro", children: [(0, R.BX)(p.View, { className: "flt_col", children: [(0, R.BX)(p.View, { className: "flt_depart", children: [(0, R.tZ)(p.Text, { className: "flt_time", children: t.dptTimeStr }), (0, R.tZ)(p.Text, { className: "flt_airport", children: t.dptAName + t.dptTrm })] }), (0, R.BX)(p.View, { className: "separator", children: [(0, R.tZ)(p.View, { className: "spt_time", children: t.costTime }), (0, R.tZ)(p.View, { className: "spt_arr" }), t.abbr && (0, R.tZ)(p.View, { className: "spt_type " + (i ? "tred" : "tblue"), children: t.abbr })] }), (0, R.BX)(p.View, { className: "flt_arrival", children: [(0, R.tZ)(p.Text, { className: "flt_time", children: t.arrTimeStr }), (0, R.tZ)(p.Text, { className: "flt_airport", children: t.arrAName + t.arrTrm })] }), t.dayDiff > 0 && (0, R.tZ)(p.Text, { className: "next", children: "+" + t.dayDiff + "天" })] }), (0, R.BX)(p.View, { className: "price_col", children: [(0, R.tZ)(p.Text, { className: "flt_price color-red", children: t.apr }), t.discount && (0, R.tZ)(p.Text, { className: "flt_discount", children: t.discount })] })] }), (0, R.BX)(p.View, { className: "airline_info", children: [(0, R.tZ)(p.Image, { className: "airline_logo", src: t.sequences[0].airIcon }), (0, R.tZ)(p.Text, { className: "airline_num", children: t.sequences[0].airFullName + t.sequences[0].flightNo + (t.transfer ? " | " : "") }), t.transfer && (0, R.BX)(R.HY, { children: [(0, R.tZ)(p.Image, { className: "airline_logo", src: t.sequences[1].airIcon }), (0, R.tZ)(p.Text, { className: "airline_num", children: t.sequences[1].airFullName + t.sequences[1].flightNo })] }), t.stock && (0, R.tZ)(p.View, { className: "airline_tips", children: t.stock })] }), (0, R.tZ)(p.Text, { className: "iconfont " + (t.selected ? "ifont-checkboxed color-primary" : "ifont-checkbox") })] }) });
                                                }),
                                              ],
                                            }),
                                          (0, R.tZ)(p.View, {
                                            className:
                                              "check-fixed-btn " +
                                              (b ? "iphone-x" : ""),
                                            children: (0, R.tZ)(p.Button, {
                                              formType: "submit",
                                              className:
                                                "btn-confirm btn-primary",
                                              id: "AcGC",
                                              onClick:
                                                this.handleConditionCheck,
                                              children: "确定",
                                            }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  S &&
                                    (0, R.BX)(p.View, {
                                      className: "pop-mid pop-saving-tips",
                                      children: [
                                        (0, R.tZ)(p.Text, {
                                          className:
                                            "ifont-selected iconfont " +
                                            (i ? "ty" : "zx"),
                                        }),
                                        (0, R.tZ)(p.View, {
                                          className: "tit",
                                          children: a
                                            ? s + "-" + r
                                            : r + "-" + s,
                                        }),
                                        (0, R.BX)(p.View, {
                                          className: "txt",
                                          children: [
                                            X + "出发，低于",
                                            (0, R.tZ)(p.Text, {
                                              className: "color-red",
                                              children: "¥" + c,
                                            }),
                                            "时提醒我",
                                          ],
                                        }),
                                        _ &&
                                          (0, R.BX)(p.View, {
                                            className: "pop-saving-tips-bd",
                                            children: [
                                              (0, R.tZ)(p.Icon, {
                                                className: "icon-saving-pig",
                                              }),
                                              (0, R.BX)(p.View, {
                                                className: "tag bgcolor-red",
                                                children: [
                                                  "存钱罐",
                                                  (0, R.tZ)(p.Text, {
                                                    className: "price",
                                                    children: _,
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        L &&
                                          (0, R.tZ)(p.View, {
                                            className: "txt",
                                            children: L,
                                          }),
                                        !_ &&
                                          (0, R.tZ)(p.Image, {
                                            src:
                                              "https://pic.c-ctrip.com/train/zt/flight/pop-guide-jiankong-" +
                                              (i ? "ty" : "zx") +
                                              ".png",
                                            className: "img",
                                          }),
                                        (0, R.BX)(p.View, {
                                          className: "pop-btn",
                                          children: [
                                            (0, R.tZ)(p.Button, {
                                              className:
                                                "btn-cancel " +
                                                (i ? "ty" : "zx"),
                                              id: "AcGD",
                                              onClick: this.toMonitorDetail,
                                              children: "监控详情",
                                            }),
                                            (0, R.tZ)(p.Button, {
                                              className: "btn-primary",
                                              id: "AcGE",
                                              onClick: this.toMonitorList,
                                              children: "我知道了",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  (0, R.tZ)(V.Z, {
                                    ref: function (t) {
                                      e.onDialogAttach(t);
                                    },
                                  }),
                                ],
                              });
                            },
                          },
                        ]),
                        i
                      );
                    })(f.default.Component))
                  ) || L)
              ) || L;
          Page(
            (0, r.createPageConfig)(
              z,
              "pages/flight/monitoredit/monitoredit",
              { root: { cn: [] } },
              {
                disableScroll: !0,
                navigationBarTitleText: "监控设置",
                navigationBarFrontColor: "#ffffff",
                navigationBarBackgroundColor: "#0066E6",
                backgroundColorTop: "#0066E6",
                backgroundColorBottom: "#EFEFEF",
              } || {}
            )
          );
        },
      },
      function (e) {
        e.O(0, [14906, 49608, 19559, 11216, 68592], function () {
          return (function (t) {
            return e((e.s = t));
          })(47513);
        }),
          e.O();
      },
    ]);
})();
