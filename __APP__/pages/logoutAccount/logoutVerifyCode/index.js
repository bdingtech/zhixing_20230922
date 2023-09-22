!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [52425],
    {
      25202: function (e, t, o) {
        var n,
          a = o(32180),
          i = o(57042),
          c = o(24460),
          u = o(81876),
          s = o(21867),
          l = o(86066),
          r = o(45023),
          d = o(52500),
          h = o(92954),
          m = o(71515),
          v = o(81957),
          f = o(21294),
          g = o(79792),
          _ = o(32297),
          C = o(79910),
          p = o(3205),
          k = o(13025),
          y = o(49120),
          b = o(48813),
          T =
            (0, v.h)(!1, { usePageWrapper: !0 })(
              (n = (function (e) {
                (0, s.Z)(o, e);
                var t = (0, l.Z)(o);
                function o(e) {
                  var n;
                  return (
                    (0, i.Z)(this, o),
                    (n = t.call(this, e)),
                    (0, r.Z)((0, u.Z)(n), "disableBgStyle", !0),
                    (0, r.Z)((0, u.Z)(n), "pageTitle", "安全验证"),
                    (n.state = {
                      countTime: 60,
                      checkCode: "",
                      logoutReason: "",
                      countTimeTab: !1,
                      inputFocus: !1,
                    }),
                    n
                  );
                }
                return (
                  (0, c.Z)(o, [
                    {
                      key: "componentDidMount",
                      value: function () {
                        var e,
                          t = (0, h.getCurrentInstance)().router.params;
                        this.setState({
                          logoutReason:
                            null == t || null === (e = t.data) || void 0 === e
                              ? void 0
                              : e.logoutReason,
                        });
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
                        var t,
                          o = this,
                          n = _.Z.userName + "fS321tF684LBGxXj",
                          a =
                            null === (t = f.Z.MD5(n)) || void 0 === t
                              ? void 0
                              : t.toLowerCase(),
                          i = {
                            userMobile: _.Z.userName,
                            version: "2.2",
                            token: "",
                            rid: "",
                            type: "9",
                            verifyType: e ? "0" : "1",
                            codeSign: a,
                            partnerName: g.default.isTieyou
                              ? "tieyou"
                              : "zhixing",
                          };
                        (0, k.Y7)(i)
                          .then(function (t) {
                            1 === (null == t ? void 0 : t.resultCode)
                              ? ((0, y.showToast)(
                                  e
                                    ? "验证码发送成功"
                                    : "语音获取成功，请注意接听电话"
                                ),
                                e && o.countDown())
                              : (0, y.showToast)(
                                  t.resultMessage || "获取验证码失败"
                                );
                          })
                          .catch(function () {
                            (0, y.showToast)("获取验证码失败");
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
                      value: function (e) {
                        var t;
                        this.setState({
                          checkCode:
                            null == e || null === (t = e.detail) || void 0 === t
                              ? void 0
                              : t.value,
                        });
                      },
                    },
                    {
                      key: "doLogout",
                      value: function () {
                        var e = this,
                          t = this.state,
                          o = t.checkCode,
                          n = t.logoutReason;
                        if (o) {
                          var a = { verifyCode: o, reason: n };
                          (0, k.ok)(a)
                            .then(function (t) {
                              1 === (null == t ? void 0 : t.resultCode)
                                ? e.showCommonDialog({
                                    title: "注销成功",
                                    content:
                                      "你已成功注销账号。感谢您曾经选择过我们，欢迎回来！",
                                    buttonName: "知道了",
                                    maskClose: !1,
                                    onButtonClick: function () {
                                      e.exitLogin();
                                    },
                                  })
                                : e.showCommonDialog({
                                    title: "注销失败",
                                    content:
                                      (null == t ? void 0 : t.resultMessage) ||
                                      "注销出现问题，请稍后重试",
                                    buttonName: "知道了",
                                    onButtonClick: function () {},
                                  });
                            })
                            .catch(function (e) {
                              console.log(e);
                            });
                        }
                      },
                    },
                    {
                      key: "exitLogin",
                      value: function () {
                        _.Z.doLogout().then(function () {
                          if (g.default.isWechat) {
                            var e = "https://".concat(
                                g.default.h5domain,
                                "/webapp/train/activity/static/common/logout.html"
                              ),
                              t = C.Z.getHomePath();
                            p.Z.twebview({
                              data: {
                                url: ""
                                  .concat(e, "?from=")
                                  .concat(encodeURIComponent(t)),
                              },
                            });
                          } else C.Z.relaunchHome();
                        });
                      },
                    },
                    {
                      key: "render",
                      value: function () {
                        var e = this,
                          t = this.state,
                          o = t.countTime,
                          n = t.checkCode,
                          a = t.countTimeTab,
                          i = t.inputFocus;
                        return (0, b.BX)(m.View, {
                          children: [
                            (0, b.tZ)(m.View, {
                              className: " _Ma _G _Bc",
                              children: "为保护账号安全，请完成安全验证",
                            }),
                            (0, b.BX)(m.View, {
                              className: " _yb _a _i _l _Cc",
                              style:
                                "border-bottom: 1px solid rgba(0,0,0,0.05)",
                              children: [
                                (0, b.tZ)(m.Text, {
                                  className: " _Ma _I _Dc",
                                  children: "手机号",
                                }),
                                (0, b.tZ)(m.Input, {
                                  disabled: !0,
                                  value: this.encryptPhone(_.Z.userName),
                                  className: " _sb _I _j",
                                }),
                              ],
                            }),
                            (0, b.BX)(m.View, {
                              className: " _yb _a _i _l _Cc",
                              children: [
                                (0, b.tZ)(m.Text, {
                                  className: " _Ma _I _Dc",
                                  children: "验证码",
                                }),
                                (0, b.tZ)(m.Input, {
                                  className: " _sb _I _j",
                                  onInput: this.textChange,
                                  type: "number",
                                  focus: i,
                                }),
                                a
                                  ? (0, b.BX)(m.View, {
                                      className: " _Ec _Fc",
                                      style: "color:#999",
                                      children: [o, "s"],
                                    })
                                  : (0, b.tZ)(m.View, {
                                      className: " _Ec _Fc",
                                      id: "AWAD",
                                      onClick: function () {
                                        return e.getCheckCode(!0);
                                      },
                                      children: "获取验证码",
                                    }),
                              ],
                            }),
                            (0, b.tZ)(m.Button, {
                              className:
                                " _Gc _Oa _Hc _b _Ic " + (n ? " _Jc" : " _La"),
                              id: "AWAE",
                              onClick: this.doLogout,
                              children: "确认注销",
                            }),
                            (0, b.BX)(m.View, {
                              className: " _Kc _G _o _Lc",
                              children: [
                                "没收到短信验证码？试试",
                                (0, b.tZ)(m.Text, {
                                  className: "color-primary",
                                  id: "AWAF",
                                  onClick: function () {
                                    return e.getCheckCode(!1);
                                  },
                                  children: "语音获取",
                                }),
                              ],
                            }),
                          ],
                        });
                      },
                    },
                  ]),
                  o
                );
              })(d.Component))
            ) || n;
        Page(
          (0, a.createPageConfig)(
            T,
            "pages/logoutAccount/logoutVerifyCode/index",
            { root: { cn: [] } },
            {
              navigationBarBackgroundColor: "#fff",
              backgroundColorTop: "#EFEFEF",
              navigationBarTitleText: "",
              navigationBarTextStyle: "black",
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
        })(25202);
      }),
        e.O();
    },
  ]);
})();
