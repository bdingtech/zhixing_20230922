!(function () {
  "use strict";
  require("../sub-vendors.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [86747],
      {
        48624: function (e, t, n) {
          var r,
            a = n(32180),
            o = n(79301),
            i = n(95308),
            c = n(57042),
            s = n(24460),
            u = n(81876),
            l = n(21867),
            h = n(86066),
            p = n(45023),
            d = n(52500),
            f = n(92954),
            v = n.n(f),
            w = n(49120),
            Z = n(79910),
            y = n(17377),
            g = n(71515),
            x = n(18783),
            b = n(79792),
            k = n(81957),
            m = n(48813),
            S = (0, y.ZP)({
              serviceCode: "17679",
              channel: b.default.train_channel,
              path: "bindZtripWechatInfoAndUidForOfficalAccount",
            }),
            T = (0, y.ZP)({
              serviceCode: "17679",
              channel: b.default.train_channel,
              path: "getAssistArticleForTaobaoSale",
            }),
            C =
              (0, k.h)()(
                (r = (function (e) {
                  (0, l.Z)(n, e);
                  var t = (0, h.Z)(n);
                  function n(e) {
                    var r;
                    return (
                      (0, c.Z)(this, n),
                      (r = t.call(this, e)),
                      (0, p.Z)((0, u.Z)(r), "pageId", "10650089488"),
                      (0, p.Z)((0, u.Z)(r), "pageId", "10650059123"),
                      (r.state = {
                        isTieyou: b.default.isTieyou,
                        shareKey: "",
                        url: "https://mp.weixin.qq.com/s/nNINQkwyljZyuHzO7DvOXw?title=关注公众号为我助力",
                      }),
                      r
                    );
                  }
                  return (
                    (0, s.Z)(n, [
                      {
                        key: "componentDidMount",
                        value: (function () {
                          var e = (0, i.Z)(
                            (0, o.Z)().mark(function e() {
                              var t, n, r, a;
                              return (0, o.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (t =
                                            (0, f.getCurrentInstance)().router
                                              .params || {}),
                                          (n = t.shareKey),
                                          (r = decodeURIComponent(
                                            void 0 === n ? "" : n
                                          )),
                                          console.log("shareKey", r),
                                          this.setState({ shareKey: r }),
                                          (e.next = 6),
                                          (0, x.M9)({ isSaveSessionKey: 2 })
                                        );
                                      case 6:
                                        return (
                                          Z.Z.setLaunchSource({
                                            loginSoureType: "wechat",
                                            loginSourceName: "taobaoSale",
                                          }),
                                          (e.prev = 7),
                                          (e.next = 10),
                                          T()
                                        );
                                      case 10:
                                        1 === (a = e.sent).resultCode
                                          ? this.setState({ url: a.jumpUrl })
                                          : v().redirectTo({
                                              url: "/functionalPages/twebview/index?url=".concat(
                                                encodeURIComponent(
                                                  this.state.url
                                                )
                                              ),
                                            }),
                                          (e.next = 17);
                                        break;
                                      case 14:
                                        (e.prev = 14),
                                          (e.t0 = e.catch(7)),
                                          v().redirectTo({
                                            url: "/functionalPages/twebview/index?url=".concat(
                                              encodeURIComponent(this.state.url)
                                            ),
                                          });
                                      case 17:
                                        if (this.checkLogin()) {
                                          e.next = 21;
                                          break;
                                        }
                                        this.doLogin(r), (e.next = 23);
                                        break;
                                      case 21:
                                        return (
                                          (e.next = 23), this.bindToNext(r)
                                        );
                                      case 23:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this,
                                [[7, 14]]
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "checkLogin",
                        value: function () {
                          return !!x.ZP.isLogin;
                        },
                      },
                      {
                        key: "doLogin",
                        value: function (e) {
                          var t = this;
                          x.ZP.doLogin()
                            .then(
                              (0, i.Z)(
                                (0, o.Z)().mark(function n() {
                                  return (0, o.Z)().wrap(function (n) {
                                    for (;;)
                                      switch ((n.prev = n.next)) {
                                        case 0:
                                          return (n.next = 2), t.bindToNext(e);
                                        case 2:
                                        case "end":
                                          return n.stop();
                                      }
                                  }, n);
                                })
                              )
                            )
                            .catch(function () {
                              t.doLogin(e);
                            });
                        },
                      },
                      {
                        key: "bindToNext",
                        value: (function () {
                          var e = (0, i.Z)(
                            (0, o.Z)().mark(function e(t) {
                              return (0, o.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (0, w.showLoading)(),
                                          (e.next = 3),
                                          this.bindShareKey(t)
                                        );
                                      case 3:
                                        (0, w.hideLoading)(),
                                          v().redirectTo({
                                            url: "/functionalPages/twebview/index?url=".concat(
                                              encodeURIComponent(
                                                this.state.url ||
                                                  "https://mp.weixin.qq.com/s/nNINQkwyljZyuHzO7DvOXw?title=关注公众号为我助力"
                                              )
                                            ),
                                          });
                                      case 5:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this
                              );
                            })
                          );
                          return function (t) {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "bindShareKey",
                        value: (function () {
                          var e = (0, i.Z)(
                            (0, o.Z)().mark(function e(t) {
                              var n;
                              return (0, o.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (e.prev = 0),
                                          (e.next = 3),
                                          S({ shareKey: t, type: 3 })
                                        );
                                      case 3:
                                        (n = e.sent),
                                          console.log("bindShareKeyRes", n),
                                          1 !== n.resultCode &&
                                            (0, w.showToast)(
                                              n.resultMessage ||
                                                "网络开小差了，请稍后再试"
                                            ),
                                          (e.next = 11);
                                        break;
                                      case 8:
                                        (e.prev = 8),
                                          (e.t0 = e.catch(0)),
                                          (0, w.showToast)(
                                            "网络开小差了，请稍后再试"
                                          );
                                      case 11:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                null,
                                [[0, 8]]
                              );
                            })
                          );
                          return function (t) {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "render",
                        value: function () {
                          return (0, m.tZ)(g.View, {});
                        },
                      },
                    ]),
                    n
                  );
                })(d.default.Component))
              ) || r;
          Page(
            (0, a.createPageConfig)(
              C,
              "pages/activity/train/20210512-ztrip-taobao-sale/index",
              { root: { cn: [] } },
              { navigationStyle: "custom" } || {}
            )
          );
        },
      },
      function (e) {
        e.O(0, [19559, 11216, 68592], function () {
          return (function (t) {
            return e((e.s = t));
          })(48624);
        }),
          e.O();
      },
    ]);
})();
