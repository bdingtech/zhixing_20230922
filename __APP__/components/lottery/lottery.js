"use strict";
"use strict";
var t,
  i = require("../../@babel/runtime/helpers/interopRequireDefault")(
    require("../../@babel/runtime/regenerator")
  ),
  e = require("../../@babel/runtime/helpers/asyncToGenerator"),
  a = require("../../api/api.js"),
  n = require("../../pages/common/js/expose"),
  o = require("./gamelogin"),
  r = require("./animation");
Component({
  properties: {
    brandid: { type: String, value: "b1610444147" },
    cfgid: { type: String, value: "" },
    bannerSideSpacing: { type: String, value: "24" },
    lotterySideSpacing: { type: String, value: "22" },
  },
  data: {
    hasPvReport: {},
    hasUvReport: {},
    sumLottCfgid: "",
    lottList: [],
    lottIndex: -1,
    waterList: [],
    awardIndex: {},
    gidNum: 0,
    roleInfo: null,
    showLoginButton: !1,
    isLogin: !1,
    showGiftPop: !1,
    showRules: !1,
    showJumpPop: !1,
    gameInfo: a.getGameInfo(),
    timer: null,
    itemWidth: "",
    scrollLeft: {},
    isAnime: !1,
    isLotting: !1,
    times: {},
    allowTurnGame: !1,
    loginCallBack: "",
    windowWidth: wx.getSystemInfoSync().windowWidth,
  },
  attached:
    ((t = e(
      i.default.mark(function t() {
        var e;
        return i.default.wrap(
          function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  return (
                    this.init(),
                    wx.setStorageSync(
                      "plugin_brandid",
                      this.properties.brandid
                    ),
                    (t.next = 4),
                    a.Utils.getElementWidth(this, ".widthclass")
                  );
                case 4:
                  (e = t.sent),
                    this.setData({
                      widthRatio: (100 * e) / this.data.windowWidth,
                    }),
                    console.log("attached 执行"),
                    n.init(this),
                    o.init(this),
                    r.init(this);
                case 10:
                case "end":
                  return t.stop();
              }
          },
          t,
          this
        );
      })
    )),
    function () {
      return t.apply(this, arguments);
    }),
  pageLifetimes: {
    show: function () {
      this.init();
    },
  },
  methods: {
    init: function () {
      var t = this;
      a.wxLogin(
        function () {
          t.setData({ isLogin: !0 }),
            (t.data.isLogin = !0),
            t.getBrandLottInfo(),
            t.getRoleInfo();
        },
        function () {
          t.getBrandLottInfo();
        }
      );
    },
    loginSuccess: function () {
      var t = this;
      t.data.gidNum > 1 && (t.data._showLoginTip = !0),
        a.wxLogin(function () {
          (t.data.isLogin = !0),
            "function" == typeof t[t.data.loginCallBack] &&
              t[t.data.loginCallBack]();
        });
    },
    getBrandLottInfo: function () {
      var t = this,
        n = {
          brand_id: this.properties.brandid,
          more_game_lott_cfg_id: this.properties.cfgid,
          plat_type: "ios" === wx.getSystemInfoSync().platform ? 2 : 1,
          appid: a.Utils.getPluginAppid(),
        };
      t.data._showLoginTip &&
        wx.showToast({
          title: "游戏推荐中...",
          icon: "loading",
          duration: 3e4,
        }),
        a.httpRequest(
          {
            url: "https://api.igame.qq.com/merc.plugin.brandlott_cgi.brandlott_cgi/QueryMoreGameBrandLottActInfo",
            data: n,
            method: "POST",
            success: function (n) {
              console.log("首页信息", n);
              var o = {
                gidNum: n.gid_num,
                sumLottCfgid: n.more_game_lott_cfg_id,
                allowTurnGame: !!n.turn_cloud_game,
              };
              if (
                (n.not_login_lott_cfg_info &&
                  (o.noLoginCfg = n.not_login_lott_cfg_info),
                n.brand_lott_info &&
                  ((o.lottList = n.brand_lott_info.slice(0, 1)),
                  -1 === t.data.lottIndex))
              ) {
                var r = o.lottList[0].gid;
                (o.lottIndex = 0),
                  t.reportActive(r),
                  wx.setStorageSync("plugin_gid", r);
              }
              t.setData(
                o,
                e(
                  i.default.mark(function e() {
                    var n;
                    return i.default.wrap(function (i) {
                      for (;;)
                        switch ((i.prev = i.next)) {
                          case 0:
                            return (
                              (i.next = 2),
                              a.Utils.getElementWidth(t, ".reward-item")
                            );
                          case 2:
                            (n = i.sent),
                              t.setData({
                                itemWidth: n * (750 / t.data.windowWidth),
                              });
                          case 4:
                          case "end":
                            return i.stop();
                        }
                    }, e);
                  })
                )
              ),
                t.data._showLoginTip &&
                  ((t.data._showLoginTip = !1), wx.hideToast()),
                n.remind_toast &&
                  wx.showToast({
                    title: n.remind_toast,
                    icon: "none",
                    duration: 3e3,
                  }),
                t.reportActive();
            },
          },
          !1
        );
    },
    regift: function () {
      this.selectComponent("#regift") &&
        "function" == typeof this.selectComponent("#regift").isReGift &&
        (console.log("回流礼查询"), this.selectComponent("#regift").isReGift());
    },
    getPrize: function () {
      var t = this.data.lottIndex,
        i = this.data.lottList[t],
        e = this,
        n = {};
      if (
        (this.reportData("click.lottory", i.gid),
        this.checkGetPrizeAndReport(i))
      ) {
        (e.data.isLotting = !0),
          (n.lott_plugin_type = 4),
          (n.lott_by_game = this.generateRevParaLogin(i));
        a.httpRequest(
          {
            url: "https://api.igame.qq.com/merc.plugin.brandlott_cgi.brandlott_cgi/BrandPluginLott",
            data: n,
            method: "POST",
            success: function (a) {
              console.log("中奖", a);
              var n = {};
              if (a.ret || !a.waters) {
                if (252180004 === a.ret || 252180006 === a.ret)
                  return (
                    wx.showToast({
                      title: "今天的抽奖机会用完了，明天再来吧",
                      icon: "none",
                    }),
                    void e.setData({ isLotting: !1 })
                  );
                n["awardIndex[".concat(t, "]")] = i.lott.gifts.length;
              } else
                for (var o in ((n.waterList = a.waters), i.lott.gifts))
                  for (var r in a.waters)
                    if (a.waters[r].giftid === i.lott.gifts[o].gift.giftid) {
                      n["awardIndex[".concat(t, "]")] = o;
                      break;
                    }
              e.setData(n, function () {
                e.lottAnimation();
              }),
                e.getBrandLottInfo();
            },
            complete: function () {
              e.data.isLotting = !1;
            },
          },
          !1
        );
      }
    },
    dealDialog: function (t) {
      console.log(t);
      var i = {},
        e = t.currentTarget.id;
      (i[e] = !this.data[e]),
        this.triggerEvent("layerChange", { show: i[e] }),
        this.setData(i);
    },
    reportData: function (t, i) {
      var e = this.data.lottList[this.data.lottIndex],
        o = {};
      (o.gid = i || e.gid),
        a.Utils.isKeyExists(e, "lott_cfg_info.lott_cfg_id") &&
          (o.actid = e.lott_cfg_info.lott_cfg_id),
        n.reportExposeRequest(t, a.secondChannel, this.data.brandid, o);
    },
    getRoleInfo: function () {
      var t = this;
      a.getDefaultRole(function () {
        var i = wx.getStorageSync("plugin_roleInfo");
        t.setData({ roleInfo: i });
      });
    },
    reportActive: function () {
      var t =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 100;
      this.data.hasPvReport[t] ||
        ((this.data.hasPvReport[t] = !0),
        a.reportData({
          gid: t,
          brand_id: this.data.brandid,
          channel: "1002117",
        }),
        this.reportData("page_exposure", t)),
        this.data.isLogin &&
          !this.data.hasUvReport[t] &&
          ((this.data.hasUvReport[t] = !0),
          a.reportData({
            gid: t,
            brand_id: this.data.brandid,
            channel: "1002111",
          }),
          this.reportData("sign_in", t),
          100 === t && this.regift());
    },
  },
});
