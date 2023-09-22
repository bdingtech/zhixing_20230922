!(function () {
  "use strict";
  require("../sub-vendors.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [19141],
      {
        99351: function (e, t, n) {
          var r,
            a = n(32180),
            i = n(79301),
            c = n(95308),
            s = n(57042),
            o = n(24460),
            u = n(81876),
            l = n(21867),
            p = n(86066),
            d = n(45023),
            f = n(52500),
            g = n(92954),
            h = n.n(g),
            v = n(71515),
            b = n(39509),
            m = n(18783),
            Z = n(13025),
            w = n(79910),
            k = n(3205),
            y = n(81957),
            x = n(79792),
            I = n(48813),
            B =
              (0, y.h)()(
                (r = (function (e) {
                  (0, l.Z)(n, e);
                  var t = (0, p.Z)(n);
                  function n() {
                    var e;
                    (0, s.Z)(this, n);
                    for (
                      var r = arguments.length, a = new Array(r), i = 0;
                      i < r;
                      i++
                    )
                      a[i] = arguments[i];
                    return (
                      (e = t.call.apply(t, [this].concat(a))),
                      (0, d.Z)((0, u.Z)(e), "pageId", "10650060347"),
                      e
                    );
                  }
                  return (
                    (0, o.Z)(n, [
                      {
                        key: "getTmplIdsFormUrl",
                        value: function () {
                          var e = (0, g.getCurrentInstance)().router.params
                            .data;
                          "string" == typeof e &&
                            (e = JSON.parse(decodeURIComponent(e)));
                          var t = e.url;
                          if (!t) return [];
                          var n = t.split("?");
                          if (!n || n.length < 2) return [];
                          var r = new b.Z(n[1]).get("subscribeTmpIds");
                          return (r && r.split(",")) || [];
                        },
                      },
                      {
                        key: "subscribeSync",
                        value: function (e, t) {
                          var n = this;
                          w.Z.setSubscribe(t)
                            .then(function () {
                              n.navigateBack(e);
                            })
                            .catch(function () {
                              n.navigateBack(e);
                            });
                        },
                      },
                      {
                        key: "addMessage",
                        value: (function () {
                          var e = (0, c.Z)(
                            (0, i.Z)().mark(function e(t) {
                              return (0, i.Z)().wrap(function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      if (m.ZP.openid) {
                                        e.next = 3;
                                        break;
                                      }
                                      return (e.next = 3), (0, m.M9)();
                                    case 3:
                                      return e.abrupt(
                                        "return",
                                        (0, Z.NP)({
                                          templateIds: t,
                                          openId: m.ZP.openid,
                                          source:
                                            "wechat-functionalPages-subscribe",
                                        }).then(function (e) {
                                          console.log(
                                            "addZtripWechatSubscribleMessage",
                                            e
                                          );
                                        })
                                      );
                                    case 4:
                                    case "end":
                                      return e.stop();
                                  }
                              }, e);
                            })
                          );
                          return function (t) {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "onSubscribe",
                        value: function () {
                          var e = this,
                            t = (0, g.getCurrentInstance)().router.params.data;
                          "string" == typeof t &&
                            (t = JSON.parse(decodeURIComponent(t)));
                          var n = t,
                            r = n.url,
                            a = n.isDirect,
                            s = this.getTmplIdsFormUrl();
                          if ((console.log("tmplIds", s), !s || s.length < 1)) {
                            a
                              ? k.Z.twebview({ data: { url: r } })
                              : this.navigateBack({
                                  ReturnCode: "-1",
                                  Message:
                                    "消息订阅失败, 缺少[subscribeTmpIds]",
                                });
                          } else {
                            var o = function () {
                              h().showModal({
                                title: "提示",
                                content:
                                  "订阅失败，您取消了订阅，或者未在设置中打开订阅消息~",
                                success: function (e) {
                                  e.confirm ||
                                    (e.cancel &&
                                      (a ||
                                        this.navigateBack({
                                          ReturnCode: "-1",
                                          Message: "消息订阅失败",
                                        })));
                                },
                              });
                            };
                            w.Z.setSubscribe(s)
                              .then(
                                (function () {
                                  var t = (0, c.Z)(
                                    (0, i.Z)().mark(function t(n) {
                                      return (0, i.Z)().wrap(function (t) {
                                        for (;;)
                                          switch ((t.prev = t.next)) {
                                            case 0:
                                              return (
                                                (t.next = 2), e.addMessage(s)
                                              );
                                            case 2:
                                              n
                                                ? a
                                                  ? (h().showToast({
                                                      title: "消息订阅成功~",
                                                      icon: "none",
                                                      duration: 2e3,
                                                    }),
                                                    k.Z.twebview({
                                                      data: { url: r },
                                                    }))
                                                  : e.navigateBack({
                                                      ReturnCode: "0",
                                                      Message: "消息订阅成功",
                                                    })
                                                : o();
                                            case 3:
                                            case "end":
                                              return t.stop();
                                          }
                                      }, t);
                                    })
                                  );
                                  return function (e) {
                                    return t.apply(this, arguments);
                                  };
                                })()
                              )
                              .catch(function () {
                                o();
                              });
                          }
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = x.default.isTieyou
                            ? "https://images3.c-ctrip.com/zt/activity/avatarAndNameAuth/logo-ty.jpg"
                            : "https://images3.c-ctrip.com/zt/activity/avatarAndNameAuth/logo-zx.jpg";
                          return (0, I.tZ)(v.Block, {
                            children: (0, I.BX)(v.View, {
                              className: "wrap",
                              children: [
                                (0, I.tZ)(v.Image, { src: e }),
                                (0, I.BX)(v.View, {
                                  className: "txt-box",
                                  children: [
                                    (0, I.tZ)(v.View, {
                                      children: "参加活动请确认以下授权",
                                    }),
                                    (0, I.tZ)(v.View, {
                                      children: "获得订阅消息的推送能力",
                                    }),
                                  ],
                                }),
                                (0, I.tZ)(v.Button, {
                                  className: "btn",
                                  onClick: this.onSubscribe,
                                  children: "订阅消息",
                                }),
                                (0, I.tZ)(v.View, {
                                  className: "tips-txt",
                                  children: "点击确认订阅后，请点击“允许”",
                                }),
                              ],
                            }),
                          });
                        },
                      },
                    ]),
                    n
                  );
                })(f.default.Component))
              ) || r;
          Page(
            (0, a.createPageConfig)(
              B,
              "functionalPages/subscribe/index",
              { root: { cn: [] } },
              { navigationBarTitleText: "消息订阅" } || {}
            )
          );
        },
      },
      function (e) {
        e.O(0, [19559, 11216, 68592], function () {
          return (function (t) {
            return e((e.s = t));
          })(99351);
        }),
          e.O();
      },
    ]);
})();
