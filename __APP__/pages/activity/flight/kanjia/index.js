!(function () {
  "use strict";
  require("../sub-vendors.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [60747],
      {
        64312: function (e, t, i) {
          var a,
            s = i(32180),
            n = i(57042),
            o = i(24460),
            c = i(21867),
            r = i(86066),
            l = i(298),
            h = i(79301),
            u = i(95308),
            d = i(52500),
            m = i(71515),
            p = i(92954),
            f = i.n(p),
            g = i(34229),
            w = i(48792),
            N = i.n(w),
            Z = i(81957),
            A = i(3205),
            v = i(79910),
            x = i(79792),
            y = i(49120),
            B = i(2326),
            b = i(13025),
            V = i(58676),
            k = i(18783),
            C = i(17377),
            T = i(8271),
            P = i.n(T),
            X = i(77900),
            D = i(55916),
            I = i(4102),
            R = i(28352),
            U = i(48813),
            F = (0, C.ZP)({
              serviceCode: "17679",
              channel: x.default.train_channel,
              path: "getZtripOfficialAccountUrl",
            }),
            L = x.default.isTieyou,
            M =
              k.ZP.userName && X.Z.isMobile(k.ZP.userName)
                ? "尾号".concat(k.ZP.userName.slice(-4))
                : L
                ? "铁友用户"
                : "智行用户",
            j = "http://pic.c-ctrip.com/train/zt/wechat/avatar-default-".concat(
              L ? "ty" : "zx",
              ".png"
            ),
            _ = B.Z.getDateStr(),
            S = P()(_).add(90, "day").format("YYYY-MM-DD"),
            O = L ? "ty_flight_act_kanjia3" : "zx_flight_act_kanjia3",
            H = {
              pageId: L ? "10650034065" : "10650031520",
              data: {
                isTieyou: L,
                isLogin: !0,
                canUseGetUserProfile: v.Z.canUseGetUserProfile,
                isEnd: !0,
                status: 0,
                issuerAvatar: j,
                assistRestList: [],
                assistList: [],
                treasureBoxAvailable: !1,
                mask: !1,
                maskType: "",
                transition: !1,
                showRule: !1,
                showAllFriends: !1,
                showResult: !1,
                showAuthorityPopup: !1,
                showWithdrawalPopup: !1,
                showTreasureBoxPopup: !1,
                showCashAddPopup: !1,
                showFirstAccessPopup: !1,
                showFailPopup: !1,
                errorPopupMsg: "",
                departCity: "上海",
                departCityCode: "SHA",
                poiTagArray: [
                  { name: "国内热门", type: 6 },
                  { name: "国际热门", type: 1 },
                  { name: "东南亚", type: 2 },
                  { name: "港澳台(中国)", type: 3 },
                  { name: "海岛游", type: 4 },
                  { name: "免签/落地签", type: 7 },
                ],
                poiType: 6,
                flightList: [],
                assistNum: 0,
                toOfficialAccountAssist: !1,
                disableRedirectOfficial: "",
                isGZHRiskUser: !1,
              },
              onLoad: function (e) {
                var t = this,
                  i = e.shareKey,
                  a = e.disableRedirectOfficial;
                console.log("----opts------", i, a),
                  this.setData({ orderNumber: i, disableRedirectOfficial: a }),
                  this.checkLogin()
                    ? this.initPage({ shareKey: i })
                    : this.doLogin(function () {
                        t.initPage({ shareKey: i });
                      });
              },
              initPage: function (e) {
                var t = e.shareKey;
                this.checkGZHRisk({ shareKey: t }),
                  this.getOpenId(),
                  this.getConfigInfo(),
                  this.getFlightList(),
                  v.Z.setLaunchSource({
                    loginSoureType: "wechat",
                    loginSourceName: "fltCashBack",
                  });
              },
              onShow: function () {},
              onReady: function () {
                var e = this.data.isTieyou;
                v.Z.setTitle("".concat(e ? "铁友机票" : "智行机票"));
              },
              checkGZHRisk: function (e) {
                var t = this;
                return (0, u.Z)(
                  (0, h.Z)().mark(function i() {
                    var a, s, n, o, c, r, l;
                    return (0, h.Z)().wrap(
                      function (i) {
                        for (;;)
                          switch ((i.prev = i.next)) {
                            case 0:
                              return (
                                (a = e.pageKey),
                                (s = void 0 === a ? "flightBargain" : a),
                                (n = e.shareKey),
                                (i.prev = 1),
                                (i.next = 4),
                                F({ source: s, shareKey: n })
                              );
                            case 4:
                              (o = i.sent),
                                (c = o.resultCode),
                                (r = o.isOriginUrl),
                                (l = o.riskReason),
                                (1 !== c || r || l) &&
                                  t.setData({ isGZHRiskUser: !0 }),
                                (i.next = 12);
                              break;
                            case 9:
                              (i.prev = 9),
                                (i.t0 = i.catch(1)),
                                console.log(i.t0);
                            case 12:
                            case "end":
                              return i.stop();
                          }
                      },
                      i,
                      null,
                      [[1, 9]]
                    );
                  })
                )();
              },
              checkLogin: function () {
                var e = k.ZP.isLogin;
                return this.setData({ isLogin: e }), e;
              },
              getPhoneNumberAction: function () {
                var e = this;
                this.doLogin(function () {
                  e.getActivityInfo({ type: "authority" });
                });
              },
              doLogin: function (e) {
                var t = this;
                k.ZP.doLogin()
                  .then(function () {
                    t.setData({ isLogin: !0 }), null == e || e();
                  })
                  .catch(function () {
                    (0, y.showToast)("取消登录");
                  });
              },
              getOpenId: function () {
                var e = this;
                k.ZP.openid
                  ? (this.setData({ openId: k.ZP.openid }),
                    this.getActivityInfo())
                  : (0, k.M9)().then(
                      function (t) {
                        var i = t.openid;
                        console.log("openid", i),
                          e.setData({ openId: i }),
                          e.getActivityInfo();
                      },
                      function () {
                        console.log("获取openId失败");
                      }
                    );
              },
              getUserInfo: function () {
                var e = this;
                return v.Z.canUseGetUserProfile
                  ? (0, y.getUserProfileInfo)({ getOnly: !0 })
                  : new Promise(function (t, i) {
                      f().getSetting({
                        success: function (a) {
                          a.authSetting["scope.userInfo"]
                            ? f().getUserInfo({
                                success: function (i) {
                                  var a = i.userInfo,
                                    s = a.nickName,
                                    n = a.avatarUrl;
                                  e.setData({ nickName: s, avatarUrl: n }), t();
                                },
                                fail: function () {
                                  i();
                                },
                              })
                            : i();
                        },
                        fail: function () {
                          i();
                        },
                      });
                    });
              },
              gotoOfficialPage: function () {
                f().navigateTo({
                  url: "/pages/activity/train/ztrip-assist-official-account/index?scene=".concat(
                    this.data.orderNumber,
                    "&pageKey=flightBargain"
                  ),
                });
              },
              getUserProfileAction: function () {
                var e = this,
                  t = this.data,
                  i = t.avatarUrl,
                  a = t.nickName,
                  s = t.toOfficialAccountAssist,
                  n = t.disableRedirectOfficial,
                  o = t.isGZHRiskUser;
                this.hideAuthorityPopup(),
                  o || !s || 1 == n
                    ? i && a
                      ? this.doAssistAction(a, i)
                      : (0, y.getUserProfileInfo)()
                          .then(function (t) {
                            e.doAssistAction(
                              t.nickName || "",
                              t.avatarUrl || ""
                            );
                          })
                          .catch(function (t) {
                            if (-2 === t.code) e.toggleAuthorityPopup();
                            else {
                              var i =
                                k.ZP.userName && X.Z.isMobile(k.ZP.userName)
                                  ? "尾号".concat(k.ZP.userName.slice(-4))
                                  : L
                                  ? "铁友用户"
                                  : "智行用户";
                              e.doAssistAction(i, j);
                            }
                          })
                    : this.gotoOfficialPage();
              },
              checkUserInfoAuthority: function () {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                console.log(e);
                var t = this.data,
                  i = t.avatarUrl,
                  a = t.nickName,
                  s = t.toOfficialAccountAssist,
                  n = t.disableRedirectOfficial;
                if ((this.hideAuthorityPopup(), s && 1 != n))
                  this.gotoOfficialPage();
                else if (i && a) this.doAssistAction(a, i);
                else if (e.detail && "getUserInfo:ok" === e.detail.errMsg)
                  this.doAssistAction(
                    e.detail.userInfo.nickName,
                    e.detail.userInfo.avatarUrl
                  );
                else {
                  var o =
                    k.ZP.userName && X.Z.isMobile(k.ZP.userName)
                      ? "尾号".concat(k.ZP.userName.slice(-4))
                      : L
                      ? "铁友用户"
                      : "智行用户";
                  this.doAssistAction(o, j);
                }
              },
              getConfigInfo: function () {
                var e = this,
                  t = { ConfigKey: O };
                (0, b.fu)(t).then(function (t) {
                  var i = t.ConfigInfo && t.ConfigInfo.Content;
                  e.setData({ ruleContent: i });
                });
              },
              getActivityInfo: function () {
                var e = this,
                  t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  i = t.cb,
                  a = this.data.orderNumber,
                  s = { orderNumber: a };
                (0, R.u5)(s)
                  .then(function (t) {
                    var a = t.resultCode,
                      s = t.resultMessage,
                      n = t.isLogin;
                    if (1 !== a)
                      return e.showCommonDialog(s || "网络错误，请稍候再试~");
                    var o = t.status,
                      c = t.issuable,
                      r = t.isIssuer,
                      h = t.avatar,
                      u = t.maxCashBackAmount,
                      d = t.amount,
                      m = t.currentAmount,
                      p = t.nextCashAssistNum,
                      f = t.assistedNum,
                      g = t.cashAddAmount,
                      w = t.isAssisted,
                      N = t.expireTime,
                      Z = t.boxInfo,
                      A = t.totalCashAmount,
                      v = t.initAmount,
                      x = t.firstAccess,
                      y = t.assistAmount,
                      B = void 0 === y ? 0 : y,
                      b = t.toOfficialAccountAssist,
                      V = t.otaComparePrices || [],
                      k = t.assistInfos || [],
                      C = t.hoverMessages || [],
                      T = t.receivableCoupons || [],
                      P = t.receivedCoupons || [],
                      X = 1 === o,
                      D = t.compareResult || "",
                      I = t.assistRewards || [],
                      R = e.handleCompensatesList(
                        t.assistCompensates || [],
                        m || 0
                      ),
                      U = R.assistCompensates,
                      F = void 0 === U ? [] : U,
                      L = R.compensationCoupon,
                      M = R.compensationPercent,
                      _ = void 0 === M ? 0 : M,
                      S = P.reduce(function (e, t) {
                        return e + t.price;
                      }, 0),
                      O = t.extInfo || {};
                    e.setData({
                      isLogin: n,
                      toOfficialAccountAssist: b,
                      status: o,
                      issuable: c,
                      isIssuer: r,
                      issuerAvatar: h || j,
                      maxCashBackAmount: u || 0,
                      amount: d || 0,
                      amountStr: d ? d.toFixed(2) : "0.00",
                      currentAmount: m || 0,
                      currentPercent: ((m / d) * 100).toFixed(2),
                      sufficeAmount: (u - m).toFixed(2),
                      nextCashAssistNum: p - k.length,
                      canWithdraw: X,
                      assistedNum: f,
                      cashAddAmount: g,
                      isAssisted: w,
                      expireTime: N,
                      boxInfo: Z,
                      totalCashAmount: A,
                      hoverMessages: C.map(function (e) {
                        return (0,
                        l.Z)((0, l.Z)({}, e), {}, { avatar: e.avatar || j });
                      }),
                      assistList: e.handleAssistList(k, "real"),
                      assistRestList: e.handleAssistList(
                        k,
                        "rest",
                        p - k.length
                      ),
                      receivableCouponList: T,
                      receivedCouponList: P,
                      firstAccess: x,
                      initAmount: v,
                      compareResult: D,
                      otaComparePrices: V,
                      totalCouponsPrice: S,
                      assistNum: B,
                      assistRewards: I,
                      assistCompensates: F,
                      compensationCoupon: L,
                      compensationPercent: _,
                      extInfo: O,
                    }),
                      i && i();
                  })
                  .catch(function (t) {
                    console.log(t), e.showFailAction();
                  });
              },
              handleAssistList: function (e, t, i) {
                if ("real" === t) {
                  if (!e || 0 === e.length) return [];
                  var a = [],
                    s = 0,
                    n = 0;
                  return (
                    e.forEach(function (e, t) {
                      var i = (0, l.Z)(
                        (0, l.Z)({}, e),
                        {},
                        {
                          name: decodeURIComponent(e.name),
                          avatar: e.avatar || j,
                        }
                      );
                      e.amount > s && ((s = e.amount), (n = t)), a.push(i);
                    }),
                    (a[n].best = !0),
                    a
                  );
                }
                var o = e.length,
                  c = {},
                  r = [];
                if ("rest" === t) {
                  if (0 === o) r = new Array(3 - o - 1).fill(c);
                  else {
                    var h = 0;
                    o > 0 && o < 10
                      ? (h = 3)
                      : o >= 10 && o < 50
                      ? (h = 4)
                      : o >= 50 && (h = 5);
                    var u = h - 1;
                    if (1 === i) r = e.slice(-u);
                    else if (i === h) r = new Array(u).fill(c);
                    else {
                      var d = e.slice(-(h - i));
                      r = d.concat(new Array(u - d.length).fill(c));
                    }
                  }
                  return r.map(function (e) {
                    return e.amount
                      ? (0, l.Z)(
                          (0, l.Z)({}, e),
                          {},
                          {
                            name: decodeURIComponent(e.name),
                            avatar: e.avatar || j,
                          }
                        )
                      : {};
                  });
                }
              },
              handleCompensatesList: function (e, t) {
                if (!e || 0 === e.length) return {};
                var i = e.length,
                  a = null,
                  s = e.map(function (e) {
                    var i = t >= e.minAmount && t < e.maxAmount;
                    return (
                      i && (a = e),
                      (0, l.Z)((0, l.Z)({}, e), {}, { reached: i })
                    );
                  }),
                  n =
                    ((t - e[0].minAmount) /
                      (e[i - 1].maxAmount - e[0].minAmount)) *
                    100;
                return {
                  assistCompensates: s,
                  compensationCoupon: a,
                  compensationPercent: n,
                };
              },
              countDown: function () {
                var e = this.data.expireTime;
                if (!e)
                  return (
                    console.log("活动未开始"),
                    void this.setData({
                      hour: "24",
                      min: "00",
                      sec: "00",
                      ms: "0",
                    })
                  );
                var t = B.Z.countDown(e),
                  i = t.hour,
                  a = t.min,
                  s = t.sec,
                  n = t.end,
                  o = t.ms;
                if (n)
                  return (
                    clearTimeout(this.timer), void this.setData({ isEnd: !0 })
                  );
                this.setData({ hour: i, min: a, sec: s, ms: o }),
                  (this.timer = setTimeout(this.countDown, 100));
              },
              doAssistAction: function () {
                var e = this,
                  t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : M,
                  i =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : j,
                  a = this.data.orderNumber,
                  s = {
                    orderNumber: a,
                    name: encodeURIComponent(t),
                    avatar: i,
                  };
                (0, y.showLoading)(),
                  (0, R.JR)(s)
                    .then(function (t) {
                      var i = t.resultCode,
                        a = t.resultMessage,
                        s = t.extInfo || {};
                      if (1 === i) {
                        var n = t.assistAmount;
                        e.setData({ assistAmount: n || 0, popupExtInfo: s }),
                          e.getActivityInfo({
                            cb: function () {
                              e.toggleResultPopup();
                            },
                          });
                      } else e.showCommonDialog(a || "网络错误，请稍候再试~");
                    })
                    .catch(function () {
                      return e.showFailAction();
                    })
                    .finally(function () {
                      return (0, y.hideLoading)();
                    });
              },
              treasureBoxCountDown: function () {
                var e = (this.data.boxInfo || {}).availableTime;
                if (e) {
                  var t = B.Z.countDown(e),
                    i = t.hour,
                    a = t.min,
                    s = t.sec,
                    n = t.end,
                    o = t.ms;
                  if (n)
                    return (
                      clearTimeout(this.boxTimer),
                      void this.setData({
                        boxHour: "00",
                        boxMin: "00",
                        boxSec: "00",
                        boxMs: "0",
                        treasureBoxAvailable: !0,
                      })
                    );
                  this.setData({
                    boxHour: i,
                    boxMin: a,
                    boxSec: s,
                    boxMs: o,
                    treasureBoxAvailable: !1,
                  }),
                    (this.boxTimer = setTimeout(
                      this.treasureBoxCountDown,
                      100
                    ));
                } else console.log("treasure box is not available");
              },
              handleTreasureBoxClick: function () {
                var e = this;
                this.data.treasureBoxAvailable
                  ? this.openTreasureBox().then(
                      function (t) {
                        var i = t.unboxedAmount,
                          a = t.currentAmount,
                          s = t.sufficeAmount;
                        console.log(i, a, s),
                          e.setData({
                            unboxedAmount: i,
                            currentAmount: a,
                            sufficeAmount: s,
                          }),
                          e.getActivityInfo({
                            action: "handleTreasureBoxClick",
                            cb: function () {
                              e.toggleTreasureBoxPopup();
                            },
                          });
                      },
                      function (t) {
                        e.showCommonDialog(t || "网络错误，请稍候再试~");
                      }
                    )
                  : this.toggleTreasureBoxPopup();
              },
              openTreasureBox: function () {
                var e = { orderNumber: this.data.orderNumber };
                return new Promise(function (t, i) {
                  (0, R.QW)(e)
                    .then(function (e) {
                      var a = e.resultCode,
                        s = e.resultMessage;
                      if (1 === a) {
                        var n = e.unboxedAmount,
                          o = e.currentAmount,
                          c = e.sufficeAmount;
                        t({
                          unboxedAmount: n,
                          currentAmount: o,
                          sufficeAmount: c,
                        });
                      } else i(s || "网络错误，请稍候再试~");
                    })
                    .catch(function () {
                      i("网络错误，请稍候再试~");
                    });
                });
              },
              doWithdrawAction: function () {
                var e = this,
                  t = this.data,
                  i = t.orderNumber,
                  a = t.isTieyou,
                  s = { source: 2, ext: { orderNumber: i } };
                (0, R.Ct)(s)
                  .then(function (t) {
                    var i = t.resultCode,
                      s = t.resultMessage;
                    1 === i
                      ? e.showCommonDialog(
                          "提现成功，请到".concat(
                            a ? "铁友" : "智行",
                            " - 个人钱包中查看"
                          )
                        )
                      : e.showCommonDialog(s || "网络错误，请稍候再试~");
                  })
                  .catch(function () {})
                  .finally(function () {
                    e.getActivityInfo(), e.toggleWithdrawalPopup();
                  });
              },
              onCompensationCouponClick: function () {
                var e = this,
                  t = { orderNumber: this.data.orderNumber };
                (0, R.sh)(t)
                  .then(function (e) {
                    var t = e || {},
                      i = t.resultCode,
                      a = t.resultMessage;
                    1 === i
                      ? (0, y.showToast)(a || "领取成功！")
                      : (0, y.showToast)(a || "网络错误，请稍候再试~");
                  })
                  .catch(function () {
                    e.getActivityInfo();
                  });
              },
              onWithDrawTimeoutClick: function () {
                this.showCommonDialog(
                  "限出行后24小时内提现，超时、自愿退票则不可提现！航变退票可联系客服补偿50元~改签以新订单出行时间计算！"
                );
              },
              showFailAction: function (e) {
                var t = this;
                this.closeMask(),
                  this.setData({
                    mask: !0,
                    maskType: "fail",
                    showFailPopup: !0,
                    errorPopupMsg: e || "",
                  }),
                  setTimeout(function () {
                    t.setData({ transition: !0 });
                  }, 10);
              },
              hideFailAction: function () {
                this.setData({
                  mask: !1,
                  maskType: "",
                  showFailPopup: !1,
                  transition: !1,
                });
              },
              toggleAuthorityPopup: function () {
                var e = this,
                  t = this.data.showAuthorityPopup;
                this.setData({
                  mask: !t,
                  maskType: "authority",
                  showAuthorityPopup: !t,
                }),
                  setTimeout(function () {
                    e.setData({ transition: !t });
                  }, 10);
              },
              hideAuthorityPopup: function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : { currentTarget: { dataset: {} } },
                  t = e.currentTarget.dataset.type;
                this.setData({
                  mask: !1,
                  maskType: "",
                  showAuthorityPopup: !1,
                  transition: !1,
                }),
                  "reject" === t &&
                    this.checkUserInfoAuthority({
                      currentTarget: { dataset: {} },
                      detail: {},
                    });
              },
              toggleFirstAccessPopup: function () {
                var e = this,
                  t = this.data,
                  i = t.showFirstAccessPopup,
                  a = t.initAmount;
                this.setData({
                  mask: !i,
                  maskType: "cashAdd",
                  showFirstAccessPopup: !i,
                }),
                  setTimeout(function () {
                    e.setData({ transition: !i }),
                      i && (0, y.showToast)("已领取".concat(a, "元现金"));
                  }, 10);
              },
              toggleCashAddPopup: function () {
                var e = this,
                  t = this.data.showCashAddPopup;
                this.setData({
                  mask: !t,
                  maskType: "cashAdd",
                  showCashAddPopup: !t,
                }),
                  setTimeout(function () {
                    e.setData({ transition: !t });
                  }, 10);
              },
              toggleWithdrawalPopup: function () {
                var e = this,
                  t = this.data.showWithdrawalPopup;
                this.setData({
                  mask: !t,
                  maskType: "withdrawal",
                  showWithdrawalPopup: !t,
                }),
                  setTimeout(function () {
                    e.setData({ transition: !t });
                  }, 10);
              },
              toggleTreasureBoxPopup: function () {
                var e = this,
                  t = this.data,
                  i = t.showTreasureBoxPopup,
                  a = t.unboxedAmount;
                this.setData({
                  unboxedAmount: a ? (i ? 0 : a) : 0,
                  mask: !i,
                  maskType: "treasureBox",
                  showTreasureBoxPopup: !i,
                }),
                  setTimeout(function () {
                    e.setData({ transition: !i });
                  }, 10);
              },
              toggleRulePopup: function () {
                var e = this,
                  t = this.data.showRule;
                this.setData({ mask: !t, maskType: "rule", showRule: !t }),
                  setTimeout(function () {
                    e.setData({ transition: !t });
                  }, 10);
              },
              toggleAllFriends: function () {
                var e = this,
                  t = this.data.showAllFriends;
                this.setData({
                  mask: !t,
                  maskType: "friends",
                  showAllFriends: !t,
                }),
                  setTimeout(function () {
                    e.setData({ transition: !t });
                  }, 10);
              },
              toggleResultPopup: function () {
                var e = this,
                  t = this.data.showResult;
                this.setData({ mask: !t, maskType: "result", showResult: !t }),
                  setTimeout(function () {
                    e.setData({ transition: !t });
                  }, 10);
              },
              closeMask: function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : { currentTarget: { dataset: "" } },
                  t = e.currentTarget.dataset.type;
                "rule" === t
                  ? this.toggleRulePopup()
                  : "friends" === t
                  ? this.toggleAllFriends()
                  : "withdrawal" === t
                  ? this.toggleWithdrawalPopup()
                  : "cashAdd" === t
                  ? this.toggleCashAddPopup()
                  : "treasureBox" === t
                  ? this.toggleTreasureBoxPopup()
                  : "result" === t && this.toggleResultPopup();
              },
              toFlightIndex: function () {
                v.Z.relaunchHome("flight");
              },
              toMiniUrl: function (e) {
                if (e) {
                  var t = e;
                  "/" !== t.charAt(0) && (t = "/" + t);
                  try {
                    v.Z.isTabUrl(t)
                      ? f().reLaunch({ url: t })
                      : this.navigateTo({ url: t });
                  } catch (e) {
                    console.log(e), this.toFlightIndex();
                  }
                }
              },
              doReload: function () {
                this.hideFailAction(), this.getOpenId();
              },
              noop: function () {},
              chooseCity: function () {
                var e = this;
                A.Z.flightCity({
                  data: { title: "选择城市", intlHidden: !0 },
                  callback: function (t) {
                    var i = t.cityName,
                      a = t.cityCode;
                    e.setData({ departCity: i, departCityCode: a }),
                      e.getFlightList();
                  },
                });
              },
              choosePoiType: function (e) {
                var t = e.currentTarget.dataset.type,
                  i = this.data.poiType;
                console.log(t),
                  i !== t &&
                    (this.setData({ poiType: t }), this.getFlightList());
              },
              getFlightList: function () {
                var e = this,
                  t = this.data,
                  i = {
                    data: {
                      depCode: t.departCityCode,
                      searchPoiType: t.poiType,
                      segmentType: 1,
                      sort: 1,
                      departureDates: [{ startDate: _, endDate: S }],
                    },
                  };
                (0, D.g)(i)
                  .then(function (t) {
                    var i = t || {},
                      a = i.resultCode,
                      s = i.data.searchResult || [];
                    if (1 === a) {
                      var n = s
                        .filter(function (e) {
                          return "猜你喜欢" !== e.tag;
                        })
                        .slice(0, 10);
                      e.setData({
                        flightList: n.map(function (e) {
                          return (0,
                          l.Z)((0, l.Z)({}, e), {}, { week: I.Z.getWeekDay(e.goDateTime) });
                        }),
                      });
                    } else e.setData({ flightList: [] });
                  })
                  .catch(function (e) {
                    console.log(e);
                  });
              },
              toTejiaIndex: function () {
                var e = this.data,
                  t = e.departCity,
                  i = e.departCityCode,
                  a = "?&departureCityName="
                    .concat(t, "&departureCityCode=")
                    .concat(
                      i,
                      "&departureInternational=0&hideHeader=1&partner="
                    )
                    .concat(x.default.partner, "&fromPage=xcxjkjs");
                A.Z.twebview({
                  data: {
                    url: ""
                      .concat(
                        "https://market.suanya.com/activity/flight/201904tejia-index/"
                      )
                      .concat(a),
                  },
                });
              },
              toFlightFuzzySearch: function (e) {
                var t = e.currentTarget.dataset.index,
                  i = this.data.flightList[t],
                  a = i.depCityName,
                  s = i.depCityCode,
                  n = i.arrCityName,
                  o = i.arrCityCode,
                  c = i.backDateTime,
                  r = i.isDomestic ? 0 : 1,
                  l = c ? 1 : 0,
                  h = "?departureCityName="
                    .concat(a, "&departureCityCode=")
                    .concat(s, "&arrivalCityName=")
                    .concat(n, "&arrivalCityCode=")
                    .concat(o, "&departureInternational=")
                    .concat(0, "&arrivalInternational=")
                    .concat(r, "&round=")
                    .concat(l, "&hideHeader=1&partner=")
                    .concat(x.default.partner, "&fromPage=xcxjkjs");
                A.Z.twebview({
                  data: {
                    url: ""
                      .concat(
                        "https://market.suanya.com/activity/flight/2019tejiasearch/"
                      )
                      .concat(h),
                  },
                });
              },
              toFlightSpringActivity: function () {
                var e = this.data,
                  t = e.showResult,
                  i = e.orderNumber,
                  a = "https://".concat(
                    x.default.h5domain,
                    "/webapp/train/activity/20201209-ztrip-flight-2021-spring-festival-travel/?isHideNavBar=YES"
                  );
                this.ubtTrace(t ? 183852 : 183853, {
                  orderNumber: i,
                  cid: k.ZP.cid || "",
                }),
                  A.Z.twebview({ data: { url: a } }),
                  t &&
                    this.closeMask({
                      currentTarget: { dataset: { type: "result" } },
                    });
              },
              openCashBack: function (e) {
                var t = this,
                  i = this.data.orderNumber,
                  a = { orderNumber: e || i };
                (0, R.Ux)(a)
                  .then(function () {
                    return t.doReload();
                  })
                  .catch(function () {});
              },
              onPageScroll: function (e) {
                e &&
                  e.scrollTop > 280 &&
                  this.setData({ rewardViewAnchorHidden: !0 });
              },
              scrollToRewardView: function () {
                f().pageScrollTo({ scrollTop: 575, duration: 300 }),
                  this.setData({ rewardViewAnchorHidden: !0 });
              },
            },
            W =
              (0, Z.h)()(
                (a =
                  N()(H)(
                    (a = (function (e) {
                      (0, c.Z)(i, e);
                      var t = (0, r.Z)(i);
                      function i() {
                        return (0, n.Z)(this, i), t.apply(this, arguments);
                      }
                      return (
                        (0, o.Z)(i, [
                          {
                            key: "onShareAppMessage",
                            value: function (e) {
                              e.target || (e.target = { dataset: {} });
                              var t = e.target.dataset.func,
                                i = this.data,
                                a = i.isTieyou,
                                s = i.orderNumber;
                              return (
                                t && this[t] && this[t](),
                                {
                                  title: "我刚在".concat(
                                    a ? "铁友" : "智行",
                                    "上订完机票，快来帮我领取返现吧！"
                                  ),
                                  path: "/pages/activity/flight/kanjia/index?shareKey=".concat(
                                    s
                                  ),
                                  imageUrl:
                                    "https://images3.c-ctrip.com/zt/wechat/flight/flight_kanjia_3_".concat(
                                      a ? "ty" : "zx",
                                      ".png"
                                    ),
                                }
                              );
                            },
                          },
                          {
                            key: "render",
                            value: function () {
                              var e = this,
                                t = this.data,
                                i = t.isTieyou,
                                a = t.status,
                                s = t.canUseGetUserProfile,
                                n = t.compareResult,
                                o = t.otaComparePrices,
                                c = t.assistNum,
                                r = t.totalCouponsPrice,
                                l = t.receivedCouponList,
                                h = t.amount,
                                u = t.currentAmount,
                                d = t.amountStr,
                                p = t.currentPercent,
                                f = t.maxCashBackAmount,
                                w = t.issuerAvatar,
                                N = t.assistList,
                                Z = t.isLogin,
                                A = t.nextCashAssistNum,
                                v = t.canWithdraw,
                                y = t.isAssisted,
                                B = t.totalCashAmount,
                                b = t.hoverMessages,
                                k = t.departCity,
                                C = t.poiType,
                                T = t.poiTagArray,
                                P = t.flightList,
                                X = t.boxHour,
                                D = t.boxMin,
                                I = t.boxSec,
                                R = t.boxMs,
                                F = t.transition,
                                L = t.mask,
                                M = t.maskType,
                                j = t.showAllFriends,
                                _ = t.showRule,
                                S = t.ruleContent,
                                O = t.showWithdrawalPopup,
                                H = t.sufficeAmount,
                                W = t.showCashAddPopup,
                                z = t.cashAddAmount,
                                G = t.showResult,
                                K = t.assistAmount,
                                E = t.showAuthorityPopup,
                                Y = t.receivableCouponList,
                                q = t.showTreasureBoxPopup,
                                J = t.unboxedAmount,
                                Q = t.showFirstAccessPopup,
                                $ = t.showFailPopup,
                                ee = t.errorPopupMsg,
                                te = t.popupExtInfo,
                                ie = N.length || 0;
                              return (0, U.BX)(m.Block, {
                                children: [
                                  (0, U.BX)(m.View, {
                                    className: "top",
                                    children: [
                                      (0, U.tZ)(m.View, {
                                        className: "logo " + (i ? "ty" : "zx"),
                                      }),
                                      (0, U.tZ)(m.View, {
                                        className: "rule",
                                        id: "AeBC",
                                        onClick: this.toggleRulePopup,
                                        children: "活动\n规则",
                                      }),
                                      (0, U.tZ)(m.View, {
                                        className: "slogan",
                                      }),
                                    ],
                                  }),
                                  (0, U.BX)(m.View, {
                                    className: n ? "wrap-bijia" : "wrap",
                                    children: [
                                      (0, U.BX)(m.View, {
                                        className: "notice-new",
                                        children: [
                                          (0, U.BX)(m.View, {
                                            className: "notice-hd",
                                            children: [
                                              (0, U.tZ)(m.Icon, {
                                                className: "icon-coin",
                                              }),
                                              "截止昨日，共返现",
                                              (0, U.tZ)(m.Text, {
                                                className: "tyellow",
                                                children: B + "元",
                                              }),
                                            ],
                                          }),
                                          (0, U.tZ)(m.View, {
                                            className: "notice-list",
                                            children: (0, U.tZ)(m.Swiper, {
                                              className: "swiper-box",
                                              autoplay: "true",
                                              vertical: "true",
                                              interval: "3000",
                                              circular: "true",
                                              children:
                                                b &&
                                                b.map(function (e) {
                                                  return (0, U.tZ)(
                                                    m.Block,
                                                    {
                                                      children: (0, U.BX)(
                                                        m.SwiperItem,
                                                        {
                                                          className: "item",
                                                          id: "AeBD",
                                                          onClick: function (
                                                            e
                                                          ) {
                                                            e.stopPropagation();
                                                          },
                                                          catchMove: !0,
                                                          children: [
                                                            (0, U.tZ)(m.Image, {
                                                              className:
                                                                "avatar",
                                                              src: e.avatar,
                                                            }),
                                                            (0, U.BX)(m.View, {
                                                              className: "txt",
                                                              children: [
                                                                e.user,
                                                                "，邀请好友成功，获得了",
                                                                (0, U.BX)(
                                                                  m.Text,
                                                                  {
                                                                    className:
                                                                      "tyellow",
                                                                    children: [
                                                                      e.amount,
                                                                      "元",
                                                                    ],
                                                                  }
                                                                ),
                                                                "现金",
                                                              ],
                                                            }),
                                                          ],
                                                        }
                                                      ),
                                                    },
                                                    "index"
                                                  );
                                                }),
                                            }),
                                          }),
                                        ],
                                      }),
                                      n &&
                                        (0, U.BX)(m.View, {
                                          className: "bijia-box",
                                          children: [
                                            (0, U.tZ)(g.ZtRichText, {
                                              className: "tit",
                                              nodes: n,
                                            }),
                                            (0, U.BX)(m.View, {
                                              className: "bijia-bd",
                                              children: [
                                                (0, U.BX)(m.View, {
                                                  className: "item",
                                                  children: [
                                                    (0, U.tZ)(m.View, {
                                                      className: "price tred",
                                                      children:
                                                        o && o[0].amount,
                                                    }),
                                                    (0, U.tZ)(m.View, {
                                                      className: "txt",
                                                      children: o[0].name,
                                                    }),
                                                  ],
                                                }),
                                                (0, U.BX)(m.View, {
                                                  className: "item",
                                                  children: [
                                                    (0, U.tZ)(m.View, {
                                                      className: "price",
                                                      children: o[1].amount,
                                                    }),
                                                    (0, U.tZ)(m.View, {
                                                      className: "txt",
                                                      children: o[1].name,
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      l &&
                                        l.length > 0 &&
                                        c > 0 &&
                                        (0, U.BX)(m.View, {
                                          className: "main-box coupon-top",
                                          children: [
                                            c > 0 &&
                                              (0, U.BX)(m.View, {
                                                className: "tit",
                                                children: [
                                                  "成功助力" +
                                                    c +
                                                    "元，送你一张",
                                                  (0, U.tZ)(m.Text, {
                                                    className: "tred",
                                                    children: r + "元优惠券",
                                                  }),
                                                ],
                                              }),
                                            l.map(function (e) {
                                              return (0,
                                              U.BX)(m.View, { className: "coupon-big", children: [(0, U.tZ)(m.View, { className: "price", children: e.price }), (0, U.BX)(m.View, { className: "cont", children: [(0, U.tZ)(m.View, { className: "strong", children: e.promotionTitle }), (0, U.tZ)(m.View, { className: "txt", children: e.promotionDes })] })] }, "index");
                                            }),
                                            (0, U.tZ)(m.Button, {
                                              className: "btn-go",
                                              "data-ubt-key":
                                                "flt_kanjia3_dijiapiao",
                                              id: "AeBE",
                                              onClick: this.toFlightIndex,
                                              children: "发现惊喜低价机票",
                                            }),
                                          ],
                                        }),
                                      (0, U.BX)(m.View, {
                                        className: "main-box friend-box",
                                        children: [
                                          1 === a &&
                                            (0, U.tZ)(m.View, {
                                              className: "tit",
                                              children:
                                                "已满" +
                                                h +
                                                "，可提现到微信/支付宝",
                                            }),
                                          2 === a &&
                                            (0, U.tZ)(m.View, {
                                              className: "tit",
                                              children: "已提现到微信/支付宝",
                                            }),
                                          (1 === a || 2 === a) &&
                                            (0, U.tZ)(m.View, {
                                              className: "price",
                                              children: d,
                                            }),
                                          (0, U.BX)(m.View, {
                                            className: "friend-bd",
                                            children: [
                                              (0, U.tZ)(m.View, {
                                                className:
                                                  "friend-owen friend-list flex",
                                                children: (0, U.tZ)(m.View, {
                                                  className:
                                                    "item initiator flex",
                                                  children: (0, U.tZ)(m.Image, {
                                                    className: "avatar",
                                                    src: w,
                                                  }),
                                                }),
                                              }),
                                              (0, U.tZ)(m.View, {
                                                className: "invite-text",
                                                children: "我正在参加".concat(
                                                  x.default.isTieyou
                                                    ? "铁友"
                                                    : "智行",
                                                  "机票砍价活动，快来帮我砍一刀！"
                                                ),
                                              }),
                                            ],
                                          }),
                                          (-1 === a || 2 === a) &&
                                            (0, U.tZ)(m.View, {
                                              className: "assist-btn",
                                              children: (0, U.tZ)(m.Button, {
                                                className:
                                                  "btn-invite disabled",
                                                children: "活动已结束",
                                              }),
                                            }),
                                          0 === a &&
                                            (0, U.tZ)(m.View, {
                                              className: "assist-btn",
                                              children: (0, U.BX)(m.Block, {
                                                children: [
                                                  !Z &&
                                                    (0, U.tZ)(m.Block, {
                                                      children: (0, U.tZ)(
                                                        m.Button,
                                                        {
                                                          className:
                                                            "btn-invite",
                                                          id: "AeBF",
                                                          onClick:
                                                            this
                                                              .getPhoneNumberAction,
                                                          children:
                                                            "登录为TA助力",
                                                        }
                                                      ),
                                                    }),
                                                  Z &&
                                                    (0, U.BX)(m.Block, {
                                                      children: [
                                                        !y &&
                                                          !s &&
                                                          (0, U.tZ)(m.Button, {
                                                            className:
                                                              "btn-invite",
                                                            openType:
                                                              "getUserInfo",
                                                            lang: "zh_CN",
                                                            onGetuserinfo:
                                                              this
                                                                .checkUserInfoAuthority,
                                                            children:
                                                              "开始助力返现",
                                                          }),
                                                        !y &&
                                                          s &&
                                                          (0, U.tZ)(m.Button, {
                                                            className:
                                                              "btn-invite",
                                                            id: "AeBG",
                                                            onClick:
                                                              this
                                                                .getUserProfileAction,
                                                            children:
                                                              "开始助力返现",
                                                          }),
                                                        y &&
                                                          (0, U.tZ)(m.Button, {
                                                            className:
                                                              "btn-invite",
                                                            "data-ubt-key":
                                                              "flt_kanjia3_ercifenxiang",
                                                            openType: "share",
                                                            children:
                                                              "邀请好友 为TA助力",
                                                          }),
                                                      ],
                                                    }),
                                                ],
                                              }),
                                            }),
                                        ],
                                      }),
                                      (0, U.tZ)(m.View, {
                                        className: "tit-join",
                                      }),
                                      (0, U.tZ)(m.View, {
                                        className: "white-box intr-box",
                                        children: (0, U.BX)(m.View, {
                                          className: "step-box",
                                          children: [
                                            (0, U.BX)(m.View, {
                                              className: "item",
                                              children: [
                                                (0, U.tZ)(m.View, {
                                                  className: "step",
                                                  children: "1",
                                                }),
                                                (0, U.BX)(m.View, {
                                                  className: "txt",
                                                  children: [
                                                    "在" +
                                                      (i ? "铁友" : "智行"),
                                                    (0, U.tZ)(m.Text, {
                                                      className: "tred",
                                                      children: "国内机票",
                                                    }),
                                                    "\n购买任意机票",
                                                  ],
                                                }),
                                              ],
                                            }),
                                            (0, U.BX)(m.View, {
                                              className: "item",
                                              children: [
                                                (0, U.tZ)(m.View, {
                                                  className: "step",
                                                  children: "2",
                                                }),
                                                (0, U.tZ)(m.View, {
                                                  className: "txt",
                                                  children:
                                                    "支付订单成功后\n分享开启返现",
                                                }),
                                              ],
                                            }),
                                            (0, U.BX)(m.View, {
                                              className: "item",
                                              children: [
                                                (0, U.tZ)(m.View, {
                                                  className: "step",
                                                  children: "3",
                                                }),
                                                (0, U.tZ)(m.View, {
                                                  className: "txt",
                                                  children:
                                                    "邀请好友助力\n提取现金",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      }),
                                      (0, U.BX)(m.View, {
                                        className: "white-box flt-recom",
                                        children: [
                                          (0, U.tZ)(m.View, {
                                            className: "wtit",
                                            children:
                                              (i ? "铁友" : "智行") +
                                              "机票 全网低价",
                                          }),
                                          (0, U.BX)(m.View, {
                                            className: "city",
                                            id: "AeBH",
                                            onClick: this.chooseCity,
                                            children: [
                                              k + "出发",
                                              (0, U.tZ)(m.Text, {
                                                className:
                                                  "ifont-more iconfont",
                                              }),
                                            ],
                                          }),
                                          (0, U.tZ)(m.View, {
                                            className: "flt-recom-tag",
                                            children:
                                              T &&
                                              T.map(function (t) {
                                                return (0,
                                                U.tZ)(m.View, { className: "item " + (t.type === C ? "cur" : ""), "data-type": t.type, id: "AeBI", onClick: e.choosePoiType, children: t.name }, "index");
                                              }),
                                          }),
                                          (0, U.tZ)(m.View, {
                                            className: "flt-recom-list",
                                            children:
                                              P &&
                                              P.map(function (t, i) {
                                                return (0,
                                                U.BX)(m.View, { className: "item", children: [(0, U.BX)(m.View, { className: "cont", children: [(0, U.BX)(m.View, { className: "fromto", children: [t.depCityName + "-" + t.arrCityName, !t.backDateTime && (0, U.tZ)(m.Text, { className: "tag", children: "单程" })] }), (0, U.tZ)(m.View, { className: "date", children: t.goDateTime + " " + t.week })] }), (0, U.BX)(m.View, { className: "price", children: [t.price, !t.isDomestic && (0, U.tZ)(m.Text, { className: "em", children: "含税" })] }), (0, U.BX)(m.Button, { className: "btn-more", "data-index": i, id: "AeBJ", onClick: e.toFlightFuzzySearch, children: ["更多日期", (0, U.tZ)(m.Text, { className: "ifont-more iconfont" })] })] }, "index");
                                              }),
                                          }),
                                          (0, U.BX)(m.View, {
                                            className: "flt-recom-more",
                                            id: "AeBK",
                                            onClick: this.toTejiaIndex,
                                            children: [
                                              "查看更多特价机票",
                                              (0, U.tZ)(m.Text, {
                                                className: "ifont-arr iconfont",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  L &&
                                    (0, U.tZ)(m.View, {
                                      className:
                                        "pop-mask " + (F ? "active" : ""),
                                      "data-type": M,
                                      id: "AeBL",
                                      onClick: function (t) {
                                        t.stopPropagation(), e.closeMask(t);
                                      },
                                      catchMove: !0,
                                    }),
                                  j &&
                                    (0, U.BX)(m.View, {
                                      className:
                                        "pop-mid pop-yellow pop-friend",
                                      id: "AeBM",
                                      onClick: function (e) {
                                        e.stopPropagation();
                                      },
                                      catchMove: !0,
                                      children: [
                                        (0, U.tZ)(m.View, {
                                          className: "pop-yellow-hd",
                                          children: (0, U.tZ)(m.View, {
                                            className: "tit",
                                            children: "全部好友助力",
                                          }),
                                        }),
                                        (0, U.tZ)(m.View, {
                                          className:
                                            "white-box pop-friend-list",
                                          children: (0, U.BX)(m.ScrollView, {
                                            scrollY: !0,
                                            children: [
                                              (0, U.tZ)(m.View, {
                                                className: "total",
                                                children:
                                                  "已有" + ie + "位朋友助力",
                                              }),
                                              N &&
                                                N.map(function (e) {
                                                  return (0,
                                                  U.BX)(m.View, { className: "item", children: [e.best && (0, U.tZ)(m.Icon, { className: "icon-crown" }), (0, U.tZ)(m.Image, { className: "avatar", src: e.avatar }), (0, U.BX)(m.View, { className: "cont", children: [(0, U.BX)(m.View, { className: "tit", children: [e.name, e.best && (0, U.tZ)(m.Text, { className: "tag", children: "最佳老铁" })] }), (0, U.tZ)(m.View, { className: "txt", children: e.assistTime })] }), (0, U.tZ)(m.View, { className: "rbox", children: "+" + e.amount + "元" })] }, "index");
                                                }),
                                            ],
                                          }),
                                        }),
                                        (0, U.tZ)(m.Text, {
                                          className: "ifont-closed iconfont",
                                          id: "AeBN",
                                          onClick: this.toggleAllFriends,
                                        }),
                                      ],
                                    }),
                                  _ &&
                                    (0, U.BX)(m.View, {
                                      className: "pop-mid pop-yellow pop-rule",
                                      id: "AeBO",
                                      onClick: function (e) {
                                        e.stopPropagation();
                                      },
                                      catchMove: !0,
                                      children: [
                                        (0, U.tZ)(m.View, {
                                          className: "pop-yellow-hd",
                                          children: (0, U.tZ)(m.View, {
                                            className: "tit",
                                            children: "活动规则",
                                          }),
                                        }),
                                        (0, U.tZ)(m.View, {
                                          className: "white-box pop-rule-bd",
                                          children: (0, U.tZ)(m.ScrollView, {
                                            scrollY: !0,
                                            children: (0, U.tZ)(g.ZtRichText, {
                                              className: "txt",
                                              nodes: S,
                                            }),
                                          }),
                                        }),
                                        (0, U.tZ)(m.Text, {
                                          className: "ifont-closed iconfont",
                                          id: "AeBP",
                                          onClick: this.toggleRulePopup,
                                        }),
                                      ],
                                    }),
                                  O &&
                                    (0, U.BX)(m.View, {
                                      className:
                                        "pop-mid pop-yellow pop-general",
                                      id: "AeBQ",
                                      onClick: function (e) {
                                        e.stopPropagation();
                                      },
                                      catchMove: !0,
                                      children: [
                                        v &&
                                          (0, U.BX)(m.Block, {
                                            children: [
                                              (0, U.BX)(m.View, {
                                                className:
                                                  "white-box pop-withdraw",
                                                children: [
                                                  (0, U.tZ)(m.View, {
                                                    className: "tit",
                                                  }),
                                                  (0, U.tZ)(m.View, {
                                                    className: "bprice",
                                                    children: d,
                                                  }),
                                                ],
                                              }),
                                              (0, U.tZ)(m.Button, {
                                                className: "btn-invite s",
                                                id: "AeBR",
                                                onClick: this.doWithdrawAction,
                                                children: "提现到微信/支付宝",
                                              }),
                                              (0, U.tZ)(m.View, {
                                                className: "info",
                                                children:
                                                  "提现后到「" +
                                                  (i ? "铁友" : "智行") +
                                                  " - 个人钱包」查看",
                                              }),
                                            ],
                                          }),
                                        !v &&
                                          (0, U.BX)(m.Block, {
                                            children: [
                                              (0, U.BX)(m.View, {
                                                className:
                                                  "white-box pop-withdraw",
                                                children: [
                                                  (0, U.BX)(m.View, {
                                                    className: "bprice",
                                                    children: [
                                                      u,
                                                      (0, U.tZ)(m.Text, {
                                                        className: "tag",
                                                        children: "还差￥" + H,
                                                      }),
                                                    ],
                                                  }),
                                                  (0, U.tZ)(m.View, {
                                                    className: "txt",
                                                    children:
                                                      "满" +
                                                      h +
                                                      "元可提现到微信/支付宝",
                                                  }),
                                                ],
                                              }),
                                              (0, U.tZ)(m.Button, {
                                                className: "btn-invite s",
                                                "data-ubt-key":
                                                  "flt_kanjia3_yaoqing",
                                                "data-func":
                                                  "toggleWithdrawalPopup",
                                                openType: "share",
                                                children:
                                                  "邀请" +
                                                  A +
                                                  "位好友 再领一次现金",
                                              }),
                                            ],
                                          }),
                                        (0, U.tZ)(m.Text, {
                                          className: "ifont-closed iconfont",
                                          id: "AeBS",
                                          onClick: this.toggleWithdrawalPopup,
                                        }),
                                      ],
                                    }),
                                  W &&
                                    (0, U.BX)(m.View, {
                                      className:
                                        "pop-mid pop-yellow pop-general",
                                      children: [
                                        (0, U.BX)(m.View, {
                                          className: "white-box pop-withdraw",
                                          children: [
                                            (0, U.BX)(m.View, {
                                              className: "bprice",
                                              children: [
                                                u,
                                                (0, U.tZ)(m.Text, {
                                                  className: "tag",
                                                  children: "+" + z + "元",
                                                }),
                                              ],
                                            }),
                                            (0, U.tZ)(m.View, {
                                              className: "tit2",
                                              children:
                                                "邀请好友获得的现金已到账",
                                            }),
                                            (0, U.BX)(m.View, {
                                              className: "progress-box",
                                              children: [
                                                (0, U.tZ)(m.View, {
                                                  className: "progress-bar",
                                                  children: (0, U.tZ)(m.View, {
                                                    className: "line",
                                                    style: "width:" + p + "%",
                                                    children: (0, U.BX)(
                                                      m.View,
                                                      {
                                                        className: "tag",
                                                        children: [
                                                          "提现还差",
                                                          (0, U.tZ)(m.Text, {
                                                            className: "txt",
                                                            children: H,
                                                          }),
                                                        ],
                                                      }
                                                    ),
                                                  }),
                                                }),
                                                (0, U.tZ)(m.View, {
                                                  className: "t",
                                                  children: "¥" + f,
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, U.tZ)(m.Button, {
                                          className: "btn-invite s",
                                          "data-ubt-key": "flt_kanjia3_yaoqing",
                                          "data-func": "toggleFirstAccessPopup",
                                          openType: "share",
                                          children:
                                            "邀请" + A + "位好友 再领一次现金",
                                        }),
                                        (0, U.tZ)(m.View, {
                                          className: "info",
                                          children:
                                            "提现后到「" +
                                            (i ? "铁友" : "智行") +
                                            " - 个人钱包」查看",
                                        }),
                                        (0, U.tZ)(m.Text, {
                                          className: "ifont-closed iconfont",
                                          id: "AeBT",
                                          onClick: this.toggleCashAddPopup,
                                        }),
                                      ],
                                    }),
                                  G &&
                                    (0, U.BX)(m.View, {
                                      className: "pop-mid pop-suc",
                                      id: "AeBU",
                                      onClick: function (e) {
                                        e.stopPropagation();
                                      },
                                      catchMove: !0,
                                      children: [
                                        (0, U.BX)(m.View, {
                                          className: " pop-yellow pop-general ",
                                          children: [
                                            (0, U.BX)(m.View, {
                                              className: "white-box pop-login",
                                              children: [
                                                (0, U.tZ)(m.Image, {
                                                  className: "avatar",
                                                  src: w,
                                                }),
                                                (0, U.BX)(m.View, {
                                                  className: "progress-box",
                                                  children: [
                                                    (0, U.tZ)(m.View, {
                                                      className: "result",
                                                      children:
                                                        "成功助力" + K + "元",
                                                    }),
                                                    (0, U.tZ)(m.View, {
                                                      className: "progress-bar",
                                                      children: (0, U.tZ)(
                                                        m.View,
                                                        {
                                                          className: "line",
                                                          style:
                                                            "width:" + p + "%",
                                                        }
                                                      ),
                                                    }),
                                                    (0, U.tZ)(m.View, {
                                                      className: "t",
                                                      children: "¥" + f,
                                                    }),
                                                  ],
                                                }),
                                                (0, U.BX)(m.View, {
                                                  className: "coupon-box",
                                                  children: [
                                                    (0, U.BX)(m.View, {
                                                      className: "tit",
                                                      children: [
                                                        "购票后你也可以领",
                                                        (0, U.tZ)(m.Text, {
                                                          className: "tred",
                                                          children:
                                                            f + "元现金",
                                                        }),
                                                      ],
                                                    }),
                                                    l &&
                                                      l.length > 0 &&
                                                      (0, U.tZ)(m.Block, {
                                                        children: l.map(
                                                          function (e) {
                                                            return (0, U.BX)(
                                                              m.View,
                                                              {
                                                                className:
                                                                  "coupon-done",
                                                                children: [
                                                                  (0, U.tZ)(
                                                                    m.View,
                                                                    {
                                                                      className:
                                                                        "tag",
                                                                      children:
                                                                        "已获得",
                                                                    }
                                                                  ),
                                                                  (0, U.tZ)(
                                                                    m.View,
                                                                    {
                                                                      className:
                                                                        "price",
                                                                      children:
                                                                        e.price,
                                                                    }
                                                                  ),
                                                                  (0, U.BX)(
                                                                    m.View,
                                                                    {
                                                                      className:
                                                                        "cont",
                                                                      children:
                                                                        [
                                                                          (0,
                                                                          U.tZ)(
                                                                            m.View,
                                                                            {
                                                                              className:
                                                                                "strong",
                                                                              children:
                                                                                e.promotionTitle,
                                                                            }
                                                                          ),
                                                                          (0,
                                                                          U.tZ)(
                                                                            m.View,
                                                                            {
                                                                              className:
                                                                                "txt",
                                                                              children:
                                                                                e.promotionDes,
                                                                            }
                                                                          ),
                                                                        ],
                                                                    }
                                                                  ),
                                                                ],
                                                              },
                                                              "index"
                                                            );
                                                          }
                                                        ),
                                                      }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            (0, U.tZ)(m.Button, {
                                              className: "btn-invite",
                                              "data-ubt-key":
                                                "flt_kanjia3_jian20",
                                              id: "AeBV",
                                              onClick: this.toFlightIndex,
                                              children:
                                                l && l.length > 0
                                                  ? "买机票立减" + l[0].price
                                                  : "去买机票",
                                            }),
                                          ],
                                        }),
                                        te && te.imageUrl
                                          ? (0, U.tZ)(m.View, {
                                              className: "pop-suc-botm",
                                              style:
                                                "background-image: url(".concat(
                                                  te.imageUrl,
                                                  ")"
                                                ),
                                              id: "AeBW",
                                              onClick: this.toMiniUrl.bind(
                                                this,
                                                te.toUrl
                                              ),
                                            })
                                          : null,
                                        (0, U.tZ)(m.Text, {
                                          className: "ifont-closed iconfont",
                                          id: "AeBX",
                                          onClick: this.toggleResultPopup,
                                        }),
                                      ],
                                    }),
                                  E &&
                                    (0, U.BX)(m.View, {
                                      className:
                                        "pop-mid pop-yellow pop-general",
                                      id: "AeBY",
                                      onClick: function (e) {
                                        e.stopPropagation();
                                      },
                                      catchMove: !0,
                                      children: [
                                        (0, U.BX)(m.View, {
                                          className: "white-box pop-login",
                                          children: [
                                            (0, U.tZ)(m.Image, {
                                              className: "avatar",
                                              src: w,
                                            }),
                                            (0, U.BX)(m.View, {
                                              className: "progress-box",
                                              children: [
                                                (0, U.tZ)(m.View, {
                                                  className: "progress-bar",
                                                  children: (0, U.tZ)(m.View, {
                                                    className: "line",
                                                    style: "width:" + p + "%",
                                                    children: (0, U.BX)(
                                                      m.View,
                                                      {
                                                        className: "tag",
                                                        children: [
                                                          "提现还差",
                                                          (0, U.tZ)(m.Text, {
                                                            className: "txt",
                                                            children: H,
                                                          }),
                                                        ],
                                                      }
                                                    ),
                                                  }),
                                                }),
                                                (0, U.tZ)(m.View, {
                                                  className: "t",
                                                  children: "¥" + f,
                                                }),
                                              ],
                                            }),
                                            (0, U.tZ)(m.View, {
                                              className: "tit",
                                              children:
                                                "帮我助力，助我领" +
                                                f +
                                                "元现金",
                                            }),
                                            Y &&
                                              Y.length > 0 &&
                                              (0, U.tZ)(m.Block, {
                                                children: Y.map(function (e) {
                                                  return (0,
                                                  U.BX)(m.View, { className: "coupon-get", children: [(0, U.tZ)(m.View, { className: "price", children: e.price }), (0, U.BX)(m.View, { className: "cont", children: [(0, U.tZ)(m.View, { className: "strong", children: e.promotionTitle }), (0, U.tZ)(m.View, { className: "txt", children: "助力直接领" })] })] }, "index");
                                                }),
                                              }),
                                          ],
                                        }),
                                        s &&
                                          (0, U.tZ)(m.Button, {
                                            className: "btn-invite s",
                                            id: "AeBZ",
                                            onClick: this.getUserProfileAction,
                                            children:
                                              "还差一步，授权头像&用户名",
                                          }),
                                        !s &&
                                          (0, U.tZ)(m.Button, {
                                            className: "btn-invite s",
                                            openType: "getUserInfo",
                                            lang: "zh_CN",
                                            onGetuserinfo:
                                              this.checkUserInfoAuthority,
                                            children:
                                              "还差一步，授权头像&用户名",
                                          }),
                                        (0, U.tZ)(m.Text, {
                                          className: "ifont-closed iconfont",
                                          "data-type": "reject",
                                          id: "AeBa",
                                          onClick: this.hideAuthorityPopup,
                                        }),
                                      ],
                                    }),
                                  q &&
                                    (0, U.BX)(m.View, {
                                      className:
                                        "pop-mid pop-yellow pop-general pop-baoxiang",
                                      id: "AeBb",
                                      onClick: function (e) {
                                        e.stopPropagation();
                                      },
                                      catchMove: !0,
                                      children: [
                                        J
                                          ? (0, U.BX)(m.Block, {
                                              children: [
                                                (0, U.BX)(m.View, {
                                                  className:
                                                    "white-box pop-treasure",
                                                  children: [
                                                    (0, U.tZ)(m.View, {
                                                      className: "tit",
                                                    }),
                                                    (0, U.tZ)(m.View, {
                                                      className: "txt",
                                                      children:
                                                        "+" +
                                                        J +
                                                        "元存入现金账户",
                                                    }),
                                                    (0, U.BX)(m.View, {
                                                      className: "progress-box",
                                                      children: [
                                                        (0, U.tZ)(m.View, {
                                                          className:
                                                            "progress-bar",
                                                          children: (0, U.tZ)(
                                                            m.View,
                                                            {
                                                              className: "line",
                                                              style:
                                                                "width:" +
                                                                p +
                                                                "%",
                                                              children: (0,
                                                              U.BX)(m.View, {
                                                                className:
                                                                  "tag",
                                                                children: [
                                                                  "提现还差",
                                                                  (0, U.tZ)(
                                                                    m.Text,
                                                                    {
                                                                      className:
                                                                        "txt",
                                                                      children:
                                                                        H,
                                                                    }
                                                                  ),
                                                                ],
                                                              }),
                                                            }
                                                          ),
                                                        }),
                                                        (0, U.tZ)(m.View, {
                                                          className: "t",
                                                          children: "¥" + f,
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                                (0, U.tZ)(m.Button, {
                                                  className: "btn-invite s",
                                                  "data-ubt-key":
                                                    "flt_kanjia3_yaoqing",
                                                  "data-func":
                                                    "toggleTreasureBoxPopup",
                                                  openType: "share",
                                                  children:
                                                    "邀请" +
                                                    A +
                                                    "位好友 再领一次现金",
                                                }),
                                                (0, U.tZ)(m.View, {
                                                  className: "wtxt",
                                                  children:
                                                    "1小时后可再来领宝箱喔",
                                                }),
                                              ],
                                            })
                                          : (0, U.BX)(m.Block, {
                                              children: [
                                                (0, U.BX)(m.View, {
                                                  className:
                                                    "white-box pop-treasure",
                                                  children: [
                                                    (0, U.BX)(m.View, {
                                                      className: "count-down2",
                                                      children: [
                                                        (0, U.tZ)(m.Text, {
                                                          className: "no",
                                                          children: X,
                                                        }),
                                                        ":",
                                                        (0, U.tZ)(m.Text, {
                                                          className: "no",
                                                          children: D,
                                                        }),
                                                        ":",
                                                        (0, U.tZ)(m.Text, {
                                                          className: "no",
                                                          children: I,
                                                        }),
                                                        ".",
                                                        (0, U.tZ)(m.Text, {
                                                          className: "no",
                                                          children: R,
                                                        }),
                                                        "后领宝箱",
                                                      ],
                                                    }),
                                                    (0, U.BX)(m.View, {
                                                      className: "bprice",
                                                      children: [
                                                        u,
                                                        (0, U.tZ)(m.Text, {
                                                          className: "tag",
                                                          children:
                                                            "还差￥" + H,
                                                        }),
                                                      ],
                                                    }),
                                                    (0, U.tZ)(m.View, {
                                                      className: "txt",
                                                      children:
                                                        "满" +
                                                        h +
                                                        "元可提现到微信/支付宝",
                                                    }),
                                                  ],
                                                }),
                                                (0, U.tZ)(m.Button, {
                                                  className: "btn-invite s",
                                                  "data-ubt-key":
                                                    "flt_kanjia3_yaoqing",
                                                  "data-func":
                                                    "toggleTreasureBoxPopup",
                                                  openType: "share",
                                                  children:
                                                    "邀请" +
                                                    A +
                                                    "位好友 再领一次现金",
                                                }),
                                              ],
                                            }),
                                        (0, U.tZ)(m.Text, {
                                          className: "ifont-closed iconfont",
                                          id: "AeBc",
                                          onClick: this.toggleTreasureBoxPopup,
                                        }),
                                      ],
                                    }),
                                  Q &&
                                    (0, U.BX)(m.View, {
                                      className: "pop-mid pop-redbox",
                                      children: [
                                        (0, U.tZ)(m.View, {
                                          className:
                                            "pop-redhd " + (i ? "ty" : "zx"),
                                        }),
                                        (0, U.BX)(m.View, {
                                          className: "pop-redbd",
                                          children: [
                                            (0, U.tZ)(m.View, {
                                              className: "tit",
                                            }),
                                            (0, U.tZ)(m.View, {
                                              className: "txt",
                                              children: "可提现到微信/支付宝",
                                            }),
                                            (0, U.tZ)(m.Button, {
                                              className: "btn-get",
                                              "data-ubt-key":
                                                "flt_kanjia3_lingxianjin",
                                              id: "AeBd",
                                              onClick:
                                                this.toggleFirstAccessPopup,
                                              children: "立即领现金",
                                            }),
                                          ],
                                        }),
                                        (0, U.tZ)(m.Text, {
                                          className: "ifont-closed iconfont",
                                          id: "AeBe",
                                          onClick: this.toggleFirstAccessPopup,
                                        }),
                                      ],
                                    }),
                                  !1,
                                  $ &&
                                    (0, U.BX)(m.View, {
                                      className: "fail-pop",
                                      id: "AeBf",
                                      onClick: function (e) {
                                        e.stopPropagation();
                                      },
                                      catchMove: !0,
                                      children: [
                                        (0, U.tZ)(m.View, {
                                          className: "title",
                                          children:
                                            ee || "网络出了问题，请稍候再试",
                                        }),
                                        (0, U.BX)(m.View, {
                                          className: "btnbox",
                                          children: [
                                            (0, U.tZ)(m.View, {
                                              className: "left",
                                              id: "AeBg",
                                              onClick: this.doReload,
                                              children: "点击重试",
                                            }),
                                            (0, U.tZ)(m.View, {
                                              className: "right",
                                              id: "AeBh",
                                              onClick: this.toFlightIndex,
                                              children: "去买机票",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  (0, U.tZ)(V.Z, {
                                    ref: function (t) {
                                      e.onDialogAttach(t);
                                    },
                                  }),
                                ],
                              });
                            },
                          },
                        ]),
                        i
                      );
                    })(d.default.Component))
                  ) || a)
              ) || a;
          (W.enableShareAppMessage = !0),
            Page(
              (0, s.createPageConfig)(
                W,
                "pages/activity/flight/kanjia/index",
                { root: { cn: [] } },
                {
                  navigationBarBackgroundColor: "#fff",
                  navigationBarTitleText: "",
                  navigationBarTextStyle: "black",
                  backgroundColorBottom: "#FE9232",
                  backgroundColorTop: "#EA532F",
                } || {}
              )
            );
        },
      },
      function (e) {
        e.O(0, [3127, 19559, 11216, 68592], function () {
          return (function (t) {
            return e((e.s = t));
          })(64312);
        }),
          e.O();
      },
    ]);
})();
