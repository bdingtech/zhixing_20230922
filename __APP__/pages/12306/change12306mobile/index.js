!(function () {
  "use strict";
  require("../sub-vendors.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [91356],
      {
        46228: function (e, t, n) {
          var a,
            i = n(32180),
            s = n(57042),
            o = n(24460),
            c = n(21867),
            l = n(86066),
            u = n(52500),
            d = (n(92954), n(71515)),
            r = n(81957),
            h = n(49120),
            m = n(77900),
            g = n(25391),
            f = n(94190),
            p = n(96158),
            b = n(34752),
            v = n(48813),
            w =
              (0, r.h)()(
                (a = (function (e) {
                  (0, c.Z)(n, e);
                  var t = (0, l.Z)(n);
                  function n() {
                    var e;
                    (0, s.Z)(this, n),
                      ((e = t.call(this)).pageId = "10650068942");
                    var a = f.WG.get().bind12306;
                    return (
                      (e.state = {
                        mobile: "",
                        messageCode: "",
                        bind12306Name: null == a ? void 0 : a.name,
                        bind12306Pwd: null == a ? void 0 : a.pwd,
                      }),
                      e
                    );
                  }
                  return (
                    (0, o.Z)(n, [
                      {
                        key: "sendMessage",
                        value: function () {
                          this.navigateTo({
                            url: "/pages/train/smsWebview/index?smsNumber=12306&smsCode=999",
                            callback: function () {},
                          });
                        },
                      },
                      {
                        key: "onInputMobile",
                        value: function (e) {
                          this.setState({ mobile: e.detail.value });
                        },
                      },
                      {
                        key: "onInputMessageCode",
                        value: function (e) {
                          this.setState({ messageCode: e.detail.value });
                        },
                      },
                      {
                        key: "submit",
                        value: function () {
                          var e = this,
                            t = this.state,
                            n = t.mobile,
                            a = t.messageCode,
                            i = t.bind12306Pwd,
                            s = t.bind12306Name;
                          if (n)
                            if (m.Z.isMobile(n))
                              if (a)
                                if (6 == a.length) {
                                  var o = {
                                    mobileNo: n,
                                    idNo: "",
                                    password: i,
                                    verificationCode: a,
                                    userName: s,
                                  };
                                  (0, h.showLoading)(),
                                    (0, p.er)(o, b.Zc)
                                      .then(function () {
                                        (0, p.Mm)(s, i)
                                          .then(function () {
                                            (0, h.hideLoading)(),
                                              setTimeout(function () {
                                                (0, h.showModal)({
                                                  title: "换绑成功",
                                                  content:
                                                    "恭喜换绑成功,您的新绑定手机号为" +
                                                    n,
                                                  mask: !0,
                                                  success: function () {
                                                    e.navigateBack();
                                                  },
                                                });
                                              }, 300);
                                          })
                                          .catch(function (t) {
                                            (0, h.hideLoading)(),
                                              console.warn(
                                                "change password success, login fail",
                                                t
                                              ),
                                              setTimeout(function () {
                                                (0, h.showModal)({
                                                  title:
                                                    "恭喜换绑成功，请重新登录12306账号",
                                                  mask: !0,
                                                  success: function () {
                                                    g.ZP.goto12306H5({
                                                      pageName:
                                                        "accountManagement12306",
                                                      userAccount:
                                                        e.state.bind12306Name,
                                                      passWord:
                                                        e.state.bind12306Pas,
                                                    })
                                                      .then(function (t) {
                                                        (0, p.Tq)(t),
                                                          e.navigateBack();
                                                      })
                                                      .catch(function () {});
                                                  },
                                                });
                                              }, 300);
                                          });
                                      })
                                      .catch(function (t) {
                                        (0, h.hideLoading)(),
                                          setTimeout(function () {
                                            (0, h.showModal)({
                                              title: "无法换绑",
                                              mask: !0,
                                              content:
                                                "string" == typeof t
                                                  ? t
                                                  : (null == t
                                                      ? void 0
                                                      : t.message) ||
                                                    "换绑失败",
                                              success: function () {
                                                e.navigateBack();
                                              },
                                            });
                                          }, 300);
                                      });
                                } else (0, h.showToast)("请输入正确的验证码");
                              else (0, h.showToast)("请输入验证码");
                            else (0, h.showToast)("请输入正确的手机号");
                          else (0, h.showToast)("请输入手机号");
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this.state,
                            t = e.mobile,
                            n = e.messageCode;
                          return (0, v.BX)(d.View, {
                            className: "change-mobile",
                            children: [
                              (0, v.tZ)(d.View, {
                                className: "info",
                                children: (0, v.tZ)(d.Text, {
                                  className: "text",
                                  children:
                                    '为了保护您的信息安全，便于今后为您服务，请按以下程序进行手机双向核验\n一：确认手机号是否正确，不正确请修改。\n二：请用您要更换成的新的手机号发送短信 "999" 至12306，以便确认您的手机可以联络。\n三：12306接到您的短信后将给您的手机回复六位数字短信，请您在十分钟内将六位数字短信填写在下方空白框中，并点击"提交"按钮',
                                }),
                              }),
                              (0, v.tZ)(d.View, {
                                id: "AgAA",
                                onClick: this.sendMessage,
                                className: "btn-send color-primary",
                                children: "去发短信",
                              }),
                              (0, v.BX)(d.View, {
                                className: "container",
                                children: [
                                  (0, v.BX)(d.View, {
                                    className: "input-item",
                                    children: [
                                      (0, v.tZ)(d.View, {
                                        className: "label",
                                        children: "手机号",
                                      }),
                                      (0, v.tZ)(d.Input, {
                                        type: "text",
                                        placeholderClass: "input-txt-hold",
                                        className: "input-txt",
                                        value: t,
                                        placeholder: "请输入要更换的手机号",
                                        onInput: this.onInputMobile,
                                      }),
                                    ],
                                  }),
                                  (0, v.tZ)(d.View, { className: "line" }),
                                  (0, v.BX)(d.View, {
                                    className: "input-item",
                                    children: [
                                      (0, v.tZ)(d.View, {
                                        className: "label",
                                        children: "验证码",
                                      }),
                                      (0, v.tZ)(d.Input, {
                                        type: "text",
                                        placeholderClass: "input-txt-hold",
                                        className: "input-txt",
                                        value: n,
                                        placeholder: "请输入验证码",
                                        onInput: this.onInputMessageCode,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, v.tZ)(d.Button, {
                                id: "AgAB",
                                onClick: this.submit,
                                className: "btn-submit",
                                children: "提交",
                              }),
                            ],
                          });
                        },
                      },
                    ]),
                    n
                  );
                })(u.default.Component))
              ) || a;
          Page(
            (0, i.createPageConfig)(
              w,
              "pages/12306/change12306mobile/index",
              { root: { cn: [] } },
              {
                navigationBarBackgroundColor: "#fff",
                backgroundColorTop: "#EFEFEF",
                navigationBarTitleText: "手机修改",
                navigationBarTextStyle: "black",
              } || {}
            )
          );
        },
      },
      function (e) {
        e.O(0, [37013, 19559, 11216, 68592], function () {
          return (function (t) {
            return e((e.s = t));
          })(46228);
        }),
          e.O();
      },
    ]);
})();
