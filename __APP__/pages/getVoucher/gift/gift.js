"use strict";
"use strict";
var t = require("../../../api/api.js"),
  e = require("../../common/js/expose");
Page({
  data: {
    status: 0,
    gid: wx.getStorageSync("plugin_gid"),
    cfgList: [],
    giftType: 1,
    popIndex: -1,
  },
  onLoad: function (t) {
    t && t.gid && (this.data.gid = t.gid);
    var e = wx.getStorageSync("plugin_letter");
    if (e && e.cfg_list) {
      for (var i in e.cfg_list)
        for (var a in e.cfg_list[i].lott_info)
          this.data.cfgList.push(e.cfg_list[i].lott_info[a]);
      this.setData({
        roleName: e.role_name,
        brandName: e.brand_name,
        cfgList: this.data.cfgList,
        pattern: e.pattern,
        gid: t.gid,
        giftType: e.gift_type,
      });
    }
    console.log(e),
      t &&
        100 !== parseInt(t.status) &&
        (console.log("status=", t.status), this.clickReceive()),
      this.reportData(parseInt(e.gift_type));
  },
  clickReceive: function () {
    if (0 == this.data.status) {
      var e = {},
        i = this;
      (e.brandid = wx.getStorageSync("plugin_brandid")),
        (e.gid = i.data.gid),
        console.log(e),
        t.httpRequest(
          {
            url: t.getRequestUrl("getReGift", "welfare"),
            data: e,
            method: "POST",
            success: function (t) {
              console.log(t);
              var e = {};
              t && "0" === t.r
                ? ((e.status = 100),
                  wx.setStorageSync("plugin_showEntrance", !1))
                : "19" === t.r &&
                  wx.showToast({ title: "暂无可接受的赠礼", icon: "none" }),
                i.setData(e);
            },
          },
          !1
        );
    }
  },
  reportData: function (i) {
    var a = wx.getStorageSync("plugin_brandid"),
      s = 1 === i ? "return_gift" : "new_gift";
    t.reportTlog({
      mercid: a,
      gid: this.data.gid,
      moduleid: 10021,
      operid: 1002108,
    }),
      e.reportExposeRequest("page_exposure", s, a, { gid: this.data.gid });
  },
  showDialog: function (t) {
    var e = t.target.dataset.index;
    console.log("弹框索引为", e),
      e === this.data.popIndex && (e = -1),
      this.setData({ popIndex: e });
  },
});
