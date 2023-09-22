!(function () {
  "use strict";
  require("../sub-vendors.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [18494],
      {
        34741: function (e, t, i) {
          var a,
            n = i(32180),
            s = i(57042),
            c = i(24460),
            r = i(21867),
            o = i(86066),
            l = i(90983),
            d = i(298),
            h = i(52500),
            m = i(71515),
            u = i(92954),
            p = i.n(u),
            g = i(48792),
            w = i.n(g),
            N = i(79792),
            f = i(13025),
            y = i(3205),
            V = i(79295),
            b = i(18783),
            x = i(79910),
            Z = i(49120),
            C = i(17782),
            T = i(5050),
            v = [
              {
                code: "speedUp30",
                expireTime: "2020.09.06",
                icon: "https://images3.c-ctrip.com/ztrip/img/img_grab@3x.png",
                rewardValue: 3e3,
                status: 0,
                subTitle: "可抵扣一次高速抢票",
                summary: "火车票".concat(T.Z.SPEED_PACK),
                title: "火车票".concat(T.Z.SPEED_PACK),
                unit: "元",
                value: "30",
                className: "train",
              },
              {
                code: "grabToken",
                expireTime: "2021.08.07",
                icon: "https://images3.c-ctrip.com/ztrip/img/img_grab@3x.png",
                rewardValue: 5e3,
                status: 0,
                subTitle: "抢票最高速，有票优先出",
                summary: "火车票抢票券",
                title: "火车票VIP抢票券",
                unit: "元",
                value: "50",
                className: "train",
              },
              {
                code: "newGuesthotelCoupon",
                expireTime: "2020.11.05",
                icon: "https://images3.c-ctrip.com/ztrip/img/img_hotel@3x.png",
                rewardValue: 400,
                status: 1,
                subTitle: "全日房订单满100元减10元",
                summary: "酒店优惠券",
                tag: "新客折扣",
                tagList: [{ newDiscount: "新客折扣" }],
                title: "酒店优惠券",
                unit: "元",
                value: "10",
                className: "hotel",
              },
              {
                code: "hotelCoupon1804",
                expireTime: "2020.11.05",
                icon: "https://images3.c-ctrip.com/ztrip/img/img_hotel@3x.png",
                rewardValue: 500,
                status: 1,
                subTitle: "全日房订单满50元减5元",
                summary: "酒店优惠券",
                title: "酒店优惠券",
                unit: "元",
                value: "5",
                className: "hotel",
              },
              {
                code: "flightCoupon1804",
                expireTime: "2020.11.05",
                icon: "https://images3.c-ctrip.com/ztrip/img/img_flight@3x.png",
                rewardValue: 500,
                status: 1,
                subTitle: "用于抵扣机票订单金额",
                summary: "机票优惠券",
                title: "机票优惠券",
                unit: "元",
                value: "5",
                className: "flight",
              },
              {
                code: "flightCoupon",
                expireTime: "2020.11.05",
                icon: "https://images3.c-ctrip.com/ztrip/img/img_flight@3x.png",
                rewardValue: 1e3,
                status: 1,
                subTitle: "用于抵扣机票订单金额",
                summary: "机票优惠券",
                title: "机票优惠券",
                unit: "元",
                value: "10",
                className: "flight",
              },
              {
                code: "ticketShopCoupon5",
                expireTime: "2020.11.05",
                icon: "https://images3.c-ctrip.com/ztrip/img/imgredeem.png",
                rewardValue: 500,
                status: 1,
                subTitle: "500积分可兑换5元",
                summary: "门票优惠券",
                title: "门票优惠券",
                unit: "元",
                value: "5",
                className: "ticket",
              },
              {
                code: "intelHotelOrderPrice20",
                expireTime: "2020.11.05",
                icon: "https://images3.c-ctrip.com/ztrip/img/img_hotel@3x.png",
                rewardValue: 2e3,
                status: 0,
                subTitle: "订单满21元减20元",
                summary: "海外酒店优惠券",
                title: "海外酒店优惠券",
                unit: "元",
                value: "20",
                className: "ticket",
              },
              {
                code: "car",
                expireTime: "2020.11.05",
                icon: "https://images3.c-ctrip.com/ztrip/member/202005/background.png",
                rewardValue: 100,
                status: 1,
                subTitle: "100积分可兑换1元",
                summary: "汽车优惠券",
                title: "汽车票优惠券",
                unit: "元",
                value: "1",
                className: "bus",
              },
            ],
            B = i(81957),
            S = i(48813),
            I = {
              pageId: N.default.isTieyou ? "10650040043" : "10650044130",
              data: {
                isTieyou: N.default.isTieyou,
                isIPhoneX: x.Z.isIPhoneX(),
                isLogin: !1,
                creditInfo: null,
                totalCredit: 0,
                attendanceTodayFlag: !1,
                consequentDay: 0,
                attendanceContent: "",
                attendanceValue: 0,
                attendanceWeekEntityList: [
                  { className: "", credit: 2 },
                  { className: "", credit: 4 },
                  { className: "", credit: 7 },
                  { className: "", credit: 10 },
                  { className: "", credit: 15 },
                  { className: "", credit: 20 },
                  { className: "last", credit: "" },
                ],
                couponList: [
                  {
                    code: "flightAttendance",
                    expireTime: "2020.11.05",
                    needCredit: 3e3,
                    price: 30,
                    title: "国内机票立减券",
                    type: 2,
                  },
                  {
                    code: "innerHotelAttendance",
                    expireTime: "2020.11.05",
                    needCredit: 3e3,
                    price: 30,
                    title: "国内酒店立减券",
                    type: 2,
                  },
                ],
                rewardInfoList: v,
                creditSourceList: [
                  {
                    buttonText: "立即抽奖",
                    displayIndex: 1,
                    icon: "https://images3.c-ctrip.com/ztrip/member/202004/lottery.png",
                    jumpUrl:
                      "https://m.suanya.com/webapp/train/activity/20200408-ztrip-credit-lottery/?isHideNavBar=YES&partner=zhixing&umid=1278760115&allianceid=30613&sid=2875149&source=qdrwapp",
                    subTitle: "赢IPHONE",
                    title: "积分抽大奖",
                  },
                  {
                    buttonText: "立即瓜分",
                    displayIndex: 2,
                    icon: "https://images3.c-ctrip.com/ztrip/member/202004/mission.png",
                    jumpUrl:
                      "https://m.suanya.com/webapp/train/activity/20200611-ztrip-daily-attendance/?isHideNavBar=YES&partner=zhixing&umid=1278955515&allianceid=30613&sid=3013591&source=qdappbanne",
                    subTitle: "瓜分百万积分",
                    title: "每日打卡",
                  },
                ],
                everyDayVipGiftEntityList: [
                  {
                    creditValue: "+3",
                    icon: "https://images3.c-ctrip.com/ztrip/train_wei/chou.png",
                    pageCode: "scan_lottery",
                    pageUrl:
                      "https://m.suanya.com/webapp/train/activity/20200408-ztrip-credit-lottery/?isHideNavBar=YES&partner=zhixing&umid=1278760115&allianceid=30613&sid=2875149&source=qdrwapp",
                    state: 1,
                    subTitle: "免费抽iphone！",
                    title: "浏览抽奖页面领积分",
                  },
                  {
                    creditValue: "+3",
                    icon: "https://images3.c-ctrip.com/ztrip/icon/attend_bargain.png",
                    pageCode: "flight_low",
                    pageUrl:
                      "https://market.suanya.com/activity/flight/201904tejia-index/?newweb=1&isHideNavBar=YES&partner=zhixing",
                    state: 1,
                    subTitle: "除了便宜，还是便宜",
                    title: "逛特价机票频道领积分",
                  },
                  {
                    creditValue: "+3",
                    icon: "https://images3.c-ctrip.com/ztrip/icon/attend_list.png",
                    pageCode: "hotel_low",
                    pageUrl:
                      "https://market.suanya.com/activity/hotel/2019ranklist/?partner=zhixing&isHideNavBar=YES",
                    state: 1,
                    subTitle: "你想要的酒店排名尽在这里",
                    title: "逛当地酒店榜单领积分",
                  },
                ],
                shareInfo: null,
                creditOfShareInfo: 0,
                retainEntity: {},
                popRewardEntity: {},
                slideContent: "",
                showType: "",
                sevenDayCoupon: {},
                retainEntityList: [],
                zhixingShareImgList: null,
                tieyouShareImgList: null,
                topStatusHeight: 0,
                topFixed: !1,
                shareBottomVisible: !1,
                isShareTipVisible: !1,
                isChoosePopReward: !1,
                hasShownPopReward: !1,
                wxCredit: 0,
                giftCode: "",
                pageLength: 1,
                attendanceRule:
                  "https://market.suanya.com/document/train/signin-rule.html?__ares_maxage=3m",
              },
              onLoad: function () {
                try {
                  var e = p().getCurrentPages(),
                    t = e ? e.length : 1;
                  this.setData({ pageLength: t });
                } catch (e) {
                  console.log(e);
                }
                this.getConfig();
              },
              onShow: function () {
                var e = this;
                this.data.wxCredit &&
                  setTimeout(function () {
                    (0, Z.showToast)("+".concat(e.data.wxCredit, "积分")),
                      e.setData({ wxCredit: 0 });
                  }, 300);
                try {
                  var t = p().getStorageSync("TRAIN_SIGNIN_EVERYDAY") || {
                    flag: !1,
                  };
                  t.flag &&
                    ((0, Z.showToast)("获得".concat(t.credit, "积分")),
                    p().setStorageSync("TRAIN_SIGNIN_EVERYDAY", {
                      flag: !1,
                      credit: 0,
                    }));
                } catch (e) {
                  console.log(e);
                }
                this.getSignInDetail(), this.getRef();
              },
              clickBack: function () {
                var e = this.data,
                  t = e.attendanceTodayFlag,
                  i = e.isChoosePopReward,
                  a = e.retainEntityList,
                  n = e.pageLength,
                  s = e.hasShownPopReward;
                if (this.data.isLogin) {
                  if (this.handleFirstTimeAndNotSignInPop()) return;
                  if (t && !i && a && a.length > 0 && s)
                    return void this.setData({ showType: "detain" });
                }
                this.data.showType ||
                  (1 === n ? x.Z.relaunchHome() : p().navigateBack());
              },
              handleFirstTimeAndNotSignInPop: function () {
                try {
                  var e = this.data.attendanceTodayFlag,
                    t = +new Date(),
                    i = b.ZP.duid,
                    a = p().getStorageSync("TRAIN_SIGNIN_REMIND") || [],
                    n = a ? a.timeStamp : "",
                    s = !!n && x.Z.isSameDay(t, n),
                    c = !!a && a.duid === i;
                  return !(
                    e ||
                    (!e && s && c) ||
                    (this.setData({ showType: "remind" }),
                    p().setStorageSync("TRAIN_SIGNIN_REMIND", {
                      duid: i,
                      timeStamp: t,
                    }),
                    0)
                  );
                } catch (e) {
                  console.log(e);
                }
              },
              onShareAppMessage: function () {
                var e = this.data,
                  t = e.shareInfo,
                  i = e.zhixingShareImgList,
                  a = e.tieyouShareImgList,
                  n = V.Z.getUnionData();
                if (!t || !t.subTitle)
                  return {
                    title: "签到免费领积分，100积分=1元",
                    path: "/pages/activity/train/20200609-ztrip-signin/index?fromChannel=wxFriend&aid="
                      .concat(n.aid, "&sid=")
                      .concat(n.sid),
                    imageUrl:
                      "https://images3.c-ctrip.com/ztrip/train_wei/signin_share/2.png",
                  };
                var s = t.subTitle || "";
                s = s.replace(/<br \/>|<br\/>/g, "");
                var c = (N.default.isTieyou ? a : i).find(function (e) {
                    return e.key === s;
                  }),
                  r = c
                    ? c.url
                    : "https://images3.c-ctrip.com/ztrip/train_wei/signin_share/2.png";
                return {
                  title: "签到免费领积分，100积分=1元",
                  path: "/pages/activity/train/20200609-ztrip-signin/index?fromChannel=wxFriend&aid="
                    .concat(n.aid, "&sid=")
                    .concat(n.sid),
                  imageUrl: r,
                };
              },
              getSignInDetail: function () {
                var e = this;
                return (
                  (0, Z.showLoading)(),
                  (0, C.bb)({ sourceType: 1 })
                    .then(function (t) {
                      if (
                        (t &&
                          t.ResponseStatus &&
                          "Failure" === t.ResponseStatus.Ack &&
                          t.ResponseStatus.Errors &&
                          Array.isArray(t.ResponseStatus.Errors) &&
                          t.ResponseStatus.Errors[0] &&
                          -1 !==
                            t.ResponseStatus.Errors[0].ErrorCode.indexOf(
                              "MobileRequestFilterException"
                            )) ||
                        -96 === t.resultCode
                      )
                        e.setData({ isLogin: !1 });
                      else if (t && 1 === t.resultCode) {
                        var i = t.totalCredit,
                          a = t.attendanceTodayFlag,
                          n = t.consequentDay,
                          s = t.attendanceContent,
                          c = t.attendanceRule,
                          r = t.attendanceWeekEntityList,
                          o = t.everyDayVipGiftEntityList,
                          l = t.creditSourceList,
                          h = t.popRewardEntity,
                          m = t.slideContent,
                          u = t.couponList,
                          p = t.rewardInfoList,
                          g = t.needCredit,
                          w = t.retainEntity,
                          N = t.giftCode,
                          f = u
                            ? u.map(function (e) {
                                var t = 100 * (i / e.needCredit).toFixed(2);
                                return (0,
                                d.Z)((0, d.Z)({}, e), {}, { progress: t > 100 ? 100 : t });
                              })
                            : [],
                          y = o
                            ? o.filter(function (e) {
                                return x.Z.isH5Url(e.pageUrl);
                              })
                            : [],
                          V = m.replace(/<\/?[^>]+>/g, ""),
                          Z = e.handleRewardList(p),
                          C = e.handleAttendanceWeekEntityList(r),
                          T = e.handleCreditSourceList(l),
                          v = C.find(function (e) {
                            return "今天" === e.weekDay;
                          }),
                          B = v ? v.credit : 0,
                          S = (w && w.ActivityList) || [];
                        e.setData({
                          totalCredit: i,
                          attendanceTodayFlag: a,
                          consequentDay: n,
                          attendanceContent: s,
                          attendanceValue: B,
                          attendanceRule: c,
                          popRewardEntity: h,
                          needCredit: g,
                          retainEntityList: S,
                          giftCode: N,
                          everyDayVipGiftEntityList: y,
                          creditSourceList: T,
                          attendanceWeekEntityList: C,
                          slideContent: V,
                          couponList: f,
                          rewardInfoList: Z,
                          isLogin: b.ZP.isLogin,
                        }),
                          e.data.attendanceTodayFlag && e.newUbtTrace(139606);
                      } else console.log(t.resultMessage);
                    })
                    .catch(function (e) {
                      console.log(e);
                    })
                    .finally(function () {
                      (0, Z.hideLoading)();
                    })
                );
              },
              attendAfterLogin: function () {
                var e = this;
                !!b.ZP.isLogin
                  ? this.attend()
                  : b.ZP.doLogin().then(
                      function () {
                        e.setData({ isLogin: !0 }), e.attend();
                      },
                      function () {
                        console.log("取消登录");
                      }
                    );
              },
              attend: function () {
                var e = this;
                this.newUbtTrace(137343);
                var t,
                  i = this.data.giftCode;
                return (
                  (t = i ? { giftCode: i, sourceType: 1 } : { sourceType: 1 }),
                  (0, C.Qp)(t)
                    .then(function (t) {
                      if (1 === t.resultCode) {
                        var i = t.credit,
                          a = void 0 === i ? 0 : i,
                          n = t.coupon,
                          s = e.handleDate(
                            (t.shareInfo && t.shareInfo.date) || ""
                          ),
                          c = s.day,
                          r = s.month,
                          o = s.date,
                          l =
                            t.shareInfo &&
                            t.shareInfo.content.split(/<br\/>|<br \/>/),
                          h =
                            t.shareInfo &&
                            t.shareInfo.subTitle.replace(/<br\/>|<br \/>/, ""),
                          m = (0, d.Z)(
                            (0, d.Z)({}, t.shareInfo),
                            {},
                            {
                              content: l,
                              subTitle: h,
                              day: c,
                              month: r,
                              date: o,
                            }
                          ),
                          u = n && e.getClassNameOfReward(n.couponName || ""),
                          p = n
                            ? (0, d.Z)((0, d.Z)({}, n), {}, { className: u })
                            : null;
                        e.setData({
                          shareInfo: m,
                          creditOfShareInfo: a,
                          sevenDayCoupon: p,
                        }),
                          e.getSignInDetail().finally(function () {
                            e.data.sevenDayCoupon &&
                            e.data.sevenDayCoupon.couponName
                              ? e.setData({ showType: "popRewardCoupon" })
                              : e.setData({
                                  showType: "sign-success",
                                  hasShownPopReward: !0,
                                });
                          });
                      } else
                        (0, Z.showModal)({
                          content:
                            t.resultMessage || "服务器开小差了～请稍后再试～",
                          confirmText: "我知道了",
                        });
                    })
                    .catch(function (e) {
                      console.log(e);
                    })
                );
              },
              goToUseCoupon: function () {
                var e = this.data.sevenDayCoupon.className,
                  t = void 0 === e ? "" : e;
                x.Z.relaunchHome(t);
              },
              handleDate: function (e) {
                var t = e ? new Date(e) : new Date(),
                  i = t.getDate(),
                  a = t.getMonth() + 1,
                  n = t.getDay();
                switch (((a = a > 10 ? a : "0" + a), n)) {
                  case 0:
                    n = "星期日";
                    break;
                  case 1:
                    n = "星期一";
                    break;
                  case 2:
                    n = "星期二";
                    break;
                  case 3:
                    n = "星期三";
                    break;
                  case 4:
                    n = "星期四";
                    break;
                  case 5:
                    n = "星期五";
                    break;
                  case 6:
                    n = "星期六";
                    break;
                  default:
                    n = "";
                }
                return { day: n, month: a, date: i };
              },
              handleRewardList: function (e) {
                var t = [],
                  i = "",
                  a = [];
                if (!e) return t;
                var n,
                  s = (0, l.Z)(e);
                try {
                  for (s.s(); !(n = s.n()).done; ) {
                    var c = n.value;
                    (i = this.getClassNameOfReward(c.title)),
                      (a = c.rewardInfoList.map(function (e) {
                        return (0, d.Z)((0, d.Z)({}, e), {}, { className: i });
                      })),
                      (t = t.concat(a));
                  }
                } catch (e) {
                  s.e(e);
                } finally {
                  s.f();
                }
                return t;
              },
              getClassNameOfReward: function (e) {
                return e.includes("火车票")
                  ? "train"
                  : e.includes("机票")
                  ? "flight"
                  : e.includes("酒店")
                  ? "hotel"
                  : e.includes("门票")
                  ? "ticket"
                  : e.includes("汽车")
                  ? "bus"
                  : "train";
              },
              closePop: function () {
                "sign-success" === this.data.showType &&
                  this.newUbtTrace(137350),
                  this.setData({ showType: "", shareBottomVisible: !1 });
              },
              attendFunc: function () {
                this.newUbtTrace(137351), this.attendAfterLogin();
              },
              exchangeVipCreditRewardAction: function (e) {
                var t = this;
                (0, f.U6)({ code: e, businessType: "attendance" })
                  .then(function (e) {
                    e && 1 === e.resultCode
                      ? ((0, Z.showToast)("兑换成功"), t.getSignInDetail())
                      : (0, Z.showToast)(
                          e.title || e.resultMessage || "网络开小差，请稍后再试"
                        );
                  })
                  .catch(function (e) {
                    return console.log(e);
                  });
              },
              finishVipCreditAction: function (e) {
                return (0, C.r$)({ code: "vipWelfare", pageCode: e })
                  .then(function (e) {
                    if (e && 1 === e.resultCode && e.sendCredit > 0)
                      return e.sendCredit;
                  })
                  .catch(function (e) {
                    return console.log(e);
                  });
              },
              handleAttendanceWeekEntityList: function (e) {
                var t = e.slice(0, 6).every(function (e) {
                  return "missing" !== e.state;
                });
                return e.map(function (e, i) {
                  return 6 === i && "undo" === e.state && t
                    ? (0, d.Z)((0, d.Z)({}, e), {}, { className: "last" })
                    : "complete" === e.state
                    ? (0, d.Z)((0, d.Z)({}, e), {}, { className: "done" })
                    : "doing" === e.state
                    ? (0, d.Z)((0, d.Z)({}, e), {}, { className: "now" })
                    : "missing" === e.state
                    ? (0, d.Z)((0, d.Z)({}, e), {}, { className: "disabled" })
                    : (0, d.Z)((0, d.Z)({}, e), {}, { className: "" });
                });
              },
              handleCreditSourceList: function (e) {
                var t = [];
                if (!e) return t;
                var i = (t = e.filter(function (e) {
                    return x.Z.isH5Url(e.jumpUrl);
                  })).length,
                  a = i % 3 == 0,
                  n = 3 * Math.ceil(i / 3);
                if (!a) {
                  var s = Array(n - i).fill("");
                  t = t.concat(s);
                }
                return t;
              },
              showSignInRule: function () {
                var e = this.data.attendanceRule,
                  t = void 0 === e ? "" : e;
                t && this.goH5(t);
              },
              shareSigninMsg: function () {
                this.setData({ showType: "signin", shareBottomVisible: !1 });
              },
              closeShare: function () {
                var e = this;
                this.setData({ showType: "", shareBottomVisible: !1 }),
                  (0, C.r$)({ code: this.data.shareInfo.code })
                    .then(function (t) {
                      t &&
                        1 === t.resultCode &&
                        t.sendCredit > 0 &&
                        e.setData({ wxCredit: t.sendCredit });
                    })
                    .catch(function (e) {
                      return console.log(e);
                    });
              },
              onPageScroll: function (e) {
                var t = e.scrollTop,
                  i = this.data.topStatusHeight,
                  a = void 0 === i ? 24 : i;
                this.setData({ topFixed: t > a });
              },
              clickActivityEntry: function (e) {
                var t = e.currentTarget.dataset,
                  i = t.item.jumpUrl,
                  a = t.index;
                0 === a
                  ? this.newUbtTrace(137344)
                  : 1 === a
                  ? this.newUbtTrace(137345)
                  : 2 === a && this.newUbtTrace(137346),
                  this.goH5(i);
              },
              goH5: function (e) {
                e && y.Z.twebview({ data: { url: e } });
              },
              clickEveryDayPoint: function (e) {
                var t = this,
                  i = e.currentTarget.dataset.item,
                  a = i.pageCode,
                  n = void 0 === a ? "" : a,
                  s = i.state,
                  c = i.pageUrl,
                  r = void 0 === c ? "" : c;
                0 === s &&
                  this.finishVipCreditAction(n).then(function (e) {
                    if (e > 0)
                      try {
                        p().setStorageSync("TRAIN_SIGNIN_EVERYDAY", {
                          flag: !0,
                          credit: e,
                        });
                      } catch (e) {
                        console.log(e);
                      }
                  }),
                  setTimeout(function () {
                    t.goH5(r);
                  }, 100);
              },
              exchangePoint: function (e) {
                var t = e.currentTarget.dataset.reward,
                  i = t.code,
                  a = t.rewardValue;
                if (this.data.isLogin)
                  if (a > this.state.totalCredit)
                    (0, Z.showToast)("当前积分不足，试试换点别的~");
                  else {
                    var n = this;
                    (0, Z.showModal)({
                      title: "确认提示",
                      content: "此次兑换将消耗您".concat(
                        a,
                        "积分，确认继续兑换吗？"
                      ),
                      showCancel: !0,
                      cancelText: "考虑一下",
                      confirmText: "确认兑换",
                      success: function (e) {
                        e.confirm && n.exchangeVipCreditRewardAction(i);
                      },
                    });
                  }
                else (0, Z.showToast)("请先登录哦～");
              },
              loginToWatch: function () {
                (0, Z.showToast)("请先登录哦～");
              },
              getRef: function () {
                var e = this;
                p()
                  .createSelectorQuery()
                  .select("#top-status-id")
                  .boundingClientRect(function (t) {
                    t && e.setData({ topStatusHeight: t.height });
                  })
                  .exec();
              },
              changeSection: function () {
                p()
                  .createSelectorQuery()
                  .select("#welfare-box-id")
                  .boundingClientRect(function (e) {
                    p().pageScrollTo({ scrollTop: e.top - 150, duration: 300 });
                  })
                  .exec();
              },
              clickPopReward: function (e) {
                var t = e.currentTarget.dataset,
                  i = t.item,
                  a = i.jumpUrl,
                  n = void 0 === a ? "" : a,
                  s = i.title,
                  c = void 0 === s ? "" : s,
                  r = t.index;
                0 === r
                  ? this.newUbtTrace(137347)
                  : 1 === r
                  ? this.newUbtTrace(137348)
                  : 2 === r && this.newUbtTrace(137349),
                  this.setData({ isChoosePopReward: !0 }),
                  n
                    ? this.goH5(
                        "福利红包" === c
                          ? "https://m.suanya.com/webapp/train/activity/20210517-ztrip-blind-box?&isHideNavBar=YES&source=Sign"
                          : n
                      )
                    : this.shareSigninMsg();
              },
              exchangeCouponByPoint: function (e) {
                if (this.data.isLogin) {
                  var t = e.currentTarget.dataset.item,
                    i = t.code,
                    a = t.type,
                    n = t.needCredit,
                    s = this;
                  2 === a
                    ? (0, Z.showToast)("积分不足")
                    : 0 === a
                    ? (0, Z.showToast)("优惠劵已抢完")
                    : 1 === a &&
                      (0, Z.showModal)({
                        title: "确认提示",
                        content: "此次兑换将消耗您".concat(
                          n,
                          "积分，确认继续兑换吗？"
                        ),
                        showCancel: !0,
                        cancelText: "考虑一下",
                        confirmText: "确认兑换",
                        success: function (e) {
                          e.confirm && s.exchangeVipCreditRewardAction(i);
                        },
                      });
                } else (0, Z.showToast)("请先登录哦～");
              },
              closeShareBottom: function () {
                this.setData({ shareBottomVisible: !1, showType: "" });
              },
              lottery: function () {
                this.newUbtTrace(137352);
                var e = this.data.retainEntityList[0].jumpUrl;
                this.goH5(e);
              },
              navigateBackDirect: function () {
                1 === this.data.pageLength
                  ? x.Z.relaunchHome()
                  : p().navigateBack();
              },
              MorePointWelfare: function () {
                this.navigateTo({ url: "/pages/usercenter/member/member" });
              },
              getConfig: function () {
                var e = this;
                (0, f.fu)({ ConfigKey: "tieyou_wx_signin_share_img_list" })
                  .then(function (t) {
                    if (t.ConfigInfo && t.ConfigInfo.Content) {
                      var i = JSON.parse(t.ConfigInfo.Content);
                      e.setData({
                        zhixingShareImgList: i.zhixingShareImgList,
                        tieyouShareImgList: i.tieyouShareImgList,
                      });
                    }
                  })
                  .catch(function (e) {
                    console.log(e);
                  });
              },
              newUbtTrace: function (e) {
                try {
                  this.ubtTrace(e, {
                    openId: b.ZP.openid || "",
                    userName: b.ZP.userName || "",
                    cid: b.ZP.cid || "",
                  });
                } catch (e) {
                  console.log(e);
                }
              },
            },
            k =
              (0, B.h)()(
                (a =
                  w()(I)(
                    (a = (function (e) {
                      (0, r.Z)(i, e);
                      var t = (0, o.Z)(i);
                      function i() {
                        return (0, s.Z)(this, i), t.apply(this, arguments);
                      }
                      return (
                        (0, c.Z)(i, [
                          {
                            key: "render",
                            value: function () {
                              var e = this,
                                t = this.data,
                                i = t.isTieyou,
                                a = t.isIPhoneX,
                                n = t.topFixed,
                                s = t.isLogin,
                                c = t.totalCredit,
                                r = t.consequentDay,
                                o = t.attendanceTodayFlag,
                                l = t.slideContent,
                                d = t.attendanceContent,
                                h = t.attendanceWeekEntityList,
                                u = t.creditSourceList,
                                p = t.couponList,
                                g = t.everyDayVipGiftEntityList,
                                w = t.rewardInfoList,
                                N = t.showType,
                                f = t.creditOfShareInfo,
                                y = t.popRewardEntity,
                                V = t.shareInfo,
                                b = t.shareBottomVisible,
                                x = t.retainEntityList,
                                Z = t.attendanceValue,
                                C = t.sevenDayCoupon;
                              return (0, S.BX)(m.Block, {
                                children: [
                                  (0, S.BX)(m.View, {
                                    className:
                                      "top-box unsigned " + (i ? "ty" : "zx"),
                                    children: [
                                      (0, S.BX)(m.View, {
                                        className:
                                          "top-bar " +
                                          (a ? "iphone" : "") +
                                          " " +
                                          (n && "fixed"),
                                        children: [
                                          (0, S.BX)(m.View, {
                                            className: "top-bar-hd",
                                            children: [
                                              (0, S.tZ)(m.Text, {
                                                className:
                                                  "ifont-back iconfont",
                                                id: "AeBt",
                                                onClick: this.clickBack,
                                              }),
                                              (0, S.tZ)(m.View, {
                                                className: "tit",
                                                children: "每日签到",
                                              }),
                                            ],
                                          }),
                                          (0, S.BX)(m.View, {
                                            className: "top-bar-bd",
                                            children: [
                                              (0, S.tZ)(m.View, {
                                                className: "label",
                                                children: "我的积分：",
                                              }),
                                              (0, S.tZ)(m.View, {
                                                className: "total",
                                                children: s ? c : "--",
                                              }),
                                              o
                                                ? (0, S.BX)(m.View, {
                                                    className: "txt",
                                                    children: [
                                                      "已经连续签到",
                                                      (0, S.tZ)(m.Text, {
                                                        className:
                                                          "color-primary",
                                                        children: r,
                                                      }),
                                                      "天",
                                                    ],
                                                  })
                                                : (0, S.tZ)(m.View, {
                                                    className: "txt",
                                                    children: l,
                                                  }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, S.BX)(m.View, {
                                        className: "top-status",
                                        id: "top-status-id",
                                        children: [
                                          (0, S.tZ)(m.View, {
                                            className: "label",
                                            children: "我的积分：",
                                          }),
                                          (0, S.tZ)(m.View, {
                                            className: "total",
                                            children: s ? c : "--",
                                          }),
                                          (0, S.BX)(m.View, {
                                            className: "convert",
                                            id: "AeBu",
                                            onClick: this.changeSection,
                                            children: [
                                              "兑换奖励",
                                              (0, S.tZ)(m.Text, {
                                                className: "ifont-arr iconfont",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      !o &&
                                        (0, S.BX)(m.View, {
                                          className: "top-sign",
                                          children: [
                                            (0, S.BX)(m.Button, {
                                              className: "btn-sign",
                                              id: "AeBv",
                                              onClick: this.attendAfterLogin,
                                              children: [
                                                s ? "签到" : "登录",
                                                (0, S.tZ)(m.Text, {
                                                  className: "txt",
                                                  children: s
                                                    ? d
                                                    : "最高+70积分",
                                                }),
                                              ],
                                            }),
                                            (0, S.tZ)(m.View, {
                                              className: "tag",
                                              children: "100积分=1元",
                                            }),
                                          ],
                                        }),
                                    ],
                                  }),
                                  (0, S.BX)(m.View, {
                                    className: "wrap",
                                    children: [
                                      (0, S.BX)(m.View, {
                                        className: "sign-box",
                                        children: [
                                          (0, S.BX)(m.View, {
                                            className: "sign-hd",
                                            children: [
                                              s &&
                                                (0, S.BX)(m.View, {
                                                  className: "cont",
                                                  children: [
                                                    o
                                                      ? (0, S.BX)(m.View, {
                                                          className: "tit",
                                                          children: [
                                                            "已经连续签到",
                                                            (0, S.tZ)(m.Text, {
                                                              className:
                                                                "color-primary",
                                                              children: r,
                                                            }),
                                                            "天",
                                                          ],
                                                        })
                                                      : (0, S.tZ)(m.View, {
                                                          className: "tit",
                                                          children: l,
                                                        }),
                                                    (0, S.tZ)(m.View, {
                                                      className: "txt",
                                                      children:
                                                        "连续签到7天得豪礼",
                                                    }),
                                                  ],
                                                }),
                                              !s &&
                                                (0, S.BX)(m.View, {
                                                  className: "cont",
                                                  children: [
                                                    (0, S.tZ)(m.View, {
                                                      className: "tit",
                                                      children: "签到拿积分",
                                                    }),
                                                    (0, S.tZ)(m.View, {
                                                      className: "txt",
                                                      children:
                                                        "连续签到7天得豪礼",
                                                    }),
                                                  ],
                                                }),
                                              s &&
                                                (0, S.BX)(m.View, {
                                                  className: "txt",
                                                  id: "AeBw",
                                                  onClick: this.showSignInRule,
                                                  children: [
                                                    "签到规则",
                                                    (0, S.tZ)(m.Text, {
                                                      className:
                                                        "ifont-detail iconfont",
                                                    }),
                                                  ],
                                                }),
                                            ],
                                          }),
                                          h &&
                                            h[0] &&
                                            (0, S.tZ)(m.View, {
                                              className:
                                                "sign-bd " + (i ? "ty" : "zx"),
                                              children: h.map(function (e, t) {
                                                return (0,
                                                S.BX)(m.View, { className: "item " + e.className, children: ["done" === e.className && (0, S.BX)(m.View, { className: "card", children: [(0, S.tZ)(m.Icon, { className: "icon-suc" }), (0, S.tZ)(m.View, { className: "no", children: "+" + e.credit })] }), ("now" === e.className || "" === e.className) && (0, S.BX)(m.View, { className: "card", children: [(0, S.tZ)(m.Icon, { className: ".icon-star" }), (0, S.tZ)(m.View, { className: "no", children: "+" + e.credit })] }), "disabled" === e.className && (0, S.tZ)(m.View, { className: "card", children: (0, S.tZ)(m.View, { className: "txt", children: "未领" }) }), "last" === e.className && (0, S.tZ)(m.View, { className: "card" }), (0, S.tZ)(m.View, { className: "week", children: "doing" === e.state ? "今天" : e.weekDay })] }, t);
                                              }),
                                            }),
                                        ],
                                      }),
                                      u &&
                                        u[0] &&
                                        (0, S.tZ)(m.View, {
                                          className: "activity-entry",
                                          children: (0, S.tZ)(m.Block, {
                                            children: u.map(function (t, i) {
                                              return t.jumpUrl
                                                ? (0, S.BX)(
                                                    m.View,
                                                    {
                                                      className:
                                                        "item " +
                                                        (0 === i
                                                          ? "draw"
                                                          : "") +
                                                        " " +
                                                        (1 === i
                                                          ? "punch"
                                                          : "") +
                                                        " " +
                                                        (2 === i ? "shop" : ""),
                                                      id: "AeBx",
                                                      onClick:
                                                        e.clickActivityEntry,
                                                      "data-item": t,
                                                      "data-index": i,
                                                      children: [
                                                        (0, S.tZ)(m.View, {
                                                          className: "tit",
                                                          children: t.title,
                                                        }),
                                                        (0, S.tZ)(m.View, {
                                                          className: "txt",
                                                          children: t.subTitle,
                                                        }),
                                                        (0, S.tZ)(m.Button, {
                                                          className: "btn-go",
                                                          children:
                                                            t.buttonText,
                                                        }),
                                                      ],
                                                    },
                                                    "index"
                                                  )
                                                : (0, S.tZ)(m.View, {});
                                            }),
                                          }),
                                        }),
                                      p.length > 0 &&
                                        (0, S.tZ)(m.View, {
                                          className: "swiper-box",
                                          children: (0, S.tZ)(m.Swiper, {
                                            className: "swiper",
                                            autoplay: "true",
                                            interval: "3000",
                                            indicatorDots: "true",
                                            circular: "true",
                                            indicatorColor: "#E5E5E5",
                                            indicatorActiveColor: i
                                              ? "#FC6E51"
                                              : "#0080FF",
                                            children: p.map(function (t, i) {
                                              return (0,
                                              S.tZ)(m.SwiperItem, { children: (0, S.BX)(m.View, { className: "item", children: [t.tag && (0, S.tZ)(m.View, { className: "tag", children: t.tag }), (0, S.tZ)(m.View, { className: "price", children: t.price }), (0, S.BX)(m.View, { className: "cont", children: [(0, S.tZ)(m.View, { className: "tit", children: t.title }), (0, S.tZ)(m.View, { className: "progress-bar", children: (0, S.tZ)(m.View, { className: "line", style: "width:" + t.progress + "%" }) }), (0, S.tZ)(m.View, { className: "txt", children: t.needCredit + "积分兑换" })] }), 0 === t.type ? (0, S.tZ)(m.Button, { className: "btn-dui", "data-item": t, id: "AeBy", onClick: e.exchangeCouponByPoint, disabled: "true", children: "已兑完" }) : (0, S.tZ)(m.Button, { className: "btn-dui " + (2 === t.type ? "grey" : ""), "data-item": t, id: "AeBz", onClick: e.exchangeCouponByPoint, children: "兑换" })] }) }, i);
                                            }),
                                          }),
                                        }),
                                      g &&
                                        g[0] &&
                                        (0, S.BX)(m.View, {
                                          className: "welfare-box",
                                          id: "welfare-box-id",
                                          children: [
                                            (0, S.tZ)(m.View, {
                                              className:
                                                "htit " + (i ? "ty" : "zx"),
                                              children: "每日积分福利",
                                            }),
                                            g.map(function (t, a) {
                                              return (0,
                                              S.BX)(m.View, { className: "item", children: [(0, S.tZ)(m.Image, { src: t.icon, className: "icon" }), (0, S.BX)(m.View, { className: "cont", children: [(0, S.tZ)(m.View, { className: "tit", children: t.title }), (0, S.tZ)(m.View, { className: "txt", children: t.subTitle })] }), s ? (0 === t.state ? (0, S.BX)(m.Button, { className: "btn-go " + (i ? "ty" : "zx"), "data-item": t, id: "AeCA", onClick: e.clickEveryDayPoint, children: [t.creditValue, (0, S.tZ)(m.Icon, { className: "icon-star" })] }) : (0, S.tZ)(m.Button, { className: "btn-go " + (i ? "ty" : "zx"), id: "AeCB", onClick: e.clickEveryDayPoint, "data-item": t, children: "去看看" })) : (0, S.tZ)(m.Button, { className: "btn-go-disabled", id: "AeCC", onClick: e.loginToWatch, children: "登录查看" })] }, a);
                                            }),
                                          ],
                                        }),
                                      w &&
                                        w[0] &&
                                        (0, S.BX)(m.View, {
                                          className: "exchange-box",
                                          children: [
                                            (0, S.tZ)(m.View, {
                                              className:
                                                "htit " + (i ? "ty" : "zx"),
                                              children: "积分兑换",
                                            }),
                                            w.map(function (t, i) {
                                              return (0,
                                              S.BX)(m.View, { className: "member-exchange-coupon", children: [(0, S.BX)(m.View, { className: "coupon-left " + t.className, children: [(0, S.BX)(m.View, { className: "tit", children: [(0, S.tZ)(m.Text, { className: "strong", children: t.value }), t.unit] }), (0, S.tZ)(m.View, { className: "txt", children: t.summary })] }), (0, S.BX)(m.View, { className: "coupon-box", children: [(0, S.tZ)(m.View, { className: "tit", children: t.title }), (0, S.tZ)(m.View, { className: "txt", children: t.subTitle }), (0, S.BX)(m.View, { className: "jifen", children: [t.rewardValue + "积分", t.tag && (0, S.tZ)(m.Text, { className: "tag", children: t.tag })] })] }), (0, S.tZ)(m.Button, { id: "AeGJ", className: c >= t.rewardValue ? "btn-exchange" : "btn-exchange-disabled", "data-index": i, "data-reward": t, onClick: e.exchangePoint, children: "兑换" })] }, "code");
                                            }),
                                          ],
                                        }),
                                      (0, S.tZ)(m.View, {
                                        className: "exchange-more",
                                        children: (0, S.tZ)(m.Button, {
                                          className:
                                            "btn-more " + (i ? "ty" : "zx"),
                                          id: "AeCD",
                                          onClick: this.MorePointWelfare,
                                          children: "查看更多积分福利",
                                        }),
                                      }),
                                    ],
                                  }),
                                  N &&
                                    (0, S.tZ)(m.View, {
                                      className: "shade-box",
                                      id: "AeCE",
                                      onClick: this.closePop,
                                    }),
                                  "sign-success" === N &&
                                    (0, S.BX)(m.View, {
                                      className: "pop-mid pop-suc",
                                      children: [
                                        (0, S.BX)(m.View, {
                                          className: "pop-suc-hd",
                                          children: [
                                            (0, S.tZ)(m.View, {
                                              className: "tit",
                                              children: "签到成功!",
                                            }),
                                            (0, S.tZ)(m.View, {
                                              className: "txt",
                                              children:
                                                "恭喜您喜提" + f + "积分",
                                            }),
                                          ],
                                        }),
                                        (0, S.BX)(m.View, {
                                          className: "pop-suc-bd",
                                          children: [
                                            (0, S.tZ)(m.View, {
                                              className: "tit",
                                              children: y.title,
                                            }),
                                            y.ActivityList.map(function (t, i) {
                                              return (0,
                                              S.BX)(m.View, { className: "item", children: [(0, S.tZ)(m.View, { className: "txt", children: "福利红包" === t.title ? "盲盒福利" : t.title }), i < 2 ? (0, S.tZ)(m.View, { className: "jifen", children: t.rewardText }) : (0, S.tZ)(m.Image, { src: t.icon, className: "prize" }), (0, S.tZ)(m.Button, { className: "btn-go", "data-item": t, "data-index": i, id: "AeCF", onClick: e.clickPopReward, children: t.buttonText })] }, "index");
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  "signin" === N &&
                                    (0, S.BX)(m.View, {
                                      className: "pop-mid pop-share",
                                      children: [
                                        (0, S.BX)(m.View, {
                                          className: "pop-share-hd",
                                          children: [
                                            (0, S.tZ)(m.View, {
                                              className: "tit",
                                              children: "签到成功!",
                                            }),
                                            (0, S.tZ)(m.View, {
                                              className: "txt",
                                              children:
                                                "恭喜您喜提" + f + "积分",
                                            }),
                                          ],
                                        }),
                                        (0, S.BX)(m.View, {
                                          className: "pop-share-bd",
                                          children: [
                                            (0, S.BX)(m.View, {
                                              className: "date",
                                              children: [
                                                (0, S.tZ)(m.View, {
                                                  className: "strong",
                                                  children: V.date,
                                                }),
                                                (0, S.tZ)(m.View, {
                                                  className: "txt",
                                                  children:
                                                    V.month + "月\n" + V.day,
                                                }),
                                              ],
                                            }),
                                            (0, S.tZ)(m.View, {
                                              className: "yi",
                                              children: V.subTitle,
                                            }),
                                            (0, S.tZ)(m.View, {
                                              className: "tit",
                                              "wx-if": V && V.content,
                                              children:
                                                V.content[0] +
                                                "\n" +
                                                (V.content[1] || ""),
                                            }),
                                          ],
                                        }),
                                        (0, S.BX)(m.View, {
                                          className: "pop-share-botm",
                                          children: [
                                            (0, S.tZ)(m.Image, {
                                              src:
                                                "https://images3.c-ctrip.com/zt/activity/20200609-ztrip-signin/logo-" +
                                                (i ? "ty" : "zx") +
                                                ".png",
                                              className: "logo",
                                            }),
                                            (0, S.tZ)(m.Image, {
                                              src: "https://images3.c-ctrip.com/zt/activity/20200609-ztrip-signin/qrcode.png",
                                              className: "qrcode",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  b &&
                                    (0, S.BX)(m.View, {
                                      className: "pop-botm pop-select",
                                      children: [
                                        (0, S.BX)(m.View, {
                                          className: "pop-select-hd",
                                          children: [
                                            (0, S.tZ)(m.View, {
                                              className: "tit",
                                              children: "分享成功即可得5积分",
                                            }),
                                            (0, S.tZ)(m.Text, {
                                              className:
                                                "ifont-closed iconfont",
                                              id: "AeCG",
                                              onClick: this.closeShareBottom,
                                            }),
                                          ],
                                        }),
                                        (0, S.BX)(m.View, {
                                          className: "pop-select-bd",
                                          children: [
                                            (0, S.BX)(m.View, {
                                              className: "item",
                                              style: "margin-right: 0;",
                                              children: [
                                                (0, S.tZ)(m.Button, {
                                                  openType: "share",
                                                  id: "AeCH",
                                                  onClick: this.closeShare,
                                                  children: (0, S.tZ)(m.Icon, {
                                                    className: "icon-wechat",
                                                  }),
                                                }),
                                                (0, S.tZ)(m.View, {
                                                  className: "txt",
                                                  children: "微信",
                                                }),
                                              ],
                                            }),
                                            !1,
                                          ],
                                        }),
                                      ],
                                    }),
                                  !1,
                                  "detain" === N &&
                                    (0, S.BX)(m.View, {
                                      className: "pop-mid pop-detain",
                                      children: [
                                        (0, S.tZ)(m.Image, {
                                          src: x[0].icon,
                                          className: "img",
                                        }),
                                        (0, S.BX)(m.View, {
                                          className: "pop-detain-hd",
                                          children: [
                                            (0, S.tZ)(m.View, {
                                              className: "tit",
                                              children: x[0].title,
                                            }),
                                            (0, S.tZ)(m.View, {
                                              className: "txt",
                                              children: "本期大奖",
                                            }),
                                          ],
                                        }),
                                        (0, S.BX)(m.View, {
                                          className: "pop-detain-bd",
                                          children: [
                                            (0, S.tZ)(m.Button, {
                                              className: "btn-go",
                                              id: "AeCI",
                                              onClick: this.lottery,
                                              children: x[0].buttonText,
                                            }),
                                            (0, S.tZ)(m.View, {
                                              className: "txt",
                                              id: "AeCJ",
                                              onClick: this.navigateBackDirect,
                                              children: "仍要退出",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  "remind" === N &&
                                    (0, S.BX)(m.View, {
                                      className: "pop-mid pop-remind",
                                      children: [
                                        (0, S.tZ)(m.View, {
                                          className: "remind-title",
                                          children: "签到提醒",
                                        }),
                                        (0, S.tZ)(m.View, {
                                          className: "remind-desc",
                                          children:
                                            "您今日还未签到，今日签到可领" +
                                            Z +
                                            "积分，您确认退出吗？",
                                        }),
                                        (0, S.BX)(m.View, {
                                          className: "btn-box",
                                          children: [
                                            (0, S.tZ)(m.Button, {
                                              className: "btn-cancel",
                                              id: "AeCK",
                                              onClick: this.navigateBackDirect,
                                              children: "仍要退出",
                                            }),
                                            (0, S.tZ)(m.Button, {
                                              className: "btn-submit",
                                              id: "AeCL",
                                              onClick: this.attendFunc,
                                              children: "确认签到",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  "popRewardCoupon" === N &&
                                    (0, S.BX)(m.View, {
                                      className: "pop-mid pop-weekend",
                                      children: [
                                        (0, S.tZ)(m.Icon, {
                                          className:
                                            "icon-suc " + (i ? "ty" : "zx"),
                                        }),
                                        (0, S.BX)(m.View, {
                                          className: "pop-weekend-hd",
                                          children: [
                                            (0, S.tZ)(m.View, {
                                              className: "tit",
                                              children: "签到成功",
                                            }),
                                            (0, S.tZ)(m.View, {
                                              className: "txt",
                                              children:
                                                "赠您" + C.couponName + "1张",
                                            }),
                                          ],
                                        }),
                                        (0, S.BX)(m.View, {
                                          className:
                                            "pop-weekend-coupon " + C.className,
                                          children: [
                                            (0, S.BX)(m.View, {
                                              className: "lbox",
                                              children: [
                                                (0, S.tZ)(m.Text, {
                                                  className: "strong",
                                                  children: C.value,
                                                }),
                                                "元",
                                              ],
                                            }),
                                            (0, S.BX)(m.View, {
                                              className: "cont",
                                              children: [
                                                (0, S.tZ)(m.View, {
                                                  className: "tit",
                                                  children: C.couponName,
                                                }),
                                                (0, S.tZ)(m.View, {
                                                  className: "txt",
                                                  children:
                                                    "有效期至" + C.expireTime,
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        (0, S.BX)(m.View, {
                                          className: "pop-weekend-btn",
                                          children: [
                                            (0, S.tZ)(m.Button, {
                                              className: "btn-line",
                                              id: "AeCM",
                                              onClick: this.closePop,
                                              children: "我知道了",
                                            }),
                                            (0, S.tZ)(m.Button, {
                                              className: "btn-primary",
                                              id: "AeCN",
                                              onClick: this.goToUseCoupon,
                                              children: "立即使用",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                ],
                              });
                            },
                          },
                        ]),
                        i
                      );
                    })(h.default.Component))
                  ) || a)
              ) || a;
          (k.enableShareAppMessage = !0),
            Page(
              (0, n.createPageConfig)(
                k,
                "pages/activity/train/20200609-ztrip-signin/index",
                { root: { cn: [] } },
                { navigationStyle: "custom", backgroundColor: "#fff" } || {}
              )
            );
        },
      },
      function (e) {
        e.O(0, [24945, 19559, 11216, 68592], function () {
          return (function (t) {
            return e((e.s = t));
          })(34741);
        }),
          e.O();
      },
    ]);
})();
