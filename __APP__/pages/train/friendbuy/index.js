!(function () {
  "use strict";
  require("../sub-vendors.js"),
    require("../sub-common/dc0cfe7c36c66175a01e7585a0cfebf3.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [98856],
      {
        34708: function (e, t, n) {
          var i,
            o = n(32180),
            a = n(298),
            r = n(79301),
            l = n(95308),
            s = n(57042),
            c = n(24460),
            d = n(4900),
            u = n(81876),
            h = n(21867),
            m = n(86066),
            f = n(45023),
            v = n(52500),
            p = n(71515),
            w = n(79792),
            g = n(81957),
            N = n(92954),
            Z = n.n(N),
            y = n(79910),
            k = n(3205),
            b = n(96158),
            x = n(4102),
            I = n(97939),
            S = n(49120),
            B = n(34229),
            V = n(18783),
            T = n(25391),
            C = n(9416),
            P = n(87402),
            A = n(48813),
            _ = "self",
            D = "relative",
            R = "unknown",
            K =
              (0, g.h)()(
                (i = (function (e) {
                  (0, h.Z)(n, e);
                  var t = (0, m.Z)(n);
                  function n(e) {
                    var i;
                    (0, s.Z)(this, n),
                      (i = t.call(this, e)),
                      (0, f.Z)((0, u.Z)(i), "pageId", "10650068954"),
                      (i.state = {
                        pageLength: 1,
                        statusBarHeight: y.A.statusBarHeight,
                        userType: R,
                        ownSideInfo: null,
                        friendSideInfo: null,
                        orderTicketInfo: null,
                        commonQuestion: null,
                        isScheduleDetailShow: !1,
                      });
                    var o = (
                      (0, N.getCurrentInstance)().router &&
                      (0, N.getCurrentInstance)().router.params
                    ).shareKey;
                    return o
                      ? ((i.shareKey = decodeURIComponent(o)),
                        Z().hideShareMenu && Z().hideShareMenu(),
                        i)
                      : (y.Z.relaunchHome(), (0, d.Z)(i));
                  }
                  return (
                    (0, c.Z)(n, [
                      {
                        key: "componentDidShow",
                        value: function () {
                          var e = Z().getCurrentPages(),
                            t = e ? e.length : 1;
                          this.setState({ pageLength: t }),
                            V.ZP.isLogin ? this.initData() : this.doLogin();
                        },
                      },
                      {
                        key: "doLogin",
                        value: function () {
                          var e = this;
                          V.ZP.doLogin()
                            .then(function () {
                              e.initData();
                            })
                            .catch(function () {
                              e.doHomeBack();
                            });
                        },
                      },
                      {
                        key: "onPullDownRefresh",
                        value: function () {
                          this.initData(!0);
                        },
                      },
                      {
                        key: "initData",
                        value: function () {
                          var e = this,
                            t =
                              arguments.length > 0 &&
                              void 0 !== arguments[0] &&
                              arguments[0];
                          (0, C.Yh)(
                            { shareKey: this.shareKey },
                            { checkFrameworkLogin: !0, checkLogin: !0 }
                          )
                            .then(function (t) {
                              if (t && 1 == t.resultCode) {
                                t.shareKey && (e.shareKey = t.shareKey);
                                try {
                                  e.doBusinessTrace(t);
                                } catch (e) {}
                                if (2 == t.currentUser && t.ownSideInfo) {
                                  var n,
                                    i,
                                    o,
                                    a,
                                    r,
                                    l,
                                    s,
                                    c = t.ownSideInfo,
                                    d = c.ownSideTitleInfo,
                                    u = c.ticketInfo,
                                    h = c.ownInventBannerInfo,
                                    m = c.commonQuestion,
                                    f = "";
                                  try {
                                    var v;
                                    f = decodeURIComponent(
                                      (null == h ||
                                      null === (v = h.ticketOverInfo) ||
                                      void 0 === v
                                        ? void 0
                                        : v.wxName) || ""
                                    );
                                  } catch (e) {
                                    f = "用户";
                                  }
                                  f.length > 6 &&
                                    (f = f.substring(0, 6) + "..."),
                                    e.setState({
                                      userType: _,
                                      orderTicketInfo: e.formatOrderInfo(u),
                                      commonQuestion:
                                        null == m
                                          ? void 0
                                          : m.map(function (e) {
                                              return {
                                                icon: e.icon,
                                                question: e.question,
                                                answer: e.answer,
                                              };
                                            }),
                                      ownSideInfo: {
                                        titleInfo: {
                                          title:
                                            (null == d ? void 0 : d.title) ||
                                            "",
                                          desc:
                                            (null == d ? void 0 : d.desc) || "",
                                        },
                                        ownInventBannerInfo: {
                                          orderResult:
                                            null == h ? void 0 : h.orderResult,
                                          noBuyerInfo: {
                                            icon:
                                              null == h ||
                                              null === (n = h.ticketingInfo) ||
                                              void 0 === n
                                                ? void 0
                                                : n.icon,
                                            title:
                                              null == h ||
                                              null === (i = h.ticketingInfo) ||
                                              void 0 === i
                                                ? void 0
                                                : i.title,
                                            desc:
                                              null == h ||
                                              null === (o = h.ticketingInfo) ||
                                              void 0 === o
                                                ? void 0
                                                : o.desc,
                                            button:
                                              null == h ||
                                              null === (a = h.ticketingInfo) ||
                                              void 0 === a
                                                ? void 0
                                                : a.button,
                                          },
                                          hasBuyerInfo: {
                                            title:
                                              null == h ||
                                              null === (r = h.ticketOverInfo) ||
                                              void 0 === r
                                                ? void 0
                                                : r.title,
                                            desc:
                                              null == h ||
                                              null === (l = h.ticketOverInfo) ||
                                              void 0 === l
                                                ? void 0
                                                : l.desc,
                                            wxImage:
                                              null == h ||
                                              null === (s = h.ticketOverInfo) ||
                                              void 0 === s
                                                ? void 0
                                                : s.wxImage,
                                            wxName: f,
                                          },
                                        },
                                        needAgreeProtocal:
                                          0 ==
                                          (null == h ? void 0 : h.orderResult),
                                        isAgreeProtocal:
                                          0 !=
                                          (null == h ? void 0 : h.orderResult),
                                      },
                                    });
                                } else if (
                                  1 == t.currentUser &&
                                  t.friendSideInfo
                                ) {
                                  var p = t.friendSideInfo,
                                    w = p.friendSideTitleInfo,
                                    g = p.ticketInfo,
                                    N = p.friendInventBannerInfo,
                                    Z = p.helpDescs,
                                    y = p.commonQuestions,
                                    k = void 0 === y ? [] : y;
                                  e.setState({
                                    userType: D,
                                    orderTicketInfo: e.formatOrderInfo(g),
                                    commonQuestion:
                                      null == k
                                        ? void 0
                                        : k.map(function (e) {
                                            return {
                                              icon: e.icon,
                                              question: e.question,
                                              answer: e.answer,
                                            };
                                          }),
                                    friendSideInfo: {
                                      orderResult:
                                        null == N ? void 0 : N.orderResult,
                                      titleInfo: {
                                        image: null == w ? void 0 : w.image,
                                        imageDesc:
                                          null == w ? void 0 : w.imageDesc,
                                        desc: null == w ? void 0 : w.desc,
                                      },
                                      bannerInfo: {
                                        icon: null == N ? void 0 : N.icon,
                                        title: null == N ? void 0 : N.title,
                                        desc: null == N ? void 0 : N.desc,
                                        button: null == N ? void 0 : N.button,
                                        orderNumber:
                                          null == N ? void 0 : N.orderNumber,
                                      },
                                      helpNotes:
                                        null == Z
                                          ? void 0
                                          : Z.map(function (e) {
                                              return {
                                                icon: e.icon,
                                                title: e.title,
                                                desc: e.desc,
                                              };
                                            }),
                                      isAgreeProtocal:
                                        0 !=
                                        (null == N ? void 0 : N.orderResult),
                                    },
                                  });
                                }
                              } else console.error("init data  result error ", t), e.onErrorHandle();
                            })
                            .catch(function (t) {
                              console.error("init data error ", t),
                                e.onErrorHandle();
                            })
                            .finally(function () {
                              t && Z().stopPullDownRefresh();
                            });
                        },
                      },
                      {
                        key: "onErrorHandle",
                        value: function () {
                          var e = this;
                          (0, S.showModal)("获取数据失败，请重试").then(
                            function () {
                              e.doHomeBack();
                            }
                          );
                        },
                      },
                      {
                        key: "doBusinessTrace",
                        value: function (e) {
                          var t, n;
                          console.log(e),
                            1 == (null == e ? void 0 : e.currentUser) &&
                              this.ubtTrace("s_trn_z_10650068954", {
                                bizKey: "z_mini_hf_help_card_show",
                                openid: V.ZP.openid,
                                shareKey: this.shareKey,
                              }),
                            0 ==
                              (null == e ||
                              null === (t = e.friendSideInfo) ||
                              void 0 === t ||
                              null === (n = t.friendInventBannerInfo) ||
                              void 0 === n
                                ? void 0
                                : n.orderResult) &&
                              this.ubtTrace("s_trn_z_10650068954", {
                                bizKey: "z_mini_hf_help_purchase_show",
                                exposureType: "normal",
                              });
                        },
                      },
                      {
                        key: "onScheduleDetailShowChange",
                        value: function () {
                          this.setState({
                            isScheduleDetailShow:
                              !this.state.isScheduleDetailShow,
                          });
                        },
                      },
                      {
                        key: "formatOrderInfo",
                        value: function (e) {
                          if (e)
                            return {
                              trainNo: e.trainNo,
                              seatName: e.seat,
                              fromStation: e.departStation,
                              toStation: e.arriveStation,
                              fromDate: x.Z.formatDate(e.departDate, "M月D日"),
                              passengers: e.passengers || [],
                            };
                        },
                      },
                      {
                        key: "getUserInfo",
                        value: function () {
                          return new Promise(function (e) {
                            y.Z.canUseGetUserProfile
                              ? (0, S.getUserProfileInfo)({
                                  getOnly: !1,
                                  desc: "告诉好友你是谁~",
                                })
                                  .then(function (t) {
                                    e({
                                      wxNickName: t.nickName || "",
                                      wxAvatar: t.avatarUrl || "",
                                    });
                                  })
                                  .catch(function () {
                                    e({ wxNickName: "", wxAvatar: "" });
                                  })
                              : e({
                                  wxNickName: "微信用户",
                                  wxAvatar:
                                    "https://images3.c-ctrip.com/ztrip/train_bin/6yue/zx_touxiang1@3x.png",
                                });
                          });
                        },
                      },
                      {
                        key: "openWarmTip",
                        value: function () {
                          this.setState({ isWarmTipShow: !0 });
                        },
                      },
                      {
                        key: "closeWarmTip",
                        value: function () {
                          this.setState({ isWarmTipShow: !1 });
                        },
                      },
                      {
                        key: "goBuyDetail",
                        value: function (e) {
                          this.navigateTo({ url: T.ZP.getTrainDetailUrl(e) });
                        },
                      },
                      {
                        key: "assistFriendWithAccount",
                        value: (function () {
                          var e = (0, l.Z)(
                            (0, r.Z)().mark(function e() {
                              var t,
                                n,
                                i,
                                o,
                                a = arguments;
                              return (0, r.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (
                                          ((t =
                                            !(
                                              a.length > 0 && void 0 !== a[0]
                                            ) || a[0]),
                                          this.state.friendSideInfo
                                            .isAgreeProtocal)
                                        ) {
                                          e.next = 4;
                                          break;
                                        }
                                        return (
                                          (0, S.showToast)(
                                            "请先阅读并同意下方服务协议~"
                                          ),
                                          e.abrupt("return")
                                        );
                                      case 4:
                                        return (e.next = 6), this.getUserInfo();
                                      case 6:
                                        if (
                                          (n = e.sent) &&
                                          n.wxNickName &&
                                          n.wxAvatar
                                        ) {
                                          e.next = 10;
                                          break;
                                        }
                                        return (
                                          (0, S.showToast)(
                                            "请先授权昵称及头像~"
                                          ),
                                          e.abrupt("return")
                                        );
                                      case 10:
                                        if (
                                          ((i = P.WG.get()),
                                          (o =
                                            null == i ? void 0 : i.bind12306),
                                          i &&
                                            null != o &&
                                            o.name &&
                                            null != o &&
                                            o.pwd)
                                        ) {
                                          e.next = 16;
                                          break;
                                        }
                                        this.goLogin12306(), (e.next = 27);
                                        break;
                                      case 16:
                                        if (!t) {
                                          e.next = 26;
                                          break;
                                        }
                                        return (
                                          (0, S.showLoading)("请稍候"),
                                          (e.next = 20),
                                          this.check12306Useable(o.name, o.pwd)
                                        );
                                      case 20:
                                        if (e.sent) {
                                          e.next = 25;
                                          break;
                                        }
                                        return (
                                          (0, S.hideLoading)(),
                                          this.goLogin12306(),
                                          e.abrupt("return")
                                        );
                                      case 25:
                                        (0, S.hideLoading)();
                                      case 26:
                                        this._assist(o.name, o.pwd);
                                      case 27:
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
                        key: "_assist",
                        value: (function () {
                          var e = (0, l.Z)(
                            (0, r.Z)().mark(function e() {
                              var t,
                                n,
                                i,
                                o,
                                a,
                                l = this,
                                s = arguments;
                              return (0, r.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (t =
                                            s.length > 0 && void 0 !== s[0]
                                              ? s[0]
                                              : ""),
                                          (n =
                                            s.length > 1 && void 0 !== s[1]
                                              ? s[1]
                                              : ""),
                                          this.ubtTrace("c_trn_z_10650068954", {
                                            bizKey:
                                              "z_mini_hf_help_purchase_click",
                                          }),
                                          console.log(t, n),
                                          (i = T.ZP.encode12306Account({
                                            login12306Name: t,
                                            login12306Pas: n,
                                          })),
                                          (e.next = 7),
                                          this.getUserInfo()
                                        );
                                      case 7:
                                        (o = e.sent),
                                          (a = {
                                            shareKey: this.shareKey,
                                            userName12306: i.login12306Name,
                                            userPass12306: i.login12306Pas,
                                            wxImage: o.wxAvatar,
                                            wxName: encodeURIComponent(
                                              o.wxNickName
                                            ),
                                            phoneNumber: V.ZP.userName,
                                          }),
                                          (0, C.Kt)({ orderByFriends: a })
                                            .then(function (e) {
                                              e &&
                                              1 == e.resultCode &&
                                              e.orderNumber
                                                ? setTimeout(function () {
                                                    l.goBuyDetail(
                                                      e.orderNumber
                                                    );
                                                  }, 300)
                                                : (0, S.showToast)(
                                                    e.resultMessage ||
                                                      "助力失败"
                                                  );
                                            })
                                            .catch(function (e) {
                                              console.error(e),
                                                (0, S.showToast)("助力失败");
                                            });
                                      case 10:
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
                        key: "check12306Useable",
                        value: (function () {
                          var e = (0, l.Z)(
                            (0, r.Z)().mark(function e() {
                              var t,
                                n,
                                i,
                                o = arguments;
                              return (0, r.Z)().wrap(function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      if (
                                        ((t =
                                          o.length > 0 && void 0 !== o[0]
                                            ? o[0]
                                            : ""),
                                        (n =
                                          o.length > 1 && void 0 !== o[1]
                                            ? o[1]
                                            : ""),
                                        t && n)
                                      ) {
                                        e.next = 4;
                                        break;
                                      }
                                      return e.abrupt("return", !1);
                                    case 4:
                                      return (
                                        (e.next = 6),
                                        (0, I.L5)({
                                          UserName: t,
                                          Password: n,
                                        }).catch(function () {})
                                      );
                                    case 6:
                                      return (
                                        (i = e.sent), e.abrupt("return", !!i)
                                      );
                                    case 8:
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
                      },
                      {
                        key: "goLogin12306",
                        value: function () {
                          var e = this,
                            t =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : "",
                            n =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : "";
                          this.ubtTrace("HYBQ_hy_dl_show", {});
                          var i = "https://"
                            .concat(
                              w.default.h5domain,
                              "/webapp/train/activity/ztrip-train-12306/?needLogin=1&partner="
                            )
                            .concat(w.default.partner, "#/login?userName=")
                            .concat(t, "&loginPW=")
                            .concat(n, "&mobile=")
                            .concat(V.ZP.userName || "");
                          k.Z.twebview({
                            data: {
                              url: i,
                              bridgeIns: function (t) {
                                if (Array.isArray(t.detail.data)) {
                                  e.ubtTrace("HYBQ_hy_dlcg_click", {});
                                  var n = t.detail.data;
                                  (0, b.Tq)(n), e.assistFriendWithAccount(!1);
                                }
                              },
                            },
                          });
                        },
                      },
                      {
                        key: "doHomeBack",
                        value: function () {
                          y.Z.relaunchHome();
                        },
                      },
                      {
                        key: "onBack",
                        value: function () {
                          this.state.userType,
                            this.state.pageLength > 1
                              ? Z().navigateBack()
                              : y.Z.relaunchHome();
                        },
                      },
                      {
                        key: "toProtocal",
                        value: function () {
                          k.Z.twebview({
                            data: {
                              url: w.default.isTieyou
                                ? "https://pages.ctrip.com/ztrip/document/policy.html"
                                : "https://pages.ctrip.com/ztrip/document/policyzx.html",
                            },
                          });
                        },
                      },
                      {
                        key: "toRelativeProtocal",
                        value: function (e) {
                          var t = e
                            ? "https://pages.c-ctrip.com/ztrip/ztrip-mini/helpbuyticket-my.html"
                            : "https://pages.c-ctrip.com/ztrip/ztrip-mini/helpbuyticket-friend.html";
                          k.Z.twebview({
                            data: {
                              url: ""
                                .concat(t, "?appid=")
                                .concat(w.default.isTieyou ? "1002" : "1003"),
                            },
                          });
                        },
                      },
                      {
                        key: "toggleRelativeProtocal",
                        value: function () {
                          this.setState({
                            friendSideInfo: (0, a.Z)(
                              (0, a.Z)({}, this.state.friendSideInfo),
                              {},
                              {
                                isAgreeProtocal:
                                  !this.state.friendSideInfo.isAgreeProtocal,
                              }
                            ),
                          });
                        },
                      },
                      {
                        key: "toggleSelfProtocal",
                        value: function () {
                          this.setState({
                            ownSideInfo: (0, a.Z)(
                              (0, a.Z)({}, this.state.ownSideInfo),
                              {},
                              {
                                isAgreeProtocal:
                                  !this.state.ownSideInfo.isAgreeProtocal,
                              }
                            ),
                          });
                        },
                      },
                      {
                        key: "selfShareToFriend",
                        value: function () {
                          this.state.ownSideInfo.isAgreeProtocal ||
                            (0, S.showToast)("请先阅读并同意下方服务协议~");
                        },
                      },
                      {
                        key: "onShareAppMessage",
                        value: function () {
                          return {
                            title: "Hi,可以帮我用".concat(
                              w.default.isTieyou ? "铁友" : "智行",
                              "买张火车票吗？十万火急~"
                            ),
                            path: "/pages/train/friendbuy/index?shareKey=".concat(
                              encodeURIComponent(this.shareKey)
                            ),
                            imageUrl: w.default.isTieyou
                              ? "https://images3.c-ctrip.com/ztrip/train_xie/2021-10/WeChat/img_help_t.png"
                              : "https://images3.c-ctrip.com/ztrip/train_xie/2021-10/WeChat/img_help.png",
                            desc: "",
                          };
                        },
                      },
                      {
                        key: "renderScheduleDetail",
                        value: function () {
                          var e = this,
                            t = this.state,
                            n = t.orderTicketInfo,
                            i = t.isScheduleDetailShow;
                          return n
                            ? (0, A.BX)(p.View, {
                                className: "white-box order-box ".concat(
                                  i ? "open" : ""
                                ),
                                children: [
                                  (0, A.BX)(p.View, {
                                    className: "order-hd",
                                    children: [
                                      (0, A.tZ)(p.View, {
                                        className: "cont",
                                        children: (0, A.tZ)(p.View, {
                                          className: "tit",
                                          children: ""
                                            .concat(n.fromStation, "-")
                                            .concat(n.toStation),
                                        }),
                                      }),
                                      (0, A.BX)(p.View, {
                                        className: "rbox",
                                        id: "AKCi",
                                        onClick: function () {
                                          e.onScheduleDetailShowChange();
                                        },
                                        children: [
                                          i ? "收起详情" : "订单详情",
                                          (0, A.tZ)(p.Text, {
                                            className:
                                              "ifont-triangle iconfont",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  i &&
                                    (0, A.BX)(p.View, {
                                      className: "order-bd",
                                      children: [
                                        (0, A.BX)(p.View, {
                                          className: "item",
                                          children: [
                                            (0, A.tZ)(p.View, {
                                              className: "label",
                                              children: "乘客",
                                            }),
                                            (0, A.tZ)(p.View, {
                                              className: "cont",
                                              children: "".concat(
                                                n.passengers.join("、")
                                              ),
                                            }),
                                          ],
                                        }),
                                        (0, A.BX)(p.View, {
                                          className: "item",
                                          children: [
                                            (0, A.tZ)(p.View, {
                                              className: "label",
                                              children: "日期",
                                            }),
                                            (0, A.tZ)(p.View, {
                                              className: "cont",
                                              children: n.fromDate || "",
                                            }),
                                          ],
                                        }),
                                        (0, A.BX)(p.View, {
                                          className: "item",
                                          children: [
                                            (0, A.tZ)(p.View, {
                                              className: "label",
                                              children: "车次",
                                            }),
                                            (0, A.tZ)(p.View, {
                                              className: "cont",
                                              children: n.trainNo || "",
                                            }),
                                          ],
                                        }),
                                        (0, A.BX)(p.View, {
                                          className: "item",
                                          children: [
                                            (0, A.tZ)(p.View, {
                                              className: "label",
                                              children: "座席",
                                            }),
                                            (0, A.tZ)(p.View, {
                                              className: "cont",
                                              children: n.seatName || "",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                ],
                              })
                            : (0, A.tZ)(p.View, {});
                        },
                      },
                      {
                        key: "renderRelativeBody",
                        value: function () {
                          var e = this,
                            t = this.state.friendSideInfo,
                            n = t.bannerInfo,
                            i = t.isAgreeProtocal;
                          return (
                            console.info("friendSideInfo", t),
                            (0, A.tZ)(p.Block, {
                              children:
                                t &&
                                (0, A.BX)(p.View, {
                                  className: "white-box login-12306",
                                  children: [
                                    (0, A.tZ)(p.Image, {
                                      mode: "widthFix",
                                      className: "icon-nohelp",
                                      src: null == n ? void 0 : n.icon,
                                    }),
                                    (0, A.tZ)(B.ZtRichText, {
                                      className: "tit",
                                      nodes: null == n ? void 0 : n.title,
                                    }),
                                    (0, A.tZ)(B.ZtRichText, {
                                      className: "txt",
                                      nodes: null == n ? void 0 : n.desc,
                                    }),
                                    0 == t.orderResult &&
                                      (0, A.tZ)(p.View, {
                                        className: "btn-submit",
                                        id: "AKCj",
                                        onClick: function () {
                                          e.assistFriendWithAccount();
                                        },
                                        children:
                                          (null == n ? void 0 : n.button) ||
                                          "帮TA买票",
                                      }),
                                    0 == t.orderResult &&
                                      (0, A.BX)(p.View, {
                                        className: "txt tips",
                                        id: "AKCk",
                                        onClick: function () {
                                          e.toggleRelativeProtocal();
                                        },
                                        children: [
                                          (0, A.tZ)(p.Text, {
                                            className: i
                                              ? "ifont-radioed iconfont"
                                              : "ifont-radio iconfont",
                                          }),
                                          " 阅读并同意",
                                          (0, A.tZ)(p.Text, {
                                            className: "color-primary",
                                            id: "AKCl",
                                            onClick: function (t) {
                                              t.stopPropagation(),
                                                e.toRelativeProtocal(!1);
                                            },
                                            children: "《好友帮买须知》",
                                          }),
                                          (0, A.tZ)(p.Text, {
                                            className: "color-primary",
                                            id: "AKCm",
                                            onClick: function (t) {
                                              t.stopPropagation(),
                                                e.toProtocal();
                                            },
                                            children: "《服务协议》",
                                          }),
                                        ],
                                      }),
                                    1 == t.orderResult &&
                                      (0, A.tZ)(p.View, {
                                        className: "btn-submit",
                                        id: "AKCn",
                                        onClick: function () {
                                          e.goBuyDetail(n.orderNumber);
                                        },
                                        children:
                                          (null == n ? void 0 : n.button) ||
                                          "查看订单",
                                      }),
                                  ],
                                }),
                            })
                          );
                        },
                      },
                      {
                        key: "renderSelfBody",
                        value: function () {
                          var e = this,
                            t = this.state.ownSideInfo,
                            n = t.ownInventBannerInfo,
                            i = t.needAgreeProtocal,
                            o = t.isAgreeProtocal,
                            a = n.orderResult,
                            r = n.noBuyerInfo,
                            l = n.hasBuyerInfo;
                          return (0, A.BX)(p.Block, {
                            children: [
                              (0 == a || 2 == a) &&
                                (0, A.BX)(p.View, {
                                  className: "white-box invite-none-v2",
                                  children: [
                                    (0, A.tZ)(p.Image, {
                                      mode: "widthFix",
                                      className: "icon-nohelp",
                                    }),
                                    (0, A.tZ)(B.ZtRichText, {
                                      className: "tit",
                                      nodes: null == r ? void 0 : r.title,
                                    }),
                                    (0, A.tZ)(B.ZtRichText, {
                                      className: "txt",
                                      nodes: null == r ? void 0 : r.desc,
                                    }),
                                    0 == a &&
                                      (0, A.tZ)(p.Button, {
                                        className: "btn-submit",
                                        openType: "".concat(o ? "share" : ""),
                                        id: "AKCp",
                                        onClick: function () {
                                          e.selfShareToFriend();
                                        },
                                        children: r.button || "邀请好友帮买票",
                                      }),
                                    0 == a &&
                                      i &&
                                      (0, A.BX)(p.View, {
                                        className: "txt tips",
                                        children: [
                                          (0, A.tZ)(p.Text, {
                                            className: o
                                              ? "ifont-radioed iconfont"
                                              : "ifont-radio iconfont",
                                            id: "AKCq",
                                            onClick: function () {
                                              e.toggleSelfProtocal();
                                            },
                                          }),
                                          " 阅读并同意",
                                          (0, A.tZ)(p.Text, {
                                            className: "color-primary",
                                            id: "AKCr",
                                            onClick: function () {
                                              e.toRelativeProtocal(!0);
                                            },
                                            children: "《好友帮买须知》",
                                          }),
                                        ],
                                      }),
                                  ],
                                }),
                              1 == a &&
                                l &&
                                (0, A.BX)(p.View, {
                                  className: "white-box invite-box",
                                  children: [
                                    (0, A.tZ)(p.View, {
                                      className: "tit",
                                      children: (0, A.tZ)(p.View, {
                                        className: "rich-box",
                                        children: (0, A.tZ)(B.ZtRichText, {
                                          nodes: null == l ? void 0 : l.title,
                                        }),
                                      }),
                                    }),
                                    (0, A.tZ)(B.ZtRichText, {
                                      className: "txt",
                                      nodes: null == l ? void 0 : l.desc,
                                    }),
                                    (0, A.tZ)(p.View, {
                                      className: "invite-bd",
                                      children: (0, A.tZ)(p.View, {
                                        className: "invite-list",
                                        children: (0, A.BX)(p.View, {
                                          className: "item",
                                          children: [
                                            (0, A.tZ)(p.Image, {
                                              src:
                                                (null == l
                                                  ? void 0
                                                  : l.wxImage) ||
                                                "https://pic.c-ctrip.com/train/zt/wechat/avatar-default-zx.png",
                                              className: "avatar",
                                            }),
                                            (0, A.tZ)(p.View, {
                                              className: "name",
                                              children:
                                                (null == l
                                                  ? void 0
                                                  : l.wxName) ||
                                                "".concat(
                                                  w.default.isTieyou
                                                    ? "铁友"
                                                    : "智行",
                                                  "用户"
                                                ),
                                            }),
                                          ],
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                            ],
                          });
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e,
                            t,
                            n,
                            i,
                            o,
                            a,
                            r = this,
                            l = this.state,
                            s = l.pageLength,
                            c = l.statusBarHeight,
                            d = l.userType,
                            u = l.ownSideInfo,
                            h = l.friendSideInfo,
                            m = l.isScheduleDetailShow,
                            f = l.isWarmTipShow,
                            v = l.commonQuestion;
                          return (0, A.BX)(p.View, {
                            className: "".concat(
                              w.default.isTieyou ? "ty" : "zx"
                            ),
                            children: [
                              (0, A.BX)(p.View, {
                                className: "top-bar",
                                style: "padding-top: " + c + "px",
                                children: [
                                  (0, A.tZ)(p.Text, {
                                    className:
                                      1 == s
                                        ? "ifont-home iconfont"
                                        : "ifont-back iconfont",
                                    id: "AKCs",
                                    onClick: function () {
                                      r.onBack();
                                    },
                                  }),
                                  (0, A.tZ)(p.View, { className: "tit" }),
                                ],
                              }),
                              (0, A.BX)(p.View, {
                                className: "top-box",
                                style: "padding-top: " + (c + 52) + "px",
                                children: [
                                  d == _ &&
                                    (0, A.BX)(p.View, {
                                      className: "top-own",
                                      children: [
                                        (0, A.tZ)(p.View, {
                                          className: "top-img",
                                        }),
                                        (0, A.tZ)(p.View, { className: "tit" }),
                                        (null == u ||
                                        null === (e = u.titleInfo) ||
                                        void 0 === e
                                          ? void 0
                                          : e.desc) &&
                                          (null == u ||
                                          null === (t = u.titleInfo) ||
                                          void 0 === t
                                            ? void 0
                                            : t.desc.map(function (e) {
                                                return (0,
                                                A.tZ)(p.View, { className: "txt", children: e }, e);
                                              })),
                                      ],
                                    }),
                                  d == D &&
                                    !h.hasHelpBuy &&
                                    (0, A.BX)(p.View, {
                                      className: "top-friend",
                                      children: [
                                        (0, A.BX)(p.View, {
                                          className: "lbox",
                                          children: [
                                            (0, A.tZ)(p.Image, {
                                              src:
                                                (null == h ||
                                                null === (n = h.titleInfo) ||
                                                void 0 === n
                                                  ? void 0
                                                  : n.icon) ||
                                                "https://images3.c-ctrip.com/zt/activity/20210903-ztrip-wechat/avatar.png",
                                              className: "avatar",
                                            }),
                                            (0, A.tZ)(p.View, {
                                              className: "tag",
                                              children:
                                                (null == h ||
                                                null === (i = h.titleInfo) ||
                                                void 0 === i
                                                  ? void 0
                                                  : i.imageDesc) || "发起人",
                                            }),
                                          ],
                                        }),
                                        (0, A.tZ)(p.View, {
                                          className: "cont",
                                          children: (0, A.tZ)(p.View, {
                                            className: "txt",
                                            children:
                                              null == h ||
                                              null === (o = h.titleInfo) ||
                                              void 0 === o
                                                ? void 0
                                                : o.desc,
                                          }),
                                        }),
                                      ],
                                    }),
                                ],
                              }),
                              (0, A.BX)(p.View, {
                                className: "wrap",
                                children: [
                                  this.renderScheduleDetail(),
                                  d == _ && this.renderSelfBody(),
                                  d == D && this.renderRelativeBody(),
                                  (null == h ? void 0 : h.helpNotes) &&
                                    (0, A.tZ)(p.View, {
                                      className: "white-box help-note",
                                      children:
                                        null == h ||
                                        null === (a = h.helpNotes) ||
                                        void 0 === a
                                          ? void 0
                                          : a.map(function (e, t) {
                                              return (0,
                                              A.BX)(p.View, { className: "item", children: [(0, A.tZ)(p.Image, { src: e.icon, mode: "widthFix", className: "icon" }), (0, A.tZ)(p.View, { className: "h", children: e.title }), (0, A.tZ)(p.View, { className: "t", children: e.desc })] }, t);
                                            }),
                                    }),
                                  v &&
                                    !!v.length &&
                                    (0, A.BX)(p.View, {
                                      className: "white-box qus-box",
                                      children: [
                                        (0, A.tZ)(p.View, {
                                          className: "tit",
                                          children: "常见问题",
                                        }),
                                        v.map(function (e, t) {
                                          return (0,
                                          A.BX)(p.Block, { children: [(0, A.tZ)(p.View, { className: "txt-qus", children: e.question }), (0, A.tZ)(p.View, { className: "txt-anw", children: e.answer })] }, t);
                                        }),
                                      ],
                                    }),
                                  (0, A.tZ)(p.View, { className: "botm-advg" }),
                                  (0, A.tZ)(p.View, {
                                    children: (0, A.tZ)(B.ZtDrawer, {
                                      show: f,
                                      title: "温馨提示",
                                      onClose: function () {
                                        return r.closeWarmTip();
                                      },
                                      children: (0, A.BX)(p.View, {
                                        className: "warm-tip-box",
                                        children: [
                                          (0, A.tZ)(p.View, {
                                            className: "tips",
                                            children:
                                              "1、帮好友免费抢票，需要使用您的12306账号",
                                          }),
                                          (0, A.tZ)(p.View, {
                                            className: "tips",
                                            children:
                                              "2、若您帮好友抢票成功，将会把好友乘车人信息添加至您的12306账号中",
                                          }),
                                          (0, A.tZ)(p.View, {
                                            className: "tips",
                                            children:
                                              "3、请您点击同意前知晓智行使用您的12306账号帮好友抢票",
                                          }),
                                          (0, A.BX)(p.View, {
                                            className: "btn-box",
                                            children: [
                                              (0, A.tZ)(p.View, {
                                                className: "btn exit",
                                                id: "AKCt",
                                                onClick: function () {
                                                  r.closeWarmTip();
                                                },
                                                children: "退出",
                                              }),
                                              (0, A.tZ)(p.View, {
                                                className: "btn agree",
                                                id: "AKCu",
                                                onClick: function () {
                                                  r.assistFriendWithAccount();
                                                },
                                                children: "同意",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                              m &&
                                (0, A.tZ)(p.View, {
                                  className: "shade-box",
                                  id: "AKCv",
                                  onClick: function () {
                                    r.onScheduleDetailShowChange();
                                  },
                                }),
                            ],
                          });
                        },
                      },
                    ]),
                    n
                  );
                })(v.Component))
              ) || i;
          (K.enableShareAppMessage = !0),
            Page(
              (0, o.createPageConfig)(
                K,
                "pages/train/friendbuy/index",
                { root: { cn: [] } },
                {
                  navigationBarTitleText: "",
                  navigationBarBackgroundColor: "#0062FF",
                  backgroundColorTop: "#0062FF",
                  backgroundColorBottom: "#034BEE",
                  enablePullDownRefresh: !0,
                  navigationStyle: "custom",
                } || {}
              )
            );
        },
      },
      function (e) {
        e.O(0, [98655, 77, 19559, 11216, 68592], function () {
          return (function (t) {
            return e((e.s = t));
          })(34708);
        }),
          e.O();
      },
    ]);
})();
