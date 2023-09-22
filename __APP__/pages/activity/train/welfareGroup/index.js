!(function () {
  "use strict";
  require("../sub-vendors.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [83123],
      {
        47311: function (e, t, i) {
          var s,
            a,
            n,
            o,
            r = i(32180),
            c = i(45023),
            l = i(79301),
            u = i(95308),
            d = i(57042),
            h = i(24460),
            p = i(21867),
            m = i(86066),
            w = i(52500),
            f = i(92954),
            g = i.n(f),
            v = i(8271),
            N = i.n(v),
            b = i(71515),
            Z = i(49120),
            x = i(79792),
            V = i(17377),
            T = i(2809),
            k = i(79910),
            B = i(18783),
            y = i(48792),
            A = i.n(y),
            C = i(81957),
            S = i(34229),
            I = i(58801),
            M = i(69589),
            X = i(48813);
          function L() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "",
              t =
                /<font(\s+color=['"]?([a-zA-Z#0-9]*)?['"]?)([^>]*?)>([^<]*?)<\/font>/gi;
            return e.replace(t, '<span style="color:$2">$4</span>');
          }
          var U = (0, V.ZP)({
              serviceCode: "17679",
              channel: x.default.train_channel,
              path: "accelerateOrderForZtripGoldenFinger",
            }),
            F = (0, V.ZP)({
              serviceCode: "17679",
              channel: x.default.train_channel,
              path: "getZtripVipAccelerateInfo",
            }),
            W = (0, V.ZP)({
              serviceCode: "17679",
              channel: x.default.train_channel,
              path: "getWechatCorpQrcodeForAssist",
            }),
            O = x.default.isTieyou,
            R = (function (e) {
              (0, p.Z)(i, e);
              var t = (0, m.Z)(i);
              function i(e) {
                var s;
                return (
                  (0, d.Z)(this, i),
                  ((s = t.call(this, e)).state = { diffTime: "" }),
                  s
                );
              }
              return (
                (0, h.Z)(i, [
                  {
                    key: "componentDidMount",
                    value: function () {
                      var e = this,
                        t = this.props,
                        i = t.time,
                        s = t.onTimeEnd,
                        a = N()(i),
                        n = setInterval(function () {
                          var t = a.diff(N()(), "second");
                          t
                            ? e.setState({ diffTime: t })
                            : (clearInterval(n), s && s());
                        }, 1e3);
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var e =
                          this.state.diffTime ||
                          N()(this.props.time).diff(N()(), "second"),
                        t = parseInt(e / 86400),
                        i = parseInt((e % 86400) / 3600),
                        s = parseInt((e % 3600) / 60),
                        a = e % 60;
                      return e
                        ? (0, X.BX)(b.Button, {
                            className: "btn-speed",
                            disabled: !0,
                            children: [
                              ""
                                .concat(t ? "".concat(t, "天") : "")
                                .concat(i ? "".concat(i, "小时") : "")
                                .concat(s ? "".concat(s, "分") : "")
                                .concat(a, "秒"),
                              "后可再得一次",
                            ],
                          })
                        : (0, X.tZ)(b.Button, {
                            className: "btn-speed",
                            disabled: !0,
                          });
                    },
                  },
                ]),
                i
              );
            })(w.default.Component),
            D = (function (e) {
              (0, p.Z)(i, e);
              var t = (0, m.Z)(i);
              function i(e) {
                var s;
                return (
                  (0, d.Z)(this, i),
                  ((s = t.call(this, e)).state = { diffTime: "" }),
                  s
                );
              }
              return (
                (0, h.Z)(i, [
                  {
                    key: "componentDidMount",
                    value: function () {
                      var e = this,
                        t = this.props,
                        i = t.time,
                        s = t.onTimeEnd,
                        a = N()(i),
                        n = setInterval(function () {
                          var t = a.diff(N()(), "second");
                          t
                            ? e.setState({ diffTime: t })
                            : (clearInterval(n), s && s());
                        }, 1e3);
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var e =
                          this.state.diffTime ||
                          N()(this.props.time).diff(N()(), "second"),
                        t = parseInt(e / 86400),
                        i = parseInt((e % 86400) / 3600),
                        s = parseInt((e % 3600) / 60),
                        a = e % 60;
                      return e
                        ? (0, X.BX)(b.View, {
                            className: "txt",
                            children: [
                              ""
                                .concat(t ? "".concat(t, "天") : "")
                                .concat(i ? "".concat(i, ":") : "")
                                .concat(s ? "".concat(s, ":") : "")
                                .concat(a),
                              "后可再得",
                              (0, X.tZ)(b.Text, {
                                className: "span",
                                children: "1次",
                              }),
                              "VIP加速",
                            ],
                          })
                        : (0, X.tZ)(b.Text, {});
                    },
                  },
                ]),
                i
              );
            })(w.default.Component),
            E = [
              "bZWCIDYNgNlv34-d1B8c9KH_xCBBBpyICzsDuZKPVWA",
              "NdvyuBq2SJA1v9c5QcPwcsqbLUrdENKwG409niPJCK8",
              "VkVTiY4nXTEdTAsnnP9SjVQgO2Fwk_-suaaB_6mA8z8",
              "kXLnac15BL5LAygKgVCeA1F7-kxEwRlsz5BD3fQcwAw",
              "H3N8J1b3pO9FDkTAivEMJA03pgQksXmr04Ut8DA25Ao",
            ],
            P =
              ((s = (0, C.h)()),
              (a = A()(
                ((n = {
                  pageId: "10650056340",
                  data: {
                    showOrderTips: !1,
                    showSweetWarn: !1,
                    showResult: !1,
                    orderNumber: "",
                    buttonName: "我知道了",
                    jumpUrl: "",
                    showRule: !1,
                    rules: [],
                    shareInfo: null,
                    sweetNotice: null,
                    totalCount: 0,
                    leftCount: 0,
                    canUseTime: "",
                    moreUrl: "",
                    answerActivityImg: "",
                    isAnswerEntrenceShow: !1,
                    answerActivityLink: "",
                    qrcode: "",
                    isWelfareGroupModalShow: !1,
                    assistData: null,
                    addWelfareOfficerUrl:
                      "https://pages.suanya.com/webapp/20221220-vip-speed-assist/home",
                    subscribeMsgList: [],
                  },
                  onLoad: function () {
                    (0, B.M9)({ isSaveSessionKey: 2 }), this.getSubscribe();
                  },
                  onShow: function () {
                    this.getData();
                  },
                  getSubscribe: function () {
                    var e = this;
                    return (0, u.Z)(
                      (0, l.Z)().mark(function t() {
                        var i, s;
                        return (0, l.Z)().wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    console.log("getSubscribe"),
                                    (t.prev = 1),
                                    (t.next = 4),
                                    I.Z.getSubscribeMsgInfo(E)
                                  );
                                case 4:
                                  (i = t.sent),
                                    (s = i.unKnownList),
                                    console.log("unKnownList", s),
                                    s &&
                                      s.length &&
                                      e.setData({
                                        subscribeMsgList: s.slice(0, 3),
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
                  getData: function () {
                    var e = this;
                    return (0, u.Z)(
                      (0, l.Z)().mark(function t() {
                        var i, s, a, n, o, r, c, u, d, h, p, m, w, f, v, N;
                        return (0, l.Z)().wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (t.prev = 0), (t.next = 3), F({});
                                case 3:
                                  1 !== (i = t.sent).resultCode
                                    ? g().showModal({
                                        title: "提示",
                                        showCancel: !1,
                                        content:
                                          i.resultMessage ||
                                          "网络不给力，请退出重试~",
                                      })
                                    : ((s = i.rules),
                                      (a = i.canUseTime),
                                      (n = i.useCount),
                                      (o = i.totalCount),
                                      (r = i.shareInfo),
                                      (c = i.sweetNotice),
                                      (u = i.moreUrl),
                                      (d = i.isAnswerEntrenceShow),
                                      (h = void 0 !== d && d),
                                      (p = i.answerActivityImg),
                                      (m = void 0 === p ? "" : p),
                                      (w = i.answerActivityLink),
                                      (f = void 0 === w ? "" : w),
                                      (v = i.assistData),
                                      e.setData({
                                        rules: s,
                                        canUseTime: a,
                                        leftCount: o - n,
                                        totalCount: o,
                                        shareInfo: r,
                                        sweetNotice: c,
                                        moreUrl: u,
                                        isAnswerEntrenceShow: h,
                                        answerActivityImg: m,
                                        answerActivityLink: f,
                                        assistData: v,
                                      })),
                                    (t.next = 10);
                                  break;
                                case 7:
                                  (t.prev = 7),
                                    (t.t0 = t.catch(0)),
                                    g().showModal({
                                      title: "提示",
                                      showCancel: !1,
                                      content: "网络不给力，请退出重试~",
                                    });
                                case 10:
                                  return (
                                    (t.prev = 10),
                                    (t.next = 13),
                                    W({ source: "groupActivityVipRob" })
                                  );
                                case 13:
                                  1 !== (N = t.sent).resultCode
                                    ? g().showModal({
                                        title: "提示",
                                        showCancel: !1,
                                        content:
                                          N.resultMessage ||
                                          "网络不给力，请退出重试~",
                                      })
                                    : e.setData({ qrcode: N.qrcode }),
                                    (t.next = 20);
                                  break;
                                case 17:
                                  (t.prev = 17),
                                    (t.t1 = t.catch(10)),
                                    g().showModal({
                                      title: "提示",
                                      showCancel: !1,
                                      content: "网络不给力，请退出重试~",
                                    });
                                case 20:
                                case "end":
                                  return t.stop();
                              }
                          },
                          t,
                          null,
                          [
                            [0, 7],
                            [10, 17],
                          ]
                        );
                      })
                    )();
                  },
                  accelerate: function () {
                    var e = this;
                    return (0, u.Z)(
                      (0, l.Z)().mark(function t() {
                        var i, s, a, n, o, r, c, u, d, h, p, m;
                        return (0, l.Z)().wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  if (
                                    ((i = e.state.orderNumber),
                                    (s = e.data.leftCount),
                                    (a = e.state.assistData),
                                    !(
                                      1 === s &&
                                      a &&
                                      a.assistList.length < a.inviteNum
                                    ))
                                  ) {
                                    t.next = 6;
                                    break;
                                  }
                                  return (
                                    (0, Z.hideLoading)(), t.abrupt("return")
                                  );
                                case 6:
                                  if (i) {
                                    t.next = 9;
                                    break;
                                  }
                                  return (
                                    (0, Z.showToast)("请先输入订单号"),
                                    t.abrupt("return")
                                  );
                                case 9:
                                  if (
                                    ((n = "ACTIVITY_WELFAREGROUP_SUBSCRIBLE"),
                                    (o = g().getStorageSync(n)),
                                    (r =
                                      !o ||
                                      N()(+o).add(7, "day").isBefore(N()())),
                                    !e.state.subscribeMsgList.length || !r)
                                  ) {
                                    t.next = 24;
                                    break;
                                  }
                                  return (
                                    console.log(
                                      "this.state.subscribeMsgList",
                                      e.state.subscribeMsgList
                                    ),
                                    (t.prev = 14),
                                    (t.next = 17),
                                    I.Z.executeSubscribeMsg(
                                      e.state.subscribeMsgList
                                    )
                                  );
                                case 17:
                                  t.next = 22;
                                  break;
                                case 19:
                                  (t.prev = 19),
                                    (t.t0 = t.catch(14)),
                                    console.log(
                                      "executeSubscribeMsg.fail",
                                      t.t0
                                    );
                                case 22:
                                  e.setData({ subscribeMsgList: [] }),
                                    g().setStorageSync(n, N()().valueOf());
                                case 24:
                                  return (
                                    (0, Z.showLoading)(),
                                    (t.prev = 25),
                                    console.log("————"),
                                    (t.next = 29),
                                    U({ orderNumber: i })
                                  );
                                case 29:
                                  (c = t.sent),
                                    (0, Z.hideLoading)(),
                                    (u = c.resultCode),
                                    (d = c.resultMessage),
                                    (h = c.buttonName),
                                    (p = void 0 === h ? "我知道了" : h),
                                    (m = c.jumpUrl),
                                    1 === u
                                      ? e.setState(
                                          {
                                            showResult: !0,
                                            buttonName: p,
                                            jumpUrl: m,
                                          },
                                          function () {
                                            e.getData();
                                          }
                                        )
                                      : 2 === u
                                      ? e.showSweetWarnAction()
                                      : 500 === u
                                      ? (0, Z.showToast)(
                                          "网络不给力，请稍候再试"
                                        )
                                      : 6 === u
                                      ? e.showWelfareGroupModal()
                                      : g()
                                          .showModal({
                                            title: "提示",
                                            showCancel: !1,
                                            content: d,
                                            confirmText: p,
                                          })
                                          .then(function () {
                                            m && g().navigateTo({ url: m });
                                          }),
                                    (t.next = 39);
                                  break;
                                case 35:
                                  (t.prev = 35),
                                    (t.t1 = t.catch(25)),
                                    (0, Z.hideLoading)(),
                                    (0, Z.showToast)("网络不给力，请稍候再试");
                                case 39:
                                case "end":
                                  return t.stop();
                              }
                          },
                          t,
                          null,
                          [
                            [14, 19],
                            [25, 35],
                          ]
                        );
                      })
                    )();
                  },
                  showOrderTipsAction: function () {
                    console.log("showOrderTipsAction"),
                      this.setState({ showOrderTips: !0 });
                  },
                  hideOrderTips: function () {
                    this.setState({ showOrderTips: !1 });
                  },
                  showSweetWarnAction: function () {
                    this.setState({ showSweetWarn: !0 });
                  },
                  showWelfareGroupModal: function () {
                    this.setState({ isWelfareGroupModalShow: !0 });
                  },
                  closeWelfareGroupModal: function () {
                    this.setState({ isWelfareGroupModalShow: !1 });
                  },
                  hideSweetWarn: function () {
                    this.setState({ showSweetWarn: !1 });
                  },
                }),
                (0, c.Z)(n, "hideOrderTips", function () {
                  this.setState({ showOrderTips: !1 });
                }),
                (0, c.Z)(n, "hideFailResult", function () {
                  this.setState({ showResult: !1 });
                }),
                (0, c.Z)(n, "clickHideResultModal", function () {
                  this.state.jumpUrl &&
                    g().navigateTo({ url: this.state.jumpUrl }),
                    this.hideFailResult();
                }),
                (0, c.Z)(n, "changeOrderNumber", function (e) {
                  this.setData({ orderNumber: e.detail.value });
                }),
                (0, c.Z)(n, "noop", function () {}),
                (0, c.Z)(n, "showRuleAction", function () {
                  this.setData({ showRule: !0 });
                }),
                (0, c.Z)(n, "hideRule", function () {
                  this.setData({ showRule: !1 });
                }),
                (0, c.Z)(n, "hideAllModal", function () {
                  this.setState({
                    showRule: !1,
                    showResult: !1,
                    showSweetWarn: !1,
                    showOrderTips: !1,
                  });
                }),
                n)
              )),
              s(
                (o =
                  a(
                    (o = (function (e) {
                      (0, p.Z)(i, e);
                      var t = (0, m.Z)(i);
                      function i(e) {
                        var s;
                        return (
                          (0, d.Z)(this, i),
                          ((s = t.call(this, e)).state = {
                            isTieyou: x.default.isTieyou,
                            statusBarHeight: T.ZP.statusBarHeight,
                          }),
                          s
                        );
                      }
                      return (
                        (0, h.Z)(i, [
                          {
                            key: "componentDidMount",
                            value: function () {
                              console.log(this.state.isTieyou);
                            },
                          },
                          {
                            key: "onShareAppMessage",
                            value: function () {
                              var e = this.state,
                                t = e.shareInfo,
                                i = e.leftCount,
                                s = e.assistData;
                              return t &&
                                1 === i &&
                                s &&
                                s.assistNum < s.inviteNum
                                ? (console.log("分享助力进来了"), t)
                                : {
                                    title:
                                      "点我获得vip加速！加我好友，都能获得一次vip机会喔！",
                                    path: "/pages/activity/train/welfareGroup/index",
                                    imageUrl:
                                      "https://images3.c-ctrip.com/ztrip/2020LU/2021-04/fuliqun.png",
                                  };
                            },
                          },
                          {
                            key: "onBack",
                            value: function () {
                              g().getCurrentPages().length <= 1
                                ? k.Z.relaunchHome()
                                : g().navigateBack();
                            },
                          },
                          {
                            key: "gotoOtherWelfare",
                            value: function (e) {
                              var t =
                                0 === e.indexOf("http")
                                  ? "/functionalPages/twebview/index?url=".concat(
                                      encodeURIComponent(e)
                                    )
                                  : e;
                              g().navigateTo({ url: t });
                            },
                          },
                          {
                            key: "toAnswerActivity",
                            value: function () {
                              this.navigateTo({
                                url: "/functionalPages/twebview/index?url=".concat(
                                  encodeURIComponent(
                                    this.data.answerActivityLink
                                  )
                                ),
                              });
                            },
                          },
                          {
                            key: "toAddWelfareOfficer",
                            value: function () {
                              this.data.assistData.addWelfareOfficerUrl
                                ? this.navigateTo({
                                    url: "/functionalPages/twebview/index?url=".concat(
                                      encodeURIComponent(
                                        this.data.assistData
                                          .addWelfareOfficerUrl
                                      )
                                    ),
                                  })
                                : (0, Z.showToast)(
                                    "网络开小差，请刷新页面重试~"
                                  );
                            },
                          },
                          {
                            key: "btnExposureUbtTrace",
                            value: function () {
                              this.ubtTrace(209898, {
                                exposureType: "popup",
                                bizKey: "toWechatGroupBottomExposure",
                              });
                            },
                          },
                          {
                            key: "btnClickUbtTrace",
                            value: function () {
                              this.ubtTrace(209899, {
                                bizKey: "toWechatGroupBottomClick",
                              });
                            },
                          },
                          {
                            key: "render",
                            value: function () {
                              var e = this,
                                t = this.state,
                                i = t.statusBarHeight,
                                s = t.showOrderTips,
                                a = t.showSweetWarn,
                                n = t.showResult,
                                o = t.buttonName,
                                r = t.showRule,
                                c = t.answerActivityImg,
                                l = t.rules,
                                u = t.leftCount,
                                d = t.totalCount,
                                h = t.canUseTime,
                                p = t.sweetNotice,
                                m = t.moreUrl,
                                w = t.isAnswerEntrenceShow,
                                f = t.isWelfareGroupModalShow,
                                g = t.qrcode,
                                v = t.assistData,
                                Z = h && N()(h).isAfter(N()());
                              return (0, X.BX)(b.View, {
                                className: O ? "ty" : "zx",
                                children: [
                                  (0, X.BX)(b.View, {
                                    className: "top-bar",
                                    style: "padding-top: " + i + "px",
                                    children: [
                                      (0, X.tZ)(b.Text, {
                                        className: "ifont-back iconfont",
                                        id: "AeFf",
                                        onClick: this.onBack,
                                      }),
                                      (0, X.tZ)(b.View, { className: "tit" }),
                                    ],
                                  }),
                                  (0, X.BX)(b.View, {
                                    className: "top-box",
                                    style: "padding-top: " + i + "px",
                                    children: [
                                      (0, X.tZ)(b.View, {
                                        className: "slogan",
                                      }),
                                      (0, X.tZ)(b.View, {
                                        className: "fixed-rule",
                                        id: "AeFg",
                                        onClick: this.showRuleAction,
                                      }),
                                    ],
                                  }),
                                  (0, X.BX)(b.View, {
                                    className: "wrap",
                                    children: [
                                      (0, X.BX)(b.View, {
                                        className: "main-box",
                                        children: [
                                          (0, X.BX)(b.View, {
                                            className: "main-hd",
                                            children: [
                                              (0, X.tZ)(b.View, {
                                                className: "tit",
                                                children: "订单号",
                                              }),
                                              (0, X.tZ)(b.View, {
                                                className: "txt",
                                                id: "AeFh",
                                                onClick:
                                                  this.showOrderTipsAction,
                                                children: "如何查询订单号？",
                                              }),
                                            ],
                                          }),
                                          (0, X.BX)(b.View, {
                                            className: "main-bd",
                                            children: [
                                              (0, X.tZ)(b.Input, {
                                                type: "text",
                                                placeholder: "请输入订单号",
                                                className: "input-txt",
                                                placeholderClass: "input-pld",
                                                onInput: this.changeOrderNumber,
                                              }),
                                              !!u &&
                                                !Z &&
                                                (0, X.BX)(b.Button, {
                                                  className: "btn-speed",
                                                  openType:
                                                    1 === u &&
                                                    v &&
                                                    v.assistNum < v.inviteNum
                                                      ? "share"
                                                      : "",
                                                  id: "AeFi",
                                                  onClick: this.accelerate,
                                                  children: [
                                                    1 === u &&
                                                    v &&
                                                    v.assistNum < v.inviteNum
                                                      ? "邀3人，立即激活vip加速"
                                                      : "加速到最高！",
                                                    (0, X.tZ)(b.Text, {
                                                      className: "tag",
                                                      children: "价值50元",
                                                    }),
                                                  ],
                                                }),
                                              !u &&
                                                (0, X.tZ)(b.Button, {
                                                  className: "btn-speed",
                                                  id: "AeFj",
                                                  onClick: function () {
                                                    e.gotoOtherWelfare(m);
                                                  },
                                                  children: "去领其他福利",
                                                }),
                                              !(!u || !Z) &&
                                                (0, X.tZ)(R, { time: h }),
                                              !!(m && u && Z) &&
                                                (0, X.tZ)(b.Button, {
                                                  className: "btn-line",
                                                  id: "AeFk",
                                                  onClick: function () {
                                                    e.gotoOtherWelfare(m);
                                                  },
                                                  children: "去领其他福利",
                                                }),
                                              !!d &&
                                                (0, X.BX)(b.View, {
                                                  className: "info",
                                                  children: [
                                                    (0, X.tZ)(b.Icon, {
                                                      className: "icon-quan",
                                                    }),
                                                    (0, X.BX)(b.View, {
                                                      className: "txt",
                                                      children: [
                                                        "您有",
                                                        d,
                                                        "次vip加速机会，已使用",
                                                        (0, X.BX)(b.Text, {
                                                          className: "torage",
                                                          children: [
                                                            d - u,
                                                            "/",
                                                            d,
                                                          ],
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                            ],
                                          }),
                                          v &&
                                            1 === u &&
                                            !Z &&
                                            (0, X.BX)(b.View, {
                                              className: "main-invite",
                                              children: [
                                                (0, X.tZ)(b.View, {
                                                  className: "invite-list",
                                                  children: new Array(
                                                    v.inviteNum
                                                  )
                                                    .fill(0)
                                                    .map(function (e, t) {
                                                      return v.assistList &&
                                                        v.assistList.length
                                                        ? (0, X.tZ)(
                                                            b.View,
                                                            {
                                                              class: "item",
                                                              children: v
                                                                .assistList[t]
                                                                ? (0, X.tZ)(
                                                                    b.Image,
                                                                    {
                                                                      src: v
                                                                        .assistList[
                                                                        t
                                                                      ].avatar,
                                                                      className:
                                                                        "avatar",
                                                                    }
                                                                  )
                                                                : (0, X.tZ)(
                                                                    b.Button,
                                                                    {
                                                                      className:
                                                                        "btn-add",
                                                                      openType:
                                                                        "share",
                                                                    }
                                                                  ),
                                                            },
                                                            t
                                                          )
                                                        : (0, X.tZ)(b.View, {
                                                            class: "item",
                                                            children: (0, X.tZ)(
                                                              b.Button,
                                                              {
                                                                className:
                                                                  "btn-add",
                                                                openType:
                                                                  "share",
                                                              }
                                                            ),
                                                          });
                                                    }),
                                                }),
                                                v.inviteNum === v.assistNum
                                                  ? (0, X.tZ)(b.View, {
                                                      className: "info",
                                                      children:
                                                        "助力成功，已激活vip权益",
                                                    })
                                                  : (0, X.BX)(b.View, {
                                                      className: "info",
                                                      children: [
                                                        "邀请",
                                                        v.inviteNum,
                                                        "人助力，立即激活vip加速",
                                                      ],
                                                    }),
                                              ],
                                            }),
                                        ],
                                      }),
                                      (0, X.tZ)(b.View, {
                                        className: "botm-advg",
                                      }),
                                    ],
                                  }),
                                  (s || a || n || r) &&
                                    (0, X.tZ)(b.View, {
                                      className: "shade-box",
                                      id: "AeFl",
                                      onClick: this.hideAllModal,
                                    }),
                                  w &&
                                    (0, X.tZ)(b.View, {
                                      className: "bgt-box",
                                      style: "padding-left:20px;",
                                      disabled: "{{true}}",
                                      id: "AeFm",
                                      onClick: this.toAnswerActivity,
                                      children: (0, X.tZ)(b.Image, {
                                        style: "height:82px;width:94%;",
                                        src: c,
                                      }),
                                    }),
                                  s &&
                                    (0, X.BX)(b.View, {
                                      className: "pop-botm pop-orderinfo",
                                      children: [
                                        (0, X.tZ)(b.View, {
                                          className: "icon-closed",
                                          id: "AeFn",
                                          onClick: this.hideOrderTips,
                                        }),
                                        (0, X.tZ)(b.View, {
                                          className: "pop-orderinfo-hd",
                                          children: (0, X.tZ)(b.View, {
                                            className: "tit",
                                          }),
                                        }),
                                        (0, X.BX)(b.View, {
                                          className: "pop-orderinfo-bd",
                                          children: [
                                            (0, X.tZ)(b.View, {
                                              className: "tit step-1",
                                            }),
                                            (0, X.tZ)(b.View, {
                                              className: "txt",
                                              children:
                                                "在页面底部找到“抢票”并点击",
                                            }),
                                            (0, X.tZ)(b.Image, {
                                              src: "https://images3.c-ctrip.com/zt/activity/20210413-ztrip-train-welfare-group/orderinfo-img-1.png",
                                              className: "img",
                                              mode: "widthFix",
                                            }),
                                            (0, X.tZ)(b.View, {
                                              className: "tit step-2",
                                            }),
                                            (0, X.tZ)(b.View, {
                                              className: "txt",
                                              children:
                                                "找到需要进行VIP加速的订单，并点击",
                                            }),
                                            (0, X.tZ)(b.Image, {
                                              src: "https://images3.c-ctrip.com/zt/activity/20210413-ztrip-train-welfare-group/orderinfo-img-2.png",
                                              className: "img",
                                              mode: "widthFix",
                                            }),
                                            (0, X.tZ)(b.View, {
                                              className: "tit step-3",
                                            }),
                                            (0, X.tZ)(b.View, {
                                              className: "txt",
                                              children:
                                                "在抢票任务板块中，点击展开详情",
                                            }),
                                            (0, X.tZ)(b.Image, {
                                              src: "https://images3.c-ctrip.com/zt/activity/20210413-ztrip-train-welfare-group/orderinfo-img-3.png",
                                              className: "img",
                                              mode: "widthFix",
                                            }),
                                            (0, X.tZ)(b.View, {
                                              className: "tit step-4",
                                            }),
                                            (0, X.tZ)(b.View, {
                                              className: "txt",
                                              children: "进行订单号复制",
                                            }),
                                            (0, X.tZ)(b.Image, {
                                              src: "https://images3.c-ctrip.com/zt/activity/20210413-ztrip-train-welfare-group/orderinfo-img-4.png",
                                              className: "img",
                                              mode: "widthFix",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  a &&
                                    p &&
                                    (0, X.BX)(b.View, {
                                      className: "pop-botm pop-join",
                                      children: [
                                        (0, X.tZ)(b.View, {
                                          className: "icon-closed",
                                          id: "AeFo",
                                          onClick: this.hideSweetWarn,
                                        }),
                                        (0, X.BX)(b.View, {
                                          className: "pop-join-bd",
                                          children: [
                                            (0, X.BX)(b.View, {
                                              className: "pop-join-txt",
                                              children: [
                                                (0, X.tZ)(b.View, {
                                                  className: "tit",
                                                  children: p.title,
                                                }),
                                                (0, X.tZ)(S.ZtRichText, {
                                                  className: "txt",
                                                  nodes: L(p.subTitle),
                                                }),
                                              ],
                                            }),
                                            p.content.map(function (e, t) {
                                              return "wechatCorp" === e.type
                                                ? (0, X.BX)(
                                                    b.View,
                                                    {
                                                      className:
                                                        "pop-join-qrcode",
                                                      children: [
                                                        (0, X.tZ)(b.View, {
                                                          className:
                                                            "qrcode-bg",
                                                          children: (0, X.tZ)(
                                                            b.Image,
                                                            {
                                                              src: g,
                                                              "show-menu-by-longpress":
                                                                !0,
                                                              className:
                                                                "qrcode",
                                                            }
                                                          ),
                                                        }),
                                                        (0, X.BX)(b.View, {
                                                          class: "span",
                                                          children: [
                                                            "长按扫码",
                                                            (0, X.tZ)(b.Text, {
                                                              class: "tit",
                                                              children:
                                                                "添加好友",
                                                            }),
                                                            "，得2次vip速抢票",
                                                          ],
                                                        }),
                                                      ],
                                                    },
                                                    t
                                                  )
                                                : "textList" === e.type
                                                ? (0, X.BX)(
                                                    b.View,
                                                    {
                                                      className:
                                                        "pop-join-welfare",
                                                      children: [
                                                        (0, X.tZ)(b.View, {
                                                          class: "tit",
                                                          children: "扫码可得",
                                                        }),
                                                        e.content.map(function (
                                                          e,
                                                          t
                                                        ) {
                                                          var i = e.imgSrc,
                                                            s = e.welfare,
                                                            a = e.description;
                                                          return (0, X.BX)(
                                                            b.View,
                                                            {
                                                              className: "item",
                                                              children: [
                                                                (0, X.tZ)(
                                                                  "image",
                                                                  {
                                                                    src: i,
                                                                    className:
                                                                      "icon",
                                                                  }
                                                                ),
                                                                (0, X.BX)(
                                                                  b.View,
                                                                  {
                                                                    className:
                                                                      "item-right",
                                                                    children: [
                                                                      s,
                                                                      (0, X.tZ)(
                                                                        b.Text,
                                                                        {
                                                                          class:
                                                                            "span",
                                                                          children:
                                                                            a,
                                                                        }
                                                                      ),
                                                                    ],
                                                                  }
                                                                ),
                                                              ],
                                                            },
                                                            t
                                                          );
                                                        }),
                                                      ],
                                                    },
                                                    t
                                                  )
                                                : null;
                                            }),
                                            !!p.bottom &&
                                              (0, X.BX)(b.View, {
                                                className: "pop-join-dialog",
                                                children: [
                                                  (0, X.tZ)(b.Image, {
                                                    src: p.bottom.avatar,
                                                    className: "avatar",
                                                  }),
                                                  (0, X.BX)(b.View, {
                                                    className: "cont",
                                                    children: [
                                                      (0, X.tZ)(S.ZtRichText, {
                                                        className: "tit",
                                                        nodes: L(
                                                          p.bottom.title
                                                        ),
                                                      }),
                                                      (0, X.tZ)(b.View, {
                                                        className: "txt",
                                                        children:
                                                          p.bottom.subTitle,
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  n &&
                                    (0, X.BX)(b.View, {
                                      className: "pop-mid pop-fail",
                                      children: [
                                        (0, X.tZ)(b.View, {
                                          className: "icon-closed",
                                          id: "AeFp",
                                          onClick: this.hideFailResult,
                                        }),
                                        (0, X.tZ)(b.View, {
                                          className: "icon-rock",
                                        }),
                                        (0, X.BX)(b.View, {
                                          className: "pop-fail-new",
                                          children: [
                                            (0, X.tZ)(b.View, {
                                              className: "tit",
                                              children: "已帮您升到vip速度！",
                                            }),
                                            !(!u || !Z) &&
                                              (0, X.tZ)(D, { time: h }),
                                            (0, X.tZ)(b.View, {
                                              className: "tred",
                                              children:
                                                "长期有效，可随时使用哦～",
                                            }),
                                            (0, X.tZ)(b.Button, {
                                              className: "btn-go",
                                              id: "AeFq",
                                              onClick:
                                                this.clickHideResultModal,
                                              children: o,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  r &&
                                    (0, X.BX)(b.View, {
                                      className: "pop-botm pop-rule",
                                      children: [
                                        (0, X.tZ)(b.View, {
                                          className: "icon-closed",
                                          id: "AeFr",
                                          onClick: this.hideRule,
                                        }),
                                        (0, X.tZ)(b.View, {
                                          className: "title",
                                          children: (0, X.tZ)(b.Text, {
                                            children: "活动规则",
                                          }),
                                        }),
                                        (0, X.tZ)(b.View, {
                                          className: "pop-rule-bd",
                                          children: l.map(function (e, t) {
                                            return (0,
                                            X.tZ)(b.View, { children: (0, X.BX)(b.Text, { className: "txt", children: [t + 1, ".", e] }) }, t);
                                          }),
                                        }),
                                      ],
                                    }),
                                  f &&
                                    (0, X.tZ)(M.Z, {
                                      btnExposureUbtTrace:
                                        this.btnExposureUbtTrace,
                                      btnClickUbtTrace: this.btnClickUbtTrace,
                                      closeModal: this.closeWelfareGroupModal,
                                      text: "2次VIP速抢票",
                                    }),
                                ],
                              });
                            },
                          },
                        ]),
                        i
                      );
                    })(w.default.Component))
                  ) || o)
              ) || o);
          (P.enableShareAppMessage = !0),
            Page(
              (0, r.createPageConfig)(
                P,
                "pages/activity/train/welfareGroup/index",
                { root: { cn: [] } },
                {
                  navigationStyle: "custom",
                  navigationBarTitleText: "订单填写",
                  navigationBarBackgroundColor: "#0066E6",
                  backgroundColorTop: "#0066E6",
                  backgroundColorBottom: "#EFEFEF",
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
          })(47311);
        }),
          e.O();
      },
    ]);
})();
