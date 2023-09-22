"use strict";
"use strict";
var a = require("../behaviors/commDialogBehavior"),
  e = require("../../api/api");
Component({
  behaviors: [a],
  properties: {
    roleInfo: Object,
    gid: Number,
    tips: String,
    allowTurnGame: { type: Boolean, value: !0 },
  },
  attached: function () {
    var a = { gameInfo: e.getGameInfo(), allowTurnGame: !0 };
    331 !== this.properties.gid ||
      this.properties.allowTurnGame ||
      (a.allowTurnGame = !1),
      this.setData(a);
  },
  data: { showPlugin: !0 },
  methods: {
    gameLoginTips: function () {
      this.data.allowTurnGame ||
        wx.showToast({ title: "请自行在手机上登录", icon: "none" }),
        this.closeDialog(),
        e.reportData({ brand_id: this.data.brandid, channel: "1002114" });
    },
  },
});
