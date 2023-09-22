!(function () {
  "use strict";
  require("../sub-vendors.js"),
    require("../sub-common/664ce7e796cc37700ecc66e55a21a1b7.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [97659],
      {
        25510: function (t, e, n) {
          var i,
            a = n(32180),
            o = n(57042),
            c = n(24460),
            s = n(21867),
            u = n(86066),
            r = n(52500),
            f = n(71515),
            l = n(92954),
            p = n.n(l),
            d = (n(48792), n(81957)),
            h = n(79792),
            v = n(89241),
            m = n(49120),
            g = n(48813),
            S =
              (0, d.h)()(
                (i = (function (t) {
                  (0, s.Z)(n, t);
                  var e = (0, u.Z)(n);
                  function n(t) {
                    var i;
                    return (
                      (0, o.Z)(this, n),
                      ((i = e.call(this, t)).state = {
                        navigateState: "",
                        action: "",
                        info: {},
                      }),
                      (i.pageId = "10650087091"),
                      i
                    );
                  }
                  return (
                    (0, c.Z)(n, [
                      {
                        key: "componentDidShow",
                        value: function () {
                          "success" == this.state.navigateState &&
                            p().navigateBack();
                        },
                      },
                      {
                        key: "componentDidMount",
                        value: function () {
                          var t,
                            e,
                            n = this,
                            i = (
                              null === (t = (0, l.getCurrentInstance)()) ||
                              void 0 === t ||
                              null === (e = t.router) ||
                              void 0 === e
                                ? void 0
                                : e.params
                            ).data;
                          if (i) {
                            if ("string" == typeof i)
                              try {
                                i = JSON.parse(decodeURIComponent(i));
                              } catch (t) {}
                            var a = i,
                              o = a.action,
                              c = a.info;
                            if ("other-mini" == o)
                              p().navigateToMiniProgram({
                                appId: c.appid,
                                path: c.path || "",
                                success: function () {
                                  n.setState({ navigateState: "success" });
                                },
                                fail: function () {
                                  n.setState({
                                    navigateState: "fail",
                                    action: "other-mini",
                                    info: c,
                                  });
                                },
                                complete: function () {},
                              });
                            else if ("video-account" === o) {
                              var s;
                              this.ubtTrace("GHZShiPingLoading_exposure"),
                                null === (s = p().openChannelsUserProfile) ||
                                  void 0 === s ||
                                  s.call(p(), { finderUserName: c.userName }),
                                setTimeout(function () {
                                  p().reLaunch({ url: "/pages/home/index" });
                                }, 2e3);
                            }
                          } else (0, m.showToast)("出错了，请重试");
                        },
                      },
                      {
                        key: "btnClick",
                        value: function () {
                          var t = this,
                            e = this.state,
                            n = e.action,
                            i = e.info;
                          "other-mini" == n &&
                            p().navigateToMiniProgram({
                              appId: i.appid,
                              path: i.path || "",
                              success: function () {
                                t.setState({ navigateState: "success" });
                              },
                              fail: function () {
                                t.setState({
                                  navigateState: "fail",
                                  action: "other-mini",
                                  info: i,
                                });
                              },
                              complete: function () {},
                            });
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var t = this,
                            e = this.state,
                            n = e.navigateState,
                            i = (e.action, e.info),
                            a = "点击前往其他小程序";
                          return (
                            i && i.miniName && (a = i),
                            (0, g.BX)(f.View, {
                              children: [
                                (0, g.tZ)(v.Z, {}),
                                "fail" == n &&
                                  (0, g.tZ)(f.Button, {
                                    className: "btn-sel ".concat(
                                      h.default.isTieyou ? "ty" : "zx"
                                    ),
                                    onClick: function () {
                                      t.btnClick();
                                    },
                                    children: a,
                                  }),
                              ],
                            })
                          );
                        },
                      },
                    ]),
                    n
                  );
                })(r.default.Component))
              ) || i;
          Page(
            (0, a.createPageConfig)(
              S,
              "functionalPages/middle/index",
              { root: { cn: [] } },
              { disableScroll: !0 } || {}
            )
          );
        },
      },
      function (t) {
        t.O(0, [66311, 55996, 19559, 11216, 68592], function () {
          return (function (e) {
            return t((t.s = e));
          })(25510);
        }),
          t.O();
      },
    ]);
})();
