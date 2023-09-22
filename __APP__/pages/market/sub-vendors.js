!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [21960],
    {
      42660: function (i, t, o) {
        o(52500), o(92954);
        var e = o(79910),
          n = o(3205),
          a = o(49120),
          d = {
            onLoad: function (i) {
              try {
                (0, a.showLoading)("");
                var t = (i || {}).url,
                  o = decodeURIComponent(t);
                if (o.startsWith("http"))
                  return (
                    (0, a.hideLoading)(),
                    void n.Z.twebview({ data: { url: o }, isNavigate: !1 })
                  );
                (0, a.hideLoading)(), this.redirectTo({ url: o });
              } catch (i) {
                (0, a.hideLoading)(), e.Z.relaunchHome();
              }
            },
          };
        t.Z = d;
      },
    },
  ]);
})();
