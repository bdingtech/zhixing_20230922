!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [83500],
    {
      48769: function (e, i, t) {
        var o = t(32180),
          n = t(57042),
          a = t(24460),
          c = t(21867),
          s = t(86066),
          l = t(93212),
          r = t(298),
          d = t(52500),
          u = t(71515),
          h = t(92954),
          g = t.n(h),
          m = t(48792),
          p = t.n(m),
          f = t(3205),
          w = t(79910),
          b = t(49120),
          y = t(18783),
          C = t(79792),
          S = t(21294),
          v = t(2809),
          k = t(79295),
          B = t(48813),
          Z = function (e) {
            var i = e.btnStyle,
              t = void 0 === i ? "" : i,
              o = e.btnText,
              n = void 0 === o ? "" : o,
              a = e.isTipsSelected,
              c = e.showRuleDialog,
              s = e.renderChild,
              l = void 0 === s ? function () {} : s,
              r = e.onLoginSuccess,
              d = void 0 === r ? function () {} : r,
              h = e.onLoginFail,
              g = void 0 === h ? function () {} : h,
              m = function () {},
              p = function (e) {
                (0, y.pt)(function () {
                  y.ZP.isLogin ? d() : g();
                })(e);
              },
              f = (0, B.BX)(u.Button, {
                className: t,
                openType: "getPhoneNumber",
                onGetPhonenumber: p,
                id: "AABg",
                onClick: m,
                "data-ubt-key": "tieyou_wx_accounts_login_wxmobile",
                children: [l(), n || "授权手机号一键登录"],
              }),
              w = (0, B.BX)(u.Button, {
                className: t,
                openType: "getPhoneNumber",
                onGetPhonenumber: p,
                id: "AABh",
                onClick: m,
                "data-ubt-key": "t_accounts_login_wxmobile",
                children: [l(), n || "抖音手机号授权一键登录"],
              }),
              b = (0, B.BX)(u.Button, {
                className: "btn-wechat",
                openType: "getAuthorize",
                scope: "phoneNumber",
                onGetAuthorize: p,
                onError: g,
                id: "AABi",
                onClick: m,
                "data-ubt-key": "tieyou_wx_accounts_login_alipay",
                children: [l(), n || "支付宝授权手机号登录"],
              }),
              S = (0, B.BX)(u.Button, {
                className: t,
                openType: "getPhoneNumber",
                onGetPhonenumber: p,
                id: "AABj",
                onClick: m,
                "data-ubt-key": "t_accounts_login_wxmobile",
                children: [l(), n || "授权手机号一键登录"],
              }),
              v = (0, B.BX)(u.Button, {
                className: "btn-wechat",
                id: "AABk",
                onClick: g,
                "data-ubt-key": "tieyou_wx_accounts_login_other",
                children: [l(), n || "授权手机号登录"],
              });
            return (0, B.BX)(u.View, {
              className: "common-login-button",
              children: [
                !a &&
                  (0, B.tZ)(u.View, {
                    className: "virtual-btn",
                    id: "AABl",
                    onClick: function () {
                      null == c || c();
                    },
                  }),
                C.default.isWechat && f,
                C.default.isAlipay && b,
                C.default.isTT && w,
                C.default.isBaidu && S,
                !C.default.isAlipay &&
                  !C.default.isWechat &&
                  !C.default.isTT &&
                  !C.default.isBaidu &&
                  v,
              ],
            });
          },
          T = t(13025),
          D = t(34229),
          N = t(91006),
          M = t.n(N),
          P = function (e) {
            var i = e.isShow,
              t = e.goPersonalPage,
              o = e.ruleDialogType,
              n = e.close,
              a = e.onLoginSuccess,
              c = e.onLoginFail,
              s = e.isShowDirectLogin,
              l = e.onSmsCodeAccept,
              r = e.dynamicRuleBtnClick;
            return (0, B.tZ)(D.ZtActivityPop, {
              show: i,
              isShowClose: !1,
              animation: "scale",
              children: (0, B.BX)(u.View, {
                className: "rule-dialog-c",
                children: [
                  (0, B.tZ)(u.View, {
                    className: "title",
                    children: "服务协议和隐私政策",
                  }),
                  (0, B.BX)(u.View, {
                    className: "tips",
                    children: [
                      "进入下一步，阅读并同意我们的",
                      (0, B.tZ)(u.Text, {
                        className: "txt",
                        id: "AfAA",
                        onClick: t,
                        children: "“服务协议与隐私条款”",
                      }),
                    ],
                  }),
                  "login" == o &&
                    (0, B.BX)(u.View, {
                      className: "flex",
                      children: [
                        (0, B.tZ)(u.Button, {
                          className: "btn cancle",
                          id: "AfAB",
                          onClick: n,
                          children: "不同意",
                        }),
                        s
                          ? (0, B.tZ)(Z, {
                              isTipsSelected: !0,
                              btnStyle: "btn bgcolor-primary",
                              onLoginSuccess: a,
                              onLoginFail: c,
                              btnText: "同意并登录",
                            })
                          : (0, B.tZ)(u.Button, {
                              className: "btn bgcolor-primary",
                              id: "AfAC",
                              onClick: r,
                              children: "同意并登录",
                            }),
                      ],
                    }),
                  "smsCode" == o &&
                    (0, B.BX)(u.View, {
                      className: "flex",
                      children: [
                        (0, B.tZ)(u.Button, {
                          className: "btn cancle",
                          id: "AfAD",
                          onClick: n,
                          children: "不同意",
                        }),
                        (0, B.tZ)(u.Button, {
                          className: "btn bgcolor-primary",
                          id: "AfAE",
                          onClick: l,
                          children: "同意并获取",
                        }),
                      ],
                    }),
                ],
              }),
            });
          };
        (P.propTypes = {
          isShow: M().bool,
          isShowDirectLogin: M().bool,
          ruleDialogType: M().string,
          onSmsCodeAccept: M().func,
          goPersonalPage: M().func,
          close: M().func,
          onLoginSuccess: M().func,
          onLoginFail: M().func,
          dynamicRuleBtnClick: M().func,
        }),
          (P.defaultProps = {
            isShow: !1,
            isShowDirectLogin: !0,
            ruleDialogType: "login",
            onSmsCodeAccept: function () {},
            goPersonalPage: function () {},
            close: function () {},
            onLoginSuccess: function () {},
            onLoginFail: function () {},
            dynamicRuleBtnClick: function () {},
          });
        var x,
          L,
          A = (0, d.memo)(P),
          I = t(81957),
          _ = C.default.isTieyou,
          V = C.default.isBaidu,
          R = v.ZP.isBaiduMap,
          X =
            C.default.isWechat ||
            C.default.isAlipay ||
            C.default.isBaidu ||
            C.default.isTT,
          U = [
            "wx76dcd806f382ec8e",
            "wx4efc89b936baea18",
            "wxbd33b0cfa7cda030",
            "wx16ee5d2bd483c4f4",
          ],
          z = {
            pageId: _ ? "10650005649" : "10650005648",
            data: {
              errorMsg: "错误提示",
              errorMsgShow: "none",
              loginTabShow: "display:none",
              dynamicLoginShow: "none",
              normalLoginShow: "none",
              rediectLoginShow: "block",
              currentTab_normal: "",
              getdynamictitle: "获取动态码",
              getdynamicabled: !0,
              invitecodeShow: "display:none",
              addInviteCodeShow: "display:block",
              mobilephonewarn: "",
              dyncpwdwarn: "",
              imgcodewarn: "",
              loginnamewarn: "",
              pwdwarn: "",
              avatarUrl: "",
              avatarShow: "display:none",
              rediectLoginBtnShow: "display:none",
              nickname: "携程会员",
              nicknameShow: "display:none",
              showname: "",
              shownameShow: "display:none",
              imgCodeShow: "display:none",
              imgCodeUrl: "",
              captchaID: "",
              signature: "",
              canGetMobile: !1,
              isShowDirectLogin: X,
              showType: "",
              isTieyou: _,
              isBaidu: V,
              isBaiduMap: R,
              isTipsSelected: !1,
              isShowRuleDialog: !1,
              ruleDialogType: "login",
              isDevMode: !1,
            },
            onLoad: function () {
              this.judgeCanGetMobile(),
                this.judgeCustomLoginMethod(),
                (this.inputContent = {});
            },
            onUnload: function () {
              y.ZP.isLogin ||
                this.invokeCallback({ ReturnCode: "-1", Message: "返回操作" });
            },
            onShow: function () {},
            onReady: function () {
              C.default.isH5 ||
                (this.getWechatCodeV1(),
                w.Z.isDevMode() && this.setData({ isDevMode: !0 }));
            },
            callback: function (e) {
              L && clearTimeout(L), this.doBack(e);
            },
            doBack: function (e) {
              1 == g().getCurrentPages().length
                ? w.Z.relaunchHome()
                : this.navigateBack(e);
            },
            dynamicLoginClick: w.Z.throttle(function () {
              this.mobileQuickLogin();
            }, 1e3),
            dynamicRuleBtnClick: w.Z.throttle(function () {
              this.setData({ isShowRuleDialog: !1, isTipsSelected: !0 }),
                this.mobileQuickLogin();
            }, 1e3),
            ruleBtnClick: function () {
              this.setData({ isShowRuleDialog: !1, isTipsSelected: !0 });
            },
            showRuleDialog: function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "login";
              this.setData({ ruleDialogType: e, isShowRuleDialog: !0 });
            },
            mobileQuickLogin: function () {
              var e = this,
                i = this.inputContent.norpwd,
                t = void 0 === i ? "" : i;
              if (w.Z.isDevMode() && t) return this.mobileNormalLogin();
              var o = this.getMobileQuickLoginParams(),
                n = this.data.isTipsSelected,
                a = "",
                c = {};
              return o.mobile
                ? o.certificateCode
                  ? n
                    ? (0, T.ai)(o)
                        .then(function (i) {
                          var t = i.resultStatus,
                            o = void 0 === t ? {} : t,
                            n = i.uid,
                            s = void 0 === n ? "" : n,
                            l = i.duid,
                            r = void 0 === l ? "" : l,
                            d = i.ticket,
                            u = void 0 === d ? "" : d,
                            h = o.returnCode,
                            g = void 0 === h ? 301 : h,
                            m = e.inputContent.mobilephone;
                          0 === g
                            ? ((y.ZP.auth = u),
                              (y.ZP.duid = r),
                              (y.ZP.uid = s),
                              (y.ZP.userName = m),
                              C.default.isWechat && (0, y.N_)(!0),
                              e.setAccountBindV1(m),
                              setTimeout(function () {
                                e.callback({
                                  ReturnCode: "0",
                                  Message: "手机登录成功",
                                }),
                                  w.Z.saveUnionId(),
                                  (0, y.Dm)(),
                                  (0, y.ZV)();
                              }, 200))
                            : 405 === g
                            ? ((a = "动态码不正确"), (c.mobilewarn = "2"))
                            : (a = "动态码登录失败"),
                            a && e.errorMsgShow(a, 1, c);
                        })
                        .catch(function (e) {
                          return console.log(e);
                        })
                    : void this.showRuleDialog()
                  : ((c.mobilewarn = "1"),
                    void this.errorMsgShow("请输入验证码", 1, c))
                : ((c.mobilewarn = "1"),
                  void this.errorMsgShow("请输入手机号", 1, c));
            },
            getMobileQuickLoginParams: function () {
              var e = _ ? "TY_MINIAPP_QUICKLOGIN " : "ZX_MINIAPP_QUICKLOGIN",
                i = this.inputContent,
                t = i.mobilephone,
                o = void 0 === t ? "" : t,
                n = i.dyncpwd,
                a = void 0 === n ? "" : n,
                c = (0, b.getCurrentPage)();
              return {
                accountHead: {
                  accessCode: "VBJ4OT9YPZQNY81E",
                  platform: "Miniapp",
                  group: _ ? "tieyou" : "zhixing",
                  locale: "zh_cn",
                  sourceID: _ ? "55555963" : "55555961",
                  clientID: y.ZP.cid || "",
                  osType: v.ZP.platform,
                },
                context: {
                  PageID: this.pageId,
                  URL: c.route,
                  Referer: c.route,
                  deviceName: v.ZP.brand,
                  deviceType: v.ZP.model,
                  encryptOpenid: y.ZP.openid,
                },
                strategyCode: e,
                mobile: o,
                certificateCode: a,
              };
            },
            mobileNormalLogin: function () {
              var e = this,
                i = this.inputContent,
                t = i.mobilephone,
                o = void 0 === t ? "" : t,
                n = i.norpwd,
                a = {
                  accessCode: "ZXMINIAPPAUTEHNTICATE",
                  authenticateInfo: {
                    password: void 0 === n ? "" : n,
                    loginName: o,
                  },
                };
              (0, T.Sc)(a)
                .then(function (i) {
                  var t = i.returnCode,
                    o = void 0 === t ? {} : t,
                    n = i.uid,
                    a = void 0 === n ? "" : n,
                    c = i.duid,
                    s = void 0 === c ? "" : c,
                    l = i.ticket,
                    r = void 0 === l ? "" : l,
                    d = i.message,
                    u = void 0 === d ? "" : d,
                    h = e.inputContent.mobilephone;
                  0 === o
                    ? ((y.ZP.auth = r),
                      (y.ZP.duid = s),
                      (y.ZP.uid = a),
                      (y.ZP.userName = h),
                      C.default.isWechat && (0, y.N_)(!0),
                      e.setAccountBindV1(h),
                      setTimeout(function () {
                        e.callback({
                          ReturnCode: "0",
                          Message: "手机密码登录成功",
                        }),
                          w.Z.saveUnionId(),
                          (0, y.Dm)(),
                          (0, y.ZV)();
                      }, 200))
                    : (0, b.showToast)(u || "失败");
                })
                .catch(function (e) {
                  console.error(e);
                });
            },
            setAccountBindV1: function () {
              var e = this,
                i =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "",
                t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 0;
              if (!(t > 0)) {
                var o = k.Z.getUnionData(),
                  n = {
                    loginSoureType: "".concat(o.aid, "_").concat(o.sid),
                    loginSourceName: o.loginDefaultSource || "",
                  },
                  a = g().getStorageSync("launchSourceStorage") || "",
                  c = {};
                if (a) {
                  var s = JSON.parse(a);
                  c = (0, r.Z)((0, r.Z)({}, c), s);
                } else c = (0, r.Z)((0, r.Z)({}, c), n);
                return (0, T.eR)((0, r.Z)({ mobile: i, type: 0 }, c))
                  .then(function () {
                    g().setStorage({ key: "launchSourceStorage", data: "" });
                  })
                  .catch(function () {
                    t < 1 && e.setAccountBindV1(i, t + 1);
                  });
              }
            },
            redirectLoginClick: function () {},
            changeOtherLogin: function () {
              this.ubtDevTrace("o_mini_phone_verify_code_login"),
                this.setData({ isShowDirectLogin: !1 });
            },
            addInviteCodeClick: function () {
              this.setData({
                invitecodeShow: "display:block",
                addInviteCodeShow: "display:none",
              });
            },
            textChange: function (e) {
              this.inputContent[e.currentTarget.id] = e.detail.value;
            },
            errorMsgShow: function (e, i, t) {
              var o = this;
              console.log("errormsg 出现,当前登录类型："),
                "1" == i
                  ? ("1" == t.mobilewarn ||
                      "2" == t.mobilewarn ||
                      "3" == t.mobilewarn ||
                      t.imgcodewarn,
                    this.setData({ errorMsg: e, showType: "error-msg" }))
                  : "2" == i
                  ? ("1" == t.loginwarn || "2" == t.loginwarn || t.loginwarn,
                    this.setData({ errorMsg: e, showType: "error-msg" }))
                  : this.setData({ errorMsg: e, showType: "error-msg" }),
                setTimeout(function () {
                  o.setData({ errorMsg: "", showType: "" });
                }, 3e3);
            },
            getWechatCodeV1: function () {
              var e = this;
              g().login &&
                g().login({
                  success: function (e) {
                    e.code &&
                      "the code is a mock one" != e.code &&
                      (console.log("code:" + e.code),
                      g().getUserInfo({
                        success: function () {
                          (0, y.M9)();
                        },
                        fail: function (e) {
                          console.log("获取GetuserInfo失败"), console.log(e);
                        },
                      }));
                  },
                  fail: function (i) {
                    console.log("获取code失败"),
                      console.log(i),
                      e.data.isBaidu ||
                        C.default.isBaidu ||
                        e.errorMsgShow("获取code失败", 3);
                  },
                });
            },
            timeCountDown: function () {
              var e = this,
                i = 60;
              !(function t() {
                0 == i
                  ? (e.setData({
                      getdynamictitle: "获取动态码",
                      getdynamicabled: !0,
                    }),
                    (i = -1))
                  : (e.setData({
                      getdynamictitle: i + "s后重新发送",
                      getdynamicabled: !1,
                    }),
                    i--),
                  i >= 0 ? (L = setTimeout(t, 1e3)) : L && clearTimeout(L);
              })();
            },
            renderUI: function (e) {
              var i = this,
                t = "携程会员",
                o = "";
              if (e && e.Extension) {
                var n = e.Extension;
                if (n.length > 0)
                  for (var a = 0; a < n.length; a++)
                    "NickName" == n[a].Key
                      ? "null" != n[a].Value &&
                        "" != n[a].Value &&
                        (t = n[a].Value)
                      : (n[a].Key = "PhotoImageUrl") && (o = n[a].Value);
              }
              "" != t &&
                i.setData({ nickname: t, nicknameShow: "display:block" }),
                "" != o &&
                  i.setData({ avatarUrl: o, avatarShow: "display:block" }),
                e.BindedMobilePhone && "" != e.BindedMobilePhone
                  ? i.setData({
                      showname: e.BindedMobilePhone,
                      rediectLoginBtnShow: "display:block",
                      shownameShow: "display:block",
                    })
                  : e.BindedEmail && "" != e.BindedEmail
                  ? i.setData({
                      showname: e.BindedEmail,
                      rediectLoginBtnShow: "display:block",
                      shownameShow: "display:block",
                    })
                  : e.UID &&
                    "" != e.UID &&
                    i.setData({
                      showname: i.maskoffcode(e.UID),
                      rediectLoginBtnShow: "display:block",
                      shownameShow: "display:block",
                    });
            },
            maskoffcode: function (e) {
              if (!e) return "";
              var i = e.trim(),
                t = i;
              if (i && i.length > 7)
                t = i.substr(0, 4) + "*****" + i.substr(-3, 3);
              else if (i && i.length > 3) {
                t = i.substr(0, 2) + "*****" + i.substr(-1, 1);
              } else t = i;
              return t;
            },
            getImageCode: function () {},
            sendMobileCode: w.Z.throttle(function () {
              this.canSendMobileCode() && this.sendMobileCodeAjax();
            }, 600),
            selectTips: function () {
              this.setData({ isTipsSelected: !this.data.isTipsSelected });
            },
            canSendMobileCode: function () {
              var e = "",
                i = {},
                t = this.inputContent.mobilephone,
                o = this.inputContent.img_code_box;
              return t && 0 !== t.trim().length
                ? /^1([3456789]\d{9})$/.test(t.trim())
                  ? !!(
                      "display:block" !== this.data.imgCodeShow ||
                      (o && 0 !== o.length)
                    ) ||
                    ((e = "请输入图片验证码"),
                    (i.imgcodewarn = "1"),
                    this.errorMsgShow(e, 1, i),
                    !1)
                  : ((e = "手机号格式不正确"),
                    (i.mobilewarn = "1"),
                    this.errorMsgShow(e, 1, i),
                    !1)
                : ((e = "请输入手机号"),
                  (i.mobilewarn = "1"),
                  this.errorMsgShow(e, 1, i),
                  !1);
            },
            sendMobileCodeAjax: function () {
              var e = this;
              if (!this.data.isTipsSelected)
                return this.showRuleDialog("smsCode");
              var i = this.getSendMobileCodeParams();
              return (0, T.uA)(i)
                .then(function (i) {
                  var t = "",
                    o = {};
                  1 !== i.resultCode
                    ? (-1 === i.resultCode
                        ? ((t = i.resultMessage || "发送验证码失败"),
                          (o.mobilewarn = "1"))
                        : (t = i.resultMessage || "发送验证码失败"),
                      t && e.errorMsgShow(t, 1, o))
                    : e.timeCountDown();
                })
                .catch(function () {
                  return e.errorMsgShow("发送失败", 3);
                });
            },
            getSendMobileCodeParams: function () {
              var e = {
                rtoken: "a",
                version: "a",
                rid: "a",
                userMobile: this.inputContent.mobilephone || "",
                type: 0,
                verifyType: 0,
              };
              return (e.sign = this.makeSign(e)), e;
            },
            makeSign: function (e) {
              var i = Object.keys(e);
              i.sort();
              for (var t = "", o = "", n = 0, a = i.length; n < a; n++) {
                var c = i[n],
                  s = e[c] || 0 == e[c] ? e[c] : "";
                "object" != (0, l.Z)(s) &&
                  ((t = t + o + c + "=" + s), (o = "&"));
              }
              return S.Z.MD5(
                "".concat("bkcpigycmtjh6d6fp3lfyhzbpjitulla").concat(S.Z.MD5(t))
              );
            },
            judgeCanGetMobile: function () {
              var e = this;
              return (0, y.M9)({ force: !0 }).then(
                function () {
                  return e.setData({
                    canGetMobile:
                      !C.default.isWechat || U.includes(C.default.appId),
                  });
                },
                function () {
                  return e.setData({ canGetMobile: C.default.isBaidu });
                }
              );
            },
            judgeCustomLoginMethod: function () {
              this.setData({
                isShowDirectLogin:
                  "normal" === g().getCurrentInstance().router.params.method &&
                  X,
              });
            },
            loginWithPhone: function (e) {
              var i = this;
              return (0, y.pt)(function () {
                y.ZP.isLogin
                  ? i.callback({ ReturnCode: "0", Message: "授权登录成功" })
                  : (0, b.showToast)("授权登录失败，请使用短信验证登录");
              }).call(this, e);
            },
            onLoginSuccess: function () {
              this.ubtDevTrace("o_mini_phoneAuth_login", { type: 1 }),
                this.callback({ ReturnCode: "0", Message: "授权登录成功" });
            },
            onLoginFail: function () {
              this.ubtDevTrace("o_mini_phoneAuth_login", { type: 0 }),
                (0, b.showToast)("授权登录失败，请使用短信验证登录"),
                this.ruleBtnClick();
            },
            configSourceForH5: function () {
              var e = "wx";
              return this.data.isBaidu && (e = "baidu"), e;
            },
            showInfo: function (e) {
              e.stopPropagation();
              var i = "https://"
                .concat(
                  C.default.h5domain,
                  "/webapp/train/activity/20200909-ztrip-policy/?partner="
                )
                .concat(C.default.partner, "&source=")
                .concat(this.configSourceForH5());
              f.Z.twebview({ data: { url: i } });
            },
            goPersonalPage: function (e) {
              e.stopPropagation();
              var i =
                  "kyb" === C.default.jetpack
                    ? "5102"
                    : C.default.isTieyou
                    ? "1002"
                    : "1003",
                t =
                  "https://pages.c-ctrip.com/ztrip/document/privacypolicyzx.html?appid=".concat(
                    i
                  );
              f.Z.twebview({ data: { url: t } });
            },
            noop: function () {},
          },
          F =
            (0, I.h)()(
              (x =
                p()(z)(
                  (x = (function (e) {
                    (0, c.Z)(t, e);
                    var i = (0, s.Z)(t);
                    function t() {
                      return (0, n.Z)(this, t), i.apply(this, arguments);
                    }
                    return (
                      (0, a.Z)(t, [
                        {
                          key: "render",
                          value: function () {
                            var e = this,
                              i = this.data,
                              t = i.isTieyou,
                              o = i.canGetMobile,
                              n = i.isShowDirectLogin,
                              a = i.getdynamicabled,
                              c = i.getdynamictitle,
                              s = i.errorMsg,
                              l = i.showType,
                              r = i.isBaidu,
                              h = i.isTipsSelected,
                              m = i.isShowRuleDialog,
                              p = i.ruleDialogType,
                              f = i.isDevMode;
                            return (0, B.BX)(u.View, {
                              className: "account-login ".concat(
                                C.default.isTieyou ? "ty" : "zx"
                              ),
                              children: [
                                (0, B.tZ)(u.View, {
                                  className: "login-top",
                                  children: r
                                    ? (0, B.BX)(u.View, {
                                        className: "swan-title-wrapper",
                                        children: [
                                          (0, B.tZ)(u.View, {
                                            children: (0, B.tZ)(u.Image, {
                                              src: "https://images3.c-ctrip.com/ztrip/hotel/t.ding/kaoshenjia/kaoyanrili/zhixing_logo@3x.png",
                                              className: "logo",
                                            }),
                                          }),
                                          (0, B.tZ)(u.View, {
                                            className: "title",
                                            children: "你好！欢迎登录智行",
                                          }),
                                        ],
                                      })
                                    : (0, B.BX)(d.default.Fragment, {
                                        children: [
                                          (0, B.tZ)(u.Image, {
                                            className: "header-icon",
                                            src: "https://images3.c-ctrip.com/ztrip/train.song/gonggong/icon_tx@3x.webp",
                                            webp: !0,
                                          }),
                                          (0, B.tZ)(u.Text, {
                                            className: "welcome-text",
                                            children: "欢迎登录".concat(
                                              t ? "铁友" : "智行"
                                            ),
                                          }),
                                        ],
                                      }),
                                }),
                                n
                                  ? (0, B.BX)(u.View, {
                                      className: "login-wechat",
                                      children: [
                                        o &&
                                          (0, B.tZ)(Z, {
                                            isTipsSelected: h,
                                            showRuleDialog: this.showRuleDialog,
                                            btnStyle: "btn-wechat".concat(
                                              r ? " swan" : ""
                                            ),
                                            onLoginSuccess: this.onLoginSuccess,
                                            onLoginFail: this.onLoginFail,
                                          }),
                                        (0, B.tZ)(u.Button, {
                                          className: "btn-line-grey",
                                          id: "AfAF",
                                          onClick: this.changeOtherLogin,
                                          children: "使用短信验证登录",
                                        }),
                                      ],
                                    })
                                  : (0, B.BX)(u.View, {
                                      className: "login-input",
                                      children: [
                                        (0, B.tZ)(u.View, {
                                          className: "item",
                                          children: (0, B.tZ)(u.Input, {
                                            type: "number",
                                            placeholder: "请输入手机号",
                                            name: "mobilephone",
                                            id: "mobilephone",
                                            placeholderClass: "input-plder",
                                            maxlength: "15",
                                            onInput: this.textChange,
                                            onBlur: this.getImageCode,
                                            className: "input-txt",
                                          }),
                                        }),
                                        f &&
                                          (0, B.tZ)(u.View, {
                                            className: "item",
                                            children: (0, B.tZ)(u.View, {
                                              style: "flex:1",
                                              children: (0, B.tZ)(u.Input, {
                                                type: "text",
                                                placeholder: "或输入密码登录",
                                                placeholderClass: "input-plder",
                                                maxlength: "15",
                                                name: "dyncpwd",
                                                id: "norpwd",
                                                onInput: this.textChange,
                                                className: "input-txt",
                                              }),
                                            }),
                                          }),
                                        (0, B.BX)(u.View, {
                                          className: "item",
                                          children: [
                                            (0, B.tZ)(u.View, {
                                              style: "flex:1",
                                              children: (0, B.tZ)(u.Input, {
                                                type: "text",
                                                placeholder: "请输入验证码",
                                                placeholderClass: "input-plder",
                                                maxlength: "8",
                                                name: "dyncpwd",
                                                id: "dyncpwd",
                                                onInput: this.textChange,
                                                className: "input-txt",
                                              }),
                                            }),
                                            a
                                              ? (0, B.tZ)(u.Button, {
                                                  className:
                                                    "btn-get color-primary " +
                                                    (t ? "ty" : "zx"),
                                                  id: "AfAG",
                                                  onClick: this.sendMobileCode,
                                                  children: "获取验证码",
                                                })
                                              : (0, B.tZ)(u.View, {
                                                  className:
                                                    "txt color-primary " +
                                                    (t ? "ty" : "zx"),
                                                  children: c,
                                                }),
                                          ],
                                        }),
                                        (0, B.tZ)(u.Button, {
                                          className:
                                            "btn-primary btn-login " +
                                            (t ? "ty" : "zx"),
                                          id: "dynamicLogin",
                                          onClick: this.dynamicLoginClick,
                                          children: "登录",
                                        }),
                                      ],
                                    }),
                                (0, B.tZ)(u.View, {
                                  className: "login-tips",
                                  id: "AfAH",
                                  onClick: this.selectTips,
                                  children: (0, B.BX)(u.View, {
                                    children: [
                                      (0, B.tZ)(u.View, {
                                        className: "radio ".concat(
                                          h ? "selected" : "unselected"
                                        ),
                                      }),
                                      "阅读并同意我们的",
                                      (0, B.tZ)(u.Text, {
                                        className: "txt",
                                        id: "AfAI",
                                        onClick: this.goPersonalPage,
                                        children: "“服务协议与隐私条款”",
                                      }),
                                    ],
                                  }),
                                }),
                                "error-msg" === l &&
                                  (0, B.tZ)(u.View, {
                                    className: "toast",
                                    children: s,
                                  }),
                                (0, B.tZ)(A, {
                                  isShow: m,
                                  ruleDialogType: p,
                                  onSmsCodeAccept: function () {
                                    e.ruleBtnClick(),
                                      g().nextTick(function () {
                                        e.sendMobileCode();
                                      });
                                  },
                                  goPersonalPage: this.goPersonalPage,
                                  close: function () {
                                    return e.setData({ isShowRuleDialog: !1 });
                                  },
                                  onLoginSuccess: function () {
                                    e.onLoginSuccess(), e.ruleBtnClick();
                                  },
                                  onLoginFail: this.onLoginFail,
                                  isShowDirectLogin: n,
                                  dynamicRuleBtnClick: this.dynamicRuleBtnClick,
                                }),
                              ],
                            });
                          },
                        },
                      ]),
                      t
                    );
                  })(d.default.Component))
                ) || x)
            ) || x;
        Page(
          (0, o.createPageConfig)(
            F,
            "pages/accounts/login",
            { root: { cn: [] } },
            {
              navigationBarTitleText: "登录",
              navigationBarBackgroundColor: "#fff",
              navigationBarTextStyle: "black",
              backgroundColorTop: "#fff",
              backgroundColorBottom: "#fff",
            } || {}
          )
        );
      },
    },
    function (e) {
      e.O(0, [19559, 11216, 68592], function () {
        return (function (i) {
          return e((e.s = i));
        })(48769);
      }),
        e.O();
    },
  ]);
})();
