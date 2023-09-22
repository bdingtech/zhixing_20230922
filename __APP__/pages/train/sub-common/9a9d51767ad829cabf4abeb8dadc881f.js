!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [50914],
    {
      95521: function (e, a, i) {
        var s = i(52500),
          t = (i(92954), i(71515)),
          c = i(48813);
        a.Z = s.default.memo(function (e) {
          var a = e.train,
            i = a.fromStation,
            s = a.fromTime,
            l = a.toStation,
            r = a.toTime,
            n = a.staggerTicket,
            o = void 0 === n ? {} : n,
            m = o.fromStationDiff,
            d = o.toStationDiff,
            w = o.realFromStation,
            N = o.realToStation,
            V = o.realStartTime,
            h = o.realArriveTime,
            Z = 0 != m,
            p = 0 != d;
          return (0,
          c.BX)(t.View, { className: "cross-train-info-banner", children: [Z && (0, c.BX)(t.View, { className: "from", children: [(0, c.tZ)(t.View, { className: "time color-gray", children: s }), (0, c.BX)(t.View, { className: "route-sequence", children: [(0, c.tZ)(t.View, { className: "circle-point bd-1rpx" }), (0, c.tZ)(t.View, { className: "line dashed" }), (0, c.BX)(t.View, { className: "ticket-operation", children: ["多买", Math.abs(m), "站"] })] }), (0, c.tZ)(t.View, { className: "station color-gray", children: i })] }), (0, c.BX)(t.View, { className: "".concat(Z ? "mid" : "from"), children: [(0, c.tZ)(t.View, { className: "time", children: V }), (0, c.BX)(t.View, { className: "route-sequence", children: [Z && (0, c.tZ)(t.View, { className: "line dashed" }), (0, c.tZ)(t.View, { className: "operation bd-1rpx", children: "上车" }), (0, c.tZ)(t.View, { className: "line" })] }), (0, c.tZ)(t.View, { className: "station", children: w })] }), (0, c.BX)(t.View, { className: "".concat(p ? "mid" : "to"), children: [(0, c.tZ)(t.View, { className: "time", children: h }), (0, c.BX)(t.View, { className: "route-sequence", children: [(0, c.tZ)(t.View, { className: "line" }), (0, c.tZ)(t.View, { className: "operation bd-1rpx", children: "下车" }), p && (0, c.tZ)(t.View, { className: "line dashed" })] }), (0, c.tZ)(t.View, { className: "station", children: N })] }), p && (0, c.BX)(t.View, { className: "to", children: [(0, c.tZ)(t.View, { className: "time color-gray", children: r }), (0, c.BX)(t.View, { className: "route-sequence", children: [(0, c.BX)(t.View, { className: "ticket-operation", children: ["多买", Math.abs(d), "站"] }), (0, c.tZ)(t.View, { className: "line dashed" }), (0, c.tZ)(t.View, { className: "circle-point bd-1rpx" })] }), (0, c.tZ)(t.View, { className: "station color-gray", children: l })] })] });
        });
      },
    },
  ]);
})();
