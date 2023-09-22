!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [52593],
    {
      61537: function (t, i, c) {
        c.d(i, {
          Fn: function () {
            return p;
          },
          Jy: function () {
            return s;
          },
          ZX: function () {
            return o;
          },
          ir: function () {
            return n;
          },
          ow: function () {
            return a;
          },
          vt: function () {
            return e;
          },
        });
        var p,
          r = c(79792).default.partner,
          e = {
            auth:
              "zhixing" === r
                ? "https://pages.c-ctrip.com/ztrip/document/faceVerifyProtocol.html?appid=1003"
                : "https://pages.c-ctrip.com/ztrip/document/faceVerifyProtocol.html?appid=1002",
            service:
              "zhixing" === r
                ? "https://pages.ctrip.com/ztrip/document/privacypolicyzx.html?noticetype=0"
                : "https://pages.ctrip.com/ztrip/document/privacypolicy.html?noticetype=0",
            default:
              "zhixing" === r
                ? "https://pages.c-ctrip.com/ztrip/document/account_privacy.html"
                : "https://pages.c-ctrip.com/ztrip/document/protocol_tieyou.html",
            point: "https://"
              .concat(
                "zhixing" === r ? "m.suanya.com" : "m.tieyou.com",
                "/webapp/train/activity/static/ztrip/train/jifenchengche-info.html?partner="
              )
              .concat(
                "zhixing" === r ? "zhixing" : "tieyou",
                "&isHideHead=YES"
              ),
            t6order:
              "zhixing" === r
                ? "https://market.suanya.com/document/static/train/12306%E8%AE%A2%E5%8D%95%E6%8E%88%E6%9D%83%E5%8D%8F%E8%AE%AE.html"
                : "https://market.suanya.com/document/static/train/%E9%93%81%E5%8F%8B%E8%AE%A2%E5%8D%95%E6%8E%88%E6%9D%83%E5%8D%8F%E8%AE%AE.html",
          },
          n =
            "https://images3.c-ctrip.com/zt/activity/ztrip-train-12306/qrcode-zx.png",
          o =
            "https://images3.c-ctrip.com/zt/activity/ztrip-train-12306/qrcode-ty.png",
          a = {
            img_face_check:
              "zhixing" === r
                ? "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/yzq@3x.png"
                : "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/tyyzq@3x.png",
            img_face_check_suc:
              "zhixing" === r
                ? "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/slcg@3x.png"
                : "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/slcgty@3x.png",
            img_face_check_fail:
              "zhixing" === r
                ? "https://images3.c-ctrip.com/ztrip/train_xie/2022-01/img_faceID_sb_zx.png"
                : "https://images3.c-ctrip.com/ztrip/train_xie/2022-01/img_faceID_sb_ty.png",
          };
        !(function (t) {
          (t.NORMAL_STATUS = "0"),
            (t.SIGN_OUT = "1"),
            (t.NO_ACTIVITY = "2"),
            (t.FREEZE_STATUS = "6"),
            (t.NO_SIGN_UP = "-1"),
            (t.DEFAULT = "");
        })(p || (p = {}));
        var s = {
          privacyUrl:
            "zhixing" === r
              ? "https://pages.ctrip.com/ztrip/document/privacypolicyzx.html?noticetype=1"
              : "https://pages.ctrip.com/ztrip/document/privacypolicy.html?noticetype=1",
          faceVerifyUrl:
            "zhixing" === r
              ? "https://pages.c-ctrip.com/ztrip/document/faceVerifyProtocol.html?appid=1003"
              : "https://pages.c-ctrip.com/ztrip/document/faceVerifyProtocol.html?appid=1002",
        };
      },
    },
  ]);
})();
