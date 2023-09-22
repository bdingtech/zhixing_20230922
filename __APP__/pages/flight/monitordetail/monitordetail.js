!(function () {
  "use strict";
  require("../sub-vendors.js"),
    require("../sub-common/85ff8bfdb9e5cfb18ee76e4e8cb46fa1.js"),
    require("../sub-common/87dd7ca508f26cc44a96a97518946752.js"),
    require("../sub-common/1775d7c9f65b9a6f532fd61b25d0faaf.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [73568],
      {
        65084: function (e, t, a) {
          var i,
            s = a(32180),
            r = a(57042),
            n = a(24460),
            o = a(21867),
            c = a(86066),
            l = a(45023),
            d = a(22276),
            h = a(298),
            m = a(52500),
            u = a(71515),
            g = a(92954),
            p = a.n(g),
            f = a(49120),
            N = a(48792),
            w = a.n(N),
            v = a(2326),
            C = a(79910),
            b = a(79792),
            y = (a(5050), a(55916)),
            Z = a(20592),
            V = a(69006),
            D = a(2809),
            P = a(58676),
            T = a(4102),
            B = a(8271),
            x = a.n(B),
            k = a(13975),
            S = a(45245),
            X = a(41826),
            I = a(81957),
            L = a(48813),
            F = "YYYY-MM-DD",
            M = {
              M: { process: 5, title: "中速", speedNum: 10 },
              F: { process: 29, title: "快速", speedNum: 20 },
              H: { process: 50, title: "高速", speedNum: 45 },
              U: { process: 72, title: "极速", speedNum: 70 },
              L: { process: 100, title: "光速", speedNum: 100 },
            },
            A = "pages/flight/monitordetail/monitordetail",
            R = b.default.isTieyou,
            _ = { marginTop: "".concat(D.ZP.statusBarHeight + 39, "px") },
            q = {
              pageId: R ? "10650034591" : "10650032540",
              data: {
                isTieyou: R,
                departCityName: "",
                departCityCode: "",
                arriveCityName: "",
                arriveCityCode: "",
                departureDateRange: "",
                flightList: [],
                lowestPrice: 0,
                lowestPriceList: [],
                nearbyRecommendRoutes: [],
                qasList: [],
                speedInfo: {},
                canMakePic: !0,
                errorPicMsg: "",
                pictureStatus: "loading",
                showShareImages: !1,
                backgroundUrl: R
                  ? "https://images3.c-ctrip.com/zt/wechat/flight/monitor_share_bg_ty.png"
                  : "https://images3.c-ctrip.com/zt/wechat/flight/monitor_share_bg_zx.png",
                pagePath: "",
                savingPotPopupTab: "current",
              },
              onLoad: function (e) {
                var t = e.orderNumber,
                  a = e.from,
                  i = void 0 === a ? "" : a;
                console.log("orderNumber", t),
                  this.setData({ orderNumber: t, autoShare: 0, from: i }),
                  this.getMonitorDetail(),
                  this.getGrabQAList(),
                  this.checkUserShared(),
                  this.getSavingPotDetail(),
                  p().hideShareMenu && p().hideShareMenu();
              },
              clearTimer: function () {
                clearTimeout(this.timer), clearTimeout(this.activityTimer);
              },
              onUnload: function () {
                this.clearTimer();
              },
              onHide: function () {
                this.clearTimer();
              },
              onShow: function () {
                1 === Z.IK._modifyGrabOrder &&
                  ((Z.IK._modifyGrabOrder = 0),
                  this.getMonitorDetail({ type: 1 })),
                  this.data.savingPot &&
                    (this.assistCountDown(), this.savingCountDown());
              },
              checkUserShared: function () {
                try {
                  var e = p().getStorageSync("FLIGHT_MONITOR_SHARED");
                  this.setData({ shared: !!e });
                } catch (e) {
                  console.log(e);
                }
              },
              getMonitorDetail: function () {
                var e = this,
                  t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  a = t.type,
                  i = void 0 === a ? 0 : a,
                  s = this.data,
                  r = s.orderNumber,
                  n = s.pictureStatus,
                  o = { data: { orderNumber: r } };
                1 === i && (0, f.showLoading)(),
                  (0, k.dB)(o)
                    .then(
                      function (t) {
                        var a = t || {},
                          i = a.resultCode,
                          s = a.resultMessage,
                          r = a.data,
                          o = void 0 === r ? {} : r;
                        if (1 === i) {
                          var c = o.status,
                            l = o.departureCityName,
                            d = o.departureCityCode,
                            m = o.arrivalCityName,
                            u = o.arrivalCityCode,
                            g = o.lowestPrice,
                            p = o.lowestPriceDate,
                            f = o.speedInfo,
                            N = o.acceptablePrice,
                            w = o.takeOffTimeDesc,
                            v = o.departureDateDesc,
                            C = o.nonstopDesc,
                            b = o.acceptablePriceDesc,
                            y = o.flightNumbersDesc,
                            Z = o.departureAirportCodes,
                            V = void 0 === Z ? "" : Z,
                            D = o.arrivalAirportCodes,
                            P = void 0 === D ? "" : D,
                            B = o.departureDateRange
                              .split(",")
                              .map(function (e) {
                                var t = x()(e);
                                return {
                                  date: e,
                                  monthDate: t.format("MM-DD"),
                                  week: T.Z.getWeekDayDesc(t),
                                };
                              }),
                            k = B.findIndex(function (e) {
                              return e.date === p;
                            }),
                            S = v.split("、");
                          e.setData({
                            status: c,
                            departCityName: l,
                            departCityCode: d,
                            arriveCityName: m,
                            arriveCityCode: u,
                            departureAirportCodes: V ? V.split(",") : [],
                            arrivalAirportCodes: P ? P.split(",") : [],
                            departureDateRange: B,
                            departureDateRangeIndex: k,
                            lowestPrice: g,
                            lowestPriceDate: p,
                            departureDateDesc: v,
                            topDepartureDateDesc:
                              S.slice(0, 3).join(",") +
                              (S.length > 3 ? "..." : ""),
                            takeOffTimeDesc: w,
                            nonstopDesc: C,
                            acceptablePriceDesc: b,
                            flightNumbersDesc: y,
                            acceptablePrice: N,
                            speedInfo: (0, h.Z)(
                              (0, h.Z)({}, f),
                              {},
                              {
                                process: M[f.speed].process,
                                speedCN: M[f.speed].title,
                                speedNum: M[f.speed].speedNum,
                                nextSpeedCN: M[f.nextSpeed || "L"].title,
                              }
                            ),
                            pagePath: ""
                              .concat(A, "?orderNumber=")
                              .concat(encodeURIComponent(f.shareToken)),
                            rangeDateView: "d-".concat(k - 2),
                          }),
                            e.getFlightList(p),
                            e.getFlightLowestPriceList(),
                            e.getNearByRecommend(),
                            "success" !== n &&
                              e.canvasImage &&
                              e.canvasImage.retry(),
                            (e._detail = o);
                        } else e.showCommonDialog(s || "网络错误，请稍后再试~");
                      },
                      function (e) {
                        console.log(e);
                      }
                    )
                    .finally(function () {
                      (0, f.hideLoading)();
                    });
              },
              refCanvasImage: function (e) {
                this.canvasImage = e;
              },
              handleFlightDateClick: function (e) {
                var t = e.currentTarget.dataset.index,
                  a = this.data,
                  i = a.departureDateRange;
                if (a.departureDateRangeIndex !== t) {
                  var s = i[t].date;
                  this.setData({ departureDateRangeIndex: t }),
                    console.log(this._flightListStore),
                    this._flightListStore[s]
                      ? this.setData({
                          flightList: this._flightListStore[s].flightList,
                        })
                      : ((0, f.showLoading)(), this.getFlightList(s));
                }
              },
              getFlightList: function (e) {
                var t = this,
                  a = this.data,
                  i = a.departCityCode,
                  s = a.arriveCityCode,
                  r = a.lowestPriceDate,
                  n = a.departureAirportCodes,
                  o = a.arrivalAirportCodes,
                  c = {
                    data: {
                      version: 4,
                      source: 1,
                      cacheUsage: 0,
                      hasChild: !1,
                      hasBaby: !1,
                      segments: [{ dptDate: e, dptCode: i, arrCode: s }],
                    },
                  };
                (0, y.j7)(c)
                  .then(function (a) {
                    var i = a || {},
                      s = i.resultCode,
                      c = i.data,
                      l = void 0 === c ? {} : c,
                      h = t.handleFlightData((l && l.singles) || []),
                      m = t.handleFlightData((l && l.recommends) || []),
                      u = [].concat((0, d.Z)(h), (0, d.Z)(m));
                    if (1 === s && u.length > 0) {
                      var g = u.filter(function (e) {
                          var t =
                              !!C.Z.isEmptyArray(n) ||
                              n.some(function (t) {
                                return t === e.dptACode;
                              }),
                            a =
                              !!C.Z.isEmptyArray(o) ||
                              o.some(function (t) {
                                return t === e.arrACode;
                              });
                          return t && a;
                        }),
                        p = C._.sortBy(g, function (e) {
                          return e.apr;
                        }).slice(0, 3);
                      t.setData({ flightList: p }),
                        r === e && t.setData({ successFlight: p[0] }),
                        t._flightListStore || (t._flightListStore = {}),
                        (t._flightListStore[e] = { flightList: p });
                    }
                  })
                  .catch(function (e) {
                    console.error(e);
                  })
                  .finally(function () {
                    (0, f.hideLoading)();
                  });
              },
              handleFlightData: function (e) {
                return e.map(function (e) {
                  var t = x()(S.Z.formatDateWithSlash(e.dptTime)),
                    a = x()(S.Z.formatDateWithSlash(e.arrTime));
                  return (0,
                  h.Z)((0, h.Z)({}, e), {}, { departDate: t.format(F), departMonthDate: t.format("MM-DD"), dptTimeStr: t.format("HH:mm"), arrTimeStr: a.format("HH:mm"), dayDiff: v.Z.getDayDiff(t.format(F), a.format(F)), abbr: e.abbr ? e.abbr.replace("|", "") : "", transfer: e.sequences.length > 1, airCode: e.sequences[0].airCode, cfts: e.sequences[0].cfts, departTimeHourSection: Math.floor(new Date(S.Z.formatDateWithSlash(e.dptTime)).getHours() / 6) });
                });
              },
              handleFlightItemClick: function (e) {
                var t = e.currentTarget.dataset.index,
                  a = this.data,
                  i = a.departureDateRangeIndex,
                  s = a.departureDateRange[i].date,
                  r = this._flightListStore[s].flightList[t];
                console.log(r), this.toBookX({ flight: r });
              },
              toBookX: function (e) {
                var t = e.flight,
                  a = t.sequences,
                  i = t.token,
                  s = [{}];
                (s[0].flights = a.map(function (e) {
                  return {
                    dptTime: e.dptTime,
                    arrTime: e.arrTime,
                    airFullName: e.airFullName,
                    flightNo: e.flightNo,
                    dptAName: e.dpt,
                    arrAName: e.arr,
                    stop: e.stop,
                  };
                })),
                  this.navigateTo({
                    url: "../bookx/bookx?token=".concat(encodeURIComponent(i)),
                    data: { segments: s, query: {} },
                  });
              },
              handleMoreFlightListClick: function (e) {
                var t = e.currentTarget.dataset.date,
                  a = this.data,
                  i = a.departureDateRangeIndex,
                  s = a.departureDateRange,
                  r = a.departCityCode,
                  n = a.arriveCityCode,
                  o = {
                    departCityName: a.departCityName,
                    departCityCode: r,
                    arriveCityName: a.arriveCityName,
                    arriveCityCode: n,
                    departDate: t || s[i].date,
                  };
                this.toFlightList(o);
              },
              getSavingPotDetail: function () {
                var e = this,
                  t = { data: { orderNumber: this.data.orderNumber } };
                (0, k.R0)(t)
                  .then(function (t) {
                    console.log(t);
                    var a = t || {},
                      i = a.resultCode,
                      s = a.data,
                      r = void 0 === s ? {} : s;
                    1 === i &&
                      (e.setData({ savingPot: r }),
                      e.assistCountDown(),
                      e.savingCountDown());
                  })
                  .catch(function () {});
              },
              assistCountDown: function () {
                var e = this.data.savingPot,
                  t = (e.assistInfo && e.assistInfo.expiredTime) || "";
                if (t) {
                  var a = v.Z.countDown(t),
                    i = a.hour,
                    s = a.min,
                    r = a.sec;
                  if (a.end)
                    return (
                      clearTimeout(this.timer), void this.getSavingPotDetail()
                    );
                  this.setData({
                    savingPot: (0, h.Z)(
                      (0, h.Z)({}, e),
                      {},
                      {
                        assistLastTime: ""
                          .concat(i, ":")
                          .concat(s, ":")
                          .concat(r),
                      }
                    ),
                  }),
                    (this.timer = setTimeout(this.assistCountDown, 1e3));
                }
              },
              savingCountDown: function () {
                var e = this.data.savingPot;
                if (e.expiredTime) {
                  var t = v.Z.countDown(e.expiredTime),
                    a = t.hour,
                    i = t.min,
                    s = t.sec;
                  if (t.end)
                    return (
                      clearTimeout(this.activityTimer),
                      void this.getSavingPotDetail()
                    );
                  var r = Math.floor(a / 24);
                  this.setData({
                    savingPot: (0, h.Z)(
                      (0, h.Z)({}, e),
                      {},
                      {
                        activityLastTime:
                          r > 0
                            ? ""
                                .concat(r, "天 ")
                                .concat(a - 24 * r, ":")
                                .concat(i, ":")
                                .concat(s)
                            : "".concat(a, ":").concat(i, ":").concat(s),
                      }
                    ),
                  }),
                    (this.activityTimer = setTimeout(
                      this.savingCountDown,
                      1e3
                    ));
                } else
                  this.setData({
                    savingPot: (0, h.Z)(
                      (0, h.Z)({}, e),
                      {},
                      {
                        activityLastTime: "".concat(e.distanceExpiredDay, "天"),
                      }
                    ),
                  });
              },
              handleCheckInClick: function () {
                var e = this,
                  t = this.data.savingPot,
                  a = t.savingPotId;
                if (t.collectInfo.btnEnable) {
                  var i = { data: { savingPotId: a } };
                  (0, k.$K)(i)
                    .then(function (t) {
                      var a = t || {},
                        i = a.resultCode,
                        s = a.resultMessage;
                      1 === i
                        ? ((0, f.showToast)(s || "签到成功"),
                          e.getSavingPotDetail())
                        : e.showCommonDialog(s || "网络错误，请稍后再试~");
                    })
                    .catch(function () {
                      e.showCommonDialog("网络错误，请稍后再试~");
                    });
                }
              },
              toggleSavingPotRule: function () {
                var e = this,
                  t = this.data.showSavingPotRule;
                this.setData({
                  mask: !t,
                  maskType: "rule",
                  showSavingPotRule: !t,
                }),
                  setTimeout(function () {
                    e.setData({ transition: !t });
                  }, 10);
              },
              toggleSavingPotRecord: function () {
                var e = this,
                  t = this.data.showSavingPotRecord;
                this.setData({
                  mask: !t,
                  maskType: "record",
                  showSavingPotRecord: !t,
                }),
                  setTimeout(function () {
                    e.setData({ transition: !t });
                  }, 10);
              },
              switchSavingPotPopupTab: function (e) {
                var t = e.currentTarget.dataset.type;
                t !== this.data.savingPotPopupTab &&
                  this.setData({ savingPotPopupTab: t });
              },
              handleAssistBtnClick: function () {
                this.data.savingPot.assistInfo.btnEnable &&
                  this.toggleSavingPotSharePanel();
              },
              toggleSavingPotSharePanel: function () {
                var e = this,
                  t = this.data.showSavingPotSharePanel;
                this.setData({
                  mask: !t,
                  maskType: "savingPotShare",
                  showSavingPotSharePanel: !t,
                }),
                  setTimeout(function () {
                    e.setData({ transition: !t });
                  }, 10);
              },
              handleCouponItemClick: function (e) {
                var t = this,
                  a = e.currentTarget.dataset.index,
                  i = this.data.savingPot.couponList[a];
                if (i.btnEnable) {
                  var s = {
                    source: "savingPotDetail",
                    scene: i.scene,
                    promotionKeys: i.promotionKeys,
                  };
                  (0, k.oB)(s)
                    .then(function (e) {
                      var a = (e || {}).data,
                        i = void 0 === a ? {} : a;
                      (0, f.showToast)(i.title || "网络错误，请稍后再试~"),
                        t.getSavingPotDetail();
                    })
                    .catch(function () {
                      t.showCommonDialog("网络错误，请稍后再试~");
                    });
                }
              },
              toggleMonitorDetailPanel: function () {
                var e = this,
                  t = this.data.showMonitorDetail;
                this.setData({
                  mask: !t,
                  maskType: "detail",
                  showMonitorDetail: !t,
                }),
                  setTimeout(function () {
                    e.setData({ transition: !t });
                  }, 10);
              },
              closeMask: function (e) {
                var t = e.currentTarget.dataset.type;
                "detail" === t
                  ? this.toggleMonitorDetailPanel()
                  : "share" === t
                  ? this.toggleSharePanel()
                  : "sharePYQ" === t
                  ? this.hideSharePicturePopup()
                  : "rule" === t
                  ? this.toggleSavingPotRule()
                  : "record" === t
                  ? this.toggleSavingPotRecord()
                  : "savingPotShare" === t && this.toggleSavingPotSharePanel();
              },
              handleMonitorCancel: function () {
                var e = this,
                  t = { data: { orderNumber: this.data.orderNumber } };
                (0, y.Xe)(t).then(
                  function (t) {
                    var a = t || {},
                      i = a.resultCode,
                      s = a.resultMessage;
                    1 === i
                      ? e.navigateBack()
                      : e.showCommonDialog(s || "网络错误，请稍后再试~");
                  },
                  function (e) {
                    console.log(e);
                  }
                );
              },
              toMonitorEdit: function () {
                var e = this.data,
                  t = e.departCityName,
                  a = e.departCityCode,
                  i = e.arriveCityName,
                  s = e.arriveCityCode,
                  r = e.lowestPriceDate,
                  n = e.departureDateRange,
                  o = e.orderNumber,
                  c = this._detail,
                  l = c.takeOffTimeFrom,
                  d = c.takeOffTimeTo,
                  h = c.nonstop,
                  m = c.departureAirportCodes,
                  u = c.arrivalAirportCodes,
                  g = c.specifiedFlightNumbers;
                this.navigateTo({
                  url: "/pages/flight/monitoredit/monitoredit?departCityName="
                    .concat(t, "&departCityCode=")
                    .concat(a, "&arriveCityName=")
                    .concat(i, "&arriveCityCode=")
                    .concat(s, "&selectDate=")
                    .concat(r, "&orderNumber=")
                    .concat(o, "&monitorType=edit&fromPage=monitor_detail"),
                  data: {
                    selectDate: n.map(function (e) {
                      return e.date;
                    }),
                    takeOffTimeFrom: l,
                    takeOffTimeTo: d,
                    nonstop: h,
                    departureAirportCodes: m,
                    arrivalAirportCodes: u,
                    specifiedFlightNumbers: g,
                  },
                });
              },
              getFlightLowestPriceList: function () {
                var e = this,
                  t = this.data,
                  a = {
                    data: {
                      departCityCode: t.departCityCode,
                      arriveCityCode: t.arriveCityCode,
                    },
                  };
                (0, y.MX)(a).then(function (t) {
                  t &&
                    t.data &&
                    t.data.length &&
                    e.setData({
                      lowestPriceList: e.handleLowestPriceList(t.data),
                    });
                });
              },
              handleLowestPriceList: function (e) {
                if (!e || 0 === e.length) return [];
                for (
                  var t = this.data.lowestPriceDate,
                    a = [],
                    i = x()(t).subtract(15, "day"),
                    s = 0;
                  s < 30;
                  s++
                ) {
                  var r = i.add(1, "day");
                  a.push(r.format(F));
                }
                return e
                  .filter(function (e) {
                    return a.some(function (t) {
                      return (
                        t ===
                        x()(S.Z.formatDateWithSlash(e.flightDate)).format(F)
                      );
                    });
                  })
                  .slice(0, 3)
                  .map(function (e) {
                    var t = x()(S.Z.formatDateWithSlash(e.flightDate));
                    return {
                      price: e.price,
                      flightDate: t.format(F),
                      monthDate: t.format("MM-DD"),
                      week: T.Z.getWeekDayDesc(t),
                    };
                  });
              },
              handleDiJiaDateClick: function (e) {
                var t = e.currentTarget.dataset.date,
                  a = this.data,
                  i = {
                    departCityName: a.departCityName,
                    departCityCode: a.departCityCode,
                    arriveCityName: a.arriveCityName,
                    arriveCityCode: a.arriveCityCode,
                    departDate: t,
                  };
                this.toFlightList(i);
              },
              getNearByRecommend: function () {
                var e = this,
                  t = this.data,
                  a = t.departCityCode,
                  i = t.arriveCityCode,
                  s = t.lowestPrice,
                  r = t.lowestPriceDate,
                  n = t.acceptablePrice,
                  o = {
                    data: {
                      version: 3,
                      departureCityCode: a,
                      arrivalCityCode: i,
                      departureDate: r,
                      lowestPrice: s,
                      tripType: 0,
                      transType: 1,
                    },
                  };
                (0, y.l5)(o).then(function (t) {
                  var a = t.resultCode,
                    i = t.data,
                    s = (void 0 === i ? {} : i).lowestPriceFlightRoutes || [];
                  if (1 === a && s.length > 0) {
                    var r = C._.sortBy(s, function (e) {
                      return e.lowestPrice;
                    });
                    e.setData({
                      nearbyRecommendRoutes: r.slice(0, 3).map(function (e) {
                        var t = x()(e.departureDate);
                        return (0,
                        h.Z)((0, h.Z)({}, e), {}, { monthDate: t.format("MM-DD"), week: T.Z.getWeekDayDesc(t), trend: e.lowestPrice - n });
                      }),
                    });
                  }
                });
              },
              handleNearbyRecommendClick: function (e) {
                var t = e.currentTarget.dataset.index,
                  a = this.data.nearbyRecommendRoutes[t],
                  i = {
                    departCityName: a.departureCityName,
                    departCityCode: a.departureCityCode,
                    arriveCityName: a.arrivalCityName,
                    arriveCityCode: a.arrivalCityCode,
                    departDate: a.departureDate,
                    isIntl: a.international,
                  };
                this.toFlightList(i);
              },
              toFlightList: function (e) {
                var t = e.departCityName,
                  a = e.departCityCode,
                  i = e.arriveCityName,
                  s = e.arriveCityCode,
                  r = e.departDate,
                  n = e.returnDate,
                  o = void 0 === n ? "" : n,
                  c = e.fromPage,
                  l = e.isIntl
                    ? "/pages/flightIntl/list/list"
                    : "/pages/flight/list/list";
                this.navigateTo({
                  url: ""
                    .concat(l, "?departCity=")
                    .concat(t, "&departCityCode=")
                    .concat(a, "&arriveCity=")
                    .concat(i, "&arriveCityCode=")
                    .concat(s, "&departDate=")
                    .concat(r, "&returnDate=")
                    .concat(o, "&nearby=1")
                    .concat(c ? "&fromPage=" + c : ""),
                });
              },
              getGrabQAList: function () {
                var e = this;
                (0, k.XY)()
                  .then(function (t) {
                    var a = t.resultCode,
                      i = t.data;
                    if (1 === a) {
                      var s = (void 0 === i ? {} : i).qas || [];
                      e.setData({
                        qasList: s.map(function (e) {
                          return (0, h.Z)((0, h.Z)({}, e), {}, { open: !1 });
                        }),
                      });
                    }
                  })
                  .catch();
              },
              toggleQAList: function (e) {
                var t = e.currentTarget.dataset.index,
                  a = this.data.qasList,
                  i = a[t].open;
                this.setData(
                  (0, l.Z)(
                    {},
                    "qasList[".concat(t, "]"),
                    (0, h.Z)((0, h.Z)({}, a[t]), {}, { open: !i })
                  )
                );
              },
              toggleSharePanel: function () {
                var e = this,
                  t = this.data.showSharePanel;
                this.setData({
                  mask: !t,
                  maskType: "share",
                  showSharePanel: !t,
                }),
                  setTimeout(function () {
                    e.setData({ transition: !t });
                  }, 10);
              },
              onShareAppMessage: function (e) {
                var t = e.target.dataset.type,
                  a = this.data.isTieyou;
                if ("savingPot" === t) {
                  var i = this.data,
                    s = i.orderNumber,
                    r = i.showSavingPotSharePanel,
                    n = i.savingPot.assistInfo.shareKey;
                  return (
                    console.log("存钱罐分享key: ", n),
                    r && this.toggleSavingPotSharePanel(),
                    {
                      title: "快来帮我点一下，我在".concat(
                        a ? "铁友" : "智行",
                        "监控低价机票，还可以领钱"
                      ),
                      desc: "快来帮我点一下，我在".concat(
                        a ? "铁友" : "智行",
                        "监控低价机票，还可以领钱"
                      ),
                      path: "/pages/activity/flight/monitor/index?shareKey="
                        .concat(encodeURIComponent(n), "&orderNumber=")
                        .concat(s),
                      imageUrl:
                        "https://images3.c-ctrip.com/train/hd/20200414-flight-monitor/share.png",
                    }
                  );
                }
              },
              shareToPengYouQuan: function () {
                var e = this,
                  t = this.data,
                  a = t.canMakePic,
                  i = t.errorPicMsg;
                if ((this.toggleSharePanel(), !a))
                  return this.showCommonDialog(i);
                setTimeout(function () {
                  e.setData({
                    mask: !0,
                    maskType: "sharePYQ",
                    showShareImages: !0,
                  }),
                    setTimeout(function () {
                      e.setData({ transition: !0 });
                    }, 10);
                }, 250);
              },
              hideSharePicturePopup: function () {
                this.setData({
                  mask: !1,
                  maskType: "",
                  showShareImages: !1,
                  transition: !1,
                });
              },
              onSharePictureSuccess: function () {
                var e = this.data.autoShare;
                (0, f.hideLoading)(),
                  this.setData({ pictureStatus: "success" }),
                  e && this.toggleSharePanel();
              },
              onSharePictureFail: function (e) {
                console.log(e.detail),
                  this.data.showShareImages &&
                    ((0, f.hideLoading)(), (0, f.showToast)(e.detail.msg)),
                  this.setData({ canMakePic: !1, errorPicMsg: e.detail.msg });
              },
              onSharePictureSave: function () {
                var e = this.data.shared;
                this.hideSharePicturePopup(),
                  e ||
                    (this.doBoostByFirstShare(),
                    this.setData({ shared: !0 }),
                    p().setStorage({ key: "FLIGHT_MONITOR_SHARED", data: !0 })),
                  this.showCommonDialog("图片保存成功，快去发个朋友圈吧");
              },
              onBack: function () {
                "monitorList" === this.data.from
                  ? this.navigateBack()
                  : p().reLaunch({
                      url: "/pages/trnshare/grablist/grablist?orderType=flightOrder&fromPage=xcx_jk_detail",
                    });
              },
              noop: function () {},
              doBoostByFirstShare: function () {
                var e = { type: 1, orderNumber: this.data.orderNumber };
                (0, k.Li)(e)
                  .then(function (e) {
                    console.log(e);
                  })
                  .catch(function () {});
              },
            },
            H =
              (0, I.h)()(
                (i =
                  w()(q)(
                    (i = (function (e) {
                      (0, o.Z)(a, e);
                      var t = (0, c.Z)(a);
                      function a() {
                        return (0, r.Z)(this, a), t.apply(this, arguments);
                      }
                      return (
                        (0, n.Z)(a, [
                          {
                            key: "render",
                            value: function () {
                              var e = this,
                                t = this.data,
                                a = t.isTieyou,
                                i = t.status,
                                s = t.topDepartureDateDesc,
                                r = t.acceptablePrice,
                                n = t.departCityName,
                                o = t.arriveCityName,
                                c = t.successFlight,
                                l = t.savingPot,
                                d = t.speedInfo,
                                h = t.rangeDateView,
                                m = t.departureDateRange,
                                g = t.departureDateRangeIndex,
                                p = t.flightList,
                                f = t.hasChild,
                                N = t.hasBaby,
                                w = t.departureDateDesc,
                                v = t.takeOffTimeDesc,
                                C = t.lowestPriceList,
                                b = t.nearbyRecommendRoutes,
                                y = t.qasList,
                                Z = t.transition,
                                D = t.mask,
                                T = t.maskType,
                                B = t.showMonitorDetail,
                                x = t.nonstopDesc,
                                k = t.acceptablePriceDesc,
                                S = t.flightNumbersDesc,
                                I = t.showSharePanel,
                                F = t.shared,
                                M = t.showSavingPotSharePanel,
                                A = t.showShareImages,
                                q = t.backgroundUrl,
                                H = t.pagePath,
                                Y = t.showSavingPotRule,
                                E = t.showSavingPotRecord,
                                O = t.savingPotPopupTab;
                              return (0, L.BX)(L.HY, {
                                children: [
                                  (0, L.tZ)(V.Z, {
                                    title: "监控详情",
                                    navigationBarFrontColor: R
                                      ? "#3C4365"
                                      : "#0080FF",
                                    onBack: this.onBack,
                                  }),
                                  (0, L.BX)(u.View, {
                                    className:
                                      "monitor-top " + (a ? "ty" : "zx"),
                                    style: _,
                                    children: [
                                      (0, L.BX)(u.View, {
                                        className: "lbox",
                                        children: [
                                          1 === i &&
                                            (0, L.BX)(L.HY, {
                                              children: [
                                                (0, L.tZ)(u.View, {
                                                  className: "loading anim",
                                                }),
                                                (0, L.tZ)(u.Icon, {
                                                  className: "icon-light",
                                                }),
                                              ],
                                            }),
                                          1 !== i &&
                                            (0, L.tZ)(u.View, {
                                              className: "icon-suc",
                                            }),
                                        ],
                                      }),
                                      1 === i &&
                                        (0, L.BX)(u.View, {
                                          className: "cont",
                                          children: [
                                            (0, L.tZ)(u.View, {
                                              className: "tit",
                                              children: "正在监控中",
                                            }),
                                            (0, L.tZ)(u.View, {
                                              className: "txt",
                                              children: s + "出发 | 预算¥" + r,
                                            }),
                                          ],
                                        }),
                                      3 === i &&
                                        (0, L.BX)(u.View, {
                                          className: "cont",
                                          children: [
                                            (0, L.tZ)(u.View, {
                                              className: "tit",
                                              children: "已取消",
                                            }),
                                            (0, L.tZ)(u.View, {
                                              className: "txt",
                                              children: "任务已取消",
                                            }),
                                          ],
                                        }),
                                      4 === i &&
                                        (0, L.BX)(u.View, {
                                          className: "cont",
                                          children: [
                                            (0, L.tZ)(u.View, {
                                              className: "tit",
                                              children: "已过期",
                                            }),
                                            (0, L.tZ)(u.View, {
                                              className: "txt",
                                              children: "任务已过期",
                                            }),
                                          ],
                                        }),
                                      5 === i &&
                                        (0, L.BX)(u.View, {
                                          className: "cont",
                                          children: [
                                            (0, L.tZ)(u.View, {
                                              className: "tit",
                                              children: "监控成功",
                                            }),
                                            (0, L.tZ)(u.View, {
                                              className: "txt",
                                              children:
                                                "已为您监控到低价，建议尽快购买",
                                            }),
                                          ],
                                        }),
                                    ],
                                  }),
                                  (0, L.BX)(u.View, {
                                    className: "wrap",
                                    children: [
                                      c &&
                                        (0, L.BX)(u.View, {
                                          className: "white-box tick-box",
                                          children: [
                                            (0, L.BX)(u.View, {
                                              className: "tick-bd",
                                              children: [
                                                (0, L.BX)(u.View, {
                                                  className: "cont",
                                                  children: [
                                                    (0, L.BX)(u.View, {
                                                      className: "fromto",
                                                      children: [
                                                        n,
                                                        (0, L.tZ)(u.Text, {
                                                          className:
                                                            "ifont-trainfromto iconfont",
                                                        }),
                                                        o,
                                                      ],
                                                    }),
                                                    (0, L.BX)(u.View, {
                                                      className: "airline-info",
                                                      children: [
                                                        (0, L.BX)(u.View, {
                                                          className: "item",
                                                          children: [
                                                            (0, L.tZ)(u.Image, {
                                                              className:
                                                                "airline-logo",
                                                              src: c
                                                                .sequences[0]
                                                                .airIcon,
                                                            }),
                                                            c.sequences[0]
                                                              .airFullName +
                                                              c.sequences[0]
                                                                .flightNo,
                                                          ],
                                                        }),
                                                        (0, L.tZ)(u.View, {
                                                          className: "item",
                                                          children:
                                                            (c.departMonthDate ||
                                                              "") +
                                                            " " +
                                                            (c.dptTimeStr ||
                                                              "") +
                                                            "起飞",
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                                (0, L.BX)(u.View, {
                                                  className: "rbox",
                                                  children: [
                                                    (0, L.tZ)(u.View, {
                                                      className:
                                                        "price color-red",
                                                      children: c.apr,
                                                    }),
                                                    (0, L.BX)(u.View, {
                                                      className:
                                                        "tag bdcolor-red color-red",
                                                      children: [
                                                        r - c.apr > 0 &&
                                                          (0, L.tZ)(u.Text, {
                                                            className:
                                                              "ifont-down iconfont",
                                                          }),
                                                        r - c.apr > 0
                                                          ? "比预算低¥" +
                                                            (r - c.apr)
                                                          : "当前最低",
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            (0, L.BX)(u.Button, {
                                              className:
                                                "btn-primary btn-submit",
                                              "data-index": "0",
                                              id: "AcFN",
                                              onClick:
                                                this.handleFlightItemClick,
                                              children: [
                                                "立即预订",
                                                l &&
                                                  l.savedCash &&
                                                  (0, L.tZ)(u.Text, {
                                                    className: "btn-tag",
                                                    children:
                                                      "出行返¥" + l.savedCash,
                                                  }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      l &&
                                        l.savingPotId &&
                                        (0, L.BX)(u.View, {
                                          className: "white-box saving-pot",
                                          children: [
                                            (0, L.BX)(u.View, {
                                              className: "saving-pot-hd",
                                              children: [
                                                (0, L.tZ)(u.View, {
                                                  className: "lbox",
                                                  children: (0, L.tZ)(u.Icon, {
                                                    className:
                                                      "icon-saving-pig",
                                                  }),
                                                }),
                                                (0, L.BX)(u.View, {
                                                  className: "cont",
                                                  children: [
                                                    (0, L.BX)(u.View, {
                                                      className: "tit",
                                                      children: [
                                                        "监控存钱罐",
                                                        (0, L.tZ)(u.Text, {
                                                          className:
                                                            "ifont-qus iconfont",
                                                          id: "AcFO",
                                                          onClick:
                                                            this
                                                              .toggleSavingPotRule,
                                                        }),
                                                      ],
                                                    }),
                                                    (0, L.tZ)(u.View, {
                                                      className: "txt",
                                                      children: l.remark,
                                                    }),
                                                  ],
                                                }),
                                                (0, L.BX)(u.View, {
                                                  className: "rbox",
                                                  children: [
                                                    (0, L.BX)(u.View, {
                                                      className: "txt",
                                                      children: [
                                                        "已存",
                                                        (0, L.tZ)(u.Text, {
                                                          className:
                                                            "color-red price",
                                                          id: "AcFP",
                                                          onClick:
                                                            this
                                                              .toggleSavingPotRecord,
                                                          children: l.savedCash,
                                                        }),
                                                        (0, L.tZ)(u.Text, {
                                                          className:
                                                            "ifont-arr iconfont",
                                                        }),
                                                      ],
                                                    }),
                                                    (0, L.tZ)(u.View, {
                                                      className: "txt",
                                                      children:
                                                        l.activityLastTime +
                                                        "后失效",
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            (0, L.BX)(u.View, {
                                              className: "saving-pot-bd",
                                              children: [
                                                0 === l.status &&
                                                  (0, L.BX)(u.View, {
                                                    className:
                                                      "activity qiandao",
                                                    children: [
                                                      (0, L.tZ)(u.View, {
                                                        className:
                                                          "tit color-red",
                                                        children:
                                                          l.collectInfo.title,
                                                      }),
                                                      (0, L.tZ)(u.View, {
                                                        className: "txt",
                                                        children:
                                                          l.collectInfo.remark,
                                                      }),
                                                      (0, L.tZ)(u.Button, {
                                                        className: l.collectInfo
                                                          .btnEnable
                                                          ? "btn-red"
                                                          : "btn-primary",
                                                        disabled:
                                                          !l.collectInfo
                                                            .btnEnable,
                                                        id: "AcFQ",
                                                        onClick:
                                                          this
                                                            .handleCheckInClick,
                                                        children:
                                                          l.collectInfo.btnText,
                                                      }),
                                                    ],
                                                  }),
                                                0 === l.status &&
                                                  (0, L.BX)(u.View, {
                                                    className:
                                                      "activity pingtuan",
                                                    children: [
                                                      (0, L.BX)(u.View, {
                                                        className: "tit torage",
                                                        children: [
                                                          l.assistInfo.title,
                                                          l.assistInfo
                                                            .btnEnable &&
                                                            (0, L.tZ)(u.Text, {
                                                              className: "tag",
                                                              children:
                                                                l.assistLastTime,
                                                            }),
                                                        ],
                                                      }),
                                                      l.assistInfo &&
                                                        (0, L.BX)(u.View, {
                                                          className: "pt",
                                                          children: [
                                                            l.assistInfo
                                                              .assistanceList &&
                                                              l.assistInfo.assistanceList.map(
                                                                function (e) {
                                                                  return (0,
                                                                  L.tZ)(L.HY, {
                                                                    children:
                                                                      (0, L.tZ)(
                                                                        u.Image,
                                                                        {
                                                                          src: e.portrait,
                                                                          className:
                                                                            "avatar",
                                                                        }
                                                                      ),
                                                                  });
                                                                }
                                                              ),
                                                            (0, L.tZ)(u.View, {
                                                              className: "txt",
                                                              children:
                                                                l.assistInfo
                                                                  .remark,
                                                            }),
                                                          ],
                                                        }),
                                                      l.assistInfo.btnText &&
                                                        (0, L.tZ)(u.Button, {
                                                          className: l
                                                            .assistInfo
                                                            .btnEnable
                                                            ? "btn-orage"
                                                            : "btn-primary",
                                                          disabled:
                                                            !l.assistInfo
                                                              .btnEnable,
                                                          id: "AcFR",
                                                          onClick:
                                                            this
                                                              .handleAssistBtnClick,
                                                          children:
                                                            l.assistInfo
                                                              .btnText,
                                                        }),
                                                    ],
                                                  }),
                                                l.couponList &&
                                                  l.couponList.length > 0 &&
                                                  l.couponList.map(function (
                                                    t,
                                                    i
                                                  ) {
                                                    return (0, L.BX)(
                                                      u.View,
                                                      {
                                                        className: "coupon",
                                                        children: [
                                                          (0, L.BX)(u.View, {
                                                            className: "cont",
                                                            children: [
                                                              (0, L.tZ)(
                                                                u.View,
                                                                {
                                                                  className:
                                                                    "tit",
                                                                  children:
                                                                    t.couponTitle,
                                                                }
                                                              ),
                                                              (0, L.tZ)(
                                                                u.View,
                                                                {
                                                                  className:
                                                                    "txt",
                                                                  children:
                                                                    t.couponDesc,
                                                                }
                                                              ),
                                                            ],
                                                          }),
                                                          (0, L.tZ)(u.Button, {
                                                            className:
                                                              "btn-line2 " +
                                                              (a ? "ty" : "zx"),
                                                            disabled:
                                                              !t.btnEnable,
                                                            "data-index": i,
                                                            id: "AcFS",
                                                            onClick:
                                                              e.handleCouponItemClick,
                                                            children: t.btnText,
                                                          }),
                                                        ],
                                                      },
                                                      "index"
                                                    );
                                                  }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      !1,
                                      (0, L.BX)(u.View, {
                                        className: "white-box current-box",
                                        children: [
                                          (0, L.tZ)(u.View, {
                                            className: "htit",
                                            children: "当前低价",
                                          }),
                                          m.length > 1 &&
                                            (0, L.tZ)(u.View, {
                                              className:
                                                "current-date " +
                                                (a ? "ty" : "zx"),
                                              children: (0, L.tZ)(
                                                u.ScrollView,
                                                {
                                                  scrollX: !0,
                                                  scrollIntoView: h,
                                                  children: m.map(function (
                                                    t,
                                                    a
                                                  ) {
                                                    return (0, L.tZ)(L.HY, {
                                                      children: (0, L.tZ)(
                                                        u.View,
                                                        {
                                                          className:
                                                            "item " +
                                                            (g === a
                                                              ? "cur"
                                                              : ""),
                                                          id: "d-" + a,
                                                          "data-index": a,
                                                          onClick:
                                                            e.handleFlightDateClick,
                                                          children:
                                                            t.monthDate +
                                                            " " +
                                                            t.week,
                                                        }
                                                      ),
                                                    });
                                                  }),
                                                }
                                              ),
                                            }),
                                          p.length > 0
                                            ? (0, L.tZ)(L.HY, {
                                                children: (0, L.BX)(u.View, {
                                                  className: "current-bd",
                                                  children: [
                                                    p.map(function (t, a) {
                                                      return (0,
                                                      L.BX)(u.View, { className: "fltlist_item", "data-index": a, id: "AcFU", onClick: e.handleFlightItemClick, children: [(0, L.BX)(u.View, { className: "flt_intro", children: [(0, L.BX)(u.View, { className: "flt_col", children: [(0, L.BX)(u.View, { className: "flt_depart", children: [(0, L.tZ)(u.Text, { className: "flt_time", children: t.dptTimeStr }), (0, L.tZ)(u.Text, { className: "flt_airport " + (1 === t.cityColor || 3 === t.cityColor ? "torage" : ""), children: t.dptAName + t.dptTrm })] }), (0, L.BX)(u.View, { className: "separator", children: [t.abbr && (0, L.tZ)(u.View, { className: "spt_type", children: t.abbr }), (0, L.tZ)(u.View, { className: "spt_arr" })] }), (0, L.BX)(u.View, { className: "flt_arrival", children: [(0, L.tZ)(u.Text, { className: "flt_time", children: t.arrTimeStr }), (0, L.tZ)(u.Text, { className: "flt_airport " + (2 === t.cityColor || 3 === t.cityColor ? "torage" : ""), children: t.arrAName + t.arrTrm })] }), t.dayDiff > 0 && (0, L.tZ)(u.Text, { className: "next", children: "+" + t.dayDiff + "天" })] }), (0, L.BX)(u.View, { className: "price_col", children: [(0, L.tZ)(u.View, { className: "price", children: (0, L.tZ)(u.Text, { className: "flt_price color-red", children: t.apr }) }), f && N ? (0, L.tZ)(u.Text, { className: "child-price", children: "婴儿:￥" + t.bpr }) : t.ccd && (0, L.tZ)(u.Text, { className: "discount-info bdcolor-red color-red", children: t.ccd })] })] }), (0, L.BX)(u.View, { className: "airline_info", children: [(0, L.tZ)(u.Image, { className: "airline_logo", src: t.sequences[0].airIcon }), (0, L.BX)(u.View, { className: "airline_txt", children: [(0, L.BX)(u.Text, { className: "span", children: [t.sequences[0].airFullName + t.sequences[0].flightNo, (0, L.tZ)(u.Text, { className: "color-red", children: t.sequences[0].shared ? "共享" : "" })] }), (0, L.tZ)(u.Text, { className: "span", children: (t.sequences[0].cftn || "") + (t.sequences[0].cfts ? "(" + t.sequences[0].cfts + ")" : "") }), (0, L.tZ)(u.Text, { className: "span", children: t.costTime })] })] })] }, "index");
                                                    }),
                                                    (0, L.BX)(u.View, {
                                                      className:
                                                        "more color-primary",
                                                      id: "AcFV",
                                                      onClick:
                                                        this
                                                          .handleMoreFlightListClick,
                                                      children: [
                                                        "更多低价机票",
                                                        (0, L.tZ)(u.Text, {
                                                          className:
                                                            "ifont-arr iconfont",
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                              })
                                            : (0, L.tZ)(L.HY, {
                                                children: (0, L.BX)(u.View, {
                                                  className:
                                                    "flight-special-empty",
                                                  children: [
                                                    (0, L.tZ)(u.Image, {
                                                      src:
                                                        "https://pic.c-ctrip.com/train/zt/flight/no-content_" +
                                                        (a ? "ty" : "zx") +
                                                        ".png",
                                                    }),
                                                    (0, L.tZ)(u.View, {
                                                      children:
                                                        "当前搜索无航线",
                                                    }),
                                                  ],
                                                }),
                                              }),
                                        ],
                                      }),
                                      (0, L.BX)(u.View, {
                                        className: "white-box task-box",
                                        children: [
                                          (0, L.BX)(u.View, {
                                            className: "htit",
                                            children: [
                                              "监控任务",
                                              (0, L.BX)(u.View, {
                                                className: "fr",
                                                id: "AcFW",
                                                onClick:
                                                  this.toggleMonitorDetailPanel,
                                                children: [
                                                  "详情",
                                                  (0, L.tZ)(u.Text, {
                                                    className:
                                                      "ifont-arr iconfont",
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          (0, L.BX)(u.View, {
                                            className: "task-bd",
                                            children: [
                                              (0, L.BX)(u.View, {
                                                className: "item",
                                                children: [
                                                  (0, L.tZ)(u.View, {
                                                    className: "label",
                                                    children: "行程",
                                                  }),
                                                  (0, L.tZ)(u.View, {
                                                    className: "cont",
                                                    children: n + " - " + o,
                                                  }),
                                                ],
                                              }),
                                              (0, L.BX)(u.View, {
                                                className: "item",
                                                children: [
                                                  (0, L.tZ)(u.View, {
                                                    className: "label",
                                                    children: "日期",
                                                  }),
                                                  (0, L.tZ)(u.View, {
                                                    className: "cont",
                                                    children: w,
                                                  }),
                                                ],
                                              }),
                                              (0, L.BX)(u.View, {
                                                className: "item",
                                                children: [
                                                  (0, L.tZ)(u.View, {
                                                    className: "label",
                                                    children: "时段",
                                                  }),
                                                  (0, L.tZ)(u.View, {
                                                    className: "cont",
                                                    children:
                                                      (v || "") + "起飞",
                                                  }),
                                                ],
                                              }),
                                              (0, L.BX)(u.View, {
                                                className: "item",
                                                children: [
                                                  (0, L.tZ)(u.View, {
                                                    className: "label",
                                                    children: "预算",
                                                  }),
                                                  (0, L.tZ)(u.View, {
                                                    className: "cont",
                                                    children: "￥" + (r || ""),
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          (0, L.BX)(u.View, {
                                            className: "task-btnbox",
                                            children: [
                                              (0, L.tZ)(u.Button, {
                                                className: "btn-cancel",
                                                id: "AcFX",
                                                onClick:
                                                  this.handleMonitorCancel,
                                                children: "取消监控",
                                              }),
                                              (0, L.tZ)(u.Button, {
                                                className:
                                                  "btn-edit color-primary",
                                                id: "AcFY",
                                                onClick: this.toMonitorEdit,
                                                children: "编辑任务",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      C.length > 0 &&
                                        (0, L.BX)(u.View, {
                                          className: "white-box dijia-box",
                                          children: [
                                            (0, L.tZ)(u.View, {
                                              className: "htit",
                                              children: "低价日期推荐",
                                            }),
                                            (0, L.tZ)(u.View, {
                                              className: "dijia-date",
                                              children: C.map(function (t) {
                                                return (0,
                                                L.BX)(u.View, { className: "item", "data-date": t.flightDate, id: "AcFZ", onClick: e.handleDiJiaDateClick, children: [(0, L.tZ)(u.View, { className: "date", children: t.monthDate + " " + t.week }), (0, L.BX)(u.View, { className: "price color-red", children: [t.price, (0, L.tZ)(u.Text, { className: "iconfont ifont-arr" })] })] }, "index");
                                              }),
                                            }),
                                          ],
                                        }),
                                      b.length > 0 &&
                                        (0, L.tZ)(L.HY, {
                                          children: (0, L.BX)(u.View, {
                                            className: "white-box near-box",
                                            children: [
                                              (0, L.tZ)(u.View, {
                                                className: "htit",
                                                children: "邻近推荐",
                                              }),
                                              (0, L.tZ)(u.View, {
                                                className: "near-bd",
                                                children: b.map(function (
                                                  t,
                                                  a
                                                ) {
                                                  return (0, L.BX)(
                                                    u.View,
                                                    {
                                                      className: "item",
                                                      "data-index": a,
                                                      id: "AcFa",
                                                      onClick:
                                                        e.handleNearbyRecommendClick,
                                                      children: [
                                                        (0, L.BX)(u.View, {
                                                          className: "cont",
                                                          children: [
                                                            (0, L.BX)(u.View, {
                                                              className:
                                                                "fromto",
                                                              children: [
                                                                t.departureCityName,
                                                                (0, L.tZ)(
                                                                  u.Text,
                                                                  {
                                                                    className:
                                                                      "ifont-trainfromto iconfont",
                                                                  }
                                                                ),
                                                                t.arrivalCityName,
                                                              ],
                                                            }),
                                                            (0, L.tZ)(u.View, {
                                                              className: "txt",
                                                              children:
                                                                t.monthDate +
                                                                t.week +
                                                                "出发",
                                                            }),
                                                          ],
                                                        }),
                                                        (0, L.BX)(u.View, {
                                                          className: "rbox",
                                                          children: [
                                                            (0, L.tZ)(u.View, {
                                                              className:
                                                                "price color-red",
                                                              children:
                                                                t.lowestPrice,
                                                            }),
                                                            t.trend > 0 &&
                                                              (0, L.BX)(
                                                                u.View,
                                                                {
                                                                  className:
                                                                    "tag bdcolor-red color-red",
                                                                  children: [
                                                                    (0, L.tZ)(
                                                                      u.Text,
                                                                      {
                                                                        className:
                                                                          "ifont-up iconfont",
                                                                      }
                                                                    ),
                                                                    "比预算高¥" +
                                                                      t.trend,
                                                                  ],
                                                                }
                                                              ),
                                                            t.trend < 0 &&
                                                              (0, L.BX)(
                                                                u.View,
                                                                {
                                                                  className:
                                                                    "tag bdcolor-red color-red",
                                                                  children: [
                                                                    (0, L.tZ)(
                                                                      u.Text,
                                                                      {
                                                                        className:
                                                                          "ifont-down iconfont",
                                                                      }
                                                                    ),
                                                                    "比预算低¥" +
                                                                      -t.trend,
                                                                  ],
                                                                }
                                                              ),
                                                          ],
                                                        }),
                                                      ],
                                                    },
                                                    "index"
                                                  );
                                                }),
                                              }),
                                            ],
                                          }),
                                        }),
                                      y.length > 0 &&
                                        (0, L.tZ)(L.HY, {
                                          children: (0, L.BX)(u.View, {
                                            className: "white-box qus-box",
                                            children: [
                                              (0, L.tZ)(u.View, {
                                                className: "htit",
                                                children: "常见问题",
                                              }),
                                              (0, L.tZ)(u.View, {
                                                className: "qus-bd",
                                                children: y.map(function (
                                                  t,
                                                  a
                                                ) {
                                                  return (0, L.BX)(L.HY, {
                                                    children: [
                                                      (0, L.BX)(u.View, {
                                                        className: "dt",
                                                        "data-index": a,
                                                        id: "AcFb",
                                                        onClick: e.toggleQAList,
                                                        children: [
                                                          t.question,
                                                          (0, L.tZ)(u.Text, {
                                                            className:
                                                              "ifont-arr iconfont " +
                                                              (t.open
                                                                ? "open"
                                                                : ""),
                                                          }),
                                                        ],
                                                      }),
                                                      t.open &&
                                                        (0, L.tZ)(u.View, {
                                                          className: "dd",
                                                          children: t.answer,
                                                        }),
                                                    ],
                                                  });
                                                }),
                                              }),
                                            ],
                                          }),
                                        }),
                                    ],
                                  }),
                                  D &&
                                    (0, L.tZ)(u.View, {
                                      className:
                                        "pop-mask " + (Z ? "active" : ""),
                                      "data-type": T,
                                      id: "AcFc",
                                      onClick: function (t) {
                                        t.stopPropagation(), e.closeMask(t);
                                      },
                                      catchMove: !0,
                                    }),
                                  (0, L.BX)(u.View, {
                                    className:
                                      "pop-botm " + (B ? "active" : ""),
                                    id: "AcFd",
                                    onClick: function (e) {
                                      e.stopPropagation();
                                    },
                                    catchMove: !0,
                                    children: [
                                      (0, L.BX)(u.View, {
                                        className: "pop-botm-hd",
                                        children: [
                                          (0, L.tZ)(u.View, {
                                            className: "btn-cancel",
                                            id: "AcFe",
                                            onClick:
                                              this.toggleMonitorDetailPanel,
                                            children: "关闭",
                                          }),
                                          (0, L.tZ)(u.View, {
                                            className: "tit",
                                            children: "任务详情",
                                          }),
                                          (0, L.tZ)(u.View, {
                                            className: "btn-submit",
                                          }),
                                        ],
                                      }),
                                      (0, L.BX)(u.View, {
                                        className: "pop-botm-bd task-detail",
                                        children: [
                                          (0, L.BX)(u.View, {
                                            className: "item",
                                            children: [
                                              (0, L.tZ)(u.View, {
                                                className: "label",
                                                children: "计划行程",
                                              }),
                                              (0, L.tZ)(u.View, {
                                                className: "cont",
                                                children: n + " - " + o,
                                              }),
                                            ],
                                          }),
                                          (0, L.BX)(u.View, {
                                            className: "item",
                                            children: [
                                              (0, L.tZ)(u.View, {
                                                className: "label",
                                                children: "出发时间",
                                              }),
                                              (0, L.tZ)(u.View, {
                                                className: "cont",
                                                children: w,
                                              }),
                                            ],
                                          }),
                                          (0, L.BX)(u.View, {
                                            className: "item",
                                            children: [
                                              (0, L.tZ)(u.View, {
                                                className: "label",
                                                children: "起飞时段",
                                              }),
                                              (0, L.tZ)(u.View, {
                                                className: "cont",
                                                children: (v || "") + "起飞",
                                              }),
                                            ],
                                          }),
                                          (0, L.BX)(u.View, {
                                            className: "item",
                                            children: [
                                              (0, L.tZ)(u.View, {
                                                className: "label",
                                                children: "仅限直飞",
                                              }),
                                              (0, L.tZ)(u.View, {
                                                className: "cont",
                                                children: x,
                                              }),
                                            ],
                                          }),
                                          (0, L.BX)(u.View, {
                                            className: "item",
                                            children: [
                                              (0, L.tZ)(u.View, {
                                                className: "label",
                                                children: "期望价格",
                                              }),
                                              (0, L.tZ)(u.View, {
                                                className: "cont",
                                                children: k,
                                              }),
                                            ],
                                          }),
                                          (0, L.BX)(u.View, {
                                            className: "item",
                                            children: [
                                              (0, L.tZ)(u.View, {
                                                className: "label",
                                                children: "指定航班",
                                              }),
                                              (0, L.tZ)(u.View, {
                                                className: "cont",
                                                children: S,
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, L.BX)(u.View, {
                                    className:
                                      "pop-botm pop-share " +
                                      (I ? "active" : ""),
                                    id: "AcFf",
                                    onClick: function (e) {
                                      e.stopPropagation();
                                    },
                                    catchMove: !0,
                                    children: [
                                      (0, L.tZ)(u.View, {
                                        className: "tit",
                                        children: "邀请好友帮加速",
                                      }),
                                      (0, L.BX)(u.View, {
                                        className: "pop-share-bd",
                                        children: [
                                          (0, L.BX)(u.View, {
                                            className: "item",
                                            children: [
                                              (0, L.tZ)(u.View, {
                                                className: "txt",
                                                children: d.speedCN,
                                              }),
                                              (0, L.BX)(u.View, {
                                                className: "tblue",
                                                children: [
                                                  (0, L.tZ)(u.Text, {
                                                    className: "strong",
                                                    children: d.rate,
                                                  }),
                                                  "%",
                                                ],
                                              }),
                                              (0, L.tZ)(u.View, {
                                                className: "tgrey",
                                                children: "当前成功率",
                                              }),
                                            ],
                                          }),
                                          (0, L.BX)(u.View, {
                                            className: "item",
                                            children: [
                                              (0, L.tZ)(u.View, {
                                                className: "txt",
                                                children: d.nextSpeedCN,
                                              }),
                                              (0, L.BX)(u.View, {
                                                className: "tred",
                                                children: [
                                                  (0, L.tZ)(u.Text, {
                                                    className: "strong",
                                                    children: d.nextRate,
                                                  }),
                                                  "%",
                                                ],
                                              }),
                                              (0, L.tZ)(u.View, {
                                                className: "tgrey",
                                                children: "预计分享后",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, L.tZ)(u.View, {
                                        className: "pop-share-tips",
                                        children: F
                                          ? d.shareText2
                                          : d.shareText1,
                                      }),
                                      (0, L.BX)(u.View, {
                                        className: "pop-share-btn",
                                        children: [
                                          (0, L.BX)(u.Button, {
                                            className: "btn-share-pyq",
                                            id: "AcFg",
                                            onClick: this.shareToPengYouQuan,
                                            children: [
                                              (0, L.tZ)(u.Icon, {
                                                className: "icon-pyq",
                                              }),
                                              "朋友圈",
                                            ],
                                          }),
                                          (0, L.BX)(u.Button, {
                                            className: "btn-share-wechat",
                                            openType: "share",
                                            children: [
                                              (0, L.tZ)(u.Icon, {
                                                className: "icon-wechat",
                                              }),
                                              "微信",
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, L.tZ)(u.View, {
                                    className:
                                      "pop-botm " + (M ? "active" : ""),
                                    id: "AcFh",
                                    onClick: function (e) {
                                      e.stopPropagation();
                                    },
                                    catchMove: !0,
                                    children: (0, L.tZ)(u.View, {
                                      className: "share-box",
                                      children: (0, L.tZ)(u.Button, {
                                        className: "wx",
                                        openType: "share",
                                        "data-type": "savingPot",
                                      }),
                                    }),
                                  }),
                                  (0, L.tZ)(P.Z, {
                                    ref: function (t) {
                                      e.onDialogAttach(t);
                                    },
                                  }),
                                  (0, L.tZ)(u.View, {
                                    style: "visibility: "
                                      .concat(
                                        A ? "visible" : "hidden",
                                        ";bottom: "
                                      )
                                      .concat(A ? 0 : -1e3, "%;"),
                                    className: "share-image",
                                    "data-type": T,
                                    id: "AcFi",
                                    onClick: function (t) {
                                      t.stopPropagation(), e.closeMask(t);
                                    },
                                    catchMove: !0,
                                    children: (0, L.tZ)(X.Z, {
                                      ref: this.refCanvasImage,
                                      id: "canvas-img",
                                      auto: !1,
                                      backgroundUrl: q,
                                      backgroundWidth: 320,
                                      backgroundHeight: 408,
                                      pagePath: H,
                                      qrcodeX: 220,
                                      qrcodeY: 318,
                                      qrcodeWidth: 73,
                                      qrcodeHeight: 73,
                                      onSavesuccess: this.onSharePictureSave,
                                      onSuccess: this.onSharePictureSuccess,
                                      onFail: this.onSharePictureFail,
                                    }),
                                  }),
                                  Y &&
                                    (0, L.BX)(u.View, {
                                      className: "pop-mid pop-saving-info",
                                      id: "AcFj",
                                      onClick: function (e) {
                                        e.stopPropagation();
                                      },
                                      catchMove: !0,
                                      children: [
                                        (0, L.tZ)(u.View, {
                                          className: "tit",
                                          children: "监控存钱罐规则说明",
                                        }),
                                        (0, L.tZ)(u.View, {
                                          className: "txt",
                                          children:
                                            "1.国内机票监控升级，边监控边存钱，新增监控后每日可以签到存钱、拼团存钱来累积存钱金。",
                                        }),
                                        (0, L.tZ)(u.View, {
                                          className: "txt",
                                          children:
                                            "2.在有效时间内完成支付预订机票，出行后一并返还现金至" +
                                            (a ? "铁友" : "智行") +
                                            "-我的-钱包。",
                                        }),
                                        (0, L.tZ)(u.View, {
                                          className: "txt",
                                          children:
                                            "3.签到存钱、拼团存钱、监控存钱罐均存在一定的时间及次数，超过时间及次数失效，具体以页面提示为准。",
                                        }),
                                        (0, L.tZ)(u.Text, {
                                          className: "ifont-closed iconfont",
                                          id: "AcFk",
                                          onClick: this.toggleSavingPotRule,
                                        }),
                                      ],
                                    }),
                                  E &&
                                    (0, L.BX)(u.View, {
                                      className: "pop-mid pop-saving-record",
                                      children: [
                                        (0, L.BX)(u.View, {
                                          className: "record-tab",
                                          children: [
                                            (0, L.tZ)(u.View, {
                                              className:
                                                "item " +
                                                ("current" === O
                                                  ? a
                                                    ? "ty"
                                                    : "zx"
                                                  : ""),
                                              "data-type": "current",
                                              id: "AcFl",
                                              onClick:
                                                this.switchSavingPotPopupTab,
                                              children: "当前存钱罐",
                                            }),
                                            (0, L.tZ)(u.View, {
                                              className:
                                                "item " +
                                                ("history" === O
                                                  ? a
                                                    ? "ty"
                                                    : "zx"
                                                  : ""),
                                              "data-type": "history",
                                              id: "AcFm",
                                              onClick:
                                                this.switchSavingPotPopupTab,
                                              children: "历史记录",
                                            }),
                                          ],
                                        }),
                                        "history" !== O
                                          ? (0, L.tZ)(L.HY, {
                                              children:
                                                l.recordList &&
                                                l.recordList.length > 0
                                                  ? (0, L.tZ)(u.View, {
                                                      className: "record-bd",
                                                      children:
                                                        l.recordList.map(
                                                          function (e, t) {
                                                            return (0, L.BX)(
                                                              u.View,
                                                              {
                                                                className:
                                                                  "item",
                                                                children: [
                                                                  (0, L.BX)(
                                                                    u.View,
                                                                    {
                                                                      className:
                                                                        "cont",
                                                                      children:
                                                                        [
                                                                          (0,
                                                                          L.tZ)(
                                                                            u.View,
                                                                            {
                                                                              className:
                                                                                "strong",
                                                                              children:
                                                                                e.price,
                                                                            }
                                                                          ),
                                                                          (0,
                                                                          L.tZ)(
                                                                            u.View,
                                                                            {
                                                                              className:
                                                                                "txt",
                                                                              children:
                                                                                e.date,
                                                                            }
                                                                          ),
                                                                        ],
                                                                    }
                                                                  ),
                                                                  (0, L.tZ)(
                                                                    u.View,
                                                                    {
                                                                      className:
                                                                        "rbox " +
                                                                        (e.isValid
                                                                          ? ""
                                                                          : "tgrey"),
                                                                      children:
                                                                        e.desc,
                                                                    }
                                                                  ),
                                                                ],
                                                              },
                                                              t
                                                            );
                                                          }
                                                        ),
                                                    })
                                                  : (0, L.BX)(u.View, {
                                                      className: "record-bd",
                                                      children: [
                                                        (0, L.tZ)(u.Icon, {
                                                          className:
                                                            "icon-saving-blank",
                                                        }),
                                                        (0, L.tZ)(u.View, {
                                                          className: "txt",
                                                          children:
                                                            "你还没有存钱哦~",
                                                        }),
                                                      ],
                                                    }),
                                            })
                                          : (0, L.tZ)(L.HY, {
                                              children:
                                                l.historyList &&
                                                l.historyList.length > 0
                                                  ? (0, L.tZ)(u.View, {
                                                      className: "record-bd",
                                                      children:
                                                        l.historyList.map(
                                                          function (e, t) {
                                                            return (0, L.BX)(
                                                              u.View,
                                                              {
                                                                className:
                                                                  "item",
                                                                children: [
                                                                  (0, L.BX)(
                                                                    u.View,
                                                                    {
                                                                      className:
                                                                        "cont",
                                                                      children:
                                                                        [
                                                                          (0,
                                                                          L.tZ)(
                                                                            u.View,
                                                                            {
                                                                              className:
                                                                                "strong",
                                                                              children:
                                                                                e.price,
                                                                            }
                                                                          ),
                                                                          (0,
                                                                          L.tZ)(
                                                                            u.View,
                                                                            {
                                                                              className:
                                                                                "txt",
                                                                              children:
                                                                                e.date,
                                                                            }
                                                                          ),
                                                                        ],
                                                                    }
                                                                  ),
                                                                  (0, L.tZ)(
                                                                    u.View,
                                                                    {
                                                                      className:
                                                                        "rbox " +
                                                                        (e.isValid
                                                                          ? ""
                                                                          : "tgrey"),
                                                                      children:
                                                                        e.desc,
                                                                    }
                                                                  ),
                                                                ],
                                                              },
                                                              t
                                                            );
                                                          }
                                                        ),
                                                    })
                                                  : (0, L.BX)(u.View, {
                                                      className: "record-bd",
                                                      children: [
                                                        (0, L.tZ)(u.Icon, {
                                                          className:
                                                            "icon-saving-blank",
                                                        }),
                                                        (0, L.tZ)(u.View, {
                                                          className: "txt",
                                                          children:
                                                            "你还没有存钱哦~",
                                                        }),
                                                      ],
                                                    }),
                                            }),
                                        (0, L.tZ)(u.Text, {
                                          className: "ifont-closed iconfont",
                                          id: "AcFn",
                                          onClick: this.toggleSavingPotRecord,
                                        }),
                                      ],
                                    }),
                                ],
                              });
                            },
                          },
                        ]),
                        a
                      );
                    })(m.default.Component))
                  ) || i)
              ) || i;
          (H.enableShareAppMessage = !0),
            Page(
              (0, s.createPageConfig)(
                H,
                "pages/flight/monitordetail/monitordetail",
                { root: { cn: [] } },
                {
                  navigationBarTitleText: "监控详情",
                  navigationBarTextStyle: "white",
                  navigationBarBackgroundColor: "#3C4365",
                  backgroundColorTop: "#3C4365",
                  backgroundColorBottom: "#EFEFEF",
                  navigationStyle: "custom",
                } || {}
              )
            );
        },
      },
      function (e) {
        e.O(0, [7160, 83004, 14906, 49608, 19559, 11216, 68592], function () {
          return (function (t) {
            return e((e.s = t));
          })(65084);
        }),
          e.O();
      },
    ]);
})();
