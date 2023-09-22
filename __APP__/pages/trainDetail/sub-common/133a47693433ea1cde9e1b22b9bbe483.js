!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [9481],
    {
      39841: function (t, e, n) {
        n.d(e, {
          M: function () {
            return v;
          },
        });
        var r = n(57042),
          u = n(24460),
          i = n(21867),
          a = n(86066),
          o = n(45023),
          s = n(49120),
          c = n(41991);
        function v(t) {
          var e = t.models,
            n = (function (t) {
              (0, i.Z)(n, t);
              var e = (0, a.Z)(n);
              function n() {
                return (0, r.Z)(this, n), e.apply(this, arguments);
              }
              return (
                (0, u.Z)(n, null, [
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
                  {
                    key: "getPage",
                    value: function () {
                      var t;
                      return (
                        (null === (t = this.getInstance()) || void 0 === t
                          ? void 0
                          : t.page) || (0, s.getCurrentPage)()
                      );
                    },
                  },
                ]),
                n
              );
            })(c.Z);
          return (0, o.Z)(n, "store", { models: e }), n;
        }
      },
    },
  ]);
})();
