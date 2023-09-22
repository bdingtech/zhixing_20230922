!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [39618],
    {
      27941: function (t, i, n) {
        n(92954);
        var e = n(52500),
          a = n(71515),
          o = n(4102),
          c = n(99655),
          l = n(76927),
          r = n(15309),
          s = n(95521),
          d = n(94939),
          m = n(31952),
          u = n(48813);
        i.Z = e.default.memo(function (t) {
          var i,
            n,
            e = t.tripType,
            f = t.holdSeatTrip,
            v = t.recommendTrip,
            Z = t.tipList;
          if (!f && !v) return (0, u.tZ)(a.View, {});
          var k,
            p,
            w,
            T,
            b,
            h,
            N,
            D = !["subtrain", "transfer"].includes(e),
            I = null == f ? void 0 : f.smartTicketInfo,
            L =
              null == v || null === (i = v.combineTrainInfo) || void 0 === i
                ? void 0
                : i.combineTrainDetailList;
          D
            ? (k = null == I ? void 0 : I.fromDate)
            : ((k =
                null == L || null === (T = L[0]) || void 0 === T
                  ? void 0
                  : T.startDate),
              (p =
                null == L || null === (b = L[0]) || void 0 === b
                  ? void 0
                  : b.trainNo),
              (w = ""
                .concat(
                  null == L || null === (h = L[0]) || void 0 === h
                    ? void 0
                    : h.seatName,
                  "+"
                )
                .concat(
                  null == L || null === (N = L[1]) || void 0 === N
                    ? void 0
                    : N.seatName
                )));
          var V = o.Z.formatDate(k, "M月D日"),
            g = o.Z.getWeekDayDesc(k),
            x = ""
              .concat(V, " ")
              .concat(g, " ")
              .concat(D ? "" : p),
            y = D ? "占座成功，待确认" : w;
          return (0,
          u.BX)(a.View, { className: "recommend-ticket-info-box", children: [(0, u.BX)(a.View, { className: "recommend-ticket-info-hd", children: [(0, u.tZ)(a.View, { className: "ticket-tag new", children: "新车票" }), (0, u.tZ)(a.View, { className: "ticket-info-hd-title", children: x }), (0, u.tZ)(a.View, { className: "ticket-status", children: y })] }), "train" == e && (0, u.tZ)(c.Z, { train: f.smartTicketInfo }), "stagger" == e && (0, u.tZ)(l.Z, { train: f.smartTicketInfo }), "cross" == e && (0, u.tZ)(s.Z, { train: f.smartTicketInfo }), "subtrain" == e && (0, u.tZ)(d.Z, { trainList: null == v || null === (n = v.combineTrainInfo) || void 0 === n ? void 0 : n.combineTrainDetailList }), D && (0, u.tZ)(r.Z, { ticketInfoList: null == I ? void 0 : I.ticketInfoList }), "subtrain" == e && (0, u.tZ)(m.Z, { className: "recommend-ticket-info-tip-list", tipList: Z })] });
        });
      },
    },
  ]);
})();
