!(function () {
  "use strict";
  require("../sub-vendors.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [97365],
      {
        63234: function (e, t, n) {
          var a = n(32180),
            r = n(74921),
            i = n(79301),
            o = n(95308),
            c = n(57042),
            s = n(24460),
            u = n(81876),
            l = n(21867),
            h = n(86066),
            f = n(45023),
            d = n(81957),
            p = n(38911),
            m = n(27113),
            v = n(71515),
            w = n(52500),
            y = n(79910),
            g = n(25391),
            N = n(93212),
            I = n(298),
            Z = n(90129),
            S = n(49120),
            x = "FROM",
            b = "TO",
            k = n(48813),
            T = ["className", "onInput", "onFocus", "onBlur"],
            C = (0, w.forwardRef)(function (e, t) {
              var n = e.className,
                a = e.onInput,
                i = e.onFocus,
                o = e.onBlur,
                c = (0, r.Z)(e, T),
                s = (0, w.useRef)().current,
                u = (0, w.useState)(!1),
                l = (0, Z.Z)(u, 2),
                h = l[0],
                f = l[1],
                d = (0, w.useState)(1e3),
                p = (0, Z.Z)(d, 2);
              p[0],
                p[1],
                (0, w.useImperativeHandle)(t, function () {
                  return s || {};
                });
              return (0, k.BX)(v.View, {
                className: "input-with-x",
                children: [
                  (0, k.tZ)(v.Block, {
                    children: (0, k.tZ)(
                      v.Input,
                      (0, I.Z)(
                        {
                          onInput: function (e) {
                            var t;
                            f(
                              !(
                                null === (t = e.detail.value) ||
                                void 0 === t ||
                                !t.trim()
                              )
                            ),
                              null == a || a(e);
                          },
                          onFocus: function () {
                            var e;
                            f(
                              !(
                                null === (e = s.value) ||
                                void 0 === e ||
                                !e.trim()
                              )
                            );
                            for (
                              var t = arguments.length, n = new Array(t), a = 0;
                              a < t;
                              a++
                            )
                              n[a] = arguments[a];
                            null == i || i.apply(void 0, n);
                          },
                          onBlur: function () {
                            f(!1);
                            for (
                              var e = arguments.length, t = new Array(e), n = 0;
                              n < e;
                              n++
                            )
                              t[n] = arguments[n];
                            null == o || o.apply(void 0, t);
                          },
                          placeholderClass: "place-holder",
                          className: "inner-input ".concat(n),
                          ref: function (e) {
                            return (s = e);
                          },
                        },
                        c
                      )
                    ),
                  }),
                  (0, k.tZ)(v.Block, {
                    children:
                      h &&
                      (0, k.tZ)(v.View, {
                        stopPropagation: !0,
                        onClick: function (e) {
                          var t;
                          null === (t = e.preventDefault) ||
                            void 0 === t ||
                            t.call(e),
                            (s.value = "");
                        },
                        className: "icon-del flex flex-center",
                        children: (0, k.tZ)(v.Text, {
                          className: "iconfont2 ifont2-close",
                        }),
                      }),
                  }),
                ],
              });
            }),
            V = (0, w.forwardRef)(function (e, t) {
              var n = e.onSwitchInput,
                a = e.onBlur,
                r = e.onInput,
                i = e.onFocus,
                o = e.onInputNoDebounce,
                c = (0, w.useState)(),
                s = (0, Z.Z)(c, 2),
                u = s[0],
                l = s[1],
                h = (0, w.useState)(),
                d = (0, Z.Z)(h, 2),
                p = d[0],
                m = d[1],
                y = (0, w.createRef)(),
                g = (0, w.createRef)(),
                I = (0, w.useRef)(),
                T = (0, w.useRef)(),
                V = function () {
                  var e;
                  return (
                    (e = {}),
                    (0, f.Z)(e, x, I.current),
                    (0, f.Z)(e, b, T.current),
                    e
                  );
                },
                B = function () {
                  var e;
                  return (
                    (e = {}),
                    (0, f.Z)(e, x, y.current.value),
                    (0, f.Z)(e, b, g.current.value),
                    e
                  );
                },
                _ = function (e) {
                  var t =
                    !(arguments.length > 1 && void 0 !== arguments[1]) ||
                    arguments[1];
                  l(e), null == i || i(e);
                  var n = e === x ? y.current.value : g.current.value;
                  m(n.length), t && o({ target: { value: n } });
                };
              return (
                (0, w.useImperativeHandle)(t, function () {
                  return {
                    getValues: V,
                    getInputsValue: B,
                    setValue: function (e) {
                      var t = e.type,
                        n = e.value;
                      "object" === (0, N.Z)(n) &&
                        (t === x
                          ? ((y.current.value = null == n ? void 0 : n.name),
                            (I.current = n))
                          : ((g.current.value = null == n ? void 0 : n.name),
                            (T.current = n)));
                    },
                    validateValue: function () {
                      var e,
                        t,
                        n = y.current.value,
                        a = g.current.value;
                      return null != I &&
                        I.current &&
                        (null === (e = I.current) || void 0 === e
                          ? void 0
                          : e.name) === n
                        ? !(
                            null == T ||
                            !T.current ||
                            (null === (t = T.current) || void 0 === t
                              ? void 0
                              : t.name) !== a
                          ) || ((0, S.showToast)("请输入正确的到达站"), !1)
                        : ((0, S.showToast)("请输入正确的出发站"), !1);
                    },
                    focus: function (e) {
                      var t;
                      if (e === x)
                        y.current.focus(),
                          m(
                            null === (t = y.current.value) || void 0 === t
                              ? void 0
                              : t.length
                          );
                      else if (e === b) {
                        var n;
                        g.current.focus(),
                          m(
                            null === (n = g.current.value) || void 0 === n
                              ? void 0
                              : n.length
                          );
                      }
                    },
                    active: function (e) {
                      l(e);
                    },
                  };
                }),
                (0, w.useEffect)(
                  function () {
                    n(u);
                  },
                  [u]
                ),
                (0, k.BX)(v.View, {
                  className: "flex flex-center trn-city-input-content",
                  children: [
                    (0, k.tZ)(v.Block, {
                      children: (0, k.tZ)(C, {
                        placeholder: "请输入出发地",
                        className: "city-input "
                          .concat(u !== x && u ? "blur-input" : "flex-1", " ")
                          .concat(u === x ? "focus-one" : ""),
                        onFocus: function () {
                          _(x);
                        },
                        onBlur: function () {
                          return a(x);
                        },
                        ref: y,
                        onInput: r,
                        cursor: p,
                      }),
                    }),
                    (0, k.tZ)(v.Block, {
                      children: (0, k.tZ)(C, {
                        placeholder: "请输入目的地",
                        className: "city-input "
                          .concat(u === b ? "flex-1" : "blur-input", "  ")
                          .concat(u === b ? "focus-one" : ""),
                        onFocus: function () {
                          _(b);
                        },
                        onBlur: function () {
                          return a(b);
                        },
                        onInput: r,
                        ref: g,
                        cursor: p,
                      }),
                    }),
                  ],
                })
              );
            }),
            B = n(94190),
            _ = function (e) {
              var t = e.data,
                n = void 0 === t ? [] : t,
                a = e.onChoose,
                r = void 0 === a ? function () {} : a;
              return (0, k.tZ)(v.View, {
                className: "trn-city-box",
                children: n.map(function (e) {
                  var t;
                  return (0, k.tZ)(v.View, {
                    className: "city-item ".concat(e._className),
                    onClick: function () {
                      r(e);
                    },
                    children:
                      "function" == typeof e._showName
                        ? null === (t = e._showName) || void 0 === t
                          ? void 0
                          : t.call(e)
                        : e._showName,
                  });
                }),
              });
            },
            L = [
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
            ],
            X = function (e) {
              var t = e.onSelectStation,
                n = void 0 === t ? function () {} : t,
                a = (function (e) {
                  return e.map(function (e) {
                    return {
                      _showName: e.name || e.showName,
                      _from: "hot",
                      _data: e,
                    };
                  });
                })(L);
              return (0, k.BX)(v.View, {
                style: { marginTop: "14px" },
                children: [
                  (0, k.tZ)(v.View, {
                    className: "flex tit-view",
                    children: (0, k.tZ)(v.View, {
                      className: "tit-desc flex-1",
                      children: "热门城市",
                    }),
                  }),
                  (0, k.tZ)(_, {
                    data: a,
                    onChoose: function (e) {
                      var t = e._data;
                      n(t);
                    },
                  }),
                ],
              });
            },
            F = n(22276),
            O = "history",
            R = "locate",
            P = function (e) {
              var t = e.areas,
                n = void 0 === t ? {} : t,
                a = (e.stations, e.onSelectStation),
                r = e.locationState,
                i = void 0 === r ? "0" : r,
                o = e.beginLocate,
                c = (0, w.useState)([]),
                s = (0, Z.Z)(c, 2),
                u = s[0],
                l = s[1];
              (0, w.useEffect)(function () {
                B.OX.getAsync().then(function (e) {
                  e && e.length && l(e);
                });
              }, []);
              var h = [
                {
                  _showName: function () {
                    return (0, k.BX)(k.HY, {
                      children: [
                        (0, k.tZ)(v.Text, {
                          className: "iconfont2 ifont2-dingwei_planar_12",
                        }),
                        (0, k.tZ)(v.Text, {
                          children:
                            "-1" == i
                              ? "定位失败"
                              : "1" == i
                              ? n.name
                              : "定位中",
                        }),
                      ],
                    });
                  },
                  _from: R,
                  _data: n,
                  _className: "flex flex-center bold-font ".concat(
                    "1" == i ? "active" : ""
                  ),
                },
              ]
                .concat(
                  (0, F.Z)(
                    (function (e) {
                      return e.map(function (e) {
                        return {
                          _showName: e.name || e.showName,
                          _from: O,
                          _data: e,
                        };
                      });
                    })(u)
                  )
                )
                .slice(0, 12);
              return (0, k.BX)(v.View, {
                children: [
                  (0, k.BX)(v.View, {
                    className: "flex tit-view",
                    children: [
                      (0, k.tZ)(v.View, {
                        className: "tit-desc flex-1",
                        children: "定位城市/历史",
                      }),
                      u.length > 0 &&
                        (0, k.tZ)(v.View, {
                          className: "tit-btn",
                          onClick: function () {
                            B.OX.setAsync([]), l([]);
                          },
                          children: "清空",
                        }),
                    ],
                  }),
                  (0, k.tZ)(_, {
                    data: h,
                    onChoose: function (e) {
                      var t = e._from,
                        n = e._data;
                      if (t === O || (t === R && "1" == i)) return a(n);
                      o();
                    },
                  }),
                ],
              });
            },
            $ = n(92954),
            D = n.n($),
            E = ["stations"];
          function H(e) {
            switch (e) {
              case "T":
                return "车站";
              default:
                return "城市";
            }
          }
          var A,
            K = function (e) {
              var t = e.areas,
                n = void 0 === t ? [] : t,
                a = e.onSelectStation,
                i = e.keyword,
                o = (function (e) {
                  if (!e) return [];
                  var t = 1;
                  return (
                    e.forEach(function (e) {
                      var n = [];
                      n =
                        e.stations && e.stations.length > 0
                          ? e.stations
                          : e.nearbyStations && e.nearbyStations.length > 0
                          ? e.nearbyStations
                          : [];
                      var a = "";
                      (e.clickIndex = t++),
                        n.forEach(function (e) {
                          (e.clickIndex = t++),
                            e.stationType !== a
                              ? ((e.isShowStationTag = !0), (a = e.stationType))
                              : (e.isShowStationTag = !1);
                        }),
                        (e.stations = n);
                    }),
                    e
                  );
                })(n);
              return (0, k.BX)(v.View, {
                className: "train_smart-search-result",
                children: [
                  o.length <= 0 &&
                    (0, k.tZ)(v.View, {
                      className: "empty-box",
                      children: "无搜索结果，请尝试修改后重试",
                    }),
                  o.length > 0 &&
                    o.map(function () {
                      var e =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : {},
                        t = e.stations,
                        n = void 0 === t ? [] : t,
                        o = (0, r.Z)(e, E),
                        c = o.showName.split(i);
                      return (0, k.BX)(
                        v.View,
                        {
                          className: "city-item",
                          children: [
                            (0, k.BX)(v.View, {
                              className: "row cityName",
                              onClick: function () {
                                return a(o);
                              },
                              children: [
                                (0, k.tZ)(v.View, {
                                  className: "city-tag",
                                  children: "城市",
                                }),
                                (0, k.BX)(v.View, {
                                  className: "city-txt",
                                  children: [
                                    c[0] &&
                                      (0, k.tZ)(v.Text, { children: c[0] }),
                                    c.length > 1 &&
                                      (0, k.tZ)(v.Text, {
                                        className: "color-primary",
                                        children: i,
                                      }),
                                    c[1] &&
                                      (0, k.tZ)(v.Text, { children: c[1] }),
                                  ],
                                }),
                                (0, k.tZ)(v.View, {
                                  className: "province",
                                  children: o.province,
                                }),
                              ],
                            }),
                            (0, k.tZ)(v.View, {
                              children: n.map(function (e, t) {
                                var n = e.showName.split(i);
                                return (0, k.BX)(
                                  v.View,
                                  {
                                    className: "row station-item",
                                    onClick: function () {
                                      return a(
                                        (0, I.Z)(
                                          (0, I.Z)({}, e),
                                          {},
                                          { _cityInfo: o }
                                        )
                                      );
                                    },
                                    children: [
                                      (0, k.tZ)(v.View, {
                                        className: "station-type",
                                        style: {
                                          visibility: t > 0 ? "hidden" : "",
                                        },
                                        children: H(e.stationType),
                                      }),
                                      (0, k.BX)(v.View, {
                                        className: "station-name",
                                        children: [
                                          n[0] &&
                                            (0, k.tZ)(v.Text, {
                                              children: n[0],
                                            }),
                                          n.length > 1 &&
                                            (0, k.tZ)(v.Text, {
                                              className: "color-primary",
                                              children: i,
                                            }),
                                          n[1] &&
                                            (0, k.tZ)(v.Text, {
                                              children: n[1],
                                            }),
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
                ],
              });
            },
            z = n(79792),
            J = ["stations"],
            M = "FROM_INPUT_BLUR_EVENT",
            W =
              (0, d.h)(!1, { usePageWrapper: !0 })(
                (A = (function (e) {
                  (0, l.Z)(n, e);
                  var t = (0, h.Z)(n);
                  function n(e) {
                    var a;
                    return (
                      (0, c.Z)(this, n),
                      (a = t.call(this, e)),
                      (0, f.Z)(
                        (0, u.Z)(a),
                        "saveHistory",
                        (function () {
                          var e = (0, o.Z)(
                            (0, i.Z)().mark(function e(t) {
                              var n, a, r;
                              return (0, i.Z)().wrap(function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (e.next = 2), B.OX.getAsync();
                                    case 2:
                                      if (((e.t0 = e.sent), e.t0)) {
                                        e.next = 5;
                                        break;
                                      }
                                      e.t0 = [];
                                    case 5:
                                      (n = e.t0),
                                        (a = n.find(function (e) {
                                          return e.name == t.name;
                                        })),
                                        (r = n.indexOf(a)) > -1 &&
                                          n.splice(r, 1),
                                        n.unshift(t),
                                        B.OX.setAsync(n);
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
                      (0, f.Z)((0, u.Z)(a), "openLocate", function () {
                        a.showCommonDialog({
                          title: "请求授权当前位置",
                          content: "需要获取您的地理位置，请确认授权",
                          success: function (e) {
                            e.confirm &&
                              D().openSetting({
                                success: function (e) {
                                  e.authSetting["scope.userLocation"]
                                    ? a.beginLocate()
                                    : D().showToast({
                                        title: "授权失败",
                                        icon: "none",
                                        duration: 1e3,
                                      });
                                },
                              });
                          },
                        });
                      }),
                      (0, f.Z)((0, u.Z)(a), "onInput", function (e) {
                        var t = e.target.value;
                        a.searchInput(t);
                      }),
                      (a.disableBgStyle = !0),
                      (a.pageRootClassName = "trn-city"),
                      (a.pageContentIsFullScreen = !0),
                      (a.pageId = z.default.isTieyou
                        ? "10650082698"
                        : "10650082696"),
                      (a.state = {
                        locationState: "0",
                        nearbyLocation: {},
                        currentInputType: "",
                        inputKeyword: "",
                        areas: [],
                        pageTitle: "请选择出发地",
                      }),
                      a
                    );
                  }
                  return (
                    (0, s.Z)(n, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          this.beginLocate();
                          var e = D().getCurrentInstance().router.params,
                            t = e.arriveInfo,
                            n = e.departInfo,
                            a = e.type;
                          this.$CityInput.active(a),
                            a !== x &&
                              n &&
                              this.$CityInput.setValue({ type: x, value: n }),
                            a !== b &&
                              n &&
                              this.$CityInput.setValue({ type: b, value: t });
                        },
                      },
                      {
                        key: "setPageTitle",
                        value: function (e) {
                          this.setState({ pageTitle: e });
                        },
                      },
                      {
                        key: "renderTitleView",
                        value: function () {
                          var e = this,
                            t = this.state.pageTitle;
                          return (0, k.BX)(v.View, {
                            className: "title",
                            children: [
                              t,
                              (0, k.tZ)(V, {
                                ref: function (t) {
                                  return (e.$CityInput = t);
                                },
                                onSwitchInput: this.onSwitchInput.bind(this),
                                onInput: y.Z.debounce(this.onInput.bind(this)),
                                onInputNoDebounce: this.onInput.bind(this),
                                onFocus: this.onCityInputFocus.bind(this),
                                onBlur: this.onCityInputBlur.bind(this),
                              }),
                            ],
                          });
                        },
                      },
                      {
                        key: "onSwitchInput",
                        value: function (e) {
                          this.setPageTitle(
                            e === x ? "请选择出发地" : "请选择目的地"
                          ),
                            this.setState({ currentInputType: e });
                        },
                      },
                      {
                        key: "beginLocate",
                        value: function () {
                          var e = this;
                          (0, m.y9)()
                            .then(
                              function (t) {
                                console.log("ztripGetLocation res ", t),
                                  null != t && t.longitude
                                    ? e.getNearbyLoaction(t)
                                    : e.setState({ locationState: "-1" });
                              },
                              function (t) {
                                console.log("ztripGetLocation error ", t),
                                  e.setState({ locationState: -1 });
                              }
                            )
                            .catch(function () {});
                        },
                      },
                      {
                        key: "getNearbyLoaction",
                        value: (function () {
                          var e = (0, o.Z)(
                            (0, i.Z)().mark(function e(t) {
                              var n, a, r, o, c;
                              return (0, i.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (t) {
                                          e.next = 2;
                                          break;
                                        }
                                        return e.abrupt("return");
                                      case 2:
                                        return (
                                          (e.next = 4),
                                          (0, p.J4)({
                                            lng: t.longitude,
                                            lat: t.latitude,
                                          })
                                        );
                                      case 4:
                                        1 === (n = e.sent).resultCode
                                          ? ((a = n.areas),
                                            (o = (r = void 0 === a ? {} : a)
                                              .name),
                                            (c = void 0 === o ? "" : o),
                                            (r.showName = c),
                                            this.setState({
                                              nearbyLocation: n,
                                              locationState: "1",
                                            }))
                                          : this.setState({
                                              nearbyLocation: {
                                                cityName: "定位失败",
                                              },
                                              locationState: "-1",
                                            });
                                      case 6:
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
                        key: "fromCityInputIsBlur",
                        value: function () {
                          return new Promise(function (e) {
                            $.eventCenter.once(M, function () {
                              e();
                            }),
                              setTimeout(function () {
                                e();
                              }, 2e3);
                          });
                        },
                      },
                      {
                        key: "onCityInputBlur",
                        value: function (e) {
                          x == e && $.eventCenter.trigger(M);
                        },
                      },
                      {
                        key: "onSelectStation",
                        value: (function () {
                          var e = (0, o.Z)(
                            (0, i.Z)().mark(function e(t) {
                              var n, a, r, o, c, s;
                              return (0, i.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (
                                          (this.saveHistory(t),
                                          this.state.currentInputType !== x ||
                                            !z.default.isWechat ||
                                            !this.state.showResult)
                                        ) {
                                          e.next = 4;
                                          break;
                                        }
                                        return (
                                          (e.next = 4),
                                          this.fromCityInputIsBlur()
                                        );
                                      case 4:
                                        if (
                                          (null === (n = this.$CityInput) ||
                                            void 0 === n ||
                                            null === (a = n.setValue) ||
                                            void 0 === a ||
                                            a.call(n, {
                                              type: this.state.currentInputType,
                                              value: t,
                                            }),
                                          (o =
                                            (null === (r = this.$CityInput) ||
                                            void 0 === r
                                              ? void 0
                                              : r.getValues()) || {}),
                                          (c = o[x]),
                                          (s = o[b]),
                                          this.state.currentInputType !== x)
                                        ) {
                                          e.next = 9;
                                          break;
                                        }
                                        return (
                                          this.$CityInput.focus(b),
                                          e.abrupt("return")
                                        );
                                      case 9:
                                        this.setState({ inputKeyword: "" }),
                                          this.state.currentInputType === b &&
                                            this.$CityInput.validateValue() &&
                                            this.navigateBack({
                                              departInfo: c,
                                              arriveInfo: s,
                                            });
                                      case 11:
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
                        key: "searchInput",
                        value: (function () {
                          var e = (0, o.Z)(
                            (0, i.Z)().mark(function e() {
                              var t,
                                n,
                                a,
                                r = arguments;
                              return (0, i.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (
                                          (t =
                                            r.length > 0 && void 0 !== r[0]
                                              ? r[0]
                                              : "").trim() !==
                                          this.state.inputKeyword
                                        ) {
                                          e.next = 3;
                                          break;
                                        }
                                        return e.abrupt("return");
                                      case 3:
                                        if ("" !== t && "" !== t.trim()) {
                                          e.next = 6;
                                          break;
                                        }
                                        return (
                                          this.setState({
                                            inputKeyword: t.trim(),
                                          }),
                                          e.abrupt("return")
                                        );
                                      case 6:
                                        return (
                                          (n = []),
                                          (e.next = 9),
                                          y.Z.checkSecretToken()
                                        );
                                      case 9:
                                        return (
                                          (e.next = 11),
                                          (0, p.zP)({
                                            keyword: t,
                                            requestSource: "train",
                                          })
                                        );
                                      case 11:
                                        if (
                                          ((a = e.sent),
                                          this.setState({
                                            inputKeyword: t.trim(),
                                          }),
                                          1 !== a.resultCode)
                                        ) {
                                          e.next = 17;
                                          break;
                                        }
                                        (n = a.areas), (e.next = 20);
                                        break;
                                      case 17:
                                        return (
                                          (e.next = 19), this.reedemFromLocal(t)
                                        );
                                      case 19:
                                        n = e.sent;
                                      case 20:
                                        this.setState({ areas: n });
                                      case 21:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "reedemFromLocal",
                        value: (function () {
                          var e = (0, o.Z)(
                            (0, i.Z)().mark(function e(t) {
                              var n, a, r, o, c;
                              return (0, i.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (n = [
                                            "香港",
                                            "香港西九龙",
                                            "香港红磡",
                                          ]),
                                          (a = t.toLowerCase()),
                                          (e.next = 4),
                                          g.ZP.getTrainStationData()
                                        );
                                      case 4:
                                        return (
                                          (this.allData = e.sent),
                                          (r = this.allData.filter(function (
                                            e
                                          ) {
                                            return (
                                              e.stationName.indexOf(a) > -1 ||
                                              e.py.indexOf(a) > -1 ||
                                              e.pyHead.indexOf(a) > -1
                                            );
                                          })).forEach(function (e) {
                                            n.findIndex(function (t) {
                                              return t === e.stationName;
                                            }) > -1 &&
                                              (e.stationName = "中国".concat(
                                                e.stationName
                                              ));
                                          }),
                                          r.sort(function (e, t) {
                                            return e.cityID - t.cityID;
                                          }),
                                          (o = []),
                                          (c = []),
                                          r.length > 1
                                            ? r.forEach(function (e, t) {
                                                if (
                                                  e.stationName === e.cityName
                                                )
                                                  c = [
                                                    {
                                                      name: e.cityName,
                                                      showName: e.cityName,
                                                      stations: o,
                                                    },
                                                  ];
                                                else {
                                                  var n = {
                                                    code: e.stationCode,
                                                    name: e.stationName,
                                                    showName: e.stationName,
                                                    stationType: "T",
                                                  };
                                                  o.push(n);
                                                }
                                              })
                                            : 1 === r.length &&
                                              (c = [
                                                {
                                                  name: r[0].cityName,
                                                  showName: r[0].cityName,
                                                  stations: [
                                                    {
                                                      code: r[0].stationCode,
                                                      name: r[0].stationName,
                                                      showName:
                                                        r[0].stationName,
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
                        key: "onCityInputFocus",
                        value: function (e) {
                          if (e === b) {
                            var t,
                              n,
                              a,
                              i = ((null === (t = this.$CityInput) ||
                              void 0 === t
                                ? void 0
                                : t.getValues()) || {})[x],
                              o = this.$CityInput.getInputsValue()[x],
                              c = this.state.areas.find(function (e) {
                                return e.name === o;
                              });
                            if (!c || (null == i ? void 0 : i.name) == o)
                              return;
                            c.stations;
                            var s = (0, r.Z)(c, J);
                            null === (n = this.$CityInput) ||
                              void 0 === n ||
                              null === (a = n.setValue) ||
                              void 0 === a ||
                              a.call(n, { type: x, value: s });
                          }
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this.state,
                            t = e.nearbyLocation,
                            n = e.locationState,
                            a = (e.currentInputType, e.inputKeyword),
                            r = e.areas,
                            i = a && a.length;
                          return (0, k.tZ)(v.View, {
                            className: "box",
                            children: (0, k.tZ)(v.CustomWrapper, {
                              children: (0, k.tZ)(v.View, {
                                className: "result-view ",
                                children: i
                                  ? (0, k.tZ)(K, {
                                      onSelectStation:
                                        this.onSelectStation.bind(this),
                                      areas: r,
                                      keyword: a,
                                    })
                                  : (0, k.BX)(k.HY, {
                                      children: [
                                        (0, k.tZ)(P, {
                                          areas: t.areas,
                                          stations: t.stations,
                                          onSelectStation:
                                            this.onSelectStation.bind(this),
                                          locationState: n,
                                          beginLocate: this.openLocate,
                                        }),
                                        (0, k.tZ)(X, {
                                          onSelectStation:
                                            this.onSelectStation.bind(this),
                                        }),
                                      ],
                                    }),
                              }),
                            }),
                          });
                        },
                      },
                    ]),
                    n
                  );
                })(w.default.Component))
              ) || A;
          Page(
            (0, a.createPageConfig)(
              W,
              "functionalPages/trainCitySelector/trainCitySelector",
              { root: { cn: [] } },
              {
                navigationBarTitleText: "请选择城市",
                navigationBarBackgroundColor: "#fff",
                navigationBarTextStyle: "black",
                navigationStyle: "custom",
                backgroundColorBottom: "#efefef",
                disableScroll: !0,
              } || {}
            )
          );
        },
      },
      function (e) {
        e.O(0, [19559, 11216, 68592], function () {
          return (function (t) {
            return e((e.s = t));
          })(63234);
        }),
          e.O();
      },
    ]);
})();
