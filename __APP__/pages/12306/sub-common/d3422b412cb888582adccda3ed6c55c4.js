!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [60579],
    {
      81811: function (e, n, t) {
        var c = t(79301),
          i = t(95308),
          l = t(90129),
          s = t(52500),
          a = t(71515),
          r = t(92954),
          o = t.n(r),
          u = t(49120),
          d = t(48813);
        n.Z = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            n = e.className,
            t = void 0 === n ? "" : n,
            r = e.smsCode,
            h = void 0 === r ? "666" : r,
            m = e.mobile,
            b = void 0 === m ? "" : m,
            f = e.titleDesc,
            p =
              void 0 === f
                ? "您当前登录的账号需进行手机号核验。12306规定，手机号码核验通过方可购票。请按以下步骤完成核验"
                : f,
            N = e.smsDesc,
            Z =
              void 0 === N
                ? function () {
                    return (0, d.tZ)(a.Block, {
                      children: b
                        ? (0, d.BX)(d.HY, {
                            children: [
                              "使用手机",
                              (0, d.BX)(a.Text, {
                                className: "tblue",
                                children: [
                                  4 == b.length &&
                                    (0, d.tZ)(a.Text, { children: "尾号" }),
                                  b,
                                ],
                              }),
                              "发送短信",
                              (0, d.tZ)(a.Text, {
                                className: "tblue",
                                children: h,
                              }),
                              "至",
                              (0, d.tZ)(a.Text, {
                                className: "tblue",
                                children: "12306",
                              }),
                              "，以便确认您的手机可以联络",
                            ],
                          })
                        : (0, d.BX)(d.HY, {
                            children: [
                              "使用12306账号注册手机号发送短信",
                              (0, d.tZ)(a.Text, {
                                className: "tblue",
                                children: h,
                              }),
                              "至",
                              (0, d.tZ)(a.Text, {
                                className: "tblue",
                                children: "12306",
                              }),
                            ],
                          }),
                    });
                  }
                : N,
            w = e.onVerify,
            v = (0, s.useState)(!1),
            x = (0, l.Z)(v, 2),
            V = x[0],
            T = x[1],
            B = null,
            X = (function () {
              var e = (0, i.Z)(
                (0, c.Z)().mark(function e() {
                  var n;
                  return (0, c.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (V) {
                            e.next = 3;
                            break;
                          }
                          return (
                            (0, u.showToast)("请输入验证码~"),
                            e.abrupt("return")
                          );
                        case 3:
                          return (
                            (n = B.value), null == w || w(n), e.abrupt("return")
                          );
                        case 6:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            g = function () {
              o().sendSms({
                phoneNumber: "12306",
                content: h,
                complete: function () {
                  B.focus();
                },
              });
            },
            k = function (e) {
              T(6 === e.detail.value.length);
            };
          return (0, d.BX)(a.View, {
            className: "train-12306-verify-box ".concat(t),
            children: [
              (0, d.tZ)(a.View, { className: "phone-verify-hd", children: p }),
              (0, d.BX)(a.View, {
                className: "phone-verify-bd",
                children: [
                  (0, d.BX)(a.View, {
                    className: "li",
                    children: [
                      (0, d.tZ)(a.Text, { className: "no", children: "1" }),
                      (0, d.tZ)(a.View, {
                        className: "info",
                        children: "function" == typeof Z ? Z() : Z,
                      }),
                      o().canIUse("sendSms") &&
                        (0, d.tZ)(a.View, {
                          className: "btn-blue btn-send",
                          id: "AgAX",
                          onClick: g,
                          children: "发送短信",
                        }),
                    ],
                  }),
                  (0, d.BX)(a.View, {
                    className: "li",
                    children: [
                      (0, d.tZ)(a.Text, { className: "no", children: "2" }),
                      (0, d.tZ)(a.View, {
                        className: "info",
                        children:
                          "发送短信后，您将收到12306发给您的六位数字验证码，请输入该验证码",
                      }),
                      (0, d.tZ)(a.View, {
                        className: "code-box",
                        children: (0, d.tZ)(a.Input, {
                          ref: function (e) {
                            return (B = e);
                          },
                          type: "text",
                          maxlength: "6",
                          className: "input-code",
                          onInput: k,
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, d.tZ)(a.View, {
                className: "btn",
                children: (0, d.tZ)(a.View, {
                  className: "btn-blue btn-big ".concat(V ? "" : "disabled"),
                  id: "AgAY",
                  onClick: X,
                  children: "完成校验",
                }),
              }),
            ],
          });
        };
      },
    },
  ]);
})();
