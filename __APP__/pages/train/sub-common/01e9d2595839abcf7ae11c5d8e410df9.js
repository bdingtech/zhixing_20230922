!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [96422],
    {
      99655: function (e, i, t) {
        t(92954);
        var a = t(52500),
          n = t(8271),
          c = t.n(n),
          o = t(71515),
          r = t(4102),
          s = t(48813);
        i.Z = a.default.memo(function (e) {
          var i = e.train;
          if (!i) return (0, s.tZ)(o.View, {});
          var t = i.fromDate,
            a = i.fromTime,
            n = i.fromStation,
            m = i.toDate,
            l = i.toTime,
            d = i.toStation,
            w = i.trainNo,
            f = c()("".concat(m, " ").concat(l, ":00")).diff(
              c()("".concat(t, " ").concat(a, ":00")),
              "minute"
            ),
            u = r.Z.getHourMinuteByMinute(f);
          return (0,
          s.BX)(o.View, { className: "direct-train-info-banner", children: [(0, s.BX)(o.View, { className: "from", children: [(0, s.tZ)(o.View, { className: "time", children: a }), (0, s.tZ)(o.View, { className: "station", children: n })] }), (0, s.BX)(o.View, { className: "mid", children: [(0, s.tZ)(o.View, { className: "mid-top", children: u }), (0, s.tZ)(o.View, { className: "mid-bottom", children: w })] }), (0, s.BX)(o.View, { className: "to", children: [(0, s.tZ)(o.View, { className: "time", children: l }), (0, s.tZ)(o.View, { className: "station", children: d })] })] });
        });
      },
    },
  ]);
})();
