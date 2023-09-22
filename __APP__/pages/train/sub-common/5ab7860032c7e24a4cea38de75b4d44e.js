!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [87799],
    {
      76927: function (e, i, a) {
        var s = a(52500),
          t = (a(92954), a(71515)),
          c = a(48813);
        i.Z = s.default.memo(function (e) {
          var i = e.train,
            a = i.fromStation,
            s = i.fromTime,
            n = i.toStation,
            l = i.toTime,
            r = i.staggerTicket,
            o = void 0 === r ? {} : r,
            m = o.toStationDiff,
            d = o.realToStation,
            w = o.realArriveTime;
          return (0,
          c.BX)(t.View, { className: "stagger-train-info-banner", children: [(0, c.BX)(t.View, { className: "from", children: [(0, c.tZ)(t.View, { className: "time", children: s }), (0, c.BX)(t.View, { className: "route-sequence", children: [(0, c.tZ)(t.View, { className: "operation bd-1rpx", children: "上车" }), (0, c.tZ)(t.View, { className: "line" })] }), (0, c.tZ)(t.View, { className: "station", children: a })] }), (0, c.BX)(t.View, { className: "mid", children: [(0, c.tZ)(t.View, { className: "time color-gray", children: l }), (0, c.BX)(t.View, { className: "route-sequence", children: [(0, c.tZ)(t.View, { className: "line" }), (0, c.tZ)(t.View, { className: "circle-point bd-1rpx" }), (0, c.tZ)(t.View, { className: "line dashed" })] }), (0, c.tZ)(t.View, { className: "station color-gray", children: n })] }), (0, c.BX)(t.View, { className: "to", children: [(0, c.tZ)(t.View, { className: "time", children: w }), (0, c.BX)(t.View, { className: "route-sequence", children: [(0, c.BX)(t.View, { className: "ticket-operation", children: ["补票", Math.abs(m), "站"] }), (0, c.tZ)(t.View, { className: "line dashed" }), (0, c.tZ)(t.View, { className: "operation bd-1rpx", children: "下车" })] }), (0, c.tZ)(t.View, { className: "station", children: d })] })] });
        });
      },
    },
  ]);
})();
