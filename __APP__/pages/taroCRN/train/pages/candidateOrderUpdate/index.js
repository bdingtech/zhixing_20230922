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
    require("../../../sub-common/50e438ce8b6a7c870d3c45a317c0e0e9.js"),
    require("../../../sub-common/c05d54b748281b78c61200d1ba934c17.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [87444],
      {
        72491: function (e, t, n) {
          var i = n(32180),
            o = n(298),
            a = n(57042),
            r = n(24460),
            s = n(81876),
            c = n(21867),
            l = n(86066),
            d = n(45023),
            u = n(52500),
            h = n(92954),
            f = n.n(h),
            m = n(71515),
            g = n(8271),
            p = n.n(g),
            y = n(43884),
            S = n(23577),
            v = n(87298),
            b = n(90582),
            T = n(32970),
            C = n(12806),
            w = n(58374),
            Z = n(82225),
            x = n(94205);
          function _(e) {
            var t = 0,
              n = (function (e) {
                var t = 0,
                  n = (N(e) || [] || []).sort(function (e, t) {
                    var n =
                      (null == e ? void 0 : e.seatPrice) ||
                      (null == e ? void 0 : e.showSeatPrice);
                    return (
                      ((null == t ? void 0 : t.seatPrice) ||
                        (null == t ? void 0 : t.showSeatPrice)) - n
                    );
                  });
                if (n && n.length > 0) {
                  var i = n[0];
                  t =
                    (null == i ? void 0 : i.seatPrice) ||
                    (null == i ? void 0 : i.showSeatPrice) ||
                    0;
                }
                return t;
              })(e);
            console.log("getMaxTicketPrice--\x3echosenTrainSeatMaxPrice：", n);
            var i = (function (e) {
              var t = 0,
                n = 0,
                i = [],
                o = e.state.chooseCrossStations || [];
              console.log(
                "page.state.chooseCrossStations--\x3e",
                JSON.stringify(o)
              );
              for (
                var a = e.state.chosenSeatList || [], r = 0;
                r < o.length;
                r++
              ) {
                for (
                  var s = o[r],
                    c = {
                      recommendDepartStation: s.recommendDepartStation,
                      recommendArriveStation: s.recommendArriveStation,
                      recommendDepartCount: s.recommendDepartCount,
                      recommendArriveCount: s.recommendArriveCount,
                    },
                    l = null,
                    d = null,
                    u = s.extraAmountInfos || [],
                    h = 0;
                  h < u.length;
                  h++
                )
                  for (var f = u[h] || {}, m = 0; m < a.length; m++) {
                    var g = a[m];
                    f.seatType === g &&
                      (f.seatPrice >= t && (t = f.seatPrice),
                      f.amount >= n && (n = f.amount),
                      (null == l || f.amount >= l) && (l = f.amount),
                      (null == d || f.successRate >= d) && (d = f.successRate));
                  }
                null == l && (l = 0),
                  null == d && (d = 0),
                  (c.extraAmount = l),
                  (c.successRate = d),
                  (c.defaultOpen = 1 == s.defaultOpen ? 1 : 0),
                  i.push(c);
              }
              return {
                crossStationSchemeMaxSeatPrice: t,
                crossStationSchemeMaxAmount: n,
                schemesForCreateGrabOrder: i,
              };
            })(e);
            (e.schemesForCreateGrabOrder = i.schemesForCreateGrabOrder || []),
              console.log(
                "getMaxTicketPrice--\x3eschemesForCreateGrabOrder",
                e.schemesForCreateGrabOrder
              );
            var o = i.crossStationSchemeMaxAmount;
            console.log(
              "getMaxTicketPrice--\x3ecrossStationSchemeMaxSeatPrice：",
              o
            ),
              (t = n),
              o > 0 && (t += o),
              console.log("getMaxTicketPrice--\x3emaxTicketPrice", t);
            var a = e.state.payInfo || {},
              r = (e.passengerInfoList && e.passengerInfoList.length) || 1;
            console.log("getMaxTicketPrice--\x3epassengerNum", r);
            var s = t * r;
            console.log("getMaxTicketPrice--\x3etotalMaxTicketPrice", s);
            var c = (null == a ? void 0 : a.payedPrice) || 0;
            if ((console.log("getMaxTicketPrice--\x3epayedPrice", c), c > s))
              return "¥0";
            var l = +s - c;
            if ((l = l.toFixed(2)) > 0) {
              var d = l / r;
              return (d = d.toFixed(2)), "¥".concat(d, "*").concat(r);
            }
            return "¥0";
          }
          function N(e) {
            var t = (function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : [],
                  t = [],
                  n = {};
                return (
                  e.forEach(function (e) {
                    var t;
                    null === (t = e.seatList) ||
                      void 0 === t ||
                      t.forEach(function (e) {
                        n[e.name]
                          ? parseFloat(e.price) > n[e.name].price &&
                            (n[e.name] = {
                              price: parseFloat(e.price),
                              showPrice: Number.parseFloat(e.showPrice),
                            })
                          : (n[e.name] = {
                              price: parseFloat(e.price),
                              showPrice: Number.parseFloat(e.showPrice),
                            });
                      });
                  }),
                  Object.keys(n).forEach(function (e) {
                    t.push((0, o.Z)((0, o.Z)({}, n[e]), {}, { name: e }));
                  }),
                  t
                );
              })(e.state.chosenTrainList || []),
              n = e.state.chosenSeatList,
              i = t.map(function (e) {
                if (n.includes(e.name))
                  return {
                    showSeatPrice: e.showPrice,
                    seatPrice: e.price,
                    seatName: e.name,
                  };
              });
            return (
              console.log("configChooseSeatItemList--\x3e", JSON.stringify(i)),
              i
            );
          }
          function D() {
            for (
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : [],
                t = !1,
                n = 0;
              n < e.length;
              n++
            ) {
              var i = e[n];
              if ("学生票" == i.passengerType) {
                t = !0;
                break;
              }
            }
            return t;
          }
          function P(e, t) {
            var n = e.state.nearStations,
              i = [],
              o = t || [];
            return n && n.length > 0
              ? (console.log("updateNearStation---\x3enearStations", n),
                console.log("updateNearStation---\x3echosenTrainList", o),
                n.forEach(function (e) {
                  var t = (o || []).findIndex(function (t) {
                    return (
                      t.trainNumber === e.trainNumber &&
                      t.departStation === e.departStation &&
                      t.arriveStation === e.arriveStation
                    );
                  });
                  (e.choose = !1), t > -1 && (e.choose = !0), i.push(e);
                }),
                console.log("updateNearStation---\x3enewNearStations", i),
                i)
              : n;
          }
          n(82750), n(10655);
          var I = n(49528),
            L = n(88184),
            B = n(53550),
            A = n(48813),
            k = function (e) {
              return (0, A.tZ)(L.Z, {
                zIndex: 0,
                page: e.page,
                v2: !0,
                titleColor: "#222",
                needHolder: !0,
                title: "升级信息确认",
                pop: function () {
                  (0, h.navigateBack)({ delta: 1 });
                },
                defaultBackButtonColor: "#222222",
                renderLeftView: function () {
                  return (0, A.tZ)(m.View, {
                    id: "AMFC",
                    onClick: function () {
                      (0, h.navigateBack)({ delta: 1 });
                    },
                    children: (0, A.tZ)(B.Z, {
                      style: { fontSize: 24, color: "#222", marginLeft: 15 },
                      children: "󰲚",
                    }),
                  });
                },
                backgroundColor: "transparent",
                propStyle: {
                  title: " font-size: 17px;",
                  icon: "color: black",
                  box: "background: ".concat(
                    S.Z.isTieyou
                      ? "linear-gradient(-180deg, #ACB6E6 0%, #C3CAEB 100%);"
                      : "linear-gradient(-180deg, #B3D2FF 0%, #C6DDFC 100%);",
                    ";color: #222222"
                  ),
                },
              });
            },
            F = function (e) {
              var t = e.fromStation,
                n = e.toStation;
              return (0, A.BX)(m.View, {
                className: " _p _gC",
                children: [
                  (0, A.tZ)(m.Image, {
                    className: " _u _t _q _Hg _Ll",
                    src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/pic_123@3x.png",
                  }),
                  (0, A.BX)(m.View, {
                    className: " _i _Ga _l _db",
                    children: [
                      (0, A.tZ)(m.Text, { className: " _sb _jv", children: t }),
                      (0, A.tZ)(m.Image, {
                        className: " _Dm _Ye _Po",
                        src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/icon_djt@3x.png",
                      }),
                      (0, A.tZ)(m.Text, { className: " _sb _jv", children: n }),
                    ],
                  }),
                  (0, A.tZ)(m.Text, {
                    className: " _cg _hC _G",
                    children: "双通道抢票: 余票监控+候补购票",
                  }),
                ],
              });
            },
            R = function (e) {
              var t = e.className,
                n = e.style,
                i = e.showContent,
                o = e.sliderWidth,
                a = e.itemWidth,
                r = e.onIndexChange;
              return (0, A.tZ)(m.Swiper, {
                className: t,
                style: n,
                vertical: !1,
                snapToEdge: !0,
                nextMargin: "".concat(2 * (o - a), "rpx"),
                onChange: function (e) {
                  var t = e.detail.current;
                  null == r || r(t);
                },
                children: i.map(function (e, t) {
                  return (0, A.tZ)(m.SwiperItem, { children: e }, t);
                }),
              });
            },
            V = !1,
            j = [
              "fontSize",
              "lineHeight",
              "letterSpacing",
              "width",
              "minWidth",
              "maxWidth",
              "height",
              "minHeight",
              "maxHeight",
              "top",
              "bottom",
              "left",
              "right",
              "margin",
              "marginBottom",
              "marginTop",
              "marginLeft",
              "marginRight",
              "padding",
              "paddingBottom",
              "paddingTop",
              "paddingLeft",
              "paddingRight",
              "borderWidth",
              "borderTopWidth",
              "borderRightWidth",
              "borderBottomWidth",
              "borderLeftWidth",
              "borderRadius",
              "borderTopLeftRadius",
              "borderTopRightRadius",
              "borderBottomLeftRadius",
              "borderBottomRightRadius",
              "transform",
              "flexBasis",
            ];
          function O(e) {
            return (
              Object.keys(e).forEach(function (t) {
                j.includes(t) &&
                  ("[object Number]" === Object.prototype.toString.call(e[t])
                    ? (e[t] = 2 * e[t] + "rpx")
                    : "transform" === t &&
                      (e[t] = (function (e) {
                        if (!Array.isArray(e)) return e;
                        var t = "";
                        return (
                          e.forEach(function (e) {
                            var n = Object.keys(e) || [];
                            "[object Number]" ===
                            Object.prototype.toString.call(e[n[0]])
                              ? (t += ""
                                  .concat(n[0], "(")
                                  .concat(2 * e[n[0]], "rpx) "))
                              : (t += ""
                                  .concat(n[0], "(")
                                  .concat(e[n[0]], ") "));
                          }),
                          t
                        );
                      })(e[t])));
              }),
              e
            );
          }
          function z(e) {
            if (V) return e;
            var t = {};
            return (
              Array.isArray(e)
                ? e.forEach(function (e) {
                    Object.assign(t, e);
                  })
                : Object.assign(t, e),
              O(t)
            );
          }
          var G = function (e) {
              return (
                V ||
                  (Object.keys(e).forEach(function (t) {
                    e[t] = O(e[t]);
                  }),
                  console.log(e)),
                e
              );
            },
            X = function (e) {
              var t = e.colors,
                n = e.miniDirection,
                i = e.className,
                a = void 0 === i ? "" : i,
                r = e.style,
                s = void 0 === r ? {} : r,
                c = e.children,
                l = "-180deg";
              if (
                ("Y" === n
                  ? (l = "-180deg")
                  : "X" === n
                  ? (l = "90deg")
                  : "-X" === n && (l = "270deg"),
                t && t.length > 0)
              ) {
                var d = t[0],
                  u = t[1];
                return (0, A.tZ)(m.View, {
                  className: a,
                  style: (0, o.Z)(
                    {
                      background: "linear-gradient("
                        .concat(l, ", ")
                        .concat(d, " 0%, ")
                        .concat(u, " 100%)"),
                    },
                    s
                  ),
                  children: c,
                });
              }
              return (0, A.tZ)(m.View, { className: a, children: c });
            },
            E = "#3C5A86",
            M = "#B7C5D9",
            W = function (e) {
              var t = e.recommendArriveCount,
                n = e.recommendArriveStation,
                i = e.recommendDepartCount,
                o = e.recommendDepartStation,
                a = e.originalArriveStation,
                r = e.originalDepartStation,
                s = function (e) {
                  return (0, A.tZ)(m.View, { style: z(e) });
                },
                c = function (e, t) {
                  return (0, A.tZ)(m.View, {
                    style: z(t),
                    children: (0, A.tZ)(m.Text, {
                      style: U.squareText,
                      children: e,
                    }),
                  });
                },
                l = function (e) {
                  return (0, A.tZ)(m.View, {
                    style: {
                      display: "flex",
                      borderTopStyle: "dashed",
                      borderTopColor: "#B5D8FA",
                      borderTopWidth: 0.5,
                      borderBottomWidth: 0,
                      width: e,
                    },
                  });
                },
                d = function () {
                  var t,
                    n,
                    i =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 0,
                    o =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : 0,
                    a = [];
                  i > 0
                    ? a.unshift("多买".concat(i, "站"))
                    : i < 0 && a.unshift("少买".concat(Math.abs(i), "站")),
                    o > 0
                      ? a.push("多买".concat(o, "站"))
                      : o < 0 && a.push("少买".concat(Math.abs(o), "站")),
                    2 === a.length
                      ? ((t = i > 0 ? 20 : 30), (n = o > 0 ? 18 : 31))
                      : 0 !== i
                      ? (t = i > 0 ? 35 : 47)
                      : 0 !== o && (n = o > 0 ? 37 : 52);
                  var r = e.innerStyle || "#F7FAFF",
                    s = -7;
                  return a.length > 1
                    ? (0, A.BX)(A.HY, {
                        children: [
                          (0, A.tZ)(m.View, {
                            style: z([
                              U.tipBg,
                              { left: t, backgroundColor: r, top: s },
                            ]),
                            children: (0, A.tZ)(m.Text, {
                              style: z([U.tip]),
                              children: a[0],
                            }),
                          }),
                          (0, A.tZ)(m.View, {
                            style: z([
                              U.tipBg,
                              { right: n, backgroundColor: r, top: s },
                            ]),
                            children: (0, A.tZ)(m.Text, {
                              style: z([U.tip]),
                              children: a[1],
                            }),
                          }),
                        ],
                      })
                    : (0, A.tZ)(m.View, {
                        style: z([
                          U.tipBg,
                          !!t && { left: t },
                          !!n && { right: n },
                          { top: s, backgroundColor: r },
                        ]),
                        children: (0, A.tZ)(m.Text, {
                          style: U.tip,
                          children: a[0],
                        }),
                      });
                };
              return (0, A.BX)(m.View, {
                style: {
                  flexDirection: "column",
                  position: "relative",
                  marginTop: 2,
                },
                children: [
                  (function () {
                    var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : 0,
                      t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : 0,
                      n = [E],
                      i = [];
                    e > 0
                      ? (n.unshift(M), (i = ["circle", "in"].concat(i)))
                      : e < 0
                      ? (n.unshift("dash"), (i = ["in", "circle"].concat(i)))
                      : i.unshift("in"),
                      t > 0
                        ? (n.push(M), (i = i.concat(["out", "circle"])))
                        : t < 0
                        ? (n.push("dash"), (i = i.concat(["circle", "out"])))
                        : i.push("out");
                    var o = 223 / n.length;
                    return (0, A.BX)(m.View, {
                      style: {
                        position: "relative",
                        width: 223,
                        flexDirection: "row",
                        marginBottom: 11,
                        display: "flex",
                      },
                      children: [
                        n.map(function (e, t) {
                          return (0,
                          A.tZ)(m.View, { style: { flexDirection: "row", display: "flex" }, children: "dash" === e ? l(o) : (0, A.tZ)(m.View, { style: z([U.line, { backgroundColor: e, width: o }]) }) }, t + e);
                        }),
                        i.map(function (e, t) {
                          var n = [{ position: "absolute" }];
                          if (
                            ("circle" === e
                              ? n.push({ top: -3 })
                              : n.push({ top: -7 }),
                            0 === t)
                          )
                            n.push({ left: 0 });
                          else if (t === i.length - 1) n.push({ right: 0 });
                          else {
                            var a = o * t - ("circle" === e ? 3 : 13);
                            n.push({ left: a });
                          }
                          var r = "";
                          return (
                            "in" === e
                              ? (r = "上车")
                              : "out" === e && (r = "下车"),
                            r
                              ? (n.push(U.square), c(r, n))
                              : (n.push(U.circle), s(n))
                          );
                        }),
                        d(e, t),
                      ],
                    });
                  })(i, t),
                  (function () {
                    var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : 0,
                      t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : 0,
                      i = 0 !== e && 0 !== t ? [1, 2, 2, 1] : [1, 2, 1],
                      s = [];
                    return (
                      e > 0
                        ? (s = s.concat([
                            "".concat(o, "-#888"),
                            "".concat(r, "-#222"),
                          ]))
                        : e < 0
                        ? (s = s.concat([
                            "".concat(r, "-#222"),
                            "".concat(o, "-#888"),
                          ]))
                        : s.unshift("".concat(r, "-#222")),
                      t > 0
                        ? (s = s.concat([
                            "".concat(a, "-#222"),
                            "".concat(n, "-#888"),
                          ]))
                        : t < 0
                        ? (s = s.concat([
                            "".concat(n, "-#888"),
                            "".concat(a, "-#222"),
                          ]))
                        : s.push("".concat(a, "-#222")),
                      (0, A.tZ)(m.View, {
                        style: {
                          width: 223,
                          flexDirection: "row",
                          justifyContent: "space-between",
                          display: "flex",
                          marginTop: 1,
                        },
                        children: s.map(function () {
                          var e,
                            t,
                            n =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : "",
                            o = arguments.length > 1 ? arguments[1] : void 0;
                          return (0,
                          A.tZ)(m.Text, { numberOfLines: 1, style: z([U.station, { flex: i[o], color: (null === (e = n.split("-")) || void 0 === e ? void 0 : e[1]) || "#222" }, i[o] > 1 && { textAlign: "center", paddingRight: 0 }, 0 === o && { textAlign: "left" }]), children: null === (t = n.split("-")) || void 0 === t ? void 0 : t[0] }, n);
                        }),
                      })
                    );
                  })(i, t),
                ],
              });
            },
            U = G({
              circle: {
                width: 7,
                height: 7,
                borderWidth: 1,
                borderColor: "#b7c5d9",
                borderRadius: 3,
                borderStyle: "solid",
                zIndex: 2,
                backgroundColor: "#F4F8FF",
                display: "flex",
                flexDirection: "column",
              },
              square: {
                width: 26,
                height: 14,
                borderRadius: 5,
                borderWidth: 0.5,
                borderColor: E,
                borderStyle: "solid",
                backgroundColor: "#F4F8FF",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                flexDirection: "row",
              },
              squareText: {
                fontSize: 9,
                color: E,
                fontWeight: "500",
                fontFamily: "PingFangSC-Medium",
              },
              lightLineView: {
                flexDirection: "row",
                overflow: "hidden",
                justifyContent: "center",
              },
              lightLine: {
                backgroundColor: "#3C5A86",
                marginRight: 2,
                width: "100%",
                height: 0.5,
              },
              line: { height: 0.5 },
              dashView: {
                flexDirection: "row",
                overflow: "hidden",
                justifyContent: "center",
                display: "flex",
              },
              dashLine: {
                backgroundColor: M,
                marginRight: 2,
                width: 1,
                height: 0.5,
              },
              station: { fontSize: 11, color: "#222", textAlign: "right" },
              tipBg: {
                position: "absolute",
                top: -5,
                zIndex: 2,
                flexDirection: "column",
                display: "flex",
              },
              tip: {
                textAlign: "center",
                fontSize: 11,
                color: E,
                fontFamily: "PingFangSC-Regular",
                fontWeight: "normal",
                backgroundColor: "#f5faff",
              },
            }),
            q = function (e) {
              var t = e.innerStyle,
                n = void 0 !== t && t,
                i = (e.fixedPosition, e.style),
                o = void 0 === i ? {} : i,
                a = e.hasChosen,
                r =
                  "https://images3.c-ctrip.com/ztrip/train.song/order_details/V10.0/txy/btn_yx@3x.webp";
              return (
                (void 0 !== a && a) ||
                  (r =
                    "https://images3.c-ctrip.com/ztrip/train.song/order_details/V10.0/txy/btn_wx@3x.webp"),
                (0, A.tZ)(m.View, {
                  style: z([
                    {
                      position: "absolute",
                      top: n ? 34 : 48,
                      right: n ? 10 : 6,
                    },
                    o,
                    { display: "flex", width: 40, height: 100 },
                  ]),
                  onClick: function () {
                    var t;
                    null === (t = e.changeAction) || void 0 === t || t.call(e);
                  },
                  children: (0, A.tZ)(m.Image, {
                    webp: !0,
                    style: { width: 20, height: 20, marginLeft: 20 },
                    src: r,
                  }),
                })
              );
            },
            H = (G({}), n(74921)),
            Y = n(34229),
            J = ["children", "style"],
            K = u.default.memo(function (e) {
              var t = e.children,
                n = e.style,
                i = (0, H.Z)(e, J);
              return (0,
              A.tZ)(Y.ZtRichLinkText, (0, o.Z)({ nodes: t, style: n }, i));
            }),
            Q = function (e) {
              return (0, A.BX)(m.View, {
                onClick: function () {
                  e && e();
                },
                style: {
                  flexDirection: "row",
                  alignItems: "center",
                  marginLeft: 4,
                  marginTop: 0,
                  display: "flex",
                },
                children: [
                  (0, A.tZ)(m.Text, {
                    style: { fontSize: 10, color: "#FF5959" },
                    children: "提示",
                  }),
                  (0, A.tZ)(m.Image, {
                    src: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/23_09/icon_12_describe.webp",
                    style: { width: 12, height: 12 },
                  }),
                ],
              });
            },
            $ = function (e) {
              var t = e.title,
                n = e.tag,
                i = e.innerStyle,
                a = e.moreAction,
                r = e.outerStyle,
                s = void 0 === r ? {} : r;
              return (0, A.BX)(m.View, {
                style: z([
                  te.rowCenter,
                  i ? { marginBottom: 15 } : { marginBottom: 18 },
                  { justifyContent: "space-between" },
                  s,
                ]),
                children: [
                  (0, A.BX)(m.View, {
                    style: te.rowCenter,
                    children: [
                      (0, A.tZ)(m.Text, { style: te.title, children: t }),
                      !!n &&
                        (0, A.tZ)(m.View, {
                          style: te.tag,
                          children: (0, A.tZ)(m.Text, {
                            style: te.tagText,
                            children: n,
                          }),
                        }),
                      !!e.showTip && Q(e.showTipAction),
                    ],
                  }),
                  !i &&
                    (0, A.BX)(m.View, {
                      style: z(
                        (0, o.Z)(
                          (0, o.Z)({}, te.rowCenter),
                          {},
                          { marginRight: -3 }
                        )
                      ),
                      onClick: function () {
                        return null == a ? void 0 : a();
                      },
                      children: [
                        (0, A.tZ)(m.Text, {
                          style: {
                            color: "#198CFF",
                            fontSize: 16,
                            includeFontPadding: !1,
                          },
                          children: "多选",
                        }),
                        (0, A.tZ)(m.Text, {
                          style: {
                            fontSize: 12,
                            color: "#198CFF",
                            fontFamily: "zt_font_common2",
                          },
                          children: "󰲧",
                        }),
                      ],
                    }),
                ],
              });
            },
            ee = function (e) {
              var t = !!e.innerStyle || !1,
                n = e.recommendDepartCount < 0 || e.recommendArriveCount < 0;
              return (0, A.BX)(X, {
                start: { x: 1, y: 0 },
                end: { x: 0, y: 0 },
                colors: t
                  ? ["#f5faff", "#f5faff"]
                  : ["rgb(250, 252, 255)", "rgb(244, 248, 255)"],
                locations: [0, 1],
                style: z([
                  te.container,
                  t && { paddingLeft: 8, paddingTop: 12, paddingBottom: 10 },
                  (null == e ? void 0 : e.outerStyle) &&
                    (null == e ? void 0 : e.outerStyle),
                  { position: "relative" },
                ]),
                children: [
                  $({
                    title: e.title,
                    tag: e.tag,
                    innerStyle: t,
                    moreAction: e.moreAction,
                    showTip: n,
                    showTipAction: e.showTipAction,
                  }),
                  (0, A.tZ)(W, (0, o.Z)({}, e)),
                  (0, A.tZ)(K, { style: te.desc, children: e.desc }),
                  (0, A.tZ)(q, {
                    changeAction: e.chooseAction,
                    hasChosen: !!e.defaultOpen,
                    outerChange: e.outerChange,
                    outerFlag: e.outerFlag,
                    innerStyle: e.innerStyle,
                    style: { right: 8, top: 49 },
                  }),
                ],
              });
            },
            te = G({
              title: {
                height: 18,
                color: "#555555",
                fontSize: 14,
                fontFamily: "PingFangSC-Regular",
                fontWeight: "normal",
                display: "flex",
              },
              tag: {
                height: 14,
                borderColor: "#ff5959",
                borderRadius: 4,
                borderWidth: 0.5,
                paddingLeft: 4,
                paddingRight: 4,
                paddingTop: 1,
                paddingBottom: 1,
                marginLeft: 4,
                borderStyle: "solid",
                display: "flex",
                marginTop: 0,
              },
              tagText: { fontSize: 9, color: "#ff5959", display: "flex" },
              desc: {
                fontSize: 11,
                color: "#666",
                marginTop: 9,
                display: "flex",
              },
              rowCenter: {
                flexDirection: "row",
                alignItems: "center",
                display: "flex",
              },
              container: {
                borderRadius: 10,
                backgroundColor: "#f8f8f8",
                paddingTop: 12,
                paddingBottom: 8,
                paddingLeft: 8,
                paddingRight: 11,
                marginLeft: 8,
                marginRight: 8,
                marginBottom: 4,
                marginTop: 4,
                display: "flex",
                flexDirection: "column",
              },
              arrowImg: {
                marginLeft: 1,
                width: 10,
                height: 10,
                tintColor: "#198CFF",
                display: "flex",
              },
            }),
            ne = function (e) {
              return (0, A.BX)(m.View, {
                style: ie.container,
                children: [
                  $({
                    title: e.title,
                    tag: e.tag,
                    outerStyle: { marginBottom: 10 },
                    innerStyle: !0,
                    greenTag: e.subTitle,
                  }),
                  (0, A.BX)(m.View, {
                    style: ie.content,
                    children: [
                      (0, A.BX)(m.View, {
                        style: {
                          flexDirection: "column",
                          justifyContent: "center",
                          display: "flex",
                        },
                        children: [
                          (0, A.tZ)(m.Text, {
                            style: ie.time,
                            children: e.departTime,
                          }),
                          (0, A.tZ)(m.Text, {
                            style: ie.fromStation,
                            children: e.departStation,
                          }),
                        ],
                      }),
                      (0, A.BX)(m.View, {
                        style: {
                          alignItems: "center",
                          flexDirection: "column",
                          display: "flex",
                        },
                        children: [
                          (0, A.tZ)(m.Text, {
                            style: ie.desc,
                            children: e.costTime,
                          }),
                          (0, A.tZ)(m.Image, {
                            src: "https://images3.c-ctrip.com/ztrip/train_snow/2023_03/icon_ht_lb@3x.png",
                            style: ie.arrow,
                          }),
                          (0, A.tZ)(m.Text, {
                            style: ie.desc,
                            children: e.trainNumber,
                          }),
                        ],
                      }),
                      (0, A.BX)(m.View, {
                        style: {
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "flex-end",
                          display: "flex",
                        },
                        children: [
                          (0, A.tZ)(m.Text, {
                            style: ie.toTime,
                            children: e.arriveTime,
                          }),
                          (0, A.tZ)(m.Text, {
                            style: ie.toStation,
                            children: e.arriveStation,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, A.tZ)(q, {
                    style: { right: 8, top: 49 },
                    changeAction: e.chooseAction,
                    hasChosen: !!e.defaultOpen,
                    innerStyle: !0,
                  }),
                ],
              });
            },
            ie = G({
              container: {
                borderRadius: 12,
                paddingTop: 12,
                paddingBottom: 13,
                paddingLeft: 8,
                marginRight: 8,
                marginTop: 4,
                marginBottom: 0,
                flexDirection: "column",
                display: "flex",
                backgroundColor: "#f5faff",
                position: "relative",
              },
              content: {
                width: 233,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                display: "flex",
              },
              time: {
                height: 22,
                color: "#222222",
                fontSize: 18,
                fontFamily: "ZX-Regular",
                fontWeight: "normal",
                marginBottom: 1,
                textAlign: "left",
                display: "flex",
              },
              toTime: {
                height: 22,
                color: "#222222",
                fontSize: 18,
                fontFamily: "ZX-Regular",
                fontWeight: "normal",
                marginBottom: 1,
                textAlign: "right",
                display: "flex",
              },
              fromStation: {
                height: 16,
                color: "#222222",
                fontSize: 12,
                fontFamily: "PingFangSC-Regular",
                fontWeight: "normal",
                textAlign: "left",
                display: "flex",
              },
              toStation: {
                height: 16,
                color: "#222222",
                fontSize: 12,
                fontFamily: "PingFangSC-Regular",
                fontWeight: "normal",
                textAlign: "right",
                display: "flex",
              },
              desc: {
                height: 16,
                color: "#999999",
                fontSize: 11,
                fontFamily: "PingFangSC-Regular",
                fontWeight: "normal",
                display: "flex",
              },
              arrow: {
                width: 56,
                height: 4,
                marginTop: 1,
                marginBottom: 1,
                display: "flex",
              },
            }),
            oe = f().getSystemInfoSync(),
            ae = S.Z.isCRN ? oe.windowWidth : "750rpx",
            re = S.Z.isCRN ? ae - 32 - 43 + 12 : 622,
            se = S.Z.isCRN ? ae - 32 : 662,
            ce = S.Z.isCRN ? ae - 16 : "692rpx",
            le = S.Z.isCRN ? ae - 16 : "718rpx";
          function de(e, t, n) {
            if (!t || (t && 0 === t.length)) return null;
            e.ubtTrace("TZAGrabAlternateUp_CheciRecPlan_exposure", {
              Pageid: e.pageId,
              channel: S.Z.isCRN ? "App" : "Applets",
            });
            var i = [],
              a = t && 1 == t.length ? re + 43 : re;
            return (
              t.forEach(function (e, t) {
                i.push(
                  (0, u.createElement)(
                    ne,
                    (0, o.Z)(
                      (0, o.Z)({}, e),
                      {},
                      {
                        key: (null == e ? void 0 : e.trainNumber) + t,
                        chooseAction: function () {
                          (e.choose = !e.choose), n && n(e);
                        },
                        defaultOpen: (null == e ? void 0 : e.choose) || !1,
                      }
                    )
                  )
                );
              }),
              (0, A.tZ)(m.View, {
                style: { marginTop: 0, marginBottom: 0 },
                children: (0, A.tZ)(R, {
                  style: {
                    width: ce,
                    height: S.Z.isCRN ? 100 : 105,
                    borderRadius: 8,
                  },
                  showContent: i,
                  sliderWidth: se,
                  itemWidth: a,
                }),
              })
            );
          }
          function ue(e, t, n, i) {
            if (!t || (t && 0 === t.length)) return null;
            e.ubtTrace("TZAGrabAlternateUp_KuaZhanRecPlan_exposure", {
              Pageid: e.pageId,
              channel: S.Z.isCRN ? "App" : "Applets",
            });
            var a = [];
            t.forEach(function (e, r) {
              a.push(
                (0, A.tZ)(
                  ee,
                  (0, o.Z)(
                    (0, o.Z)({}, e),
                    {},
                    {
                      innerStyle: !0,
                      moreAction: function () {},
                      defaultOpen: (null == e ? void 0 : e.choose) || !1,
                      chooseAction: function () {
                        (e.choose = !e.choose), i && i(e);
                      },
                      showTipAction: n,
                      outerStyle: {
                        marginLeft: 0,
                        marginRight: r === t.length - 1 ? 0 : 8,
                      },
                    }
                  )
                )
              );
            });
            var r = t && 1 == t.length ? re + 43 - 8 : re;
            return (0, A.BX)(m.View, {
              style: {
                width: le,
                marginTop: 8,
                marginLeft: 8,
                marginRight: 8,
                backgroundColor: "#fff",
                borderRadius: 12,
                display: "flex",
                flexDirection: "column",
              },
              children: [
                (0, A.tZ)(m.View, {
                  style: {
                    flexDirection: "row",
                    height: 20,
                    marginLeft: 16,
                    marginRight: 16,
                    marginTop: 12,
                    marginBottom: 9,
                  },
                  children: (0, A.tZ)(m.Text, {
                    style: {
                      color: "#222222",
                      fontSize: 16,
                      fontFamily: "PingFangSC-Semibold",
                      fontWeight: "600",
                    },
                    children: "其它方案推荐",
                  }),
                }),
                (0, A.tZ)(R, {
                  style: {
                    marginLeft: 8,
                    width: ce,
                    height: 110,
                    borderRadius: 8,
                    marginBottom: 8,
                  },
                  showContent: a,
                  sliderWidth: se,
                  itemWidth: r,
                }),
              ],
            });
          }
          var he = function (e) {
              var t = e.scope,
                n = e.chosenDateList,
                i = void 0 === n ? [] : n,
                o = e.chosenTrainList,
                a = void 0 === o ? [] : o,
                r = e.chosenSeatList,
                s = void 0 === r ? [] : r,
                c = e.nearStations,
                l = void 0 === c ? [] : c,
                d = e.onClickPlan,
                u = void 0 === d ? function () {} : d,
                h = e.chooseAction,
                f = function (e, t) {
                  var n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : function () {};
                  return (0, A.BX)(m.View, {
                    className: " _Gc _i _Ga _l _XB",
                    id: "AMFH",
                    onClick: n,
                    children: [
                      (0, A.tZ)(m.Text, {
                        className: " _sb _eA _up",
                        children: e,
                      }),
                      (0, A.tZ)(m.Text, {
                        className: " _j _sb _yc _Ti",
                        numberOfLines: 1,
                        style: S.Z.isCRN
                          ? {}
                          : "white-space: nowrap;text-overflow: ellipsis;",
                        children: t || "建议多选",
                      }),
                      (0, A.tZ)(m.Text, {
                        className: " _YB _x _G",
                        children: "多选",
                      }),
                      (0, A.tZ)(B.Z, {
                        className: " _Og _C _x",
                        children: "󰲧",
                      }),
                    ],
                  });
                },
                g = i
                  .map(function (e) {
                    return p()(e).format("M月D日");
                  })
                  .join("/"),
                y = a
                  .map(function (e) {
                    return e.trainNumber;
                  })
                  .join("、"),
                v = s.join("、");
              return (0, A.BX)(m.View, {
                className: " _VB _a _Oa _WB",
                children: [
                  f("出发座席", v, function () {
                    u("SeatSelectionDrawer");
                  }),
                  f("指定车次", y, function () {
                    u("TrainSelectionPage");
                  }),
                  de(t, l, function (e) {
                    h && h(e);
                  }),
                  f("出发日期", g, function () {
                    u("DateSelectionDrawer");
                  }),
                ],
              });
            },
            fe = function (e) {
              var t = e.content,
                n = void 0 === t ? [] : t,
                i = e.value,
                a = e.onChange,
                r = void 0 === a ? function () {} : a;
              return null != n && n.length
                ? (0, A.tZ)(m.View, {
                    className: " _i _Ga _l _m _yb _Vb _Oa _Cc _Dj",
                    children:
                      (null == n ? void 0 : n.length) > 0 &&
                      (0, A.BX)(A.HY, {
                        children: [
                          (0, A.tZ)(m.Text, {
                            className: " _Ma _I _zB",
                            children: "截止时间",
                          }),
                          (0, A.tZ)(m.ScrollView, {
                            scrollX: !0,
                            enableFlex: !0,
                            showScrollbar: !1,
                            className: " _mn _oo _i _mb",
                            style: { width: 247 },
                            children: n.map(function (e, t) {
                              return (0, A.tZ)(
                                m.View,
                                {
                                  id: "AMFV",
                                  className:
                                    " _zB _yd _CB _Za _mb _Mb _i _n _l",
                                  style: (0, o.Z)(
                                    (0, o.Z)(
                                      {},
                                      t > 0 ? { marginLeft: 8 } : {}
                                    ),
                                    i === e.offset
                                      ? {
                                          backgroundColor: "#f9fbff",
                                          borderColor: "#198cff",
                                        }
                                      : {}
                                  ),
                                  onClick: function () {
                                    r(e.offset);
                                  },
                                  children: (0, A.tZ)(m.Text, {
                                    className: " _Xb _Ek",
                                    style:
                                      i === e.offset
                                        ? { color: "#198cff" }
                                        : {},
                                    children: e.tag,
                                  }),
                                },
                                t
                              );
                            }),
                          }),
                        ],
                      }),
                  })
                : (0, A.tZ)(A.HY, {});
            },
            me = function (e) {
              var t = e.changePaymentFlag,
                n = e.title,
                i = e.page,
                o = e.onShowDrawer,
                a = void 0 === o ? function () {} : o;
              return (
                i &&
                  i.ubtTrace &&
                  i.ubtTrace("TZAGrabAlternateUp_PayType_exposure", {
                    PageId: i.pageId,
                    channel: S.Z.isCRN ? "APP" : "Applets",
                  }),
                (0, A.BX)(m.View, {
                  className: " _Dj _Vb _Oa _jk _i _Ga _l",
                  id: "AMFG",
                  onClick: a,
                  children: [
                    (0, A.tZ)(m.Text, {
                      className: " _Ma _I",
                      children: "支付方式",
                    }),
                    (0, A.tZ)(m.Text, {
                      className: " _mn _sb _I _j",
                      children: n || "预付票款",
                    }),
                    1 == t &&
                      (0, A.tZ)(B.Z, {
                        className: " _Og _E _Ma",
                        children: "󰲧",
                      }),
                  ],
                })
              );
            },
            ge = n(92049),
            pe = function (e) {
              var t = e.bottomInfo,
                n = void 0 === t ? {} : t,
                i = e.freeProductsNotation,
                o = e.tips,
                a = void 0 === o ? [] : o,
                r = e.onConfirm,
                s = void 0 === r ? function () {} : r;
              return (0, A.BX)(m.View, {
                className:
                  a && a.length > 0 ? " _xj _DB _k _l _EB" : " _jc _DB _k _l",
                children: [
                  a &&
                    a.length > 0 &&
                    (function (e) {
                      return (0, A.tZ)(m.View, {
                        className: " _HB _IB _k _i _Z _EB",
                        children: (e || []).map(function (e) {
                          return (function (e) {
                            return (0,
                            A.BX)(m.View, { className: " _Ga _l _Gi _i", style: { marginLeft: S.Z.isCRN ? 0 : 16 }, children: [(0, A.tZ)(m.View, { className: " _JB _Pf _KB _LB _MB" }), (0, A.tZ)(m.Text, { className: " _E _Xh _Hp", children: e })] });
                          })(e);
                        }),
                      });
                    })(a || []),
                  (0, A.BX)(m.View, {
                    className: " _jl _Vb _Wb _i _k _l _Z",
                    id: "AMEz",
                    onClick: function () {},
                    children: [
                      (0, A.BX)(m.View, {
                        className: " _p _Z _Gc _w _Oa _i _Ga _n",
                        style: { width: (0, I.u1)((0, I.Y1)() - 16) },
                        id: "AMFA",
                        onClick: s,
                        children: [
                          (0, A.tZ)(m.View, {
                            className: " _Xc _qb _Wc",
                            children: n.buttonName || "支付并升级",
                          }),
                          i &&
                            (0, A.BX)(m.View, {
                              className: " _i _u _t _ni",
                              children: [
                                (0, A.tZ)(m.Image, {
                                  className: " _FB _ug",
                                  src: "https://images3.c-ctrip.com/ztrip/train_snow/2023_06/jxbj@3x.png",
                                }),
                                (0, A.tZ)(m.View, {
                                  className: " _u _GB _li _qb _zy _Ol",
                                  children: i || "",
                                }),
                              ],
                            }),
                        ],
                      }),
                      (0, A.tZ)(ge.Z, {}),
                    ],
                  }),
                ],
              });
            },
            ye = n(81380).Z,
            Se = n(70537).Z,
            ve = n(90129),
            be = f().getSystemInfoSync(),
            Te = S.Z.isCRN ? be.windowWidth : "750rpx",
            Ce = S.Z.isCRN ? Te - 16 : "718rpx",
            we = function (e) {
              e.payedPrice;
              var t = e.tips,
                n = void 0 === t ? [] : t;
              if (n && 0 === n.length) return null;
              var i = (0, u.useState)(!1),
                o = (0, ve.Z)(i, 2),
                a = o[0],
                r = o[1],
                s = _(e.page),
                c = n;
              return (
                !a && n.length > 0 && (c = []).push(n[0]),
                (0, A.BX)(m.View, {
                  style: Ze.bgContent,
                  children: [
                    (0, A.tZ)(m.View, {
                      style: Ze.titleBg,
                      children: (0, A.tZ)(m.Text, {
                        style: Ze.title,
                        children: "支付明细",
                      }),
                    }),
                    (0, A.BX)(m.View, {
                      style: Ze.subBg,
                      children: [
                        (0, A.tZ)(m.View, {
                          children: (0, A.tZ)(m.Text, {
                            style: Ze.subTitle,
                            children: "支付票款",
                          }),
                        }),
                        (0, A.tZ)(m.View, {
                          children: (0, A.tZ)(m.Text, {
                            style: Ze.price,
                            children: "".concat(s),
                          }),
                        }),
                      ],
                    }),
                    (0, A.tZ)(m.View, {
                      style: Ze.desBg,
                      children:
                        c &&
                        c.length > 0 &&
                        c.map(function (e, t) {
                          return (0, A.BX)(m.View, {
                            style: Ze.desBgContent,
                            children: [
                              (0, A.tZ)(m.View, { style: Ze.dot }),
                              (0, A.tZ)(m.Text, {
                                style: Ze.desText,
                                children: e,
                              }),
                              !a &&
                                (0, A.BX)(m.View, {
                                  style: Ze.arrowBg,
                                  id: "AMFD",
                                  onClick: function () {
                                    r(!a);
                                  },
                                  children: [
                                    (0, A.tZ)(m.Text, {
                                      style: Ze.arrowText,
                                      children: "为什么要付款?",
                                    }),
                                    (0, A.tZ)(m.Image, {
                                      style: Ze.arrowImg,
                                      src: "https://images3.c-ctrip.com/ztrip/train_snow/2023_03/icon_gdde@3x.png",
                                    }),
                                  ],
                                }),
                            ],
                          });
                        }),
                    }),
                  ],
                })
              );
            },
            Ze = (0, I.lW)({
              bgContent: {
                width: Ce,
                marginTop: 8,
                marginLeft: 8,
                marginRight: 8,
                backgroundColor: "#fff",
                borderRadius: 12,
                display: "flex",
                flexDirection: "column",
              },
              titleBg: {
                marginLeft: 16,
                marginRight: 16,
                marginTop: 13,
                marginBottom: 16,
                display: "flex",
                backgroundColor: "#fff",
              },
              title: {
                height: 20,
                color: "#222222",
                fontSize: 16,
                fontFamily: "PingFangSC-Semibold",
                fontWeight: "600",
                lineHeight: 20,
              },
              subBg: {
                marginLeft: 16,
                marginRight: 16,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                display: "flex",
                backgroundColor: "#fff",
                marginBottom: 11,
              },
              subTitle: {
                height: 18,
                color: "#666666",
                fontSize: 13,
                fontFamily: "PingFangSC-Regular",
                fontWeight: "normal",
              },
              price: {
                height: 18,
                color: "#000000",
                fontSize: 13,
                fontFamily: "PingFangSC-Regular",
                fontWeight: "normal",
              },
              desBg: {
                backgroundColor: "#f5faff",
                borderRadius: 10,
                paddingLeft: 12,
                paddingRight: 12,
                paddingTop: 8,
                paddingBottom: 8,
                marginBottom: 8,
                justifyContent: "center",
                marginLeft: 16,
                marginRight: 16,
                position: "relative",
              },
              desBgContent: {
                flexDirection: "row",
                justifyContent: "center",
                display: "flex",
              },
              dot: {
                width: 3,
                height: 3,
                backgroundColor: "#666666",
                borderRadius: 2,
                marginTop: 8,
                marginRight: 6,
              },
              desText: {
                color: "#666666",
                fontSize: 12,
                fontFamily: "PingFangSC-Regular",
                fontWeight: "normal",
                lineHeight: 20,
                marginRight: 0,
              },
              arrowBg: {
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
                right: 0,
                bottom: S.Z.isCRN ? 0 : 10,
                display: "flex",
              },
              arrowText: {
                height: 16,
                color: "#198cff",
                fontSize: 11,
                fontFamily: "PingFangSC-Regular",
                fontWeight: "normal",
                marginLeft: 2,
              },
              arrowImg: { marginLeft: 2, width: 12, height: 12 },
            }),
            xe = n(82977),
            _e = n(33003),
            Ne = function (e) {
              var t = (0, _e.c)(e.hide),
                n = t.modalRef,
                i = t.modalClose;
              return e.isShow
                ? (0, A.BX)(xe.Z, {
                    ref: n,
                    hideHeader: !0,
                    enableTapBackground: !0,
                    onCancel: function () {
                      return i();
                    },
                    innerContainerStyle: {
                      display: "flex",
                      backgroundColor: "#fff",
                      borderTopLeftRadius: 20,
                      borderTopRightRadius: 20,
                      overflow: "hidden",
                    },
                    children: [
                      (0, A.tZ)(m.Image, {
                        src: "https://images3.c-ctrip.com/ztrip/train_zhu/img_Ticket_tui_BG_zx.png",
                        style: De.bg,
                      }),
                      (0, A.BX)(m.View, {
                        style: {
                          flexDirection: "column",
                          display: "flex",
                          position: "relative",
                        },
                        children: [
                          (0, A.tZ)(m.Text, {
                            style: De.title,
                            children: "温馨提示",
                          }),
                          (0, A.tZ)(m.Text, {
                            style: De.desc,
                            children:
                              "在客流高峰期，为维护正常的运输秩序和保证列车运行安全，请勿“买短乘长”；若需补票，请上车后及时找列车员补票，如无法补票，请严格遵守铁路相关政策，并配合铁路工作人员的指示。通过“买短乘长”恶意逃票属于违法行为，情节严重者需要承担刑事责任。",
                          }),
                          (0, A.BX)(m.View, {
                            style: De.btn,
                            id: "AMFB",
                            onClick: function () {
                              return i();
                            },
                            children: [
                              (0, A.tZ)(m.Text, {
                                style: {
                                  fontSize: 17,
                                  color: "#198CFF",
                                  fontWeight: "bold",
                                  marginTop: 11,
                                },
                                children: "我知道了",
                              }),
                              (0, A.tZ)(ge.Z, {}),
                            ],
                          }),
                        ],
                      }),
                    ],
                  })
                : (0, A.tZ)(m.View, {});
            },
            De = (0, I.lW)({
              title: {
                fontSize: 20,
                color: "#222",
                fontWeight: "bold",
                lineHeight: 24,
                marginTop: 28,
                alignSelf: "center",
              },
              bg: {
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                width: "100%",
                height: 118.33,
                display: "flex",
              },
              desc: {
                fontSize: 14,
                color: "#666",
                lineHeight: 20,
                marginTop: 12,
                marginRight: 20,
                marginLeft: 20,
                textAlign: "center",
              },
              btn: {
                marginRight: 16,
                marginLeft: 16,
                marginTop: 28,
                marginBottom: 8,
                borderRadius: 12,
                backgroundColor: "#edf6ff",
                height: 44,
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
              },
            }),
            Pe = n(94198),
            Ie = n(79301),
            Le = n(95308);
          function Be() {
            return (Be = (0, Le.Z)(
              (0, Ie.Z)().mark(function e(t, n) {
                return (0, Ie.Z)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )).apply(this, arguments);
          }
          var Ae,
            ke = function (e) {
              return (0, A.tZ)(u.Fragment, {});
            },
            Fe =
              (0, v.h)()(
                (Ae = (function (e) {
                  (0, c.Z)(n, e);
                  var t = (0, l.Z)(n);
                  function n(e) {
                    var i;
                    (0, a.Z)(this, n),
                      (i = t.call(this, e)),
                      (0, d.Z)((0, s.Z)(i), "orderNumber", void 0),
                      (0, d.Z)((0, s.Z)(i), "calendarStartDate", void 0),
                      (0, d.Z)((0, s.Z)(i), "calendarEndDate", void 0),
                      (0, d.Z)((0, s.Z)(i), "departureDate", void 0),
                      (0, d.Z)((0, s.Z)(i), "fromStation", {
                        name: "",
                        code: "",
                      }),
                      (0, d.Z)((0, s.Z)(i), "toStation", {
                        name: "",
                        code: "",
                      }),
                      (0, d.Z)((0, s.Z)(i), "payInfo", void 0),
                      (0, d.Z)(
                        (0, s.Z)(i),
                        "pageId",
                        S.Z.isCRN
                          ? S.Z.isTieyou
                            ? "10650086789"
                            : "10650090378"
                          : "10650086795"
                      ),
                      (0, d.Z)((0, s.Z)(i), "candidateChosenDateList", []),
                      (0, d.Z)((0, s.Z)(i), "candidateChosenTrainList", []),
                      (0, d.Z)((0, s.Z)(i), "candidateChosenSeatList", []),
                      (0, d.Z)((0, s.Z)(i), "newGuestInfo", void 0),
                      (0, d.Z)((0, s.Z)(i), "specificallyGrabInfo", void 0),
                      (0, d.Z)((0, s.Z)(i), "upgradeProductList", []),
                      (0, d.Z)((0, s.Z)(i), "chooseSeatItemList", []),
                      (0, d.Z)((0, s.Z)(i), "orderInfo", void 0),
                      (0, d.Z)((0, s.Z)(i), "schemesForCreateGrabOrder", []),
                      (0, d.Z)((0, s.Z)(i), "passengerInfoList", []),
                      (0, d.Z)((0, s.Z)(i), "shouldCheckCreditPay", !1),
                      (0, d.Z)((0, s.Z)(i), "newPaymentInfo", null),
                      (i.state = {
                        endTimeConfigList: [],
                        chosenDateList: [],
                        chosenTrainList: [],
                        chosenSeatList: [],
                        endTimeOffset: 60,
                        paymentInfo: {
                          name: "预付票款",
                          paymentCode: "",
                          orderPaymentType: 1001,
                        },
                        chooseCrossStations: [],
                        showCrossStationTipDialog: !1,
                        nearStations: [],
                        crossStationsInfos: [],
                        showNewPaymentLayer: !1,
                        defaultPayment: {
                          paymentCode: "",
                          orderPaymentType: 1001,
                          paymentTitle: "预付票款",
                        },
                        showXYPay: !1,
                      });
                    var o = (0, h.getCurrentInstance)();
                    if (o && o.router && o.router.params) {
                      var r,
                        c,
                        l = {};
                      (l = S.Z.isCRN
                        ? JSON.parse(
                            decodeURIComponent(
                              (null === (c = o.router.params) || void 0 === c
                                ? void 0
                                : c.initData) || "{}"
                            )
                          )
                        : o.router.params || {}),
                        (i.orderNumber =
                          (null === (r = l) || void 0 === r
                            ? void 0
                            : r.orderNumber) || "");
                    }
                    return i;
                  }
                  return (
                    (0, r.Z)(n, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          S.Z.isCRN &&
                            this.ubtTrace("TZAGrabAlternateUp_exposure", {
                              PageId: this.pageId,
                            }),
                            this.getPageInfo();
                        },
                      },
                      {
                        key: "getPageId",
                        value: function () {
                          return this.pageId;
                        },
                      },
                      {
                        key: "getCrossStationsAndNearByStations",
                        value: function () {
                          var e,
                            t,
                            n = this,
                            i = this.state,
                            o = i.chosenTrainList,
                            a = i.chosenDateList,
                            r = i.chosenSeatList;
                          if (this.orderInfo && o && a && r) {
                            var s = this.orderInfo || {},
                              c = {
                                departStation:
                                  null == s ||
                                  null === (e = s.fromStation) ||
                                  void 0 === e
                                    ? void 0
                                    : e.name,
                                arriveStation:
                                  null == s ||
                                  null === (t = s.toStation) ||
                                  void 0 === t
                                    ? void 0
                                    : t.name,
                                departDate: null == s ? void 0 : s.ticketDate,
                                departTime: null == s ? void 0 : s.ticketTime,
                                arriveTime: null == s ? void 0 : s.arriveTime,
                                arriveDate: null == s ? void 0 : s.arriveDate,
                                alternativeTrainNums: (function (e) {
                                  var t = [];
                                  return (
                                    e.forEach(function (e) {
                                      t.push(
                                        null == e ? void 0 : e.trainNumber
                                      );
                                    }),
                                    t
                                  );
                                })(o).join(","),
                                alternativeTrainSeats:
                                  null == r ? void 0 : r.join(","),
                                alternativeDepartDates: a.join(","),
                                chosenCrossStations:
                                  (function (e) {
                                    var t = [];
                                    return (
                                      (e || []).forEach(function (e) {
                                        t.push({
                                          trainNumber:
                                            (null == e
                                              ? void 0
                                              : e.trainNumber) || "",
                                          recommendDepartStation:
                                            (null == e
                                              ? void 0
                                              : e.recommendDepartStation) || "",
                                          recommendDepartCount:
                                            null == e
                                              ? void 0
                                              : e.recommendDepartCount,
                                          recommendArriveStation:
                                            (null == e
                                              ? void 0
                                              : e.recommendArriveStation) || "",
                                          recommendArriveCount:
                                            null == e
                                              ? void 0
                                              : e.recommendArriveCount,
                                        });
                                      }),
                                      t
                                    );
                                  })(this.state.chooseCrossStations) || [],
                              };
                            (0, w.jU)(c).then(function (e) {
                              if (e && 1 === e.resultCode) {
                                var t =
                                    (null == e
                                      ? void 0
                                      : e.crossStationAndNearByStationToast) ||
                                    {},
                                  i =
                                    n.state.nearStations &&
                                    n.state.nearStations.length > 0
                                      ? n.state.nearStations
                                      : (null == t ? void 0 : t.nearStations) ||
                                        [];
                                n.setState({
                                  nearStations: i || [],
                                  crossStationsInfos:
                                    (null == e
                                      ? void 0
                                      : e.crossStationsInfos) || [],
                                });
                              } else {
                                var o =
                                  n.state.nearStations &&
                                  n.state.nearStations.length > 0
                                    ? n.state.nearStations
                                    : [];
                                n.setState({
                                  nearStations: o,
                                  crossStationsInfos: [],
                                });
                              }
                            });
                          }
                        },
                      },
                      {
                        key: "getChosenTrainInfo",
                        value: function (e, t, n, i) {
                          var o = this,
                            a = i.trainStationInfos,
                            r = {
                              DepartStation: e,
                              ArriveStation: t,
                              DepartDate: n,
                              channelName: S.Z.isTieyou ? "tieyou" : "zhixing",
                              searchType: 0,
                            };
                          (0, w.xv)(r).then(function (e) {
                            var t,
                              n =
                                (null == e ||
                                null === (t = e.responseBody) ||
                                void 0 === t
                                  ? void 0
                                  : t.trainInfoList) || [];
                            if (n.length > 0) {
                              var i = [];
                              n.forEach(function (e) {
                                a.some(function (t) {
                                  return (0, C.Pu)(t, e);
                                }) && i.push((0, C.lv)(e));
                              }),
                                (o.candidateChosenTrainList = JSON.parse(
                                  JSON.stringify(i)
                                )),
                                o.setState({ chosenTrainList: i }, function () {
                                  o.getCrossStationsAndNearByStations(),
                                    o.handleEndTime(),
                                    o.loadOrderPayment();
                                });
                            }
                          });
                        },
                      },
                      {
                        key: "loadOrderPayment",
                        value: function () {
                          var e = this;
                          S.Z.isCRN &&
                            this.state.showXYPay &&
                            (function (e, t) {
                              Be.apply(this, arguments);
                            })(this, function (t) {
                              var n, i;
                              e.newPaymentInfo = t || {};
                              var a = e.state.defaultPayment,
                                r =
                                  null === (n = e.newPaymentInfo) ||
                                  void 0 === n
                                    ? void 0
                                    : n.changePaymentFlag;
                              null != t &&
                                null !== (i = t.defaultPayment) &&
                                void 0 !== i &&
                                i.orderPaymentType &&
                                1001 !==
                                  (a = null == t ? void 0 : t.defaultPayment)
                                    .orderPaymentType &&
                                (a = (0, o.Z)(
                                  (0, o.Z)({}, a),
                                  {},
                                  { paymentStatus: 1 }
                                )),
                                e.setState({
                                  changePaymentFlag: r,
                                  defaultPayment: a,
                                });
                            });
                        },
                      },
                      {
                        key: "getPageInfo",
                        value: function () {
                          var e = this;
                          (0, w.xU)({ orderNumber: this.orderNumber }).then(
                            function (t) {
                              if (1 === t.resultCode) {
                                var n,
                                  i,
                                  o = t.bottomInfo,
                                  a = t.orderInfo,
                                  r = void 0 === a ? {} : a,
                                  s = t.endTimeConfigList,
                                  c = void 0 === s ? [] : s,
                                  l = t.upgradeProductList,
                                  d = void 0 === l ? [] : l,
                                  u = t.payInfo,
                                  h = t.passengerInfoList,
                                  f = void 0 === h ? [] : h,
                                  m = t.tags,
                                  g = void 0 === m ? [] : m,
                                  p = t.freeProductsNotation,
                                  y = void 0 === p ? "" : p;
                                (e.orderInfo = r), (e.passengerInfoList = f);
                                var S = r.leaveDate.split(",");
                                e.candidateChosenDateList = S;
                                var v = !1,
                                  b = (g || []).filter(function (e) {
                                    return (
                                      "candidateType" ===
                                        (null == e ? void 0 : e.tagName) &&
                                      "1" === (null == e ? void 0 : e.tagValue)
                                    );
                                  });
                                b && b.length > 0 && (v = !0),
                                  e.setState({
                                    chosenDateList: S,
                                    payInfo: u,
                                    showXYPay: v,
                                  });
                                var T = r.seatType.split(",");
                                (e.candidateChosenSeatList = T),
                                  e.setState({ chosenSeatList: T });
                                var w =
                                    (null === (n = r.fromStation) ||
                                    void 0 === n
                                      ? void 0
                                      : n.name) || "",
                                  Z =
                                    (null === (i = r.toStation) || void 0 === i
                                      ? void 0
                                      : i.name) || "",
                                  x = S[0];
                                (e.departureDate = x),
                                  e.getChosenTrainInfo(w, Z, x, r),
                                  (e.fromStation = r.fromStation || {
                                    name: "",
                                    code: "",
                                  }),
                                  (e.toStation = r.toStation || {
                                    name: "",
                                    code: "",
                                  });
                                var _ = (0, C.jm)(x);
                                (e.calendarStartDate = _.calendarStartDate),
                                  (e.calendarEndDate = _.calendarEndDate),
                                  e.setState({ endTimeConfigList: c }),
                                  (e.newGuestInfo = d.find(function (e) {
                                    return 32 === e.type;
                                  })),
                                  e.newGuestInfo &&
                                    e.upgradeProductList.push(e.newGuestInfo),
                                  (e.specificallyGrabInfo = d.find(function (
                                    e
                                  ) {
                                    return 25 === e.type;
                                  })),
                                  e.specificallyGrabInfo &&
                                    e.upgradeProductList.push(
                                      e.specificallyGrabInfo
                                    ),
                                  e.setState({
                                    bottomInfo: o,
                                    freeProductsNotation: y,
                                  });
                              }
                            }
                          );
                        },
                      },
                      {
                        key: "onClickPlan",
                        value: function (e) {
                          var t = this,
                            n = this.state,
                            i = n.chosenTrainList,
                            o = n.chosenDateList;
                          if ((console.log(e), "DateSelectionDrawer" === e)) {
                            if (S.Z.isCRN)
                              return void (0, x.AE)(
                                {
                                  chosenDates: o,
                                  startDate: this.calendarStartDate,
                                  endDate: this.calendarEndDate,
                                  cannotChangeDays:
                                    this.candidateChosenDateList,
                                  overMonth:
                                    p()(this.calendarStartDate).month() !==
                                    p()(this.calendarEndDate).month(),
                                },
                                function (e, n) {
                                  !e &&
                                    n &&
                                    (t.ubtTrace(
                                      "TZAGrabAlternateUp_MultiDate_click",
                                      { PageId: t.pageId }
                                    ),
                                    t.setState(
                                      { chosenDateList: n },
                                      function () {
                                        t.getCrossStationsAndNearByStations(),
                                          t.handleEndTime();
                                      }
                                    ));
                                }
                              );
                            this.setState({ showType: "DateSelectionDrawer" });
                          } else if ("TrainSelectionPage" === e) {
                            if (S.Z.isCRN) {
                              var a = i.map(function (e) {
                                return e.trainNumber;
                              });
                              return void (0, T.Qu)({
                                departStation: this.fromStation,
                                arriveStation: this.toStation,
                                departDates: o,
                                tourFlag: "dc",
                                chosenTrainCodes: a,
                                chosenTrainInfo: i.map(function (e) {
                                  return {
                                    code: e.trainNumber,
                                    from_name: e.departStation,
                                    to_name: e.arriveStation,
                                  };
                                }),
                                originChoosenTrainStationList:
                                  this.candidateChosenTrainList.map(function (
                                    e
                                  ) {
                                    return ""
                                      .concat(e.departStation, "-")
                                      .concat(e.trainNumber, "-")
                                      .concat(e.arriveStation);
                                  }),
                                originChosenTrainFrom: this.fromStation.name,
                                originChosenTrainTo: this.toStation.name,
                                confirmCallback: function (e) {
                                  if (
                                    (t.ubtTrace(
                                      "TZAGrabAlternateUp_MultiTrainno_click",
                                      { PageId: t.pageId }
                                    ),
                                    console.log("chosenTrains", e),
                                    (null == e ? void 0 : e.length) > 0)
                                  ) {
                                    var n = e.map(function (e) {
                                      return (0, C.lv)(e);
                                    });
                                    console.log("curChosenTrainList", n);
                                    var i = P(t, n);
                                    t.setState(
                                      {
                                        chosenTrainList: n,
                                        showType: "SeatSelectionDrawer",
                                        nearStations: i,
                                      },
                                      function () {
                                        t.getCrossStationsAndNearByStations(),
                                          t.handleEndTime();
                                      }
                                    );
                                  }
                                },
                              });
                            }
                            var r = i
                                .map(function (e) {
                                  return e.trainNumber;
                                })
                                .join(","),
                              s = this.candidateChosenTrainList
                                .map(function (e) {
                                  return ""
                                    .concat(
                                      null == e ? void 0 : e.departStation,
                                      "-"
                                    )
                                    .concat(
                                      null == e ? void 0 : e.trainNumber,
                                      "-"
                                    )
                                    .concat(
                                      null == e ? void 0 : e.arriveStation
                                    );
                                })
                                .join(","),
                              c = o.join(","),
                              l = this.candidateChosenSeatList.join(",");
                            this.navigateTo({
                              url: "/pages/trainRob/otherlist/otherlist?excludeTrainStrs="
                                .concat(s, "&TrainNumber=")
                                .concat(r, "&DepartStation=")
                                .concat(
                                  this.fromStation.name,
                                  "&ArriveStation="
                                )
                                .concat(this.toStation.name, "&DepartureDates=")
                                .concat(c, "&DepartureDate=")
                                .concat(this.departureDate, "&SeatName=")
                                .concat(l),
                              data: {
                                chosenTrainList: JSON.parse(
                                  JSON.stringify(
                                    i.map(function (e) {
                                      return {
                                        ArriveStation: e.arriveStation,
                                        DepartStation: e.departStation,
                                        TrainNumber: e.trainNumber,
                                        SeatList: e.seatList,
                                      };
                                    })
                                  )
                                ),
                                isFilter: !1,
                                fromPage: "candidateOrderUpdate",
                              },
                              callback: function (e) {
                                var t = this;
                                if (e && e.chosenTrainList.length > 0) {
                                  var n = e.chosenTrainList.map(function (e) {
                                      return (0, C.lv)(e);
                                    }),
                                    i = P(this, n);
                                  this.setState(
                                    {
                                      chosenTrainList: n,
                                      showType: "SeatSelectionDrawer",
                                      nearStations: i,
                                    },
                                    function () {
                                      t.getCrossStationsAndNearByStations(),
                                        t.handleEndTime();
                                    }
                                  );
                                }
                              },
                            });
                          } else
                            "SeatSelectionDrawer" === e &&
                              this.setState({
                                showType: "SeatSelectionDrawer",
                              });
                        },
                      },
                      {
                        key: "onEndTimeChange",
                        value: function (e) {
                          var t = this.state,
                            n = t.chosenTrainList,
                            i = t.chosenDateList,
                            o = p()(),
                            a = (null == i ? void 0 : i[0]) || "";
                          if (
                            n.reduce(function (e, t) {
                              var n = p()(
                                  "".concat(a, " ").concat(t.departTime)
                                ),
                                i = Math.floor(n.diff(o) / 1e3 / 60);
                              return i < e ? i : e;
                            }, Number.POSITIVE_INFINITY) > e
                          )
                            S.Z.isCRN &&
                              this.ubtTrace(
                                "TZAGrabAlternateUp_Deadline_click",
                                { GrabDeadline: e, PageId: this.pageId }
                              ),
                              this.setState({ endTimeOffset: e });
                          else {
                            var r = Math.floor(e / 60),
                              s = e % 60;
                            f().showToast({
                              title: "当前距离发车时间已不足"
                                .concat(r > 0 ? r + "小时" : "")
                                .concat(s > 0 ? s + "分钟" : ""),
                              icon: "none",
                            });
                          }
                        },
                      },
                      {
                        key: "handleEndTime",
                        value: function () {
                          var e = this.state,
                            t = e.chosenTrainList,
                            n = e.chosenDateList,
                            i = e.endTimeConfigList,
                            o = void 0 === i ? [] : i,
                            a = e.endTimeOffset,
                            r = void 0 === a ? 60 : a,
                            s = p()(),
                            c = (null == n ? void 0 : n[0]) || "",
                            l = t.reduce(function (e, t) {
                              var n = p()(
                                  "".concat(c, " ").concat(t.departTime)
                                ),
                                i = Math.floor(n.diff(s) / 1e3 / 60);
                              return i < e ? i : e;
                            }, Number.POSITIVE_INFINITY);
                          console.log("************earliestDepartTime", l);
                          for (var d = r, u = 0; u < o.length; u++) {
                            if (0 === u && l < o[u].offset) {
                              d = o[u].offset;
                              break;
                            }
                            if (
                              1 === u &&
                              l >= o[u - 1].offset &&
                              l < o[u].offset
                            ) {
                              d = o[u - 1].offset;
                              break;
                            }
                            d = o[1].offset;
                            break;
                          }
                          this.setState({ endTimeOffset: d });
                        },
                      },
                      {
                        key: "onConfirmUpdate",
                        value: function (e) {
                          var t = this,
                            n = e || {},
                            i = n.curPollingTime,
                            o = void 0 === i ? 0 : i,
                            a = (n.curPollingKey, n.curTotalPollingTime),
                            r = void 0 === a ? 10 : a,
                            s = this.state,
                            c = s.chosenDateList,
                            l = s.chosenSeatList,
                            d = s.chosenTrainList,
                            u = s.endTimeOffset,
                            h = s.defaultPayment;
                          if (o > r) this.showCommonDrawer();
                          else {
                            var m = {
                              orderNumber: this.orderNumber,
                              depardDates: c
                                .map(function (e) {
                                  return p()(e).format("YYYY-MM-DD");
                                })
                                .join(","),
                              seats: l.join(","),
                              trainNums: d
                                .map(function (e) {
                                  return e.trainNumber;
                                })
                                .join(","),
                              endTimeOffsetMinutes: u,
                            };
                            (m.upgradeProductList = this.upgradeProductList),
                              (m.orderPaymentType = 1001),
                              S.Z.isCRN &&
                                ((m.orderPaymentType =
                                  (null == h ? void 0 : h.orderPaymentType) ||
                                  1001),
                                1005 == m.orderPaymentType &&
                                  (m.paymentCode =
                                    null == h ? void 0 : h.paymentCode)),
                              (m.crossStationInfoList =
                                this.schemesForCreateGrabOrder),
                              console.log(
                                "candidateUpgradePromise--\x3e",
                                JSON.stringify(m)
                              ),
                              (0, w.lR)(m)
                                .then(function (e) {
                                  if ([-1, 2].includes(e.resultCode))
                                    f().showToast({
                                      title: "网络错误，请稍后重试~",
                                      icon: "none",
                                    });
                                  else if (0 === e.payFlag) {
                                    var n =
                                        (null == e ? void 0 : e.pollingInfo) ||
                                        {},
                                      i = n.pollingInterval,
                                      a = void 0 === i ? 1 : i,
                                      r = n.totalPollingTime,
                                      s = void 0 === r ? 10 : r,
                                      c = n.pollingKey;
                                    if (1 === e.resultCode) {
                                      var l,
                                        d =
                                          null === (l = e.confirmFailToast) ||
                                          void 0 === l
                                            ? void 0
                                            : l.actionType;
                                      1 === d
                                        ? t.showCommonDrawer()
                                        : 2 === d
                                        ? f().showToast({
                                            title: "支付失败，请重试",
                                            icon: "none",
                                          })
                                        : setTimeout(function () {
                                            (0,
                                            T.p1)(t.orderNumber, "candidateOrderUpdate", !!t.specificallyGrabInfo);
                                          }, 500);
                                    } else if (3 === e.resultCode) {
                                      o += a;
                                      var u = setTimeout(function () {
                                        t.onConfirmUpdate({
                                          curPollingTime: o,
                                          curPollingKey: c,
                                          curTotalPollingTime: s,
                                        }),
                                          clearTimeout(u);
                                      }, 1e3 * a);
                                    }
                                  } else
                                    (1 === e.payFlag || 2 === e.payFlag) &&
                                      (0, T.ce)(
                                        {
                                          business: "train",
                                          orderNumber: e.payOrderNumber,
                                          goodsId: e.paymentId,
                                        },
                                        function () {
                                          console.log("成功"),
                                            setTimeout(function () {
                                              (0,
                                              T.p1)(t.orderNumber, "candidateOrderUpdate", !!t.specificallyGrabInfo);
                                            }, 500);
                                        }
                                      );
                                })
                                .catch(function (e) {
                                  console.log(e),
                                    (0, b.v)(
                                      "",
                                      (null == e ? void 0 : e.message) ||
                                        "网络异常，请稍候再试"
                                    );
                                });
                          }
                        },
                      },
                      {
                        key: "showCommonDrawer",
                        value: function () {
                          var e = this;
                          this.setState({
                            showGrabCommonDrawer: !0,
                            drawerContent: {
                              title: "支付提示",
                              content: "支付失败，请手动支付",
                              buttonName: "去支付",
                              showType: "single",
                              onButtonClick: function () {
                                e.payInfo &&
                                  (0, T.ce)(
                                    {
                                      business: "train",
                                      orderNumber: e.payInfo.payOrderNumber,
                                      goodsId: e.payInfo.paymentId,
                                    },
                                    function () {
                                      console.log("成功"),
                                        (0, T.p1)(
                                          e.orderNumber,
                                          "candidateOrderUpdate",
                                          !!e.specificallyGrabInfo
                                        );
                                    }
                                  );
                              },
                            },
                          });
                        },
                      },
                      {
                        key: "confirmCalendarDrawer",
                        value: function (e) {
                          var t = this;
                          this.setState({ chosenDateList: e }, function () {
                            t.getCrossStationsAndNearByStations(),
                              t.handleEndTime();
                          }),
                            this.closeShowType();
                        },
                      },
                      {
                        key: "conformSeatSelection",
                        value: function (e) {
                          var t = this;
                          console.log(e);
                          var n;
                          (n = S.Z.isCRN
                            ? e
                            : e
                                .filter(function (e) {
                                  return e.selected;
                                })
                                .map(function (e) {
                                  return e.SeatName;
                                })),
                            (function (e, t) {
                              var n = e || [];
                              return !(
                                !(function (e) {
                                  var t = !1,
                                    n = ["一等座", "软卧", "商务座"];
                                  return (
                                    (e || []).forEach(function (e) {
                                      n.includes(e) && (t = !0);
                                    }),
                                    t
                                  );
                                })(t) || !D(n)
                              );
                            })(this.passengerInfoList, n)
                              ? f().showToast({
                                  title:
                                    "学生票仅享受硬座、硬卧、二等座、无座等座席优惠。当前选择了不支持优惠的座席，请修改座席。",
                                  icon: "none",
                                })
                              : this.setState(
                                  { chosenSeatList: n },
                                  function () {
                                    t.getCrossStationsAndNearByStations();
                                  }
                                );
                        },
                      },
                      {
                        key: "closeShowType",
                        value: function () {
                          this.setState({ showType: "" });
                        },
                      },
                      {
                        key: "closeCommonDrawer",
                        value: function () {
                          this.setState({ showGrabCommonDrawer: !1 });
                        },
                      },
                      {
                        key: "chooseNearStationAction",
                        value: function (e) {
                          var t = this;
                          console.log(
                            " this.state.chosenTrainList",
                            this.state.chosenTrainList
                          ),
                            console.log(" chooseNearStationAction", e);
                          var n = this.state.chosenTrainList || [],
                            i = n.findIndex(function (t) {
                              return t.trainNumber === e.trainNumber;
                            });
                          if (
                            (-1 === i
                              ? (n.push(e),
                                this.ubtTrace(
                                  "TZAGrabAlternateUp_CheciRecPlan_click",
                                  {
                                    Pageid: this.pageId,
                                    channel: S.Z.isCRN ? "App" : "Applets",
                                  }
                                ))
                              : n.splice(i, 1),
                            (null == n ? void 0 : n.length) > 0)
                          ) {
                            var o = n.map(function (e) {
                              return (0, C.lv)(e);
                            });
                            console.log("curChosenTrainList", o),
                              this.setState(
                                { chosenTrainList: o },
                                function () {
                                  t.getCrossStationsAndNearByStations(),
                                    t.handleEndTime();
                                }
                              );
                          }
                        },
                      },
                      {
                        key: "chooseCrossStationAction",
                        value: function (e) {
                          var t = this.state.chooseCrossStations.findIndex(
                              function (t) {
                                return (
                                  t.recommendArriveCount ===
                                    e.recommendArriveCount &&
                                  t.recommendDepartCount ===
                                    e.recommendDepartCount &&
                                  t.recommendDepartStation ===
                                    e.recommendDepartStation &&
                                  t.recommendArriveStation ===
                                    e.recommendArriveStation
                                );
                              }
                            ),
                            n = this.state.chooseCrossStations || [];
                          -1 === t
                            ? (n.push(e),
                              this.ubtTrace(
                                "TZAGrabAlternateUp_KuaZhanRecPlan_click",
                                {
                                  Pageid: this.pageId,
                                  channel: S.Z.isCRN ? "App" : "Applets",
                                }
                              ))
                            : n.splice(t, 1),
                            console.log("chooseCrossStationAction", n),
                            this.setState({ chooseCrossStations: n });
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e,
                            t = this,
                            n = this.state,
                            i = n.chosenDateList,
                            a = n.endTimeOffset,
                            r = n.chosenTrainList,
                            s = n.chosenSeatList,
                            c = n.endTimeConfigList,
                            l = n.showGrabCommonDrawer,
                            d = n.drawerContent,
                            u = n.changePaymentFlag,
                            h =
                              (n.paymentInfo,
                              n.paymentDrawerInfo,
                              n.bottomInfo,
                              n.showType),
                            f = n.crossStationsInfos,
                            g = n.nearStations,
                            p = n.payInfo,
                            v = n.defaultPayment,
                            b = n.freeProductsNotation,
                            T = _(this),
                            w = (function (e) {
                              var t,
                                n = [],
                                i =
                                  "学生票、儿童票暂收全价，抢票成功后1-3个工作日退还差价",
                                o = e.passengerInfoList || [],
                                a =
                                  null === (t = e.state.chosenSeatList) ||
                                  void 0 === t
                                    ? void 0
                                    : t.join(",");
                              return (
                                a &&
                                  ((null == a ? void 0 : a.indexOf("硬卧")) >
                                    -1 ||
                                    (null == a ? void 0 : a.indexOf("软卧")) >
                                      -1) &&
                                  n.push(
                                    "卧铺暂收下铺价格，抢票成功后1-3个工作日退还差价"
                                  ),
                                null == o ||
                                  o.forEach(function (e) {
                                    ["儿童票", "学生票"].indexOf(
                                      e.passengerType
                                    ) > -1 &&
                                      n.indexOf(i) < 0 &&
                                      n.push(i);
                                  }),
                                n
                              );
                            })(this),
                            x = D(this.passengerInfoList);
                          return (0, A.BX)(m.View, {
                            className: "page",
                            children: [
                              (0, A.tZ)(y.Z, {
                                start: { x: 0, y: 0 },
                                end: { x: 0, y: 1 },
                                colors: S.Z.isTieyou
                                  ? ["#ACB6E6", "#F5F5F5"]
                                  : ["#B3D2FF", "#F5F5F5"],
                                locations: [0, 1],
                                className: "bg-img",
                                style: { width: (0, I.fM)() },
                              }),
                              (0, A.tZ)(k, {
                                page:
                                  (null === (e = this.props) || void 0 === e
                                    ? void 0
                                    : e.page) || this,
                              }),
                              (0, A.BX)(m.ScrollView, {
                                className: "container",
                                scrollY: !0,
                                children: [
                                  (0, A.tZ)(F, {
                                    fromStation: this.fromStation.name,
                                    toStation: this.toStation.name,
                                  }),
                                  (0, A.tZ)(he, {
                                    scope: this,
                                    nearStations: g,
                                    chosenDateList: i,
                                    chosenTrainList: r,
                                    chosenSeatList: s,
                                    onClickPlan: this.onClickPlan.bind(this),
                                    chooseAction: function (e) {
                                      t.chooseNearStationAction(e);
                                    },
                                  }),
                                  !x &&
                                    ue(
                                      this,
                                      f,
                                      function () {
                                        t.setState({
                                          showCrossStationTipDialog: !0,
                                        });
                                      },
                                      function (e) {
                                        t.chooseCrossStationAction(e);
                                      }
                                    ),
                                  (0, A.tZ)(fe, {
                                    content: c,
                                    value: a,
                                    onChange: this.onEndTimeChange.bind(this),
                                  }),
                                  (0, A.tZ)(we, {
                                    page: this,
                                    payedPrice: T,
                                    tips:
                                      (p && (null == p ? void 0 : p.tips)) ||
                                      [],
                                  }),
                                  (0, A.tZ)(me, {
                                    page: this,
                                    title: null == v ? void 0 : v.paymentTitle,
                                    changePaymentFlag: u && S.Z.isCRN,
                                    onShowDrawer: function () {
                                      console.log("PaymentDrawer"),
                                        1 == u &&
                                          S.Z.isCRN &&
                                          (t.ubtTrace(
                                            "TZAGrabAlternateUp_PayType_click",
                                            {
                                              PageId: t.pageId,
                                              channel: S.Z.isCRN
                                                ? "APP"
                                                : "Applets",
                                            }
                                          ),
                                          t.setState({
                                            showNewPaymentLayer: !0,
                                          }));
                                    },
                                  }),
                                  (0, A.tZ)(Pe.Z, { style: { marginTop: 30 } }),
                                  (0, A.tZ)(m.View, { className: "blank" }),
                                ],
                              }),
                              (0, A.tZ)(pe, {
                                tips: w,
                                onConfirm: function () {
                                  S.Z.isCRN
                                    ? t.ubtTrace(
                                        "TZAGrabAlternateUp_UpdateButton_click",
                                        { PageId: t.pageId }
                                      )
                                    : t.onConfirmUpdate();
                                },
                                freeProductsNotation: b,
                              }),
                              (0, A.tZ)(
                                Z.Z,
                                (0, o.Z)(
                                  {
                                    isShow: l,
                                    onClose: this.closeCommonDrawer.bind(this),
                                  },
                                  d
                                )
                              ),
                              (0, A.tZ)(ye, {
                                visible: "DateSelectionDrawer" === h,
                                maxHeight: "80%",
                                beginDate: this.calendarStartDate,
                                endDate: this.calendarEndDate,
                                preRobDays: C.k7,
                                hasSelectedDateList: i,
                                mainTrainDate: this.candidateChosenDateList,
                                onClose: this.closeShowType.bind(this),
                                onConfirm:
                                  this.confirmCalendarDrawer.bind(this),
                              }),
                              (0, A.tZ)(Se, {
                                visible: "SeatSelectionDrawer" == h,
                                chosenTrainList: r.map(function (e) {
                                  return (0, C.dq)(e);
                                }),
                                chosenSeatStr: s.join(","),
                                mainTrainSeatName: this.candidateChosenSeatList,
                                onClose: this.closeShowType.bind(this),
                                onConfirm: function (e) {
                                  t.closeShowType(), t.conformSeatSelection(e);
                                },
                                isShow: "SeatSelectionDrawer" == h,
                                seatList: (0, C.ad)(r),
                                chosenSeats: s,
                                originalChosenSeat:
                                  this.candidateChosenSeatList.join(","),
                                cancel: this.closeShowType.bind(this),
                                confirm: function (e) {
                                  t.ubtTrace(
                                    "TZAGrabAlternateUp_MultiSeat_click",
                                    { PageId: t.pageId }
                                  ),
                                    t.closeShowType();
                                  var n = setTimeout(function () {
                                    t.conformSeatSelection(e), clearTimeout(n);
                                  }, 200);
                                },
                              }),
                              (0, A.tZ)(ke, {
                                page: this,
                                show: this.state.showNewPaymentLayer,
                                defaultPayment: v,
                                newPaymentInfo: this.newPaymentInfo,
                                newPaymentLayer: 2,
                                setDefaultPayment: function (e) {
                                  t.setState({
                                    defaultPayment: e,
                                    showNewPaymentLayer: !1,
                                  });
                                },
                                hide: function () {
                                  t.setState({ showNewPaymentLayer: !1 });
                                },
                              }),
                              (0, A.tZ)(Ne, {
                                isShow: this.state.showCrossStationTipDialog,
                                hide: function () {
                                  t.setState({ showCrossStationTipDialog: !1 });
                                },
                              }),
                            ],
                          });
                        },
                      },
                    ]),
                    n
                  );
                })(u.Component))
              ) || Ae;
          Page(
            (0, i.createPageConfig)(
              Fe,
              "pages/taroCRN/train/pages/candidateOrderUpdate/index",
              { root: { cn: [] } },
              {
                navigationBarTitleText: "",
                navigationStyle: "custom",
                navigationBarTextStyle: "black",
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
            6189, 22843, 6878, 71229, 10313, 37210, 88520, 17175, 94577, 19559,
            11216, 68592,
          ],
          function () {
            return (function (t) {
              return e((e.s = t));
            })(72491);
          }
        ),
          e.O();
      },
    ]);
})();
