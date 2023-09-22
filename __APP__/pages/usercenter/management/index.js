!(function () {
  "use strict";
  require("../sub-vendors.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [54134],
      {
        19816: function (t, e, n) {
          var i,
            a = n(32180),
            c = n(298),
            o = n(79301),
            l = n(95308),
            u = n(57042),
            r = n(24460),
            s = n(81876),
            h = n(21867),
            d = n(86066),
            m = n(45023),
            g = n(52500),
            f = (n(92954), n(71515)),
            Z = n(3205),
            p = n(79792),
            w = n(32297),
            k = n(13025),
            v = n(49120),
            N = n(81957),
            b = n(94190),
            F = n(79910),
            B = n(58676),
            y = n(48813),
            C = p.default.isTieyou,
            A =
              (0, N.h)()(
                (i = (function (t) {
                  (0, h.Z)(n, t);
                  var e = (0, d.Z)(n);
                  function n() {
                    var t;
                    (0, u.Z)(this, n),
                      (t = e.call(this)),
                      (0, m.Z)((0, s.Z)(t), "toUserInfoPage", function () {
                        t.navigateTo({
                          url: "/pages/usercenter/userInfo/index",
                        });
                      }),
                      (0, m.Z)(
                        (0, s.Z)(t),
                        "requestWechatPartnerStatus",
                        function () {
                          (0, k._S)(
                            { source: "miniWallet", pageKey: "1111" },
                            { checkFrameworkLogin: !1, checkLogin: !1 }
                          )
                            .then(function (e) {
                              1 === (null == e ? void 0 : e.resultCode)
                                ? t.setState({
                                    isWechatFriend: !(
                                      null == e || !e.isWechatFriend
                                    ),
                                  })
                                : t.setState({ isWechatFriend: !1 });
                            })
                            .catch(function (t) {
                              return console.log(t);
                            });
                        }
                      ),
                      (0, m.Z)((0, s.Z)(t), "goToPolicy", function () {
                        var t =
                          "kyb" === p.default.jetpack
                            ? "5102"
                            : C
                            ? "1002"
                            : "1003";
                        Z.Z.twebview({
                          data: {
                            url: "https://pages.c-ctrip.com/ztrip/document/privacypolicyzx.html?noticetype=1&appid=".concat(
                              t
                            ),
                          },
                        });
                      }),
                      (0, m.Z)((0, s.Z)(t), "changeFlag", function (e, n) {
                        var i,
                          a =
                            (null == e ||
                            null === (i = e.detail) ||
                            void 0 === i
                              ? void 0
                              : i.value) || !1;
                        a
                          ? t.updateFlag(a, n)
                          : t.showMultiButtonDialog({
                              title: "确认关闭开关",
                              content:
                                "custom" === n
                                  ? "关闭推荐将影响您的用户体验，建议您慎重考虑"
                                  : "关闭后，您将无法收到所有的优惠信息通知，是否仍要关闭？",
                              rightButtonName: "取消",
                              onRightButtonClick: function () {
                                t.setState(
                                  "custom" === n
                                    ? { recommendFlag: !0 }
                                    : { discountFlag: !0 }
                                );
                              },
                              leftButtonName: "仍要关闭",
                              onLeftButtonClick: function () {
                                t.updateFlag(a, n);
                              },
                            });
                      }),
                      (t.pageId = C ? "10650062686" : "10650062682");
                    var i = w.Z.userName,
                      a = b.WG.get().bind12306;
                    return (
                      (t.state = {
                        userName: i || "",
                        bind12306Name: a ? a.name : "",
                        walletNumber: 0,
                        isWechatFriend: !1,
                        recommendFlag: w.Z.recommendFlag,
                        discountFlag: !0,
                      }),
                      t
                    );
                  }
                  return (
                    (0, r.Z)(n, [
                      {
                        key: "componentDidShow",
                        value: function () {
                          var t = b.WG.get().bind12306;
                          this.setState({ bind12306Name: t ? t.name : "" }),
                            this.requestFlag(),
                            this.getWalletNumber(),
                            this.requestWechatPartnerStatus();
                        },
                      },
                      {
                        key: "requestFlag",
                        value: function () {
                          var t = this;
                          (0, k.QL)()
                            .then(function (e) {
                              t.setState({
                                recommendFlag: !(null == e || !e.flag),
                                discountFlag: !(null == e || !e.activeFlag),
                              }),
                                (w.Z.recommendFlag = !(null == e || !e.flag));
                            })
                            .catch(function () {});
                        },
                      },
                      {
                        key: "getWalletNumber",
                        value: function () {
                          var t = this;
                          (0, k.dc)(
                            { token: "" },
                            { checkFrameworkLogin: !1, checkLogin: !1 }
                          )
                            .then(function (e) {
                              e &&
                                1 == e.resultCode &&
                                t.setState({ walletNumber: e.amount });
                            })
                            .catch(function (t) {
                              console.log(t);
                            });
                        },
                      },
                      {
                        key: "handleWithdraw",
                        value: (function () {
                          var t = (0, l.Z)(
                            (0, o.Z)().mark(function t() {
                              var e = this;
                              return (0, o.Z)().wrap(
                                function (t) {
                                  for (;;)
                                    switch ((t.prev = t.next)) {
                                      case 0:
                                        this.showMultiButtonDialog({
                                          title: "确定退出",
                                          content:
                                            "本次退出可能会同时解绑您智行APP的微信绑定关系哦",
                                          leftButtonName: "确定",
                                          rightButtonName: "取消",
                                          onLeftButtonClick: function () {
                                            e.logout(), e.clearBind12306Info();
                                          },
                                          onRightButtonClick: function () {},
                                        });
                                      case 1:
                                      case "end":
                                        return t.stop();
                                    }
                                },
                                t,
                                this
                              );
                            })
                          );
                          return function () {
                            return t.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "logout",
                        value: function () {
                          w.Z.doLogout().then(function () {
                            if (
                              (console.log("退出登录成功"), p.default.isWechat)
                            ) {
                              var t = F.Z.getHomePath();
                              Z.Z.twebview({
                                data: {
                                  url: ""
                                    .concat(
                                      "https://m.ctrip.com/webapp/train/activity/static/common/logout.html",
                                      "?from="
                                    )
                                    .concat(encodeURIComponent(t)),
                                },
                              });
                            } else F.Z.relaunchHome();
                          });
                        },
                      },
                      {
                        key: "login",
                        value: function () {
                          var t = this;
                          w.Z.doLogin()
                            .then(function () {
                              t.setState({ userName: w.Z.userName });
                            })
                            .catch(function () {});
                        },
                      },
                      {
                        key: "clearBind12306Info",
                        value: function () {
                          b.WG.setAttr("bind12306", "");
                        },
                      },
                      {
                        key: "toManageAppAccount",
                        value: function () {
                          this.ubtTrace("c_trn_z_10650062682", {
                            bizKey: "z_mini_account_manage_click",
                            type: "0",
                          }),
                            this.onClickWithLogin(
                              "/pages/usercenter/accountapplication/index"
                            );
                        },
                      },
                      {
                        key: "toManage12306Account",
                        value: function () {
                          this.ubtTrace("c_trn_z_10650062682", {
                            bizKey: "z_mini_account_manage_click",
                            type: "1",
                          }),
                            this.onClickWithLogin(
                              "/pages/12306/management12306account/index"
                            );
                        },
                      },
                      {
                        key: "onClickWithLogin",
                        value: function (t) {
                          w.Z.isLogin ? F.Z.commonNavigator(t) : this.login();
                        },
                      },
                      {
                        key: "onWalletClick",
                        value: function () {
                          if (w.Z.isLogin) {
                            if (p.default.isTieyou || !p.default.isWechat)
                              return (0, v.showToast)("暂不支持小程序提现哦");
                            this.state.isWechatFriend
                              ? this.showCommonDialog(
                                  '您已添加智行福利官的企业微信，请联系福利官，输入"钱包返现"进行提现'
                                )
                              : Z.Z.twebview({
                                  data: {
                                    url: "https://m.suanya.com/webapp/train/activity/20211125-ztrip-official-account-to-qw?source=miniWallet&tips=%E9%95%BF%E6%8C%89%E6%B7%BB%E5%8A%A0%E6%99%BA%E8%A1%8C%E7%A6%8F%E5%88%A9%E5%AE%98%E6%8F%90%E7%8E%B0",
                                  },
                                });
                          } else this.login();
                        },
                      },
                      {
                        key: "updateFlag",
                        value: function (t, e) {
                          var n = this,
                            i = {
                              flag: Number(this.state.recommendFlag),
                              activeFlag: Number(this.state.discountFlag),
                            },
                            a =
                              "custom" === e
                                ? { flag: Number(t) }
                                : { activeFlag: Number(t) };
                          (0, k.PV)((0, c.Z)((0, c.Z)({}, i), a))
                            .then(function (t) {
                              1 === (null == t ? void 0 : t.resultCode) &&
                                n.requestFlag();
                            })
                            .catch(function (t) {
                              return console.log(t);
                            });
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var t = this,
                            e = this.state,
                            n = e.userName,
                            i = e.bind12306Name,
                            a = e.walletNumber,
                            c = e.recommendFlag,
                            o = e.discountFlag;
                          return (0, y.BX)(f.View, {
                            className: "account-management",
                            children: [
                              (0, y.tZ)(B.Z, {
                                ref: function (e) {
                                  t.onDialogAttach(e);
                                },
                              }),
                              (0, y.BX)(f.View, {
                                className: "item",
                                id: "ACAX",
                                onClick: this.toManageAppAccount.bind(this),
                                children: [
                                  (0, y.BX)(f.View, {
                                    children: [C ? "铁友" : "智行", "账号"],
                                  }),
                                  (0, y.BX)(f.View, {
                                    className: "right-box",
                                    children: [
                                      (0, y.tZ)(f.Text, {
                                        className: "account",
                                        children: n || "未登录",
                                      }),
                                      (0, y.tZ)(f.Text, {
                                        className: "iconfont ifont-arr icon",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              "kyb" !== p.default.jetpack &&
                                (0, y.BX)(f.View, {
                                  className: "item",
                                  id: "ACAY",
                                  onClick: this.toManage12306Account.bind(this),
                                  children: [
                                    (0, y.tZ)(f.View, {
                                      children: "12306账号管理",
                                    }),
                                    (0, y.BX)(f.View, {
                                      className: "right-box",
                                      children: [
                                        (0, y.tZ)(f.Text, {
                                          className: "account",
                                          children: i || "未登录",
                                        }),
                                        (0, y.tZ)(f.Text, {
                                          className: "iconfont ifont-arr icon",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              (0, y.BX)(f.View, {
                                className: "item",
                                id: "ACAZ",
                                onClick: this.onWalletClick.bind(this),
                                children: [
                                  (0, y.tZ)(f.View, {
                                    children: "我的钱包(".concat(a, "元)"),
                                  }),
                                  (0, y.BX)(f.View, {
                                    className: "right-box",
                                    children: [
                                      (0, y.tZ)(f.Text, {
                                        className: "account",
                                        children: w.Z.isLogin
                                          ? "去提现"
                                          : "未登录",
                                      }),
                                      (0, y.tZ)(f.Text, {
                                        className: "iconfont ifont-arr icon",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              "kyb" !== p.default.jetpack &&
                                (0, y.BX)(f.View, {
                                  className: "item",
                                  children: [
                                    (0, y.BX)(f.View, {
                                      children: [
                                        (0, y.tZ)(f.View, {
                                          children: "接受个性化推荐",
                                        }),
                                        (0, y.tZ)(f.View, {
                                          className: "desc",
                                          children:
                                            "关闭将无法收到您感兴趣的内容推荐，建议保持开启",
                                        }),
                                      ],
                                    }),
                                    (0, y.tZ)(f.Switch, {
                                      color: p.default.isTieyou
                                        ? "#fc6e51"
                                        : "#0080FF",
                                      checked: c,
                                      onChange: function (e) {
                                        return t.changeFlag(e, "custom");
                                      },
                                    }),
                                  ],
                                }),
                              (0, y.BX)(f.View, {
                                className: "item",
                                children: [
                                  (0, y.BX)(f.View, {
                                    children: [
                                      (0, y.tZ)(f.View, {
                                        children: "优惠活动通知",
                                      }),
                                      (0, y.tZ)(f.View, {
                                        className: "desc",
                                        children: "优惠福利，低价不容错过",
                                      }),
                                    ],
                                  }),
                                  (0, y.tZ)(f.Switch, {
                                    color: p.default.isTieyou
                                      ? "#fc6e51"
                                      : "#0080FF",
                                    checked: o,
                                    onChange: function (e) {
                                      return t.changeFlag(e, "discount");
                                    },
                                  }),
                                ],
                              }),
                              (0, y.BX)(f.View, {
                                className: "item",
                                id: "ACAa",
                                onClick: this.goToPolicy,
                                children: [
                                  (0, y.tZ)(f.View, {
                                    children: "个人信息保护政策",
                                  }),
                                  (0, y.tZ)(f.View, {
                                    className: "right-box",
                                    children: (0, y.tZ)(f.Text, {
                                      className: "iconfont ifont-arr icon",
                                    }),
                                  }),
                                ],
                              }),
                              w.Z.isLogin &&
                                (0, y.tZ)(f.Button, {
                                  className: "handleWithdraw",
                                  id: "ACAb",
                                  onClick: this.handleWithdraw.bind(this),
                                  children: "退出登录",
                                }),
                              (0, y.tZ)(B.Z, {
                                ref: function (e) {
                                  t.onDialogAttach(e);
                                },
                              }),
                            ],
                          });
                        },
                      },
                    ]),
                    n
                  );
                })(g.default.Component))
              ) || i;
          Page(
            (0, a.createPageConfig)(
              A,
              "pages/usercenter/management/index",
              { root: { cn: [] } },
              {
                navigationBarBackgroundColor: "#fff",
                backgroundColorTop: "#EFEFEF",
                navigationBarTitleText: "设置",
                navigationBarTextStyle: "black",
              } || {}
            )
          );
        },
      },
      function (t) {
        t.O(0, [19559, 11216, 68592], function () {
          return (function (e) {
            return t((t.s = e));
          })(19816);
        }),
          t.O();
      },
    ]);
})();
