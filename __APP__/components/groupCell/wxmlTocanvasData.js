"use strict";
"use strict";
var e = require("../../@babel/runtime/helpers/interopRequireDefault"),
  t = require("../../@babel/runtime/helpers/objectSpread2"),
  i = require("../../@babel/runtime/helpers/defineProperty"),
  n = e(require("@tencent/wwui-wxml2canvas/measure-text")),
  o = function (e) {
    return (
      console.log(e),
      '<view class="container">\n                <view class="card">\n                <view class="info-container">\n                    <image class="avatar" src="'
        .concat(
          e.headurl,
          '"></image>\n                    <text class="groupname">'
        )
        .concat(
          e.name,
          '</text>\n                    <text class="desc">使用微信或企业微信扫码加入</text>\n                </view>\n                    \n                    <view class="qrcode-container">\n                        <image class="qrcode" src="'
        )
        .concat(
          e.qrcodeurl,
          '"></image>\n                        <text class="qrcode-text">该二维码7天内有效，重新进入将更新</text>\n                    </view>\n                </view>\n\n                <image class="logo" src="https://wwcdn.weixin.qq.com/node/wework/images/Logo.c64e560614.png"></image>\n\n            </view>\n            '
        )
    );
  },
  r = function (e) {
    var t,
      n = wx.getSystemInfoSync().screenWidth,
      o = n - 24 - 24,
      r = e.cardHeight,
      a = e.postHeight,
      c = e.groupNameHeight;
    return {
      container: {
        backgroundColor: "#F5F6F7",
        width: n,
        height: a,
        paddingTop: 34,
        paddingLeft: 24,
        paddingRight: 24,
        flexDirection: "column",
        alignItems: "center",
      },
      card: {
        flexDirection: "column",
        backgroundColor: "#FFFFFF",
        paddingTop: 50,
        paddingBottom: 32,
        marginBottom: 32,
        borderRadius: 10,
        width: o,
        height: r,
      },
      infoContainer: {
        width: o,
        paddingLeft: 40,
        paddingRight: 40,
        marginBottom: 60,
      },
      avatar: { width: 48, height: 48, borderRadius: 4, marginBottom: 16 },
      groupname:
        ((t = {
          fontWeight: 600,
          fontSize: 20,
          lineHeight: 28,
          color: "#000000",
          height: 28,
          width: o - 80,
        }),
        i(t, "height", c),
        i(t, "marginBottom", 4),
        t),
      desc: {
        fontSize: 13,
        lineHeight: 18,
        height: 18,
        width: o - 40,
        color: "#333333",
      },
      qrcodeContainer: {
        flexDirection: "column",
        alignItems: "center",
        width: o,
        paddingBottom: 32,
      },
      qrcode: { width: 187, height: 187 },
      qrcodeText: {
        fontSize: 13,
        lineHeight: 18,
        height: 18,
        width: o,
        textAlign: "center",
        color: "#808080",
        marginTop: 36,
      },
      logo: { width: 96, height: 22 },
    };
  };
module.exports = {
  getPostStyle: r,
  getPostWxml: o,
  getPostData: function (e, i) {
    var a = wx.getSystemInfoSync(),
      c = a.screenWidth,
      g = (a.screenHeight, c - 80 - 48),
      d = (0, n.default)(i.helperCtx, e.name, g, "600 20px sans-serif").length,
      s = 499 + 28 * (d - 1),
      h = {
        postWidth: c,
        postHeight: s + 22 + 24 + 68,
        cardHeight: s,
        groupNameHeight: 28 * d,
      };
    return { wxml: o(t(t({}, h), e)), style: r(h) };
  },
};
