!(function () {
  "use strict";
  require("../sub-vendors.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [13860],
      {
        9789: function (e, t, n) {
          var i,
            a = n(32180),
            r = n(79301),
            s = n(95308),
            c = n(57042),
            o = n(24460),
            l = n(81876),
            u = n(21867),
            d = n(86066),
            h = n(45023),
            p = n(92954),
            m = n.n(p),
            f = n(52500),
            v = n(71515),
            w = n(81957),
            y = n(21294),
            k = n(18783),
            b = n(79792),
            Z = n(77900),
            g = n(10741),
            C = n(48813),
            x = b.default.isTieyou,
            N = b.default.isWechat,
            V =
              (0, w.h)()(
                (i = (function (e) {
                  (0, u.Z)(n, e);
                  var t = (0, d.Z)(n);
                  function n(e) {
                    var i;
                    return (
                      (0, c.Z)(this, n),
                      (i = t.call(this, e)),
                      (0, h.Z)((0, l.Z)(i), "pageId", "10650060609"),
                      (i.state = {
                        state: 0,
                        mobile: "",
                        mobileStr: "",
                        verifyCode: "",
                        verifyTextVisible: !0,
                        downCount: 0,
                        userName: "",
                        cardID: "",
                        amount: "",
                        descs: [],
                        token: "",
                      }),
                      i
                    );
                  }
                  return (
                    (0, o.Z)(n, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          var e = (0, p.getCurrentInstance)().router.params;
                          console.log(e),
                            e &&
                              e.mobile &&
                              this.setState({
                                mobile: e.mobile,
                                mobileStr:
                                  e.mobile.slice(0, 3) +
                                  "****" +
                                  e.mobile.slice(7, 11),
                              });
                        },
                      },
                      {
                        key: "componentWillUnmount",
                        value: function () {
                          this.clearTimer();
                        },
                      },
                      {
                        key: "componentDidShow",
                        value: function () {
                          k.ZP.isLogin ||
                            k.ZP.doLogin()
                              .then(function () {})
                              .catch(function (e) {
                                console.log(e);
                              }),
                            N || this.navigateBack();
                        },
                      },
                      {
                        key: "verifyCodeInput",
                        value: function (e) {
                          var t = e.detail.value.trim();
                          this.setState({ verifyCode: t });
                        },
                      },
                      {
                        key: "nameInput",
                        value: function (e) {
                          var t = e.detail.value.trim();
                          this.setState({ userName: t });
                        },
                      },
                      {
                        key: "cardIDInput",
                        value: function (e) {
                          var t = e.detail.value.trim();
                          this.setState({ cardID: t });
                        },
                      },
                      {
                        key: "clearTimer",
                        value: function () {
                          this.downInterval && clearInterval(this.downInterval);
                        },
                      },
                      {
                        key: "onClickGetVerifyCode",
                        value: (function () {
                          var e = (0, s.Z)(
                            (0, r.Z)().mark(function e(t) {
                              var n,
                                i,
                                a = this;
                              return (0, r.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (n = this.state.mobile),
                                          (e.prev = 1),
                                          (e.next = 4),
                                          (0, g.DCn)({
                                            scene: 0,
                                            type: t,
                                            mobile: y.Z.tripleDESEncrypt(n),
                                          })
                                        );
                                      case 4:
                                        1 === (i = e.sent).resultCode
                                          ? 1 == t
                                            ? m().showToast({
                                                title:
                                                  "语音获取成功，请注意接听电话",
                                                icon: "none",
                                                duration: 2e3,
                                              })
                                            : (this.setState({
                                                verifyTextVisible: !1,
                                                downCount: 60,
                                              }),
                                              (this.restTime = 60),
                                              this.clearTimer(),
                                              (this.downInterval = setInterval(
                                                function () {
                                                  (a.restTime = a.restTime - 1),
                                                    a.setState({
                                                      downCount: a.restTime,
                                                    }),
                                                    a.restTime < 0 &&
                                                      (a.clearTimer(),
                                                      a.setState({
                                                        verifyTextVisible: !0,
                                                      }));
                                                },
                                                1e3
                                              )))
                                          : m().showModal({
                                              title: "提示",
                                              content:
                                                i.resultMessage ||
                                                "获取验证码失败，请稍后重试",
                                            }),
                                          (e.next = 12);
                                        break;
                                      case 8:
                                        (e.prev = 8),
                                          (e.t0 = e.catch(1)),
                                          console.log(e.t0),
                                          m().showModal({
                                            title: "提示",
                                            content:
                                              "获取验证码失败，请稍后重试",
                                          });
                                      case 12:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[1, 8]]
                              );
                            })
                          );
                          return function (t) {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "onClickNextStep",
                        value: (function () {
                          var e = (0, s.Z)(
                            (0, r.Z)().mark(function e() {
                              var t, n, i, a, s;
                              return (0, r.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (
                                          ((t = this.state),
                                          (n = t.verifyCode),
                                          (i = t.mobile),
                                          n && 6 === n.length)
                                        ) {
                                          e.next = 4;
                                          break;
                                        }
                                        return (
                                          m().showModal({
                                            title: "提示",
                                            content: "请填入正确的验证码",
                                          }),
                                          e.abrupt("return")
                                        );
                                      case 4:
                                        return (
                                          (e.prev = 4),
                                          (e.next = 7),
                                          (0, g.EjZ)({
                                            scene: 0,
                                            verifyCode: n,
                                            mobile: y.Z.tripleDESEncrypt(i),
                                          })
                                        );
                                      case 7:
                                        if (
                                          ((a = e.sent),
                                          console.log(
                                            "checkWalletVerifyCodePromise",
                                            a
                                          ),
                                          1 !== a.resultCode)
                                        ) {
                                          e.next = 18;
                                          break;
                                        }
                                        return (
                                          this.setState({ token: a.token }),
                                          (e.next = 13),
                                          (0, g.qzc)({ code: "weixin" })
                                        );
                                      case 13:
                                        (s = e.sent),
                                          console.log(
                                            "getPreAuthenticateInfoPromise",
                                            s
                                          ),
                                          1 === s.resultCode
                                            ? this.setState({
                                                state: 1,
                                                amount: s.amount,
                                                descs: s.descs,
                                              })
                                            : m().showModal({
                                                title: "提示",
                                                content:
                                                  s.resultMessage ||
                                                  "网络错误，请稍后重试",
                                              }),
                                          (e.next = 19);
                                        break;
                                      case 18:
                                        m().showModal({
                                          title: "提示",
                                          content:
                                            a.resultMessage ||
                                            "验证码错误，请稍后重试",
                                        });
                                      case 19:
                                        e.next = 25;
                                        break;
                                      case 21:
                                        (e.prev = 21),
                                          (e.t0 = e.catch(4)),
                                          console.log(e.t0),
                                          m().showModal({
                                            title: "提示",
                                            content: "验证码错误，请稍后重试",
                                          });
                                      case 25:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[4, 21]]
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "onClickSubmit",
                        value: (function () {
                          var e = (0, s.Z)(
                            (0, r.Z)().mark(function e() {
                              var t,
                                n,
                                i,
                                a,
                                s,
                                c,
                                o = this;
                              return (0, r.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (
                                          ((t = this.state),
                                          (n = t.userName),
                                          (i = t.cardID),
                                          (a = t.token),
                                          n)
                                        ) {
                                          e.next = 4;
                                          break;
                                        }
                                        return (
                                          m().showModal({
                                            title: "提示",
                                            content: "请填入正确的姓名",
                                          }),
                                          e.abrupt("return")
                                        );
                                      case 4:
                                        if (i && Z.Z.isValidSFZ(i)) {
                                          e.next = 7;
                                          break;
                                        }
                                        return (
                                          m().showModal({
                                            title: "提示",
                                            content: "请填入正确的身份证号码",
                                          }),
                                          e.abrupt("return")
                                        );
                                      case 7:
                                        return (
                                          (e.prev = 7),
                                          (e.next = 10),
                                          (0, g.s$b)({
                                            token: a,
                                            realName: y.Z.tripleDESEncrypt(n),
                                            identifyCode:
                                              y.Z.tripleDESEncrypt(i),
                                            code: "weixin",
                                          })
                                        );
                                      case 10:
                                        (s = e.sent),
                                          console.log(
                                            "realInfoAuthenticationPromise",
                                            s
                                          ),
                                          1 === s.resultCode && s.authInfo
                                            ? ((c = JSON.parse(s.authInfo)),
                                              m().requestPayment({
                                                timeStamp: c.timeStamp,
                                                nonceStr: c.nonceStr,
                                                package: c.package,
                                                signType: c.signType,
                                                paySign: c.paySign,
                                                success: function () {
                                                  o.navigateBack();
                                                },
                                                fail: function (e) {
                                                  console.log("支付失败", e),
                                                    e &&
                                                      e.err_desc &&
                                                      (m().showModal({
                                                        title: "提示",
                                                        content: e.err_desc,
                                                      }),
                                                      setTimeout(function () {
                                                        o.navigateBack();
                                                      }, 1e3));
                                                },
                                                complete: function (e) {
                                                  console.log("支付完成", e),
                                                    e &&
                                                      e.errMsg &&
                                                      "requestPayment:fail cancel" ==
                                                        e.errMsg &&
                                                      (m().showModal({
                                                        title: "提示",
                                                        content: "支付取消",
                                                      }),
                                                      setTimeout(function () {
                                                        o.navigateBack();
                                                      }, 1e3));
                                                },
                                              }))
                                            : m().showModal({
                                                title: "提示",
                                                content:
                                                  s.resultMessage ||
                                                  "认证失败，请稍后重试",
                                              }),
                                          (e.next = 19);
                                        break;
                                      case 15:
                                        (e.prev = 15),
                                          (e.t0 = e.catch(7)),
                                          m().showModal({
                                            title: "提示",
                                            content: "认证失败，请稍后重试",
                                          }),
                                          console.log(e.t0);
                                      case 19:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[7, 15]]
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this.state,
                            t = e.state,
                            n = e.mobileStr,
                            i = e.verifyCode,
                            a = e.verifyTextVisible,
                            r = e.downCount,
                            s = e.userName,
                            c = e.cardID,
                            o = e.amount,
                            l = e.descs;
                          return (0, C.BX)(v.Block, {
                            children: [
                              0 === t &&
                                (0, C.BX)(v.View, {
                                  className: "user-verify " + (x ? "ty" : "zx"),
                                  children: [
                                    (0, C.BX)(v.View, {
                                      className: "user-verify-card",
                                      children: [
                                        (0, C.BX)(v.View, {
                                          className: "input-content",
                                          children: [
                                            (0, C.tZ)(v.View, {
                                              className: "label",
                                              children: "手机号",
                                            }),
                                            (0, C.tZ)(v.Input, {
                                              className: "input",
                                              type: "text",
                                              value: n,
                                              maxlength: "11",
                                              placeholderClass:
                                                "input-placeholder",
                                              placeholder: "",
                                              disabled: "true",
                                            }),
                                          ],
                                        }),
                                        (0, C.BX)(v.View, {
                                          className: "input-content",
                                          children: [
                                            (0, C.tZ)(v.View, {
                                              className: "label",
                                              children: "验证码",
                                            }),
                                            (0, C.tZ)(v.Input, {
                                              className: "input",
                                              type: "number",
                                              value: i,
                                              maxlength: "6",
                                              placeholderClass:
                                                "input-placeholder",
                                              placeholder: "",
                                              onInput: this.verifyCodeInput,
                                            }),
                                            a &&
                                              (0, C.tZ)(v.View, {
                                                className:
                                                  "verify-text color-primary",
                                                id: "AKFp",
                                                onClick:
                                                  this.onClickGetVerifyCode.bind(
                                                    this,
                                                    0
                                                  ),
                                                children: "获取验证码",
                                              }),
                                            !a &&
                                              (0, C.BX)(v.View, {
                                                className: "verify-code",
                                                children: [r, "s"],
                                              }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, C.tZ)(v.View, {
                                      className: "btn-content",
                                      children: (0, C.tZ)(v.View, {
                                        className: "btn",
                                        id: "AKFq",
                                        onClick: this.onClickNextStep,
                                        children: "下一步",
                                      }),
                                    }),
                                    (0, C.BX)(v.View, {
                                      className: "desc",
                                      children: [
                                        "没收到短信验证码？试试",
                                        (0, C.tZ)(v.Text, {
                                          className: "color-primary",
                                          id: "AKFr",
                                          onClick:
                                            this.onClickGetVerifyCode.bind(
                                              this,
                                              1
                                            ),
                                          children: "语音获取",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              1 === t &&
                                (0, C.BX)(v.View, {
                                  className:
                                    "weixin-verify " + (x ? "ty" : "zx"),
                                  children: [
                                    (0, C.BX)(v.View, {
                                      className: "verify-card",
                                      children: [
                                        (0, C.BX)(v.View, {
                                          className: "price-content",
                                          children: [
                                            (0, C.tZ)(v.View, {
                                              className: "price",
                                              children: o,
                                            }),
                                            (0, C.tZ)(v.View, {
                                              className: "tag",
                                              children: "认证后自动退款",
                                            }),
                                          ],
                                        }),
                                        (0, C.BX)(v.View, {
                                          className: "input-content",
                                          children: [
                                            (0, C.tZ)(v.View, {
                                              className: "label",
                                              children: "真实姓名",
                                            }),
                                            (0, C.tZ)(v.Input, {
                                              className: "input",
                                              type: "text",
                                              value: s,
                                              placeholderClass:
                                                "input-placeholder",
                                              placeholder: "请输入你的真实姓名",
                                              onInput: this.nameInput,
                                            }),
                                          ],
                                        }),
                                        (0, C.BX)(v.View, {
                                          className: "input-content",
                                          children: [
                                            (0, C.tZ)(v.View, {
                                              className: "label",
                                              children: "身份证号",
                                            }),
                                            (0, C.tZ)(v.Input, {
                                              className: "input",
                                              type: "text",
                                              value: c,
                                              placeholderClass:
                                                "input-placeholder",
                                              placeholder:
                                                "请输入你的身份证号码",
                                              onInput: this.cardIDInput,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, C.tZ)(v.View, {
                                      className: "btn-content",
                                      children: (0, C.BX)(v.View, {
                                        className: "btn",
                                        id: "AKFs",
                                        onClick: this.onClickSubmit,
                                        children: [
                                          (0, C.tZ)(v.View, {
                                            className: "icon",
                                          }),
                                          (0, C.tZ)(v.View, {
                                            children: "微信认证",
                                          }),
                                        ],
                                      }),
                                    }),
                                    l.map(function (e) {
                                      return (0,
                                      C.tZ)(v.View, { className: "desc", children: e }, "index");
                                    }),
                                  ],
                                }),
                            ],
                          });
                        },
                      },
                    ]),
                    n
                  );
                })(f.default.Component))
              ) || i;
          Page(
            (0, a.createPageConfig)(
              V,
              "pages/train/userVerify/index",
              { root: { cn: [] } },
              {} || {}
            )
          );
        },
      },
      function (e) {
        e.O(0, [19559, 11216, 68592], function () {
          return (function (t) {
            return e((e.s = t));
          })(9789);
        }),
          e.O();
      },
    ]);
})();
