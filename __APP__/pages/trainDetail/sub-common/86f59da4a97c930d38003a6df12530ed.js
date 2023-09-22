!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [17115],
    {
      12604: function (e, i, a) {
        var s = a(52500),
          t = a(71515),
          c = a(48813),
          l = 1,
          r = 2;
        i.Z = s.default.memo(function (e) {
          var i = e.tripInfo,
            a = void 0 === i ? null : i,
            s = e.type,
            n = void 0 === s ? 1 : s;
          if (!a) return (0, c.tZ)(t.View, {});
          var o = n === r,
            m = n === l,
            d = o ? a.middleStation : a.departStation,
            w = o ? a.arriveStation : a.middleStation,
            V = o ? a.middleTime : a.departTime,
            N = o ? a.arriveTime : a.middleTime;
          return (0,
          c.BX)(t.View, { className: "cross-station-tripinfo", children: [o && (0, c.BX)(t.View, { className: "from", children: [(0, c.tZ)(t.View, { className: "time color-gray", children: a.departTime }), (0, c.BX)(t.View, { className: "route-sequence", children: [(0, c.tZ)(t.View, { className: "circle-point" }), (0, c.tZ)(t.View, { className: "line dashed" }), a.crossStationDesc && (0, c.tZ)(t.View, { className: "ticket-operation", children: a.crossStationDesc })] }), (0, c.tZ)(t.View, { className: "station color-gray", children: a.departStation })] }), (0, c.BX)(t.View, { className: "".concat(o ? "mid" : "from"), children: [(0, c.tZ)(t.View, { className: "time", children: V }), (0, c.BX)(t.View, { className: "route-sequence", children: [o && (0, c.tZ)(t.View, { className: "line dashed" }), (0, c.tZ)(t.View, { className: "operation", children: "上车" }), (0, c.tZ)(t.View, { className: "line" })] }), (0, c.tZ)(t.View, { className: "station", children: d })] }), (0, c.BX)(t.View, { className: "".concat(m ? "mid" : "to"), children: [(0, c.tZ)(t.View, { className: "time", children: N }), (0, c.BX)(t.View, { className: "route-sequence", children: [(0, c.tZ)(t.View, { className: "line" }), (0, c.tZ)(t.View, { className: "operation", children: "下车" }), m && (0, c.tZ)(t.View, { className: "line dashed" })] }), (0, c.tZ)(t.View, { className: "station", children: w })] }), m && (0, c.BX)(t.View, { className: "to", children: [(0, c.tZ)(t.View, { className: "time color-gray", children: a.arriveTime }), (0, c.BX)(t.View, { className: "route-sequence", children: [a.crossStationDesc && (0, c.tZ)(t.View, { className: "ticket-operation", children: a.crossStationDesc }), (0, c.tZ)(t.View, { className: "line dashed" }), (0, c.tZ)(t.View, { className: "circle-point" })] }), (0, c.tZ)(t.View, { className: "station color-gray", children: a.arriveStation })] })] });
        });
      },
    },
  ]);
})();
