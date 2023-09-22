"use strict";
"use strict";
var t = require("../../../api/api.js");
Page({
  data: {
    tabs: ["未使用", "已使用", "已过期"],
    activeIndex: 0,
    num: 10,
    list: [[], [], []],
    isLoading: !1,
    hasMore: [!0, !0, !0],
    lastTime: [0, 0, 0],
    brandid: "",
    extraGift: [],
    giftTime: 5,
  },
  onLoad: function (t) {
    console.log(t),
      t && t.tabindex && (this.data.activeIndex = t.tabindex),
      t && t.brandid && (this.data.brandid = t.brandid),
      this.setData({ gid: t.gid || wx.getStorageSync("plugin_gid") });
    var a = this,
      i = {},
      e = setInterval(function () {
        a.data.giftTime--,
          (i.giftTime = a.data.giftTime),
          0 == a.data.giftTime && (clearInterval(e), a.extraGiftList(!0)),
          a.setData(i);
      }, 1e3);
  },
  onShow: function () {
    (this.data.isLoading = !1),
      (this.data.list = [[], [], []]),
      (this.data.lastTime = [0, 0, 0]),
      (this.data.hasMore = [!0, !0, !0]),
      this.queryUserGoodsList(),
      this.extraGiftList();
  },
  queryUserGoodsList: function () {
    if (
      (console.log(
        this.data.isLoading,
        !this.data.hasMore[this.data.activeIndex]
      ),
      !this.data.isLoading && this.data.hasMore[this.data.activeIndex])
    ) {
      this.data.isLoading = !0;
      var a = this.data.activeIndex,
        i = {};
      0 == a
        ? (i.status = 4)
        : 1 == a
        ? (i.status = 2)
        : 2 == a && (i.status = 6),
        (i.filter2 = this.data.brandid),
        (i.ltime = this.data.lastTime[a]),
        (i.num = this.data.num),
        (i.type = 1),
        331 != this.data.gid && (i.gid = this.data.gid);
      var e = this;
      t.httpRequest({
        url: t.getRequestUrl("queryUserGoodsList", "welfare"),
        data: i,
        success: function (t) {
          console.log(t);
          var s = {},
            d = e.data.list,
            r = e.data.hasMore,
            n = e.data.lastTime;
          if (t && "0" == t.r && t.waterlist.length > 0) {
            var o = t.waterlist.length;
            (d[a] = d[a].concat(t.waterlist)),
              (s.list = d),
              o < i.num && ((r[a] = !1), (s.hasMore = r)),
              (n[a] = t.waterlist[o - 1].winningtime),
              (s.lastTime = n),
              (s.isLoading = !1);
          } else t && "19" == t.r && ((d[a] = []), (s.list = d));
          console.log("tmp", s), e.setData(s);
        },
        complete: function () {
          e.data.isLoading = !1;
        },
      });
    }
  },
  clostCurrentFlod: function () {
    this.extraGiftList(!0);
  },
  extraGiftList: function (a) {
    var i = {},
      e = this;
    (i.status = 4),
      (i.filter2 = this.data.brandid),
      (i.ltime = 0),
      (i.num = 5),
      (i.type = 1),
      (i.from_cyc = 100),
      a && (i.remove_cyc_pop = 100),
      331 != this.data.gid && (i.gid = this.data.gid),
      t.httpRequest(
        {
          url: t.getRequestUrl("queryUserGoodsList", "welfare"),
          data: i,
          success: function (t) {
            var i = {};
            t && "0" == t.r && t.waterlist.length > 0
              ? ((i.extraGift = t.waterlist), a && (i.extraGift = []))
              : (i.extraGift = []),
              e.setData(i);
          },
          complete: function () {
            e.data.isLoading = !1;
          },
        },
        !1
      );
  },
  tabClick: function (t) {
    this.setData({ activeIndex: t.currentTarget.id });
    var a = this.data.list,
      i = this.data.hasMore[t.currentTarget.id];
    console.log("hasMore", i),
      0 == a[t.currentTarget.id].length && i && this.queryUserGoodsList();
  },
  turnGoodDetail: function (a) {
    var i = this.data.activeIndex,
      e = a.currentTarget.dataset.index,
      s = this.data.list[i][e];
    s &&
      s.goodscfg &&
      t.switchToGoodDetail(s.winningtime, "goods_list", s.orderid);
  },
  godetail: function (a) {
    var i = a.currentTarget.dataset.index,
      e = this.data.extraGift[i];
    e &&
      e.goodscfg &&
      t.switchToGoodDetail(e.winningtime, "goods_list", e.orderid);
  },
});
