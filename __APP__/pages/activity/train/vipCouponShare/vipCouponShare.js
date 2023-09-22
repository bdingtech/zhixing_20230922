!(function () {
  "use strict";
  require("../sub-vendors.js"),
    require("../sub-common/641b9f552cd3c19e352aef60a88676a0.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [73104],
      {
        32683: function (e, t, i) {
          var a,
            n,
            s,
            o = i(32180),
            c = i(57042),
            r = i(24460),
            l = i(21867),
            h = i(86066),
            d = i(45023),
            u = i(52500),
            g = i(71515),
            m = i(92954),
            p = i.n(m),
            w = i(48792),
            f = i.n(w),
            N = i(79910),
            v = i(79792),
            C = i(9153),
            V = i(18783),
            Z = i(13025),
            b = i(10741),
            I = i(49120),
            k = i(81957),
            y = i(17782),
            S = i(81954),
            B = i(48813),
            P = v.default.isTieyou,
            D =
              ((a = (0, k.h)()),
              (n = f()({
                pageId: P ? "10650038597" : "10650039644",
                data: {
                  isTieyou: P,
                  isLogin: !1,
                  newUserFlag: !1,
                  receiveOver: !1,
                  openId: "",
                  canOpenTypeUserInfo: (function (e) {
                    return !(!p().canIUse || !p().canIUse(e));
                  })("button.open-type.getUserInfo"),
                  isSelf: !1,
                  grabCount: 0,
                  friendList: [],
                  initiatorReceiveCountMonth: 0,
                  receiveFlag: !1,
                  showResultDialog: !1,
                  showNotNewUserDialog: !1,
                  showHasCouponDialog: !1,
                  isAuthorizeFailed: !1,
                  shareFlag: !1,
                  pagePath: "",
                  backgroundUrl: P
                    ? "https://images3.c-ctrip.com/train/hd/20200310-ztrip-vip-coupon-share/launch_share_bg_ty2.png"
                    : "https://images3.c-ctrip.com/train/hd/20200310-ztrip-vip-coupon-share/launch_share_bg2.png",
                  showShareImages: !1,
                  canMakePic: !0,
                  pictureStatus: "loading",
                  showShareTipModalA: !1,
                  showShareTipModalB: !1,
                  showMoreDetailList: !1,
                  sysAutoReceiveCount: 0,
                  initiatorReceiveDetailList: [],
                  initiatorReceiveCountAll: 0,
                  shareCount: 0,
                  assistCountMonth: 0,
                  availableCount: 0,
                  isAnswerEntrenceShow: !1,
                  answerActivityImg: "",
                  answerActivityLink: "",
                },
                onLoad: function (e) {
                  var t = this;
                  if (
                    (P || this.ubtTrace(170244, { openId: V.ZP.openid || "" }),
                    V.ZP.isLogin && this.setData({ isLogin: !0 }),
                    (this.shareType = 1),
                    e.scene)
                  ) {
                    var i = decodeURIComponent(e.scene);
                    this.getGenerateParam(i).then(function () {
                      t.setData({
                        originPagePath: ""
                          .concat(
                            (0, m.getCurrentInstance)().router &&
                              (0, m.getCurrentInstance)().router.path,
                            "?shareKey="
                          )
                          .concat(encodeURIComponent(t.data.shareKey)),
                      }),
                        t.getSetting(),
                        t.getOpenId(),
                        t.getScreenData(),
                        t.getActivityInfo();
                    });
                  } else {
                    var a = decodeURIComponent(e.shareKey || "");
                    !a && this.data.isLogin
                      ? this.getShareKey().then(function () {
                          t.setData({
                            originPagePath: ""
                              .concat(
                                (0, m.getCurrentInstance)().router &&
                                  (0, m.getCurrentInstance)().router.path,
                                "?shareKey="
                              )
                              .concat(encodeURIComponent(t.data.shareKey)),
                          });
                        })
                      : this.setData({
                          shareKey: a,
                          originPagePath: ""
                            .concat(
                              (0, m.getCurrentInstance)().router &&
                                (0, m.getCurrentInstance)().router.path.path,
                              "?shareKey="
                            )
                            .concat(encodeURIComponent(a)),
                        }),
                      this.getSetting(),
                      this.getOpenId(),
                      this.getScreenData(),
                      this.getActivityInfo();
                  }
                },
                onShow: function () {
                  console.log("show...."),
                    1 === this.data.shareCount &&
                      this.data.isSelf &&
                      this.setData({
                        showShareTipModalB: !0,
                        shareCount: this.data.shareCount + 1,
                      });
                },
                onShareAppMessage: function () {
                  var e = "",
                    t = "";
                  return (
                    1 === this.shareType
                      ? ((e = "".concat(
                          P ? "铁友" : "智行",
                          "帮我抢票成功啦，限量赠送VIP抢票券，快来领取~"
                        )),
                        (t = this.data.originPagePath))
                      : ((e =
                          "送你一张VIP抢票券，直升抢票最高速哦，快来领取吧！"),
                        (t = this.data.pagePath)),
                    (this.shareType = 1),
                    this.setData({ shareCount: this.data.shareCount + 1 }),
                    {
                      bu: "train",
                      title: e,
                      desc: e,
                      path: t,
                      imageUrl:
                        "https://images3.c-ctrip.com/train/hd/20200310-ztrip-vip-coupon-share/mini_share_card.png",
                    }
                  );
                },
                getGenerateParam: function (e) {
                  var t = this;
                  return (
                    (0, I.showLoading)(),
                    (0, Z.cq)({ key: e, scene: C.ZP.generateParamsScene })
                      .then(function (e) {
                        if (1 === e.resultCode) {
                          var i = N.Z.getUrlParams(e.param || "") || {},
                            a = decodeURIComponent(i.shareKey || "");
                          t.setData({ shareKey: a });
                        }
                      })
                      .catch(function (e) {
                        return console.log(e);
                      })
                      .finally(function () {
                        return (0, I.hideLoading)();
                      })
                  );
                },
                getOpenId: function () {
                  var e = this;
                  (0, V.M9)()
                    .then(function (t) {
                      var i = t.openid;
                      console.log("openid", i), e.setData({ openId: i });
                    })
                    .catch(function () {
                      console.log("获取openId失败");
                      var t = V.ZP.openid || "";
                      t &&
                        (console.log("user_openid_in_storage", t),
                        e.setData({ openId: t }));
                    });
                },
                getScreenData: function () {
                  var e = this;
                  (0, b.ziZ)({ fromPage: 3 })
                    .then(function (t) {
                      if (1 === t.resultCode) {
                        var i = t.bigScreenData.grabCount;
                        e.setData({ grabCount: i });
                      }
                    })
                    .catch(function (e) {
                      return console.log(e);
                    });
                },
                getActivityInfo: function () {
                  var e = this;
                  (0, I.showLoading)(),
                    (0, y.bA)({ shareKey: this.data.shareKey })
                      .then(function (t) {
                        if (1 === t.resultCode) {
                          var i = t.isSelf,
                            a = t.friendList,
                            n = t.initiatorReceiveCountMonth,
                            s = t.receiveFlag,
                            o = t.newUserFlag,
                            c = void 0 !== o && o,
                            r = t.sysAutoReceiveCount,
                            l = t.initiatorReceiveDetailList,
                            h = void 0 === l ? [] : l,
                            d = t.initiatorReceiveCountAll,
                            u = void 0 === d ? 0 : d,
                            g = t.assistCountMonth,
                            m = void 0 === g ? 0 : g,
                            p = t.availableCount,
                            w = void 0 === p ? 0 : p,
                            f = t.isAnswerEntrenceShow,
                            N = void 0 !== f && f,
                            v = t.answerActivityImg,
                            C = void 0 === v ? "" : v,
                            V = t.answerActivityLink,
                            Z = void 0 === V ? "" : V;
                          e.setData({
                            isSelf: i,
                            friendList: a.length ? a : e.data.friendList,
                            initiatorReceiveCountMonth: n,
                            receiveFlag: s,
                            newUserFlag: c,
                            sysAutoReceiveCount: r,
                            initiatorReceiveDetailList: h,
                            initiatorReceiveCountAll: u,
                            assistCountMonth: m,
                            availableCount: w,
                            isAnswerEntrenceShow: N,
                            answerActivityImg: C,
                            answerActivityLink: Z,
                          }),
                            i &&
                              r > 0 &&
                              e.setData({
                                showResultDialog: !0,
                                receiveCount: r,
                              });
                        } else (0, I.showToast)(t.resultMessage);
                      })
                      .catch(function () {
                        return (0, I.showToast)("网络异常，请重试");
                      })
                      .finally(I.hideLoading);
                },
                onReceiveClick: function () {
                  var e = this;
                  (0, I.getUserProfileInfo)({ forceUpdate: !0 })
                    .then(function (t) {
                      t &&
                        ((e.userInfo = t),
                        e.setData({ isAuthorizeFailed: !1 }));
                    })
                    .then(function () {
                      if (e.userInfo && e.canReceive()) {
                        var t = e.userInfo,
                          i = t.nickName,
                          a = t.avatarUrl;
                        (0, I.showLoading)(),
                          (e.data.isSelf
                            ? new Promise(function (e) {
                                e({ resultMessage: "授权成功" });
                              })
                            : (0, y.S4)({
                                shareKey: e.data.shareKey,
                                openId: e.data.openId,
                                avatar: a,
                                nickName: i,
                              })
                          )
                            .then(function (t) {
                              (0, I.hideLoading)(),
                                1 === t.resultCode
                                  ? e.setData({
                                      showResultDialog: !0,
                                      receiveCount: e.data.isSelf
                                        ? t.receiveCount
                                        : 1,
                                    })
                                  : 2 === t.resultCode
                                  ? (e.setData({ showNotNewUserDialog: !0 }),
                                    P ||
                                      e.ubtTrace(170242, {
                                        openId: V.ZP.openid || "",
                                      }))
                                  : 3 === t.resultCode
                                  ? e.setData({ showHasCouponDialog: !0 })
                                  : (0, I.showToast)(t.resultMessage),
                                e.setData({ receiveOver: !0 }),
                                setTimeout(function () {
                                  e.getActivityInfo();
                                }, 1500);
                            })
                            .catch(function (e) {
                              (0, I.hideLoading)(), console.log(e);
                            });
                      }
                    })
                    .catch(function () {});
                },
                toAnswerActivity: function () {
                  this.navigateTo({
                    url: "/functionalPages/twebview/index?url=".concat(
                      encodeURIComponent(this.data.answerActivityLink)
                    ),
                  });
                },
                canReceive: function () {
                  var e = this.data,
                    t = e.isSelf,
                    i = e.receiveFlag,
                    a = e.initiatorReceiveCountMonth,
                    n = e.friendList,
                    s = e.newUserFlag;
                  return t && !i
                    ? (a >= 10
                        ? (0, I.showToast)(
                            "您本月领取次数已达上限，下个月再来吧~"
                          )
                        : (0, I.showToast)(
                            "您当前没有可领取的VIP抢票券，请邀请好友再来吧~"
                          ),
                      this.setData({ receiveOver: !0 }),
                      !1)
                    : !(
                        !this.isSelf &&
                        !i &&
                        (n && n.length >= 30
                          ? (0, I.showToast)(
                              "该好友本月VIP抢票券已全部领取完，下个月再来吧"
                            )
                          : s
                          ? this.setData({ showHasCouponDialog: !0 })
                          : (this.setData({ showNotNewUserDialog: !0 }),
                            P ||
                              this.ubtTrace(170242, {
                                openId: V.ZP.openid || "",
                              })),
                        this.setData({ receiveOver: !0 }),
                        1)
                      );
                },
                handleAssistWithOriginLogin: function () {
                  var e = this;
                  V.ZP.doLogin().then(
                    function () {
                      !e.data.shareKey && e.getShareKey(),
                        e.setData({ isLogin: !0 }),
                        e.getActivityInfo(),
                        e.getSetting();
                    },
                    function () {
                      console.log("取消登录");
                    }
                  );
                },
                getSetting: function () {
                  var e = this,
                    t = !0,
                    i = !0;
                  return new Promise(function (a) {
                    p().getSetting({
                      success: function (n) {
                        n.authSetting["scope.userInfo"]
                          ? ((e.acceImm = !0),
                            (t = !1),
                            N.Z.canUseGetUserProfile
                              ? (0, I.getUserProfileInfo)({ getOnly: !0 })
                                  .then(function (t) {
                                    t &&
                                      ((e.userInfo = t),
                                      p().setStorageSync("USERINFO", t),
                                      (i = !1));
                                  })
                                  .catch(function () {})
                                  .finally(function () {
                                    e.setData({ isGetUserInfoFailed: i }), a();
                                  })
                              : p().getUserInfo({
                                  success: function (t) {
                                    var a = t.userInfo,
                                      n = void 0 === a ? "" : a;
                                    n &&
                                      ((e.userInfo = n),
                                      p().setStorageSync("USERINFO", n),
                                      (i = !1));
                                  },
                                  fail: function (e) {
                                    return console.log(e);
                                  },
                                  complete: function () {
                                    e.setData({ isGetUserInfoFailed: i }), a();
                                  },
                                }))
                          : a("接口调用成功");
                      },
                      fail: function () {
                        return a("接口调用失败");
                      },
                      complete: function () {
                        e.setData({ isAuthorizeFailed: t });
                      },
                    });
                  });
                },
                goCouponPage: function () {
                  this.navigateTo({ url: "/pages/usercenter/kaquan/kaquan" });
                },
                onShareClick: function () {
                  var e = this;
                  this.setData({ showNotNewUserDialog: !1 }),
                    this.getShareKey().then(function () {
                      (e.shareType = 2), e.setData({ shareFlag: !0 });
                    });
                },
                onStartMyAssistClick: function () {
                  this.setData({ showNotNewUserDialog: !1 }),
                    p().reLaunch({
                      url:
                        (0, m.getCurrentInstance)().router &&
                        (0, m.getCurrentInstance)().router.path,
                    });
                },
                toNewGuestGifts: function () {
                  this.setData({ showNotNewUserDialog: !1 });
                  var e = "https://"
                    .concat(
                      v.default.h5domain,
                      "/webapp/train/activity/20201110-ztrip-new-user-gifts/?partner="
                    )
                    .concat(
                      v.default.partner,
                      "&source=vipGrabTicketCoupon&isHideNavBar=YES&titleBgColor=%231864FF"
                    );
                  this.navigateTo({
                    url:
                      "/functionalPages/twebview/index?url=" +
                      encodeURIComponent(e),
                  });
                },
                getShareKey: function () {
                  var e = this;
                  return (
                    (0, I.showLoading)(),
                    (0, y.Gv)()
                      .then(function (t) {
                        1 === t.resultCode &&
                          e.setData({
                            shareKey: t.shareKey,
                            pagePath: ""
                              .concat(
                                (0, m.getCurrentInstance)().router.path,
                                "?shareKey="
                              )
                              .concat(encodeURIComponent(t.shareKey)),
                          });
                      })
                      .catch(function (e) {
                        (0, I.showToast)("网络异常，请重试"), console.error(e);
                      })
                      .finally(I.hideLoading)
                  );
                },
                closeShareLayer: function () {
                  this.setData({ shareFlag: !1 });
                },
                onInvitedClick: function () {
                  (this.shareType = 1), this.setData({ shareFlag: !0 });
                },
                shareToPengYouQuan: function () {
                  var e = this,
                    t = this.data,
                    i = t.canMakePic,
                    a = t.errorPicMsg,
                    n = t.pictureStatus,
                    s = t.isSelf,
                    o = t.newUserFlag;
                  if (!i) return (0, I.showToast)(a);
                  "loading" === n && (0, I.showLoading)("图片加载中..."),
                    s || o
                      ? this.setData({
                          backgroundUrl: P
                            ? "https://images3.c-ctrip.com/train/hd/20200310-ztrip-vip-coupon-share/launch_share_bg_ty.png"
                            : "https://images3.c-ctrip.com/train/hd/20200310-ztrip-vip-coupon-share/launch_share_bg.png",
                        })
                      : this.setData({
                          backgroundUrl: P
                            ? "https://images3.c-ctrip.com/train/hd/20200310-ztrip-vip-coupon-share/launch_share_bg_ty2.png"
                            : "https://images3.c-ctrip.com/train/hd/20200310-ztrip-vip-coupon-share/launch_share_bg2.png",
                        }),
                    this.closeShareLayer(),
                    setTimeout(function () {
                      e.setData({ showShareImages: !0 });
                    }, 250);
                },
                onSharePictureSuccess: function () {
                  (0, I.hideLoading)(), (this.pictureStatus = "loading");
                },
                onSharePictureFail: function (e) {
                  console.log(e.detail),
                    this.data.showShareImages &&
                      ((0, I.hideLoading)(), (0, I.showToast)(e.detail.msg)),
                    this.setData({
                      canMakePic: !1,
                      errorPicMsg: e.detail.msg,
                      showShareImages: !1,
                    });
                },
                onSharePictureSave: function (e) {
                  var t = this;
                  console.log(e),
                    p().showModal({
                      title: "提示",
                      content: "图片保存成功，快去发个朋友圈吧~",
                      showCancel: !1,
                      success: function () {
                        t.setData({ showShareImages: !1 });
                      },
                    });
                },
                handlePYQShareAction: function () {
                  this.setData({ showShareImages: !1 });
                },
                goIndexPage: function () {
                  N.Z.relaunchHome();
                },
                hideDialog: function (e) {
                  var t = e.currentTarget.dataset.key;
                  this.setData((0, d.Z)({}, t, !1));
                },
                onShowMoreDetailList: function () {
                  this.setData({ showMoreDetailList: !0 });
                },
                openShareTipModalA: function () {
                  this.setData({ showShareTipModalA: !0 });
                },
              })),
              a(
                (s =
                  n(
                    (s = (function (e) {
                      (0, l.Z)(i, e);
                      var t = (0, h.Z)(i);
                      function i() {
                        return (0, c.Z)(this, i), t.apply(this, arguments);
                      }
                      return (
                        (0, r.Z)(i, [
                          {
                            key: "render",
                            value: function () {
                              var e = this,
                                t = this.data,
                                i = t.receiveCount,
                                a = t.showResultDialog,
                                n = t.showNotNewUserDialog,
                                s = t.showHasCouponDialog,
                                o = t.grabCount,
                                c = t.isSelf,
                                r = t.friendList,
                                l = t.isLogin,
                                h = t.isAuthorizeFailed,
                                d = t.canOpenTypeUserInfo,
                                u = t.receiveOver,
                                m = t.newUserFlag,
                                p = t.shareFlag,
                                w = t.showShareImages,
                                f = t.backgroundUrl,
                                N = t.pagePath,
                                v = t.originPagePath,
                                C = t.initiatorReceiveDetailList,
                                V = t.initiatorReceiveCountMonth,
                                Z = t.showShareTipModalA,
                                b = t.showShareTipModalB,
                                I = t.showMoreDetailList,
                                k = t.initiatorReceiveCountAll,
                                y = t.shareCount,
                                D = t.assistCountMonth,
                                A = t.availableCount,
                                T = t.isAnswerEntrenceShow,
                                x = t.answerActivityImg,
                                X = C.length > 0,
                                F = C.map(function (e) {
                                  var t = [],
                                    i = "";
                                  return (
                                    e.forEach(function (a, n) {
                                      var s = a.avatar,
                                        o = a.nickName;
                                      t.push(s),
                                        (i =
                                          i +
                                          (o.length > 3
                                            ? o.slice(0, 3) + "..."
                                            : o) +
                                          (n !== e.length - 1 ? "，" : ""));
                                    }),
                                    { avatarList: t, nameStr: i }
                                  );
                                }),
                                L = r.length < 3 ? 3 - r.length : 0;
                              return (0, B.BX)(g.Block, {
                                children: [
                                  (0, B.BX)(g.View, {
                                    className: "wrap",
                                    children: [
                                      b &&
                                        (0, B.tZ)(g.View, {
                                          className: "shadow ",
                                          id: "AeEr",
                                          onClick: this.hideDialog,
                                          "data-key": "showShareTipModalB",
                                          children: (0, B.BX)(g.View, {
                                            className: "pop-mid pop-suc",
                                            children: [
                                              (0, B.tZ)(g.View, {
                                                className: "pop-title",
                                                children: "分享成功",
                                              }),
                                              (0, B.tZ)(g.View, {
                                                className: "img-suc",
                                              }),
                                              (0, B.BX)(g.View, {
                                                className: "btn-box",
                                                children: [
                                                  (0, B.tZ)(g.View, {
                                                    className: "txt",
                                                    children:
                                                      "继续分享可提高成功率，获得更多VIP抢票券",
                                                  }),
                                                  (0, B.BX)(g.Button, {
                                                    className: "btn-submit",
                                                    openType: "share",
                                                    children: [
                                                      (0, B.tZ)(g.Text, {
                                                        className:
                                                          "ifont-wechat iconfont",
                                                      }),
                                                      "继续分享到群聊",
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              (0, B.tZ)(g.Text, {
                                                className:
                                                  "iconfont ifont-closed icon-closed",
                                                id: "AeEs",
                                                onClick: this.hideDialog,
                                                "data-key":
                                                  "showShareTipModalB",
                                              }),
                                            ],
                                          }),
                                        }),
                                      Z &&
                                        (0, B.tZ)(g.View, {
                                          className: "shadow ",
                                          id: "AeEt",
                                          onClick: this.hideDialog,
                                          "data-key": "showShareTipModalA",
                                          children: (0, B.BX)(g.View, {
                                            className: "pop-mid pop-sharebox",
                                            children: [
                                              (0, B.tZ)(g.View, {
                                                className: "pop-share-hd",
                                                children: (0, B.tZ)(g.View, {
                                                  className: "modal-title",
                                                  children:
                                                    " 价值¥50·VIP抢票券 ",
                                                }),
                                              }),
                                              (0, B.BX)(g.View, {
                                                className: "pop-share-bd",
                                                children: [
                                                  L > 0 &&
                                                    (0, B.BX)(g.View, {
                                                      className: "tip",
                                                      children: [
                                                        " 仅差",
                                                        L,
                                                        "人即可领取 ",
                                                      ],
                                                    }),
                                                  (0, B.BX)(g.View, {
                                                    className: "btn-box",
                                                    children: [
                                                      (0, B.tZ)(g.View, {
                                                        className: "txt",
                                                        children:
                                                          " 使用VIP抢票券， 可直升全平台最高抢票速度 ",
                                                      }),
                                                      (0, B.BX)(g.Button, {
                                                        className: "btn-submit",
                                                        openType: "share",
                                                        children: [
                                                          " ",
                                                          "邀好友领券",
                                                          " ",
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                  " ",
                                                ],
                                              }),
                                              (0, B.tZ)(g.Text, {
                                                className:
                                                  "iconfont ifont-closed icon-closed",
                                                id: "AeEu",
                                                onClick: this.hideDialog,
                                                "data-key":
                                                  "showShareTipModalA",
                                              }),
                                            ],
                                          }),
                                        }),
                                      n &&
                                        (0, B.tZ)(g.View, {
                                          className: "shadow",
                                          id: "AeEv",
                                          onClick: this.hideDialog,
                                          "data-key": "showNotNewUserDialog",
                                          children: (0, B.BX)(g.View, {
                                            className: "pop-bg",
                                            children: [
                                              (0, B.BX)(g.View, {
                                                style: "padding-top:30rpx",
                                                className: "tit",
                                                children: [
                                                  (0, B.tZ)(g.Text, {
                                                    className:
                                                      "iconfont ifont-closed",
                                                  }),
                                                  "领取失败",
                                                ],
                                              }),
                                              (0, B.BX)(g.View, {
                                                className: "txt",
                                                children: [
                                                  (0, B.tZ)(g.Text, {
                                                    children:
                                                      "抱歉，您是老朋友啦，不能领取该券",
                                                  }),
                                                  (0, B.tZ)(g.View, {
                                                    children:
                                                      "分享给新朋友，您也可以免费拿",
                                                  }),
                                                ],
                                              }),
                                              (0, B.tZ)(g.View, {
                                                className: "btn",
                                                children: (0, B.tZ)(g.Button, {
                                                  id: "AeEw",
                                                  onClick:
                                                    this.onStartMyAssistClick,
                                                  children: "发起我的助力",
                                                }),
                                              }),
                                              (0, B.tZ)(g.Text, {
                                                className:
                                                  "iconfont ifont-closed icon-closed",
                                                id: "AeEx",
                                                onClick: this.hideDialog,
                                                "data-key":
                                                  "showNotNewUserDialog",
                                              }),
                                            ],
                                          }),
                                        }),
                                      s &&
                                        (0, B.tZ)(g.View, {
                                          className: "shadow",
                                          id: "AeEy",
                                          onClick: this.hideDialog,
                                          "data-key": "showHasCouponDialog",
                                          children: (0, B.BX)(g.View, {
                                            className:
                                              "pop-bg pop-has-coupon-dialog",
                                            children: [
                                              (0, B.BX)(g.View, {
                                                className: "txt",
                                                style: "padding-top:30rpx",
                                                children: [
                                                  (0, B.tZ)(g.View, {
                                                    children:
                                                      "您已领取过VIP抢票券，不可重复领取",
                                                  }),
                                                  (0, B.tZ)(g.View, {
                                                    children:
                                                      "可继续领取新客大礼包",
                                                  }),
                                                ],
                                              }),
                                              (0, B.BX)(g.View, {
                                                className: "btn",
                                                children: [
                                                  (0, B.BX)(g.Button, {
                                                    className: "btn-submit",
                                                    id: "AeEz",
                                                    onClick:
                                                      this.toNewGuestGifts,
                                                    children: [
                                                      "继续领取新客大礼包",
                                                      (0, B.tZ)(g.Text, {
                                                        className: "tag",
                                                        children: "价值¥150",
                                                      }),
                                                    ],
                                                  }),
                                                  (0, B.tZ)(g.Button, {
                                                    className: "btn-bottom",
                                                    id: "AeFA",
                                                    onClick: this.goIndexPage,
                                                    children: "去使用VIP抢票券",
                                                  }),
                                                ],
                                              }),
                                              (0, B.tZ)(g.Text, {
                                                className:
                                                  "iconfont ifont-closed icon-closed",
                                                id: "AeFB",
                                                onClick: this.hideDialog,
                                                "data-key":
                                                  "showHasCouponDialog",
                                              }),
                                            ],
                                          }),
                                        }),
                                      a &&
                                        (0, B.tZ)(g.View, {
                                          className: "shadow ",
                                          id: "AeFC",
                                          onClick: this.hideDialog,
                                          "data-key": "showResultDialog",
                                          children: (0, B.BX)(g.View, {
                                            className: "pop-getbox pop-mid",
                                            children: [
                                              (0, B.BX)(g.View, {
                                                className: "pop-get-hd",
                                                children: [
                                                  (0, B.BX)(g.View, {
                                                    className: "info",
                                                    children: [
                                                      (0, B.tZ)(g.Text, {
                                                        className:
                                                          "ifont-suc iconfont",
                                                      }),
                                                      "领取成功",
                                                    ],
                                                  }),
                                                  (0, B.tZ)(g.View, {
                                                    className: "title",
                                                    children: "VIP抢票券",
                                                  }),
                                                  (0, B.tZ)(g.View, {
                                                    className: "text",
                                                    children:
                                                      "您已成功获得" +
                                                      i +
                                                      "张VIP抢票券，前往卡券包查看",
                                                  }),
                                                ],
                                              }),
                                              (0, B.tZ)(g.View, {
                                                className: "pop-get-bd",
                                                children: (0, B.BX)(g.View, {
                                                  className: "btn-box",
                                                  children: [
                                                    c
                                                      ? (0, B.tZ)(g.Button, {
                                                          className:
                                                            "btn-submit",
                                                          id: "AeFD",
                                                          onClick:
                                                            this.onShareClick,
                                                          children: "继续分享",
                                                        })
                                                      : (0, B.BX)(g.Button, {
                                                          className:
                                                            "btn-submit",
                                                          id: "AeFE",
                                                          onClick:
                                                            this
                                                              .toNewGuestGifts,
                                                          children: [
                                                            "继续领取新客大礼包",
                                                            (0, B.tZ)(g.Text, {
                                                              className: "tag",
                                                              children:
                                                                "价值¥150",
                                                            }),
                                                          ],
                                                        }),
                                                    (0, B.tZ)(g.Button, {
                                                      className: "btn-bottom",
                                                      id: "AeFF",
                                                      onClick: this.goIndexPage,
                                                      children: "去使用",
                                                    }),
                                                  ],
                                                }),
                                              }),
                                              (0, B.tZ)(g.Text, {
                                                className:
                                                  "iconfont ifont-closed icon-closed",
                                                id: "AeFG",
                                                onClick: this.hideDialog,
                                                "data-key": "showResultDialog",
                                              }),
                                            ],
                                          }),
                                        }),
                                      (0, B.BX)(g.View, {
                                        className: "top-box",
                                        children: [
                                          (0, B.BX)(g.View, {
                                            className: "number",
                                            children: [
                                              (P ? "铁友" : "智行") + "今日为",
                                              (0, B.tZ)(g.Text, {
                                                children: o,
                                              }),
                                              "人抢票成功",
                                            ],
                                          }),
                                          !c &&
                                            r.length > 0 &&
                                            (0, B.tZ)(g.View, {
                                              className: "marquee-box",
                                              children: (0, B.tZ)(g.Swiper, {
                                                autoplay: "true",
                                                vertical: "true",
                                                interval: "3000",
                                                circular: "true",
                                                duration: "400",
                                                style: "height:85rpx",
                                                children: r.map(function (
                                                  t,
                                                  i
                                                ) {
                                                  return (0, B.tZ)(
                                                    g.Block,
                                                    {
                                                      children: (0, B.tZ)(
                                                        g.SwiperItem,
                                                        {
                                                          onTouchMove: e.noop,
                                                          children: (0, B.BX)(
                                                            g.View,
                                                            {
                                                              className: "item",
                                                              children: [
                                                                (0, B.tZ)(
                                                                  g.Image,
                                                                  {
                                                                    src: t.avatar,
                                                                    className:
                                                                      "avatar",
                                                                  }
                                                                ),
                                                                (0, B.tZ)(
                                                                  g.Text,
                                                                  {
                                                                    className:
                                                                      "user-name",
                                                                    children:
                                                                      t.nickName,
                                                                  }
                                                                ),
                                                                "已领取VIP抢票券",
                                                              ],
                                                            }
                                                          ),
                                                        }
                                                      ),
                                                    },
                                                    i
                                                  );
                                                }),
                                              }),
                                            }),
                                          (0, B.BX)(g.View, {
                                            className: "coupon",
                                            children: [
                                              (0, B.BX)(g.View, {
                                                className: "txt-top",
                                                children: [
                                                  (0, B.tZ)(g.Text, {
                                                    children: "VIP抢票券",
                                                  }),
                                                  (0, B.tZ)(g.Text, {
                                                    children: "价值¥ 50",
                                                  }),
                                                ],
                                              }),
                                              (0, B.BX)(g.View, {
                                                className: "txt-btm",
                                                children: [
                                                  "领取后可",
                                                  (0, B.tZ)(g.Text, {
                                                    children: "直升VIP抢票速度",
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, B.BX)(g.View, {
                                        className: "invitation",
                                        children: [
                                          c &&
                                            (0, B.BX)(g.Block, {
                                              children: [
                                                (0, B.tZ)(g.View, {
                                                  className: "tips-txt1",
                                                  children:
                                                    V >= 10
                                                      ? "本月VIP抢票券已全部领取完"
                                                      : "每邀请3位新用户领取，可得1张VIP抢票券",
                                                }),
                                                (0, B.tZ)(g.View, {
                                                  className: "tips-txt2",
                                                  children: (0, B.BX)(g.View, {
                                                    children: [
                                                      "当前共",
                                                      (0, B.tZ)(g.Text, {
                                                        children: D,
                                                      }),
                                                      "位好友已领取",
                                                    ],
                                                  }),
                                                }),
                                                V < 10 &&
                                                  (0, B.tZ)(g.View, {
                                                    className: "hide-box",
                                                    children: (0, B.tZ)(
                                                      g.View,
                                                      {
                                                        className:
                                                          "friend-wrap",
                                                        children: (0, B.BX)(
                                                          g.View,
                                                          {
                                                            className:
                                                              "friend-slide",
                                                            children: [
                                                              r.length < 30 &&
                                                                (0, B.BX)(
                                                                  g.View,
                                                                  {
                                                                    className:
                                                                      "friend",
                                                                    id: "AeFH",
                                                                    onClick:
                                                                      this
                                                                        .onShareClick,
                                                                    children: [
                                                                      (0, B.tZ)(
                                                                        g.View,
                                                                        {
                                                                          className:
                                                                            "tx",
                                                                        }
                                                                      ),
                                                                      (0, B.tZ)(
                                                                        g.View,
                                                                        {
                                                                          className:
                                                                            "name",
                                                                          children:
                                                                            "待邀请",
                                                                        }
                                                                      ),
                                                                    ],
                                                                  }
                                                                ),
                                                              (!r.length ||
                                                                1 ===
                                                                  r.length) &&
                                                                (0, B.BX)(
                                                                  g.View,
                                                                  {
                                                                    className:
                                                                      "friend",
                                                                    id: "AeFI",
                                                                    onClick:
                                                                      this
                                                                        .onShareClick,
                                                                    children: [
                                                                      (0, B.tZ)(
                                                                        g.View,
                                                                        {
                                                                          className:
                                                                            "tx",
                                                                        }
                                                                      ),
                                                                      (0, B.tZ)(
                                                                        g.View,
                                                                        {
                                                                          className:
                                                                            "name",
                                                                          children:
                                                                            "待邀请",
                                                                        }
                                                                      ),
                                                                    ],
                                                                  }
                                                                ),
                                                              !r.length &&
                                                                (0, B.BX)(
                                                                  g.View,
                                                                  {
                                                                    className:
                                                                      "friend",
                                                                    id: "AeFJ",
                                                                    onClick:
                                                                      this
                                                                        .onShareClick,
                                                                    children: [
                                                                      (0, B.tZ)(
                                                                        g.View,
                                                                        {
                                                                          className:
                                                                            "tx",
                                                                        }
                                                                      ),
                                                                      (0, B.tZ)(
                                                                        g.View,
                                                                        {
                                                                          className:
                                                                            "name",
                                                                          children:
                                                                            "待邀请",
                                                                        }
                                                                      ),
                                                                    ],
                                                                  }
                                                                ),
                                                              r.map(function (
                                                                e,
                                                                t
                                                              ) {
                                                                return (0,
                                                                B.BX)(
                                                                  g.View,
                                                                  {
                                                                    className:
                                                                      "friend",
                                                                    children: [
                                                                      (0, B.tZ)(
                                                                        g.View,
                                                                        {
                                                                          className:
                                                                            "tx",
                                                                          children:
                                                                            e.avatar &&
                                                                            (0,
                                                                            B.tZ)(
                                                                              g.Image,
                                                                              {
                                                                                src: e.avatar,
                                                                              }
                                                                            ),
                                                                        }
                                                                      ),
                                                                      (0, B.tZ)(
                                                                        g.View,
                                                                        {
                                                                          className:
                                                                            "name",
                                                                          children:
                                                                            e.nickName,
                                                                        }
                                                                      ),
                                                                    ],
                                                                  },
                                                                  t
                                                                );
                                                              }),
                                                            ],
                                                          }
                                                        ),
                                                      }
                                                    ),
                                                  }),
                                              ],
                                            }),
                                          !u || c
                                            ? (0, B.BX)(g.View, {
                                                className: "btn-box",
                                                children: [
                                                  !l &&
                                                    (0, B.tZ)(g.Button, {
                                                      className: "btn-submit",
                                                      id: "AeFK",
                                                      onClick:
                                                        this
                                                          .handleAssistWithOriginLogin,
                                                      children:
                                                        "登录" +
                                                        (P ? "铁友" : "智行") +
                                                        "账号领取",
                                                    }),
                                                  h
                                                    ? (0, B.tZ)(g.Block, {
                                                        children:
                                                          l &&
                                                          (0, B.tZ)(g.View, {
                                                            children:
                                                              !c &&
                                                              r.length >= 30
                                                                ? (0, B.tZ)(
                                                                    g.Button,
                                                                    {
                                                                      className:
                                                                        "btn-submit on",
                                                                      children:
                                                                        "本月机会已领完",
                                                                    }
                                                                  )
                                                                : d &&
                                                                  (0, B.tZ)(
                                                                    g.Button,
                                                                    {
                                                                      className:
                                                                        "btn-submit anim",
                                                                      id: "AeFP",
                                                                      onClick:
                                                                        this
                                                                          .onReceiveClick,
                                                                      children:
                                                                        "一键领取VIP券",
                                                                    }
                                                                  ),
                                                          }),
                                                      })
                                                    : (0, B.tZ)(g.Block, {
                                                        children:
                                                          l &&
                                                          (0, B.tZ)(g.View, {
                                                            children: c
                                                              ? (0, B.BX)(
                                                                  g.Block,
                                                                  {
                                                                    children: [
                                                                      X &&
                                                                        (0,
                                                                        B.BX)(
                                                                          g.Button,
                                                                          {
                                                                            className:
                                                                              "btn-submit anim",
                                                                            id: "AeFL",
                                                                            onClick:
                                                                              this
                                                                                .goIndexPage,
                                                                            children:
                                                                              [
                                                                                (0,
                                                                                B.BX)(
                                                                                  g.Text,
                                                                                  {
                                                                                    className:
                                                                                      "tag",
                                                                                    children:
                                                                                      [
                                                                                        A,
                                                                                        "张待使用",
                                                                                      ],
                                                                                  }
                                                                                ),
                                                                                "立即使用",
                                                                              ],
                                                                          }
                                                                        ),
                                                                      V < 10 &&
                                                                        (0,
                                                                        B.tZ)(
                                                                          g.Button,
                                                                          {
                                                                            className:
                                                                              "btn-invite " +
                                                                              (X
                                                                                ? "btn-bottom"
                                                                                : "anim btn-submit"),
                                                                            id: "AeFM",
                                                                            onClick:
                                                                              this
                                                                                .onShareClick,
                                                                            children:
                                                                              X
                                                                                ? "邀请好友 领取更多"
                                                                                : (0,
                                                                                  B.BX)(
                                                                                    g.Block,
                                                                                    {
                                                                                      children:
                                                                                        [
                                                                                          "邀请好友领券",
                                                                                          (0,
                                                                                          B.tZ)(
                                                                                            g.Text,
                                                                                            {
                                                                                              className:
                                                                                                "info",
                                                                                              children:
                                                                                                "分享两个微信群可大幅度提升成功率",
                                                                                            }
                                                                                          ),
                                                                                        ],
                                                                                    }
                                                                                  ),
                                                                          }
                                                                        ),
                                                                    ],
                                                                  }
                                                                )
                                                              : r.length < 30
                                                              ? (0, B.BX)(
                                                                  g.Block,
                                                                  {
                                                                    children: [
                                                                      (0, B.tZ)(
                                                                        g.Button,
                                                                        {
                                                                          className:
                                                                            "btn-submit anim",
                                                                          id: "AeFN",
                                                                          onClick:
                                                                            this
                                                                              .onReceiveClick,
                                                                          children:
                                                                            "一键领取VIP券",
                                                                        }
                                                                      ),
                                                                      (0, B.tZ)(
                                                                        g.Button,
                                                                        {
                                                                          className:
                                                                            "btn-bottom",
                                                                          id: "AeFO",
                                                                          onClick:
                                                                            this
                                                                              .onInvitedClick,
                                                                          children:
                                                                            "分享好友领更多",
                                                                        }
                                                                      ),
                                                                    ],
                                                                  }
                                                                )
                                                              : (0, B.tZ)(
                                                                  g.Button,
                                                                  {
                                                                    className:
                                                                      "btn-submit on",
                                                                    children:
                                                                      "本月机会已领完",
                                                                  }
                                                                ),
                                                          }),
                                                      }),
                                                ],
                                              })
                                            : m
                                            ? (0, B.BX)(g.View, {
                                                className: "btn-box",
                                                children: [
                                                  (0, B.BX)(g.Button, {
                                                    className:
                                                      "btn-submit anim",
                                                    id: "AeFR",
                                                    onClick:
                                                      this.toNewGuestGifts,
                                                    children: [
                                                      (0, B.tZ)(g.Text, {
                                                        className: "tag",
                                                        children: "价值¥150",
                                                      }),
                                                      "继续领取新客大礼包",
                                                    ],
                                                  }),
                                                  (0, B.tZ)(g.Button, {
                                                    className: "btn-bottom",
                                                    id: "AeFS",
                                                    onClick:
                                                      this.onInvitedClick,
                                                    children: "帮TA分享",
                                                  }),
                                                ],
                                              })
                                            : (0, B.tZ)(g.View, {
                                                className: "btn-box",
                                                children: (0, B.tZ)(g.Button, {
                                                  className: "btn-submit anim",
                                                  id: "AeFQ",
                                                  onClick:
                                                    this.onStartMyAssistClick,
                                                  children: "赠券给好友",
                                                }),
                                              }),
                                        ],
                                      }),
                                      c &&
                                        X &&
                                        (0, B.BX)(g.View, {
                                          className: "sucbox",
                                          children: [
                                            (0, B.tZ)(g.View, {
                                              className: "tit",
                                              children: (0, B.tZ)(g.Text, {
                                                className: "tit-text",
                                                children: "您已领到".concat(
                                                  k,
                                                  "张VIP抢票券"
                                                ),
                                              }),
                                            }),
                                            (0, B.tZ)(g.View, {
                                              className: "suc-bd",
                                              children: (I
                                                ? F
                                                : F.slice(0, 3)
                                              ).map(function (e, t) {
                                                return (0, B.BX)(
                                                  g.View,
                                                  {
                                                    className: "suc-li",
                                                    children: [
                                                      (0, B.tZ)(g.View, {
                                                        className: "lbox",
                                                        children:
                                                          e.avatarList.map(
                                                            function (e, t) {
                                                              return (0, B.tZ)(
                                                                g.Image,
                                                                {
                                                                  src: e,
                                                                  className:
                                                                    "avatar",
                                                                },
                                                                t
                                                              );
                                                            }
                                                          ),
                                                      }),
                                                      (0, B.tZ)(g.View, {
                                                        className: "cont",
                                                        children: (0, B.tZ)(
                                                          g.Text,
                                                          {
                                                            className: "desc",
                                                            children: e.nameStr,
                                                          }
                                                        ),
                                                      }),
                                                      (0, B.BX)(g.View, {
                                                        className: "rbox",
                                                        children: [
                                                          (0, B.tZ)(g.Text, {
                                                            className:
                                                              "ifont-suc iconfont",
                                                          }),
                                                          "已领取",
                                                        ],
                                                      }),
                                                    ],
                                                  },
                                                  t
                                                );
                                              }),
                                            }),
                                            F.length > 3 &&
                                              !I &&
                                              (0, B.BX)(g.View, {
                                                className: "suc-more",
                                                id: "AeFY",
                                                onClick:
                                                  this.onShowMoreDetailList,
                                                children: [
                                                  "查看更多",
                                                  (0, B.tZ)(g.Text, {
                                                    className:
                                                      "ifont-arr iconfont",
                                                  }),
                                                ],
                                              }),
                                          ],
                                        }),
                                      T &&
                                        (0, B.tZ)(g.Button, {
                                          className: "btn-get",
                                          disabled: "{{true}}",
                                          id: "AeFZ",
                                          onClick: this.toAnswerActivity,
                                          children: (0, B.tZ)(g.Image, {
                                            src: x,
                                          }),
                                        }),
                                      (0, B.BX)(g.View, {
                                        className: "rule",
                                        children: [
                                          (0, B.tZ)(g.View, {
                                            className: "tit",
                                            children: (0, B.tZ)(g.Text, {
                                              children: "活动须知",
                                            }),
                                          }),
                                          (0, B.BX)(g.View, {
                                            className: "txt",
                                            children: [
                                              (0, B.tZ)(g.Text, {
                                                children:
                                                  "1、“送好友VIP抢票券”活动仅限" +
                                                  (P ? "铁友" : "智行") +
                                                  "用户可参加；",
                                              }),
                                              (0, B.tZ)(g.Text, {
                                                children:
                                                  "2、用户抢票成功后，本月会获得30张可免费分享的VIP抢票券；",
                                              }),
                                              (0, B.tZ)(g.Text, {
                                                children:
                                                  "3、仅限" +
                                                  (P ? "铁友" : "智行") +
                                                  "火车票下单新客可领取；",
                                              }),
                                              (0, B.tZ)(g.Text, {
                                                children:
                                                  "4、本次活动领取的VIP抢票券仅限" +
                                                  (P ? "铁友" : "智行") +
                                                  "抢票时使用，有效期自领取时间起持续1年;",
                                              }),
                                              (0, B.tZ)(g.Text, {
                                                children:
                                                  "5、分享成功且3位新客领取成功后，您可免费再得1张VIP抢票券；",
                                              }),
                                              (0, B.tZ)(g.Text, {
                                                children:
                                                  "6、本月30张VIP抢票券被新客领取完后，即不可再分享，下个月1日，会继续有30张可分享VIP抢票券；",
                                              }),
                                              (0, B.tZ)(g.Text, {
                                                children:
                                                  "7、同一用户账号，同一手机号，同一设备终端，同一支付账户，同一身份证号，符合以上任一条件，均视为同一用户。如使用非正常手段获取活动助力（包括恶意重复刷取助力，使用非法技术行为骗取系统抢票券），" +
                                                  (P ? "铁友" : "智行") +
                                                  "有权不发放VIP抢票券并取消该用户已获得的VIP抢票券，视情况对其追究法律责任",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, B.BX)(g.View, {
                                    className:
                                      "zan-dialog " +
                                      (p ? "zan-dialog--show" : ""),
                                    children: [
                                      (0, B.tZ)(g.View, {
                                        className: "zan-dialog__mask",
                                        id: "AeFa",
                                        onClick: this.closeShareLayer,
                                      }),
                                      p &&
                                        (0, B.BX)(g.View, {
                                          className: "pop-botm",
                                          children: [
                                            (0, B.tZ)(g.Text, {
                                              className: "pop-share-title",
                                              children: "分享券给好友",
                                            }),
                                            (0, B.BX)(g.View, {
                                              className: "pop-share",
                                              style: "list-style-type: none",
                                              children: [
                                                (0, B.BX)(g.View, {
                                                  children: [
                                                    y < 1 || !c
                                                      ? (0, B.tZ)(g.Button, {
                                                          className:
                                                            "icon-wechat",
                                                          openType: "share",
                                                          id: "AeFb",
                                                          onClick:
                                                            this
                                                              .closeShareLayer,
                                                          "data-ubt-key":
                                                            "VIPVoucher_receive_friend_click",
                                                        })
                                                      : (0, B.tZ)(g.Button, {
                                                          className:
                                                            "icon-wechat",
                                                          id: "AeFc",
                                                          onClick: function () {
                                                            e.closeShareLayer() ||
                                                              e.openShareTipModalA();
                                                          },
                                                          "data-ubt-key":
                                                            "VIPVoucher_receive_friend_click",
                                                        }),
                                                    (0, B.tZ)(g.View, {
                                                      children: "微信",
                                                    }),
                                                  ],
                                                }),
                                                (0, B.BX)(g.View, {
                                                  children: [
                                                    (0, B.tZ)(g.Button, {
                                                      className: "icon-pyq",
                                                      id: "AeFd",
                                                      onClick:
                                                        this.shareToPengYouQuan,
                                                      "data-ubt-key":
                                                        "VIPVoucher_receive_moment_click",
                                                    }),
                                                    (0, B.tZ)(g.View, {
                                                      children: "朋友圈",
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                    ],
                                  }),
                                  w &&
                                    (0, B.tZ)(g.View, { className: "shadow" }),
                                  w &&
                                    (0, B.tZ)(g.View, {
                                      className: "share-image",
                                      id: "AeFe",
                                      onClick: this.handlePYQShareAction,
                                      onTouchMove: this.noop,
                                      children: (0, B.tZ)(S.Z, {
                                        backgroundUrl: f,
                                        backgroundWidth: 275,
                                        backgroundHeight: 350,
                                        pagePath: N || v,
                                        qrcodeX: 105,
                                        qrcodeY: 240,
                                        qrcodeWidth: 66,
                                        qrcodeHeight: 66,
                                        onSavesuccess: this.onSharePictureSave,
                                        onSuccess: this.onSharePictureSuccess,
                                        onFail: this.onSharePictureFail,
                                      }),
                                    }),
                                ],
                              });
                            },
                          },
                        ]),
                        i
                      );
                    })(u.default.Component))
                  ) || s)
              ) || s);
          (D.enableShareAppMessage = !0),
            Page(
              (0, o.createPageConfig)(
                D,
                "pages/activity/train/vipCouponShare/vipCouponShare",
                { root: { cn: [] } },
                {
                  navigationBarBackgroundColor: "#1d0f0a",
                  navigationBarTextStyle: "white",
                  navigationBarTitleText: "VIP抢票券分享",
                } || {}
              )
            );
        },
      },
      function (e) {
        e.O(0, [24945, 83805, 51355, 19559, 11216, 68592], function () {
          return (function (t) {
            return e((e.s = t));
          })(32683);
        }),
          e.O();
      },
    ]);
})();
