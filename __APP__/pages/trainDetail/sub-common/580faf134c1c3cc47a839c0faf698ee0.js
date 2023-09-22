!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [56906],
    {
      38434: function (e, n, t) {
        var s = t(52500),
          a = t(71515),
          i = t(48813);
        n.Z = s.default.memo(function (e) {
          var n = e.bannerInfo,
            t = void 0 === n ? null : n,
            s = e.customizeStyle,
            c = void 0 === s ? {} : s;
          return t
            ? (0, i.BX)(a.View, {
                className: "smart-pr-banner flex-align-items-center",
                style: c,
                children: [
                  (0, i.tZ)(a.Image, { className: "img", src: t.img }),
                  (0, i.tZ)(a.View, {
                    className: "tips-txt",
                    children: t.content,
                  }),
                ],
              })
            : (0, i.tZ)(i.HY, {});
        });
      },
    },
  ]);
})();
