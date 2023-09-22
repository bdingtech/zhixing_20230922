"use strict";
"use strict";
var t = require("../../api/api.js");
Page({
  data: {},
  onLoad: function () {
    var a = this,
      i = { brandid: wx.getStorageSync("plugin_brandid") };
    t.httpRequest({
      url: "https://a.igame.qq.com/pmdtrpc.commcgi.tipcgi.tipcgi/GetPrivacyText",
      data: i,
      method: "POST",
      success: function (t) {
        a.setData({ text: t.text });
      },
    });
  },
});
