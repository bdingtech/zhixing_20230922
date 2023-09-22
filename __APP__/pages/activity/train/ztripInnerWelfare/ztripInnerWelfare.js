!(function () {
  "use strict";
  require("../sub-vendors.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [40749],
      {
        14236: function (e, t, i) {
          var a = i(32180),
            n = i(57042),
            s = i(24460),
            c = i(21867),
            r = i(86066),
            o = i(79301),
            l = i(95308),
            u = i(45023),
            d = i(52500),
            h = i(92954),
            g = i.n(h),
            p = i(8271),
            w = i.n(p),
            m = i(71515),
            v = i(48792),
            b = i.n(v),
            f = i(79910),
            Z = i(18783),
            T = i(49120),
            x = i(5050),
            N = i(10741),
            S = i(58801),
            B = i(81957),
            A = i(90129),
            k = i(48813);
          function V(e) {
            return e < 10 ? "0" + e : e;
          }
          var C,
            P,
            R = d.default.memo(function (e) {
              var t = this,
                i = e.info,
                a = null,
                n = (0, d.useState)(i),
                s = (0, A.Z)(n, 2),
                c = s[0],
                r = s[1],
                o = function i(n) {
                  var s = (function (e) {
                      var t = e;
                      return t < 0
                        ? { hour: "00", min: "00", sec: "00", end: !0 }
                        : {
                            hour: V(parseInt(t / 3600)),
                            min: V(parseInt((t % 3600) / 60)),
                            sec: V(parseInt((t % 3600) % 60)),
                            ms: ((1e3 * t) % 1e3).toString().slice(0, 1),
                            end: !1,
                          };
                    })(n),
                    c = s.hour,
                    o = s.min,
                    l = s.sec,
                    u = s.end,
                    d = c,
                    h = 0;
                  if ((c >= 24 && ((h = Math.floor(c / 24)), (d = c % 24)), u))
                    return (
                      clearTimeout(a), void (e && e.onChange && e.onChange(!1))
                    );
                  r("".concat(h, "天").concat(d, ":").concat(o, ":").concat(l)),
                    e && e.onReturnTime && e.onReturnTime(n),
                    (a = setTimeout(i.bind(t, n - 1), 1e3));
                };
              return (
                (0, d.useEffect)(function () {
                  o(i);
                }, []),
                (0, k.tZ)(m.Text, { className: "mod-count-down", children: c })
              );
            }),
            D = i(69589),
            L = g().getSystemInfoSync(),
            y = "网络错误，请稍后重试哦~~",
            E = [
              "bZWCIDYNgNlv34-d1B8c9KH_xCBBBpyICzsDuZKPVWA",
              "NdvyuBq2SJA1v9c5QcPwcsqbLUrdENKwG409niPJCK8",
              "VkVTiY4nXTEdTAsnnP9SjVQgO2Fwk_-suaaB_6mA8z8",
              "kXLnac15BL5LAygKgVCeA1F7-kxEwRlsz5BD3fQcwAw",
              "H3N8J1b3pO9FDkTAivEMJA03pgQksXmr04Ut8DA25Ao",
            ],
            X = {
              pageId: "10650051015",
              data:
                ((C = {
                  statusBarHeight: L.statusBarHeight,
                  rules: [],
                  showRule: !1,
                  loginFlag: !1,
                  phone: "",
                  receiveFlag: !1,
                  grabPackageNumber: 0,
                  pageLength: 0,
                  showReceiveAgainTip: !1,
                  showReceiveSuccessToAccountTip: !1,
                  showReceiveSuccessToOrderTip: !1,
                  hasReceivedTimes: 0,
                  totalReceiveTimes: 0,
                  isCountDownBtnShow: !1,
                  isTotalTimesHasWeired: !1,
                  needPassSecondsBeforeReceive: 0,
                  hasQiYeWechatFriend: !1,
                  isQiYeWechatModalShow: !1,
                }),
                (0, u.Z)(C, "isCountDownBtnShow", !1),
                (0, u.Z)(C, "isAnswerEntrenceShow", !1),
                (0, u.Z)(C, "answerActivityImg", ""),
                (0, u.Z)(C, "answerActivityLink", ""),
                (0, u.Z)(C, "isWelfareGroupModalShow", !1),
                (0, u.Z)(C, "subscribeMsgList", []),
                C),
              onLoad: (function () {
                var e = (0, l.Z)(
                  (0, o.Z)().mark(function e() {
                    var t, i;
                    return (0, o.Z)().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (t = g().getCurrentPages()),
                                (i = t ? t.length : 1),
                                this.setData({ pageLength: i }),
                                (0, T.showLoading)(),
                                (e.next = 6),
                                this.getStatusOn2020PrivateGroup()
                              );
                            case 6:
                              (0, T.hideLoading)(), this.getSubscribe();
                            case 8:
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
              getSubscribe: function () {
                var e = this;
                return (0, l.Z)(
                  (0, o.Z)().mark(function t() {
                    var i, a;
                    return (0, o.Z)().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                console.log("getSubscribe"),
                                (t.prev = 1),
                                (t.next = 4),
                                S.Z.getSubscribeMsgInfo(E)
                              );
                            case 4:
                              (i = t.sent),
                                (a = i.unKnownList),
                                console.log("unKnownList", a),
                                a &&
                                  a.length &&
                                  e.setData({
                                    subscribeMsgList: a.slice(0, 3),
                                  }),
                                (t.next = 13);
                              break;
                            case 10:
                              (t.prev = 10),
                                (t.t0 = t.catch(1)),
                                console.log("getSubscribe.fail", t.t0);
                            case 13:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      null,
                      [[1, 10]]
                    );
                  })
                )();
              },
              onShareAppMessage: function () {
                return {
                  title: "欢迎加群，智行送您10个".concat(
                    x.Z.SPEED_PACK,
                    "！也欢迎拉朋友进群来领哦"
                  ),
                  path: "/pages/activity/train/ztripInnerWelfare/ztripInnerWelfare",
                  imageUrl:
                    "https://images3.c-ctrip.com/ztrip/2020LU/2020-12/wxkp@3x.jpg",
                };
              },
              onPageScroll: function (e) {
                return e;
              },
              noop: function () {},
              getStatusOn2020PrivateGroup: function () {
                var e = this;
                return (0, N.EXp)().then(function (t) {
                  if (1 === t.resultCode) {
                    var i = t.loginFlag,
                      a = t.receiveFlag,
                      n = t.phone,
                      s = t.totalReceiveTimes,
                      c = void 0 === s ? 0 : s,
                      r = t.rules,
                      o = void 0 === r ? [] : r,
                      l = t.grabPackageNumber,
                      u = void 0 === l ? 0 : l,
                      d = t.isTotalTimesHasWeired,
                      h = void 0 !== d && d,
                      p = t.needPassSecondsBeforeReceive,
                      w = void 0 === p ? null : p,
                      m = t.hasReceivedTimes,
                      v = void 0 === m ? 0 : m,
                      b = t.hasQiYeWechatFriend,
                      f = void 0 !== b && b,
                      Z = t.jumpUrl,
                      T = void 0 === Z ? "" : Z,
                      x = t.isAnswerEntrenceShow,
                      N = void 0 !== x && x,
                      S = t.answerActivityImg,
                      B = void 0 === S ? "" : S,
                      A = t.answerActivityLink,
                      k = void 0 === A ? "" : A;
                    return (
                      e.setData({
                        loginFlag: i,
                        receiveFlag: a,
                        phone: n,
                        rules: o,
                        grabPackageNumber: u,
                        isTotalTimesHasWeired: h,
                        needPassSecondsBeforeReceive: w,
                        hasReceivedTimes: v,
                        hasQiYeWechatFriend: f,
                        totalReceiveTimes: c,
                        jumpUrl: T,
                        isAnswerEntrenceShow: N,
                        answerActivityImg: B,
                        answerActivityLink: k,
                      }),
                      console.log("stage1", w),
                      void (w
                        ? e.setData({ isCountDownBtnShow: !0 })
                        : e.setData({ isCountDownBtnShow: !1 }))
                    );
                  }
                  console.log("stage2", e.data.needPassSecondsBeforeReceive),
                    g().showModal({
                      title: "提示",
                      content: t.resultMessage || y,
                    });
                });
              },
              receiveOn2020PrivateGroup: function () {
                var e = this;
                return (0, l.Z)(
                  (0, o.Z)().mark(function t() {
                    var i;
                    return (0, o.Z)().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if (
                              !(
                                e.data.hasReceivedTimes >=
                                e.data.totalReceiveTimes
                              )
                            ) {
                              t.next = 2;
                              break;
                            }
                            return t.abrupt(
                              "return",
                              g().navigateTo({ url: e.data.jumpUrl })
                            );
                          case 2:
                            if (!e.data.receiveFlag) {
                              t.next = 6;
                              break;
                            }
                            return (
                              e.setData({ showReceiveAgainTip: !0 }),
                              (0, T.hideLoading)(),
                              t.abrupt("return")
                            );
                          case 6:
                            if (!(e.data.hasReceivedTimes >= 1)) {
                              t.next = 9;
                              break;
                            }
                            if (e.data.hasQiYeWechatFriend) {
                              t.next = 9;
                              break;
                            }
                            return t.abrupt(
                              "return",
                              e.setData({ isQiYeWechatModalShow: !0 })
                            );
                          case 9:
                            return (
                              (t.next = 11),
                              (0, N.QYd)({ speedNum: e.data.grabPackageNumber })
                            );
                          case 11:
                            if (6 !== (i = t.sent).resultCode) {
                              t.next = 15;
                              break;
                            }
                            return (
                              e.setData({ isWelfareGroupModalShow: !0 }),
                              t.abrupt("return")
                            );
                          case 15:
                            if (2 !== i.resultCode) {
                              t.next = 18;
                              break;
                            }
                            return (
                              e.setData({ showReceiveAgainTip: !0 }),
                              t.abrupt("return")
                            );
                          case 18:
                            if (1 === i.resultCode) {
                              t.next = 21;
                              break;
                            }
                            return (
                              g().showModal({
                                title: "提示",
                                content: i.resultMessage || y,
                              }),
                              t.abrupt("return")
                            );
                          case 21:
                            setTimeout(function () {
                              var t;
                              e.setData(
                                ((t = {}),
                                (0, u.Z)(
                                  t,
                                  1 === i.receiveTo
                                    ? "showReceiveSuccessToOrderTip"
                                    : "showReceiveSuccessToAccountTip",
                                  !0
                                ),
                                (0, u.Z)(t, "receiveFlag", !0),
                                t)
                              );
                            }, 200);
                          case 22:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                )();
              },
              onLoginClick: function () {
                var e = this;
                return (0, l.Z)(
                  (0, o.Z)().mark(function t() {
                    return (0, o.Z)().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (0, T.showLoading)(), (t.next = 3), e.doLogin()
                            );
                          case 3:
                            (0, T.hideLoading)();
                          case 4:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                )();
              },
              doLogin: function () {
                var e = this;
                return (0, l.Z)(
                  (0, o.Z)().mark(function t() {
                    return (0, o.Z)().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (t.prev = 0), (t.next = 3), Z.ZP.doLogin();
                            case 3:
                              return (
                                (t.next = 5), e.getStatusOn2020PrivateGroup()
                              );
                            case 5:
                              t.next = 11;
                              break;
                            case 7:
                              (t.prev = 7),
                                (t.t0 = t.catch(0)),
                                console.log(t.t0),
                                g().showToast({
                                  title: "取消登录",
                                  icon: "none",
                                  duration: 2e3,
                                });
                            case 11:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      null,
                      [[0, 7]]
                    );
                  })
                )();
              },
              receiveWithLogin: function () {
                var e = this;
                return (0, l.Z)(
                  (0, o.Z)().mark(function t() {
                    var i, a, n;
                    return (0, o.Z)().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if (e.data.loginFlag) {
                                t.next = 3;
                                break;
                              }
                              return (t.next = 3), e.doLogin();
                            case 3:
                              if (
                                (e.ubtTrace(211846, {
                                  bizKey: "qywx_10speedupBag_getButtonClick",
                                }),
                                (i = "ACTIVITY_INNERWELFARE_SUBSCRIBLE"),
                                (a = g().getStorageSync(i)),
                                (n =
                                  !a || w()(+a).add(7, "day").isBefore(w()())),
                                !e.state.subscribeMsgList.length || !n)
                              ) {
                                t.next = 19;
                                break;
                              }
                              return (
                                console.log(
                                  "this.state.subscribeMsgList",
                                  e.state.subscribeMsgList
                                ),
                                (t.prev = 9),
                                (t.next = 12),
                                S.Z.executeSubscribeMsg(
                                  e.state.subscribeMsgList
                                )
                              );
                            case 12:
                              t.next = 17;
                              break;
                            case 14:
                              (t.prev = 14),
                                (t.t0 = t.catch(9)),
                                console.log("executeSubscribeMsg.fail", t.t0);
                            case 17:
                              e.setData({ subscribeMsgList: [] }),
                                g().setStorageSync(i, w()().valueOf());
                            case 19:
                              return (
                                (0, T.showLoading)(),
                                (t.next = 22),
                                e.receiveOn2020PrivateGroup()
                              );
                            case 22:
                              return (
                                (t.next = 24), e.getStatusOn2020PrivateGroup()
                              );
                            case 24:
                              (0, T.hideLoading)();
                            case 25:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      null,
                      [[9, 14]]
                    );
                  })
                )();
              },
              toggleRuleModal: function (e) {
                this.setData({ showRule: e || !this.data.showRule });
              },
              onBack: function () {
                this.data.pageLength > 1
                  ? g().navigateBack()
                  : f.Z.relaunchHome();
              },
              closeDialog: function (e) {
                var t = e.currentTarget.dataset.dialog;
                this.setData((0, u.Z)({}, t, !1));
              },
              closeDialogAll: function () {
                this.setData({
                  showRule: !1,
                  showReceiveAgainTip: !1,
                  showReceiveSuccessToAccountTip: !1,
                  showReceiveSuccessToOrderTip: !1,
                });
              },
              closeWelfareGroupModal: function () {
                this.setData({ isWelfareGroupModalShow: !1 });
              },
              toGrabOrderPage: function () {
                g().reLaunch({ url: "/pages/trnshare/grablist/grablist" });
              },
              toGrabPointPage: function () {
                g().reLaunch({ url: "/pages/usercenter/kaquan/kaquan" });
              },
              toWelfarePage: function () {
                g().navigateTo({
                  url: "/functionalPages/twebview/index?url=".concat(
                    encodeURIComponent(
                      "https://m.suanya.com/webapp/train/activity/20210524-private-group-user-welfare-center?isHideNavBar=YES"
                    )
                  ),
                });
              },
              toggleQiYeWechatModal: function () {
                this.setData({ isQiYeWechatModalShow: !1 });
              },
              toAnswerActivity: function () {
                this.navigateTo({
                  url: "/functionalPages/twebview/index?url=".concat(
                    encodeURIComponent(this.data.answerActivityLink)
                  ),
                });
              },
              btnExposureUbtTrace: function () {
                this.ubtTrace(209889, {
                  exposureType: "popup",
                  bizKey: "toWechatGroupBottomExposure",
                });
              },
              btnClickUbtTrace: function () {
                this.ubtTrace(209890, { bizKey: "toWechatGroupBottomClick" });
              },
            },
            G =
              (0, B.h)()(
                (P =
                  b()(X)(
                    (P = (function (e) {
                      (0, c.Z)(i, e);
                      var t = (0, r.Z)(i);
                      function i() {
                        return (0, n.Z)(this, i), t.apply(this, arguments);
                      }
                      return (
                        (0, s.Z)(i, [
                          {
                            key: "render",
                            value: function () {
                              var e = this.data,
                                t = e.statusBarHeight,
                                i = e.rules,
                                a = e.showRule,
                                n = e.phone,
                                s = e.loginFlag,
                                c = e.grabPackageNumber,
                                r = e.showReceiveSuccessToAccountTip,
                                o = e.showReceiveSuccessToOrderTip,
                                l = e.showReceiveAgainTip,
                                u = e.hasReceivedTimes,
                                d = e.totalReceiveTimes,
                                h = e.needPassSecondsBeforeReceive,
                                g = e.isQiYeWechatModalShow,
                                p = e.isCountDownBtnShow,
                                w = e.isAnswerEntrenceShow,
                                v = e.answerActivityImg,
                                b = e.isWelfareGroupModalShow;
                              return (0, k.BX)(m.Block, {
                                children: [
                                  (0, k.tZ)(m.View, {
                                    className: "top-bar",
                                    style: "padding-top: ".concat(t, "px"),
                                    children: (0, k.tZ)(m.Text, {
                                      className: "ifont-back iconfont",
                                      id: "AeFu",
                                      onClick: this.onBack,
                                    }),
                                  }),
                                  i.length > 0 &&
                                    (0, k.BX)(m.View, {
                                      className: "top-box",
                                      style: "padding-top: ".concat(
                                        t + 44,
                                        "px"
                                      ),
                                      children: [
                                        (0, k.tZ)(m.View, {
                                          className: "slogan zx",
                                        }),
                                        (0, k.tZ)(m.View, {
                                          className: "txt-rule",
                                          id: "AeFv",
                                          onClick: this.toggleRuleModal.bind(
                                            this,
                                            !0
                                          ),
                                          children: "规则",
                                        }),
                                      ],
                                    }),
                                  (0, k.BX)(m.View, {
                                    className: "wrap",
                                    children: [
                                      (0, k.BX)(m.View, {
                                        className: "hongbao-box",
                                        children: [
                                          (0, k.BX)(m.View, {
                                            className: "hongbao-main",
                                            children: [
                                              s &&
                                                (0, k.BX)(m.View, {
                                                  className: "info",
                                                  children: [
                                                    n ? n + "，" : "",
                                                    "您好！",
                                                    (0, k.tZ)(m.Text, {
                                                      id: "AeFw",
                                                      onClick:
                                                        this.onLoginClick,
                                                      children: "切换账号",
                                                    }),
                                                  ],
                                                }),
                                              !s &&
                                                (0, k.tZ)(m.View, {
                                                  className: "info",
                                                  children: (0, k.tZ)(m.Text, {
                                                    id: "AeFx",
                                                    onClick: this.onLoginClick,
                                                    children: "登录",
                                                  }),
                                                }),
                                              (0, k.BX)(m.View, {
                                                className: "hongbao-bd",
                                                children: [
                                                  (0, k.tZ)(m.View, {
                                                    className: "tit",
                                                  }),
                                                  (0, k.BX)(m.View, {
                                                    className: "num",
                                                    children: [
                                                      (0, k.tZ)(m.Text, {
                                                        className: "x",
                                                      }),
                                                      c,
                                                      (0, k.tZ)(m.Text, {
                                                        className: "ge",
                                                      }),
                                                    ],
                                                  }),
                                                  (0, k.tZ)(m.View, {
                                                    className: "txt",
                                                    children: "提升抢票成功率",
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          (0, k.BX)(m.View, {
                                            className: "hongbao-botm",
                                            children: [
                                              !s &&
                                                (0, k.BX)(m.View, {
                                                  className: "txt",
                                                  children: [
                                                    "请领取您的专属",
                                                    x.Z.SPEED_PACK,
                                                  ],
                                                }),
                                              s &&
                                                (0, k.BX)(m.View, {
                                                  className: "txt",
                                                  "v-if": "hasReceivedTimes",
                                                  children: [
                                                    "累计可领",
                                                    d,
                                                    "次",
                                                    x.Z.SPEED_PACK,
                                                    "，您已领取",
                                                    u,
                                                    "/",
                                                    d,
                                                  ],
                                                }),
                                              !p &&
                                                (0, k.tZ)(m.Button, {
                                                  className: "btn-get",
                                                  id: "AeFy",
                                                  onClick:
                                                    this.receiveWithLogin,
                                                  children:
                                                    u >= d
                                                      ? "去领其他福利"
                                                      : "一键领取",
                                                }),
                                              p &&
                                                (0, k.tZ)(m.Button, {
                                                  className: "btn-get",
                                                  disabled: "{{true}}",
                                                  children: (0, k.BX)(m.View, {
                                                    children: [
                                                      (0, k.tZ)(R, {
                                                        info: h,
                                                        onChange:
                                                          this.getStatusOn2020PrivateGroup.bind(
                                                            this
                                                          ),
                                                      }),
                                                      "后可再领",
                                                      c,
                                                      "个",
                                                      x.Z.SPEED_PACK,
                                                    ],
                                                  }),
                                                }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, k.tZ)(m.View, {
                                        className: "botm-advg zx",
                                      }),
                                    ],
                                  }),
                                  w &&
                                    (0, k.tZ)(m.View, {
                                      className: "bgt-box",
                                      disabled: "{{true}}",
                                      id: "AeGA",
                                      onClick: this.toAnswerActivity,
                                      children: (0, k.tZ)(m.Image, {
                                        style: "height:82px;width:93%;",
                                        src: v,
                                      }),
                                    }),
                                  g &&
                                    (0, k.BX)(m.View, {
                                      className: "pop-botm pop-join",
                                      children: [
                                        (0, k.tZ)(m.View, {
                                          className: "icon-closed",
                                          id: "AeGB",
                                          onClick: this.toggleQiYeWechatModal,
                                        }),
                                        (0, k.BX)(m.View, {
                                          className: "pop-join-bd",
                                          children: [
                                            (0, k.BX)(m.View, {
                                              className: "pop-join-txt",
                                              children: [
                                                (0, k.tZ)(m.View, {
                                                  className: "tit",
                                                  children:
                                                    "亲，您还未添加智行福利群群主为好友",
                                                }),
                                                (0, k.BX)(m.View, {
                                                  className: "txt",
                                                  children: [
                                                    "现特邀您加入小智的内部福利群！",
                                                    (0, k.tZ)(m.Text, {
                                                      class: "span",
                                                      children:
                                                        "添加群主为好友",
                                                    }),
                                                    "即可领取",
                                                    c,
                                                    "个",
                                                    x.Z.SPEED_PACK,
                                                    "～",
                                                  ],
                                                }),
                                              ],
                                            }),
                                            (0, k.BX)(m.View, {
                                              className: "pop-join-qrcode",
                                              children: [
                                                (0, k.tZ)(m.View, {
                                                  className: "tit",
                                                  children:
                                                    "- 小智的内部福利群 -",
                                                }),
                                                (0, k.tZ)(m.Image, {
                                                  src: "https://images3.c-ctrip.com/zt/activity/20210413-ztrip-train-welfare-group/qrcode.png",
                                                  className: "qrcode",
                                                }),
                                              ],
                                            }),
                                            (0, k.BX)(m.View, {
                                              className: "pop-join-welfare",
                                              children: [
                                                (0, k.tZ)(m.View, {
                                                  className: "item",
                                                  children:
                                                    "进群专属福利——每人1次vip速度抢票资格",
                                                }),
                                                (0, k.tZ)(m.View, {
                                                  className: "item",
                                                  children:
                                                    "特价机票、特价酒店（内部价），定期发放",
                                                }),
                                                (0, k.tZ)(m.View, {
                                                  className: "item",
                                                  children:
                                                    "专属大额无门槛优惠券发放",
                                                }),
                                                (0, k.tZ)(m.View, {
                                                  className: "item",
                                                  children:
                                                    "每日签到、抽奖福利，可得迪士尼门票和现金大奖",
                                                }),
                                              ],
                                            }),
                                            (0, k.BX)(m.View, {
                                              className: "pop-join-dialog",
                                              children: [
                                                (0, k.tZ)(m.Image, {
                                                  src: "https://images3.c-ctrip.com/zt/activity/20210413-ztrip-train-welfare-group/avatar-img.png",
                                                  className: "avatar",
                                                }),
                                                (0, k.BX)(m.View, {
                                                  className: "cont",
                                                  children: [
                                                    (0, k.BX)(m.View, {
                                                      className: "tit",
                                                      children: [
                                                        "有群友最高已经",
                                                        (0, k.tZ)(m.Text, {
                                                          class: "span",
                                                          children:
                                                            "省下1607元",
                                                        }),
                                                        "了！",
                                                      ],
                                                    }),
                                                    (0, k.tZ)(m.View, {
                                                      className: "txt",
                                                      children:
                                                        "内测活动，名额有限，诚邀您体验～",
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  !!(a || r || o || l) &&
                                    (0, k.tZ)(m.View, {
                                      className: "shade-box",
                                      id: "AeGC",
                                      onClick: this.closeDialogAll,
                                    }),
                                  r &&
                                    (0, k.BX)(m.View, {
                                      className: "pop-mid pop-suc",
                                      children: [
                                        (0, k.tZ)(m.View, {
                                          className: "tit",
                                          children: "领取成功",
                                        }),
                                        (0, k.BX)(m.View, {
                                          className: "txt",
                                          children: [
                                            c,
                                            "个",
                                            x.Z.SPEED_PACK,
                                            "已发放至您的",
                                            (0, k.tZ)(m.Text, {
                                              style: "color:red",
                                              children: "个人账户",
                                            }),
                                            "！",
                                          ],
                                        }),
                                        p &&
                                          (0, k.BX)(m.View, {
                                            className: "txt",
                                            children: [
                                              (0, k.tZ)(R, {
                                                info: h,
                                                onChange:
                                                  this.getStatusOn2020PrivateGroup.bind(
                                                    this
                                                  ),
                                              }),
                                              (0, k.BX)(m.Text, {
                                                style: "color:red",
                                                children: [
                                                  "后可再领",
                                                  c,
                                                  "个",
                                                  x.Z.SPEED_PACK,
                                                ],
                                              }),
                                            ],
                                          }),
                                        (0, k.tZ)(m.Button, {
                                          className: "btn-submit",
                                          id: "AeGD",
                                          onClick: this.toGrabPointPage,
                                          children: "去看看",
                                        }),
                                        (0, k.tZ)(m.View, {
                                          className: "icon-closed",
                                          "data-dialog":
                                            "showReceiveSuccessToAccountTip",
                                          id: "AeGE",
                                          onClick: this.closeDialog,
                                        }),
                                      ],
                                    }),
                                  o &&
                                    (0, k.BX)(m.View, {
                                      className: "pop-mid pop-suc",
                                      children: [
                                        (0, k.tZ)(m.View, {
                                          className: "tit",
                                          children: "领取成功",
                                        }),
                                        (0, k.BX)(m.View, {
                                          className: "txt",
                                          children: [
                                            c,
                                            "个",
                                            x.Z.SPEED_PACK,
                                            "已发放至您的",
                                            (0, k.tZ)(m.Text, {
                                              style: "color:red",
                                              children: "抢票订单",
                                            }),
                                          ],
                                        }),
                                        p &&
                                          (0, k.BX)(m.View, {
                                            className: "txt",
                                            children: [
                                              (0, k.tZ)(R, {
                                                info: h,
                                                onChange:
                                                  this.getStatusOn2020PrivateGroup.bind(
                                                    this
                                                  ),
                                              }),
                                              (0, k.BX)(m.Text, {
                                                style: "color:red",
                                                children: [
                                                  "后可再领",
                                                  c,
                                                  "个",
                                                  x.Z.SPEED_PACK,
                                                ],
                                              }),
                                            ],
                                          }),
                                        (0, k.tZ)(m.Button, {
                                          className: "btn-submit",
                                          id: "AeGF",
                                          onClick: this.toGrabOrderPage,
                                          children: "去看看",
                                        }),
                                        (0, k.tZ)(m.View, {
                                          className: "icon-closed",
                                          "data-dialog":
                                            "showReceiveSuccessToOrderTip",
                                          id: "AeGG",
                                          onClick: this.closeDialog,
                                        }),
                                      ],
                                    }),
                                  l &&
                                    (0, k.BX)(m.View, {
                                      className: "pop-mid pop-fail",
                                      children: [
                                        (0, k.tZ)(m.View, {
                                          className: "tit",
                                          children: "抱歉，您已领取过该奖励",
                                        }),
                                        (0, k.tZ)(m.View, {
                                          className: "txt",
                                          children: "无法重复领取",
                                        }),
                                        (0, k.tZ)(m.Button, {
                                          className: "btn-submit",
                                          "data-dialog": "showReceiveAgainTip",
                                          id: "AeGH",
                                          onClick: this.closeDialog,
                                          children: "好的",
                                        }),
                                      ],
                                    }),
                                  a &&
                                    (0, k.BX)(m.View, {
                                      className: "pop-mid pop-rule",
                                      children: [
                                        (0, k.tZ)(m.View, {
                                          className: "tit",
                                          children: "活动规则",
                                        }),
                                        (0, k.tZ)(m.View, {
                                          className: "pop-rule-bd",
                                          children: i.map(function (e, t) {
                                            return (0,
                                            k.tZ)(m.View, { className: "txt", children: e }, t);
                                          }),
                                        }),
                                        (0, k.tZ)(m.View, {
                                          className: "icon-closed",
                                          "data-dialog": "showRule",
                                          id: "AeGI",
                                          onClick: this.closeDialog,
                                        }),
                                      ],
                                    }),
                                  b &&
                                    (0, k.tZ)(D.Z, {
                                      btnExposureUbtTrace:
                                        this.btnExposureUbtTrace,
                                      btnClickUbtTrace: this.btnClickUbtTrace,
                                      closeModal: this.closeWelfareGroupModal,
                                      text: "10个".concat(x.Z.SPEED_PACK),
                                    }),
                                ],
                              });
                            },
                          },
                        ]),
                        i
                      );
                    })(d.default.Component))
                  ) || P)
              ) || P;
          (G.enableShareAppMessage = !0),
            Page(
              (0, a.createPageConfig)(
                G,
                "pages/activity/train/ztripInnerWelfare/ztripInnerWelfare",
                { root: { cn: [] } },
                {
                  navigationStyle: "custom",
                  usingComponents: {
                    chatGroupPlugin: "plugin://chatGroupPlugin/cell",
                  },
                } || {}
              )
            );
        },
      },
      function (e) {
        e.O(0, [24945, 19559, 11216, 68592], function () {
          return (function (t) {
            return e((e.s = t));
          })(14236);
        }),
          e.O();
      },
    ]);
})();
