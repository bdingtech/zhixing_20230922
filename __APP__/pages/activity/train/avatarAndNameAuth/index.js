!(function () {
  "use strict";
  require("../sub-vendors.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [97960],
      {
        79873: function (e, t, n) {
          var o,
            a = n(32180),
            s = n(57042),
            c = n(24460),
            i = n(21867),
            r = n(86066),
            u = n(79301),
            l = n(95308),
            d = n(52500),
            p = n(92954),
            h = n(71515),
            g = n(48792),
            m = n.n(g),
            f = n(79792),
            v = n(18783),
            I = n(79910),
            w = n(49120),
            b = n(13025),
            T = n(17377),
            x = n(81957),
            Z = n(48813),
            C = "啊哦，活动太火爆了，请稍后再试~",
            y = (0, T.ZP)({
              serviceCode: "17679",
              channel: f.default.train_channel,
              path: "getSubscribeMessageText",
            }),
            M = {
              pageId: "10650039587",
              data: {
                query: {},
                canGetMobile: !1,
                isLogin: !1,
                openId: "",
                messageText: [],
              },
              onLoad: function (e) {
                console.log("options", e), e.mesType && this.getData(e.mesType);
              },
              onShow: function () {
                this.setData({ isLogin: v.ZP.isLogin }), this.getOpenId();
              },
              getOpenId: function () {
                var e = this;
                (0, v.M9)().then(
                  function (t) {
                    var n = t.openid;
                    e.setData({ openId: n }),
                      console.log("openId", e.data.openId),
                      e.setData({ canGetMobile: !0 }),
                      console.log("canGetMobile");
                  },
                  function () {
                    console.log("获取openId失败"), (0, w.showToast)(C);
                  }
                );
              },
              getData: function (e) {
                var t = this;
                return (0, l.Z)(
                  (0, u.Z)().mark(function n() {
                    var o;
                    return (0, u.Z)().wrap(
                      function (n) {
                        for (;;)
                          switch ((n.prev = n.next)) {
                            case 0:
                              return (n.prev = 0), (n.next = 3), y({ type: e });
                            case 3:
                              1 === (o = n.sent).resultCode &&
                                t.setState({ messageText: o.subscribeRes }),
                                (n.next = 10);
                              break;
                            case 7:
                              (n.prev = 7),
                                (n.t0 = n.catch(0)),
                                (0, w.showModal)(n.t0.message);
                            case 10:
                            case "end":
                              return n.stop();
                          }
                      },
                      n,
                      null,
                      [[0, 7]]
                    );
                  })
                )();
              },
              onClickNotice: function () {
                var e = this,
                  t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : [],
                  n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : "",
                  o =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : "";
                return t.length < 1
                  ? (console.log(
                      "[Error]: param 'tmplIds' is invalid or not set."
                    ),
                    void (0, w.showToast)(C))
                  : n
                  ? this.data.openId
                    ? void (n.includes("free-hotel")
                        ? I.Z.setSubscribe(t).then(function (a) {
                            a &&
                              (0, b.NP)({
                                templateIds: t,
                                openId: e.data.openId,
                                source: "free-hotel",
                              })
                                .then(function (t) {
                                  console.log("free-share", t);
                                  var a =
                                    (n.includes("?"),
                                    ""
                                      .concat(n, "?source=")
                                      .concat(
                                        o,
                                        "&fromWechatMini=true&userWechatMiniOpenId="
                                      )
                                      .concat(e.data.openId));
                                  e.navigateTo({
                                    url:
                                      "/functionalPages/twebview/index?url=" +
                                      encodeURIComponent(a),
                                  });
                                })
                                .catch(function (e) {
                                  console.log("fail", e),
                                    (0, w.showToast)(
                                      "消息订阅失败，请稍后再试哦~"
                                    );
                                });
                          })
                        : ((0, w.showLoading)(),
                          wx.requestSubscribeMessage({
                            tmplIds: t,
                            success: function (a) {
                              console.log("success", a);
                              var s = !1;
                              if (
                                (t.forEach(function (e) {
                                  "accept" === a[e] && (s = !0);
                                }),
                                s)
                              ) {
                                var c =
                                  (n.includes("?"),
                                  ""
                                    .concat(n, "?source=")
                                    .concat(
                                      o,
                                      "&fromWechatMini=true&userWechatMiniOpenId="
                                    )
                                    .concat(e.data.openId));
                                e.navigateTo({
                                  url:
                                    "/functionalPages/twebview/index?url=" +
                                    encodeURIComponent(c),
                                });
                              }
                            },
                            fail: function (e) {
                              console.log("fail", e),
                                (0, w.showToast)("消息订阅失败，请稍后再试哦~");
                            },
                            complete: function () {
                              (0, w.hideLoading)();
                            },
                          })))
                    : (console.log("[Error]: fail to get user openId."),
                      void (0, w.showToast)(C))
                  : (console.log(
                      "[Error]: param 'jumpUrlWhenSuccess' is invalid or not set."
                    ),
                    void (0, w.showToast)(C));
              },
            },
            N =
              (0, x.h)()(
                (o =
                  m()(M)(
                    (o = (function (e) {
                      (0, i.Z)(n, e);
                      var t = (0, r.Z)(n);
                      function n() {
                        var e;
                        return (
                          (0, s.Z)(this, n),
                          ((e = t.call(this)).state = {
                            isTieyou: f.default.isTieyou,
                            tmplIds: (0, p.getCurrentInstance)().router.params
                              .tmplIds
                              ? (0,
                                p.getCurrentInstance)().router.params.tmplIds.split(
                                  ","
                                )
                              : [],
                            jumpUrlWhenSuccess:
                              (0, p.getCurrentInstance)().router.params
                                .jumpUrlWhenSuccess || "",
                            source:
                              (0, p.getCurrentInstance)().router.params
                                .source || "",
                          }),
                          e
                        );
                      }
                      return (
                        (0, c.Z)(n, [
                          {
                            key: "componentDidMount",
                            value: function () {
                              console.log(
                                "onLoad",
                                (0, p.getCurrentInstance)().router
                              );
                            },
                          },
                          {
                            key: "render",
                            value: function () {
                              var e = this,
                                t = this.state,
                                n = t.isTieyou,
                                o = t.tmplIds,
                                a = t.jumpUrlWhenSuccess,
                                s = t.source,
                                c = this.data.messageText;
                              return (0, Z.tZ)(h.Block, {
                                children: (0, Z.BX)(h.View, {
                                  className: "wrap",
                                  children: [
                                    n
                                      ? (0, Z.tZ)(h.Image, {
                                          src: "https://images3.c-ctrip.com/zt/activity/avatarAndNameAuth/logo-ty.jpg",
                                        })
                                      : (0, Z.tZ)(h.Image, {
                                          src: "https://images3.c-ctrip.com/zt/activity/avatarAndNameAuth/logo-zx.jpg",
                                        }),
                                    (0, Z.BX)(h.View, {
                                      className: "txt-box",
                                      children: [
                                        (0, Z.tZ)(h.View, {
                                          children: "参加活动请确认以下授权",
                                        }),
                                        (0, Z.tZ)(h.View, {
                                          children:
                                            "获得你的公开信息（昵称，头像等）",
                                        }),
                                        c.length
                                          ? c.map(function (e, t) {
                                              return (0,
                                              Z.tZ)(h.View, { className: "mes", children: e }, t);
                                            })
                                          : "",
                                      ],
                                    }),
                                    (0, Z.tZ)(h.Button, {
                                      className: "btn",
                                      id: "AeCa",
                                      onClick: function () {
                                        return e.onClickNotice(o, n, a, s);
                                      },
                                      children: "确认授权",
                                    }),
                                    (0, Z.tZ)(h.View, {
                                      className: "tips-txt",
                                      children: "点击确认授权后，请点击“允许”",
                                    }),
                                  ],
                                }),
                              });
                            },
                          },
                        ]),
                        n
                      );
                    })(d.default.Component))
                  ) || o)
              ) || o;
          Page(
            (0, a.createPageConfig)(
              N,
              "pages/activity/train/avatarAndNameAuth/index",
              { root: { cn: [] } },
              { navigationBarTitleText: "参加活动授权页" } || {}
            )
          );
        },
      },
      function (e) {
        e.O(0, [19559, 11216, 68592], function () {
          return (function (t) {
            return e((e.s = t));
          })(79873);
        }),
          e.O();
      },
    ]);
})();
