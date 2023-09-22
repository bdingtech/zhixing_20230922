!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [57714],
    {
      50196: function (t, n, e) {
        e.d(n, {
          M: function () {
            return c;
          },
        });
        var r = e(57042),
          u = e(24460),
          i = e(21867),
          o = e(86066),
          s = e(45023),
          a = e(69410);
        function c(t) {
          var n = t.models,
            e = (function (t) {
              (0, i.Z)(e, t);
              var n = (0, o.Z)(e);
              function e() {
                return (0, r.Z)(this, e), n.apply(this, arguments);
              }
              return (
                (0, u.Z)(e, null, [
                  {
                    key: "getDispatch",
                    value: function () {
                      var t;
                      return (
                        null === (t = this.getInstance()) || void 0 === t
                          ? void 0
                          : t.store
                      ).dispatch;
                    },
                  },
                  {
                    key: "getState",
                    value: function () {
                      var t;
                      return (
                        null === (t = this.getInstance()) || void 0 === t
                          ? void 0
                          : t.store
                      ).getState();
                    },
                  },
                ]),
                e
              );
            })(a.Z);
          return (0, s.Z)(e, "store", { models: n }), e;
        }
      },
    },
  ]);
})();
