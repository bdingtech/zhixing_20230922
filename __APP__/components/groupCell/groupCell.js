"use strict";
"use strict";
var t = require("../../@babel/runtime/helpers/interopRequireDefault"),
  e = t(require("../../@babel/runtime/regenerator")),
  a = require("../../@babel/runtime/helpers/asyncToGenerator"),
  o = require("./shared"),
  n = require("../../lib/util/index"),
  i = (t(require("../../lib/notify/index")), require("../../lib/conn/conn")),
  r = require("./wxmlTocanvasData"),
  s = require("../../lib/request/request"),
  d =
    (require("../../lib/storage/storage"),
    function (t) {
      return (
        (t = isNaN(t) ? 0 : parseInt(t)),
        0 == (t = Math.max(0, t)) ? 0 : t + "px"
      );
    }),
  c = function (t) {
    return (
      (t = isNaN(t) ? 0 : parseInt(t)), 0 == (t = Math.max(0, t)) ? 0 : t + "px"
    );
  },
  u = {
    "-20116": -3008,
    "-24001041": -3009,
    "-24001057": -3010,
    "-24001100": -3011,
    "-24001049": -3012,
    default: -3005,
  },
  l = {
    "-24001041": "群已满人",
    "-24001057": "该二维码分享者已离开群聊，无法加入",
    "-24001100": "企业已拒绝你进入该群聊",
    "-24001049": "已在当前群聊中",
    "-24001062": "该二维码已经失效，无法找到对应的群聊",
    default: "二维码已失效",
  };
