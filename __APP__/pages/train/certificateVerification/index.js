!(function () {
  "use strict";
  require("../sub-vendors.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [26954],
      {
        45426: function (e, t, a) {
          var i,
            c = a(32180),
            n = a(298),
            o = a(93212),
            r = a(57042),
            s = a(24460),
            l = a(21867),
            u = a(86066),
            d = a(52500),
            h = a(92954),
            f = a.n(h),
            m = a(71515),
            p = a(81957),
            v = a(18783),
            g = a(79792),
            k = a(3205),
            b = a(48813),
            w = g.default.isTieyou,
            N =
              (0, p.h)()(
                (i = (function (e) {
                  (0, l.Z)(a, e);
                  var t = (0, u.Z)(a);
                  function a() {
                    var e;
                    return (
                      (0, r.Z)(this, a),
                      ((e = t.call(this)).pageId = w
                        ? "10650071218"
                        : "10650071208"),
                      (e.state = { accountName: "" }),
                      e.newUbtTrace(203741, {
                        exposureType: "normal",
                        bizKey: "z_idcard_check_show",
                      }),
                      e
                    );
                  }
                  return (
                    (0, s.Z)(a, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          var e =
                              (0, h.getCurrentInstance)().router &&
                              (0, h.getCurrentInstance)().router.params,
                            t = e.fromType,
                            a = void 0 === t ? 0 : t,
                            i = e.password,
                            c = void 0 === i ? "" : i,
                            n = e.h5Url,
                            o = void 0 === n ? "" : n,
                            r = e.certificationInfo,
                            s = void 0 === r ? "" : r,
                            l = e.failAction,
                            u = void 0 === l ? "" : l,
                            d = e.accountMobile,
                            f = void 0 === d ? "" : d,
                            m = e.userName,
                            p = void 0 === m ? "" : m,
                            v = e.accountName,
                            g = void 0 === v ? "" : v,
                            k = e.checkType,
                            b = void 0 === k ? "FM" : k,
                            w = e.title,
                            N =
                              void 0 === w
                                ? "您的12306账户异常，为了您的账户安全，请尽快刷脸验证，否则无法出票"
                                : w,
                            y = e.faceBtnName,
                            C = void 0 === y ? "同意协议并开始核验" : y,
                            B = e.messageBtnName,
                            T = void 0 === B ? "无法刷脸，切换成短信验证" : B;
                          (this.faceCheckInfo = {
                            fromType: a,
                            userName: p,
                            password: c,
                            h5Url: o,
                            certificationInfo: s,
                            failAction: u,
                          }),
                            (this.messageCheckInfo = {
                              accountMobile: f,
                              userName: p,
                            }),
                            this.setState({
                              accountName: g,
                              title: N,
                              checkType:
                                (null == b ? void 0 : b.toLowerCase()) || "",
                              faceBtnName: C,
                              messageBtnName: T,
                            });
                        },
                      },
                      {
                        key: "generateUrlParams",
                        value: function (e) {
                          if (!e) return "";
                          var t = [];
                          return (
                            Object.keys(e).forEach(function (a) {
                              (e[a] || 0 === e[a]) && t.push(a + "=" + e[a]);
                            }),
                            t.join("&")
                          );
                        },
                      },
                      {
                        key: "toFaceCheck",
                        value: function () {
                          var e = this;
                          this.newUbtTrace(203743, {
                            bizKey: "z_idcard_check_start_button_click",
                          }),
                            console.log(
                              "generateUrlParams",
                              this.generateUrlParams(this.faceCheckInfo)
                            );
                          var t = "/pages/12306/face/face?".concat(
                            this.generateUrlParams(this.faceCheckInfo),
                            "&businessType=1"
                          );
                          this.navigateTo({
                            url: t,
                            callback: function (t) {
                              var a = t || {},
                                i = a.certificationResultCode,
                                c = a.retMessage;
                              1 === i
                                ? e.navigateBack({
                                    resultCode: 1,
                                    resultMessage: "ok",
                                  })
                                : 2 === i &&
                                  setTimeout(function () {
                                    f().showModal({
                                      title: "温馨提示",
                                      content: c || "核验失败",
                                      confirmText: "知道了",
                                      showCancel: !1,
                                      confirmColor: w ? "#fc6e51" : "#0080FF",
                                      success: function () {},
                                    });
                                  }, 500);
                            },
                          });
                        },
                      },
                      {
                        key: "toMessageCheck",
                        value: function () {
                          var e = this;
                          this.newUbtTrace(203743, {
                            bizKey: "z_idcard_check_message_button_click",
                          });
                          var t = this.messageCheckInfo || {},
                            a = t.userName,
                            i = t.accountMobile;
                          return this.purePhoneTextCheck({
                            userName: a,
                            mobile: i,
                            success: function () {
                              e.navigateBack({
                                resultCode: 1,
                                resultMessage: "ok",
                              });
                            },
                          });
                        },
                      },
                      {
                        key: "purePhoneTextCheck",
                        value: function (e) {
                          var t = e.userName,
                            a = void 0 === t ? "" : t,
                            i = e.mobile,
                            c = void 0 === i ? "" : i,
                            n = e.password,
                            o = void 0 === n ? "" : n,
                            r = e.success,
                            s = void 0 === r ? function () {} : r,
                            l = e.fail,
                            u = void 0 === l ? function () {} : l,
                            d = "https://"
                              .concat(
                                g.default.h5domain,
                                "/webapp/train/activity/ztrip-train-12306/?needLogin=1&partner="
                              )
                              .concat(g.default.partner, "#/verify?partner=")
                              .concat(
                                g.default.partner,
                                "&fromPage=orderdetail&userName="
                              )
                              .concat(a, "&mobile=")
                              .concat(c, "&password=")
                              .concat(o);
                          k.Z.twebview({
                            data: {
                              url: d,
                              bridgeIns: function (e) {
                                Array.isArray(e.detail.data)
                                  ? s(e.detail.data)
                                  : u();
                              },
                            },
                          });
                        },
                      },
                      {
                        key: "goBack",
                        value: function () {
                          this.newUbtTrace(203743, {
                            bizKey: "z_idcard_check_reject_button_click",
                          }),
                            this.navigateBack();
                        },
                      },
                      {
                        key: "showVerificationProtocol",
                        value: function () {
                          k.Z.twebview({
                            data: {
                              url: w
                                ? "https://pages.c-ctrip.com/ztrip/document/faceVerifyProtocol.html?appid=1002"
                                : "https://pages.c-ctrip.com/ztrip/document/faceVerifyProtocol.html?appid=1003",
                            },
                          });
                        },
                      },
                      {
                        key: "newUbtTrace",
                        value: function (e, t) {
                          t = t && "object" == (0, o.Z)(t) ? t : {};
                          try {
                            this.ubtTrace(
                              e,
                              (0, n.Z)(
                                {
                                  openId: v.ZP.openid || "",
                                  userName: v.ZP.userName || "",
                                  cid: v.ZP.cid || "",
                                },
                                t
                              )
                            );
                          } catch (e) {
                            console.log(e);
                          }
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this.state,
                            t = e.checkType,
                            a = e.title,
                            i = e.faceBtnName,
                            c = e.messageBtnName,
                            n = e.accountName;
                          return (0, b.BX)(m.View, {
                            className: "certificate-verification ".concat(
                              w ? "ty" : "zx"
                            ),
                            children: [
                              (0, b.BX)(m.View, {
                                className: "incomplete-box",
                                children: [
                                  (0, b.BX)(m.View, {
                                    className: "info",
                                    children: [
                                      (0, b.tZ)(m.Image, {
                                        className: "img",
                                        src: w
                                          ? "https://images3.c-ctrip.com/ztrip/train_xie/2021-11/WeChat/img_sl_t.png"
                                          : "https://images3.c-ctrip.com/ztrip/train_xie/2021-11/WeChat/img_sl.png",
                                      }),
                                      (0, b.tZ)(m.View, {
                                        className: "txt",
                                        children: a,
                                      }),
                                      n
                                        ? (0, b.BX)(m.View, {
                                            className: "tip",
                                            children: [
                                              "请确认是12306账号本人：",
                                              (0, b.tZ)(m.Text, {
                                                className: "note",
                                                children: n,
                                              }),
                                            ],
                                          })
                                        : (0, b.tZ)(m.View, {
                                            className: "tip",
                                            children: "请确认是12306账号本人",
                                          }),
                                    ],
                                  }),
                                  (0, b.BX)(m.View, {
                                    className: "btn-box",
                                    children: [
                                      (null == t ? void 0 : t.includes("f")) &&
                                        (0, b.tZ)(m.View, {
                                          className: "btn face",
                                          id: "AKBd",
                                          onClick: this.toFaceCheck,
                                          children: i,
                                        }),
                                      (null == t ? void 0 : t.includes("m")) &&
                                        (0, b.tZ)(m.View, {
                                          className: "btn message",
                                          id: "AKBe",
                                          onClick: this.toMessageCheck,
                                          children: c,
                                        }),
                                    ],
                                  }),
                                  (0, b.tZ)(m.View, {
                                    className: "no-verify",
                                    id: "AKBf",
                                    onClick: this.goBack,
                                    children: "暂不认证",
                                  }),
                                ],
                              }),
                              (0, b.BX)(m.View, {
                                className: "protocol",
                                children: [
                                  "已阅读并同意",
                                  (0, b.tZ)(m.Text, {
                                    className: "note",
                                    id: "AKBg",
                                    onClick: this.showVerificationProtocol,
                                    children: "《认证协议》",
                                  }),
                                ],
                              }),
                            ],
                          });
                        },
                      },
                    ]),
                    a
                  );
                })(d.default.Component))
              ) || i;
          Page(
            (0, c.createPageConfig)(
              N,
              "pages/train/certificateVerification/index",
              { root: { cn: [] } },
              {
                navigationBarTitleText: "人证核验",
                navigationBarTextStyle: "black",
                navigationBarBackgroundColor: "#FFFFFF",
              } || {}
            )
          );
        },
      },
      function (e) {
        e.O(0, [19559, 11216, 68592], function () {
          return (function (t) {
            return e((e.s = t));
          })(45426);
        }),
          e.O();
      },
    ]);
})();
