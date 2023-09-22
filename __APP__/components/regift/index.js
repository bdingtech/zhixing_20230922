"use strict";
"use strict";
var t = require("../../api/api.js"),
  e = require("../../pages/common/js/expose");
Component({
  properties: {
    brandid: { type: String, value: "" },
    showPrize: { type: Boolean, value: !1 },
    fontColor: { type: String, value: "" },
    backgroundColor: { type: String, value: "" },
    gid: { type: Number, value: 411 },
  },
  data: {
    isshow: !1,
    letter: "",
    showRedDot: "red-dot",
    hasReport: !1,
    gameInfo: t.getGameInfo(),
    reGiftClassNull: "regift-null",
    bgNull: "bg-null",
    bgBlock: "",
    prizeList: [],
    status: 0,
    widthRatio: 100,
  },
  created: function () {},
  attached: function () {
    console.log("回流礼组件创建"), e.init(this, this.properties.gid);
  },
  detached: function () {},
  pageLifetimes: {
    show: function () {
      (wx.getStorageSync("plugin_onlyShowEntrance") || this.data.isshow) &&
        this.isReGift();
    },
  },
  methods: {
    isReGift: function () {
      var e = {},
        i = this;
      (e.brandid = wx.getStorageSync("plugin_brandid")),
        (e.gid = i.properties.gid),
        console.log(e),
        t.httpRequest(
          {
            url: t.getRequestUrl("isReGift", "welfare"),
            data: e,
            method: "POST",
            success: function (t) {
              console.log("isReGift", t);
              var e = {};
              t && "0" === t.r && t.letter && t.letter.cfg_list
                ? ((e.isshow = !0),
                  setTimeout(function () {
                    i.setData({ bgNull: "" });
                  }, 500),
                  setTimeout(function () {
                    i.setData({
                      reGiftClassNull: "",
                      bgBlock: "bg-block",
                      reGiftClass: "regift-null",
                    });
                  }, 1500),
                  (e.giftInfo = t.letter.cfg_list[0].lott_info[0]),
                  (e.prizeList = t.letter.cfg_list[0].lott_info),
                  t.res_info.letter_status &&
                    (e.status = t.res_info.letter_status),
                  wx.setStorageSync("plugin_letter", t.letter),
                  i.reportData(t.letter.gift_type))
                : (e.isshow = !1),
                i.setData(e, function () {
                  i.triggerEvent("hasRegift", { show: e.isshow }),
                    i.animation(),
                    i.judgeScreen();
                });
            },
          },
          !1
        );
    },
    animation: function () {
      var t = this.data.status,
        e = this;
      setTimeout(function () {
        e.setData({ bgNull: "" });
      }, 500),
        setTimeout(
          function () {
            e.setData({
              reGiftClassNull: "",
              bgBlock: "bg-block",
              reGiftClass: "regift-null",
            });
          },
          0 === t ? 1500 : 1
        );
    },
    goGiftPage: function () {
      this.setData({ showRedDot: "" }),
        e.reportExposeRequest(
          "click.backflow",
          this.data.secondChannel,
          this.properties.brandid,
          { actid: "ActRetgift", actType: "back_gift" }
        );
    },
    reportData: function (i) {
      if (!this.data.hasReport) {
        this.data.hasReport = !0;
        var o = wx.getStorageSync("plugin_brandid"),
          s = 1 === i ? "return_gift" : "new_gift";
        t.reportTlog({
          mercid: o,
          moduleid: 10021,
          operid: 1002107,
          objectid: s,
          gid: this.data.gid,
        }),
          e.reportExposeRequest("award_exposure", s, o, {
            actid: "ActRetgift",
            actType: "back_gift",
          }),
          this.setData({ secondChannel: s });
      }
    },
    judgeScreen: function () {
      var t = this.createSelectorQuery(),
        e = this;
      t.select(".tip-plugin-wrap").boundingClientRect(),
        t.exec(function (t) {
          if (t && t[0]) {
            var i = t[0].width,
              o = wx.getSystemInfoSync().windowWidth;
            e.setData({ widthRatio: (100 * i) / o });
          }
        });
    },
  },
});
