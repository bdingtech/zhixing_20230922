!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [71838],
    {
      15309: function (e, a, t) {
        var i = t(71515),
          s = (t(92954), t(52500)),
          n = t(48813);
        a.Z = s.default.memo(function (e) {
          var a = e.ticketInfoList,
            t = void 0 === a ? [] : a;
          return 0 == t.length
            ? (0, n.tZ)(i.View, {})
            : (0, n.tZ)(i.View, {
                className: "ticket-info-list-banner",
                children: t.map(function (e, a) {
                  return (0,
                  n.BX)(i.View, { className: "item", children: [(0, n.tZ)(i.View, { className: "name", children: e.passengerName }), (0, n.tZ)(i.View, { className: "tag-grey", children: e.passengerType }), e.seatTag && (0, n.tZ)(i.View, { className: "tag-window", children: e.seatTag }), (0, n.BX)(i.View, { className: "seat", children: [e.seatType, " ￥", e.ticketPrice, " ", e.seatNo] })] }, a);
                }),
              });
        });
      },
    },
  ]);
})();
