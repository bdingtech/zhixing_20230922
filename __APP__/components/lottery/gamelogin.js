"use strict";
"use strict";
var t = require("../../api/api.js");
module.exports = {
  init: function (a) {
    (a.generateRevParaLogin = function (e) {
      var r = a,
        o = {
          more_game_lott_cfg_id: r.data.sumLottCfgid,
          lott_cfg_id: e.lott_cfg_id,
          gid: e.gid,
          brand_id: r.properties.brandid,
        };
      return (
        (o.exchange_param = {
          echange_water_log: {
            actid: e.lott_cfg_id,
            brandid: r.properties.brandid,
            src_channel: t.secondChannel,
            src_module: "miniprogram_plugin",
          },
        }),
        1 === e.base_lott
          ? (o.lott_type = 0)
          : 1 === e.role_lott && (o.lott_type = 100),
        o
      );
    }),
      (a.switchGame = function () {
        var t = a.data.lottList[a.data.nowLotteryIndex].gid;
        wx.setStorageSync("plugin_gid", t),
          a.setData({ gid: t }),
          a.reportActive(t);
      }),
      (a.checkGetPrizeAndReport = function (t) {
        if (!a.data.isLogin)
          return (
            a.setData({ showLoginButton: !0, loginCallBack: "getPrize" }),
            a.triggerEvent("layerChange", { show: !0 }),
            !1
          );
        if (a.data.isLotting) return !1;
        var e = t.base_lott || 0,
          r = t.role_lott || 0;
        return 0 !== e || 0 !== r || t.satisfy_extra_lott
          ? (a.reportLott(e, r, t.gid), !0)
          : (a.setData({ showJumpPop: !0 }), !1);
      }),
      (a.reportLott = function (e, r, o) {
        1 === e
          ? (t.reportData({
              gid: o,
              brand_id: a.data.brandid,
              channel: "1002116",
            }),
            a.reportData("lottory_once", o))
          : 1 === r &&
            (t.reportData({
              gid: o,
              brand_id: a.data.brandid,
              channel: "1002112",
            }),
            a.reportData("lottory_twice", o));
      });
  },
};
