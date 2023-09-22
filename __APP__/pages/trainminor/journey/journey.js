!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [56360],
    {
      10698: function (e, t, a) {
        var i,
          r = a(32180),
          n = a(57042),
          o = a(24460),
          s = a(21867),
          c = a(86066),
          l = a(22276),
          h = a(90129),
          d = a(79301),
          u = a(95308),
          f = a(298),
          m = a(77610),
          v = a(52500),
          p = a(71515),
          D = (a(92954), a(48792)),
          g = a.n(D),
          y = a(79792),
          w = a(18783),
          T = a(79910),
          N = a(25391),
          Z = a(8271),
          b = a.n(Z),
          S = a(10741),
          k = a(49120),
          I = a(4102),
          B = a(3205),
          x = a(81957),
          C = a(48813),
          V = y.default.isTieyou,
          A = {
            pageId: V ? "10650009544" : "10650009543",
            data: {
              isTieyou: V,
              fromStation: "",
              toStation: "",
              trainNo: "",
              fromDate: "",
              fromTime: "",
              tripInfo: {},
              trainDelayInfos: [],
              trainDelayRenderList: [],
              trainDelayFoldList: [],
              trainDelayUnFoldList: [],
              isShowRefreshBtn: !1,
              isShowAllTrainDelay: !1,
              DepartCityName: "",
              ArriveCityName: "",
              DepartCityID: "",
              ArriveCityID: "",
              DepartCityWeather: "",
              ArriveCityWeather: "",
              isIPhoneX: T.Z.isIPhoneX(),
              weatherUpdateDate: "",
              isUnFocusedTravel: !1,
              isSelfTravel: !1,
              wechatBindUrl: "",
              subscribedFlag: !1,
              ticketEntranceLatest: "",
            },
            onLoad: function (e) {
              var t = this;
              console.log("journey options = ", e);
              var a = (0, m.Z)({}, e);
              this.setData((0, f.Z)({}, a)),
                this.defaultTripInfo(),
                this.searchTrainDelay(),
                this.judgeShowRefreshBtn(),
                this.getCityId()
                  .then(function () {
                    return t.getWeatherInfo();
                  })
                  .catch(function (e) {
                    return console.log(e);
                  })
                  .finally(function () {
                    return (0, k.hideLoading)();
                  }),
                (this.tripInfos = []),
                (this.seatName = ""),
                (this.isGotoBook = !0),
                this.checkIsGotoBook(a);
            },
            onShow: function () {
              var e = this;
              setTimeout(function () {
                e.initSubscribeTripInfo(), e.queryTicketEntrance();
              }, 0),
                (0, k.hideLoading)();
            },
            queryTicketEntrance: function () {
              var e = this;
              return (0, u.Z)(
                (0, d.Z)().mark(function t() {
                  var a, i, r, n, o;
                  return (0, d.Z)().wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.prev = 0),
                              (a = e.data),
                              (i = a.fromStation),
                              (r = a.trainNo),
                              (n = a.fromTime),
                              (t.next = 4),
                              (0, S.xBj)({
                                stationName: i,
                                trainNo: r,
                                departDate: n,
                              })
                            );
                          case 4:
                            if (1 === (o = t.sent).resultCode) {
                              t.next = 7;
                              break;
                            }
                            return t.abrupt("return");
                          case 7:
                            e.setData({ ticketEntranceLatest: o.entrance }),
                              (t.next = 12);
                            break;
                          case 10:
                            (t.prev = 10), (t.t0 = t.catch(0));
                          case 12:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    null,
                    [[0, 10]]
                  );
                })
              )();
            },
            initSubscribeTripInfo: function () {
              var e = this;
              return (0, u.Z)(
                (0, d.Z)().mark(function t() {
                  var a, i, r, n;
                  return (0, d.Z)().wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.next = 2),
                            Promise.all([
                              e.getSubscribeArriveStationStatus(),
                              e.getWechatBindStatus(),
                            ])
                          );
                        case 2:
                          (a = t.sent),
                            (i = (0, h.Z)(a, 2)),
                            (r = i[0]),
                            (n = i[1]),
                            e.setData({ isUnFocusedTravel: !(r && n) }),
                            e.data.isUnFocusedTravel &&
                              e.ubtTrace("s_trn_z_trace_10650009543", {
                                bizKey: "z_mini_friendtrnInfo_button_show",
                              });
                        case 8:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              )();
            },
            getSubscribeArriveStationStatus: function () {
              var e = this;
              return (0, u.Z)(
                (0, d.Z)().mark(function t() {
                  var a, i, r, n, o;
                  return (0, d.Z)().wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.prev = 0),
                              (a = e.data),
                              (i = a.oid),
                              (r = a.trainNo),
                              (t.next = 4),
                              (0, S.wo4)({
                                orderNumber: i,
                                trainNo: r,
                                action: 0,
                              })
                            );
                          case 4:
                            return (
                              (n = t.sent),
                              (o = n.subscribeStatus),
                              e.setData({ subscribedFlag: 1 === o || 2 === o }),
                              t.abrupt("return", 1 === o || 2 === o)
                            );
                          case 10:
                            return (
                              (t.prev = 10),
                              (t.t0 = t.catch(0)),
                              t.abrupt("return", !1)
                            );
                          case 13:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    null,
                    [[0, 10]]
                  );
                })
              )();
            },
            doSubscribeArriveStation: function () {
              var e = this;
              return (0, u.Z)(
                (0, d.Z)().mark(function t() {
                  var a, i, r;
                  return (0, d.Z)().wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.prev = 0),
                              (a = e.data),
                              (i = a.oid),
                              (r = a.trainNo),
                              (t.next = 4),
                              (0, S.wo4)({
                                orderNumber: i,
                                trainNo: r,
                                action: 1,
                              })
                            );
                          case 4:
                            t.next = 8;
                            break;
                          case 6:
                            (t.prev = 6), (t.t0 = t.catch(0));
                          case 8:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    null,
                    [[0, 6]]
                  );
                })
              )();
            },
            getWechatBindStatus: function () {
              var e = this;
              return (0, u.Z)(
                (0, d.Z)().mark(function t() {
                  var a;
                  return (0, d.Z)().wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.prev = 0),
                              (t.next = 3),
                              (0, S.xPJ)(
                                {
                                  partner: y.default.partner,
                                  openId: w.ZP.openid,
                                  source: "Travelshare",
                                },
                                { checkLogin: !1, checkFrameworkLogin: !1 }
                              )
                            );
                          case 3:
                            return (
                              (a = t.sent),
                              e.setData({
                                wechatBindUrl: "https://".concat(
                                  y.default.h5domain,
                                  "/webapp/train/activity/ztrip-official-account-event?source=Travelshare"
                                ),
                              }),
                              t.abrupt("return", 1 === a.status)
                            );
                          case 8:
                            return (
                              (t.prev = 8),
                              (t.t0 = t.catch(0)),
                              t.abrupt("return", !1)
                            );
                          case 11:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    null,
                    [[0, 8]]
                  );
                })
              )();
            },
            handleSubscribeTrip: function () {
              var e = this;
              return (
                this.ubtTrace("c_trn_z_10650009543", {
                  bizKey: "z_mini_friendtrnInfo_button_click",
                }),
                (0, u.Z)(
                  (0, d.Z)().mark(function t() {
                    return (0, d.Z)().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if (((0, k.showLoading)(), w.ZP.isLogin)) {
                              t.next = 7;
                              break;
                            }
                            return (
                              T.Z.setLaunchSource({
                                loginSoureType: "wechat",
                                loginSourceName: "1530337432",
                              }),
                              (t.next = 5),
                              w.ZP.doLogin()
                            );
                          case 5:
                            return (t.next = 7), e.initSubscribeTripInfo();
                          case 7:
                            if (e.data.isUnFocusedTravel) {
                              t.next = 9;
                              break;
                            }
                            return t.abrupt("return");
                          case 9:
                            if (e.data.subscribedFlag) {
                              t.next = 14;
                              break;
                            }
                            return (t.next = 12), e.doSubscribeArriveStation();
                          case 12:
                            return (t.next = 14), e.initSubscribeTripInfo();
                          case 14:
                            if (e.data.isUnFocusedTravel) {
                              t.next = 16;
                              break;
                            }
                            return t.abrupt("return");
                          case 16:
                            if (
                              e.data.wechatBindUrl &&
                              e.data.wechatBindUrl.startsWith("https")
                            ) {
                              t.next = 18;
                              break;
                            }
                            return t.abrupt("return");
                          case 18:
                            B.Z.twebview({
                              data: { url: e.data.wechatBindUrl },
                            });
                          case 19:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                )().finally(k.hideLoading)
              );
            },
            checkIsGotoBook: function (e) {
              var t = e.fromDate,
                a = e.fromTime;
              console.log(
                b()().valueOf() - b()(t + " " + a).valueOf() > 15e5,
                b()().valueOf(),
                b()(t + " " + a).valueOf()
              ),
                b()(t + " " + a).valueOf() - b()().valueOf() > 15e5
                  ? (this.isGotoBook = !0)
                  : (this.isGotoBook = !1);
            },
            defaultTripInfo: function () {
              var e = this.data,
                t = e.trainNo,
                a = void 0 === t ? "" : t,
                i = e.fromStation,
                r = void 0 === i ? "" : i,
                n = e.toStation,
                o = void 0 === n ? "" : n,
                s = e.fromDate,
                c = void 0 === s ? "" : s,
                l = e.fromTime,
                h = void 0 === l ? "" : l,
                d = e.toDate,
                u = void 0 === d ? "" : d,
                f = e.toTime,
                m = void 0 === f ? "" : f,
                v = e.entrance,
                p = void 0 === v ? "" : v,
                D = c.replace(/-/g, ""),
                g = u.replace(/-/g, ""),
                y = (function () {
                  var e = b()(D + " " + h).valueOf(),
                    t = b()(g + " " + m).valueOf();
                  return Math.floor((t - e) / 6e4);
                })(),
                w = {
                  trainNo: a,
                  departStation: r,
                  arriveStation: o,
                  departDate: D,
                  arriveDate: g,
                  departTime: h,
                  arriveTime: m,
                  entrance: p,
                  spendTime: y,
                };
              this.commonHandleTripInfo(w);
            },
            commonHandleTripInfo: function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                t = e.departDate,
                a = void 0 === t ? "" : t,
                i = e.arriveDate,
                r = void 0 === i ? "" : i,
                n = e.spendTime,
                o = void 0 === n ? "" : n,
                s = this.data.passengers,
                c = "";
              (e.diffTimeTips = this.getDiffTimeTips(e)),
                (e.timeCost = this.timeCost(o));
              var l = b()(a).valueOf(),
                h = b()(r).valueOf(),
                d = new Date(l),
                u = new Date(h);
              (e.monthDay = b()(l).format("M月D日")),
                (e.weekday = I.Z.getWeekDay(l)),
                (e.diffDays = I.Z.getDiffDays(d, u)),
                s &&
                  ((s = "string" == typeof s ? JSON.parse(s) : s),
                  Array.isArray(s) &&
                    ((s = s.map(function (e) {
                      if (
                        "string" == typeof e.passengerName &&
                        e.passengerName.length >= 2
                      ) {
                        var t = e.passengerName.length;
                        c =
                          e.passengerName.substring(0, 1) +
                          "*" +
                          (t > 2 ? e.passengerName.substring(2, t) : "");
                      } else c = "";
                      return (0,
                      f.Z)((0, f.Z)({}, e), {}, { passengerName: c });
                    })),
                    (this.seatName = s[0] && s[0].seatName)),
                  (e.passengers = s)),
                this.setData({ tripInfo: e });
            },
            filterTripInfo: function () {
              var e = this.data.trainNo,
                t = void 0 === e ? "" : e,
                a = this.data.fromDate,
                i = void 0 === a ? "" : a;
              if (!(this.tripInfos.length < 1))
                return (
                  (i = i.replace(/-/g, "")),
                  this.tripInfos.find(function (e) {
                    return e.departDate == i && e.trainNo == t;
                  })
                );
            },
            getDiffTimeTips: function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                t = e.departDate,
                a = void 0 === t ? "" : t,
                i = e.departTime,
                r = void 0 === i ? "" : i,
                n = e.arriveDate,
                o = void 0 === n ? "" : n,
                s = e.arriveTime,
                c = void 0 === s ? "" : s,
                l = b()(a + " " + r).valueOf(),
                h = b()(o + " " + c).valueOf(),
                d = Date.now(),
                u = "",
                f = function (e) {
                  return Math.floor(e / 864e5);
                },
                m = function (e) {
                  return Math.floor(e / 36e5);
                },
                v = function (e) {
                  return Math.floor(e / 6e4);
                },
                p = function (e) {
                  var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : 0,
                    a = f(e),
                    i = m(e),
                    r = 0 === t ? "出发" : "到达",
                    n = "";
                  if (a >= 1) n = "".concat(a, "天后").concat(r);
                  else if (i < 24 && i >= 3)
                    n = "".concat(i, "小时后").concat(r);
                  else if (i < 3 && i >= 1) {
                    var o = e - 3600 * i * 1e3,
                      s = v(o);
                    n = "".concat(i, "小时").concat(s, "分钟后").concat(r);
                  } else if (i < 1) {
                    var c = v(e);
                    n = "".concat(c, "分钟后").concat(r);
                  }
                  return n;
                };
              if (l > d) {
                var D = l - d;
                u = p(D, 0);
              } else if (l < d && d < h) {
                var g = h - d;
                u = p(g, 1);
              } else d >= h && (u = "列车已到达");
              return u;
            },
            timeCost: function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "",
                t = Math.floor(e / 60),
                a = e - 60 * t,
                i =
                  t > 0
                    ? "".concat(t, "小时").concat(a, "分钟")
                    : "".concat(a, "分钟");
              return i;
            },
            searchTrainDelay: function () {
              var e = this;
              return (
                (0, k.showLoading)(),
                (0, S.Beu)({ trainNo: this.data.trainNo || "" })
                  .then(function (t) {
                    if (
                      1 === t.resultCode &&
                      t.trainDelayInfos &&
                      t.trainDelayInfos.length > 0
                    )
                      return (
                        e.setData({ trainDelayInfos: t.trainDelayInfos }),
                        void e.handleTrainDelayInfos()
                      );
                    e.defaultTrainDelayInfos();
                  })
                  .catch(function (t) {
                    console.log("journey searchTrainDelay e = ", t),
                      e.defaultTrainDelayInfos();
                  })
                  .finally(function () {
                    return (0, k.hideLoading)();
                  })
              );
            },
            handleTrainDelayInfos: function () {
              var e = this.data,
                t = e.trainDelayInfos,
                a = void 0 === t ? [] : t,
                i = e.fromStation,
                r = void 0 === i ? "" : i,
                n = e.toStation,
                o = void 0 === n ? "" : n,
                s = (0, l.Z)(a);
              if (
                ((s[0].isStartStation = !0),
                (s[s.length - 1].isEndStation = !0),
                s.forEach(function (e) {
                  (e.stopMinutes =
                    0 == e.stopMinutes ? "--" : e.stopMinutes + ""),
                    (e.arrivalTime = e.arrivalTime.replace(/-+/g, "--")),
                    (e.startTime = e.startTime.replace(/-+/g, "--")),
                    (e.absArriveDelayInfo = Math.abs(e.arriveDelayInfo));
                }),
                this.judgeDay() ||
                  s.forEach(function (e) {
                    (e.delayInfo = ""), (e.arriveDelayInfo = "");
                  }),
                r && o)
              ) {
                var c = s.findIndex(function (e) {
                    return e.stationName === r;
                  }),
                  h = s.findIndex(function (e) {
                    return e.stationName === o;
                  });
                if (!(c < 0 || h < 0)) {
                  for (var d = c; d <= h; d++)
                    (s[d].isShowBold = !0),
                      (s[d].backgroundColor = V ? "ty" : "zx");
                  var u = [
                      Object.assign({}, s[c], { backgroundColor: "" }),
                      Object.assign({}, s[h], { backgroundColor: "" }),
                    ],
                    f = [].concat(u);
                  this.setData({
                    trainDelayRenderList: f,
                    trainDelayFoldList: u,
                    trainDelayUnFoldList: s,
                  });
                }
              }
            },
            judgeDay: function () {
              var e = this.data.fromDate,
                t = void 0 === e ? "" : e;
              return b()().format("M月D日") === b()(t).format("M月D日");
            },
            defaultTrainDelayInfos: function () {
              var e,
                t = this.data,
                a = t.fromStation,
                i = void 0 === a ? "" : a,
                r = t.toStation,
                n = void 0 === r ? "" : r,
                o = t.fromTime,
                s = void 0 === o ? "" : o,
                c = t.toTime,
                l = void 0 === c ? "" : c,
                h = this.data.trainDelayRenderList,
                d = {
                  stationName: i,
                  isShowBold: !0,
                  arrivalTime: "--",
                  startTime: s,
                  stopMinutes: "--",
                  delayInfo: "",
                  arriveDelayInfo: "",
                };
              (e = [
                d,
                (0, f.Z)(
                  (0, f.Z)({}, d),
                  {},
                  { stationName: n, arrivalTime: l, startTime: "--" }
                ),
              ]),
                this.setData({ trainDelayRenderList: e });
            },
            judgeShowRefreshBtn: function () {
              var e = this.data,
                t = e.fromDate,
                a = void 0 === t ? "" : t,
                i = e.fromTime,
                r = a + " " + (void 0 === i ? "" : i);
              r = r.replace(/-/g, "/");
              var n = Date.now(),
                o = new Date(r).getTime() - n;
              Math.floor(o / 36e5) < 3 &&
                this.setData({ isShowRefreshBtn: !0 });
            },
            refreshSearchTrainDelay: function () {
              this.setData({ isShowAllTrainDelay: !1 }),
                this.searchTrainDelay();
            },
            toggleTrainDelay: function () {
              var e = this.data,
                t = e.isShowAllTrainDelay,
                a = void 0 === t ? "" : t,
                i = e.trainDelayFoldList,
                r = void 0 === i ? [] : i,
                n = e.trainDelayUnFoldList,
                o = void 0 === n ? [] : n,
                s = this.data.trainDelayRenderList,
                c = void 0 === s ? [] : s;
              r.length < 1 && o.length < 1
                ? this.setData({ isShowAllTrainDelay: !a })
                : ((c = a ? (0, l.Z)(r) : (0, l.Z)(o)),
                  this.setData({
                    trainDelayRenderList: c,
                    isShowAllTrainDelay: !a,
                  }));
            },
            showEntrance: function () {
              var e = this.data.tripInfo;
              e.entrance && (0, k.showModal)(e.entrance);
            },
            getCityId: function () {
              var e = this;
              (0, k.showLoading)();
              var t = this.data,
                a = t.fromStation,
                i = void 0 === a ? "" : a,
                r = t.toStation,
                n = void 0 === r ? "" : r,
                o = function () {
                  var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : "",
                    a =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : "from";
                  return e
                    .getStationInfo(t)
                    .then(function (t) {
                      var i = t.CtripCityID,
                        r = t.CityName;
                      "from" !== a
                        ? e.setData({ ArriveCityID: i, ArriveCityName: r })
                        : e.setData({ DepartCityID: i, DepartCityName: r });
                    })
                    .catch(function (e) {
                      return console.log(e);
                    });
                },
                s = o(i, "from"),
                c = o(n, "to");
              return Promise.all([s, c]);
            },
            getStationInfo: function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "";
              return (0, S.RZY)({ StationName: e })
                .then(function (e) {
                  var t = e.CtripCityID,
                    a = void 0 === t ? "" : t,
                    i = e.CityName;
                  return { CtripCityID: a, CityName: void 0 === i ? "" : i };
                })
                .catch(function () {
                  throw new Error("获取城市ID出错");
                });
            },
            getWeatherInfo: function () {
              var e = this;
              if (this.isGetWeather()) {
                var t = this.data,
                  a = t.DepartCityID,
                  i = void 0 === a ? "" : a,
                  r = t.ArriveCityID,
                  n = void 0 === r ? "" : r,
                  o = t.fromDate,
                  s = void 0 === o ? "" : o,
                  c = t.toDate,
                  l = void 0 === c ? "" : c,
                  h = s.replace(/-/g, ""),
                  d = l.replace(/-/g, ""),
                  u = {
                    DepartCityID: "" + i,
                    DepartDate: h,
                    ArriveCityID: "" + n,
                    ArriveDate: d,
                  };
                return (0, S.Why)(u)
                  .then(function (t) {
                    if (1 == t.RetCode) {
                      var a = t.WeatherList,
                        r = void 0 === a ? [] : a;
                      if (r && 0 != r.length) {
                        r.forEach(function (t) {
                          (t.Date = e.handleWeatherDate(t.WeatherDate)),
                            (t.WeatherPicUrl = e.getWeatherPicUrl(
                              t.WeatherDesc
                            ));
                        });
                        var o = r.find(function (e) {
                            return e.CityID == i;
                          }),
                          s = r.find(function (e) {
                            return e.CityID == n;
                          });
                        e.setData({
                          DepartCityWeather: o,
                          ArriveCityWeather: s,
                        });
                      }
                    }
                  })
                  .catch(function (e) {
                    return console.log(e);
                  });
              }
            },
            getWeatherPicUrl: function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "",
                t = "http://images3.c-ctrip.com/train/weather/",
                a = ["晴", "多云", "阴"],
                i = ["01", "02", "03"],
                r = [
                  "雨",
                  "小雨",
                  "小到中雨",
                  "中雨",
                  "中到大雨",
                  "大雨",
                  "大到暴雨",
                  "暴雨",
                  "暴雨到大暴雨",
                  "大暴雨",
                  "大到特大暴雨",
                  "特大暴雨",
                  "阵雨",
                  "雷阵雨",
                  "雷雨伴冰雹",
                  "冻雨",
                ],
                n = [
                  "04",
                  "05",
                  "06",
                  "06",
                  "07",
                  "07",
                  "08",
                  "08",
                  "09",
                  "09",
                  "09",
                  "09",
                  "10",
                  "11",
                  "12",
                  "19",
                ],
                o = [
                  "雨夹雪",
                  "阵雪",
                  "小雪",
                  "小到中雪",
                  "中雪",
                  "中到大雪",
                  "大雪",
                  "大到暴雪",
                  "暴雪",
                ],
                s = ["13", "14", "15", "16", "16", "17", "17", "18", "18"],
                c = ["雾", "霾"],
                l = ["20", "20"],
                h = ["浮尘", "扬沙", "沙尘暴", "强沙尘暴"],
                d = ["21", "21", "21", "21"],
                u = [].concat(a, r, o, c, h),
                f = [].concat(i, n, s, l, d),
                m = u.indexOf(e);
              return m < 0
                ? "http://images3.c-ctrip.com/train/weather/02.png"
                : t + f[m] + ".png";
            },
            isGetWeather: function () {
              var e = this.data,
                t = e.fromDate,
                a = void 0 === t ? "" : t,
                i = e.fromTime,
                r = void 0 === i ? "" : i,
                n = b()(a + " " + r).valueOf(),
                o = Math.floor((n - Date.now()) / 864e5);
              if (o > 7) {
                var s = b()(n - 6048e5).format("M月D日");
                this.setData({ weatherUpdateDate: s });
              }
              return o < 7;
            },
            handleWeatherDate: function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "";
              if (e) {
                var t = e.slice(-4),
                  a = t.slice(0, 2),
                  i = t.slice(-2);
                return a + "." + i;
              }
            },
            gotoIndexPage: function () {
              T.Z.relaunchHome();
            },
            checkLoginStateAndGotoBookPage: function () {
              var e = this;
              this.isGotoBook
                ? w.ZP.isLogin
                  ? this.gotoBookPage()
                  : w.ZP.doLogin()
                      .then(function () {
                        e.gotoBookPage();
                      })
                      .catch(function (e) {
                        (0, k.showToast)(e);
                      })
                : (0, k.showToast)("已超过购票时间");
            },
            gotoBookPage: function () {
              var e = this;
              this.ubtTrace("c_trn_z_10650009543", {
                bizKey: "trip_invitation_friend_buy_click",
              });
              var t = this.data,
                a = t.fromStation,
                i = t.toStation,
                r = t.fromDate,
                n = t.trainNo,
                o = t.tripInfo,
                s = {
                  DepartStation: a,
                  ArriveStation: i,
                  DepartDate: r,
                  trainNo: n,
                };
              return this.getTrainInfo(s)
                .then(function (t) {
                  t
                    ? e.navigateTo({
                        url: "/pages/train/bookx/bookx",
                        data: {
                          fromStation: a,
                          toStation: i,
                          departDate: r,
                          trainNo: n,
                          train: t,
                          isRecommendBuy: 1,
                          friendTripInfo: o,
                          fromPage: "journey",
                        },
                      })
                    : (0, k.showToast)("去买票失败");
                })
                .catch(function () {
                  return (0, k.showToast)("去买票失败");
                });
            },
            getTrainInfo: function (e) {
              var t = this,
                a = e.DepartStation,
                i = e.ArriveStation,
                r = e.DepartDate,
                n = e.trainNo;
              return N.ZP.getTrainList({
                DepartStation: a,
                ArriveStation: i,
                DepartDate: r,
              })
                .then(function (e) {
                  var a = N.ZP.handleTrains(e, r).find(function (e) {
                    return e.TrainNumber == n;
                  });
                  if (t.seatName)
                    for (var i = {}, o = 0; o < a.seats.length; o++)
                      (i = a.seats[o]).SeatName === t.seatName &&
                        ((a.Price = i.SeatPrice),
                        (a.SeatName = i.SeatName),
                        (a.isJianLou = !i.SeatInventory));
                  return a;
                })
                .catch(function () {
                  return (0, k.showToast)("去买票失败");
                });
            },
            onShareAppMessage: function () {
              var e = this.data,
                t = e.trainNo,
                a = void 0 === t ? "" : t,
                i = e.fromStation,
                r = void 0 === i ? "" : i,
                n = e.toStation,
                o = void 0 === n ? "" : n,
                s = e.fromDate,
                c = void 0 === s ? "" : s,
                l = e.fromTime,
                h = void 0 === l ? "" : l,
                d = e.toDate,
                u = void 0 === d ? "" : d,
                f = e.toTime,
                m = void 0 === f ? "" : f,
                v = e.name,
                p = void 0 === v ? "" : v,
                D = e.passengers,
                g = void 0 === D ? "" : D,
                y = e.tripInfo,
                w = void 0 === y ? {} : y,
                T = e.oid,
                N = w.entrance || "",
                Z = b()(c).format("M月D日"),
                S = "/pages/trainminor/journey/journey?trainNo="
                  .concat(a, "&fromStation=")
                  .concat(r, "&toStation=")
                  .concat(o, "&fromDate=")
                  .concat(c, "&fromTime=")
                  .concat(h, "&toDate=")
                  .concat(u, "&toTime=")
                  .concat(m, "&name=")
                  .concat(p, "&entrance=")
                  .concat(N, "&passengers=")
                  .concat(g, "&oid=")
                  .concat(T);
              return {
                title: "我已购买"
                  .concat(Z, "【")
                  .concat(r, "-")
                  .concat(o, "】的火车票，点击查看详情"),
                bu: "train",
                imageUrl:
                  "https://images3.c-ctrip.com/zt/wechat/share-trip0913.png",
                path: S,
              };
            },
            noop: function () {},
          },
          L =
            (0, x.h)()(
              (i =
                g()(A)(
                  (i = (function (e) {
                    (0, s.Z)(a, e);
                    var t = (0, c.Z)(a);
                    function a() {
                      return (0, n.Z)(this, a), t.apply(this, arguments);
                    }
                    return (
                      (0, o.Z)(a, [
                        {
                          key: "render",
                          value: function () {
                            var e = this.data,
                              t = e.isTieyou,
                              a = e.tripInfo,
                              i = e.isShowRefreshBtn,
                              r = e.trainDelayRenderList,
                              n = e.isShowAllTrainDelay,
                              o = e.DepartCityWeather,
                              s = e.ArriveCityWeather,
                              c = e.weatherUpdateDate,
                              l = e.isUnFocusedTravel,
                              h = e.ticketEntranceLatest;
                            console.log("DepartCityWeather", o, s);
                            var d = {
                              WeatherPicUrl: "",
                              WeatherDesc: "",
                              TempDesc: "",
                            };
                            return (
                              c
                                ? ((d.WeatherPicUrl =
                                    "https://images3.c-ctrip.com/train/weather/02.png"),
                                  (d.WeatherDesc = "天气将于" + c + "更新"),
                                  (d.TempDesc = ""))
                                : o
                                ? ((d.WeatherPicUrl = o.WeatherPicUrl),
                                  (d.WeatherDesc = o.WeatherDesc),
                                  (d.TempDesc = o.TempDesc))
                                : ((d.WeatherPicUrl =
                                    "https://images3.c-ctrip.com/train/weather/02.png"),
                                  (d.WeatherDesc = "天气将稍候更新"),
                                  (d.TempDesc = "")),
                              (0, C.BX)(p.Block, {
                                children: [
                                  (0, C.tZ)(p.View, {
                                    className:
                                      "journey-top " + (t ? "ty" : "zx"),
                                    children: (0, C.BX)(p.View, {
                                      className: "txt",
                                      children: [
                                        (0, C.tZ)(p.View, {
                                          className: "depart-station",
                                          children:
                                            (a.departStation || "") + "出发",
                                        }),
                                        (0, C.BX)(p.View, {
                                          className: "weather",
                                          children: [
                                            (0, C.tZ)(p.Image, {
                                              src: d.WeatherPicUrl,
                                              className: "icon-weather",
                                            }),
                                            (0, C.tZ)(p.View, {
                                              className: "weather-txt",
                                              children:
                                                d.WeatherDesc +
                                                " " +
                                                d.TempDesc,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  }),
                                  (0, C.tZ)(p.View, {
                                    className: "train-info",
                                    children: (0, C.BX)(p.View, {
                                      className: "txt",
                                      children: [
                                        (0, C.tZ)(p.View, {
                                          className: "train-no",
                                          children: a.trainNo,
                                        }),
                                        (0, C.BX)(p.View, {
                                          className: "jianpiao-box",
                                          id: "AGAD",
                                          onClick: this.showEntrance,
                                          children: [
                                            (0, C.tZ)(p.View, {
                                              className: "jianpiao",
                                              children:
                                                h ||
                                                (a &&
                                                a.entrance &&
                                                "undefined" !== a.entrance
                                                  ? a.entrance
                                                  : "检票口：--"),
                                            }),
                                            (0, C.tZ)(p.Text, {
                                              className: "ifont-arr iconfont",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  }),
                                  (0, C.BX)(p.View, {
                                    className: "journey-content ".concat(
                                      t ? "ty" : "zx"
                                    ),
                                    children: [
                                      (0, C.tZ)(p.View, {
                                        className: "journey-top-bg",
                                      }),
                                      (0, C.BX)(p.View, {
                                        className: "journey-tick",
                                        children: [
                                          (0, C.BX)(p.View, {
                                            className: "journey-tick-top",
                                            children: [
                                              (0, C.tZ)(p.View, {
                                                className: "journey-date",
                                                children:
                                                  (a.monthDay || "") +
                                                  " " +
                                                  (a.weekday || ""),
                                              }),
                                              (0, C.tZ)(p.View, {
                                                className: "day",
                                                children: a.diffTimeTips,
                                              }),
                                            ],
                                          }),
                                          (0, C.BX)(p.View, {
                                            className: "journey-tick-hd",
                                            children: [
                                              (0, C.BX)(p.View, {
                                                className: "from",
                                                children: [
                                                  (0, C.tZ)(p.View, {
                                                    className: "time",
                                                    children: a.departTime,
                                                  }),
                                                  (0, C.tZ)(p.View, {
                                                    className: "station",
                                                    children: a.departStation,
                                                  }),
                                                ],
                                              }),
                                              (0, C.tZ)(p.View, {
                                                className: "mid",
                                                children: a.timeCost,
                                              }),
                                              (0, C.BX)(p.View, {
                                                className: "to",
                                                children: [
                                                  (0, C.BX)(p.View, {
                                                    className: "time",
                                                    children: [
                                                      a.diffDays > 0 &&
                                                        (0, C.tZ)(p.Text, {
                                                          className: "add",
                                                          children:
                                                            "+" +
                                                            a.diffDays +
                                                            "天",
                                                        }),
                                                      (0, C.tZ)(p.Text, {
                                                        children: a.arriveTime,
                                                      }),
                                                    ],
                                                  }),
                                                  (0, C.tZ)(p.View, {
                                                    className: "station",
                                                    children: a.arriveStation,
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          a.passengers &&
                                            a.passengers.length > 0 &&
                                            (0, C.BX)(p.View, {
                                              className:
                                                "journey-tick-bd " +
                                                (t ? "ty" : "zx"),
                                              children: [
                                                (0, C.tZ)(p.View, {
                                                  className: "title",
                                                  children: "乘车人信息",
                                                }),
                                                a.passengers.map(function (e) {
                                                  return (0,
                                                  C.BX)(p.View, { className: "item", children: [(0, C.BX)(p.View, { children: [(0, C.tZ)(p.Text, { className: "name", children: e.passengerName }), (0, C.tZ)(p.Text, { className: "tag", children: e.ticketType })] }), (0, C.BX)(p.View, { className: "seat", children: [e.seatTag && (0, C.tZ)(p.Text, { className: "seatTag", children: e.seatTag }), (0, C.tZ)(p.Text, { className: "seatNum", children: e.seatNum || "" }), (0, C.tZ)(p.Text, { className: "seatName", children: e.seatName || "" })] })] }, "index");
                                                }),
                                              ],
                                            }),
                                        ],
                                      }),
                                      (0, C.BX)(p.View, {
                                        className: "journey-zwd",
                                        children: [
                                          (0, C.BX)(p.View, {
                                            className: "tit",
                                            children: [
                                              (0, C.BX)(p.View, {
                                                className: "tit-l",
                                                children: [
                                                  "正晚点信息",
                                                  i &&
                                                    (0, C.BX)(p.View, {
                                                      className: "fr",
                                                      id: "AGAF",
                                                      onClick:
                                                        this
                                                          .refreshSearchTrainDelay,
                                                      children: [
                                                        (0, C.tZ)(p.Icon, {
                                                          className:
                                                            "icon-refresh",
                                                        }),
                                                        "刷新",
                                                      ],
                                                    }),
                                                ],
                                              }),
                                              l
                                                ? (0, C.tZ)(p.View, {
                                                    className: "r-btn",
                                                    id: "AGAG",
                                                    onClick:
                                                      this.handleSubscribeTrip.bind(
                                                        this
                                                      ),
                                                    children: "好友到站提醒",
                                                  })
                                                : (0, C.tZ)(p.View, {
                                                    className: "r-info",
                                                    children: "到站提醒已添加",
                                                  }),
                                            ],
                                          }),
                                          (0, C.BX)(p.View, {
                                            className:
                                              "journey-zwd-hd " +
                                              (t ? "ty" : "zx"),
                                            children: [
                                              (0, C.tZ)(p.View, {
                                                className: "station",
                                                children: "车站",
                                              }),
                                              (0, C.tZ)(p.View, {
                                                className: "time",
                                                children: "时间",
                                              }),
                                              (0, C.tZ)(p.View, {
                                                className: "stay",
                                                children: "停留",
                                              }),
                                              (0, C.tZ)(p.View, {
                                                className: "ontime",
                                                children: "正晚点",
                                              }),
                                            ],
                                          }),
                                          (0, C.tZ)(p.View, {
                                            className: "journey-zwd-bd",
                                            children:
                                              r.length > 0 &&
                                              (0, C.tZ)(p.Block, {
                                                children: r.map(function (e) {
                                                  return (0,
                                                  C.BX)(p.View, { className: "item " + e.backgroundColor + " " + (e.isShowBold ? "" : "disabled"), children: [(0, C.tZ)(p.View, { className: "station", children: e.stationName }), (0, C.tZ)(p.View, { className: "time", children: "--" !== e.arrivalTime ? (0, C.tZ)(p.Block, { children: e.arrivalTime }) : (0, C.tZ)(p.Block, { children: e.startTime }) }), (0, C.tZ)(p.View, { className: "stay", children: "--" == e.stopMinutes ? (0, C.tZ)(p.Block, { children: "--" }) : (0, C.tZ)(p.Block, { children: e.stopMinutes + "分" }) }), (0, C.BX)(p.View, { className: "ontime", children: [e.isStartStation && (0, C.tZ)(p.Block, { children: e.delayInfo ? (0, C.tZ)(p.Block, { children: e.delayInfo > 0 ? (0, C.tZ)(p.Block, { children: (0, C.tZ)(p.Text, { className: "tred", children: "晚" + e.delayInfo + "分" }) }) : (0, C.tZ)(p.Block, { children: "正点" }) }) : (0, C.tZ)(p.Block, { children: "--" }) }), !e.isStartStation && (0, C.tZ)(p.Block, { children: e.arriveDelayInfo ? (0, C.tZ)(p.Block, { children: e.arriveDelayInfo > 0 ? (0, C.tZ)(p.Block, { children: (0, C.tZ)(p.Text, { className: "tred", children: "晚" + e.absArriveDelayInfo + "分" }) }) : e.arriveDelayInfo < 0 ? (0, C.tZ)(p.Block, { children: (0, C.tZ)(p.Text, { className: "tblue", children: "早" + e.absArriveDelayInfo + "分" }) }) : (0, C.tZ)(p.Block, { children: "正点" }) }) : (0, C.tZ)(p.Block, { children: "--" }) })] })] }, "index");
                                                }),
                                              }),
                                          }),
                                          (0, C.tZ)(p.View, {
                                            className:
                                              "btn-more " + (n ? "open" : ""),
                                            id: "AGAH",
                                            onClick: this.toggleTrainDelay,
                                            children: (0, C.tZ)(p.Text, {
                                              children: n
                                                ? "收起所有站点"
                                                : "查看所有站点",
                                            }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, C.BX)(p.View, {
                                    className: "journey-share-jump",
                                    children: [
                                      (0, C.tZ)(p.Button, {
                                        className: "btn-share btn",
                                        openType: "share",
                                        "data-flag": "shareJourney",
                                        id: "AGAI",
                                        onClick: this.noop,
                                        "data-ubt-key":
                                          "wx_journey_shareJourney",
                                        children: "分享行程",
                                      }),
                                      (0, C.tZ)(p.Button, {
                                        className: "btn-jump btn",
                                        id: "AGAJ",
                                        onClick:
                                          this.checkLoginStateAndGotoBookPage.bind(
                                            this
                                          ),
                                        children: "我也要买这班车",
                                      }),
                                    ],
                                  }),
                                ],
                              })
                            );
                          },
                        },
                      ]),
                      a
                    );
                  })(v.default.Component))
                ) || i)
            ) || i;
        (L.enableShareAppMessage = !0),
          Page(
            (0, r.createPageConfig)(
              L,
              "pages/trainminor/journey/journey",
              { root: { cn: [] } },
              {
                navigationBarTitleText: "",
                navigationBarBackgroundColor: "#0066E6",
                backgroundColorTop: "#0075F4",
                backgroundColorBottom: "#ffffff",
              } || {}
            )
          );
      },
    },
    function (e) {
      e.O(0, [19559, 11216, 68592], function () {
        return (function (t) {
          return e((e.s = t));
        })(10698);
      }),
        e.O();
    },
  ]);
})();
