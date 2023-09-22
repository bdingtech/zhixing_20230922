"use strict";
"use strict";
var e = require("../../api/api.js");
Page({
  data: {
    roleList: [],
    step: 1,
    areaListCache: { 1: [], 2: [] },
    areaList: [],
    userInfo: null,
    plat: 1,
    area: 2,
    turnQqLogin: !1,
    isQqLogin: !1,
    needQqLogin: !0,
    brandid: "",
  },
  onLoad: function (e) {
    var t = {};
    e &&
      e.needQqLogin &&
      e.brandid &&
      ((t.needQqLogin = JSON.parse(e.needQqLogin)), (t.brandid = e.brandid)),
      (t.needQqLogin = wx.getStorageSync("plugin_needQqLogin")),
      (t.userInfo = wx.getStorageSync("plugin_userInfo")),
      (t.plat = "ios" == wx.getSystemInfoSync().platform ? 1 : 2),
      this.setData(t),
      this.queryRoleList();
  },
  queryRoleList: function () {
    var t = this,
      a = {};
    (a.plat = t.data.plat),
      e.httpRequest(
        {
          url: e.getRequestUrl("userGetRoleList"),
          data: a,
          success: function (e) {
            null != e &&
              "0" == e.r &&
              t.setData({ roleList: e.rolelist || [], step: 1 });
          },
        },
        !1
      );
  },
  selectRole: function (e) {
    var t = e.currentTarget.dataset.index,
      a = this.data.roleList[t];
    this.setIgameRole(a),
      wx.setStorageSync("plugin_roleInfo", a),
      wx.navigateBack();
  },
  setIgameRole: function (t) {
    e.httpRequest({
      url: e.getRequestUrl("setIgameRole"),
      data: { roleInfo: t },
      method: "POST",
      success: function () {},
    });
  },
  goStep: function (t) {
    var a = t.currentTarget.dataset.step,
      s = this;
    if ("2" == a) s.setData({ step: a });
    else if ("3" == a) {
      var r = t.currentTarget.dataset.area;
      if (s.data.areaListCache[r].length > 0)
        return (
          s.setData({ areaList: s.data.areaListCache[r], step: a, area: r }), !1
        );
      s.getSubZone(r);
    } else {
      var n = t.currentTarget.dataset.partion,
        i = {};
      (i.partion = n),
        (i.name = s.data.userInfo.nickName),
        (i.head = s.data.userInfo.avatarUrl),
        (i.plat = s.data.plat),
        (i.area = s.data.area),
        e.httpRequest(
          {
            url: e.getRequestUrl("userScanRole"),
            method: "POST",
            data: i,
            success: function (e) {
              var t = e.msg || "抱歉，添加角色失败，请确认您在该区服拥有角色！";
              "0" == e.r && (t = "恭喜，添加角色成功！！"),
                wx.showModal({
                  title: "系统提示",
                  content: t,
                  showCancel: !1,
                  success: function () {
                    "0" == e.r &&
                      (s.setIgameRole(e.roleinfo),
                      wx.setStorageSync("plugin_roleInfo", e.roleInfo),
                      wx.navigateBack());
                  },
                });
            },
          },
          !1
        );
    }
  },
  switchStep: function (e) {
    var t = e.currentTarget.dataset.step;
    this.setData({ step: t });
  },
  getSubZone: function (t) {
    var a = this;
    e.httpRequest(
      {
        url: e.getRequestUrl("getGameZone"),
        method: "POST",
        data: { idtype: t, plat: a.data.plat },
        success: function (e) {
          null != e &&
            "0" == e.r &&
            ((a.data.areaListCache[t] = e.list || []),
            a.setData({ areaList: a.data.areaListCache[t], step: 3, area: t }));
        },
      },
      !1
    );
  },
});
