"use strict";
"use strict";
var e = require("../@babel/runtime/helpers/interopRequireDefault"),
  t = require("../@babel/runtime/helpers/typeof"),
  o = e(require("./auth.js")),
  n = e(require("./config.js")),
  i = e(require("./utils.js")),
  r = wx.getAccountInfoSync().miniProgram.appId;
console.log("当前小程序的appid为", r);
var a = wx.getAccountInfoSync().plugin.version;
"0.0.0" === a && (a = "2.5.3");
var l = !1;
module.exports = {
  _develop_flag: 0,
  _test_flag: 0,
  pluginType: "mixg_lottory_expand_plugin",
  _version: a,
  secondChannel: "lottory_expand_plugin",
  appid: r,
  wxLogin: function (e, t) {
    var o = this;
    console.log("是否正在登录中", l),
      l
        ? setTimeout(function () {
            "" !== wx.getStorageSync("plugin_openid")
              ? (console.log("登录成功，执行回调"),
                "function" == typeof e && e())
              : "function" == typeof t &&
                (console.log("登录失败，执行回调"), t());
          }, 1e3)
        : ((l = !0),
          wx.login({
            success: function (t) {
              wx.request({
                url: "https://igame.qq.com/wxproc/auth.php?_serviceid=7&_test_flag_=0",
                data: { code: t.code },
                header: {
                  "Content-Type": "application/json",
                  "Tip-Channel": "wxproc",
                },
                success: function (t) {
                  console.log("登录态返回结果为", t);
                  var n = "";
                  null !== t.data &&
                    "0" === t.data.r &&
                    ((n = t.data.openid),
                    wx.setStorageSync("plugin_openid", t.data.openid),
                    wx.setStorageSync("plugin_ticket", t.data._ticket),
                    wx.setStorageSync(
                      "plugin_ticket_expire_time",
                      t.data._ticket_expire_time
                    )),
                    "function" == typeof e && e(),
                    wx.getUserInfo({
                      withCredentials: !1,
                      success: function (e) {
                        wx.setStorageSync("plugin_userInfo", e.userInfo);
                        var t = e.userInfo;
                        o.setUserInfo(t.avatarUrl, t.nickName, n, 2, t.gender);
                      },
                      fail: function (e) {
                        console.log("获取用户信息失败"), console.log(e);
                      },
                    });
                },
                fail: function (e) {
                  console.log("获取ticket和openid失败！", e);
                },
              });
            },
            fail: function (e) {
              console.log("wx.login调用失败，结果为", e),
                "function" == typeof t && t();
            },
            complete: function () {
              l = !1;
            },
          }));
  },
  httpRequest: function (e, n) {
    var i = this,
      r = e.url,
      a = wx.getStorageSync("plugin_openid"),
      l = wx.getStorageSync("plugin_ticket");
    if (
      (void 0 === n && (n = !0),
      (e.url = e.url || ""),
      (e.data = e.data || {}),
      (e.method = e.method || "GET"),
      (e.dataType = e.dataType || "json"),
      e.header && "object" === t(e.header)
        ? (e.header["Tip-Channel"] = "wxproc")
        : (e.header = { "Tip-Channel": "wxproc" }),
      "" === e.url)
    )
      return wx.showToast({ title: "请求失败，url参数为空！" }), !1;
    e.url.indexOf("?") > -1
      ? (e.url += "&_serviceid=7&openid=" + a + "&_ticket=" + l)
      : (e.url += "?_serviceid=7&openid=" + a + "&_ticket=" + l),
      (e.url += "&cfgnode=pvp");
    var s = "";
    if (e.data !== {}) {
      var c = e.data;
      s = JSON.stringify(c);
    }
    (s = "wxproc_igame" + s + "wxproc_igame"),
      (e.url += "&sgin=" + o.default.md5(s)),
      n &&
        wx.showToast({
          title: "请稍后...",
          icon: "loading",
          mask: !0,
          duration: 6e4,
        }),
      wx.request({
        url: e.url,
        data: e.data,
        method: e.method,
        header: e.header,
        dataType: e.dataType,
        success: function (t) {
          if (
            (n && wx.hideToast(),
            null !== t.data &&
              ("204" === t.data.r || 1e5 === t.data.r || 1e5 === t.data.ret))
          )
            return (
              i.wxLogin(function () {
                (e.url = r), i.httpRequest(e, n);
              }),
              !1
            );
          "function" == typeof e.success && e.success(t.data);
        },
        fail: function (t) {
          n && wx.hideToast(),
            console.log(t),
            "function" == typeof e.fail && e.fail(t);
        },
        complete: function (t) {
          "function" == typeof e.complete && e.complete(t);
        },
      });
  },
  setUserInfo: function (e, t, o, n, i) {
    var r = this,
      a = {};
    (a.headurl = e),
      (a.nick = t),
      (a.uid = o),
      (a.utype = n),
      (a.gender = i),
      this.httpRequest(
        {
          url: r.getRequestUrl("getUserInfo"),
          data: a,
          success: function (e) {
            if (
              e &&
              "0" === e.r &&
              void 0 !== e.userInfo &&
              "" !== e.userInfo.uid
            ) {
              if (
                (decodeURIComponent(e.userInfo.source_head) === a.headurl &&
                  e.userInfo.nick === a.nick) ||
                "" === a.headurl ||
                "" === a.nick
              )
                return;
              a.opflag = 1;
            } else a.opflag = 2;
            r.httpRequest(
              {
                url: r.getRequestUrl("setNewUserInfo"),
                data: a,
                success: function () {},
              },
              !1
            );
          },
        },
        !1
      );
  },
  getRequestUrl: function (e, t) {
    return (
      "https://igame.qq.com/wxproc/index.php?logicname=c_" +
      (t = t || "user") +
      "_" +
      e
    );
  },
  getGoRequestUrl: function (e, t) {
    var o =
        arguments.length > 2 && void 0 !== arguments[2]
          ? arguments[2]
          : "privilege",
      n =
        "https://m.igame.qq.com/miniprogram/" + o + "/" + t + "?logicname=" + e;
    return n;
  },
  switchToGoodDetail: function (e, t, o) {
    var n =
      "plugin-private://wx87ebb56764fea681/pages/goods/mygoods/index?winningtime=" +
      e;
    t && (n += "&channel=" + t),
      o && (n += "&orderid=" + o),
      wx.navigateTo({ url: n });
  },
  getDefaultRole: function (e) {
    wx.setStorageSync("plugin_roleInfo", null);
    var t = wx.getStorageSync("plugin_gid");
    console.log("gid", t);
    var o = "getGameLastRole";
    331 === t && (o = "userGetDefaultRole"),
      this.httpRequest(
        {
          url: this.getRequestUrl(o),
          data: { gid: t },
          success: function (t) {
            console.log("获取游戏默认确实为", t),
              null !== t && "0" === t.r && t.roleInfo
                ? wx.setStorageSync("plugin_roleInfo", t.roleInfo)
                : t &&
                  "404" === t.r &&
                  wx.setStorageSync("plugin_roleInfo", null),
              "function" == typeof e && e();
          },
        },
        !1
      );
  },
  formatDate: function (e, t) {
    var o = new Date(e),
      n = {
        "M+": o.getMonth() + 1,
        "d+": o.getDate(),
        "h+": o.getHours(),
        "m+": o.getMinutes(),
        "s+": o.getSeconds(),
        "q+": Math.floor((o.getMonth() + 3) / 3),
        S: o.getMilliseconds(),
      };
    for (var i in (/(y+)/.test(t) &&
      (t = t.replace(
        RegExp.$1,
        (o.getFullYear() + "").substr(4 - RegExp.$1.length)
      )),
    n))
      new RegExp("(" + i + ")").test(t) &&
        (t = t.replace(
          RegExp.$1,
          1 === RegExp.$1.length
            ? n[i]
            : ("00" + n[i]).substr(("" + n[i]).length)
        ));
    return t;
  },
  reportTlog: function (e, t) {
    var o = this;
    wx.getSystemInfo({
      success: function (n) {
        var i = n.platform,
          r = {},
          l = o.getGoRequestUrl("reportTlogInfo", "merctask", "miniplugin");
        (r.plat = "ios" === i ? 2 : 1),
          (r.merc_id = e.mercid),
          (r.module_id = e.moduleid),
          (r.oper_id = e.operid),
          (r.object_id = e.objectid),
          (r.gid = e.gid),
          (r.object_name = a),
          (r.sresv1 = "wxproc"),
          (r.timestamp = parseInt(Date.now() / 1e3)),
          o.httpRequest(
            {
              url: l,
              data: r,
              method: "POST",
              success: function (e) {
                console.log(r.oper_id, "tlog返回", e),
                  e && 0 === e.r && "function" == typeof t && t();
              },
            },
            !1
          );
      },
    });
  },
  getGameInfo: n.default.getGameInfo,
  reportData: function (e, t) {
    var o = {},
      n = { appid: r };
    void 0 === e.gid && (e.gid = wx.getStorageSync("plugin_gid") || 0),
      (e.channel = "10021@" + e.channel),
      (e.plat = ("ios" === wx.getSystemInfoSync().platform ? 1 : 2).toString()),
      (e.source = "mini_plugin"),
      (e.oper_name = "game_user"),
      (e.version = a),
      (e.ptype = "mixg_lottory_expand_plugin"),
      wx.getStorageSync("isExpand") && (e.source = "mini_plugin_expand"),
      (o.body = { content: JSON.stringify(n) });
    var i = "https://a.igame.qq.com/merc.merccgi.merc.comm/";
    wx.getStorageSync("plugin_openid")
      ? ((i += "MercReportTlog"), (o.head = e))
      : ((i += "NoLoginMercReportTlogList"), (o.list = [{ head: e }])),
      this.httpRequest(
        {
          url: i,
          data: o,
          method: "POST",
          success: function (e) {
            console.log("上报到数据组，结果为", e),
              "function" == typeof t && t();
          },
        },
        !1
      );
  },
  Utils: new i.default(),
};
