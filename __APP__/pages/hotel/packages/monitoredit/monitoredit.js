!(function () {
  "use strict";
  require("../../sub-vendors.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [51400],
      {
        39251: function (e, t, i) {
          var a,
            s = i(32180),
            c = i(57042),
            n = i(24460),
            o = i(21867),
            r = i(86066),
            l = i(90983),
            d = i(45023),
            h = i(298),
            u = i(52500),
            m = i(71515),
            y = i(92954),
            f = i.n(y),
            p = i(48792),
            g = i.n(p),
            v = i(3205),
            I = i(27113),
            N = i(79792),
            S = i(79404),
            k = i(4102),
            w = i(62607),
            D = i(92667),
            T = i(81957),
            Z = i(48813),
            V = [0, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600],
            B = {
              pageId: "10650060673",
              data: {
                isTieyou: N.default.isTieyou,
                statusBarHeight: 0,
                hotelSearch: {
                  city: {
                    displayText: "上海",
                    cityId: "2",
                    cityName: "上海",
                    districtId: 0,
                    timeZone: 0,
                    type: 1,
                    lat: "",
                    lon: "",
                  },
                  date: {
                    checkInDate: k.Z.getToday(),
                    checkOutDate: k.Z.getTomorrow(),
                    checkInDay_disp: [],
                    checkOutDay_disp: [],
                    totalDays: 0,
                  },
                  keywordInfo: {
                    displayText: "",
                    queryTypeModel: {
                      itemType: 0,
                      queryType: 0,
                      itemValue: "",
                    },
                  },
                },
                queryHotelList: [],
                keyWordItemList: [],
                chooseDateList: [],
                levelList: [
                  {
                    subType: "2",
                    scenarioType: "CommonModule",
                    filterType: 0,
                    sceneBitMap: 0,
                    title: "二星/经济",
                    value: "2",
                    type: "16",
                    filterID: "16|2",
                    isSelected: !1,
                  },
                  {
                    subType: "2",
                    scenarioType: "CommonModule",
                    filterType: 0,
                    sceneBitMap: 0,
                    title: "三星/舒适",
                    value: "3",
                    type: "16",
                    filterID: "16|3",
                    isSelected: !1,
                  },
                  {
                    subType: "2",
                    scenarioType: "CommonModule",
                    filterType: 0,
                    sceneBitMap: 0,
                    title: "四星/高档",
                    value: "4",
                    type: "16",
                    filterID: "16|4",
                    isSelected: !1,
                  },
                  {
                    subType: "2",
                    scenarioType: "CommonModule",
                    filterType: 0,
                    sceneBitMap: 0,
                    title: "五星/豪华",
                    value: "5",
                    type: "16",
                    filterID: "16|5",
                    isSelected: !1,
                  },
                ],
                choosenDate: "",
                leftProcess: 0,
                rightProcess: 1,
                taskId: "",
              },
              onLoad: function (e) {
                var t = this.data.hotelSearch,
                  i = [k.Z.getToday()];
                if (e.data) {
                  var a = e.data,
                    s = a.checkInDateList,
                    c = a.cityId,
                    n = a.cityName,
                    o = a.taskId;
                  (i = s),
                    (t.city.cityId = c),
                    (t.city.cityName = n),
                    (t.city.displayText = n),
                    this.setData({ hotelSearch: t, taskId: o });
                }
                this.setData({
                  chooseDateList: i,
                  choosenDate: i
                    .map(function (e) {
                      return e.substring(5, 11);
                    })
                    .join("、"),
                }),
                  this.getSystemInfo(),
                  this.getPriceMonitorFilter(),
                  this.handlePriceSlider();
              },
              onReady: function () {
                var e = this;
                f().nextTick(function () {
                  var t = f().createSelectorQuery(),
                    i = e,
                    a = e.data.rate;
                  t.select(".monitor-price-bd").boundingClientRect(),
                    t.exec(function (e) {
                      if (e) {
                        var t = e[0],
                          s = t.left,
                          c = t.right,
                          n = 74.5 - (24 / a / (c - s)) * 100;
                        i.setData({
                          sliderLeft: s,
                          sliderRight: c,
                          screenRatio: a,
                          offsetX: n,
                        });
                      }
                    });
                });
              },
              getPriceMonitorFilter: function () {
                var e = this,
                  t = this.data,
                  i = t.hotelSearch,
                  a = t.taskId,
                  s = t.filterItem,
                  c = void 0 === s ? {} : s,
                  n = c.item ? c.item.data.filterID : -1,
                  o = c.item ? c.item.data.title : "",
                  r = {
                    data: {
                      cityId: i.city.cityId,
                      taskId: a || 0,
                      clientVersion: S.Z.clientVersion,
                    },
                  };
                (0, D.xB)(r).then(function (t) {
                  if (1 === t.resultCode) {
                    var i = t.data.keyWordItemList,
                      a = (void 0 === i ? [] : i).map(function (e) {
                        return (0,
                        h.Z)((0, h.Z)({}, e), {}, { isSelected: e.item.data.filterID === n && e.item.data.title === o });
                      });
                    e.setData({ keyWordItemList: a });
                  }
                });
              },
              handleCheckInDate: function () {
                var e = this,
                  t = k.Z.getSpecialDay2Today(180);
                v.Z.calendar(
                  {
                    bu: "flight",
                    confirmBtn: !0,
                    chooseDate: this.data.chooseDateList,
                    beginDate: k.Z.getToday(),
                    endDate: t,
                    type: "multiple",
                    multipleLimit: 3,
                  },
                  function (t) {
                    var i = t
                      .map(function (e) {
                        return e.substring(5, 11);
                      })
                      .join("、");
                    e.setData({ chooseDateList: t, choosenDate: i });
                  }
                );
              },
              handleFilterQuery: function (e) {
                var t = e.target.dataset.idx,
                  i = this.data.keyWordItemList;
                i.forEach(function (e, i) {
                  e.isSelected = i === t && !e.isSelected;
                }),
                  this.setData({
                    keyWordItemList: i,
                    filterItem: i.find(function (e) {
                      return e.isSelected;
                    })
                      ? i.find(function (e) {
                          return !0 === e.isSelected;
                        })
                      : {},
                  });
              },
              handleLevelQuery: function (e) {
                var t = this.data.levelList,
                  i = e.target.dataset.idx,
                  a = "levelList[".concat(i, "].isSelected");
                this.setData((0, d.Z)({}, a, !t[i].isSelected));
              },
              priceLeftSliderChange: function (e) {
                var t = e.changedTouches[0].pageX,
                  i = this.data,
                  a = i.sliderLeft,
                  s = i.sliderRight,
                  c = i.rightProcess,
                  n = this.data.leftProcess;
                (n = t < a ? 0 : t > s ? 1 : (t - a) / (s - a)) > c - 0.07 ||
                  (this.setData({ leftProcess: n }), this.handlePriceSlider());
              },
              priceRightSliderChange: function (e) {
                var t = e.changedTouches[0].pageX,
                  i = this.data,
                  a = i.sliderLeft,
                  s = i.sliderRight,
                  c = i.leftProcess,
                  n = this.data.rightProcess;
                c > (n = t < a ? 0 : t > s ? 1 : (t - a) / (s - a)) - 0.07 ||
                  (this.setData({ rightProcess: n }), this.handlePriceSlider());
              },
              handlePriceSlider: function () {
                var e = this.data,
                  t = e.leftProcess,
                  i = e.rightProcess,
                  a = 600 * t,
                  s = 600 * i,
                  c =
                    0 === t
                      ? 0
                      : V[
                          V.findIndex(function (e) {
                            return e > a;
                          }) - 1
                        ],
                  n =
                    1 === i
                      ? "不限"
                      : V[
                          V.findIndex(function (e) {
                            return e > s;
                          }) - 1
                        ];
                this.setData({ leftStr: c, rightStr: n });
              },
              getCurrentParams: function () {
                var e,
                  t = this.data.hotelSearch.city,
                  i = this.data,
                  a = i.filterItem,
                  s = void 0 === a ? {} : a,
                  c = i.levelList,
                  n = i.leftStr,
                  o = void 0 === n ? 0 : n,
                  r = i.rightStr,
                  d = void 0 === r ? 600 : r,
                  h = {
                    cityName: t.cityName,
                    checkInDate: this.data.chooseDateList[0],
                    checkOutDate: k.Z.getSpecialDay(
                      this.data.chooseDateList[0],
                      1
                    ),
                    contrl: 3,
                    specialChannel: 0,
                    cityId: t.cityId,
                    clientVersion: S.Z.clientVersion,
                    queryBitMap: 0,
                    desc: 1,
                    hotelType: 1,
                  },
                  u = [],
                  m = (0, l.Z)(c);
                try {
                  for (m.s(); !(e = m.n()).done; ) {
                    var y = e.value;
                    y.isSelected && u.push(y);
                  }
                } catch (e) {
                  m.e(e);
                } finally {
                  m.f();
                }
                return {
                  queryModel: h,
                  levels: u,
                  priceRange: {
                    priceStart: o,
                    priceEnd: "不限" === d || 600 === d ? "max" : d,
                  },
                  keywordInfo: s.item || {},
                };
              },
              goHotelList: function () {
                var e = this.getCurrentParams();
                this.navigateTo({ url: "/pages/hotel/list/list", data: e });
              },
              goTaskPage: function () {
                var e = this.getCurrentParams(),
                  t = this.data,
                  i = t.chooseDateList,
                  a = t.leftStr,
                  s = void 0 === a ? 0 : a,
                  c = t.rightStr,
                  n = void 0 === c ? 600 : c,
                  o = t.levelList,
                  r = t.taskId,
                  l = void 0 === r ? "" : r,
                  d = {
                    checkInDateStr: i.join(","),
                    priceInfo:
                      0 === s && "不限" === n
                        ? "不限"
                        : "".concat(s, "-").concat(n),
                    city: this.data.hotelSearch.city.cityName,
                    cityId: this.data.hotelSearch.city.cityId,
                    levelList: o.filter(function (e) {
                      return e.isSelected;
                    }),
                    taskId: l,
                  };
                (e.taskInfo = d),
                  this.navigateTo({
                    url: "/pages/hotel/packages/monitorlist/monitorlist",
                    data: e,
                  });
              },
              goBack: function () {
                f().navigateBack({ delta: 1 });
              },
              getSystemInfo: function () {
                var e = this;
                f().getSystemInfo({
                  success: function (t) {
                    e.setData({
                      statusBarHeight: t.statusBarHeight,
                      rate: 750 / t.windowWidth,
                    });
                  },
                });
              },
              handleSelectCity: function () {
                var e = this,
                  t = this,
                  i = { inlandCities: w.DB.get() || {}, interCities: {} };
                i.inlandCities.hotCities = S.Z.hotelHotCities;
                var a = [];
                for (var s in i.inlandCities.cityMainList)
                  a = a.concat(i.inlandCities.cityMainList[s]);
                v.Z.city(
                  {
                    title: "选择城市",
                    poi: !1,
                    bu: "hotel",
                    loadData: function (e) {
                      e(i);
                    },
                    handleCurrentPosition: function (e, t) {
                      console.log("location", e),
                        (0, I.PA)(
                          function (e) {
                            (e.isGeo = !0),
                              t &&
                                t({
                                  cityName: e.cityName,
                                  cityId: e.cityId,
                                  cityAddress: e.address,
                                  lat: e.lat,
                                  lng: e.lng,
                                });
                          },
                          function () {}
                        );
                    },
                  },
                  function (i) {
                    var a = t.data.hotelSearch,
                      s = a.city;
                    s.cityId != i.cityId && e.setData({ filterItem: {} }),
                      (s.cityId = i.cityId),
                      (s.cityName = i.cityName),
                      (s.displayText = i.cityName),
                      (s.lat = i.lat),
                      (s.lon = i.lon),
                      (s.isGeo = i.isGeo),
                      (s.districtId = i.districtId),
                      e.setData({ hotelSearch: a }),
                      e.getPriceMonitorFilter();
                  }
                );
              },
            },
            C =
              (0, T.h)()(
                (a =
                  g()(B)(
                    (a = (function (e) {
                      (0, o.Z)(i, e);
                      var t = (0, r.Z)(i);
                      function i() {
                        return (0, c.Z)(this, i), t.apply(this, arguments);
                      }
                      return (
                        (0, n.Z)(i, [
                          {
                            key: "render",
                            value: function () {
                              var e = this,
                                t = this.data,
                                i = t.isTieyou,
                                a = t.statusBarHeight,
                                s = t.hotelSearch,
                                c = t.keyWordItemList,
                                n = t.choosenDate,
                                o = t.leftStr,
                                r = t.rightStr,
                                l = t.leftProcess,
                                d = t.rightProcess,
                                h = t.levelList;
                              return (0, Z.BX)(m.Block, {
                                children: [
                                  (0, Z.BX)(m.View, {
                                    className: "top " + (i ? "ty" : "zx"),
                                    style: "padding-top: " + (a - 20) + "px",
                                    children: [
                                      (0, Z.tZ)(m.View, {
                                        className: "top-bar",
                                        children:
                                          !N.default.isBaidu &&
                                          (0, Z.tZ)(m.Text, {
                                            className: "ifont-back iconfont",
                                            id: "AXGs",
                                            onClick: this.goBack,
                                          }),
                                      }),
                                      (0, Z.BX)(m.View, {
                                        className: "top-bd",
                                        children: [
                                          (0, Z.tZ)(m.View, {
                                            className: "tit",
                                            children: "为您持续监控低价酒店",
                                          }),
                                          (0, Z.tZ)(m.View, {
                                            className: "txt",
                                            children:
                                              "超值酒店不错过，每单只花最低价",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, Z.BX)(m.View, {
                                    className: "wrap",
                                    children: [
                                      (0, Z.BX)(m.View, {
                                        className: "white-box monitor-box",
                                        children: [
                                          (0, Z.BX)(m.View, {
                                            className: "monitor-city",
                                            children: [
                                              (0, Z.BX)(m.View, {
                                                className: "monitor-select",
                                                children: [
                                                  (0, Z.tZ)(m.View, {
                                                    className: "label",
                                                    children: "选择城市",
                                                  }),
                                                  (0, Z.tZ)(m.View, {
                                                    className: "cont",
                                                    children:
                                                      s.city.displayText ||
                                                      s.city.cityName,
                                                  }),
                                                  (0, Z.BX)(m.View, {
                                                    className:
                                                      "rbox color-primary",
                                                    id: "AXGt",
                                                    onClick:
                                                      this.handleSelectCity,
                                                    children: [
                                                      "更改",
                                                      (0, Z.tZ)(m.Text, {
                                                        className:
                                                          "ifont-arr iconfont",
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              c.length > 0 &&
                                                (0, Z.tZ)(m.View, {
                                                  className:
                                                    "monitor-city-tag " +
                                                    (i ? "ty" : "zx"),
                                                  children: (0, Z.tZ)(m.View, {
                                                    className: "tag-list",
                                                    children: c.map(function (
                                                      t,
                                                      i
                                                    ) {
                                                      return (0, Z.tZ)(
                                                        m.View,
                                                        {
                                                          className:
                                                            "item " +
                                                            (t.isSelected
                                                              ? "cur"
                                                              : ""),
                                                          id: "AXGu",
                                                          onClick:
                                                            e.handleFilterQuery,
                                                          "data-idx": i,
                                                          children:
                                                            t.displayName,
                                                        },
                                                        "index"
                                                      );
                                                    }),
                                                  }),
                                                }),
                                            ],
                                          }),
                                          (0, Z.tZ)(m.View, {
                                            className: "monitor-date",
                                            children: (0, Z.BX)(m.View, {
                                              className: "monitor-select",
                                              children: [
                                                (0, Z.tZ)(m.View, {
                                                  className: "label",
                                                  children: "入住日期",
                                                }),
                                                (0, Z.tZ)(m.View, {
                                                  className: "cont",
                                                  children: n,
                                                }),
                                                (0, Z.BX)(m.View, {
                                                  className:
                                                    "rbox color-primary",
                                                  id: "AXGv",
                                                  onClick:
                                                    this.handleCheckInDate,
                                                  children: [
                                                    "更改",
                                                    (0, Z.tZ)(m.Text, {
                                                      className:
                                                        "ifont-arr iconfont",
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                          }),
                                        ],
                                      }),
                                      (0, Z.BX)(m.View, {
                                        className: "white-box monitor-box",
                                        children: [
                                          (0, Z.BX)(m.View, {
                                            className: "monitor-select",
                                            children: [
                                              (0, Z.tZ)(m.View, {
                                                className: "label",
                                                children: "价格星级",
                                              }),
                                              (0, Z.tZ)(m.View, {
                                                className: "cont",
                                                children: o + "-" + r,
                                              }),
                                            ],
                                          }),
                                          (0, Z.BX)(m.View, {
                                            className: "monitor-price",
                                            children: [
                                              (0, Z.BX)(m.View, {
                                                className: "monitor-price-hd",
                                                children: [
                                                  (0, Z.tZ)(m.View, {
                                                    className: "item",
                                                    children: "¥0",
                                                  }),
                                                  (0, Z.tZ)(m.View, {
                                                    className: "item",
                                                    children: "¥600以上",
                                                  }),
                                                ],
                                              }),
                                              (0, Z.BX)(m.View, {
                                                className: "monitor-price-bd",
                                                children: [
                                                  (0, Z.tZ)(m.View, {
                                                    className:
                                                      "line bgcolor-primary",
                                                    style:
                                                      "left:" +
                                                      100 * l +
                                                      "%;right:" +
                                                      100 * (1 - d) +
                                                      "%",
                                                  }),
                                                  (0, Z.tZ)(m.View, {
                                                    className: "slide-block",
                                                    style:
                                                      "left:" + 100 * l + "%",
                                                    onTouchMove:
                                                      this
                                                        .priceLeftSliderChange,
                                                  }),
                                                  (0, Z.tZ)(m.View, {
                                                    className: "slide-block",
                                                    style:
                                                      "left:" + 100 * d + "%",
                                                    onTouchMove:
                                                      this
                                                        .priceRightSliderChange,
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          (0, Z.tZ)(m.View, {
                                            className:
                                              "monitor-type " +
                                              (i ? "ty" : "zx"),
                                            children: h.map(function (t, i) {
                                              return (0,
                                              Z.tZ)(m.View, { className: "item " + (t.isSelected ? "cur" : ""), id: "AXGw", onClick: e.handleLevelQuery, "data-idx": i, children: t.title }, "index");
                                            }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, Z.BX)(m.View, {
                                    className: "botm-fixed",
                                    children: [
                                      (0, Z.BX)(m.View, {
                                        className: "txt color-primary",
                                        id: "AXGx",
                                        onClick: this.goHotelList,
                                        children: [
                                          "直接搜酒店",
                                          (0, Z.tZ)(m.Text, {
                                            className: "ifont-arr iconfont",
                                          }),
                                        ],
                                      }),
                                      (0, Z.tZ)(m.Button, {
                                        className: "btn-primary",
                                        id: "AXGy",
                                        onClick: this.goTaskPage,
                                        children: "下一步",
                                      }),
                                    ],
                                  }),
                                ],
                              });
                            },
                          },
                        ]),
                        i
                      );
                    })(u.default.Component))
                  ) || a)
              ) || a;
          Page(
            (0, s.createPageConfig)(
              C,
              "pages/hotel/packages/monitoredit/monitoredit",
              { root: { cn: [] } },
              {
                navigationBarTitleText: "",
                navigationBarTextStyle: "white",
                navigationBarBackgroundColor: "#3C4365",
                backgroundColorTop: "#3C4365",
                backgroundColorBottom: "#F5F5F5",
                navigationStyle: "custom",
              } || {}
            )
          );
        },
      },
      function (e) {
        e.O(0, [89607, 19559, 11216, 68592], function () {
          return (function (t) {
            return e((e.s = t));
          })(39251);
        }),
          e.O();
      },
    ]);
})();
