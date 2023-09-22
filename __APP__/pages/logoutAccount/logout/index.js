!(function () {
  "use strict";
  (wx.webpackJsonp = wx.webpackJsonp || []).push([
    [45040],
    {
      29494: function (t, e, n) {
        var a,
          o = n(32180),
          i = n(57042),
          c = n(24460),
          s = n(81876),
          l = n(21867),
          r = n(86066),
          u = n(45023),
          d = n(52500),
          _ = n(92954),
          g = n(71515),
          h = n(81957),
          f = n(48813),
          m =
            (0, h.h)(!1, { usePageWrapper: !0 })(
              (a = (function (t) {
                (0, l.Z)(n, t);
                var e = (0, r.Z)(n);
                function n(t) {
                  var a;
                  return (
                    (0, i.Z)(this, n),
                    (a = e.call(this, t)),
                    (0, u.Z)((0, s.Z)(a), "disableBgStyle", !0),
                    (0, u.Z)((0, s.Z)(a), "pageRootClassName", "logoutAccount"),
                    (a.state = { lastMinutes: 10, logoutReason: "" }),
                    a
                  );
                }
                return (
                  (0, c.Z)(n, [
                    {
                      key: "componentDidMount",
                      value: function () {
                        var t,
                          e = this,
                          n = (0, _.getCurrentInstance)().router.params;
                        console.log("params==", n),
                          this.setState({
                            logoutReason:
                              null == n || null === (t = n.data) || void 0 === t
                                ? void 0
                                : t.reason,
                          }),
                          (this.alertTimesInterval = setInterval(function () {
                            var t = e.state.lastMinutes - 1;
                            t >= 0 || clearInterval(e.alertTimesInterval),
                              e.setState({ lastMinutes: t });
                          }, 1e3));
                      },
                    },
                    {
                      key: "logoutAccount",
                      value: function () {
                        var t = this;
                        this.showMultiButtonDialog({
                          title: "确认是否注销",
                          content:
                            "注销后将无法查询订单，同时你的会员等级和会员权益将被清除。点击「仍要注销」按钮，将直接注销你的当前账号，请确认是否仍要注销。",
                          leftButtonName: "仍要注销",
                          rightButtonName: "取消",
                          maskClose: !1,
                          onLeftButtonClick: function () {
                            t.navigateTo({
                              url: "/pages/logoutAccount/logoutVerifyCode/index",
                              data: { logoutReason: t.state.logoutReason },
                            });
                          },
                          onRightButtonClick: function () {},
                        });
                      },
                    },
                    {
                      key: "render",
                      value: function () {
                        var t = this,
                          e = this.state.lastMinutes;
                        return (0, f.BX)(g.View, {
                          children: [
                            (0, f.tZ)(g.View, {
                              className: " _i _n",
                              children: (0, f.tZ)(g.Image, {
                                src: "https://images3.c-ctrip.com/ztrip/train_bin/ll/xcx_icon_zx@3x.png",
                                className: " _Zc _ad",
                              }),
                            }),
                            (0, f.tZ)(g.View, {
                              className: " _o _Lc _sb _bd",
                              children: "账号注销，将放弃以下权益和财产",
                            }),
                            (0, f.BX)(g.View, {
                              className: " _Vb _Oa _cd",
                              children: [
                                (0, f.tZ)(g.View, {
                                  className: " _dd _ed _yb _fd _gd _hd",
                                  children: "1. 历史订单将无法查询",
                                }),
                                (0, f.tZ)(g.View, {
                                  className: " _dd _ed _yb _fd _gd _hd",
                                  children: "2. 账号将无法登录",
                                }),
                                (0, f.tZ)(g.View, {
                                  className: " _dd _ed _yb _fd _gd _hd",
                                  children: "3. 放弃会员等级权益和会员积分",
                                }),
                                (0, f.tZ)(g.View, {
                                  className: " _dd _ed _yb _fd _gd _hd",
                                  style: "border-bottom-width: 0",
                                  children: "4. 放弃钱包余额、优惠券等资产",
                                }),
                              ],
                            }),
                            (0, f.tZ)(g.View, {
                              className: " _sb _G _id _jd",
                              children:
                                "为保护你的权益，请确保你所有的订单均已完成且无纠纷，否则将暂时无法进行注销操作。",
                            }),
                            (0, f.tZ)(g.View, {
                              className: " _v _s _t _r _a _kd _ld",
                              children: (0, f.tZ)(g.Button, {
                                id: "AWAG",
                                className: " _Gc _Oa _o _Xc _qb _Ic",
                                style: "background: ".concat(
                                  e >= 0 ? "rgba(84, 149, 230, 0.4)" : "#198cff"
                                ),
                                onClick: function () {
                                  return e < 0 && t.logoutAccount();
                                },
                                children:
                                  e >= 0
                                    ? "已清楚风险，确认注销(".concat(e, "S)")
                                    : "已清楚风险，确认注销",
                              }),
                            }),
                          ],
                        });
                      },
                    },
                  ]),
                  n
                );
              })(d.Component))
            ) || a;
        Page(
          (0, o.createPageConfig)(
            m,
            "pages/logoutAccount/logout/index",
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
    function (t) {
      t.O(0, [19559, 11216, 68592], function () {
        return (function (e) {
          return t((t.s = e));
        })(29494);
      }),
        t.O();
    },
  ]);
})();
