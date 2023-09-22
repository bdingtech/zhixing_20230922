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
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [41553],
      {
        37070: function (e, t, i) {
          var n,
            l = i(32180),
            o = i(298),
            r = i(22276),
            a = i(57042),
            c = i(24460),
            s = i(81876),
            d = i(21867),
            u = i(86066),
            f = i(45023),
            g = i(52500),
            h = i(92954),
            m = i.n(h),
            p = i(71515),
            v = i(8271),
            Z = i.n(v),
            y = i(90729),
            x = i(23577),
            b = i(90098),
            w = i(49528),
            S = function (e) {
              var t = 0;
              return (
                y.Z.isEmptyArray(e) ||
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
            T = function (e) {
              var t = 0;
              return (
                y.Z.isEmptyArray(e) ||
                  e.map(function (e, i) {
                    var n;
                    t +=
                      (null == e || null === (n = e.flights) || void 0 === n
                        ? void 0
                        : n.length) || 0;
                  }),
                console.log(t),
                t
              );
            },
            C = function (e, t) {
              var i = [];
              t.map(function (t, n) {
                var l,
                  o = e.find(function (e) {
                    return e.departureDate == t.departureDate;
                  });
                null === (l = t.flightNumbers) ||
                  void 0 === l ||
                  l.map(function (e) {
                    var t;
                    i.push(
                      null == o || null === (t = o.flights) || void 0 === t
                        ? void 0
                        : t.find(function (t) {
                            var i, n;
                            return (
                              e ==
                              (null == t ||
                              null === (i = t.sequences) ||
                              void 0 === i ||
                              null === (n = i[0]) ||
                              void 0 === n
                                ? void 0
                                : n.flightNo)
                            );
                          })
                    );
                  });
              }),
                i.sort(function (e, t) {
                  return e.apr - t.apr;
                }),
                console.log(i);
              var n = null == i ? void 0 : i[0];
              return n
                ? {
                    lowestPrice: n.apr,
                    lowestPriceDate: Z()(n.dptTime).format("YYYY-MM-DD"),
                    lowestAirName: n.sequences[0].airName,
                    lowestPriceFlightNumber: n.sequences[0].flightNo,
                  }
                : null;
            },
            I = i(87298),
            D = i(90582),
            F = i(88184),
            N = i(48813),
            B = function (e) {
              var t = e.totalNum;
              return (
                e.toggleSelectAll,
                e.isShowType,
                (0, N.tZ)(F.Z, { title: "已选择".concat(t, "个航班") })
              );
            },
            V = i(90129),
            L = i(96677),
            R = g.default.memo(function (e) {
              var t = e.onClickDate,
                i = e.dateList,
                n = g.default.useState(0),
                l = (0, V.Z)(n, 2),
                r = l[0],
                a = l[1],
                c = function (e) {
                  e != r && (a(e), t(e));
                };
              return (0, N.tZ)(p.View, {
                style: k.container,
                children: i.map(function (e, t) {
                  var i = r == t;
                  return (0, N.tZ)(
                    p.View,
                    {
                      style: (0, o.Z)((0, o.Z)({}, k.dateItem), {
                        borderColor: i ? L.Z.mainColor : "transparent",
                      }),
                      id: "AMAd",
                      onClick: function () {
                        c(t);
                      },
                      children: (0, N.tZ)(p.Text, {
                        style: (0, o.Z)((0, o.Z)({}, k.dateText), {
                          color: i ? L.Z.mainColor : "#222",
                        }),
                        children: Z()(e).format("M月D日"),
                      }),
                    },
                    e + t
                  );
                }),
              });
            }),
            k = (0, w.lW)({
              container: { display: "flex", flexDirection: "row" },
              dateItem: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: 40,
                width: 101,
                backgroundColor: "white",
                borderRadius: 10,
                borderWidth: 1,
                borderColor: "transparent",
                marginRight: 8,
              },
              dateText: { fontSize: 14, color: "#222", fontWeight: "500" },
            }),
            A = i(46628),
            z =
              (m().getSystemInfoSync(), (b.Z.statusBarHeight || 44) + 44 + 10),
            q = g.default.memo(function (e) {
              var t = e.onClickDate,
                i = e.dateList;
              return (0,
              N.tZ)(A.Z, { style: x.Z.isCRN ? j.container : (0, o.Z)((0, o.Z)({}, j.miniContainer), {}, { top: z }), children: (0, N.tZ)(R, { onClickDate: t, dateList: i }) });
            }),
            j = (0, w.lW)({
              container: {
                display: "flex",
                marginLeft: 6,
                marginRight: 6,
                marginBottom: 2,
                top: 0,
                right: 0,
                left: 0,
              },
              miniContainer: {
                display: "flex",
                marginLeft: 6,
                marginRight: 6,
                marginBottom: 2,
                right: 0,
                left: 0,
              },
            }),
            H = i(53550),
            M = g.default.memo(function (e) {
              var t = e.flightInfo,
                i = e.isSelected,
                n = e.onSelectFlight,
                l = e.isShowType,
                r = t.dptTime,
                a = t.dptAName,
                c = t.dptTrm,
                s = t.arrTime,
                d = t.arrAName,
                u = t.arrTrm,
                f = t.costTime,
                g = t.sequences;
              return (0, N.BX)(p.View, {
                style: X.container,
                id: "AMAa",
                onClick: l ? null : n,
                children: [
                  (0, N.BX)(p.View, {
                    style: {
                      display: "flex",
                      flex: 1,
                      flexDirection: "column",
                    },
                    children: [
                      (0, N.BX)(p.View, {
                        style: X.firstContainer,
                        children: [
                          (0, N.BX)(p.View, {
                            style: X.timeContainer,
                            children: [
                              (0, N.BX)(p.View, {
                                style: {
                                  display: "flex",
                                  flexDirection: "column",
                                },
                                children: [
                                  (0, N.tZ)(p.Text, {
                                    style: X.timeText,
                                    children: Z()(r).format("HH:mm"),
                                  }),
                                  (0, N.tZ)(p.Text, {
                                    style: X.airportText,
                                    children: a + (c || ""),
                                  }),
                                ],
                              }),
                              (0, N.tZ)(p.View, {
                                style: { alignItems: "center" },
                                children: (0, N.tZ)(p.Image, {
                                  src: "https://images3.c-ctrip.com/ztrip/rn_flight_support/icon_flight_line.png",
                                  style: X.line,
                                }),
                              }),
                              (0, N.BX)(p.View, {
                                style: {
                                  display: "flex",
                                  flexDirection: "column",
                                },
                                children: [
                                  (0, N.tZ)(p.Text, {
                                    style: X.timeText,
                                    children: Z()(s).format("HH:mm"),
                                  }),
                                  (0, N.tZ)(p.Text, {
                                    style: X.airportText,
                                    children: d + (u || ""),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, N.tZ)(p.View, {
                            style: {
                              display: "flex",
                              flex: 1,
                              flexDirection: "column",
                              position: "relative",
                            },
                            children: (function () {
                              var e = y.Z.getDayDiff(
                                Z()(r).format("YYYY-MM-DD"),
                                Z()(s).format("YYYY-MM-DD")
                              );
                              return (0, N.tZ)(p.View, {
                                style: { position: "absolute", left: 2 },
                                children: (0, N.tZ)(p.Text, {
                                  style: X.datText,
                                  children: e && e > 0 ? "+" + e + "天" : "",
                                }),
                              });
                            })(),
                          }),
                        ],
                      }),
                      (0, N.tZ)(p.View, {
                        style: {
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                          alignItems: "center",
                        },
                        children: (function () {
                          var e = null == g ? void 0 : g[0];
                          return (0, N.BX)(p.View, {
                            style: {
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                            },
                            children: [
                              (0, N.BX)(p.View, {
                                style: {
                                  display: "flex",
                                  flexDirection: "row",
                                  alignItems: "center",
                                },
                                children: [
                                  (0, N.tZ)(p.Image, {
                                    src: null == e ? void 0 : e.airIcon,
                                    style: X.airIcon,
                                  }),
                                  (0, N.tZ)(p.Text, {
                                    style: X.airLineText,
                                    children:
                                      (null == e ? void 0 : e.airName) +
                                      (null == e ? void 0 : e.flightNo),
                                  }),
                                  !!e.shared &&
                                    (0, N.tZ)(p.Text, {
                                      style: (0, o.Z)(
                                        (0, o.Z)({}, X.airLineText),
                                        { color: L.Z.grey_33, marginLeft: 3 }
                                      ),
                                      children: "共享",
                                    }),
                                ],
                              }),
                              !(null == e || !e.cftn) &&
                                (0, N.tZ)(p.View, { style: X.vDivideLine }),
                              (0, N.tZ)(p.Text, {
                                style: X.airLineText,
                                children: ""
                                  .concat((null == e ? void 0 : e.cftn) || "")
                                  .concat(
                                    null != e && e.cfts
                                      ? "(".concat(e.cfts, ")")
                                      : ""
                                  ),
                              }),
                              !!f &&
                                (0, N.tZ)(p.View, { style: X.vDivideLine }),
                              (0, N.tZ)(p.Text, {
                                style: X.airLineText,
                                children: f,
                              }),
                            ],
                          });
                        })(),
                      }),
                    ],
                  }),
                  (0, N.tZ)(p.View, {
                    children: i
                      ? (0, N.tZ)(H.Z, {
                          style: (0, o.Z)(
                            (0, o.Z)({}, X.circleIcon),
                            {},
                            { color: L.Z.mainColor, opacity: l ? 0.4 : 1 }
                          ),
                          children: "󰲡",
                        })
                      : (0, N.tZ)(H.Z, { style: X.circleIcon, children: "󰲠" }),
                  }),
                ],
              });
            }),
            X = (0, w.lW)({
              container: {
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: L.Z.white,
                marginTop: 6,
                borderRadius: 10,
                paddingTop: 11,
                paddingBottom: 10,
                paddingLeft: 16,
                paddingRight: 16,
              },
              timeContainer: {
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              },
              timeText: {
                fontSize: 22,
                lineHeight: 23,
                color: L.Z.grey_33,
                fontFamily: (0, w.QQ)(),
              },
              airportText: {
                fontSize: 12,
                color: L.Z.grey_33,
                lineHeight: 16,
                marginTop: 2,
              },
              airIcon: { width: 13, height: 12, marginRight: 2 },
              line: {
                width: 40,
                height: 3,
                marginLeft: 16,
                marginRight: 18,
                marginBottom: 17,
              },
              firstContainer: {
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 11,
              },
              datText: { color: L.Z.grey_33, fontSize: 11 },
              rmb: { fontSize: 14, color: L.Z.mainColor },
              price: { fontSize: 24, color: L.Z.priceColor },
              vDivideLine: {
                backgroundColor: "#d8d8d8",
                height: 7,
                width: 0.5,
                marginLeft: 5,
                marginRight: 5,
              },
              airLineText: { fontSize: 12, color: L.Z.grey_99, lineHeight: 16 },
              bottomBtn: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: 44,
                borderRadius: 12,
                backgroundColor: L.Z.priceColor,
                marginTop: 15,
              },
              bottomBtnText: {
                fontSize: 17,
                color: L.Z.white,
                fontWeight: "600",
              },
              circleIcon: { fontSize: 20, color: "#ccc" },
            }),
            Y = g.default.memo(function (e) {
              var t = e.onSure,
                i = e.isShowType,
                n = e.departHourLimit;
              return i
                ? null
                : (0, N.BX)(A.Z, {
                    style: _.outer,
                    children: [
                      !!n &&
                        (0, N.tZ)(p.View, {
                          style: _.tipsContainer,
                          children: (0, N.tZ)(p.Text, {
                            style: _.tipsText,
                            children:
                              "因还价时效限制，仅可选择起飞时间距当前大于".concat(
                                n,
                                "小时的航班"
                              ),
                          }),
                        }),
                      (0, N.tZ)(p.View, {
                        style: _.container,
                        children: (0, N.tZ)(p.View, {
                          style: _.confirmBtn,
                          id: "AMAZ",
                          onClick: t,
                          children: (0, N.tZ)(p.Text, {
                            style: _.confirmText,
                            children: "确定",
                          }),
                        }),
                      }),
                    ],
                  });
            }),
            _ = (0, w.lW)({
              outer: {
                boxSizing: "border-box",
                width: "100%",
                zIndex: 100,
                bottom: 0,
                backgroundColor: "#FFFAF5",
                borderRadius: 12,
              },
              container: {
                bottom: 0,
                backgroundColor: "#fff",
                width: "100%",
                paddingTop: 8,
                paddingBottom: b.Z.isIPhoneX ? 29 : 5,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                zIndex: 100,
                paddingLeft: 8,
                paddingRight: 8,
                boxSizing: "border-box",
              },
              confirmBtn: {
                height: 44,
                backgroundColor: L.Z.mainColor,
                borderRadius: 12,
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
              },
              confirmText: {
                fontSize: 17,
                color: L.Z.white,
                fontWeight: "600",
              },
              tipsContainer: {
                marginTop: 10,
                marginBottom: 10,
                marginLeft: 16,
              },
              tipsText: { fontSize: 12, color: "#FD8700" },
            }),
            W =
              (m().getSystemInfoSync(), (b.Z.statusBarHeight || 44) + 44 + 50),
            P =
              (0, I.h)()(
                (n = (function (e) {
                  (0, d.Z)(i, e);
                  var t = (0, u.Z)(i);
                  function i(e) {
                    var n;
                    return (
                      (0, a.Z)(this, i),
                      (n = t.call(this, e)),
                      (0, f.Z)((0, s.Z)(n), "orderNumber", void 0),
                      (0, f.Z)((0, s.Z)(n), "scrollRef", g.default.createRef()),
                      (0, f.Z)((0, s.Z)(n), "allFlights", void 0),
                      (0, f.Z)(
                        (0, s.Z)(n),
                        "pageId",
                        x.Z.isTieyou ? "10650082401" : "10650082399"
                      ),
                      (0, f.Z)(
                        (0, s.Z)(n),
                        "initSelectFlights",
                        function (e, t) {
                          var i = [];
                          return (
                            y.Z.isEmptyArray(t)
                              ? null == e ||
                                e.map(function (e, t) {
                                  var n;
                                  i.push({
                                    departureDate: e.departureDate,
                                    flightNumbers:
                                      null === (n = e.flights) || void 0 === n
                                        ? void 0
                                        : n.map(function (e) {
                                            var t, i;
                                            return null == e ||
                                              null === (t = e.sequences) ||
                                              void 0 === t ||
                                              null === (i = t[0]) ||
                                              void 0 === i
                                              ? void 0
                                              : i.flightNo;
                                          }),
                                  });
                                })
                              : (i = t),
                            console.log(i),
                            i
                          );
                        }
                      ),
                      (0, f.Z)((0, s.Z)(n), "init", function () {}),
                      (0, f.Z)((0, s.Z)(n), "onSelectFlight", function (e, t) {
                        var i,
                          l = (0, r.Z)(n.state.selectFlights),
                          o =
                            null === (i = n.state.selectFlights) || void 0 === i
                              ? void 0
                              : i.findIndex(function (t) {
                                  return t.departureDate == e;
                                });
                        if ((console.log("flightIndex", o), o >= 0)) {
                          var a,
                            c,
                            s,
                            d,
                            u =
                              null === (a = l[o]) ||
                              void 0 === a ||
                              null === (c = a.flightNumbers) ||
                              void 0 === c
                                ? void 0
                                : c.findIndex(function (e) {
                                    var i, n;
                                    return (
                                      e ==
                                      (null == t ||
                                      null === (i = t.sequences) ||
                                      void 0 === i ||
                                      null === (n = i[0]) ||
                                      void 0 === n
                                        ? void 0
                                        : n.flightNo)
                                    );
                                  });
                          console.log("flightNoIndex", u),
                            u >= 0
                              ? l[o].flightNumbers.splice(u, 1)
                              : l[o].flightNumbers.push(
                                  null == t ||
                                    null === (s = t.sequences) ||
                                    void 0 === s ||
                                    null === (d = s[0]) ||
                                    void 0 === d
                                    ? void 0
                                    : d.flightNo
                                );
                        } else {
                          var f, g;
                          l.push({
                            departureDate: e,
                            flightNumbers: [
                              null == t ||
                              null === (f = t.sequences) ||
                              void 0 === f ||
                              null === (g = f[0]) ||
                              void 0 === g
                                ? void 0
                                : g.flightNo,
                            ],
                          });
                        }
                        n.setState({ selectFlights: l });
                      }),
                      (0, f.Z)((0, s.Z)(n), "toggleSelectAll", function () {
                        var e = n.state,
                          t = e.isSelectAll,
                          i = (e.selectFlights, e.allFlights);
                        if (t)
                          n.setState({ selectFlights: [], isSelectAll: !1 });
                        else {
                          var l = [];
                          i.map(function (e, t) {
                            var i;
                            l.push({
                              departureDate: e.departureDate,
                              flightNumbers:
                                null === (i = e.flights) || void 0 === i
                                  ? void 0
                                  : i.map(function (e) {
                                      var t, i;
                                      return null == e ||
                                        null === (t = e.sequences) ||
                                        void 0 === t ||
                                        null === (i = t[0]) ||
                                        void 0 === i
                                        ? void 0
                                        : i.flightNo;
                                    }),
                            });
                          }),
                            n.setState({ selectFlights: l, isSelectAll: !0 });
                        }
                      }),
                      (0, f.Z)((0, s.Z)(n), "onClickDate", function (e) {
                        var t, i, l, o, r, a;
                        x.Z.isCRN
                          ? (null === (t = n.scrollRef) || void 0 === t
                              ? void 0
                              : t.current) &&
                            (null === (i = n.scrollRef) ||
                              void 0 === i ||
                              null === (l = i.current) ||
                              void 0 === l ||
                              null === (o = l.$scrollView) ||
                              void 0 === o ||
                              null === (r = o.current) ||
                              void 0 === r ||
                              null === (a = r.scrollToIndex) ||
                              void 0 === a ||
                              a.call(r, { index: e }))
                          : n.setState({
                              scrollIntoViewId: "flight-item_".concat(e),
                            });
                      }),
                      (0, f.Z)((0, s.Z)(n), "renderItem", function (e) {
                        var t,
                          i = e.item,
                          l = e.index,
                          o = 0 != l;
                        return (0, N.BX)(
                          p.View,
                          {
                            id: "flight-item_".concat(l),
                            children: [
                              o &&
                                (0, N.tZ)(p.View, {
                                  style: { marginTop: 22 },
                                  children: (0, N.tZ)(p.Text, {
                                    style: E.itemTitle,
                                    children: "".concat(
                                      Z()(i.departureDate).format("MM月DD日"),
                                      "航班"
                                    ),
                                  }),
                                }),
                              null === (t = i.flights) || void 0 === t
                                ? void 0
                                : t.map(function (e, t) {
                                    var o,
                                      r,
                                      a =
                                        (null === (o = n.state.selectFlights) ||
                                        void 0 === o
                                          ? void 0
                                          : o.find(function (e) {
                                              return (
                                                e.departureDate ==
                                                i.departureDate
                                              );
                                            })) || null,
                                      c =
                                        null == a ||
                                        null === (r = a.flightNumbers) ||
                                        void 0 === r
                                          ? void 0
                                          : r.some(function (t) {
                                              var i, n;
                                              return (
                                                t ==
                                                (null == e ||
                                                null === (i = e.sequences) ||
                                                void 0 === i ||
                                                null === (n = i[0]) ||
                                                void 0 === n
                                                  ? void 0
                                                  : n.flightNo)
                                              );
                                            });
                                    return (0, N.tZ)(
                                      M,
                                      {
                                        isShowType: n.state.isShowType,
                                        flightInfo: e,
                                        isSelected: c,
                                        onSelectFlight: function () {
                                          n.onSelectFlight(i.departureDate, e);
                                        },
                                      },
                                      "".concat(l).concat(t)
                                    );
                                  }),
                            ],
                          },
                          "flight-item_key".concat(l)
                        );
                      }),
                      (0, f.Z)((0, s.Z)(n), "onSure", function () {
                        var e = n.state,
                          t = e.allFlights,
                          i = e.selectFlights,
                          l = e.minSpecifiedFlightCount;
                        if (T(t) < l)
                          (0, D.v)(
                            "",
                            "该日期航班数过少，为保证成功率，已为您选择所有航班",
                            {
                              text: "确认",
                              callback: function () {
                                n.navigateBack({
                                  selectFlights: null,
                                  lowestPriceFlightInfo: null,
                                });
                              },
                            }
                          );
                        else if (S(i) < l)
                          m().showToast({
                            title: "请选择"
                              .concat(l, "个及")
                              .concat(l, "以个航班才可以开始帮还价哦"),
                          });
                        else {
                          var o = S(i) == T(t);
                          n.navigateBack({
                            selectFlights: o ? null : n.state.selectFlights,
                            lowestPriceFlightInfo: o ? null : C(t, i),
                          });
                        }
                      }),
                      (n.state = {
                        allFlights: null,
                        selectFlights: null,
                        isSelectAll: !0,
                        minSpecifiedFlightCount: 3,
                        isShowType: !1,
                        scrollIntoViewId: "",
                        departHourLimit: 8,
                      }),
                      n
                    );
                  }
                  return (
                    (0, c.Z)(i, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          var e = (0, h.getCurrentInstance)();
                          if (e && e.router && e.router.params) {
                            var t = e.router.params,
                              i = t.allFlights,
                              n = t.selectFlights,
                              l = t.minSpecifiedFlightCount,
                              o = void 0 === l ? 1 : l,
                              r = t.isShowType,
                              a = void 0 !== r && r,
                              c = t.departHourLimit;
                            console.log(e.router.params, this.props),
                              this.setState({
                                allFlights: i,
                                selectFlights: this.initSelectFlights(i, n),
                                minSpecifiedFlightCount: o,
                                isShowType: a,
                                departHourLimit: c,
                              });
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
                        key: "render",
                        value: function () {
                          var e = this,
                            t = this.state,
                            i = t.allFlights,
                            n = t.selectFlights,
                            l = t.isShowType,
                            r = t.scrollIntoViewId,
                            a = t.departHourLimit;
                          return i
                            ? (0, N.BX)(p.View, {
                                style: {
                                  display: "flex",
                                  flex: 1,
                                  backgroundColor: "#f5f5f5",
                                  flexDirection: "column",
                                },
                                children: [
                                  (0, N.tZ)(B, {
                                    isShowType: l,
                                    totalNum: S(n),
                                    toggleSelectAll: this.toggleSelectAll,
                                  }),
                                  (0, N.tZ)(q, {
                                    onClickDate: this.onClickDate,
                                    dateList: i.map(function (e) {
                                      return e.departureDate;
                                    }),
                                  }),
                                  (0, N.BX)(p.ScrollView, {
                                    ref: this.scrollRef,
                                    contentContainerStyle: E.scrollContainer,
                                    style: x.Z.isCRN
                                      ? {}
                                      : (0, o.Z)(
                                          (0, o.Z)({}, E.miniScrollContainer),
                                          {},
                                          { top: W }
                                        ),
                                    data: i,
                                    renderItem: this.renderItem,
                                    scrollIntoView: r,
                                    scrollWithAnimation: !0,
                                    scrollY: !0,
                                    children: [
                                      !x.Z.isCRN &&
                                        i.map(function (t, i) {
                                          return e.renderItem({
                                            item: t,
                                            index: i,
                                          });
                                        }),
                                      !x.Z.isCRN &&
                                        (0, N.tZ)(p.View, {
                                          style: { height: 40 },
                                        }),
                                    ],
                                  }),
                                  (0, N.tZ)(Y, {
                                    departHourLimit: a,
                                    isShowType: l,
                                    onSure: this.onSure,
                                  }),
                                ],
                              })
                            : null;
                        },
                      },
                    ]),
                    i
                  );
                })(g.Component))
              ) || n,
            E = (0, w.lW)({
              scrollContainer: {
                zIndex: 2,
                paddingBottom: 100,
                paddingLeft: 6,
                paddingRight: 6,
              },
              miniScrollContainer: {
                zIndex: 2,
                paddingBottom: 100,
                paddingLeft: 6,
                paddingRight: 6,
                position: "absolute",
                right: 0,
                bottom: 0,
                left: 0,
                boxSizing: "border-box",
              },
              itemTitle: { fontSize: 14, color: "#999" },
            }),
            J = P;
          Page(
            (0, l.createPageConfig)(
              J,
              "pages/taroCRN/flight/pages/surpriseGrabFlightSelect/index",
              { root: { cn: [] } },
              {
                navigationBarTitleText: "惊喜飞",
                navigationStyle: "custom",
                navigationBarBackgroundColor: "#f5f5f5",
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
            6189, 22843, 6878, 19559, 11216, 68592,
          ],
          function () {
            return (function (t) {
              return e((e.s = t));
            })(37070);
          }
        ),
          e.O();
      },
    ]);
})();
