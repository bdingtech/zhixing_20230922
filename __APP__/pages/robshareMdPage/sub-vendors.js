!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [76056],
    {
      40240: function (n, t, a) {
        var e = a(79910),
          o = a(95990),
          c = a(92954),
          r = a.n(c);
        t.Z = {
          data: {},
          onLoad: function (n) {
            var t = decodeURIComponent(e.Z.stringifyQuery(n));
            try {
              (0, o.e)({ type: "rob", path: this.$instance.router.path });
            } catch (n) {}
            r().reLaunch({ url: "/pages/robshareV3/index?".concat(t) });
          },
        };
      },
    },
  ]);
})();
