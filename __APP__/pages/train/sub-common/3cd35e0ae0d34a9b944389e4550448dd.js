!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [80391],
    {
      22672: function (a, e, t) {
        var i = t(79792),
          s = t(71515),
          p = (t(52500), t(48813));
        e.Z = function () {
          var a = i.default.isTieyou
            ? "https://images3.c-ctrip.com/ztrip/train.song/order_details/V10.0/xy/img_gpslogan@3x.webp"
            : "wx76dcd806f382ec8e" !== i.default.appId
            ? "https://images3.c-ctrip.com/ztrip/train.song/order_details/V10.0/lby/img_gp_slogan_mj@3x.webp"
            : "https://images3.c-ctrip.com/ztrip/train.song/order_details/V10.0/img_hcpx@3x.webp";
          return (0, p.tZ)(s.View, {
            className: "slogan-box",
            children: (0, p.tZ)(s.Image, {
              className: "app-slogan ".concat(
                "wx76dcd806f382ec8e" === i.default.appId ? "new-slogan" : ""
              ),
              src: a,
              webp: !0,
              mode: "widthFix",
              lazyLoad: !0,
            }),
          });
        };
      },
    },
  ]);
})();
