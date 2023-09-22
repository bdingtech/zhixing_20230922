!(function () {
  "use strict";
  require("../sub-vendors.js"),
    require("../sub-common/d53773604a2ead120e9f172c237d184a.js"),
    require("../sub-common/4b28351abb499c8d6bb5f34d72677130.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [28234],
      {
        72975: function (e, t, n) {
          var c,
            a = n(32180),
            r = n(79301),
            o = n(95308),
            i = n(57042),
            s = n(24460),
            l = n(21867),
            u = n(86066),
            d = n(52500),
            f = n(92954),
            h = n.n(f),
            p = n(71515),
            g = n(18783),
            m = n(81957),
            v = n(17377),
            w = n(79792),
            b = n(4102),
            Z = n(84926),
            k = n(48813),
            C = (0, v.ZP)({
              serviceCode: "17679",
              channel: w.default.train_channel,
              path: "recordZtripBrowseVideo",
            }),
            I = (0, v.ZP)({
              serviceCode: "16903",
              channel: w.default.train_channel,
              path: "orderAccelerate",
            }),
            y =
              (0, m.h)()(
                (c = (function (e) {
                  (0, l.Z)(n, e);
                  var t = (0, u.Z)(n);
                  function n(e) {
                    var c;
                    return (
                      (0, i.Z)(this, n),
                      ((c = t.call(this, e)).pageId = "10650084080"),
                      (c.state = {
                        feedId: "",
                        timeLeft: 2,
                        source: "",
                        acceleratePageScene: "",
                        isAccelerate: !1,
                        accelerateCountdown: 3,
                        isWatch: !1,
                      }),
                      c
                    );
                  }
                  return (
                    (0, s.Z)(n, [
                      {
                        key: "componentWillUnmount",
                        value: function () {
                          this.downTimer && clearInterval(this.downTimer),
                            this.accelerateTimer &&
                              clearInterval(this.accelerateTimer);
                        },
                      },
                      {
                        key: "componentDidShow",
                        value: function () {
                          var e = this;
                          console.log(g.ZP.uid);
                          var t =
                              (0, f.getCurrentInstance)().router.params || {},
                            n = t.feedId,
                            c = void 0 === n ? "" : n,
                            a = t.source,
                            r = t.acceleratePageScene;
                          console.log("source", a),
                            console.log(
                              "isAccelerate",
                              this.state.isAccelerate
                            );
                          var o = this.state,
                            i = o.isAccelerate,
                            s = o.isWatch;
                          i && this.orderAccelerateSuccees();
                          try {
                            this.ubtTrace(218259, {
                              exposureType: "normal",
                              bizKey: "WechatVideoChannelPageShow",
                              source: a,
                              pageId: this.pageId,
                              source_diff: s ? 1 : 0,
                            });
                          } catch (e) {
                            console.log("e", e);
                          }
                          this.setState({
                            feedId: c,
                            source: a,
                            acceleratePageScene: r,
                          }),
                            g.ZP.isLogin
                              ? this.countDown()
                              : g.ZP.doLogin()
                                  .then(function () {
                                    e.countDown();
                                  })
                                  .catch(function (e) {
                                    console.log(e);
                                  });
                        },
                      },
                      {
                        key: "countDown",
                        value: function () {
                          var e = this;
                          this.downTimer = setInterval(function () {
                            var t = e.state.timeLeft;
                            t <= 0
                              ? clearInterval(e.downTimer)
                              : e.setState({ timeLeft: t - 1 });
                          }, 1e3);
                        },
                      },
                      {
                        key: "orderAccelerateSuccees",
                        value: function () {
                          var e = this;
                          this.accelerateTimer = setInterval(function () {
                            var t = e.state.accelerateCountdown;
                            t > 0
                              ? e.setState(
                                  { accelerateCountdown: t - 1 },
                                  function () {
                                    0 === e.state.accelerateCountdown &&
                                      (console.log("返回"), h().navigateBack());
                                  }
                                )
                              : clearInterval(e.accelerateTimer),
                              console.log(
                                "accelerateCountdown",
                                e.state.accelerateCountdown
                              );
                          }, 1e3);
                        },
                      },
                      {
                        key: "jumpVideo",
                        value: function () {
                          var e = this,
                            t = this.state,
                            n = t.feedId,
                            c = t.timeLeft,
                            a = t.source,
                            i = t.isAccelerate;
                          if (!c && !i) {
                            try {
                              this.ubtTrace(218260, {
                                exposureType: "normal",
                                bizKey: "WatchVideoButtonClick",
                                source: a,
                                pageId: this.pageId,
                              });
                            } catch (e) {
                              console.log("e", e);
                            }
                            console.log("feedId", n);
                            var s = {
                              finderUserName: "sphQDHCZGjI6ZfG",
                              feedId: n,
                              success: (function () {
                                var t = (0, o.Z)(
                                  (0, r.Z)().mark(function t() {
                                    return (0, r.Z)().wrap(
                                      function (t) {
                                        for (;;)
                                          switch ((t.prev = t.next)) {
                                            case 0:
                                              return (
                                                (t.prev = 0),
                                                (t.next = 3),
                                                C({ feedId: n })
                                              );
                                            case 3:
                                              e.setState({ isWatch: !0 }),
                                                e.orderAccelerate(),
                                                (t.next = 10);
                                              break;
                                            case 7:
                                              (t.prev = 7),
                                                (t.t0 = t.catch(0)),
                                                console.log("err", t.t0);
                                            case 10:
                                            case "end":
                                              return t.stop();
                                          }
                                      },
                                      t,
                                      null,
                                      [[0, 7]]
                                    );
                                  })
                                );
                                return function () {
                                  return t.apply(this, arguments);
                                };
                              })(),
                              fail: function (e) {
                                console.log("err", e);
                              },
                              complete: (function () {
                                var e = (0, o.Z)(
                                  (0, r.Z)().mark(function e() {
                                    return (0, r.Z)().wrap(function (e) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                          case "end":
                                            return e.stop();
                                        }
                                    }, e);
                                  })
                                );
                                return function () {
                                  return e.apply(this, arguments);
                                };
                              })(),
                            };
                            wx.openChannelsActivity
                              ? wx.openChannelsActivity(s)
                              : wx.showModal({
                                  title: "提示",
                                  content:
                                    "当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。",
                                });
                          }
                        },
                      },
                      {
                        key: "orderAccelerate",
                        value: (function () {
                          var e = (0, o.Z)(
                            (0, r.Z)().mark(function e() {
                              var t, n, c, a, o, i;
                              return (0, r.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (
                                          ((t = this.state),
                                          (n = t.source),
                                          (c = t.acceleratePageScene),
                                          "miniAcceleratePage" === n)
                                        ) {
                                          e.next = 3;
                                          break;
                                        }
                                        return e.abrupt("return");
                                      case 3:
                                        return (
                                          this.setState({ isAccelerate: !0 }),
                                          (a =
                                            h().getStorageSync("USERINFONEW") ||
                                            {}),
                                          ((o = {
                                            shareKey: decodeURIComponent(c),
                                            reqTime: "" + new Date().getTime(),
                                            openId: g.ZP.openid,
                                            accelerateUserInfo: {
                                              openId: g.ZP.openid,
                                              wechatNickName: a.nickName
                                                ? encodeURIComponent(a.nickName)
                                                : "神秘用户",
                                              wechatPhoto:
                                                a.avatarUrl ||
                                                "https://youimg1.c-ctrip.com/target/10090v000000k3bfv65E1_R_640_10000_Q90.jpg",
                                            },
                                            accelerateScene: 507,
                                            accelerateSource: 0,
                                            accelerateGroupId: "",
                                          }).sign = (0, Z.nF)(o)),
                                          (e.next = 9),
                                          I(o)
                                        );
                                      case 9:
                                        (i = e.sent) && 1 === i.resultCode
                                          ? (console.warn("加速"),
                                            h().setStorageSync(
                                              "BROWSE_CHANNEL_DATE",
                                              b.Z.getToday()
                                            ))
                                          : console.error("加速失败");
                                      case 11:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                this
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this,
                            t = this.state,
                            n = t.timeLeft,
                            c = t.isAccelerate,
                            a = t.accelerateCountdown,
                            r = t.source;
                          console.log("source", r);
                          var o =
                              n > 0
                                ? "即将前往视频(".concat(n, "s)")
                                : "立即观看",
                            i =
                              a > 0
                                ? "更多方式为TA加速".concat(a, "s")
                                : "更多方式为TA加速";
                          return (0, k.tZ)(p.View, {
                            className: "page " + (c ? "bg1" : "bg"),
                            onClick: this.jumpVideo.bind(this),
                            children: c
                              ? (0, k.BX)(k.HY, {
                                  children: [
                                    (0, k.tZ)(p.View, {
                                      className: "acc-txt",
                                      children: "观看成功！",
                                    }),
                                    (0, k.tZ)(p.View, {
                                      className: "btn accelerate-btn",
                                      id: "videoBack",
                                      onClick: function (e) {
                                        e.stopPropagation(), h().navigateBack();
                                      },
                                      children: i,
                                    }),
                                  ],
                                })
                              : (0, k.tZ)(k.HY, {
                                  children: (0, k.BX)(p.View, {
                                    className: "btn-submit",
                                    onClick: function (t) {
                                      t.stopPropagation(), e.jumpVideo();
                                    },
                                    children: [
                                      "miniAcceleratePage" === r
                                        ? (0, k.BX)(p.View, {
                                            children: [
                                              (0, k.tZ)(p.Text, {
                                                className: "follow",
                                                children: "关注+点赞",
                                              }),
                                              "为好友加速",
                                            ],
                                          })
                                        : (0, k.BX)(p.View, {
                                            children: [
                                              "记得",
                                              (0, k.tZ)(p.Text, {
                                                className: "follow",
                                                children: "关注+点赞",
                                              }),
                                            ],
                                          }),
                                      (0, k.tZ)(p.View, {
                                        className: "btn browse-btn",
                                        children: o,
                                      }),
                                    ],
                                  }),
                                }),
                          });
                        },
                      },
                    ]),
                    n
                  );
                })(d.default.Component))
              ) || c;
          Page(
            (0, a.createPageConfig)(
              y,
              "pages/activity/train/browseVideo/index",
              { root: { cn: [] } },
              {
                navigationBarTitleText: "点赞视频号",
                navigationBarBackgroundColor: "#ffffff",
                backgroundColorTop: "#ffffff",
                backgroundColor: "#ffffff",
                navigationBarTextStyle: "black",
                backgroundColorBottom: "#ffffff",
              } || {}
            )
          );
        },
      },
      function (e) {
        e.O(0, [59789, 20706, 82600, 19559, 11216, 68592], function () {
          return (function (t) {
            return e((e.s = t));
          })(72975);
        }),
          e.O();
      },
    ]);
})();
