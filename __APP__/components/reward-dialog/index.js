"use strict";
"use strict";
var e = require("../behaviors/commDialogBehavior"),
  o = require("../../api/api");
Component({
  behaviors: [e],
  properties: {
    brandid: String,
    goodsDetail: Object,
    chance: Number,
    allowTurnGame: { type: Boolean, value: !0 },
  },
  lifetimes: {
    attached: function () {
      console.log("领奖组件attached"), this.getRoleInfo();
      var e = this.properties.goodsDetail,
        t = {
          gid: e.gid,
          goodsType: e.goodscfg.displaytype,
          gameInfo: o.getGameInfo(),
          allowTurnGame: !0,
        };
      331 !== t.gid || this.properties.allowTurnGame || (t.allowTurnGame = !1),
        this.setData(t);
    },
    moved: function () {
      console.log("领奖组件moved");
    },
    detached: function () {
      console.log("领取组件detached"), this.exchangeGood(!1);
    },
  },
  pageLifetimes: {
    show: function () {
      this.getRoleInfo();
    },
  },
  data: { gid: "", goodsType: 0, roleInfo: null },
  methods: {
    getRoleInfo: function () {
      var e = this;
      o.getDefaultRole(function () {
        var o = wx.getStorageSync("plugin_roleInfo");
        e.setData({ roleInfo: o });
      });
    },
    clickLott: function () {
      this.triggerEvent("clickLott"), this.closeDialog();
    },
    exchangeGood: function () {
      var e =
        !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      if (o.Utils.isKeyExists(this.data, "roleInfo")) {
        var t = this,
          a = {},
          i = t.properties.goodsDetail,
          n = t.data.goodsType;
        (a.winningtime = i.winningtime),
          (a.orderid = i.orderid),
          (a.roleInfo = t.data.roleInfo),
          2 !== i.status &&
            1 === n &&
            o.httpRequest(
              {
                url: o.getRequestUrl("exchange", "welfare"),
                data: a,
                method: "POST",
                success: function (o) {
                  var a = o.msg || "兑换失败，请稍后再试";
                  o && "0" !== o.r && e
                    ? wx.showModal({ content: a, showCancel: !1 })
                    : t.setData({ "goodsDetail.status": 2 });
                },
              },
              !1
            );
      }
    },
  },
});
