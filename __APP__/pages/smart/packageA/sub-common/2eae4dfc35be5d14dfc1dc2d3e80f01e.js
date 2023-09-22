!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [80683],
    {
      77649: function (t, i, n) {
        n.d(i, {
          Bc: function () {
            return l;
          },
          Jy: function () {
            return a;
          },
          L8: function () {
            return o;
          },
          VV: function () {
            return h;
          },
        });
        var e,
          o,
          a,
          c = n(298),
          f = n(79910),
          d = n(15125);
        (function (t) {
          (t[(t.buyGrap = 1)] = "buyGrap"),
            (t[(t.combine = 2)] = "combine"),
            (t[(t.buyMore = 3)] = "buyMore"),
            (t[(t.grapBuy = 4)] = "grapBuy"),
            (t[(t.combineBuyMore = 5)] = "combineBuyMore");
        })(e || (e = {})),
          (function (t) {
            (t[(t.CIRCLE = 0)] = "CIRCLE"),
              (t[(t.SOLID = 1)] = "SOLID"),
              (t[(t.LIGHT_SOLID = 2)] = "LIGHT_SOLID"),
              (t[(t.BORDERED = 3)] = "BORDERED");
          })(o || (o = {})),
          (function (t) {
            (t[(t.DASH_LINE = 0)] = "DASH_LINE"), (t[(t.LINE = 1)] = "LINE");
          })(a || (a = {}));
        var r = function () {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 3,
              i = arguments.length > 1 ? arguments[1] : void 0,
              n = i.allWidth,
              e = i.tagWidth,
              o = void 0 === e ? 30 : e,
              a = n / t,
              c = 1.5 * a - 1.5 * o,
              f = a - o;
            return 4 === t
              ? { sideLineWidth: 0.35 * n - 45, middleLineWidth: 0.3 * n - o }
              : 5 === t
              ? {
                  sideLineWidth: 1.5 * (a -= 4) - 1.5 * o + 5,
                  middleLineWidth: a - o + 5,
                }
              : { sideLineWidth: c, middleLineWidth: f };
          },
          l = function () {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 3,
              i = arguments.length > 1 ? arguments[1] : void 0,
              n = (0, c.Z)(
                (0, c.Z)(
                  (0, c.Z)({}, (3 === t || 5 === t) && { flex: 1 }),
                  4 === t &&
                    (0 === i || i === t - 1 ? { flex: 2 } : { flex: 3 })
                ),
                5 === t && 0 !== i && { "margin-left": 5, "margin-right": 0 }
              );
            return n;
          };
        function h(t, i, n, l, h) {
          var s = h.allWidth,
            u = h.circleWidth,
            L = void 0 === u ? 9 : u,
            W = h.tagWidth,
            m = void 0 === W ? 30 : W,
            D = h.middleTagWidth,
            S = void 0 === D ? 48 : D,
            p = function (t, i) {
              return (function (t, i) {
                var n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : 30;
                return {
                  tagType: o.BORDERED,
                  tagText: i ? "上车" : "下车",
                  stationName: t.name,
                  time: t.time,
                  date: t.date,
                  width: n,
                };
              })(t, i, m);
            },
            T = function (t, i) {
              return (function (t, i) {
                var n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : 48;
                return {
                  lineType: a.DASH_LINE,
                  tagType: o.SOLID,
                  tagText:
                    i < 0
                      ? "补票".concat(Math.abs(i), "站")
                      : "多买".concat(i, "站"),
                  width: n,
                };
              })(t, i, S);
            },
            y = function (t, i) {
              return (function (t, i) {
                var n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : 9;
                return {
                  tagType: o.CIRCLE,
                  stationName: i ? t.fromStation : t.toStation,
                  time: i ? t.startTime : t.arriveTime,
                  date: i ? t.startDate : t.arriveDate,
                  disabled: !0,
                  width: n,
                };
              })(t, i, L);
            },
            I = "组合座",
            g = "",
            v = [],
            E = [],
            N =
              2 === i.length && i[0].seatName !== i[1].seatName
                ? "".concat(i[0].seatName, "+").concat(i[1].seatName)
                : "";
          if (!Array.isArray(i) || 0 === i.length)
            return {
              title: I,
              desc: g,
              tips: v,
              trains: E,
              times: [],
              stations: [],
              seatType: N,
            };
          var Z = (function (t) {
              return (function (t) {
                var i =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 30;
                return {
                  tagType: o.SOLID,
                  tagText: "换座",
                  stationName: t.toStation,
                  time: t.arriveTime,
                  date: t.arriveDate,
                  width: i,
                };
              })(t, m);
            })(i[0]),
            b = '本行程分两段购买，每段座位号不同，需在<font color="'
              .concat(d.k.contrastText, '">「')
              .concat(i[0].toStation, "」</font>换座。"),
            x = p(n, !0),
            k = '仍在<font color="'
              .concat(d.k.contrastText, '">「')
              .concat(n.name, "」</font>上车"),
            M = p(l, !1),
            w = '仍在<font color="'
              .concat(d.k.contrastText, '">「')
              .concat(l.name, "」</font>下车"),
            O = r(3, { allWidth: s }).sideLineWidth,
            B = r(4, { allWidth: s }),
            R = r(5, { allWidth: s }),
            H = '<font color="'.concat(
              d.k.contrastText,
              '">风险提示：</font>若接受上车补票方案，请主动找列车员补票。利用“买短乘长”故意逃票属于违法行为。情节严重的将被追究法律责任。'
            );
          switch (t) {
            case e.buyGrap:
              (I = "上车补票"),
                (g = "全程直达区间暂无余票，先买一段保障上车"),
                (v = [
                  "先购买部分车票，第二程可抢票，也可上车后找列车员" +
                    "补票"
                      .concat(Math.abs(i[0].toStationDiff), '站至<font color="')
                      .concat(d.k.contrastText, '">「')
                      .concat(l.name, "」</font>。"),
                  H,
                ]),
                (E = [
                  x,
                  { lineType: a.LINE, lineWidth: O + L },
                  y(i[0]),
                  (0, c.Z)(
                    (0, c.Z)({}, T(i[1], -Math.abs(i[0].toStationDiff))),
                    {},
                    { lineWidth: O + L }
                  ),
                  M,
                ]);
              break;
            case e.combine:
              (I = "同车换座"),
                (g = "全程直达区间暂无余票，拆分2段分别购票"),
                (v = [b]),
                (E = [
                  x,
                  { lineType: a.LINE, lineWidth: O },
                  Z,
                  { lineType: a.LINE, lineWidth: O },
                  M,
                ]);
              break;
            case e.buyMore:
              if (
                ((I = "多买几站"),
                (g = "仅需多买几站，保障正常上下车"),
                i[0].fromStationDiff > 0 && i[0].toStationDiff > 0)
              ) {
                var _ = "往前多买"
                    .concat(i[0].fromStationDiff, "站，")
                    .concat(k),
                  G = "往后多买".concat(i[0].toStationDiff, "站，").concat(w);
                (v = [
                  "原上车、下车站点无票，可".concat(_, "，").concat(G, "。"),
                ]),
                  (E = [
                    y(i[0], !0),
                    (0, c.Z)(
                      (0, c.Z)({}, T(i[0], i[0].fromStationDiff)),
                      {},
                      { lineWidth: B.sideLineWidth + (m - L) }
                    ),
                    x,
                    { lineType: a.LINE, lineWidth: B.middleLineWidth },
                    M,
                    (0, c.Z)(
                      (0, c.Z)({}, T(i[0], i[0].toStationDiff)),
                      {},
                      { lineWidth: B.sideLineWidth + (m - L) }
                    ),
                    y(i[0]),
                  ]);
              } else
                i[0].fromStationDiff > 0
                  ? ((v = [
                      "原上车站点无票，可".concat(I, "，").concat(k, "。"),
                    ]),
                    (E = [
                      y(i[0], !0),
                      (0, c.Z)(
                        (0, c.Z)({}, T(i[0], i[0].fromStationDiff)),
                        {},
                        { lineWidth: O + (m - L) }
                      ),
                      x,
                      { lineType: a.LINE, lineWidth: O },
                      M,
                    ]))
                  : i[0].toStationDiff > 0 &&
                    ((v = [
                      "原下车站点无票，可".concat(I, "，").concat(w, "。"),
                    ]),
                    (E = [
                      x,
                      { lineType: a.LINE, lineWidth: O },
                      M,
                      (0, c.Z)(
                        (0, c.Z)({}, T(i[0], i[0].toStationDiff)),
                        {},
                        { lineWidth: O + (m - L) }
                      ),
                      y(i[0], !1),
                    ]));
              break;
            case e.grapBuy:
              (I = "抢+买"),
                (g = "全程直达区间暂无余票，买票之前抢一段"),
                (v = [
                  "第一程为抢票行程，抢部分行程比抢全程直达票成功率更高。",
                  H,
                ]),
                (E = [
                  x,
                  {
                    lineType: a.DASH_LINE,
                    tagType: o.LIGHT_SOLID,
                    tagText: "抢票",
                    width: 30,
                    lineWidth: O,
                  },
                  Z,
                  {
                    lineType: a.LINE,
                    tagType: o.LIGHT_SOLID,
                    tagText: "买票",
                    width: 30,
                    lineWidth: O,
                  },
                  M,
                ]);
              break;
            case e.combineBuyMore:
              v = [b];
              var A = "往前多买".concat(i[0].fromStationDiff, "站，").concat(k),
                C = "往后多买".concat(i[1].toStationDiff, "站，").concat(w);
              i[0].fromStationDiff > 0 && i[1].toStationDiff > 0
                ? ((I = "同车换座含多买"),
                  (g = "全程直达已无票,分两段买两张票+前后多买几站"),
                  (E = [
                    y(i[0], !0),
                    (0, c.Z)(
                      (0, c.Z)({}, T(i[0], i[0].fromStationDiff)),
                      {},
                      { lineWidth: R.sideLineWidth + (m - L) }
                    ),
                    x,
                    { lineType: a.LINE, lineWidth: R.middleLineWidth },
                    Z,
                    { lineType: a.LINE, lineWidth: R.middleLineWidth },
                    M,
                    (0, c.Z)(
                      (0, c.Z)({}, T(i[1], i[1].toStationDiff)),
                      {},
                      { lineWidth: R.sideLineWidth + (m - L) }
                    ),
                    y(i[1]),
                  ]),
                  v.push(
                    "原上车、下车站点无票，可".concat(A, "，").concat(C, "。")
                  ),
                  v.push(H))
                : i[0].fromStationDiff > 0 && 0 === i[1].toStationDiff
                ? ((I = "同车换座含多买"),
                  (g = "全程直达已无票，但向前多买几站+分两段买两张票"),
                  (E = [
                    y(i[0], !0),
                    (0, c.Z)(
                      (0, c.Z)({}, T(i[0], i[0].fromStationDiff)),
                      {},
                      { lineWidth: B.sideLineWidth + (m - L) }
                    ),
                    x,
                    { lineType: a.LINE, lineWidth: B.middleLineWidth },
                    Z,
                    { lineType: a.LINE, lineWidth: B.sideLineWidth },
                    M,
                  ]),
                  v.unshift("原上车站点无票，可".concat(A, "。")))
                : 0 === i[0].fromStationDiff && i[1].toStationDiff > 0
                ? ((I = "同车换座含多买"),
                  (g = "全程直达已无票，分两段买两张票+向后多买几站"),
                  (E = [
                    x,
                    { lineType: a.LINE, lineWidth: B.sideLineWidth },
                    Z,
                    { lineType: a.LINE, lineWidth: B.middleLineWidth },
                    M,
                    (0, c.Z)(
                      (0, c.Z)({}, T(i[1], i[1].toStationDiff)),
                      {},
                      { lineWidth: B.sideLineWidth + (m - L) }
                    ),
                    y(i[1]),
                  ]),
                  v.push("原下车站点无票，可".concat(C, "。")),
                  v.push(H))
                : i[0].fromStationDiff > 0 &&
                  i[1].toStationDiff < 0 &&
                  (console.log("4、多买+补票"),
                  (I = "向前多买"
                    .concat(i[0].fromStationDiff, "站，上车补票")
                    .concat(Math.abs(i[1].toStationDiff), "站")),
                  (N = ""),
                  (g = "向前多买"
                    .concat(i[0].fromStationDiff, "站，上车补票")
                    .concat(Math.abs(i[1].toStationDiff), "站")),
                  (v = [
                    "原上车站点无票，可".concat(A, "。"),
                    "先购买部分车票，第二程可抢票，也可上车后找列车员" +
                      "补票"
                        .concat(
                          Math.abs(i[1].toStationDiff),
                          '站至<font color="'
                        )
                        .concat(d.k.contrastText, '">「')
                        .concat(l.name, "」</font>下车。"),
                    H,
                  ]),
                  (E = [
                    y(i[0], !0),
                    (0, c.Z)(
                      (0, c.Z)({}, T(i[0], i[0].fromStationDiff)),
                      {},
                      { lineWidth: B.sideLineWidth + (m - L) }
                    ),
                    x,
                    { lineType: a.LINE, lineWidth: B.middleLineWidth + L },
                    y(i[0]),
                    (0, c.Z)(
                      (0, c.Z)({}, T(i[1], i[1].toStationDiff)),
                      {},
                      { lineWidth: B.sideLineWidth + L }
                    ),
                    M,
                  ]));
          }
          var J = [];
          return (
            E.filter(function (t) {
              return !!t.time;
            }).reduce(function (t, i) {
              0 === J.length && J.push(t);
              var n = f.Z.getDayDiff(t.date, i.date);
              return (
                J.push(
                  (0, c.Z)((0, c.Z)({}, i), {}, { dayDiff: n > 0 ? n : void 0 })
                ),
                i
              );
            }),
            {
              title: I,
              desc: g,
              tips: v,
              trains: E,
              times: J,
              stations: E.filter(function (t) {
                return !!t.stationName;
              }),
              seatType: N,
            }
          );
        }
      },
    },
  ]);
})();
