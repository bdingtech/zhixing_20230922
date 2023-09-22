!(function () {
  "use strict";
  require("../sub-vendors.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [93560],
      {
        33652: function (e, t, n) {
          var a = n(32180),
            c = n(79301),
            s = n(95308),
            i = n(57042),
            o = n(24460),
            r = n(81876),
            l = n(21867),
            u = n(86066),
            _ = n(45023),
            h = n(52500),
            d = n(92954),
            m = n.n(d),
            p = n(71515),
            f = n(81957),
            b = n(21294),
            g = n(79792),
            v = n(32297),
            C = n(77900),
            k = n(10741),
            w = n(49120),
            T = n(48813);
          function N(e) {
            return e ? e.substr(0, 3) + "****" + e.substr(7) : "";
          }
          var Z,
            y = h.default.memo(function (e) {
              var t = e.mobile,
                n = e.inputFocus,
                a = e.textChange,
                c = e.countTimeTab,
                s = e.countTime,
                i = e.getCheckCode,
                o = e.checkCode,
                r = e.nextStep;
              return (0, T.BX)(p.View, {
                children: [
                  (0, T.BX)(p.View, {
                    className: " _Rd _nf _xj _pb _i _l _Xh _E _av",
                    children: [
                      (0, T.tZ)(p.Image, {
                        src: "https://images3.c-ctrip.com/ztrip/train_bin/23-08/icon_tz@3x.png",
                        className: " _Ce _De _Fl",
                      }),
                      (0, T.tZ)(p.Text, {
                        children: "为保护账号安全，请完成安全验证",
                      }),
                    ],
                  }),
                  (0, T.BX)(p.View, {
                    className: " _er _a _Oa _av",
                    children: [
                      (0, T.BX)(p.View, {
                        className: " _yb _i _l _Cc -nf",
                        children: [
                          (0, T.tZ)(p.Text, {
                            className: " _Ma _I _Dc",
                            children: "手机号",
                          }),
                          (0, T.tZ)(p.Input, {
                            disabled: !0,
                            value: N(t),
                            className: " _sb _Ec _j",
                          }),
                        ],
                      }),
                      (0, T.BX)(p.View, {
                        className: " _yb _i _l _Cc -nf",
                        children: [
                          (0, T.tZ)(p.Text, {
                            className: " _Ma _I _Dc",
                            children: "验证码",
                          }),
                          (0, T.tZ)(p.Input, {
                            className: " _sb _Ec _j",
                            onInput: a,
                            type: "number",
                            focus: n,
                            placeholder: "请填写验证码",
                            placeholderClass: " _we _ID",
                          }),
                          c
                            ? (0, T.BX)(p.View, {
                                className: " _Ec _Fc",
                                style: "color:#999",
                                children: [s, "s"],
                              })
                            : (0, T.tZ)(p.View, {
                                className: " _Ec _Fc",
                                id: "AWAD",
                                onClick: function () {
                                  return i(!0);
                                },
                                children: "发送",
                              }),
                        ],
                      }),
                    ],
                  }),
                  (0, T.tZ)(p.Button, {
                    className:
                      " _Gc _Oa _sl _b _Ic " + (o ? " _Jc" : " _Jc _Lj"),
                    id: "AWAE",
                    onClick: r,
                    children: "下一步",
                  }),
                  (0, T.BX)(p.View, {
                    className: " _Kc _G _o _Lc",
                    children: [
                      "没收到短信验证码？试试",
                      (0, T.tZ)(p.Text, {
                        className: "color-primary",
                        id: "AWAF",
                        onClick: function () {
                          return i(!1);
                        },
                        children: "语音获取",
                      }),
                    ],
                  }),
                ],
              });
            }),
            x = h.default.memo(function (e) {
              var t = e.amount,
                n = e.textChange,
                a = e.userName,
                c = e.idCard,
                s = e.descs,
                i = e.onSubmit,
                o = a && c;
              return (0, T.BX)(p.View, {
                children: [
                  (0, T.BX)(p.View, {
                    className: " _pM _sb _qM _rM _o _p",
                    children: [
                      (0, T.tZ)(p.Text, {
                        className: " _dd _I",
                        children: "¥",
                      }),
                      t,
                      (0, T.tZ)(p.View, {
                        className: " _Vu _gb _Hi _sM _o _P _qb _Qk _u _lz _tM",
                        children: "认证后自动退款",
                      }),
                    ],
                  }),
                  (0, T.BX)(p.View, {
                    className: " _er _a _Oa _av",
                    children: [
                      (0, T.BX)(p.View, {
                        className: " _yb _i _l _Cc -of",
                        children: [
                          (0, T.tZ)(p.Text, {
                            className: " _Ma _I _Dc",
                            children: "真实姓名",
                          }),
                          (0, T.tZ)(p.Input, {
                            className: " _sb _Ec _j",
                            onInput: function (e) {
                              return n(e, "userName");
                            },
                            placeholder: "请填写你的真实姓名",
                            placeholderClass: " _we _ID",
                          }),
                        ],
                      }),
                      (0, T.BX)(p.View, {
                        className: " _yb _i _l _Cc -of",
                        children: [
                          (0, T.tZ)(p.Text, {
                            className: " _Ma _I _Dc",
                            children: "身份证号",
                          }),
                          (0, T.tZ)(p.Input, {
                            className: " _sb _Ec _j",
                            onInput: function (e) {
                              return n(e, "idCard");
                            },
                            placeholder: "请填写你的身份证号码",
                            placeholderClass: " _we _ID",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, T.BX)(p.Button, {
                    className:
                      " _Gc _i _l _n _Oa _uM _sl _qb _Ic" + (o ? "" : " _Lj"),
                    onClick: function () {
                      return o && i();
                    },
                    children: [
                      (0, T.tZ)(p.Image, {
                        src: "https://images3.c-ctrip.com/ztrip/train_bin/23-08/icon_wx@3x.png",
                        className: " _cc _bc _On",
                      }),
                      (0, T.tZ)(p.Text, { children: "微信支付" }),
                    ],
                  }),
                  (0, T.BX)(p.View, {
                    className: " _vM",
                    children: [
                      null == s
                        ? void 0
                        : s.map(function (e, t) {
                            return (0,
                            T.BX)(p.View, { className: " _Ma _E _U", children: ["· ", e] }, t);
                          }),
                      (0, T.tZ)(p.View, {
                        className: " _Ma _E _U",
                        children:
                          "· 根据《中华人民共和国反洗钱法》等法律要求，您需提供姓名和身份证号进行实名认证，以便进行提现或领取实名权益服务",
                      }),
                    ],
                  }),
                ],
              });
            }),
            S =
              (0, f.h)(!1, { usePageWrapper: !0 })(
                (Z = (function (e) {
                  (0, l.Z)(n, e);
                  var t = (0, u.Z)(n);
                  function n(e) {
                    var a;
                    return (
                      (0, i.Z)(this, n),
                      (a = t.call(this, e)),
                      (0, _.Z)((0, r.Z)(a), "disableBgStyle", !0),
                      (a.state = {
                        countTime: 60,
                        checkCode: "",
                        countTimeTab: !1,
                        inputFocus: !1,
                        mobile: v.Z.userName,
                        state: 0,
                        token: "",
                        userName: "",
                        idCard: "",
                      }),
                      a
                    );
                  }
                  return (
                    (0, o.Z)(n, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          this.setPageTitle("安全验证");
                        },
                      },
                      {
                        key: "componentDidShow",
                        value: function () {
                          v.Z.isLogin ||
                            v.Z.doLogin()
                              .then(function () {})
                              .catch(function (e) {
                                console.log(e);
                              }),
                            g.default.isWechat ||
                              (this.invokeCallback(), this.navigateBack());
                        },
                      },
                      {
                        key: "encryptPhone",
                        value: function (e) {
                          return e ? e.substr(0, 3) + "****" + e.substr(7) : "";
                        },
                      },
                      {
                        key: "getCheckCode",
                        value: function (e) {
                          var t = this,
                            n = {
                              scene: 0,
                              type: e ? "0" : "1",
                              mobile: b.Z.tripleDESEncrypt(this.state.mobile),
                            };
                          (0, k.DCn)(n)
                            .then(function (n) {
                              1 === (null == n ? void 0 : n.resultCode)
                                ? ((0, w.showToast)(
                                    e
                                      ? "验证码发送成功"
                                      : "语音获取成功，请注意接听电话"
                                  ),
                                  e && t.countDown())
                                : (0, w.showToast)(
                                    n.resultMessage || "获取验证码失败"
                                  );
                            })
                            .catch(function () {
                              (0, w.showToast)("获取验证码失败");
                            });
                        },
                      },
                      {
                        key: "countDown",
                        value: function () {
                          var e = this;
                          this.setState({ countTimeTab: !0, inputFocus: !0 }),
                            (this.timer = setInterval(function () {
                              var t = e.state.countTime - 1;
                              t > 0
                                ? e.setState({ countTime: t })
                                : (clearInterval(e.timer),
                                  e.setState({
                                    countTime: 60,
                                    countTimeTab: !1,
                                  }));
                            }, 1e3));
                        },
                      },
                      {
                        key: "textChange",
                        value: function (e, t) {
                          var n,
                            a = {};
                          (a[t] =
                            null == e || null === (n = e.detail) || void 0 === n
                              ? void 0
                              : n.value),
                            this.setState(a);
                        },
                      },
                      {
                        key: "nextStep",
                        value: (function () {
                          var e = (0, s.Z)(
                            (0, c.Z)().mark(function e() {
                              var t, n, a, s, i;
                              return (0, c.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (
                                          ((t = this.state),
                                          (n = t.checkCode),
                                          (a = t.mobile),
                                          n)
                                        ) {
                                          e.next = 4;
                                          break;
                                        }
                                        return (
                                          (0, w.showToast)(
                                            "请填入正确的验证码"
                                          ),
                                          e.abrupt("return")
                                        );
                                      case 4:
                                        return (
                                          (e.prev = 4),
                                          (e.next = 7),
                                          (0, k.EjZ)({
                                            scene: 0,
                                            verifyCode: n,
                                            mobile: b.Z.tripleDESEncrypt(a),
                                          })
                                        );
                                      case 7:
                                        if (
                                          1 !==
                                          (null == (s = e.sent)
                                            ? void 0
                                            : s.resultCode)
                                        ) {
                                          e.next = 16;
                                          break;
                                        }
                                        return (
                                          this.setState({ token: s.token }),
                                          (e.next = 12),
                                          (0, k.qzc)({ code: "weixin" })
                                        );
                                      case 12:
                                        1 ===
                                        (null == (i = e.sent)
                                          ? void 0
                                          : i.resultCode)
                                          ? (this.setState({
                                              state: 1,
                                              amount: i.amount,
                                              descs: i.descs,
                                            }),
                                            this.setPageTitle("微信实名认证"))
                                          : (0, w.showToast)(
                                              i.resultMessage ||
                                                "网络错误，请稍后重试"
                                            ),
                                          (e.next = 17);
                                        break;
                                      case 16:
                                        (0, w.showToast)(
                                          s.resultMessage ||
                                            "验证码错误，请稍后重试"
                                        );
                                      case 17:
                                        e.next = 23;
                                        break;
                                      case 19:
                                        (e.prev = 19),
                                          (e.t0 = e.catch(4)),
                                          console.log(e.t0),
                                          (0, w.showToast)(
                                            "验证码错误，请稍后重试"
                                          );
                                      case 23:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[4, 19]]
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "onSubmit",
                        value: function () {
                          var e = this,
                            t = this.state,
                            n = t.userName,
                            a = t.idCard,
                            c = t.token;
                          n
                            ? a && C.Z.isValidSFZ(a)
                              ? c &&
                                (0, k.s$b)({
                                  token: c,
                                  realName: b.Z.tripleDESEncrypt(n),
                                  identifyCode: b.Z.tripleDESEncrypt(a),
                                  code: "weixin",
                                })
                                  .then(function (t) {
                                    if (
                                      1 ===
                                        (null == t ? void 0 : t.resultCode) &&
                                      null != t &&
                                      t.authInfo
                                    ) {
                                      var n = JSON.parse(t.authInfo);
                                      e.goPay(n);
                                    } else (0, w.showToast)(t.resultMessage || "认证失败，请稍后重试");
                                  })
                                  .catch(function (e) {
                                    return console.log(e);
                                  })
                              : (0, w.showToast)("请填入正确的身份证号码")
                            : (0, w.showToast)("请填入正确的姓名");
                        },
                      },
                      {
                        key: "goPay",
                        value: function (e) {
                          var t = this;
                          m().requestPayment({
                            timeStamp: e.timeStamp,
                            nonceStr: e.nonceStr,
                            package: e.package,
                            signType: e.signType,
                            paySign: e.paySign,
                            success: function () {
                              t.invokeCallback(), t.navigateBack();
                            },
                            fail: function (e) {
                              console.log("支付失败", e),
                                (0, w.showToast)(
                                  (null == e ? void 0 : e.err_desc) ||
                                    "支付失败"
                                );
                            },
                            complete: function (e) {
                              console.log("支付完成", e),
                                e &&
                                  e.errMsg &&
                                  "requestPayment:fail cancel" == e.errMsg &&
                                  ((0, w.showToast)("支付取消"),
                                  setTimeout(function () {
                                    t.invokeCallback(), t.navigateBack();
                                  }, 1e3));
                            },
                          });
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this,
                            t = this.state,
                            n = t.countTime,
                            a = t.checkCode,
                            c = t.countTimeTab,
                            s = t.inputFocus,
                            i = t.mobile,
                            o = t.state,
                            r = t.amount,
                            l = t.userName,
                            u = t.idCard,
                            _ = t.descs;
                          return (0, T.BX)(p.Block, {
                            children: [
                              (0, T.tZ)(p.View, {
                                className: " _cK _u _s _t _q _dK _Nb",
                              }),
                              0 === o
                                ? (0, T.tZ)(y, {
                                    countTime: n,
                                    checkCode: a,
                                    countTimeTab: c,
                                    inputFocus: s,
                                    mobile: i,
                                    textChange: function (t) {
                                      return e.textChange(t, "checkCode");
                                    },
                                    getCheckCode: this.getCheckCode,
                                    nextStep: this.nextStep,
                                  })
                                : (0, T.tZ)(x, {
                                    textChange: function (t, n) {
                                      return e.textChange(t, n);
                                    },
                                    userName: l,
                                    idCard: u,
                                    descs: _,
                                    amount: r,
                                    onSubmit: this.onSubmit,
                                  }),
                            ],
                          });
                        },
                      },
                    ]),
                    n
                  );
                })(h.Component))
              ) || Z;
          Page(
            (0, a.createPageConfig)(
              S,
              "pages/usercenter/realNameVerify/index",
              { root: { cn: [] } },
              {
                navigationBarTextStyle: "white",
                navigationBarBackgroundColor: "#222",
                backgroundColorTop: "#222222",
                backgroundColorBottom: "#fff",
                navigationStyle: "custom",
              } || {}
            )
          );
        },
      },
      function (e) {
        e.O(0, [19559, 11216, 68592], function () {
          return (function (t) {
            return e((e.s = t));
          })(33652);
        }),
          e.O();
      },
    ]);
})();
