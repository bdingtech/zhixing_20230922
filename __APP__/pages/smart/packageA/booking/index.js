!(function () {
  "use strict";
  require("../sub-vendors.js"),
    require("../sub-common/1affc4a679af4ad334128041573c09c6.js"),
    require("../sub-common/fecc9c60875b710a8101d0d50626beef.js"),
    require("../sub-common/8c56ed24216c9dc53e56531706bca2c2.js"),
    require("../sub-common/108113193bbbd4c3ed4ec458d5f0a379.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [44314],
      {
        63403: function (e, t, i) {
          var a = i(32180),
            r = i(90129),
            n = i(22276),
            o = i(79301),
            s = i(95308),
            l = i(298),
            c = i(57042),
            d = i(24460),
            u = i(81876),
            h = i(21867),
            f = i(86066),
            p = i(45023),
            m = i(52500),
            v = i(92954),
            g = i.n(v),
            N = i(18783),
            T = i(49120),
            S = i(71515),
            b = i(38911),
            w = i(81957),
            D = i(58676),
            x = i(96158),
            Z = i(79792),
            y = i(8271),
            k = i.n(y),
            I = i(25391),
            C = i(79910),
            P = i(77900),
            V = i(94488),
            B = i(94190),
            A = i(97939),
            X = i(20592),
            O = i(13025),
            L = i(15506),
            F = i(8400),
            E = i(37451),
            M = i(98221),
            R = i(4102),
            z = i(48813),
            _ = m.default.memo(function (e) {
              var t = e.list,
                i = e.className;
              return null != t && t.length
                ? (0, z.tZ)(S.View, {
                    className: "smart-book-tips ".concat(i),
                    children:
                      null == t
                        ? void 0
                        : t.map(function (e, t) {
                            return (0,
                            z.BX)(S.View, { className: "flex tip-item", children: [(0, z.tZ)(S.View, { className: "radio-icon" }), (0, z.tZ)(S.View, { className: "tip-text", children: e })] }, "spread_tip_".concat(t));
                          }),
                  })
                : (0, z.tZ)(S.View, {});
            }),
            W = i(38561);
          var U = function (e) {
              var t = e.data,
                i = void 0 === t ? {} : t,
                a = e.index,
                r = (function (e) {
                  var t = "",
                    i = "",
                    a = "",
                    r = "",
                    n = "",
                    o = "二等座",
                    s = "价格",
                    l = "",
                    c = !1;
                  switch (e.tripType) {
                    case "F":
                      (t = "飞机"),
                        (i = new Date(e.flight.startDate)),
                        (a = k()(i).format("MM-DD")),
                        (r = e.flight.fromStation),
                        (n = e.flight.toStation),
                        e.flight.selectSeat || (e.flight.selectSeat = {}),
                        (s = e.flight.selectSeat.price || ""),
                        (l =
                          "机票价格动态调整，当前为预估价格，以最终下单为准"),
                        (o = e.flight.selectSeat.originSeatName);
                      break;
                    case "B":
                      (t = "汽车"),
                        (i = new Date(e.bus.startDate)),
                        (a = k()(i).format("MM-DD")),
                        (r = e.bus.fromStation),
                        (n = e.bus.toStation),
                        e.bus.selectSeat || (e.bus.selectSeat = {}),
                        (s = e.bus.selectSeat.price || ""),
                        (o = e.bus.selectSeat.seatName || "有座");
                      break;
                    case "SC":
                      (t = "汽车"),
                        (i = new Date(e.scenicBus.startDate)),
                        (a = k()(i).format("MM-DD")),
                        (r = e.scenicBus.fromStation),
                        (n = e.scenicBus.toStation),
                        e.scenicBus.selectSeat || (e.scenicBus.selectSeat = {}),
                        (s = e.scenicBus.selectSeat.price || ""),
                        (o = e.scenicBus.selectSeat.seatName || "有座");
                      break;
                    case "S":
                      (t = "船"),
                        (i = new Date(e.ship.startDate)),
                        (a = k()(i).format("MM-DD")),
                        (r = e.ship.fromStation),
                        (n = e.ship.toStation),
                        e.ship.selectSeat || (e.ship.selectSeat = {}),
                        (s = e.ship.selectSeat.price || ""),
                        (o = e.ship.selectSeat.seatName || "有座");
                      break;
                    case "T":
                      (t = (0, W.aj)(e.train.trainNo)),
                        (i = new Date(e.train.startDate)),
                        (a = k()(i).format("MM-DD")),
                        (r = e.train.fromStation),
                        (n = e.train.toStation),
                        e.train.selectSeat || (e.train.selectSeat = {}),
                        (s = e.train.selectSeat.price || ""),
                        (o = e.train.selectSeat.seatName),
                        (c = e.train.selectSeat.ticketLeft <= 0);
                  }
                  return {
                    typeName: t,
                    dateStr: a,
                    fromStationName: r,
                    toStationName: n,
                    seatName: o,
                    priceStr: s,
                    remindStr: l,
                    isTrainRob: c,
                  };
                })(i),
                n = r.typeName,
                o = (0, W.Y2)(r.fromStationName),
                s = (0, W.Y2)(r.toStationName),
                l = r.seatName,
                c = M.bR + " " + r.priceStr;
              return (0, z.tZ)(S.View, {
                className: "smart-trip-detail-item",
                children: (0, z.BX)(S.View, {
                  className: "flex item",
                  children: [
                    (0, z.tZ)(S.View, {
                      className: "".concat(E.Z.tyClass, " seq"),
                      children: Number(a) + 1,
                    }),
                    (0, z.tZ)(S.View, {
                      className: "".concat(E.Z.tyClass, " type"),
                      children: n,
                    }),
                    (0, z.BX)(S.View, {
                      className: "trip-detail-route",
                      children: [o, "-", s],
                    }),
                    r.isTrainRob &&
                      (0, z.tZ)(S.Text, {
                        className: "trip-tag-type",
                        children: "抢票",
                      }),
                    (0, z.BX)(S.View, {
                      className: "seat",
                      children: [
                        (0, z.tZ)(S.Text, {
                          className: "seat-name",
                          children: l,
                        }),
                        r.priceStr ? c : "",
                      ],
                    }),
                  ],
                }),
              });
            },
            j = function (e) {
              var t = e.startTime,
                i = e.endTime,
                a = e.week,
                r = e.monthDay,
                n = e.dayDiff;
              return (0, z.BX)(S.View, {
                children: [
                  (0, z.BX)(S.View, {
                    className: "flex-align-items-center trip-head",
                    children: [
                      (0, z.tZ)(S.View, {
                        className: "transfer-type",
                        children: "中转",
                      }),
                      (0, z.BX)(S.View, {
                        className: "flex-1 trip-txt",
                        children: [
                          (0, z.BX)(S.View, {
                            children: [r, " ", a, " ", t, "-", i],
                          }),
                          n > 0 &&
                            (0, z.BX)(S.View, {
                              className: "cross-day",
                              children: ["+", n],
                            }),
                        ],
                      }),
                      (0, z.BX)(S.View, {
                        className: "extand-txt",
                        children: [
                          (0, z.tZ)(S.Text, { children: "详情" }),
                          (0, z.tZ)(S.Text, {
                            className: "ifont-triangle2 iconfont arrow-icon",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, z.tZ)(S.View, { className: "line" }),
                ],
              });
            };
          var G = function (e) {
              var t = e.data,
                i = void 0 === t ? {} : t,
                a = e.onTap,
                r = e.passengers,
                n = (null == i ? void 0 : i.details) || [];
              if (null == n || !n.length) return (0, z.tZ)(S.View, {});
              var o = (0, W.S)(n, "startDate"),
                s = (0, W.S)(n, "startTime"),
                c = (0, W._Q)(n, "arriveTime"),
                d = (0, W._Q)(n, "arriveDate"),
                u = {
                  startTime: s,
                  endTime: c,
                  week: (0, W.GD)(o),
                  monthDay: (0, W.zK)(o),
                  dayDiff: R.Z.getDiffDays(o, d),
                },
                h = (0, W.T$)(n, r);
              return (0, z.tZ)(S.View, {
                className: "smart-trip-detail-module",
                children: (0, z.BX)(S.View, {
                  className: "header box",
                  id: "ANAh",
                  onClick: a,
                  children: [
                    (0, z.tZ)(j, (0, l.Z)({}, u)),
                    (0, z.tZ)(S.View, {
                      className: "flex",
                      children: (0, z.tZ)(S.View, {
                        className: "list",
                        children:
                          i.details &&
                          i.details.map(function (e, t) {
                            return (0,
                            z.tZ)(U, { data: e, index: String(t) }, t);
                          }),
                      }),
                    }),
                    (0, z.tZ)(_, { list: h, className: "tips" }),
                  ],
                }),
              });
            },
            H = function (e) {
              switch (e.tripType) {
                case "T":
                  return (0, z.tZ)(S.Text, {
                    className: "ifont-train2 iconfont trip-icon",
                  });
                case "F":
                  return (0, z.tZ)(S.Text, {
                    className: "ifont-flight2 iconfont trip-icon",
                  });
                case "S":
                  return (0, z.tZ)(S.Text, {
                    className: "ifont-ship iconfont trip-icon",
                  });
                case "B":
                case "SC":
                  return (0, z.tZ)(S.Text, {
                    className: "ifont-bus iconfont trip-icon",
                  });
                default:
                  return (0, z.tZ)(S.Text, {
                    className: "ifont-train2 iconfont trip-icon",
                  });
              }
            },
            Y = m.default.memo(function (e) {
              var t,
                i,
                a,
                r,
                n = e.tripData,
                o = (0, W.MW)(n),
                s = null == n ? void 0 : n.tripType;
              if (!o) return (0, z.tZ)(S.View, {});
              var l =
                  "T" == s
                    ? (0, W.aj)(null == o ? void 0 : o.trainNo)
                    : "F" == s
                    ? "飞机"
                    : "B" == s || "SC" == s
                    ? "汽车"
                    : "船",
                c = null == o ? void 0 : o.useMinutes,
                d = (0, W.zE)(c),
                u = (0, W.zK)(null == o ? void 0 : o.startDate),
                h = (0, W.Dw)(n),
                f = null == o ? void 0 : o.airIcon,
                p = null == o ? void 0 : o.planeType,
                m = null == o ? void 0 : o.punctuality,
                v = null == o ? void 0 : o.onlyShowFlag,
                g = "T" === s && (null == o ? void 0 : o.jlTicket),
                N =
                  (null == o || null === (t = o.selectSeat) || void 0 === t
                    ? void 0
                    : t.ticketLeft) <= 0,
                T = !v && (N || g);
              return (0,
              z.BX)(S.View, { className: "flex smart-booking-spread-trip-card", children: [(0, z.BX)(S.View, { className: "left flex-column", children: [(0, z.BX)(S.View, { className: "left-head flex-align-items-center", children: [(0, z.tZ)(S.View, { className: "icon-bg flex-center ".concat(Z.default.isTieyou ? "ty" : "zx"), children: (0, z.tZ)(H, { tripType: s }) }), (0, z.tZ)(S.View, { className: "type-name", children: l })] }), (0, z.BX)(S.View, { className: "time", children: [(0, z.tZ)(S.View, { className: "time-txt", children: null == o ? void 0 : o.startTime }), (0, z.tZ)(S.View, { className: "cost-time", children: d }), (0, z.BX)(S.View, { className: "time-txt arriive-time", children: [!(null == o || !o.dayDiff) && (0, z.BX)(S.Text, { className: "day-diff", children: ["+", o.dayDiff] }), null == o ? void 0 : o.arriveTime] })] })] }), (0, z.tZ)(S.Image, { src: "https://images3.c-ctrip.com/ztrip/train.xin/2022_08/mini_travel_line@3x.webp", className: "line-wrap" }), (0, z.BX)(S.View, { className: "right flex-1", children: [(0, z.BX)(S.View, { className: "flex-align-items-center", children: [(0, z.tZ)(S.View, { className: "date", children: u }), (0, z.tZ)(S.View, { className: "split-line" }), !!f && (0, z.tZ)(S.Image, { src: f, className: "air-icon" }), (0, z.tZ)(S.View, { className: "number", children: h }), T && (0, z.tZ)(S.View, { className: "rob-tag", children: g ? "预约" : "抢票" })] }), (0, z.BX)(S.View, { className: "flex flex-1", children: [(0, z.BX)(S.View, { className: "station flex-1", children: [(0, z.BX)(S.View, { className: "station-txt", children: [null == o ? void 0 : o.fromStation, "T" == s ? "站" : "", "F" == s ? (null == o ? void 0 : o.departTerminal) : ""] }), (0, z.BX)(S.View, { className: "station-txt to-station", children: [o.toStation, "T" == s ? "站" : "", "F" == s ? o.arriveTerminal : ""] })] }), "F" === s ? (0, z.BX)(S.View, { className: "flight flex flex-column", children: [(0, z.tZ)(S.View, { children: p }), !!m && (0, z.tZ)(S.View, { className: "flight-cal", children: m })] }) : (0, z.BX)(S.View, { className: "flight flex flex-column", children: [!(null == o || null === (i = o.selectSeat) || void 0 === i || !i.seatName) && (0, z.tZ)(S.View, { children: null == o || null === (a = o.selectSeat) || void 0 === a ? void 0 : a.seatName }), (0, z.BX)(S.View, { className: "flight-cal", children: ["¥", null == o || null === (r = o.selectSeat) || void 0 === r ? void 0 : r.price] })] })] })] })] });
            }),
            $ = m.default.memo(function (e) {
              var t,
                i = e.transferItem,
                a = e.index,
                r = e.details;
              if (!i) return (0, z.tZ)(S.View, {});
              var n = (0, W.gd)(r, a),
                o = null == i ? void 0 : i.distance,
                s = null == i ? void 0 : i.transferAreaName,
                l = (0, W._g)(s, 5) || "",
                c = n ? "同站换乘" : "市内换乘",
                d = (0, W.Cl)(null == i ? void 0 : i.optimalMinutes),
                u =
                  null === (t = (0, W.VJ)(r, a)) || void 0 === t
                    ? void 0
                    : t.timeStr;
              return (0,
              z.BX)(S.View, { className: "transfer flex-align-items-center", children: [n ? (0, z.tZ)(S.Text, { className: "ifont-transfer-same color-blue iconfont transfer-icon" }) : (0, z.tZ)(S.Text, { className: "ifont-transfer-different color-red  iconfont transfer-icon" }), (0, z.BX)(S.Text, { className: "transfer-desc", children: [l, "·", c] }), (0, z.BX)(S.Text, { className: "time-desc", children: [!!o && (0, z.BX)(S.Text, { children: ["间隔", o, "km，"] }), n && !!u && (0, z.BX)(S.Text, { children: ["停留", u] }), !n && !(null == i || !i.optimalMinutes) && (0, z.BX)(S.Text, { children: ["耗时约", d] })] })] });
            }),
            q = function (e) {
              var t = e.onClose,
                i = e.monthDay,
                a = e.week,
                r = e.useTimeStr;
              return (0, z.BX)(S.View, {
                children: [
                  (0, z.BX)(S.View, {
                    className: "flex-align-items-center trip-head",
                    children: [
                      (0, z.tZ)(S.View, {
                        className: "transfer-type",
                        children: "中转",
                      }),
                      (0, z.tZ)(S.View, {
                        className: "flex-1 trip-txt",
                        children: (0, z.BX)(S.View, {
                          children: [i, " ", a, "出发 全程", r],
                        }),
                      }),
                      (0, z.BX)(S.View, {
                        className: "extand-txt",
                        id: "ANAf",
                        onClick: t,
                        children: [
                          (0, z.tZ)(S.Text, { children: "收起" }),
                          (0, z.tZ)(S.Text, {
                            className: "ifont-triangle2 iconfont arrow-icon",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, z.tZ)(S.View, { className: "line" }),
                ],
              });
            },
            J = m.default.memo(function (e) {
              var t = e.isShow,
                i = e.onClose,
                a = e.data,
                r = e.passengers,
                n = (null == a ? void 0 : a.details) || [],
                o = (null == a ? void 0 : a.transferInfo) || [];
              if (null == n || !n.length) return (0, z.tZ)(S.View, {});
              var s = (0, W.S)(n, "startDate"),
                c = {
                  monthDay: (0, W.zK)(s),
                  week: (0, W.GD)(s),
                  useTimeStr: (0, W.zE)(null == a ? void 0 : a.totalMinutes),
                },
                d = (0, W.T$)(n, r);
              return (0, z.BX)(S.View, {
                className: "smart-book-spread-trip-detail",
                children: [
                  (0, z.tZ)(S.View, {
                    className: "layer ".concat(t ? "fade-in" : ""),
                    id: "ANAg",
                    onClick: i,
                  }),
                  (0, z.tZ)(S.View, {
                    className: "drawer ".concat(t ? "drawer-show" : ""),
                    children: (0, z.BX)(S.View, {
                      className: "content",
                      children: [
                        (0, z.tZ)(q, (0, l.Z)({ onClose: i }, c)),
                        null == n
                          ? void 0
                          : n.map(function (e, t) {
                              return (0,
                              z.BX)(S.View, { children: [(0, z.tZ)(Y, { tripData: e, index: t }), t < n.length - 1 && (0, z.tZ)($, { transferItem: o[t], index: t, details: n })] }, e.bizOrderBumber);
                            }),
                        (0, z.tZ)(_, { list: d, className: "tips" }),
                      ],
                    }),
                  }),
                ],
              });
            }),
            K = i(75492);
          var Q = function (e) {
              var t = e.details,
                i = void 0 === t ? [] : t,
                a = e.passengers,
                r = void 0 === a ? [] : a,
                n = e.freeChildren,
                o = void 0 === n ? [] : n,
                s = e.setPriceDetail,
                l = e.togglePriceDetailDialog,
                c = e.cashBackPrice,
                d = e.robAdviceModel,
                u = e.bookBtnClick,
                h = e.hasVipDiscount,
                f = e.useVipBerth,
                p = e.selectedProductFromXPage,
                m = e.setOtherPriceDetail,
                v = e.chooseSeatDiscountList,
                N = (function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : [],
                    t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : [],
                    i =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : [],
                    a =
                      arguments.length > 3 && void 0 !== arguments[3]
                        ? arguments[3]
                        : {},
                    r = arguments.length > 4 ? arguments[4] : void 0,
                    n = arguments.length > 5 ? arguments[5] : void 0,
                    o = arguments.length > 6 ? arguments[6] : void 0,
                    s = arguments.length > 7 ? arguments[7] : void 0,
                    l = 0;
                  return (
                    e.forEach(function (o, c) {
                      var d,
                        u,
                        h,
                        f,
                        p,
                        m = "F" === o.tripType,
                        v = "T" === o.tripType,
                        g = (0, W.MW)(o),
                        N =
                          (null == g ||
                          null === (d = g.assignCarriageInfo) ||
                          void 0 === d ||
                          null === (u = d.selectedCarriages) ||
                          void 0 === u
                            ? void 0
                            : u.length) > 0;
                      if (v && N) {
                        var T = g.assignCarriageInfo.price;
                        l += T * ((null == t ? void 0 : t.length) || 0);
                      }
                      if (
                        v &&
                        (null == g ||
                        null === (h = g.berthTicket) ||
                        void 0 === h ||
                        null === (f = h.seatList) ||
                        void 0 === f
                          ? void 0
                          : f.length) > 0 &&
                        (null == g ||
                          null === (p = g.berthTicket) ||
                          void 0 === p ||
                          !p.isFreeFor12306)
                      ) {
                        var S,
                          b =
                            null == g ||
                            null === (S = g.berthTicket) ||
                            void 0 === S
                              ? void 0
                              : S.seatList,
                          w = 0;
                        if (
                          (b.forEach(function (e) {
                            var t = null == e ? void 0 : e.price,
                              i = r && n ? 0 : null == e ? void 0 : e.amount;
                            i && ((l += i * t), (w += i));
                          }),
                          N &&
                            w > 0 &&
                            (!r || !n) &&
                            (null == s ? void 0 : s.length) > 0)
                        ) {
                          var D = s.find(function (e) {
                              return (
                                (null == e ? void 0 : e.tripIndex) === c + 1
                              );
                            }),
                            x = Math.abs(
                              (null == D ? void 0 : D.discount) || 0
                            );
                          l -= x;
                        }
                      }
                      var Z = (0, W.e$)(
                          t,
                          null == g ? void 0 : g.manualSelectSeatInfo
                        ),
                        y =
                          null == Z
                            ? void 0
                            : Z.find(function (e) {
                                return e.isSelected;
                              });
                      if (v && !(0, W.Qr)(y)) {
                        var k = y.price;
                        if (
                          ((l += k * ((null == t ? void 0 : t.length) || 0)),
                          N && (null == s ? void 0 : s.length) > 0)
                        ) {
                          var I = s.find(function (e) {
                              return (
                                (null == e ? void 0 : e.tripIndex) === c + 1
                              );
                            }),
                            C = Math.abs(
                              (null == I ? void 0 : I.discount) || 0
                            );
                          l -= C;
                        }
                      }
                      t.forEach(function (t) {
                        var i = g.childPrice || 0;
                        if ("儿童票" === t.passengerType && i)
                          (l += i || 0),
                            m &&
                              g.flightDetail &&
                              g.flightDetail.product &&
                              (l += g.flightDetail.product.ctx);
                        else {
                          var r,
                            n =
                              (null == g ||
                              null === (r = g.selectSeat) ||
                              void 0 === r
                                ? void 0
                                : r.price) || 0;
                          "T" === (null == o ? void 0 : o.tripType) &&
                            (null == a ? void 0 : a.robIndex) == c &&
                            (n = (0, W.vT)(g, a, e)),
                            (l += n),
                            m &&
                              g.flightDetail &&
                              g.flightDetail.product &&
                              (l += g.flightDetail.product.atx);
                        }
                        var s = g.serviceFee;
                        s && (l += s);
                      }),
                        i.forEach(function () {
                          if (!v) {
                            var e,
                              t =
                                (null == g ||
                                null === (e = g.selectSeat) ||
                                void 0 === e
                                  ? void 0
                                  : e.price) || 0;
                            (l += t),
                              m &&
                                g.flightDetail &&
                                g.flightDetail.product &&
                                (l += g.flightDetail.product.atx);
                          }
                        });
                    }),
                    !(0, W.Qr)(o) &&
                      t.length > 0 &&
                      (o.productCode === M.V_
                        ? (l += o.productPrice)
                        : (l +=
                            o.productPrice *
                            ((null == t ? void 0 : t.length) || 0))),
                    l
                  );
                })(i, r, o, d, h, f, p, v),
                T = (0, W.VL)(i),
                b = K.Z.useDebounce(function () {
                  u();
                }, 1e3),
                w = [];
              T && w.push("含机建燃油"),
                c && w.push("出行后返".concat(c, "元"));
              var D = w.join("，");
              return (0, z.tZ)(S.View, {
                className: "smart-bottom-row",
                children: (0, z.BX)(S.View, {
                  className: "footer",
                  children: [
                    (0, z.BX)(S.View, {
                      className: "price",
                      children: [
                        (0, z.tZ)(S.Text, {
                          className: "price-unit",
                          children: M.bR,
                        }),
                        (0, z.tZ)(S.Text, {
                          className: "price-txt",
                          children: N,
                        }),
                        D &&
                          (0, z.tZ)(S.View, {
                            className: "price-tip",
                            children: D,
                          }),
                      ],
                    }),
                    (0, z.BX)(S.View, {
                      className: "footer-detail",
                      id: "ANAG",
                      onClick: function () {
                        if (r && r.length) {
                          var e = (0, W.Dh)(i, r, o, d, h, f, v);
                          if ((s(e), !(0, W.Qr)(p))) {
                            var t = (0, W.W5)(r, [p]);
                            m(t);
                          }
                          l();
                        } else
                          g().showToast({
                            title: "请先选择乘客～",
                            icon: "none",
                          });
                      },
                      children: [
                        "明细 ",
                        (0, z.tZ)(S.View, {
                          className: "ifont-arrup iconfont icon-arr",
                        }),
                      ],
                    }),
                    (0, z.tZ)(S.View, {
                      className: "footer-btn",
                      id: "ANAH",
                      onClick: b,
                      children: "立即预订",
                    }),
                  ],
                }),
              });
            },
            ee = i(3205);
          var te = function (e) {
            var t = e.details,
              i = [],
              a = [],
              r = !1,
              o = !1;
            function s(e) {
              "string" != typeof e &&
                (e =
                  "https://trains.ctrip.com/OrderService/InsuranceDetail.aspx?ProductID=6721&terminal=1"),
                ee.Z.twebview({ data: { url: e } });
            }
            (void 0 === t ? [] : t).forEach(function (e) {
              if ("F" === e.tripType) {
                var t = (0, W.MW)(e);
                if (-1 === a.indexOf(t.airLine)) {
                  a.push(t.airLine);
                  var s = (0, W.ej)(t.noticeContent);
                  console.log("flightContent", s), i.push.apply(i, (0, n.Z)(s));
                }
              } else "T" === e.tripType ? (r = !0) : ("B" !== e.tripType && "SC" !== e.tripType) || (o = !0);
            });
            var l = i.length > 0;
            return (0, z.tZ)(S.View, {
              className: "smart-service-protocol-row",
              children: (0, z.BX)(S.View, {
                className: "tip ".concat(E.Z.tyClass),
                children: [
                  "请您在提交订单前仔细阅读",
                  r &&
                    (0, z.tZ)(S.Text, {
                      className: "protocol",
                      id: "ANAa",
                      onClick: function () {
                        ee.Z.twebview({
                          data: {
                            url: Z.default.isTieyou
                              ? "https://pages.ctrip.com/ztrip/document/policy.html"
                              : "https://pages.ctrip.com/ztrip/document/policyzx.html",
                          },
                        });
                      },
                      children: "《火车票信息服务协议》",
                    }),
                  r &&
                    (0, z.tZ)(S.Text, {
                      className: "protocol",
                      id: "ANAb",
                      onClick: function () {
                        ee.Z.twebview({
                          data: {
                            url: Z.default.isTieyou
                              ? "https://market.suanya.com/document/static/train/TPersonalInformationAuthorizationStatement.html"
                              : "https://market.suanya.com/document/static/train/PersonalInformationAuthorizationStatement.html",
                          },
                        });
                      },
                      children: "《个人信息授权声明》",
                    }),
                  l &&
                    (0, z.tZ)(S.Text, {
                      className: "protocol",
                      id: "ANAc",
                      onClick: s,
                      children: "《机票预订须知》",
                    }),
                  i.map(function (e, t) {
                    return (0, z.tZ)(
                      S.Text,
                      {
                        className: "protocol",
                        id: "ANAd",
                        onClick: function () {
                          return s(e.href);
                        },
                        children: e.text,
                      },
                      t
                    );
                  }),
                  o &&
                    (0, z.tZ)(S.Text, {
                      className: "protocol",
                      id: "ANAe",
                      onClick: function () {
                        ee.Z.twebview({
                          data: {
                            url: "https://pages.c-ctrip.com/bus/seo/bookingNoticeZhixing.html",
                          },
                        });
                      },
                      children: "《汽车票预订服务协议》",
                    }),
                ],
              }),
            });
          };
          var ie = function (e) {
              var t = e.selectedPasList,
                i = void 0 === t ? [] : t,
                a = e.convertStu,
                r = void 0 !== a && a,
                n = e.onRoutePassengerList,
                o = e.removeSelectedPassenger,
                s = i.reduce(
                  function (e, t) {
                    return (
                      1 === t.PassengerType || 3 === t.PassengerType
                        ? e.adult++
                        : 2 === t.PassengerType && e.child++,
                      e
                    );
                  },
                  { adult: 0, child: 0 }
                );
              return (0, z.tZ)(S.View, {
                className: "smart-passenger-chosen-module",
                children: (0, z.BX)(S.View, {
                  className: "passenger",
                  children: [
                    i.length
                      ? (0, z.BX)(S.View, {
                          className: "pa-header flex",
                          children: [
                            (0, z.tZ)(S.Text, {
                              className: "pa-title",
                              children: "乘客信息",
                            }),
                            (0, z.BX)(S.View, {
                              className: "pa-subtitle",
                              children: [
                                "成人",
                                (0, z.tZ)(S.Text, {
                                  className: "".concat(E.S, " b"),
                                  children: s.adult,
                                }),
                                "儿童",
                                (0, z.tZ)(S.Text, {
                                  className: "".concat(E.S, " b"),
                                  children: s.child,
                                }),
                              ],
                            }),
                          ],
                        })
                      : null,
                    i.map(function (e, t) {
                      return (0, z.BX)(
                        S.View,
                        {
                          className: "flex pa-item",
                          children: [
                            (0, z.tZ)(S.View, {
                              className: "del",
                              id: "ANAO",
                              onClick: function () {
                                return o(e, t);
                              },
                              children: (0, z.tZ)(S.Text, {
                                className: "ifont-pasgdel iconfont icon-del",
                              }),
                            }),
                            (0, z.BX)(S.View, {
                              className: "pa-info",
                              children: [
                                (0, z.tZ)(S.Text, {
                                  className: "pa-name",
                                  children: e.pasName,
                                }),
                                1 == e.PassengerType &&
                                  !r &&
                                  (0, z.tZ)(S.Text, {
                                    className: "tag-type pa-tag",
                                    children: "成人票",
                                  }),
                                (0, z.BX)(m.default.Fragment, {
                                  children: [
                                    2 == e.PassengerType &&
                                      (0, z.tZ)(S.Text, {
                                        className: "tag-type pa-tag",
                                        children: "儿童票",
                                      }),
                                    2 == e.PassengerType &&
                                      e.isFreeChild &&
                                      (0, z.tZ)(S.Text, {
                                        className: "tag-free",
                                        children: "免费",
                                      }),
                                  ],
                                }),
                                (3 == e.PassengerType || r) &&
                                  (0, z.tZ)(S.Text, {
                                    className: "tag-type pa-tag",
                                    children: "学生票",
                                  }),
                                (0, z.BX)(S.View, {
                                  className: "idnum grey",
                                  children: [
                                    e.IdentityType,
                                    " ",
                                    e.ShowPassportCode,
                                  ],
                                }),
                              ],
                            }),
                          ],
                        },
                        e.PassengerID
                      );
                    }),
                    (0, z.BX)(S.View, {
                      className: "operation",
                      id: "ANAP",
                      onClick: n,
                      children: [
                        (0, z.tZ)(S.Text, {
                          className:
                            "ifont-counteradd iconfont icon-add ".concat(E.S),
                        }),
                        (0, z.tZ)(S.Text, {
                          className: "add-txt ".concat(E.S),
                          children: "添加/编辑乘客",
                        }),
                      ],
                    }),
                  ],
                }),
              });
            },
            ae = Z.default.isTieyou,
            re = {
              1: "一",
              2: "二",
              3: "三",
              4: "四",
              5: "五",
              6: "六",
              7: "七",
              8: "八",
              9: "九",
            };
          var ne = function (e) {
              var t = e.isShow,
                i = e.product,
                a = e.onUpdateOrder,
                r = e.ubtTrace,
                n = e.pageId;
              return (
                (0, m.useEffect)(
                  function () {
                    t && r("222637", { PageId: n });
                  },
                  [t]
                ),
                (0, z.BX)(S.View, {
                  className: "will-ticket "
                    .concat(ae ? "ty" : "zx", " ")
                    .concat(t ? "active" : ""),
                  children: [
                    (0, z.BX)(S.View, {
                      className: "flex",
                      children: [
                        (0, z.tZ)(S.Image, {
                          src: null == i ? void 0 : i.icon,
                          className: "icon",
                        }),
                        (0, z.BX)(S.View, {
                          className: "flex-1",
                          children: [
                            (0, z.tZ)(S.View, {
                              className: "ticket-desc",
                              children: null == i ? void 0 : i.orderDesc,
                            }),
                            (0, z.BX)(S.View, {
                              className: "product-wrap",
                              children: [
                                (0, z.tZ)(S.Text, {
                                  className: "name",
                                  children: null == i ? void 0 : i.productDesc,
                                }),
                                (0, z.tZ)(S.Text, {
                                  className: "price",
                                  children:
                                    null == i ? void 0 : i.productPriceDesc,
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, z.tZ)(S.View, {
                      className: "btn flex-center",
                      id: "ANAI",
                      onClick: function () {
                        r("222638", { PageId: n }), a(i);
                      },
                      children: null == i ? void 0 : i.buttonName,
                    }),
                  ],
                })
              );
            },
            oe = function (e) {
              var t = e.visible,
                i = void 0 !== t && t,
                a = e.details,
                r = void 0 === a ? [] : a,
                n = e.passengers,
                o = void 0 === n ? [] : n,
                s = e.processRate,
                l = void 0 === s ? 0 : s,
                c = e.processProduct,
                d = e.onUpdateOrder,
                u = e.visibleProduct,
                h = e.ubtTrace,
                f = e.pageId;
              return i
                ? (0, z.tZ)(S.View, {
                    className: "smart-create-order-process-dialog",
                    children: (0, z.BX)(S.View, {
                      className: "smart-mask",
                      children: [
                        (0, z.BX)(S.View, {
                          className: "smart-modal",
                          children: [
                            (0, z.tZ)(S.View, {
                              className: "title",
                              children: "请确认车次信息",
                            }),
                            (0, z.BX)(S.View, {
                              className: "trip-list",
                              children: [
                                r.map(function (e, t) {
                                  var i = (function (e) {
                                    var t = "",
                                      i = "",
                                      a = "",
                                      r = "",
                                      n = "",
                                      o = "";
                                    switch (e.tripType) {
                                      case "F":
                                        (t = e.flight.flightNo),
                                          (i = new Date(e.flight.startDate)),
                                          (a = k()(i).format("YYYY.MM.DD")),
                                          (r = e.flight.startTime),
                                          (n = e.flight.fromStation),
                                          (o = e.flight.toStation);
                                        break;
                                      case "B":
                                        (t = ""),
                                          (i = new Date(e.bus.startDate)),
                                          (a = k()(i).format("MM-DD")),
                                          (r = e.bus.startTime),
                                          (n = e.bus.fromStation),
                                          (o = e.bus.toStation);
                                        break;
                                      case "SC":
                                        (t = e.scenicBus.busNumber),
                                          (i = new Date(e.scenicBus.startDate)),
                                          (a = k()(i).format("MM-DD")),
                                          (r = e.scenicBus.startTime),
                                          (n = e.scenicBus.fromStation),
                                          (o = e.scenicBus.toStation);
                                        break;
                                      case "S":
                                        (t = e.ship.shipName),
                                          (i = new Date(e.ship.startDate)),
                                          (a = k()(i).format("MM-DD")),
                                          (r = e.ship.startTime),
                                          (n = e.ship.fromStation),
                                          (o = e.ship.toStation);
                                        break;
                                      case "T":
                                        (t = e.train.trainNo),
                                          (i = new Date(e.train.startDate)),
                                          (a = k()(i).format("MM-DD")),
                                          (r = e.train.startTime),
                                          (n = e.train.fromStation),
                                          (o = e.train.toStation);
                                    }
                                    return {
                                      typeName: t,
                                      dateStr: a,
                                      fromStationName: n,
                                      toStationName: o,
                                      timeStr: r,
                                    };
                                  })(e);
                                  return (0,
                                  z.BX)(S.View, { className: "trip-item", children: [(0, z.BX)(S.View, { className: "title", children: ["第", re[t + 1], "程"] }), (0, z.BX)(S.View, { className: "row", children: [(0, z.BX)(S.View, { className: "from", children: [(0, W.Y2)(i.fromStationName, 4), "-", (0, W.Y2)(i.toStationName, 4)] }), (0, z.tZ)(S.View, { className: "number", children: i.typeName })] }), (0, z.BX)(S.View, { className: "row", children: [(0, z.tZ)(S.View, { className: "from", children: i.dateStr }), (0, z.BX)(S.View, { className: "number", children: [i.timeStr, "发车"] })] }), (0, z.tZ)(S.View, { className: "ifont-suc iconfont icon-check" })] }, String(t));
                                }),
                                (0, z.BX)(S.View, {
                                  className: "trip-item",
                                  children: [
                                    (0, z.tZ)(S.View, {
                                      className: "title",
                                      children: "乘车人",
                                    }),
                                    (0, z.tZ)(S.View, {
                                      className: "row",
                                      children: (0, z.tZ)(S.View, {
                                        className: "from",
                                        children: o.map(function (e, t) {
                                          return (0,
                                          z.BX)(S.Text, { children: [e.pasName, t !== o.length - 1 ? ", " : ""] }, "".concat(e.pasName, "-").concat(t));
                                        }),
                                      }),
                                    }),
                                    (0, z.tZ)(S.View, {
                                      className:
                                        "ifont-suc iconfont icon-check",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, z.BX)(S.View, {
                              className: "progress",
                              children: [
                                (0, z.BX)(S.View, {
                                  className: "flex",
                                  children: [
                                    (0, z.tZ)(S.View, {
                                      className: "progress-text",
                                      children: "正在确认车次信息...",
                                    }),
                                    (0, z.BX)(S.View, {
                                      className: "progress-rate",
                                      children: [l, "%"],
                                    }),
                                  ],
                                }),
                                (0, z.tZ)(S.View, {
                                  className: "progress-bar ".concat(
                                    E.Z.tyClass
                                  ),
                                  children: (0, z.tZ)(S.View, {
                                    className: "progress-active",
                                    style: "width: ".concat(l, "%"),
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, z.tZ)(ne, {
                          isShow:
                            u &&
                            1 === (null == c ? void 0 : c.type) &&
                            !(null == c || !c.oneButtonProduct),
                          product: null == c ? void 0 : c.oneButtonProduct,
                          onUpdateOrder: d,
                          ubtTrace: h,
                          pageId: f,
                        }),
                      ],
                    }),
                  })
                : (0, z.tZ)(S.View, {});
            };
          var se = function (e) {
            var t = e.details,
              i = e.setTicketOffsetTime;
            if (!t) return null;
            var a = (0, W.ki)(t),
              n = a.hasRob,
              o = a.robShift;
            if (!n) return null;
            var s = (function (e) {
              var t = new Date();
              return (
                (new Date(
                  (e.startDate + " " + e.startTime).replace(/-/g, "/")
                ).getTime() -
                  t.getTime()) /
                1e3 /
                60 /
                60
              );
            })(o);
            if (s <= 1) return null;
            var l = (function (e) {
                var t = [];
                return (
                  e > 1 && e <= 2
                    ? (t.push({ text: "发车前30分钟", minutes: 30, index: 0 }),
                      t.push({ text: "发车前1小时", minutes: 60, index: 1 }))
                    : e >= 2 && e < 8
                    ? (t.push({ text: "发车前30分钟", minutes: 30, index: 0 }),
                      t.push({ text: "发车前1小时", minutes: 60, index: 1 }),
                      t.push({ text: "发车前2小时", minutes: 120, index: 2 }))
                    : e >= 8 && e < 16
                    ? (t.push({ text: "发车前1小时", minutes: 60, index: 0 }),
                      t.push({ text: "发车前2小时", minutes: 120, index: 1 }),
                      t.push({ text: "发车前4小时", minutes: 240, index: 2 }))
                    : e >= 16 && e < 36
                    ? (t.push({ text: "发车前2小时", minutes: 120, index: 0 }),
                      t.push({ text: "发车前6小时", minutes: 360, index: 1 }),
                      t.push({ text: "发车前12小时", minutes: 720, index: 2 }))
                    : e >= 36 &&
                      (t.push({ text: "发车前6小时", minutes: 360, index: 0 }),
                      t.push({ text: "发车前12小时", minutes: 720, index: 1 }),
                      t.push({
                        text: "发车前24小时",
                        minutes: 1440,
                        index: 2,
                      })),
                  t
                );
              })(s),
              c = (function (e) {
                var t = 0;
                return (
                  (e >= 2 && e < 8) || (e >= 8 && e < 16)
                    ? (t = 1)
                    : ((e >= 16 && e < 36) || e >= 36) && (t = 2),
                  t
                );
              })(s),
              d = (0, m.useState)(c),
              u = (0, r.Z)(d, 2),
              h = u[0],
              f = u[1],
              p =
                "当前为您抢至" +
                l[h].text +
                "，请根据您根据实际规划，选择合理的抢票截止时间。";
            return (
              (0, m.useEffect)(function () {
                l && c < l.length && i(l[c].minutes);
              }, []),
              (0, z.BX)(S.View, {
                className: "smart-rob-deadline",
                children: [
                  (0, z.tZ)(S.View, {
                    className: "title",
                    children: "抢票截止时间",
                  }),
                  (0, z.tZ)(S.View, {
                    className: "content",
                    children: l.map(function (e, t) {
                      return (0, z.tZ)(
                        S.View,
                        {
                          className: "item " + (h == t ? "cur" : ""),
                          id: "ANAS",
                          onClick: function () {
                            f(t), i(e.minutes);
                          },
                          children: e.text,
                        },
                        String(t)
                      );
                    }),
                  }),
                  (0, z.tZ)(S.View, { className: "bottom-tip", children: p }),
                ],
              })
            );
          };
          var le = function (e) {
              var t = e.visible,
                i = void 0 !== t && t,
                a = e.duplicateOrderData,
                r = e.createOrderInner,
                n = e.onClose;
              if (!a) return null;
              var o = a.title,
                s = a.desc,
                l = a.duplicateOrders,
                c = void 0 === l ? [] : l,
                d = [];
              c.forEach(function (e) {
                d.push(
                  (function (e) {
                    var t = (0, W.Y2)(e.fromLocation, 5),
                      i = (0, W.Y2)(e.toLocation, 4),
                      a = "".concat(t, "-").concat(i),
                      r = (function (e) {
                        var t = "智慧出行";
                        return (
                          "train" === e || "train12306" === e
                            ? (t = "火车")
                            : "flight" === e && (t = "机票"),
                          t
                        );
                      })(e.duplicateOrderType),
                      n = "";
                    return (
                      e.passengers.forEach(function (e, t) {
                        0 === t
                          ? (n += e.name)
                          : 1 === t
                          ? (n += "、" + e.name)
                          : 2 === t && (n += "等");
                      }),
                      {
                        title: a,
                        tagName: r,
                        statusDesc: e.statusDesc,
                        departTimeText: ""
                          .concat(
                            k()(e.departDateTime).format("YYYY-MM-DD"),
                            " "
                          )
                          .concat((0, W.GD)(e.departDateTime), " ")
                          .concat(
                            k()(e.departDateTime).format("HH:mm"),
                            "出发"
                          ),
                        passengersText: n,
                      }
                    );
                  })(e)
                );
              });
              var u = (function (e) {
                  if (e) {
                    var t = e.waitPayOrderFlag,
                      i = (function (e) {
                        return (
                          !(!e || 0 === e.length) &&
                          "train12306" === e[0].duplicateOrderType
                        );
                      })(e.duplicateOrders);
                    return t && !i;
                  }
                  return !1;
                })(a),
                h = u ? "查看订单" : "继续预订",
                f = u ? "取消并继续" : "查看原订单",
                p = c.length && c[0],
                m = p.duplicateType;
              function v() {
                var e,
                  t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  i = t.orderNumber,
                  a = t.duplicateOrderType;
                switch (a) {
                  case "smartTrip":
                    e =
                      "/pages/smart/packageA/orderDetail/index?orderNumber=".concat(
                        i
                      );
                    break;
                  case "flight":
                    e = "/pages/flight/detail/detail?orderNumber=".concat(i);
                    break;
                  case "train":
                  case "train12306":
                    e = I.ZP.getTrainDetailUrl(i);
                }
                e && (n(), g().navigateTo({ url: e }));
              }
              function N(e) {
                var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null;
                e && 1 === e.resultCode
                  ? r(!0, t)
                  : (0, T.showToast)("取消失败，请重试~");
              }
              return i
                ? (0, z.tZ)(S.View, {
                    className: "smart-duplicate-order-intercept-dialog",
                    children: (0, z.tZ)(S.View, {
                      className: "smart-mask",
                      children: (0, z.BX)(S.View, {
                        className: "smart-modal ".concat(i ? "show" : "hide"),
                        id: "ANAJ",
                        onClick: function (e) {
                          e.stopPropagation();
                        },
                        children: [
                          (0, z.tZ)(S.View, {
                            className: "header_icon ".concat(E.Z.tyClass),
                          }),
                          (0, z.tZ)(S.View, {
                            className: "title",
                            children: o,
                          }),
                          (0, z.tZ)(S.View, { className: "desc", children: s }),
                          (0, z.tZ)(S.View, {
                            className: "order_list",
                            children:
                              3 !== m &&
                              d.map(function (e, t) {
                                return (0,
                                z.BX)(S.View, { className: "order_item", children: [(0, z.BX)(S.View, { className: "order_header", children: [(0, z.tZ)(S.Text, { className: "order_title", children: e.title }), (0, z.tZ)(S.Text, { className: "order_type", children: e.tagName }), (0, z.tZ)(S.Text, { className: "order_status", children: e.statusDesc })] }), (0, z.tZ)(S.View, { className: "order_content", children: e.departTimeText }), (0, z.tZ)(S.View, { className: "order_bottom", children: e.passengersText })] }, String(t));
                              }),
                          }),
                          (0, z.tZ)(S.View, {
                            className: "tip",
                            children: "*本提示仅供参考，以乘车人实际购票为准",
                          }),
                          (0, z.BX)(S.View, {
                            className: "bottom-buttons",
                            children: [
                              (0, z.tZ)(S.View, {
                                className: "button left",
                                id: "ANAK",
                                onClick: function () {
                                  u ? v(p) : r(!0);
                                },
                                children: h,
                              }),
                              (0, z.tZ)(S.View, {
                                className: "button right",
                                id: "ANAL",
                                onClick: function () {
                                  u
                                    ? (function () {
                                        if (p) {
                                          var e = p.orderNumber,
                                            t = p.duplicateOrderType,
                                            i = { orderNumber: e + "" };
                                          if ("smartTrip" === t)
                                            (0, b.ok)(i)
                                              .then(function (e) {
                                                N(e);
                                              })
                                              .catch(function () {
                                                (0,
                                                T.showToast)("取消失败，请重试~");
                                              });
                                          else if ("train" === t)
                                            (0, b.Vt)(i)
                                              .then(function (t) {
                                                N(t, e);
                                              })
                                              .catch(function () {
                                                (0,
                                                T.showToast)("取消失败，请重试~");
                                              });
                                          else if ("flight" === t) {
                                            var a = {
                                              data: { orderNumber: e },
                                            };
                                            (0, b.cA)(a)
                                              .then(function (e) {
                                                N(e);
                                              })
                                              .catch(function () {
                                                (0,
                                                T.showToast)("取消失败，请重试~");
                                              });
                                          }
                                        }
                                      })()
                                    : v(p);
                                },
                                children: f,
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  })
                : (0, z.tZ)(S.View, {});
            },
            ce = m.default.memo(function (e) {
              var t = e.train,
                i = e.isShowDepartArrivalTip,
                a = void 0 !== i && i,
                r = e.departDate;
              if (!t) return (0, z.tZ)(S.View, {});
              var n = R.Z.formatDate(r, "M月D日"),
                o = R.Z.getWeekDayDesc(r),
                s = R.Z.getSpecialDay(r, t.TakeDays),
                l = R.Z.formatDate(s, "M月D日"),
                c = R.Z.getWeekDayDesc(s);
              return (0, z.tZ)(S.View, {
                className: "train-info-view ",
                children: (0, z.BX)(S.View, {
                  className: "modify ".concat(Z.default.isTieyou ? "ty" : "zx"),
                  children: [
                    (0, z.BX)(S.View, {
                      className: "item from",
                      children: [
                        (0, z.tZ)(S.View, {
                          className: "date",
                          children: n + " " + o,
                        }),
                        (0, z.tZ)(S.View, {
                          className: "strong",
                          children: t.DepartTime,
                        }),
                        (0, z.tZ)(S.View, {
                          className: "station",
                          children: t.DepartStation,
                        }),
                        a &&
                          (0, z.tZ)(S.View, {
                            className: "tu-tips",
                            children: "请确认您的出发到达站",
                          }),
                      ],
                    }),
                    (0, z.BX)(S.View, {
                      className: "item mid",
                      children: [
                        (0, z.tZ)(S.View, {
                          className: "jt-info",
                          id: "AACP",
                          onClick: function () {
                            I.ZP.goTimeTable(
                              t.DepartStation,
                              t.ArriveStation,
                              t.TrainNumber,
                              r
                            );
                          },
                          "data-ubt-key": "wx_booking_goTT",
                          children: "经停信息",
                        }),
                        (0, z.tZ)(S.View, {
                          className: "text",
                          children: t.TrainNumber,
                        }),
                      ],
                    }),
                    (0, z.BX)(S.View, {
                      className: "item to",
                      children: [
                        (0, z.tZ)(S.View, {
                          className: "date",
                          children: l + " " + c,
                        }),
                        (0, z.BX)(S.View, {
                          className: "strong",
                          children: [
                            t.ArriveTime,
                            !!t.TakeDays &&
                              (0, z.tZ)(S.Text, {
                                className: "em",
                                children:
                                  t.TakeDays > 0 ? "+" + t.TakeDays : "",
                              }),
                          ],
                        }),
                        (0, z.tZ)(S.View, {
                          className: "station",
                          children: t.ArriveStation,
                        }),
                      ],
                    }),
                  ],
                }),
              });
            }),
            de = m.default.memo(function (e) {
              var t = e.tripDetail,
                i = (void 0 === t ? {} : t).details,
                a = void 0 === i ? [] : i;
              if (0 == a.length) return (0, z.tZ)(S.View, {});
              var r = (0, W.MW)(a[0]),
                n = (0, W.MW)(a[1]),
                o = r.startDate,
                s = {};
              return (
                (s.TakeDays = r.dayDiff + n.dayDiff),
                (s.DepartTime = r.startTime),
                (s.DepartStation = r.fromStation),
                (s.ArriveTime = n.arriveTime),
                (s.ArriveStation = n.toStation),
                (s.TrainNumber = r.trainNo),
                (0, z.tZ)(S.View, {
                  className: "smart-train-info-banner",
                  children: (0, z.tZ)(ce, { train: s, departDate: o }),
                })
              );
            }),
            ue = function (e) {
              var t = e.firstRoute,
                i = e.secondRoute,
                a = e.originToStation,
                r = e.isCrossCombine,
                n = e.isRepairCombine,
                o = !t.isRob && i.isRob,
                s = t.isRob && !i.isRob,
                l = t.isRob && i.isRob;
              return !t.isRob && !i.isRob
                ? (0, z.BX)(S.View, {
                    children: [
                      r &&
                        (0, z.BX)(S.View, {
                          className: "transfer-desc",
                          children: [
                            (0, z.tZ)(S.Text, {
                              className: "bold",
                              children: "跨站多买：",
                            }),
                            (null == t ? void 0 : t.fromStationDiff) > 0 &&
                              (null == i ? void 0 : i.toStationDiff) <= 0 &&
                              (0, z.BX)(S.Text, {
                                children: [
                                  "第一程实际出票",
                                  (0, z.BX)(S.Text, {
                                    className: "bold",
                                    children: [
                                      null == t ? void 0 : t.fromStation,
                                      "-",
                                      null == t ? void 0 : t.toStation,
                                      "，",
                                    ],
                                  }),
                                  "往前多买",
                                  null == t ? void 0 : t.fromStationDiff,
                                  "站",
                                ],
                              }),
                            (null == t ? void 0 : t.fromStationDiff) <= 0 &&
                              (null == i ? void 0 : i.toStationDiff) > 0 &&
                              (0, z.BX)(S.Text, {
                                children: [
                                  "第二程实际出票",
                                  (0, z.BX)(S.Text, {
                                    className: "bold",
                                    children: [
                                      null == i ? void 0 : i.fromStation,
                                      "-",
                                      null == i ? void 0 : i.toStation,
                                      "，",
                                    ],
                                  }),
                                  "往后多买",
                                  null == i ? void 0 : i.toStationDiff,
                                  "站",
                                ],
                              }),
                            (null == t ? void 0 : t.fromStationDiff) > 0 &&
                              (null == i ? void 0 : i.toStationDiff) > 0 &&
                              (0, z.BX)(S.Text, {
                                children: [
                                  "实际出票",
                                  (0, z.BX)(S.Text, {
                                    className: "bold",
                                    children: [
                                      null == t ? void 0 : t.fromStation,
                                      "-",
                                      null == i ? void 0 : i.toStation,
                                      "，",
                                    ],
                                  }),
                                  "第一程往前多买",
                                  null == t ? void 0 : t.fromStationDiff,
                                  "站，第二程往后多买",
                                  null == i ? void 0 : i.toStationDiff,
                                  "站",
                                ],
                              }),
                          ],
                        }),
                      n &&
                        (null == i ? void 0 : i.toStationDiff) < 0 &&
                        (null == t ? void 0 : t.fromStationDiff) > 0 &&
                        (0, z.BX)(S.View, {
                          className: "transfer-desc",
                          children: [
                            (0, z.tZ)(S.Text, {
                              className: "bold",
                              children: "跨站少买：",
                            }),
                            (0, z.BX)(S.Text, {
                              children: [
                                "第一程往前多买",
                                null == t ? void 0 : t.fromStationDiff,
                                "站，第二程实际出票",
                                (0, z.BX)(S.Text, {
                                  className: "bold",
                                  children: [
                                    null == t ? void 0 : t.fromStation,
                                    "-",
                                    null == i ? void 0 : i.toStation,
                                  ],
                                }),
                                "找乘务员补票到",
                                a,
                              ],
                            }),
                          ],
                        }),
                    ],
                  })
                : o
                ? (0, z.tZ)(he, {
                    firstTrip: t,
                    secondTrip: i,
                    isCrossCombine: r,
                  })
                : s || l
                ? (0, z.tZ)(fe, {
                    firstTrip: t,
                    secondTrip: i,
                    isCrossCombine: r,
                    isGrabGrab: l,
                  })
                : (0, z.tZ)(S.View, {});
            },
            he = function (e) {
              var t = e.firstTrip,
                i = e.secondTrip;
              return e.isCrossCombine
                ? (null == t ? void 0 : t.fromStationDiff) > 0 &&
                  (null == i ? void 0 : i.toStationDiff) <= 0
                  ? (0, z.BX)(S.View, {
                      className: "transfer-desc",
                      children: [
                        (0, z.tZ)(S.Text, {
                          className: "bold",
                          children: "跨站多买：",
                        }),
                        (0, z.BX)(S.Text, {
                          children: [
                            "第一程实际出票",
                            (0, z.BX)(S.Text, {
                              className: "bold",
                              children: [
                                null == t ? void 0 : t.fromStation,
                                "-",
                                null == t ? void 0 : t.toStation,
                                "，",
                              ],
                            }),
                            "往前多买",
                            null == t ? void 0 : t.fromStationDiff,
                            "站",
                          ],
                        }),
                      ],
                    })
                  : (null == t ? void 0 : t.fromStationDiff) <= 0 &&
                    (null == i ? void 0 : i.toStationDiff) > 0
                  ? (0, z.BX)(S.View, {
                      className: "transfer-desc",
                      children: [
                        (0, z.tZ)(S.Text, {
                          className: "bold",
                          children: "跨站多抢：",
                        }),
                        (0, z.BX)(S.Text, {
                          children: [
                            "第二程实际抢票",
                            (0, z.BX)(S.Text, {
                              className: "bold",
                              children: [
                                null == i ? void 0 : i.fromStation,
                                "-",
                                null == i ? void 0 : i.toStation,
                                "，",
                              ],
                            }),
                            "往后多抢",
                            null == i ? void 0 : i.toStationDiff,
                            "站",
                          ],
                        }),
                      ],
                    })
                  : (null == t ? void 0 : t.fromStationDiff) > 0 &&
                    (null == i ? void 0 : i.toStationDiff) > 0
                  ? (0, z.BX)(S.View, {
                      className: "transfer-desc",
                      children: [
                        (0, z.tZ)(S.Text, {
                          className: "bold",
                          children: "跨站多买抢：",
                        }),
                        (0, z.BX)(S.Text, {
                          children: [
                            "实际出票",
                            (0, z.BX)(S.Text, {
                              className: "bold",
                              children: [
                                null == t ? void 0 : t.fromStation,
                                "-",
                                null == i ? void 0 : i.toStation,
                                "，",
                              ],
                            }),
                            "第一程往前多买",
                            null == t ? void 0 : t.fromStationDiff,
                            "站，第二程往后多抢",
                            null == i ? void 0 : i.toStationDiff,
                            "站",
                          ],
                        }),
                      ],
                    })
                  : (0, z.tZ)(S.View, {})
                : (0, z.BX)(S.View, {
                    className: "transfer-desc",
                    children: [
                      (0, z.tZ)(S.Text, {
                        className: "bold",
                        children: "跨站多买：",
                      }),
                      (0, z.BX)(S.Text, {
                        children: [
                          "第一程实际出票",
                          (0, z.BX)(S.Text, {
                            className: "bold",
                            children: [
                              null == t ? void 0 : t.fromStation,
                              "-",
                              null == t ? void 0 : t.toStation,
                              "，",
                            ],
                          }),
                          "往前多买",
                          null == t ? void 0 : t.fromStationDiff,
                          "站， 第二程实际抢票",
                          (0, z.BX)(S.Text, {
                            className: "bold",
                            children: [
                              null == i ? void 0 : i.fromStation,
                              "-",
                              null == i ? void 0 : i.toStation,
                              "，",
                            ],
                          }),
                          "少抢",
                          Math.abs(null == i ? void 0 : i.toStationDiff),
                          "站",
                        ],
                      }),
                    ],
                  });
            },
            fe = function (e) {
              var t = e.firstTrip,
                i = e.secondTrip,
                a = e.isCrossCombine,
                r = e.isGrabGrab;
              return a
                ? (null == t ? void 0 : t.fromStationDiff) > 0 &&
                  (null == i ? void 0 : i.toStationDiff) <= 0
                  ? (0, z.BX)(S.View, {
                      className: "transfer-desc",
                      children: [
                        (0, z.tZ)(S.Text, {
                          className: "bold",
                          children: "跨站多抢：",
                        }),
                        (0, z.BX)(S.Text, {
                          children: [
                            "第一程实际抢票",
                            (0, z.BX)(S.Text, {
                              className: "bold",
                              children: [
                                null == t ? void 0 : t.fromStation,
                                "-",
                                null == t ? void 0 : t.toStation,
                                "，",
                              ],
                            }),
                            "往前多抢",
                            null == t ? void 0 : t.fromStationDiff,
                            "站",
                          ],
                        }),
                      ],
                    })
                  : (null == t ? void 0 : t.fromStationDiff) <= 0 &&
                    (null == i ? void 0 : i.toStationDiff) > 0
                  ? r
                    ? (0, z.BX)(S.View, {
                        className: "transfer-desc",
                        children: [
                          (0, z.tZ)(S.Text, {
                            className: "bold",
                            children: "跨站多抢：",
                          }),
                          (0, z.BX)(S.Text, {
                            children: [
                              "第二程实际抢票",
                              (0, z.BX)(S.Text, {
                                className: "bold",
                                children: [
                                  null == i ? void 0 : i.fromStation,
                                  "-",
                                  null == i ? void 0 : i.toStation,
                                  "，",
                                ],
                              }),
                              "往后多抢",
                              null == i ? void 0 : i.toStationDiff,
                              "站",
                            ],
                          }),
                        ],
                      })
                    : (0, z.BX)(S.View, {
                        className: "transfer-desc",
                        children: [
                          (0, z.tZ)(S.Text, {
                            className: "bold",
                            children: "跨站多买：",
                          }),
                          (0, z.BX)(S.Text, {
                            children: [
                              "第二程实际出票",
                              (0, z.BX)(S.Text, {
                                className: "bold",
                                children: [
                                  null == i ? void 0 : i.fromStation,
                                  "-",
                                  null == i ? void 0 : i.toStation,
                                  "，",
                                ],
                              }),
                              "往后多买",
                              null == i ? void 0 : i.toStationDiff,
                              "站",
                            ],
                          }),
                        ],
                      })
                  : (null == t ? void 0 : t.fromStationDiff) > 0 &&
                    (null == i ? void 0 : i.toStationDiff) > 0
                  ? r
                    ? (0, z.BX)(S.View, {
                        className: "transfer-desc",
                        children: [
                          (0, z.tZ)(S.Text, {
                            className: "bold",
                            children: "两程多抢：",
                          }),
                          (0, z.BX)(S.Text, {
                            children: [
                              "实际抢票",
                              (0, z.BX)(S.Text, {
                                className: "bold",
                                children: [
                                  null == t ? void 0 : t.fromStation,
                                  "-",
                                  null == i ? void 0 : i.toStation,
                                  "，",
                                ],
                              }),
                              "第一程往前多抢",
                              null == t ? void 0 : t.fromStationDiff,
                              "站，第二程往后多抢",
                              null == i ? void 0 : i.toStationDiff,
                              "站",
                            ],
                          }),
                        ],
                      })
                    : (0, z.BX)(S.View, {
                        className: "transfer-desc",
                        children: [
                          (0, z.tZ)(S.Text, {
                            className: "bold",
                            children: "跨站多买抢：",
                          }),
                          (0, z.BX)(S.Text, {
                            children: [
                              "实际出票",
                              (0, z.BX)(S.Text, {
                                className: "bold",
                                children: [
                                  null == t ? void 0 : t.fromStation,
                                  "-",
                                  null == i ? void 0 : i.toStation,
                                  "，",
                                ],
                              }),
                              "第一程往前多抢",
                              null == t ? void 0 : t.fromStationDiff,
                              "站，第二程往后多买",
                              null == i ? void 0 : i.toStationDiff,
                              "站",
                            ],
                          }),
                        ],
                      })
                  : (0, z.tZ)(S.View, {})
                : r
                ? (0, z.BX)(S.View, {
                    className: "transfer-desc",
                    children: [
                      (0, z.tZ)(S.Text, {
                        className: "bold",
                        children: "跨站多抢：",
                      }),
                      (0, z.BX)(S.Text, {
                        children: [
                          "第一程实际抢票",
                          (0, z.BX)(S.Text, {
                            className: "bold",
                            children: [
                              null == t ? void 0 : t.fromStation,
                              "-",
                              null == t ? void 0 : t.toStation,
                              "，",
                            ],
                          }),
                          "往前多抢",
                          null == t ? void 0 : t.fromStationDiff,
                          "站， 第二程实际抢票",
                          (0, z.BX)(S.Text, {
                            className: "bold",
                            children: [
                              null == i ? void 0 : i.fromStation,
                              "-",
                              null == i ? void 0 : i.toStation,
                              "，",
                            ],
                          }),
                          "少抢",
                          Math.abs(null == i ? void 0 : i.toStationDiff),
                          "站",
                        ],
                      }),
                    ],
                  })
                : (0, z.BX)(S.View, {
                    className: "transfer-desc",
                    children: [
                      (0, z.tZ)(S.Text, {
                        className: "bold",
                        children: "跨站多抢：",
                      }),
                      (0, z.BX)(S.Text, {
                        children: [
                          "第一程实际抢票",
                          (0, z.BX)(S.Text, {
                            className: "bold",
                            children: [
                              null == t ? void 0 : t.fromStation,
                              "-",
                              null == t ? void 0 : t.toStation,
                              "，",
                            ],
                          }),
                          "往前多抢",
                          null == t ? void 0 : t.fromStationDiff,
                          "站， 第二程实际出票",
                          (0, z.BX)(S.Text, {
                            className: "bold",
                            children: [
                              null == i ? void 0 : i.fromStation,
                              "-",
                              null == i ? void 0 : i.toStation,
                              "，",
                            ],
                          }),
                          "需补票",
                          Math.abs(null == i ? void 0 : i.toStationDiff),
                          "站",
                        ],
                      }),
                    ],
                  });
            },
            pe = m.default.memo(function (e) {
              var t,
                i,
                a = e.tripDetail,
                r = void 0 === a ? {} : a,
                n = r.details,
                o = void 0 === n ? [] : n,
                s = r.subTrainTripType,
                l = r.originFromStation,
                c = r.originToStation;
              if (0 === o.length) return (0, z.tZ)(S.View, {});
              var d = (0, W.MW)(o[0]);
              d.isRob = d.selectSeat.ticketLeft <= 0;
              var u = (0, W.MW)(o[1]);
              u.isRob = u.selectSeat.ticketLeft <= 0;
              var h = d.isRob || u.isRob,
                f = d.isRob && u.isRob,
                p = "_1_0" === s,
                v = "_1_1_" === s;
              return (0, z.BX)(S.View, {
                className: "transfer-route-module",
                children: [
                  (0, z.BX)(S.View, {
                    className: "transfer-route-banner",
                    children: [
                      (0, z.BX)(S.View, {
                        className: "first-route transfer-route ".concat(
                          d.isRob ? "rob" : ""
                        ),
                        children: [
                          (0, z.BX)(S.View, {
                            className: "route-sequence",
                            children: [
                              (0, z.tZ)(S.View, {
                                className: "operation bd-1px",
                                children: "上车",
                              }),
                              (0, z.tZ)(S.View, { className: "line" }),
                              (0, z.tZ)(S.View, {
                                className: "ticket-operation bd-1px",
                                children: h
                                  ? d.isRob
                                    ? "抢票"
                                    : "买票"
                                  : "".concat(
                                      (null == d ||
                                      null === (t = d.selectSeat) ||
                                      void 0 === t
                                        ? void 0
                                        : t.seatName) ||
                                        (null == d ? void 0 : d.seatName)
                                    ),
                              }),
                              (0, z.tZ)(S.View, { className: "line" }),
                            ],
                          }),
                          (0, z.tZ)(S.View, {
                            className: "station",
                            children: l || d.fromStation,
                          }),
                        ],
                      }),
                      (0, z.BX)(S.View, {
                        className: "transfer-point",
                        children: [
                          (0, z.tZ)(S.View, {
                            className: "route-sequence",
                            children: (0, z.tZ)(S.View, {
                              className: "operation bd-1px",
                              children: "同车换座",
                            }),
                          }),
                          (0, z.tZ)(S.View, {
                            className: "station",
                            children: d.toStation,
                          }),
                        ],
                      }),
                      (0, z.BX)(S.View, {
                        className: "second-route transfer-route ".concat(
                          u.isRob ? "rob" : ""
                        ),
                        children: [
                          (0, z.BX)(S.View, {
                            className: "route-sequence",
                            children: [
                              (0, z.tZ)(S.View, { className: "line" }),
                              (0, z.tZ)(S.View, {
                                className: "ticket-operation bd-1px",
                                children: h
                                  ? u.isRob
                                    ? "抢票"
                                    : "买票"
                                  : "".concat(
                                      (null == u ||
                                      null === (i = u.selectSeat) ||
                                      void 0 === i
                                        ? void 0
                                        : i.seatName) ||
                                        (null == u ? void 0 : u.seatName)
                                    ),
                              }),
                              (0, z.tZ)(S.View, { className: "line" }),
                              (0, z.tZ)(S.View, {
                                className: "operation bd-1px",
                                children: "下车",
                              }),
                            ],
                          }),
                          (0, z.tZ)(S.View, {
                            className: "station",
                            children: c || u.toStation,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, z.BX)(S.View, {
                    className: "transfer-intro",
                    children: [
                      (0, z.BX)(S.View, {
                        className: "transfer-desc",
                        children: [
                          (0, z.tZ)(S.Text, {
                            className: "bold",
                            children: h
                              ? f
                                ? "全抢票成功："
                                : "抢票成功："
                              : "同车换座：",
                          }),
                          "仅需",
                          (0, z.tZ)(S.Text, {
                            className: "bold",
                            children: d.arriveTime,
                          }),
                          "在",
                          (0, z.tZ)(S.Text, {
                            className: "bold",
                            children: d.toStation,
                          }),
                          "换个座位。",
                        ],
                      }),
                      !d.isRob &&
                        u.isRob &&
                        (0, z.BX)(m.Fragment, {
                          children: [
                            (0, z.BX)(S.View, {
                              className: "transfer-desc",
                              children: [
                                (0, z.tZ)(S.Text, {
                                  className: "bold",
                                  children: "抢票失败：",
                                }),
                                "可以在上车后找乘务员",
                                (0, z.tZ)(S.Text, {
                                  className: "bold",
                                  children: "补票",
                                }),
                                "到终点站。抢票款项会退还至原支付账户。",
                              ],
                            }),
                            (0, z.BX)(S.View, {
                              className: "transfer-desc",
                              children: [
                                (0, z.tZ)(S.Text, {
                                  className: "bold",
                                  children: "风险提示：",
                                }),
                                "第二程若抢不到票，请主动找列车员补票，",
                                (0, z.tZ)(S.Text, {
                                  className: "risk-tips",
                                  children:
                                    "利用“买短乘长”故意逃票属于违法行为，情节严重者应承担法律责任。",
                                }),
                                (0, z.tZ)(S.Text, {
                                  className: "see-more",
                                  id: "smartBookingTips",
                                  onClick: function () {
                                    C.Z.commonNavigator(
                                      "https://market.suanya.com/weblc/train/scbfx.html?version=529957"
                                    );
                                  },
                                  children: "查看更多",
                                }),
                              ],
                            }),
                          ],
                        }),
                      (v || p) &&
                        (0, z.tZ)(ue, {
                          subTrainTripType: s,
                          firstRoute: d,
                          secondRoute: u,
                          originToStation: c,
                          isCrossCombine: v,
                          isRepairCombine: p,
                        }),
                    ],
                  }),
                ],
              });
            }),
            me = i(34229),
            ve = i(17368),
            ge = m.default.memo(function (e) {
              var t = e.tripIndex,
                i = void 0 === t ? 0 : t,
                a = e.carriageInfo,
                o = void 0 === a ? null : a,
                s = e.canSelectLen,
                l = void 0 === s ? 3 : s,
                c = e.source,
                d = void 0 === c ? "" : c,
                u = e.onSelectChange,
                h = void 0 === u ? function () {} : u,
                f = e.ubtTrace,
                p = void 0 === f ? function () {} : f,
                v = (0, m.useState)(""),
                g = (0, r.Z)(v, 2),
                N = g[0],
                T = g[1],
                b = function (e) {
                  var t = [];
                  return (
                    (null == e ? void 0 : e.length) > 0 &&
                      (t = e.map(function (e) {
                        return e.startsWith("0")
                          ? parseInt(e.substring(e.length - 1))
                          : parseInt(e);
                      })),
                    t
                  );
                };
              if (
                ((0, m.useEffect)(function () {
                  var e;
                  if (
                    (null == o ||
                    null === (e = o.carriageDataList) ||
                    void 0 === e
                      ? void 0
                      : e.length) > 0
                  ) {
                    var t = [];
                    if (
                      (o.carriageDataList.forEach(function (e) {
                        1 === e.carriageAvailable &&
                          0 === e.carriageFlag &&
                          t.push(e.carriageNo);
                      }),
                      (null == t ? void 0 : t.length) > 0)
                    ) {
                      var i = b(t),
                        a = b(o.selectedCarriages);
                      null == p ||
                        p("229489", d, { ExpoList: i, SelectList: a });
                    }
                  }
                }, []),
                (0, m.useEffect)(
                  function () {
                    o &&
                      (function (e) {
                        if (Array.isArray(e) && e.length > 0) {
                          for (var t = 0, a = 0; a < e.length; a++)
                            if (
                              1 === e[a].carriageAvailable &&
                              0 === e[a].carriageFlag
                            ) {
                              t = a;
                              break;
                            }
                          var r = "trip-"
                            .concat(i, "-carriage-item-")
                            .concat(t);
                          T(r);
                        }
                      })(null == o ? void 0 : o.carriageDataList);
                  },
                  [o]
                ),
                !o)
              )
                return (0, z.tZ)(S.View, {});
              var w = function (e) {
                var t,
                  i = e.carriageNo,
                  a = e.carriageAvailable,
                  r = e.carriageFlag;
                if (1 === a && 1 != r) {
                  var s = o.selectedCarriages || [],
                    c = [],
                    u = s.includes(i);
                  if (
                    (u
                      ? (c = s.filter(function (e) {
                          return e !== i;
                        }))
                      : (c = (0, n.Z)(s)).push(i),
                    !(
                      (null === (t = c) || void 0 === t ? void 0 : t.length) > l
                    ))
                  ) {
                    var f = [];
                    o.carriageDataList.forEach(function (e) {
                      1 === e.carriageAvailable &&
                        0 === e.carriageFlag &&
                        f.push(e.carriageNo);
                    });
                    var m = {
                      ExpoList: b(f),
                      SelectList: b(c),
                      Type: i.startsWith("0")
                        ? parseInt(i.substring(i.length - 1))
                        : parseInt(i),
                      clickType: u ? "0" : "1",
                    };
                    p("229490", d, m), h(c);
                  }
                }
              };
              return (0, z.BX)(S.View, {
                className: "comm-carriage-selector",
                children: [
                  (0, z.BX)(S.View, {
                    className: "h-box flex-align-items-center",
                    children: [
                      (0, z.tZ)(S.Text, {
                        className: "name",
                        children: null == o ? void 0 : o.productName,
                      }),
                      (0, z.tZ)(S.Text, {
                        className: "price-desc",
                        children: null == o ? void 0 : o.priceDesc,
                      }),
                    ],
                  }),
                  (0, z.tZ)(S.View, {
                    className: "content",
                    children: (0, z.tZ)(m.Fragment, {
                      children: (0, z.tZ)(S.ScrollView, {
                        className: "carriage-list",
                        scrollX: !0,
                        scrollIntoView: N,
                        scrollWithAnimation: !0,
                        children:
                          null == o
                            ? void 0
                            : o.carriageDataList.map(function (e, t) {
                                var a,
                                  r,
                                  n = e.carriageNo,
                                  s = e.carriageAvailable,
                                  c = e.carriageFlag;
                                return (0, z.tZ)(
                                  S.View,
                                  {
                                    className: "carriage "
                                      .concat(
                                        1 != s ||
                                          (null === (a = o.selectedCarriages) ||
                                          void 0 === a
                                            ? void 0
                                            : a.length) >= l
                                          ? "disabled"
                                          : "",
                                        " "
                                      )
                                      .concat(1 == c ? "eat" : "", " ")
                                      .concat(
                                        null !== (r = o.selectedCarriages) &&
                                          void 0 !== r &&
                                          r.includes(n)
                                          ? "active"
                                          : ""
                                      ),
                                    id: "trip-"
                                      .concat(i, "-carriage-item-")
                                      .concat(t),
                                    onClick: function () {
                                      return w({
                                        carriageNo: n,
                                        carriageAvailable: s,
                                        carriageFlag: c,
                                      });
                                    },
                                    children: 1 == c ? "餐车" : n,
                                  },
                                  t
                                );
                              }),
                      }),
                    }),
                  }),
                ],
              });
            }),
            Ne = function (e) {
              return (
                e && (-1 !== e.indexOf("一等") || -1 !== e.indexOf("二等"))
              );
            },
            Te = function (e) {
              return e && -1 !== e.indexOf("二等");
            },
            Se = function (e) {
              var t = e.selectedSeatsRow,
                i = e.rowIndex,
                a = e.currentSeatName;
              return (0, z.BX)(S.View, {
                className: "train-seat-bd",
                children: [
                  (0, z.tZ)(S.Image, {
                    src: "https://images3.c-ctrip.com/ztrip/train.xin/2021_10/seat_window@3x.png",
                    className: "seat-window left",
                  }),
                  (0, z.tZ)(S.View, {
                    className: "seat ".concat(
                      t.A ? (Z.default.isTieyou ? "cur-ty" : "cur-zx") : ""
                    ),
                    "data-p": "A",
                    "data-row": i,
                    children: (0, z.tZ)(S.Text, {
                      "data-p": "A",
                      "data-row": i,
                      children: "A",
                    }),
                  }),
                  Te(a) &&
                    (0, z.tZ)(S.View, {
                      className: "seat ".concat(
                        t.B ? (Z.default.isTieyou ? "cur-ty" : "cur-zx") : ""
                      ),
                      "data-p": "B",
                      "data-row": i,
                      children: (0, z.tZ)(S.Text, {
                        "data-p": "B",
                        "data-row": i,
                        children: "B",
                      }),
                    }),
                  (0, z.tZ)(S.View, {
                    className: "seat ".concat(
                      t.C ? (Z.default.isTieyou ? "cur-ty" : "cur-zx") : ""
                    ),
                    "data-p": "C",
                    "data-row": i,
                    children: (0, z.tZ)(S.Text, {
                      "data-p": "C",
                      "data-row": i,
                      children: "C",
                    }),
                  }),
                  (0, z.tZ)(S.Image, {
                    src: "https://images3.c-ctrip.com/ztrip/train.xin/2021_10/seat_aisle@3x.png",
                    className: "seat-aisle",
                  }),
                  Ne(a) &&
                    (0, z.tZ)(S.View, {
                      className: "seat ".concat(
                        t.D ? (Z.default.isTieyou ? "cur-ty" : "cur-zx") : ""
                      ),
                      "data-p": "D",
                      "data-row": i,
                      children: (0, z.tZ)(S.Text, {
                        "data-p": "D",
                        "data-row": i,
                        children: "D",
                      }),
                    }),
                  (0, z.tZ)(S.View, {
                    className: "seat ".concat(
                      t.F ? (Z.default.isTieyou ? "cur-ty" : "cur-zx") : ""
                    ),
                    "data-p": "F",
                    "data-row": i,
                    children: (0, z.tZ)(S.Text, {
                      "data-p": "F",
                      "data-row": i,
                      children: "F",
                    }),
                  }),
                  (0, z.tZ)(S.Image, {
                    src: "https://images3.c-ctrip.com/ztrip/train.xin/2021_10/seat_window@3x.png",
                    className: "seat-window right",
                  }),
                ],
              });
            },
            be = (function (e) {
              (0, h.Z)(i, e);
              var t = (0, f.Z)(i);
              function i(e) {
                var a;
                return (
                  (0, c.Z)(this, i),
                  ((a = t.call(this, e)).state = {
                    selectedSeatsRow: [
                      { A: !1, B: !1, C: !1, D: !1, F: !1 },
                      { A: !1, B: !1, C: !1, D: !1, F: !1 },
                    ],
                    selectedSeatsArray: [],
                  }),
                  a
                );
              }
              return (
                (0, d.Z)(i, [
                  {
                    key: "UNSAFE_componentWillReceiveProps",
                    value: function (e) {
                      e.pasNum != this.props.pasNum && this.seatChooseReset();
                    },
                  },
                  {
                    key: "seatChooseToggle",
                    value: function (e) {
                      var t = e.target.dataset || e.target.targetDataset;
                      if (0 !== Object.keys(t).length) {
                        var i = e.target.dataset.p || e.target.targetDataset.p,
                          a =
                            e.target.dataset.row || e.target.targetDataset.row;
                        if (i && a) {
                          var r = this.state,
                            n = r.selectedSeatsArray,
                            o = r.selectedSeatsRow,
                            s = this.props.pasNum,
                            l = "".concat(parseInt(a) + 1).concat(i),
                            c = !o[a][i];
                          if (((o[a][i] = c), c)) {
                            if (
                              (function (e) {
                                var t = 0;
                                return (
                                  e.forEach(function (e) {
                                    Object.keys(e).forEach(function (i) {
                                      e[i] && t++;
                                    });
                                  }),
                                  t
                                );
                              })(o) >= s &&
                              n.length >= s
                            ) {
                              var d = n.splice(0, 1)[0],
                                u = d[0] - 1,
                                h = d[1];
                              o[u][h] = !1;
                            }
                            n.push(l);
                          } else {
                            var f = n.indexOf(l);
                            f > -1 && n.splice(f, 1);
                          }
                          this.setState({
                            selectedSeatsRow: o,
                            selectedSeatsArray: n,
                          });
                          var p = this.props,
                            m = p.tripIndex;
                          (0, p.updateSelectedSeats)({
                            tripIndex: m,
                            selectedSeats: n.join(","),
                          });
                        }
                      }
                    },
                  },
                  {
                    key: "seatChooseReset",
                    value: function () {
                      var e = this.state.selectedSeatsRow;
                      e.forEach(function (e) {
                        Object.keys(e).forEach(function (t) {
                          e[t] = !1;
                        });
                      }),
                        this.setState({
                          selectedSeatsRow: e,
                          selectedSeatsArray: [],
                        });
                      var t = this.props,
                        i = t.tripIndex;
                      (0, t.updateSelectedSeats)({
                        tripIndex: i,
                        selectedSeats: "",
                      });
                    },
                  },
                  {
                    key: "onCarriageChange",
                    value: function (e) {
                      var t = this.props,
                        i = t.assignCarriageInfo,
                        a = t.tripDetail,
                        r = t.upDateTripDetail,
                        n = t.selectedPasList,
                        o = (0, W.zH)(n, M.Yv);
                      o
                        ? (0, T.showToast)(o)
                        : ((i.selectedCarriages = e), r(a));
                    },
                  },
                  {
                    key: "handleUbtTrace",
                    value: function (e, t, i) {
                      var a = this.props,
                        r = a.assignCarriageInfo,
                        n = a.doUbtTraceWithAppoint,
                        o = (0, l.Z)(
                          (0, l.Z)({}, i),
                          {},
                          { ActivityType: r ? "1" : "0" }
                        );
                      null == n || n(e, t, o);
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var e = this,
                        t = this.props,
                        i = t.isTransfer,
                        a = t.pasNum,
                        r = t.orderDesc,
                        n = t.currentSeatName,
                        o = t.assignCarriageInfo,
                        s = this.state,
                        l = s.selectedSeatsArray,
                        c = s.selectedSeatsRow,
                        d = l.length,
                        u = a > 1;
                      return (0, z.BX)(S.View, {
                        className: "train-seat",
                        children: [
                          (0, z.BX)(S.View, {
                            id: "ANAT",
                            onClick: function (t) {
                              return e.seatChooseToggle(t);
                            },
                            children: [
                              (0, z.BX)(S.View, {
                                className: "train-seat-hd ".concat(
                                  i ? "transfer" : ""
                                ),
                                children: [
                                  i ? "".concat(r, " ").concat(n) : "选择座位",
                                  (0, z.BX)(S.View, {
                                    className: "fr",
                                    children: [
                                      "已选 ",
                                      (0, z.tZ)(S.Text, {
                                        className: "tblue",
                                        children: d,
                                      }),
                                      (0, z.tZ)(S.Text, {
                                        className: "tgrey",
                                        children: "/" + a + "个",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, z.BX)(S.Block, {
                                children: [
                                  (0, z.tZ)(Se, {
                                    selectedSeatsRow: c[0],
                                    rowIndex: "0",
                                    currentSeatName: n,
                                  }),
                                  u &&
                                    (0, z.tZ)(Se, {
                                      selectedSeatsRow: c[1],
                                      rowIndex: "1",
                                      currentSeatName: n,
                                    }),
                                ],
                              }),
                            ],
                          }),
                          d > 0 &&
                            (0, z.tZ)(S.View, {
                              className: i ? "transfer-seat-tips" : "seat-tips",
                              children:
                                "优先按指定座席出票，若指定座席无票，将转购其他座席",
                            }),
                          !!o &&
                            (0, z.tZ)(ge, {
                              carriageInfo: o,
                              source: "GDCSeat",
                              onSelectChange: this.onCarriageChange.bind(this),
                              ubtTrace: function (t, i, a) {
                                return e.handleUbtTrace(t, i, a);
                              },
                            }),
                        ],
                      });
                    },
                  },
                ]),
                i
              );
            })(m.default.Component),
            we = function (e) {
              var t = e.key,
                i = e.seat,
                a = e.ishHorizontal,
                r = e.totalCount,
                n = e.hasDiscount,
                o = e.useVipBerth,
                s = e.selectedIndex,
                l = e.onAddClick,
                c = e.onMinusClick,
                d = e.selectedPasList,
                u = e.isFreeFor12306,
                h = i.amount > 0,
                f = n && o ? "line-through" : "";
              return (0, z.BX)(
                S.View,
                {
                  className: "flex-1 berth-item "
                    .concat(a ? "horizontal" : "vertical", " ")
                    .concat(h ? "selected" : "", " ")
                    .concat(Z.default.isTieyou ? "ty" : "zx"),
                  children: [
                    (0, z.BX)(S.View, {
                      className: ""
                        .concat(
                          a ? "" : "seat-hd-wrap flex-align-items-center",
                          " "
                        )
                        .concat(null != i && i.priceDesc ? "" : "h-center"),
                      children: [
                        (0, z.tZ)(S.View, {
                          className: "seat-name ".concat(h ? "select" : ""),
                          children: null == i ? void 0 : i.seatName,
                        }),
                        (null == i ? void 0 : i.priceDesc) &&
                          (0, z.tZ)(S.View, {
                            className: "seat-price "
                              .concat(h ? "select" : "", " ")
                              .concat(f),
                            children: i.priceDesc,
                          }),
                      ],
                    }),
                    (0, z.tZ)(De, {
                      curSeat: i,
                      totalCount: r,
                      onAddClick: function () {
                        return l(s);
                      },
                      onMinusClick: function () {
                        return c(s);
                      },
                      selectedPasList: d,
                      isFreeFor12306: u,
                    }),
                  ],
                },
                t
              );
            },
            De = function (e) {
              var t = e.curSeat,
                i = e.onAddClick,
                a = e.onMinusClick,
                r = e.selectedPasList,
                n = e.totalCount,
                o = e.isFreeFor12306,
                s = (0, W.zH)(r, "卧铺选座"),
                l = r.length,
                c = t.amount <= 0 || s ? "disabled" : "",
                d = s || n >= l ? "disabled" : "";
              return (0, z.BX)(S.View, {
                className: "choose-wrap",
                children: [
                  (0, z.tZ)(S.View, {
                    className: "minus ".concat(c),
                    id: "ANAD",
                    onClick: a,
                  }),
                  (0, z.tZ)(S.View, {
                    className: "flex-1 choose-num flex-center",
                    children: null == t ? void 0 : t.amount,
                  }),
                  (0, z.tZ)(S.View, {
                    className: "add ".concat(d),
                    id: "ANAE",
                    onClick: function () {
                      !s || o ? i() : (0, T.showToast)(s);
                    },
                  }),
                ],
              });
            },
            xe = function (e) {
              var t = e.content,
                i = e.acceptAnother,
                a = e.isFreeFor12306,
                r = e.onAcceptAnother;
              return (0, z.tZ)(z.HY, {
                children: (0, z.BX)(S.View, {
                  className: "other-seat-wrap",
                  children: [
                    (0, z.tZ)(S.Text, { children: t }),
                    !a &&
                      (0, z.tZ)(S.Image, {
                        id: "ANAF",
                        onClick: r,
                        className: "other-icon",
                        src: i
                          ? "https://images3.c-ctrip.com/ztrip/train_xie/2022-07/icon_dx_xz.png"
                          : "https://images3.c-ctrip.com/ztrip/train_xie/2022-06/icon_dx_wx.png",
                      }),
                  ],
                }),
              });
            },
            Ze = function (e) {
              var t = e.priceTip,
                i = e.tag;
              return (0, z.BX)(S.View, {
                className: "bs-discount-info flex-align-items-center",
                children: [
                  (0, z.tZ)(S.View, { className: "discount-tag", children: i }),
                  (0, z.tZ)(S.View, {
                    className: "discount-desc",
                    children: t,
                  }),
                ],
              });
            },
            ye = m.default.memo(function (e) {
              var t,
                i,
                a = e.trainInfo,
                r = e.selectedPasList,
                n = e.berthTicket,
                o = e.showSeatDetail,
                s = e.hasVipDiscount,
                c = e.useVipBerth,
                d = e.upDateTripDetail,
                u = e.tripDetail,
                h = e.pageId,
                f = e.ubtTrace,
                p = e.assignCarriageInfo,
                m = e.chooseSeatDiscountInfo,
                v = e.doUbtTraceWithAppoint,
                g = e.onShowSeatTransfersTips,
                N = (null == n ? void 0 : n.seatList) || [],
                b = (0, W.dC)(N),
                w = (null == r ? void 0 : r.length) || 0,
                D = function (e) {
                  var t = N[e];
                  t.amount >= w ||
                    b >= w ||
                    ((N[e].amount += 1),
                    f("224909", { PageId: h, clickType: 1, Num: b }),
                    d(u),
                    !n.hasShowSeatTransfersTips &&
                      n.isNeedShowSeatTips &&
                      g({
                        tripIndex: a.index,
                        seatName: t.seatName,
                        seatCode: t.seatCode,
                      }));
                },
                x = function (e) {
                  if (!(N[e].amount <= 0)) {
                    N[e].amount -= 1;
                    var t = (0, W.dC)(N);
                    t <= 0 && (n.acceptAnother = !1),
                      f("224909", { PageId: h, clickType: 0, Num: t }),
                      d(u);
                  }
                },
                Z = C.Z.isNotEmptyObj(n) && !n.isFreeFor12306;
              return (0, z.BX)(S.View, {
                className: "smart-book-berth-seat",
                children: [
                  (0, z.BX)(S.View, {
                    className: "head-wrap",
                    children: [
                      (0, z.BX)(S.View, {
                        className: "flex-align-items-center",
                        children: [
                          (0, z.BX)(S.Text, {
                            children: [
                              null == a ? void 0 : a.orderDesc,
                              "  ",
                              null == a ? void 0 : a.seatName,
                            ],
                          }),
                          (null == n ||
                          null === (t = n.detailToast) ||
                          void 0 === t
                            ? void 0
                            : t.content) &&
                            (0, z.tZ)(S.Text, {
                              className: "iconfont ifont-detail icon-detail",
                              id: "ANAC",
                              onClick: function () {
                                return o(n.detailToast);
                              },
                            }),
                          C.Z.isNotEmptyObj(p) &&
                            Z &&
                            (!s || !c) &&
                            m &&
                            (0, z.tZ)(Ze, { priceTip: m.priceTip, tag: m.tag }),
                        ],
                      }),
                      (0, z.BX)(S.View, {
                        style: "color: #999",
                        children: [
                          (0, z.tZ)(S.Text, {
                            style: { color: b > 0 ? "#222" : "#999" },
                            children: b,
                          }),
                          "/",
                          (0, z.tZ)(S.Text, { children: w }),
                        ],
                      }),
                    ],
                  }),
                  (0, z.tZ)(S.View, {
                    className: "seats-wrap",
                    children:
                      null == n || null === (i = n.seatList) || void 0 === i
                        ? void 0
                        : i.map(function (e, t) {
                            var i;
                            return (0,
                            z.tZ)(we, { seat: e, ishHorizontal: (null == n || null === (i = n.seatList) || void 0 === i ? void 0 : i.length) <= 2, totalCount: b, hasDiscount: s, useVipBerth: c, selectedIndex: t, selectedPasList: r, isFreeFor12306: n.isFreeFor12306, onAddClick: D, onMinusClick: x }, "berth-".concat(t));
                          }),
                  }),
                  b > 0 &&
                    (0, z.tZ)(xe, {
                      content: n.acceptOtherSeatDesc,
                      acceptAnother: n.acceptAnother,
                      isFreeFor12306: n.isFreeFor12306,
                      onAcceptAnother: function () {
                        (n.acceptAnother = !n.acceptAnother),
                          f("224911", {
                            PageId: h,
                            Sequences: (null == a ? void 0 : a.index) + 1,
                          }),
                          d(u);
                      },
                    }),
                  !!p &&
                    (0, z.tZ)(ge, {
                      carriageInfo: p,
                      tripIndex: null == a ? void 0 : a.index,
                      source: "Berth",
                      onSelectChange: function (e) {
                        var t = (0, W.zH)(r, M.Yv);
                        t
                          ? (0, T.showToast)(t)
                          : ((p.selectedCarriages = e), d(u));
                      },
                      ubtTrace: function (e, t, i) {
                        return (function (e, t, i) {
                          var a = (0, l.Z)(
                            (0, l.Z)({}, i),
                            {},
                            { ActivityType: n || p ? "1" : "0" }
                          );
                          v(e, t, a);
                        })(e, t, i);
                      },
                    }),
                ],
              });
            }),
            ke = function (e) {
              var t = e.key,
                i = e.seatProduct,
                a = e.onSelect;
              return (0, z.BX)(
                S.View,
                {
                  className:
                    "seat-type-item flex-1 flex-align-items-center ".concat(
                      null != i && i.isSelected ? "active" : ""
                    ),
                  id: "ANAA",
                  onClick: a,
                  children: [
                    (0, z.tZ)(S.Text, {
                      className: "name",
                      children: null == i ? void 0 : i.name,
                    }),
                    (0, z.tZ)(S.Text, {
                      className: "desc",
                      children: null == i ? void 0 : i.priceDesc,
                    }),
                    (0, z.tZ)(S.View, {
                      className: "icon",
                      children: (0, z.tZ)(S.Text, {
                        className: "iconfont ifont-select",
                      }),
                    }),
                  ],
                },
                t
              );
            },
            Ie = function (e) {
              var t = e.content,
                i = e.acceptOtherSeat,
                a = e.onAcceptAnother;
              return (0, z.BX)(S.View, {
                className: "ast-tips flex-align-items-center",
                children: [
                  (0, z.tZ)(S.Text, { className: "desc flex-1", children: t }),
                  (0, z.tZ)(S.Image, {
                    id: "ANAB",
                    onClick: a,
                    className: "other-icon",
                    src: i
                      ? "https://images3.c-ctrip.com/ztrip/train_xie/2022-07/icon_dx_xz.png"
                      : "https://images3.c-ctrip.com/ztrip/train_xie/2022-06/icon_dx_wx.png",
                  }),
                ],
              });
            },
            Ce = function (e) {
              var t = e.priceTip,
                i = e.tag;
              return (0, z.BX)(S.View, {
                className: "ast-discount-info flex-align-items-center",
                children: [
                  (0, z.tZ)(S.View, { className: "discount-tag", children: i }),
                  (0, z.tZ)(S.View, {
                    className: "discount-desc",
                    children: t,
                  }),
                ],
              });
            },
            Pe = m.default.memo(function (e) {
              var t = e.selectedPasList,
                i = e.trainInfo,
                a = e.assignCarriageInfo,
                r = e.manualSelectSeatInfo,
                n = e.tripDetail,
                o = e.upDateTripDetail,
                s = e.chooseSeatDiscountInfo,
                c = e.doUbtTraceWithAppoint,
                d = e.onShowSeatTransfersTips;
              if (
                ((0, m.useEffect)(
                  function () {
                    var e = (0, W.e$)(t, r);
                    if ((null == e ? void 0 : e.length) > 0) {
                      var i = e.map(function (e) {
                        var t = "";
                        switch (e.code) {
                          case "window":
                            t = "指定靠窗";
                            break;
                          case "next":
                            t = "指定过道";
                            break;
                          case "near":
                            t = "指定相邻座位";
                        }
                        return { type: t };
                      });
                      c("229491", "NormalSeat", { SeatsList: i });
                    }
                  },
                  [r]
                ),
                !i)
              )
                return (0, z.tZ)(S.View, {});
              var u = (0, W.e$)(t, r),
                h = function (e) {
                  var a = "";
                  switch (null == e ? void 0 : e.code) {
                    case "window":
                      a = "指定靠窗";
                      break;
                    case "next":
                      a = "指定过道";
                      break;
                    case "near":
                      a = "指定相邻座位";
                  }
                  var s = (0, W.zH)(t, a);
                  if (s) (0, T.showToast)(s);
                  else {
                    var l = {
                      clickSelect: a,
                      clickType: e.isSelected ? "0" : "1",
                    };
                    c("229492", "NormalSeat", l),
                      u.forEach(function (t) {
                        t.isSelected
                          ? (t.isSelected = !1)
                          : t.code === (null == e ? void 0 : e.code) &&
                            (t.isSelected = !0);
                      }),
                      o(n),
                      !r.hasShowSeatTransfersTips &&
                        r.isNeedShowSeatTips &&
                        d({
                          tripIndex: i.index,
                          seatName: e.name,
                          seatCode: null == e ? void 0 : e.code,
                        });
                  }
                },
                f =
                  null == u
                    ? void 0
                    : u.some(function (e) {
                        return e.isSelected;
                      });
              return (0, z.BX)(S.View, {
                className: "appoint-seat-product",
                children: [
                  (0, z.BX)(S.View, {
                    className: "ast-header flex-align-items-center",
                    children: [
                      (0, z.tZ)(S.View, {
                        className: "name",
                        children: ""
                          .concat(i.orderDesc, " ")
                          .concat(i.seatName),
                      }),
                      C.Z.isNotEmptyObj(a) &&
                        C.Z.isNotEmptyObj(r) &&
                        s &&
                        (0, z.tZ)(Ce, { priceTip: s.priceTip, tag: s.tag }),
                    ],
                  }),
                  (null == u ? void 0 : u.length) > 0 &&
                    (0, z.tZ)(S.View, {
                      className: "flex ".concat(
                        2 === (null == t ? void 0 : t.length)
                          ? "ast-multi"
                          : "ast-single"
                      ),
                      children: u.map(function (e, t) {
                        return (0, z.tZ)(
                          ke,
                          {
                            seatProduct: e,
                            onSelect: function () {
                              return h(e);
                            },
                          },
                          t
                        );
                      }),
                    }),
                  f &&
                    (0, z.tZ)(Ie, {
                      content: null == r ? void 0 : r.acceptOtherSeatDesc,
                      acceptOtherSeat: null == r ? void 0 : r.acceptOtherSeat,
                      onAcceptAnother: function () {
                        (r.acceptOtherSeat = !r.acceptOtherSeat), o(n);
                      },
                    }),
                  !!a &&
                    (0, z.tZ)(ge, {
                      tripIndex: null == i ? void 0 : i.index,
                      carriageInfo: a,
                      source: "NormalSeat",
                      onSelectChange: function (e) {
                        var i = (0, W.zH)(t, M.Yv);
                        i
                          ? (0, T.showToast)(i)
                          : ((a.selectedCarriages = e), o(n));
                      },
                      ubtTrace: function (e, t, i) {
                        return (function (e, t, i) {
                          var n = (0, l.Z)(
                            (0, l.Z)({}, i),
                            {},
                            { ActivityType: r || a ? "1" : "0" }
                          );
                          c(e, t, n);
                        })(e, t, i);
                      },
                    }),
                ],
              });
            }),
            Ve = function (e) {
              var t,
                i,
                a = e.index,
                r = e.tripShift;
              return (0, z.tZ)(S.View, {
                className: "disable-seat",
                children: (0, z.BX)(S.View, {
                  className: "disable-seat-hd",
                  children: [
                    (0, W.gb)(a),
                    "  ",
                    (null == r || null === (t = r.selectSeat) || void 0 === t
                      ? void 0
                      : t.seatName) ||
                      (null == r || null === (i = r.selectSeat) || void 0 === i
                        ? void 0
                        : i.name),
                    (0, z.tZ)(S.View, {
                      className: "fr",
                      children: (0, z.tZ)(S.Text, {
                        className: "tgrey",
                        children: "暂不支持选座",
                      }),
                    }),
                  ],
                }),
              });
            },
            Be = function (e) {
              var t = e.title,
                i = e.useVipBerth,
                a = void 0 === i || i,
                r = e.onUseVipBerth;
              return (0, z.BX)(S.View, {
                className: "flex-align-items-center vip-berth",
                children: [
                  (0, z.tZ)(S.View, {
                    className: "flex-1",
                    children: (0, z.tZ)(me.ZtRichText, {
                      nodes: t,
                      className: "vip-berth-txt",
                    }),
                  }),
                  (0, z.tZ)(S.Text, { children: "使用权益" }),
                  (0, z.tZ)(S.Switch, {
                    color: Z.default.isTieyou ? "#fc6e51" : "#0080FF",
                    checked: a,
                    className: "switch",
                    onChange: function (e) {
                      var t;
                      r(
                        null == e || null === (t = e.detail) || void 0 === t
                          ? void 0
                          : t.value
                      );
                    },
                  }),
                ],
              });
            },
            Ae = m.default.memo(function (e) {
              var t = e.tripDetail,
                i = e.canChooseSeatArray,
                a = e.selectedPasList,
                r = e.updateSelectedSeats,
                n = e.hasVipDiscount,
                o = e.openVipBerthTicketTitle,
                s = e.showSeatDetail,
                c = e.useVipBerth,
                d = e.upDateTripDetail,
                u = e.onUseVipBerth,
                h = e.ubtTrace,
                f = e.pageId,
                p = e.chooseSeatDiscountList,
                m = e.doUbtTraceWithAppoint,
                v = e.onShowSeatPicTipsDrawer,
                N = e.onShowSeatTransfersTips,
                T = t.details,
                b = null == a ? void 0 : a.length,
                w = [],
                D = !1,
                x = !1;
              return (
                null == T ||
                  T.forEach(function (e, o) {
                    var l = (0, W.MW)(e);
                    if ("T" === (null == e ? void 0 : e.tripType)) {
                      var u, v, g;
                      ((null != l && l.berthTicket) ||
                        (null != l && l.manualSelectSeatInfo) ||
                        (null != l && l.assignCarriageInfo)) &&
                        (x = !0);
                      var T,
                        S =
                          null == p
                            ? void 0
                            : p.find(function (e) {
                                return e.tripIndex === o + 1;
                              });
                      if (
                        null != l &&
                        null !== (u = l.selectSeat) &&
                        void 0 !== u &&
                        null !== (v = u.seatName) &&
                        void 0 !== v &&
                        v.includes("卧")
                      )
                        null != l && l.berthTicket
                          ? ((D = !0),
                            w.push(
                              (0, z.tZ)(ye, {
                                trainInfo: {
                                  index: o,
                                  seatName:
                                    null == l ||
                                    null === (T = l.selectSeat) ||
                                    void 0 === T
                                      ? void 0
                                      : T.seatName,
                                  orderDesc: (0, W.gb)(o),
                                },
                                berthTicket: l.berthTicket,
                                selectedPasList: a,
                                showSeatDetail: s,
                                hasVipDiscount: n,
                                useVipBerth: c,
                                tripDetail: t,
                                upDateTripDetail: d,
                                pageId: f,
                                ubtTrace: h,
                                assignCarriageInfo: l.assignCarriageInfo,
                                chooseSeatDiscountInfo: S,
                                doUbtTraceWithAppoint: m,
                                onShowSeatTransfersTips: N,
                              })
                            ))
                          : w.push((0, z.tZ)(Ve, { index: o, tripShift: l }));
                      else if (
                        "硬座" ===
                        (null == l ||
                        null === (g = l.selectSeat) ||
                        void 0 === g
                          ? void 0
                          : g.seatName)
                      ) {
                        var Z;
                        ((null != l && l.manualSelectSeatInfo) ||
                          (null != l && l.assignCarriageInfo)) &&
                          ((D = !0),
                          w.push(
                            (0, z.tZ)(Pe, {
                              selectedPasList: a,
                              trainInfo: {
                                index: o,
                                seatName:
                                  null == l ||
                                  null === (Z = l.selectSeat) ||
                                  void 0 === Z
                                    ? void 0
                                    : Z.seatName,
                                orderDesc: (0, W.gb)(o),
                              },
                              assignCarriageInfo: l.assignCarriageInfo,
                              manualSelectSeatInfo: l.manualSelectSeatInfo,
                              tripDetail: t,
                              upDateTripDetail: d,
                              chooseSeatDiscountInfo: S,
                              doUbtTraceWithAppoint: m,
                              onShowSeatTransfersTips: N,
                            })
                          ));
                      } else if (i[o]) {
                        var y;
                        (D = !0),
                          w.push(
                            (0, z.tZ)(be, {
                              isTransfer: !0,
                              currentSeatName:
                                null === (y = l.selectSeat) || void 0 === y
                                  ? void 0
                                  : y.seatName,
                              pasNum: b,
                              tripIndex: o,
                              orderDesc: (0, W.gb)(o),
                              updateSelectedSeats: r,
                              assignCarriageInfo: l.assignCarriageInfo,
                              tripDetail: t,
                              upDateTripDetail: d,
                              selectedPasList: a,
                              doUbtTraceWithAppoint: m,
                            })
                          );
                      } else w.push((0, z.tZ)(Ve, { index: o, tripShift: l }));
                    } else w.push((0, z.tZ)(Ve, { index: o, tripShift: l }));
                  }),
                D
                  ? (h("224908", {
                      PageId: f,
                      SeatAssign: (0, l.Z)(
                        { passager: (null == a ? void 0 : a.length) || 0 },
                        (0, W.Xm)(t)
                      ),
                    }),
                    (0, z.BX)(S.View, {
                      className: "smart-seat-choose-module",
                      children: [
                        (0, z.BX)(S.View, {
                          className:
                            "smart-seat-choose-module-hd flex-align-items-center",
                          children: [
                            (0, z.tZ)(S.View, {
                              className: "title",
                              children: "选择坐席",
                            }),
                            x &&
                              (0, z.BX)(S.View, {
                                className: "seat-pic-tips flex-center",
                                id: "ANAU",
                                onClick: v,
                                children: [
                                  (0, z.tZ)(S.Image, {
                                    className: "icon",
                                    src: "https://images3.c-ctrip.com/ztrip/train.xin/2023_03/icon_seatpic.webp",
                                    webp: !0,
                                  }),
                                  (0, z.tZ)(S.View, {
                                    className: "desc",
                                    children: "座席图示",
                                  }),
                                  (0, z.tZ)(ve.Z, {
                                    customizeStyle: {
                                      icon: "color: #198cff;height: "
                                        .concat(
                                          g().pxTransform(20),
                                          ";font-size: "
                                        )
                                        .concat(g().pxTransform(20)),
                                    },
                                    onClickHandle: v,
                                  }),
                                ],
                              }),
                          ],
                        }),
                        n &&
                          (0, z.tZ)(Be, {
                            title: o,
                            useVipBerth: c,
                            onUseVipBerth: u,
                          }),
                        (0, z.tZ)(S.View, {
                          className: "smart-seat-choose-module-bd",
                          children:
                            null == w
                              ? void 0
                              : w.map(function (e, t) {
                                  return (0,
                                  z.tZ)(S.View, { className: "smart-seat-choose-booking", children: e }, "smart-choose-seat-".concat(t));
                                }),
                        }),
                      ],
                    }))
                  : (0, z.tZ)(S.View, {})
              );
            }),
            Xe = i(91006),
            Oe = i.n(Xe),
            Le = Z.default.isTieyou,
            Fe = { 0: "一", 1: "二", 2: "三", 3: "四", 4: "五" },
            Ee = function (e) {
              var t,
                i = e.robAdviceModel,
                a = e.isShow,
                r = e.tripDetail,
                n = e.selectCb,
                o = e.close,
                s = C.Z.deepCopy(i),
                l = s.robIndex,
                c = s.titleInfo,
                d = void 0 === c ? {} : c,
                u = s.seatInfo,
                h = void 0 === u ? {} : u,
                f = s.trainInfo,
                p = void 0 === f ? {} : f,
                m = (null == r ? void 0 : r.details) || [],
                v = null == m ? void 0 : m[l],
                g = (0, W.MW)(v),
                N =
                  (null == p ? void 0 : p.alternativeTrainSchemeInfoList) || [],
                T = (null == h ? void 0 : h.alternativeSeatInfoList) || [];
              return (0, z.BX)(me.ZtDrawer, {
                show: a,
                onWrapClose: function () {
                  return o();
                },
                className: "smart-rob-advice-pop",
                drawerStyle: { backgroundColor: "#f8f8f8" },
                onClose: function () {
                  return o();
                },
                children: [
                  (0, z.BX)(S.View, {
                    className: "hd",
                    children: [
                      (0, z.tZ)(S.Image, {
                        className: "icon",
                        src: null == d ? void 0 : d.iconUrl,
                      }),
                      (0, z.tZ)(S.View, {
                        className: "desc",
                        children: (0, z.tZ)(me.ZtRichText, {
                          nodes: null == d ? void 0 : d.title,
                        }),
                      }),
                    ],
                  }),
                  (0, z.BX)(S.View, {
                    className: "original-plan",
                    children: [
                      (0, z.tZ)(S.Image, {
                        className: "plan-icon",
                        src: Z.default.isTieyou
                          ? "https://images3.c-ctrip.com/ztrip/train.xin/2021_11/smart/word_rob_ty@3x.png"
                          : "https://images3.c-ctrip.com/ztrip/train.xin/2021_11/smart/word_rob_zx@3x.png",
                      }),
                      (0, z.tZ)(S.View, {
                        className: "color-primary plan-num",
                        children: "第".concat(
                          null == Fe ? void 0 : Fe[l],
                          "程"
                        ),
                      }),
                      (0, z.BX)(S.View, {
                        className: "flex-1 flex-align-items-center",
                        children: [
                          (0, z.tZ)(S.View, {
                            className: "plan-desc",
                            children: ""
                              .concat(null == g ? void 0 : g.startTime)
                              .concat(null == g ? void 0 : g.fromStation, " - ")
                              .concat(null == g ? void 0 : g.arriveTime)
                              .concat(null == g ? void 0 : g.toStation),
                          }),
                          (null == g ? void 0 : g.dayDiff) > 0 &&
                            (0, z.tZ)(S.View, {
                              className: "diff-day ".concat(Le ? "ty" : "zx"),
                              children: "跨天",
                            }),
                        ],
                      }),
                      (0, z.tZ)(S.View, {
                        className: "plan-seat",
                        children:
                          null == g ||
                          null === (t = g.selectSeat) ||
                          void 0 === t
                            ? void 0
                            : t.seatName,
                      }),
                    ],
                  }),
                  (0, z.BX)(S.View, {
                    className: "content",
                    children: [
                      C.Z.notEmptyArray(N) &&
                        (0, z.BX)(S.View, {
                          className: "rob-trips",
                          children: [
                            (0, z.BX)(S.View, {
                              className: "title",
                              children: [
                                (0, z.tZ)(S.View, {
                                  className: "tag bgcolor-primary",
                                }),
                                (0, z.tZ)(S.View, {
                                  className: "rob-desc",
                                  children: null == p ? void 0 : p.title,
                                }),
                                !(null == p || !p.stayTime) &&
                                  (0, z.tZ)(S.View, {
                                    className: "stay-time",
                                    children: null == p ? void 0 : p.stayTime,
                                  }),
                              ],
                            }),
                            N.map(function (e, t) {
                              var i =
                                null != e && e.selected
                                  ? "selected bdcolor-primary"
                                  : "";
                              return (0, z.BX)(
                                S.View,
                                {
                                  className: "rob-item "
                                    .concat(Le ? "ty" : "zx", " ")
                                    .concat(i),
                                  id: "ANAQ",
                                  onClick: function () {
                                    (N[t].selected = !(
                                      null != e && e.selected
                                    )),
                                      n({ robAdviceModel: s });
                                  },
                                  children: [
                                    (0, z.BX)(S.View, {
                                      className: "rob-from",
                                      children: [
                                        (0, z.tZ)(S.View, {
                                          className: "time",
                                          children:
                                            null == e ? void 0 : e.startTime,
                                        }),
                                        (0, z.tZ)(S.View, {
                                          className: "station",
                                          children:
                                            null == e
                                              ? void 0
                                              : e.fromStationName,
                                        }),
                                      ],
                                    }),
                                    (0, z.BX)(S.View, {
                                      className: "rob-che",
                                      children: [
                                        (0, z.tZ)(S.View, {
                                          className: "cost-time",
                                          children: (0, W.zE)(
                                            null == e
                                              ? void 0
                                              : e.durationMinutes
                                          ),
                                        }),
                                        (0, z.tZ)(S.Image, {
                                          src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon_ht_lb@3x.png",
                                          className: "che-icon",
                                        }),
                                        (0, z.tZ)(S.View, {
                                          className: "che-num",
                                          children:
                                            null == e ? void 0 : e.trainNo,
                                        }),
                                      ],
                                    }),
                                    (0, z.BX)(S.View, {
                                      className: "rob-from rob-to",
                                      children: [
                                        (0, z.tZ)(S.View, {
                                          className: "time",
                                          children:
                                            null == e ? void 0 : e.arriveTime,
                                        }),
                                        (0, z.tZ)(S.View, {
                                          className: "station",
                                          children:
                                            null == e
                                              ? void 0
                                              : e.toStationName,
                                        }),
                                        (null == e ? void 0 : e.dayDiff) > 0 &&
                                          (0, z.tZ)(S.View, {
                                            className:
                                              "rob-diff-day color-primary",
                                            children: "+".concat(
                                              null == e ? void 0 : e.dayDiff,
                                              "天"
                                            ),
                                          }),
                                      ],
                                    }),
                                    !(null == e || !e.stayTime) &&
                                      (0, z.tZ)(S.View, {
                                        className: "stay-time ".concat(
                                          Le ? "ty" : "zx"
                                        ),
                                        children:
                                          null == e ? void 0 : e.stayTime,
                                      }),
                                    null != e && e.selected
                                      ? (0, z.tZ)(S.Text, {
                                          className:
                                            "iconfont ifont-radioed select-icon color-primary",
                                        })
                                      : (0, z.tZ)(S.Text, {
                                          className:
                                            "iconfont ifont-radio select-icon",
                                        }),
                                  ],
                                },
                                null == e ? void 0 : e.trainNo
                              );
                            }),
                          ],
                        }),
                      C.Z.notEmptyArray(T) &&
                        (0, z.BX)(S.View, {
                          className: "rob-trips rob-seats",
                          children: [
                            (0, z.BX)(S.View, {
                              className: "title",
                              children: [
                                (0, z.tZ)(S.View, {
                                  className: "tag bgcolor-primary",
                                }),
                                (0, z.tZ)(S.View, {
                                  className: "rob-desc",
                                  children: null == h ? void 0 : h.title,
                                }),
                                !(null == h || !h.content) &&
                                  (0, z.tZ)(S.View, {
                                    className: "stay-time",
                                    children: null == h ? void 0 : h.content,
                                  }),
                              ],
                            }),
                            (0, z.tZ)(S.View, {
                              className: "seats",
                              children: T.map(function (e, t) {
                                var i =
                                  null != e && e.selected
                                    ? "selected bdcolor-primary"
                                    : "";
                                return (0, z.tZ)(
                                  S.View,
                                  {
                                    className: "item",
                                    id: "ANAR",
                                    onClick: function () {
                                      (T[t].selected = !(
                                        null != e && e.selected
                                      )),
                                        n({ robAdviceModel: s });
                                    },
                                    children: (0, z.BX)(S.View, {
                                      className: "item-c "
                                        .concat(Le ? "ty" : "zx", " ")
                                        .concat(i),
                                      children: [
                                        null == e ? void 0 : e.seatName,
                                        (null == e ? void 0 : e.selected) &&
                                          (0, z.tZ)(S.Text, {
                                            className:
                                              "iconfont color-primary ifont-select 　seat-selected",
                                          }),
                                      ],
                                    }),
                                  },
                                  null == e ? void 0 : e.seatName
                                );
                              }),
                            }),
                          ],
                        }),
                      (0, z.BX)(S.View, {
                        className: "tips",
                        children: [
                          (0, z.BX)(S.Text, {
                            className: "desc",
                            children: [
                              "· 预付最高票价，抢票成功后按实际票面价格",
                              (0, z.tZ)(S.Text, {
                                className: "color-primary",
                                children: "退还差价",
                              }),
                            ],
                          }),
                          (0, z.tZ)(S.Text, {
                            className: "desc",
                            children:
                              "· 支付成功后，您也可以在订单详情页管理备选方案",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              });
            };
          (Ee.propTypes = {
            robAdviceModel: Oe().object,
            isShow: Oe().bool,
            tripDetail: Oe().object,
            selectCb: Oe().func,
            close: Oe().func,
          }),
            (Ee.defaultProps = {
              robAdviceModel: {},
              isShow: !1,
              tripDetail: {},
              selectCb: function () {},
              close: function () {},
            });
          var Me,
            Re = m.default.memo(Ee),
            ze = m.default.memo(function (e) {
              var t,
                i,
                a,
                r,
                n,
                o,
                s,
                l = e.isShow,
                c = e.onClose,
                d = e.data,
                u = e.btnClick;
              return (0, z.BX)(me.ZtDrawer, {
                show: l,
                onClose: c,
                onWrapClose: c,
                className: "smart-book-night-product-modal",
                children: [
                  (0, z.tZ)(S.View, {
                    className: "flex-center",
                    children: (0, z.tZ)(S.Image, {
                      src: null == d ? void 0 : d.productImage,
                      className: "bg-icon",
                    }),
                  }),
                  (0, z.tZ)(S.View, {
                    className: "flex-center",
                    children: (0, z.tZ)(me.ZtRichText, {
                      className: "title",
                      nodes: null == d ? void 0 : d.title,
                    }),
                  }),
                  (0, z.BX)(S.View, {
                    className: "product",
                    children: [
                      (0, z.BX)(S.View, {
                        className: "flex-align-items-center",
                        children: [
                          (0, z.BX)(S.View, {
                            className: "flex-1 flex-align-items-center",
                            children: [
                              (0, z.tZ)(S.Image, {
                                src: null == d ? void 0 : d.icon,
                                className: "product-icon",
                              }),
                              (0, z.tZ)(me.ZtRichText, {
                                className: "product-name",
                                nodes: null == d ? void 0 : d.productName,
                              }),
                            ],
                          }),
                          !(null == d || !d.freeTag) &&
                            (0, z.tZ)(S.View, {
                              className: "free-tag",
                              children: null == d ? void 0 : d.freeTag,
                            }),
                          (0, z.tZ)(S.View, {
                            className: "price-text ".concat(
                              null != d && d.isUserFree ? "line-price" : ""
                            ),
                            children: null == d ? void 0 : d.productPriceDesc,
                          }),
                        ],
                      }),
                      (0, z.tZ)(S.View, {
                        className: "product-desc",
                        children:
                          null == d ||
                          null === (t = d.productDesc) ||
                          void 0 === t
                            ? void 0
                            : t[0],
                      }),
                    ],
                  }),
                  (0, z.BX)(S.View, {
                    className: "btn-list flex",
                    children: [
                      (0, z.BX)(S.View, {
                        className: "flex-1 btn flex-center ".concat(
                          Z.default.isTieyou ? "ty" : "zx"
                        ),
                        id: "ANAM",
                        onClick: function () {
                          return u(!1);
                        },
                        children: [
                          (0, z.tZ)(S.Text, {
                            className: "btn-txt",
                            children:
                              null == d ||
                              null === (i = d.normal) ||
                              void 0 === i
                                ? void 0
                                : i.name,
                          }),
                          !(
                            null == d ||
                            null === (a = d.normal) ||
                            void 0 === a ||
                            !a.desc
                          ) &&
                            (0, z.tZ)(S.Text, {
                              className: "btn-desc",
                              children:
                                null == d ||
                                null === (r = d.normal) ||
                                void 0 === r
                                  ? void 0
                                  : r.desc,
                            }),
                        ],
                      }),
                      (0, z.BX)(S.View, {
                        className: "flex-1 btn flex-center ".concat(
                          null != d && d.isUserFree
                            ? "free-btn-confirm"
                            : "btn-confirm"
                        ),
                        id: "ANAN",
                        onClick: function () {
                          return u(!0);
                        },
                        children: [
                          (0, z.tZ)(S.Text, {
                            className: "confirm-btn-txt ".concat(
                              null != d && d.isUserFree ? "free-btn-text" : ""
                            ),
                            children:
                              null == d ||
                              null === (n = d.quick) ||
                              void 0 === n
                                ? void 0
                                : n.name,
                          }),
                          !(
                            null == d ||
                            null === (o = d.quick) ||
                            void 0 === o ||
                            !o.desc
                          ) &&
                            (0, z.tZ)(S.Text, {
                              className: "confirm-btn-desc ".concat(
                                null != d && d.isUserFree ? "free-btn-desc" : ""
                              ),
                              children:
                                null == d ||
                                null === (s = d.quick) ||
                                void 0 === s
                                  ? void 0
                                  : s.desc,
                            }),
                        ],
                      }),
                    ],
                  }),
                ],
              });
            }),
            _e = m.default.memo(function (e) {
              var t,
                i = e.data,
                a = void 0 === i ? null : i,
                n = e.visible,
                o = void 0 !== n && n,
                s = e.onClose,
                l = void 0 === s ? function () {} : s,
                c = (0, m.useState)(null),
                d = (0, r.Z)(c, 2),
                u = d[0],
                h = d[1];
              if (
                ((0, m.useEffect)(
                  function () {
                    var e;
                    if (
                      null != a &&
                      null !== (e = a.specifyIconItems) &&
                      void 0 !== e &&
                      e.length
                    ) {
                      var t = a.specifyIconItems.find(function (e) {
                        return e.name === a.defaultPicItem;
                      });
                      t || (t = a.specifyIconItems[0]), h(t);
                    }
                  },
                  [a]
                ),
                !a ||
                  null === (t = a.specifyIconItems) ||
                  void 0 === t ||
                  !t.length)
              )
                return (0, z.tZ)(z.HY, {});
              return (0, z.tZ)(me.ZtDrawer, {
                show: o,
                isShowClose: !1,
                className: "seat-picture-display-drawer",
                onWrapClose: l,
                children: (0, z.BX)(S.View, {
                  className: "content",
                  children: [
                    (0, z.tZ)(S.View, {
                      className: "iconfont2 ifont2-close",
                      id: "ANAV",
                      onClick: l,
                    }),
                    (0, z.tZ)(S.View, {
                      className: "title",
                      children: a.title,
                    }),
                    (0, z.tZ)(S.View, {
                      className: "sub-tit",
                      children: a.subTitle,
                    }),
                    (0, z.tZ)(S.View, {
                      className: "choose-items",
                      children: (0, z.tZ)(S.View, {
                        className: "flex cont",
                        children: a.specifyIconItems.map(function (e, t) {
                          return (0, z.tZ)(
                            S.View,
                            {
                              className: "item flex-center "
                                .concat(
                                  (null == u ? void 0 : u.name) === e.name
                                    ? "active"
                                    : "",
                                  " "
                                )
                                .concat(t % 3 != 2 ? "mr18" : ""),
                              id: "ANAW",
                              onClick: function () {
                                return (function (e) {
                                  h(e);
                                  var t = (0, T.getCurrentPage)();
                                  null == t ||
                                    t.ubtTrace("232463", {
                                      PageId: null == t ? void 0 : t.pageId,
                                      clickType: e.name,
                                    });
                                })(e);
                              },
                              children: e.name,
                            },
                            t
                          );
                        }),
                      }),
                    }),
                    u &&
                      (0, z.BX)(S.View, {
                        className: "cur-pic-item",
                        children: [
                          (0, z.tZ)(S.View, {
                            className: "name",
                            children: u.name,
                          }),
                          (0, z.tZ)(S.View, {
                            className: "desc",
                            children: u.desc,
                          }),
                          (0, z.tZ)(S.Image, {
                            className: "pic-desc",
                            src: u.icon,
                            webp: !0,
                          }),
                        ],
                      }),
                  ],
                }),
              });
            }),
            We = m.default.memo(function (e) {
              var t = e.visible,
                i = void 0 !== t && t,
                a = e.seatName,
                r = void 0 === a ? "" : a,
                n = e.onClose,
                o = void 0 === n ? function () {} : n,
                s = e.onConfirm,
                l = void 0 === s ? function () {} : s,
                c = '当前<font color="#198cff">「'.concat(
                  r,
                  "」</font>余票紧张，可能导致占座失败"
                );
              return (0, z.tZ)(me.ZtDrawer, {
                show: i,
                isDefineHead: !0,
                className: "seat-transfers-tips-drawer",
                children: (0, z.BX)(S.View, {
                  className: "content flex-align-items-center flex-column",
                  children: [
                    (0, z.tZ)(S.View, {
                      className: "iconfont2 ifont2-close",
                      id: "ANAX",
                      onClick: function () {
                        return o(!0);
                      },
                    }),
                    (0, z.tZ)(S.Image, {
                      className: "img",
                      src: "https://images3.c-ctrip.com/ztrip/train.xin/2023_03/pic_toast.webp",
                      webp: !0,
                    }),
                    (0, z.tZ)(S.View, {
                      className: "tit",
                      children: "建议接受其它座席",
                    }),
                    (0, z.tZ)(me.ZtRichText, { className: "desc", nodes: c }),
                    (0, z.BX)(S.View, {
                      className: "btn-layer flex",
                      children: [
                        (0, z.BX)(S.Button, {
                          className:
                            "btn btn-cancel flex-1 flex-center flex-column",
                          id: "ANAY",
                          onClick: function () {
                            return o(!1);
                          },
                          children: [
                            (0, z.tZ)(S.Text, {
                              className: "b-tit",
                              children: "不接受",
                            }),
                            (0, z.tZ)(S.Text, {
                              className: "b-desc",
                              children: "占座失败取消订单",
                            }),
                          ],
                        }),
                        (0, z.BX)(S.Button, {
                          className:
                            "btn btn-confirm flex-1 flex-center flex-column",
                          id: "ANAZ",
                          onClick: l,
                          children: [
                            (0, z.tZ)(S.Text, {
                              className: "b-tit",
                              children: "接受",
                            }),
                            (0, z.tZ)(S.Text, {
                              className: "b-desc",
                              children: "占座失败退还费用",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              });
            }),
            Ue =
              (0, w.h)()(
                (Me = (function (e) {
                  (0, h.Z)(i, e);
                  var t = (0, f.Z)(i);
                  function i() {
                    var e;
                    (0, c.Z)(this, i);
                    for (
                      var a = arguments.length, r = new Array(a), n = 0;
                      n < a;
                      n++
                    )
                      r[n] = arguments[n];
                    return (
                      (e = t.call.apply(t, [this].concat(r))),
                      (0, p.Z)((0, u.Z)(e), "state", {
                        priceDetailDialogVisible: !1,
                        tripDetailDialogVisible: !1,
                        createOrderProcessDialogVisible: !1,
                        selectedPasList: [],
                        freeChildren: [],
                        convertStu: !1,
                        tripDetail: {},
                        priceDetail: {},
                        phoneNum: N.ZP.userName,
                        processRate: 10,
                        ticketOffsetTime: 0,
                        duplicateOrderInterceptDialogVisible: !1,
                        duplicateOrderData: null,
                        cashBackInfo: {},
                        cashBackPrice: null,
                        isCombine: !1,
                        canChooseSeatArray: [],
                        selectedSeatsArray: [],
                        isShowRobAdviceModal: !1,
                        robAdviceModel: {},
                        hasRobAdviceActive: !1,
                        originFromStationInfo: {},
                        originToStationInfo: {},
                        isShowNightProductDialog: !1,
                        processProduct: null,
                        useVipBerth: !0,
                        openVipBerthTicketTitle: "",
                        selectedProductFromXPage: null,
                        otherPriceDetails: null,
                        isShowInterceptDrawer: !1,
                        preInterceptDrawerInfo: null,
                        manualBuyTicketProduct: null,
                        chooseSeatDiscountList: [],
                        seatPicDescInfo: null,
                        isShowSeatPicDescDrawer: !1,
                        isShowSeatTransfersTipsDrawer: !1,
                        curChooseProductInfo: "",
                        isDelayProtection: !1,
                        pasCountConfig: 5,
                      }),
                      (0, p.Z)(
                        (0, u.Z)(e),
                        "pageId",
                        Z.default.isTieyou ? "10650060081" : "10650060079"
                      ),
                      (0, p.Z)((0, u.Z)(e), "getXproductForBook", function () {
                        var t = e.state,
                          i = t.tripDetail,
                          a = t.selectedPasList,
                          r = (null == i ? void 0 : i.details) || [],
                          n = e.getXProductParams();
                        (0, b.jN)(n)
                          .then(function (t) {
                            if (1 === (null == t ? void 0 : t.resultCode)) {
                              var n,
                                o,
                                s,
                                c = (0, l.Z)(
                                  {},
                                  (null == t ||
                                  null === (n = t.nightEledeliveryInfo) ||
                                  void 0 === n
                                    ? void 0
                                    : n.nightEledeliveryToast) || {}
                                );
                              null != t &&
                                null !== (o = t.nightEledeliveryInfo) &&
                                void 0 !== o &&
                                o.lineExtraData &&
                                (c.lineExtraData =
                                  t.nightEledeliveryInfo.lineExtraData);
                              var d =
                                (null == t ||
                                null === (s = t.seatInfo) ||
                                void 0 === s
                                  ? void 0
                                  : s.chooseSeatList) || [];
                              if ((null == d ? void 0 : d.length) > 0) {
                                var u,
                                  h,
                                  f = d.some(function (e) {
                                    var t;
                                    return null == e ||
                                      null === (t = e.elecTicketResult) ||
                                      void 0 === t
                                      ? void 0
                                      : t.isMemFree;
                                  }),
                                  p = f
                                    ? (null == t ||
                                      null === (u = t.seatInfo) ||
                                      void 0 === u
                                        ? void 0
                                        : u.titleDesc) ||
                                      '<font color="#D47D42">铂金会员·</font>剩<font color="#D47D42">4次免费</font>选择铺席权益'
                                    : "",
                                  m = (0, W.zH)(a, "卧铺选座"),
                                  v = (0, W.I8)(r);
                                d.forEach(function (e) {
                                  if (null != e && e.elecTicketResult) {
                                    var t,
                                      i,
                                      a,
                                      r,
                                      n,
                                      o,
                                      s =
                                        1 ===
                                        (null ===
                                          (t =
                                            e.elecTicketResult
                                              .appointSeatInfo) || void 0 === t
                                          ? void 0
                                          : t.appointSeatFor12306),
                                      c =
                                        (null ===
                                          (i =
                                            e.elecTicketResult
                                              .appointSeatInfo) || void 0 === i
                                          ? void 0
                                          : i.seatInfoList) || [],
                                      d = c.map(function (e, t) {
                                        return {
                                          seatName: e.seatName,
                                          seatCode: e.seatCode,
                                          priceDesc: e.priceDesc,
                                          price: e.price,
                                          successRate: e.successRate,
                                          amount:
                                            !f ||
                                            t !==
                                              (null == c ? void 0 : c.length) -
                                                1 ||
                                            m ||
                                            s
                                              ? 0
                                              : 1,
                                          bizTreasureInfo: e.bizTreasureInfo,
                                        };
                                      });
                                    v[e.tripIndex - 1].train.berthTicket = {
                                      seatList: d,
                                      acceptAnother: !1,
                                      detailToast:
                                        e.elecTicketResult.appointSeatInfo
                                          .detailToast,
                                      isNeedShowSeatTips: e.isNeedShowSeatTips,
                                      hasShowSeatTransfersTips: !1,
                                      productCode:
                                        e.elecTicketResult.productCode,
                                      xProductName: e.xProductName,
                                      appointSeatFor12306:
                                        null ===
                                          (a =
                                            e.elecTicketResult
                                              .appointSeatInfo) || void 0 === a
                                          ? void 0
                                          : a.appointSeatFor12306,
                                      acceptOtherSeatDesc:
                                        null ===
                                          (r =
                                            e.elecTicketResult
                                              .appointSeatInfo) || void 0 === r
                                          ? void 0
                                          : r.acceptOtherSeatDesc,
                                      isFreeFor12306: s,
                                      isMemFree: e.elecTicketResult.isMemFree,
                                      vipCode:
                                        (null === (n = e.memberShipBagInfo) ||
                                        void 0 === n ||
                                        null ===
                                          (o = n.vipSpecifySeatProduct) ||
                                        void 0 === o
                                          ? void 0
                                          : o.code) || "",
                                    };
                                  }
                                  null != e &&
                                    e.assignCarriageInfo &&
                                    (v[
                                      e.tripIndex - 1
                                    ].train.assignCarriageInfo = (0, l.Z)(
                                      (0, l.Z)({}, e.assignCarriageInfo),
                                      {},
                                      { xProductName: e.xProductName }
                                    )),
                                    null != e &&
                                      e.manualSelectSeatInfo &&
                                      (v[
                                        e.tripIndex - 1
                                      ].train.manualSelectSeatInfo = (0, l.Z)(
                                        (0, l.Z)({}, e.manualSelectSeatInfo),
                                        {},
                                        {
                                          xProductName: e.xProductName,
                                          isNeedShowSeatTips:
                                            e.isNeedShowSeatTips,
                                          hasShowSeatTransfersTips: !1,
                                        }
                                      ));
                                });
                                var g = (0, W.I8)(
                                  t.seatInfo.specifyIconDescription
                                );
                                g &&
                                  v.forEach(function (e) {
                                    var t = (0, W.MW)(e);
                                    if (
                                      "T" === (null == e ? void 0 : e.tripType)
                                    ) {
                                      var i, a, r, n, o, s;
                                      if (
                                        2 ===
                                        (null === (i = t.berthTicket) ||
                                        void 0 === i ||
                                        null === (a = i.seatList) ||
                                        void 0 === a
                                          ? void 0
                                          : a.length)
                                      )
                                        return void (g.defaultPicItem =
                                          "指定上下铺");
                                      if (
                                        3 ===
                                        (null === (r = t.berthTicket) ||
                                        void 0 === r ||
                                        null === (n = r.seatList) ||
                                        void 0 === n
                                          ? void 0
                                          : n.length)
                                      )
                                        return void (g.defaultPicItem =
                                          "指定上中下铺");
                                      if (
                                        null !== (o = t.manualSelectSeatInfo) &&
                                        void 0 !== o &&
                                        o.single
                                      )
                                        return void (g.defaultPicItem =
                                          "指定靠窗/过道");
                                      if (
                                        null !== (s = t.manualSelectSeatInfo) &&
                                        void 0 !== s &&
                                        s.many
                                      )
                                        return void (g.defaultPicItem =
                                          "多人连座");
                                      if (t.assignCarriageInfo)
                                        return void (g.defaultPicItem =
                                          "指定车厢");
                                    }
                                  }),
                                  e.setState({
                                    nightTicketProduct: c,
                                    hasVipDiscount: f,
                                    openVipBerthTicketTitle: p,
                                    tripDetail: (0, l.Z)(
                                      (0, l.Z)({}, i),
                                      {},
                                      { details: v }
                                    ),
                                    chooseSeatDiscountList:
                                      null === (h = t.seatInfo) || void 0 === h
                                        ? void 0
                                        : h.combinationSeatList,
                                    seatPicDescInfo: g,
                                  });
                              } else e.setState({ nightTicketProduct: c });
                            } else e.setState({ nightTicketProduct: null });
                          })
                          .catch(function (e) {
                            return console.log(e);
                          });
                      }),
                      (0, p.Z)((0, u.Z)(e), "getXProductParams", function () {
                        var t = e.state,
                          i = t.tripDetail,
                          a = t.login12306Name,
                          r = t.selectedProductFromXPage,
                          n = (null == i ? void 0 : i.tripId) || "",
                          o = I.ZP.encode12306Account({ login12306Name: a }),
                          s = {
                            tripInfos: e.getXProductCommonParams(),
                            additionInfo: {
                              account12306:
                                null == o ? void 0 : o.login12306Name,
                              tripId: n,
                            },
                            versionNumber: 1,
                          },
                          l = [];
                        if (C.Z.isNotEmptyObj(r)) {
                          var c = r.productCode,
                            d = r.productPrice,
                            u = r.vipCardInfo,
                            h = { productCode: c, productPrice: d };
                          u && (h.vipCardInfo = u), l.push(h);
                        }
                        return (
                          l.length > 0 &&
                            (s.productSelectedInfo = {
                              productBaseInfoList: l,
                            }),
                          s
                        );
                      }),
                      (0, p.Z)((0, u.Z)(e), "dealCachePassengers", function () {
                        try {
                          var t,
                            i,
                            a = g().getStorageSync(
                              "".concat(M.fK, "_").concat(N.ZP.uid)
                            );
                          console.log("cache passenger value:", a);
                          var r,
                            n,
                            o,
                            s,
                            l = e.state.tripDetail;
                          if ((0, W.ti)(null == l ? void 0 : l.details))
                            ((null === (r = a) || void 0 === r
                              ? void 0
                              : r.length) || 0) !==
                              (null ===
                                (o = a =
                                  null === (n = a) || void 0 === n
                                    ? void 0
                                    : n.filter(function (e) {
                                        return 3 !== e.PassengerType;
                                      })) || void 0 === o
                                ? void 0
                                : o.length) &&
                              g().setStorageSync(
                                "".concat(M.fK, "_").concat(N.ZP.uid),
                                a
                              );
                          (null === (t = a) || void 0 === t
                            ? void 0
                            : t.length) > M.tt && (a = a.slice(0, M.tt)),
                            (0, W.VL)(null == l ? void 0 : l.details) &&
                              (a =
                                null === (s = a) || void 0 === s
                                  ? void 0
                                  : s.filter(function (t) {
                                      return e.checkPasInfoValidation(t);
                                    })),
                            null !== (i = a) &&
                              void 0 !== i &&
                              i.length &&
                              e.setState({ selectedPasList: a }, function () {
                                e.getXproductForBook();
                              });
                        } catch (e) {
                          console.log(
                            "cache passenger error:",
                            null == e ? void 0 : e.message
                          );
                        }
                      }),
                      (0, p.Z)(
                        (0, u.Z)(e),
                        "toggleCreateOrderProcessDialogVisible",
                        function () {
                          var t =
                              arguments.length > 0 &&
                              void 0 !== arguments[0] &&
                              arguments[0],
                            i =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : "",
                            a = e.state,
                            r = a.createOrderProcessDialogVisible,
                            n = a.robAdviceModel;
                          e.setState({
                            createOrderProcessDialogVisible: t,
                            robAdviceModel: r ? {} : n,
                            orderNumber: i,
                          });
                        }
                      ),
                      (0, p.Z)((0, u.Z)(e), "getProductListParam", function () {
                        var t = [],
                          i = e.state,
                          a = i.nightTicketProduct,
                          r = i.selectedPasList,
                          n = i.selectedProductFromXPage,
                          o = i.tripDetail,
                          s = i.manualBuyTicketProduct;
                        if (
                          (null != a &&
                            a.selected &&
                            (null == r ||
                              r.forEach(function (e) {
                                t.push({
                                  code: null == a ? void 0 : a.productCode,
                                  count: 1,
                                  price: null == a ? void 0 : a.productPrice,
                                  cardNo:
                                    (null == e ? void 0 : e.IdentityNo) || "",
                                  pageFrom: 2005,
                                  productShowName: a.productName,
                                  productExtraData: {
                                    lineExtraData: a.lineExtraData,
                                  },
                                });
                              })),
                          !(0, W.Qr)(n))
                        )
                          if (n.productCode === M.V_) {
                            var l = null == n ? void 0 : n.vipCardInfo,
                              c = l.vipCardCode,
                              d = l.unionVipCode,
                              u = l.vipCardType,
                              h = l.discountPrice;
                            t.push({
                              code: null == n ? void 0 : n.productCode,
                              count: 1,
                              price: null == n ? void 0 : n.productPrice,
                              productExtraData: {
                                vipCardCode: c,
                                unionVipCode: d,
                                vipCardType: u,
                                vipFree: 0,
                                discountPrice: h,
                                lineExtraData: n.lineExtraData,
                                complexExtraData: n.complexExtraData,
                              },
                              pageFrom: 1001,
                              productShowName: n.productName,
                              treasureInfo: n.treasureInfo,
                            });
                          } else
                            null == r ||
                              r.forEach(function (e) {
                                t.push({
                                  code: null == n ? void 0 : n.productCode,
                                  count: 1,
                                  price: null == n ? void 0 : n.productPrice,
                                  cardNo:
                                    (null == e ? void 0 : e.IdentityNo) || "",
                                  productExtraData: {
                                    lineExtraData: n.lineExtraData,
                                    complexExtraData: n.complexExtraData,
                                  },
                                  pageFrom: 1001,
                                  productShowName: n.productName,
                                  treasureInfo: n.treasureInfo,
                                });
                              });
                        var f = o.details;
                        return (
                          (0, W.ti)(f) &&
                            (null == f ||
                              f.forEach(function (i, a) {
                                if ("T" === i.tripType) {
                                  var n,
                                    o,
                                    s,
                                    l = (0, W.MW)(i);
                                  if (
                                    (null == l ||
                                    null === (n = l.berthTicket) ||
                                    void 0 === n ||
                                    null === (o = n.seatList) ||
                                    void 0 === o
                                      ? void 0
                                      : o.length) > 0
                                  ) {
                                    var c = l.berthTicket,
                                      d = l.berthTicket.seatList.filter(
                                        function (e) {
                                          return (
                                            (null == e ? void 0 : e.amount) > 0
                                          );
                                        }
                                      );
                                    null == d ||
                                      d.forEach(function (i) {
                                        var r = [
                                          e.getProductLineExtraData(
                                            a,
                                            "beth",
                                            i,
                                            c
                                          ),
                                        ];
                                        t.push({
                                          code:
                                            c.isMemFree && !c.isFreeFor12306
                                              ? c.vipCode
                                              : c.productCode,
                                          count: i.amount,
                                          price: i.price,
                                          productExtraData: {
                                            lineExtraData: JSON.stringify(r),
                                          },
                                          pageFrom: 2007,
                                          productShowName: c.xProductName,
                                        });
                                      });
                                  }
                                  var u =
                                    null == l ? void 0 : l.assignCarriageInfo;
                                  if (
                                    (null == u ||
                                    null === (s = u.selectedCarriages) ||
                                    void 0 === s
                                      ? void 0
                                      : s.length) > 0
                                  ) {
                                    var h = [
                                      e.getProductLineExtraData(
                                        a,
                                        "carriage",
                                        u
                                      ),
                                    ];
                                    t.push({
                                      code: u.productCode,
                                      count: r.length,
                                      price: u.price,
                                      productExtraData: {
                                        lineExtraData: JSON.stringify(h),
                                      },
                                      pageFrom: 2007,
                                      productShowName: u.xProductName,
                                    });
                                  }
                                  var f =
                                    null == l ? void 0 : l.manualSelectSeatInfo;
                                  if (!(0, W.Qr)(f)) {
                                    var p = (0, W.e$)(r, f);
                                    null == p ||
                                      p.forEach(function (i) {
                                        if (i.isSelected) {
                                          var n = [
                                            e.getProductLineExtraData(
                                              a,
                                              "specialSeat",
                                              i,
                                              f
                                            ),
                                          ];
                                          t.push({
                                            code: f.productCode,
                                            count: r.length,
                                            price: f.price,
                                            productExtraData: {
                                              lineExtraData: JSON.stringify(n),
                                            },
                                            pageFrom: 2007,
                                            productShowName: f.xProductName,
                                          });
                                        }
                                      });
                                  }
                                }
                              })),
                          C.Z.isNotEmptyObj(s) &&
                            t.push({
                              code: s.productCode,
                              count: 1,
                              price: s.productPrice,
                              productExtraData: {
                                lineExtraData: s.lineExtraData,
                              },
                              pageFrom: 2008,
                              productShowName: s.authTitle,
                            }),
                          t
                        );
                      }),
                      (0, p.Z)((0, u.Z)(e), "showProcessProduct", function (t) {
                        e.setState({
                          processProduct:
                            (null == t ? void 0 : t.productMsg) || null,
                          visibleProcessProduct: !(null == t || !t.productMsg),
                        });
                      }),
                      (0, p.Z)((0, u.Z)(e), "bookBtnClick", function () {
                        var t = e.state,
                          i = t.nightTicketProduct,
                          a = t.isShowRobAdviceModal;
                        (0, W.Sn)((0, u.Z)(e), "185871"),
                          e.setState({
                            priceDetailDialogVisible: !1,
                            tripDetailDialogVisible: !1,
                          }),
                          e.isValidParams() &&
                            (e.doUbtTraceWithBookBtn(),
                            a
                              ? e.onCreateOrder()
                              : C.Z.isNotEmptyObj(i)
                              ? (e.setState({ isShowNightProductDialog: !0 }),
                                e.ubtTrace("219259", { PageCode: e.pageId }))
                              : e.onCreateOrder());
                      }),
                      (0, p.Z)((0, u.Z)(e), "selectRobAdvice", function (t) {
                        var i = t.robAdviceModel;
                        e.setState({ robAdviceModel: i });
                      }),
                      (0, p.Z)((0, u.Z)(e), "closeRobAdviceModal", function () {
                        e.setState({
                          isShowRobAdviceModal: !1,
                          robAdviceModel: {},
                        });
                      }),
                      (0, p.Z)((0, u.Z)(e), "chooseNightProduct", function () {
                        var t =
                            arguments.length > 0 &&
                            void 0 !== arguments[0] &&
                            arguments[0],
                          i = e.state.nightTicketProduct,
                          a = void 0 === i ? {} : i;
                        (a.selected = t),
                          e.setState(
                            {
                              isShowNightProductDialog: !1,
                              nightTicketProduct: a,
                            },
                            function () {
                              e.onCreateOrder();
                            }
                          ),
                          e.ubtTrace(t ? "219353" : "219261", {
                            PageCode: e.pageId,
                          });
                      }),
                      (0, p.Z)(
                        (0, u.Z)(e),
                        "getGrabTicketAlternativeTrain",
                        function () {
                          return new Promise(
                            (function () {
                              var t = (0, s.Z)(
                                (0, o.Z)().mark(function t(i) {
                                  var a, r, n, s, c, d, u, h, f, p;
                                  return (0, o.Z)().wrap(
                                    function (t) {
                                      for (;;)
                                        switch ((t.prev = t.next)) {
                                          case 0:
                                            if (
                                              ((a = {
                                                isShowRobAdviceModal: !1,
                                                robAdviceModel: {},
                                              }),
                                              (r = e.state),
                                              (n = r.tripDetail),
                                              (s = r.hasRobAdviceActive),
                                              (c = void 0 !== s && s),
                                              !(0, W.XR)(
                                                null == n ? void 0 : n.details
                                              ) || c)
                                            ) {
                                              t.next = 18;
                                              break;
                                            }
                                            return (
                                              (t.prev = 4),
                                              (u =
                                                e.grabTicketAlternativeTrainParams()),
                                              (t.next = 8),
                                              (0, b.GZ)({
                                                alterNativeTrainTripInfo: u,
                                              })
                                            );
                                          case 8:
                                            1 ===
                                              (null == (h = t.sent)
                                                ? void 0
                                                : h.resultCode) &&
                                            (null == h ||
                                            null ===
                                              (d = h.grabTicketTrainInfoList) ||
                                            void 0 === d
                                              ? void 0
                                              : d.length) > 0
                                              ? ((p =
                                                  null == h ||
                                                  null ===
                                                    (f =
                                                      h.grabTicketTrainInfoList) ||
                                                  void 0 === f
                                                    ? void 0
                                                    : f.find(function (e) {
                                                        return (
                                                          (null == e
                                                            ? void 0
                                                            : e.tripIndex) ===
                                                          (null == u
                                                            ? void 0
                                                            : u.robIndex) +
                                                            1
                                                        );
                                                      })),
                                                C.Z.isEmptyObject(p)
                                                  ? (e.setState(
                                                      (0, l.Z)({}, a)
                                                    ),
                                                    i(!1))
                                                  : (e.setState({
                                                      isShowRobAdviceModal: !0,
                                                      robAdviceModel: {
                                                        robIndex:
                                                          null == u
                                                            ? void 0
                                                            : u.robIndex,
                                                        titleInfo:
                                                          null == p
                                                            ? void 0
                                                            : p.alternativeTitleInfo,
                                                        seatInfo:
                                                          null == p
                                                            ? void 0
                                                            : p.alternativeSeatInfo,
                                                        trainInfo:
                                                          null == p
                                                            ? void 0
                                                            : p.alternativeTrainInfo,
                                                      },
                                                      hasRobAdviceActive: !0,
                                                    }),
                                                    i(!0)))
                                              : (e.setState((0, l.Z)({}, a)),
                                                i(!1)),
                                              (t.next = 16);
                                            break;
                                          case 12:
                                            (t.prev = 12),
                                              (t.t0 = t.catch(4)),
                                              e.setState((0, l.Z)({}, a)),
                                              i(!1);
                                          case 16:
                                            t.next = 19;
                                            break;
                                          case 18:
                                            i(!1);
                                          case 19:
                                          case "end":
                                            return t.stop();
                                        }
                                    },
                                    t,
                                    null,
                                    [[4, 12]]
                                  );
                                })
                              );
                              return function (e) {
                                return t.apply(this, arguments);
                              };
                            })()
                          );
                        }
                      ),
                      (0, p.Z)(
                        (0, u.Z)(e),
                        "grabTicketAlternativeTrainParams",
                        function () {
                          var t = e.state.tripDetail,
                            i = (void 0 === t ? {} : t).details,
                            a = void 0 === i ? [] : i,
                            r = [];
                          return C.Z.notEmptyArray(a)
                            ? (a.forEach(function (e, t) {
                                var i = (0, W.MW)(e);
                                if ("T" === (null == e ? void 0 : e.tripType)) {
                                  var a,
                                    n,
                                    o = (0, W.$7)(e);
                                  o && (r.robIndex = t);
                                  var s = [];
                                  null == i ||
                                    null === (a = i.seats) ||
                                    void 0 === a ||
                                    a.forEach(function (e) {
                                      var t,
                                        a,
                                        r = Number(
                                          null == e ? void 0 : e.ticketLeft
                                        );
                                      Number.isNaN(r) && (r = 99),
                                        r < 0 && (r = 0),
                                        (null != e && e.isSmartSeat) ||
                                          s.push({
                                            seatName:
                                              null == e ? void 0 : e.seatName,
                                            ztCode:
                                              null == e ? void 0 : e.ztcode,
                                            selected:
                                              (null == e
                                                ? void 0
                                                : e.seatName) ===
                                                (null == i ||
                                                null === (t = i.selectSeat) ||
                                                void 0 === t
                                                  ? void 0
                                                  : t.seatName) ||
                                              (null == e
                                                ? void 0
                                                : e.ztcode) ===
                                                (null == i ||
                                                null === (a = i.selectSeat) ||
                                                void 0 === a
                                                  ? void 0
                                                  : a.ztcode),
                                            price: null == e ? void 0 : e.price,
                                            ticketLeft: r,
                                          });
                                    }),
                                    null != i &&
                                      null !== (n = i.selectSeat) &&
                                      void 0 !== n &&
                                      n.isSmartSeat &&
                                      (o = !1),
                                    r.push({
                                      fromStationName:
                                        null == i ? void 0 : i.fromStation,
                                      fromCode: null == i ? void 0 : i.fromCode,
                                      toStationName:
                                        null == i ? void 0 : i.toStation,
                                      toCode: null == i ? void 0 : i.toCode,
                                      trainNo: null == i ? void 0 : i.trainNo,
                                      startTime:
                                        null == i ? void 0 : i.startTime,
                                      arriveTime:
                                        null == i ? void 0 : i.arriveTime,
                                      startDate:
                                        null == i ? void 0 : i.startDate,
                                      arriveDate:
                                        null == i ? void 0 : i.arriveDate,
                                      trainGrab: o,
                                      seatInfoList: s,
                                      tripIndex: t + 1,
                                    });
                                }
                              }),
                              r)
                            : r;
                        }
                      ),
                      (0, p.Z)((0, u.Z)(e), "onUpdateOrder", function (t) {
                        var i = e.state,
                          a = i.orderNumber,
                          r = i.login12306Name,
                          n = i.processProduct,
                          o = I.ZP.encode12306Account({ login12306Name: r }),
                          s = [];
                        t &&
                          s.push({
                            actionType: 1,
                            stProduct: {
                              code: null == t ? void 0 : t.productCode,
                              count: 1,
                              price: null == t ? void 0 : t.productPrice,
                              pageFrom: 2006,
                            },
                            productionLineExtraData: {
                              lineExtraData: t.lineExtraData,
                            },
                          });
                        var l = {
                          orderNumber: a,
                          products: s,
                          extraInfos: {
                            account12306: null == o ? void 0 : o.login12306Name,
                          },
                        };
                        (0, b.pj)(l)
                          .then(function (t) {
                            1 === (null == t ? void 0 : t.resultCode) &&
                              (2 ===
                              (null == n
                                ? void 0
                                : n.afterUpdateOrderOperateType)
                                ? (e.toggleCreateOrderProcessDialogVisible(!1),
                                  e.routeOrderDetail(a),
                                  (e.hasGoToOrder = !0))
                                : e.setState({ visibleProcessProduct: !1 }));
                          })
                          .catch(function (e) {
                            return console.log(e);
                          });
                      }),
                      (0, p.Z)(
                        (0, u.Z)(e),
                        "showSelectSeatDetail",
                        function (t) {
                          var i;
                          e.showCommonDialog({
                            title: (null == t ? void 0 : t.title) || "温馨提示",
                            content:
                              null == t ||
                              null === (i = t.content) ||
                              void 0 === i
                                ? void 0
                                : i
                                    .replace(/\\n/g, "<br />")
                                    .replace(/\n/g, "<br />"),
                            buttonName:
                              (null == t ? void 0 : t.button) || "好的",
                            className: "smart-book-seat-detail-pop",
                          });
                        }
                      ),
                      (0, p.Z)((0, u.Z)(e), "onUseVipBerth", function (t) {
                        e.setState({ useVipBerth: t });
                      }),
                      (0, p.Z)(
                        (0, u.Z)(e),
                        "checkPreIntercept",
                        (function () {
                          var t = (0, s.Z)(
                            (0, o.Z)().mark(function t(i) {
                              var a, r, n, s, c, d, u, h, f, p, m;
                              return (0, o.Z)().wrap(function (t) {
                                for (;;)
                                  switch ((t.prev = t.next)) {
                                    case 0:
                                      return (
                                        (a = !0),
                                        (t.next = 3),
                                        e.getPreInterceptInfo(i)
                                      );
                                    case 3:
                                      return (
                                        (r = t.sent)
                                          ? ((s =
                                              (null ===
                                                (n = e.state.tripDetail) ||
                                              void 0 === n
                                                ? void 0
                                                : n.details) || []),
                                            i.includes(4) &&
                                              ((c = 10),
                                              s.every(function (e) {
                                                var t,
                                                  i,
                                                  a = (0, W.MW)(e);
                                                return (
                                                  !!(
                                                    "T" !== e.tripType ||
                                                    (null != a &&
                                                      a.onlyShowFlag)
                                                  ) ||
                                                  ((c = Math.min(
                                                    c,
                                                    null == a ||
                                                      null ===
                                                        (t = a.selectSeat) ||
                                                      void 0 === t
                                                      ? void 0
                                                      : t.ticketLeft
                                                  )),
                                                  (null == a ||
                                                  null === (i = a.selectSeat) ||
                                                  void 0 === i
                                                    ? void 0
                                                    : i.ticketLeft) > 10)
                                                );
                                              }) ||
                                                (null == r ||
                                                  null ===
                                                    (d = r.tripPagePopupData) ||
                                                  void 0 === d ||
                                                  null ===
                                                    (u = d.popupProducts) ||
                                                  void 0 === u ||
                                                  u.forEach(function (e) {
                                                    3 ===
                                                      (null == e
                                                        ? void 0
                                                        : e.type) &&
                                                      (e.subTitle =
                                                        "当前余票仅剩".concat(
                                                          c > 0 ? c : 10,
                                                          "张，建议人工加急出票"
                                                        ));
                                                  }),
                                                null == r ||
                                                  null ===
                                                    (h = r.tripPagePopupData) ||
                                                  void 0 === h ||
                                                  h.popupProducts.reverse())),
                                            (f = []),
                                            null == s ||
                                              s.forEach(function (e) {
                                                "T" ===
                                                  (null == e
                                                    ? void 0
                                                    : e.tripType) &&
                                                  (0, W.$7)(e) &&
                                                  f.push(e);
                                              }),
                                            (null == s ? void 0 : s.length) ===
                                              f.length &&
                                              (r.tripPagePopupData = (0, l.Z)(
                                                (0, l.Z)(
                                                  {},
                                                  r.tripPagePopupData
                                                ),
                                                {},
                                                {
                                                  popupProducts:
                                                    null ===
                                                      (p =
                                                        r.tripPagePopupData) ||
                                                    void 0 === p ||
                                                    null ===
                                                      (m = p.popupProducts) ||
                                                    void 0 === m
                                                      ? void 0
                                                      : m.filter(function (e) {
                                                          return 3 !== e.type;
                                                        }),
                                                }
                                              )),
                                            e.handlePreInterceptInfo(r),
                                            (a = !1))
                                          : i.includes(6) &&
                                            ((0, T.showToast)(
                                              "今日已取消三次，购票次数达上限"
                                            ),
                                            (a = !1)),
                                        t.abrupt("return", a)
                                      );
                                    case 6:
                                    case "end":
                                      return t.stop();
                                  }
                              }, t);
                            })
                          );
                          return function (e) {
                            return t.apply(this, arguments);
                          };
                        })()
                      ),
                      e
                    );
                  }
                  return (
                    (0, d.Z)(i, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          var e = this,
                            t = (0, v.getCurrentInstance)().router.params.data;
                          if (t) {
                            console.log("booking data:", t);
                            var i = t.details,
                              a = t.transferInfo,
                              r = t.fromNearByFlag,
                              n = t.toNearByFlag,
                              o = t.tripId,
                              s = t.isCombine,
                              c = t.subTrainTripType,
                              d = t.originFromStationInfo,
                              u = t.originToStationInfo,
                              h = t.selectedProduct;
                            this.setState(
                              {
                                tripDetail: (0, l.Z)(
                                  (0, l.Z)({}, t),
                                  {},
                                  {
                                    details: i,
                                    transferInfo: a,
                                    fromNearByFlag: r,
                                    toNearByFlag: n,
                                    tripId: o,
                                    subTrainTripType: c,
                                    originFromStation:
                                      (null == d
                                        ? void 0
                                        : d.originFromStation) || "",
                                    originToStation:
                                      (null == u
                                        ? void 0
                                        : u.originToStation) || "",
                                  }
                                ),
                                originFromStationInfo: d,
                                originToStationInfo: u,
                                isCombine: s,
                                selectedProductFromXPage: h,
                              },
                              function () {
                                e.initChooseSeatInfo(), e.dealCachePassengers();
                              }
                            ),
                              this.getNewUserGiftsInfo(i),
                              x.CZ.call(this),
                              this.getConfigInfo();
                          } else (0, T.showToast)("数据异常，请重新进入");
                        },
                      },
                      {
                        key: "componentWillUnmount",
                        value: function () {
                          clearTimeout(this.checkOrderProcessTimer),
                            clearInterval(this.processRateInterval),
                            this.getXProductTimer &&
                              clearTimeout(this.getXProductTimer),
                            this.setState({ processRate: 10 });
                        },
                      },
                      {
                        key: "componentDidShow",
                        value: function () {
                          this.needRefreshXProduct &&
                            (this.getXproductForBook(),
                            (this.needRefreshXProduct = !1));
                        },
                      },
                      {
                        key: "getNewUserGiftsInfo",
                        value: (function () {
                          var e = (0, s.Z)(
                            (0, o.Z)().mark(function e(t) {
                              var i,
                                a,
                                r = this;
                              return (0, o.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (e.prev = 0),
                                          (i = []),
                                          t.forEach(function (e) {
                                            i.push(e.tripType);
                                          }),
                                          (i = (0, n.Z)(new Set(i)).map(
                                            function (e) {
                                              return { tripType: e };
                                            }
                                          )),
                                          (e.next = 6),
                                          (0, b.Wv)(
                                            { tripInfos: i },
                                            {
                                              loginCB: function () {
                                                r.dealCachePassengers();
                                              },
                                            }
                                          )
                                        );
                                      case 6:
                                        1 === (a = e.sent).resultCode &&
                                          a.cashBackInfo &&
                                          a.cashBackPrice &&
                                          this.setState({
                                            cashBackInfo: a.cashBackInfo,
                                            cashBackPrice: a.cashBackPrice,
                                          }),
                                          (e.next = 13);
                                        break;
                                      case 10:
                                        (e.prev = 10),
                                          (e.t0 = e.catch(0)),
                                          console.log(e.t0);
                                      case 13:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[0, 10]]
                              );
                            })
                          );
                          return function (t) {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "checkPasInfoValidation",
                        value: function (e) {
                          var t, i, a;
                          if (!(null == e ? void 0 : e.CNName)) return !1;
                          if (null == e || !e.Birthday) return !1;
                          if (null == e || !e.IdentityNo) return !1;
                          var r =
                            -1 !==
                            ["2", "7", "8"].indexOf(
                              null == e ||
                                null === (t = e.idcard) ||
                                void 0 === t
                                ? void 0
                                : t.type
                            );
                          return !(
                            (r && (null == e || !e.CardTimeLimit)) ||
                            (r && (null == e || !e.Gender)) ||
                            !(
                              "2" !==
                                (null == e ||
                                null === (i = e.idcard) ||
                                void 0 === i
                                  ? void 0
                                  : i.type) ||
                              (null != e && e.Nationality)
                            ) ||
                            !(
                              "2" !==
                                (null == e ||
                                null === (a = e.idcard) ||
                                void 0 === a
                                  ? void 0
                                  : a.type) ||
                              (null != e && e.IssueAt)
                            ) ||
                            null == e ||
                            !e.Mobile
                          );
                        },
                      },
                      {
                        key: "onRoutePassengerList",
                        value: function () {
                          var e,
                            t = this,
                            i = this.state,
                            a = i.selectedPasList,
                            r = i.tripDetail,
                            o = i.freeChildren,
                            s = i.pasCountConfig,
                            l = (0, W.ti)(r.details),
                            c = "",
                            d =
                              (null === (e = r.details) || void 0 === e
                                ? void 0
                                : e.filter(function (e) {
                                    return "F" === e.tripType;
                                  })) || [];
                          if (d.length > 0) {
                            var u = d[d.length - 1];
                            c = (0, W.MW)(u).startDate;
                          }
                          var h = {
                              selectedPasList: [].concat(
                                (0, n.Z)(a),
                                (0, n.Z)(o)
                              ),
                              fromPage: "smart",
                              useUpper12306Text: "",
                              passengerCountConfig: s,
                              useNew12306H5: !0,
                              gotoH5PageSwitchOn: l,
                              hasFlightTrip: (0, W.VL)(r.details),
                              lastTripDepartDate: c,
                            },
                            f = (0, W.S)(
                              null == r ? void 0 : r.details,
                              "startDate"
                            ),
                            p = I.ZP.is2023NewRule4Kids(f) ? "1" : "";
                          this.navigateTo({
                            url: ""
                              .concat(
                                I.ZP.getTrainPsgListUrl(),
                                "?isJianLou=1&is2023NewRule4Kids="
                              )
                              .concat(p),
                            data: h,
                            callback: function (e) {
                              if (
                                (console.log("res", e), C.Z.isNotEmptyObj(e))
                              ) {
                                var i,
                                  a = e.selectedPasList,
                                  n = e.freeChildren,
                                  o = !1;
                                null == r ||
                                  null === (i = r.details) ||
                                  void 0 === i ||
                                  i.forEach(function (e) {
                                    if (
                                      "T" === (null == e ? void 0 : e.tripType)
                                    ) {
                                      var t,
                                        i,
                                        r,
                                        n,
                                        s,
                                        l,
                                        c = (0, W.MW)(e);
                                      null != c &&
                                        c.berthTicket &&
                                        ((o = !0),
                                        null === (t = c.berthTicket) ||
                                          void 0 === t ||
                                          null === (i = t.seatList) ||
                                          void 0 === i ||
                                          i.forEach(function (e) {
                                            e.amount = 0;
                                          }),
                                        (c.berthTicket.acceptAnother = !1)),
                                        null != c &&
                                          c.assignCarriageInfo &&
                                          (c.assignCarriageInfo.selectedCarriages =
                                            []),
                                        null != c &&
                                          c.manualSelectSeatInfo &&
                                          (1 === a.length || a.length > 2
                                            ? null ===
                                                (r = c.manualSelectSeatInfo) ||
                                              void 0 === r ||
                                              null === (n = r.single) ||
                                              void 0 === n ||
                                              n.forEach(function (e) {
                                                e.isSelected = !1;
                                              })
                                            : null ===
                                                (s = c.manualSelectSeatInfo) ||
                                              void 0 === s ||
                                              null === (l = s.many) ||
                                              void 0 === l ||
                                              l.forEach(function (e) {
                                                e.isSelected = !1;
                                              }));
                                    }
                                  }),
                                  t.setState(
                                    o
                                      ? {
                                          selectedPasList: a,
                                          freeChildren: n,
                                          tripDetail: r,
                                        }
                                      : { selectedPasList: a, freeChildren: n }
                                  ),
                                  x.CZ.call(t),
                                  (t.getXProductTimer = setTimeout(function () {
                                    t.getXproductForBook();
                                  }, 300));
                              }
                            },
                          });
                        },
                      },
                      {
                        key: "removeSelectedPassenger",
                        value: function (e, t) {
                          var i = this,
                            a = this.state,
                            r = a.selectedPasList,
                            n = a.freeChildren;
                          if (e.isFreeChild) {
                            var o = t - r.length;
                            n.splice(o, 1), this.setState({ freeChildren: n });
                          } else {
                            var s = r.filter(function (e, i) {
                              return i !== t;
                            });
                            this.setState({ selectedPasList: s }, function () {
                              i.getXproductForBook();
                            });
                          }
                        },
                      },
                      {
                        key: "togglePriceDetailDialog",
                        value: function () {
                          this.setState({
                            priceDetailDialogVisible:
                              !this.state.priceDetailDialogVisible,
                          });
                        },
                      },
                      {
                        key: "toggleTripDetailDialog",
                        value: function () {
                          var e = this.state.tripDetailDialogVisible;
                          e ||
                            this.ubtTrace("219231", { PageCode: this.pageId }),
                            this.setState({ tripDetailDialogVisible: !e });
                        },
                      },
                      {
                        key: "setPriceDetail",
                        value: function (e) {
                          this.setState({ priceDetail: e });
                        },
                      },
                      {
                        key: "setOtherPriceDetail",
                        value: function (e) {
                          this.setState({ otherPriceDetails: e });
                        },
                      },
                      {
                        key: "onPhoneInput",
                        value: function (e) {
                          this.setState({ phoneNum: e.target.value });
                        },
                      },
                      {
                        key: "isValidParams",
                        value: function () {
                          var e = this.state,
                            t = e.selectedPasList,
                            i = e.phoneNum;
                          return t && 0 !== t.length
                            ? i
                              ? !!P.Z.isMobile(i) ||
                                ((0, T.showToast)("手机号码格式不正确"), !1)
                              : ((0, T.showToast)("请填联系手机～"), !1)
                            : ((0, T.showToast)("请先选择乘客～"), !1);
                        },
                      },
                      {
                        key: "getTicketPrice",
                        value: function (e, t, i) {
                          var a = t.selectSeat.price;
                          return (
                            2 === e && "T" !== i && (a = t.childPrice || 0), a
                          );
                        },
                      },
                      {
                        key: "isIncludeChildrenPsgByChoose",
                        value: function () {
                          var e =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : [];
                          return e.find(function (e) {
                            return 2 == e.PassengerType;
                          });
                        },
                      },
                      {
                        key: "getPassengers",
                        value: function (e, t) {
                          var i = this,
                            a = this.state,
                            r = a.selectedPasList,
                            o = a.freeChildren;
                          return (
                            "T" == t
                              ? (0, n.Z)(r)
                              : [].concat((0, n.Z)(r), (0, n.Z)(o))
                          ).map(function (a) {
                            var r = a.PassengerType;
                            return {
                              passengerName: a.pasName,
                              passengerENFirstName: a.ENFirstName,
                              passengerENLastName: a.ENLastName,
                              mobile: a.Mobile,
                              cardType: (0, W.ck)(a.cardType),
                              cardNo: a.IdentityNo,
                              nationality: a.Nationality,
                              birthDay: a.Birthday,
                              gender: a.Gender,
                              passengerType: r,
                              childAsAdult: !1,
                              ticketPrice: i.getTicketPrice(r, e, t),
                              expireDate: a.CardTimeLimit || "",
                              cardCountryCode: a.IssueAt || "",
                            };
                          });
                        },
                      },
                      {
                        key: "getFreePassengers",
                        value: function () {
                          return this.state.freeChildren.map(function (e) {
                            return {
                              freeType: 1,
                              passengerName: e.pasName,
                              cardType: (0, W.ck)(e.cardType),
                              cardNo: e.IdentityNo,
                              contactMobileNo: e.Mobile,
                            };
                          });
                        },
                      },
                      {
                        key: "getTripInfos",
                        value: function () {
                          var e = this,
                            t = this.state,
                            i = t.tripDetail,
                            a = i.details,
                            r = i.fromStationInfo,
                            n = void 0 === r ? {} : r,
                            o = i.toStationInfo,
                            s = void 0 === o ? {} : o,
                            l = t.selectedPasList,
                            c = t.selectedSeatsArray,
                            d = t.robAdviceModel,
                            u = void 0 === d ? {} : d,
                            h = t.isCombine,
                            f = { T: 1, F: 2, B: 3, S: 3, SC: 3 };
                          return a.map(function (t, i) {
                            var r = t.tripType,
                              o = (0, W.MW)(t),
                              d = 0 === i ? n.geoPoint : null,
                              p = i === a.length - 1 ? s.geoPoint : null,
                              m = o.selectSeat.seatName,
                              v = o.selectSeat.price * l.length,
                              g = o.fromAreaId || null,
                              N = o.toAreaId || null,
                              T = o.startDate,
                              S = o.startTime,
                              b = o.fromStation,
                              w = o.fromCode,
                              D = o.arriveDate,
                              x = o.arriveTime,
                              Z = o.toStation,
                              y = o.toCode,
                              k = {
                                orderLineType: f[r],
                                tripType: r,
                                tripIndex: i + 1,
                                fromGeoPoint: d,
                                toGeoPoint: p,
                                seatName: m,
                                fromDate: T,
                                fromTime: S,
                                fromStation: b,
                                fromStationCode: w,
                                toDate: D,
                                toTime: x,
                                toStation: Z,
                                toStationCode: y,
                                totalPrice: v,
                                tripInfoExtraDataType: {
                                  fromAreaId: g,
                                  toAreaId: N,
                                },
                                onlyShowFlag: o.onlyShowFlag || !1,
                              };
                            if (
                              ((k.passengers = e.getPassengers(o, r)),
                              (k.freePassengers =
                                "T" == r ? e.getFreePassengers(o, r) : []),
                              "B" === r &&
                                ((k.fromCity = o.fromCode),
                                (k.toCity = o.toCode),
                                (k.number = o.busNumber),
                                (k.busShipData = {
                                  website: o.website,
                                  lineCode: o.symbol,
                                })),
                              "SC" === r &&
                                ((k.fromCity = o.fromCityName),
                                (k.toCity = o.toCityName),
                                (k.number = o.busType),
                                (k.busShipData = {
                                  website: o.website,
                                  lineCode: o.busNumber,
                                })),
                              "S" === r &&
                                ((k.fromCity = o.fromCode),
                                (k.toCity = o.toCode),
                                (k.number = o.shipName),
                                (k.busShipData = {
                                  website: o.website,
                                  lineCode: o.shipName,
                                })),
                              "T" === r)
                            ) {
                              var C = e.state,
                                P = C.login12306Name,
                                V = C.login12306Pas,
                                B = I.ZP.encode12306Account({
                                  login12306Name: P,
                                  login12306Pas: V,
                                }),
                                A = (0, W.$7)(t);
                              o.selectSeat.ticketLeft < l.length && (A = !0);
                              var X = null == o ? void 0 : o.trainNo;
                              if (
                                ((k.trainData = {
                                  userName12306: B.login12306Name,
                                  userPass12306: B.login12306Pas,
                                  selectedSeats: c[i],
                                  trainGrab: A,
                                  combinationSeatsNum: h ? 1 : 0,
                                }),
                                A &&
                                  (k.trainData.ticketOffsetTime =
                                    e.state.ticketOffsetTime),
                                i === (null == u ? void 0 : u.robIndex))
                              ) {
                                var O, L;
                                k.trainData.combinationSeatsNum = 0;
                                var F =
                                    (null == u ||
                                    null === (O = u.trainInfo) ||
                                    void 0 === O
                                      ? void 0
                                      : O.alternativeTrainSchemeInfoList) || [],
                                  E =
                                    (null == F
                                      ? void 0
                                      : F.filter(function (e) {
                                          return null == e
                                            ? void 0
                                            : e.selected;
                                        })) || [];
                                (null == E ? void 0 : E.length) > 0 &&
                                  ((k.trainData.trainStationInfos = []),
                                  null == E ||
                                    E.forEach(function (e) {
                                      (X += ",".concat(
                                        null == e ? void 0 : e.trainNo
                                      )),
                                        k.trainData.trainStationInfos.push({
                                          trainNumber:
                                            null == e ? void 0 : e.trainNo,
                                          departStation:
                                            null == e
                                              ? void 0
                                              : e.fromStationName,
                                          arriveStation:
                                            null == e
                                              ? void 0
                                              : e.toStationName,
                                        });
                                    }));
                                var M =
                                    (null == u ||
                                    null === (L = u.seatInfo) ||
                                    void 0 === L
                                      ? void 0
                                      : L.alternativeSeatInfoList) || [],
                                  R =
                                    (null == M
                                      ? void 0
                                      : M.filter(function (e) {
                                          return null == e
                                            ? void 0
                                            : e.selected;
                                        })) || [];
                                (null == R ? void 0 : R.length) > 0 &&
                                  (null == R ||
                                    R.forEach(function (e) {
                                      m += ",".concat(
                                        null == e ? void 0 : e.seatName
                                      );
                                    }),
                                  (k.seatName = m));
                                var z = (0, W.vT)(o, u, a) * l.length;
                                (v = Math.max(v, z)), (k.totalPrice = v);
                              }
                              (k.tripInfoExtraDataType = {
                                fromAreaId: g,
                                toAreaId: N,
                                tripInfoTrainCrossStationData: {
                                  fromStationDiff:
                                    (null == o ? void 0 : o.fromStationDiff) ||
                                    0,
                                  toStationDiff:
                                    (null == o ? void 0 : o.toStationDiff) || 0,
                                },
                              }),
                                (k.number = X);
                            }
                            return (
                              "F" === r &&
                                ((k.seatName = o.selectSeat.originSeatName),
                                (k.number = o.flightNo),
                                (k.fromCity = o.departCityName),
                                (k.toCity = o.arriveCityName),
                                (k.flightData = {
                                  token: o.flightDetail.token,
                                  airCompanyName: o.airLine,
                                  departTerminal: o.departTerminal,
                                  arriveTerminal: o.arriveTerminal,
                                  riskRid: null,
                                  riskToken: null,
                                  riskVersion: null,
                                })),
                              k
                            );
                          });
                        },
                      },
                      {
                        key: "mergeOrder",
                        value: function () {
                          var e =
                              arguments.length > 0 &&
                              void 0 !== arguments[0] &&
                              arguments[0],
                            t =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : null,
                            i = this.state,
                            a = i.tripDetail,
                            r = a.departDate,
                            n = a.fromAreaId,
                            o = a.fromGeoPoint,
                            s = a.fromLocation,
                            l = a.fromStationType,
                            c = a.fromNearByFlag,
                            d = a.toStationType,
                            u = a.toAreaId,
                            h = a.toGeoPoint,
                            f = a.toLocation,
                            p = a.toNearByFlag,
                            m = a.transferInfo,
                            v = a.tripId,
                            g = a.orderSource,
                            T = a.schemeInfoV1,
                            S = i.originFromStationInfo,
                            b = i.originToStationInfo,
                            w = i.isDelayProtection,
                            D = {
                              tripInfos: [],
                              tripLine: {
                                departDate: r,
                                fromAreaId: n,
                                fromLocation: s,
                                fromGeoPoint: o,
                                fromTripPlanFlag: c,
                                fromStationType: l,
                                toAreaId: u,
                                toLocation: f,
                                toGeoPoint: h,
                                toStationType: d,
                                toTripPlanFlag: p,
                                tripId: v,
                                schemeInfoV1: T,
                              },
                            };
                          return (
                            (D.tripInfos = this.getTripInfos()),
                            (D.productList = this.getProductListParam()),
                            (D.contactInfo = { mobile: N.ZP.userName }),
                            (D.tripLine.tripLineExtraDataType = {
                              transferInfo: m,
                              trainCrossStationData: {
                                originFromStation:
                                  (null == S ? void 0 : S.originFromStation) ||
                                  "",
                                originToStation:
                                  (null == b ? void 0 : b.originToStation) ||
                                  "",
                                originFromStationCode:
                                  (null == S
                                    ? void 0
                                    : S.originFromStationCode) || "",
                                originToStationCode:
                                  (null == b
                                    ? void 0
                                    : b.originToStationCode) || "",
                                originStartTime:
                                  (null == S ? void 0 : S.originStartTime) ||
                                  "",
                                originArriveTime:
                                  (null == b ? void 0 : b.originArriveTime) ||
                                  "",
                              },
                            }),
                            (D.orderSource = g || "smarthome"),
                            (D.createOrderScene = {
                              ignoreTicketedOrderCheck: e,
                              ignoreOrderNumber: t,
                            }),
                            w &&
                              ((D.specialOrderFlag = 1),
                              this.setState({ isDelayProtection: !1 })),
                            D
                          );
                        },
                      },
                      {
                        key: "routeOrderDetail",
                        value: (function () {
                          var e = (0, s.Z)(
                            (0, o.Z)().mark(function e(t) {
                              return (0, o.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (!this.hasGoToOrder) {
                                          e.next = 3;
                                          break;
                                        }
                                        return (
                                          (this.hasGoToOrder = !1),
                                          e.abrupt("return")
                                        );
                                      case 3:
                                        (this.needRefreshXProduct = !0),
                                          this.navigateTo({
                                            url: "/pages/smart/packageA/orderDetail/index",
                                            data: { orderNumber: t },
                                          });
                                      case 5:
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
                        key: "updateProcessRate",
                        value: function () {
                          var e = this,
                            t = this.state.processRate,
                            i = t;
                          this.processRateInterval &&
                            clearInterval(this.processRateInterval),
                            (this.processRateInterval = setInterval(
                              function () {
                                t <= 90 &&
                                  ((i += 1), e.setState({ processRate: i }));
                              },
                              300
                            ));
                        },
                      },
                      {
                        key: "checkOrderProcess",
                        value: (function () {
                          var e = (0, s.Z)(
                            (0, o.Z)().mark(function e() {
                              var t,
                                i,
                                a,
                                r,
                                n,
                                s,
                                l,
                                c,
                                d,
                                u,
                                h,
                                f,
                                p,
                                m = this,
                                v = arguments;
                              return (0, o.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (
                                          ((t =
                                            v.length > 0 && void 0 !== v[0]
                                              ? v[0]
                                              : {}),
                                          this.checkOrderProcessTimer &&
                                            clearTimeout(
                                              this.checkOrderProcessTimer
                                            ),
                                          this.processRateInterval &&
                                            clearTimeout(
                                              this.processRateInterval
                                            ),
                                          (X.a8.tripDetails = (0, W.I8)(
                                            this.state.tripDetail.details
                                          )),
                                          (i = t.orderNumber),
                                          (a = t.timeout),
                                          (r = void 0 === a ? 30 : a),
                                          !(this.pollingCount >= r))
                                        ) {
                                          e.next = 9;
                                          break;
                                        }
                                        return (
                                          this.toggleCreateOrderProcessDialogVisible(
                                            !1
                                          ),
                                          this.routeOrderDetail(i),
                                          e.abrupt("return")
                                        );
                                      case 9:
                                        return (
                                          (e.next = 11),
                                          (0, b.Rf)({
                                            orderNumber: i,
                                            getProductType: 0,
                                          })
                                        );
                                      case 11:
                                        if (
                                          ((n = e.sent),
                                          (l = (s = n || {}).resultCode),
                                          (c = s.resultMessage),
                                          (d = s.bizOrders),
                                          (u = s.junmpType),
                                          (this.bizOrders = d),
                                          1 !== l)
                                        ) {
                                          e.next = 18;
                                          break;
                                        }
                                        return (
                                          this.toggleCreateOrderProcessDialogVisible(
                                            !1
                                          ),
                                          this.routeOrderDetail(i),
                                          e.abrupt("return")
                                        );
                                      case 18:
                                        if (2 !== l) {
                                          e.next = 24;
                                          break;
                                        }
                                        return (
                                          (h = 1e3 * (t.pollingTime || 1)),
                                          (this.checkOrderProcessTimer =
                                            setTimeout(function () {
                                              void 0 === m.pollingCount
                                                ? (m.pollingCount = 0)
                                                : m.pollingCount++,
                                                m.checkOrderProcess(t);
                                            }, h)),
                                          this.updateProcessRate(n),
                                          this.showProcessProduct(n),
                                          e.abrupt("return")
                                        );
                                      case 24:
                                        if (3 !== l) {
                                          e.next = 28;
                                          break;
                                        }
                                        return (
                                          this.toggleCreateOrderProcessDialogVisible(
                                            !1
                                          ),
                                          g().showModal({
                                            title: "温馨提示",
                                            content:
                                              c || "存在重复智慧出行订单",
                                            showCancel: !1,
                                            confirmText: "我知道了",
                                          }),
                                          e.abrupt("return")
                                        );
                                      case 28:
                                        if (4 !== l) {
                                          e.next = 38;
                                          break;
                                        }
                                        if (
                                          (0 === u &&
                                            (this.toggleCreateOrderProcessDialogVisible(
                                              !1
                                            ),
                                            this.setState({
                                              manualBuyTicketProduct: null,
                                            })),
                                          1 !== u)
                                        ) {
                                          e.next = 34;
                                          break;
                                        }
                                        return (
                                          this.toggleCreateOrderProcessDialogVisible(
                                            !1
                                          ),
                                          this.navigateBack(),
                                          e.abrupt("return")
                                        );
                                      case 34:
                                        if (2 !== u) {
                                          e.next = 38;
                                          break;
                                        }
                                        return (
                                          this.toggleCreateOrderProcessDialogVisible(
                                            !1
                                          ),
                                          this.routeOrderDetail(i),
                                          e.abrupt("return")
                                        );
                                      case 38:
                                        if (5 != l) {
                                          e.next = 42;
                                          break;
                                        }
                                        return (
                                          this.toggleCreateOrderProcessDialogVisible(
                                            !1
                                          ),
                                          g().showModal({
                                            title: "航班变价提醒",
                                            content:
                                              c ||
                                              "航班价格发生变动，有用户在和你浏览相同路线，赶紧购买以防再次涨价",
                                            confirmText: "我知道了",
                                            success: function (e) {
                                              e.confirm &&
                                                m.routeOrderDetail(i);
                                            },
                                          }),
                                          e.abrupt("return")
                                        );
                                      case 42:
                                        if (8 !== l) {
                                          e.next = 53;
                                          break;
                                        }
                                        return (
                                          this.toggleCreateOrderProcessDialogVisible(
                                            !1
                                          ),
                                          i &&
                                            (0, b.ok)({ orderNumber: i })
                                              .then(function (e) {
                                                null == e || e.resultCode;
                                              })
                                              .catch(function (e) {
                                                console.log(e);
                                              }),
                                          (e.next = 47),
                                          this.checkPreIntercept([6])
                                        );
                                      case 47:
                                        if (e.sent) {
                                          e.next = 52;
                                          break;
                                        }
                                        return (
                                          this.setState({
                                            isShowInterceptDrawer: !0,
                                          }),
                                          (this.isFromOrderProcess = !0),
                                          e.abrupt("return")
                                        );
                                      case 52:
                                        return e.abrupt("return");
                                      case 53:
                                        if (10 !== l) {
                                          e.next = 61;
                                          break;
                                        }
                                        if (
                                          (this.toggleCreateOrderProcessDialogVisible(
                                            !1
                                          ),
                                          0 === u &&
                                            this.setState({
                                              manualBuyTicketProduct: null,
                                            }),
                                          null ==
                                            (f = n.maskInterruptSolution) ||
                                            !f.jumpUrl)
                                        ) {
                                          e.next = 61;
                                          break;
                                        }
                                        return (
                                          (p = "".concat(
                                            f.jumpUrl,
                                            "&fromSource=Smart"
                                          )),
                                          C.Z.commonNavigator(p),
                                          e.abrupt("return")
                                        );
                                      case 61:
                                        this.toggleCreateOrderProcessDialogVisible(
                                          !1
                                        ),
                                          g().showModal({
                                            title: "温馨提示",
                                            content:
                                              c || "下单失败，请重新下单",
                                            showCancel: !1,
                                            confirmText: "我知道了",
                                          });
                                      case 63:
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
                        key: "traceLogOrder",
                        value: function (e) {
                          var t = e.bizOrderNumber,
                            i = e.train,
                            a = {
                              userId: N.ZP.uid || "",
                              orderId: t,
                              orderTime: k()().format("YYYY-MM-DD HH:mm:ss"),
                              partner: Z.default.isTieyou
                                ? "tieyou"
                                : "zhixing",
                              trainInfo: JSON.stringify({
                                arriveStation: i.toStation,
                                arriveDateTime: ""
                                  .concat(i.arriveDate, " ")
                                  .concat(i.arriveTime, ":00"),
                                trainNumber: i.trainNo,
                                departStation: i.fromStation,
                                departDateTime: ""
                                  .concat(i.startDate, " ")
                                  .concat(i.startTime, ":00"),
                              }),
                              seatList: JSON.stringify(
                                i.seats.map(function (e) {
                                  return {
                                    name: e.seatName,
                                    amount: e.ticketLeft,
                                  };
                                })
                              ),
                            };
                          this.ubtTrace("booking_Product_Params_Order", a);
                        },
                      },
                      {
                        key: "traceLogOrderForTrain",
                        value: function () {
                          var e = this,
                            t =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : {},
                            i = t.orderNumber,
                            a = t.bizOrders,
                            r = void 0 === a ? [] : a,
                            n = this.state.tripDetail.details;
                          r.forEach(function (t) {
                            var a = t.tripIndex,
                              r = t.orderNumber,
                              o = n[a - 1];
                            if ("T" == o.tripType)
                              try {
                                var s = (0, W.MW)(o);
                                e.traceLogOrder({
                                  orderNumber: i,
                                  bizOrderNumber: r,
                                  train: s,
                                });
                              } catch (e) {
                                console.log(e);
                              }
                          });
                        },
                      },
                      {
                        key: "cancelOrder",
                        value: (function () {
                          var e = (0, s.Z)(
                            (0, o.Z)().mark(function e(t) {
                              var i, a, n, s, l, c;
                              return (0, o.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (
                                          ((i = t.duplicateOrders),
                                          (a = void 0 === i ? [] : i) &&
                                            0 !== a.length)
                                        ) {
                                          e.next = 3;
                                          break;
                                        }
                                        return e.abrupt("return");
                                      case 3:
                                        if (
                                          ((n = (0, r.Z)(a, 1)), (s = n[0]))
                                        ) {
                                          e.next = 6;
                                          break;
                                        }
                                        return e.abrupt("return");
                                      case 6:
                                        return (
                                          (l = (s || {}).orderNumber),
                                          (e.next = 9),
                                          (0, b.ok)({ orderNumber: l })
                                        );
                                      case 9:
                                        1 === (c = e.sent).resultCode
                                          ? this.onCreateOrder()
                                          : (0, T.showToast)(c.resultMessage);
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
                        key: "onCreateOrder",
                        value: (function () {
                          var e = (0, s.Z)(
                            (0, o.Z)().mark(function e() {
                              var t, i, a, r, n;
                              return (0, o.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (
                                          ((t = this.state.tripDetail),
                                          !(0, W.A4)(t.details))
                                        ) {
                                          e.next = 3;
                                          break;
                                        }
                                        return e.abrupt(
                                          "return",
                                          g().showModal({
                                            title: "温馨提示",
                                            content:
                                              "抱歉，当前距离发车时间过近，暂不支持抢票，请您选择其他座席或车次",
                                            showCancel: !1,
                                            confirmText: "好的",
                                            success: function () {
                                              g().navigateBack({ delta: 2 });
                                            },
                                          })
                                        );
                                      case 3:
                                        if (this.isValidParams()) {
                                          e.next = 5;
                                          break;
                                        }
                                        return e.abrupt("return");
                                      case 5:
                                        if (
                                          !this.isIncludeChildrenPsgByChoose(
                                            this.state.selectedPasList
                                          )
                                        ) {
                                          e.next = 11;
                                          break;
                                        }
                                        return (
                                          (e.next = 8),
                                          this.showMultiButtonDialogWithPromise(
                                            {
                                              title: "儿童监护人申明",
                                              content:
                                                "本人是该未成年人的监护人或已征得监护人同意，允许平台以提供产品或服务为目的，处理未成年人信息",
                                              leftButtonName: "取消",
                                              rightButtonName: "确认并预订",
                                            }
                                          )
                                        );
                                      case 8:
                                        if ("right" == e.sent) {
                                          e.next = 11;
                                          break;
                                        }
                                        return e.abrupt("return");
                                      case 11:
                                        if (!(0, W.ti)(t.details)) {
                                          e.next = 37;
                                          break;
                                        }
                                        if (
                                          ((i = B.WG.get()),
                                          (a = i.bind12306),
                                          (r = !(
                                            null == a ||
                                            !a.name ||
                                            null == a ||
                                            !a.pwd
                                          )),
                                          (n = []),
                                          !r)
                                        ) {
                                          e.next = 29;
                                          break;
                                        }
                                        return (
                                          (e.prev = 18),
                                          (e.next = 21),
                                          (0, A.ml)({
                                            UserName: a.name,
                                            Password: a.pwd,
                                            Channel: "zhixing",
                                          })
                                        );
                                      case 21:
                                        e.next = 27;
                                        break;
                                      case 23:
                                        (e.prev = 23),
                                          (e.t0 = e.catch(18)),
                                          console.log(e.t0),
                                          null !== e.t0 &&
                                            void 0 !== e.t0 &&
                                            e.t0.Code &&
                                            n.push(5);
                                      case 27:
                                        e.next = 30;
                                        break;
                                      case 29:
                                        n.push(4);
                                      case 30:
                                        if (!(n.length > 0)) {
                                          e.next = 37;
                                          break;
                                        }
                                        return (
                                          (e.next = 33),
                                          this.checkPreIntercept(n)
                                        );
                                      case 33:
                                        if (e.sent) {
                                          e.next = 37;
                                          break;
                                        }
                                        return (
                                          this.setState({
                                            isShowInterceptDrawer: !0,
                                          }),
                                          e.abrupt("return")
                                        );
                                      case 37:
                                        this.createOrderHandle();
                                      case 38:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[18, 23]]
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "createOrderHandle",
                        value: (function () {
                          var e = (0, s.Z)(
                            (0, o.Z)().mark(function e() {
                              return (0, o.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (e.next = 2), this.ticketLeftCheck()
                                        );
                                      case 2:
                                        if (e.sent) {
                                          e.next = 8;
                                          break;
                                        }
                                        return (
                                          (e.next = 6),
                                          this.getGrabTicketAlternativeTrain()
                                        );
                                      case 6:
                                        e.sent || this.createOrderInner();
                                      case 8:
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
                        key: "createOrderInner",
                        value: (function () {
                          var e = (0, s.Z)(
                            (0, o.Z)().mark(function e() {
                              var t,
                                i,
                                a,
                                r,
                                n,
                                s,
                                l = arguments;
                              return (0, o.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (t =
                                            l.length > 0 &&
                                            void 0 !== l[0] &&
                                            l[0]),
                                          (i =
                                            l.length > 1 && void 0 !== l[1]
                                              ? l[1]
                                              : null),
                                          (a = this.state.selectedPasList),
                                          this.setState({
                                            duplicateOrderInterceptDialogVisible:
                                              !1,
                                            isShowRobAdviceModal: !1,
                                            processProduct: null,
                                          }),
                                          (r = this.mergeOrder(t, i)),
                                          console.log("create order param", r),
                                          (e.next = 8),
                                          (0, b.LV)(r)
                                        );
                                      case 8:
                                        n = e.sent;
                                        try {
                                          g().setStorage({
                                            key: ""
                                              .concat(M.fK, "_")
                                              .concat(N.ZP.uid),
                                            data: a,
                                          });
                                        } catch (e) {}
                                        if (10004 !== n.resultCode) {
                                          e.next = 15;
                                          break;
                                        }
                                        return (
                                          (s = n.duplicateOrderData),
                                          this.setState({
                                            duplicateOrderData: s,
                                          }),
                                          this.showDuplicateOrderInterceptDialog(),
                                          e.abrupt("return")
                                        );
                                      case 15:
                                        if (1 === n.resultCode) {
                                          e.next = 19;
                                          break;
                                        }
                                        return (
                                          g().showModal({
                                            title: "温馨提示",
                                            content: n.resultMessage || M.c9,
                                            showCancel: !1,
                                            confirmText: "我知道了",
                                          }),
                                          this.setState({ robAdviceModel: {} }),
                                          e.abrupt("return")
                                        );
                                      case 19:
                                        this.toggleCreateOrderProcessDialogVisible(
                                          !0,
                                          null == n ? void 0 : n.orderNumber
                                        ),
                                          this.checkOrderProcess(n);
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
                        key: "ticketLeftCheck",
                        value: (function () {
                          var e = (0, s.Z)(
                            (0, o.Z)().mark(function e() {
                              var t = this;
                              return (0, o.Z)().wrap(function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return e.abrupt(
                                        "return",
                                        new Promise(
                                          (function () {
                                            var e = (0, s.Z)(
                                              (0, o.Z)().mark(function e(i) {
                                                var a,
                                                  r,
                                                  s,
                                                  c,
                                                  d,
                                                  u,
                                                  h,
                                                  f,
                                                  p,
                                                  m,
                                                  v,
                                                  N,
                                                  S,
                                                  b,
                                                  w,
                                                  D,
                                                  x,
                                                  Z,
                                                  y,
                                                  k,
                                                  I;
                                                return (0, o.Z)().wrap(
                                                  function (e) {
                                                    for (;;)
                                                      switch (
                                                        (e.prev = e.next)
                                                      ) {
                                                        case 0:
                                                          if (
                                                            ((a =
                                                              t.state
                                                                .tripDetail),
                                                            (r = (0, W.ti)(
                                                              a.details
                                                            )),
                                                            (s = (0, W.I8)(
                                                              a.details
                                                            )),
                                                            !r)
                                                          ) {
                                                            e.next = 11;
                                                            break;
                                                          }
                                                          return (
                                                            (0, T.showLoading)(
                                                              "校验中..."
                                                            ),
                                                            (e.next = 7),
                                                            t.refreshTrainsLeftTicket(
                                                              s
                                                            )
                                                          );
                                                        case 7:
                                                          (s = e.sent),
                                                            (0,
                                                            T.hideLoading)(),
                                                            console.log(
                                                              "newDetails",
                                                              s
                                                            ),
                                                            s.forEach(function (
                                                              e
                                                            ) {
                                                              console.log(
                                                                "selectSeat",
                                                                (0, W.MW)(e)
                                                                  .selectSeat
                                                              );
                                                            });
                                                        case 11:
                                                          if (
                                                            ((c = {
                                                              val: !1,
                                                              indexObjList: [],
                                                            }),
                                                            (d = {
                                                              val: !1,
                                                              indexObjList: [],
                                                            }),
                                                            (u =
                                                              t.state
                                                                .selectedPasList),
                                                            (h = u.length),
                                                            s.forEach(function (
                                                              e,
                                                              t
                                                            ) {
                                                              var i =
                                                                  e.tripType,
                                                                r = (0, W.MW)(e)
                                                                  .selectSeat
                                                                  .ticketLeft,
                                                                n =
                                                                  a.details[t];
                                                              if (
                                                                "T" == i &&
                                                                !(0, W.$7)(n) &&
                                                                h > r
                                                              ) {
                                                                c.val = !0;
                                                                var o =
                                                                  "第".concat(
                                                                    t + 1,
                                                                    r <= 0
                                                                      ? "程车票已售罄"
                                                                      : "程剩余票张数小于乘客数"
                                                                  );
                                                                c.indexObjList.push(
                                                                  {
                                                                    index:
                                                                      t + 1,
                                                                    tip: o,
                                                                    tripType: i,
                                                                  }
                                                                );
                                                              }
                                                              if (
                                                                "F" == i &&
                                                                h > r
                                                              ) {
                                                                d.val = !0;
                                                                var s =
                                                                  "第".concat(
                                                                    t + 1,
                                                                    r <= 0
                                                                      ? "程机票已售罄"
                                                                      : "程剩余票张数小于乘客数"
                                                                  );
                                                                d.indexObjList.push(
                                                                  {
                                                                    index:
                                                                      t + 1,
                                                                    tip: s,
                                                                    tripType: i,
                                                                  }
                                                                );
                                                              }
                                                            }),
                                                            console.log(
                                                              "someTrainLeftTicketNotEnough",
                                                              c
                                                            ),
                                                            console.log(
                                                              "someFlightLeftTicketNotEnough",
                                                              d
                                                            ),
                                                            !c.val || d.val)
                                                          ) {
                                                            e.next = 34;
                                                            break;
                                                          }
                                                          return (
                                                            (f =
                                                              c.indexObjList),
                                                            (p =
                                                              f[0].index - 1),
                                                            (m = s[p]),
                                                            (v = (0, W.MW)(m)),
                                                            (N = new Date(
                                                              (
                                                                v.startDate +
                                                                " " +
                                                                v.startTime
                                                              ).replace(
                                                                /-/g,
                                                                "/"
                                                              )
                                                            )),
                                                            (S = new Date()),
                                                            (b =
                                                              (N.getTime() -
                                                                S.getTime()) /
                                                              6e4),
                                                            (w = ""),
                                                            f.forEach(function (
                                                              e
                                                            ) {
                                                              w += w
                                                                ? "、" + e.tip
                                                                : e.tip;
                                                            }),
                                                            (D = "".concat(
                                                              w,
                                                              "，建议您更换班次或抢票。若您看到仍有余票，可能是更新不及时或余票已被他人抢占"
                                                            )),
                                                            b > 60
                                                              ? g().showModal({
                                                                  title:
                                                                    "温馨提示",
                                                                  content: D,
                                                                  confirmText:
                                                                    "一键抢票",
                                                                  cancelText:
                                                                    "更换行程",
                                                                  success:
                                                                    function (
                                                                      e
                                                                    ) {
                                                                      e.confirm
                                                                        ? t.setState(
                                                                            {
                                                                              tripDetail:
                                                                                (0,
                                                                                l.Z)(
                                                                                  (0,
                                                                                  l.Z)(
                                                                                    {},
                                                                                    a
                                                                                  ),
                                                                                  {},
                                                                                  {
                                                                                    details:
                                                                                      s,
                                                                                  }
                                                                                ),
                                                                            },
                                                                            function () {
                                                                              t.createOrderInner();
                                                                            }
                                                                          )
                                                                        : g().navigateBack(
                                                                            {
                                                                              delta: 2,
                                                                            }
                                                                          );
                                                                    },
                                                                })
                                                              : g().showModal({
                                                                  title:
                                                                    "温馨提示",
                                                                  content: D,
                                                                  confirmText:
                                                                    "更换行程",
                                                                  cancelText:
                                                                    "仍要预订",
                                                                  success:
                                                                    function (
                                                                      e
                                                                    ) {
                                                                      e.confirm
                                                                        ? g().navigateBack(
                                                                            {
                                                                              delta: 2,
                                                                            }
                                                                          )
                                                                        : t.createOrderInner();
                                                                    },
                                                                }),
                                                            i(!0),
                                                            e.abrupt("return")
                                                          );
                                                        case 34:
                                                          if (!d.val) {
                                                            e.next = 45;
                                                            break;
                                                          }
                                                          return (
                                                            (x =
                                                              d.indexObjList),
                                                            (Z =
                                                              c.indexObjList),
                                                            (y = [].concat(
                                                              (0, n.Z)(x),
                                                              (0, n.Z)(Z)
                                                            )).sort(function (
                                                              e,
                                                              t
                                                            ) {
                                                              return (
                                                                e.index -
                                                                t.index
                                                              );
                                                            }),
                                                            (k = ""),
                                                            y.forEach(function (
                                                              e
                                                            ) {
                                                              k += k
                                                                ? "、" + e.tip
                                                                : e.tip;
                                                            }),
                                                            (I = "".concat(
                                                              k,
                                                              "，建议您更换班次或抢票。若您看到仍有余票，可能是更新不及时或余票已被他人抢占"
                                                            )),
                                                            g().showModal({
                                                              title: "温馨提示",
                                                              content: I,
                                                              confirmText:
                                                                "更换行程",
                                                              cancelText:
                                                                "仍要预订",
                                                              success:
                                                                function (e) {
                                                                  e.confirm
                                                                    ? g().navigateBack(
                                                                        {
                                                                          delta: 2,
                                                                        }
                                                                      )
                                                                    : t.createOrderInner();
                                                                },
                                                            }),
                                                            i(!0),
                                                            e.abrupt("return")
                                                          );
                                                        case 45:
                                                          i(!1);
                                                        case 46:
                                                        case "end":
                                                          return e.stop();
                                                      }
                                                  },
                                                  e
                                                );
                                              })
                                            );
                                            return function (t) {
                                              return e.apply(this, arguments);
                                            };
                                          })()
                                        )
                                      );
                                    case 1:
                                    case "end":
                                      return e.stop();
                                  }
                              }, e);
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "refreshTrainsLeftTicket",
                        value: (function () {
                          var e = (0, s.Z)(
                            (0, o.Z)().mark(function e(t) {
                              return (0, o.Z)().wrap(function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return e.abrupt(
                                        "return",
                                        new Promise(
                                          (function () {
                                            var e = (0, s.Z)(
                                              (0, o.Z)().mark(function e(i) {
                                                return (0, o.Z)().wrap(
                                                  function (e) {
                                                    for (;;)
                                                      switch (
                                                        (e.prev = e.next)
                                                      ) {
                                                        case 0:
                                                          (0, W.qL)(t)
                                                            .then(function (e) {
                                                              console.log(
                                                                "newTicketInfo",
                                                                e
                                                              ),
                                                                e
                                                                  ? (t.forEach(
                                                                      function (
                                                                        t
                                                                      ) {
                                                                        if (
                                                                          "T" ==
                                                                          t.tripType
                                                                        ) {
                                                                          var i =
                                                                              (0,
                                                                              W.MW)(
                                                                                t
                                                                              ),
                                                                            a =
                                                                              (
                                                                                e[
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
                                                                                ] ||
                                                                                []
                                                                              ).find(
                                                                                function (
                                                                                  e
                                                                                ) {
                                                                                  return (
                                                                                    e.seatName ===
                                                                                    i
                                                                                      .selectSeat
                                                                                      .seatName
                                                                                  );
                                                                                }
                                                                              );
                                                                          a &&
                                                                          a.ticketLeft
                                                                            ? (i.selectSeat.ticketLeft =
                                                                                parseInt(
                                                                                  a.ticketLeft
                                                                                ))
                                                                            : (i.selectSeat.ticketLeft = 0);
                                                                        }
                                                                      }
                                                                    ),
                                                                    i(t))
                                                                  : i(t);
                                                            })
                                                            .catch(function () {
                                                              i(t);
                                                            });
                                                        case 1:
                                                        case "end":
                                                          return e.stop();
                                                      }
                                                  },
                                                  e
                                                );
                                              })
                                            );
                                            return function (t) {
                                              return e.apply(this, arguments);
                                            };
                                          })()
                                        )
                                      );
                                    case 1:
                                    case "end":
                                      return e.stop();
                                  }
                              }, e);
                            })
                          );
                          return function (t) {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "setTicketOffsetTime",
                        value: function (e) {
                          console.log("ticketOffsetTime", e),
                            this.setState({ ticketOffsetTime: e });
                        },
                      },
                      {
                        key: "showDuplicateOrderInterceptDialog",
                        value: function () {
                          this.setState({
                            duplicateOrderInterceptDialogVisible: !0,
                          });
                        },
                      },
                      {
                        key: "hideDuplicateOrderInterceptDialog",
                        value: function () {
                          this.setState({
                            duplicateOrderInterceptDialogVisible: !1,
                            robAdviceModel: {},
                          });
                        },
                      },
                      {
                        key: "initChooseSeatInfo",
                        value: function () {
                          var e = this.state.tripDetail.details,
                            t = [],
                            i = [];
                          e.forEach(function (e) {
                            var a = "T" == e.tripType,
                              r = (0, W.MW)(e),
                              n =
                                a &&
                                I.ZP.isCDGTrain(r.trainNo) &&
                                I.ZP.isChoosingCRM(r.selectSeat.seatName) &&
                                r.selectSeat.ticketLeft > 0;
                            t.push(n), i.push("");
                          }),
                            this.setState({
                              canChooseSeatArray: t,
                              selectedSeatsArray: i,
                            });
                        },
                      },
                      {
                        key: "updateSelectedSeats",
                        value: function () {
                          var e =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : {},
                            t = e.selectedSeats,
                            i = e.tripIndex,
                            a = this.state.selectedSeatsArray;
                          (a[i] = t), this.setState({ selectedSeatsArray: a });
                        },
                      },
                      {
                        key: "getPreInterceptInfo",
                        value: (function () {
                          var e = (0, s.Z)(
                            (0, o.Z)().mark(function e(t) {
                              var i,
                                a,
                                r,
                                n,
                                s,
                                l,
                                c,
                                d,
                                u,
                                h,
                                f,
                                p,
                                m,
                                v,
                                g = this;
                              return (0, o.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (i = null),
                                          (e.prev = 1),
                                          (n = this.getXProductCommonParams()),
                                          (s = { sceneTypes: t, tripInfos: n }),
                                          (l = this.state),
                                          (c = l.nightTicketProduct),
                                          (d = l.selectedProductFromXPage),
                                          (u = []),
                                          null != c &&
                                            c.selected &&
                                            u.push({
                                              productCode: c.productCode,
                                            }),
                                          C.Z.isNotEmptyObj(d) &&
                                            u.push({
                                              productCode: d.productCode,
                                            }),
                                          (h = this.state),
                                          (f = h.tripDetail),
                                          (p = h.selectedPasList),
                                          null ==
                                            (m =
                                              (null == f
                                                ? void 0
                                                : f.details) || []) ||
                                            m.forEach(function (e, t) {
                                              if ("T" === e.tripType) {
                                                var i,
                                                  a,
                                                  r,
                                                  n = (0, W.MW)(e);
                                                if (
                                                  (null == n ||
                                                  null ===
                                                    (i = n.berthTicket) ||
                                                  void 0 === i ||
                                                  null === (a = i.seatList) ||
                                                  void 0 === a
                                                    ? void 0
                                                    : a.length) > 0
                                                ) {
                                                  var o =
                                                    n.berthTicket.seatList.filter(
                                                      function (e) {
                                                        return (
                                                          (null == e
                                                            ? void 0
                                                            : e.amount) > 0
                                                        );
                                                      }
                                                    );
                                                  if (
                                                    (null == o
                                                      ? void 0
                                                      : o.length) > 0
                                                  ) {
                                                    var s = [];
                                                    null == o ||
                                                      o.forEach(function (e) {
                                                        var i =
                                                          g.getProductLineExtraData(
                                                            t,
                                                            "beth",
                                                            e,
                                                            n.berthTicket
                                                          );
                                                        s.push(i);
                                                      }),
                                                      u.push({
                                                        productCode:
                                                          n.berthTicket
                                                            .isMemFree &&
                                                          !n.berthTicket
                                                            .isFreeFor12306
                                                            ? n.berthTicket
                                                                .vipCode
                                                            : n.berthTicket
                                                                .productCode,
                                                        lineExtraData:
                                                          JSON.stringify(s),
                                                      });
                                                  }
                                                }
                                                var l =
                                                  null == n
                                                    ? void 0
                                                    : n.assignCarriageInfo;
                                                if (
                                                  (null == l ||
                                                  null ===
                                                    (r = l.selectedCarriages) ||
                                                  void 0 === r
                                                    ? void 0
                                                    : r.length) > 0
                                                ) {
                                                  var c = [
                                                    g.getProductLineExtraData(
                                                      t,
                                                      "carriage",
                                                      l
                                                    ),
                                                  ];
                                                  u.push({
                                                    productCode: l.productCode,
                                                    lineExtraData:
                                                      JSON.stringify(c),
                                                  });
                                                }
                                                var d =
                                                  null == n
                                                    ? void 0
                                                    : n.manualSelectSeatInfo;
                                                if (!(0, W.Qr)(d)) {
                                                  var h = (0, W.e$)(p, d);
                                                  null == h ||
                                                    h.forEach(function (e) {
                                                      if (e.isSelected) {
                                                        var i = [
                                                          g.getProductLineExtraData(
                                                            t,
                                                            "specialSeat",
                                                            e,
                                                            d
                                                          ),
                                                        ];
                                                        u.push({
                                                          productCode:
                                                            d.productCode,
                                                          lineExtraData:
                                                            JSON.stringify(i),
                                                        });
                                                      }
                                                    });
                                                }
                                              }
                                            }),
                                          u.length > 0 &&
                                            (s.productSelectedInfo = {
                                              productBaseInfoList: u,
                                            }),
                                          (e.next = 14),
                                          (0, b.zd)(s)
                                        );
                                      case 14:
                                        1 ===
                                          (null == (v = e.sent)
                                            ? void 0
                                            : v.resultCode) &&
                                          (null == v ||
                                          null === (a = v.tripPagePopupData) ||
                                          void 0 === a ||
                                          null === (r = a.popupProducts) ||
                                          void 0 === r
                                            ? void 0
                                            : r.length) > 0 &&
                                          (console.log("getAccountXProduct", v),
                                          (i = v)),
                                          (e.next = 21);
                                        break;
                                      case 18:
                                        (e.prev = 18),
                                          (e.t0 = e.catch(1)),
                                          console.log(
                                            "getAccountXProduct failed",
                                            e.t0
                                          );
                                      case 21:
                                        return e.abrupt("return", i);
                                      case 22:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[1, 18]]
                              );
                            })
                          );
                          return function (t) {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "handlePreInterceptInfo",
                        value: function (e) {
                          var t,
                            i = e.tripPagePopupData.popupProducts,
                            a = [];
                          i.forEach(function (e) {
                            var t,
                              i =
                                null === (t = e.productDesc) || void 0 === t
                                  ? void 0
                                  : t.filter(function (e) {
                                      return !!e;
                                    });
                            a.push({
                              authIcon: e.icon,
                              authTitle: e.productName,
                              authDesc: e.productContent,
                              productTips: i,
                              priceDesc: e.priceDesc,
                              authButtonName: e.buttonName,
                              url: e.url,
                              type: e.type,
                              productId: e.productId,
                              productType: e.productType,
                              price: e.price,
                              productCode: e.productCode,
                              productPrice: e.productPrice,
                              lineExtraData: e.lineExtraData,
                            });
                          }),
                            this.setState({
                              preInterceptDrawerInfo: {
                                toastTitle: e.tripPagePopupData.title,
                                toastDesc: e.tripPagePopupData.desc,
                                authToastInfoList: a,
                                authTopInfo: {
                                  mainTitle:
                                    null ===
                                      (t =
                                        e.tripPagePopupData.popupProducts[0]) ||
                                    void 0 === t
                                      ? void 0
                                      : t.subTitle,
                                },
                              },
                            });
                        },
                      },
                      {
                        key: "closePreInterceptDrawer",
                        value: function () {
                          this.setState({ isShowInterceptDrawer: !1 });
                        },
                      },
                      {
                        key: "onPreInterruptActionHandle",
                        value: function (e) {
                          var t = this,
                            i = e.type,
                            a = "";
                          switch (i) {
                            case 1:
                            case 2:
                              a = this.isFromOrderProcess ? "237166" : "229313";
                              break;
                            case 3:
                              a = this.isFromOrderProcess ? "237169" : "229314";
                              break;
                            case 4:
                              a = "237170";
                          }
                          if (
                            (this.handlePreInterceptUbtTrace(a),
                            1 !== i && 2 !== i)
                          ) {
                            if (3 === i)
                              return (
                                this.closePreInterceptDrawer(),
                                void this.setState(
                                  { manualBuyTicketProduct: e },
                                  function () {
                                    t.createOrderInner(),
                                      (t.isFromOrderProcess = !1);
                                  }
                                )
                              );
                            4 === i &&
                              (this.closePreInterceptDrawer(),
                              this.setState(
                                { isDelayProtection: !0 },
                                function () {
                                  t.createOrderInner(),
                                    (t.isFromOrderProcess = !1);
                                }
                              ));
                          } else {
                            var r = B.WG.get().bind12306;
                            I.ZP.goto12306H5({
                              autoAction: "",
                              pageName: "",
                              userAccount: (null == r ? void 0 : r.name) || "",
                              passWord: (null == r ? void 0 : r.pwd) || "",
                              scene: 1,
                            })
                              .then(function () {
                                x.CZ.call(t),
                                  t.closePreInterceptDrawer(),
                                  t.createOrderHandle(),
                                  (t.isFromOrderProcess = !1);
                              })
                              .catch(function (e) {
                                console.log(e);
                              });
                          }
                        },
                      },
                      {
                        key: "handlePreInterceptUbtTrace",
                        value: function (e) {
                          var t = { PageId: this.pageId };
                          if (!this.isFromOrderProcess) {
                            var i = this.state.tripDetail.details,
                              a = [];
                            null == i ||
                              i.forEach(function (e) {
                                "T" === (null == e ? void 0 : e.tripType) &&
                                  (0, W.$7)(e) &&
                                  a.push(e);
                              });
                            var r = "bb";
                            (null == i ? void 0 : i.length) === a.length
                              ? (r = "gg")
                              : a.length > 0 && (r = "bg"),
                              (t.TripType = r);
                          }
                          (0, W.Sn)(this, e, t);
                        },
                      },
                      {
                        key: "updateTripDetail",
                        value: function (e) {
                          this.setState({ tripDetail: e });
                        },
                      },
                      {
                        key: "doUbtTraceWithAppoint",
                        value: function (e, t, i) {
                          var a = -1;
                          switch (t) {
                            case "GDCSeat":
                              a = 0;
                              break;
                            case "NormalSeat":
                              a = 1;
                              break;
                            case "Berth":
                              a = 2;
                          }
                          var r = (0, l.Z)(
                            { PageId: this.pageId, ExpoType: a },
                            i
                          );
                          (0, W.Sn)(this, e, r);
                        },
                      },
                      {
                        key: "doUbtTraceWithBookBtn",
                        value: function () {
                          var e = this.state,
                            t = e.tripDetail,
                            i = e.selectedPasList,
                            a = t.details,
                            r = [],
                            n = [];
                          null == a ||
                            a.forEach(function (e, t) {
                              var a,
                                o = null == e ? void 0 : e.tripType,
                                s = (0, W.MW)(e);
                              if ("T" === o) {
                                var l, c, d, u;
                                (0, W.$7)(e) && r.push(e);
                                var h,
                                  f,
                                  p = [];
                                if (
                                  (null != s &&
                                    null !== (l = s.selectSeat) &&
                                    void 0 !== l &&
                                    null !== (c = l.seatName) &&
                                    void 0 !== c &&
                                    c.includes("卧") &&
                                    null != s &&
                                    s.berthTicket &&
                                    (null === (h = s.berthTicket) ||
                                      void 0 === h ||
                                      null === (f = h.seatList) ||
                                      void 0 === f ||
                                      f.forEach(function (e) {
                                        (null == e ? void 0 : e.amount) > 0 &&
                                          p.push({
                                            product: "指定".concat(
                                              null == e ? void 0 : e.seatName
                                            ),
                                            num: null == e ? void 0 : e.amount,
                                            choose:
                                              null != s &&
                                              s.berthTicket.acceptAnother
                                                ? "true"
                                                : "false",
                                          });
                                      })),
                                  "硬座" ===
                                    (null == s ||
                                    null === (d = s.selectSeat) ||
                                    void 0 === d
                                      ? void 0
                                      : d.seatName))
                                ) {
                                  var m = (0, W.e$)(
                                      i,
                                      null == s
                                        ? void 0
                                        : s.manualSelectSeatInfo
                                    ),
                                    v =
                                      null == m
                                        ? void 0
                                        : m.find(function (e) {
                                            return e.isSelected;
                                          });
                                  if (C.Z.isNotEmptyObj(v)) {
                                    var g,
                                      N = "";
                                    switch (v.code) {
                                      case "window":
                                        N = "指定靠窗";
                                        break;
                                      case "next":
                                        N = "指定过道";
                                        break;
                                      case "near":
                                        N = "指定相邻座位";
                                    }
                                    p.push({
                                      product: N,
                                      num: (null == i ? void 0 : i.length) || 0,
                                      choose: s.manualSelectSeatInfo
                                        .acceptOtherSeatDesc
                                        ? null ===
                                            (g = !!s.manualSelectSeatInfo) ||
                                          void 0 === g
                                          ? void 0
                                          : g.toString()
                                        : "null",
                                    });
                                  }
                                }
                                var T =
                                  (null == s ||
                                  null === (u = s.assignCarriageInfo) ||
                                  void 0 === u
                                    ? void 0
                                    : u.selectedCarriages) || [];
                                if (T.length > 0) {
                                  var S =
                                      s.assignCarriageInfo.carriageDataList.filter(
                                        function (e) {
                                          return (
                                            1 === e.carriageAvailable &&
                                            1 !== e.carriageFlag
                                          );
                                        }
                                      ),
                                    b =
                                      null == S
                                        ? void 0
                                        : S.map(function (e) {
                                            var t, i;
                                            return null !==
                                              (t = e.carriageNo) &&
                                              void 0 !== t &&
                                              t.startsWith("0")
                                              ? parseInt(
                                                  e.carriageNo.substring(
                                                    (null ===
                                                      (i = e.carriageNo) ||
                                                    void 0 === i
                                                      ? void 0
                                                      : i.length) - 1
                                                  )
                                                )
                                              : parseInt(e.carriageNo);
                                          }),
                                    w = T.map(function (e) {
                                      return null != e && e.startsWith("0")
                                        ? parseInt(e.substring(e.length - 1))
                                        : parseInt(e);
                                    });
                                  p.push({
                                    product: "指定车厢",
                                    num: (null == i ? void 0 : i.length) || 0,
                                    choose: "null",
                                    ExpoList: b,
                                    SelectList: w,
                                  });
                                }
                                if (p.length > 0) {
                                  var D = -1;
                                  switch (
                                    null === (a = s.selectSeat) || void 0 === a
                                      ? void 0
                                      : a.seatName
                                  ) {
                                    case "二等座":
                                      D = 0;
                                      break;
                                    case "硬座":
                                      D = 1;
                                      break;
                                    case "硬卧":
                                      D = 2;
                                      break;
                                    case "软卧":
                                      D = 3;
                                  }
                                  n.push({
                                    seq: t + 1,
                                    type: D,
                                    productList: p,
                                  });
                                }
                              }
                            });
                          var o = "bb";
                          (null == a ? void 0 : a.length) === r.length
                            ? (o = "gg")
                            : r.length > 0 && (o = "bg");
                          var s = {
                            PageId: this.pageId,
                            TripType: o,
                            ChooseList: n.length > 0 ? n : null,
                          };
                          (0, W.Sn)(this, "224913", s);
                        },
                      },
                      {
                        key: "checkAllTripBuyAppointProduct",
                        value: function () {
                          var e = [],
                            t = this.state,
                            i = t.tripDetail,
                            a = t.selectedPasList,
                            r = i.details;
                          return (
                            r.forEach(function (t, i) {
                              var r = null == t ? void 0 : t.tripType,
                                n = (0, W.MW)(t);
                              if ("T" === r) {
                                var o,
                                  s,
                                  l,
                                  c,
                                  d,
                                  u = !1;
                                null != n &&
                                  null !== (o = n.selectSeat) &&
                                  void 0 !== o &&
                                  null !== (s = o.seatName) &&
                                  void 0 !== s &&
                                  s.includes("卧") &&
                                  null != n &&
                                  n.berthTicket &&
                                  (null === (d = n.berthTicket.seatList) ||
                                    void 0 === d ||
                                    d.forEach(function (e) {
                                      (null == e ? void 0 : e.amount) > 0 &&
                                        (u = !0);
                                    }));
                                var h = !1;
                                if (
                                  "硬座" ===
                                  (null == n ||
                                  null === (l = n.selectSeat) ||
                                  void 0 === l
                                    ? void 0
                                    : l.seatName)
                                ) {
                                  var f = (0, W.e$)(
                                      a,
                                      null == n
                                        ? void 0
                                        : n.manualSelectSeatInfo
                                    ),
                                    p =
                                      null == f
                                        ? void 0
                                        : f.find(function (e) {
                                            return e.isSelected;
                                          });
                                  C.Z.isNotEmptyObj(p) && (h = !0);
                                }
                                var m = !1;
                                (
                                  (null == n ||
                                  null === (c = n.assignCarriageInfo) ||
                                  void 0 === c
                                    ? void 0
                                    : c.selectedCarriages) || []
                                ).length > 0 && (m = !0),
                                  (u || h || m) && e.push(i + 1);
                              }
                            }),
                            e.length === r.length
                          );
                        },
                      },
                      {
                        key: "onShowSeatPicTipsDrawer",
                        value: function () {
                          this.setState({ isShowSeatPicDescDrawer: !0 }),
                            (0, W.Sn)(this, "232464", { PageId: this.pageId });
                        },
                      },
                      {
                        key: "onCloseSeatPicDescDrawer",
                        value: function () {
                          this.setState({ isShowSeatPicDescDrawer: !1 });
                        },
                      },
                      {
                        key: "onShowSeatTransfersTipsDrawer",
                        value: function (e) {
                          var t = this;
                          this.setState(
                            {
                              isShowSeatTransfersTipsDrawer: !0,
                              curChooseProductInfo: e,
                            },
                            function () {
                              (0, W.Sn)(t, "232444", {
                                PageId: t.pageId,
                                product: e.seatCode,
                              });
                            }
                          );
                        },
                      },
                      {
                        key: "onCloseSeatTransfersTipsDrawer",
                        value: function (e) {
                          var t = this,
                            i = this.state,
                            a = i.curChooseProductInfo,
                            r = i.tripDetail;
                          e
                            ? (0, W.Sn)(this, "232442", {
                                PageId: this.pageId,
                                product: a.seatCode,
                              })
                            : (0, W.Sn)(this, "232443", {
                                PageId: this.pageId,
                                clickType: "0",
                                product: a.seatCode,
                              }),
                            this.setState(
                              { isShowSeatTransfersTipsDrawer: !1 },
                              function () {
                                var e;
                                null === (e = r.details) ||
                                  void 0 === e ||
                                  e.forEach(function (e, t) {
                                    var i = (0, W.MW)(e);
                                    if (t === a.tripIndex) {
                                      if (i.berthTicket)
                                        return void (i.berthTicket.hasShowSeatTransfersTips =
                                          !0);
                                      i.manualSelectSeatInfo &&
                                        (i.manualSelectSeatInfo.hasShowSeatTransfersTips =
                                          !0);
                                    }
                                  }),
                                  t.updateTripDetail(r);
                              }
                            );
                        },
                      },
                      {
                        key: "onChooseSeatTransfers",
                        value: function () {
                          var e = this,
                            t = this.state,
                            i = t.curChooseProductInfo,
                            a = t.tripDetail;
                          (0, W.Sn)(this, "232443", {
                            PageId: this.pageId,
                            clickType: "1",
                            product: i.seatCode,
                          }),
                            this.setState(
                              { isShowSeatTransfersTipsDrawer: !1 },
                              function () {
                                var t;
                                null === (t = a.details) ||
                                  void 0 === t ||
                                  t.forEach(function (e, t) {
                                    var a = (0, W.MW)(e);
                                    if (t === i.tripIndex) {
                                      if (a.berthTicket)
                                        return (
                                          (a.berthTicket.acceptAnother = !0),
                                          void (a.berthTicket.hasShowSeatTransfersTips =
                                            !0)
                                        );
                                      a.manualSelectSeatInfo &&
                                        ((a.manualSelectSeatInfo.acceptOtherSeat =
                                          !0),
                                        (a.manualSelectSeatInfo.hasShowSeatTransfersTips =
                                          !0));
                                    }
                                  }),
                                  e.updateTripDetail(a);
                              }
                            );
                        },
                      },
                      {
                        key: "onHandlePreInterceptDrawerClose",
                        value: function () {
                          this.closePreInterceptDrawer(),
                            this.handlePreInterceptUbtTrace(
                              this.isFromOrderProcess ? "237167" : "229315"
                            ),
                            (this.isFromOrderProcess = !1);
                        },
                      },
                      {
                        key: "getXProductCommonParams",
                        value: function () {
                          var e = this.state,
                            t = e.tripDetail,
                            i = e.isCombine,
                            a = e.selectedPasList,
                            r = (null == t ? void 0 : t.details) || [],
                            n = [];
                          return (
                            r.forEach(function (e, t) {
                              var r,
                                o = null == e ? void 0 : e.tripType,
                                s = (0, W.MW)(e),
                                l = null == s ? void 0 : s.selectSeat,
                                c =
                                  "F" === o
                                    ? null == s
                                      ? void 0
                                      : s.departCityName
                                    : null,
                                d =
                                  "F" === o
                                    ? null == s
                                      ? void 0
                                      : s.arriveCityName
                                    : null,
                                u = null == s ? void 0 : s.startTime,
                                h = null == s ? void 0 : s.startDate,
                                f = null == s ? void 0 : s.arriveTime,
                                p = null == s ? void 0 : s.arriveDate,
                                m = null == s ? void 0 : s.fromStation,
                                v = null == s ? void 0 : s.fromCode,
                                g = null == s ? void 0 : s.toStation,
                                N = null == s ? void 0 : s.toCode,
                                T =
                                  "T" === o || "F" === o
                                    ? "T" === o
                                      ? null == s
                                        ? void 0
                                        : s.trainNo
                                      : null == s
                                      ? void 0
                                      : s.flightNo
                                    : "",
                                S = null == l ? void 0 : l.seatName,
                                b = Number(null == l ? void 0 : l.ticketLeft);
                              Number.isNaN(b) && (b = 99);
                              var w = "T" === o && (0, W.$7)(e),
                                D = i ? 1 : 0,
                                x =
                                  (null == s ||
                                  null === (r = s.selectSeat) ||
                                  void 0 === r
                                    ? void 0
                                    : r.price) ||
                                  (null == s ? void 0 : s.minPrice) ||
                                  0;
                              Number.isNaN(x) && (x = 0);
                              var Z =
                                  null == a
                                    ? void 0
                                    : a.map(function (e) {
                                        return {
                                          cardType: (0, W.ck)(
                                            null == e ? void 0 : e.cardType
                                          ),
                                          cardNo:
                                            null == e ? void 0 : e.IdentityNo,
                                          ticketPrice: x,
                                          passengerType: "".concat(
                                            null == e ? void 0 : e.PassengerType
                                          ),
                                        };
                                      }),
                                y = {},
                                k = {};
                              if ("T" === o) {
                                var I,
                                  C,
                                  P,
                                  V = ""
                                    .concat(s.startDate, " ")
                                    .concat(s.startTime, ":00");
                                (y = {
                                  departureTime: V,
                                  arriveTime: ""
                                    .concat(s.arriveDate, " ")
                                    .concat(s.arriveTime, ":00"),
                                  seatList:
                                    null == s ||
                                    null === (I = s.seats) ||
                                    void 0 === I
                                      ? void 0
                                      : I.map(function (e) {
                                          return {
                                            name: e.seatName,
                                            price: e.price,
                                            amount: e.ticketLeft,
                                          };
                                        }),
                                }),
                                  (k = {
                                    departureTime: V,
                                    trainNo: s.trainNo,
                                    seatList: [
                                      {
                                        name:
                                          null == s ||
                                          null === (C = s.selectSeat) ||
                                          void 0 === C
                                            ? void 0
                                            : C.seatName,
                                        amount:
                                          null == s ||
                                          null === (P = s.selectSeat) ||
                                          void 0 === P
                                            ? void 0
                                            : P.ticketLeft,
                                      },
                                    ],
                                  });
                              }
                              var B = {
                                tripType: o,
                                trainGrab: w,
                                combinationSeatsNum: D,
                                startTime: u,
                                startDate: h,
                                arriveTime: f,
                                arriveDate: p,
                                number: T,
                                seatName:
                                  "T" === o
                                    ? (0, W.HE)(S)
                                    : "F" === o
                                    ? null == s
                                      ? void 0
                                      : s.cabinName
                                    : S,
                                tripIndex: t + 1,
                                fromStation: m,
                                fromCity: c,
                                fromStationCode: v,
                                toStation: g,
                                toCity: d,
                                toStationCode: N,
                                onlyShowFlag:
                                  null == s ? void 0 : s.onlyShowFlag,
                                passengers: Z,
                                vipInfo: y,
                                elecTicketInfo: k,
                                ticketLeft: b,
                              };
                              n.push(B);
                            }),
                            n
                          );
                        },
                      },
                      {
                        key: "getProductLineExtraData",
                        value: function (e, t, i, a) {
                          var r = "";
                          if (i)
                            switch (t) {
                              case "beth":
                                var n = this.state,
                                  o = n.hasVipDiscount,
                                  s = n.useVipBerth,
                                  l = {
                                    selectSeat: {
                                      amount: i.amount,
                                      seatCode: i.seatCode,
                                      seatName: i.seatName,
                                    },
                                    useSeatRight:
                                      !(
                                        !o ||
                                        !s ||
                                        (null != a && a.isFreeFor12306)
                                      ) &&
                                      (0, W.dC)(
                                        null == a ? void 0 : a.seatList
                                      ) > 0,
                                    selectType: 0,
                                  };
                                (r = {
                                  tripIndex: e + 1,
                                  acceptOtherSeat:
                                    null != a && a.acceptAnother ? 1 : 0,
                                  bizTreasureInfo: i.bizTreasureInfo,
                                  appointSeatInfo: l,
                                }),
                                  null != a &&
                                    a.appointSeatFor12306 &&
                                    (r.appointSeatFor12306 =
                                      a.appointSeatFor12306);
                                break;
                              case "carriage":
                                r = {
                                  tripIndex: e + 1,
                                  carriageNumber: i.selectedCarriages.join(","),
                                  bizTreasureInfo: i.bizTreasureInfo,
                                };
                                break;
                              case "specialSeat":
                                r = {
                                  tripIndex: e + 1,
                                  manualSelectSeatCode: i.code,
                                  acceptOtherSeat: a.acceptOtherSeat ? 1 : 0,
                                  bizTreasureInfo: i.bizTreasureInfo,
                                };
                            }
                          return r;
                        },
                      },
                      {
                        key: "getConfigInfo",
                        value: function () {
                          var e = this;
                          (0, O.fu)({ ConfigKey: "tieyou_wx_booking_key" })
                            .then(function (t) {
                              var i;
                              if (
                                null != t &&
                                null !== (i = t.ConfigInfo) &&
                                void 0 !== i &&
                                i.Content
                              ) {
                                var a = JSON.parse(t.ConfigInfo.Content);
                                e.setState({
                                  pasCountConfig: a.passengerCountConfig || 5,
                                });
                              }
                            })
                            .catch(function (e) {
                              console.log(e);
                            });
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this,
                            t = this.state,
                            i = t.selectedPasList,
                            a = t.freeChildren,
                            r = t.convertStu,
                            o = t.tripDetail,
                            s = t.priceDetail,
                            l = t.phoneNum,
                            c = t.processRate,
                            d = t.priceDetailDialogVisible,
                            u = t.tripDetailDialogVisible,
                            h = t.createOrderProcessDialogVisible,
                            f = t.duplicateOrderInterceptDialogVisible,
                            p = t.duplicateOrderData,
                            m = t.cashBackInfo,
                            v = t.cashBackPrice,
                            g = t.isCombine,
                            N = t.canChooseSeatArray,
                            T = t.isShowRobAdviceModal,
                            b = t.robAdviceModel,
                            w = t.nightTicketProduct,
                            x = t.isShowNightProductDialog,
                            Z = void 0 !== x && x,
                            y = t.processProduct,
                            k = t.visibleProcessProduct,
                            I = t.hasVipDiscount,
                            C = t.openVipBerthTicketTitle,
                            P = t.useVipBerth,
                            B = t.selectedProductFromXPage,
                            A = t.otherPriceDetails,
                            X = t.isShowInterceptDrawer,
                            O = t.preInterceptDrawerInfo,
                            M = t.chooseSeatDiscountList,
                            R = t.seatPicDescInfo,
                            _ = t.isShowSeatPicDescDrawer,
                            U = t.isShowSeatTransfersTipsDrawer,
                            j = t.curChooseProductInfo,
                            H =
                              i.length > 0 &&
                              (0, W.ti)(null == o ? void 0 : o.details);
                          return (0, z.BX)(S.View, {
                            className: "smart-booking",
                            children: [
                              (0, z.BX)(S.View, {
                                className: "header ".concat(E.Z.tyClass),
                                children: [
                                  g
                                    ? (0, z.tZ)(de, { tripDetail: o })
                                    : (0, z.tZ)(G, {
                                        onTap:
                                          this.toggleTripDetailDialog.bind(
                                            this
                                          ),
                                        data: o,
                                        passengers: i,
                                      }),
                                  (0, z.tZ)(S.View, {
                                    className: "header-arc ".concat(
                                      E.Z.tyClass
                                    ),
                                  }),
                                ],
                              }),
                              g && (0, z.tZ)(pe, { tripDetail: o }),
                              (0, z.tZ)(ie, {
                                convertStu: r,
                                selectedPasList: [].concat(
                                  (0, n.Z)(i),
                                  (0, n.Z)(a)
                                ),
                                onRoutePassengerList:
                                  this.onRoutePassengerList.bind(this),
                                removeSelectedPassenger:
                                  this.removeSelectedPassenger.bind(this),
                              }),
                              (0, z.BX)(S.View, {
                                className: "phone phone-box flex",
                                children: [
                                  (0, z.tZ)(S.Text, {
                                    style: "white-space: nowrap",
                                    children: "通知手机",
                                  }),
                                  (0, z.tZ)(S.Input, {
                                    className: "phone-num",
                                    type: "number",
                                    placeholder: "请输入手机号",
                                    maxLength: 11,
                                    value: l,
                                    onInput: this.onPhoneInput,
                                  }),
                                ],
                              }),
                              H &&
                                (0, z.tZ)(Ae, {
                                  tripDetail: o,
                                  canChooseSeatArray: N,
                                  selectedPasList: i,
                                  updateSelectedSeats: function (t) {
                                    e.updateSelectedSeats(t);
                                  },
                                  hasVipDiscount: I,
                                  openVipBerthTicketTitle: C,
                                  showSeatDetail: this.showSelectSeatDetail,
                                  upDateTripDetail: function (t) {
                                    return e.updateTripDetail(t);
                                  },
                                  onUseVipBerth: this.onUseVipBerth,
                                  useVipBerth: P,
                                  pageId: this.pageId,
                                  ubtTrace: this.ubtTrace,
                                  chooseSeatDiscountList: M,
                                  doUbtTraceWithAppoint:
                                    this.doUbtTraceWithAppoint.bind(this),
                                  onShowSeatPicTipsDrawer:
                                    this.onShowSeatPicTipsDrawer,
                                  hasShowSeatTransfersTips:
                                    this.hasShowSeatTransfersTips,
                                  onShowSeatTransfersTips:
                                    this.onShowSeatTransfersTipsDrawer,
                                }),
                              (0, z.tZ)(se, {
                                details: o.details,
                                setTicketOffsetTime:
                                  this.setTicketOffsetTime.bind(this),
                              }),
                              (0, z.tZ)(F.Z, {
                                title: m && m.mainTitle,
                                subTitle: m && m.additionTitle,
                              }),
                              (0, z.tZ)(te, { details: o.details }),
                              (0, z.tZ)(Q, {
                                details: o.details,
                                passengers: i,
                                freeChildren: a,
                                bookBtnClick: this.bookBtnClick,
                                setPriceDetail: this.setPriceDetail.bind(this),
                                togglePriceDetailDialog:
                                  this.togglePriceDetailDialog.bind(this),
                                cashBackPrice: v,
                                robAdviceModel: b,
                                hasVipDiscount: I,
                                useVipBerth: P,
                                selectedProductFromXPage: B,
                                setOtherPriceDetail:
                                  this.setOtherPriceDetail.bind(this),
                                chooseSeatDiscountList: M,
                              }),
                              (0, z.tZ)(L.Z, {
                                isShow: d,
                                onClose:
                                  this.togglePriceDetailDialog.bind(this),
                                priceDetail: s,
                                otherPriceDetail: A,
                              }),
                              (0, z.tZ)(J, {
                                data: o,
                                isShow: u,
                                onClose: this.toggleTripDetailDialog.bind(this),
                                passengers: i,
                              }),
                              (0, z.tZ)(oe, {
                                visible: h,
                                passengers: i,
                                details: o.details,
                                processRate: c,
                                processProduct: y,
                                visibleProduct: k,
                                onUpdateOrder: this.onUpdateOrder,
                                pageId: this.pageId,
                                ubtTrace: this.ubtTrace,
                              }),
                              (0, z.tZ)(le, {
                                visible: f,
                                duplicateOrderData: p,
                                createOrderInner:
                                  this.createOrderInner.bind(this),
                                onClose:
                                  this.hideDuplicateOrderInterceptDialog.bind(
                                    this
                                  ),
                              }),
                              (0, z.tZ)(D.Z, {
                                ref: function (t) {
                                  e.onDialogAttach(t);
                                },
                              }),
                              (0, z.tZ)(Re, {
                                isShow: T,
                                robAdviceModel: b,
                                tripDetail: o,
                                selectCb: this.selectRobAdvice,
                                close: this.closeRobAdviceModal,
                              }),
                              (0, z.tZ)(ze, {
                                isShow: Z,
                                data: w,
                                btnClick: this.chooseNightProduct,
                                onClose: function () {
                                  return e.setState({
                                    isShowNightProductDialog: !1,
                                  });
                                },
                              }),
                              (0, z.tZ)(V.Z, {
                                id: "ANCj",
                                show: X,
                                authFailToastInfo: O,
                                fromSource: "smart_booking",
                                handleClose:
                                  this.onHandlePreInterceptDrawerClose,
                                onActionClick: this.onPreInterruptActionHandle,
                                ubtTrace: function () {
                                  return e.handlePreInterceptUbtTrace(
                                    e.isFromOrderProcess ? "237165" : "229312"
                                  );
                                },
                              }),
                              (0, z.tZ)(_e, {
                                visible: _,
                                data: R,
                                onClose: this.onCloseSeatPicDescDrawer,
                              }),
                              (0, z.tZ)(We, {
                                visible: U,
                                seatName: null == j ? void 0 : j.seatName,
                                onClose: this.onCloseSeatTransfersTipsDrawer,
                                onConfirm: this.onChooseSeatTransfers,
                              }),
                            ],
                          });
                        },
                      },
                    ]),
                    i
                  );
                })(m.default.Component))
              ) || Me;
          Page(
            (0, a.createPageConfig)(
              Ue,
              "pages/smart/packageA/booking/index",
              { root: { cn: [] } },
              {
                navigationBarTitleText: "行程预订",
                backgroundColor: "#0066E6",
                backgroundColorBottom: "#efefef",
              } || {}
            )
          );
        },
      },
      function (e) {
        e.O(
          0,
          [5572, 71229, 35203, 4978, 12213, 48139, 81604, 19559, 11216, 68592],
          function () {
            return (function (t) {
              return e((e.s = t));
            })(63403);
          }
        ),
          e.O();
      },
    ]);
})();
