!(function () {
  "use strict";
  require("../sub-vendors.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [78636],
      {
        8678: function (n, e, t) {
          var i,
            a = t(32180),
            c = t(79301),
            o = t(95308),
            s = t(57042),
            r = t(24460),
            u = t(21867),
            l = t(86066),
            h = t(52500),
            d = (t(92954), t(71515)),
            m = t(25391),
            g = t(96158),
            b = t(81957),
            f = t(94190),
            N = t(97939),
            p = t(48813),
            v =
              (0, b.h)()(
                (i = (function (n) {
                  (0, u.Z)(t, n);
                  var e = (0, l.Z)(t);
                  function t() {
                    var n;
                    return (
                      (0, s.Z)(this, t),
                      ((n = e.call(this)).pageId = "10650068932"),
                      (n.state = {
                        bind12306Name: "",
                        mobile: "",
                        bind12306Pas: "",
                      }),
                      n
                    );
                  }
                  return (
                    (0, r.Z)(t, [
                      {
                        key: "componentDidShow",
                        value: function () {
                          var n = f.WG.get().bind12306;
                          this.setState({
                            bind12306Name: n ? n.name : "",
                            mobile:
                              (null == n ? void 0 : n.mobilePhone12306) || "",
                            bind12306Pas: null == n ? void 0 : n.pwd,
                          });
                        },
                      },
                      {
                        key: "goLogin12306H5",
                        value: function (n) {
                          var e = this;
                          n &&
                            this.ubtTrace("c_trn_z_10650068932", {
                              bizKey: "z_mini_12306_account_manage_click",
                              type: "0",
                            }),
                            m.ZP.goto12306H5({
                              pageName: "accountManagement12306",
                              userAccount: this.state.bind12306Name,
                              passWord: this.state.bind12306Pas,
                            })
                              .then(function (n) {
                                var t = (0, g.Tq)(n);
                                t && e.setState({ bind12306Name: t.name });
                              })
                              .catch(function () {});
                        },
                      },
                      {
                        key: "toChangeBindMobile",
                        value: (function () {
                          var n = (0, o.Z)(
                            (0, c.Z)().mark(function n() {
                              var e = this;
                              return (0, c.Z)().wrap(
                                function (n) {
                                  for (;;)
                                    switch ((n.prev = n.next)) {
                                      case 0:
                                        if (
                                          (this.ubtTrace(
                                            "c_trn_z_10650068932",
                                            {
                                              bizKey:
                                                "z_mini_12306_account_manage_click",
                                              type: "1",
                                            }
                                          ),
                                          this.state.bind12306Name)
                                        ) {
                                          n.next = 4;
                                          break;
                                        }
                                        return (
                                          this.goLogin12306H5(),
                                          n.abrupt("return")
                                        );
                                      case 4:
                                        (0, N.ml)({
                                          UserName: this.state.bind12306Name,
                                          Password: this.state.bind12306Pas,
                                        })
                                          .then(function () {
                                            e.navigateTo({
                                              url: "/pages/12306/change12306mobile/index",
                                            });
                                          })
                                          .catch(function () {
                                            e.goLogin12306H5();
                                          });
                                      case 5:
                                      case "end":
                                        return n.stop();
                                    }
                                },
                                n,
                                this
                              );
                            })
                          );
                          return function () {
                            return n.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "toChangePassword",
                        value: function () {
                          var n = this;
                          this.ubtTrace("c_trn_z_10650068932", {
                            bizKey: "z_mini_12306_account_manage_click",
                            type: "2",
                          }),
                            this.state.bind12306Name
                              ? (0, N.ml)({
                                  UserName: this.state.bind12306Name,
                                  Password: this.state.bind12306Pas,
                                })
                                  .then(function () {
                                    n.navigateTo({
                                      url: "/pages/12306/change12306password/index",
                                    });
                                  })
                                  .catch(function () {
                                    n.goLogin12306H5();
                                  })
                              : this.goLogin12306H5();
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var n = this,
                            e = this.state,
                            t = e.bind12306Name,
                            i = e.mobile;
                          return (0, p.BX)(d.View, {
                            className: "account-12306-management",
                            children: [
                              (0, p.BX)(d.View, {
                                className: "item",
                                id: "AgBG",
                                onClick: function () {
                                  n.goLogin12306H5(!0);
                                },
                                children: [
                                  (0, p.BX)(d.View, {
                                    className: "icon-title",
                                    children: [
                                      (0, p.tZ)(d.Text, {
                                        className: "ifont-12306 iconfont icon",
                                      }),
                                      "12306账号",
                                    ],
                                  }),
                                  (0, p.BX)(d.View, {
                                    className: "right-box",
                                    children: [
                                      (0, p.tZ)(d.Text, {
                                        className: "account",
                                        children: t || "未登录",
                                      }),
                                      (0, p.tZ)(d.Text, {
                                        className: "iconfont ifont-arr icon",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, p.BX)(d.View, {
                                className: "item",
                                id: "AgBH",
                                onClick: this.toChangeBindMobile.bind(this),
                                children: [
                                  (0, p.tZ)(d.View, {
                                    children: "修改绑定手机",
                                  }),
                                  (0, p.BX)(d.View, {
                                    className: "right-box",
                                    children: [
                                      (0, p.tZ)(d.Text, {
                                        className: "account",
                                        children: i,
                                      }),
                                      (0, p.tZ)(d.Text, {
                                        className: "iconfont ifont-arr icon",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, p.BX)(d.View, {
                                className: "item",
                                id: "AgBI",
                                onClick: this.toChangePassword.bind(this),
                                children: [
                                  (0, p.tZ)(d.View, {
                                    children: "修改用户密码",
                                  }),
                                  (0, p.tZ)(d.View, {
                                    className: "right-box",
                                    children: (0, p.tZ)(d.Text, {
                                      className: "iconfont ifont-arr icon",
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          });
                        },
                      },
                    ]),
                    t
                  );
                })(h.default.Component))
              ) || i;
          Page(
            (0, a.createPageConfig)(
              v,
              "pages/12306/management12306account/index",
              { root: { cn: [] } },
              {
                navigationBarBackgroundColor: "#fff",
                backgroundColorTop: "#EFEFEF",
                navigationBarTitleText: "12306账号管理",
                navigationBarTextStyle: "black",
              } || {}
            )
          );
        },
      },
      function (n) {
        n.O(0, [19559, 11216, 68592], function () {
          return (function (e) {
            return n((n.s = e));
          })(8678);
        }),
          n.O();
      },
    ]);
})();
