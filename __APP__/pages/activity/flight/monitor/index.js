!(function () {
  "use strict";
  require("../sub-vendors.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [54487],
      {
        24339: function (t, e, o) {
          var a,
            i = o(32180),
            n = o(57042),
            s = o(24460),
            c = o(21867),
            l = o(86066),
            r = o(298),
            d = o(52500),
            u = o(71515),
            h = (o(92954), o(48792)),
            p = o.n(h),
            g = o(34229),
            m = o(79910),
            f = o(81957),
            b = o(79792),
            y = o(49120),
            w = o(13025),
            Z = o(18783),
            N = o(28352),
            k = o(48813),
            B = { able: "ABLE_PAGE", unable: "UNABLE_PAGE", self: "SELF_PAGE" },
            T = "啊哦，活动太火爆了，请稍后再试~",
            C = b.default.isTieyou,
            V = {
              pageId: C ? "10650039543" : "10650039541",
              data: {
                query: {},
                canUseGetUserProfile: m.Z.canUseGetUserProfile,
                canGetMobile: !1,
                isLogin: !1,
                openId: "",
                isTieyou: C,
                pageType: "",
                pageInfo: {},
                pageConstant: B,
                title: "",
                couponVisible: !1,
                couponList: [],
                couponTitle: "",
                unableVisible: !1,
                unableMessage: "",
                ruleVisible: !1,
                ruleContent: "",
              },
              onLoad: function (t) {
                console.log("options", t);
                var e = decodeURIComponent(t.shareKey || "");
                this.setData({
                  query: { shareKey: e, orderNumber: t.orderNumber || "" },
                });
              },
              onShow: function () {
                this.setData({ isLogin: Z.ZP.isLogin }),
                  this.getOpenId(),
                  this.getRuleConfig();
              },
              onShareAppMessage: function () {
                return {
                  bu: "train",
                  title: "快来帮我点一下，我在".concat(
                    C ? "铁友" : "智行",
                    "监控低价机票，还可以领钱"
                  ),
                  desc: "快来帮我点一下，我在".concat(
                    C ? "铁友" : "智行",
                    "监控低价机票，还可以领钱"
                  ),
                  path: "/pages/activity/flight/monitor/index?shareKey="
                    .concat(
                      encodeURIComponent(this.data.query.shareKey),
                      "&orderNumber="
                    )
                    .concat(this.data.query.orderNumber),
                  imageUrl:
                    "https://images3.c-ctrip.com/train/hd/20200414-flight-monitor/share.png",
                };
              },
              getRuleConfig: function () {
                var t = this;
                (0, w.fu)({ ConfigKey: "nat_jiankong_pengzhangjin" }).then(
                  function (e) {
                    console.log("GetConfigInfo", e);
                    var o = e.ConfigInfo && e.ConfigInfo.Content;
                    t.setData({ ruleContent: o });
                  }
                );
              },
              onClickRule: function () {
                this.setData({ ruleVisible: !0 });
              },
              onClickHideRule: function () {
                this.setData({ ruleVisible: !1 });
              },
              getOpenId: function () {
                var t = this;
                (0, Z.M9)().then(
                  function (e) {
                    var o = e.openid;
                    t.setData({ openId: o }),
                      console.log("openId", t.data.openId),
                      t.setData({ canGetMobile: !0 }),
                      console.log("canGetMobile"),
                      t.getActivityInfo();
                  },
                  function () {
                    console.log("获取openId失败"), (0, y.showToast)(T);
                  }
                );
              },
              getActivityInfo: function () {
                var t = this;
                if (this.data.openId) {
                  var e = {
                    data: {
                      shareKey: this.data.query.shareKey,
                      openId: this.data.openId,
                    },
                  };
                  console.log("savingPotShareDetail params", e),
                    (0, y.showLoading)(),
                    (0, N.hR)(e)
                      .then(function (e) {
                        console.log("savingPotShareDetail res", e),
                          (0, y.hideLoading)(),
                          1 === e.resultCode
                            ? (t.setData({ pageInfo: (0, r.Z)({}, e.data) }),
                              0 === t.data.pageInfo.shareFlag
                                ? (t.setData({ pageType: B.self }),
                                  setTimeout(function () {
                                    t.navigateTo({
                                      url: "/pages/flight/monitordetail/monitordetail?orderNumber=".concat(
                                        t.data.query.orderNumber
                                      ),
                                    });
                                  }, 4e3))
                                : 1 === t.data.pageInfo.shareFlag
                                ? t.setData({ pageType: B.able })
                                : 2 === t.data.pageInfo.shareFlag
                                ? t.setData({ pageType: B.unable })
                                : (0, y.showToast)(T))
                            : (0, y.showToast)(T);
                      })
                      .catch(function (t) {
                        console.log("savingPotShareDetail err", t),
                          (0, y.hideLoading)(),
                          (0, y.showToast)(T);
                      });
                } else (0, y.showToast)(T);
              },
              getUserProfileAction: function () {
                var t = this,
                  e = C ? "铁友网友" : "智行网友",
                  o = C
                    ? "http://pic.c-ctrip.com/train/zt/wechat/avatar-default-ty.png"
                    : "http://pic.c-ctrip.com/train/zt/wechat/avatar-default-zx.png",
                  a = {
                    data: {
                      shareKey: this.data.query.shareKey,
                      openId: this.data.openId,
                    },
                  };
                (0, y.getUserProfileInfo)()
                  .then(function (e) {
                    (a.data.name = encodeURIComponent(e.nickName)),
                      (a.data.portrait = e.avatarUrl || o),
                      t.doAssist(a);
                  })
                  .catch(function () {
                    (a.data.name = encodeURIComponent(e)),
                      (a.data.portrait = o),
                      t.doAssist(a);
                  });
              },
              onClickAssist: function (t) {
                var e = {
                    data: {
                      shareKey: this.data.query.shareKey,
                      openId: this.data.openId,
                    },
                  },
                  o = t.detail.userInfo;
                o
                  ? ((e.data.name = encodeURIComponent(o.nickName)),
                    (e.data.portrait = o.avatarUrl))
                  : ((e.data.name = C ? "铁友网友" : "智行网友"),
                    (e.data.portrait = C
                      ? "http://pic.c-ctrip.com/train/zt/wechat/avatar-default-ty.png"
                      : "http://pic.c-ctrip.com/train/zt/wechat/avatar-default-zx.png")),
                  this.doAssist(e);
              },
              loginByPhone: function () {
                var t = this;
                Z.ZP.doLogin().then(function () {
                  t.setData({ isLogin: Z.ZP.isLogin }), t.getActivityInfo();
                });
              },
              loginWithoutPhone: function () {
                var t = this;
                Z.ZP.doLogin().then(function () {
                  t.setData({ isLogin: Z.ZP.isLogin }), t.getActivityInfo();
                });
              },
              doAssist: function (t) {
                var e = this;
                console.log("assistAction params", t),
                  (0, y.showLoading)(),
                  (0, N.UA)(t)
                    .then(function (t) {
                      console.log("assistAction res", t),
                        (0, y.hideLoading)(),
                        1 === t.resultCode
                          ? (e.setData({
                              title: (t.data && t.data.title) || "",
                            }),
                            t.data &&
                            t.data.couponList &&
                            t.data.couponList.length
                              ? e.setData({
                                  couponVisible: !0,
                                  couponList: t.data.couponList,
                                })
                              : 1 === e.data.pageInfo.shareFlag
                              ? ((0, y.showToast)("助力成功，谢谢你！"),
                                setTimeout(function () {
                                  m.Z.relaunchHome("flight");
                                }, 4e3))
                              : (0, y.showToast)(T))
                          : t.data && t.data.isSelf
                          ? (e.setData({
                              unableVisible: !0,
                              unableMessage: t.resultMessage,
                            }),
                            setTimeout(function () {
                              e.navigateTo({
                                url: "/pages/flight/monitordetail/monitordetail?orderNumber=".concat(
                                  e.data.query.orderNumber
                                ),
                              });
                            }, 4e3))
                          : (e.setData({
                              unableVisible: !0,
                              unableMessage: t.resultMessage,
                            }),
                            setTimeout(function () {
                              m.Z.relaunchHome("flight");
                            }, 4e3));
                    })
                    .catch(function (t) {
                      console.log("assistAction err", t),
                        (0, y.hideLoading)(),
                        (0, y.showToast)(T);
                    });
              },
              onClickToUse: function () {
                m.Z.relaunchHome("flight");
              },
            },
            x =
              (0, f.h)()(
                (a =
                  p()(V)(
                    (a = (function (t) {
                      (0, c.Z)(o, t);
                      var e = (0, l.Z)(o);
                      function o() {
                        return (0, n.Z)(this, o), e.apply(this, arguments);
                      }
                      return (
                        (0, s.Z)(o, [
                          {
                            key: "render",
                            value: function () {
                              var t = this.data,
                                e = t.canUseGetUserProfile,
                                o = t.pageInfo,
                                a = t.pageType,
                                i = t.pageConstant,
                                n = t.isLogin,
                                s = t.canGetMobile,
                                c = t.isTieyou,
                                l = t.unableMessage,
                                r = t.unableVisible,
                                d = t.title,
                                h = t.couponList,
                                p = t.couponVisible,
                                m = t.ruleContent,
                                f = t.ruleVisible;
                              return (0, k.BX)(u.Block, {
                                children: [
                                  (0, k.BX)(u.View, {
                                    className: "wrap",
                                    children: [
                                      (0, k.tZ)(u.View, { className: "tit" }),
                                      (0, k.tZ)(u.View, {
                                        className: "rule",
                                        id: "AeBi",
                                        onClick: this.onClickRule,
                                        "data-ubt-key":
                                          "tieyou_wx_monitor_rule",
                                        children: "活动\n规则",
                                      }),
                                      a &&
                                        (0, k.BX)(u.View, {
                                          className: "hb-box",
                                          children: [
                                            (0, k.tZ)(u.View, {
                                              className: "number",
                                              children: o.mobileDesc,
                                            }),
                                            (0, k.tZ)(u.View, {
                                              className: "txt",
                                              children: (0, k.tZ)(
                                                g.ZtRichText,
                                                { nodes: o.shareDesc }
                                              ),
                                            }),
                                            a !== i.self &&
                                              (0, k.tZ)(u.View, {
                                                className: "pic",
                                                children: (0, k.tZ)(u.Text, {
                                                  className: o.shareTag
                                                    ? "on"
                                                    : "",
                                                  children: o.amount,
                                                }),
                                              }),
                                            o.btnVisible &&
                                              (0, k.tZ)(u.Block, {
                                                children:
                                                  a === i.able
                                                    ? (0, k.tZ)(u.Block, {
                                                        children: n
                                                          ? (0, k.tZ)(u.Block, {
                                                              children: e
                                                                ? (0, k.tZ)(
                                                                    u.Button,
                                                                    {
                                                                      className:
                                                                        "btn",
                                                                      id: "AeBl",
                                                                      onClick:
                                                                        this
                                                                          .getUserProfileAction,
                                                                      "data-ubt-key":
                                                                        "tieyou_wx_monitor_assist",
                                                                      children:
                                                                        o.btnText,
                                                                    }
                                                                  )
                                                                : (0, k.tZ)(
                                                                    u.Button,
                                                                    {
                                                                      className:
                                                                        "btn",
                                                                      openType:
                                                                        "getUserInfo",
                                                                      onGetuserinfo:
                                                                        this
                                                                          .onClickAssist,
                                                                      id: "AeBm",
                                                                      onClick:
                                                                        this
                                                                          .noop,
                                                                      "data-ubt-key":
                                                                        "tieyou_wx_monitor_assist",
                                                                      children:
                                                                        o.btnText,
                                                                    }
                                                                  ),
                                                            })
                                                          : (0, k.tZ)(u.Block, {
                                                              children: s
                                                                ? (0, k.tZ)(
                                                                    u.Button,
                                                                    {
                                                                      className:
                                                                        "btn",
                                                                      id: "AeBj",
                                                                      onClick:
                                                                        this
                                                                          .loginByPhone,
                                                                      "data-ubt-key":
                                                                        "tieyou_wx_monitor_assist",
                                                                      children:
                                                                        o.btnText,
                                                                    }
                                                                  )
                                                                : (0, k.tZ)(
                                                                    u.Button,
                                                                    {
                                                                      className:
                                                                        "btn",
                                                                      id: "AeBk",
                                                                      onClick:
                                                                        this
                                                                          .loginWithoutPhone,
                                                                      "data-ubt-key":
                                                                        "tieyou_wx_monitor_assist",
                                                                      children:
                                                                        o.btnText,
                                                                    }
                                                                  ),
                                                            }),
                                                      })
                                                    : (0, k.tZ)(u.Block, {
                                                        children: n
                                                          ? (0, k.tZ)(u.Block, {
                                                              children: e
                                                                ? (0, k.tZ)(
                                                                    u.Button,
                                                                    {
                                                                      className:
                                                                        "btn",
                                                                      id: "AeBp",
                                                                      onClick:
                                                                        this
                                                                          .getUserProfileAction,
                                                                      "data-ubt-key":
                                                                        "tieyou_wx_monitor_gotcoupon",
                                                                      children:
                                                                        o.btnText,
                                                                    }
                                                                  )
                                                                : (0, k.tZ)(
                                                                    u.Button,
                                                                    {
                                                                      className:
                                                                        "btn",
                                                                      openType:
                                                                        "getUserInfo",
                                                                      onGetuserinfo:
                                                                        this
                                                                          .onClickAssist,
                                                                      id: "AeBq",
                                                                      onClick:
                                                                        this
                                                                          .noop,
                                                                      "data-ubt-key":
                                                                        "tieyou_wx_monitor_gotcoupon",
                                                                      children:
                                                                        o.btnText,
                                                                    }
                                                                  ),
                                                            })
                                                          : (0, k.tZ)(u.Block, {
                                                              children: s
                                                                ? (0, k.tZ)(
                                                                    u.Button,
                                                                    {
                                                                      className:
                                                                        "btn",
                                                                      id: "AeBn",
                                                                      onClick:
                                                                        this
                                                                          .loginByPhone,
                                                                      "data-ubt-key":
                                                                        "tieyou_wx_monitor_gotcoupon",
                                                                      children:
                                                                        o.btnText,
                                                                    }
                                                                  )
                                                                : (0, k.tZ)(
                                                                    u.Button,
                                                                    {
                                                                      className:
                                                                        "btn",
                                                                      id: "AeBo",
                                                                      onClick:
                                                                        this
                                                                          .loginWithoutPhone,
                                                                      "data-ubt-key":
                                                                        "tieyou_wx_monitor_gotcoupon",
                                                                      children:
                                                                        o.btnText,
                                                                    }
                                                                  ),
                                                            }),
                                                      }),
                                              }),
                                          ],
                                        }),
                                      c &&
                                        (0, k.tZ)(u.View, {
                                          className: "logoty",
                                        }),
                                      !c &&
                                        (0, k.tZ)(u.View, {
                                          className: "logo",
                                        }),
                                    ],
                                  }),
                                  r &&
                                    (0, k.tZ)(u.View, {
                                      className: "shadow",
                                      children: (0, k.BX)(u.View, {
                                        className: "pop-bg",
                                        children: [
                                          c
                                            ? (0, k.tZ)(u.View, {
                                                className: "pop-tit5",
                                              })
                                            : (0, k.tZ)(u.View, {
                                                className: "pop-tit3",
                                              }),
                                          (0, k.BX)(u.View, {
                                            className: "img-txt",
                                            children: [
                                              (0, k.tZ)(u.Image, {
                                                src: "https://images3.c-ctrip.com/train/hd/20200414-flight-monitor/pop/pop-icon.png",
                                              }),
                                              (0, k.tZ)(u.View, {
                                                className: "text",
                                                children: (0, k.tZ)(
                                                  g.ZtRichText,
                                                  { nodes: l }
                                                ),
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    }),
                                  p &&
                                    (0, k.tZ)(u.View, {
                                      className: "shadow",
                                      children: (0, k.BX)(u.View, {
                                        className: "pop-bg",
                                        children: [
                                          "领取成功" === d
                                            ? (0, k.tZ)(u.View, {
                                                className: "pop-tit1",
                                              })
                                            : "助力成功" === d
                                            ? (0, k.tZ)(u.View, {
                                                className: "pop-tit2",
                                              })
                                            : (0, k.tZ)(u.Block, {
                                                children: c
                                                  ? (0, k.tZ)(u.View, {
                                                      className: "pop-tit5",
                                                    })
                                                  : (0, k.tZ)(u.View, {
                                                      className: "pop-tit3",
                                                    }),
                                              }),
                                          c
                                            ? (0, k.tZ)(u.View, {
                                                className: "pop-top-txt",
                                                children:
                                                  "送你铁友机票出行红包",
                                              })
                                            : (0, k.tZ)(u.View, {
                                                className: "pop-top-txt",
                                                children:
                                                  "送你智行机票出行红包",
                                              }),
                                          h.map(function (t, e) {
                                            return (0,
                                            k.BX)(u.View, { className: "coupon-box", children: [(0, k.tZ)(u.View, { className: "pic", children: (0, k.tZ)(u.Text, { children: t.couponPrice }) }), (0, k.BX)(u.View, { className: "txt", children: [(0, k.tZ)(u.View, { children: t.couponTitle }), (0, k.tZ)(u.Text, { children: t.couponRemark + "\n" + t.couponDesc })] })] }, e);
                                          }),
                                          (0, k.tZ)(u.Button, {
                                            className: "pop-btn",
                                            id: "AeBr",
                                            onClick: this.onClickToUse,
                                            "data-ubt-key":
                                              "tieyou_wx_monitor_touse",
                                            children: "立即使用",
                                          }),
                                        ],
                                      }),
                                    }),
                                  f &&
                                    (0, k.tZ)(u.View, {
                                      className: "shadow",
                                      id: "AeBs",
                                      onClick: this.onClickHideRule,
                                      "data-ubt-key":
                                        "tieyou_wx_monitor_hiderule",
                                      children: (0, k.BX)(u.View, {
                                        className: "pop-bg",
                                        children: [
                                          (0, k.tZ)(u.View, {
                                            className: "pop-tit4",
                                          }),
                                          (0, k.tZ)(u.View, {
                                            className: "txt-hide",
                                            children: (0, k.tZ)(g.ZtRichText, {
                                              className: "text",
                                              nodes: m,
                                            }),
                                          }),
                                        ],
                                      }),
                                    }),
                                ],
                              });
                            },
                          },
                        ]),
                        o
                      );
                    })(d.default.Component))
                  ) || a)
              ) || a;
          (x.enableShareAppMessage = !0),
            Page(
              (0, i.createPageConfig)(
                x,
                "pages/activity/flight/monitor/index",
                { root: { cn: [] } },
                {
                  navigationBarTitleText: "智行机票低价监控",
                  navigationBarBackgroundColor: "#ffffff",
                  navigationBarFrontColor: "#000000",
                  backgroundColorTop: "#FF0036",
                  backgroundColorBottom: "#FFE7B0",
                } || {}
              )
            );
        },
      },
      function (t) {
        t.O(0, [3127, 19559, 11216, 68592], function () {
          return (function (e) {
            return t((t.s = e));
          })(24339);
        }),
          t.O();
      },
    ]);
})();
