!(function () {
  "use strict";
  require("./sub-common/21c38908e8fa4730fcf449c938917721.js"),
    require("./sub-common/e18ac9e89d62ef13595cf53c81489989.js"),
    require("./sub-common/af9a4e372fc86155ae3439262ddc36ee.js"),
    require("./sub-common/98288617f7b79bd93e6764129b2de6f6.js"),
    require("./sub-common/488f20d3ae601fc19d5c835f8ad41f52.js"),
    require("./sub-common/64b09328b6ab714bf257627ff5257a73.js"),
    require("./sub-common/a84a67620e54e4b0717aaaabef4d4f88.js"),
    require("./sub-common/1bfc4d45433b8de6b344d141f5c6c906.js"),
    require("./sub-common/6fe85c0e7576cabc17e868b8e899da37.js"),
    require("./sub-common/e255e3ffa6c0fa3b59639b749cd45155.js"),
    require("./sub-common/41e826946d5acf662d18dcccdf7ba9c9.js"),
    require("./sub-common/72d4a16e30125614fb36cb40015efca3.js"),
    require("./sub-common/e5d3d1be4be16b526d43188e1b24d26e.js"),
    require("./sub-common/4170bd0bcba1375f71e0231ba3309624.js"),
    require("./sub-common/830933a669f2df38f638a51273333128.js"),
    require("./sub-common/385c2d6294d83fae9baca300c0698c74.js"),
    require("./sub-common/d713e6c3587d81e961c85ebd4545654c.js"),
    require("./sub-common/641b9f552cd3c19e352aef60a88676a0.js"),
    require("./sub-common/e556aa0a4ecdf85baf45d8862bd5c225.js"),
    require("./sub-common/d53773604a2ead120e9f172c237d184a.js"),
    require("./sub-common/4b28351abb499c8d6bb5f34d72677130.js"),
    require("./sub-common/133a47693433ea1cde9e1b22b9bbe483.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [13770],
      {
        51918: function (e, t, a) {
          var n,
            i,
            c,
            s,
            r,
            o = a(32180),
            l = a(57042),
            d = a(24460),
            u = a(81876),
            h = a(21867),
            p = a(86066),
            g = a(45023),
            f = a(298),
            m = a(79301),
            _ = a(95308),
            b = a(92954),
            w = a.n(b),
            Z = a(52500),
            v = a(71515),
            N = a(79295),
            I = a(79792),
            S = a(5050),
            y = a(18783),
            k = a(81957),
            T = a(48792),
            V = a.n(T),
            A = a(3205),
            x = a(13025),
            P = a(49984),
            C = a(10741),
            B = a(14469),
            M = a(894),
            R = a(9153),
            L = a(94190),
            D = a(79910),
            E = a(45307),
            X = a(61896),
            z = a(81954),
            F = a(49120),
            U = a(4102),
            O = a(477),
            K = a(86977),
            G = a(2657),
            j = a(92001),
            W = a(65573),
            q = a(74921),
            H = a(48813),
            J = ["children", "className"],
            Y = function (e) {
              var t = e.children,
                a = e.className,
                n = void 0 === a ? "" : a,
                i = (0, q.Z)(e, J);
              return (0, H.tZ)(
                v.View,
                (0, f.Z)(
                  (0, f.Z)({ className: " _u _q _s _t _r _i _k " + n }, i),
                  {},
                  { children: t }
                )
              );
            },
            Q = {
              assistanceModel: {
                state: {
                  isSelf: !1,
                  accelerateInfo: {
                    accelerateCode: -1,
                    accelerateDesc: "",
                    data: "",
                    videoUrl: "",
                  },
                  accelerateTaskInfo: null,
                  accelerateSuccessToast: null,
                  accelerateSuccessToastWithAdv: null,
                  accelerateUserTypeAndJumpUrl: null,
                  headSpeedInfo: {
                    notSelfSubTitle: "",
                    notSelfTitle: "",
                    subTitle: "",
                    title: "",
                  },
                  accelerateStatusInfo: { statusCode: -1, statusDesc: "" },
                  accelerateRuleDesc: { ruleDescList: [], title: "" },
                  goldFingerInfo: null,
                  unlockRightArea: {
                    unlockRights: null,
                    unlockRightToast: null,
                  },
                  speedChangeToast: null,
                  fivePersonAccelerateModule: null,
                  identityPackage: null,
                },
                reducers: {
                  setIsSelf: function (e, t) {
                    return (0, f.Z)((0, f.Z)({}, e), {}, { isSelf: t });
                  },
                  setAccelerateInfo: function (e, t) {
                    return (0, f.Z)(
                      (0, f.Z)({}, e),
                      {},
                      {
                        accelerateInfo: (0, f.Z)(
                          (0, f.Z)({}, e.accelerateInfo),
                          t
                        ),
                      }
                    );
                  },
                  setAccelerateTaskInfo: function (e, t) {
                    return (0, f.Z)(
                      (0, f.Z)({}, e),
                      {},
                      { accelerateTaskInfo: t }
                    );
                  },
                  setHeadSpeedInfo: function (e, t) {
                    return (0, f.Z)(
                      (0, f.Z)({}, e),
                      {},
                      {
                        headSpeedInfo: (0, f.Z)(
                          (0, f.Z)({}, e.headSpeedInfo),
                          t
                        ),
                      }
                    );
                  },
                  setAccelerateStatusInfo: function (e, t) {
                    return (0, f.Z)(
                      (0, f.Z)({}, e),
                      {},
                      { accelerateStatusInfo: t }
                    );
                  },
                  setAccelerateRuleDesc: function (e, t) {
                    return (0, f.Z)(
                      (0, f.Z)({}, e),
                      {},
                      {
                        accelerateRuleDesc: (0, f.Z)(
                          (0, f.Z)({}, e.accelerateRuleDesc),
                          t
                        ),
                      }
                    );
                  },
                  setGoldFingerInfo: function (e, t) {
                    return (0, f.Z)((0, f.Z)({}, e), {}, { goldFingerInfo: t });
                  },
                  setAccelerateSuccessToast: function (e, t) {
                    return (0, f.Z)(
                      (0, f.Z)({}, e),
                      {},
                      { accelerateSuccessToast: t }
                    );
                  },
                  setAccelerateSuccessToastWithAdv: function (e, t) {
                    return (0, f.Z)(
                      (0, f.Z)({}, e),
                      {},
                      { accelerateSuccessToastWithAdv: t }
                    );
                  },
                  setAccelerateUserTypeAndJumpUrl: function (e, t) {
                    return (0, f.Z)(
                      (0, f.Z)({}, e),
                      {},
                      { accelerateUserTypeAndJumpUrl: t }
                    );
                  },
                  setUnlockRightArea: function (e, t) {
                    return (0, f.Z)(
                      (0, f.Z)({}, e),
                      {},
                      { unlockRightArea: t }
                    );
                  },
                  setSpeedChangeToast: function (e, t) {
                    return (0, f.Z)(
                      (0, f.Z)({}, e),
                      {},
                      { speedChangeToast: t }
                    );
                  },
                  setFivePersonAccelerateModule: function (e, t) {
                    return (0, f.Z)(
                      (0, f.Z)({}, e),
                      {},
                      { fivePersonAccelerateModule: t }
                    );
                  },
                  setIdentityPackage: function (e, t) {
                    return (0, f.Z)(
                      (0, f.Z)({}, e),
                      {},
                      { identityPackage: t }
                    );
                  },
                },
              },
              orderModel: {
                state: {
                  grabOrderInfo: {
                    arriveStation: "",
                    departureStation: "",
                    grabStatus: -1,
                    trainNum: "",
                  },
                  grabSpeedLevelInfo: {
                    defaultSpeedLevelList: [],
                    diffPackageNum: 0,
                    speedLevelDesc: "",
                    speedLevelName: "",
                    virtualPackageLevel: 0,
                  },
                },
                reducers: {
                  setGrabOrderInfo: function (e, t) {
                    return (0, f.Z)(
                      (0, f.Z)({}, e),
                      {},
                      {
                        grabOrderInfo: (0, f.Z)(
                          (0, f.Z)({}, e.grabOrderInfo),
                          t
                        ),
                      }
                    );
                  },
                  setGrabSpeedLevelInfo: function (e, t) {
                    return (0, f.Z)(
                      (0, f.Z)({}, e),
                      {},
                      {
                        grabSpeedLevelInfo: (0, f.Z)(
                          (0, f.Z)({}, e.grabSpeedLevelInfo),
                          t
                        ),
                      }
                    );
                  },
                },
              },
              pageModel: {
                state: {
                  isLogin: !1,
                  popCode: "",
                  pageLoading: !0,
                  subscribeInfo: {
                    showSubscribeMask: !1,
                    subscribeModalInfo: {},
                    showRobSubscription: !1,
                    showRobSubscriptionInfo: {},
                    needSubscribeSeckillList: [],
                    toSubscribeIds: [],
                  },
                  configData: {},
                  shareInfo: {
                    shareAim: "",
                    shareIndex: 0,
                    isShareGZH: !1,
                    shareInfoList: [],
                    customizeTagList: [],
                  },
                  shareImageInfo: { title: "", desc: "", path: "" },
                  multiplyShareImageInfo: { title: "", desc: "", path: "" },
                  showCount: 0,
                  tabsInfo: {
                    multiplyGrabTabs: [],
                    tabCode: "single-grab-tab",
                  },
                  isCanFriendSpeed: !1,
                  toastCodeList: [],
                },
                reducers: {
                  setIsLogin: function (e, t) {
                    return (0, f.Z)((0, f.Z)({}, e), {}, { isLogin: t });
                  },
                  setPopCode: function (e, t) {
                    return (0, f.Z)((0, f.Z)({}, e), {}, { popCode: t });
                  },
                  setToastCodeList: function (e, t) {
                    return (0, f.Z)((0, f.Z)({}, e), {}, { toastCodeList: t });
                  },
                  setPageLoading: function (e, t) {
                    return (0, f.Z)((0, f.Z)({}, e), {}, { pageLoading: t });
                  },
                  setSubscribeInfo: function (e, t) {
                    return (0, f.Z)(
                      (0, f.Z)({}, e),
                      {},
                      {
                        subscribeInfo: (0, f.Z)(
                          (0, f.Z)({}, e.subscribeInfo),
                          t
                        ),
                      }
                    );
                  },
                  setConfigData: function (e, t) {
                    return (0, f.Z)(
                      (0, f.Z)({}, e),
                      {},
                      { configData: (0, f.Z)((0, f.Z)({}, e.configData), t) }
                    );
                  },
                  setShareInfo: function (e, t) {
                    return (0, f.Z)(
                      (0, f.Z)({}, e),
                      {},
                      { shareInfo: (0, f.Z)((0, f.Z)({}, e.shareInfo), t) }
                    );
                  },
                  setShareImageInfo: function (e, t) {
                    return (0, f.Z)(
                      (0, f.Z)({}, e),
                      {},
                      {
                        shareImageInfo: (0, f.Z)(
                          (0, f.Z)({}, e.shareImageInfo),
                          t
                        ),
                      }
                    );
                  },
                  setMultiplyShareImageInfo: function (e, t) {
                    return (0, f.Z)(
                      (0, f.Z)({}, e),
                      {},
                      {
                        multiplyShareImageInfo: (0, f.Z)(
                          (0, f.Z)({}, e.multiplyShareImageInfo),
                          t
                        ),
                      }
                    );
                  },
                  setShowCount: function (e, t) {
                    return (0, f.Z)((0, f.Z)({}, e), {}, { showCount: t });
                  },
                  setTabsInfo: function (e, t) {
                    return (0, f.Z)(
                      (0, f.Z)({}, e),
                      {},
                      { tabsInfo: (0, f.Z)((0, f.Z)({}, e.tabsInfo), t) }
                    );
                  },
                  setIsCanFriendSpeed: function (e, t) {
                    return (0, f.Z)(
                      (0, f.Z)({}, e),
                      {},
                      { isCanFriendSpeed: t }
                    );
                  },
                },
              },
              marketModel: {
                state: {
                  subscribeInfo: {
                    toSubscribeIdsBeforeAcceRate: [],
                    needSubBeforeAcceRate: !1,
                    isShowPeakRemind: !1,
                    isShowRobResultBox: !1,
                    subscribeIdReady: !1,
                    subscribeModalInfo: null,
                  },
                  moreTravelPlans: null,
                  shareInfo: {
                    isShareGZH: !1,
                    shareInfoList: [],
                    customizeTagList: [],
                  },
                  shareImageInfo: { title: "", desc: "", path: "" },
                },
                reducers: {
                  setSubscribeInfo: function (e, t) {
                    return (0, f.Z)(
                      (0, f.Z)({}, e),
                      {},
                      {
                        subscribeInfo: (0, f.Z)(
                          (0, f.Z)({}, e.subscribeInfo),
                          t
                        ),
                      }
                    );
                  },
                  setMoreTravelPlans: function (e, t) {
                    return (0, f.Z)(
                      (0, f.Z)({}, e),
                      {},
                      { moreTravelPlans: t }
                    );
                  },
                  setShareInfo: function (e, t) {
                    return (0, f.Z)(
                      (0, f.Z)({}, e),
                      {},
                      { shareInfo: (0, f.Z)((0, f.Z)({}, e.shareInfo), t) }
                    );
                  },
                  setShareImageInfo: function (e, t) {
                    return (0, f.Z)((0, f.Z)({}, e), {}, { shareImageInfo: t });
                  },
                },
              },
              octopusModel: {
                state: { toasts: [], notices: [], areas: [] },
                reducers: {
                  setOctopus: function (e, t) {
                    var a = t.notices,
                      n = t.toasts,
                      i = t.areas;
                    return (0, f.Z)(
                      (0, f.Z)({}, e),
                      {},
                      { notices: a, toasts: n, areas: i }
                    );
                  },
                },
              },
            },
            $ = (0, a(39841).M)({ models: Q }),
            ee = a(90129),
            te = a(25949),
            ae = a.n(te),
            ne = function (e, t) {
              var a = {};
              return {
                show: function (n, i) {
                  var c,
                    s =
                      i ||
                      (null === (c = w().getCurrentInstance().page) ||
                      void 0 === c
                        ? void 0
                        : c.$taroPath) ||
                      "";
                  if (s) {
                    if (a[s]) return void a[s].show(n);
                    var r = o.document.getElementById(s),
                      l = t(function (e) {
                        null == e || e.show(n), (a[s] = e);
                      }),
                      d = "".concat(s, "-").concat(e),
                      u = o.document.getElementById(d);
                    if (!u)
                      ((u = o.document.createElement("view")).id = d),
                        r.appendChild(u);
                    Z.default.render(l, u);
                  }
                },
                close: function (e) {
                  var t,
                    n =
                      e ||
                      (null === (t = w().getCurrentInstance().page) ||
                      void 0 === t
                        ? void 0
                        : t.$taroPath) ||
                      "";
                  a[n] && a[n].close();
                },
              };
            },
            ie = ["className", "icon", "message"],
            ce = (0, Z.forwardRef)(function (e, t) {
              var a = (0, Z.useState)(null),
                n = (0, ee.Z)(a, 2),
                i = n[0],
                c = n[1],
                s = (0, Z.useRef)(null);
              if (
                ((0, Z.useImperativeHandle)(
                  t,
                  function () {
                    return {
                      show: function (e) {
                        c("string" == typeof e ? { message: e } : e);
                      },
                      close: function () {
                        c(null);
                      },
                    };
                  },
                  []
                ),
                (0, Z.useEffect)(
                  function () {
                    i &&
                      (s.current && clearTimeout(s.current),
                      (s.current = setTimeout(function () {
                        var e;
                        c(null),
                          null === (e = i.onClose) || void 0 === e || e.call(i),
                          (s.current = null);
                      }, i.duration || 2e3)));
                  },
                  [i]
                ),
                !i)
              )
                return null;
              var r = i.className,
                o = i.icon,
                l = i.message,
                d = (0, q.Z)(i, ie);
              return (0,
              H.BX)(v.View, (0, f.Z)((0, f.Z)({ className: ae()("ToastBox", r) }, d), {}, { children: [o && (0, H.tZ)(v.Image, { className: "ToastBoxIcon", src: o }), (0, H.tZ)(v.View, { className: "ToastBoxMessage", children: l })] }));
            }),
            se = ne("Toast", function (e) {
              return (0, H.tZ)(ce, { ref: e });
            }),
            re = a(84926);
          (function (e) {
            (e[(e.VIDEO_WX_ACCE_SCENE = 507)] = "VIDEO_WX_ACCE_SCENE"),
              (e[(e.NORMAL_ACCE_SCENE = 100)] = "NORMAL_ACCE_SCENE"),
              (e[(e.GOLD_FINGER_ACCE_SCENE = 400)] = "GOLD_FINGER_ACCE_SCENE");
          })(n || (n = {})),
            (function (e) {
              (e[(e.WATCH_VIDEO_ACCE_SCENE = 300)] = "WATCH_VIDEO_ACCE_SCENE"),
                (e[(e.BROWSE_HOTEL_ACCE_SCENE = 301)] =
                  "BROWSE_HOTEL_ACCE_SCENE");
            })(i || (i = {})),
            (function (e) {
              (e.SpeedUpTips = "SpeedUpTips"),
                (e.SpecialGrabPop = "SpecialGrabPop");
            })(c || (c = {})),
            (function (e) {
              (e.AcceSuccessDrawer = "AcceSuccessDrawer"),
                (e.SubMask = "SubMask"),
                (e.RuleDrawer = "RuleDrawer"),
                (e.CollectMiniApp = "CollectMiniApp"),
                (e.GoldFingerPopup = "GoldFingerPopup"),
                (e.WatchVideoPop = "WatchVideoPop"),
                (e.SubscribeModalWrapper = "SubscribeModalWrapper");
            })(s || (s = {})),
            (function (e) {
              (e.wxChannelTestCode = "wxChannelTestCode"),
                (e.weChannelSpeedUpPage = "weChannelSpeedUpPage");
            })(r || (r = {}));
          var oe,
            le = O.Z.TMPIDS_NORMAL_INFO,
            de = {
              wx76dcd806f382ec8e: "2ISOORjxL4aYKi3ciD86d1ZJdzr2y-JExTC5u1dGXpU",
              wx45dff5234240ad90: "fIv4pnJAwo2jRWC6Gq50VV7uBs8xG3IyvCcheDtvdVo",
              wx78a2429469c8c120: "TlXuCWCm5VuqM4LCvlY6L_RsT-wokvqumJnloY3Nwnk",
              wx2a123137e10cae35: "6zgVatxn5HzDGyDKvffUU7Z4eTVckQXFAyV-mUrkM38",
              wx41109903d3bb4f63: "pA7h7P9sn9dSoy8KfbZcbj52iUvq0NkL6rRysontu0s",
              wxbd33b0cfa7cda030: "y-bguzO1yYE3o-2iwQYSPUYYZmfbg76p12btzIcK4eI",
              wx4efc89b936baea18: "2LmM-LFQhkjMMc5JpSQ6EjIPAYrZhyH3ilJV0_tkHAY",
            }[I.default.appId],
            ue = O.Z.TRAIN_BUY_REMIND_ID,
            he = O.Z.ACTIVITY_REMIND_ID,
            pe = function () {
              var e = [de, ue, he];
              D.Z.getSubscribe(e)
                .then(function (e) {
                  if (
                    (console.log("getSubscribeWorkable", (0, K.pj)()),
                    (0, K.pj)())
                  ) {
                    if (
                      (console.log("******getSubscribeInfo", e),
                      !e.mainSwitch ||
                        !(
                          Array.isArray(e.unKnownList) &&
                          e.unKnownList.length > 0
                        ))
                    )
                      return (
                        console.warn("***** 订阅开关:", e.mainSwitch),
                        void console.warn(
                          "***** 订阅unKnownList:",
                          e.unKnownList
                        )
                      );
                    var t = e.unKnownList || [],
                      a = t.indexOf(ue) > -1,
                      n = t.indexOf(de) > -1;
                    console.warn("**** toSubscribeIdsBeforeAcceRate:", t),
                      console.warn("**** isShowPeakRemind:", a),
                      console.warn("**** isShowRobResultBox:", n),
                      t &&
                        $.getDispatch().marketModel.setSubscribeInfo({
                          toSubscribeIdsBeforeAcceRate: t,
                          needSubBeforeAcceRate: t.length > 0,
                          isShowPeakRemind: a,
                          isShowRobResultBox: n,
                          subscribeIdReady: !0,
                        });
                  }
                })
                .catch(function () {
                  $.getDispatch().marketModel.setSubscribeInfo({
                    subscribeIdReady: !0,
                  });
                });
            },
            ge = function () {
              if (w().createRewardedVideoAd) {
                var e = I.default.isTieyou
                    ? "adunit-da4f0bf4850b41f1"
                    : "adunit-a9ec5bfe86287b38",
                  t = w().createRewardedVideoAd({ adUnitId: e });
                ($.getPage().rewardedVideoAd = t),
                  t.onLoad(function () {
                    return console.log(
                      " ========> 激励视频 广告加载成功 =========>"
                    );
                  }),
                  t.onError(function (e) {
                    return console.log("激励视频 onError =======> ", e);
                  }),
                  t.onClose(function (e) {
                    e && e.isEnded
                      ? console.log("用户是在视频播放完以后关闭的视频")
                      : console.log("用户在视频播放过程中关闭了视频");
                  });
              }
            },
            fe = function () {
              Ue(s.SubMask);
              var e =
                $.getState().marketModel.subscribeInfo
                  .toSubscribeIdsBeforeAcceRate;
              return new Promise(function (t) {
                D.Z.doSubscribe(e, "Robshare_accelerate")
                  .then(function () {
                    console.warn("授权订阅 确定"),
                      Fe(),
                      $.getDispatch().marketModel.setSubscribeInfo({
                        toSubscribeIdsBeforeAcceRate: [],
                      }),
                      t(!0);
                  })
                  .catch(function () {
                    console.warn("授权订阅 取消或者失败"),
                      w().showToast({
                        title: "抱歉，订阅消息授权失败",
                        icon: "none",
                        duration: 1e3,
                      }),
                      Fe(),
                      t(!1);
                  });
              });
            },
            me = (function () {
              var e = (0, _.Z)(
                (0, m.Z)().mark(function e() {
                  var t, a, n, i;
                  return (0, m.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (t = w().getStorageSync("USERINFONEW") || {}),
                              (a = t.nickName || "神秘用户"),
                              (n =
                                t.avatarUrl ||
                                "https://youimg1.c-ctrip.com/target/10090v000000k3bfv65E1_R_640_10000_Q90.jpg"),
                              (i = {
                                photoUrl: n,
                                name: a,
                                openId: y.ZP.openid,
                              }),
                              (e.prev = 4),
                              (e.next = 7),
                              (0, C.ryV)(i)
                            );
                          case 7:
                            e.next = 12;
                            break;
                          case 9:
                            (e.prev = 9),
                              (e.t0 = e.catch(4)),
                              console.log(e.t0);
                          case 12:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[4, 9]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            _e = (function () {
              var e = (0, _.Z)(
                (0, m.Z)().mark(function e(t) {
                  var a, n;
                  return (0, m.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (a = t.grabOrderInfo),
                              (e.next = 4),
                              (0, C.ZEE)({
                                shareChannel: 1,
                                toStation:
                                  (null == a ? void 0 : a.arriveStation) || "",
                                ticketType:
                                  9 === (null == a ? void 0 : a.grabStatus)
                                    ? "pre"
                                    : "",
                                shareKey: $.getPage().shareKey || "",
                              })
                            );
                          case 4:
                            (n = e.sent) &&
                              1 === n.resultCode &&
                              $.getDispatch().marketModel.setShareInfo({
                                shareInfoList: n.shareInfoList,
                                customizeTagList: n.customizeTagList,
                              }),
                              console.log("getCustomizeShareInfoPromise", n),
                              (e.next = 12);
                            break;
                          case 9:
                            (e.prev = 9),
                              (e.t0 = e.catch(0)),
                              console.log(e.t0);
                          case 12:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 9]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            be = (function () {
              var e = (0, _.Z)(
                (0, m.Z)().mark(function e() {
                  return (0, m.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            (0, C._0V)(
                              {
                                shareType: "weixin",
                                shareKey: $.getPage().shareKey,
                              },
                              { checkFrameworkLogin: !1 }
                            )
                          );
                        case 2:
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
            we = function () {
              if (!(0, K.JO)()) {
                var e,
                  t,
                  a,
                  n = $.getState().orderModel.grabOrderInfo,
                  i = $.getState().marketModel.shareInfo.shareInfoList,
                  c = (function () {
                    var e = $.getState().marketModel.shareInfo.customizeTagList,
                      t = null;
                    if (e && e.length > 0) {
                      var a,
                        n,
                        i =
                          (null === (a = $.getPage()) ||
                          void 0 === a ||
                          null === (n = a.options) ||
                          void 0 === n
                            ? void 0
                            : n.tagCode) || "";
                      (t = e.find(function (e) {
                        return e.tagCode == i;
                      })) || (t = e[0]);
                    }
                    return t;
                  })(),
                  s = (null == c ? void 0 : c.tag) || n.arriveStation,
                  r = i.find(function (e) {
                    return "pyq" == e.channel;
                  }),
                  o =
                    (null == r || null === (e = r.picContent) || void 0 === e
                      ? void 0
                      : e.underDesc) || "",
                  l =
                    (null == r ||
                    null === (t = r.picContent) ||
                    void 0 === t ||
                    null === (a = t.title) ||
                    void 0 === a
                      ? void 0
                      : a.replace("{tagName}", s)) || "",
                  d = (function () {
                    var e = N.Z.getUnionData(),
                      t = $.getState().orderModel.grabOrderInfo.arriveStation;
                    return (
                      be(),
                      (0, re.fT)({
                        shareKey: $.getPage().shareKey,
                        arriveStation: t,
                        showArriveStation: t,
                        allianceid: e.aid,
                        sid: e.sid,
                        shareImgs: [],
                        type: "weixin",
                        isShareGZH: $.getPage().isShareGZH,
                        pageKey: $.getPage().pageKey,
                      })
                    );
                  })();
                $.getDispatch().marketModel.setShareImageInfo({
                  title: l,
                  desc: o,
                  path: null != d && d.path ? d.path.slice(1) : "",
                });
              }
            },
            Ze = function (e) {
              var t = 1 === (null == e ? void 0 : e.orderUser),
                a = $.getPage().shareKey;
              if (t && a) {
                var n = L.ES.getAttr(a) || {};
                if (!n.hasSubscribeModal) {
                  var i = le.map(function (e) {
                    return e.tempId;
                  });
                  console.log("tempids", i),
                    D.Z.getSubscribe(i)
                      .then(function (e) {
                        var t = e.mainSwitch,
                          i = e.unKnownList;
                        console.log("getSubscribegetSubscribe", t, i),
                          $.getDispatch().marketModel.setSubscribeInfo({
                            subscribeModalInfo: {
                              title: "开启高峰期购票提醒",
                              desc: "担心忘记提前预约抢票？高峰期自动提前提示您下单",
                              subList: le.slice(0, 3),
                              sourceCode: "RobshareMyself_Popup",
                            },
                          }),
                          (n.hasSubscribeModal = !0),
                          L.ES.setAttr(a, n);
                      })
                      .catch(function (e) {
                        console.log(e);
                      });
                }
              }
            },
            ve = function () {
              var e = [ue];
              D.Z.doSubscribe(e, "Robshare_Module")
                .then(function () {
                  pe();
                })
                .catch(function (e) {
                  console.warn("订阅高峰购票提醒失败:", e), pe();
                });
            },
            Ne = function () {
              var e =
                  $.getState().assistanceModel.accelerateInfo.accelerateCode,
                t = $.getPage().shareKey;
              if (y.ZP.isLogin && -1 === e) {
                var a = { orderNumber: t };
                return (0, C.oAG)(a, { checkFrameworkLogin: !1 }).then(
                  function (e) {
                    if (1 === (null == e ? void 0 : e.resultCode)) {
                      var t = e.accelerateCode,
                        a = e.accelerateDesc,
                        i = e.data;
                      if (
                        ($.getDispatch().assistanceModel.setAccelerateInfo({
                          accelerateCode: t,
                          accelerateDesc: a,
                          data: JSON.parse(i || "{}"),
                        }),
                        t === n.VIDEO_WX_ACCE_SCENE)
                      ) {
                        var c,
                          s = JSON.parse(e.data || "{}"),
                          r = "";
                        1 === (null == s ? void 0 : s.resultCode) &&
                          (r =
                            (null === (c = s.data) || void 0 === c
                              ? void 0
                              : c.url) || ""),
                          $.getDispatch().assistanceModel.setAccelerateInfo({
                            videoUrl: r,
                          });
                      }
                    } else
                      -1 === (null == e ? void 0 : e.resultCode)
                        ? console.warn(
                            "queryAccelerateTypeInfoPromise wrong: 可能未登录"
                          )
                        : console.warn(
                            "queryAccelerateTypeInfoPromise wrong:",
                            e
                          );
                  }
                );
              }
            },
            Ie = function () {
              var e = w().getStorageSync("USERINFONEW") || {},
                t = e.nickName || "神秘用户",
                a =
                  e.avatarUrl ||
                  "https://youimg1.c-ctrip.com/target/10090v000000k3bfv65E1_R_640_10000_Q90.jpg",
                n = {
                  shareKey: $.getPage().shareKey,
                  friendPhotoUrl: a,
                  friendOpenId: y.ZP.openid,
                  friendName: t,
                  activityType: 1,
                };
              try {
                (0, C.fj7)(n);
              } catch (e) {
                console.log(e);
              }
            },
            Se = (function () {
              var e = (0, _.Z)(
                (0, m.Z)().mark(function e() {
                  var t, a, n, i, c, s, r, o;
                  return (0, m.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              ((t = {
                                shareKey: $.getPage().shareKey,
                                openId: y.ZP.openid,
                                reqTime: "" + new Date().getTime(),
                              }).sign = (0, re.nF)(t)),
                              (e.next = 5),
                              (0, C.kCv)(t, { checkFrameworkLogin: !1 })
                            );
                          case 5:
                            (a = e.sent) &&
                              1 === a.resultCode &&
                              (console.log(
                                "+++++fetch orderShareRecommend: ",
                                a
                              ),
                              (n = a.accelerateTaskInfo),
                              (i = a.accelerateSuccessToast),
                              (c = a.accelerateSuccessToastWithAdv),
                              (s = a.accelerateUserTypeAndJumpUrl),
                              (r = a.moreTravelPlans),
                              (o = a.identityPackage),
                              $.getDispatch().marketModel.setMoreTravelPlans(r),
                              $.getDispatch().assistanceModel.setAccelerateTaskInfo(
                                n
                              ),
                              $.getDispatch().assistanceModel.setAccelerateSuccessToast(
                                i
                              ),
                              $.getDispatch().assistanceModel.setAccelerateSuccessToastWithAdv(
                                c
                              ),
                              $.getDispatch().assistanceModel.setAccelerateUserTypeAndJumpUrl(
                                s
                              ),
                              $.getDispatch().assistanceModel.setIdentityPackage(
                                o
                              )),
                              (e.next = 12);
                            break;
                          case 9:
                            (e.prev = 9),
                              (e.t0 = e.catch(0)),
                              console.error("加速页获取推荐信息出错:", e.t0);
                          case 12:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 9]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            ye = (function () {
              var e = (0, _.Z)(
                (0, m.Z)().mark(function e(t) {
                  var a, n, i, c;
                  return (0, m.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (a = w().getStorageSync("USERINFONEW") || {}),
                              ((n = {
                                shareKey: $.getPage().shareKey,
                                reqTime: "" + new Date().getTime(),
                                openId: y.ZP.openid,
                                accelerateUserInfo: {
                                  openId: y.ZP.openid,
                                  wechatNickName: a.nickName
                                    ? encodeURIComponent(a.nickName)
                                    : "神秘用户",
                                  wechatPhoto:
                                    a.avatarUrl ||
                                    "https://youimg1.c-ctrip.com/target/10090v000000k3bfv65E1_R_640_10000_Q90.jpg",
                                },
                                accelerateScene: t,
                                accelerateSource: 0,
                                accelerateGroupId: "",
                              }).sign = (0, re.nF)(n)),
                              (i = C.rrE),
                              (e.next = 7),
                              i(n)
                            );
                          case 7:
                            if (
                              ((c = e.sent),
                              console.log("do accelerate res:", c),
                              !c || 1 !== c.resultCode)
                            ) {
                              e.next = 14;
                              break;
                            }
                            return (
                              ze(),
                              e.abrupt("return", {
                                accelerateActionStatus: "success",
                                accelerateActionRes: c,
                              })
                            );
                          case 14:
                            return (
                              se.show({
                                message: c.resultMessage || "助力失败",
                                icon: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/23_07/zhuli/icon_24_smiling%20face.webp",
                              }),
                              e.abrupt("return", {
                                accelerateActionStatus: "fail",
                                accelerateActionRes: c,
                              })
                            );
                          case 16:
                            e.next = 23;
                            break;
                          case 18:
                            return (
                              (e.prev = 18),
                              (e.t0 = e.catch(0)),
                              se.show({
                                message: "助力失败",
                                icon: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/23_07/zhuli/icon_24_smiling%20face.webp",
                              }),
                              console.error("加速出错:", e.t0),
                              e.abrupt("return", {
                                accelerateActionStatus: "unkownError",
                                accelerateActionRes: e.t0,
                              })
                            );
                          case 23:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 18]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            ke = (function () {
              var e = (0, _.Z)(
                (0, m.Z)().mark(function e(t) {
                  return (0, m.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            (console.log("helpAcce:", t),
                            +t !== i.BROWSE_HOTEL_ACCE_SCENE)
                          ) {
                            e.next = 6;
                            break;
                          }
                          return (e.next = 4), ye(i.BROWSE_HOTEL_ACCE_SCENE);
                        case 4:
                          try {
                            $.ubtTrace(190667, {
                              shareKey: $.getPage().shareKey,
                              openId: y.ZP.openid,
                            });
                          } catch (e) {
                            console.log(e);
                          }
                          $.navigateTo({
                            url: "/pages/hotel/list/list?data=".concat(
                              encodeURIComponent(
                                JSON.stringify({
                                  queryModel: { cityId: "2", cityName: "上海" },
                                  fromPage: "wechat_train_robshare_renwuliulan",
                                })
                              )
                            ),
                          });
                        case 6:
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
            Te = function () {
              Ue(s.GoldFingerPopup);
            },
            Ve = (function () {
              var e = (0, _.Z)(
                (0, m.Z)().mark(function e() {
                  var t, a, n;
                  return (0, m.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ((t =
                              $.getState().marketModel.subscribeInfo
                                .toSubscribeIdsBeforeAcceRate),
                            (a =
                              $.getState().assistanceModel.accelerateInfo
                                .accelerateCode),
                            !((null == t ? void 0 : t.length) > 0))
                          ) {
                            e.next = 8;
                            break;
                          }
                          return (e.next = 5), fe();
                        case 5:
                          if (e.sent) {
                            e.next = 8;
                            break;
                          }
                          return e.abrupt("return");
                        case 8:
                          if (100 !== a) {
                            e.next = 16;
                            break;
                          }
                          return (e.next = 11), ye(a);
                        case 11:
                          (n = e.sent),
                            "success" === n.accelerateActionStatus && Ae(),
                            (e.next = 17);
                          break;
                        case 16:
                          (0, F.showToast)("网络异常～");
                        case 17:
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
            Ae = function () {
              var e,
                t =
                  (null ===
                    (e =
                      $.getState().assistanceModel
                        .accelerateUserTypeAndJumpUrl) || void 0 === e
                    ? void 0
                    : e.jumpUrl) || "";
              me(), t ? D.Z.commonNavigator(t) : Ue(s.AcceSuccessDrawer);
            },
            xe = function (e) {
              var t = $.getState().octopusModel.areas,
                a = (void 0 === t ? [] : t).find(function (t) {
                  return t.areaCode === e;
                }),
                n = (function (e) {
                  try {
                    return "string" != typeof e ? e : JSON.parse(e);
                  } catch (t) {
                    return e;
                  }
                })(null == a ? void 0 : a.areaJson);
              return (
                a && (0, f.Z)((0, f.Z)({}, a), {}, { _jsonInfo: n || null })
              );
            },
            Pe = (function () {
              var e = (0, _.Z)(
                (0, m.Z)().mark(function e() {
                  var t;
                  return (0, m.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              (0, C.SON)({ fromSource: 10 })
                            );
                          case 3:
                            return (
                              (t = e.sent),
                              console.log(t, "octopusResponse"),
                              e.abrupt("return", t)
                            );
                          case 8:
                            return (
                              (e.prev = 8),
                              (e.t0 = e.catch(0)),
                              e.abrupt("return", null)
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
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            Ce = (function () {
              var e = (0, _.Z)(
                (0, m.Z)().mark(function e(t) {
                  var a, n, i, c, s, r, o;
                  return (0, m.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          (n = (a = t || {}).notices),
                            (i = void 0 === n ? [] : n),
                            (c = a.toasts),
                            (s = void 0 === c ? [] : c),
                            (r = a.areas),
                            (o = void 0 === r ? [] : r),
                            $.getDispatch().octopusModel.setOctopus({
                              notices: i,
                              toasts: s,
                              areas: o,
                            });
                        case 2:
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
            Be = {
              home: "回家",
              faraway: "去远方",
              school: "去学校",
              heart: "去你心里",
            },
            Me = function () {
              return (0, y.M9)().then(
                function () {
                  $.getPage().canGetMobile = !0;
                },
                function () {
                  $.getPage().canGetMobile = !1;
                }
              );
            },
            Re = function () {
              var e = $.getPage();
              w().showLoading();
              var t = "";
              return (0, x.cq)({
                key: e.shortKey,
                scene: R.ZP.generateParamsScene,
              })
                .then(function (a) {
                  if (
                    (console.log("get Generate Param success"),
                    1 === a.resultCode)
                  ) {
                    var n = D.Z.getUrlParams(a.param || "") || {};
                    (t = n.scene),
                      (e.shareKey = decodeURIComponent(n.scene || "")),
                      (e.type = n.type || ""),
                      (e.showArriveStation = Be[n.tagCode] || "");
                  }
                })
                .catch(function (e) {
                  console.log("get Generate Param fail:", e),
                    $.ubtDevTrace(182697, {
                      cid: y.ZP.cid || "",
                      userName: y.ZP.userName || "",
                      decodeParam: t || "",
                      func: "getGenerateParam",
                    });
                })
                .finally(function () {
                  try {
                    w().hideLoading();
                  } catch (e) {}
                });
            },
            Le = (function () {
              var e = (0, _.Z)(
                (0, m.Z)().mark(function e() {
                  var t,
                    a,
                    n,
                    i,
                    c,
                    s,
                    r,
                    o,
                    l,
                    d,
                    u,
                    h,
                    p,
                    g,
                    f = arguments;
                  return (0, m.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            f.length > 0 && void 0 !== f[0] && f[0],
                            ((t = {
                              shareKey: $.getPage().shareKey,
                              openId: y.ZP.openid,
                              reqTime: "" + new Date().getTime(),
                            }).sign = (0, re.nF)(t)),
                            (e.next = 5),
                            (0, C.k4D)(t, { checkFrameworkLogin: !1 })
                          );
                        case 5:
                          if (!(a = e.sent) || 1 !== a.resultCode) {
                            e.next = 27;
                            break;
                          }
                          return (
                            console.log("+++++fetch orderShareDetail:", a),
                            (n = w().getStorageSync("USERINFONEW") || {}) &&
                              n.nickName,
                            console.log(
                              "设置按钮类型的时候检查是否拿到用户信息:",
                              n,
                              n.nickName
                            ),
                            (i = a.loginStatus),
                            (c = a.headSpeedInfo),
                            (s = a.orderUser),
                            (r = a.accelerateRuleDesc),
                            (o = a.goldFingerInfo),
                            (l = a.grabOrderInfo),
                            (d = a.grabSpeedLevelInfo),
                            (u = a.unlockRightArea),
                            (h = a.speedChangeToast),
                            (p = a.accelerateStatusInfo),
                            (g = a.fivePersonAccelerateModule),
                            $.getDispatch().pageModel.setIsLogin(1 === i),
                            $.getDispatch().assistanceModel.setHeadSpeedInfo(c),
                            $.getDispatch().assistanceModel.setIsSelf(1 === s),
                            $.getDispatch().assistanceModel.setAccelerateRuleDesc(
                              r
                            ),
                            $.getDispatch().assistanceModel.setGoldFingerInfo(
                              o
                            ),
                            $.getDispatch().assistanceModel.setUnlockRightArea(
                              u
                            ),
                            $.getDispatch().assistanceModel.setSpeedChangeToast(
                              h
                            ),
                            $.getDispatch().assistanceModel.setFivePersonAccelerateModule(
                              g
                            ),
                            $.getDispatch().assistanceModel.setAccelerateStatusInfo(
                              p
                            ),
                            l && $.getDispatch().orderModel.setGrabOrderInfo(l),
                            d &&
                              $.getDispatch().orderModel.setGrabSpeedLevelInfo(
                                d
                              ),
                            e.abrupt("return", a)
                          );
                        case 27:
                          console.warn("orderShareDetail wrong:", a);
                        case 28:
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
            De = function (e) {
              var t = $.getPage().shareKey;
              if (t) {
                var a = e.orderUser,
                  n = e.speedChangeToast,
                  i = e.unlockRightArea,
                  r = e.grabSpeedLevelInfo,
                  o = e.accelerateInfo,
                  l = e.accelerateStatusInfo;
                if (![200, 205].includes(null == l ? void 0 : l.statusCode))
                  if (1 === a) {
                    var d,
                      u = o || {},
                      h = u.accelerateNum,
                      p = u.acclerateRecord,
                      g = void 0 === p ? [] : p,
                      f = r || {},
                      m = f.speedLevelName,
                      _ = f.defaultSpeedLevelList,
                      b = void 0 === _ ? [] : _,
                      w = L.ES.getAttr(t) || {},
                      Z = g.reduce(function (e, t) {
                        return e + t.virtualPackageLevel;
                      }, 0),
                      v = w.sln,
                      N = w.fpn,
                      I = void 0 === N ? 0 : N,
                      S = w.urt,
                      y = void 0 !== S && S,
                      k = w.an,
                      T = void 0 === k ? 0 : k,
                      V = [];
                    if (
                      ((w.an = h),
                      (w.fpn = Z),
                      (w.sln = m),
                      n &&
                        m &&
                        v !== m &&
                        m !==
                          (null === (d = b[0]) || void 0 === d
                            ? void 0
                            : d.name) &&
                        ($.ubtTrace("TZWFriendSpeed_SpeedPopup_exposure", {
                          PageId: $.getPage().pageId,
                        }),
                        V.push(c.SpeedUpTips)),
                      null != i &&
                        i.unlockRightToast &&
                        !y &&
                        (V.push(c.SpecialGrabPop),
                        $.ubtTrace("TZWFriendSpeed_RightUnlockPopup_exposure", {
                          PageId: $.getPage().pageId,
                        }),
                        (w.urt = !0)),
                      L.ES.setAttr(t, w),
                      V.length)
                    )
                      return void Ke(V);
                    if (h > T)
                      return (
                        L.ES.setAttr(t, w),
                        void se.show({
                          message: "又有"
                            .concat(h - T, "人帮你助力啦！+")
                            .concat(Z - I, "加速包"),
                          icon: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/23_07/zhuli/icon_24_smiling%20face.webp",
                        })
                      );
                  } else {
                    if (
                      $.getState().assistanceModel.accelerateInfo.videoUrl &&
                      [100].includes(null == l ? void 0 : l.statusCode)
                    )
                      return void Ue(s.WatchVideoPop);
                  }
              }
            },
            Ee = (function () {
              var e = (0, _.Z)(
                (0, m.Z)().mark(function e() {
                  var t;
                  return (0, m.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          pe(),
                            ge(),
                            w().showShareMenu &&
                              w().showShareMenu({ withShareTicket: !0 }),
                            D.Z.setLaunchSource({
                              loginSoureType: "wechat",
                              loginSourceName: "xcxjs",
                            }),
                            $.getDispatch().pageModel.setIsLogin(y.ZP.isLogin),
                            (t = $.getPage().shortKey ? [Me(), Re()] : [Me()]),
                            Promise.all(t).then(
                              (0, _.Z)(
                                (0, m.Z)().mark(function e() {
                                  var t, a;
                                  return (0, m.Z)().wrap(function (e) {
                                    for (;;)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          return (
                                            (t = [Le(), Ne()]),
                                            Promise.all(t).then(function (e) {
                                              var t = null == e ? void 0 : e[0];
                                              $.getDispatch().pageModel.setPageLoading(
                                                !1
                                              ),
                                                t &&
                                                  ($.ubtTrace(
                                                    "TZWFriendSpeed_exposure",
                                                    {
                                                      PageId:
                                                        $.getPage().pageId,
                                                      Type:
                                                        1 === t.orderUser
                                                          ? "发起者"
                                                          : "助力者",
                                                    }
                                                  ),
                                                  _e(t),
                                                  Ze(t),
                                                  De(t));
                                            }),
                                            Ie(),
                                            Se(),
                                            we(),
                                            (e.next = 7),
                                            Pe()
                                          );
                                        case 7:
                                          return (
                                            (a = e.sent), (e.next = 10), Ce(a)
                                          );
                                        case 10:
                                        case "end":
                                          return e.stop();
                                      }
                                  }, e);
                                })
                              )
                            );
                        case 7:
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
            Xe = function (e, t, a) {
              $.getDispatch().assistanceModel.setAccelerateInfo({
                accelerateCode: e,
                accelerateDesc: t,
                data: JSON.parse(a || "{}"),
              });
            },
            ze = function () {
              Se(), Le();
            },
            Fe = function () {
              $.getDispatch().pageModel.setPopCode("");
            },
            Ue = function (e) {
              $.getDispatch().pageModel.setPopCode(e);
            },
            Oe = function () {
              $.getDispatch().pageModel.setToastCodeList([]);
            },
            Ke = function (e) {
              $.getDispatch().pageModel.setToastCodeList(e);
            },
            Ge = function (e) {
              D.Z.relaunchHome(e);
            },
            je = (0, W.$j)(function (e) {
              var t = e.assistanceModel;
              return { headSpeedInfo: t.headSpeedInfo, isSelf: t.isSelf };
            })(function (e) {
              var t = e.isSelf,
                a = e.headSpeedInfo;
              return (0, H.BX)(v.View, {
                className: " _p",
                children: [
                  t
                    ? a.title
                      ? (0, H.BX)(v.View, {
                          className: " _i _l _m",
                          children: [
                            (0, H.BX)(v.View, {
                              className: " _Ih",
                              children: [
                                (0, H.tZ)(v.View, {
                                  className: " _Jh _Dh",
                                  children: a.title || "",
                                }),
                                (0, H.tZ)(v.View, {
                                  className: " _R _xh _E _ub",
                                  children: a.subTitle || "",
                                }),
                              ],
                            }),
                            (0, H.tZ)(v.Image, {
                              className: " _Kh _Lh",
                              src: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/23_07/zhuli/img_speed.webp",
                            }),
                          ],
                        })
                      : (0, H.tZ)(H.HY, {})
                    : (0, H.BX)(v.View, {
                        className: " _th",
                        children: [
                          a.notSelfTitle &&
                            (0, H.BX)(v.View, {
                              className: " _i",
                              children: [
                                (0, H.tZ)(v.Image, {
                                  className: " _cc _bc",
                                  src: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/23_07/zhuli/img_touxiang_doudi.webp",
                                }),
                                (0, H.BX)(v.View, {
                                  className: " _uh _i _l",
                                  children: [
                                    (0, H.tZ)(v.Image, {
                                      className: " _Ja _sf _vh",
                                      src: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/23_07/zhuli/qipao_frd_jiao.webp",
                                    }),
                                    (0, H.tZ)(v.View, {
                                      className: " _wh _xh _Ag _yh _zh",
                                      children: a.notSelfTitle || "",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          (0, H.tZ)(v.View, {
                            className: " _ub _Ah _Bh _Ch _Dh",
                            children: a.notSelfSubTitle || "",
                          }),
                        ],
                      }),
                  (0, H.tZ)(v.View, {
                    className: " _u _Eh _t _Fh _Ce _ff _o _Vb _Gh _Hh _qg",
                    onClick: function () {
                      $.ubtTrace("TZWFriendSpeed_RuleButton_click", {
                        PageId: $.getPage().pageId,
                      }),
                        Ue(s.RuleDrawer);
                    },
                    children: "规则",
                  }),
                ],
              });
            }),
            We = a(73689),
            qe = (0, Z.forwardRef)(function (e, t) {
              var a = (0, Z.useState)(null),
                n = (0, ee.Z)(a, 2),
                i = n[0],
                c = n[1],
                s = (0, Z.useCallback)(function () {
                  c(null);
                }, []);
              (0, Z.useImperativeHandle)(
                t,
                function () {
                  return {
                    show: function (e) {
                      c(e);
                    },
                    close: s,
                  };
                },
                []
              );
              var r = i || {},
                o = r.width,
                l = r.height,
                d = r.shareUrl,
                u = r.templateKey,
                h = r.extraParams;
              return (0,
              H.tZ)(We.Z, { visible: !!i, width: o, height: l, shareUrl: d, templateKey: u, extraParams: h, onClose: s });
            }),
            He = ne("GlobalShareImagePop", function (e) {
              return (0, H.tZ)(qe, { ref: e });
            }),
            Je = [
              "children",
              "shareImageInfo",
              "onShareClick",
              "onNoShareClick",
            ],
            Ye = function (e) {
              var t = e.children,
                a = e.shareImageInfo,
                n = e.onShareClick,
                i = void 0 === n ? function () {} : n,
                c = e.onNoShareClick,
                s = void 0 === c ? function () {} : c,
                r = (0, q.Z)(e, Je);
              return (0, H.tZ)(
                v.Button,
                (0, f.Z)(
                  (0, f.Z)(
                    {
                      onClick: (0, K.JO)()
                        ? i
                        : function () {
                            null == s || s(), He.show((0, f.Z)({}, a));
                          },
                      openType: (0, K.JO)() ? "share" : "",
                      style: (0, f.Z)({ padding: 0, margin: 0 }, r.style),
                    },
                    r
                  ),
                  {},
                  { children: t }
                )
              );
            },
            Qe = a(34229),
            $e = (0, W.$j)(function (e) {
              var t = e.orderModel,
                a = e.assistanceModel;
              return {
                grabSpeedLevelInfo: t.grabSpeedLevelInfo,
                isSelf: a.isSelf,
              };
            })(function (e) {
              var t = e.isSelf,
                a = e.grabSpeedLevelInfo,
                n = a || {},
                i = n.defaultSpeedLevelList,
                c = n.diffPackageNum,
                s = n.speedLevelDesc,
                r = (n.speedLevelName, n.virtualPackageLevel);
              console.log(i, "defaultSpeedLevelList");
              for (
                var o = function (e, t) {
                    return 0 === t
                      ? " _u _q _s _Fe"
                      : t === e.length - 1
                      ? " _u _q _t _Di"
                      : " _o _u _q _yi _xi";
                  },
                  l = 0,
                  d = [],
                  u = 0;
                u < i.length;
                u++
              ) {
                if (0 === u && 0 === r) {
                  (l = 0), (d = [i[0].name, i[1].name]);
                  break;
                }
                if (u === i.length - 1) {
                  (l = u), (d = [i[u - 1].name, i[u].name]);
                  break;
                }
                if (r >= i[u].level && r < i[u + 1].level) {
                  (l = u), (d = [i[u].name, i[u + 1].name]);
                  break;
                }
              }
              var h = Z.default.useState(0),
                p = (0, ee.Z)(h, 2),
                g = p[0],
                f = p[1],
                m = Z.default.useState(0),
                _ = (0, ee.Z)(m, 2),
                b = _[0],
                N = _[1],
                I = Z.default.useState(!0),
                S = (0, ee.Z)(I, 2),
                y = S[0],
                k = S[1];
              (0, Z.useEffect)(
                function () {
                  var e = $.getPage().shareKey;
                  if (e) {
                    var t = L.ES.getAttr(e) || {},
                      a = t.showTxt,
                      n = !1;
                    a || ((n = !0), (t.showTxt = !0), L.ES.setAttr(e, t)),
                      w().nextTick(function () {
                        setTimeout(function () {
                          f(n ? 1 : 2);
                        }, 1e3);
                      });
                  }
                },
                [t, r]
              ),
                (0, Z.useEffect)(
                  function () {
                    if (t) {
                      var e = r < 6 ? 6 : r;
                      w().nextTick(function () {
                        setTimeout(function () {
                          N(e);
                        }, 1e3);
                      });
                    }
                  },
                  [t, r]
                ),
                (0, Z.useEffect)(
                  function () {
                    t ||
                      w().nextTick(function () {
                        setTimeout(function () {
                          k(!1);
                        }, 1e3);
                      });
                  },
                  [t]
                ),
                console.log("currentIndex", l, r);
              return (0, H.tZ)(H.HY, {
                children: t
                  ? (function () {
                      if (a)
                        return (0, H.tZ)(v.View, {
                          className: " _hi",
                          children: (0, H.BX)(v.View, {
                            className: " _Vb _p",
                            children: [
                              (0, H.tZ)(v.View, { className: " _ii _vd _ji" }),
                              (0, H.tZ)(v.View, {
                                className: " _u _ki _r _s _t _i _m",
                                children: i.map(function (e, t) {
                                  return (0,
                                  H.tZ)(v.View, { className: " _Bb _dg _vd _hb _p", children: (l + 1 === t || (t === i.length - 1 && l === t)) && (0, H.BX)(v.View, { className: " _tf _Ia _u _ni _oi " + (t === i.length - 1 ? " _qi" : ""), children: [(0, H.tZ)(v.Image, { src: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/23_07/zhuli/qipao_speed_jiao_fenxiang.webp", webp: !0, className: " _tf _pi _u _q _s" }), (0, H.BX)(v.View, { className: " _u _si _Ua _i _l _ti _ui _vi " + (t === i.length - 1 ? " _zi _Ai" : 1 === t ? " _wi _xi" : " _yi _xi"), children: [(0, H.tZ)(v.Image, { src: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/23_07/zhuli/icon_lightning_12_white.webp", webp: !0, className: " _Ye _og" }), (0, H.tZ)(Qe.ZtRichText, { className: " _Wh _Bi _qb _D _yc _De _Q", style: 0 === g ? { opacity: 0 } : 1 === g ? { animation: "showText 2s ease-in-out" } : "", nodes: s })] })] }) }, e.level);
                                }),
                              }),
                              (0, H.BX)(v.View, {
                                className: " _ii _Z _u _li _s _i",
                                children: [
                                  (0, H.tZ)(v.View, {
                                    className: " _Zh _p _mi _ji",
                                    style: { flex: b },
                                  }),
                                  (0, H.tZ)(v.View, {
                                    className: " _p _jc",
                                    style: { flex: 50 - b },
                                  }),
                                ],
                              }),
                              (0, H.tZ)(v.View, {
                                className: " _Z _u _q _s _i _m",
                                children: i.map(function (e, t) {
                                  return (0,
                                  H.tZ)(H.HY, { children: t <= l ? (0, H.tZ)(v.View, { className: " _Bb _dg _hb _i _n _l _mi", children: (0, H.tZ)(v.Image, { src: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/23_07/zhuli/icon_10_gou.webp", className: " _Bb _dg" }) }) : (0, H.tZ)(v.View, { className: " _Bb _dg" }, e.level) });
                                }),
                              }),
                              (0, H.BX)(v.View, {
                                className: " _ii _Z _u _li _s _i",
                                children: [
                                  (0, H.tZ)(v.View, {
                                    className: " _Zh _p",
                                    style: { flex: b },
                                    children: (0, H.tZ)(v.Image, {
                                      className: " _u _vg _ci _Ef _bc",
                                      src: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/23_07/zhuli/icon_rocket_s.webp",
                                      webp: !0,
                                    }),
                                  }),
                                  (0, H.tZ)(v.View, {
                                    className: " _p _jc",
                                    style: { flex: 50 - b },
                                  }),
                                ],
                              }),
                              (0, H.tZ)(v.View, {
                                className: " _ub _i _m _Z _De",
                                children: i.map(function (e, t) {
                                  return (0,
                                  H.tZ)(v.View, { className: " _Ci _Bb _p", children: (0, H.tZ)(v.Text, { className: " _Qb _Ma _Ag " + o(i, t), children: e.name }) }, e.level);
                                }),
                              }),
                            ],
                          }),
                        });
                    })()
                  : (function () {
                      if (a)
                        return (0, H.BX)(v.View, {
                          className: " _yc _Qh _p",
                          children: [
                            (0, H.BX)(v.View, {
                              className: " _Rh _i _k _pf",
                              children: [
                                s &&
                                  (0, H.BX)(v.View, {
                                    className: " _pa _U _i _l _Sh _Th",
                                    children: [
                                      (0, H.tZ)(v.Image, {
                                        className: " _Bb _dg",
                                        src: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/23_07/zhuli/icon_lightning_12_orange.webp",
                                      }),
                                      (0, H.tZ)(Qe.ZtRichText, {
                                        className:
                                          " _yc _Uh _i _Vh _l _Wh _Xh _D",
                                        style:
                                          0 === g
                                            ? { opacity: 0 }
                                            : 1 === g
                                            ? {
                                                animation:
                                                  "showText 2s ease-in-out",
                                              }
                                            : "",
                                        nodes: s,
                                      }),
                                    ],
                                  }),
                                (0, H.tZ)(v.Image, {
                                  className: " _tf _Ia _Yh",
                                  src: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/23_07/zhuli/qipao_speed_jiao.webp",
                                }),
                              ],
                            }),
                            (0, H.BX)(v.View, {
                              className: " _dg _i _l",
                              children: [
                                (0, H.tZ)(v.View, {
                                  className: " _Zh _p _dg _j _pa _ai",
                                  style: y ? { flex: 0 } : {},
                                  children: (0, H.tZ)(v.Image, {
                                    className: " _u _bi _nf _ci _di",
                                    src: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/23_07/zhuli/icon_rocket_M.webp",
                                    webp: !0,
                                  }),
                                }),
                                new Array(c).fill(0).map(function (e, t) {
                                  return (0,
                                  H.tZ)(v.Image, { className: " _ei _Ce _De -L", src: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/23_07/zhuli/icon_lightning_16_grey.webp", webp: !0 }, t);
                                }),
                              ],
                            }),
                            (0, H.BX)(v.View, {
                              className: " _cg _i _m",
                              children: [
                                (0, H.tZ)(v.View, {
                                  className: " _fi _gi",
                                  children: d[0],
                                }),
                                (0, H.tZ)(v.View, {
                                  className: " _Ma _qg",
                                  children: d[1],
                                }),
                              ],
                            }),
                          ],
                        });
                    })(),
              });
            }),
            et = (0, W.$j)(function (e) {
              return { unlockRightArea: e.assistanceModel.unlockRightArea };
            })(function (e) {
              var t = (e.unlockRightArea || {}).unlockRights;
              return (0, H.tZ)(v.View, {
                className: " _ob",
                children:
                  t &&
                  (0, H.tZ)(v.Swiper, {
                    nextMargin: t.length > 1 ? "246rpx" : "0",
                    className: " _Id",
                    snapToEdge: !0,
                    children: t.map(function (e, t) {
                      var a = "".concat(e.subTitle).replace(/\s*/g, ""),
                        n = "".concat(a).includes("|"),
                        i = "".concat(e.subTitle).split("|"),
                        c = i.length;
                      return (0, H.BX)(
                        v.SwiperItem,
                        {
                          className: " _i",
                          children: [
                            t > 0 && (0, H.tZ)(v.View, { className: " _tf" }),
                            (0, H.BX)(v.View, {
                              className: " _j _Dg _Oa _i _l _Zi _Mb",
                              children: [
                                (0, H.tZ)(v.Image, {
                                  className: " _Qb _yb",
                                  src: e.icon,
                                }),
                                (0, H.BX)(v.View, {
                                  className: " _Ee",
                                  children: [
                                    (0, H.BX)(v.View, {
                                      className: " _i _l",
                                      children: [
                                        (0, H.tZ)(v.View, {
                                          className: " _Ua _sb _ig",
                                          children: e.title || "",
                                        }),
                                        (0, H.tZ)(v.View, {
                                          className:
                                            1 == e.unlock
                                              ? " _Zg _bh _O _bj _hb _qb _aj"
                                              : " _Zg _bh _O _Hi _hb _qb _aj",
                                          children: e.tag || "",
                                        }),
                                      ],
                                    }),
                                    !n &&
                                      (0, H.tZ)(v.View, {
                                        className: " _gj _Q _i _l _Ma _Ag",
                                        children: e.subTitle || "",
                                      }),
                                    !!n &&
                                      (0, H.tZ)(v.View, {
                                        className: " _gj _Q _i _l _Ma _Ag",
                                        children: i.map(function (e, t) {
                                          return (0,
                                          H.BX)(v.View, { className: " _i _l", children: [(0, H.tZ)(v.View, { children: e }), t !== c - 1 && (0, H.tZ)(v.View, { className: " _cj _dj _ej _fj", children: " " })] }, t);
                                        }),
                                      }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        },
                        t
                      );
                    }),
                  }),
              });
            }),
            tt = (0, W.$j)(function (e) {
              return {
                fivePersonAccelerateModule:
                  e.assistanceModel.fivePersonAccelerateModule,
              };
            })(function (e) {
              var t = e.fivePersonAccelerateModule,
                a = e.style,
                n = t || {},
                i = n.title,
                c = void 0 === i ? "" : i,
                s = n.subTitle,
                r = void 0 === s ? "" : s,
                o = n.products,
                l = void 0 === o ? [] : o;
              return (0, H.tZ)(v.View, {
                className: "box",
                style: a,
                children:
                  c &&
                  (0, H.BX)(H.HY, {
                    children: [
                      (0, H.tZ)(v.View, {
                        className: " _o _W _sb _yg",
                        children: c,
                      }),
                      (0, H.tZ)(v.View, {
                        className: " _o _Ac _R _Ma _Na",
                        children: r,
                      }),
                      (0, H.tZ)(v.View, {
                        className: " _kg _i _l _m",
                        children: l.map(function (e, t) {
                          return (0,
                          H.BX)(v.View, { className: " _Db _Dg _Oa _i _l _hj -N", children: [(0, H.tZ)(v.Image, { className: " _ij _ga", src: e.icon }), (0, H.tZ)(v.View, { className: " _R _sb _qe", children: e.title || "" }), (0, H.tZ)(v.View, { className: " _O _Ma _af", children: e.subTitle || "" })] }, t);
                        }),
                      }),
                    ],
                  }),
              });
            }),
            at = (0, W.$j)(function (e) {
              var t = e.pageModel,
                a = e.assistanceModel,
                n = e.orderModel,
                i = e.marketModel;
              return {
                pageLoading: t.pageLoading,
                grabSpeedLevelInfo: n.grabSpeedLevelInfo,
                unlockRightArea: a.unlockRightArea,
                acceStatusCode: a.accelerateStatusInfo.statusCode,
                shareImageInfo: i.shareImageInfo,
                fivePersonAccelerateModule: a.fivePersonAccelerateModule,
              };
            })(function (e) {
              var t = e.pageLoading,
                a = e.unlockRightArea,
                n = e.fivePersonAccelerateModule,
                i = e.shareImageInfo,
                c = e.acceStatusCode,
                s = (a || {}).unlockRights,
                r = s || n;
              (0, Z.useEffect)(
                function () {
                  t &&
                    $.ubtTrace("TZWFriendSpeed_ZhuliButtonFaqi_exposure", {
                      PageId: $.getPage().pageId,
                      Type: n ? "五人大礼包" : "普通",
                    });
                },
                [t, n]
              );
              var o = function (e) {
                return [200, 205].includes(c)
                  ? (0, H.tZ)(v.View, {
                      className: " _Ae _mg _Xa _Nh _Yb _ng _o",
                      onClick: function () {
                        se.show("当前订单已结束，无法助力");
                      },
                      style: (0, f.Z)({}, e),
                      children: "邀好友助力 提升成功率",
                    })
                  : (0, H.tZ)(Ye, {
                      shareImageInfo: {
                        shareUrl: null == i ? void 0 : i.path,
                        templateKey: "robticket/robticket_share_picture",
                        width: 560,
                        height: 780,
                        extraParams: {
                          bgImg:
                            "https://images3.c-ctrip.com/ztrip/train.xin/2012_12/share_".concat(
                              I.default.isTieyou ? "ty" : "zx",
                              "@3x.png"
                            ),
                          title: null == i ? void 0 : i.title,
                          desc: null == i ? void 0 : i.desc,
                        },
                      },
                      className: " _Ae _mg _Xa _qb _Yb _ng _o",
                      style: (0, f.Z)({}, e),
                      onShareClick: function () {
                        $.ubtTrace("TZWFriendSpeed_ZhuliButtonFaqi_click", {
                          PageId: $.getPage().pageId,
                          Type: n ? "五人大礼包" : "普通",
                        });
                      },
                      onNoShareClick: function () {
                        $.ubtTrace("TZWFriendSpeed_ZhuliButtonFaqi_click", {
                          PageId: $.getPage().pageId,
                          Type: n ? "五人大礼包" : "普通",
                        });
                      },
                      children: "邀好友助力 提升成功率",
                    });
              };
              return (0,
              H.tZ)(v.View, { className: " _Rd", children: r ? (0, H.BX)(v.View, { className: "activityBox", children: [(0, H.tZ)(v.View, { className: " _Oh _Vb _ye", children: (0, H.tZ)($e, {}) }), !(!n && Array.isArray(s) && 0 === s.length) && (0, H.BX)(v.View, { className: " _Ph _Vb _ye", children: [n && (0, H.tZ)(tt, { style: { margin: "0 18rpx" } }), !n && s && (0, H.tZ)(et, {}), !!(0, K.JO)() && o({ margin: "32rpx 18rpx 0 18rpx" })] })] }) : (0, H.BX)(v.View, { className: " _Vb _ye _Mh", children: [(0, H.tZ)($e, {}), !!(0, K.JO)() && o({ marginTop: "48rpx" })] }) });
            }),
            nt = (0, W.$j)(function (e) {
              return { content: e.assistanceModel.identityPackage };
            })(function (e) {
              var t = e.content;
              if (
                ((0, Z.useEffect)(
                  function () {
                    t &&
                      $.ubtTrace("TZWFriendSpeed_ZhuliRewardModule_exposure", {
                        PageId: $.getPage().pageId,
                        Type: (t.type || "") + "",
                      });
                  },
                  [t]
                ),
                !t)
              )
                return null;
              var a = t || {},
                n = a.title,
                i = a.subTitle,
                c = a.packageRights,
                s = void 0 === c ? [] : c,
                r = a.buttonName,
                o = a.jumpUrl,
                l = a.type,
                d = function () {
                  var e = s.length,
                    t = (0, H.tZ)(v.Image, {
                      src: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/23_07/zhuli/bg_quan_4.webp",
                      className: " _lh _mh",
                    });
                  switch (e) {
                    case 2:
                      t = (0, H.tZ)(v.Image, {
                        src: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/23_07/zhuli/bg_quan_2.webp",
                        className: " _oh _mh",
                      });
                      break;
                    case 3:
                      t = (0, H.tZ)(v.Image, {
                        src: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/23_07/zhuli/bg_quan_3.webp",
                        className: " _nh _mh",
                      });
                  }
                  return t;
                };
              return (0, H.BX)(v.View, {
                className: " _Pg _Qg _Mb _Qd _Rg _i _k _l _p",
                children: [
                  (0, H.tZ)(v.Image, {
                    src: (function () {
                      var e = "";
                      return (
                        0 === l
                          ? (e =
                              "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/23_07/zhuli/tag_youhui_tongyong_qb.webp")
                          : 1 === l &&
                            (e =
                              "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/23_07/zhuli/tag_youhui_stds_qb.webp"),
                        e
                      );
                    })(),
                    className: " _u _Tg _t _Ug _Vg",
                    webp: !0,
                  }),
                  (0, H.tZ)(v.Image, {
                    src: (function () {
                      var e = "";
                      return (
                        0 === l
                          ? (e =
                              "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/23_07/zhuli/bg_youhui_tongyong.webp")
                          : 1 === l &&
                            (e =
                              "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/23_07/zhuli/bg_youhui_stds.webp"),
                        e
                      );
                    })(),
                    className: " _u _q _s _Qd _Sg",
                    webp: !0,
                  }),
                  (0, H.tZ)(v.View, {
                    className: " _u _Tg _t _Ug _Vg",
                    onClick: function () {
                      $.ubtTrace(
                        "TZWFriendSpeed_ZhuliRewardModule_AllReward_click",
                        { PageId: $.getPage().pageId }
                      ),
                        D.Z.commonNavigator(o);
                    },
                  }),
                  (0, H.BX)(v.View, {
                    className: " _Wg _p _Xg _i",
                    children: [
                      (0, H.tZ)(v.View, {
                        className: " _W _sb _Yg",
                        children: n || "",
                      }),
                      (0, H.tZ)(v.View, {
                        className:
                          0 === l
                            ? " _p _Zg _ah _O _bh _Mb _Ze _ch"
                            : " _p _Zg _dh _O _bh _eh _ch",
                        children: i || "",
                      }),
                    ],
                  }),
                  (0, H.tZ)(v.View, {
                    className: " _p _fh _i _gh",
                    children: s.map(function (e, t) {
                      return (0,
                      H.BX)(v.View, { className: " _p _i _k -K", children: [d(), (0, H.BX)(v.View, { className: " _Ze _u _hh _s _t _i _k _l", style: 0 === l ? {} : { color: "#00C777" }, children: [(0, H.BX)(v.View, { className: e.money ? " _kh" : " _jh", children: [!!e.unit && (0, H.tZ)(v.Text, { className: " _ih", children: "¥" }), (0, H.tZ)(v.Text, { className: "cardTit", children: e.title })] }), (0, H.tZ)(v.View, { className: " _p _Ma _af", children: e.subTitle })] })] }, t);
                    }),
                  }),
                  (0, H.tZ)(v.View, {
                    className:
                      0 === l
                        ? " _kg _p _gh _Ae _ph _Xa _o _ng _Ze _Yb"
                        : " _qh _p _gh _Ae _rh _Xa _o _ng _sh _Yb",
                    onClick: function () {
                      $.ubtTrace(
                        "TZWFriendSpeed_ZhuliRewardModule_OrderButton_click",
                        { PageId: $.getPage().pageId }
                      ),
                        Ge();
                    },
                    children: r || "",
                  }),
                ],
              });
            }),
            it = (0, W.$j)(function (e) {
              return { moreTravelPlans: e.marketModel.moreTravelPlans };
            })(function (e) {
              var t = e.moreTravelPlans;
              if ((console.log("moreTravelPlans", t), !t))
                return (0, H.tZ)(v.View, {});
              var a = function (e) {
                  $.ubtTrace("TZWFriendSpeed_ToolsModule_click", {
                    PageId: $.getPage().pageId,
                    Type: $.getState().assistanceModel.isSelf
                      ? "发起者"
                      : "助力者",
                    Choose: e || "",
                  });
                },
                n = t || {},
                i = n.title,
                c = n.subTitle,
                s = n.strategies,
                r = null == s ? void 0 : s[0],
                o = (null == s ? void 0 : s.slice(1, 3)) || [];
              return (0, H.BX)(v.View, {
                className: " _p _Vb _be _ae _wg",
                children: [
                  (0, H.tZ)(v.Image, {
                    src: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/23_07/zhuli/img_bg_renwu.webp",
                    webp: !0,
                    className: " _u _q _t _xg _yb",
                  }),
                  (0, H.tZ)(v.View, { className: " _cf _sb _yg", children: i }),
                  (0, H.tZ)(v.View, { className: " _zg _Ma _Ag", children: c }),
                  (0, H.BX)(v.View, {
                    className: " _qd _i _m",
                    children: [
                      (0, H.tZ)(v.View, {
                        className: " _Bg _Cg",
                        children: (function (e) {
                          return e
                            ? (0, H.BX)(v.View, {
                                className: " _p _Dg _Oa _Eg _Fg _Mb _Gg",
                                children: [
                                  (0, H.tZ)(v.Image, {
                                    src: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/23_07/zhuli/icon_bg_houbu.webp",
                                    webp: !0,
                                    className: " _u _r _t _Hg _fe",
                                  }),
                                  (0, H.tZ)(v.View, {
                                    className: " _Ig _yg",
                                    children: e.title || "",
                                  }),
                                  (0, H.tZ)(v.View, {
                                    className: " _Ac _Ma _Na",
                                    children: e.subTitle || "",
                                  }),
                                  (0, H.tZ)(v.View, {
                                    className:
                                      " _p _ue _o _Jg _hg _mg _ra _qb _ig",
                                    onClick: function () {
                                      D.Z.commonNavigator(e.jumpUrl),
                                        a(e.title);
                                    },
                                    children: e.buttonName || "",
                                  }),
                                ],
                              })
                            : (0, H.tZ)(v.View, {});
                        })(r),
                      }),
                      (0, H.tZ)(v.View, {
                        className: " _Kg _i _k _m",
                        children: o.map(function (e, t) {
                          return (function (e, t) {
                            return null != o && o.length
                              ? (0, H.BX)(v.View, {
                                  className: " _Lg _Oa _i _Mg",
                                  style: { backgroundColor: t },
                                  children: [
                                    (0, H.tZ)(v.Image, {
                                      src: e.icon,
                                      className: " _Ng _gg",
                                    }),
                                    (0, H.BX)(v.View, {
                                      className: " _Ee",
                                      children: [
                                        (0, H.BX)(v.View, {
                                          className: " _i _l",
                                          onClick: function () {
                                            D.Z.commonNavigator(e.jumpUrl),
                                              a(e.title);
                                          },
                                          children: [
                                            (0, H.tZ)(v.View, {
                                              className: " _Ig _ig",
                                              children: e.title || "",
                                            }),
                                            (0, H.tZ)(v.Image, {
                                              src: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/23_07/zhuli/icon_12_more.webp",
                                              webp: !0,
                                              className: " _Og _Ye _og",
                                            }),
                                          ],
                                        }),
                                        (0, H.tZ)(v.View, {
                                          className: " _Ma _Ag",
                                          children: e.subTitle || "",
                                        }),
                                      ],
                                    }),
                                  ],
                                })
                              : (0, H.tZ)(v.View, {});
                          })(e, 0 === t ? "#fff5f4" : "#f4faff");
                        }),
                      }),
                    ],
                  }),
                ],
              });
            }),
            ct = (0, W.$j)(function () {
              var e;
              return {
                content:
                  null === (e = xe(r.weChannelSpeedUpPage)) || void 0 === e
                    ? void 0
                    : e._jsonInfo,
              };
            })(function (e) {
              var t = e.content;
              if ((console.log("content", t), null == t || !t.length))
                return (0, H.tZ)(v.View, {});
              return (0, H.tZ)(v.View, {
                className: " _ae _zd",
                children: (0, H.tZ)(v.Swiper, {
                  className: " _zd",
                  autoplay: !0,
                  circular: !0,
                  indicatorColor: "rgb(255,255,255,.6)",
                  indicatorActiveColor: "#ffffff",
                  children: t.map(function (e, t) {
                    return (0, H.tZ)(
                      v.SwiperItem,
                      {
                        children: (0, H.tZ)(v.Image, {
                          className: " _Qd _zd _be",
                          src: e.imgUrl,
                          onClick: function () {
                            return (function (e) {
                              $.ubtTrace("TZWFriendSpeed_BannerModule_click", {
                                PageId: $.getPage().pageId,
                                Type: $.getState().assistanceModel.isSelf
                                  ? "发起者"
                                  : "助力者",
                              }),
                                e.jumpUrl && D.Z.commonNavigator(e.jumpUrl);
                            })(e);
                          },
                        }),
                      },
                      "swiper-".concat(t)
                    );
                  }),
                }),
              });
            }),
            st = (0, W.$j)(function (e) {
              return { pageLoading: e.pageModel.pageLoading };
            })(function (e) {
              var t = e.pageLoading;
              return console.log("pageLoading", t), (0, H.tZ)(v.View, {});
            }),
            rt = (0, W.$j)(function (e) {
              return { pageLoading: e.pageModel.pageLoading };
            })(function () {
              var e = (0, Z.useState)(!1),
                t = (0, ee.Z)(e, 2),
                a = t[0],
                n = t[1];
              (0, Z.useEffect)(function () {
                var e = w().getStorageSync("COLLECT_CLOSE");
                n(!(e && e == U.Z.getToday()));
              }, []);
              return (0, H.tZ)(v.View, {
                children:
                  a &&
                  (0, H.BX)(v.View, {
                    className: " _v _Ie _t _Je _a _Ke _Gc _Le _Me _i _l",
                    id: "APAy",
                    onClick: function () {
                      Ue(s.CollectMiniApp);
                    },
                    children: [
                      (0, H.tZ)(v.View, { className: " _Ce _De _Ne _Oe" }),
                      (0, H.BX)(v.View, {
                        className: "cont",
                        children: [
                          (0, H.tZ)(v.View, {
                            className: " _Pe _Qe",
                            children: "收藏小程序",
                          }),
                          (0, H.tZ)(v.View, {
                            className: " _D _Re",
                            children: "购票更方便",
                          }),
                        ],
                      }),
                      (0, H.tZ)(v.View, { className: " _Se _Te _Ue _Ve _We" }),
                      (0, H.tZ)(v.View, {
                        className: " _E _Kc _Xe _Ye _Q",
                        id: "APAz",
                        onClick: function () {
                          w().setStorageSync("COLLECT_CLOSE", U.Z.getToday()),
                            n(!1);
                        },
                        children: "关\r\n闭",
                      }),
                    ],
                  }),
              });
            }),
            ot = "zx" === I.default.jetpack || "ty" === I.default.jetpack,
            lt = (0, W.$j)(function (e) {
              return {
                isShowPeakRemind: e.marketModel.subscribeInfo.isShowPeakRemind,
              };
            })(function (e) {
              return e.isShowPeakRemind && ot
                ? (0, H.BX)(v.View, {
                    className: " _v _Ie _s _t _r _a _vf _wf _Ke _i _l",
                    children: [
                      (0, H.tZ)(v.Text, {
                        className:
                          " _Ta _Ua _u _q _t _Cf _Df _o _U _C _Kc iconfont",
                      }),
                      (0, H.tZ)(v.Icon, { className: " _Ef _db _Ff _Gf" }),
                      (0, H.BX)(v.View, {
                        className: "cont",
                        children: [
                          (0, H.tZ)(v.View, {
                            className: " _Hf",
                            children: "高峰期火车票购票提醒",
                          }),
                          (0, H.tZ)(v.View, {
                            className: " _E _Kc",
                            children: "高峰假期提前预约，出票成功率更高",
                          }),
                        ],
                      }),
                      (0, H.tZ)(v.Button, {
                        className: " _If _mb _Jf _b _Kf _Pd _Lf",
                        "data-type": "buyResult",
                        id: "APBA",
                        onClick: ve,
                        children: "设置提醒",
                      }),
                    ],
                  })
                : null;
            }),
            dt = (0, W.$j)(function () {
              var e;
              return {
                content:
                  null === (e = xe(r.wxChannelTestCode)) || void 0 === e
                    ? void 0
                    : e._jsonInfo,
              };
            })(function () {
              if (I.default.isTieyou) return (0, H.tZ)(v.View, {});
              var e = function () {
                  return (0, H.tZ)(v.View, { className: " _Yf _Zf _ag" });
                },
                t = function (e, t, a, n, i) {
                  return (0, H.BX)(v.View, {
                    className: " _i _Uf _p _l",
                    children: [
                      (0, H.tZ)(v.Image, {
                        src: e,
                        className: " _Vf _Gc _Wf",
                        webp: !0,
                      }),
                      (0, H.BX)(v.View, {
                        className: " _Xf _j",
                        children: [
                          (0, H.tZ)(v.View, {
                            className: " _Xb _xe",
                            children: t,
                          }),
                          (null == a ? void 0 : a.length) > 0 &&
                            (0, H.tZ)(v.View, {
                              className: " _cg _i",
                              children: a.map(function (e, t) {
                                return (0,
                                H.BX)(v.View, { className: " _i _l", style: t === a.length - 1 ? {} : { marginRight: "12rpx" }, children: [(0, H.tZ)(v.Image, { src: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/23_07/zhuli/icon_1o_gou_grey.webp", className: " _Bb _dg _jb", webp: !0 }), (0, H.tZ)(v.View, { className: " _eg _Nf _Na", children: e })] }, t);
                              }),
                            }),
                        ],
                      }),
                      (0, H.tZ)(v.View, {
                        className: " _fg _o _gg _hg _w _ra _qb _ig",
                        onClick: function () {
                          D.Z.relaunchHome(i);
                        },
                        children: n,
                      }),
                    ],
                  });
                };
              return (0,
              H.BX)(v.View, { className: " _Mf _i _k _l", children: [(0, H.BX)(v.View, { className: " _i _l", children: [(0, H.tZ)(v.View, { className: " _Ce _Pf _Qf _Rf" }), (0, H.tZ)(v.View, { className: " _Nf _Of _Q", children: "智行·不止抢票" }), (0, H.tZ)(v.View, { className: " _Ce _Pf _Sf _Tf" })] }), (0, H.BX)(v.View, { className: " _bg _Z _Vb _be", children: [t("https://images3.c-ctrip.com/ztrip/zhixingios/z_22/23_07/zhuli/icon_44_feiji.webp", "机票·低价不怕比", ["安心比价", "退改无忧"], "订机票", "flight"), e(), t("https://images3.c-ctrip.com/ztrip/zhixingios/z_22/23_07/zhuli/icon_44_jiudian.webp", "酒店·靠谱又省钱", ["买贵赔", "入住保障"], "订酒店", "hotel"), e(), t("https://images3.c-ctrip.com/ztrip/zhixingios/z_22/23_07/zhuli/icon_44_qiche.webp", "汽车票·比车站便宜", ["网罗全网低价", "官方合作出票"], "买车票", "bus")] })] });
            }),
            ut = a(17377),
            ht =
              ((0, ut.ZP)({
                serviceCode: "17679",
                path: "get2022AccelerateModalInfo",
              }),
              (0, ut.ZP)({
                serviceCode: "17679",
                path: "grantFlightTicketCouponInAcceleratePage",
              })),
            pt = function (e) {
              var t = e.duration,
                a = e.onTimeEnd,
                n = e.timeUp;
              console.log("duration", t);
              var i = (0, Z.useState)(t),
                c = (0, ee.Z)(i, 2),
                s = c[0],
                r = c[1];
              return (
                (0, Z.useEffect)(function () {
                  var e = 21,
                    t = setInterval(function () {
                      console.log("remainingTime", e),
                        r((e -= 1) > 9 ? e : "0".concat(e)),
                        6 === e && a(),
                        e <= 0 && clearTimeout(t);
                    }, 1e3);
                }, []),
                console.log("seconds", s),
                (0, H.BX)(v.View, {
                  className: ae()({
                    circleProgress_wrapper: !0,
                    circleProgress_wrapper_timeUp: n,
                  }),
                  children: [
                    (0, H.tZ)(v.View, {
                      className: "wrapper right",
                      children: (0, H.tZ)(v.View, {
                        className: "circleProgress rightcircle",
                      }),
                    }),
                    (0, H.tZ)(v.View, {
                      className: "wrapper left",
                      children: (0, H.tZ)(v.View, {
                        className: "circleProgress leftcircle",
                      }),
                    }),
                    (0, H.tZ)(v.View, {
                      className: "count-down",
                      children: (0, H.tZ)(v.View, {
                        className: "seconds",
                        children: s,
                      }),
                    }),
                  ],
                })
              );
            },
            gt = a(32180).document,
            ft = function (e) {
              console.log(e);
              var t = e.accelerateAndJump,
                a = e.closeVideo,
                n = (0, Z.useState)(!1),
                i = (0, ee.Z)(n, 2),
                c = i[0],
                s = i[1],
                r = (0, Z.useState)(!1),
                o = (0, ee.Z)(r, 2),
                l = o[0],
                d = o[1],
                u = (0, Z.useCallback)(function () {
                  console.log("视频开始播放"), d(!0);
                }, []),
                h = (0, Z.useCallback)(
                  function () {
                    console.log("timeUp", c), c ? t() : a();
                  },
                  [c]
                );
              (0, Z.useEffect)(function () {
                var e = gt.getElementById("ad-video");
                console.log("video", e.props);
              });
              var p = w().getSystemInfoSync(),
                g = p.screenHeight,
                f = p.screenWidth;
              return (
                console.log("timeup", c),
                (0, H.BX)(v.View, {
                  className: "robshare-video-play",
                  style: {
                    width: "".concat(f, "px"),
                    height: "".concat(g, "px"),
                  },
                  children: [
                    (0, H.BX)(v.View, {
                      className: "line-one-text",
                      children: [
                        "观看视频15秒，即为好友加速成功",
                        (0, H.tZ)(v.View, {
                          className: "line-two-text",
                          children: "（关闭会加速失效哦）",
                        }),
                      ],
                    }),
                    (0, H.tZ)(v.Video, {
                      id: "ad-video",
                      className: "video",
                      src: "https://video.c-ctrip.com/videos/AS0t21000001i4l300C21.mp4",
                      controls: !1,
                      onPlay: u,
                      autoplay: !0,
                    }),
                    (0, H.tZ)(v.View, {
                      id: "APAu",
                      onClick: h,
                      className: "icon-close",
                    }),
                    l &&
                      (0, H.tZ)(pt, {
                        duration: 21,
                        onTimeEnd: function () {
                          console.log("倒计时结束"), s(!0);
                        },
                        timeUp: c,
                      }),
                  ],
                })
              );
            },
            mt = function (e) {
              var t = e.type,
                a = e.accelerateVideoUrl,
                n = e.doAccelerate,
                i = e.accelerateActionRes,
                c = e.isJumpToNewUserGifts,
                s = e.options,
                r = e.style,
                o = e.handleClickTrace,
                l = (0, Z.useState)(!1),
                d = (0, ee.Z)(l, 2),
                u = d[0],
                h = d[1],
                p = (0, Z.useCallback)(
                  (0, _.Z)(
                    (0, m.Z)().mark(function e() {
                      var t, a, s, r, o, l, d;
                      return (0, m.Z)().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), n(302, !0);
                            case 2:
                              if (!c) {
                                e.next = 7;
                                break;
                              }
                              (t = "https://m.".concat(
                                I.default.isTieyou ? "tieyou" : "suanya",
                                ".com/webapp/train/activity/20201110-ztrip-new-user-gifts?source=speedup"
                              )),
                                w().redirectTo({
                                  url: "/functionalPages/twebview/index?url=".concat(
                                    encodeURIComponent(t)
                                  ),
                                }),
                                (e.next = 12);
                              break;
                            case 7:
                              return (
                                (a = i.accelerateLevel), (e.next = 10), ht()
                              );
                            case 10:
                              1 !== (s = e.sent).resultCode
                                ? console.log("发券失败", s.resultMessage)
                                : ((r = s.couponPrice),
                                  (o = s.couponName),
                                  (l = void 0 === o ? "80元机票券" : o),
                                  (d = s.expireTime),
                                  w().redirectTo({
                                    url: "/pages/activity/flight/flightSpecial/flightSpecial?speedPackNum="
                                      .concat(a, "&couponName=")
                                      .concat(
                                        encodeURIComponent(l),
                                        "&couponPrice="
                                      )
                                      .concat(r, "&expireTime=")
                                      .concat(encodeURIComponent(d)),
                                  }));
                            case 12:
                              h(!1);
                            case 13:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  ),
                  []
                ),
                g = (0, Z.useCallback)(function () {
                  h(!1);
                }, []),
                f = (0, Z.useCallback)(
                  (0, _.Z)(
                    (0, m.Z)().mark(function e() {
                      var a, c, s, r, o;
                      return (0, m.Z)().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if ("BROWSE_VIDEO" !== t) {
                                e.next = 5;
                                break;
                              }
                              console.log("看广告"), h(!0), (e.next = 13);
                              break;
                            case 5:
                              return (
                                console.log(
                                  "助力，发券，记下助力结果，跳转到机票页面"
                                ),
                                (a = i.accelerateLevel),
                                (e.next = 9),
                                n(303)
                              );
                            case 9:
                              return (e.next = 11), ht();
                            case 11:
                              1 !== (c = e.sent).resultCode
                                ? console.log("发券失败", c.resultMessage)
                                : ((s = c.couponPrice),
                                  (r = c.couponName),
                                  (o = c.expireTime),
                                  w().redirectTo({
                                    url: "/pages/activity/flight/flightSpecial/flightSpecial?speedPackNum="
                                      .concat(a, "&couponName=")
                                      .concat(
                                        encodeURIComponent(r),
                                        "&couponPrice="
                                      )
                                      .concat(s, "&expireTime=")
                                      .concat(encodeURIComponent(o)),
                                  }));
                            case 13:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  ),
                  []
                ),
                b = (0, Z.useMemo)(
                  function () {
                    return "BROWSE_VIDEO" === t
                      ? "看15秒广告为好友加速"
                      : "浏览特价机票为好友加速";
                  },
                  [t]
                );
              return ["BROWSE_VIDEO", "VIEW_FLIGHT_PAGE"].includes(t)
                ? (0, H.BX)(v.View, {
                    className: "diversion-ticket-button",
                    children: [
                      (0, H.tZ)(v.View, {
                        className: "speed-btnbox",
                        children: (0, H.tZ)(v.Button, {
                          className: "btn-lineblue",
                          hoverClass: "btn-lineblue_hover",
                          "data-ubt-key": "wx_robshare0914_share",
                          id: "APAk",
                          onClick: f,
                          children: b,
                        }),
                      }),
                      u &&
                        (0, H.tZ)(ft, { closeVideo: g, accelerateAndJump: p }),
                    ],
                  })
                : (0, H.tZ)(v.View, {
                    className: "diversion-ticket-button",
                    children: (0, H.tZ)(v.View, {
                      className: "speed-btnbox",
                      children: (0, H.tZ)(v.Button, {
                        className: "btn-lineblue",
                        hoverClass: "btn-lineblue_hover",
                        id: "APAl",
                        style: r,
                        onClick: function () {
                          var e;
                          o && o(),
                            a &&
                              (e = ""
                                .concat(a, "&acceleratePageScene=")
                                .concat(s.scene)),
                            e ||
                              (e =
                                "/pages/activity/train/browseVideo/index?feedId=export/UzFfAgtgekIEAQAAAAAA0rwhVXKJggAAAAstQy6ubaLX4KHWvLEZgBPE16AsfRFMZ6iCzNPgMJr4nhBChSfU3fSh_mxhtq6S&source=miniAcceleratePage&acceleratePageScene=".concat(
                                  s.scene
                                )),
                            w().navigateTo({ url: e });
                        },
                        children: "观看智行视频号，即刻为好友助力",
                      }),
                    }),
                  });
            },
            _t = (0, W.$j)(function (e) {
              var t = e.pageModel,
                a = e.assistanceModel,
                n = e.orderModel,
                i = e.marketModel;
              return {
                isLogin: t.isLogin,
                acceStatusCode: a.accelerateStatusInfo.statusCode,
                acceType: a.accelerateInfo.accelerateCode,
                videoUrl: a.accelerateInfo.videoUrl,
                grabSpeedLevelInfo: n.grabSpeedLevelInfo,
                unlockRightArea: a.unlockRightArea,
                fivePersonAccelerateModule: a.fivePersonAccelerateModule,
                shareImageInfo: i.shareImageInfo,
              };
            })(
              (0, Z.memo)(function (e) {
                var t = e.isLogin,
                  a = e.acceStatusCode,
                  i = (e.shareImageInfo, e.acceType),
                  c = e.videoUrl;
                return (0, H.BX)(v.View, {
                  className: " _Vb _ye _Rd _jg",
                  children: [
                    (0, H.tZ)($e, {}),
                    t
                      ? (0, H.BX)(H.HY, {
                          children: [
                            [100].includes(a) &&
                              ($.ubtTrace(
                                "TZWFriendSpeed_ForFriendAccelerate_exposure",
                                {
                                  PageId: $.getPage().pageId,
                                  Type:
                                    i === n.VIDEO_WX_ACCE_SCENE && c
                                      ? "视频号"
                                      : "正常",
                                }
                              ),
                              $.ubtTrace(
                                "TZWFriendSpeed_GoldFingerContext_exposure",
                                {
                                  PageId: $.getPage().pageId,
                                  Type:
                                    i === n.VIDEO_WX_ACCE_SCENE && c
                                      ? "视频号"
                                      : "正常",
                                }
                              ),
                              (0, H.BX)(v.View, {
                                className: " _kg _i _k _l",
                                children: [
                                  i === n.VIDEO_WX_ACCE_SCENE && c
                                    ? (0, H.tZ)(mt, {
                                        type: "BROWSE_WECHAT_CHANNEL",
                                        accelerateVideoUrl: c,
                                        options: $.getPage().options,
                                        doAccelerate: ye,
                                        handleClickTrace: function () {
                                          $.ubtTrace(
                                            "TZWFriendSpeed_ForFriendAccelerate_click",
                                            {
                                              PageId: $.getPage().pageId,
                                              Type: "视频号",
                                            }
                                          );
                                        },
                                        style: {
                                          lineHeight: "96rpx",
                                          width: "656rpx",
                                          height: "96rpx",
                                          borderRadius: "28rpx",
                                          marginTop: "-40rpx",
                                        },
                                      })
                                    : (0, H.tZ)(v.View, {
                                        className:
                                          " _lg _Ae _mg _Xa _o _ng _qb _Yb",
                                        onClick: function () {
                                          $.ubtTrace(
                                            "TZWFriendSpeed_ForFriendAccelerate_click",
                                            {
                                              PageId: $.getPage().pageId,
                                              Type: "正常",
                                            }
                                          ),
                                            Ve();
                                        },
                                        children: "一键为TA助力",
                                      }),
                                  (0, H.BX)(v.View, {
                                    className: " _bg _i _l",
                                    children: [
                                      (0, H.tZ)(v.Image, {
                                        src: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/23_07/zhuli/icon_12_jsz.webp",
                                        className: " _Ye _og _jb",
                                      }),
                                      (0, H.tZ)(v.View, {
                                        className: " _pg _qg",
                                        onClick: function () {
                                          $.ubtTrace(
                                            "TZWFriendSpeed_GoldFingerContext_click",
                                            {
                                              PageId: $.getPage().pageId,
                                              Type:
                                                i === n.VIDEO_WX_ACCE_SCENE && c
                                                  ? "视频号"
                                                  : "正常",
                                            }
                                          ),
                                            Te();
                                        },
                                        children:
                                          "会员金手指：直接帮TA升至VIP速度",
                                      }),
                                    ],
                                  }),
                                ],
                              })),
                            [202, 204].includes(a) &&
                              ($.ubtTrace(
                                "TZWFriendSpeed_GoldFingerSpeed_exposure",
                                { PageId: $.getPage().pageId }
                              ),
                              $.ubtTrace("TZWFriendSpeed_HelpSpeed_exposure", {
                                PageId: $.getPage().pageId,
                              }),
                              (0, H.tZ)(v.View, {
                                className: " _kg _i _m",
                                children: (0, H.BX)(v.View, {
                                  className: " _p _Ae _ng _sg _mg _Xa",
                                  onClick: function () {
                                    $.ubtTrace(
                                      "TZWFriendSpeed_GoldFingerSpeed_click",
                                      { PageId: $.getPage().pageId }
                                    ),
                                      Te();
                                  },
                                  children: [
                                    (0, H.tZ)(v.View, {
                                      className: " _o _qb _Yb",
                                      children: "金手指加速",
                                    }),
                                    (0, H.tZ)(v.Image, {
                                      src: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/23_07/zhuli/tag_jsz.webp",
                                      className: " _tg _ug _u _t _vg",
                                    }),
                                  ],
                                }),
                              })),
                            [200, 201, 205].includes(a) &&
                              (0, H.tZ)(v.View, {
                                className:
                                  " _kg _lg _Ae _mg _Xa _o _ng _qb _Yb",
                                onClick: function () {
                                  Ge();
                                },
                                children: "我也要出行",
                              }),
                          ],
                        })
                      : ($.ubtTrace(
                          "TZWFriendSpeed_ForFriendAccelerate_exposure",
                          { PageId: $.getPage().pageId, Type: "登录" }
                        ),
                        (0, H.tZ)(v.View, {
                          className: " _kg _lg _Ae _mg _Xa _o _ng _qb _Yb",
                          onClick: function () {
                            $.ubtTrace(
                              "TZWFriendSpeed_ForFriendAccelerate_click",
                              { PageId: $.getPage().pageId, Type: "登录" }
                            ),
                              y.ZP.doLogin()
                                .then(function () {
                                  $.getDispatch().pageModel.setIsLogin(!0),
                                    ze();
                                })
                                .catch(function (e) {
                                  console.log(e);
                                });
                          },
                          children: "一键登录，为好友助力",
                        })),
                  ],
                });
              })
            ),
            bt = (0, W.$j)(function (e) {
              var t;
              return {
                taskList:
                  null === (t = e.assistanceModel.accelerateTaskInfo) ||
                  void 0 === t
                    ? void 0
                    : t.taskList,
              };
            })(function (e) {
              var t = e.taskList;
              return null != t && t.length
                ? (0, H.tZ)(v.View, {
                    className: " _Vb _ye _ze",
                    children: (0, H.tZ)(v.Swiper, {
                      vertical: !0,
                      className: " _Ae",
                      interval: 5e3,
                      autoplay: !0,
                      circular: !0,
                      children: t.map(function (e) {
                        return (0, H.BX)(
                          v.SwiperItem,
                          {
                            className: " _Be _i _l _Mb",
                            children: [
                              (0, H.tZ)(v.Image, {
                                className: " _Ce _De",
                                src: e.icon,
                              }),
                              (0, H.tZ)(v.View, {
                                className: " _Ee _sb _qe _j _Fe",
                                children: e.title,
                              }),
                              (0, H.tZ)(v.View, {
                                className: " _ob _Oc _vd _qa _o _Ge _He",
                                onClick: function () {
                                  ke(e.actionValue);
                                },
                                children: e.btnName,
                              }),
                            ],
                          },
                          e.actionValue
                        );
                      }),
                    }),
                  })
                : null;
            }),
            wt = "zx" === I.default.jetpack || "ty" === I.default.jetpack,
            Zt = (0, W.$j)(function (e) {
              var t = e.pageModel,
                a = e.assistanceModel;
              return {
                pageLoading: t.pageLoading,
                isSelf: a.isSelf,
                isHideAD: t.popCode || t.toastCodeList.length > 0,
              };
            })(function (e) {
              var t = e.pageLoading,
                a = e.isSelf,
                n = e.isHideAD;
              return (
                console.log("pageLoading", t),
                (0, H.BX)(H.HY, {
                  children: [
                    t &&
                      (0, H.BX)(v.View, {
                        className: "skeleton",
                        style: { paddingTop: "400rpx" },
                        children: [
                          (0, H.BX)(v.View, {
                            className: "first",
                            children: [
                              (0, H.tZ)(v.View, { className: "l" }),
                              (0, H.BX)(v.View, {
                                className: "r",
                                children: [
                                  (0, H.tZ)(v.View, { className: "r-s" }),
                                  (0, H.tZ)(v.View, { className: "r-s" }),
                                ],
                              }),
                            ],
                          }),
                          (0, H.BX)(v.View, {
                            className: "second",
                            children: [
                              (0, H.tZ)(v.View, { className: "s" }),
                              (0, H.tZ)(v.View, { className: "s" }),
                              (0, H.tZ)(v.View, { className: "s" }),
                              (0, H.tZ)(v.View, { className: "s" }),
                              (0, H.tZ)(v.View, { className: "s" }),
                              (0, H.tZ)(v.View, { className: "s" }),
                            ],
                          }),
                          (0, H.tZ)(v.View, { className: "third" }),
                          (0, H.BX)(v.View, {
                            className: "fourth",
                            children: [
                              (0, H.tZ)(v.View, { className: "long" }),
                              (0, H.tZ)(v.View, { className: "short" }),
                            ],
                          }),
                          (0, H.tZ)(v.View, { className: "button" }),
                        ],
                      }),
                    !t &&
                      (0, H.BX)(Y, {
                        className: " _yd",
                        children: [
                          (0, H.tZ)(j.o, {
                            className: " _ce _u _q _s _t _nd _de",
                            start: { x: 0, y: 1 },
                            end: { x: 0, y: 0 },
                            colors: ["#F5F5F5", "#ADD4FF"],
                          }),
                          (0, H.tZ)(j.mu, {
                            page: $.getPage(),
                            zIndex: 1,
                            needHolder: !0,
                            title: "".concat(I.default.partnerCN, "抢票神器"),
                            titleColor: "#222",
                            titleFontSize: 17,
                            defaultBackButtonColor: "#222222",
                            rightViewWidth: 85,
                            backgroundColor: "transparent",
                          }),
                          (0, H.BX)(v.ScrollView, {
                            scrollY: !0,
                            className: " _jc _p _j _ee",
                            children: [
                              (0, H.tZ)(je, {}),
                              a && (0, H.tZ)(at, {}),
                              !a && (0, H.tZ)(_t, {}),
                              !a && (0, H.tZ)(bt, {}),
                              !a && (0, H.tZ)(nt, {}),
                              (0, H.tZ)(P.Z, {
                                source: 1,
                                isLogin: y.ZP.isLogin,
                                ubtTrace: $.ubtTrace,
                                customStyle: "margin:16rpx",
                                moudleStyle:
                                  "padding:16rpx;padding-right:32rpx",
                              }),
                              (0, H.tZ)(it, {}),
                              (0, H.tZ)(ct, {}),
                              a && (0, H.tZ)(st, {}),
                              !a && (0, H.tZ)(dt, {}),
                              (0, H.tZ)(rt, {}),
                              (0, H.tZ)(lt, {}),
                              (0, H.tZ)(M.Z, {}),
                              wt &&
                                (0, H.tZ)(v.View, {
                                  className: " _ge",
                                  children:
                                    !n &&
                                    (0, H.tZ)(v.Ad, {
                                      unitId: "".concat(
                                        I.default.isTieyou
                                          ? "adunit-ce72df261261d5a7"
                                          : "adunit-3c333b8b9e050ab7"
                                      ),
                                      adType: "video",
                                      adTheme: "white",
                                    }),
                                }),
                              (0, H.tZ)(v.View, { className: " _fe" }),
                            ],
                          }),
                        ],
                      }),
                  ],
                })
              );
            }),
            vt = function (e) {
              var t = e.speedChangeToast,
                a = t || {},
                n = (a.buttonName, a.icon),
                i = a.subTitle,
                c = a.title;
              return t
                ? (0, H.BX)(v.View, {
                    className: " _gm _hm _im _p _i _k _l _Mb",
                    children: [
                      (0, H.tZ)(v.Image, {
                        src: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/23_07/zhuli/bg_popup_speed.webp?versoion=898",
                        className: " _u _s _q _r _t _gm _hm",
                      }),
                      (0, H.tZ)(v.View, {
                        className: " _p _db _jm _km",
                        children: c,
                      }),
                      (0, H.tZ)(v.View, {
                        className: " _p _Ac _R _xh _Na",
                        children: i,
                      }),
                      (0, H.tZ)(v.Image, {
                        src: n,
                        className: " _p _mj _rg _lm",
                      }),
                    ],
                  })
                : (0, H.tZ)(v.View, {});
            },
            Nt = function (e) {
              var t = e.content,
                a = t || {},
                n = (a.toastButton, a.icon),
                i = a.subTitle,
                c = a.title,
                s = a.rightName,
                r = a.rightTag,
                o = a.rightDesc,
                l = "".concat(n, "?version=8989"),
                d = "".concat(o).includes("|"),
                u = "".concat(o).split("|"),
                h = u.length;
              return t
                ? (0, H.BX)(v.View, {
                    className: " _Im _p _i _k _l _Mb _gm _Jm",
                    children: [
                      (0, H.tZ)(v.Image, {
                        src: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/23_07/zhuli/bg_popup_qy.webp?version=22",
                        className: " _u _s _q _r _t _gm _Jm",
                      }),
                      (0, H.tZ)(v.View, {
                        className: " _p _db _jm _km",
                        children: c || "",
                      }),
                      (0, H.tZ)(v.View, {
                        className: " _p _Ac _R _xh _Na",
                        children: i || "",
                      }),
                      (0, H.tZ)(v.Image, {
                        src: l,
                        className: " _p _Km _Ug _Lm",
                      }),
                      (0, H.BX)(v.View, {
                        className: " _p _gj _i _l",
                        children: [
                          (0, H.tZ)(v.View, {
                            className: " _Qj _Ig _Nc",
                            children: s || "",
                          }),
                          (0, H.tZ)(v.View, {
                            className: " _Zg _nk _Mm _hb _qb _af",
                            children: r || "",
                          }),
                        ],
                      }),
                      !d &&
                        (0, H.tZ)(v.View, {
                          className: " _p _Bj _eg _i _l _Ma _Nm",
                          children: o || "",
                        }),
                      !!d &&
                        (0, H.tZ)(v.View, {
                          className: " _p _Bj _eg _i _l _Ma _Nm",
                          children: u.map(function (e, t) {
                            return (0,
                            H.BX)(v.View, { className: " _i _l", children: [(0, H.tZ)(v.View, { children: e }), t !== h - 1 && (0, H.tZ)(v.View, { className: " _cj _dj _ej _fj", children: " " })] }, t);
                          }),
                        }),
                    ],
                  })
                : (0, H.tZ)(v.View, {});
            },
            It = (0, W.$j)(function (e) {
              var t,
                a = e.pageModel,
                n = e.assistanceModel;
              return {
                toastCodeList: a.toastCodeList,
                speedChangeToast: n.speedChangeToast,
                unlockRightToast:
                  null === (t = n.unlockRightArea) || void 0 === t
                    ? void 0
                    : t.unlockRightToast,
              };
            })(function (e) {
              var t,
                a = e.toastCodeList,
                n = void 0 === a ? [] : a,
                i = e.speedChangeToast,
                s = e.unlockRightToast,
                r = (0, Z.useState)(0),
                o = (0, ee.Z)(r, 2),
                l = o[0],
                d = o[1],
                u = n.length > 0,
                h =
                  ((t = {}),
                  (0, g.Z)(
                    t,
                    c.SpeedUpTips,
                    (0, H.tZ)(vt, { speedChangeToast: i })
                  ),
                  (0, g.Z)(t, c.SpecialGrabPop, (0, H.tZ)(Nt, { content: s })),
                  t);
              return (0, H.BX)(v.View, {
                className: " _i _hf _k _n _l _v _s _q _r _t",
                style: u ? {} : { display: "none" },
                children: [
                  (0, H.tZ)(v.View, {
                    className: " _v _s _q _r _t _if",
                    catchMove: !0,
                  }),
                  (0, H.tZ)(v.View, {
                    className: " _nd _p _i _k _l _n",
                    children:
                      1 === n.length
                        ? h[n[0]]
                        : n.length > 1
                        ? (0, H.BX)(v.View, {
                            className: " _i _k _m",
                            children: [
                              (0, H.tZ)(v.Swiper, {
                                interval: 5e3,
                                className: " _nd _of",
                                onChange: function (e) {
                                  var t,
                                    a =
                                      (null == e ||
                                      null === (t = e.detail) ||
                                      void 0 === t
                                        ? void 0
                                        : t.current) || 0;
                                  d(a);
                                },
                                autoplay: !0,
                                circular: !0,
                                children: n.map(function (e, t) {
                                  return (0,
                                  H.tZ)(v.SwiperItem, { className: " _i _n _pf", children: h[e] }, "swiper-".concat(t));
                                }),
                              }),
                              (0, H.tZ)(v.View, {
                                className: " _qf _i _n",
                                children: n.map(function (e, t) {
                                  return (0,
                                  H.tZ)(v.View, { className: l === t ? " _rf _sf _Vb _pa" : " _tf _sf _uf", style: 0 !== t ? { marginLeft: "16rpx" } : {} }, t);
                                }),
                              }),
                            ],
                          })
                        : void 0,
                  }),
                  (0, H.tZ)(v.Image, {
                    src: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/23_07/zhuli/icon_32_close.webp",
                    className: " _p _lf _mf _nf",
                    onClick: Oe,
                  }),
                ],
              });
            }),
            St = a(22373),
            yt = a(83011),
            kt = (0, W.$j)(function (e) {
              var t = e.assistanceModel,
                a = e.pageModel;
              return {
                accelerateRuleDesc: t.accelerateRuleDesc,
                visible: s.RuleDrawer === a.popCode,
              };
            })(function (e) {
              var t = e.accelerateRuleDesc,
                a = e.visible,
                n = t || {},
                i = n.title,
                c = n.ruleDescList;
              return (0, H.tZ)(St.Z, {
                enableMaskClose: !0,
                title: i,
                onCancel: Fe,
                visible: a,
                content: function () {
                  return (0, H.tZ)(yt.Z, {
                    content: c,
                    dotStyle: {
                      height: "10rpx",
                      width: "10rpx",
                      marginRight: "16rpx",
                      marginTop: "15rpx",
                    },
                    itemStyle: { marginTop: "12rpx" },
                    txtStyle: {
                      fontSize: "28rpx",
                      lineHeight: "40rpx",
                      textAlign: "left",
                    },
                  });
                },
                renderButtonView: function () {
                  return (0, H.tZ)(v.View, {
                    className: " _ud _vd _Oa _Xc _o _x _Wc",
                    onClick: Fe,
                    children: "我知道了",
                  });
                },
              });
            }),
            Tt = a(2809),
            Vt = I.default.isTieyou,
            At = (0, W.$j)(function (e) {
              return { visible: e.pageModel.popCode === s.CollectMiniApp };
            })(function (e) {
              var t = e.visible;
              return (0,
              H.tZ)(v.View, { children: t && (0, H.BX)(H.HY, { children: [(0, H.tZ)(v.View, { className: " _v _q _t _r _s _em _fm", id: "APBD", onClick: Fe }), (0, H.BX)(v.View, { className: " _v _gl _Zb _yi _Tl _Ul _pb _a _Vl", id: "APBE", onClick: Fe, style: { top: "".concat((Tt.ZP.statusBarHeight || 0) + 128, "rpx") }, children: [(0, H.tZ)(v.View, { className: " _Wl _Xl", children: "添加步骤：" }), (0, H.BX)(v.View, { className: " _i _Yl _l _G _Xl", children: ["1. 点击右上角按钮", (0, H.tZ)(v.View, { className: " _Zl _Ua _am _Zg" })] }), (0, H.tZ)(v.View, { className: " _i _Yl _l _G _Xl", children: "2. 选择“添加到我的小程序”；" }), (0, H.tZ)(v.View, { className: " _i _Yl _l _G _Xl", children: "3. 在微信首页下拉打开任务栏，可在“我的小程序”中打开“" + (Vt ? "铁友" : "智行火车票") + "”小程序。" }), (0, H.tZ)(v.Image, { src: "https://images3.c-ctrip.com/zt/wechat/" + (Vt ? "guide-index-ty.png" : "guide-index-zx.png"), className: " _bm _cm _h _dm" })] })] }) });
            }),
            xt = (0, W.$j)(function (e) {
              var t = e.assistanceModel,
                a = e.pageModel;
              return {
                accelerateSuccessToast: t.accelerateSuccessToast,
                accelerateSuccessToastWithAdv: t.accelerateSuccessToastWithAdv,
                visible: a.popCode === s.AcceSuccessDrawer,
              };
            })(function (e) {
              var t = e.accelerateSuccessToast,
                a = e.accelerateSuccessToastWithAdv,
                n = e.visible;
              if (
                ((0, Z.useEffect)(
                  function () {
                    n &&
                      t &&
                      a &&
                      $.ubtTrace("TZWFriendSpeed_ZhuliResult_exposure", {
                        PageId: $.getPage().pageId,
                      });
                  },
                  [n, t, a]
                ),
                !t && !a)
              )
                return null;
              var i = "",
                c = t || {},
                s = c.headPic,
                r = c.title,
                o = c.subTitle,
                l = c.buttonName;
              a &&
                ((s = a.headPic),
                (r = a.title),
                (o = a.subTitle),
                (i = a.advertisementImg),
                (l = a.buttonName));
              return (0, H.tZ)(St.Z, {
                enableMaskClose: !0,
                icon: s,
                iconStyle: { width: "560rpx", height: "296rpx", marginTop: 0 },
                title: r,
                onCancel: Fe,
                visible: n,
                content: function () {
                  return (0, H.BX)(v.View, {
                    className: " _i _k _l",
                    children: [
                      (0, H.tZ)(Qe.ZtRichText, {
                        space: "nbsp",
                        nodes: o,
                        className: " _oc _Ti",
                      }),
                      i &&
                        (0, H.tZ)(v.Image, {
                          src: i,
                          className: " _Ql _Rl _Sl",
                          mode: "widthFix",
                        }),
                    ],
                  });
                },
                renderButtonView: function () {
                  return (0, H.tZ)(v.View, {
                    className: " _ud _w _Oa _Xc _o _qb _Wc",
                    onClick: function () {
                      $.ubtTrace("TZWFriendSpeed_ZhuliResult_click", {
                        PageId: $.getPage().pageId,
                      }),
                        Fe();
                    },
                    children: l || "",
                  });
                },
              });
            }),
            Pt = {
              BROWSE_VIDEO: {
                clickModalMetric: {
                  exposureType: "normal",
                  bizKey: "WatchingFltVideoPopupClick",
                },
                popupShowMetric: {
                  exposureType: "popup",
                  bizKey: "WatchingFltVideoPopupShow",
                },
              },
              VIEW_FLIGHT_PAGE: {
                clickModalMetric: {
                  exposureType: "normal",
                  bizKey: "WatchingDiscountFltPopupClick",
                },
                popupShowMetric: {
                  exposureType: "popup",
                  bizKey: "WatchingDiscountFltPopupShow",
                },
              },
              BROWSE_WECHAT_CHANNEL: {
                clickModalMetric: {
                  exposureType: "normal",
                  bizKey: "WatchingWechatChannelPopupClick",
                },
                popupShowMetric: {
                  exposureType: "popup",
                  bizKey: "WatchingWechatChannelPopupShow",
                },
              },
            },
            Ct = function (e) {
              var t = e.pageId,
                a = e.type,
                n = e.accelerateVideoUrl,
                i = e.closeModal,
                c = e.doAccelerate,
                s = e.isJumpToNewUserGifts,
                r = e.ubtTrace,
                o = e.options,
                l = (0, Z.useState)(!1),
                d = (0, ee.Z)(l, 2),
                u = d[0],
                h = d[1];
              (0, Z.useEffect)(function () {
                r("TZWFriendSpeed_VideoPopup_exposure", { PageId: t });
              }, []);
              var p = (0, Z.useCallback)(
                  (0, _.Z)(
                    (0, m.Z)().mark(function e() {
                      var t, a, n, i, r, o, l, d, u;
                      return (0, m.Z)().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), c(302, !0);
                            case 2:
                              if (
                                ((t = e.sent),
                                (a = t.accelerateActionRes),
                                (n = (a || {}).accelerateLevel),
                                !s)
                              ) {
                                e.next = 10;
                                break;
                              }
                              (i = "https://m.".concat(
                                I.default.isTieyou ? "tieyou" : "suanya",
                                ".com/webapp/train/activity/20201110-ztrip-new-user-gifts?source=speedup"
                              )),
                                w().redirectTo({
                                  url: "/functionalPages/twebview/index?url=".concat(
                                    encodeURIComponent(i)
                                  ),
                                }),
                                (e.next = 14);
                              break;
                            case 10:
                              return (e.next = 12), ht();
                            case 12:
                              1 !== (r = e.sent).resultCode
                                ? console.log("发券失败", r.resultMessage)
                                : ((o = r.couponPrice),
                                  (l = r.couponName),
                                  (d = void 0 === l ? "80元机票券" : l),
                                  (u = r.expireTime),
                                  w().redirectTo({
                                    url: "/pages/activity/flight/flightSpecial/flightSpecial?speedPackNum="
                                      .concat(n, "&couponName=")
                                      .concat(
                                        encodeURIComponent(d),
                                        "&couponPrice="
                                      )
                                      .concat(o, "&expireTime=")
                                      .concat(encodeURIComponent(u)),
                                  }));
                            case 14:
                              h(!1);
                            case 15:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  ),
                  []
                ),
                g = (0, Z.useCallback)(function () {
                  h(!0);
                }, []),
                f = (0, Z.useCallback)(function () {
                  h(!1);
                }, []),
                b = (0, Z.useCallback)(
                  (0, _.Z)(
                    (0, m.Z)().mark(function e() {
                      var t, n, i, r, o, l, d;
                      return (0, m.Z)().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if ("BROWSE_VIDEO" !== a) {
                                e.next = 5;
                                break;
                              }
                              console.log("看广告"), g(), (e.next = 19);
                              break;
                            case 5:
                              return (
                                console.log(
                                  "助力，发券，记下助力结果，跳转到机票页面"
                                ),
                                (e.next = 8),
                                c(303, !0)
                              );
                            case 8:
                              if (((t = e.sent), (n = t.accelerateLevel), !s)) {
                                e.next = 15;
                                break;
                              }
                              (i = "https://m.".concat(
                                I.default.isTieyou ? "tieyou" : "suanya",
                                ".com/webapp/train/activity/20201110-ztrip-new-user-gifts?source=speedup"
                              )),
                                w().redirectTo({
                                  url: "/functionalPages/twebview/index?url=".concat(
                                    encodeURIComponent(i)
                                  ),
                                }),
                                (e.next = 19);
                              break;
                            case 15:
                              return (e.next = 17), ht();
                            case 17:
                              1 !== (r = e.sent).resultCode
                                ? (console.log("发券失败", r),
                                  w().redirectTo({
                                    url: "/pages/activity/flight/flightSpecial/flightSpecial",
                                  }))
                                : ((o = r.couponPrice),
                                  (l = r.couponName),
                                  (d = r.expireTime),
                                  w().redirectTo({
                                    url: "/pages/activity/flight/flightSpecial/flightSpecial?speedPackNum="
                                      .concat(n, "&couponName=")
                                      .concat(
                                        encodeURIComponent(l),
                                        "&couponPrice="
                                      )
                                      .concat(o, "&expireTime=")
                                      .concat(encodeURIComponent(d)),
                                  }));
                            case 19:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  ),
                  []
                ),
                N = (0, Z.useCallback)(function () {
                  console.log("点击了modal");
                  var e = Pt[a].clickModalMetric;
                  r(213463, e);
                }, []);
              return (
                (0, Z.useEffect)(function () {
                  console.log("type", a);
                  var e = Pt[a].popupShowMetric;
                  r(213462, e);
                }, []),
                ["BROWSE_VIDEO", "VIEW_FLIGHT_PAGE"].includes(a)
                  ? (0, H.BX)(v.View, {
                      className: "robshare-accelerate-shadow",
                      children: [
                        (0, H.BX)(v.View, {
                          className: "flight-modal",
                          id: "APAA",
                          onClick: N,
                          children: [
                            (0, H.tZ)(v.View, {
                              className: "text",
                              children:
                                "BROWSE_VIDEO" === a
                                  ? (0, H.BX)(v.Block, {
                                      children: [
                                        "观看",
                                        (0, H.tZ)(v.Text, {
                                          className: "second",
                                          children: "15秒",
                                        }),
                                        "视频，即为好友助力！",
                                      ],
                                    })
                                  : "浏览特价机票，即为好友助力！",
                            }),
                            (0, H.tZ)(v.View, {
                              className: "button",
                              id: "APAB",
                              onClick: b,
                              children: "为好友加速",
                            }),
                            (0, H.tZ)(v.View, {
                              className: "icon-closed",
                              id: "APAC",
                              onClick: i,
                            }),
                          ],
                        }),
                        u &&
                          (0, H.tZ)(ft, {
                            accelerateAndJump: p,
                            closeVideo: f,
                          }),
                      ],
                    })
                  : (0, H.tZ)(v.View, {
                      className: "robshare-accelerate-shadow",
                      children: (0, H.BX)(v.View, {
                        className: "channel-modal",
                        id: "APAD",
                        onClick: N,
                        children: [
                          (0, H.tZ)(v.Image, {
                            src: "https://images3.c-ctrip.com/ztrip/train_zhu/img_QP_hyjs_ksp.png",
                            className: "channel-accelerate-icon",
                          }),
                          (0, H.tZ)(v.View, {
                            className: "label",
                            children: "看视频为好友加速",
                          }),
                          (0, H.BX)(v.View, {
                            className: "channel-text",
                            children: [
                              "去智行视频号",
                              (0, H.tZ)(v.Text, {
                                className: "blue-text",
                                children: "观看任意视频10秒以上",
                              }),
                              "，即可为好友加速。",
                            ],
                          }),
                          (0, H.tZ)(v.Button, {
                            className: "channel-btn",
                            id: "APAE",
                            onClick: function () {
                              var e;
                              r(
                                "TZWFriendSpeed_VideoPopup_ForFriendSpeed_click",
                                { PageId: t }
                              ),
                                n &&
                                  (e = ""
                                    .concat(n, "&acceleratePageScene=")
                                    .concat(o.scene)),
                                e ||
                                  (e =
                                    "/pages/activity/train/browseVideo/index?feedId=export/UzFfAgtgekIEAQAAAAAA0rwhVXKJggAAAAstQy6ubaLX4KHWvLEZgBPE16AsfRFMZ6iCzNPgMJr4nhBChSfU3fSh_mxhtq6S&source=miniAcceleratePage&acceleratePageScene=".concat(
                                      o.scene
                                    )),
                                null == i || i(),
                                w().navigateTo({ url: e });
                            },
                            children: "为好友加速",
                          }),
                          (0, H.tZ)(v.View, {
                            className: "icon-closed channel-icon-close",
                            id: "APAF",
                            onClick: i,
                          }),
                        ],
                      }),
                    })
              );
            },
            Bt = (0, W.$j)(function (e) {
              var t = e.assistanceModel,
                a = e.pageModel;
              return {
                videoUrl: t.accelerateInfo.videoUrl,
                visible: s.WatchVideoPop === a.popCode,
              };
            })(function (e) {
              var t = e.videoUrl;
              return e.visible
                ? (0, H.tZ)(Ct, {
                    pageId: $.getPage().pageId,
                    closeModal: Fe,
                    type: "BROWSE_WECHAT_CHANNEL",
                    accelerateVideoUrl: t,
                    navigateTo: $.navigateTo,
                    doAccelerate: ye,
                    ubtTrace: $.ubtTrace,
                    options: $.getPage().options,
                  })
                : null;
            }),
            Mt = (function (e) {
              (0, h.Z)(a, e);
              var t = (0, p.Z)(a);
              function a(e) {
                var n;
                return (
                  (0, l.Z)(this, a),
                  ((n = t.call(this, e)).state = {
                    currentUserName: y.ZP.userName,
                  }),
                  n
                );
              }
              return (
                (0, d.Z)(a, [
                  {
                    key: "UNSAFE_componentWillReceiveProps",
                    value: function (e) {
                      var t = (e.data || {}).userName;
                      t !== this.state.currentUserName &&
                        this.setState({ currentUserName: t });
                    },
                  },
                  { key: "noop", value: function () {} },
                  {
                    key: "render",
                    value: function () {
                      var e = this.props.data || {},
                        t = e.isTieyou,
                        a = e.isCurrentLogin,
                        n = e.goldFingerStatus,
                        i = e.goldFingerToast || {},
                        c = i.leftGfRightsCount,
                        s = i.totalUseGfRightsCount,
                        r = i.goldFingerBtnStatus,
                        o = i.goldFingerBtnDesc,
                        l = this.state.currentUserName;
                      return (0, H.tZ)(v.View, {
                        className: "train-robshare-gold-finger-popup",
                        children: (0, H.tZ)(v.View, {
                          className: "pop-gold",
                          children: (0, H.BX)(v.View, {
                            className: "pop-gold-box show",
                            children: [
                              (0, H.tZ)(v.Icon, { className: "pop-gold-top" }),
                              (0, H.tZ)(v.Icon, {
                                className: "icon-closed",
                                id: "APAZ",
                                onClick: this.props.hideGoldFingerPopup,
                              }),
                              (0, H.BX)(v.View, {
                                className: "pop-gold-bd",
                                children: [
                                  (0, H.BX)(v.View, {
                                    className: "tit",
                                    children: [
                                      (0, H.tZ)(v.Text, {
                                        className: "strong",
                                        children: "金手指权益",
                                      }),
                                      a &&
                                        (0, H.tZ)(v.Block, {
                                          children:
                                            1 == n
                                              ? (0, H.tZ)(v.Text, {
                                                  className: "tgold",
                                                  children: "(已有该特权)",
                                                })
                                              : (0, H.tZ)(v.Text, {
                                                  className: "tgrey",
                                                  children: "(暂无该特权)",
                                                }),
                                        }),
                                    ],
                                  }),
                                  (0, H.BX)(v.View, {
                                    className: "glodhand-equity",
                                    children: [
                                      (0, H.BX)(v.View, {
                                        className: "item",
                                        children: [
                                          (0, H.tZ)(v.Icon, {
                                            className: "icon-equity1",
                                          }),
                                          (0, H.tZ)(v.View, {
                                            className: "strong",
                                            children: "为好友免费提升至VIP",
                                          }),
                                          (0, H.tZ)(v.View, {
                                            className: "tgrey",
                                            children:
                                              "仅支持为好友提速，不可对本人账号使用",
                                          }),
                                        ],
                                      }),
                                      (0, H.BX)(v.View, {
                                        className: "item",
                                        children: [
                                          (0, H.tZ)(v.Icon, {
                                            className: "icon-equity2",
                                          }),
                                          (0, H.tZ)(v.View, {
                                            className: "strong",
                                            children: "会员专属权益",
                                          }),
                                          (0, H.tZ)(v.View, {
                                            className: "tgrey",
                                            children:
                                              "铂金会员尊享每月1次，黑钻会员每月3次",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, H.BX)(v.View, {
                                    className: "glodhand-login",
                                    children: [
                                      a
                                        ? (0, H.BX)(v.View, {
                                            className: "cont",
                                            children: [
                                              "当前" +
                                                (t ? "铁友" : "智行") +
                                                "账号：",
                                              (0, H.tZ)(v.Text, {
                                                className: "strong",
                                                children: l,
                                              }),
                                            ],
                                          })
                                        : (0, H.tZ)(v.View, {
                                            className: "cont",
                                            children:
                                              "当前未登录" +
                                              (t ? "铁友" : "智行") +
                                              "账号",
                                          }),
                                      (0, H.BX)(v.Button, {
                                        className: "btn-chage",
                                        id: "APAa",
                                        onClick: this.props.originLogin,
                                        "data-ubt-key":
                                          "wx_robshare0914_originLogin",
                                        children: [
                                          a ? "切换账号" : "点击登录",
                                          (0, H.tZ)(v.Text, {
                                            className: "ifont-arr iconfont",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  1 == n &&
                                    a &&
                                    (0, H.BX)(v.View, {
                                      className: "glodhand-record",
                                      children: [
                                        (0, H.tZ)(v.View, {
                                          className: "tit",
                                          children: (0, H.tZ)(v.Text, {
                                            className: "strong",
                                            children: "使用记录",
                                          }),
                                        }),
                                        (0, H.tZ)(v.View, {
                                          className: "glodhand-user",
                                          children: s
                                            ? (0, H.BX)(v.Block, {
                                                children: [
                                                  (0, H.BX)(v.View, {
                                                    className: "item",
                                                    children: [
                                                      (0, H.BX)(v.View, {
                                                        className:
                                                          "strong tblue",
                                                        children: [
                                                          (0, H.tZ)(v.Text, {
                                                            children: s,
                                                          }),
                                                          "次",
                                                        ],
                                                      }),
                                                      (0, H.tZ)(v.View, {
                                                        className: "tgrey",
                                                        children: "总计使用",
                                                      }),
                                                    ],
                                                  }),
                                                  (0, H.BX)(v.View, {
                                                    className: "item",
                                                    children: [
                                                      (0, H.BX)(v.View, {
                                                        className:
                                                          "strong torage",
                                                        children: [
                                                          (0, H.tZ)(v.Text, {
                                                            children: c,
                                                          }),
                                                          "次",
                                                        ],
                                                      }),
                                                      (0, H.tZ)(v.View, {
                                                        className: "tgrey",
                                                        children: "本月还剩",
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              })
                                            : (0, H.tZ)(v.View, {
                                                className: "none",
                                                children: "您还没有使用记录哦~",
                                              }),
                                        }),
                                      ],
                                    }),
                                ],
                              }),
                              (0, H.tZ)(v.View, {
                                className: "pop-btn2",
                                children:
                                  1 === r
                                    ? (0, H.tZ)(v.Block, {
                                        children: a
                                          ? (0, H.tZ)(v.Button, {
                                              className: "btn-jiasu",
                                              formType: "submit",
                                              id: "APAb",
                                              onClick:
                                                this.props.goldFingerAccelerate,
                                              "data-ubt-key":
                                                "wx_robshare0914_use_gold_finger_1",
                                              children: o,
                                            })
                                          : (0, H.tZ)(v.Button, {
                                              className: "btn-jiasu",
                                              formType: "submit",
                                              id: "APAc",
                                              onClick:
                                                this.props
                                                  .goldFingerAcceAfterOriginLogin,
                                              "data-ubt-key":
                                                "wx_robshare0914_use_gold_finger_3",
                                              children: o,
                                            }),
                                      })
                                    : (0, H.tZ)(v.Button, {
                                        className: "btn-jiasu disabled",
                                        children: o,
                                      }),
                              }),
                            ],
                          }),
                        }),
                      });
                    },
                  },
                ]),
                a
              );
            })(Z.default.Component),
            Rt = (0, W.$j)(function (e) {
              var t = e.assistanceModel,
                a = e.pageModel;
              return {
                goldFingerInfo: t.goldFingerInfo,
                visible: s.GoldFingerPopup === a.popCode,
              };
            })(function (e) {
              var t = e.goldFingerInfo;
              return e.visible
                ? (0, H.tZ)(Mt, {
                    data: (0, f.Z)(
                      {
                        isTieyou: I.default.isTieyou,
                        userName: y.ZP.userName,
                        isCurrentLogin: y.ZP.isLogin,
                      },
                      t
                    ),
                    hideGoldFingerPopup: Fe,
                    originLogin: function () {
                      y.ZP.doLogin()
                        .then(function () {
                          Fe();
                        })
                        .catch(function (e) {
                          console.log(e);
                        });
                    },
                    goldFingerAccelerate: function () {
                      ye(n.GOLD_FINGER_ACCE_SCENE);
                    },
                    goldFingerAcceAfterOriginLogin: function () {},
                  })
                : null;
            }),
            Lt = void 0,
            Dt = (0, W.$j)(function (e) {
              var t = e.marketModel,
                a = e.pageModel;
              return {
                subscribeModalInfo: t.subscribeInfo.subscribeModalInfo,
                visible: s.SubscribeModalWrapper === a.popCode,
              };
            })(function (e) {
              var t = e.subscribeModalInfo,
                a = e.visible;
              if (!t) return null;
              return (0, H.tZ)(E.Z, {
                show: a,
                info: t,
                onSuccess: function () {
                  Fe(), pe();
                }.bind(Lt),
                onFail: function () {
                  Fe();
                }.bind(Lt),
                onCancel: function () {
                  Fe();
                }.bind(Lt),
                onProcess: function () {
                  Ue(s.SubMask);
                }.bind(Lt),
              });
            }),
            Et = (0, W.$j)(function (e) {
              return { popCode: e.pageModel.popCode };
            })(function (e) {
              var t = e.popCode;
              return (0,
              H.BX)(v.View, { style: { zIndex: 1002 }, children: [(0, H.tZ)(kt, {}), (0, H.tZ)(At, {}), (0, H.tZ)(Rt, {}), (0, H.tZ)(xt, {}), (0, H.tZ)(Bt, {}), (0, H.tZ)(Dt, {}), t === s.SubMask && (0, H.tZ)(X.Z, { style: { top: "20%" } })] });
            }),
            Xt = {
              2: "ing",
              9: "ing",
              10: "ing",
              11: "ing",
              3: "fail",
              4: "fail",
              5: "fail",
              6: "fail",
              7: "success",
              8: "success",
            },
            zt = function (e) {
              var t = e.isTieyou,
                a = void 0 !== t && t,
                n = e.adOpened,
                i = void 0 !== n && n,
                c = e.sponsor,
                s = void 0 === c ? 0 : c,
                r = e.grabOrderInfo,
                o = void 0 === r ? {} : r,
                l = e.accelerateStatusInfo,
                d = void 0 === l ? {} : l,
                u = e.sponsorHeadImg,
                h = void 0 === u ? "" : u,
                p = e.sponsorHeadText,
                g = void 0 === p ? "" : p,
                f = o.departureStation,
                m = o.arriveStation,
                _ = Xt[o.grabStatus] || "unknown",
                b = d.statusCode;
              return (0, H.tZ)(v.View, {
                className: "train-robshare-top-status-modal",
                children: (0, H.BX)(v.View, {
                  children: [
                    "ing" === _ &&
                      204 != b &&
                      (0, H.tZ)(v.Block, {
                        children:
                          (1 === s && !a) || (2 === s && a) || 3 === s
                            ? (0, H.BX)(v.View, {
                                className: "speed-top",
                                children: [
                                  h &&
                                    (0, H.tZ)(v.Image, {
                                      src: h,
                                      mode: "widthFix",
                                      class: "speed-left-yili",
                                    }),
                                  (0, H.BX)(v.View, {
                                    className: "cont",
                                    children: [
                                      (0, H.tZ)(v.View, {
                                        className: "speed-tit-ask speed-img",
                                      }),
                                      (0, H.BX)(v.View, {
                                        className: "speed-txt",
                                        children: [
                                          g,
                                          "助力好友回「",
                                          m || f,
                                          "」",
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              })
                            : (0, H.BX)(v.View, {
                                className: "speed-top",
                                children: [
                                  (0, H.tZ)(v.View, {
                                    className: i
                                      ? "speed-rocket-ad"
                                      : "speed-rocket",
                                  }),
                                  (0, H.tZ)(v.View, {
                                    className: i
                                      ? "speed-loading-ad"
                                      : "speed-loading",
                                  }),
                                  (0, H.BX)(v.View, {
                                    className: "cont",
                                    children: [
                                      (0, H.tZ)(v.View, {
                                        className: "speed-tit-ask speed-img",
                                      }),
                                      (0, H.BX)(v.View, {
                                        className: "speed-txt",
                                        children: [
                                          m ? "去" : "",
                                          (0, H.tZ)(v.Text, {
                                            children:
                                              "「" + (m || f) + "」的火车票",
                                          }),
                                          "太难抢啦",
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                      }),
                    "ing" === _ &&
                      204 == b &&
                      (0, H.BX)(v.View, {
                        className: "speed-top",
                        children: [
                          ((1 === s && !a) || (2 === s && a) || 3 === s) && h
                            ? (0, H.tZ)(v.Image, {
                                src: h,
                                mode: "widthFix",
                                class: "speed-left-yili",
                              })
                            : (0, H.BX)(v.Block, {
                                children: [
                                  (0, H.tZ)(v.View, {
                                    className: i
                                      ? "speed-rocket-ad"
                                      : "speed-rocket",
                                  }),
                                  (0, H.tZ)(v.View, {
                                    className: i
                                      ? "speed-loading-ad"
                                      : "speed-loading speed-img__up",
                                  }),
                                ],
                              }),
                          (0, H.BX)(v.View, {
                            className: "cont",
                            children: [
                              (0, H.tZ)(v.View, {
                                className: "speed-tit-thank speed-img",
                              }),
                              (0, H.tZ)(v.View, {
                                className: "speed-txt",
                                children: "已帮好友加速成功",
                              }),
                            ],
                          }),
                        ],
                      }),
                    "success" === _ &&
                      (0, H.tZ)(v.Block, {
                        children:
                          204 != b
                            ? (0, H.BX)(v.Block, {
                                children: [
                                  !a &&
                                    (0, H.BX)(v.View, {
                                      className: "speed-top speed-tcenter",
                                      children: [
                                        !!(
                                          (1 === s && !a) ||
                                          (2 === s && a) ||
                                          3 === s
                                        ) &&
                                          !!h &&
                                          (0, H.tZ)(v.Image, {
                                            src: h,
                                            mode: "widthFix",
                                            class: "speed-left-yili",
                                          }),
                                        (0, H.BX)(v.View, {
                                          className: "cont",
                                          children: [
                                            (0, H.tZ)(v.View, {
                                              className:
                                                "speed-tit-kaopu speed-img",
                                            }),
                                            (0, H.tZ)(v.View, {
                                              className: "speed-txt",
                                              children:
                                                "免费抢火车票 首单抢不到就赔",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  a &&
                                    (0, H.BX)(v.View, {
                                      className: "speed-top speed-tcenter",
                                      children: [
                                        !!(
                                          (1 === s && !a) ||
                                          (2 === s && a) ||
                                          3 === s
                                        ) &&
                                          !!h &&
                                          (0, H.tZ)(v.Image, {
                                            src: h,
                                            mode: "widthFix",
                                            class: "speed-left-yili",
                                          }),
                                        (0, H.BX)(v.View, {
                                          className: "cont",
                                          children: [
                                            (0, H.tZ)(v.View, {
                                              className:
                                                "speed-tit-kaopu speed-img",
                                            }),
                                            (0, H.tZ)(v.View, {
                                              className: "speed-txt",
                                              children:
                                                "免费抢火车票 首单抢不到就赔",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                ],
                              })
                            : (0, H.tZ)(v.Block, {
                                children: (0, H.BX)(v.View, {
                                  className: "speed-top speed-tcenter",
                                  children: [
                                    !!(
                                      (1 === s && !a) ||
                                      (2 === s && a) ||
                                      3 === s
                                    ) &&
                                      !!h &&
                                      (0, H.tZ)(v.Image, {
                                        src: h,
                                        mode: "widthFix",
                                        class: "speed-left-yili",
                                      }),
                                    (0, H.BX)(v.View, {
                                      className: "cont",
                                      children: [
                                        (0, H.tZ)(v.View, {
                                          className:
                                            "speed-tit-zhiyuan speed-img",
                                        }),
                                        (0, H.BX)(v.View, {
                                          className: "speed-txt",
                                          children: [
                                            "已成功抢到" + (m ? "去" : ""),
                                            (0, H.tZ)(v.Text, {
                                              children: m || f,
                                            }),
                                            "的票",
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                      }),
                    "fail" === _ &&
                      (0, H.BX)(v.View, {
                        className: "speed-top speed-tcenter",
                        children: [
                          !!((1 === s && !a) || (2 === s && a) || 3 === s) &&
                            !!h &&
                            (0, H.tZ)(v.Image, {
                              src: h,
                              mode: "widthFix",
                              class: "speed-left-yili",
                            }),
                          (0, H.BX)(v.View, {
                            className: "cont",
                            children: [
                              (0, H.tZ)(v.View, {
                                className: "".concat(
                                  204 != b
                                    ? "speed-tit-kaopu"
                                    : "speed-tit-zhiyuan",
                                  " speed-img"
                                ),
                              }),
                              (0, H.tZ)(v.View, {
                                className: "speed-txt",
                                children: "免费抢火车票 首单抢不到就赔",
                              }),
                            ],
                          }),
                        ],
                      }),
                    "unknown" === _ &&
                      (0, H.tZ)(v.View, {
                        className: "speed-top speed-tcenter",
                        children: (0, H.BX)(v.View, {
                          className: "cont",
                          children: [
                            (0, H.tZ)(v.View, {
                              className:
                                (a ? "speed-tit-ty" : "speed-tit-zx") +
                                " speed-img",
                            }),
                            (0, H.tZ)(v.View, { className: "speed-txt" }),
                          ],
                        }),
                      }),
                  ],
                }),
              });
            },
            Ft = function (e) {
              var t = e.isLogin,
                a = e.needSubBeforeAcceRate,
                n = e.hasUserInfo,
                i = e.isSelf,
                c = e.accelerateStatusInfo,
                s = e.isTieyou,
                r = e.goldFingerInfo,
                o = e.grabSpeedLevelInfo,
                l = e.showGoldFingerPopup,
                d = (0, re.l2)({
                  isLogin: t,
                  needSubBeforeAcceRate: a,
                  hasUserInfo: n,
                  isSelf: i,
                  accelerateStatusInfo: c,
                  isTieyou: s,
                  goldFingerInfo: r,
                  grabSpeedLevelInfo: o,
                  showGoldFingerPopup: l,
                }),
                u = d.lineOneText,
                h = d.lineTwoText;
              return (
                console.log("lineTwoText", h),
                (0, H.BX)(v.View, {
                  className: "train-robshare-speed-stage-model",
                  children: [
                    (0, H.BX)(v.View, {
                      className: "speed-hbp",
                      children: [
                        (0, H.tZ)(v.View, { className: "tit" }),
                        (0, H.tZ)(v.Text, {
                          className: "ifont-detail iconfont",
                        }),
                        (0, H.BX)(v.View, {
                          className: "item",
                          children: [
                            (0, H.tZ)(v.Text, { className: "icon-hbp" }),
                            "候补购票",
                          ],
                        }),
                        (0, H.BX)(v.View, {
                          className: "item",
                          children: [
                            (0, H.tZ)(v.Text, { className: "icon-hbp" }),
                            "余票监控",
                          ],
                        }),
                      ],
                    }),
                    (0, H.BX)(v.View, {
                      className: "speed-text",
                      children: [
                        (0, H.tZ)(Qe.ZtRichText, { nodes: u }),
                        h &&
                          (0, H.tZ)(v.View, {
                            className: "line-two",
                            children: h,
                          }),
                      ],
                    }),
                  ],
                })
              );
            },
            Ut = function (e) {
              return !(!w().canIUse || !w().canIUse(e));
            },
            Ot = Ut("button.open-type.getUserInfo"),
            Kt = Ut("button.open-type.share"),
            Gt = function (e) {
              var t = (0, Z.useState)("loginBtn"),
                a = (0, ee.Z)(t, 2),
                n = a[0],
                i = a[1],
                c = e.pageId,
                s = e.isTieyou,
                r = void 0 !== s && s,
                o = e.isSelf,
                l = void 0 !== o && o,
                d = e.isCurrentLogin,
                u = void 0 !== d && d,
                h = e.isAuthorizeFailed,
                p = void 0 !== h && h,
                g = e.hasUserInfo,
                f = void 0 !== g && g,
                m = e.needSubBeforeAcceRate,
                _ = void 0 !== m && m,
                b = e.accelerateStatusInfo,
                w = void 0 === b ? {} : b,
                N = e.acceAfterUserInfo,
                I = void 0 === N ? function () {} : N,
                S = e.acceAfterUserInfoOld,
                y = void 0 === S ? function () {} : S,
                k = e.handleAcceWithType,
                T = void 0 === k ? function () {} : k,
                V = e.gotoLogin,
                A = void 0 === V ? function () {} : V,
                x = e.setSubscribeBeforeAcceRate,
                P = void 0 === x ? function () {} : x,
                C = e.buyTicket,
                B = void 0 === C ? function () {} : C,
                M = e.handleSharePicture,
                R = void 0 === M ? function () {} : M,
                L = e.ubtTrace,
                D = void 0 === L ? function () {} : L,
                E = e.goldFingerInfo,
                X = e.grabSpeedLevelInfo,
                z = e.showGoldFingerPopup,
                F = e.hasShowUserProfile,
                U = wx && wx.getUserProfile,
                O = w.statusCode,
                G = 205 !== O && 200 !== O && 201 !== O,
                j = (0, K.JO)();
              function W() {}
              return (
                console.log("hasUserInfo", f),
                console.log("hasShowUserProfile", F),
                (0, Z.useEffect)(
                  function () {
                    var e = (0, re.l2)({
                      isLogin: u,
                      needSubBeforeAcceRate: _,
                      hasUserInfo: f,
                      isSelf: l,
                      accelerateStatusInfo: w,
                      isTieyou: r,
                      goldFingerInfo: E,
                      grabSpeedLevelInfo: X,
                      showGoldFingerPopup: z,
                    }).buttonType;
                    i(e);
                  },
                  [f, _, u, F, w]
                ),
                (0, Z.useEffect)(
                  function () {
                    ["oneKeyAccBtn", "acceImmediateBtn"].includes(n) &&
                      D("TZWFriendSpeed_ForFriendAccelerate_exposure", {
                        PageId: c,
                      });
                  },
                  [n]
                ),
                console.log("btnType", n),
                (0, H.tZ)(v.View, {
                  className: "train-robshare-button-acce",
                  children: (0, H.tZ)(v.View, {
                    children: (0, H.BX)(v.View, {
                      className: "speed-btnbox",
                      onClick: function () {
                        ["oneKeyAccBtn", "acceImmediateBtn"].includes(n) &&
                          D("TZWFriendSpeed_ForFriendAccelerate_click", {
                            PageId: c,
                          });
                      },
                      children: [
                        "loginBtn" === n &&
                          (0, H.tZ)(v.Block, {
                            children: (0, H.tZ)(v.Button, {
                              className: "btn-red tline single-line",
                              id: "APAJ",
                              onClick: A,
                              children:
                                "登录" + (r ? "铁友" : "智行") + "为好友加速",
                            }),
                          }),
                        "helpMeBtn" === n &&
                          (0, K.rh)() &&
                          (0, H.tZ)(v.Button, {
                            className: "btn-red tline single-line",
                            hoverClass: "btn-lineblue_hover",
                            "data-ubt-key": "wx_robshare0914_share",
                            id: "APAK",
                            onClick: j ? W : R,
                            openType: j ? "share" : "",
                            children: "召集好友帮我加速",
                          }),
                        "oneKeyAccBtn" === n &&
                          (0, H.tZ)(v.Block, {
                            children: U
                              ? (0, H.tZ)(v.Button, {
                                  className: Kt ? "btn-red" : "btn-lineblue",
                                  id: "APAL",
                                  onClick: I,
                                  children: "一键为好友加速",
                                })
                              : (0, H.tZ)(v.View, {
                                  children:
                                    p && Ot
                                      ? (0, H.tZ)(v.Button, {
                                          className: Kt
                                            ? "btn-red"
                                            : "btn-lineblue",
                                          openType: "getUserInfo",
                                          onGetuserinfo: y,
                                          children: "一键为好友加速",
                                        })
                                      : (0, H.tZ)(v.Button, {
                                          className: Kt
                                            ? "btn-red"
                                            : "btn-lineblue",
                                          id: "APAM",
                                          onClick: T,
                                          children: "一键为好友加速",
                                        }),
                                }),
                          }),
                        "acceImmediateBtn" === n &&
                          (0, H.BX)(v.Button, {
                            className: Kt ? "btn-red" : "btn-lineblue",
                            id: "APAN",
                            onClick: _ ? P : T,
                            children: [
                              F && "立即加速",
                              !F && G && !l && "立即加速",
                              !F && !G && l && "立即加速",
                              !F && !G && !l && "一键为好友加速",
                            ],
                          }),
                        "travelBtn" === n &&
                          (0, H.BX)(v.Button, {
                            className:
                              (Kt ? "btn-red" : "btn-lineblue") + " tline",
                            hoverClass:
                              (Kt ? "btn-red" : "btn-lineblue") + "_hover",
                            id: "APAO",
                            onClick: B,
                            "data-ubt-key": "wx_robshare0914_buy",
                            children: [
                              "我也要出行",
                              (0, H.tZ)(v.Text, {
                                className: "s",
                                children: "火车票|机票|酒店|汽车|门票",
                              }),
                            ],
                          }),
                        "buyTicketBtn" === n &&
                          (0, H.BX)(v.Button, {
                            className:
                              (Kt ? "btn-red" : "btn-lineblue") + " tline",
                            hoverClass:
                              (Kt ? "btn-red" : "btn-lineblue") + "_hover",
                            id: "APAP",
                            onClick: B,
                            "data-ubt-key": "wx_robshare0914_buy",
                            children: [
                              "继续购票",
                              (0, H.tZ)(v.Text, {
                                className: "s",
                                children: "火车票|机票|酒店|汽车|门票",
                              }),
                            ],
                          }),
                        "helpHimBtn" === n &&
                          (0, H.tZ)(v.Button, {
                            className: "btn-lineblue tline single-line",
                            hoverClass: "btn-lineblue_hover",
                            "data-ubt-key": "wx_robshare0914_share",
                            id: "APAQ",
                            onClick: j ? W : R,
                            openType: j ? "share" : "",
                            children: "召集好友帮Ta加速",
                          }),
                        "travelAndHelpHimBtn" === n &&
                          (0, H.BX)(v.Block, {
                            children: [
                              (0, H.BX)(v.Button, {
                                className:
                                  (Kt ? "btn-red" : "btn-lineblue") + " tline",
                                hoverClass:
                                  (Kt ? "btn-red" : "btn-lineblue") + "_hover",
                                id: "APAR",
                                onClick: B,
                                "data-ubt-key": "wx_robshare0914_buy",
                                children: [
                                  "我也要出行",
                                  (0, H.tZ)(v.Text, {
                                    className: "s",
                                    children: "火车票|机票|酒店|汽车|门票",
                                  }),
                                ],
                              }),
                              (0, K.rh)() &&
                                (0, H.tZ)(v.Button, {
                                  className: "btn-lineblue tline single-line",
                                  hoverClass: "btn-lineblue_hover",
                                  "data-ubt-key": "wx_robshare0914_share",
                                  id: "APAS",
                                  onClick: j ? W : R,
                                  openType: j ? "share" : "",
                                  children: "召集好友帮Ta加速",
                                }),
                            ],
                          }),
                      ],
                    }),
                  }),
                })
              );
            },
            jt = function (e) {
              var t = e.accelerateTaskInfo,
                a = void 0 === t ? {} : t,
                n = e.helpAcce,
                i = void 0 === n ? function () {} : n,
                c = a.taskList || [];
              return (0, H.tZ)(v.View, {
                className: "train-robshare-other-way-acce-model",
                children: (0, H.BX)(v.View, {
                  className: "white-box more-expedite",
                  children: [
                    (0, H.tZ)(v.View, { className: "htit", children: a.title }),
                    c &&
                      c.length > 0 &&
                      c.map(function (e, t) {
                        return (0, H.BX)(
                          v.View,
                          {
                            className: "item",
                            children: [
                              (0, H.tZ)(v.Image, {
                                src: e.icon,
                                className: "icon",
                              }),
                              (0, H.BX)(v.View, {
                                className: "cont",
                                children: [
                                  (0, H.tZ)(v.View, {
                                    className: "tit",
                                    children: e.title,
                                  }),
                                  (0, H.tZ)(v.View, {
                                    className: "txt",
                                    children: (0, H.tZ)(Qe.ZtRichText, {
                                      nodes: e.subTitle,
                                    }),
                                  }),
                                ],
                              }),
                              (0, H.tZ)(v.Button, {
                                className: "btn-help",
                                id: "APAm",
                                onClick: function () {
                                  i(e.actionValue);
                                },
                                children: e.btnName,
                              }),
                            ],
                          },
                          "more-way-acce-".concat(t)
                        );
                      }),
                  ],
                }),
              });
            },
            Wt = function (e) {
              var t,
                a = e.isTieyou,
                n = void 0 !== a && a,
                i = e.activityPopInfo,
                c = void 0 === i ? {} : i,
                s = e.feedbackType,
                r = void 0 === s ? "" : s,
                o = e.accelerateType,
                l = void 0 === o ? "" : o,
                d = e.accelerateActionRes,
                u = void 0 === d ? {} : d,
                h = e.accelerateStatusInfo,
                p = void 0 === h ? {} : h,
                g = e.skipFromFeedBackPop,
                f = void 0 === g ? function () {} : g,
                m = e.hideFeedBackPop,
                _ = void 0 === m ? function () {} : m,
                b = {
                  success:
                    "https://images3.c-ctrip.com/ztrip/train.song/xcx/img_jiscg_tt.png",
                  successWithoutActivityReturn:
                    "https://images3.c-ctrip.com/ztrip/train.song/xcx/img_jiscg_tt.png",
                  grabsuccess:
                    "https://images3.c-ctrip.com/ztrip/train.song/xcx/img_hyqpcg_tt@3x.png",
                  fail: "https://images3.c-ctrip.com/ztrip/train.song/xcx/img_jisb_tt.png",
                  default:
                    "https://images3.c-ctrip.com/ztrip/train.song/xcx/img_jiscg_tt.png",
                },
                w = b[r] || b.default,
                Z =
                  (c.content || []).find(function (e) {
                    return "img" === e.type;
                  }) || {},
                N = u.accelerateLevel || 0;
              return (
                (t =
                  "success" === r
                    ? 100 === l || 101 === l
                      ? "恭喜您为好友加速成功"
                      : "您为好友加速成功！"
                    : p.statusDesc || ""),
                (0, H.BX)(v.View, {
                  className: "train-robshare-feedback-popup",
                  children: [
                    (0, H.tZ)(v.View, {
                      className: "shade-box",
                      id: "APAT",
                      onClick: _,
                    }),
                    "successWithoutActivityReturn" === r &&
                      (0, H.BX)(v.View, {
                        className: "m-feedback-popup-without-ac",
                        children: [
                          N > 0 &&
                            (0, H.tZ)(v.Image, {
                              src: w,
                              className: "head-img",
                            }),
                          (0, H.BX)(v.View, {
                            className: "ctn",
                            children: [
                              N > 0 &&
                                (0, H.tZ)(v.Image, {
                                  src: "https://images3.c-ctrip.com/ztrip/train.song/xcx/img_jscg@3x.png",
                                  className: "acce-success",
                                }),
                              N > 0
                                ? (0, H.tZ)(v.View, {
                                    className: "txt",
                                    children: "恭喜您为好友加速成功",
                                  })
                                : (0, H.BX)(v.View, {
                                    className: "txt",
                                    children: [
                                      "哎呀，运气不好，帮好友抽到了0个",
                                      n ? "抢票券" : S.Z.SPEED_PACK,
                                    ],
                                  }),
                            ],
                          }),
                          (0, H.tZ)(v.Button, {
                            className: "btn-light",
                            id: "APAU",
                            onClick: _,
                            children: "知道了",
                          }),
                        ],
                      }),
                    ("fail" === r || "success" === r || "grabsuccess" === r) &&
                      (0, H.BX)(v.View, {
                        className: "m-feedback-popup",
                        children: [
                          (0, H.tZ)(v.Image, { src: w, className: "head-img" }),
                          (0, H.tZ)(v.View, { className: "tit", children: t }),
                          (0, H.BX)(v.View, {
                            className: "give",
                            children: [
                              "赠送您",
                              (0, H.tZ)(v.Text, {
                                className: "yellow",
                                children: c.title,
                              }),
                            ],
                          }),
                          (0, H.tZ)(v.Image, {
                            className: "img-cxy",
                            src: Z.imgUrl,
                          }),
                          (0, H.tZ)(v.Button, {
                            className: "btn-submit",
                            id: "APAV",
                            onClick: f,
                            children: c.btnName,
                          }),
                          (0, H.tZ)(v.Icon, {
                            className: "icon-closed",
                            id: "APAW",
                            onClick: _,
                          }),
                        ],
                      }),
                  ],
                })
              );
            },
            qt = Z.default.memo(function (e) {
              var t = e.marketCouponInfo,
                a = void 0 === t ? {} : t,
                n = e.marketDiscountInfo,
                i = void 0 === n ? {} : n,
                c = e.onClickMarketBannerGot,
                s = void 0 === c ? function () {} : c,
                r = e.onClickMarketBannerItem,
                o = void 0 === r ? function () {} : r,
                l = e.onClickMarketDiscountInfo,
                d = void 0 === l ? function () {} : l;
              return (0, H.tZ)(v.View, {
                className: "robshare-market-user-banner",
                children: (0, H.BX)(v.View, {
                  className:
                    "m-welfare-guest " +
                    (a && "green" === a.theme ? "student" : ""),
                  children: [
                    (0, H.BX)(v.Block, {
                      children: [
                        a &&
                          a.titleImg &&
                          (0, H.BX)(v.View, {
                            className: "head",
                            children: [
                              (0, H.BX)(v.View, {
                                className: "img-ctn",
                                children: [
                                  (0, H.tZ)(v.Image, {
                                    src: a.icon,
                                    className: "icon",
                                  }),
                                  (0, H.tZ)(v.Image, {
                                    src: a.titleImg,
                                    className: "icon-welfare",
                                  }),
                                ],
                              }),
                              a.showBtn &&
                                (0, H.BX)(v.View, {
                                  className: "got-coupon-btn",
                                  id: "APAg",
                                  onClick: s,
                                  children: [
                                    (0, H.tZ)(v.View, {
                                      className: "txt",
                                      children: a.btnName,
                                    }),
                                    (0, H.tZ)(v.View, {
                                      className: "arrow-icon",
                                      children: (0, H.tZ)(v.View, {
                                        className: "img",
                                      }),
                                    }),
                                  ],
                                }),
                              !a.showBtn &&
                                (0, H.tZ)(v.Text, {
                                  className: "tip-got",
                                  children: a.receivedName,
                                }),
                            ],
                          }),
                        a.content &&
                          a.content[0] &&
                          (0, H.tZ)(v.View, {
                            className: "coupon-list",
                            children: (0, H.tZ)(v.View, {
                              className: "coupon-container",
                              children: a.content.map(function (e) {
                                return (0,
                                H.BX)(v.View, { className: "coupon-item " + (e.btnName ? "got " : " ") + ("redPacket" === e.style ? "red-packet-item" : ""), children: ["redPacket" === e.style && (0, H.BX)(v.View, { className: "red-packet", children: [(0, H.tZ)(v.View, { className: "main-txt", children: e.title }), (0, H.tZ)(v.View, { className: "sub-txt", children: e.desc }), e.btnName && (0, H.tZ)(v.View, { className: "join-btn", id: "APAh", onClick: o.bind(void 0, e), children: e.btnName })] }), "redPacket" !== e.style && (0, H.BX)(v.Block, { children: [(0, H.tZ)(v.View, { className: "top-tag", children: e.tag }), (0, H.tZ)(v.View, { className: -1 === e.title.indexOf("¥") ? "main-txt" : "main-price", children: e.title.replace("¥", "") }), (0, H.tZ)(v.View, { className: "sub-txt", children: e.desc }), e.btnName && (0, H.tZ)(v.View, { className: "use-btn", id: "APAi", onClick: o.bind(void 0, e), children: e.btnName })] })] }, "index");
                              }),
                            }),
                          }),
                      ],
                    }),
                    i &&
                      i.content &&
                      (0, H.BX)(v.View, {
                        className: "discount-info",
                        children: [
                          (0, H.BX)(v.View, {
                            className: "title-info",
                            children: [
                              (0, H.BX)(v.View, {
                                className: "left-text",
                                children: [
                                  (0, H.tZ)(v.View, {
                                    className: "strong",
                                    children: i.title,
                                  }),
                                  (0, H.BX)(v.View, {
                                    className: "icon",
                                    children: [
                                      (0, H.tZ)(v.View, {
                                        className: "left",
                                        children: i.tagPrefix,
                                      }),
                                      (0, H.tZ)(v.View, {
                                        className: "right",
                                        children: i.tag,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, H.BX)(v.View, {
                                className: "right-btn",
                                id: "APAj",
                                onClick: d,
                                children: [
                                  (0, H.tZ)(v.View, {
                                    className: "txt",
                                    children: i.btnName,
                                  }),
                                  (0, H.tZ)(v.View, { className: "arrow" }),
                                ],
                              }),
                            ],
                          }),
                          (0, H.tZ)(v.View, {
                            className: "content-info",
                            children: i.content.map(function (e) {
                              return (0,
                              H.BX)(v.View, { className: "item", children: [(0, H.tZ)(v.Image, { src: e.img, className: "icon" }), (0, H.BX)(v.View, { className: "scene-info", children: [(0, H.tZ)(v.View, { className: "scene-title", children: e.title }), (0, H.BX)(v.View, { className: "scene-desc", children: ["低至", (0, H.BX)(v.Text, { className: "red-txt", children: [e.price, "元"] })] })] })] }, "index");
                            }),
                          }),
                        ],
                      }),
                  ],
                }),
              });
            }),
            Ht = function (e) {
              var t = e.activityInfo,
                a = void 0 === t ? {} : t,
                n = e.bannerClickHandler,
                i = void 0 === n ? function () {} : n,
                c = (a.banner || {}).tagList || [];
              return a
                ? (0, H.tZ)(v.View, {
                    className: "train-robshare-activity-banner",
                    children: (0, H.BX)(v.View, {
                      className: "white-box activity-banner",
                      id: "APAG",
                      onClick: i,
                      children: [
                        (0, H.tZ)(v.Image, {
                          className: "bg-img",
                          src: a.banner.bg,
                          mode: "widthFix",
                        }),
                        (0, H.BX)(v.View, {
                          className: "banner-ctn",
                          children: [
                            (0, H.BX)(v.View, {
                              className: "tit",
                              children: [
                                (0, H.tZ)(v.View, {
                                  className: "u-txt",
                                  children: a.banner.title,
                                }),
                                a.banner.titleImg &&
                                  (0, H.tZ)(v.Image, {
                                    className: "u-img",
                                    src: a.banner.titleImg,
                                  }),
                                c &&
                                  (0, H.tZ)(v.View, {
                                    className: "code-ctn",
                                    children:
                                      c.length > 0 &&
                                      c.map(function (e, t) {
                                        return (0,
                                        H.tZ)(v.View, { className: "code", children: e }, "code-".concat(t));
                                      }),
                                  }),
                              ],
                            }),
                            (0, H.BX)(v.View, {
                              className: "txt",
                              children: [
                                a.banner.desc,
                                a.banner.btnName &&
                                  (0, H.BX)(v.Text, {
                                    className: "btn-txt",
                                    children: [
                                      a.banner.btnName,
                                      (0, H.tZ)(v.Text, {
                                        class: "ifont-arr iconfont",
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  })
                : (0, H.tZ)(v.View, {});
            },
            Jt = I.default.appId,
            Yt = O.Z.TMPIDS_NORMAL_INFO,
            Qt = {
              wx76dcd806f382ec8e: "2ISOORjxL4aYKi3ciD86d1ZJdzr2y-JExTC5u1dGXpU",
              wx45dff5234240ad90: "fIv4pnJAwo2jRWC6Gq50VV7uBs8xG3IyvCcheDtvdVo",
              wx78a2429469c8c120: "TlXuCWCm5VuqM4LCvlY6L_RsT-wokvqumJnloY3Nwnk",
              wx2a123137e10cae35: "6zgVatxn5HzDGyDKvffUU7Z4eTVckQXFAyV-mUrkM38",
              wx41109903d3bb4f63: "pA7h7P9sn9dSoy8KfbZcbj52iUvq0NkL6rRysontu0s",
              wxbd33b0cfa7cda030: "y-bguzO1yYE3o-2iwQYSPUYYZmfbg76p12btzIcK4eI",
              wx4efc89b936baea18: "2LmM-LFQhkjMMc5JpSQ6EjIPAYrZhyH3ilJV0_tkHAY",
            }[Jt],
            $t = O.Z.TRAIN_BUY_REMIND_ID,
            ea = O.Z.ACTIVITY_REMIND_ID,
            ta = {
              home: "回家",
              faraway: "去远方",
              school: "去学校",
              heart: "去你心里",
            },
            aa = "zx" === I.default.jetpack || "ty" === I.default.jetpack,
            na = I.default.isTieyou,
            ia = null,
            ca =
              "width: 280px;height: 88rpx;line-height: 88rpx;text-align: center;left: 50%;margin-left: -140px;background: #".concat(
                na ? "fc6e51" : "2791FF",
                ";margin-top: 80rpx;font-size: 36rpx;color: #fff;border-radius: 44rpx;"
              ),
            sa = {
              pageId: na ? "10650056230" : "10650056228",
              data: {
                isWechat: I.default.isWechat,
                pageStage: "init",
                pkgNum: 0,
                adInfos: [],
                collectGetPkgShow: !1,
                toSubscribeIdsBeforeAcceRate: [],
                isCurrentLogin: !1,
                hasUserInfo: !1,
                canIUseGetUserProfile: !1,
                toInviteLength: 0,
                userName: y.ZP.userName,
                grabSpeedLevelInfo: {},
                accelerateActionStatus: "",
                accelerateActionRes: {},
                activityPopInfo: {},
                feedbackType: "",
                isShowRobResultBox: !1,
                isShowPeakRemind: !1,
                needSubBeforeAcceRate: !1,
                sponsor: 0,
                isGotTenPkg: !1,
                activityInfo: {},
                marketCouponInfo: {},
                subscribeModalInfo: {},
                isShareGZH: !1,
                pageKey: "",
                speedADOpened: !1,
                showShareImages: !1,
                pictureStatus: "loading",
                sharePicTitle: "",
                canMakePic: !0,
                errorPicMsg: "",
                maskVisible: !1,
                pagePath: "",
                shareInfoList: [],
                customizeTagList: [],
                backgroundUrl: "",
                sharePicSpringText: "",
                subscribeIdReady: !1,
                hasShowUserProfile: !1,
                accelerateModalType: "BROWSE_WECHAT_CHANNEL",
                isJumpToNewUserGifts: !1,
                gameLotteryBanner: null,
              },
              onLoad: function (e) {
                console.log("options:", e),
                  (this.options = e),
                  (this.hasRunOnceAction = !1),
                  this.getSubscribeInfo(),
                  wx &&
                    wx.getUserProfile &&
                    this.setData({ canIUseGetUserProfile: !0 }),
                  (this.acceImmediately = !1);
                var t = decodeURIComponent(e.scene || "");
                t && 16 === t.length
                  ? ((this.shortKey = t),
                    (this.getShareKeyPromise = this.getGenerateParam()))
                  : (console.warn("scene is:", t),
                    (this.shareKey = t),
                    (this.type = e.type || ""),
                    this.setData({ showArriveStation: ta[e.tagCode] || "" })),
                  (this.openidPromise = this.getOpenIdAction()),
                  console.log("officialAccountAccelerate", e.from),
                  "officialAccountAccelerate" === e.from &&
                    this.setData({ isShareGZH: !0, pageKey: e.pageKey || "" });
                var a = (0, K.NA)();
                this.setData({ gameLotteryBanner: a }),
                  a &&
                    this.ubtTrace(213462, {
                      shareKey: this.shareKey,
                      openId: y.ZP.openid,
                      bizType: "ActivityEntranceBannerShow",
                    });
              },
              onShow: function () {
                this.initMain(),
                  this.robShareImageTrace(this.options),
                  "B" === this.data.newCode && this.isNotFirstShow && ze(),
                  (this.isNotFirstShow = !0),
                  this.data.gameLotteryBanner && this.traceHooks(208007);
              },
              handleAds: function () {
                this.fetchAdInfos(),
                  (this.trainAdExposureCountFlag = !0),
                  (this.bannerShownMap = new Map());
              },
              handleCollectGetPkg: function () {
                var e = w().getStorageSync("COLLECT_CLOSE");
                this.setData({
                  collectGetPkgShow: !(e && e == U.Z.getToday()),
                });
              },
              onUnload: function () {
                this.showVideoAdTimer &&
                  (clearTimeout(this.showVideoAdTimer),
                  (this.showVideoAdTimer = null));
              },
              initMain: function () {
                this.mainThread(),
                  this.hasRunOnceAction ||
                    ((this.hasRunOnceAction = !0),
                    w().showShareMenu &&
                      w().showShareMenu({ withShareTicket: !0 }),
                    this.createRewardVideoAd(),
                    D.Z.setTitle(
                      "".concat(I.default.partnerCN, "火车票抢票神器")
                    ),
                    D.Z.setLaunchSource({
                      loginSoureType: "wechat",
                      loginSourceName: "xcxjs",
                    }));
              },
              mainThread: function () {
                var e = this,
                  t = this.shortKey
                    ? [this.openidPromise, this.getShareKeyPromise]
                    : [this.openidPromise];
                Promise.all(t).then(
                  (0, _.Z)(
                    (0, m.Z)().mark(function t() {
                      return (0, m.Z)().wrap(function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                e.updateFriendShareRelation(),
                                e.fetchOrderShareDetail(),
                                (t.next = 4),
                                e.fetchOrderShareRecommend()
                              );
                            case 4:
                              e.queryAccelerateTypeInfo();
                            case 5:
                            case "end":
                              return t.stop();
                          }
                      }, t);
                    })
                  )
                );
              },
              getOpenIdAction: function () {
                var e = this;
                return (0, y.M9)().then(
                  function () {
                    return e.setData({ canGetMobile: !0 });
                  },
                  function () {
                    return e.setData({ canGetMobile: !1 });
                  }
                );
              },
              robShareImageTrace: function (e) {
                if (!na)
                  try {
                    var t = e.type,
                      a = void 0 === t ? "weixin" : t,
                      n = e.abChannelFrom,
                      i = void 0 === n ? "orderdetail" : n,
                      c = e.abChannelType,
                      s = void 0 === c ? "" : c;
                    this.ubtTrace(141153, {
                      shareKey: this.shareKey,
                      openId: y.ZP.openid,
                      channel: a,
                      abTestValue: "A",
                      abChannelFrom: i,
                      abChannelType: s,
                    });
                  } catch (e) {
                    console.log(e);
                  }
              },
              updateShareUserInfo: function () {
                return (0, _.Z)(
                  (0, m.Z)().mark(function e() {
                    var t, a, n, i;
                    return (0, m.Z)().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (t = w().getStorageSync("USERINFONEW") || {}),
                                (a = t.nickName || "神秘用户"),
                                (n =
                                  t.avatarUrl ||
                                  "https://youimg1.c-ctrip.com/target/10090v000000k3bfv65E1_R_640_10000_Q90.jpg"),
                                (i = {
                                  photoUrl: n,
                                  name: a,
                                  openId: y.ZP.openid,
                                }),
                                (e.prev = 4),
                                (e.next = 7),
                                (0, C.ryV)(i)
                              );
                            case 7:
                              e.next = 12;
                              break;
                            case 9:
                              (e.prev = 9),
                                (e.t0 = e.catch(4)),
                                console.log(e.t0);
                            case 12:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[4, 9]]
                    );
                  })
                )();
              },
              updateFriendShareRelation: function () {
                var e = this;
                return (0, _.Z)(
                  (0, m.Z)().mark(function t() {
                    var a, n, i, c;
                    return (0, m.Z)().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (a = w().getStorageSync("USERINFONEW") || {}),
                                (n = a.nickName || "神秘用户"),
                                (i =
                                  a.avatarUrl ||
                                  "https://youimg1.c-ctrip.com/target/10090v000000k3bfv65E1_R_640_10000_Q90.jpg"),
                                (c = {
                                  shareKey: e.shareKey,
                                  friendPhotoUrl: i,
                                  friendOpenId: y.ZP.openid,
                                  friendName: n,
                                  activityType: 1,
                                }),
                                (t.prev = 4),
                                (t.next = 7),
                                (0, C.fj7)(c)
                              );
                            case 7:
                              t.next = 12;
                              break;
                            case 9:
                              (t.prev = 9),
                                (t.t0 = t.catch(4)),
                                console.log(t.t0);
                            case 12:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      null,
                      [[4, 9]]
                    );
                  })
                )();
              },
              getGenerateParam: function () {
                var e = this;
                w().showLoading();
                var t = "";
                return (0, x.cq)({
                  key: this.shortKey,
                  scene: R.ZP.generateParamsScene,
                })
                  .then(function (a) {
                    if (
                      (console.log("get Generate Param success"),
                      1 === a.resultCode)
                    ) {
                      var n = D.Z.getUrlParams(a.param || "") || {};
                      (t = n.scene),
                        (e.shareKey = decodeURIComponent(n.scene || "")),
                        (e.type = n.type || ""),
                        e.setData({ showArriveStation: ta[n.tagCode] || "" });
                    }
                  })
                  .catch(function (a) {
                    console.log("get Generate Param fail:", a),
                      e.ubtDevTrace(182697, {
                        cid: y.ZP.cid || "",
                        userName: y.ZP.userName || "",
                        decodeParam: t || "",
                        func: "getGenerateParam",
                      });
                  })
                  .finally(function () {
                    try {
                      w().hideLoading();
                    } catch (e) {}
                  });
              },
              showCollectGetPkg: function () {
                this.setData({ showType: "collectMiniApp" });
              },
              closeCollectGetPkg: function (e) {
                e.stopPropagation(),
                  w().setStorageSync("COLLECT_CLOSE", U.Z.getToday()),
                  this.setData({ collectGetPkgShow: !1 });
              },
              hideCollectGetPkg: function () {
                this.setData({ showType: "" });
              },
              getConfigDetail: function () {
                var e = this;
                return (0, _.Z)(
                  (0, m.Z)().mark(function t() {
                    var a, n, i, c, s, r;
                    return (0, m.Z)().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (t.prev = 0),
                                (a = {
                                  keys: ["ztrip-fe-train-robshare-config"],
                                }),
                                (t.next = 4),
                                (0, x.yp)(a)
                              );
                            case 4:
                              (n = t.sent) &&
                                1 === n.resultCode &&
                                ((i = n.configData),
                                (c = void 0 === i ? [] : i),
                                D.Z.notEmptyArray(c) &&
                                  ((s =
                                    c.find(function (e) {
                                      return (
                                        "ztrip-fe-train-robshare-config" ===
                                        e.key
                                      );
                                    }) || {}),
                                  (r = s.data),
                                  e.setData({
                                    sponsor: r.sponsor,
                                    sponsorHeadText: r.sponsorHeadText,
                                    lotterySponsorImg: r.lotterySponsorImg,
                                    sponsorHeadImg: r.sponsorHeadImg,
                                    isShowGrabScreen: r.isShowGrabScreen,
                                    newGuestUrl: r.newGuestUrl,
                                    speedADOpened: r.speedADOpened && !na,
                                  }),
                                  (e.shareImgs = [
                                    na ? r.shareImgTY : r.shareImgZX,
                                  ]),
                                  r.speedADOpened &&
                                    !na &&
                                    (e.shareImgs = [r.speedADShareImageUrl]),
                                  (e.stuShareImgs = r.stu.split(",")),
                                  (e.newGuestShareImgs =
                                    r.newGuest.split(",")))),
                                (t.next = 11);
                              break;
                            case 8:
                              (t.prev = 8),
                                (t.t0 = t.catch(0)),
                                console.log(t.t0);
                            case 11:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      null,
                      [[0, 8]]
                    );
                  })
                )();
              },
              fetchOrderShareRecommend: function () {
                var e = this;
                return (0, _.Z)(
                  (0, m.Z)().mark(function t() {
                    var a, n, i, c;
                    return (0, m.Z)().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (t.prev = 0),
                                ((a = {
                                  shareKey: e.shareKey,
                                  openId: y.ZP.openid,
                                  reqTime: "" + new Date().getTime(),
                                }).sign = (0, re.nF)(a)),
                                (t.next = 5),
                                (0, C.kCv)(a, { checkFrameworkLogin: !1 })
                              );
                            case 5:
                              if ((n = t.sent) && 1 === n.resultCode) {
                                if (
                                  (console.log(
                                    "+++++fetch orderShareRecommend: ",
                                    n
                                  ),
                                  (i = {}),
                                  n.commonBannerList &&
                                    Array.isArray(n.commonBannerList) &&
                                    n.commonBannerList.length > 0 &&
                                    (c = n.commonBannerList.find(function (e) {
                                      return (
                                        "json-H5ActivityMerge" === e.bannerName
                                      );
                                    })) &&
                                    c.bannerJson &&
                                    ((i = JSON.parse(c.bannerJson) || {}),
                                    console.log("activityInfo", i),
                                    i.banner))
                                )
                                  try {
                                    e.ubtTrace(192969, {
                                      shareKey: e.shareKey,
                                      openId: y.ZP.openid,
                                      type: i.type,
                                    });
                                  } catch (e) {
                                    console.log(e);
                                  }
                                console.log("-------- activityInfo:", i),
                                  e.setData({
                                    grabBigScreenInfo:
                                      n.grabBigScreenInfo || {},
                                    activityInfo: i,
                                    marketCouponInfo:
                                      (y.ZP.isLogin && i.fixModule) || {},
                                    historyFriendInfo:
                                      n.historyFriendInfo || {},
                                    accelerateTaskInfo:
                                      n.accelerateTaskInfo || {},
                                  });
                              }
                              t.next = 12;
                              break;
                            case 9:
                              (t.prev = 9),
                                (t.t0 = t.catch(0)),
                                console.error("加速页获取推荐信息出错:", t.t0);
                            case 12:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      null,
                      [[0, 9]]
                    );
                  })
                )();
              },
              fetchOrderShareDetail: function () {
                var e = arguments,
                  t = this;
                return (0, _.Z)(
                  (0, m.Z)().mark(function a() {
                    var n, i, c, s, r, o;
                    return (0, m.Z)().wrap(
                      function (a) {
                        for (;;)
                          switch ((a.prev = a.next)) {
                            case 0:
                              return (
                                (n =
                                  e.length > 0 && void 0 !== e[0] ? e[0] : ""),
                                (a.prev = 1),
                                ((i = {
                                  shareKey: t.shareKey,
                                  openId: y.ZP.openid,
                                  reqTime: "" + new Date().getTime(),
                                }).sign = (0, re.nF)(i)),
                                (a.next = 6),
                                (0, C.k4D)(i, { checkFrameworkLogin: !1 })
                              );
                            case 6:
                              if (!(c = a.sent) || 1 !== c.resultCode) {
                                a.next = 27;
                                break;
                              }
                              if (
                                (console.log("+++++fetch orderShareDetail:", c),
                                (s =
                                  c.activityMaxAcceCount -
                                    (
                                      (c.accelerateInfo || {})
                                        .acclerateRecord || []
                                    ).length || 0) < 0 && (s = 0),
                                c.accelerateInfo &&
                                  c.accelerateInfo.acclerateRecord &&
                                  (0, re.sy)(c.accelerateInfo.acclerateRecord),
                                (r = w().getStorageSync("USERINFONEW") || {}),
                                (o = r && r.nickName) &&
                                  (t.acceImmediately = !0),
                                console.log(
                                  "设置按钮类型的时候检查是否拿到用户信息:",
                                  r,
                                  r.nickName
                                ),
                                t.setData({
                                  accelerateStatusInfo: c.accelerateStatusInfo,
                                  accelerateRuleDesc:
                                    c.accelerateRuleDesc || [],
                                  grabOrderInfo: c.grabOrderInfo || {},
                                  grabSpeedLevelInfo:
                                    c.grabSpeedLevelInfo || {},
                                  accelerateInfo: c.accelerateInfo,
                                  goldFingerInfo: c.goldFingerInfo || {},
                                  isInGrab:
                                    100 ===
                                    (c.accelerateStatusInfo || {}).statusCode,
                                  isCurrentLogin: 1 === c.loginStatus,
                                  isSelf: 1 === c.orderUser,
                                  toInviteLength: s,
                                  hasUserInfo: o,
                                  pageStage: "detailLoaded",
                                }),
                                "afterAcce" !== n)
                              ) {
                                a.next = 19;
                                break;
                              }
                              return a.abrupt("return");
                            case 19:
                              t.handleAds(),
                                t.getConfigDetail(),
                                t.handleCollectGetPkg(),
                                t.checkSubscribeModal(),
                                t.getShareConfigDetail(),
                                t.getCustomizeShareInfo(c.grabOrderInfo),
                                (a.next = 29);
                              break;
                            case 27:
                              console.warn("orderShareDetail wrong:", c),
                                t.setData({
                                  pageStage: "detailLoaded",
                                  showType: "crash",
                                });
                            case 29:
                              a.next = 35;
                              break;
                            case 31:
                              (a.prev = 31),
                                (a.t0 = a.catch(1)),
                                console.error(
                                  "加速页主流程获取详情出错:",
                                  a.t0
                                ),
                                t.setData({
                                  pageStage: "detailLoaded",
                                  showType: "crash",
                                });
                            case 35:
                            case "end":
                              return a.stop();
                          }
                      },
                      a,
                      null,
                      [[1, 31]]
                    );
                  })
                )();
              },
              queryAccelerateTypeInfo: function () {
                var e = this;
                return (0, _.Z)(
                  (0, m.Z)().mark(function t() {
                    var a;
                    return (0, m.Z)().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if (
                              (console.log("等了请求", y.ZP.isLogin),
                              y.ZP.isLogin && !e.data.accelerateType)
                            ) {
                              t.next = 3;
                              break;
                            }
                            return t.abrupt("return");
                          case 3:
                            (a = { orderNumber: e.shareKey }),
                              (0, C.oAG)(a, { checkFrameworkLogin: !1 }).then(
                                function (t) {
                                  if (
                                    1 === (null == t ? void 0 : t.resultCode)
                                  ) {
                                    var a = t.accelerateCode,
                                      n = t.accelerateDesc,
                                      i = t.data;
                                    if (
                                      (e.setData({ accelerateType: a }),
                                      Xe(a, n, i),
                                      507 === a)
                                    ) {
                                      var c,
                                        s = JSON.parse(t.data || "{}"),
                                        r = "";
                                      1 === s.resultCode &&
                                        (r =
                                          (null === (c = s.data) || void 0 === c
                                            ? void 0
                                            : c.url) || ""),
                                        setTimeout(function () {
                                          e.setData({
                                            accelerateVideoUrl: r || "",
                                            showType: "accelerateModal",
                                          });
                                        }, 0);
                                    }
                                  } else
                                    -1 === (null == t ? void 0 : t.resultCode)
                                      ? console.warn(
                                          "queryAccelerateTypeInfoPromise wrong: 可能未登录"
                                        )
                                      : (console.warn(
                                          "queryAccelerateTypeInfoPromise wrong:",
                                          t
                                        ),
                                        e.setData({
                                          pageStage: "detailLoaded",
                                          showType: "crash",
                                        }));
                                }
                              );
                          case 5:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                )();
              },
              reloadPage: function () {
                this.mainThread();
              },
              doAccelerate: function (e, t) {
                var a = this;
                return (0, _.Z)(
                  (0, m.Z)().mark(function n() {
                    var i, c, s, r;
                    return (0, m.Z)().wrap(
                      function (n) {
                        for (;;)
                          switch ((n.prev = n.next)) {
                            case 0:
                              return (
                                (n.prev = 0),
                                (i = w().getStorageSync("USERINFONEW") || {}),
                                ((c = {
                                  shareKey: a.shareKey,
                                  reqTime: "" + new Date().getTime(),
                                  openId: y.ZP.openid,
                                  accelerateUserInfo: {
                                    openId: y.ZP.openid,
                                    wechatNickName: i.nickName
                                      ? encodeURIComponent(i.nickName)
                                      : "神秘用户",
                                    wechatPhoto:
                                      i.avatarUrl ||
                                      "https://youimg1.c-ctrip.com/target/10090v000000k3bfv65E1_R_640_10000_Q90.jpg",
                                  },
                                  accelerateScene: e,
                                  accelerateSource: 0,
                                  accelerateGroupId: "",
                                }).sign = (0, re.nF)(c)),
                                (s = t ? C.Nxx : C.rrE),
                                (n.next = 7),
                                s(c)
                              );
                            case 7:
                              if (
                                ((r = n.sent),
                                console.log("do accelerate res:", r),
                                !r || 1 !== r.resultCode)
                              ) {
                                n.next = 16;
                                break;
                              }
                              return (
                                a.setData({
                                  accelerateActionStatus: "success",
                                  accelerateActionRes: r,
                                }),
                                a.fetchOrderShareDetail("afterAcce"),
                                a.fetchOrderShareRecommend(),
                                n.abrupt("return", {
                                  accelerateActionStatus: "success",
                                  accelerateActionRes: r,
                                })
                              );
                            case 16:
                              return (
                                w().showToast({
                                  title: r.resultMessage || "加速失败",
                                  icon: "none",
                                  duration: 1500,
                                }),
                                a.setData({
                                  accelerateActionStatus: "fail",
                                  accelerateActionRes: r,
                                }),
                                n.abrupt("return", {
                                  accelerateActionStatus: "fail",
                                  accelerateActionRes: r,
                                })
                              );
                            case 19:
                              n.next = 27;
                              break;
                            case 21:
                              return (
                                (n.prev = 21),
                                (n.t0 = n.catch(0)),
                                console.error("加速出错:", n.t0),
                                w().showToast({
                                  title: "加速失败",
                                  icon: "none",
                                  duration: 1500,
                                }),
                                a.setData({
                                  accelerateActionStatus: "unkownError",
                                  accelerateActionRes: n.t0,
                                }),
                                n.abrupt("return", {
                                  accelerateActionStatus: "unkownError",
                                  accelerateActionRes: n.t0,
                                })
                              );
                            case 27:
                            case "end":
                              return n.stop();
                          }
                      },
                      n,
                      null,
                      [[0, 21]]
                    );
                  })
                )();
              },
              handleAcceWithType: function () {
                var e = this;
                return (0, _.Z)(
                  (0, m.Z)().mark(function t() {
                    var a, n, i, c;
                    return (0, m.Z)().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if (
                              (console.warn("!!!!!!!!!!! oopopopop"),
                              (a = e.data.accelerateStatusInfo || {}),
                              (n = a.statusCode),
                              (i = e.data.accelerateType),
                              100 === n)
                            ) {
                              t.next = 8;
                              break;
                            }
                            console.warn("-- 不能加速 statusCode:", n),
                              205 === n
                                ? e.skipOrPopThread("grabsuccess")
                                : e.skipOrPopThread("fail"),
                              (t.next = 28);
                            break;
                          case 8:
                            if (e.data.isCurrentLogin) {
                              t.next = 11;
                              break;
                            }
                            return (
                              console.warn("!!!!!!!!!!! not login"),
                              t.abrupt("return")
                            );
                          case 11:
                            if (e.acceImmediately) {
                              t.next = 14;
                              break;
                            }
                            return (
                              console.warn("!!!!!!!!!!! not acceImmediately"),
                              t.abrupt("return")
                            );
                          case 14:
                            if (
                              (console.log(
                                "this.data.toSubscribeIdsBeforeAcceRate",
                                e.data.toSubscribeIdsBeforeAcceRate
                              ),
                              !(e.data.toSubscribeIdsBeforeAcceRate.length > 0))
                            ) {
                              t.next = 21;
                              break;
                            }
                            return (
                              e.setData({ needSubBeforeAcceRate: !0 }),
                              console.warn("!!!!!!!!!!! needSubBeforeAcceRate"),
                              t.abrupt("return")
                            );
                          case 21:
                            e.setData({ needSubBeforeAcceRate: !1 });
                          case 22:
                            if (100 !== i) {
                              t.next = 28;
                              break;
                            }
                            return (t.next = 25), e.doAccelerate(i);
                          case 25:
                            (c = t.sent),
                              "success" === c.accelerateActionStatus &&
                                (e.hidePopup(), e.skipOrPopThread("success"));
                          case 28:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                )();
              },
              skipOrPopThread: function (e) {
                var t = this;
                return (0, _.Z)(
                  (0, m.Z)().mark(function a() {
                    var n, i, c, s, r, o, l, d, u, h;
                    return (0, m.Z)().wrap(function (a) {
                      for (;;)
                        switch ((a.prev = a.next)) {
                          case 0:
                            return (a.next = 2), t.fetchOrderShareRecommend();
                          case 2:
                            if (
                              (t.updateShareUserInfo(),
                              console.warn("即将自动跳转或者弹窗了"),
                              (n = t.data.gameLotteryBanner),
                              (i = t.data.activityInfo || {}),
                              (c = i.url),
                              (s = i.type),
                              (r = i.popModule),
                              (o = void 0 === r ? {} : r),
                              (l = n
                                ? {
                                    url: n.url,
                                    title: n.name,
                                    btnName: n.btnName,
                                    content: [
                                      { type: "img", imgUrl: n.popImg },
                                    ],
                                  }
                                : o),
                              (d = 100 === t.data.accelerateType),
                              s)
                            ) {
                              a.next = 11;
                              break;
                            }
                            return (
                              !t.data.isSelf &&
                                d &&
                                "success" === e &&
                                t.setData({
                                  activityPopInfo: l,
                                  feedbackType: "successWithoutActivityReturn",
                                  showType: "feedbackPop",
                                }),
                              a.abrupt("return")
                            );
                          case 11:
                            if (
                              ((u = (0, re.kA)(
                                t.shareKey,
                                "skip_activity_landpage_map",
                                s
                              )),
                              console.warn(
                                "##### 自动跳转的 flag 是否已经自动跳转了:",
                                u,
                                t.shareKey,
                                c
                              ),
                              c && !u)
                            )
                              (0, re.x8)(
                                t.shareKey,
                                "skip_activity_landpage_map",
                                s
                              ),
                                t.autoSkip(e);
                            else if (
                              ((h = (0, re.kA)(
                                t.shareKey,
                                "activity_popup_map",
                                s
                              )),
                              o && o.title && !h && !t.data.isSelf)
                            ) {
                              t.setData({
                                activityPopInfo: l,
                                feedbackType: e,
                                showType: "feedbackPop",
                              });
                              try {
                                n
                                  ? t.ubtTrace(213462, {
                                      shareKey: t.shareKey,
                                      openId: y.ZP.openid,
                                      type: s,
                                      bizType: "ActivityEntrancePopupShow",
                                    })
                                  : t.ubtTrace(192967, {
                                      shareKey: t.shareKey,
                                      openId: y.ZP.openid,
                                      type: s,
                                    });
                              } catch (e) {
                                console.log(e);
                              }
                              (0, re.x8)(t.shareKey, "activity_popup_map", s);
                            }
                          case 14:
                          case "end":
                            return a.stop();
                        }
                    }, a);
                  })
                )();
              },
              autoSkip: function (e) {
                var t = (this.data.activityInfo || {}).url;
                if (t) {
                  var a = w().getStorageSync("USERINFONEW") || {},
                    n = encodeURIComponent(a.avatarUrl),
                    i = encodeURIComponent(a.nickName),
                    c =
                      "success" === e
                        ? this.data.accelerateActionRes.accelerateLevel
                        : 0,
                    s = this.data.accelerateStatusInfo || {},
                    r = "fail" === e ? s.statusDesc : "",
                    o = "fail" === e ? s.statusCode : "",
                    l =
                      t.indexOf("?") > -1
                        ? ""
                            .concat(t, "&grabNum=")
                            .concat(c, "&avatar=")
                            .concat(n, "&nickName=")
                            .concat(i, "&failCode=")
                            .concat(o, "&failReason=")
                            .concat(r)
                        : ""
                            .concat(t, "?grabNum=")
                            .concat(c, "&avatar=")
                            .concat(n, "&nickName=")
                            .concat(i, "&failCode=")
                            .concat(o, "&failReason=")
                            .concat(r);
                  t.indexOf("http") > -1
                    ? A.Z.twebview({ data: { url: l } })
                    : this.navigateTo({ url: l });
                } else console.error("自动跳转没有配置url");
              },
              skipFromFeedBackPop: function () {
                var e = this.data,
                  t = e.activityInfo,
                  a = e.activityPopInfo,
                  n = e.gameLotteryBanner;
                try {
                  n
                    ? this.ubtTrace(213463, {
                        shareKey: this.shareKey,
                        openId: y.ZP.openid,
                        bizType: "ActivityEntrancePopupClick",
                      })
                    : this.ubtTrace(192968, {
                        shareKey: this.shareKey,
                        openId: y.ZP.openid,
                        type: t.type,
                      });
                } catch (e) {
                  console.log(e);
                }
                this.hidePopup();
                var i = (a || {}).url;
                if (i) {
                  var c = "",
                    s = "";
                  if (
                    this.data.feedbackType &&
                    "fail" === this.data.feedbackType
                  ) {
                    var r = this.data.accelerateStatusInfo || {};
                    (c = r.statusCode), (s = r.statusDesc);
                  }
                  var o = this.data.accelerateActionRes.accelerateLevel || 0,
                    l =
                      i.indexOf("?") > -1
                        ? ""
                            .concat(i, "&grabNum=")
                            .concat(o, "&failCode=")
                            .concat(c, "&failReason=")
                            .concat(s)
                        : ""
                            .concat(i, "?grabNum=")
                            .concat(o, "&failCode=")
                            .concat(c, "&failReason=")
                            .concat(s);
                  i.indexOf("http") > -1
                    ? A.Z.twebview({ data: { url: l } })
                    : i.includes("pages/home/index")
                    ? w().reLaunch({ url: l })
                    : this.navigateTo({ url: l });
                } else console.error("反馈弹窗没有配置url");
              },
              traceHooks: function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : "",
                  t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                try {
                  this.ubtTrace(
                    e,
                    (0, f.Z)(
                      { shareKey: this.shareKey, openId: y.ZP.openid },
                      t
                    )
                  );
                } catch (e) {
                  console.log(e);
                }
              },
              helpAcce: function (e) {
                if (
                  (console.log("helpAcce:", e),
                  "300" === e && this.showRewardVideoAd(),
                  "301" === e)
                ) {
                  this.doAccelerate(301);
                  try {
                    this.ubtTrace(190667, {
                      shareKey: this.shareKey,
                      openId: y.ZP.openid,
                    });
                  } catch (e) {
                    console.log(e);
                  }
                  this.navigateTo({
                    url: "/pages/hotel/list/list?data=".concat(
                      encodeURIComponent(
                        JSON.stringify({
                          queryModel: { cityId: "2", cityName: "上海" },
                          fromPage: "wechat_train_robshare_renwuliulan",
                        })
                      )
                    ),
                  });
                }
              },
              createRewardVideoAd: function () {
                var e = this;
                if (w().createRewardedVideoAd) {
                  var t = na
                    ? "adunit-da4f0bf4850b41f1"
                    : "adunit-a9ec5bfe86287b38";
                  (ia = w().createRewardedVideoAd({ adUnitId: t })).onLoad(
                    function () {
                      return console.log(
                        " ========> 激励视频 广告加载成功 =========>"
                      );
                    }
                  ),
                    ia.onError(function (e) {
                      return console.log("激励视频 onError =======> ", e);
                    }),
                    ia.onClose(function (t) {
                      t && t.isEnded
                        ? (console.log("用户是在视频播放完以后关闭的视频"),
                          e.doAccelerate(300))
                        : console.log("用户在视频播放过程中关闭了视频");
                    });
                }
              },
              showRewardVideoAd: function () {
                ia &&
                  ia
                    .show()
                    .then(function () {
                      return console.log("激励视频广告 show 成功");
                    })
                    .catch(function () {
                      ia.load()
                        .then(function () {
                          return ia.show();
                        })
                        .catch(function (e) {
                          return console.log("激励视频广告显示失败: ", e);
                        });
                    });
              },
              acceAfterUserInfoOld: function (e) {
                (this.acceImmediately = !0),
                  console.warn("acceAfterUserInfoOld e:", e),
                  e.detail && e.detail.userInfo
                    ? ((this.userInfo = e.detail.userInfo),
                      console.warn("授权用户信息成功"),
                      w().setStorageSync("USERINFO", this.userInfo),
                      this.setData({
                        isAuthorizeFailed: !1,
                        hasUserInfo: !0,
                        hasShowUserProfile: !0,
                      }),
                      this.acceWithOpenId())
                    : (console.warn("授权用户信息失败"),
                      this.setData({
                        isAuthorizeFailed: !1,
                        hasUserInfo: !0,
                        hasShowUserProfile: !0,
                      }),
                      this.acceWithOpenId());
              },
              acceWithOpenId: function () {
                var e = this;
                this.data.needSubBeforeAcceRate ||
                  (y.ZP.openid
                    ? (console.warn("DD"), this.handleAcceWithType())
                    : (console.warn("CC"),
                      (0, y.M9)().then(
                        function () {
                          e.handleAcceWithType();
                        },
                        function () {}
                      )));
              },
              acceAfterUserInfo: function () {
                var e = this;
                (this.acceImmediately = !0),
                  (0, F.getUserProfileInfo)()
                    .then(function (t) {
                      console.log("acceAfterUserInfo success:", t),
                        e.setData({
                          userInfo: t,
                          hasUserInfo: !0,
                          hasShowUserProfile: !0,
                        }),
                        e.acceWithOpenId();
                    })
                    .catch(function (t) {
                      console.log("acceAfterUserInfo fail:", t),
                        e.setData({ hasUserInfo: !0, hasShowUserProfile: !0 }),
                        e.acceWithOpenId();
                    });
              },
              gotoLogin: function () {
                var e = this;
                y.ZP.doLogin()
                  .then(function () {
                    e.setData({
                      isLogin: !0,
                      isCurrentLogin: !0,
                      userName: y.ZP.userName || "",
                    });
                  })
                  .catch(function (e) {
                    console.log(e);
                  });
              },
              setSubscribeBeforeAcceRate: function () {
                var e = this;
                this.setData({ showType: "subMask" });
                var t = this.data.toSubscribeIdsBeforeAcceRate;
                D.Z.doSubscribe(t, "Robshare_accelerate")
                  .then(function () {
                    console.warn("授权订阅 确定"),
                      e.setData({
                        showType: "",
                        toSubscribeIdsBeforeAcceRate: [],
                        needSubBeforeAcceRate: !1,
                      }),
                      e.grabSuccessJump(),
                      e.handleAcceWithType();
                  })
                  .catch(function () {
                    console.warn("授权订阅 取消或者失败"),
                      w().showToast({
                        title: "抱歉，订阅消息授权失败",
                        icon: "none",
                        duration: 1e3,
                      }),
                      e.setData({ showType: "" });
                  });
              },
              buyTicket: function () {
                w().reLaunch({ url: "/pages/home/index?savetohome=1" });
              },
              showGoldFingerPopup: function () {
                console.log("showGoldFingerPopup"),
                  this.setData({ showType: "goldFinger" });
              },
              hideGoldFingerPopup: function () {
                this.hidePopup();
              },
              originLogin: function () {
                var e = this;
                y.ZP.doLogin()
                  .then(function () {
                    e.setData({
                      isLogin: !0,
                      isCurrentLogin: !0,
                      userName: y.ZP.userName,
                    }),
                      e.hideGoldFingerPopup();
                  })
                  .catch(function (e) {
                    console.log(e);
                  });
              },
              goldFingerAccelerate: function () {
                var e = this;
                return (0, _.Z)(
                  (0, m.Z)().mark(function t() {
                    return (0, m.Z)().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), e.doAccelerate(400);
                          case 2:
                            "success" === e.data.accelerateActionStatus &&
                              (e.hideGoldFingerPopup(),
                              w().showToast({
                                title: "金手指加速成功",
                                icon: "none",
                                duration: 1500,
                              }));
                          case 4:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                )();
              },
              goldFingerAcceAfterOriginLogin: function (e) {
                var t = this;
                y.ZP.doLogin()
                  .then(function () {
                    t.setData({
                      isLogin: !0,
                      isCurrentLogin: !0,
                      userName: y.ZP.userName,
                    }),
                      t.goldFingerAccelerate(e);
                  })
                  .catch(function (e) {
                    console.log(e);
                  });
              },
              checkSubscribeModal: function () {
                var e = this;
                if (this.data.isSelf) {
                  var t = (L.bV.get() || {}).robshareSubscribePop || [];
                  if (-1 === t.indexOf(this.shareKey)) {
                    var a = Yt.map(function (e) {
                      return e.tempId;
                    });
                    console.log("tempids", a),
                      D.Z.getSubscribe(a)
                        .then(function (a) {
                          var n = a.mainSwitch,
                            i = a.unKnownList;
                          console.log("getSubscribegetSubscribe", n, i),
                            e.setData({
                              showType: "subscribePop_RobshareMyself_Popup",
                              subscribeModalInfo: {
                                title: "开启高峰期购票提醒",
                                desc: "担心忘记提前预约抢票？高峰期自动提前提示您下单",
                                subList: Yt.filter(function (e) {
                                  return i.includes(e.tempId);
                                }).slice(0, 3),
                                sourceCode: "RobshareMyself_Popup",
                              },
                            }),
                            t.push(e.shareKey),
                            L.bV.setAttr("robshareSubscribePop", t.slice(-100));
                        })
                        .catch(function (e) {
                          console.log(e);
                        });
                  }
                }
              },
              onSubscribeModalCancel: function () {
                this.setData({ showType: "" });
              },
              onSubscribeModalFail: function () {
                this.onSubscribeModalCancel();
              },
              onSubscribeModalSuccess: function () {
                this.setData({ showType: "" }), this.getSubscribeInfo();
              },
              onSubscribeModalProcess: function () {
                this.setData({ showType: "subMask" });
              },
              setSubscribeForRobResult: function () {
                var e = this,
                  t = [Qt];
                D.Z.doSubscribe(t, "Robshare_Module")
                  .then(function () {
                    e.getSubscribeInfo();
                  })
                  .catch(function (t) {
                    console.warn("订阅抢票结果失败:", t), e.getSubscribeInfo();
                  });
              },
              setSubscribeForPeakRemind: function () {
                var e = this,
                  t = [$t];
                D.Z.doSubscribe(t, "Robshare_Module")
                  .then(function () {
                    e.getSubscribeInfo();
                  })
                  .catch(function (t) {
                    console.warn("订阅高峰购票提醒失败:", t),
                      e.getSubscribeInfo();
                  });
              },
              getSubscribeInfo: function () {
                var e = this,
                  t = [Qt, $t, ea];
                D.Z.getSubscribe(t)
                  .then(function (t) {
                    if (
                      (console.log("getSubscribeWorkable", (0, K.pj)()),
                      (0, K.pj)())
                    ) {
                      if (
                        (console.log("******getSubscribeInfo", t),
                        !t.mainSwitch ||
                          !(
                            Array.isArray(t.unKnownList) &&
                            t.unKnownList.length > 0
                          ))
                      )
                        return (
                          console.warn("***** 订阅开关:", t.mainSwitch),
                          void console.warn(
                            "***** 订阅unKnownList:",
                            t.unKnownList
                          )
                        );
                      var a = t.unKnownList || [],
                        n = a.indexOf($t) > -1,
                        i = a.indexOf(Qt) > -1;
                      console.warn("**** toSubscribeIdsBeforeAcceRate:", a),
                        console.warn("**** isShowPeakRemind:", n),
                        console.warn("**** isShowRobResultBox:", i),
                        a &&
                          e.setData(
                            {
                              toSubscribeIdsBeforeAcceRate: a,
                              needSubBeforeAcceRate: a.length > 0,
                              isShowPeakRemind: n,
                              isShowRobResultBox: i,
                              subscribeIdReady: !0,
                            },
                            function () {
                              e.handleAcceWaiting && e.handleAcceWithType(),
                                (e.handleAcceWaiting = !1);
                            }
                          );
                    }
                  })
                  .catch(function () {
                    e.setData({ subscribeIdReady: !0 });
                  });
              },
              hidePopup: function () {
                this.setData({ showType: "" });
              },
              recordShareMode: function () {
                var e = this;
                return (0, _.Z)(
                  (0, m.Z)().mark(function t() {
                    return (0, m.Z)().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2),
                              (0, C._0V)(
                                { shareType: "weixin", shareKey: e.shareKey },
                                { checkFrameworkLogin: !1 }
                              )
                            );
                          case 2:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                )();
              },
              fetchAdInfos: function () {
                var e = this;
                return (
                  (this._getAdsListTaroPromise = B.B8.call(this, {
                    pageId: "121250",
                    adInfosName: "adInfos",
                  })),
                  this._getAdsListTaroPromise
                    .then(function () {
                      var t = e.data.adInfos,
                        a = void 0 === t ? [] : t;
                      e.showVideoAdTimer = setTimeout(function () {
                        e.setData({
                          isShowVideoAd:
                            !a || (a && Array.isArray(a) && 0 === a.length),
                        });
                      }, 3e3);
                    })
                    .catch(function () {
                      e.showVideoAdTimer = setTimeout(function () {
                        e.setData({ isShowVideoAd: !0 });
                      }, 3e3);
                    })
                );
              },
              trainAdExposureCount: function (e) {
                try {
                  var t = w().getCurrentPages(),
                    a = e.detail.current || 0,
                    n = this.data.adInfos[a].bannerId;
                  this.bannerShownMap || (this.bannerShownMap = new Map()),
                    this.trainAdExposureCountFlag &&
                      !this.bannerShownMap.get(n) &&
                      Array.isArray(t) &&
                      "pages/robshareV3/index" === t[0].route &&
                      (B.eg.call(this, { index: a, adInfosName: "adInfos" }),
                      this.bannerShownMap.set(n, !0));
                } catch (e) {
                  console.log(e);
                }
              },
              goToAd: function (e) {
                var t = e.currentTarget.dataset.index || 0;
                B.Bj.call(this, {
                  index: t,
                  adInfosName: "adInfos",
                  businessLineName: "trainAd",
                });
              },
              bannerClickHandler: function () {
                var e = this.data.activityInfo;
                try {
                  this.ubtTrace(192971, {
                    shareKey: this.shareKey,
                    openId: y.ZP.openid,
                    type: e.type,
                  });
                } catch (e) {
                  console.log(e);
                }
                var t = (e || {}).banner || {},
                  a = t.url,
                  n = t.appId;
                n && n !== Jt
                  ? w().navigateToMiniProgram({
                      appId: n,
                      path: a,
                      success: function (e) {
                        console.log("外跳成功");
                      },
                      fail: function (e) {
                        console.log("外跳失败");
                      },
                    })
                  : 0 === a.indexOf("http")
                  ? A.Z.twebview({ data: { url: a } })
                  : this.navigateTo({ url: a });
              },
              gameLotteryBannerClickHandler: function () {
                var e = this.data.gameLotteryBanner;
                try {
                  this.ubtTrace(213463, {
                    shareKey: this.shareKey,
                    openId: y.ZP.openid,
                    bizType: "ActivityEntranceBannerClick",
                  });
                } catch (e) {
                  console.log(e);
                }
                var t = null == e ? void 0 : e.url;
                this.navigateTo({ url: t });
              },
              onClickMarketBannerGot: function () {
                var e = this.data.marketCouponInfo;
                e.url && A.Z.twebview({ data: { url: e.url } });
              },
              onClickMarketBannerItem: function (e) {
                console.log("onClickMarketBannerItem:", e),
                  e &&
                    e.wechatMiniUrl &&
                    (-1 !== D.Z.isTabUrl(e.wechatMiniUrl)
                      ? w().reLaunch({ url: e.wechatMiniUrl })
                      : this.navigateTo({ url: e.wechatMiniUrl }));
              },
              getShareConfigDetail: function () {
                var e = this;
                if (!(0, K.JO)()) {
                  var t,
                    a,
                    n,
                    i = this.data,
                    c = i.grabOrderInfo,
                    s = i.shareInfoList,
                    r = this.generateTagInfo(),
                    o = (null == r ? void 0 : r.tag) || c.arriveStation,
                    l = s.find(function (e) {
                      return "pyq" == e.channel;
                    }),
                    d =
                      "https://images3.c-ctrip.com/ztrip/train.xin/2012_12/share_".concat(
                        na ? "ty" : "zx",
                        "@3x.png"
                      ),
                    u =
                      (null == l || null === (t = l.picContent) || void 0 === t
                        ? void 0
                        : t.underDesc) || "",
                    h =
                      (null == l ||
                      null === (a = l.picContent) ||
                      void 0 === a ||
                      null === (n = a.title) ||
                      void 0 === n
                        ? void 0
                        : n.replace("{tagName}", o)) || "",
                    p = this.getShareInfo();
                  this.setData(
                    {
                      sharePicTitle: h,
                      backgroundUrl: d,
                      sharePicSpringText: u,
                      pagePath: null != p && p.path ? p.path.slice(1) : "",
                    },
                    function () {
                      e.canvas && e.canvas.init(),
                        e.setData({
                          pictureStatus: "loading",
                          canMakePic: !0,
                          errorPicMsg: "",
                        });
                    }
                  );
                }
              },
              generateTagInfo: function () {
                var e = this.data.customizeTagList,
                  t = null;
                if (e && e.length > 0) {
                  var a = this.options.tagCode;
                  (t = e.find(function (e) {
                    return e.tagCode == a;
                  })) || (t = e[0]);
                }
                return t;
              },
              getShareInfo: function () {
                var e = N.Z.getUnionData(),
                  t = this.data,
                  a = t.showArriveStation,
                  n = void 0 === a ? "" : a,
                  i = t.grabOrderInfo,
                  c = void 0 === i ? {} : i,
                  s = t.isShareGZH,
                  r = void 0 !== s && s,
                  o = t.pageKey,
                  l = void 0 === o ? "" : o,
                  d = c.arriveStation;
                return (
                  this.recordShareMode(),
                  (0, re.fT)({
                    shareKey: this.shareKey,
                    arriveStation: d,
                    showArriveStation: n,
                    allianceid: e.aid,
                    sid: e.sid,
                    shareImgs: this.shareImgs,
                    type: "weixin",
                    isShareGZH: r,
                    pageKey: l,
                  })
                );
              },
              refCanvas: function (e) {
                this.canvas = e;
              },
              handleSharePicture: function () {
                var e = this,
                  t = this.data,
                  a = t.canMakePic,
                  n = t.errorPicMsg,
                  i = t.pictureStatus;
                if (!a)
                  return (
                    this.canvas && this.canvas.init(),
                    w().showModal({ title: n })
                  );
                "loading" === i && (0, F.showLoading)("图片加载中..."),
                  setTimeout(function () {
                    (0, F.hideLoading)(),
                      e.setData({ showShareImages: !0, maskVisible: !0 });
                  }, 240);
              },
              closeMask: function () {
                this.setData({ showShareImages: !1, maskVisible: !1 });
              },
              onSharePictureSave: function () {
                var e = this;
                w().showModal({
                  title: "提示",
                  content: "图片保存成功，快去发给朋友吧~",
                  showCancel: !1,
                  success: function () {
                    e.setData({ showShareImages: !1, maskVisible: !1 }),
                      e.setSubscribe();
                  },
                });
              },
              onSharePictureSuccess: function () {
                console.log("onSharePictureSuccess"),
                  this.setData({ pictureStatus: "success", canMakePic: !0 });
              },
              onSharePictureFail: function (e) {
                console.log("onSharePictureFail"),
                  this.setData({ canMakePic: !1, errorPicMsg: e.detail.msg });
              },
              setSubscribe: function () {
                var e = this;
                return (0, _.Z)(
                  (0, m.Z)().mark(function t() {
                    var a, n, i, c;
                    return (0, m.Z)().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if (I.default.isWechat) {
                                t.next = 2;
                                break;
                              }
                              return t.abrupt("return");
                            case 2:
                              return (
                                (t.prev = 2),
                                (t.next = 5),
                                D.Z.getSubscribe(O.Z.TMPIDS_LONG)
                              );
                            case 5:
                              if (
                                ((a = t.sent),
                                (n = null == a ? void 0 : a.mainSwitch),
                                (i = null == a ? void 0 : a.unKnownList),
                                n && D.Z.notEmptyArray(i) && i.length)
                              ) {
                                t.next = 13;
                                break;
                              }
                              return (
                                (t.next = 11), D.Z.getSubscribe(O.Z.TMPIDS)
                              );
                            case 11:
                              ((c = t.sent).mainSwitch &&
                                D.Z.notEmptyArray(c.unKnownList) &&
                                c.unKnownList.length) ||
                                (i = c.unKnownList);
                            case 13:
                              e.setData({ showType: "subMask" }),
                                D.Z.doSubscribe(i, "robTicket_share")
                                  .then(function () {
                                    console.log("授权订阅 成功"),
                                      e.setData({ showType: "" });
                                  })
                                  .catch(function (t) {
                                    console.log("授权订阅 取消或者失败", t),
                                      e.setData({ showType: "" });
                                  }),
                                (t.next = 20);
                              break;
                            case 17:
                              (t.prev = 17),
                                (t.t0 = t.catch(2)),
                                console.log(t.t0);
                            case 20:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      null,
                      [[2, 17]]
                    );
                  })
                )();
              },
              closeAccelerateModal: function () {
                this.setData({ showType: "" });
              },
              noop: function () {},
              getCustomizeShareInfo: function (e) {
                var t = this;
                return (0, _.Z)(
                  (0, m.Z)().mark(function a() {
                    var n;
                    return (0, m.Z)().wrap(
                      function (a) {
                        for (;;)
                          switch ((a.prev = a.next)) {
                            case 0:
                              return (
                                (a.prev = 0),
                                (a.next = 3),
                                (0, C.ZEE)({
                                  shareChannel: 1,
                                  toStation:
                                    (null == e ? void 0 : e.arriveStation) ||
                                    "",
                                  ticketType:
                                    9 === (null == e ? void 0 : e.grabStatus)
                                      ? "pre"
                                      : "",
                                  shareKey: t.shareKey || "",
                                })
                              );
                            case 3:
                              (n = a.sent) &&
                                1 === n.resultCode &&
                                t.setData({
                                  shareInfoList: n.shareInfoList,
                                  customizeTagList: n.customizeTagList,
                                }),
                                console.log("getCustomizeShareInfoPromise", n),
                                (a.next = 11);
                              break;
                            case 8:
                              (a.prev = 8),
                                (a.t0 = a.catch(0)),
                                console.log(a.t0);
                            case 11:
                            case "end":
                              return a.stop();
                          }
                      },
                      a,
                      null,
                      [[0, 8]]
                    );
                  })
                )();
              },
              grabSuccessJump: function () {
                var e = this.data,
                  t = e.accelerateStatusInfo,
                  a = e.grabOrderInfo,
                  n = e.isSelf,
                  i = a.arriveStation;
                if (
                  205 === (null == t ? void 0 : t.statusCode) &&
                  (console.log("准备跳转"),
                  console.log("this.shareKey", this.shareKey),
                  console.log("isSelf", n),
                  n)
                ) {
                  var c =
                    "https://m.suanya.com/webapp/train/activity/20220107-ztrip-grab-success-send/?source=qpsuccess&arriveStation="
                      .concat(i, "&orderNumber=")
                      .concat(this.shareKey);
                  this.navigateTo({
                    url:
                      "/functionalPages/twebview/index?url=" +
                      encodeURIComponent(c),
                  });
                }
              },
            },
            ra =
              (0, k.h)()(
                (oe =
                  V()(sa)(
                    (oe = (function (e) {
                      (0, h.Z)(a, e);
                      var t = (0, p.Z)(a);
                      function a(e) {
                        var n;
                        return (
                          (0, l.Z)(this, a),
                          (n = t.call(this, e)),
                          (0, g.Z)((0, u.Z)(n), "showArriveStation", ""),
                          (0, g.Z)((0, u.Z)(n), "isShareGZH", !1),
                          (0, g.Z)((0, u.Z)(n), "pageKey", ""),
                          (0, g.Z)((0, u.Z)(n), "canGetMobile", !1),
                          (0, g.Z)((0, u.Z)(n), "rewardedVideoAd", void 0),
                          (0, g.Z)((0, u.Z)(n), "options", void 0),
                          (n.store = $.create((0, u.Z)(n)).store),
                          (0, G.dy)().then(function (e) {
                            n.setState({ newCode: e });
                          }),
                          n
                        );
                      }
                      return (
                        (0, d.Z)(a, [
                          {
                            key: "componentDidMount",
                            value: function () {
                              w().hideShareMenu && w().hideShareMenu(),
                                this.setPageData(),
                                console.log("智行了一次", "数据测试"),
                                Ee();
                            },
                          },
                          {
                            key: "setPageData",
                            value: function () {
                              var e = this.$router.params;
                              console.log("options:", e),
                                (this.options = e),
                                (this.hasRunOnceAction = !1);
                              var t = decodeURIComponent(e.scene || "");
                              t && 16 === t.length
                                ? (this.shortKey = t)
                                : ((this.shareKey = t),
                                  (this.type = e.type || ""),
                                  (this.showArriveStation = ta[e.tagCode])),
                                (this.openidPromise = this.getOpenIdAction()),
                                "officialAccountAccelerate" === e.from &&
                                  ((this.isShareGZH = !0),
                                  (this.pageKey = e.pageKey));
                            },
                          },
                          {
                            key: "generateTagInfoWithParams",
                            value: function (e, t) {
                              var a = null;
                              return (
                                e &&
                                  e.length > 0 &&
                                  ((a = e.find(function (e) {
                                    return e.tagCode == t;
                                  })) ||
                                    (a = e[0])),
                                a
                              );
                            },
                          },
                          {
                            key: "onShareAppMessage",
                            value: function () {
                              var e,
                                t = N.Z.getUnionData(),
                                a = this.data,
                                n = a.showArriveStation,
                                i = void 0 === n ? "" : n,
                                c = a.grabOrderInfo,
                                s = void 0 === c ? {} : c,
                                r = a.isShareGZH,
                                o = void 0 !== r && r,
                                l = a.pageKey,
                                d = void 0 === l ? "" : l,
                                u = a.shareInfoList,
                                h = void 0 === u ? [] : u,
                                p = a.customizeTagList;
                              "B" === this.state.newCode &&
                                ((o = this.isShareGZH),
                                (d = this.pageKey),
                                (i = this.showArriveStation),
                                (s = $.getState().orderModel.grabOrderInfo),
                                (h =
                                  $.getState().marketModel.shareInfo
                                    .shareInfoList),
                                (p =
                                  $.getState().marketModel.shareInfo
                                    .customizeTagList));
                              var g = s.arriveStation,
                                f = this.options.tagCode;
                              this.recordShareMode();
                              var m = this.generateTagInfoWithParams(p, f),
                                _ =
                                  (null == m ? void 0 : m.tag) ||
                                  s.arriveStation,
                                b = h.find(function (e) {
                                  return "weixin" == e.channel;
                                }),
                                w =
                                  (null == b ||
                                  null === (e = b.title) ||
                                  void 0 === e
                                    ? void 0
                                    : e.replace("{tagName}", _)) || "",
                                Z =
                                  (null == m ? void 0 : m.iconUrl) ||
                                  "https://images3.c-ctrip.com/zt/robTicket/common/nnn_prebook_festiva_share_wx.png";
                              return (0, re.fT)({
                                shareTitle: w,
                                shareKey: this.shareKey,
                                arriveStation: g,
                                showArriveStation: i,
                                allianceid: t.aid,
                                sid: t.sid,
                                shareImgs: [Z],
                                type: "weixin",
                                isShareGZH: o,
                                pageKey: d,
                              });
                            },
                          },
                          {
                            key: "renderNew",
                            value: function () {
                              return (0, H.BX)(W.zt, {
                                store: this.store,
                                children: [
                                  (0, H.tZ)(Zt, {}),
                                  (0, H.tZ)(It, {}),
                                  (0, H.tZ)(Et, {}),
                                ],
                              });
                            },
                          },
                          {
                            key: "renderOld",
                            value: function () {
                              var e = this,
                                t = this.data,
                                a = t.isWechat,
                                n = t.pageStage,
                                i = t.isShowVideoAd,
                                c = t.collectGetPkgShow,
                                s = t.showType,
                                r = t.isShowRobResultBox,
                                o = t.isShowPeakRemind,
                                l = t.isInGrab,
                                d = t.isSelf,
                                u = t.isCurrentLogin,
                                h = t.userName,
                                p = t.isAuthorizeFailed,
                                g = t.isGetUserInfoFailed,
                                m = t.canGetMobile,
                                _ = t.needSubBeforeAcceRate,
                                b = t.toInviteLength,
                                w = (t.accelerateInfo, t.accelerateType),
                                Z = t.sponsor,
                                N = t.grabOrderInfo,
                                I = t.accelerateStatusInfo,
                                k = t.grabSpeedLevelInfo,
                                T = t.goldFingerInfo,
                                V = t.sponsorHeadImg,
                                A = t.sponsorHeadText,
                                x = t.grabBigScreenInfo,
                                C = t.accelerateTaskInfo,
                                B = (t.historyFriendInfo, t.adInfos),
                                R = t.activityPopInfo,
                                L = t.feedbackType,
                                D = t.accelerateActionRes,
                                F = t.hasUserInfo,
                                U = t.canIUseGetUserProfile,
                                O = t.marketCouponInfo,
                                K = t.activityInfo,
                                G = t.subscribeModalInfo,
                                W = t.speedADOpened,
                                q = t.showShareImages,
                                J = t.sharePicTitle,
                                Y = t.pagePath,
                                Q = t.maskVisible,
                                $ = t.pictureStatus,
                                ee = t.backgroundUrl,
                                te = t.sharePicSpringText,
                                ae = t.hasShowUserProfile,
                                ne = t.accelerateModalType,
                                ie = t.accelerateVideoUrl,
                                ce = t.isJumpToNewUserGifts,
                                se = t.gameLotteryBanner;
                              console.log("isSelf", d);
                              var re = I && I.statusCode,
                                oe =
                                  !(202 !== re && 203 !== re && 204 !== re) ||
                                  !(200 !== re && 201 !== re && 205 !== re) ||
                                  507 !== w;
                              return (
                                console.log("accelerateModalType", ne),
                                (0, H.BX)(v.View, {
                                  children: [
                                    (0, H.tZ)(j.mu, {
                                      page: this,
                                      zIndex: 1,
                                      needHolder: !0,
                                      title: "智行抢票神器",
                                      titleColor: "white",
                                      titleFontSize: 17,
                                      defaultBackButtonColor: "white",
                                      rightViewWidth: 85,
                                      backgroundColor: na
                                        ? "#3C4365"
                                        : "#0066E6",
                                    }),
                                    (0, H.tZ)(v.View, {
                                      className: "top-box",
                                      children: (0, H.tZ)(zt, {
                                        adOpened: W,
                                        isTieyou: na,
                                        sponsor: Z,
                                        sponsorHeadImg: V,
                                        sponsorHeadText: A,
                                        grabOrderInfo: N,
                                        accelerateStatusInfo: I,
                                      }),
                                    }),
                                    (0, H.BX)(v.View, {
                                      className: "wrap",
                                      children: [
                                        x &&
                                          (0, H.BX)(v.View, {
                                            className: "top-screen",
                                            children: [
                                              x.titleLeft,
                                              (0, H.tZ)(v.Text, {
                                                className: "strong",
                                                children: x.grabCount,
                                              }),
                                              x.titleRight,
                                            ],
                                          }),
                                        "init" === n &&
                                          (0, H.BX)(v.View, {
                                            className: "skeleton",
                                            children: [
                                              (0, H.BX)(v.View, {
                                                className: "first",
                                                children: [
                                                  (0, H.tZ)(v.View, {
                                                    className: "l",
                                                  }),
                                                  (0, H.BX)(v.View, {
                                                    className: "r",
                                                    children: [
                                                      (0, H.tZ)(v.View, {
                                                        className: "r-s",
                                                      }),
                                                      (0, H.tZ)(v.View, {
                                                        className: "r-s",
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              (0, H.BX)(v.View, {
                                                className: "second",
                                                children: [
                                                  (0, H.tZ)(v.View, {
                                                    className: "s",
                                                  }),
                                                  (0, H.tZ)(v.View, {
                                                    className: "s",
                                                  }),
                                                  (0, H.tZ)(v.View, {
                                                    className: "s",
                                                  }),
                                                  (0, H.tZ)(v.View, {
                                                    className: "s",
                                                  }),
                                                  (0, H.tZ)(v.View, {
                                                    className: "s",
                                                  }),
                                                  (0, H.tZ)(v.View, {
                                                    className: "s",
                                                  }),
                                                ],
                                              }),
                                              (0, H.tZ)(v.View, {
                                                className: "third",
                                              }),
                                              (0, H.BX)(v.View, {
                                                className: "fourth",
                                                children: [
                                                  (0, H.tZ)(v.View, {
                                                    className: "long",
                                                  }),
                                                  (0, H.tZ)(v.View, {
                                                    className: "short",
                                                  }),
                                                ],
                                              }),
                                              (0, H.tZ)(v.View, {
                                                className: "button",
                                              }),
                                            ],
                                          }),
                                        "detailLoaded" === n &&
                                          (0, H.BX)(v.View, {
                                            className: "white-box speed-box",
                                            children: [
                                              I &&
                                                (0, H.tZ)(Ft, {
                                                  isLogin: u,
                                                  needSubBeforeAcceRate: _,
                                                  hasUserInfo: F,
                                                  isSelf: d,
                                                  accelerateStatusInfo: I,
                                                  isTieyou: na,
                                                  goldFingerInfo: T,
                                                  grabSpeedLevelInfo: k,
                                                  showGoldFingerPopup:
                                                    this.showGoldFingerPopup,
                                                }),
                                              oe &&
                                                (0, H.tZ)(Gt, {
                                                  pageId: this.pageId,
                                                  isTieyou: na,
                                                  goldFingerInfo: T,
                                                  grabSpeedLevelInfo: k,
                                                  isSelf: d,
                                                  isInGrab: l,
                                                  isCurrentLogin: u,
                                                  isAuthorizeFailed: p,
                                                  hasUserInfo: F,
                                                  canIUseGetUserProfile: U,
                                                  isGetUserInfoFailed: g,
                                                  canGetMobile: m,
                                                  needSubBeforeAcceRate: _,
                                                  toInviteLength: b,
                                                  accelerateType: w,
                                                  grabOrderInfo: N,
                                                  accelerateStatusInfo: I,
                                                  hasShowUserProfile: ae,
                                                  ubtTrace:
                                                    this.ubtTrace.bind(this),
                                                  acceAfterUserInfo: function (
                                                    t
                                                  ) {
                                                    return e.acceAfterUserInfo(
                                                      t
                                                    );
                                                  },
                                                  acceAfterUserInfoOld:
                                                    function (t) {
                                                      return e.acceAfterUserInfoOld(
                                                        t
                                                      );
                                                    },
                                                  handleAcceWithType:
                                                    function () {
                                                      return e.handleAcceWithType();
                                                    },
                                                  gotoLogin: function () {
                                                    return e.gotoLogin();
                                                  },
                                                  setSubscribeBeforeAcceRate:
                                                    function () {
                                                      return e.setSubscribeBeforeAcceRate();
                                                    },
                                                  buyTicket: function () {
                                                    return e.buyTicket();
                                                  },
                                                  handleSharePicture:
                                                    function () {
                                                      return e.handleSharePicture();
                                                    },
                                                  showGoldFingerPopup:
                                                    this.showGoldFingerPopup,
                                                }),
                                              !oe &&
                                                (0, H.tZ)(mt, {
                                                  type: ne,
                                                  accelerateVideoUrl: ie,
                                                  options: this.options,
                                                  doAccelerate:
                                                    this.doAccelerate,
                                                  accelerateActionRes: D,
                                                  isJumpToNewUserGifts: ce,
                                                }),
                                              100 !== re &&
                                                200 !== re &&
                                                k.speedLeveldesc &&
                                                I.statusDesc &&
                                                (0, H.BX)(v.View, {
                                                  className:
                                                    "reason-for-cant-acce",
                                                  children: [
                                                    "温馨提示：",
                                                    I.statusDesc,
                                                  ],
                                                }),
                                              !l &&
                                                r &&
                                                aa &&
                                                !d &&
                                                (0, H.BX)(v.View, {
                                                  className: "speed-btm-notice",
                                                  children: [
                                                    (0, H.tZ)(v.Icon, {
                                                      className: "icon-notice",
                                                    }),
                                                    (0, H.tZ)(v.View, {
                                                      className: "cont",
                                                      children: (0, H.BX)(
                                                        v.View,
                                                        {
                                                          className: "tit",
                                                          children: [
                                                            "好友抢票成功你最多可获",
                                                            (0, H.tZ)(v.Text, {
                                                              className: "tred",
                                                              children: "10元",
                                                            }),
                                                            "优惠券",
                                                          ],
                                                        }
                                                      ),
                                                    }),
                                                    (0, H.tZ)(v.Button, {
                                                      className: "btn-notice",
                                                      "data-type": "robResult",
                                                      id: "APAv",
                                                      onClick:
                                                        this
                                                          .setSubscribeForRobResult,
                                                      children: "通知我",
                                                    }),
                                                  ],
                                                }),
                                            ],
                                          }),
                                        (0, H.tZ)(P.Z, {
                                          source: 1,
                                          isLogin: y.ZP.isLogin,
                                          ubtTrace: this.ubtTrace,
                                          customStyle:
                                            "margin:0 0 20rpx 0;box-shadow: 0 4rpx 20rpx rgba(0, 0, 0, 0.08);",
                                        }),
                                        !!se &&
                                          (0, H.tZ)(v.View, {
                                            className: "game-activity-banner",
                                            id: "APAw",
                                            onClick: function () {
                                              return e.traceHooks(208006);
                                            },
                                            children: (0, H.tZ)(Ht, {
                                              activityInfo: {
                                                banner: { bg: se.img },
                                              },
                                              bannerClickHandler: function () {
                                                return e.gameLotteryBannerClickHandler();
                                              },
                                            }),
                                          }),
                                        K &&
                                          K.banner &&
                                          (0, H.tZ)(Ht, {
                                            activityInfo: K,
                                            bannerClickHandler: function () {
                                              return e.bannerClickHandler();
                                            },
                                          }),
                                        a &&
                                          O &&
                                          O.content &&
                                          (0, H.tZ)(qt, {
                                            marketDiscountInfo: {},
                                            marketCouponInfo: O,
                                            onClickMarketBannerGot:
                                              function () {
                                                e.onClickMarketBannerGot();
                                              },
                                            onClickMarketBannerItem: function (
                                              t
                                            ) {
                                              e.onClickMarketBannerItem(t);
                                            },
                                            onClickMarketDiscountInfo:
                                              function () {
                                                e.onClickMarketDiscountInfo();
                                              },
                                          }),
                                        !d &&
                                          C &&
                                          C.taskList &&
                                          (0, H.tZ)(jt, {
                                            accelerateTaskInfo: C,
                                            helpAcce: function (t) {
                                              return e.helpAcce(t);
                                            },
                                          }),
                                        B &&
                                          Array.isArray(B) &&
                                          !!B.length &&
                                          (0, H.tZ)(v.View, {
                                            className: "advs-banner",
                                            children: (0, H.tZ)(v.Swiper, {
                                              className: "advs-banner-bd",
                                              autoplay: "true",
                                              interval: "3000",
                                              circular: "true",
                                              indicatorColor: "#E5E5E5",
                                              indicatorActiveColor: na
                                                ? "#FC6E51"
                                                : "#0080FF",
                                              onChange:
                                                this.trainAdExposureCount,
                                              children: B.map(function (t, a) {
                                                return (0,
                                                H.tZ)(v.SwiperItem, { children: (0, H.tZ)(v.View, { className: "item", children: (0, H.tZ)(v.Image, { className: "img", src: t.imgUrl, "data-index": a, id: "APAx", onClick: e.goToAd }) }) }, "swiper-".concat(a));
                                              }),
                                            }),
                                          }),
                                        (0, H.BX)(v.View, {
                                          className: "rule-txt",
                                          children: [
                                            (0, H.tZ)(v.View, {
                                              className: "tit",
                                              children: "活动规则",
                                            }),
                                            (0, H.BX)(v.View, {
                                              className: "txt",
                                              children: [
                                                "进入页面后，会自动帮助您的好友抽取",
                                                S.Z.SPEED_PACK,
                                              ],
                                            }),
                                            (0, H.tZ)(v.View, {
                                              className: "txt",
                                              children:
                                                "每位用户每天最多可以帮助5位好友加速。",
                                            }),
                                            (0, H.tZ)(v.View, {
                                              className: "txt",
                                              children:
                                                "抢票订单本人无法给本人订单加速",
                                            }),
                                            (0, H.BX)(v.View, {
                                              className: "txt",
                                              children: [
                                                "赠人玫瑰，手有余香，帮助好友加速后，您将获得赠礼一份，内含2个",
                                                S.Z.SPEED_PACK,
                                                "。",
                                              ],
                                            }),
                                            (0, H.BX)(v.View, {
                                              className: "txt",
                                              children: [
                                                "您在本页面上获得的",
                                                S.Z.SPEED_PACK,
                                                "和机票国内优惠券均可在小程序内使用。",
                                              ],
                                            }),
                                            (0, H.BX)(v.View, {
                                              className: "txt",
                                              children: [
                                                "如果出现违规行为（如作弊领取、恶意套现等），将取消用户的活动资格；同时有权撤销违规交易，收回相关优惠券或",
                                                S.Z.SPEED_PACK,
                                                "（包括已使用的以及未使用的）；必要时将追究违规用户的法律责任。",
                                              ],
                                            }),
                                            (0, H.tZ)(v.View, {
                                              className: "txt",
                                              children:
                                                "我们将根据本活动的实际举办情况对活动规则进行变动或调整，相关变动或调整将公布在活动页面上，并于公布时即时生效。",
                                            }),
                                          ],
                                        }),
                                        aa &&
                                          i &&
                                          !s &&
                                          (0, H.tZ)(v.View, {
                                            className: "speed-video",
                                            children: (0, H.tZ)(v.Ad, {
                                              unitId: "".concat(
                                                na
                                                  ? "adunit-ce72df261261d5a7"
                                                  : "adunit-3c333b8b9e050ab7"
                                              ),
                                              adType: "video",
                                              adTheme: "white",
                                            }),
                                          }),
                                        c &&
                                          (0, H.BX)(v.View, {
                                            className: "fixed-collect",
                                            id: "APAy",
                                            onClick: this.showCollectGetPkg,
                                            children: [
                                              (0, H.tZ)(v.Icon, {
                                                className: "icon-star",
                                              }),
                                              (0, H.BX)(v.View, {
                                                className: "cont",
                                                children: [
                                                  (0, H.tZ)(v.View, {
                                                    className: "tit",
                                                    children: "收藏小程序",
                                                  }),
                                                  (0, H.tZ)(v.View, {
                                                    className: "txt",
                                                    children: "购票更方便",
                                                  }),
                                                ],
                                              }),
                                              (0, H.tZ)(v.View, {
                                                className: "h-line",
                                              }),
                                              (0, H.tZ)(v.View, {
                                                className: "close",
                                                id: "APAz",
                                                onClick:
                                                  this.closeCollectGetPkg,
                                                children: "关\r\n闭",
                                              }),
                                            ],
                                          }),
                                        o &&
                                          aa &&
                                          (0, H.BX)(v.View, {
                                            className: "fixed-botm",
                                            children: [
                                              (0, H.tZ)(v.Text, {
                                                className:
                                                  "ifont-closed iconfont",
                                              }),
                                              (0, H.tZ)(v.Icon, {
                                                className: "icon-remind",
                                              }),
                                              (0, H.BX)(v.View, {
                                                className: "cont",
                                                children: [
                                                  (0, H.tZ)(v.View, {
                                                    className: "tit",
                                                    children:
                                                      "高峰期火车票购票提醒",
                                                  }),
                                                  (0, H.tZ)(v.View, {
                                                    className: "txt",
                                                    children:
                                                      "高峰假期提前预约，出票成功率更高",
                                                  }),
                                                ],
                                              }),
                                              (0, H.tZ)(v.Button, {
                                                className: "btn-remind",
                                                "data-type": "buyResult",
                                                id: "APBA",
                                                onClick:
                                                  this
                                                    .setSubscribeForPeakRemind,
                                                children: "设置提醒",
                                              }),
                                            ],
                                          }),
                                      ],
                                    }),
                                    "feedbackPop" === s &&
                                      (0, H.tZ)(Wt, {
                                        isTieyou: na,
                                        activityPopInfo: R,
                                        feedbackType: L,
                                        accelerateType: w,
                                        accelerateActionRes: D,
                                        accelerateStatusInfo: I,
                                        skipFromFeedBackPop: function () {
                                          return e.skipFromFeedBackPop();
                                        },
                                        hideFeedBackPop: function () {
                                          return e.hidePopup();
                                        },
                                        ubtTrace: function (t) {
                                          return e.traceHooks(t);
                                        },
                                      }),
                                    "goldFinger" === s &&
                                      (0, H.tZ)(Mt, {
                                        data: (0, f.Z)(
                                          {
                                            canGetMobile: m,
                                            isTieyou: na,
                                            userName: h,
                                            isCurrentLogin: u,
                                          },
                                          T
                                        ),
                                        hideGoldFingerPopup:
                                          this.hideGoldFingerPopup,
                                        originLogin: this.originLogin,
                                        goldFingerAccelerate:
                                          this.goldFingerAccelerate,
                                        goldFingerAcceAfterOriginLogin:
                                          this.goldFingerAcceAfterOriginLogin,
                                      }),
                                    "crash" === s &&
                                      (0, H.BX)(v.View, {
                                        children: [
                                          (0, H.tZ)(v.View, {
                                            className: "shade-box",
                                          }),
                                          (0, H.BX)(v.View, {
                                            className:
                                              "pop-mid pop-modal pop-result " +
                                              (W ? "pop-modal-ad" : ""),
                                            children: [
                                              (0, H.BX)(v.View, {
                                                className: "pop-result-hd",
                                                children: [
                                                  (0, H.tZ)(v.View, {
                                                    className: "tit",
                                                    children: "页面崩溃了",
                                                  }),
                                                  (0, H.tZ)(v.View, {
                                                    className: "txt",
                                                    children:
                                                      "程序员正在拼命修复中！",
                                                  }),
                                                ],
                                              }),
                                              (0, H.tZ)(v.View, {
                                                className:
                                                  "pop-result-bd pop-result-crash",
                                                children: (0, H.tZ)(v.View, {
                                                  className: "img-cxy",
                                                }),
                                              }),
                                              (0, H.tZ)(v.Button, {
                                                className: "btn-submit",
                                                id: "APBB",
                                                onClick: this.reloadPage,
                                                children: (0, H.tZ)(v.View, {
                                                  className: "s",
                                                  children: "点击刷新重试",
                                                }),
                                              }),
                                              (0, H.tZ)(v.Icon, {
                                                className: "icon-closed",
                                                id: "APBC",
                                                onClick: this.hidePopup,
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    "collectMiniApp" === s &&
                                      (0, H.BX)(v.View, {
                                        children: [
                                          (0, H.tZ)(v.View, {
                                            className: "shade-box",
                                            id: "APBD",
                                            onClick: this.hideCollectGetPkg,
                                          }),
                                          (0, H.BX)(v.View, {
                                            className: "pop-collcet",
                                            id: "APBE",
                                            onClick: this.hideCollectGetPkg,
                                            children: [
                                              (0, H.tZ)(v.View, {
                                                className: "tit",
                                                children: "添加步骤：",
                                              }),
                                              (0, H.BX)(v.View, {
                                                className: "txt",
                                                children: [
                                                  "1. 点击右上角按钮",
                                                  (0, H.tZ)(v.Icon, {
                                                    className: "icon-menu",
                                                  }),
                                                ],
                                              }),
                                              (0, H.tZ)(v.View, {
                                                className: "txt",
                                                children:
                                                  "2. 选择“添加到我的小程序”；",
                                              }),
                                              (0, H.tZ)(v.View, {
                                                className: "txt",
                                                children:
                                                  "3. 在微信首页下拉打开任务栏，可在“我的小程序”中打开“" +
                                                  (na ? "铁友" : "智行火车票") +
                                                  "”小程序。",
                                              }),
                                              (0, H.tZ)(v.Image, {
                                                src:
                                                  "https://images3.c-ctrip.com/zt/wechat/" +
                                                  (na
                                                    ? "guide-index-ty.png"
                                                    : "guide-index-zx.png"),
                                                className: "guide-img",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    "subMask" === s &&
                                      (0, H.tZ)(X.Z, { style: { top: "5%" } }),
                                    (0, H.tZ)(E.Z, {
                                      show:
                                        "subscribePop_RobshareMyself_Popup" ===
                                        s,
                                      info: G,
                                      onSuccess:
                                        this.onSubscribeModalSuccess.bind(this),
                                      onFail:
                                        this.onSubscribeModalFail.bind(this),
                                      onCancel:
                                        this.onSubscribeModalCancel.bind(this),
                                      onProcess:
                                        this.onSubscribeModalProcess.bind(this),
                                    }),
                                    Q &&
                                      (0, H.tZ)(v.View, {
                                        className: "shadow-mask",
                                        onTouchMove: this.noop,
                                        id: "APBF",
                                        onClick: this.closeMask.bind(this),
                                      }),
                                    (0, H.tZ)(v.View, {
                                      className: "share-image",
                                      style: "visibility: "
                                        .concat(
                                          q && "success" === $
                                            ? "visible"
                                            : "hidden",
                                          "; bottom: "
                                        )
                                        .concat(
                                          q && "success" === $ ? "0" : "-1000",
                                          "%"
                                        ),
                                      id: "APBG",
                                      onClick: this.closeMask.bind(this),
                                      catchMove: !0,
                                      children: (0, H.tZ)(z.Z, {
                                        ref: this.refCanvas,
                                        id: "canvas",
                                        shareTitle: J,
                                        springTitle: te,
                                        backgroundUrl: ee,
                                        pagePath: Y,
                                        backgroundWidth: 280,
                                        backgroundHeight: 390,
                                        qrcodeWidth: 84,
                                        qrcodeHeight: 84,
                                        qrcodeY: 160,
                                        qrcodeX: 98,
                                        btnStyle: ca,
                                        btnText: "保存图片",
                                        onSavesuccess: this.onSharePictureSave,
                                        onSuccess: this.onSharePictureSuccess,
                                        onFail: this.onSharePictureFail,
                                        onClicktrace: function () {
                                          return e.traceHooks(206563);
                                        },
                                      }),
                                    }),
                                    (0, H.tZ)(M.Z, {}),
                                    (0, H.tZ)(v.View, {
                                      children:
                                        "accelerateModal" === s &&
                                        !oe &&
                                        (0, H.tZ)(Ct, {
                                          pageId: this.pageId,
                                          closeModal: this.closeAccelerateModal,
                                          type: ne,
                                          accelerateVideoUrl: ie,
                                          isJumpToNewUserGifts: ce,
                                          navigateTo: this.navigateTo,
                                          doAccelerate: this.doAccelerate,
                                          accelerateActionRes: D,
                                          ubtTrace: this.ubtTrace,
                                          options: this.options,
                                        }),
                                    }),
                                  ],
                                })
                              );
                            },
                          },
                          {
                            key: "render",
                            value: function () {
                              return "B" === this.state.newCode
                                ? this.renderNew()
                                : this.renderOld();
                            },
                          },
                        ]),
                        a
                      );
                    })(Z.default.Component))
                  ) || oe)
              ) || oe;
          (ra.enableShareAppMessage = !0),
            Page(
              (0, o.createPageConfig)(
                ra,
                "pages/robshareV3/index",
                { root: { cn: [] } },
                { navigationStyle: "custom" } || {}
              )
            );
        },
      },
      function (e) {
        e.O(
          0,
          [
            20858, 19772, 87032, 82524, 43278, 42552, 67074, 62396, 54576,
            85786, 20481, 14810, 3997, 55464, 74171, 58792, 86167, 79204, 41950,
            78419, 94181, 5182, 83805, 70592, 51355, 10162, 59789, 20706, 82600,
            9481, 19559, 11216, 68592,
          ],
          function () {
            return (function (t) {
              return e((e.s = t));
            })(51918);
          }
        ),
          e.O();
      },
    ]);
})();
