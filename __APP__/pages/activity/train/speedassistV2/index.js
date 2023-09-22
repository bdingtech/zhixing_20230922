!(function () {
  "use strict";
  require("../sub-vendors.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [62648],
      {
        23622: function (e, t, n) {
          var a,
            r,
            i,
            s = n(32180),
            c = n(57042),
            o = n(24460),
            u = n(21867),
            p = n(86066),
            d = n(79301),
            l = n(95308),
            h = n(52500),
            f = n(92954),
            g = n.n(f),
            b = n(49120),
            y = n(13025),
            x = n(79910),
            k = n(17377),
            m = n(71515),
            v = n(18783),
            w = n(79792),
            Z = n(2809),
            T = n(48792),
            S = n.n(T),
            P = n(81957),
            K = n(86977),
            C = n(48813),
            N = (0, k.ZP)({
              serviceCode: "17679",
              channel: w.default.train_channel,
              path: "bindZtripWechatInfoAndUidForOfficalAccount",
            }),
            U = (0, k.ZP)({
              serviceCode: "17679",
              channel: w.default.train_channel,
              path: "bindZtripWechatInfoForShortMessage",
            }),
            B = (0, k.ZP)({
              serviceCode: "17679",
              channel: w.default.train_channel,
              path: "getZtripOfficialAccountUrl",
            }),
            j = (0, k.ZP)({
              serviceCode: "15791",
              channel: w.default.train_channel,
              path: "getGenerateParam",
            }),
            A = (0, k.ZP)({
              serviceCode: "17679",
              channel: w.default.train_channel,
              path: "bindZtripWechatInfoAndUidForOfficalAccountWithUid",
            }),
            O = { zx: "10650003718", ty: "10650003720", dt: "10650003721" },
            R = function () {
              for (
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : "",
                  t = {},
                  n = e.replace(/^(\?|#)/, "").split(/&amp;|&/),
                  a = 0;
                a < n.length;
                a++
              )
                if (n[a]) {
                  var r = n[a].indexOf("=");
                  -1 === r && (r = n[a].length);
                  var i = n[a].substring(0, r),
                    s = n[a].substring(r + 1);
                  t.hasOwnProperty(i)
                    ? (Array.isArray(t[i]) || (t[i] = [t[i]]),
                      t[i].push(decodeURIComponent(s)))
                    : (t[i] = decodeURIComponent(s));
                }
              return t;
            },
            V =
              ((a = (0, P.h)()),
              (r = S()({
                pageId: w.default.isTieyou ? "10650075440" : "10650056916",
                data: {
                  shareKey: "",
                  type: "3",
                  toStation: "",
                  showPage: !1,
                  url: "https://mp.weixin.qq.com/s/CKoJZzYLVnNbDHk8Rr9w2A?title=公众号加速",
                  initInfo: {},
                  pageKey: "wechatOfficalSpeed",
                  assistType: "gzh",
                },
                onLoad: function (e) {
                  var t = this;
                  return (0, l.Z)(
                    (0, d.Z)().mark(function n() {
                      var a,
                        r,
                        i,
                        s,
                        c,
                        o,
                        u,
                        p,
                        l,
                        h,
                        f,
                        b,
                        k,
                        m,
                        w,
                        Z,
                        T,
                        S,
                        P,
                        C,
                        N,
                        U;
                      return (0, d.Z)().wrap(
                        function (n) {
                          for (;;)
                            switch ((n.prev = n.next)) {
                              case 0:
                                return (
                                  (n.next = 2),
                                  (0, v.M9)({ isSaveSessionKey: 2 })
                                );
                              case 2:
                                if (
                                  ((r = {
                                    keys: [(a = "ztrip-fe-train-speedup")],
                                  }),
                                  (i = e.scene),
                                  (s = e.publicAccountType),
                                  (c = void 0 === s ? "3" : s),
                                  (o = e.toStation),
                                  (u = e.pageKey),
                                  (p = void 0 === u ? "wechatOfficalSpeed" : u),
                                  (l = e.uid),
                                  (h = e.orderNumber),
                                  !l || !h || "MessageOfficialBind" !== p)
                                ) {
                                  n.next = 10;
                                  break;
                                }
                                return (
                                  (n.next = 8), t.shortMessageBindUid(l, h)
                                );
                              case 8:
                                return (
                                  g().redirectTo({
                                    url: "/functionalPages/twebview/index?url=https%3A%2F%2Fmp.weixin.qq.com%2Fs%2FediyL1V9CdfyezoboQDkAg%3Ftitle%3D%E5%85%AC%E4%BC%97%E5%8F%B7%E5%8A%A0%E9%80%9F",
                                  }),
                                  n.abrupt("return")
                                );
                              case 10:
                                if (
                                  ((f = decodeURIComponent(i)),
                                  console.log("shareKey---\x3e", f),
                                  16 !== f.length)
                                ) {
                                  n.next = 17;
                                  break;
                                }
                                return (
                                  (n.next = 15),
                                  j({
                                    key: f,
                                    scene: O[t.state.jetpack] || "10650003718",
                                  })
                                );
                              case 15:
                                (b = n.sent).param &&
                                  ((k = R(b.param)),
                                  console.log(
                                    "getGenerateParamResponse---\x3e",
                                    k
                                  ),
                                  (f = k.scene),
                                  (c = k.publicAccountType),
                                  (o = k.toStation),
                                  k.pageKey && (p = k.pageKey));
                              case 17:
                                return (
                                  (m = t.state.assistType),
                                  t.setState({ initInfo: e, pageKey: p }),
                                  (n.prev = 19),
                                  (n.next = 22),
                                  (0, y.yp)(r)
                                );
                              case 22:
                                if (1 !== (w = n.sent).resultCode) {
                                  n.next = 51;
                                  break;
                                }
                                if (
                                  ((Z = w.configData),
                                  !(T = (void 0 === Z ? [] : Z).find(function (
                                    e
                                  ) {
                                    return e.key === a;
                                  })) || !T.data)
                                ) {
                                  n.next = 32;
                                  break;
                                }
                                if (
                                  ((S = T.data),
                                  (P = S.speedupUrl),
                                  (C = S.canSpeedupByOfficialAccount),
                                  P && (t.url = P),
                                  C)
                                ) {
                                  n.next = 32;
                                  break;
                                }
                                return (
                                  t.jumpToRobsharePage(e), n.abrupt("return")
                                );
                              case 32:
                                if (v.ZP.isLogin) {
                                  n.next = 49;
                                  break;
                                }
                                return (
                                  (n.next = 35),
                                  B({
                                    source: p || "wechatOfficalSpeed",
                                    shareKey: f,
                                    type: c,
                                  })
                                );
                              case 35:
                                if (1 === (N = n.sent).resultCode) {
                                  n.next = 39;
                                  break;
                                }
                                return (
                                  t.jumpToRobsharePage(e), n.abrupt("return")
                                );
                              case 39:
                                if (
                                  (N.assistType && (m = N.assistType),
                                  N.jumpUrl && (t.url = (0, K.P_)(N.jumpUrl)),
                                  !N.isOriginUrl)
                                ) {
                                  n.next = 46;
                                  break;
                                }
                                return (
                                  t.url
                                    ? (t.ubtTrace(165681, {
                                        riskType: N.riskReason,
                                        type: "xcx",
                                      }),
                                      g().redirectTo({ url: t.url }))
                                    : t.jumpToRobsharePage(e),
                                  n.abrupt("return")
                                );
                              case 46:
                                if (!N.isUnionIdBindUid) {
                                  n.next = 49;
                                  break;
                                }
                                return (
                                  t.setState(
                                    {
                                      shareKey: f,
                                      type: c,
                                      toStation: decodeURIComponent(o),
                                      showPage: !1,
                                      assistType: m,
                                    },
                                    function () {
                                      t.bindToNext(f, c, !0);
                                    }
                                  ),
                                  n.abrupt("return")
                                );
                              case 49:
                                n.next = 53;
                                break;
                              case 51:
                                return (
                                  t.jumpToRobsharePage(e), n.abrupt("return")
                                );
                              case 53:
                                n.next = 59;
                                break;
                              case 55:
                                return (
                                  (n.prev = 55),
                                  (n.t0 = n.catch(19)),
                                  t.jumpToRobsharePage(e),
                                  n.abrupt("return")
                                );
                              case 59:
                                x.Z.setLaunchSource({
                                  loginSoureType: "wechat",
                                  loginSourceName: "speedup",
                                }),
                                  (U = v.ZP.isLogin)
                                    ? t.bindToNext(f, c)
                                    : t.setState(
                                        {
                                          shareKey: f,
                                          type: c,
                                          toStation: decodeURIComponent(o),
                                          showPage: !U,
                                          assistType: m,
                                        },
                                        function () {
                                          t.ubtTrace(199287, { type: m });
                                        }
                                      );
                              case 62:
                              case "end":
                                return n.stop();
                            }
                        },
                        n,
                        null,
                        [[19, 55]]
                      );
                    })
                  )();
                },
                onShow: function () {},
                jumpToRobsharePage: function (e) {
                  var t = e.tagCode,
                    n = e.scene,
                    a = e.type,
                    r = void 0 === a ? "weixin" : a;
                  g().redirectTo({
                    url: "/pages/robshareV3/index?tagCode="
                      .concat(t, "&scene=")
                      .concat(n, "&type=")
                      .concat(r),
                  });
                },
                bindToNext: function (e, t) {
                  var n = arguments,
                    a = this;
                  return (0, l.Z)(
                    (0, d.Z)().mark(function r() {
                      var i, s, c;
                      return (0, d.Z)().wrap(
                        function (r) {
                          for (;;)
                            switch ((r.prev = r.next)) {
                              case 0:
                                return (
                                  (i = n.length > 2 && void 0 !== n[2] && n[2]),
                                  (0, b.showLoading)(),
                                  (r.prev = 2),
                                  (r.next = 5),
                                  B({
                                    source:
                                      a.state.pageKey || "wechatOfficalSpeed",
                                    shareKey: e,
                                    type: t || a.state.type,
                                  })
                                );
                              case 5:
                                if (
                                  ((c = r.sent), (s = c), 1 === c.resultCode)
                                ) {
                                  r.next = 10;
                                  break;
                                }
                                return (
                                  a.jumpToRobsharePage(a.state.initInfo),
                                  r.abrupt("return")
                                );
                              case 10:
                                c.jumpUrl && (a.url = (0, K.P_)(c.jumpUrl)),
                                  a.setState(
                                    { assistType: s.assistType },
                                    (0, l.Z)(
                                      (0, d.Z)().mark(function t() {
                                        return (0, d.Z)().wrap(function (t) {
                                          for (;;)
                                            switch ((t.prev = t.next)) {
                                              case 0:
                                                if (!i) {
                                                  t.next = 5;
                                                  break;
                                                }
                                                return (
                                                  (t.next = 3),
                                                  a.bindShareKeyWithUid(e)
                                                );
                                              case 3:
                                                t.next = 7;
                                                break;
                                              case 5:
                                                return (
                                                  (t.next = 7),
                                                  a.bindShareKey(e)
                                                );
                                              case 7:
                                              case "end":
                                                return t.stop();
                                            }
                                        }, t);
                                      })
                                    )
                                  ),
                                  (r.next = 18);
                                break;
                              case 14:
                                return (
                                  (r.prev = 14),
                                  (r.t0 = r.catch(2)),
                                  a.jumpToRobsharePage(a.state.initInfo),
                                  r.abrupt("return")
                                );
                              case 18:
                                (0, b.hideLoading)();
                                try {
                                  a.ubtTrace(165681, {
                                    riskType: s.riskReason,
                                    type: s.isOriginUrl ? "xcx" : s.assistType,
                                  });
                                } catch (e) {
                                  console.log(e);
                                }
                                g().redirectTo({ url: a.url });
                              case 21:
                              case "end":
                                return r.stop();
                            }
                        },
                        r,
                        null,
                        [[2, 14]]
                      );
                    })
                  )();
                },
                bindShareKey: function (e) {
                  var t = arguments,
                    n = this;
                  return (0, l.Z)(
                    (0, d.Z)().mark(function a() {
                      var r;
                      return (0, d.Z)().wrap(
                        function (a) {
                          for (;;)
                            switch ((a.prev = a.next)) {
                              case 0:
                                return (
                                  (r =
                                    t.length > 1 && void 0 !== t[1] ? t[1] : 1),
                                  (a.prev = 1),
                                  (a.next = 4),
                                  N({
                                    shareKey: e,
                                    pageKey:
                                      n.state.pageKey || "wechatOfficalSpeed",
                                    type: "gzh" === n.state.assistType ? 1 : 6,
                                  })
                                );
                              case 4:
                                if (1 === a.sent.resultCode) {
                                  a.next = 9;
                                  break;
                                }
                                if (!(r < 2)) {
                                  a.next = 9;
                                  break;
                                }
                                return (a.next = 9), n.bindShareKey(e, 2);
                              case 9:
                                a.next = 16;
                                break;
                              case 11:
                                if (
                                  ((a.prev = 11), (a.t0 = a.catch(1)), !(r < 2))
                                ) {
                                  a.next = 16;
                                  break;
                                }
                                return (a.next = 16), n.bindShareKey(e, 2);
                              case 16:
                              case "end":
                                return a.stop();
                            }
                        },
                        a,
                        null,
                        [[1, 11]]
                      );
                    })
                  )();
                },
                bindShareKeyWithUid: function (e) {
                  var t = arguments,
                    n = this;
                  return (0, l.Z)(
                    (0, d.Z)().mark(function a() {
                      var r;
                      return (0, d.Z)().wrap(
                        function (a) {
                          for (;;)
                            switch ((a.prev = a.next)) {
                              case 0:
                                return (
                                  (r =
                                    t.length > 1 && void 0 !== t[1] ? t[1] : 1),
                                  (a.prev = 1),
                                  (a.next = 4),
                                  A({
                                    shareKey: e,
                                    pageKey:
                                      n.state.pageKey || "wechatOfficalSpeed",
                                    type: "gzh" === n.state.assistType ? 1 : 6,
                                  })
                                );
                              case 4:
                                if (1 === a.sent.resultCode) {
                                  a.next = 9;
                                  break;
                                }
                                if (!(r < 2)) {
                                  a.next = 9;
                                  break;
                                }
                                return (
                                  (a.next = 9), n.bindShareKeyWithUid(e, 2)
                                );
                              case 9:
                                a.next = 16;
                                break;
                              case 11:
                                if (
                                  ((a.prev = 11), (a.t0 = a.catch(1)), !(r < 2))
                                ) {
                                  a.next = 16;
                                  break;
                                }
                                return (
                                  (a.next = 16), n.bindShareKeyWithUid(e, 2)
                                );
                              case 16:
                              case "end":
                                return a.stop();
                            }
                        },
                        a,
                        null,
                        [[1, 11]]
                      );
                    })
                  )();
                },
                shortMessageBindUid: function (e, t) {
                  var n = arguments,
                    a = this;
                  return (0, l.Z)(
                    (0, d.Z)().mark(function r() {
                      var i;
                      return (0, d.Z)().wrap(
                        function (r) {
                          for (;;)
                            switch ((r.prev = r.next)) {
                              case 0:
                                return (
                                  (i =
                                    n.length > 2 && void 0 !== n[2] ? n[2] : 1),
                                  (r.prev = 1),
                                  (r.next = 4),
                                  U({
                                    pageKey: "MessageOfficialBind",
                                    type: 5,
                                    uid: e,
                                    orderNumber: t,
                                  })
                                );
                              case 4:
                                if (1 === r.sent.resultCode) {
                                  r.next = 9;
                                  break;
                                }
                                if (!(i < 2)) {
                                  r.next = 9;
                                  break;
                                }
                                return (
                                  (r.next = 9), a.shortMessageBindUid(e, t, 2)
                                );
                              case 9:
                                r.next = 16;
                                break;
                              case 11:
                                if (
                                  ((r.prev = 11), (r.t0 = r.catch(1)), !(i < 2))
                                ) {
                                  r.next = 16;
                                  break;
                                }
                                return (
                                  (r.next = 16), a.shortMessageBindUid(e, t, 2)
                                );
                              case 16:
                              case "end":
                                return r.stop();
                            }
                        },
                        r,
                        null,
                        [[1, 11]]
                      );
                    })
                  )();
                },
                noop: function () {
                  this.ubtTrace(199288, { type: this.state.assistType });
                },
                login: function () {
                  var e = this;
                  v.ZP.doLogin().then(
                    function () {
                      e.bindToNext(e.state.shareKey);
                    },
                    function () {
                      console.log("取消登录");
                    }
                  );
                },
                getPhoneNumberForLogin: function () {
                  this.ubtTrace(199288, { type: this.state.assistType }),
                    this.login();
                },
                clickNavigateBack: function () {
                  g().navigateBack({
                    fail: function () {
                      x.Z.relaunchHome();
                    },
                  });
                },
              })),
              a(
                (i =
                  r(
                    (i = (function (e) {
                      (0, u.Z)(n, e);
                      var t = (0, p.Z)(n);
                      function n(e) {
                        var a;
                        return (
                          (0, c.Z)(this, n),
                          ((a = t.call(this, e)).state = {
                            isTieyou: w.default.isTieyou,
                            statusBarHeight: Z.ZP.statusBarHeight,
                            jetpack: w.default.jetpack,
                          }),
                          a
                        );
                      }
                      return (
                        (0, o.Z)(n, [
                          {
                            key: "componentDidMount",
                            value: function () {
                              console.log(this.state.isTieyou),
                                console.log(
                                  "jetpack---\x3e".concat(this.state.jetpack)
                                );
                            },
                          },
                          {
                            key: "render",
                            value: function () {
                              var e = this.state,
                                t = e.statusBarHeight,
                                n = e.toStation,
                                a = e.showPage,
                                r = e.assistType;
                              return a
                                ? (0, C.BX)(m.View, {
                                    children: [
                                      (0, C.BX)(m.View, {
                                        className: "top-bar",
                                        style: "padding-top: " + t + "px",
                                        children: [
                                          (0, C.tZ)(m.Text, {
                                            className: "ifont-back iconfont",
                                            id: "AeEn",
                                            onClick: this.clickNavigateBack,
                                          }),
                                          (0, C.tZ)(m.View, {
                                            className: "tit",
                                          }),
                                        ],
                                      }),
                                      (0, C.BX)(m.View, {
                                        className: "wrap-orage",
                                        style: "padding-top: " + t + "px",
                                        children: [
                                          (0, C.BX)(m.View, {
                                            className: "top-txt",
                                            children: [
                                              "去",
                                              (0, C.tZ)(m.Text, {
                                                class: "strong",
                                                children: n,
                                              }),
                                              "的车票太难抢啦！",
                                            ],
                                          }),
                                          (0, C.tZ)(m.View, {
                                            className: "slogan",
                                          }),
                                          (0, C.tZ)(m.View, {
                                            className: "top-ren",
                                          }),
                                          (0, C.tZ)(m.View, {
                                            className:
                                              "qw" === r
                                                ? "main-box wechat-corp"
                                                : "main-box",
                                            children: (0, C.tZ)(m.Button, {
                                              className: "btn-submit",
                                              id: "AeEo",
                                              onClick:
                                                this.getPhoneNumberForLogin,
                                              children: "一键登录为好友加速",
                                            }),
                                          }),
                                          (0, C.BX)(m.View, {
                                            className: "botm-txt",
                                            children: [
                                              (0, C.tZ)(m.Icon, {
                                                className: "icon-ku",
                                              }),
                                              (0, C.BX)(m.View, {
                                                className: "bdbox",
                                                children: [
                                                  (0, C.tZ)(m.View, {
                                                    className: "txt",
                                                    children:
                                                      "求求你帮我加个速～",
                                                  }),
                                                  (0, C.tZ)(m.View, {
                                                    className: "txt",
                                                    children:
                                                      "就差你了，我马上就能抢到了～",
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  })
                                : (0, C.tZ)(m.View, {});
                            },
                          },
                        ]),
                        n
                      );
                    })(h.default.Component))
                  ) || i)
              ) || i);
          Page(
            (0, s.createPageConfig)(
              V,
              "pages/activity/train/speedassistV2/index",
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
          })(23622);
        }),
          e.O();
      },
    ]);
})();
