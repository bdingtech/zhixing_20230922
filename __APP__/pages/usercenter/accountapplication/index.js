!(function () {
  "use strict";
  require("../sub-vendors.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [54365],
      {
        29368: function (t, n, e) {
          var o,
            a = e(32180),
            i = e(57042),
            c = e(24460),
            u = e(21867),
            l = e(86066),
            r = e(52500),
            s = (e(92954), e(71515)),
            h = e(79792),
            f = e(32297),
            d = e(3205),
            g = e(81957),
            m = e(58676),
            p = e(79910),
            v = e(48813),
            Z = h.default.isTieyou,
            k =
              (0, g.h)()(
                (o = (function (t) {
                  (0, u.Z)(e, t);
                  var n = (0, l.Z)(e);
                  function e() {
                    var t;
                    return (
                      (0, i.Z)(this, e),
                      ((t = n.call(this)).pageId = Z
                        ? "10650062702"
                        : "10650062698"),
                      t
                    );
                  }
                  return (
                    (0, c.Z)(e, [
                      {
                        key: "handleWithdrawAccount",
                        value: function () {
                          var t = this;
                          this.showMultiButtonDialog({
                            content: "确定要退出".concat(
                              h.default.isTieyou ? "铁友" : "智行",
                              "账号登录吗？"
                            ),
                            leftButtonName: "确定",
                            onLeftButtonClick: function () {
                              t.logout();
                            },
                            rightButtonName: "取消",
                            onRightButtonClick: function () {},
                          });
                        },
                      },
                      {
                        key: "logout",
                        value: function () {
                          f.Z.doLogout().then(function () {
                            if (h.default.isWechat) {
                              var t = "https://".concat(
                                  h.default.h5domain,
                                  "/webapp/train/activity/static/common/logout.html"
                                ),
                                n = p.Z.getHomePath();
                              d.Z.twebview({
                                data: {
                                  url: ""
                                    .concat(t, "?from=")
                                    .concat(encodeURIComponent(n)),
                                },
                              });
                            } else p.Z.relaunchHome();
                          });
                        },
                      },
                      {
                        key: "handleCancellation",
                        value: function () {
                          this.navigateTo({
                            url: "/pages/logoutAccount/logoutReason/index",
                          });
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var t = this;
                          return (0, v.BX)(s.View, {
                            className: "account-application",
                            children: [
                              (0, v.BX)(s.View, {
                                className: "item",
                                id: "ACAA",
                                onClick: this.handleWithdrawAccount.bind(this),
                                children: [
                                  (0, v.tZ)(s.Text, { children: "退出登录" }),
                                  (0, v.tZ)(s.Text, {
                                    className: "iconfont ifont-arr",
                                  }),
                                ],
                              }),
                              (0, v.BX)(s.View, {
                                className: "item",
                                id: "ACAB",
                                onClick: this.handleCancellation.bind(this),
                                children: [
                                  (0, v.tZ)(s.Text, {
                                    children: "永久注销账号",
                                  }),
                                  (0, v.tZ)(s.Text, {
                                    className: "iconfont ifont-arr",
                                  }),
                                ],
                              }),
                              (0, v.tZ)(m.Z, {
                                ref: function (n) {
                                  t.onDialogAttach(n);
                                },
                              }),
                            ],
                          });
                        },
                      },
                    ]),
                    e
                  );
                })(r.default.Component))
              ) || o;
          Page(
            (0, a.createPageConfig)(
              k,
              "pages/usercenter/accountapplication/index",
              { root: { cn: [] } },
              {
                navigationBarBackgroundColor: "#fff",
                backgroundColorTop: "#EFEFEF",
                navigationBarTitleText: "账号操作",
                navigationBarTextStyle: "black",
              } || {}
            )
          );
        },
      },
      function (t) {
        t.O(0, [19559, 11216, 68592], function () {
          return (function (n) {
            return t((t.s = n));
          })(29368);
        }),
          t.O();
      },
    ]);
})();
