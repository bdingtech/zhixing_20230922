!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [29487],
    {
      62564: function (n, t, e) {
        e(92954);
        var i = e(52500),
          o = e(71515),
          u = e(34229),
          c = e(48813);
        t.Z = i.default.memo(function (n) {
          var t = n.endTime,
            e = n.onTimeup,
            i = void 0 === e ? function () {} : e,
            m = n.onConfirm,
            s = void 0 === m ? function () {} : m;
          return (0,
          c.BX)(o.View, { className: "confirm-button btm-button with-time-out", id: "AABv", onClick: s, children: [(0, c.tZ)(o.View, { className: "title", children: "确认出票" }), (0, c.BX)(o.View, { className: "sub-title", children: [(0, c.tZ)(u.ZtCountdown, { endTime: t, onTimeup: i, isShowHour: !1, className: "left-time-str", format: { day: "天", hour: "时", minute: "分", second: "秒" } }), "后自动取消"] })] });
        });
      },
    },
  ]);
})();
