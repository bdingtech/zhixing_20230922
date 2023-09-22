!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [88540],
    {
      73751: function (i, t, e) {
        var n = e(90129),
          a = (e(92954), e(52500)),
          c = e(71515),
          o = e(99655),
          r = e(48813);
        t.Z = a.default.memo(function (i) {
          var t = i.train,
            e = (0, a.useState)(!1),
            s = (0, n.Z)(e, 2),
            l = s[0],
            d = s[1];
          if (!t) return (0, r.tZ)(c.View, {});
          return (0, r.BX)(c.View, {
            className: "original-ticket-info-box",
            children: [
              (0, r.BX)(c.View, {
                className: "original-ticket-info-hd",
                children: [
                  (0, r.tZ)(c.View, {
                    className: "ticket-tag old",
                    children: "原车票",
                  }),
                  (0, r.BX)(c.View, {
                    className: "ticket-info-hd-title",
                    children: [t.trainNo, " ", t.fromStation, "-", t.toStation],
                  }),
                  (0, r.BX)(c.View, {
                    className: "ticket-desc",
                    children: [
                      (0, r.tZ)(c.View, {
                        className: "sell-out-tag bd-1rpx",
                        children: "已售罄",
                      }),
                      (0, r.tZ)(c.View, {
                        className: "ifont-arrdown2 iconfont ".concat(
                          l ? "active" : ""
                        ),
                        id: "AABw",
                        onClick: function () {
                          d(!l);
                        },
                      }),
                    ],
                  }),
                ],
              }),
              l && (0, r.tZ)(o.Z, { train: t }),
            ],
          });
        });
      },
    },
  ]);
})();
