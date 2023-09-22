!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [45542],
    {
      15798: function (t, e, n) {
        var a = n(90129),
          i = n(52500),
          r = n(71515),
          l = n(48813),
          c = [
            "正在为您占座，请稍候",
            "正在为您核实座位，加急处理中",
            "当前铁路系统拥挤，请稍候",
            "正在为您锁定座位，请耐心等待",
          ];
        e.Z = i.default.memo(function () {
          var t = (0, i.useState)(!0),
            e = (0, a.Z)(t, 2),
            n = e[0],
            o = e[1];
          return (0, l.tZ)(r.Swiper, {
            interval: 3e3,
            vertical: !0,
            autoplay: n,
            className: "train-hold-seating-swiper",
            onChange: function (t) {
              var e;
              ((null == t || null === (e = t.detail) || void 0 === e
                ? void 0
                : e.current) || 0) ===
                c.length - 1 && o(!1);
            },
            children:
              c &&
              c.map(function (t, e) {
                return (0,
                l.tZ)(r.SwiperItem, { children: (0, l.tZ)(r.View, { className: "hold-seating-txt", children: t }) }, "hold_seating_text_".concat(e));
              }),
          });
        });
      },
    },
  ]);
})();
