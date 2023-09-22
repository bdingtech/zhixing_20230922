!(function () {
  "use strict";
  require("../../../sub-vendors.js"),
    require("../../../sub-common/efd0f73c48edfb2f4cf806204cb23544.js"),
    require("../../../sub-common/e006cce71bea1c38395fdd39436a77c2.js"),
    require("../../../sub-common/d89ce578031072031f3fc29a11a827dc.js"),
    require("../../../sub-common/85ff8bfdb9e5cfb18ee76e4e8cb46fa1.js"),
    require("../../../sub-common/c4422581445eda73db4c516eb8354cb7.js"),
    require("../../../sub-common/eb635746e4cf69f6f56cdca895562f47.js"),
    require("../../../sub-common/087ed44e3e56dbc6f151a4673bb163ed.js"),
    require("../../../sub-common/fb7248052b528df6da065d22b415ea8c.js"),
    require("../../../sub-common/1affc4a679af4ad334128041573c09c6.js"),
    require("../../../sub-common/594fd9d30aff81fe3da13eaa846a8a8d.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [86777],
      {
        3354: function (e, t, i) {
          var n = i(32180),
            o = i(298),
            r = i(57042),
            l = i(24460),
            a = i(81876),
            c = i(21867),
            s = i(86066),
            d = i(45023),
            g = i(52500),
            u = i(92954),
            h = i.n(u),
            f = i(71515),
            p = i(8271),
            m = i.n(p),
            y = i(8079),
            C = i(23577),
            Z = i(88184),
            x = i(53550),
            b = i(48813),
            w = function () {
              return (0, b.tZ)(Z.Z, {
                zIndex: 0,
                needHolder: !0,
                title: "智行机票",
                pop: function () {
                  (0, u.navigateBack)({ delta: 1 });
                },
                defaultBackButtonColor: "#222222",
                rightViewWidth: 85,
                renderLeftView: function () {
                  return (0, b.tZ)(f.View, {
                    id: "AMAu",
                    onClick: function () {
                      (0, u.navigateBack)({ delta: 1 });
                    },
                    children: (0, b.tZ)(x.Z, {
                      style: { fontSize: 24, color: "#222", marginLeft: 15 },
                      children: "󰲚",
                    }),
                  });
                },
                renderCenterView: function () {
                  return (0, b.tZ)(f.View, {
                    style: {
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "row",
                    },
                    children: (0, b.tZ)(f.Image, {
                      src: C.Z.isTieyou
                        ? "https://images3.c-ctrip.com/ztrip/zhixingios/huanjiading/ty_toubu.png"
                        : "https://images3.c-ctrip.com/ztrip/zhixingios/huanjiading/zxjipiao@3x.png",
                      style: {
                        width: 134,
                        height: 17,
                        justifyContent: "center",
                      },
                    }),
                  });
                },
                backgroundColor: "transparent",
              });
            },
            T = i(32970),
            S = i(90729),
            I = g.default.memo(function (e) {
              var t = e.children,
                i = e.style;
              return (0, b.tZ)(f.View, { style: (0, o.Z)({}, i), children: t });
            }),
            v = i(49528),
            D = i(22276),
            P = function (e, t, i, n, o) {
              var r,
                l,
                a = { tickets: [], favors: [] };
              return (
                a.tickets.push({
                  name: "成人",
                  price: e + i + n,
                  count:
                    null !== (r = null == t ? void 0 : t.length) && void 0 !== r
                      ? r
                      : 0,
                  unit: "人",
                  detail: [
                    { name: "机票", price: e },
                    { name: "机建", price: null != n ? n : 0 },
                    { name: "燃油", price: null != i ? i : 0 },
                  ],
                }),
                S.Z.isEmptyArray(o) ||
                  (l = a.favors).push.apply(
                    l,
                    (0, D.Z)(
                      o.map(function (e) {
                        return {
                          name: e.discountDetailText,
                          price: e.discountAmount,
                          count: 1,
                          unit: "份",
                        };
                      })
                    )
                  ),
                a
              );
            },
            F = function (e, t, i, n, o, r) {
              var l,
                a = 0;
              if (r) return a;
              var c =
                null !==
                  (l =
                    null == o
                      ? void 0
                      : o.reduce(function (e, t) {
                          return e + t.discountAmount;
                        }, 0)) && void 0 !== l
                  ? l
                  : 0;
              (console.log(o), S.Z.isEmptyArray(t)) ||
                (a = (e + i + n) * t.length - c);
              return a;
            },
            B = function (e) {
              var t = 0;
              return (
                S.Z.isEmptyArray(e) ||
                  e.map(function (e, i) {
                    var n;
                    t +=
                      (null == e ||
                      null === (n = e.flightNumbers) ||
                      void 0 === n
                        ? void 0
                        : n.length) || 0;
                  }),
                console.log(t),
                t
              );
            },
            z = g.default.memo(function (e) {
              var t = e.departCity,
                i = e.arriveCity,
                n = e.onSelectCity,
                r = e.selectDates,
                l = e.selectFlights,
                a = e.onSelectDate,
                c = e.onSelectFlight,
                s = e.lowestPriceFlightInfo,
                d = e.isEmptyOrError,
                g = function (e) {
                  var r = {
                    isOnlyChinaCountry: !1,
                    isChooseFromStation: e,
                    isChooseSingleStation: !1,
                    needFuzzyStationType: !1,
                    departCity: (0, o.Z)(
                      (0, o.Z)({}, t),
                      {},
                      { cityName: t.name, cityCode: t.code }
                    ),
                    arriveCity: (0, o.Z)(
                      (0, o.Z)({}, i),
                      {},
                      { cityName: i.name, cityCode: i.code }
                    ),
                  };
                  (0, T.a)(r, function (e, t) {
                    if (e) console.log("err ---\x3e", e);
                    else if (
                      t &&
                      !S.Z.isEmptyObject(t.departCity) &&
                      !S.Z.isEmptyObject(t.arriveCity)
                    ) {
                      var i = {
                          name: t.departCity.name,
                          code: t.departCity.code,
                          locationType: t.departCity.locationType,
                          globalCity: t.departCity.international,
                        },
                        o = {
                          name: t.arriveCity.name,
                          code: t.arriveCity.code,
                          locationType: t.arriveCity.locationType,
                          globalCity: t.arriveCity.international,
                        };
                      n && n(i, o);
                    }
                  });
                };
              return (0, b.BX)(f.View, {
                style: R.topContainer,
                children: [
                  (0, b.BX)(f.View, {
                    style: R.selectCity,
                    children: [
                      (0, b.tZ)(f.Text, {
                        style: R.cityText,
                        id: "AMAy",
                        onClick: function () {
                          return g(!0);
                        },
                        children: t.name,
                      }),
                      (0, b.tZ)(f.Image, {
                        src: "https://images3.c-ctrip.com/ztrip/rn_flight_support/icon_city_change.png",
                        style: R.exchangeIcon,
                        id: "AMAz",
                        onClick: function () {
                          n && n(i, t);
                        },
                      }),
                      (0, b.tZ)(f.Text, {
                        style: R.cityText,
                        id: "AMBA",
                        onClick: function () {
                          return g(!1);
                        },
                        children: i.name,
                      }),
                    ],
                  }),
                  (0, b.BX)(f.View, {
                    style: R.topLineContainer,
                    children: [
                      (0, b.tZ)(f.View, { style: R.leftHLine }),
                      (0, b.tZ)(f.View, { style: { width: 60 } }),
                      (0, b.tZ)(f.View, { style: R.leftHLine }),
                    ],
                  }),
                  (0, b.BX)(f.View, {
                    style: R.selectDate,
                    id: "AMBB",
                    onClick: function () {
                      (0, T.ym)({ defaultDate: r, maxDays: 3 }, function (e) {
                        if (null != e && e.selectDates) {
                          var t = e.selectDates.map(function (e) {
                            var t;
                            return null !==
                              (t = null == e ? void 0 : e.dateString) &&
                              void 0 !== t
                              ? t
                              : e;
                          });
                          a && a(t);
                        }
                      });
                    },
                    children: [
                      (0, b.BX)(f.View, {
                        style: {
                          flexDirection: "row",
                          alignItems: "center",
                          display: "flex",
                          flex: 1,
                        },
                        children: [
                          (0, b.tZ)(f.Text, {
                            style: R.pickDesc,
                            children: "出发日期",
                          }),
                          (0, b.tZ)(f.Text, {
                            style: (0, o.Z)(
                              (0, o.Z)({}, R.pickContent),
                              {},
                              { flex: 1 }
                            ),
                            numberOfLines: 1,
                            children:
                              (console.log(r),
                              r
                                .map(function (e) {
                                  return m()(e).format("M月D日");
                                })
                                .join("、")),
                          }),
                        ],
                      }),
                      (0, b.BX)(f.View, {
                        style: {
                          flexDirection: "row",
                          alignItems: "center",
                          display: "flex",
                        },
                        children: [
                          (0, b.tZ)(f.Text, {
                            style: R.pickText,
                            children: "多选",
                          }),
                          (0, b.tZ)(x.Z, {
                            style: R.rightArrow,
                            children: "󰲧",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, b.tZ)(f.View, { style: R.hLine }),
                  d
                    ? (0, b.tZ)(f.View, {
                        style: R.emptyFlight,
                        children: (0, b.BX)(f.View, {
                          style: {
                            flexDirection: "row",
                            alignItems: "center",
                            display: "flex",
                          },
                          children: [
                            (0, b.tZ)(f.Text, {
                              style: R.pickDesc,
                              children: "航班偏好",
                            }),
                            (0, b.tZ)(f.Text, {
                              style: R.pickContent,
                              children: "暂无可还价航班",
                            }),
                          ],
                        }),
                      })
                    : (0, b.BX)(f.View, {
                        style: R.flight,
                        id: "AMBC",
                        onClick: c,
                        children: [
                          (0, b.BX)(f.View, {
                            style: {
                              flexDirection: "row",
                              alignItems: "center",
                              display: "flex",
                            },
                            children: [
                              (0, b.tZ)(f.Text, {
                                style: R.pickDesc,
                                children: "航班偏好",
                              }),
                              (0, b.tZ)(f.Text, {
                                style: R.pickContent,
                                children: S.Z.isEmptyArray(l)
                                  ? "不限"
                                  : "已为你选择".concat(B(l), "个航班"),
                              }),
                            ],
                          }),
                          (0, b.BX)(f.View, {
                            style: {
                              flexDirection: "row",
                              alignItems: "center",
                              display: "flex",
                            },
                            children: [
                              (0, b.tZ)(f.Text, {
                                style: R.pickText,
                                children: "更改",
                              }),
                              (0, b.tZ)(x.Z, {
                                style: R.rightArrow,
                                children: "󰲧",
                              }),
                            ],
                          }),
                        ],
                      }),
                  !!s &&
                    !d &&
                    (0, b.tZ)(f.View, {
                      id: "AMBD",
                      onClick: function () {
                        var e = {
                          departCityName: t.name,
                          departCityCode: t.code,
                          arriveCityName: i.name,
                          arriveCityCode: i.code,
                          departDate: s.lowestPriceDate,
                          fromPage: "surpriseGrabInput",
                        };
                        (0, T.qf)(e);
                      },
                      children: (0, b.BX)(I, {
                        style: R.linearContainer,
                        children: [
                          (0, b.tZ)(f.Text, {
                            style: { fontSize: 12, color: "#3C5A86" },
                            children: "当前最低价航班："
                              .concat(
                                m()(s.lowestPriceDate).format("MM月DD日"),
                                " "
                              )
                              .concat(s.lowestAirName)
                              .concat(s.lowestPriceFlightNumber, " ¥")
                              .concat(s.lowestPrice, "*"),
                          }),
                          (0, b.tZ)(x.Z, {
                            style: R.rightArrow,
                            children: "󰲧",
                          }),
                        ],
                      }),
                    }),
                ],
              });
            }),
            R = (0, v.lW)({
              topContainer: {
                backgroundColor: "#fff",
                borderRadius: 12,
                marginLeft: 8,
                marginRight: 8,
                paddingBottom: 8,
              },
              selectCity: {
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingTop: 16,
                paddingLeft: 16,
                paddingRight: 16,
                display: "flex",
              },
              cityText: { fontSize: 22, color: "#222", fontWeight: "600" },
              exchangeIcon: { width: 34, height: 34 },
              selectDate: {
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginLeft: 16,
                marginRight: 16,
                display: "flex",
              },
              pickDesc: { fontSize: 16, color: "#999", minWidth: 92 },
              pickContent: { fontSize: 16, color: "#222", fontWeight: "500" },
              pickText: { fontSize: 16, color: "#ccc", marginLeft: 5 },
              flight: {
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginLeft: 16,
                marginRight: 16,
                display: "flex",
              },
              emptyFlight: {
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginLeft: 16,
                marginRight: 16,
                display: "flex",
                marginBottom: 10,
              },
              linearContainer: {
                background:
                  "linear-gradient(-90deg, rgb(247, 251, 254) 0%, rgb(242, 248, 255) 100%)",
                borderRadius: 12,
                height: 36,
                marginTop: 16,
                marginLeft: 10,
                marginRight: 10,
                paddingLeft: 10,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              },
              rightArrow: { fontSize: 12, color: "#ccc" },
              topLineContainer: {
                flexDirection: "row",
                alignItems: "center",
                display: "flex",
                marginLeft: 16,
                marginRight: 16,
              },
              leftHLine: {
                height: 0.5,
                backgroundColor: "#f5f5f5",
                marginTop: 9,
                marginBottom: 14,
                flex: 1,
              },
              hLine: {
                height: 0.5,
                backgroundColor: "#f5f5f5",
                marginTop: 15,
                marginBottom: 15,
                marginLeft: 16,
                marginRight: 16,
              },
            }),
            k = g.default.memo(function (e) {
              var t = e.children,
                i = (e.colors, e.style);
              return (0, b.tZ)(f.View, { style: (0, o.Z)({}, i), children: t });
            }),
            V = [
              {
                bgColors: ["#FF5959", "#FFDCDC"],
                fillColor: "#FFF6F6",
                borderColor: "#FF5959",
                bottomTipsImg:
                  "https://images3.c-ctrip.com/ztrip/zhixingios/huanjiading/tc_jiao03.png",
                bottomTipsText: "成功率低",
              },
              {
                bgColors: ["#FF871E", "#FFE4D8"],
                fillColor: "#FFFAF5",
                borderColor: "#FD9227",
                bottomTipsImg:
                  "https://images3.c-ctrip.com/ztrip/zhixingios/huanjiading/tc_jiao02.png",
                bottomTipsText: "成功率中",
              },
              {
                bgColors: ["#00C777", "#CEFFEB"],
                fillColor: "#F6FFFC",
                borderColor: "#00C777",
                bottomTipsImg:
                  "https://images3.c-ctrip.com/ztrip/zhixingios/huanjiading/tc_jiao01.png",
                bottomTipsText: "成功率高",
              },
            ],
            N = h().getSystemInfoSync(),
            L = "ios" == C.Z.os,
            A = g.default.memo(function (e) {
              var t = e.lowestPrice,
                i = e.priceRange,
                n = e.onSelectedPrice,
                r = e.selectPriceStatus;
              return (0, b.BX)(k, {
                colors: V[r].bgColors,
                style: M.linearContainer,
                children: [
                  (0, b.tZ)(f.Image, {
                    style: M.tagIcon,
                    src: "https://images3.c-ctrip.com/ztrip/zhixingios/huanjiading/jiage_peitu.png",
                  }),
                  (0, b.BX)(f.View, {
                    style: M.topContainer,
                    children: [
                      (0, b.tZ)(f.Text, {
                        style: {
                          fontSize: 16,
                          color: "white",
                          fontWeight: "600",
                        },
                        children: "选择帮还价价格",
                      }),
                      (0, b.tZ)(f.Text, {
                        style: { fontSize: 12, color: "white" },
                        children: "选择价格越高成功率越高",
                      }),
                    ],
                  }),
                  (0, b.tZ)(f.View, {
                    style: M.contentContainer,
                    children: i.map(function (e, i) {
                      var l = r === i;
                      return (0, b.BX)(
                        f.View,
                        {
                          id: "AMAx",
                          onClick: function () {
                            return n(i);
                          },
                          style: (0, o.Z)((0, o.Z)({}, M.itemContainer), {
                            borderColor: l ? V[r].borderColor : "transparent",
                            backgroundColor: l ? V[r].fillColor : "#f7f7f7",
                          }),
                          children: [
                            (0, b.tZ)(f.Text, {
                              style: {
                                fontSize: 11,
                                color: l ? V[r].borderColor : "#999",
                                opacity: l ? 0.9 : 1,
                              },
                              children: "帮还价至",
                            }),
                            e > 0
                              ? (0, b.BX)(f.Text, {
                                  style: (0, o.Z)(
                                    (0, o.Z)({}, M.priceText),
                                    {},
                                    { color: l ? V[r].borderColor : "#222" }
                                  ),
                                  children: [
                                    (0, b.tZ)(f.Text, {
                                      style: M.cnyText,
                                      children: "¥",
                                    }),
                                    e,
                                    (0, b.tZ)(f.Text, {
                                      style: { fontSize: 10 },
                                      children: 0 == i ? "以下" : "",
                                    }),
                                  ],
                                })
                              : (0, b.tZ)(f.Text, {
                                  style: (0, o.Z)(
                                    (0, o.Z)({}, M.priceText),
                                    {},
                                    { color: l ? V[r].borderColor : "#222" }
                                  ),
                                  children: "--",
                                }),
                            (0, b.tZ)(f.Text, {
                              style: {
                                fontSize: 11,
                                color: l ? V[r].borderColor : "#999",
                              },
                              children: "比最低价省¥".concat(t - e),
                            }),
                            l
                              ? (0, b.tZ)(x.Z, {
                                  style: (0, o.Z)(
                                    (0, o.Z)({}, M.circleIcon),
                                    {},
                                    { color: V[r].borderColor }
                                  ),
                                  children: "󰲡",
                                })
                              : (0, b.tZ)(x.Z, {
                                  style: M.circleIcon,
                                  children: "󰲠",
                                }),
                            l &&
                              (0, b.BX)(f.View, {
                                style: M.bottomTips,
                                children: [
                                  (0, b.tZ)(f.Image, {
                                    src: V[r].bottomTipsImg,
                                    style: { width: 12, height: 4 },
                                  }),
                                  (0, b.tZ)(f.View, {
                                    style: (0, o.Z)(
                                      (0, o.Z)({}, M.bottomTextContainer),
                                      {},
                                      { backgroundColor: V[r].borderColor }
                                    ),
                                    children: (0, b.tZ)(f.Text, {
                                      style: M.bottomText,
                                      children: V[r].bottomTipsText,
                                    }),
                                  }),
                                ],
                              }),
                          ],
                        },
                        e + i
                      );
                    }),
                  }),
                ],
              });
            }),
            M = (0, v.lW)({
              linearContainer: {
                marginTop: 8,
                marginLeft: 8,
                marginRight: 8,
                borderRadius: 12,
                background:
                  "linear-gradient(0deg, rgb(206, 255, 235) 0%, rgb(0, 199, 119) 100%)",
                position: "relative",
              },
              tagIcon: {
                width: 43,
                height: 49,
                position: "absolute",
                top: 0,
                right: 0,
              },
              topContainer: {
                height: 48,
                marginLeft: 16,
                marginRight: 16,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              },
              contentContainer: {
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                paddingLeft: 12,
                paddingRight: 12,
                paddingTop: 15,
                paddingBottom: 15,
                backgroundColor: "#fff",
                borderRadius: 10,
                marginLeft: 4,
                marginRight: 4,
                marginBottom: 4,
              },
              itemContainer: {
                width: (N.windowWidth - 48 - 16) / 3,
                backgroundColor: "#f7f7f7",
                borderRadius: 10,
                paddingTop: 12,
                paddingBottom: 16,
                alignItems: "center",
                borderColor: "transparent",
                borderWidth: 1,
                display: "flex",
                flexDirection: "column",
                borderStyle: "solid",
                position: "relative",
              },
              priceText: {
                fontSize: 24,
                fontFamily: (0, v.QQ)(),
                lineHeight: 29,
                marginBottom: 2,
              },
              cnyText: {
                fontSize: 12,
                fontFamily: C.Z.isCRN && !L ? "zx_regular" : "ZX-Regular",
              },
              circleIcon: { fontSize: 20, color: "#ccc", marginTop: 10 },
              bottomTips: {
                position: "absolute",
                bottom: -10,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              },
              bottomTextContainer: {
                height: 20,
                display: "flex",
                flexDirection: "column",
                paddingLeft: 6,
                paddingRight: 6,
                justifyContent: "center",
                borderRadius: 6,
              },
              bottomText: { fontSize: 11, color: "#fff", fontWeight: "500" },
            }),
            X = i(90129),
            j = i(96677),
            _ = i(90582),
            E = [
              { code: "0", name: "身份证", hint: "", english_enable: !1 },
              { code: "1", name: "护照", hint: "", english_enable: !0 },
              { code: "2", name: "台胞证", hint: "", english_enable: !0 },
              { code: "3", name: "回乡证", hint: "", english_enable: !0 },
              {
                code: "4",
                name: "军人证",
                hint: "仅支持拼音/数字，如flight123",
                english_enable: !1,
              },
              {
                code: "6",
                name: "户口簿",
                hint: "请填写身份证号码",
                english_enable: !1,
              },
              {
                code: "7",
                name: "出生证明",
                hint: "可用出生日期代替",
                english_enable: !1,
              },
              {
                code: "8",
                name: "港澳台居民居住证",
                hint: "",
                english_enable: !0,
              },
            ];
          var W = function (e, t) {
              var i = "";
              return (
                !e.passportType ||
                  ("身份证" !== e.passportType &&
                    "户口簿" !== e.passportType) ||
                  ((function (e) {
                    if (!e) return !1;
                    var t;
                    if (
                      !{
                        11: "北京",
                        12: "天津",
                        13: "河北",
                        14: "山西",
                        15: "内蒙古",
                        21: "辽宁",
                        22: "吉林",
                        23: "黑龙江 ",
                        31: "上海",
                        32: "江苏",
                        33: "浙江",
                        34: "安徽",
                        35: "福建",
                        36: "江西",
                        37: "山东",
                        41: "河南",
                        42: "湖北 ",
                        43: "湖南",
                        44: "广东",
                        45: "广西",
                        46: "海南",
                        50: "重庆",
                        51: "四川",
                        52: "贵州",
                        53: "云南",
                        54: "西藏 ",
                        61: "陕西",
                        62: "甘肃",
                        63: "青海",
                        64: "宁夏",
                        65: "新疆",
                        71: "台湾",
                        81: "香港",
                        82: "澳门",
                        91: "国外 ",
                      }[(e = e.toUpperCase()).substr(0, 2)]
                    )
                      return !1;
                    if (!/(^\d{15}$)|(^\d{17}([0-9]|X)$)/.test(e)) return !1;
                    var i = e.length;
                    if (15 == i) {
                      t = /^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/;
                      var n = e.match(t),
                        o = new Date("19" + n[2] + "/" + n[3] + "/" + n[4]);
                      if (
                        o.getFullYear() == Number(n[2]) &&
                        o.getMonth() + 1 == Number(n[3]) &&
                        o.getDate() == Number(n[4])
                      ) {
                        var r,
                          l = [
                            7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2,
                          ],
                          a = 0;
                        for (
                          e = e.substr(0, 6) + "19" + e.substr(6, e.length - 6),
                            r = 0;
                          r < 17;
                          r++
                        )
                          a += e.substr(r, 1) * l[r];
                        return (
                          (e += [
                            "1",
                            "0",
                            "X",
                            "9",
                            "8",
                            "7",
                            "6",
                            "5",
                            "4",
                            "3",
                            "2",
                          ][a % 11]),
                          !0
                        );
                      }
                      return !1;
                    }
                    if (18 == i) {
                      t = /^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/;
                      var c = e.match(t),
                        s = new Date(c[2] + "/" + c[3] + "/" + c[4]);
                      if (
                        s.getFullYear() == Number(c[2]) &&
                        s.getMonth() + 1 == Number(c[3]) &&
                        s.getDate() == Number(c[4])
                      ) {
                        var d,
                          g = [
                            7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2,
                          ],
                          u = 0;
                        for (d = 0; d < 17; d++) u += e.substr(d, 1) * g[d];
                        return (
                          [
                            "1",
                            "0",
                            "X",
                            "9",
                            "8",
                            "7",
                            "6",
                            "5",
                            "4",
                            "3",
                            "2",
                          ][u % 11] == e.substr(17, 1)
                        );
                      }
                      return !1;
                    }
                    return !1;
                  })(e.passportCode) &&
                    (e.passengerBirth = (function (e) {
                      var t, i;
                      if (15 == (e = e.toUpperCase()).length) {
                        i = /^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/;
                        var n = e.match(i);
                        n &&
                          n.length > 5 &&
                          (t = "19" + n[2] + "-" + n[3] + "-" + n[4]);
                      }
                      if (18 == e.length) {
                        i = /^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/;
                        var o = e.match(i);
                        o &&
                          o.length > 5 &&
                          (t = o[2] + "-" + o[3] + "-" + o[4]);
                      }
                      return t;
                    })(e.passportCode))),
                e.passengerBirth &&
                  e.passengerBirth.length > 0 &&
                  (i = (function (e, t) {
                    if (e.passengerBirth) {
                      t ||
                        (console.log(m()().format("YYYY-MM-DD")),
                        (t = m()().format("YYYY-MM-DD")));
                      var i = new Date(e.passengerBirth).getTime(),
                        n = new Date(t).getTime() - 12096e5,
                        o = new Date(t);
                      o.setFullYear(o.getFullYear() - 2);
                      var r = new Date(t);
                      return (
                        r.setFullYear(r.getFullYear() - 12),
                        i > n
                          ? void 0
                          : i <= n && i > o.getTime()
                          ? "婴儿票"
                          : i <= o.getTime() && i > r.getTime()
                          ? "儿童票"
                          : i <= r.getTime()
                          ? "成人票"
                          : void 0
                      );
                    }
                  })(e, t)),
                i
              );
            },
            Y = function (e) {
              return e.passengerENLastName && e.passengerENFirstName
                ? e.passengerENLastName.toUpperCase() +
                    "/" +
                    e.passengerENFirstName.toUpperCase()
                : "";
            },
            H = {
              getShowName: function (e) {
                return e.isUseENName && Y(e)
                  ? Y(e)
                  : e.passengerName
                  ? e.passengerName
                  : "";
              },
              getEnglishName: Y,
              checkIsSupportCardType: function (e, t) {
                var i = (t || [0, 1, 2, 3, 4, 5, 6, 7, 8]).some(function (t) {
                  var i;
                  return (
                    t ==
                    (null ===
                      (i = E.find(function (t) {
                        return t.name === e;
                      })) || void 0 === i
                      ? void 0
                      : i.code)
                  );
                });
                return (
                  i || (0, _.v)("温馨提示", "不支持使用".concat(e, "的乘客")), i
                );
              },
              checkIsSupportPassengerType: function (e, t) {
                var i = t.forbidChildType,
                  n = t.forbidBabyType,
                  o =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : "",
                  r = W(e, o);
                return "" === r
                  ? ((0, _.v)("温馨提示", "所选乘客信息不完善"), !1)
                  : "儿童票" === r && i
                  ? ((0, _.v)("温馨提示", "不支持".concat(r, "的乘客")), !1)
                  : "婴儿票" !== r ||
                    !n ||
                    ((0, _.v)("温馨提示", "不支持".concat(r, "的乘客")), !1);
              },
            };
          function G(e) {
            var t = e.passenger,
              i = e.defaultSelectedStatus,
              n = e.onChangeSelected,
              r = g.default.useState(i),
              l = (0, X.Z)(r, 2),
              a = l[0],
              c = l[1];
            g.default.useEffect(function () {
              c(i);
            }, []);
            return (
              console.log("passengerListPage --5  : ", i, a, t.passengerName),
              (0, b.tZ)(f.View, {
                style: q.container,
                id: "AMAw",
                onClick: function () {
                  if (!a) {
                    if (!H.checkIsSupportCardType(t.passportType, [0])) return;
                    if (
                      !H.checkIsSupportPassengerType(t, {
                        forbidChildType: !0,
                        forbidBabyType: !0,
                      })
                    )
                      return;
                  }
                  n && n(t, !a), c(!a);
                },
                children: (0, b.BX)(f.View, {
                  style: {
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    flex: 1,
                  },
                  children: [
                    (0, b.BX)(f.View, {
                      style: { flex: 1 },
                      children: [
                        (0, b.tZ)(f.View, {
                          style: {
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                          },
                          children: (0, b.tZ)(f.Text, {
                            style: (0, o.Z)((0, o.Z)({}, q.topTitle), {
                              color: "#222",
                            }),
                            children: t.passengerName || H.getEnglishName(t),
                          }),
                        }),
                        (0, b.BX)(f.View, {
                          style: {
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            marginTop: 5,
                          },
                          children: [
                            (0, b.tZ)(f.Text, {
                              style: (0, o.Z)((0, o.Z)({}, q.topSubTitle), {
                                color: "#999",
                              }),
                              children: t.passportType,
                            }),
                            (0, b.tZ)(f.Text, {
                              style: (0, o.Z)((0, o.Z)({}, q.topSubTitle), {
                                marginLeft: 3,
                                color: "#999",
                              }),
                              children: t.passportCode,
                            }),
                          ],
                        }),
                      ],
                    }),
                    a
                      ? (0, b.tZ)(f.View, {
                          style: {
                            width: 80,
                            alignItems: "flex-end",
                            display: "flex",
                            flexDirection: "column",
                          },
                          children: (0, b.tZ)(x.Z, {
                            style: (0, o.Z)(
                              (0, o.Z)({}, q.circleIcon),
                              {},
                              { color: j.Z.mainColor }
                            ),
                            children: "󰲡",
                          }),
                        })
                      : (0, b.tZ)(f.View, {
                          style: {
                            width: 80,
                            alignItems: "flex-end",
                            display: "flex",
                            flexDirection: "column",
                          },
                          children: (0, b.tZ)(x.Z, {
                            style: q.circleIcon,
                            children: "󰲠",
                          }),
                        }),
                  ],
                }),
              })
            );
          }
          var O,
            q = (0, v.lW)({
              container: {
                paddingTop: 15,
                paddingLeft: 16,
                paddingRight: 16,
                flexDirection: "row",
                alignItems: "center",
              },
              top: { flex: 1 },
              topTitle: { fontSize: 16, color: "#222", fontWeight: "500" },
              topSubTitle: { fontSize: 12, color: "#333" },
              rightIcon: { fontSize: 20, color: "#ccc" },
              circleIcon: { fontSize: 20, color: "#ccc" },
            }),
            U =
              (h().getSystemInfoSync(),
              function (e) {
                var t = e.onPassengerChange,
                  i = e.isLogin,
                  n = g.default.useState([]),
                  o = (0, X.Z)(n, 2),
                  r = o[0],
                  l = o[1],
                  a = g.default.useState([]),
                  c = (0, X.Z)(a, 2),
                  s = c[0],
                  d = c[1],
                  u = g.default.useState([]),
                  h = (0, X.Z)(u, 2),
                  p = h[0],
                  m = h[1];
                g.default.useEffect(
                  function () {
                    i &&
                      (0, y.n1)({ source: "flight", getPassengerType: 3 })
                        .then(function (e) {
                          console.log(e),
                            1 === e.resultCode &&
                              null != e &&
                              e.commonPassengers &&
                              l(e.commonPassengers);
                        })
                        .catch(function (e) {
                          console.log(e);
                        });
                  },
                  [i]
                ),
                  g.default.useEffect(
                    function () {
                      var e = Z(r);
                      d(e);
                    },
                    [r]
                  ),
                  g.default.useEffect(
                    function () {
                      var e = Z(r);
                      d(e), t(p);
                    },
                    [p]
                  );
                var Z = function (e) {
                    if (p.length > 1) return p;
                    var t = [];
                    if (1 == p.length) {
                      var i = p[0],
                        n = e.filter(function (e) {
                          return e.passengerID != i.passengerID;
                        });
                      t = (t = t.concat(p)).concat(n);
                    } else t = e;
                    return t.length < 3 ? t : t.slice(0, 2);
                  },
                  x = function (e, i) {
                    i
                      ? ((e.selected = !0), p.push(e))
                      : (p.splice(
                          p.findIndex(function (t) {
                            return t.passengerID == e.passengerID;
                          }),
                          1
                        ),
                        (e.selected = !1)),
                      t(p);
                  };
                return (
                  console.log(s),
                  i
                    ? (0, b.BX)(f.View, {
                        style: $.container,
                        children: [
                          null == s
                            ? void 0
                            : s.map(function (e, t) {
                                var i =
                                  p &&
                                  p.length > 0 &&
                                  p.filter(function (t) {
                                    return t.passengerID == e.passengerID;
                                  }).length > 0;
                                return (
                                  console.log(
                                    "passengerListPage --4: ",
                                    i,
                                    e.passengerName
                                  ),
                                  (0, b.tZ)(
                                    G,
                                    {
                                      passenger: e,
                                      onChangeSelected: x,
                                      defaultSelectedStatus: i,
                                    },
                                    e.passengerID + "".concat(i)
                                  )
                                );
                              }),
                          (0, b.BX)(f.View, {
                            id: "AMAv",
                            onClick: function () {
                              (0, T.pX)(
                                {
                                  chosenPassengers: p,
                                  cards: [0],
                                  forbidChildType: !0,
                                  forbidBabyType: !0,
                                },
                                function (e) {
                                  console.log(
                                    "chosenPassengers",
                                    e.chosenPassengers
                                  ),
                                    null != e &&
                                      e.chosenPassengers &&
                                      m(e.chosenPassengers);
                                }
                              );
                            },
                            style: $.bottom,
                            children: [
                              (0, b.tZ)(f.Image, {
                                style: { width: 20, height: 20 },
                                src: C.Z.isTieyou
                                  ? "https://images3.c-ctrip.com/ztrip/zhixingios/tianxieye/10.0/btn_ty_txy.png"
                                  : "https://images3.c-ctrip.com/ztrip/train.song/order_details/V10.0/txy/btn_tjck@3x.webp",
                              }),
                              (0, b.tZ)(f.Text, {
                                style: {
                                  fontSize: 15,
                                  marginLeft: 2,
                                  color: j.Z.mainColor,
                                  fontWeight: "600",
                                },
                                children: "新增乘机人",
                              }),
                            ],
                          }),
                        ],
                      })
                    : null
                );
              }),
            Q = g.default.memo(U),
            $ = (0, v.lW)({
              container: {
                backgroundColor: "white",
                borderRadius: 12,
                marginLeft: 8,
                marginRight: 8,
                marginTop: 8,
                overflow: "hidden",
              },
              bottom: {
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                height: 40,
                marginTop: 15,
                marginBottom: 5,
                justifyContent: "center",
                backgroundColor: "white",
              },
            }),
            J = i(90098),
            K = i(46628),
            ee =
              (h().getSystemInfoSync(),
              C.Z.os,
              function (e) {
                var t,
                  i = e.isShowPriceInfo,
                  n = e.togglePriceInfo,
                  r = e.totalPrice,
                  l = e.preferentialZone,
                  a = e.onClickNext;
                return (
                  console.log(h().getSystemInfoSync()),
                  (0, b.tZ)(K.Z, {
                    style: (0, o.Z)((0, o.Z)({}, ie.container), {
                      borderTopLeftRadius: i ? 0 : 20,
                      borderTopRightRadius: i ? 0 : 20,
                    }),
                    children: (0, b.BX)(f.View, {
                      style: ie.payBox,
                      children: [
                        (0, b.BX)(f.View, {
                          style: ie.leftContainer,
                          children: [
                            r > 0
                              ? (0, b.BX)(f.View, {
                                  style: { flex: 1, justifyContent: "center" },
                                  children: [
                                    (0, b.BX)(f.View, {
                                      style: {
                                        display: "flex",
                                        flexDirection: "row",
                                        alignItems: "center",
                                      },
                                      children: [
                                        (0, b.BX)(f.Text, {
                                          style: ie.cnyText,
                                          children: [
                                            "¥",
                                            (0, b.tZ)(f.Text, {
                                              style: ie.priceText,
                                              children: r,
                                            }),
                                          ],
                                        }),
                                        !(
                                          null == l ||
                                          null === (t = l[0]) ||
                                          void 0 === t ||
                                          !t.discountTag
                                        ) &&
                                          (0, b.tZ)(f.View, {
                                            style: ie.tagContainer,
                                            children: (0, b.tZ)(f.Text, {
                                              style: {
                                                fontSize: 10,
                                                color: j.Z.priceColor,
                                              },
                                              children: l[0].discountTag,
                                            }),
                                          }),
                                      ],
                                    }),
                                    (0, b.tZ)(f.Text, {
                                      style: ie.detailText,
                                      children: "含机建+燃油",
                                    }),
                                  ],
                                })
                              : (0, b.tZ)(f.View, {
                                  style: { flex: 1, justifyContent: "center" },
                                  children: (0, b.tZ)(f.Text, {
                                    style: ie.priceText,
                                    children: "--",
                                  }),
                                }),
                            r > 0 &&
                              (0, b.BX)(f.View, {
                                style: ie.detailView,
                                id: "AMAn",
                                onClick: function () {
                                  r <= 0 || n();
                                },
                                children: [
                                  (0, b.tZ)(f.Text, {
                                    style: ie.detailText,
                                    children: "明细",
                                  }),
                                  i
                                    ? (0, b.tZ)(x.Z, {
                                        style: ie.arrowIcon,
                                        children: "󰳪",
                                      })
                                    : (0, b.tZ)(x.Z, {
                                        style: ie.arrowIcon,
                                        children: "󰳩",
                                      }),
                                ],
                              }),
                          ],
                        }),
                        (0, b.tZ)(f.View, {
                          style: ie.confirmBtn,
                          id: "AMAo",
                          onClick: function () {
                            a();
                          },
                          children: (0, b.tZ)(f.Text, {
                            style: ie.confirmText,
                            children: "下一步",
                          }),
                        }),
                      ],
                    }),
                  })
                );
              }),
            te = g.default.memo(ee),
            ie = (0, v.lW)({
              container: {
                position: "absolute",
                bottom: 0,
                backgroundColor: "#fff",
                width: "100%",
                paddingBottom: J.Z.isIPhoneX ? 24 : 0,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                zIndex: 100,
              },
              payBox: {
                display: "flex",
                flexDirection: "row",
                height: 60,
                alignItems: "center",
                paddingLeft: 15,
                paddingRight: 8,
              },
              leftContainer: {
                display: "flex",
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
              },
              cnyText: {
                fontSize: 18,
                color: j.Z.priceColor,
                fontFamily: (0, v.QQ)(),
              },
              priceText: {
                fontSize: 24,
                color: j.Z.priceColor,
                marginLeft: 1,
                fontFamily: (0, v.QQ)(),
              },
              tagContainer: {
                borderWidth: 0.5,
                borderColor: "#FF5959",
                paddingLeft: 4,
                paddingRight: 4,
                height: 15,
                borderRadius: 4,
                marginLeft: 4,
                justifyContent: "center",
              },
              detailText: { fontSize: 12, color: j.Z.grey_99 },
              confirmBtn: {
                height: 44,
                width: 165,
                backgroundColor: j.Z.priceColor,
                borderRadius: 12,
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
              },
              confirmText: {
                fontSize: 18,
                color: j.Z.white,
                fontWeight: "500",
              },
              detailView: {
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginRight: 12,
              },
              arrowIcon: { fontSize: 12, color: "#ccc", marginLeft: 2 },
            }),
            ne = i(1841),
            oe =
              (h().getSystemInfoSync(),
              function (e) {
                var t = e.onChangeNoticeChosen,
                  i = e.remark,
                  n = e.noticeContent,
                  r = e.isNoticeChosen,
                  l = g.default.useState(!0),
                  a = (0, X.Z)(l, 2),
                  c = a[0],
                  s = a[1];
                return (0, b.BX)(f.View, {
                  style: le.container,
                  children: [
                    (0, b.BX)(f.View, {
                      style: (0, o.Z)(
                        (0, o.Z)({}, le.noticeContainer),
                        {},
                        { flexWrap: C.Z.isCRN ? "nowrap" : "wrap" }
                      ),
                      id: "AMAe",
                      onClick: function () {
                        t(!r);
                      },
                      children: [
                        (0, b.tZ)(f.View, {
                          style: { alignSelf: "flex-start" },
                          children: r
                            ? (0, b.tZ)(x.Z, {
                                style: (0, o.Z)(
                                  (0, o.Z)({}, le.circleIcon),
                                  {},
                                  { color: j.Z.mainColor }
                                ),
                                children: "󰲡",
                              })
                            : (0, b.tZ)(x.Z, {
                                style: le.circleIcon,
                                children: "󰲠",
                              }),
                        }),
                        !!n &&
                          (0, b.tZ)(ne.Z, {
                            style: C.Z.isCRN
                              ? le.noticeText
                              : le.miniNoticeStyle,
                            numberOfLines: c ? 1 : null,
                            children: n,
                          }),
                        C.Z.isCRN &&
                          c &&
                          (0, b.tZ)(f.Text, {
                            style: le.moreText,
                            id: "AMAf",
                            onClick: function () {
                              s(!1);
                            },
                            children: "更多",
                          }),
                      ],
                    }),
                    !!i && (0, b.tZ)(ne.Z, { style: le.desc, children: i }),
                  ],
                });
              }),
            re = g.default.memo(oe),
            le = (0, v.lW)({
              container: { marginLeft: 16, marginRight: 16, marginTop: 9 },
              noticeContainer: {
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 20,
              },
              noticeText: {
                fontSize: 12,
                color: "#999",
                lineHeight: 17,
                flex: 1,
              },
              miniNoticeStyle: { fontSize: 12 },
              desc: { fontSize: 12, color: "#999", lineHeight: 17 },
              circleIcon: { fontSize: 18, color: "#ccc", marginRight: 8 },
              moreText: { fontSize: 12, color: j.Z.mainColor, marginLeft: 2 },
            }),
            ae =
              (h().getSystemInfoSync(),
              function (e) {
                var t = e.contactPhone,
                  i = e.onChangeContactPhone,
                  n = g.default.useState(null != t ? t : ""),
                  o = (0, X.Z)(n, 2),
                  r = o[0],
                  l = o[1];
                g.default.useEffect(
                  function () {
                    l(t);
                  },
                  [t]
                );
                return (0, b.BX)(f.View, {
                  style: se.container,
                  children: [
                    (0, b.tZ)(f.Text, {
                      style: se.contactText,
                      children: "联系手机",
                    }),
                    (0, b.tZ)(f.Text, {
                      style: se.countyText,
                      children: "+86",
                    }),
                    (0, b.tZ)(f.Input, {
                      type: "number",
                      placeholder: "用于接收还价信息",
                      placeholderTextColor: j.Z.grey_cc,
                      style: se.contactPhoneText,
                      onInput: function (e) {
                        console.log(e), l(e.detail.value), i(e.detail.value);
                      },
                      value: r,
                    }),
                    (0, b.tZ)(f.View, {
                      style: {
                        flex: 1,
                        alignItems: "flex-end",
                        display: "flex",
                        flexDirection: "column",
                      },
                      id: "AMAp",
                      onClick: function () {
                        (0, T.jw)().then(function (e) {
                          console.log(e), e && l(e);
                        });
                      },
                      children: (0, b.tZ)(x.Z, {
                        style: se.icon,
                        children: "󰲞",
                      }),
                    }),
                  ],
                });
              }),
            ce = g.default.memo(ae),
            se = (0, v.lW)({
              container: {
                margin: 8,
                marginBottom: 0,
                backgroundColor: "#fff",
                borderRadius: 12,
                height: 50,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                paddingLeft: 16,
                paddingRight: 16,
              },
              contactText: { fontSize: 16, color: j.Z.grey_99, minWidth: 70 },
              countyText: { marginLeft: 10, fontSize: 16, color: j.Z.grey_22 },
              contactPhoneText: {
                minWidth: 140,
                marginLeft: 10,
                color: j.Z.grey_33,
                fontSize: 16,
              },
              icon: { fontSize: 20, color: "#ccc" },
            }),
            de =
              (h().getSystemInfoSync(),
              function (e) {
                var t,
                  i = e.preferentialZone,
                  n =
                    null == i ||
                    null ===
                      (t = i.filter(function (e) {
                        return 1 === e.type;
                      })) ||
                    void 0 === t
                      ? void 0
                      : t[0];
                return n
                  ? (0, b.tZ)(K.Z, {
                      style: ue.container,
                      children: (0, b.BX)(f.View, {
                        style: {
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                        },
                        children: [
                          (0, b.tZ)(f.Image, {
                            src: n.discountIcon,
                            style: ue.icon,
                          }),
                          (0, b.BX)(f.Text, {
                            style: ue.detailText,
                            children: [
                              "本单已享新客还价订补贴，首单",
                              (0, b.BX)(f.Text, {
                                style: { color: j.Z.priceColor },
                                children: [
                                  "再减",
                                  null == n ? void 0 : n.discountAmount,
                                  "元",
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    })
                  : null;
              }),
            ge = g.default.memo(de),
            ue = (0, v.lW)({
              container: {
                position: "absolute",
                backgroundColor: "#FFF8F4",
                width: "100%",
                height: 66,
                bottom: C.Z.isCRN
                  ? J.Z.isIPhoneX
                    ? 62
                    : 38
                  : J.Z.isIPhoneX
                  ? 52
                  : 28,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                paddingTop: 12,
                paddingLeft: 16,
                zIndex: 100,
              },
              icon: { width: 18, height: 18, marginRight: 5 },
              detailText: { fontSize: 13, lineHeight: 18, color: j.Z.grey_22 },
            }),
            he = h().getSystemInfoSync(),
            fe = g.default.memo(function (e) {
              var t = e.isShowConfirmModal,
                i = e.toggleShowConfirmModal,
                n = e.goPay,
                o = e.totalPrice,
                r = e.confirmNotice;
              return t
                ? (0, b.BX)(K.Z, {
                    style: pe.modalContainer,
                    children: [
                      (0, b.tZ)(f.View, {
                        style: { flex: 1 },
                        id: "AMAg",
                        onClick: function () {
                          return i(!1);
                        },
                      }),
                      (0, b.BX)(f.View, {
                        style: pe.container,
                        children: [
                          (0, b.tZ)(f.View, {
                            style: pe.closeIconView,
                            id: "AMAh",
                            onClick: function () {
                              return i(!1);
                            },
                            children: (0, b.tZ)(x.Z, {
                              style: pe.closeIcon,
                              children: "󰳭",
                            }),
                          }),
                          (0, b.tZ)(f.Image, {
                            src: "https://images3.c-ctrip.com/ztrip/zhixingios/huanjiading/beijin@3x.png",
                            style: {
                              position: "absolute",
                              top: 0,
                              width: "100%",
                              height: (he.windowWidth / 375) * 180,
                              borderTopLeftRadius: 20,
                              borderTopRightRadius: 20,
                              zIndex: -1,
                            },
                          }),
                          (0, b.tZ)(f.Text, {
                            style: pe.title,
                            children: "帮还价支付确认",
                          }),
                          (0, b.BX)(f.View, {
                            style: pe.content,
                            children: [
                              (0, b.tZ)(f.Image, {
                                style: {
                                  width: he.windowWidth - 48,
                                  height: ((he.windowWidth - 48) / 327) * 42,
                                },
                                src: "https://images3.c-ctrip.com/ztrip/zhixingios/huanjiading/zhifuquren_peitu@3x.png",
                              }),
                              !!r &&
                                (0, b.tZ)(ne.Z, {
                                  style: pe.desc,
                                  children: r,
                                }),
                            ],
                          }),
                          (0, b.tZ)(f.View, {
                            style: pe.bottomContainer,
                            children: (0, b.tZ)(f.View, {
                              style: pe.confirmBtn,
                              id: "AMAj",
                              onClick: n,
                              children: (0, b.BX)(f.Text, {
                                style: pe.confirmText,
                                children: ["支付¥", o],
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  })
                : null;
            }),
            pe = (0, v.lW)({
              modalContainer: {
                position: "absolute",
                zIndex: 100,
                bottom: 0,
                backgroundColor: "rgba(0,0,0,0.65)",
                width: "100%",
                height: "100%",
              },
              container: {
                position: "absolute",
                width: "100%",
                zIndex: 1001,
                bottom: 0,
                backgroundColor: "#f5f5f5",
                borderTopLeftRadius: 16,
                borderTopRightRadius: 16,
                display: "flex",
                flexDirection: "column",
              },
              content: {
                backgroundColor: "white",
                borderRadius: 12,
                padding: 16,
                marginLeft: 8,
                marginRight: 8,
                marginBottom: 60,
              },
              closeIconView: {
                position: "absolute",
                top: 16,
                right: 16,
                zIndex: 1002,
              },
              closeIcon: { fontSize: 25, color: "#ccc", zIndex: 1002 },
              title: {
                fontSize: 20,
                color: "#730303",
                fontWeight: "600",
                marginTop: 12,
                marginBottom: 16,
                alignSelf: "center",
              },
              desc: {
                fontSize: 12,
                color: j.Z.grey_66,
                lineHeight: 18,
                marginTop: 20,
              },
              bottomContainer: {
                backgroundColor: "white",
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                paddingTop: 8,
                paddingBottom: J.Z.isIPhoneX ? 34 : 10,
              },
              confirmBtn: {
                height: 44,
                marginLeft: 8,
                marginRight: 8,
                backgroundColor: j.Z.mainColor,
                borderRadius: 12,
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
              },
              confirmText: { fontSize: 18, color: j.Z.white },
            }),
            me =
              (h().getSystemInfoSync(),
              function (e) {
                var t = e.isShowPriceInfo,
                  i = e.togglePriceInfo,
                  n = e.priceList;
                return t && n
                  ? (0, b.BX)(K.Z, {
                      style: Ce.modalContainer,
                      children: [
                        (0, b.tZ)(f.View, {
                          style: { flex: 1 },
                          id: "AMAk",
                          onClick: i,
                        }),
                        (0, b.tZ)(f.View, {
                          style: Ce.container,
                          children: (0, b.BX)(f.View, {
                            style: Ce.content,
                            children: [
                              (0, b.tZ)(f.Text, {
                                style: Ce.title,
                                children: "价格明细",
                              }),
                              (0, b.tZ)(f.View, {
                                style: Ce.closeIconView,
                                id: "AMAl",
                                onClick: i,
                                children: (0, b.tZ)(x.Z, {
                                  style: Ce.closeIcon,
                                  children: "󰳭",
                                }),
                              }),
                              (0, b.BX)(f.View, {
                                children: [
                                  (n.tickets || []).map(function (e, t) {
                                    return (
                                      e.count > 0 &&
                                      e.price > 0 &&
                                      (0, b.BX)(
                                        f.View,
                                        {
                                          children: [
                                            (0, b.BX)(f.View, {
                                              style: Ce.itemTitleContainer,
                                              children: [
                                                (0, b.tZ)(f.Text, {
                                                  style: Ce.titleName,
                                                  children: e.name,
                                                }),
                                                (0, b.BX)(f.Text, {
                                                  style: Ce.titleName,
                                                  children: [
                                                    "￥",
                                                    e.price,
                                                    "x",
                                                    e.count,
                                                    e.unit,
                                                  ],
                                                }),
                                              ],
                                            }),
                                            !S.Z.isEmptyArray(
                                              null == e ? void 0 : e.detail
                                            ) &&
                                              e.detail.map(function (e, t) {
                                                return (0,
                                                b.BX)(f.View, { style: Ce.itemContainer, children: [(0, b.tZ)(f.Text, { style: Ce.priceDesc, children: e.name }), (0, b.BX)(f.Text, { style: Ce.priceDesc, children: ["￥", e.price] })] }, "detail" + t);
                                              }),
                                          ],
                                        },
                                        "ticket" + t
                                      )
                                    );
                                  }),
                                  !S.Z.isEmptyArray(n.favors) &&
                                    (0, b.tZ)(f.View, {
                                      style: { marginTop: 15 },
                                      children: n.favors.map(function (e, t) {
                                        return (
                                          e.price > 0 &&
                                          (0, b.BX)(
                                            f.View,
                                            {
                                              style: Ce.itemContainer,
                                              children: [
                                                (0, b.tZ)(ne.Z, {
                                                  style: Ce.titleName,
                                                  children: e.name,
                                                }),
                                                (0, b.tZ)(f.Text, {
                                                  style: (0, o.Z)(
                                                    (0, o.Z)({}, Ce.titleName),
                                                    { color: j.Z.priceColor }
                                                  ),
                                                  children: "- ¥"
                                                    .concat(e.price)
                                                    .concat(
                                                      e.count
                                                        ? "x" + e.count
                                                        : ""
                                                    )
                                                    .concat(
                                                      e.unit ? e.unit : ""
                                                    ),
                                                }),
                                              ],
                                            },
                                            "favor" + t
                                          )
                                        );
                                      }),
                                    }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      ],
                    })
                  : null;
              }),
            ye = g.default.memo(me),
            Ce = (0, v.lW)({
              modalContainer: {
                position: "absolute",
                zIndex: 100,
                bottom: J.Z.isIPhoneX ? 84 : 60,
                backgroundColor: "rgba(0,0,0,0.65)",
                width: "100%",
                height: "100%",
              },
              container: {
                position: "absolute",
                width: "100%",
                zIndex: 1001,
                bottom: 0,
                backgroundColor: "#f7f7f7",
                borderTopLeftRadius: 16,
                borderTopRightRadius: 16,
              },
              content: {
                backgroundColor: "white",
                borderTopLeftRadius: 16,
                borderTopRightRadius: 16,
                padding: 20,
                paddingTop: 10,
                marginBottom: 10,
                display: "flex",
                flexDirection: "column",
              },
              title: {
                fontSize: 18,
                lineHeight: 25,
                color: j.Z.grey_33,
                textAlign: "center",
                fontWeight: "600",
                marginBottom: 15,
              },
              closeImage: {
                position: "absolute",
                top: 13,
                right: 15,
                width: 22,
                height: 22,
                zIndex: 1002,
              },
              closeIconView: {
                position: "absolute",
                top: 16,
                right: 16,
                zIndex: 1002,
              },
              closeIcon: { fontSize: 23, color: "#ccc" },
              itemTitleContainer: {
                marginBottom: 4,
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
                alignItems: "center",
              },
              itemContainer: {
                marginTop: 2,
                marginBottom: 2,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              },
              titleName: { fontSize: 15, color: j.Z.grey_33 },
              priceDesc: { fontSize: 12, color: j.Z.grey_99 },
            }),
            Ze = i(35707),
            xe = i(94205),
            be = i(19972),
            we = i(851),
            Te = i(29799),
            Se = i(87298),
            Ie = "STORAGE_SURPRISE_GRAB_GUIDE_SHOW",
            ve = "STORAGE_SURPRISE_GRAB_INPUT_INFO",
            De = h().getSystemInfoSync(),
            Pe = g.default.memo(function (e) {
              var t = e.isShowGuideModal,
                i = e.toggleShowGuideModal;
              return t
                ? (0, b.BX)(K.Z, {
                    style: Fe.modalContainer,
                    children: [
                      (0, b.tZ)(f.View, {
                        style: { flex: 1 },
                        id: "AMAq",
                        onClick: i,
                      }),
                      (0, b.BX)(f.View, {
                        style: Fe.container,
                        children: [
                          (0, b.tZ)(f.View, {
                            style: Fe.closeIconView,
                            id: "AMAr",
                            onClick: i,
                            children: (0, b.tZ)(x.Z, {
                              style: Fe.closeIcon,
                              children: "󰳭",
                            }),
                          }),
                          (0, b.tZ)(f.View, {
                            children: (0, b.tZ)(f.Image, {
                              style: Fe.bg,
                              src: "https://images3.c-ctrip.com/ztrip/zhixingios/list/baby/icon_qinzi_bg@3x.png",
                            }),
                          }),
                          (0, b.tZ)(f.View, {
                            style: {
                              alignItems: "center",
                              display: "flex",
                              flexDirection: "column",
                            },
                            children: (0, b.tZ)(f.Image, {
                              style: Fe.titleImg,
                              src: C.Z.isTieyou
                                ? "https://images3.c-ctrip.com/ztrip/zhixingios/huanjiading/ty_tc_biaoti.png"
                                : "https://images3.c-ctrip.com/ztrip/zhixingios/huanjiading/hjd_biaoti.png",
                            }),
                          }),
                          (0, b.tZ)(f.ScrollView, {
                            children: (0, b.BX)(f.View, {
                              style: {
                                alignItems: "center",
                                display: "flex",
                                flexDirection: "column",
                              },
                              children: [
                                (0, b.tZ)(f.Image, {
                                  style: Fe.contentImg,
                                  src: C.Z.isTieyou
                                    ? "https://images3.c-ctrip.com/ztrip/zhixingios/huanjiading/ty_neirong.png"
                                    : "https://images3.c-ctrip.com/ztrip/zhixingios/huanjiading/bhj_dachatu.png",
                                }),
                                (0, b.BX)(f.View, {
                                  style: {
                                    position: "absolute",
                                    zIndex: 30,
                                    top: 80,
                                  },
                                  children: [
                                    (0, b.tZ)(f.Text, {
                                      style: Fe.transparentText,
                                      children: "scan text1",
                                    }),
                                    (0, b.tZ)(f.Text, {
                                      style: Fe.transparentText,
                                      children: "scan text2",
                                    }),
                                    (0, b.tZ)(f.Text, {
                                      style: Fe.transparentText,
                                      children: "scan text3",
                                    }),
                                  ],
                                }),
                                (0, b.BX)(f.View, {
                                  style: {
                                    position: "absolute",
                                    zIndex: 30,
                                    bottom: 80,
                                  },
                                  children: [
                                    (0, b.tZ)(f.Text, {
                                      style: Fe.transparentText,
                                      children: "scan text4",
                                    }),
                                    (0, b.tZ)(f.Text, {
                                      style: Fe.transparentText,
                                      children: "scan text5",
                                    }),
                                    (0, b.tZ)(f.Text, {
                                      style: Fe.transparentText,
                                      children: "scan text6",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, b.tZ)(f.View, {
                            style: Fe.confirmBtn,
                            id: "AMAt",
                            onClick: i,
                            children: (0, b.tZ)(f.Text, {
                              style: Fe.confirmText,
                              children: "即刻体验",
                            }),
                          }),
                        ],
                      }),
                    ],
                  })
                : null;
            }),
            Fe = (0, v.lW)({
              modalContainer: {
                position: "absolute",
                zIndex: 100,
                bottom: 0,
                backgroundColor: "rgba(0,0,0,0.65)",
                width: "100%",
                height: "100%",
              },
              container: {
                position: "absolute",
                width: "100%",
                zIndex: 1001,
                bottom: 0,
                backgroundColor: "#f5f5f5",
                borderTopLeftRadius: 16,
                borderTopRightRadius: 16,
              },
              content: {
                backgroundColor: "white",
                borderRadius: 12,
                padding: 16,
                marginLeft: 8,
                marginRight: 8,
                marginBottom: 60,
              },
              closeImage: {
                position: "absolute",
                top: 10,
                right: 10,
                width: 23,
                height: 23,
                zIndex: 1002,
              },
              closeIconView: {
                position: "absolute",
                top: 16,
                right: 16,
                zIndex: 1002,
              },
              closeIcon: { fontSize: 23, color: "#ccc" },
              bg: {
                position: "absolute",
                width: De.windowWidth,
                height: 148,
                borderTopLeftRadius: 16,
                borderTopRightRadius: 16,
              },
              titleImg: {
                width: 214,
                height: 44,
                marginTop: 15,
                marginBottom: 15,
                zIndex: 100,
              },
              contentImg: {
                width: De.windowWidth - 76,
                height: ((De.windowWidth - 76) / 900) * 1530,
                marginBottom: 20,
              },
              bottomContainer: {
                backgroundColor: "white",
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                paddingTop: 8,
                paddingBottom: J.Z.isIPhoneX ? 34 : 10,
              },
              confirmBtn: {
                height: 44,
                marginLeft: 8,
                marginRight: 8,
                backgroundColor: j.Z.mainColor,
                borderRadius: 12,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: J.Z.isIPhoneX ? 34 : 10,
              },
              confirmText: { fontSize: 18, color: j.Z.white },
              transparentText: { color: "transparent", marginTop: 10 },
            }),
            Be = h().getSystemInfoSync(),
            ze =
              (0, Se.h)()(
                (O = (function (e) {
                  (0, c.Z)(i, e);
                  var t = (0, s.Z)(i);
                  function i(e) {
                    var n;
                    return (
                      (0, r.Z)(this, i),
                      (n = t.call(this, e)),
                      (0, d.Z)((0, a.Z)(n), "chosenPassengers", void 0),
                      (0, d.Z)((0, a.Z)(n), "contactPhone", void 0),
                      (0, d.Z)((0, a.Z)(n), "allFlights", void 0),
                      (0, d.Z)(
                        (0, a.Z)(n),
                        "pageId",
                        C.Z.isTieyou ? "10650079193" : "10650084838"
                      ),
                      (0, d.Z)((0, a.Z)(n), "getFlightList", function (e) {
                        return new Promise(function (t) {
                          (0, y.I0)({
                            data: {
                              version: 12,
                              source: 0,
                              cacheUsage: 0,
                              hasChild: !1,
                              hasBaby: !1,
                              business: !1,
                              segments: [
                                {
                                  dptDate: e,
                                  dptCode: n.state.departCity.code,
                                  arrCode: n.state.arriveCity.code,
                                },
                              ],
                            },
                          })
                            .then(function (e) {
                              console.log(e),
                                1 == (null == e ? void 0 : e.resultCode)
                                  ? t(null == e ? void 0 : e.data)
                                  : t(null);
                            })
                            .catch(function (e) {
                              console.log(e), t(null);
                            });
                        });
                      }),
                      (0, d.Z)((0, a.Z)(n), "getAllFlights", function () {
                        var e = [];
                        return (
                          (0, be.Q)("正在查询航班..."),
                          new Promise(function (t) {
                            Promise.all(
                              n.state.selectDates.map(function (e) {
                                return n.getFlightList(e);
                              })
                            )
                              .then(function (i) {
                                var o;
                                null == i ||
                                  null ===
                                    (o = i.filter(function (e) {
                                      return !!e;
                                    })) ||
                                  void 0 === o ||
                                  o.map(function (i) {
                                    var o,
                                      r,
                                      l,
                                      a =
                                        (null == i ||
                                        null === (o = i.singles) ||
                                        void 0 === o
                                          ? void 0
                                          : o.filter(function (e) {
                                              var t, i;
                                              return !(
                                                null != e &&
                                                null !== (t = e.sequences) &&
                                                void 0 !== t &&
                                                null !== (i = t[0]) &&
                                                void 0 !== i &&
                                                i.shared
                                              );
                                            })) || [],
                                      c =
                                        (null == a
                                          ? void 0
                                          : a.filter(function (e) {
                                              var t, i, o;
                                              return !(
                                                null !== (t = n.state) &&
                                                void 0 !== t &&
                                                null !==
                                                  (i = t.notShowAirlines) &&
                                                void 0 !== i &&
                                                i.includes(
                                                  null == e ||
                                                    null ===
                                                      (o = e.sequences) ||
                                                    void 0 === o
                                                    ? void 0
                                                    : o[0].airCode
                                                )
                                              );
                                            })) || [],
                                      s =
                                        !!n.state.departHourLimit &&
                                        m()(
                                          null === (r = c[0]) || void 0 === r
                                            ? void 0
                                            : r.dptTime
                                        ).unix() -
                                          m()().unix() <=
                                          60 * n.state.departHourLimit * 60;
                                    !i ||
                                      S.Z.isEmptyArray(c) ||
                                      s ||
                                      e.push({
                                        departureDate: m()(
                                          null === (l = c[0]) || void 0 === l
                                            ? void 0
                                            : l.dptTime
                                        ).format("YYYY-MM-DD"),
                                        flights: c,
                                      }),
                                      t(e);
                                  });
                              })
                              .catch(function (e) {
                                console.log(e),
                                  h().showToast({
                                    title: "网络开小差了，请稍后重试~",
                                  }),
                                  t([]);
                              })
                              .finally(function () {
                                (0, be.Z)();
                              });
                          })
                        );
                      }),
                      (0, d.Z)(
                        (0, a.Z)(n),
                        "surprisedGrabPriceRecommend",
                        function (e) {
                          (0, y._j)({ data: e })
                            .then(function (e) {
                              console.log(e),
                                1 === e.resultCode && null != e && e.data
                                  ? n.setState(
                                      (0, o.Z)(
                                        (0, o.Z)({}, e.data),
                                        {},
                                        {
                                          selectPriceStatus: 2,
                                          isEmptyOrError: !1,
                                        }
                                      )
                                    )
                                  : -96 === e.resultCode
                                  ? (n.setState({
                                      isEmptyOrError: !0,
                                      isLogin: !1,
                                    }),
                                    Ze.Z.doLogin()
                                      .then(function () {
                                        console.log("登录成功"),
                                          n.init(),
                                          n.setState({ isLogin: !0 });
                                      })
                                      .catch(function (e) {
                                        console.log("取消登录");
                                      }))
                                  : (h().showToast({
                                      title:
                                        (null == e
                                          ? void 0
                                          : e.resultMessage) ||
                                        "请换条航线试试",
                                    }),
                                    n.setState({ isEmptyOrError: !0 }));
                            })
                            .catch(function (e) {
                              h().showToast({ title: "请换条航线试试" }),
                                n.setState({ isEmptyOrError: !0 });
                            });
                        }
                      ),
                      (0, d.Z)((0, a.Z)(n), "onSelectedFlight", function () {
                        n.ubtTrace("FltDickerHome_FlightPrefer_Click", {
                          pageid: n.pageId,
                        }),
                          S.Z.isEmptyArray(n.allFlights)
                            ? n.getAllFlights().then(function (e) {
                                (n.allFlights = e),
                                  S.Z.isEmptyArray(e)
                                    ? setTimeout(function () {
                                        h().showToast({
                                          title: "请换条航线试试",
                                        });
                                      }, 100)
                                    : n.navigateTo({
                                        url: "/pages/taroCRN/flight/pages/surpriseGrabFlightSelect/index",
                                        data: {
                                          selectFlights: n.state.selectFlights,
                                          allFlights: e,
                                          minSpecifiedFlightCount:
                                            n.state.minSpecifiedFlightCount,
                                          departHourLimit:
                                            n.state.departHourLimit,
                                        },
                                        callback: function (e) {
                                          var t = e.selectFlights,
                                            i = e.lowestPriceFlightInfo;
                                          console.log("selectFlights", t, i),
                                            n.setState(
                                              {
                                                selectFlights: t,
                                                lowestPriceFlightInfo: i,
                                              },
                                              function () {
                                                n.surprisedGrabPriceRecommend({
                                                  departureCityCode:
                                                    n.state.departCity.code,
                                                  arrivalCityCode:
                                                    n.state.arriveCity.code,
                                                  specifiedFlights:
                                                    null != t
                                                      ? t
                                                      : n.state.selectDates.map(
                                                          function (e) {
                                                            return {
                                                              departureDate: e,
                                                              flightNumbers:
                                                                null,
                                                            };
                                                          }
                                                        ),
                                                  lowestPriceFlightInfo: i,
                                                });
                                              }
                                            );
                                        },
                                      }),
                                  console.log(e);
                              })
                            : (console.log(n.state.selectFlights),
                              n.navigateTo({
                                url: "/pages/taroCRN/flight/pages/surpriseGrabFlightSelect/index?",
                                data: {
                                  selectFlights: n.state.selectFlights,
                                  allFlights: n.allFlights,
                                  minSpecifiedFlightCount:
                                    n.state.minSpecifiedFlightCount,
                                  departHourLimit: n.state.departHourLimit,
                                },
                                callback: function (e) {
                                  var t = e.selectFlights,
                                    i = e.lowestPriceFlightInfo;
                                  console.log("selectFlights", t, i),
                                    n.setState(
                                      {
                                        selectFlights: t,
                                        lowestPriceFlightInfo: i,
                                      },
                                      function () {
                                        n.surprisedGrabPriceRecommend({
                                          departureCityCode:
                                            n.state.departCity.code,
                                          arrivalCityCode:
                                            n.state.arriveCity.code,
                                          specifiedFlights:
                                            null != t
                                              ? t
                                              : n.state.selectDates.map(
                                                  function (e) {
                                                    return {
                                                      departureDate: e,
                                                      flightNumbers: null,
                                                    };
                                                  }
                                                ),
                                          lowestPriceFlightInfo: i,
                                        });
                                      }
                                    );
                                },
                              }));
                      }),
                      (0, d.Z)((0, a.Z)(n), "resetFlightList", function () {
                        S.Z.isEmptyArray(n.allFlights) || (n.allFlights = null),
                          n.setState({ selectFlights: null });
                      }),
                      (0, d.Z)((0, a.Z)(n), "onSelectedCity", function (e, t) {
                        n.resetFlightList(),
                          n.setState(
                            { departCity: e, arriveCity: t },
                            function () {
                              n.surprisedGrabPriceRecommend({
                                departureCityCode: e.code,
                                arrivalCityCode: t.code,
                                specifiedFlights: n.state.selectDates.map(
                                  function (e) {
                                    return {
                                      departureDate: e,
                                      flightNumbers: null,
                                    };
                                  }
                                ),
                                lowestPriceFlightInfo: null,
                              });
                            }
                          );
                        try {
                          h().setStorageSync(ve, {
                            departCity: e,
                            arriveCity: t,
                            selectDates: n.state.selectDates,
                          });
                        } catch (e) {}
                      }),
                      (0, d.Z)((0, a.Z)(n), "onSelectedDate", function (e) {
                        e.sort(function (e, t) {
                          return new Date(e).getTime() - new Date(t).getTime();
                        }),
                          n.resetFlightList(),
                          n.setState({ selectDates: e }, function () {
                            n.surprisedGrabPriceRecommend({
                              departureCityCode: n.state.departCity.code,
                              arrivalCityCode: n.state.arriveCity.code,
                              specifiedFlights: e.map(function (e) {
                                return {
                                  departureDate: e,
                                  flightNumbers: null,
                                };
                              }),
                              lowestPriceFlightInfo: null,
                            });
                          });
                        try {
                          h().setStorageSync(ve, {
                            departCity: n.state.departCity,
                            arriveCity: n.state.arriveCity,
                            selectDates: e,
                          });
                        } catch (e) {}
                      }),
                      (0, d.Z)((0, a.Z)(n), "onPassengerChange", function (e) {
                        n.setState({ chosenPassengers: e }),
                          console.log(
                            "passengerListPage --passengerChangeAction : ",
                            n.chosenPassengers
                          );
                      }),
                      (0, d.Z)((0, a.Z)(n), "onSelectedPrice", function (e) {
                        n.setState({ selectPriceStatus: e });
                      }),
                      (0, d.Z)((0, a.Z)(n), "togglePriceInfo", function () {
                        n.setState({
                          isShowPriceInfo: !n.state.isShowPriceInfo,
                        });
                      }),
                      (0, d.Z)(
                        (0, a.Z)(n),
                        "toggleSowConfirmModal",
                        function (e) {
                          n.setState({ isShowConfirmModal: !!e });
                        }
                      ),
                      (0, d.Z)(
                        (0, a.Z)(n),
                        "onChangeContactPhone",
                        function (e) {
                          n.contactPhone = e;
                        }
                      ),
                      (0, d.Z)(
                        (0, a.Z)(n),
                        "onChangeNoticeChosen",
                        function (e) {
                          n.setState({ isNoticeChosen: !!e });
                        }
                      ),
                      (0, d.Z)((0, a.Z)(n), "validInfo", function () {
                        var e = n.state,
                          t = e.isEmptyOrError,
                          i = e.chosenPassengers,
                          o = e.noticeContent,
                          r = e.isNoticeChosen;
                        return t
                          ? (h().showToast({ title: "请换条航线试试" }), !1)
                          : (null == i ? void 0 : i.length) <= 0
                          ? (h().showToast({ title: "请先选择乘客" }), !1)
                          : S.Z.isValidPhoneNumber(n.contactPhone)
                          ? !!r ||
                            (C.Z.isCRN
                              ? ((0, _.v)(
                                  "订票服务协议",
                                  o,
                                  { text: "再想想" },
                                  {
                                    text: "同意并继续",
                                    callback: function () {
                                      n.setState({
                                        isNoticeChosen: !0,
                                        isShowConfirmModal: !0,
                                      }),
                                        n.ubtTrace(
                                          "FltDickerHome_PayConfirmPop_Exposure",
                                          { pageid: n.pageId }
                                        );
                                    },
                                  }
                                ),
                                !1)
                              : void h().showToast({ title: "请勾选同意须知" }))
                          : (h().showToast({ title: "请输入正确的手机号码" }),
                            !1);
                      }),
                      (0, d.Z)(
                        (0, a.Z)(n),
                        "goPay",
                        S.Z.throttle(function () {
                          n.ubtTrace("FltDickerHome_PayConfirmPop_Pay_Click", {
                            pageid: n.pageId,
                          });
                          var e = n.state,
                            t = e.departCity,
                            i = e.arriveCity,
                            o = e.selectDates,
                            r = e.lowestPriceFlightInfo,
                            l = e.priceRange,
                            a = e.selectPriceStatus,
                            c = e.chosenPassengers,
                            s = e.adultFuelTax,
                            d = e.selectFlights,
                            g = e.adultConstructionTax,
                            u = {
                              departureCityCode: t.code,
                              arrivalCityCode: i.code,
                              acceptablePrice: l[a],
                              contactPhone: n.contactPhone,
                              historyPrice: r.lowestPrice,
                              historyPriceDate: r.lowestPriceDate,
                              specifiedFlights:
                                null != d
                                  ? d
                                  : o.map(function (e) {
                                      return {
                                        departureDate: e,
                                        flightNumbers: null,
                                      };
                                    }),
                              passengers: c.map(function (e) {
                                return {
                                  passengerName: e.passengerName,
                                  passengerType: e.passengerType,
                                  passengerPhone: e.mobile,
                                  birth: e.passengerBirth,
                                  identityType: e.passportType,
                                  identityNo: e.passportCode,
                                };
                              }),
                              adultConstructionTax: g,
                              adultFuelTax: s,
                            };
                          (0, y.JZ)({ data: u })
                            .then(function (e) {
                              1 === e.resultCode && null != e && e.data
                                ? (0, y.aP)({
                                    data: { orderNumber: e.data.orderNumber },
                                  }).then(function (t) {
                                    1 == (null == t ? void 0 : t.resultCode)
                                      ? (0, T.ce)(
                                          {
                                            orderNumber: e.data.orderNumber,
                                            goodsId: t.data.goodsId,
                                          },
                                          function () {
                                            console.log("成功"),
                                              setTimeout(function () {
                                                (0,
                                                T.Xb)(e.data.orderNumber, !0);
                                              }, 1e3);
                                          }
                                        )
                                      : (0, _.v)(
                                          "",
                                          (null == t
                                            ? void 0
                                            : t.resultMessage) ||
                                            "网络异常，请稍候再试"
                                        );
                                  })
                                : (0, _.v)(
                                    "",
                                    (null == e ? void 0 : e.resultMessage) ||
                                      "网络异常，请稍候再试"
                                  );
                            })
                            .catch(function (e) {
                              (0,
                              _.v)("", (null == e ? void 0 : e.message) || "网络异常，请稍候再试");
                            });
                        })
                      ),
                      (0, d.Z)((0, a.Z)(n), "onClickNext", function () {
                        n.validInfo() &&
                          (!n.state.isShowConfirmModal &&
                            n.setState({ isShowConfirmModal: !0 }),
                          n.ubtTrace("FltDickerHome_PayConfirmPop_Exposure", {
                            pageid: n.pageId,
                          }));
                      }),
                      (0, d.Z)((0, a.Z)(n), "getBottomView", function () {
                        var e = n.state,
                          t = e.isShowPriceInfo,
                          i = e.priceRange,
                          o = e.chosenPassengers,
                          r = e.selectPriceStatus,
                          l = e.adultFuelTax,
                          a = e.adultConstructionTax,
                          c = e.preferentialZone,
                          s = e.isEmptyOrError,
                          d = F(i[r], o, l, a, c, s);
                        return (0,
                        b.tZ)(te, { totalPrice: d, isShowPriceInfo: t, togglePriceInfo: n.togglePriceInfo, onClickNext: n.onClickNext, preferentialZone: c });
                      }),
                      (n.state = {
                        departCity: {
                          name: "上海",
                          code: "SHA",
                          locationType: 0,
                          globalCity: !1,
                        },
                        arriveCity: {
                          name: "西安",
                          code: "SIA",
                          locationType: 0,
                          globalCity: !1,
                        },
                        selectDates: [m()().add(1, "day").format("YYYY-MM-DD")],
                        isShowPriceInfo: !1,
                        showModal: !1,
                        lowestPriceFlightInfo: null,
                        priceRange: [0, 0, 0],
                        adultConstructionTax: 100,
                        adultFuelTax: 100,
                        noticeContent: "",
                        remark: "",
                        preferentialZone: null,
                        confirmNotice: "",
                        minSpecifiedFlightCount: 1,
                        selectPriceStatus: 2,
                        chosenPassengers: [],
                        isShowConfirmModal: !1,
                        selectFlights: null,
                        isEmptyOrError: !1,
                        isShowGuideModal: !1,
                        isLogin: !0,
                        isNoticeChosen: !1,
                        notShowAirlines: [],
                        departHourLimit: 8,
                      }),
                      (n.allFlights = null),
                      n
                    );
                  }
                  return (
                    (0, l.Z)(i, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          var e,
                            t = this,
                            i = (0, u.getCurrentInstance)();
                          if (i && i.router && i.router.params)
                            if (
                              (console.log(i.router.params),
                              console.log(this.props.page),
                              null !== (e = i.router.params) &&
                                void 0 !== e &&
                                e.initData)
                            ) {
                              var n,
                                o,
                                r,
                                l,
                                a = JSON.parse(
                                  null === (n = i.router.params) || void 0 === n
                                    ? void 0
                                    : n.initData
                                );
                              console.log("initData", a),
                                this.setState(
                                  {
                                    departCity:
                                      null !==
                                        (o =
                                          null == a ? void 0 : a.departCity) &&
                                      void 0 !== o
                                        ? o
                                        : {
                                            name: "上海",
                                            code: "SHA",
                                            locationType: 0,
                                            globalCity: !1,
                                          },
                                    arriveCity:
                                      null !==
                                        (r =
                                          null == a ? void 0 : a.arriveCity) &&
                                      void 0 !== r
                                        ? r
                                        : {
                                            name: "西安",
                                            code: "SIA",
                                            locationType: 0,
                                            globalCity: !1,
                                          },
                                    selectDates:
                                      null !==
                                        (l =
                                          null == a ? void 0 : a.selectDates) &&
                                      void 0 !== l
                                        ? l
                                        : [
                                            m()()
                                              .add(1, "day")
                                              .format("YYYY-MM-DD"),
                                          ],
                                  },
                                  function () {
                                    t.init();
                                  }
                                );
                            } else
                              try {
                                var c = h().getStorageSync(ve);
                                if (
                                  (console.log("inputStorageInfo", c),
                                  S.Z.isEmptyObject(c))
                                )
                                  this.init();
                                else {
                                  var s,
                                    d,
                                    g =
                                      null == c ||
                                      null === (s = c.selectDates) ||
                                      void 0 === s
                                        ? void 0
                                        : s.some(function (e) {
                                            return (
                                              new Date(e).getTime() <
                                              new Date().setHours(0, 0, 0, 0)
                                            );
                                          });
                                  this.setState(
                                    {
                                      departCity: S.Z.isEmptyObject(
                                        null == c ? void 0 : c.departCity
                                      )
                                        ? {
                                            name: "上海",
                                            code: "SHA",
                                            locationType: 0,
                                            globalCity: !1,
                                          }
                                        : null == c
                                        ? void 0
                                        : c.departCity,
                                      arriveCity: S.Z.isEmptyObject(
                                        null == c ? void 0 : c.arriveCity
                                      )
                                        ? {
                                            name: "西安",
                                            code: "SIA",
                                            locationType: 0,
                                            globalCity: !1,
                                          }
                                        : null == c
                                        ? void 0
                                        : c.arriveCity,
                                      selectDates: g
                                        ? [
                                            m()()
                                              .add(1, "day")
                                              .format("YYYY-MM-DD"),
                                          ]
                                        : null !==
                                            (d =
                                              null == c
                                                ? void 0
                                                : c.selectDates) && void 0 !== d
                                        ? d
                                        : [
                                            m()()
                                              .add(1, "day")
                                              .format("YYYY-MM-DD"),
                                          ],
                                    },
                                    function () {
                                      t.init();
                                    }
                                  );
                                }
                              } catch (e) {
                                this.init();
                              }
                          try {
                            var f = h().getStorageSync(Ie);
                            console.log(f),
                              null != f && f.hasShow
                                ? console.log("hasShow")
                                : (this.setState({ isShowGuideModal: !0 }),
                                  console.log("noHasShow"),
                                  h().setStorageSync(Ie, { hasShow: !0 }));
                          } catch (e) {
                            console.log(e);
                          }
                        },
                      },
                      {
                        key: "getPageId",
                        value: function () {
                          return this.pageId;
                        },
                      },
                      {
                        key: "init",
                        value: function () {
                          var e = this;
                          this.surprisedGrabPriceRecommend({
                            departureCityCode: this.state.departCity.code,
                            arrivalCityCode: this.state.arriveCity.code,
                            specifiedFlights: this.state.selectDates.map(
                              function (e) {
                                return {
                                  departureDate: e,
                                  flightNumbers: null,
                                };
                              }
                            ),
                            lowestPriceFlightInfo: null,
                          }),
                            (0, xe.bG)(function (t) {
                              e.contactPhone =
                                (null == t ? void 0 : t.bindedMobilePhone) ||
                                (null == t ? void 0 : t.mobilephone) ||
                                (null == t ? void 0 : t.userName) ||
                                "";
                            });
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this,
                            t = this.state,
                            i = t.departCity,
                            n = t.arriveCity,
                            r = t.selectDates,
                            l = (t.showModal, t.isShowPriceInfo),
                            a = t.lowestPriceFlightInfo,
                            c = t.priceRange,
                            s = t.selectPriceStatus,
                            d = t.chosenPassengers,
                            g = t.adultFuelTax,
                            u = t.adultConstructionTax,
                            h = t.preferentialZone,
                            p = t.isShowConfirmModal,
                            m = t.selectFlights,
                            y = t.remark,
                            C = t.noticeContent,
                            Z = t.confirmNotice,
                            x = t.isEmptyOrError,
                            T = t.isShowGuideModal,
                            S = t.isLogin,
                            I = t.isNoticeChosen,
                            v = P(c[s], d, g, u, h),
                            D = F(c[s], d, g, u, h, x);
                          return (0, b.BX)(f.View, {
                            style: Re.container,
                            children: [
                              (0, b.tZ)(f.Image, {
                                src: "https://images3.c-ctrip.com/ztrip/zhixingios/huanjiading/shezhiye_bg@3x.png",
                                style: (0, o.Z)({}, Re.bgImg),
                              }),
                              (0, b.tZ)(w, {}),
                              (0, b.BX)(f.ScrollView, {
                                contentContainerStyle: { paddingBottom: 200 },
                                style: {
                                  zIndex: 2,
                                  paddingBottom: 200,
                                  flex: 1,
                                },
                                scrollY: !0,
                                children: [
                                  (0, b.BX)(f.View, {
                                    style: (0, o.Z)({}, Re.headTitle),
                                    children: [
                                      (0, b.BX)(f.View, {
                                        style: {
                                          display: "flex",
                                          flexDirection: "column",
                                        },
                                        children: [
                                          (0, b.tZ)(f.Image, {
                                            src: "https://images3.c-ctrip.com/ztrip/zhixingios/huanjiading/huanjiading_ziti@3x.png",
                                            style: Re.titleIcon,
                                          }),
                                          (0, b.tZ)(f.Text, {
                                            style: Re.subTitle,
                                            children:
                                              "任选航班惊喜飞，比最低还要低",
                                          }),
                                        ],
                                      }),
                                      (0, b.tZ)(f.Image, {
                                        src: "https://images3.c-ctrip.com/ztrip/zhixingios/huanjiading/peitu_jinxifei.png",
                                        style: { width: 106, height: 74 },
                                      }),
                                    ],
                                  }),
                                  (0, b.tZ)(z, {
                                    departCity: i,
                                    arriveCity: n,
                                    selectDates: r,
                                    selectFlights: m,
                                    isEmptyOrError: x,
                                    lowestPriceFlightInfo: a,
                                    onSelectFlight: this.onSelectedFlight,
                                    onSelectCity: this.onSelectedCity,
                                    onSelectDate: this.onSelectedDate,
                                  }),
                                  !x &&
                                    (0, b.tZ)(A, {
                                      onSelectedPrice: this.onSelectedPrice,
                                      selectPriceStatus:
                                        this.state.selectPriceStatus,
                                      lowestPrice:
                                        (null == a ? void 0 : a.lowestPrice) ||
                                        0,
                                      priceRange: c,
                                    }),
                                  (0, b.tZ)(Q, {
                                    isLogin: S,
                                    onPassengerChange: this.onPassengerChange,
                                  }),
                                  (0, b.tZ)(ce, {
                                    contactPhone: this.contactPhone,
                                    onChangeContactPhone:
                                      this.onChangeContactPhone,
                                  }),
                                  !x &&
                                    (0, b.tZ)(re, {
                                      noticeContent: C,
                                      remark: y,
                                      isNoticeChosen: I,
                                      onChangeNoticeChosen:
                                        this.onChangeNoticeChosen,
                                    }),
                                ],
                              }),
                              (0, b.tZ)(ge, { preferentialZone: h }),
                              this.getBottomView(),
                              (0, b.tZ)(ye, {
                                priceList: v,
                                isShowPriceInfo: l,
                                togglePriceInfo: this.togglePriceInfo,
                              }),
                              (0, b.tZ)(fe, {
                                goPay: this.goPay,
                                totalPrice: D,
                                confirmNotice: Z,
                                isShowConfirmModal: p,
                                toggleShowConfirmModal:
                                  this.toggleSowConfirmModal,
                              }),
                              (0, b.tZ)(Pe, {
                                isShowGuideModal: T,
                                toggleShowGuideModal: function () {
                                  e.setState({
                                    isShowGuideModal: !e.state.isShowGuideModal,
                                  });
                                },
                              }),
                              (0, b.tZ)(Te.Z, {
                                ref: function (t) {
                                  e.onDialogAttach(t);
                                },
                              }),
                              (0, b.tZ)(we.Z, {
                                ref: function (t) {
                                  e.onDrawerAttach(t);
                                },
                              }),
                            ],
                          });
                        },
                      },
                    ]),
                    i
                  );
                })(g.Component))
              ) || O,
            Re = (0, v.lW)({
              container: {
                display: "flex",
                flexDirection: "column",
                flex: 1,
                backgroundColor: "#f5f5f5",
              },
              bgImg: {
                width: Be.windowWidth,
                height: 240,
                position: "absolute",
              },
              headTitle: {
                marginLeft: 20,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                display: "flex",
              },
              titleIcon: { width: 127, height: 20 },
              subTitle: {
                fontSize: 12,
                color: "#730303",
                lineHeight: 17,
                marginTop: 5,
              },
            }),
            ke = ze;
          Page(
            (0, n.createPageConfig)(
              ke,
              "pages/taroCRN/flight/pages/surpriseGrabInput/index",
              { root: { cn: [] } },
              {
                navigationBarTitleText: "惊喜飞",
                navigationStyle: "custom",
                navigationBarBackgroundColor: "#198CFF",
              } || {}
            )
          );
        },
      },
      function (e) {
        e.O(
          0,
          [
            98946, 3322, 36332, 95854, 7160, 83004, 59188, 35048, 70486, 97709,
            6189, 22843, 6878, 71229, 10313, 19559, 11216, 68592,
          ],
          function () {
            return (function (t) {
              return e((e.s = t));
            })(3354);
          }
        ),
          e.O();
      },
    ]);
})();
