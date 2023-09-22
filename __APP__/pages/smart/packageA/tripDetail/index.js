!(function () {
  "use strict";
  require("../sub-vendors.js"),
    require("../sub-common/1affc4a679af4ad334128041573c09c6.js"),
    require("../sub-common/99e1f8a4cc1290fc72ce9bc5d2852868.js"),
    require("../sub-common/2eae4dfc35be5d14dfc1dc2d3e80f01e.js"),
    require("../sub-common/5de1d16dbb0559dc875a17959f3a651a.js"),
    require("../sub-common/a6b9ed7171073b2dbf848c56c2af4e8b.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [29814],
      {
        14968: function (t, e, i) {
          var o = i(32180),
            n = i(298),
            a = i(79301),
            r = i(95308),
            s = i(57042),
            c = i(24460),
            l = i(21867),
            d = i(86066),
            f = i(52500),
            u = i(92954),
            h = i.n(u),
            m = i(71515),
            p = i(81957),
            g = i(49120),
            S = i(79792),
            T = i(24383),
            v = i(3205),
            w = i(25391),
            y = i(38911),
            N = i(8271),
            b = i.n(N),
            k = i(4102),
            C = i(15125),
            I = i(25297),
            Z = i(38561),
            B = i(37451),
            P = i(48813);
          var V = function (t) {
              var e = t.details,
                i = void 0 === e ? [] : e,
                o = t.dayDiff,
                n = t.totalMinutes,
                a = t.totalPrice;
              if (0 === i.length) return (0, P.tZ)(m.View, {});
              var r = (0, Z.MW)(i[0]),
                s = (0, Z.e6)(r.startDate),
                c = (0, Z.GD)(r.startDate),
                l = (0, Z.zE)(n);
              return (0, P.BX)(m.View, {
                className: "smart-transport-header",
                children: [
                  (0, P.tZ)(m.Text, {
                    className: "left",
                    children: "".concat(s, " ").concat(c, "出发"),
                  }),
                  (0, P.BX)(m.View, {
                    className: "right",
                    children: [
                      !!o &&
                        (0, P.tZ)(m.Text, {
                          className: "cross-day",
                          children: "跨天",
                        }),
                      (0, P.tZ)(m.Text, {
                        className: "total-time",
                        children: "全程 " + l,
                      }),
                      (0, P.tZ)(m.View, { className: "separator" }),
                      (0, P.BX)(m.Text, {
                        className: "total-price",
                        children: ["约￥", a],
                      }),
                    ],
                  }),
                ],
              });
            },
            D = function (t) {
              var e = t.fromStation,
                i = t.toStation,
                o = t.startDate,
                n = t.trainNo;
              w.ZP.goTimeTable(e, i, n, o);
            };
          var x = f.default.memo(function (t) {
            var e = t.detail,
              i = t.index,
              o = t.originToStation,
              n = t.originFromStation,
              a = t.subTrainTripType;
            if (!e) return null;
            var r = (function (t) {
                var e = t.tripType,
                  i = (0, Z.MW)(t),
                  o = {
                    tripType: e,
                    startMonthDay: (0, Z.e6)(i.startDate),
                    typeName: (0, Z.ur)(e, i.trainNo),
                    startTime: i.startTime,
                    arriveTime: i.arriveTime,
                    fromStation: i.fromStation,
                    toStation: i.toStation,
                    useHourMinutes: (0, Z.zE)(i.useMinutes),
                    trafficDesc: (0, Z.Kn)(t),
                    dayDiff: i.dayDiff,
                    startDate: i.startDate,
                    trainNo: i.trainNo,
                    fromStationDiff: i.fromStationDiff,
                    toStationDiff: i.toStationDiff,
                  };
                return (
                  "F" === e &&
                    ((o.fromStation =
                      i.departAirportShortName + i.departTerminal),
                    (o.toStation = i.arriveAirportShortName + i.arriveTerminal),
                    (o.airIcon = i.airIcon),
                    (o.mealType = i.mealType),
                    (o.planeType = i.planeType),
                    (o.punctuality = i.punctuality)),
                  o
                );
              })(e),
              s = r.startMonthDay,
              c = r.typeName,
              l = r.startTime,
              d = r.arriveTime,
              f = r.dayDiff,
              u = r.fromStation,
              h = r.toStation,
              p = r.useHourMinutes,
              g = r.tripType,
              S = r.trafficDesc,
              T = r.airIcon,
              v = r.mealType,
              w = r.planeType,
              y = r.punctuality,
              N = "_1_0" === a,
              b = "_1_1_" === a,
              k = i + 1;
            return (0, P.tZ)(m.View, {
              className: "smart-trip-detail-item",
              children: (0, P.BX)(m.View, {
                className: "transport-item",
                children: [
                  (0, P.BX)(m.View, {
                    className: "tit",
                    children: [
                      (0, P.tZ)(m.Text, {
                        className: "num bgcolor-primary",
                        children: i + 1,
                      }),
                      (0, P.tZ)(m.Text, {
                        className: "depart-date",
                        children: s + " 出发",
                      }),
                      (0, P.tZ)(m.Text, { className: "separator" }),
                      (0, P.tZ)(m.Text, {
                        className: "tranffic-type",
                        children: c,
                      }),
                    ],
                  }),
                  (0, P.BX)(m.View, {
                    className: "cont",
                    children: [
                      (0, P.BX)(m.View, {
                        className: "from",
                        children: [
                          (0, P.tZ)(m.View, { className: "time", children: l }),
                          (0, P.tZ)(m.View, {
                            className: "station",
                            children: u,
                          }),
                          !!n &&
                            (b || N) &&
                            1 == k &&
                            (null == r ? void 0 : r.fromStationDiff) > 0 &&
                            (0, P.BX)(m.View, {
                              className: "cross-station",
                              children: [n, "站上车"],
                            }),
                        ],
                      }),
                      (0, P.BX)(m.View, {
                        className: "mid",
                        children: [
                          (0, P.tZ)(m.View, {
                            className: "cost-time",
                            children: p,
                          }),
                          "T" === g
                            ? (0, P.tZ)(m.View, {
                                className: "timetable",
                                id: "ANCU",
                                onClick: function () {
                                  return D(r);
                                },
                                children: "时刻表",
                              })
                            : (0, P.tZ)(m.View, { className: "separator" }),
                          (0, P.BX)(m.View, {
                            className:
                              "traffic-desc" + ("F" === g ? " flight" : ""),
                            children: [
                              "F" === g &&
                                (0, P.tZ)(m.Image, {
                                  className: "airline-logo",
                                  src: T,
                                }),
                              S,
                            ],
                          }),
                        ],
                      }),
                      (0, P.BX)(m.View, {
                        className: "to " + (f ? "has-diff" : ""),
                        children: [
                          (0, P.BX)(m.View, {
                            className: "time",
                            children: [
                              d,
                              !!f &&
                                (0, P.tZ)(m.Text, {
                                  className: "diff",
                                  children: "+" + f,
                                }),
                            ],
                          }),
                          (0, P.tZ)(m.View, {
                            className: "station",
                            children: h,
                          }),
                          !!o &&
                            b &&
                            2 == k &&
                            (null == r ? void 0 : r.toStationDiff) > 0 &&
                            (0, P.BX)(m.View, {
                              className: "cross-station",
                              children: [o, "站下车"],
                            }),
                          !!o &&
                            N &&
                            2 == k &&
                            (null == r ? void 0 : r.toStationDiff) < 0 &&
                            (0, P.BX)(m.View, {
                              className: "cross-station",
                              children: ["补票到", o, "站"],
                            }),
                        ],
                      }),
                    ],
                  }),
                  "F" === g &&
                    (0, P.BX)(m.View, {
                      className: "bottom",
                      children: [
                        (0, P.tZ)(m.Text, { children: v }),
                        (0, P.tZ)(m.View, { className: "separator" }),
                        (0, P.tZ)(m.Text, { children: w }),
                        y && (0, P.tZ)(m.View, { className: "separator" }),
                        y && (0, P.tZ)(m.Text, { children: y }),
                      ],
                    }),
                ],
              }),
            });
          });
          var L = function (t) {
            var e = t.transferInfo,
              i = void 0 === e ? {} : e,
              o = t.index,
              n = t.details,
              a = t.isCombine,
              r = t.checkCombineSeat,
              s = i.distance,
              c = i.optimalMinutes,
              l = (0, Z.gd)(n, o),
              d = a ? "同车换座" : l ? "同站换乘" : "市内换乘",
              f = l
                ? (function (t, e) {
                    var i = t[e],
                      o = t[e + 1];
                    if (i && o) {
                      var n = (0, Z.MW)(i),
                        a = (0, Z.MW)(o),
                        r = (n.arriveDate + " " + n.arriveTime).replace(
                          /-/g,
                          "/"
                        ),
                        s = (a.startDate + " " + a.startTime).replace(
                          /-/g,
                          "/"
                        ),
                        c =
                          (new Date(s).getTime() - new Date(r).getTime()) / 6e4;
                      return c <= 0 ? "" : (0, Z.zE)(c);
                    }
                    return "";
                  })(n, o)
                : (0, Z.zE)(c),
              u = "";
            if (a) u = "无需下车, 只要换个座位";
            else {
              var h = "".concat(s ? "间隔".concat(s, "km, ") : ""),
                p = f ? "".concat(l ? "停留" : "耗时约").concat(f) : "";
              u = "".concat(h).concat(p);
            }
            var g = S.default.isTieyou
              ? "https://images3.c-ctrip.com/ztrip/train.xin/2021_02/order/changeseat_ty.png"
              : "https://images3.c-ctrip.com/ztrip/train.xin/2021_02/order/changeseat_zx.png";
            return (0, P.tZ)(m.View, {
              className: "smart-transfer-panel",
              children: (0, P.BX)(m.View, {
                className: "transit",
                children: [
                  !a &&
                    (0, P.tZ)(m.Text, {
                      className: "".concat(
                        l
                          ? "ifont-transfer-same color-blue"
                          : "ifont-transfer-different color-red",
                        " iconfont"
                      ),
                    }),
                  a &&
                    (0, P.tZ)(m.Image, {
                      className: "combine-seat-icon",
                      src: g,
                    }),
                  (0, P.tZ)(m.Text, {
                    className: "transit-type ".concat(
                      l ? "color-blue" : "color-red"
                    ),
                    children: d,
                  }),
                  (0, P.tZ)(m.View, { className: "transit-info", children: u }),
                  a &&
                    (0, P.tZ)(m.View, {
                      className: "ifont-qus iconfont",
                      id: "ANCR",
                      onClick: r,
                    }),
                ],
              }),
            });
          };
          var F = function (t) {
            var e = t.fromNearByFlag,
              i = t.toNearByFlag,
              o = t.fromStationInfo,
              n = void 0 === o ? {} : o,
              a = t.toStationInfo,
              r = void 0 === a ? {} : a,
              s = t.toLocation,
              c = t.details,
              l = void 0 === c ? [] : c,
              d = t.transferInfo,
              f = void 0 === d ? [] : d,
              u = t.note,
              h = t.onNearByBannerClick,
              p = t.isCombine,
              g = t.checkCombineSeat,
              S = t.originFromStation,
              T = t.originToStation,
              v = t.subTrainTripType;
            return 0 == l.length
              ? (0, P.tZ)(m.View, {})
              : (0, P.BX)(m.View, {
                  className: "smart-trip-detail-card",
                  children: [
                    (0, P.BX)(m.View, {
                      className: "transport-path",
                      children: [
                        !!e &&
                          (0, P.BX)(m.View, {
                            className: "origin",
                            id: "ANCS",
                            onClick: function () {
                              return h({ type: "start" });
                            },
                            children: [
                              (0, P.tZ)(m.View, { className: "connector" }),
                              (0, P.tZ)(m.Text, {
                                className: "start font-medium color-white",
                                children: "始",
                              }),
                              (0, P.BX)(m.Text, {
                                className: "title",
                                children: ["前往", n.stationName],
                              }),
                              (0, P.BX)(m.Text, {
                                class: "space",
                                children: ["间隔", n.stationDistance],
                              }),
                              (0, P.tZ)(m.Text, {
                                class: "ifont-arr iconfont",
                              }),
                            ],
                          }),
                        (0, P.tZ)(m.View, {
                          className: "transport-list",
                          children: l.map(function (t, e) {
                            return (0,
                            P.BX)(m.View, { className: "trip-and-transfer", children: [(e < l.length - 1 || i) && (0, P.tZ)(m.View, { className: "connector" }), (0, P.tZ)(x, { detail: t, index: e, originFromStation: S, originToStation: T, subTrainTripType: v }), e !== l.length - 1 && (0, P.tZ)(L, { transferInfo: f[e], index: e, details: l, isCombine: p, checkCombineSeat: g })] }, String(e));
                          }),
                        }),
                        !!i &&
                          (0, P.BX)(m.View, {
                            className: "destination",
                            id: "ANCT",
                            onClick: function () {
                              return h({ type: "end" });
                            },
                            children: [
                              (0, P.tZ)(m.Text, {
                                className: "end font-medium color-white",
                                children: "终",
                              }),
                              (0, P.BX)(m.Text, {
                                className: "title",
                                children: ["前往", s],
                              }),
                              (0, P.BX)(m.Text, {
                                className: "space",
                                children: ["间隔", r.stationDistance],
                              }),
                              (0, P.tZ)(m.Text, {
                                class: "ifont-arr iconfont",
                              }),
                            ],
                          }),
                      ],
                    }),
                    (0, P.BX)(m.View, {
                      className: "note-box",
                      children: [
                        (0, P.tZ)(m.Text, {
                          className: "note",
                          children: "说明：",
                        }),
                        (0, P.tZ)(m.Text, {
                          className: "note-content",
                          children: u,
                        }),
                      ],
                    }),
                  ],
                });
          };
          var M,
            R,
            X = function (t) {
              var e = t.data,
                i = void 0 === e ? {} : e,
                o = t.order,
                n = t.onSeatSelected,
                a = t.getRefundRuleByType;
              return (
                i.seatList &&
                  i.seatList.map(function (t) {
                    t.ticketDesc = (function (t, e) {
                      return "B" === e || "SC" === e
                        ? t.ticketLeft >= 10
                          ? "有票"
                          : t.ticketLeft > 0
                          ? "剩".concat(t.ticketLeft, "张")
                          : "无票"
                        : "T" === e
                        ? t.ticketLeft > 0
                          ? t.ticketLeft >= 20
                            ? "有票"
                            : "剩".concat(t.ticketLeft, "张")
                          : "无票"
                        : "F" === e
                        ? t.ticketLeft
                          ? Number.isNaN(Number(t.ticketLeft))
                            ? ""
                            : "(剩".concat(t.ticketLeft, "张)")
                          : ""
                        : t.ticketLeft > 0
                        ? t.ticketLeft >= 20
                          ? ""
                          : "剩(".concat(t.ticketLeft, "张)")
                        : "(无票)";
                    })(t, i.tripType);
                  }),
                (0, P.tZ)(m.View, {
                  className: "smart-trip-seat",
                  children: (0, P.BX)(m.View, {
                    className: "seat " + B.S,
                    children: [
                      (0, P.BX)(m.View, {
                        className: "header",
                        children: [
                          (0, P.tZ)(m.Text, {
                            className: "title",
                            children: i.orderDesc + " " + i.typeName,
                          }),
                          ["T", "B", "SC"].includes(i.tripType) &&
                            (0, P.BX)(m.View, {
                              className: "refund-rule",
                              "data-type": i.tripType,
                              "data-order": o,
                              id: "ANCV",
                              onClick: a,
                              children: [
                                "退改规则",
                                (0, P.tZ)(m.Text, {
                                  className: "ifont-arr iconfont",
                                }),
                              ],
                            }),
                        ],
                      }),
                      (0, P.tZ)(m.View, {
                        className: "seatlist",
                        children:
                          i.seatList &&
                          i.seatList.map(function (t, e) {
                            return (0, P.BX)(
                              m.View,
                              {
                                className:
                                  "item " +
                                  (t.isSelected ? "current " : "") +
                                  (t.disabled ? "disabled" : ""),
                                id: "ANCW",
                                onClick: function () {
                                  return n({
                                    selected: t.isSelected,
                                    order: o,
                                    seatIndex: e,
                                    disabled: t.disabled,
                                  });
                                },
                                children: [
                                  (0, P.tZ)(m.View, {
                                    className: "seat-name",
                                    children: t.seatName,
                                  }),
                                  "T" === i.tripType &&
                                    (0, P.BX)(m.View, {
                                      className: "seat-num",
                                      children: [
                                        t.ticketDesc,
                                        0 == t.ticketLeft &&
                                          (0, P.tZ)(m.View, {
                                            className: "rob",
                                            children: i.jlTicket
                                              ? "(预约)"
                                              : "(抢)",
                                          }),
                                      ],
                                    }),
                                  (0, P.tZ)(m.View, {
                                    className: "seat-price color-red",
                                    children:
                                      t.price +
                                      (["F", "S"].includes(i.tripType)
                                        ? t.ticketDesc
                                        : ""),
                                  }),
                                  ["F", "S"].includes(i.tripType) &&
                                    (0, P.BX)(m.View, {
                                      className: "refund-rule",
                                      "data-type": i.tripType,
                                      "data-order": o,
                                      "data-seat_index": e,
                                      id: "ANCX",
                                      onClick: a,
                                      children: [
                                        "退改规则",
                                        (0, P.tZ)(m.Text, {
                                          className: "ifont-arr iconfont",
                                        }),
                                      ],
                                    }),
                                  ["B", "SC"].includes(i.tripType) &&
                                    (0, P.tZ)(m.View, {
                                      className: "seat-num bus",
                                      children: t.ticketDesc,
                                    }),
                                  (0, P.tZ)(m.Text, {
                                    className:
                                      "ifont-gou iconfont bgcolor-primary",
                                  }),
                                ],
                              },
                              ""
                                .concat(t.seatName, "-")
                                .concat(t.price, "-")
                                .concat(e)
                            );
                          }),
                      }),
                    ],
                  }),
                })
              );
            },
            A = i(33680),
            _ =
              (0, p.h)(!0)(
                (M = (function (t) {
                  (0, l.Z)(i, t);
                  var e = (0, d.Z)(i);
                  function i(t) {
                    return (0, s.Z)(this, i), e.call(this, t);
                  }
                  return (
                    (0, c.Z)(i, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          var t = this.props,
                            e = t.tdWidth,
                            i = t.columnInfo,
                            o = t.rowInfo;
                          this.setState({
                            columnInfo: i,
                            rowInfo: o,
                            tdWidth: e,
                          });
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var t = this.state,
                            e = t.columnInfo,
                            i = t.rowInfo,
                            o = t.tdWidth;
                          return (0, P.tZ)(m.View, {
                            className: "smart-mini-table",
                            children: (0, P.BX)(m.View, {
                              className: "zx-table",
                              children: [
                                (0, P.tZ)(m.View, {
                                  className: "tr thead s-class-header",
                                  children: e.map(function (t, e) {
                                    return (0,
                                    P.tZ)(m.View, { className: "td", style: "width:".concat(h().pxTransform(o)), children: t }, e);
                                  }),
                                }),
                                (0, P.tZ)(m.View, {
                                  children: i.map(function (t, e) {
                                    return (0, P.tZ)(
                                      m.View,
                                      {
                                        className: "tr s-class-row",
                                        children: t.map(function (t, e) {
                                          return (0,
                                          P.tZ)(m.View, { className: "td", style: "width:".concat(h().pxTransform(o)), children: t }, e);
                                        }),
                                      },
                                      e
                                    );
                                  }),
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
              ) || M,
            W =
              (0, p.h)(!0)(
                (R = (function (t) {
                  (0, l.Z)(i, t);
                  var e = (0, d.Z)(i);
                  function i(t) {
                    var o;
                    return (
                      (0, s.Z)(this, i),
                      ((o = e.call(this, t)).state = {
                        isTieyou: S.default.isTieyou,
                        rowInfo: [],
                        columnInfo: [],
                        isShow: !1,
                        isShowTab: 1,
                        scrollIntoView: "",
                        retreatDomHeight: 0,
                        section3Height: 0,
                        section4Height: 0,
                        isOtherMode: !1,
                      }),
                      o
                    );
                  }
                  return (
                    (0, c.Z)(i, [
                      {
                        key: "UNSAFE_componentWillReceiveProps",
                        value: function (t) {
                          if (
                            (console.log(
                              "UNSAFE_componentWillReceiveProps-----\x3e"
                            ),
                            !this.props.visible && t.visible)
                          ) {
                            var e = t.info,
                              i = e.bookModalTabList,
                              o = void 0 === i ? {} : i,
                              n = e.orderInfo,
                              a = void 0 === n ? {} : n,
                              r = e.checkInfo,
                              s = void 0 === r ? {} : r,
                              c = e.wipeInfo,
                              l = void 0 === c ? {} : c,
                              d = e.retreatInfo,
                              f = void 0 === d ? {} : d,
                              u = e.modelInfo,
                              h = void 0 === u ? {} : u,
                              m = e.mealInfo,
                              p = void 0 === m ? {} : m,
                              g = [],
                              S = [],
                              T = "",
                              v = [],
                              w = "",
                              y = "",
                              N = {},
                              b = "";
                            if (Object.keys(h).length > 0) {
                              var k = f.noticeContent[0].content;
                              (b = f.title),
                                this.setState({
                                  itemContent: k,
                                  isOtherMode: !0,
                                });
                            } else {
                              var C = JSON.parse(
                                f[0].noticeContent[0].content[0]
                              )[1];
                              (T = C.ticketRefundDesc),
                                C.refundRuleModelList.forEach(function (t, e) {
                                  if (0 === e)
                                    Object.keys(t).forEach(function (e) {
                                      g.push(t[e]);
                                    });
                                  else {
                                    var i = [];
                                    Object.keys(t).forEach(function (e) {
                                      var o = [];
                                      o.push(t.timeDesc),
                                        o.push(t.ruleDesc),
                                        i.push(t[e]);
                                    }),
                                      S.push(i);
                                  }
                                }),
                                (w = JSON.parse(
                                  s.noticeContent[0].content[0]
                                ).address),
                                (y = JSON.parse(
                                  s.noticeContent[0].content[0]
                                ).stationName),
                                console.log("name", y),
                                (v = [
                                  {
                                    id: 1,
                                    latitude: (N = JSON.parse(
                                      s.noticeContent[0].content[0]
                                    )).baiduY,
                                    longitude: N.baiduX,
                                    iconPath:
                                      "https://images3.c-ctrip.com/train/wechat/bus/buslogo.png",
                                    width: 20,
                                    height: 20,
                                    callout: {
                                      display: "ALWAYS",
                                      content: y,
                                      borderRadius: 18,
                                      bgColor: "#FFFFFF",
                                      padding: 5,
                                      textAlign: "center",
                                    },
                                  },
                                ]),
                                (b = f[0].title);
                            }
                            this.setState({
                              rowInfo: S,
                              columnInfo: g,
                              bookModalTabList: o,
                              orderInfo: a,
                              checkInfo: s,
                              wipeInfo: l,
                              retreatInfo: f,
                              modelInfo: h,
                              mealInfo: p,
                              mapInfo: N,
                              markers: v,
                              checkAddress: w,
                              checkName: y,
                              ticketRefundDesc: T,
                              retreatTitle: b,
                            });
                          }
                          this.setState({ isShow: t.visible });
                        },
                      },
                      {
                        key: "onClickMask",
                        value: function () {
                          this.props.onClose();
                        },
                      },
                      {
                        key: "onSwitchTab",
                        value: function (t) {
                          var e,
                            i,
                            o = this.state.isOtherMode,
                            n = t.currentTarget.dataset.type;
                          (e = "tab1" === n ? 2 : "tab2" === n ? 3 : 1),
                            (i = o
                              ? "tab0" === n
                                ? "section0"
                                : "tab1" === n
                                ? "section3"
                                : "section4"
                              : "tab0" === n
                              ? "section0"
                              : "section4"),
                            this.setState({ isShowTab: e, scrollIntoView: i });
                        },
                      },
                      {
                        key: "onBookModalScroll",
                        value: function (t) {
                          var e = this,
                            i = t.detail.scrollTop,
                            o = this.state,
                            n = o.retreatDomHeight,
                            a = o.isOtherMode,
                            r = o.section3Height,
                            s = o.section4Height,
                            c = new Date().getTime();
                          if (this._lastScrollTopTime) {
                            if (!(c - this._lastScrollTopTime < 200)) {
                              this._lastScrollTopTime = c;
                              var l = n,
                                d = r,
                                f = s;
                              if (l)
                                a
                                  ? i >= r && i < s
                                    ? this.setState({ isShowTab: 2 })
                                    : i >= s
                                    ? this.setState({ isShowTab: 3 })
                                    : this.setState({ isShowTab: 1 })
                                  : i >= l
                                  ? this.setState({ isShowTab: 2 })
                                  : this.setState({ isShowTab: 1 });
                              else if (a) {
                                var u = [1, 2, 3, 4].map(function (t) {
                                  return e.getHeightPromise(
                                    "#section".concat(t)
                                  );
                                });
                                Promise.all(u).then(function (t) {
                                  for (var o = 0; o < t.length; o++) l += t[o];
                                  (d = l - t[4]),
                                    (f = l),
                                    e.setState({
                                      retreatDomHeight: l,
                                      section3Height: d,
                                      section4Height: f,
                                    }),
                                    i >= r && i < s
                                      ? e.setState({ isShowTab: 2 })
                                      : i >= s
                                      ? e.setState({ isShowTab: 3 })
                                      : e.setState({ isShowTab: 1 });
                                });
                              } else {
                                var h = [1, 2, 3].map(function (t) {
                                  return e.getHeightPromise(
                                    "#section".concat(t)
                                  );
                                });
                                Promise.all(h).then(function (t) {
                                  for (var o = 0; o < t.length; o++) l += t[o];
                                  e.setState({ retreatDomHeight: l }),
                                    i >= l
                                      ? e.setState({ isShowTab: 2 })
                                      : e.setState({ isShowTab: 1 });
                                });
                              }
                            }
                          } else this._lastScrollTopTime = c;
                        },
                      },
                      {
                        key: "getHeightPromise",
                        value: function (t) {
                          return new Promise(function (e, i) {
                            var o = S.default.isH5
                              ? h().createSelectorQuery()
                              : h()
                                  .createSelectorQuery()
                                  .in((0, g.getCurrentPage)());
                            o.select("".concat(t)).boundingClientRect(),
                              o.exec(function (t) {
                                t[0] && t[0].height
                                  ? e(t[0].height)
                                  : i("获取高度失败");
                              });
                          });
                        },
                      },
                      {
                        key: "gotoMapPage",
                        value: function () {
                          var t = this.state,
                            e = t.mapInfo,
                            i = t.checkName,
                            o = t.checkAddress;
                          h().openLocation({
                            latitude: parseFloat(e.baiduY),
                            longitude: parseFloat(e.baiduX),
                            name: i,
                            address: o,
                          });
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var t = this,
                            e = this.state,
                            i = e.isTieyou,
                            o = e.bookModalTabList,
                            n = e.orderInfo,
                            a = e.checkInfo,
                            r = e.wipeInfo,
                            s = e.retreatInfo,
                            c = e.modelInfo,
                            l = e.mealInfo,
                            d = e.rowInfo,
                            f = e.columnInfo,
                            u = e.isShow,
                            h = e.isShowTab,
                            p = e.mapInfo,
                            g = e.scrollIntoView,
                            T = e.markers,
                            v = e.itemContent,
                            w = e.ticketRefundDesc,
                            y = e.retreatTitle,
                            N = e.isOtherMode;
                          return u
                            ? (0, P.tZ)(m.View, {
                                className: "smart-bus-refund-pop",
                                children: (0, P.BX)(m.View, {
                                  className: "".concat(
                                    i ? "ty" : "zx",
                                    " mod-book-modal"
                                  ),
                                  children: [
                                    (0, P.tZ)(m.View, {
                                      className: "modal-mask ".concat(
                                        u ? "visible" : "hidden"
                                      ),
                                      id: "ANAj",
                                      onClick: this.onClickMask.bind(this),
                                    }),
                                    (0, P.BX)(m.View, {
                                      className: "modal-wrapper "
                                        .concat(u ? "visible" : "hidden", " ")
                                        .concat(S.default.isH5 ? "h5" : ""),
                                      children: [
                                        (0, P.tZ)(m.View, {
                                          className: "tabbar "
                                            .concat(
                                              1 === h
                                                ? "fir"
                                                : 2 === h
                                                ? "sec"
                                                : "thir",
                                              " "
                                            )
                                            .concat(
                                              o.length > 2 ? "adapt" : ""
                                            ),
                                          children: o.map(function (e, i) {
                                            return (0,
                                            P.tZ)(m.Text, { className: "item", "data-type": "tab".concat(i), id: "ANAk", onClick: t.onSwitchTab.bind(t), children: e }, i);
                                          }),
                                        }),
                                        (0, P.BX)(m.ScrollView, {
                                          className: "content",
                                          scrollY: !0,
                                          scrollWithAnimation: !0,
                                          scrollIntoView: g,
                                          onScroll:
                                            this.onBookModalScroll.bind(this),
                                          children: [
                                            (0, P.tZ)(m.View, {
                                              id: "section0",
                                              className: "hid",
                                            }),
                                            n &&
                                              n.noticeContent &&
                                              (0, P.BX)(m.View, {
                                                id: "section1",
                                                className: "order",
                                                children: [
                                                  (0, P.tZ)(m.View, {
                                                    className: "desc",
                                                    children: n.title,
                                                  }),
                                                  (0, P.BX)(m.View, {
                                                    className: "deta",
                                                    children: [
                                                      (0, P.BX)(m.View, {
                                                        className: "item",
                                                        children: [
                                                          (0, P.tZ)(m.View, {
                                                            className: "tit",
                                                            children:
                                                              n.noticeContent[0]
                                                                .title,
                                                          }),
                                                          (0, P.tZ)(m.View, {
                                                            className: "con",
                                                            children:
                                                              n.noticeContent[0].content.join(
                                                                "/"
                                                              ),
                                                          }),
                                                        ],
                                                      }),
                                                      (0, P.BX)(m.View, {
                                                        className: "item",
                                                        children: [
                                                          (0, P.tZ)(m.View, {
                                                            className: "tit",
                                                            children:
                                                              n.noticeContent[1]
                                                                .title,
                                                          }),
                                                          (0, P.tZ)(m.View, {
                                                            className: "con",
                                                            children:
                                                              n.noticeContent[1].content.join(
                                                                "/"
                                                              ),
                                                          }),
                                                        ],
                                                      }),
                                                      (0, P.BX)(m.View, {
                                                        className: "item",
                                                        children: [
                                                          (0, P.tZ)(m.View, {
                                                            className: "tit",
                                                            children:
                                                              n.noticeContent[2]
                                                                .title,
                                                          }),
                                                          (0, P.tZ)(m.View, {
                                                            className: "con",
                                                            children:
                                                              n.noticeContent[2]
                                                                .content,
                                                          }),
                                                        ],
                                                      }),
                                                      (0, P.BX)(m.View, {
                                                        className: "item",
                                                        children: [
                                                          (0, P.tZ)(m.View, {
                                                            className: "tit",
                                                            children:
                                                              n.noticeContent[3]
                                                                .title,
                                                          }),
                                                          (0, P.tZ)(m.View, {
                                                            className: "con",
                                                            children:
                                                              n.noticeContent[3]
                                                                .content,
                                                          }),
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                            c.noticeContent &&
                                              (0, P.BX)(m.View, {
                                                id: "section1",
                                                className: "model",
                                                children: [
                                                  (0, P.tZ)(m.View, {
                                                    className: "desc",
                                                    children: c.title,
                                                  }),
                                                  (0, P.BX)(m.View, {
                                                    className: "deta",
                                                    children: [
                                                      (0, P.tZ)(m.Swiper, {
                                                        className: "img-cont",
                                                        indicatorDots:
                                                          "".concat(
                                                            c.noticeContent[0]
                                                              .content.length >
                                                              1
                                                          ),
                                                        children:
                                                          c.noticeContent[0].content.map(
                                                            function (t, e) {
                                                              return (0, P.tZ)(
                                                                m.SwiperItem,
                                                                {
                                                                  className:
                                                                    "img-item",
                                                                  children: (0,
                                                                  P.tZ)(
                                                                    m.View,
                                                                    {
                                                                      className:
                                                                        "car-img",
                                                                      style:
                                                                        "background: url(".concat(
                                                                          t,
                                                                          ") no-repeat;background-size:contain;height:260rpx;"
                                                                        ),
                                                                    }
                                                                  ),
                                                                },
                                                                e
                                                              );
                                                            }
                                                          ),
                                                      }),
                                                      c.noticeContent.map(
                                                        function (t, e) {
                                                          return (
                                                            0 !== e &&
                                                            (0, P.tZ)(
                                                              m.View,
                                                              {
                                                                className:
                                                                  "tit",
                                                                children:
                                                                  t.title,
                                                              },
                                                              e
                                                            )
                                                          );
                                                        }
                                                      ),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                            l.noticeContent &&
                                              (0, P.BX)(m.View, {
                                                id: "section2",
                                                className: "meal",
                                                children: [
                                                  (0, P.tZ)(m.View, {
                                                    className: "desc",
                                                    children: l.title,
                                                  }),
                                                  (0, P.tZ)(m.View, {
                                                    className: "deta",
                                                    children: (0, P.BX)(
                                                      m.View,
                                                      {
                                                        className: "item",
                                                        children: [
                                                          (0, P.tZ)(m.View, {
                                                            className: "tit",
                                                            children:
                                                              l.noticeContent[0]
                                                                .title,
                                                          }),
                                                          (0, P.tZ)(m.View, {
                                                            className: "con",
                                                            children:
                                                              l.noticeContent[0]
                                                                .content,
                                                          }),
                                                        ],
                                                      }
                                                    ),
                                                  }),
                                                ],
                                              }),
                                            (0, P.BX)(m.View, {
                                              id: "".concat(
                                                N ? "section3" : "section2"
                                              ),
                                              className: "check",
                                              children: [
                                                (0, P.tZ)(m.View, {
                                                  className: "desc",
                                                  children: a.title,
                                                }),
                                                N
                                                  ? (0, P.tZ)(m.View, {
                                                      className: "deta",
                                                      children:
                                                        a.noticeContent.map(
                                                          function (t, e) {
                                                            return (0, P.BX)(
                                                              m.View,
                                                              {
                                                                className:
                                                                  "item",
                                                                children: [
                                                                  (0, P.tZ)(
                                                                    m.Text,
                                                                    {
                                                                      className:
                                                                        "tit",
                                                                      children:
                                                                        t.title,
                                                                    }
                                                                  ),
                                                                  (0, P.tZ)(
                                                                    m.Text,
                                                                    {
                                                                      className:
                                                                        "con",
                                                                      children:
                                                                        t.content,
                                                                    }
                                                                  ),
                                                                ],
                                                              },
                                                              e
                                                            );
                                                          }
                                                        ),
                                                    })
                                                  : p &&
                                                    p.id &&
                                                    (0, P.BX)(m.Block, {
                                                      children: [
                                                        (0, P.tZ)(m.Map, {
                                                          className: "map",
                                                          longitude: p.baiduX,
                                                          latitude: p.baiduY,
                                                          scale: 18,
                                                          markers: T,
                                                          showLocation: !0,
                                                          enableScroll: !1,
                                                          enableZoom: !1,
                                                          enableRotate: !1,
                                                          id: "ANAl",
                                                          onClick:
                                                            this.gotoMapPage,
                                                        }),
                                                        (0, P.tZ)(m.View, {
                                                          className: "deta",
                                                          children:
                                                            a.noticeContent.map(
                                                              function (t, e) {
                                                                return (
                                                                  0 !== e &&
                                                                  (0, P.BX)(
                                                                    m.View,
                                                                    {
                                                                      className:
                                                                        "item",
                                                                      children:
                                                                        [
                                                                          (0,
                                                                          P.tZ)(
                                                                            m.Text,
                                                                            {
                                                                              className:
                                                                                "tit",
                                                                              children:
                                                                                t.title,
                                                                            }
                                                                          ),
                                                                          (0,
                                                                          P.tZ)(
                                                                            m.Text,
                                                                            {
                                                                              className:
                                                                                "con",
                                                                              children:
                                                                                t.content,
                                                                            }
                                                                          ),
                                                                        ],
                                                                    },
                                                                    String(e)
                                                                  )
                                                                );
                                                              }
                                                            ),
                                                        }),
                                                      ],
                                                    }),
                                              ],
                                            }),
                                            r.noticeContent &&
                                              (0, P.BX)(m.View, {
                                                id: "section3",
                                                className: "wipe",
                                                children: [
                                                  (0, P.tZ)(m.View, {
                                                    className: "desc",
                                                    children: r.title,
                                                  }),
                                                  (0, P.tZ)(m.View, {
                                                    className: "deta",
                                                    children:
                                                      r.noticeContent.map(
                                                        function (t, e) {
                                                          return (0, P.BX)(
                                                            m.View,
                                                            {
                                                              className: "item",
                                                              children: [
                                                                (0, P.tZ)(
                                                                  m.Text,
                                                                  {
                                                                    className:
                                                                      "tit",
                                                                    children:
                                                                      t.title,
                                                                  }
                                                                ),
                                                                (0, P.tZ)(
                                                                  m.Text,
                                                                  {
                                                                    className:
                                                                      "con",
                                                                    children:
                                                                      t.content,
                                                                  }
                                                                ),
                                                              ],
                                                            },
                                                            e
                                                          );
                                                        }
                                                      ),
                                                  }),
                                                ],
                                              }),
                                            (0, P.BX)(m.View, {
                                              id: "section4",
                                              className: "retreat",
                                              children: [
                                                (0, P.tZ)(m.View, {
                                                  className: "desc",
                                                  children: y,
                                                }),
                                                (0, P.BX)(m.View, {
                                                  className: "deta",
                                                  children: [
                                                    v && v.length > 1
                                                      ? (0, P.BX)(m.Block, {
                                                          children: [
                                                            (0, P.tZ)(m.View, {
                                                              className:
                                                                "tit no-wrap",
                                                              children:
                                                                s
                                                                  .noticeContent[0]
                                                                  .title,
                                                            }),
                                                            v.map(function (
                                                              t,
                                                              e
                                                            ) {
                                                              return (0, P.tZ)(
                                                                m.View,
                                                                {
                                                                  className:
                                                                    "con",
                                                                  children: t,
                                                                },
                                                                e
                                                              );
                                                            }),
                                                          ],
                                                        })
                                                      : (0, P.BX)(m.Block, {
                                                          children: [
                                                            (0, P.tZ)(m.View, {
                                                              className:
                                                                "tit no-wrap",
                                                              children:
                                                                s[0]
                                                                  .noticeContent[0]
                                                                  .title,
                                                            }),
                                                            (0, P.tZ)(_, {
                                                              tdWidth: "300",
                                                              columnInfo: f,
                                                              rowInfo: d,
                                                            }),
                                                            (0, P.tZ)(m.View, {
                                                              className: "lst",
                                                              children: w,
                                                            }),
                                                          ],
                                                        }),
                                                    (0, P.BX)(m.View, {
                                                      className: "aff",
                                                      children: [
                                                        (0, P.tZ)(m.View, {
                                                          className:
                                                            "tit no-wrap",
                                                          children:
                                                            s[0]
                                                              .noticeContent[1]
                                                              .title,
                                                        }),
                                                        (0, P.tZ)(m.View, {
                                                          className: "con",
                                                          children:
                                                            s[0]
                                                              .noticeContent[1]
                                                              .content,
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              })
                            : (0, P.tZ)(m.View, {});
                        },
                      },
                    ]),
                    i
                  );
                })(f.default.Component))
              ) || R,
            G = i(67751),
            E = i(80836),
            H = i(34229),
            q = i(91006),
            j = i.n(q),
            O = {
              robImg:
                "https://images3.c-ctrip.com/ztrip/train.xin/2022_02/smart/toast_pic_4.webp",
              subRobImg:
                "https://images3.c-ctrip.com/ztrip/train.xin/2022_02/smart/toast_pic_5.webp",
            },
            Q = {
              robImg:
                "https://images3.c-ctrip.com/ztrip/train.xin/2022_02/smart/toast_pic_4_ty.webp",
              subRobImg:
                "https://images3.c-ctrip.com/ztrip/train.xin/2022_02/smart/toast_pic_5_ty.webp",
            },
            z = function (t) {
              var e = t.isShow,
                i = t.isJlTicket,
                o = t.onClose,
                n = t.onConfirm,
                a = t.subTrainTripType,
                r = i ? "「未开售」" : "「需抢票」";
              return (
                "_1_0" === a
                  ? (r = "「上车补票」")
                  : "_1_1_" === a && (r = "「跨站多买」"),
                (0, P.tZ)(H.ZtActivityPop, {
                  show: e,
                  onClose: o,
                  onWrapClose: o,
                  children: (0, P.BX)(m.View, {
                    className: "smart-tripdetail-robmodal",
                    children: [
                      (0, P.tZ)(m.Text, {
                        className: "title",
                        children: i ? "预约票提示" : "抢票提示",
                      }),
                      (0, P.BX)(m.Text, {
                        className: "sub-title",
                        children: [
                          "当前行程包含",
                          (0, P.tZ)(m.Text, {
                            className: "color-primary",
                            children: r,
                          }),
                          "车票",
                        ],
                      }),
                      (0, P.BX)(m.Text, {
                        className: "sub-title",
                        children: [
                          "支付成功后系统将自动开启",
                          i ? "预约抢票" : "抢票",
                        ],
                      }),
                      (0, P.tZ)(m.Image, {
                        className: "icon",
                        src: S.default.isTieyou
                          ? Q[i ? "subRobImg" : "robImg"]
                          : O[i ? "subRobImg" : "robImg"],
                      }),
                      (0, P.tZ)(m.Text, {
                        className: "desc",
                        children:
                          "若抢票失败，平台不承担已出票部分的退票手续费",
                      }),
                      (0, P.BX)(m.View, {
                        className: "flex btn-wrap",
                        children: [
                          (0, P.tZ)(m.View, {
                            className: "btn cancle",
                            id: "ANCP",
                            onClick: o,
                            children: "我再看看",
                          }),
                          (0, P.tZ)(m.View, {
                            className: "btn confirm",
                            id: "ANCQ",
                            onClick: n,
                            children: "继续预订",
                          }),
                        ],
                      }),
                    ],
                  }),
                })
              );
            };
          (z.propTypes = {
            isShow: j().bool,
            isJlTicket: j().bool,
            onClose: j().func,
            onConfirm: j().func,
            subTrainTripType: j().string,
          }),
            (z.defaultProps = {
              isShow: !1,
              isJlTicket: !1,
              onClose: function () {},
              onConfirm: function () {},
              subTrainTripType: "",
            });
          var Y,
            J = (0, f.memo)(z),
            U = f.default.memo(function (t) {
              var e,
                i,
                o,
                n,
                a = t.data,
                r = t.onShow,
                s = t.ubtTrace,
                c = t.details,
                l =
                  null === (e = (0, Z.MW)(c[0])) || void 0 === e
                    ? void 0
                    : e.fromStation,
                d =
                  null === (i = (0, Z.MW)(c[c.length - 1])) || void 0 === i
                    ? void 0
                    : i.toStation;
              return (
                (0, f.useEffect)(function () {
                  s("221096", { ODName: "".concat(l, "-").concat(d) });
                }),
                null != a &&
                null !== (o = a.entranceDrawerTips) &&
                void 0 !== o &&
                o.length
                  ? (0, P.tZ)(m.Swiper, {
                      autoplay: !0,
                      vertical: !0,
                      className: "smart-x-notice-swiper",
                      interval: 3e3,
                      circular: !0,
                      children:
                        null == a ||
                        null === (n = a.entranceDrawerTips) ||
                        void 0 === n
                          ? void 0
                          : n.map(function (t, e) {
                              return (0, P.tZ)(
                                m.SwiperItem,
                                {
                                  id: "ANCO",
                                  onClick: function () {
                                    r(),
                                      s("221095", {
                                        ODName: "".concat(l, "-").concat(d),
                                      });
                                  },
                                  children: (0, P.BX)(m.View, {
                                    className:
                                      "notice-item flex-align-items-center",
                                    children: [
                                      (0, P.BX)(m.View, {
                                        className: "flex-1 content",
                                        children: [
                                          null == t ? void 0 : t.title,
                                          "：",
                                          null == t ? void 0 : t.content,
                                        ],
                                      }),
                                      (0, P.tZ)(m.Text, {
                                        className: "ifont-arr iconfont arrow",
                                      }),
                                    ],
                                  }),
                                },
                                "notice_".concat(e)
                              );
                            }),
                    })
                  : (0, P.tZ)(m.View, {})
              );
            }),
            K = "YYYY-MM-DD",
            $ =
              (0, p.h)()(
                (Y = (function (t) {
                  (0, l.Z)(i, t);
                  var e = (0, d.Z)(i);
                  function i(t) {
                    var o;
                    return (
                      (0, s.Z)(this, i),
                      ((o = e.call(this, t)).state = {
                        totalMinutes: null,
                        totalPrice: null,
                        details: [],
                        transferInfo: [],
                        dayDiff: 0,
                        fromNearByFlag: !1,
                        toNearByFlag: !1,
                        fromStationInfo: {},
                        toStationInfo: {},
                        tripSeats: [],
                        selectSeats: [],
                        showFlightRefundPop: !1,
                        flightProductInfo: {},
                        showBusRefundPop: !1,
                        busBookNoticeInfo: {},
                        showScenicBusRefundPop: !1,
                        scenicBusBookNoticeInfo: {},
                        showShipRefundPop: !1,
                        shipRefundInfo: [],
                        trafficGuideInfo: {},
                        trafficGuidePopVisible: !1,
                        trafficGuideType: "",
                        isCombine: !1,
                        showType: "",
                        originFromStation: "",
                        originFromStationCode: "",
                        originStartTime: "",
                        originToStationCode: "",
                        originArriveTime: "",
                        originToStation: "",
                        subTrainTripType: "",
                      }),
                      (o.pageId = S.default.isTieyou
                        ? "10650054395"
                        : "10650054393"),
                      (o.hasToastFlightAgeSeat = !1),
                      (o.hasInit = !1),
                      (o.pageStartTime = Date.now()),
                      (o.searchParams = {}),
                      (o.isSingleShift = !1),
                      (o.schemeId = ""),
                      (o.fromSource = ""),
                      (o.orderSource = "smarthome"),
                      o
                    );
                  }
                  return (
                    (0, c.Z)(i, [
                      {
                        key: "componentDidMount",
                        value: (function () {
                          var t = (0, r.Z)(
                            (0, a.Z)().mark(function t() {
                              var e,
                                i,
                                o,
                                n,
                                r,
                                s,
                                c = this;
                              return (0, a.Z)().wrap(
                                function (t) {
                                  for (;;)
                                    switch ((t.prev = t.next)) {
                                      case 0:
                                        if (
                                          (console.log("onLoad"),
                                          (0, g.setPageConfig)({
                                            backgroundColor: S.default.isTieyou
                                              ? "#3C4365"
                                              : "#0066E6",
                                            backgroundColorBottom: "#efefef",
                                          }),
                                          (e = (0, u.getCurrentInstance)()
                                            .router.params),
                                          (i = e.data || {}),
                                          (this.schemeId = decodeURIComponent(
                                            e.schemeId || i.schemeId
                                          )),
                                          (this.schemeInfo = decodeURIComponent(
                                            e.schemeInfo || i.schemeInfo
                                          )),
                                          (o =
                                            e.schemeInfoV1 || i.schemeInfoV1),
                                          (this.schemeInfoV1 =
                                            decodeURIComponent(o)),
                                          (this.fromSource =
                                            e.fromSource ||
                                            i.fromSource ||
                                            "else"),
                                          (this.searchParams =
                                            i.searchParams || {}),
                                          (n =
                                            e.orderSource || i.orderSource) &&
                                            (this.orderSource = n),
                                          !o)
                                        ) {
                                          t.next = 16;
                                          break;
                                        }
                                        this.getTripDetailBySchemeInfo().then(
                                          function (t) {
                                            t && c.initPage(t);
                                          }
                                        ),
                                          (t.next = 20);
                                        break;
                                      case 16:
                                        return (
                                          (t.next = 18), this.getTripData()
                                        );
                                      case 18:
                                        (r = t.sent), this.initPage(r);
                                      case 20:
                                        (s = {
                                          fromSource: this.fromSource,
                                          type: this.isSingleShift
                                            ? "single"
                                            : "multiple",
                                        }),
                                          (0, Z.Sn)(this, "186339", s);
                                      case 22:
                                      case "end":
                                        return t.stop();
                                    }
                                },
                                t,
                                this
                              );
                            })
                          );
                          return function () {
                            return t.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "getTripDetailBySchemeInfo",
                        value: function () {
                          var t = this;
                          return (
                            (0, g.showLoading)(),
                            (0, y.sC)({ schemeInfoV1: this.schemeInfoV1 })
                              .then(function (e) {
                                var i, o;
                                if (
                                  1 === e.resultCode &&
                                  ((null !== (i = e.trip) &&
                                    void 0 !== i &&
                                    i.subTrain) ||
                                    (null !== (o = e.trip) &&
                                      void 0 !== o &&
                                      o.transfer))
                                ) {
                                  var n, a, r, s, c;
                                  if (
                                    (null === (n = e.trip) ||
                                    void 0 === n ||
                                    null === (a = n.epidemicRemind) ||
                                    void 0 === a ||
                                    null === (r = a.noticeRemindInfoList) ||
                                    void 0 === r
                                      ? void 0
                                      : r.length) > 0
                                  ) {
                                    var l = e.trip.epidemicRemind,
                                      d = {
                                        entrancePopup: {
                                          title: l.title,
                                          btn: "我知道了",
                                        },
                                        isShow: !1,
                                        entranceDrawerTips:
                                          l.noticeRemindInfoList.map(function (
                                            t
                                          ) {
                                            return {
                                              title: t.epidemicTitle,
                                              content: t.content,
                                            };
                                          }),
                                      };
                                    t.setState({ epidmicInfo: d });
                                  }
                                  if (
                                    "SubTrain" ==
                                    (null === (s = e.trip) || void 0 === s
                                      ? void 0
                                      : s.tripType)
                                  ) {
                                    var f,
                                      u =
                                        (null == e ||
                                        null === (f = e.trip) ||
                                        void 0 === f
                                          ? void 0
                                          : f.subTrain) || {},
                                      h = u.subTrains,
                                      m = u.totalMinutes,
                                      p = u.totalPrice,
                                      S = u.transferInfo,
                                      T = u.originFromStation,
                                      v = u.originToStation,
                                      w = u.tripType,
                                      y = u.originArriveTime,
                                      N = void 0 === y ? "" : y,
                                      b = u.originStartTime,
                                      k = void 0 === b ? "" : b,
                                      C = u.originFromStationCode,
                                      I = void 0 === C ? "" : C,
                                      Z = u.originToStationCode,
                                      B = void 0 === Z ? "" : Z,
                                      P = {
                                        details: h.map(function (t) {
                                          return { tripType: "T", train: t };
                                        }),
                                        totalMinutes: m,
                                        totalPrice: p,
                                        transferInfo: S,
                                        originFromStation: T,
                                        originToStation: v,
                                        subTrainTripType: w,
                                        originArriveTime: N,
                                        originStartTime: k,
                                        originFromStationCode: I,
                                        originToStationCode: B,
                                      };
                                    return t.setState({ isCombine: !0 }), P;
                                  }
                                  if (
                                    "Transfer" ==
                                    (null === (c = e.trip) || void 0 === c
                                      ? void 0
                                      : c.tripType)
                                  )
                                    return e.trip.transfer;
                                } else
                                  (0, g.showModal)({
                                    title: "温馨提示",
                                    content:
                                      "行程方案已过期，请返回重新刷新一下吧～",
                                    success: function () {
                                      t.navigateBack();
                                    },
                                  });
                              })
                              .catch(function (t) {
                                console.log(t),
                                  (0, g.showModal)({
                                    title: "温馨提示",
                                    content: "网络异常，请刷新重试~",
                                  });
                              })
                              .finally(function () {
                                return (0, g.hideLoading)();
                              })
                          );
                        },
                      },
                      {
                        key: "getTripData",
                        value: (function () {
                          var t = (0, r.Z)(
                            (0, a.Z)().mark(function t() {
                              var e = this;
                              return (0, a.Z)().wrap(function (t) {
                                for (;;)
                                  switch ((t.prev = t.next)) {
                                    case 0:
                                      return t.abrupt(
                                        "return",
                                        new Promise(function (t, i) {
                                          (0, g.showLoading)("努力加载中..."),
                                            (0, y.$l)({
                                              schemeIds: [e.schemeId],
                                            })
                                              .then(function (o) {
                                                (0, g.hideLoading)(),
                                                  (1 === o.resultCode &&
                                                    o.trips &&
                                                    0 !== o.trips.length) ||
                                                    ((0, g.showModal)({
                                                      title: "温馨提示",
                                                      content:
                                                        "行程方案已过期，请返回重新刷新一下吧～",
                                                      success: function () {
                                                        e.navigateBack();
                                                      },
                                                    }),
                                                    i()),
                                                  t(o.trips[0]);
                                              })
                                              .catch(function (t) {
                                                console.log(t),
                                                  (0, g.hideLoading)(),
                                                  (0, g.showModal)({
                                                    title: "温馨提示",
                                                    content:
                                                      "网络异常，请刷新重试~",
                                                  }),
                                                  i();
                                              });
                                        })
                                      );
                                    case 1:
                                    case "end":
                                      return t.stop();
                                  }
                              }, t);
                            })
                          );
                          return function () {
                            return t.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "initPage",
                        value: (function () {
                          var t = (0, r.Z)(
                            (0, a.Z)().mark(function t(e) {
                              var i,
                                o,
                                n,
                                r,
                                s,
                                c,
                                l,
                                d,
                                f,
                                u,
                                h,
                                m,
                                p,
                                g,
                                T,
                                v,
                                w,
                                y,
                                N,
                                b,
                                k,
                                C,
                                I,
                                B,
                                P,
                                V,
                                D;
                              return (0, a.Z)().wrap(
                                function (t) {
                                  for (;;)
                                    switch ((t.prev = t.next)) {
                                      case 0:
                                        if (
                                          ((0, Z.Qr)(this.searchParams) &&
                                            this.parseSearchParams(e),
                                          (i = e.totalMinutes),
                                          (o = e.totalPrice),
                                          (n = e.details),
                                          (r = e.transferInfo),
                                          (s = e.dayDiff),
                                          (c = e.fromNearByFlag),
                                          (l = e.toNearByFlag),
                                          (d = e.fromStationInfo),
                                          (f = void 0 === d ? {} : d),
                                          (u = e.toStationInfo),
                                          (h = void 0 === u ? {} : u),
                                          (m = e.tripId),
                                          (p = e.originFromStation),
                                          (g = void 0 === p ? "" : p),
                                          (T = e.originToStation),
                                          (v = void 0 === T ? "" : T),
                                          (w = e.subTrainTripType),
                                          (y = void 0 === w ? "" : w),
                                          (N = e.originArriveTime),
                                          (b = void 0 === N ? "" : N),
                                          (k = e.originStartTime),
                                          (C = void 0 === k ? "" : k),
                                          (I = e.originFromStationCode),
                                          (B = void 0 === I ? "" : I),
                                          (P = e.originToStationCode),
                                          (V = void 0 === P ? "" : P),
                                          (this.isSingleShift = 1 === n.length),
                                          this.setTitle(n),
                                          this.setState({
                                            totalMinutes: i,
                                            totalPrice: o,
                                            details: n,
                                            transferInfo: r,
                                            dayDiff: s,
                                            fromNearByFlag: c,
                                            toNearByFlag: l,
                                            fromStationInfo: f,
                                            toStationInfo: h,
                                            tripId: m,
                                            originFromStation: g,
                                            originToStation: v,
                                            subTrainTripType: y,
                                            originArriveTime: b,
                                            originStartTime: C,
                                            originFromStationCode: B,
                                            originToStationCode: V,
                                          }),
                                          (0, Z.VL)(n) || this.getTripSeats(n),
                                          r && this.patchTransferInfo(n, r),
                                          (D = n),
                                          !(0, Z.VL)(D))
                                        ) {
                                          t.next = 12;
                                          break;
                                        }
                                        return (
                                          (t.next = 11), this.patchFlightInfo(n)
                                        );
                                      case 11:
                                        D = t.sent;
                                      case 12:
                                        if (!(0, Z.ti)(D) || S.default.isH5) {
                                          t.next = 15;
                                          break;
                                        }
                                        return (
                                          (t.next = 15),
                                          this.refreshTrainsLeftTicket(D)
                                        );
                                      case 15:
                                        this.hasInit = !0;
                                      case 16:
                                      case "end":
                                        return t.stop();
                                    }
                                },
                                t,
                                this
                              );
                            })
                          );
                          return function (e) {
                            return t.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "parseSearchParams",
                        value: function () {
                          var t =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : {};
                          this.searchParams = {
                            fromAreaId: t.fromAreaId,
                            fromGeoPoint: t.fromGeoPoint,
                            fromLocation: t.fromLocation,
                            fromStationType: t.fromStationType,
                            toAreaId: t.toAreaId,
                            toGeoPoint: t.toGeoPoint,
                            toLocation: t.toLocation,
                            toStationType: t.toStationType,
                            departDate: (0, Z.MW)(t.details && t.details[0])
                              .startDate,
                          };
                        },
                      },
                      {
                        key: "refreshTrainsLeftTicket",
                        value: (function () {
                          var t = (0, r.Z)(
                            (0, a.Z)().mark(function t(e) {
                              var i = this;
                              return (0, a.Z)().wrap(function (t) {
                                for (;;)
                                  switch ((t.prev = t.next)) {
                                    case 0:
                                      return t.abrupt(
                                        "return",
                                        new Promise(
                                          (function () {
                                            var t = (0, r.Z)(
                                              (0, a.Z)().mark(function t(o) {
                                                return (0, a.Z)().wrap(
                                                  function (t) {
                                                    for (;;)
                                                      switch (
                                                        (t.prev = t.next)
                                                      ) {
                                                        case 0:
                                                          (0, Z.qL)(e)
                                                            .then(function (t) {
                                                              if (
                                                                (console.log(
                                                                  "newTicketInfo",
                                                                  t
                                                                ),
                                                                !t)
                                                              )
                                                                return o(e);
                                                              e.forEach(
                                                                function (e) {
                                                                  if (
                                                                    "T" ==
                                                                    e.tripType
                                                                  ) {
                                                                    var i = (0,
                                                                      Z.MW)(e),
                                                                      o =
                                                                        t[
                                                                          ""
                                                                            .concat(
                                                                              i.trainNo,
                                                                              "|"
                                                                            )
                                                                            .concat(
                                                                              i.fromStation,
                                                                              "|"
                                                                            )
                                                                            .concat(
                                                                              i.toStation
                                                                            )
                                                                        ] || [];
                                                                    i.seats.forEach(
                                                                      function (
                                                                        t
                                                                      ) {
                                                                        var e =
                                                                          o.find(
                                                                            function (
                                                                              e
                                                                            ) {
                                                                              return (
                                                                                e.seatName ===
                                                                                t.seatName
                                                                              );
                                                                            }
                                                                          );
                                                                        e &&
                                                                        e.ticketLeft
                                                                          ? (t.ticketLeft =
                                                                              parseInt(
                                                                                e.ticketLeft
                                                                              ))
                                                                          : (t.ticketLeft = 0);
                                                                      }
                                                                    );
                                                                  }
                                                                }
                                                              ),
                                                                i.getTripSeats(
                                                                  e
                                                                ),
                                                                o(e);
                                                            })
                                                            .catch(function () {
                                                              o(e);
                                                            });
                                                        case 1:
                                                        case "end":
                                                          return t.stop();
                                                      }
                                                  },
                                                  t
                                                );
                                              })
                                            );
                                            return function (e) {
                                              return t.apply(this, arguments);
                                            };
                                          })()
                                        )
                                      );
                                    case 1:
                                    case "end":
                                      return t.stop();
                                  }
                              }, t);
                            })
                          );
                          return function (e) {
                            return t.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "setTitle",
                        value: function (t) {
                          var e = (0, Z.MW)(t[0]).fromStation,
                            i = (0, Z.MW)(t[t.length - 1]).toStation;
                          h().setNavigationBarTitle({
                            title: "".concat(e, " ⇀ ").concat(i),
                          });
                        },
                      },
                      {
                        key: "patchFlightInfo",
                        value: (function () {
                          var t = (0, r.Z)(
                            (0, a.Z)().mark(function t(e) {
                              var i = this;
                              return (0, a.Z)().wrap(function (t) {
                                for (;;)
                                  switch ((t.prev = t.next)) {
                                    case 0:
                                      return t.abrupt(
                                        "return",
                                        new Promise(function (t, o) {
                                          var n = [];
                                          e.forEach(function (t, e) {
                                            if ("F" === t.tripType) {
                                              var o = (0, Z.MW)(t);
                                              n.push(
                                                i.getSingleFlightDetail(o, e)
                                              );
                                            }
                                          }),
                                            (0, g.showLoading)("努力加载中..."),
                                            Promise.all(n)
                                              .then(function (o) {
                                                (0, g.hideLoading)();
                                                var n = (0, Z.I8)(e);
                                                o.forEach(function (t) {
                                                  var e = t.flight,
                                                    i = t.order;
                                                  n[i].flight = e;
                                                }),
                                                  i.setState({ details: n }),
                                                  i.getTripSeats(n),
                                                  t(n);
                                              })
                                              .catch(function (t) {
                                                (0, g.hideLoading)(),
                                                  (0, g.showModal)(
                                                    t.message ||
                                                      "获取航班舱位信息失败，请稍后重试~"
                                                  ),
                                                  o(t);
                                              });
                                        })
                                      );
                                    case 1:
                                    case "end":
                                      return t.stop();
                                  }
                              }, t);
                            })
                          );
                          return function (e) {
                            return t.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "patchTransferInfo",
                        value: function (t, e) {
                          var i = this;
                          e.forEach(function (e, o) {
                            if (
                              !(0, Z.gd)(t, o) &&
                              !e.distance &&
                              !e.optimalMinutes
                            ) {
                              var a = t[o].tripType,
                                r = (0, Z.MW)(t[o]),
                                s =
                                  "F" == a
                                    ? r.toCode
                                    : "SC" == a
                                    ? r.toAreaId
                                    : r.toStation,
                                c = t[o + 1].tripType,
                                l = (0, Z.MW)(t[o + 1]),
                                d = {
                                  fromLocation: s || "",
                                  fromStationType: a || "",
                                  toLocation:
                                    ("F" == c
                                      ? l.fromCode
                                      : "SC" == c
                                      ? l.fromAreaId
                                      : l.fromStation) || "",
                                  toStationType: c || "",
                                };
                              (0, y.gR)(d).then(function (t) {
                                var a = t.areaTraffic;
                                1 != t.resultCode ||
                                  (0, Z.Qr)(a) ||
                                  i.setState(function (t) {
                                    var i = t.transferInfo.slice();
                                    return (
                                      (i[o] = (0, n.Z)(
                                        (0, n.Z)({}, e),
                                        {},
                                        {
                                          distance: a.distance,
                                          optimalMinutes: a.optimalMinutes,
                                          useHourMinutes: (0, Z.zE)(
                                            a.optimalMinutes
                                          ),
                                        }
                                      )),
                                      { transferInfo: i }
                                    );
                                  });
                              });
                            }
                          });
                        },
                      },
                      {
                        key: "getTrafficGuideInfo",
                        value: function () {
                          var t = this,
                            e =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : {},
                            i = e.type,
                            o = void 0 === i ? "start" : i,
                            n = this.searchParams,
                            a = n.fromGeoPoint,
                            r = n.toGeoPoint,
                            s = this.state,
                            c = s.fromStationInfo,
                            l = s.toStationInfo,
                            d = { fromGeoPoint: a, toGeoPoint: c.geoPoint };
                          return (
                            "end" === o &&
                              (d = { fromGeoPoint: l.geoPoint, toGeoPoint: r }),
                            (0, g.showLoading)(),
                            (0, y.TQ)(d)
                              .then(function (e) {
                                if (1 === e.resultCode && e.areaTraffic) {
                                  var i = t.state.trafficGuideInfo;
                                  (i[o] = e.areaTraffic),
                                    t.setState({ trafficGuideInfo: i });
                                }
                              })
                              .catch(function (t) {
                                return console.log(t);
                              })
                              .finally(function () {
                                return (0, g.hideLoading)();
                              })
                          );
                        },
                      },
                      {
                        key: "onNearByBannerClick",
                        value: (function () {
                          var t = (0, r.Z)(
                            (0, a.Z)().mark(function t() {
                              var e,
                                i,
                                o,
                                n = arguments;
                              return (0, a.Z)().wrap(
                                function (t) {
                                  for (;;)
                                    switch ((t.prev = t.next)) {
                                      case 0:
                                        if (
                                          ((e =
                                            n.length > 0 && void 0 !== n[0]
                                              ? n[0]
                                              : {}),
                                          (i = e.type),
                                          (o = void 0 === i ? "start" : i),
                                          this.state.trafficGuideInfo[o])
                                        ) {
                                          t.next = 5;
                                          break;
                                        }
                                        return (
                                          (t.next = 5),
                                          this.getTrafficGuideInfo({ type: o })
                                        );
                                      case 5:
                                        this.showTrafficGuidePop({ type: o });
                                      case 6:
                                      case "end":
                                        return t.stop();
                                    }
                                },
                                t,
                                this
                              );
                            })
                          );
                          return function () {
                            return t.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "showTrafficGuidePop",
                        value: function () {
                          var t =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : {},
                            e = t.type,
                            i = void 0 === e ? "start" : e,
                            o = this.state.trafficGuideInfo,
                            n = o[i] || {},
                            a = n.taxiPrice,
                            r = n.distance,
                            s = n.optimalTrafficDTO,
                            c = n.airExpressTransfer;
                          if (!(a || r || s || c))
                            return (0, g.showToast)("暂无线路数据");
                          this.setState({
                            trafficGuidePopVisible: !0,
                            trafficGuideType: i,
                          });
                        },
                      },
                      {
                        key: "hideTrafficGuidePop",
                        value: function () {
                          this.setState({
                            trafficGuidePopVisible: !1,
                            trafficGuideType: "",
                          });
                        },
                      },
                      {
                        key: "getTripSeats",
                        value: function (t) {
                          var e = this,
                            i = [];
                          t.forEach(function (t, o) {
                            i.push(e.getTripSeat(t, o));
                          }),
                            this.setState({ tripSeats: i });
                        },
                      },
                      {
                        key: "getTripSeat",
                        value: function (t, e) {
                          var i = (0, Z.MW)(t),
                            o = i.seats;
                          if (
                            (("B" !== t.tripType && "SC" !== t.tripType) ||
                              (o = [
                                {
                                  seatName: "有座",
                                  ticketLeft: i.ticketLeft,
                                  price: i.minPrice,
                                },
                              ]),
                            o.forEach(function (e) {
                              e.disabled =
                                "F" !== t.tripType && 0 === e.ticketLeft;
                            }),
                            "S" === t.tripType &&
                              (o = o.filter(function (t) {
                                return t.ticketLeft > 0;
                              })),
                            !o.some(function (t) {
                              return t.isSelected;
                            }))
                          ) {
                            var n = i.seatName,
                              a = o.findIndex(function (t) {
                                return t.seatName === n;
                              });
                            -1 === a && (a = 0),
                              (o[a].isSelected = !0),
                              (this.state.selectSeats[e] = o[a]);
                          }
                          return {
                            orderDesc: (0, Z.gb)(e),
                            tripType: t.tripType,
                            typeName: (0, Z.ur)(t.tripType, (0, Z.Kn)(t)),
                            jlTicket: (0, Z.MW)(t).jlTicket,
                            seatList: (0, Z.I8)(o),
                          };
                        },
                      },
                      {
                        key: "getSingleFlightDetail",
                        value: function (t, e) {
                          var i = this;
                          return new Promise(function (o, n) {
                            var a = {
                              isRoundTrip: !1,
                              version: 9,
                              business: !1,
                              segments: [
                                {
                                  dptDate: t.startDate,
                                  dptCode: t.departCityCode,
                                  arrCode: t.arriveCityCode,
                                  flightNo: t.flightNo,
                                },
                              ],
                              hasChild: !1,
                              source: 32,
                              student: !1,
                              cacheUsage: 0,
                              token: "",
                              queryHigherClass: !1,
                              hasBaby: !1,
                            };
                            (0, y.rY)({ data: a })
                              .then(function (a) {
                                if (
                                  (console.log("获取航班信息", a),
                                  1 !== a.resultCode || (0, Z.Qr)(a.data))
                                )
                                  return n({ message: a.resultMessage });
                                var r = a.data,
                                  s = (0, Z.I8)(t),
                                  c = r.products;
                                s.flightProducts = c;
                                var l = [];
                                c.forEach(function (t, o) {
                                  var n = {
                                    isSelected: 0 === o,
                                    seatName:
                                      (t.notes && t.notes[0]) || t.cabin,
                                    originSeatName: t.cabin,
                                    price: t.apr,
                                    ticketLeft: t.btnTag,
                                    ageTag: t.lpt,
                                  };
                                  (l.push(n), 0 === o) &&
                                    ((i.state.selectSeats[e] = n),
                                    t.lpt &&
                                      !i.hasToastFlightAgeSeat &&
                                      ((i.hasToastFlightAgeSeat = !0),
                                      setTimeout(function () {
                                        (0,
                                        g.showToast)("第".concat(e + 1, "程[").concat(t.lpt, "]座席仅适用于部分年龄段"));
                                      }, 0)));
                                }),
                                  (s.seats = l);
                                var d =
                                  (r.segments &&
                                    r.segments.length &&
                                    r.segments[0].flights) ||
                                  [];
                                d.length > 0 &&
                                  ((s.airIcon = d[0].airIcon),
                                  (s.mealType = d[0].mealType),
                                  (s.planeType = d[0].planeType),
                                  (s.punctuality = d[0].punctuality)),
                                  o({ flight: s, order: e });
                              })
                              .catch(function (t) {
                                console.warn("获取航班信息error", t),
                                  n({ message: "网络异常，请稍后重试~" });
                              });
                          });
                        },
                      },
                      {
                        key: "onSeatSelected",
                        value: function (t) {
                          var e = t.selected,
                            i = t.order,
                            o = t.seatIndex;
                          if (!e) {
                            var n = this.state,
                              a = n.tripSeats,
                              r = n.selectSeats,
                              s = a.slice(),
                              c = (0, Z.I8)(s[i]);
                            c.seatList.forEach(function (t, e) {
                              return (t.isSelected = o === e);
                            }),
                              (s[i] = c),
                              this.setState({ tripSeats: s }),
                              (r[i] = c.seatList[o]);
                            var l = r.reduce(function (t, e) {
                              return t + e.price;
                            }, 0);
                            this.setState({ totalPrice: l });
                          }
                        },
                      },
                      {
                        key: "mergeSelectSeats",
                        value: (function () {
                          var t = (0, r.Z)(
                            (0, a.Z)().mark(function t() {
                              var e, i, o, n;
                              return (0, a.Z)().wrap(
                                function (t) {
                                  for (;;)
                                    switch ((t.prev = t.next)) {
                                      case 0:
                                        return (
                                          (e = this.state),
                                          (i = e.details),
                                          (o = e.selectSeats),
                                          (n = e.isCombine),
                                          i.forEach(function (t, e) {
                                            var i = o[e];
                                            n && (i.isCombinedSeat = !0),
                                              ((0, Z.MW)(t).selectSeat = o[e]);
                                          }),
                                          (t.next = 4),
                                          this.setStateSync({ details: i })
                                        );
                                      case 4:
                                      case "end":
                                        return t.stop();
                                    }
                                },
                                t,
                                this
                              );
                            })
                          );
                          return function () {
                            return t.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "setStateSync",
                        value: function (t) {
                          var e = this;
                          return new Promise(function (i) {
                            e.setState(t, i);
                          });
                        },
                      },
                      {
                        key: "nextStep",
                        value: function () {
                          var t = this;
                          (0, Z.Sn)(this, "185869"), this.mergeSelectSeats();
                          var e = this.state,
                            i = e.details,
                            o = e.tripSeats;
                          if (this.hasInit && i.length) {
                            if (1 === i.length)
                              return o[0].seatList.some(function (t) {
                                return t.isSelected;
                              })
                                ? this.gotoBookingPageByType(i[0])
                                : (0, g.showToast)("请先选择坐席");
                            var n = (0, Z.VL)(i),
                              a = Date.now() - this.pageStartTime >= 6e5;
                            if (n && a)
                              return (0, g.showModal)({
                                content:
                                  "当前页面停留时间过久，请返回重新刷新看看吧～",
                                success: function () {
                                  t.navigateBack();
                                },
                              });
                            for (var r = 0; r < i.length; r++) {
                              var s = i[r].tripType;
                              if ("T" == s)
                                if (
                                  !o[r].seatList.some(function (t) {
                                    return t.isSelected;
                                  })
                                )
                                  return (0, g.showToast)(
                                    "第".concat(r + 1, "程火车未选择坐席")
                                  );
                              if ("S" == s) {
                                if (
                                  !o[r].seatList.some(function (t) {
                                    return t.isSelected;
                                  })
                                )
                                  return (0, g.showToast)(
                                    "第".concat(r + 1, "程船未选择坐席")
                                  );
                                if (
                                  !o[r].seatList.some(function (t) {
                                    return t.ticketLeft > 0;
                                  })
                                )
                                  return (0, g.showToast)(
                                    "第".concat(
                                      r + 1,
                                      "程船无可选坐席，建议选择其他方案"
                                    )
                                  );
                              }
                            }
                            for (var c = 0; c < i.length; c++) {
                              var l = i[c],
                                d = (0, Z.MW)(l);
                              if ("T" === l.tripType) {
                                var f = d.selectSeat && d.selectSeat.ticketLeft;
                                if (!f || f <= 0) {
                                  (0, Z.Sn)(this, "185870");
                                  var u = d.jlTicket;
                                  return void this.setState({
                                    isShowRobTipModal: !0,
                                    isJLTicketWhenRobTip: u,
                                  });
                                }
                              }
                            }
                            this.nextStepInner();
                          }
                        },
                      },
                      {
                        key: "nextStepInner",
                        value: function () {
                          var t = this,
                            e = this.state,
                            i = e.details,
                            o = e.tripSeats,
                            n = [];
                          if (
                            (i.forEach(function (e, i) {
                              var a = e.tripType,
                                r = (0, Z.MW)(e);
                              if ("F" == a) {
                                var s = o[i].seatList.findIndex(function (t) {
                                    return t.isSelected;
                                  }),
                                  c = r.flightProducts[s].token;
                                n.push(t.GetFlightDetail(c, i));
                              }
                              ["B", "S", "SC"].includes(a) &&
                                n.push(t.queryChildPriceByType(a, r, i));
                            }),
                            0 === n.length)
                          )
                            return this.gotoBookingPage();
                          (0, g.showLoading)("校验中..."),
                            Promise.all(n)
                              .then(function (e) {
                                (0, g.hideLoading)(),
                                  console.log("下一步校验成功", e),
                                  e.forEach(function (t) {
                                    if (!(0, Z.Qr)(t)) {
                                      var e = t.fromIndex;
                                      delete t.fromIndex;
                                      var o = (0, Z.MW)(i[e]);
                                      "F" === i[e].tripType &&
                                        (o.noticeContent =
                                          t.flightDetail.noticeContent),
                                        Object.assign(o, t);
                                    }
                                  }),
                                  t.gotoBookingPage();
                              })
                              .catch(function (e) {
                                (0, g.hideLoading)(),
                                  3 === e.code
                                    ? ((0, g.showModal)(e.message),
                                      t.patchFlightInfo(i))
                                    : (0, g.showToast)(e.message);
                              });
                        },
                      },
                      {
                        key: "queryChildPriceByType",
                        value: function (t, e, i) {
                          switch (t) {
                            case "S":
                              return this.queryShipChildPrice(e, i);
                            case "B":
                              return this.queryBusChildPrice(e, i, 1);
                            case "SC":
                              return this.queryBusChildPrice(e, i, 3);
                          }
                        },
                      },
                      {
                        key: "queryBusChildPrice",
                        value: function (t, e, i) {
                          return new Promise(function (o, n) {
                            var a = {
                              productLine: i,
                              busNumber: t.busNumber,
                              fromCity: t.fromCode,
                              fromStation: t.fromStation,
                              fromDate: t.startDate,
                              fromTime: t.startTime,
                              toCity: t.toCode,
                              toStation: t.toStation,
                              symbol: t.symbol,
                              utmsource: "smartTrip",
                            };
                            (0, y.jn)(a)
                              .then(function (i) {
                                if (
                                  (console.log("获取汽车儿童价", i),
                                  1 !== i.code || (0, Z.Qr)(i.data))
                                )
                                  return n({
                                    code: 1,
                                    message: "第"
                                      .concat(e + 1, "程汽车")
                                      .concat(
                                        i.message || "获取汽车儿童票价失败"
                                      ),
                                  });
                                var a = i.data,
                                  r = a.serviceChargeInfo,
                                  s = void 0 === r ? {} : r,
                                  c = a.buyTicketRule,
                                  l = void 0 === c ? {} : c;
                                t.serviceFee = s.price;
                                var d = l.maxSaleTicketNumber,
                                  f = l.ticketRuleDesc,
                                  u = void 0 === f ? [] : f;
                                t.maxSaleTicketNumber = d;
                                var h =
                                  u.find(function (t) {
                                    return (
                                      "儿童票" === t.ticketType && t.isSale
                                    );
                                  }) || {};
                                (t.childPrice = h.ticketPrice), o({});
                              })
                              .catch(function (t) {
                                console.warn("获取汽车儿童价error", t),
                                  n({
                                    code: 1,
                                    message:
                                      t.message || "查询失败，请稍后重试",
                                  });
                              });
                          });
                        },
                      },
                      {
                        key: "queryShipChildPrice",
                        value: function (t, e) {
                          return new Promise(function (i, o) {
                            var n = t.selectSeat;
                            (0, y.s9)({
                              fromCityName: t.fromCode,
                              fromStationName: t.fromStation,
                              fromDate: t.startDate,
                              fromTime: t.startTime,
                              toCityName: t.toCode,
                              toStationName: t.toStation,
                              shipName: t.shipName,
                              vendor: t.vendor,
                              seatName: n.seatName,
                              seatPrice: n.price,
                              fromPage: "smartx",
                            })
                              .then(function (a) {
                                if (
                                  (console.log("获取船票儿童价", a),
                                  1 !== a.code || (0, Z.Qr)(a.data))
                                )
                                  return o({
                                    code: 1,
                                    message: "第"
                                      .concat(e + 1, "程船")
                                      .concat(
                                        a.message || "获取汽车儿童票价失败"
                                      ),
                                  });
                                var r = a.data,
                                  s = r.serviceFee,
                                  c = r.maxPassengerCount,
                                  l = r.seatInfo,
                                  d = void 0 === l ? [] : l,
                                  f = r.child,
                                  u = void 0 === f ? {} : f;
                                if (
                                  ((t.serviceFee = s),
                                  (t.maxSaleTicketNumber = c),
                                  1 == u.isSupport)
                                ) {
                                  var h =
                                    d.find(function (t) {
                                      return t.seatName == n.seatName;
                                    }) || {};
                                  t.childPrice = h.seatChildPrice;
                                }
                                i({});
                              })
                              .catch(function (t) {
                                console.warn("获取船票儿童价error", t),
                                  o({
                                    code: 1,
                                    message:
                                      t.message || "查询失败，请稍后重试",
                                  });
                              });
                          });
                        },
                      },
                      {
                        key: "GetFlightDetail",
                        value: function (t, e) {
                          var i = this;
                          return new Promise(function (o, n) {
                            var a = { token: t, policyVersion: 6, source: 32 };
                            (0, y.q6)({ data: a })
                              .then(function (t) {
                                if (
                                  (console.log("飞机校验请求结果", t),
                                  1 !== t.resultCode)
                                )
                                  return n({
                                    code: 1,
                                    message:
                                      t.resultMessage || "查询失败，请稍后重试",
                                  });
                                if ((0, Z.Qr)(t.data))
                                  return n({
                                    code: 3,
                                    message: "第".concat(
                                      e + 1,
                                      "程行程选中座席已售完"
                                    ),
                                  });
                                var a = t.data,
                                  r = a.priceChange && a.priceChange.changeType;
                                if (r > 1) {
                                  (0, g.showToast)(
                                    "请注意，第".concat(e + 1, "程机票价格变动")
                                  );
                                  var s = i.state,
                                    c = s.details,
                                    l = s.tripSeats,
                                    d = (0, Z.MW)(c[e]),
                                    f = (0, Z.I8)(l),
                                    u = f[e].seatList.find(function (t) {
                                      return t.isSelected;
                                    }),
                                    h =
                                      2 == r
                                        ? a.priceChange.price
                                        : u.price - a.priceChange.price;
                                  parseFloat(h) > 0 &&
                                    ((u.price = parseFloat(h)),
                                    i.setState({ tripSeats: f }),
                                    (d.selectSeat = u));
                                }
                                var m = { flightDetail: a, fromIndex: e },
                                  p = a.product && a.product.cpr;
                                parseFloat(p) > 0 &&
                                  (m.childPrice = parseFloat(p)),
                                  o(m);
                              })
                              .catch(function (t) {
                                console.warn("机票校验请求error", t),
                                  n({
                                    code: 1,
                                    message:
                                      t.message || "查询失败，请稍后重试",
                                  });
                              });
                          });
                        },
                      },
                      {
                        key: "gotoBookingPage",
                        value: function () {
                          var t = this.state,
                            e = t.isCombine,
                            i = t.dayDiff,
                            o = t.details,
                            a = t.transferInfo,
                            r = t.fromNearByFlag,
                            s = t.toNearByFlag,
                            c = t.tripId,
                            l = t.fromStationInfo,
                            d = t.toStationInfo,
                            f = t.subTrainTripType,
                            u = t.originFromStation,
                            h = void 0 === u ? "" : u,
                            m = t.originToStation,
                            p = void 0 === m ? "" : m,
                            g = t.originArriveTime,
                            S = void 0 === g ? "" : g,
                            T = t.originStartTime,
                            v = void 0 === T ? "" : T,
                            w = t.originFromStationCode,
                            y = void 0 === w ? "" : w,
                            N = t.originToStationCode,
                            b = void 0 === N ? "" : N,
                            k = t.totalMinutes;
                          this.navigateTo({
                            url: "/pages/smart/packageA/booking/index",
                            data: (0, n.Z)(
                              (0, n.Z)(
                                {
                                  isCombine: e,
                                  dayDiff: i,
                                  details: o,
                                  transferInfo: a,
                                  fromNearByFlag: r,
                                  toNearByFlag: s,
                                  tripId: c,
                                  fromStationInfo: l,
                                  toStationInfo: d,
                                  orderSource: this.orderSource,
                                  schemeInfoV1: this.schemeInfoV1,
                                  subTrainTripType: f,
                                  originFromStationInfo: {
                                    originFromStation: h,
                                    originStartTime: v,
                                    originFromStationCode: y,
                                  },
                                  originToStationInfo: {
                                    originToStation: p,
                                    originArriveTime: S,
                                    originToStationCode: b,
                                  },
                                },
                                this.searchParams
                              ),
                              {},
                              { totalMinutes: k }
                            ),
                          });
                        },
                      },
                      {
                        key: "gotoBookingPageByType",
                        value: function (t) {
                          switch (t.tripType) {
                            case "T":
                              this.gotoTrainBookingPage();
                              break;
                            case "F":
                              this.gotoFlightBookingPage();
                              break;
                            case "S":
                              this.gotoShipBookingPage();
                              break;
                            case "B":
                              this.gotoBusBookingPage(1);
                              break;
                            case "SC":
                              this.gotoBusBookingPage(3);
                          }
                        },
                      },
                      {
                        key: "gotoTrainBookingPage",
                        value: function () {
                          var t = this,
                            e = this.state,
                            i = e.details,
                            o = e.tripSeats,
                            n = (0, Z.MW)(i[0]),
                            a = o[0].seatList;
                          (0, g.showLoading)("校验中..."),
                            w.ZP.getTrainList({
                              DepartStation: n.fromStation,
                              ArriveStation: n.toStation,
                              DepartDate: n.startDate,
                              TrainName: n.trainNo,
                            })
                              .then(function (e) {
                                (0, g.hideLoading)();
                                var i = e;
                                if (0 == i.length)
                                  return (0, g.showToast)("获取车次详情失败");
                                var o = a.findIndex(function (t) {
                                    return t.isSelected;
                                  }),
                                  r = (i = (0, Z.qd)(i, n.startDate, o))[0];
                                if ((console.log("trainData", r), !r))
                                  return (0, g.showModal)(
                                    "查询车次详情失败，请稍后重试"
                                  );
                                t.navigateTo({
                                  url: w.ZP.getTrainBookingUrl(),
                                  data: { train: r, fromPage: "smartx" },
                                });
                              })
                              .catch(function (t) {
                                (0, g.hideLoading)(),
                                  console.warn("单程火车校验error", t),
                                  (0, g.showModal)("网络异常，请稍后重试~");
                              });
                        },
                      },
                      {
                        key: "gotoFlightBookingPage",
                        value: function () {
                          var t = this,
                            e = this.state,
                            i = e.details,
                            o = e.tripSeats,
                            n = (0, Z.MW)(i[0]),
                            a = o[0].seatList,
                            r = a.findIndex(function (t) {
                              return t.isSelected;
                            }),
                            s = n.flightProducts[r],
                            c = s.token,
                            l = s.grab,
                            d = {
                              token: c,
                              extension: [
                                { key: "grab", value: void 0 === l ? 0 : l },
                                { key: "XPageVersion202102", value: "Y" },
                              ],
                              source: 16,
                              policyVersion: 14,
                            };
                          (0, g.showLoading)("校验中..."),
                            (0, y.q6)({ data: d })
                              .then(function (e) {
                                if (
                                  ((0, g.hideLoading)(),
                                  console.log(
                                    "跳机票产线填写页 - 获取所选舱位信息",
                                    e
                                  ),
                                  1 !== e.resultCode)
                                )
                                  return (0, g.showModal)(
                                    e.resultMessage ||
                                      "查询舱位信息失败，请稍后重试"
                                  );
                                if ((0, Z.Qr)(e.data))
                                  return (0, g.showToast)(
                                    "该行程选中座席已售完"
                                  );
                                var i = e.data,
                                  r = t.handleFlightData(i.segments),
                                  s = i.priceChange && i.priceChange.changeType;
                                if (s > 1) {
                                  (0, g.showToast)("请注意，该程机票价格变动");
                                  var c = (0, Z.I8)(o),
                                    l = c[0].seatList.find(function (t) {
                                      return t.isSelected;
                                    }),
                                    d =
                                      2 == s
                                        ? i.priceChange.price
                                        : l.price - i.priceChange.price;
                                  parseFloat(d) > 0 &&
                                    ((l.price = parseFloat(d)),
                                    t.setState({ tripSeats: c }));
                                }
                                var f = [
                                    {
                                      dptDate: n.startDate,
                                      dptCode: n.departCityCode,
                                      arrCode: n.arriveCityCode,
                                      flightNo: n.flightNo,
                                    },
                                  ],
                                  u = a.length,
                                  h = i.hur,
                                  m = i.htlpr;
                                t.navigateTo({
                                  url: "/pages/flight/book/book?tripType=0&cabinQuantity=".concat(
                                    u
                                  ),
                                  data: {
                                    cabinDetail: i,
                                    segments: r,
                                    hur: h,
                                    htlpr: m,
                                    query: {
                                      segments: f,
                                      hasChild: !1,
                                      hasBaby: !1,
                                      source: 16,
                                      smartFromPage: "smartHome",
                                    },
                                  },
                                });
                              })
                              .catch(function (t) {
                                (0, g.hideLoading)(),
                                  console.log("单程机票校验error", t),
                                  (0, g.showModal)(
                                    t.message || "网络异常，请稍后重试~"
                                  );
                              });
                        },
                      },
                      {
                        key: "gotoShipBookingPage",
                        value: function () {
                          var t = this,
                            e = this.state.details,
                            i = (0, Z.MW)(e[0]),
                            o = i.fromStation,
                            n = i.fromCode,
                            a = i.startDate,
                            r = i.startTime,
                            s = i.toStation,
                            c = i.toCode,
                            l = i.shipName,
                            d = i.vendor,
                            f = i.arriveDate,
                            u = i.arriveTime,
                            h = i.website,
                            m = i.useMinutes,
                            p = {
                              fromCityName: n,
                              toCityName: c,
                              fromStationName: o,
                              toStationName: s,
                              shipName: l,
                              vendor: d,
                              fromDate: a,
                              fromTime: r,
                              fromPage: "XPage",
                            };
                          (0, g.showLoading)("校验中..."),
                            (0, I.ob)(p)
                              .then(function (e) {
                                var p;
                                if (
                                  1 !== (null == e ? void 0 : e.code) ||
                                  (0, Z.Qr)(null == e ? void 0 : e.data)
                                )
                                  return (0, g.showToast)(
                                    "获取船票详情失败，请稍后重试~"
                                  );
                                console.log(
                                  "跳船票产线填写页 - 获取船票舱位信息",
                                  e
                                );
                                var S =
                                    null === (p = e.data.seatInfo) ||
                                    void 0 === p
                                      ? void 0
                                      : p.find(function (t) {
                                          var e;
                                          return (
                                            t.seatName ===
                                            (null === (e = i.selectSeat) ||
                                            void 0 === e
                                              ? void 0
                                              : e.seatName)
                                          );
                                        }),
                                  T = {
                                    fromCityName: n,
                                    toCityName: c,
                                    fromStationName: o,
                                    toStationName: s,
                                    shipName: l,
                                    vendor: d,
                                    fromDate: a,
                                    fromTime: r,
                                    toDate: f,
                                    toTime: u,
                                    website: h,
                                    useTime: m,
                                    seatName:
                                      (null == S ? void 0 : S.seatName) || "",
                                    seatPrice:
                                      (null == S ? void 0 : S.seatPrice) || "",
                                    pickedSeat: S,
                                  };
                                t.navigateTo({
                                  url: "/pages/ship/book/book",
                                  data: T,
                                });
                              })
                              .catch(function (t) {
                                console.log(t),
                                  (0, g.showToast)(
                                    "获取船票详情失败，请稍后重试~"
                                  );
                              })
                              .finally(function () {
                                (0, g.hideLoading)();
                              });
                        },
                      },
                      {
                        key: "gotoBusBookingPage",
                        value: function (t) {
                          var e = this.state.details,
                            i = (0, Z.MW)(e[0]),
                            o = {
                              fromCity: i.fromCode,
                              fromStation: i.fromStation,
                              fromTime: i.startTime,
                              fromDate: i.startDate,
                              date: i.startDate,
                              toCity: i.toCode,
                              toStation: i.toStation,
                              busNumber: i.busNumber,
                              symbol: i.symbol,
                              isNeedBusInfo: !0,
                              fullPrice: i.minPrice,
                              titleFromCity: i.fromCode,
                              titleToCity: i.toCode,
                              productLine: t,
                              utmSource: "smartTrip",
                            };
                          this.navigateTo({
                            url: (0, Z.G8)("/pages/bus/newbook/book", o),
                          });
                        },
                      },
                      {
                        key: "handleFlightData",
                        value: function (t) {
                          return t.map(function (t) {
                            var e = b()((0, Z.sA)(t.flights[0].dptTime));
                            return (0, n.Z)(
                              (0, n.Z)({}, t),
                              {},
                              {
                                flights: t.flights.map(function (t) {
                                  var i = b()((0, Z.sA)(t.dptTime)),
                                    o = b()((0, Z.sA)(t.arrTime));
                                  return (0,
                                  n.Z)((0, n.Z)({}, t), {}, { dptTimeStr: i.format("HH:mm"), dptMonthDay: i.format("M月D日"), dptWeekDay: k.Z.getWeekDayDesc(i), arrTimeStr: o.format("HH:mm"), dptDayDiff: e.format(K) !== i.format(K) ? i.format("MM-DD") : "", arrDayDiff: e.format(K) !== o.format(K) ? o.format("MM-DD") : "", dtlsStr: Array.isArray(t.dtls) ? t.dtls.join(" ") : t.dtls });
                                }),
                              }
                            );
                          });
                        },
                      },
                      {
                        key: "getRefundRuleByType",
                        value: function (t) {
                          var e = t.currentTarget.dataset,
                            i = e.type,
                            o = e.order,
                            n = e.seat_index;
                          switch (i) {
                            case "T":
                              this.toTrainRefundH5();
                              break;
                            case "F":
                              this.showFlightRefundPop(o, n);
                              break;
                            case "S":
                              this.getShipRefund(o, n);
                              break;
                            case "B":
                              this.getBusRefund(o);
                              break;
                            case "SC":
                              this.getScenicBusRefund(o);
                          }
                        },
                      },
                      {
                        key: "toTrainRefundH5",
                        value: function () {
                          var t = S.default.isTieyou ? "tieyou" : "suanya",
                            e = "https://m.".concat(
                              t,
                              ".com/webapp/train/activity/ztrip-train-buy-ticket-rule?isHideNavBar=YES&type=refund"
                            );
                          v.Z.twebview({ data: { url: e } });
                        },
                      },
                      {
                        key: "showFlightRefundPop",
                        value: function (t, e) {
                          var i = this.state.details,
                            o = (0, Z.MW)(i[t]);
                          if (o && o.flightProducts) {
                            var n = o.flightProducts[e].info;
                            this.setState({ flightProductInfo: n }),
                              this.toggleFlightRefundPop();
                          }
                        },
                      },
                      {
                        key: "toggleFlightRefundPop",
                        value: function () {
                          var t = this.state.showFlightRefundPop;
                          this.setState({ showFlightRefundPop: !t });
                        },
                      },
                      {
                        key: "getBusRefund",
                        value: function (t) {
                          var e = this,
                            i = this.state,
                            o = i.details,
                            n = i.busBookNoticeInfo;
                          if (!(0, Z.Qr)(n))
                            return this.setState({ showBusRefundPop: !0 });
                          this.getBusBookNoticeInfo({
                            shiftInfo: (0, Z.MW)(o[t]),
                            productLine: 1,
                          }).then(function (t) {
                            e.setState({
                              busBookNoticeInfo: t,
                              showBusRefundPop: !0,
                            });
                          });
                        },
                      },
                      {
                        key: "getScenicBusRefund",
                        value: function (t) {
                          var e = this,
                            i = this.state,
                            o = i.details,
                            n = i.scenicBusBookNoticeInfo;
                          if (!(0, Z.Qr)(n))
                            return this.setState({
                              showScenicBusRefundPop: !0,
                            });
                          this.getBusBookNoticeInfo({
                            shiftInfo: (0, Z.MW)(o[t]),
                            productLine: 3,
                          }).then(function (t) {
                            e.setState({
                              scenicBusBookNoticeInfo: t,
                              showScenicBusRefundPop: !0,
                            });
                          });
                        },
                      },
                      {
                        key: "getBusBookNoticeInfo",
                        value: function (t) {
                          var e = t.shiftInfo,
                            i = t.productLine;
                          return new Promise(function (t) {
                            var o = {
                              productLine: i,
                              busNumber: e.busNumber,
                              fromCity: e.fromCode,
                              fromStation: e.fromStation,
                              fromDate: e.startDate,
                              fromTime: e.startTime,
                              toCity: e.toCode,
                              toStation: e.toStation,
                              fullPrice: e.minPrice,
                              symbol: e.symbol,
                            };
                            (0, g.showLoading)("查询中"),
                              (0, y.oV)(o)
                                .then(function (e) {
                                  if (
                                    ((0, g.hideLoading)(),
                                    1 !== e.code || !e.data)
                                  )
                                    return (0, g.showToast)(
                                      "获取退改详情失败，请稍后重试~"
                                    );
                                  var i = [],
                                    o = { bookModalTabList: i };
                                  e.data.forEach(function (t) {
                                    i.push(t.tag);
                                  }),
                                    e.data.length > 2
                                      ? ((o.modelInfo = e.data[0].bookNotes[0]),
                                        (o.mealInfo = e.data[0].bookNotes[1]),
                                        (o.checkInfo = e.data[1].bookNotes[0]),
                                        (o.retreatInfo =
                                          e.data[2].bookNotes[0]))
                                      : ((o.orderInfo = e.data[0].bookNotes[0]),
                                        (o.checkInfo = e.data[0].bookNotes[1]),
                                        (o.wipeInfo = e.data[0].bookNotes[2]),
                                        (o.retreatInfo = e.data[1].bookNotes)),
                                    t(o);
                                })
                                .catch(function (t) {
                                  (0, g.hideLoading)(),
                                    console.log("获取汽车退改err", t),
                                    (0, g.showToast)(
                                      "获取退改详情失败，请稍后重试~"
                                    );
                                });
                          });
                        },
                      },
                      {
                        key: "toggleBusRefundPop",
                        value: function () {
                          var t = this.state.showBusRefundPop;
                          this.setState({ showBusRefundPop: !t });
                        },
                      },
                      {
                        key: "toggleScenicBusRefundPop",
                        value: function () {
                          var t = this.state.showScenicBusRefundPop;
                          this.setState({ showScenicBusRefundPop: !t });
                        },
                      },
                      {
                        key: "getShipRefund",
                        value: function (t, e) {
                          var i = this,
                            o = this.state.details,
                            n = (0, Z.MW)(o[t]),
                            a = n.seats[e],
                            r = {
                              fromCityName: n.fromCode,
                              fromStationName: n.fromStation,
                              fromDate: n.startDate,
                              fromTime: n.startTime,
                              toCityName: n.toCode,
                              toStationName: n.toStation,
                              shipName: n.shipName,
                              vendor: n.vendor,
                              seatName: a.seatName,
                              seatPrice: a.price,
                              fromPage: "smartx",
                            };
                          (0, g.showLoading)("查询中..."),
                            (0, y.s9)(r)
                              .then(function (t) {
                                if (
                                  ((0, g.hideLoading)(),
                                  1 !== t.code || (0, Z.Qr)(t.data))
                                )
                                  return (0, g.showToast)(
                                    "获取船退改详情失败，请稍后重试~"
                                  );
                                t.data.instructionsDesc &&
                                  i.setState({
                                    shipRefundInfo: t.data.instructionsDesc,
                                    showShipRefundPop: !0,
                                  });
                              })
                              .catch(function (t) {
                                (0, g.hideLoading)(),
                                  console.log("err", t),
                                  (0, g.showToast)(
                                    "获取船退改详情失败，请稍后重试~"
                                  );
                              });
                        },
                      },
                      {
                        key: "toggleShipRefund",
                        value: function () {
                          var t = this.state.showShipRefundPop;
                          this.setState({ showShipRefundPop: !t });
                        },
                      },
                      {
                        key: "hideShowType",
                        value: function () {
                          this.setState({ showType: "" });
                        },
                      },
                      {
                        key: "checkCombineSeat",
                        value: function () {
                          this.setState({
                            showType: "combine_seat_intro_dialog",
                          });
                        },
                      },
                      {
                        key: "onAddToFavorites",
                        value: function () {
                          return {
                            query: "schemeInfoV1=".concat(
                              encodeURIComponent(this.schemeInfoV1)
                            ),
                          };
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var t = this,
                            e = this.state,
                            i = e.totalMinutes,
                            o = e.totalPrice,
                            a = e.fromNearByFlag,
                            r = e.toNearByFlag,
                            s = e.fromStationInfo,
                            c = e.toStationInfo,
                            l = e.details,
                            d = e.transferInfo,
                            f = e.dayDiff,
                            u = e.tripSeats,
                            h = e.showFlightRefundPop,
                            p = e.flightProductInfo,
                            g = e.showBusRefundPop,
                            S = e.busBookNoticeInfo,
                            v = e.showScenicBusRefundPop,
                            w = e.scenicBusBookNoticeInfo,
                            y = e.showShipRefundPop,
                            N = e.shipRefundInfo,
                            b = e.trafficGuideInfo,
                            k = e.trafficGuidePopVisible,
                            I = e.trafficGuideType,
                            D = e.isCombine,
                            x = e.showType,
                            L = e.epidmicInfo,
                            M = e.originFromStation,
                            R = e.originToStation,
                            _ = e.subTrainTripType,
                            H = e.isShowRobTipModal,
                            q = void 0 !== H && H,
                            j = e.isJLTicketWhenRobTip,
                            O = void 0 !== j && j,
                            Q = this.searchParams,
                            z = Q.fromLocation,
                            Y = Q.toLocation,
                            K = (0, Z.VL)(l),
                            $ = (0, Z.YG)(l),
                            tt = (0, Z.mh)(l),
                            et = (0, Z.VY)(l);
                          return (
                            console.log("this.state===", this.state),
                            (0, P.tZ)(m.Block, {
                              children: (0, P.BX)(m.View, {
                                className: "smart-trip-detail page",
                                children: [
                                  (0, P.BX)(m.View, {
                                    className: "trip-detail ".concat(B.S),
                                    children: [
                                      (0, P.tZ)(V, {
                                        details: l,
                                        dayDiff: f,
                                        totalMinutes: i,
                                        totalPrice: o,
                                      }),
                                      !(0, Z.Qr)(L) &&
                                        (0, P.tZ)(U, {
                                          data: L,
                                          ubtTrace: this.ubtTrace,
                                          details: l,
                                          onShow: function () {
                                            t.setState({
                                              epidmicInfo: (0, n.Z)(
                                                (0, n.Z)(
                                                  {},
                                                  t.state.epidmicInfo
                                                ),
                                                {},
                                                { isShow: !0 }
                                              ),
                                            });
                                          },
                                        }),
                                      (0, P.tZ)(F, {
                                        fromNearByFlag: a,
                                        toNearByFlag: r,
                                        fromStationInfo: s,
                                        toStationInfo: c,
                                        originFromStation: M,
                                        originToStation: R,
                                        subTrainTripType: _,
                                        toLocation: Y,
                                        details: l,
                                        transferInfo: d,
                                        note: "若因无票或承运商的其他不可抗力因素，导致部分行程出票失败、延误或取消（包含用户自行取消），平台不承担其相关费用损失",
                                        onNearByBannerClick: function (e) {
                                          return t.onNearByBannerClick(e);
                                        },
                                        isCombine: D,
                                        checkCombineSeat: function () {
                                          return t.checkCombineSeat();
                                        },
                                      }),
                                      (0, P.tZ)(m.View, {
                                        className: "seats",
                                        children: u.map(function (e, i) {
                                          return (0,
                                          P.tZ)(X, { data: e, order: i, onSeatSelected: t.onSeatSelected.bind(t), getRefundRuleByType: t.getRefundRuleByType.bind(t) }, String(i));
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, P.tZ)(m.View, {
                                    className: "next-step ".concat(B.S),
                                    children: (0, P.tZ)(m.Button, {
                                      className: "button",
                                      id: "ANCY",
                                      onClick: this.nextStep,
                                      children: "下一步",
                                    }),
                                  }),
                                  K &&
                                    (0, P.tZ)(A.Z, {
                                      info: p,
                                      visible: h,
                                      onClose:
                                        this.toggleFlightRefundPop.bind(this),
                                    }),
                                  $ &&
                                    (0, P.tZ)(W, {
                                      visible: g,
                                      info: S,
                                      onClose:
                                        this.toggleBusRefundPop.bind(this),
                                    }),
                                  tt &&
                                    (0, P.tZ)(W, {
                                      visible: v,
                                      info: w,
                                      onClose:
                                        this.toggleScenicBusRefundPop.bind(
                                          this
                                        ),
                                    }),
                                  et &&
                                    (0, P.tZ)(G.Z, {
                                      visible: y,
                                      info: N,
                                      onClose: this.toggleShipRefund.bind(this),
                                    }),
                                  (0, P.tZ)(E.Z, {
                                    visible: k,
                                    trafficGuideInfo: b[I],
                                    onClose: function () {
                                      return t.hideTrafficGuidePop();
                                    },
                                    fromLocation:
                                      "start" == I
                                        ? z
                                        : ""
                                            .concat(c.stationName)
                                            .concat(
                                              "T" == c.stationType ? "站" : ""
                                            ),
                                    toLocation:
                                      "end" == I
                                        ? Y
                                        : ""
                                            .concat(s.stationName)
                                            .concat(
                                              "T" == s.stationType ? "站" : ""
                                            ),
                                    fixAtBottom: !0,
                                  }),
                                  (0, P.tZ)(C.Z, {
                                    visible: "combine_seat_intro_dialog" === x,
                                    onClose: function () {
                                      return t.hideShowType();
                                    },
                                    type: this.orderSource,
                                  }),
                                  (0, P.tZ)(T.Z, {
                                    isShow: null == L ? void 0 : L.isShow,
                                    entrancePopup:
                                      null == L ? void 0 : L.entrancePopup,
                                    entranceDrawerTips:
                                      null == L ? void 0 : L.entranceDrawerTips,
                                    onClose: function () {
                                      t.setState({
                                        epidmicInfo: (0, n.Z)(
                                          (0, n.Z)({}, t.state.epidmicInfo),
                                          {},
                                          { isShow: !1 }
                                        ),
                                      });
                                    },
                                  }),
                                  (0, P.tZ)(J, {
                                    isShow: q,
                                    isJlTicket: O,
                                    onClose: function () {
                                      return t.setState({
                                        isShowRobTipModal: !1,
                                      });
                                    },
                                    subTrainTripType: _,
                                    onConfirm: function () {
                                      t.setState({ isShowRobTipModal: !1 }),
                                        t.nextStepInner();
                                    },
                                  }),
                                ],
                              }),
                            })
                          );
                        },
                      },
                    ]),
                    i
                  );
                })(f.default.Component))
              ) || Y;
          Page(
            (0, o.createPageConfig)(
              $,
              "pages/smart/packageA/tripDetail/index",
              { root: { cn: [] } },
              {
                navigationBarTitleText: "",
                backgroundColor: "#0066E6",
                backgroundColorBottom: "#efefef",
              } || {}
            )
          );
        },
      },
      function (t) {
        t.O(
          0,
          [
            5572, 71229, 16048, 99010, 80683, 67289, 72508, 2632, 19559, 11216,
            68592,
          ],
          function () {
            return (function (e) {
              return t((t.s = e));
            })(14968);
          }
        ),
          t.O();
      },
    ]);
})();
