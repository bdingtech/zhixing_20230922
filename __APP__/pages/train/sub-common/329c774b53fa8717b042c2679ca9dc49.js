!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [96468],
    {
      24565: function (t, e, i) {
        i(52500);
        var r = i(71515),
          n = i(73689),
          s = i(79792),
          o = i(48813),
          a = function (t) {
            return "normal" === t
              ? "https://images3.c-ctrip.com/ztrip/train.xin/2012_12/share_".concat(
                  s.default.isTieyou ? "ty" : "zx",
                  "@3x.png"
                )
              : "https://images3.c-ctrip.com/ztrip/train.song/grab/bqxqy/img_hybqfx".concat(
                  s.default.isTieyou ? "_ty" : "",
                  "@3x.png"
                );
          };
        e.Z = function (t) {
          var e = t.type,
            i = void 0 === e ? "normal" : e,
            s = t.title,
            c = void 0 === s ? "" : s,
            p = t.desc,
            l = void 0 === p ? "" : p,
            u = t.shareUrl,
            h = t.visible,
            b = t.onClose;
          return (0, o.tZ)(r.View, {
            children:
              u &&
              (0, o.tZ)(n.Z, {
                isPreRequest: !1,
                visible: h,
                width: 560,
                height: 780,
                shareUrl: u,
                templateKey: "robticket/robticket_share_picture",
                extraParams: { bgImg: a(i), title: c, desc: l },
                onClose: b,
              }),
          });
        };
      },
    },
  ]);
})();