Component({
  data: {
    isReady: !1,
    isNeedAuth: !1,
    args: { withCredentials: !0, lang: "zh_CN" },
    render: {},
    postImg: "",
    postGenerating: !1,
    plugid: "",
  },
  properties: {
    reqType: { type: Number, value: 3, observer: function (t, e, a) {} },
    vcode: { type: String, value: "", observer: function (t, e, a) {} },
    useErrCallback: { type: Boolean, value: !1 },
    paddingStyle: { type: Number },
    url: {
      type: String,
      value: "",
      observer: function (t, e, a) {
        var o = t.match(/https\:\/\/work.weixin.qq.com\/gm\/(.*)/);
        o && o[1]
          ? this.setData({ plugid: o[1] })
          : this.setData({ postImg: t });
      },
    },
    iconUrl: { type: String, value: "../../assets/chat_group_rect_2x.png" },
    iconBorderRadius: { type: Number },
    contactTextBlod: { type: Boolean, value: !0 },
    contactText: { type: String, value: "加入群聊" },
  },
  attached: function () {
    var t = this;
    this.setData({ cellId: (0, o.uid)() }),
      t.computeRenderData(),
      wx.login
        ? wx.login({
            success: function (e) {
              console.log("success %o", e), t.setData({ isNeedAuth: !1 });
            },
            fail: function (e) {
              t.setData({ isNeedAuth: !0 });
            },
          })
        : (t.notifyToHostApp({ errcode: -3010 }),
          t.setData({ isNeedAuth: !0 }));
  },
  methods: {
    loginSuccess: function (t) {
      i.conn.log("loginSuccess"),
        /^https:\/\/work\.weixin\.qq\.com/g.test(this.data.url) ||
          wx.showModal({ title: "请输入正确的url" }),
        (0, o.checkWxVersion)()
          ? (this.makeAuthReq({}), this.setData({ isNeedAuth: !1 }))
          : this.sendMsgToWx(t.detail, "contactplugin/sendmsgtowx"),
        (0, n.report)("sample_authorize_yes");
    },
    loginFail: function (t) {
      i.conn.log("loginFail"),
        this.notifyToHostApp({ errcode: -3004 }),
        (0, n.report)("sample_authorize_no");
    },
    loginCancel: function () {
      i.conn.log("loginCancel");
    },
    onBindTap: function () {
      this.notifyToHostApp({ state: 1 });
    },
    statFunctionalPage: function () {
      (0, n.report)("plug_single_miniapp_use", 79505335);
    },
    computeRenderData: function () {
      var t = {
        paddingStyle: d(this.data.paddingStyle),
        iconBorderRadius: c(this.data.iconBorderRadius),
        contactText: this.data.contactText,
        iconUrl: this.data.iconUrl,
      };
      console.log("%o", t), this.setData({ render: t, isReady: !0 });
    },
    postErrHandle: function () {
      console.log("postErrHandle"),
        wx.hideLoading(),
        this.setData({ postGenerating: !1 }),
        (0, n.logkvAutoReport)(49591, "group|postfail");
    },
    sendMsgToWx: function (t, e) {
      this.sendReqToSvr(t, e, 0);
    },
    sendReqToSvr: function (t, e, a, o) {
      var n = this;
      this.triggerEvent("startmessage", {}),
        s
          .request({
            ignore: !0,
            method: "POST",
            url: e,
            data: {
              type: 4,
              vcode: n.data.vcode,
              plugid: n.data.plugid,
              code: t.code,
              iv: t.iv,
              encryptedData: t.encryptedData,
            },
          })
          .then(function (t) {
            if (t.data && t.data.data && "{}" != JSON.stringify(t.data.data))
              1 == t.data.data.type
                ? 0 == a
                  ? n.notifyToHostApp({
                      errcode: -3006,
                      name: t.data.data.name,
                      notifytype: a,
                      headurl: t.data.data.headurl,
                    })
                  : o && o(t.data.data)
                : 2 == t.data.data.type
                ? n.notifyToHostApp({ errcode: -3007 })
                : 0 == a
                ? n.notifyToHostApp({
                    errcode: 0,
                    name: t.data.data.name,
                    notifytype: a,
                    headurl: t.data.data.headurl,
                  })
                : o && o(t.data.data);
            else {
              var e =
                "" + ((t.data && t.data.result && t.data.result.errCode) || "");
              1 != a || n.data.useErrCallback
                ? n.notifyToHostApp({ errcode: (e && u[e]) || u.default })
                : wx.showModal({
                    title: (e && l[e]) || l.default,
                    showCancel: !1,
                  }),
                wx.hideLoading();
            }
          })
          .catch(function (t) {
            n.setData({ postGenerating: !1 }), wx.hideLoading();
          });
    },
    notifyToHostApp: function (t) {
      wx.hideLoading(), this.triggerEvent("completemessage", t);
    },
    makeAuthReq: function (t) {
      var e = t.forceMsg,
        a = this;
      /^https:\/\/work\.weixin\.qq\.com/g.test(this.data.url)
        ? this.data.postImg
          ? wx.previewImage({ urls: [this.data.postImg] })
          : this.data.plugid &&
            (!this.data.url ||
              /[https|http]:\/\/work\.weixin\.qq\.com/.test(this.data.url) ||
              /\/\/tmp/.test(this.data.url))
          ? wx.login({
              success: function (t) {
                wx.getUserInfo({
                  withCredentials: !0,
                  success: function (n) {
                    var i = {
                      code: t.code,
                      encryptedData: n.encryptedData,
                      iv: n.iv,
                    };
                    !e && (0, o.checkWxVersion)()
                      ? a.getPreviewQRCode(i, "qrcode_xcxplug")
                      : a
                          .sendReqToSvr(i, "contactplugin/sendmsgtowx", 0)
                          .then(function () {
                            wx.navigateBack({});
                          });
                  },
                  fail: function () {
                    a.notifyToHostApp({ errcode: -3004 });
                  },
                });
              },
              fail: function () {
                a.notifyToHostApp({ errcode: -3004 });
              },
            })
          : wx.showModal({
              content: "请填入正确的url",
              complete: function () {
                wx.navigateBack({});
              },
            })
        : wx.showModal({ title: "请输入正确的url" });
    },
    getPreviewQRCode: function (t, e) {
      var a = this;
      wx.showLoading({ title: "加载中", mask: !0 }),
        this.sendReqToSvr(t, e, 1, function (t) {
          t.headurl ||
            (t.headurl =
              "https://wwcdn.weixin.qq.com/node/wework/images/group-default-avatar.ecdb8b064f.png");
          try {
            a.getPost(t);
          } catch (t) {
            (0, n.logkvAutoReport)(50091, "material|getpostfail"),
              a.makeAuthReq({ forceMsg: !0 });
          }
        });
    },
    getPost: function (t) {
      var o = this;
      return a(
        e.default.mark(function a() {
          var n, i;
          return e.default.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (n = o.selectComponent(".widget")), (e.next = 3), n.init()
                  );
                case 3:
                  return (
                    (e.next = 5), n.renderToCanvas((0, r.getPostData)(t, n))
                  );
                case 5:
                  return (e.next = 7), n.canvasToTempFilePath();
                case 7:
                  (i = e.sent),
                    console.log("canvas to png url: ", i.tempFilePath),
                    o.setData({ postImg: i.tempFilePath }),
                    wx.previewImage({ urls: [i.tempFilePath] }),
                    wx.hideLoading(),
                    o.setData({ postGenerating: !1, postImg: i.tempFilePath }),
                    o.notifyToHostApp({
                      errcode: 1 == t.type ? -3006 : 0,
                      name: t.name,
                      headurl: t.headurl,
                      notifytype: 1,
                      qrCodeUrl: i.tempFilePath,
                    });
                case 14:
                case "end":
                  return e.stop();
              }
          }, a);
        })
      )();
    },
  },
});
