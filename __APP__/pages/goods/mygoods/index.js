"use strict";
"use strict";
var t = require("../../../api/api.js"),
  e = require("../../common/js/mygoods.js");
Page({
  data: {
    channel: "goods_dialog",
    _winningtime: 0,
    goodDetail: null,
    statusClassArray: { 2: "goods-used", 6: "goods-cannouse" },
    cdkey: "",
    isCanvas: !1,
    brandName: "",
    brandId: "",
    showQQInput: !1,
    recvuid: "",
    isQQlogin: !1,
    showBoxPrize: !1,
    roleInfo: null,
    isPhoneNum: !0,
    showPhone: !1,
    isCode: !1,
    addrInput: !1,
    name: "",
    phone: "",
    code: "",
    region: "选择地区",
    province: "",
    city: "",
    district: "",
    detailAddr: "",
    showregion: "选择地区",
    isUser: "填写",
  },
  onLoad: function (t) {
    t && t.winningtime && (this.data._winningtime = t.winningtime),
      t && t.channel && (this.data.channel = t.channel),
      e.init(this),
      this.setData({ gid: wx.getStorageSync("plugin_gid") });
    var a = wx.getStorageSync("plugin_userInfo");
    a && this.setData({ nickName: a.nickName });
  },
  onShow: function () {
    var e = this;
    t.getDefaultRole(function () {
      var t = wx.getStorageSync("plugin_roleInfo");
      e.setData({ roleInfo: t });
    }),
      this.data._winningtime > 0 && this.getGoodDetail(this.data._winningtime);
  },
  onUnload: function () {
    this.data.timer && clearInterval(this.data.timer);
  },
  onHide: function () {
    this.data.timer && clearInterval(this.data.timer);
  },
  showAddr: function () {
    var t = {},
      e = this.data.goodDetail;
    console.log("goodDetail", e),
      e &&
        e.useraddr &&
        ((t.name = e.useraddr.name),
        (t.phone = e.useraddr.mobile),
        (t.code = e.useraddr.zipcode),
        (t.detailAddr = e.useraddr.detail_addr),
        "北京市" === e.useraddr.province ||
        "天津市" === e.useraddr.province ||
        "上海市" === e.useraddr.province ||
        "重庆市" === e.useraddr.province ||
        "香港特别行政区" === e.useraddr.province ||
        "澳门特别行政区" === e.useraddr.province
          ? (t.region = e.useraddr.province + e.useraddr.district)
          : (t.region =
              e.useraddr.province + e.useraddr.city + e.useraddr.district),
        console.log(t.region.length),
        (t.province = e.useraddr.province),
        (t.district = e.useraddr.district),
        (t.city = e.useraddr.city),
        (t.isUser = "修改"),
        t.region.length > 6
          ? (t.showregion = t.region.substr(0, 5) + "...")
          : (t.showregion = t.region)),
      (t.addrInput = !0),
      (t.coverShow = !0),
      this.setData(t);
  },
  cancelBtn: function () {
    this.setData({ addrInput: !1, coverShow: !1 });
  },
  inputCont: function (t) {
    var e = t.target.id,
      a = {};
    (a[e] = t.detail.value.replace(/\s+/g, "")), this.setData(a);
  },
  bindRegionChange: function (t) {
    console.log("picker发送选择改变，携带值为", t.detail.value);
    var e = {};
    (e.province = t.detail.value[0]),
      (e.district = t.detail.value[2]),
      (e.city = t.detail.value[1]),
      "北京市" === t.detail.value[0] ||
      "天津市" === t.detail.value[0] ||
      "上海市" === t.detail.value[0] ||
      "重庆市" === t.detail.value[0] ||
      "香港特别行政区" === t.detail.value[0] ||
      "澳门特别行政区" === t.detail.value[0]
        ? (e.region = t.detail.value[0] + "" + t.detail.value[2])
        : (e.region =
            t.detail.value[0] + "" + t.detail.value[1] + t.detail.value[2]),
      e.region.length > 6
        ? (e.showregion = e.region.substr(0, 5) + "...")
        : (e.showregion = e.region),
      this.setData(e);
  },
  exchange: function () {
    var e = this,
      a = {},
      i = this.data.type;
    if (
      ((a.winningtime = e.data._winningtime),
      e.data.recvuid && (a.recvuid = e.data.recvuid),
      (1 !== this.data.type && 2 !== this.data.type) ||
        (a.roleInfo = e.data.roleInfo),
      5 === i)
    ) {
      if (!e.data.name)
        return void wx.showToast({ title: "请填写收件人", icon: "none" });
      if (!e.data.phone)
        return void wx.showToast({ title: "请填写手机号", icon: "none" });
      if (!/^1[23456789]\d{9}$/.test(e.data.phone))
        return void wx.showToast({ title: "手机号格式不正确", icon: "none" });
      if (!e.data.code)
        return void wx.showToast({ title: "请填写邮编", icon: "none" });
      if ("选择地区" === this.data.region)
        return void wx.showToast({ title: "请选择地区", icon: "none" });
      if (!e.data.detailAddr)
        return void wx.showToast({ title: "详细地址", icon: "none" });
      (a.name = e.data.name),
        (a.phoneNumber = e.data.phone),
        (a.code = e.data.code),
        (a.province = e.data.province),
        "" !== e.data.city && (a.city = e.data.city),
        (a.district = e.data.district),
        (a.detail_addr = e.data.detailAddr);
    }
    t.httpRequest({
      url: t.getRequestUrl("exchange", "welfare"),
      data: a,
      method: "POST",
      success: function (a) {
        console.log("res", a);
        var o = a.msg || "兑换失败，请稍后再试";
        if (a && "0" === a.r)
          if (31 === i) {
            var n = {};
            if (
              a.goodDetail &&
              a.goodDetail.extrainfo.treasurewaterinfo.ok_gift.giftid &&
              0 !== a.goodDetail.extrainfo.treasurewaterinfo.ok_gift.giftid
            ) {
              n.showBoxPrize = !0;
              var r = {},
                d = a.goodDetail.extrainfo.treasurewaterinfo.ok_gift;
              (r.name = d.name),
                (r.pic = d.pic),
                (r._winningtime =
                  a.goodDetail.extrainfo.treasurewaterinfo.winningtime),
                (r.expiretime_txt = t.formatDate(
                  new Date(
                    1e3 * a.goodDetail.extrainfo.treasurewaterinfo.overduetime
                  ),
                  "yyyy-MM-dd"
                )),
                (r.giftAttention =
                  "请在有效期" + r.expiretime_txt + "内兑换并使用"),
                (n.prizeInfo = r);
            } else
              wx.showModal({
                title: "很遗憾，没有中奖哦，再接再厉哦！",
                content: "",
                showCancel: !1,
                confirmText: "我知道了",
              });
            e.setData(n);
          } else {
            wx.showToast({ title: "兑换成功", icon: "success" });
            var s = e.data.goodDetail;
            (1 !== e.data.type && 2 !== e.data.type) ||
              ((s.role = a.goodDetail.role), (s.status = 2)),
              e.data.recvuid && (s.recvuid = e.data.recvuid),
              e.setData({
                goodDetail: s,
                addrInput: !1,
                coverShow: !1,
                showQQInput: !1,
              });
          }
        else
          31 === i
            ? wx.showModal({
                title: "很遗憾，没有中奖哦，再接再厉哦！",
                content: "",
                showCancel: !1,
                confirmText: "我知道了",
              })
            : wx.showToast({ title: o, icon: "none" });
        e.getGoodDetail(e.data._winningtime);
      },
    });
  },
  turnBrandPage: function () {
    var t = "/" + this.data.mpjumpurl;
    "/" == this.data.mpjumpurl.substring(0, 1) && (t = this.data.mpjumpurl),
      wx.reLaunch({
        url: t,
        fail: function () {
          wx.switchTab({ url: t });
        },
      });
  },
  qqInput: function (t) {
    var e = t.detail.value;
    console.log(e), this.setData({ recvuid: e });
  },
  isExchange: function () {
    if (4 === this.data.type) this.setData({ showQQInput: !0 });
    else if (7 === this.data.type) {
      this.exchange(
        "请到当前登录微信对应的微信钱包\r\n账号中领取，逾期无法领取"
      );
    }
  },
  closeInput: function () {
    this.setData({ showQQInput: !1 });
  },
  copy: function (t) {
    console.log(t);
    var e = t.currentTarget.dataset.url;
    wx.setClipboardData({
      data: e,
      success: function () {
        wx.showToast({ title: "复制成功" });
      },
    });
  },
  showCode: function () {
    this.setData({ showPhone: !0, isCanvas: !1 });
  },
  changeStatus: function () {
    var e = this,
      a = this.data.cdkey;
    console.log(a),
      t.httpRequest(
        {
          url: t.getRequestUrl("changeGoodsStatus", "welfare"),
          data: { oid: a },
          method: "POST",
          success: function (t) {
            console.log(t),
              "0" === t.r && e.getGoodDetail(e.data._winningtime, !1);
          },
        },
        !0
      );
  },
  trunGoodDetail: function () {
    if (this.data.prizeInfo) {
      var e = this.data.prizeInfo._winningtime,
        a = this.data.prizeInfo._orderid;
      t.switchToGoodDetail(e, "goods_dialog", a);
    }
  },
  closePrize: function () {
    this.setData({ showBoxPrize: !1 });
  },
});
