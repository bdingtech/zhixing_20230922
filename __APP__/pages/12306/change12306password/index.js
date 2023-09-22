!(function () {
  "use strict";
  require("../sub-vendors.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [74371],
      {
        27254: function (e, t, s) {
          var a,
            n = s(32180),
            i = s(57042),
            o = s(24460),
            l = s(21867),
            d = s(86066),
            r = s(52500),
            c = (s(92954), s(71515)),
            u = s(81957),
            h = s(49120),
            p = s(94190),
            m = s(77900),
            w = s(25391),
            g = s(96158),
            f = s(34752),
            v = s(48813),
            b =
              (0, u.h)()(
                (a = (function (e) {
                  (0, l.Z)(s, e);
                  var t = (0, d.Z)(s);
                  function s() {
                    var e;
                    (0, i.Z)(this, s),
                      ((e = t.call(this)).pageId = "10650068944"),
                      (e.timer = null);
                    var a = p.WG.get().bind12306;
                    return (
                      (e.state = {
                        originPassword: "",
                        password: "",
                        secondPassword: "",
                        messageCode: "",
                        disabled: !1,
                        time: 60,
                        bind12306Name: null == a ? void 0 : a.name,
                        bind1236Password: null == a ? void 0 : a.pwd,
                      }),
                      e
                    );
                  }
                  return (
                    (0, o.Z)(s, [
                      {
                        key: "componentWillUnmount",
                        value: function () {
                          this.timer && clearInterval(this.timer);
                        },
                      },
                      {
                        key: "onInputPassword",
                        value: function (e) {
                          this.setState({ password: e.detail.value });
                        },
                      },
                      {
                        key: "onInputOriginPassword",
                        value: function (e) {
                          this.setState({ originPassword: e.detail.value });
                        },
                      },
                      {
                        key: "onInputSecondPassword",
                        value: function (e) {
                          this.setState({ secondPassword: e.detail.value });
                        },
                      },
                      {
                        key: "onInputMessageCode",
                        value: function (e) {
                          this.setState({ messageCode: e.detail.value });
                        },
                      },
                      {
                        key: "getMessageCode",
                        value: function () {
                          var e = this,
                            t = this.state,
                            s = {
                              type: 1,
                              username: t.bind12306Name,
                              password: t.bind1236Password,
                              idTypeCode: "",
                              idNo: "",
                              mobileNo: "",
                              email: "",
                            };
                          (0, h.showLoading)("获取验证码..."),
                            (0, g.er)(s, f.Dg)
                              .then(function () {
                                (0, h.hideLoading)(),
                                  (0, h.showToast)("获取成功"),
                                  e.disableTimer();
                              })
                              .catch(function () {
                                (0, h.hideLoading)(),
                                  (0, h.showToast)("获取失败,请重试");
                              });
                        },
                      },
                      {
                        key: "disableTimer",
                        value: function () {
                          var e = this;
                          this.setState(
                            { disabled: !0, time: 60 },
                            function () {
                              var t = 60;
                              e.timer && clearInterval(e.timer),
                                (e.timer = setInterval(function () {
                                  0 === (t -= 1) &&
                                    (clearInterval(e.timer),
                                    e.setState({ disabled: !1, time: 0 })),
                                    e.setState({ time: t });
                                }, 1e3));
                            }
                          );
                        },
                      },
                      {
                        key: "submit",
                        value: function () {
                          var e = this,
                            t = this.state,
                            s = t.password,
                            a = t.secondPassword,
                            n = t.messageCode,
                            i = t.originPassword;
                          if (i)
                            if (n)
                              if (s.length < 6)
                                (0, h.showToast)("密码不能少于6位");
                              else if (m.Z.isValid12306Password(s))
                                if (s && s === a) {
                                  var o = {
                                    verificationCode: n,
                                    username: this.state.bind12306Name,
                                    newPassword: s,
                                    oldPassword: i,
                                  };
                                  (0, h.showLoading)(),
                                    (0, g.er)(o, f.Fn)
                                      .then(function () {
                                        (0, g.Mm)(e.state.bind12306Name, s)
                                          .then(function () {
                                            (0, h.hideLoading)(),
                                              (0, h.showModal)({
                                                title: "修改成功",
                                                content:
                                                  "恭喜您修改密码成功,\n新密码为: ".concat(
                                                    s
                                                  ),
                                                showCancel: !1,
                                                confirmText: "知道了",
                                                success: function () {
                                                  e.navigateBack();
                                                },
                                              });
                                          })
                                          .catch(function (t) {
                                            (0, h.hideLoading)(),
                                              console.warn(
                                                "change password success, login fail",
                                                t
                                              ),
                                              (0, h.showModal)({
                                                title:
                                                  "修改密码成功，请重新登录12306账号",
                                                success: function () {
                                                  w.ZP.goto12306H5({
                                                    pageName:
                                                      "accountManagement12306",
                                                    userAccount:
                                                      e.state.bind12306Name,
                                                    passWord:
                                                      e.state.bind12306Pas,
                                                  })
                                                    .then(function (t) {
                                                      (0, g.Tq)(t),
                                                        e.navigateBack();
                                                    })
                                                    .catch(function () {});
                                                },
                                              });
                                          });
                                      })
                                      .catch(function (e) {
                                        (0, h.hideLoading)(),
                                          (0, h.showToast)(
                                            "string" == typeof e
                                              ? e
                                              : (null == e
                                                  ? void 0
                                                  : e.message) || "修改失败"
                                          );
                                      });
                                } else (0, h.showToast)("请确认密码一致");
                              else
                                (0, h.showToast)(
                                  "密码只能为字母、数字或下划线中两个及以上的组合"
                                );
                            else (0, h.showToast)("请输入验证码");
                          else (0, h.showToast)("请输入原密码");
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this.state,
                            t = e.password,
                            s = e.originPassword,
                            a = e.secondPassword,
                            n = e.messageCode,
                            i = e.disabled,
                            o = e.time;
                          return (0, v.BX)(c.View, {
                            className: "change-password",
                            children: [
                              (0, v.BX)(c.View, {
                                className: "container",
                                children: [
                                  (0, v.BX)(c.View, {
                                    className: "input-item",
                                    children: [
                                      (0, v.tZ)(c.View, {
                                        className: "label",
                                        children: "原密码",
                                      }),
                                      (0, v.tZ)(c.Input, {
                                        type: "text",
                                        password: "true",
                                        className: "input-txt",
                                        placeholderClass: "input-txt-hold",
                                        value: s,
                                        placeholder: "请输入原密码",
                                        onInput: this.onInputOriginPassword,
                                      }),
                                    ],
                                  }),
                                  (0, v.tZ)(c.View, { className: "line" }),
                                  (0, v.BX)(c.View, {
                                    className: "input-item",
                                    children: [
                                      (0, v.tZ)(c.View, {
                                        className: "label",
                                        children: "新密码",
                                      }),
                                      (0, v.tZ)(c.Input, {
                                        type: "text",
                                        password: "true",
                                        className: "input-txt",
                                        placeholderClass: "input-txt-hold",
                                        value: t,
                                        placeholder: "长度不小于6",
                                        onInput: this.onInputPassword,
                                      }),
                                    ],
                                  }),
                                  (0, v.tZ)(c.View, { className: "line" }),
                                  (0, v.BX)(c.View, {
                                    className: "input-item",
                                    children: [
                                      (0, v.tZ)(c.View, {
                                        className: "label",
                                        children: "密码确认",
                                      }),
                                      (0, v.tZ)(c.Input, {
                                        type: "text",
                                        password: "true",
                                        className: "input-txt",
                                        placeholderClass: "input-txt-hold",
                                        value: a,
                                        placeholder: "请再次输入新密码",
                                        onInput: this.onInputSecondPassword,
                                      }),
                                    ],
                                  }),
                                  (0, v.tZ)(c.View, { className: "line" }),
                                  (0, v.BX)(c.View, {
                                    className: "input-item",
                                    children: [
                                      (0, v.tZ)(c.View, {
                                        className: "label",
                                        children: "  ",
                                      }),
                                      (0, v.tZ)(c.Input, {
                                        type: "text",
                                        className: "input-txt",
                                        placeholderClass: "input-txt-hold",
                                        value: n,
                                        placeholder: "短信验证码",
                                        onInput: this.onInputMessageCode,
                                      }),
                                      (0, v.tZ)(c.Button, {
                                        type: "default",
                                        plain: "true",
                                        size: "mini",
                                        className: i
                                          ? "btn-message btn-disabled"
                                          : "btn-message",
                                        disabled: i,
                                        id: "AgAC",
                                        onClick: this.getMessageCode,
                                        children: i
                                          ? "获取验证码(" + o + "s)"
                                          : "获取验证码",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, v.tZ)(c.View, {
                                className: "tips",
                                children:
                                  "短信验证码一天只能收取3次，请谨慎使用",
                              }),
                              (0, v.tZ)(c.Button, {
                                id: "AgAD",
                                onClick: this.submit,
                                className: "btn-submit",
                                children: "提交",
                              }),
                            ],
                          });
                        },
                      },
                    ]),
                    s
                  );
                })(r.default.Component))
              ) || a;
          Page(
            (0, n.createPageConfig)(
              b,
              "pages/12306/change12306password/index",
              { root: { cn: [] } },
              {
                navigationBarBackgroundColor: "#fff",
                backgroundColorTop: "#EFEFEF",
                navigationBarTitleText: "修改密码",
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
          })(27254);
        }),
          e.O();
      },
    ]);
})();
