!(function () {
  "use strict";
  require("../sub-vendors.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [79017],
      {
        68260: function (e, t, a) {
          var n = a(32180),
            i = a(79301),
            o = a(95308),
            r = a(57042),
            c = a(24460),
            s = a(81876),
            l = a(21867),
            u = a(86066),
            m = a(45023),
            h = a(52500),
            d = a(92954),
            p = a.n(d),
            f = a(71515),
            v = a(79792),
            w = a(81957),
            N = a(38911),
            g = (a(49120), a(79910)),
            y = a(27113),
            Z = a(94190),
            S = a(25391),
            I = a(298),
            k = a(74921),
            x = a(48813),
            b = ["stations"];
          function T(e) {
            var t = e.stationType;
            if (!e.isShowStationTag) return "tag-hidden";
            switch (t) {
              case "T":
                return "train-tag";
              case "F":
                return "air-tag";
              case "B":
                return "bus-tag";
              case "S":
                return "ship-tag";
              case "SC":
                return "scene-tag";
              default:
                return "train-tag";
            }
          }
          function C(e) {
            if (!e) return [];
            var t = 1;
            return (
              e.forEach(function (e) {
                var a = [];
                a =
                  e.stations && e.stations.length > 0
                    ? e.stations
                    : e.nearbyStations && e.nearbyStations.length > 0
                    ? e.nearbyStations
                    : [];
                var n = "";
                (e.clickIndex = t++),
                  a.forEach(function (e) {
                    (e.clickIndex = t++),
                      e.stationType !== n
                        ? ((e.isShowStationTag = !0), (n = e.stationType))
                        : (e.isShowStationTag = !1);
                  }),
                  (e.stations = a);
              }),
              e
            );
          }
          function B(e) {
            switch (e) {
              case "T":
                return "车站";
              default:
                return "城市";
            }
          }
          var L = function (e) {
              var t = e.areas,
                a = void 0 === t ? [] : t,
                n = e.onSelectStation,
                i = e.keyword;
              return (0, x.tZ)(f.View, {
                className: "train_smart-search-result",
                children: (0, x.tZ)(f.View, {
                  className: "list",
                  children: C(a).map(function () {
                    var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : {},
                      t = e.stations,
                      a = void 0 === t ? [] : t,
                      o = (0, k.Z)(e, b),
                      r = o.showName.split(i);
                    return (0, x.BX)(
                      f.View,
                      {
                        className: "city-item",
                        children: [
                          (0, x.BX)(f.View, {
                            className: "row cityName",
                            onClick: function () {
                              return n(o);
                            },
                            children: [
                              (0, x.tZ)(f.View, {
                                className: "city-tag",
                                children: "城市",
                              }),
                              (0, x.BX)(f.View, {
                                className: "city-txt",
                                children: [
                                  r[0] && (0, x.tZ)(f.Text, { children: r[0] }),
                                  r.length > 1 &&
                                    (0, x.tZ)(f.Text, {
                                      className: "color-primary",
                                      children: i,
                                    }),
                                  r[1] && (0, x.tZ)(f.Text, { children: r[1] }),
                                ],
                              }),
                            ],
                          }),
                          (0, x.tZ)(f.View, {
                            children: a.map(function (e) {
                              var t = e.showName.split(i);
                              return (0, x.BX)(
                                f.View,
                                {
                                  className: "row station-item",
                                  onClick: function () {
                                    return n(
                                      (0, I.Z)(
                                        (0, I.Z)({}, e),
                                        {},
                                        { _cityInfo: o }
                                      )
                                    );
                                  },
                                  children: [
                                    (0, x.tZ)(f.View, {
                                      className: "station-type ".concat(T(e)),
                                      children: B(e.stationType),
                                    }),
                                    (0, x.BX)(f.View, {
                                      className: "station-name",
                                      children: [
                                        t[0] &&
                                          (0, x.tZ)(f.Text, { children: t[0] }),
                                        t.length > 1 &&
                                          (0, x.tZ)(f.Text, {
                                            className: "color-primary",
                                            children: i,
                                          }),
                                        t[1] &&
                                          (0, x.tZ)(f.Text, { children: t[1] }),
                                      ],
                                    }),
                                  ],
                                },
                                e.code
                              );
                            }),
                          }),
                        ],
                      },
                      o.areaId
                    );
                  }),
                }),
              });
            },
            V = a(90129);
          var _ = function (e) {
              var t = e.areas,
                a = void 0 === t ? {} : t,
                n = (e.stations, e.onSelectStation, e.locationState),
                i = void 0 === n ? "0" : n,
                o = (e.beginLocate, (0, h.useState)([])),
                r = (0, V.Z)(o, 2),
                c = r[0],
                s = r[1];
              (0, h.useEffect)(function () {
                Z.OX.getAsync().then(function (e) {
                  e && e.length && s(e);
                });
              }, []);
              var l = "定位中";
              return (
                "-1" == i ? (l = "定位失败") : "1" == i && (l = a.name),
                (0, x.tZ)(f.View, {
                  className: "train_smart_location",
                  children: (0, x.BX)(f.View, {
                    className: "city-module_items",
                    children: [
                      (0, x.tZ)(f.View, {
                        id: "hot",
                        className: "city-module_type",
                        children: "定位城市/历史",
                      }),
                      (0, x.tZ)(
                        f.Block,
                        {
                          children: (0, x.BX)(f.Text, {
                            className: "city-module_name1",
                            onClick: function () {
                              "1" == i && e.onSelectStation(a);
                            },
                            children: [
                              (0, x.tZ)(f.Text, {
                                className:
                                  "ifont-location iconfont color-primary",
                              }),
                              l,
                            ],
                          }),
                        },
                        "cityName"
                      ),
                      c.map(function (t, a) {
                        return (0, x.tZ)(
                          f.Block,
                          {
                            children: (0, x.tZ)(f.Text, {
                              className: "city-module_name1",
                              onClick: function () {
                                e.onSelectStation(t);
                              },
                              children: t.name,
                            }),
                          },
                          "cityName"
                        );
                      }),
                    ],
                  }),
                })
              );
            },
            X = [
              {
                name: "北京",
                showName: "北京",
                areaId: "110000",
                province: "北京市",
                lng: 116.41355402,
                lat: 39.91101332,
              },
              {
                name: "上海",
                showName: "上海",
                areaId: "310000",
                province: "上海市",
                lng: 121.4802374,
                lat: 31.23630482,
              },
              {
                name: "天津",
                showName: "天津",
                areaId: "120000",
                province: "天津市",
                lng: 117.20591359,
                lat: 39.09090813,
              },
              {
                name: "重庆",
                showName: "重庆",
                areaId: "500000",
                province: "重庆市",
                lng: 106.55716538,
                lat: 29.57099657,
              },
              {
                name: "长沙",
                showName: "长沙市",
                areaId: "430100",
                province: "湖南省",
                lng: 112.94533263,
                lat: 28.23397143,
              },
              {
                name: "长春",
                showName: "长春市",
                areaId: "220100",
                province: "吉林省",
                lng: 125.33016978,
                lat: 43.82177969,
              },
              {
                name: "成都",
                showName: "成都市",
                areaId: "510100",
                province: "四川省",
                lng: 104.07121596,
                lat: 30.57627895,
              },
              {
                name: "福州",
                showName: "福州市",
                areaId: "350100",
                province: "福建省",
                lng: 119.30293817,
                lat: 26.08044702,
              },
              {
                name: "广州",
                showName: "广州市",
                areaId: "440100",
                province: "广东省",
                lng: 113.27079303,
                lat: 23.13530809,
              },
              {
                name: "贵阳",
                showName: "贵阳市",
                areaId: "520100",
                province: "贵州省",
                lng: 106.6368157,
                lat: 26.65274674,
              },
              {
                name: "呼和浩特",
                showName: "呼和浩特市",
                areaId: "150100",
                province: "内蒙古自治区",
                lng: 111.75851823,
                lat: 40.84746079,
              },
              {
                name: "哈尔滨",
                showName: "哈尔滨市",
                areaId: "230100",
                province: "黑龙江省",
                lng: 126.54241685,
                lat: 45.80778329,
              },
              {
                name: "合肥",
                showName: "合肥市",
                areaId: "340100",
                province: "安徽省",
                lng: 117.23544691,
                lat: 31.82686966,
              },
              {
                name: "杭州",
                showName: "杭州市",
                areaId: "330100",
                province: "浙江省",
                lng: 120.16169313,
                lat: 30.28005874,
              },
              {
                name: "海口",
                showName: "海口市",
                areaId: "460100",
                province: "海南省",
                lng: 110.20642408,
                lat: 20.05005714,
              },
              {
                name: "济南",
                showName: "济南市",
                areaId: "370100",
                province: "山东省",
                lng: 117.12648795,
                lat: 36.65819383,
              },
              {
                name: "昆明",
                showName: "昆明市",
                areaId: "530100",
                province: "云南省",
                lng: 102.83966702,
                lat: 24.88595338,
              },
              {
                name: "拉萨",
                showName: "拉萨市",
                areaId: "540100",
                province: "西藏自治区",
                lng: 91.12102486,
                lat: 29.65008752,
              },
              {
                name: "兰州",
                showName: "兰州市",
                areaId: "620100",
                province: "甘肃省",
                lng: 103.84069207,
                lat: 36.06731205,
              },
              {
                name: "南宁",
                showName: "南宁市",
                areaId: "450100",
                province: "广西壮族自治区",
                lng: 108.373351,
                lat: 22.82303728,
              },
              {
                name: "南京",
                showName: "南京市",
                areaId: "320100",
                province: "江苏省",
                lng: 118.80289131,
                lat: 32.06473459,
              },
              {
                name: "南昌",
                showName: "南昌市",
                areaId: "360100",
                province: "江西省",
                lng: 115.8645276,
                lat: 28.68767495,
              },
              {
                name: "沈阳",
                showName: "沈阳市",
                areaId: "210100",
                province: "辽宁省",
                lng: 123.46953843,
                lat: 41.68342055,
              },
              {
                name: "石家庄",
                showName: "石家庄市",
                areaId: "130100",
                province: "河北省",
                lng: 114.52082821,
                lat: 38.04868421,
              },
              {
                name: "太原",
                showName: "太原市",
                areaId: "140100",
                province: "山西省",
                lng: 112.5570597,
                lat: 37.8768848,
              },
              {
                name: "武汉",
                showName: "武汉市",
                areaId: "420100",
                province: "湖北省",
                lng: 114.31183118,
                lat: 30.59842805,
              },
              {
                name: "西宁",
                showName: "西宁市",
                areaId: "630100",
                province: "青海省",
                lng: 101.7842694,
                lat: 36.62347712,
              },
              {
                name: "西安",
                showName: "西安市",
                areaId: "610100",
                province: "陕西省",
                lng: 108.94630635,
                lat: 34.34743643,
              },
              {
                name: "银川",
                showName: "银川市",
                areaId: "640100",
                province: "宁夏回族自治区",
                lng: 106.23897647,
                lat: 38.49239204,
              },
              {
                name: "郑州",
                showName: "郑州市",
                areaId: "410100",
                province: "河南省",
                lng: 113.63134947,
                lat: 34.75348798,
              },
              {
                name: "深圳",
                showName: "深圳市",
                areaId: "440300",
                province: "广东省",
                lng: 114.06611227,
                lat: 22.54851488,
              },
              {
                name: "厦门",
                showName: "厦门市",
                areaId: "350200",
                province: "福建省",
                lng: 118.09591492,
                lat: 24.48582141,
              },
            ];
          var F,
            O = function (e) {
              return (0, x.tZ)(f.View, {
                className: "train_smart_hot_city",
                children:
                  X &&
                  (0, x.BX)(f.View, {
                    className: "city-module_items",
                    children: [
                      (0, x.tZ)(f.View, {
                        id: "hot",
                        className: "city-module_type",
                        children: "热门城市",
                      }),
                      X.map(function (t, a) {
                        return (0, x.tZ)(
                          f.Block,
                          {
                            children: (0, x.tZ)(f.Text, {
                              className: "city-module_name1",
                              onClick: function () {
                                e.onSelectStation(t);
                              },
                              children: t.name,
                            }),
                          },
                          "cityName"
                        );
                      }),
                    ],
                  }),
              });
            },
            P =
              (0, w.h)()(
                (F = (function (e) {
                  (0, l.Z)(a, e);
                  var t = (0, u.Z)(a);
                  function a() {
                    var e;
                    (0, r.Z)(this, a);
                    for (
                      var n = arguments.length, c = new Array(n), l = 0;
                      l < n;
                      l++
                    )
                      c[l] = arguments[l];
                    return (
                      (e = t.call.apply(t, [this].concat(c))),
                      (0, m.Z)((0, s.Z)(e), "state", {
                        inputKeyword: "",
                        areas: [],
                        nearbyLocation: {},
                        locationState: "0",
                      }),
                      (0, m.Z)(
                        (0, s.Z)(e),
                        "pageId",
                        v.default.isTieyou ? "10650082698" : "10650082696"
                      ),
                      (0, m.Z)(
                        (0, s.Z)(e),
                        "saveHistory",
                        (function () {
                          var e = (0, o.Z)(
                            (0, i.Z)().mark(function e(t) {
                              var a, n, o;
                              return (0, i.Z)().wrap(function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (e.next = 2), Z.OX.getAsync();
                                    case 2:
                                      if (((e.t0 = e.sent), e.t0)) {
                                        e.next = 5;
                                        break;
                                      }
                                      e.t0 = [];
                                    case 5:
                                      (a = e.t0),
                                        (n = a.find(function (e) {
                                          return e.name == t.name;
                                        })),
                                        (o = a.indexOf(n)) > -1 &&
                                          a.splice(o, 1),
                                        a.unshift(t),
                                        Z.OX.setAsync(a);
                                    case 11:
                                    case "end":
                                      return e.stop();
                                  }
                              }, e);
                            })
                          );
                          return function (t) {
                            return e.apply(this, arguments);
                          };
                        })()
                      ),
                      (0, m.Z)((0, s.Z)(e), "openLocate", function () {
                        p().showModal({
                          title: "请求授权当前位置",
                          content: "需要获取您的地理位置，请确认授权",
                          success: function (t) {
                            t.confirm &&
                              p().openSetting({
                                success: function (t) {
                                  t.authSetting["scope.userLocation"]
                                    ? e.beginLocate()
                                    : p().showToast({
                                        title: "授权失败",
                                        icon: "none",
                                        duration: 1e3,
                                      });
                                },
                              });
                          },
                        });
                      }),
                      e
                    );
                  }
                  return (
                    (0, c.Z)(a, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          this.handleRouteParams(), this.beginLocate();
                        },
                      },
                      {
                        key: "handleRouteParams",
                        value: function () {
                          var e =
                            (0, d.getCurrentInstance)().router.params.data &&
                            (0, d.getCurrentInstance)().router.params.data
                              .title;
                          p().setNavigationBarTitle({ title: e });
                        },
                      },
                      {
                        key: "inputRef",
                        value: function (e) {
                          this.inputRefNode = e;
                        },
                      },
                      {
                        key: "beginLocate",
                        value: function () {
                          var e = this;
                          (0, y.y9)().then(
                            function (t) {
                              console.log("ztripGetLocation res ", t),
                                null != t && t.longitude
                                  ? e._onHandleCurrentPosition(t)
                                  : e.setState({ locationState: "-1" });
                            },
                            function (t) {
                              console.log("ztripGetLocation error ", t),
                                e.setState({ locationState: -1 });
                            }
                          );
                        },
                      },
                      {
                        key: "getNearbyLoaction",
                        value: (function () {
                          var e = (0, o.Z)(
                            (0, i.Z)().mark(function e(t) {
                              var a, n, o, r, c;
                              return (0, i.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (e.next = 2),
                                          (0, N.J4)({
                                            lng: t.longitude,
                                            lat: t.latitude,
                                          })
                                        );
                                      case 2:
                                        1 === (a = e.sent).resultCode
                                          ? ((n = a.areas),
                                            (r = (o = void 0 === n ? {} : n)
                                              .name),
                                            (c = void 0 === r ? "" : r),
                                            (o.showName = c),
                                            this.setState({
                                              nearbyLocation: a,
                                              locationState: "1",
                                            }))
                                          : this.setState({
                                              nearbyLocation: {
                                                cityName: "定位失败",
                                              },
                                              locationState: "-1",
                                            });
                                      case 4:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this
                              );
                            })
                          );
                          return function (t) {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "_onHandleCurrentPosition",
                        value: function (e) {
                          null !== e && this.getNearbyLoaction(e);
                        },
                      },
                      {
                        key: "searchInput",
                        value: (function () {
                          var e = (0, o.Z)(
                            (0, i.Z)().mark(function e(t) {
                              var a, n, o;
                              return (0, i.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (
                                          ((a = t.detail.value),
                                          this.setData({ inputKeyword: a }),
                                          "" !== a && "" !== a.trim())
                                        ) {
                                          e.next = 4;
                                          break;
                                        }
                                        return e.abrupt("return");
                                      case 4:
                                        return (
                                          (n = []),
                                          (e.next = 7),
                                          g.Z.checkSecretToken()
                                        );
                                      case 7:
                                        return (
                                          (e.next = 9),
                                          (0, N.zP)({
                                            keyword: a,
                                            requestSource: "train",
                                          })
                                        );
                                      case 9:
                                        if (1 !== (o = e.sent).resultCode) {
                                          e.next = 14;
                                          break;
                                        }
                                        (n = o.areas), (e.next = 17);
                                        break;
                                      case 14:
                                        return (
                                          (e.next = 16), this.reedemFromLocal(a)
                                        );
                                      case 16:
                                        n = e.sent;
                                      case 17:
                                        this.setState({ areas: n });
                                      case 18:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this
                              );
                            })
                          );
                          return function (t) {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "reedemFromLocal",
                        value: (function () {
                          var e = (0, o.Z)(
                            (0, i.Z)().mark(function e(t) {
                              var a, n, o, r, c;
                              return (0, i.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (a = [
                                            "香港",
                                            "香港西九龙",
                                            "香港红磡",
                                          ]),
                                          (n = t.toLowerCase()),
                                          (e.next = 4),
                                          S.ZP.getTrainStationData()
                                        );
                                      case 4:
                                        return (
                                          (this.allData = e.sent),
                                          (o = this.allData.filter(function (
                                            e
                                          ) {
                                            return (
                                              e.stationName.indexOf(n) > -1 ||
                                              e.py.indexOf(n) > -1 ||
                                              e.pyHead.indexOf(n) > -1
                                            );
                                          })).forEach(function (e) {
                                            a.findIndex(function (t) {
                                              return t === e.stationName;
                                            }) > -1 &&
                                              (e.stationName = "中国".concat(
                                                e.stationName
                                              ));
                                          }),
                                          o.sort(function (e, t) {
                                            return e.cityID - t.cityID;
                                          }),
                                          (r = []),
                                          (c = []),
                                          o.length > 1
                                            ? o.forEach(function (e, t) {
                                                if (
                                                  e.stationName === e.cityName
                                                )
                                                  c = [
                                                    {
                                                      name: e.cityName,
                                                      showName: e.cityName,
                                                      stations: r,
                                                    },
                                                  ];
                                                else {
                                                  var a = {
                                                    code: e.stationCode,
                                                    name: e.stationName,
                                                    showName: e.stationName,
                                                    stationType: "T",
                                                  };
                                                  r.push(a);
                                                }
                                              })
                                            : 1 === o.length &&
                                              (c = [
                                                {
                                                  name: o[0].cityName,
                                                  showName: o[0].cityName,
                                                  stations: [
                                                    {
                                                      code: o[0].stationCode,
                                                      name: o[0].stationName,
                                                      showName:
                                                        o[0].stationName,
                                                      stationType: "T",
                                                    },
                                                  ],
                                                },
                                              ]),
                                          e.abrupt("return", c)
                                        );
                                      case 12:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this
                              );
                            })
                          );
                          return function (t) {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "searchClear",
                        value: function () {
                          this.setState({ inputKeyword: "" }),
                            (this.inputRefNode.value = "");
                        },
                      },
                      {
                        key: "onSelectStation",
                        value: function (e) {
                          this.saveHistory(e),
                            this.invokeCallback(e),
                            this.navigateBack();
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this.state,
                            t = e.areas,
                            a = e.inputKeyword,
                            n = e.nearbyLocation,
                            i = e.locationState;
                          console.log("inputKeyword", !a);
                          var o = a && a.length;
                          return (0, x.BX)(f.View, {
                            className: "smart-search-site",
                            children: [
                              (0, x.tZ)(f.View, {
                                className: "search-input-box ".concat(
                                  v.default.isWxGov ? "wxgov" : ""
                                ),
                                children: (0, x.BX)(f.View, {
                                  className: "search-input-bd",
                                  children: [
                                    (0, x.tZ)(f.Text, {
                                      className: "ifont-search iconfont",
                                    }),
                                    (0, x.tZ)(f.Input, {
                                      className: "search-module_input",
                                      placeholderClass:
                                        "search-module_input_focus",
                                      placeholder: "请选择城市或站点",
                                      type: "text",
                                      onInput: g.Z.debounce(
                                        this.searchInput.bind(this)
                                      ),
                                      focus: "true",
                                      ref: this.inputRef,
                                    }),
                                    a &&
                                      (0, x.tZ)(f.Text, {
                                        className:
                                          "ifont-del iconfont icon-del",
                                        onClick: this.searchClear.bind(this),
                                      }),
                                  ],
                                }),
                              }),
                              o
                                ? (0, x.tZ)(L, {
                                    onSelectStation:
                                      this.onSelectStation.bind(this),
                                    areas: t,
                                    keyword: a,
                                  })
                                : (0, x.tZ)(_, {
                                    areas: n.areas,
                                    stations: n.stations,
                                    onSelectStation:
                                      this.onSelectStation.bind(this),
                                    locationState: i,
                                    beginLocate: this.openLocate,
                                  }),
                              !o &&
                                (0, x.tZ)(O, {
                                  onSelectStation:
                                    this.onSelectStation.bind(this),
                                }),
                            ],
                          });
                        },
                      },
                    ]),
                    a
                  );
                })(h.default.Component))
              ) || F;
          Page(
            (0, n.createPageConfig)(
              P,
              "functionalPages/trainSmartCity/index",
              { root: { cn: [] } },
              {
                navigationBarTitleText: "出发站",
                navigationBarBackgroundColor: "#fff",
                backgroundColorTop: "#EFEFEF",
                navigationBarTextStyle: "black",
                backgroundColorBottom: "#F5F5F5",
              } || {}
            )
          );
        },
      },
      function (e) {
        e.O(0, [19559, 11216, 68592], function () {
          return (function (t) {
            return e((e.s = t));
          })(68260);
        }),
          e.O();
      },
    ]);
})();
