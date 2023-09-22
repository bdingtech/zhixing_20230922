!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [88930],
    {
      16832: function (i, t, n) {
        n.d(t, {
          I2: function () {
            return e;
          },
          ZZ: function () {
            return m;
          },
          a8: function () {
            return p;
          },
          ky: function () {
            return c;
          },
          lU: function () {
            return a;
          },
        });
        var p,
          c,
          r = n(79792);
        (function (i) {
          (i.GDC = "GDC"), (i.KTZ = "KTZ"), (i.OTHER = "OTHER");
        })(p || (p = {})),
          (function (i) {
            (i.WECHAT = "WEIXIN"),
              (i.FRIEND_CIRCLE = "WEIXIN_CIRCLE"),
              (i.SAVE_TO_LOCAL = "SAVE_TO_LOCAL"),
              (i.DELETE = "DELETE");
          })(c || (c = {}));
        var e = [
            {
              name: "二代车票样式",
              smallImg:
                "https://images3.c-ctrip.com/ztrip/train_xie/2022-06/img_xcp_3.png",
              type: p.KTZ,
              bg: r.default.isTieyou
                ? "https://images3.c-ctrip.com/ztrip/train_xie/2022-05/fx_fgcp_ty.png"
                : "https://images3.c-ctrip.com/ztrip/train_xie/2022-06/img_hscp.png",
            },
            {
              name: "三代车票样式",
              smallImg:
                "https://images3.c-ctrip.com/ztrip/train_xie/2022-06/img_xcp_1.png",
              type: p.GDC,
              bg: "https://images3.c-ctrip.com/ztrip/train_xie/2022-06/img_lscp.png",
            },
          ],
          m = { GDC: "蓝色", KTZ: "粉色" },
          a = {
            KTZ: "https://images3.c-ctrip.com/ztrip/train_xie/jncp/old/hong_miniThumbnail.webp",
            GDC: "https://images3.c-ctrip.com/ztrip/train_xie/jncp/old/lan_miniThumbnail.webp",
          };
      },
    },
  ]);
})();
