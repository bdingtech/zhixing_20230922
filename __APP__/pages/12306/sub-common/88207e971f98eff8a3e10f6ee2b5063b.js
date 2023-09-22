!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [83067],
    {
      39778: function (e, s, n) {
        var a = n(79301),
          t = n(298),
          i = n(45023),
          o = n(95308),
          r = n(52500),
          c = n(97939),
          l = n(49120),
          d = n(71515),
          m = n(34405),
          w = n(90620),
          u = n(48813);
        s.Z = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            s = e.onRef,
            n = void 0 === s ? null : s,
            f = e.confirmText,
            h = void 0 === f ? "提交" : f,
            p = e.onSuccess,
            N = e.mobile,
            Z = e.idCardType,
            g = e.idCardNo,
            P = e.pollingKey,
            V = { $SmsCode: null, $NewPas1: null, $NewPas2: null },
            b = function (e) {
              var s = e.smsCode,
                n = e.newPas1,
                a = e.newPas2;
              if (!s) throw { message: "请输入验证码", code: -22 };
              if (!n) throw { message: "请输入密码", code: -22 };
              if (!a) throw { message: "请输入确认密码", code: -22 };
              if (n != a) throw { message: "两次输入的密码不一致", code: -22 };
              if (n.length < 6) throw { message: "密码不能少于6位", code: -22 };
              if (!m.Z.combilePswCheck(n))
                throw {
                  message: "密码只能为字母数字下划线中两个及以上的组合",
                  code: -22,
                };
            },
            v = function () {
              var e = [
                  V.$SmsCode.value,
                  V.$NewPas1.getPassWord(),
                  V.$NewPas2.getPassWord(),
                ],
                s = e[0],
                n = e[1],
                a = e[2];
              return (
                b({ smsCode: s, newPas1: n, newPas2: a }),
                { smsCode: s, newPas1: n, newPas2: a }
              );
            },
            C = (function () {
              var e = (0, o.Z)(
                (0, a.Z)().mark(function e() {
                  var s, n, o;
                  return (0, a.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (s = v()),
                              (n = (0, i.Z)(
                                {
                                  confirmType: 1,
                                  userName: "",
                                  newPassword: s.newPas1,
                                  confirmPassword: s.newPas2,
                                  mobileNo: N,
                                  idCardType: "".concat(Z),
                                  pollingKey: P,
                                  idCardNo: g,
                                  smsVerificationCode: s.smsCode,
                                },
                                "confirmType",
                                1
                              )),
                              (0, l.showLoading)(),
                              (e.next = 6),
                              (0, c.Lf)(n)
                            );
                          case 6:
                            (o = e.sent),
                              (0, l.hideLoading)(),
                              null == p ||
                                p(
                                  (0, t.Z)(
                                    (0, t.Z)({}, o),
                                    {},
                                    { _userName: N, _password: s.newPas1 }
                                  )
                                ),
                              (e.next = 15);
                            break;
                          case 11:
                            (e.prev = 11),
                              (e.t0 = e.catch(0)),
                              (0, l.hideLoading)(),
                              (0, l.showToast)(
                                e.t0.message ||
                                  e.t0.resultMessage ||
                                  "找回密码失败"
                              );
                          case 15:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 11]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            x = function (e, s) {
              V[e].value = s;
            };
          return (
            (0, r.useImperativeHandle)(n, function () {
              return { getFormVal: v, setFormVal: x };
            }),
            (0, u.BX)(d.View, {
              className: "train-12306-common-form-view in-dialog",
              children: [
                (0, u.BX)(d.View, {
                  children: [
                    (0, u.BX)(d.View, {
                      className: "form-li",
                      children: [
                        (0, u.tZ)(d.View, {
                          className: "form-label",
                          children: "手机验证码",
                        }),
                        (0, u.tZ)(d.View, {
                          className: "cont",
                          children: (0, u.tZ)(d.Input, {
                            type: "text",
                            ref: function (e) {
                              return (V.$SmsCode = e);
                            },
                            placeholder: "请输入验证码",
                            className: "input-txt",
                          }),
                        }),
                      ],
                    }),
                    (0, u.BX)(d.View, {
                      className: "form-li",
                      children: [
                        (0, u.tZ)(d.View, {
                          className: "form-label",
                          children: "新密码",
                        }),
                        (0, u.tZ)(d.View, {
                          className: "cont",
                          children: (0, u.tZ)(w.Z, {
                            type: "text",
                            onRef: function (e) {
                              return (V.$NewPas1 = e);
                            },
                            placeholder: "请输入6位以上新密码",
                            className: "input-txt",
                          }),
                        }),
                      ],
                    }),
                    (0, u.BX)(d.View, {
                      className: "form-li",
                      children: [
                        (0, u.tZ)(d.View, {
                          className: "form-label",
                          children: "密码确认",
                        }),
                        (0, u.tZ)(d.View, {
                          className: "cont",
                          children: (0, u.tZ)(w.Z, {
                            type: "text",
                            onRef: function (e) {
                              return (V.$NewPas2 = e);
                            },
                            placeholder: "请确认新密码",
                            className: "input-txt",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, u.BX)(d.View, {
                  className: "book-tips",
                  children: [
                    (0, u.tZ)(d.View, {
                      className: "note-warm-tip",
                      children: " 温馨提示：",
                    }),
                    (0, u.tZ)(d.View, {
                      className: "note-warm-content",
                      children:
                        " 验证码已发出，请注意查收短信，如果没有收到短信，请返回上一步重新获取",
                    }),
                  ],
                }),
                (0, u.tZ)(d.View, {
                  className: "btn-box",
                  children: (0, u.tZ)(d.View, {
                    className: "btn-blue btn-big",
                    id: "AgAU",
                    onClick: C,
                    children: h,
                  }),
                }),
              ],
            })
          );
        };
      },
    },
  ]);
})();
