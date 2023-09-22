!(function () {
  "use strict";
  require("../sub-vendors.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [94706],
      {
        82160: function (e, s, t) {
          var i,
            n = t(32180),
            o = t(57042),
            c = t(24460),
            r = t(81876),
            u = t(21867),
            a = t(86066),
            b = t(45023),
            l = t(52500),
            f = t(71515),
            d = t(79792),
            h = t(81957),
            m = t(92954),
            p = t(79910),
            g = t(49120),
            v = t(58801),
            I = t(48813),
            Z = "授权订阅消息，出行无忧",
            w = "订阅消息后，可实时掌握状态变更提醒。",
            y =
              (0, h.h)()(
                (i = (function (e) {
                  (0, u.Z)(t, e);
                  var s = (0, a.Z)(t);
                  function t() {
                    var e;
                    return (
                      (0, o.Z)(this, t),
                      (e = s.call(this)),
                      (0, b.Z)((0, r.Z)(e), "pageId", "10650059022"),
                      (e.state = {
                        isTieyou: d.default.isTieyou,
                        title: Z,
                        subTitle: w,
                        source: "",
                        subscribeInfo: [],
                        subscribeIds: [],
                        subscribeFinish: !1,
                      }),
                      e
                    );
                  }
                  return (
                    (0, c.Z)(t, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          var e = this,
                            s = (0, m.getCurrentInstance)().router.params,
                            t = s.title,
                            i = void 0 === t ? Z : t,
                            n = s.subTitle,
                            o = void 0 === n ? w : n,
                            c = s.subscribeInfo,
                            r = void 0 === c ? "[]" : c,
                            u = s.source,
                            a = void 0 === u ? "mini" : u,
                            b = "";
                          try {
                            b = JSON.parse(r);
                          } catch (e) {
                            return (
                              console.error("parse subscribeInfo error", r),
                              void this.goHome()
                            );
                          }
                          this.setState(
                            {
                              title: i,
                              subTitle: o,
                              source: a,
                              subscribeInfo: b.map(function (e) {
                                return {
                                  subscribeId: e.subscribeId,
                                  subscribeDesc: e.subscribeDesc,
                                };
                              }),
                              subscribeIds: b.map(function (e) {
                                return e.subscribeId;
                              }),
                            },
                            function () {
                              0 == e.state.subscribeIds.length && e.goHome();
                            }
                          );
                        },
                      },
                      { key: "componentWillUnmount", value: function () {} },
                      {
                        key: "componentDidShow",
                        value: function () {
                          var e = this;
                          setTimeout(function () {
                            e.state.subscribeInfo &&
                              v.Z.getSubscribeMsgInfo(
                                e.state.subscribeIds
                              ).then(
                                function (e) {
                                  console.log("getSubscribeMsgInfo", e);
                                },
                                function (e) {
                                  console.error("getSubscribeMsg error", e);
                                }
                              );
                          }, 500);
                        },
                      },
                      { key: "componentDidHide", value: function () {} },
                      {
                        key: "goHome",
                        value: function () {
                          p.Z.relaunchHome();
                        },
                      },
                      {
                        key: "subscribe",
                        value: function () {
                          var e = this;
                          p.Z.doSubscribe(
                            this.state.subscribeIds,
                            this.state.source
                          )
                            .then(function (s) {
                              console.log("doSubscribe success", s),
                                e.setState({ subscribeFinish: !0 }),
                                (0, g.showToast)("订阅成功~");
                            })
                            .catch(function (e) {
                              var s;
                              e &&
                                (null === (s = e.message) || void 0 === s
                                  ? void 0
                                  : s.indexOf("main switch")) > -1 &&
                                (0, g.showToast)("请打开设置，接收消息通知哦~"),
                                console.log("doSubscribe error", e);
                            })
                            .finally(function () {});
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this.state,
                            s = e.isTieyou,
                            t = e.title,
                            i = e.subTitle,
                            n = e.subscribeInfo,
                            o = e.subscribeFinish;
                          return (0, I.tZ)(f.View, {
                            children: (0, I.BX)(f.View, {
                              className: "wrap",
                              children: [
                                (0, I.tZ)(f.View, {
                                  className: "logo " + (s ? "ty" : "zx"),
                                }),
                                (0, I.tZ)(f.View, {
                                  className: "tit",
                                  children: t,
                                }),
                                (0, I.tZ)(f.View, {
                                  className: "txt",
                                  children: i,
                                }),
                                n &&
                                  !!n.length &&
                                  (0, I.tZ)(f.View, {
                                    className: "list-bd",
                                    children: n.map(function (e) {
                                      return (0,
                                      I.BX)(f.View, { className: "item", children: [(0, I.tZ)(f.Text, { className: "ifont-suc2 iconfont" }), (0, I.tZ)(f.View, { className: "cont", children: e.subscribeDesc }), (0, I.tZ)(f.Text, { className: "ifont-detail iconfont" })] }, e.subscribeId);
                                    }),
                                  }),
                                (0, I.BX)(f.View, {
                                  className: "btn-box",
                                  children: [
                                    !o &&
                                      (0, I.tZ)(f.Button, {
                                        className: "btn-primary",
                                        onClick: this.subscribe,
                                        children: "去开启",
                                      }),
                                    o &&
                                      (0, I.tZ)(f.Button, {
                                        className: "btn-primary",
                                        openType: "launchApp",
                                        appParameter: JSON.stringify({
                                          success: !0,
                                        }),
                                        onError: this.goHome,
                                        children: "返回",
                                      }),
                                  ],
                                }),
                              ],
                            }),
                          });
                        },
                      },
                    ]),
                    t
                  );
                })(l.Component))
              ) || i;
          Page(
            (0, n.createPageConfig)(
              y,
              "functionalPages/subscribeApp/index",
              { root: { cn: [] } },
              { navigationBarTitleText: "首页" } || {}
            )
          );
        },
      },
      function (e) {
        e.O(0, [19559, 11216, 68592], function () {
          return (function (s) {
            return e((e.s = s));
          })(82160);
        }),
          e.O();
      },
    ]);
})();
