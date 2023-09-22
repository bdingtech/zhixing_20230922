!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [86837],
    {
      94939: function (e, i, a) {
        var s = a(52500),
          t = (a(92954), a(71515)),
          n = a(48813);
        i.Z = s.default.memo(function (e) {
          var i = e.trainList,
            a = void 0 === i ? [] : i;
          if (a.length < 2) return (0, n.tZ)(t.View, {});
          var s = a[0],
            c = a[1];
          return (0,
          n.BX)(t.View, { className: "combine-train-info-banner", children: [(0, n.BX)(t.View, { className: "from", children: [(0, n.tZ)(t.View, { className: "time", children: s.startTime }), (0, n.BX)(t.View, { className: "route-sequence", children: [(0, n.tZ)(t.View, { className: "operation bd-1rpx", children: "上车" }), (0, n.tZ)(t.View, { className: "line" })] }), (0, n.tZ)(t.View, { className: "station", children: s.fromStation })] }), (0, n.BX)(t.View, { className: "mid", children: [(0, n.tZ)(t.View, { className: "time", children: s.arriveTime }), (0, n.BX)(t.View, { className: "route-sequence", children: [(0, n.tZ)(t.View, { className: "line" }), (0, n.tZ)(t.View, { className: "change-seat-operation", children: "换座" }), (0, n.tZ)(t.View, { className: "line" })] }), (0, n.tZ)(t.View, { className: "station", children: s.toStation })] }), (0, n.BX)(t.View, { className: "to", children: [(0, n.tZ)(t.View, { className: "time", children: c.arriveTime }), (0, n.BX)(t.View, { className: "route-sequence", children: [(0, n.tZ)(t.View, { className: "line" }), (0, n.tZ)(t.View, { className: "operation bd-1rpx", children: "下车" })] }), (0, n.tZ)(t.View, { className: "station", children: c.toStation })] })] });
        });
      },
    },
  ]);
})();
