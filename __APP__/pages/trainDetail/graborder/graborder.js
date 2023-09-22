!(function () {
  "use strict";
  require("../sub-vendors.js"),
    require("../sub-common/efd0f73c48edfb2f4cf806204cb23544.js"),
    require("../sub-common/e006cce71bea1c38395fdd39436a77c2.js"),
    require("../sub-common/d89ce578031072031f3fc29a11a827dc.js"),
    require("../sub-common/fecc9c60875b710a8101d0d50626beef.js"),
    require("../sub-common/849af97262623a3a03a4c9ba6f8707d6.js"),
    require("../sub-common/3edb2b96731d94d93a96699eab306b50.js"),
    require("../sub-common/b3c2309a95e8a51ddd777bd490fa43e7.js"),
    require("../sub-common/df4e17a6370f960d660d521bbd32cf3a.js"),
    require("../sub-common/7a64e02088e78e12a60f5110f7cf05f1.js"),
    require("../sub-common/2134ee5804fe59fe466b0b63fc7acddc.js"),
    require("../sub-common/88207e971f98eff8a3e10f6ee2b5063b.js"),
    require("../sub-common/e5d3d1be4be16b526d43188e1b24d26e.js"),
    require("../sub-common/d3422b412cb888582adccda3ed6c55c4.js"),
    require("../sub-common/30e2515ebd297ee708f98fe67f15a40b.js"),
    require("../sub-common/789d0e61f3340fac4da62181ad8a5446.js"),
    require("../sub-common/40f2b7bd8efebebc05ab739cbbb4a01d.js"),
    require("../sub-common/72f6836a38da788b04d6df340945e671.js"),
    require("../sub-common/4170bd0bcba1375f71e0231ba3309624.js"),
    require("../sub-common/a2ac0ceb5f7d0d895cfbf0fbbe36cfa7.js"),
    require("../sub-common/830933a669f2df38f638a51273333128.js"),
    require("../sub-common/fc8d2c41f03b7cf8df3076a401470a28.js"),
    require("../sub-common/385c2d6294d83fae9baca300c0698c74.js"),
    require("../sub-common/82eba6c76a1180b32ebf23e60fff4c61.js"),
    require("../sub-common/50e438ce8b6a7c870d3c45a317c0e0e9.js"),
    require("../sub-common/329c774b53fa8717b042c2679ca9dc49.js"),
    require("../sub-common/d713e6c3587d81e961c85ebd4545654c.js"),
    require("../sub-common/0e7f26768e9d25a41ca9ec04be52b877.js"),
    require("../sub-common/872d10eabc5bafd8ddd9d0be25c3b4cc.js"),
    require("../sub-common/9b151316d525b3cb0f9389c968a999e5.js"),
    require("../sub-common/2d18c756eb2859b6a32b31f23cfa2e33.js"),
    require("../sub-common/fc6ca7e0e852bffe8bc29567b631b39c.js"),
    require("../sub-common/a55a85f92755291b80f1ffba0a0f2078.js"),
    require("../sub-common/44bb459adf3b3cc2c7eba45f44f1a98d.js"),
    require("../sub-common/e556aa0a4ecdf85baf45d8862bd5c225.js"),
    require("../sub-common/272d8bbab9a1c37d89fde323ad99b1ba.js"),
    require("../sub-common/57d478fa742525b60c72501c451a2545.js"),
    require("../sub-common/b9b90ce6b0bcea0a42ee7c876e5332a8.js"),
    require("../sub-common/314504bff335087e517ba105944a68ae.js"),
    require("../sub-common/0c0c1557d8fdb88154756ccab3184c0b.js"),
    require("../sub-common/430c3e85a7092b3db54bce2b240b905f.js"),
    require("../sub-common/c5a1335291d7af5f9be9250e6fe584a7.js"),
    require("../sub-common/133a47693433ea1cde9e1b22b9bbe483.js"),
    require("../sub-common/716f8c7534fb4dcc868a058e2a4a8750.js"),
    require("../sub-common/108113193bbbd4c3ed4ec458d5f0a379.js"),
    require("../sub-common/eb83024cebd740a80bacaa0967772083.js"),
    (wx.webpackJsonp = wx.webpackJsonp || []).push([
      [56616],
      {
        72230: function (e, t, a) {
          var n = a(32180),
            i = a(79301),
            r = a(95308),
            o = a(57042),
            c = a(24460),
            s = a(81876),
            l = a(21867),
            d = a(86066),
            u = a(45023),
            _ = a(79792),
            m = a(52500),
            p = a(92954),
            f = a.n(p),
            h = (a(96762), a(79910)),
            g = (a(40892), a(20893)),
            b = a(74867),
            w = a(79295),
            v = (a(46408), a(6117), a(62833), a(17917)),
            Z = a(8271),
            N = a.n(Z),
            I = a(49120),
            S = a(48813),
            T = 0;
          function y() {
            return ++T;
          }
          function V() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "",
              t = "zhixing_rk_",
              a = e.indexOf("?");
            return (
              (t += a < 0 ? e : e.substring(0, a)).replace(/\//gi, "") +
              "__" +
              y()
            );
          }
          function C(e, t) {
            var a = e;
            return a.indexOf("?") < 0 ? (a = a + "?" + t) : (a += t), a;
          }
          var D,
            k,
            B,
            x,
            P = {},
            M =
              (Object.create(f(), {
                navigateTo: {
                  value: function (e, t) {
                    e.url = (0, g.N)(e.url);
                    var a = e.url,
                      n = e.data,
                      i = e.callback;
                    if (n || i) {
                      var r = V(a);
                      return (
                        (P[r] = {
                          data: e.data,
                          immediateCallback: e.immediateCallback
                            ? e.immediateCallback
                            : null,
                          callback: e.callback ? e.callback : null,
                          navComplete: e.navComplete ? e.navComplete : null,
                          backDatas: [],
                        }),
                        (t.__navigator_toUid = r),
                        f().navigateTo({ url: C(a, "&__navigator=".concat(r)) })
                      );
                    }
                    return f().navigateTo(e);
                  },
                },
                redirectTo: {
                  value: function (e, t) {
                    var a = e.url,
                      n = e.data,
                      i = e.callback;
                    if (n || i) {
                      var r = V(a);
                      (P[r] = {
                        data: e.data,
                        immediateCallback: e.immediateCallback
                          ? e.immediateCallback
                          : null,
                        callback: e.callback ? e.callback : null,
                        navComplete: e.navComplete ? e.navComplete : null,
                        backDatas: [],
                      }),
                        (t.__navigator_toUid = r),
                        f().redirectTo({
                          url: C(a, "&__navigator=".concat(r)),
                        });
                    } else f().redirectTo(e);
                  },
                },
                navigateBack: {
                  value: function (e, t) {
                    if (t.__navigator_fromUid) {
                      var a = t.__navigator_fromUid;
                      a &&
                        P[a] &&
                        (P[a].backDatas.push(e),
                        P[a].immediateCallback &&
                          P[a].immediateCallback.call(t),
                        delete t.__navigator_fromUid);
                    }
                    f().navigateBack();
                  },
                },
                invokeCallback: {
                  value: function (e, t) {
                    if (t.__navigator_fromUid) {
                      var a = t.__navigator_fromUid;
                      a &&
                        P[a] &&
                        (P[a].backDatas.push(e),
                        P[a].immediateCallback &&
                          P[a].immediateCallback.call(t),
                        delete t.__navigator_fromUid);
                    }
                  },
                },
                showModal: {
                  value: function (e) {
                    var t = Object.assign({}, e, {
                      success: function (t) {
                        var a = Object.assign({}, t);
                        null == a.cancel && (a.cancel = !a.confirm),
                          e.success && e.success.call(this, a);
                      },
                    });
                    f().showModal(t);
                  },
                },
              }),
              (function (e) {
                (0, l.Z)(a, e);
                var t = (0, d.Z)(a);
                function a() {
                  var e;
                  (0, o.Z)(this, a);
                  for (
                    var n = arguments.length, i = new Array(n), r = 0;
                    r < n;
                    r++
                  )
                    i[r] = arguments[r];
                  return (
                    (e = t.call.apply(t, [this].concat(i))),
                    (0, u.Z)((0, s.Z)(e), "$instance", void 0),
                    (0, u.Z)((0, s.Z)(e), "$router", void 0),
                    (0, u.Z)((0, s.Z)(e), "$page", void 0),
                    (0, u.Z)((0, s.Z)(e), "onShowEventId", void 0),
                    (0, u.Z)((0, s.Z)(e), "exclusiveDrawerRef", void 0),
                    (0, u.Z)((0, s.Z)(e), "commonDrawerRef", void 0),
                    (0, u.Z)((0, s.Z)(e), "commonPanelRef", void 0),
                    (0, u.Z)((0, s.Z)(e), "commonDialogRef", void 0),
                    (0, u.Z)((0, s.Z)(e), "navigateToPromise", void 0),
                    (0, u.Z)((0, s.Z)(e), "navigateTo", void 0),
                    (0, u.Z)((0, s.Z)(e), "navigateToAsync", void 0),
                    (0, u.Z)((0, s.Z)(e), "redirectTo", void 0),
                    (0, u.Z)((0, s.Z)(e), "navigateBack", void 0),
                    (0, u.Z)((0, s.Z)(e), "confirmBack", void 0),
                    (0, u.Z)((0, s.Z)(e), "ubtTrace", void 0),
                    (0, u.Z)((0, s.Z)(e), "ubtDevTrace", void 0),
                    (0, u.Z)((0, s.Z)(e), "showCommonDrawer", void 0),
                    (0, u.Z)((0, s.Z)(e), "showCommonDialog", void 0),
                    (0, u.Z)(
                      (0, s.Z)(e),
                      "showCommonDialogWithoutButton",
                      void 0
                    ),
                    (0, u.Z)(
                      (0, s.Z)(e),
                      "showMultiButtonDialogWithPromise",
                      void 0
                    ),
                    (0, u.Z)((0, s.Z)(e), "showMultiButtonDialog", void 0),
                    (0, u.Z)((0, s.Z)(e), "closeCommonDialog", void 0),
                    (0, u.Z)((0, s.Z)(e), "onDialogAttach", void 0),
                    (0, u.Z)((0, s.Z)(e), "ubtExposure", void 0),
                    (0, u.Z)((0, s.Z)(e), "ubtError", void 0),
                    (0, u.Z)((0, s.Z)(e), "ubtMetric", void 0),
                    (0, u.Z)((0, s.Z)(e), "ubtSet", void 0),
                    (0, u.Z)((0, s.Z)(e), "ubtSendPV", void 0),
                    (0, u.Z)((0, s.Z)(e), "commonDebugTrace", void 0),
                    (0, u.Z)((0, s.Z)(e), "invokeCallback", void 0),
                    (0, u.Z)((0, s.Z)(e), "pop", void 0),
                    e
                  );
                }
                return (0, c.Z)(a);
              })(m.default.Component)),
            A = a(81957),
            X = a(65573),
            z = a(21999),
            O = a(39841),
            G = a(40852),
            L = a(298),
            F = {
              state: {
                studentWelfare: {
                  studentWelfareDrawerInfo: null,
                  studentWelfareInfo: null,
                  studentWelfareUnlockDrawerInfo: null,
                },
                dateInfo: {},
                trainInfo: {},
                isShowModal: !1,
                grabSpeedInfo: {
                  speedPointConfig: {},
                  triggerSource: "",
                  packPrice: null,
                  speedPacks: 0,
                  availablePackageNum: 0,
                  vipName: "",
                  usedPackageNum: 0,
                  selectVipDefault: !1,
                  speedLevels: [],
                  isSpeedGrabBtnABTest: !1,
                  speed: "",
                  buttonType: 0,
                  acceDesc: "",
                  isVIPGrab: !1,
                  goldGrabFlag: !1,
                  hotelCouponInfo: null,
                  couponPrice: -1,
                },
                grabSpeedUpInfo: null,
                grabProcessInfo: {
                  processFlag: 0,
                  welfareInfo: null,
                  claimInfo: null,
                  invitedNum: 0,
                  payToUnLockToast: null,
                  friendShareToast: null,
                  realProcessFlag: 0,
                  unlockFlag: 0,
                  isSecondShare: !1,
                },
                orderInfo: {
                  monitorStatus: -1,
                  monitorStatusDesc: "",
                  monitorStatusDetail: "",
                  train: {
                    DepartureStationName: "",
                    ArrivalStationName: "",
                    DepartureDate: "",
                  },
                  rescheduleGrabTips: null,
                  originalOrder: null,
                  deleteFlag: !1,
                  cancelFlag: !1,
                  updateFlag: !1,
                  updateFlagStr: "",
                  payPrice: "",
                  payFlag: !1,
                  timeRangEnd: "",
                  saleTime: "",
                  grabDetailExt: "",
                  crossStationInfos: [],
                  chosenTrainList: [],
                },
                helpMonitorInfo: {
                  helpMonitorNum: 0,
                  helpMonitorSum: 0,
                  shareKey: "",
                },
                priceDetail: null,
                ticketInfo: {
                  trainNo: "",
                  seatType: "",
                  saleTime: "",
                  fromStation: {},
                  toStation: {},
                  passengerList: [],
                  passenger: "",
                  leaveDate: "",
                  arrivalDateTime: "",
                  trainStationInfos: [],
                },
                candidateInfo: {
                  grabHouBuInfo: null,
                  grabHouBuToast: null,
                  candidateTicketDetail: null,
                  houBuOrderDetailInfo: {},
                  openHouBuFailToast: null,
                  dualChannelGuideVisible: !1,
                },
                cancelOrderDrawerInfo: null,
              },
              reducers: {
                setStudentWelfare: function (e, t) {
                  return (0, L.Z)(
                    (0, L.Z)({}, e),
                    {},
                    {
                      studentWelfare: (0, L.Z)(
                        (0, L.Z)({}, e.studentWelfare),
                        t
                      ),
                    }
                  );
                },
                setGrabSpeedInfo: function (e, t) {
                  return (0, L.Z)(
                    (0, L.Z)({}, e),
                    {},
                    {
                      grabSpeedInfo: (0, L.Z)((0, L.Z)({}, e.grabSpeedInfo), t),
                    }
                  );
                },
                setGrabSpeedUpInfo: function (e, t) {
                  return (0, L.Z)((0, L.Z)({}, e), {}, { grabSpeedUpInfo: t });
                },
                setPriceDetail: function (e, t) {
                  return (0, L.Z)((0, L.Z)({}, e), {}, { priceDetail: t });
                },
                setTrainInfo: function (e, t) {
                  return (0, L.Z)(
                    (0, L.Z)({}, e),
                    {},
                    { trainInfo: (0, L.Z)((0, L.Z)({}, e.trainInfo), t) }
                  );
                },
                setDateInfo: function (e, t) {
                  return (0, L.Z)(
                    (0, L.Z)({}, e),
                    {},
                    { dateInfo: (0, L.Z)((0, L.Z)({}, e.payload), t) }
                  );
                },
                setIsShowModal: function (e, t) {
                  return (0, L.Z)((0, L.Z)({}, e), {}, { isShowModal: t });
                },
                setGrabProcessInfo: function (e, t) {
                  return (0, L.Z)(
                    (0, L.Z)({}, e),
                    {},
                    {
                      grabProcessInfo: (0, L.Z)(
                        (0, L.Z)({}, e.grabProcessInfo),
                        t
                      ),
                    }
                  );
                },
                setOrderInfo: function (e, t) {
                  return (0, L.Z)(
                    (0, L.Z)({}, e),
                    {},
                    { orderInfo: (0, L.Z)((0, L.Z)({}, e.orderInfo), t) }
                  );
                },
                setHelpMonitorInfo: function (e, t) {
                  return (0, L.Z)(
                    (0, L.Z)({}, e),
                    {},
                    {
                      helpMonitorInfo: (0, L.Z)(
                        (0, L.Z)({}, e.helpMonitorInfo),
                        t
                      ),
                    }
                  );
                },
                setTicketInfo: function (e, t) {
                  return (0, L.Z)(
                    (0, L.Z)({}, e),
                    {},
                    { ticketInfo: (0, L.Z)((0, L.Z)({}, e.ticketInfo), t) }
                  );
                },
                setCandidateInfo: function (e, t) {
                  return (0, L.Z)(
                    (0, L.Z)({}, e),
                    {},
                    {
                      candidateInfo: (0, L.Z)((0, L.Z)({}, e.candidateInfo), t),
                    }
                  );
                },
                setCancelOrderDrawerInfo: function (e, t) {
                  return (0, L.Z)(
                    (0, L.Z)({}, e),
                    {},
                    { cancelOrderDrawerInfo: t }
                  );
                },
              },
            },
            j = {
              state: {
                isFoldRobTaskInfo: !0,
                toastCode: "",
                secondToastCode: "",
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
                tabsInfo: { multiplyGrabTabs: [], tabCode: "single-grab-tab" },
                isCanFriendSpeed: !1,
              },
              reducers: {
                setIsFoldRobTaskInfo: function (e, t) {
                  return (0, L.Z)(
                    (0, L.Z)({}, e),
                    {},
                    { isFoldRobTaskInfo: t }
                  );
                },
                setToastCode: function (e, t) {
                  return (0, L.Z)((0, L.Z)({}, e), {}, { toastCode: t });
                },
                setSecondToastCode: function (e, t) {
                  return (0, L.Z)((0, L.Z)({}, e), {}, { secondToastCode: t });
                },
                setPageLoading: function (e, t) {
                  return (0, L.Z)((0, L.Z)({}, e), {}, { pageLoading: t });
                },
                setSubscribeInfo: function (e, t) {
                  return (0, L.Z)(
                    (0, L.Z)({}, e),
                    {},
                    {
                      subscribeInfo: (0, L.Z)((0, L.Z)({}, e.subscribeInfo), t),
                    }
                  );
                },
                setConfigData: function (e, t) {
                  return (0, L.Z)(
                    (0, L.Z)({}, e),
                    {},
                    { configData: (0, L.Z)((0, L.Z)({}, e.configData), t) }
                  );
                },
                setShareInfo: function (e, t) {
                  return (0, L.Z)(
                    (0, L.Z)({}, e),
                    {},
                    { shareInfo: (0, L.Z)((0, L.Z)({}, e.shareInfo), t) }
                  );
                },
                setShareImageInfo: function (e, t) {
                  return (0, L.Z)(
                    (0, L.Z)({}, e),
                    {},
                    {
                      shareImageInfo: (0, L.Z)(
                        (0, L.Z)({}, e.shareImageInfo),
                        t
                      ),
                    }
                  );
                },
                setMultiplyShareImageInfo: function (e, t) {
                  return (0, L.Z)(
                    (0, L.Z)({}, e),
                    {},
                    {
                      multiplyShareImageInfo: (0, L.Z)(
                        (0, L.Z)({}, e.multiplyShareImageInfo),
                        t
                      ),
                    }
                  );
                },
                setShowCount: function (e, t) {
                  return (0, L.Z)((0, L.Z)({}, e), {}, { showCount: t });
                },
                setTabsInfo: function (e, t) {
                  return (0, L.Z)(
                    (0, L.Z)({}, e),
                    {},
                    { tabsInfo: (0, L.Z)((0, L.Z)({}, e.tabsInfo), t) }
                  );
                },
                setIsCanFriendSpeed: function (e, t) {
                  return (0, L.Z)((0, L.Z)({}, e), {}, { isCanFriendSpeed: t });
                },
              },
            },
            R = {
              state: {
                greenChannelDetail: null,
                guaranteeInfo: null,
                seatProduct: {
                  seatProductBannerInfo: null,
                  seatProductToastInfo: null,
                  seatProductStatus: -1,
                },
                seatUpgradeProduct: {
                  seatUpgradeProductBannerInfo: null,
                  upSeatName: "",
                },
                specificallyGrab: {
                  specificallyGrabBannerDisplay: null,
                  specificallyGrabBannerInfo: null,
                  specificallyGrabDrawerInfo: null,
                  isAutoShowSpecificallyGrabDrawer: !1,
                  specialPersonGrabBoxInfo: null,
                  enterpriseWechatBtnInfo: null,
                },
                vipInfo: {
                  seasonMemberShipDrawerInfo: null,
                  seasonMemberShipBannerInfo: null,
                  seasonMemberOrderScene: 35,
                },
                grabSpeedUpInfo: { shareStatus: void 0 },
                failClaimProduct: {
                  grabDetailClaimInfo: null,
                  alternateClaimToast: null,
                  springFestivalGrabDetailClaimInfo: null,
                  springFestivalDrawerInfo: null,
                  speedUpAlternateClaimToast: null,
                  claimFailReason: "",
                },
                cuiChuPiaoData: {
                  cuiChuPiaoPath: {},
                  showCuiChuPiaoBanner: !0,
                  cuiChuPiaoInfo: {},
                  currentCuiSpeed: 0,
                  speedDiff: 0,
                },
                festivalGrabInfo: null,
                noLoginT6GrabInfo: {
                  noLoginT6PurchasedBanner: null,
                  noLoginT6GrabBannerInfo: null,
                  goodsInfo: null,
                  status: -1,
                },
              },
              reducers: {
                setGreenChannelDetail: function (e, t) {
                  return (0, L.Z)(
                    (0, L.Z)({}, e),
                    {},
                    { greenChannelDetail: t }
                  );
                },
                setGuaranteeInfo: function (e, t) {
                  return (0, L.Z)((0, L.Z)({}, e), {}, { guaranteeInfo: t });
                },
                setSeatProduct: function (e, t) {
                  return (0, L.Z)(
                    (0, L.Z)({}, e),
                    {},
                    { seatProduct: (0, L.Z)((0, L.Z)({}, e.seatProduct), t) }
                  );
                },
                setSeatUpgradeProduct: function (e, t) {
                  return (0, L.Z)(
                    (0, L.Z)({}, e),
                    {},
                    {
                      seatUpgradeProduct: (0, L.Z)(
                        (0, L.Z)({}, e.seatUpgradeProduct),
                        t
                      ),
                    }
                  );
                },
                setSpecificallyGrab: function (e, t) {
                  return (0, L.Z)(
                    (0, L.Z)({}, e),
                    {},
                    {
                      specificallyGrab: (0, L.Z)(
                        (0, L.Z)({}, e.specificallyGrab),
                        t
                      ),
                    }
                  );
                },
                setVipInfo: function (e, t) {
                  return (0, L.Z)(
                    (0, L.Z)({}, e),
                    {},
                    { vipInfo: (0, L.Z)((0, L.Z)({}, e.vipInfo), t) }
                  );
                },
                setFailClaimProduct: function (e, t) {
                  return (0, L.Z)(
                    (0, L.Z)({}, e),
                    {},
                    {
                      failClaimProduct: (0, L.Z)(
                        (0, L.Z)({}, e.failClaimProduct),
                        t
                      ),
                    }
                  );
                },
                setCuiChuPiaoData: function (e, t) {
                  return (0, L.Z)(
                    (0, L.Z)({}, e),
                    {},
                    {
                      cuiChuPiaoData: (0, L.Z)(
                        (0, L.Z)({}, e.cuiChuPiaoData),
                        t
                      ),
                    }
                  );
                },
                setFestivalGrabInfo: function (e, t) {
                  return (0, L.Z)((0, L.Z)({}, e), {}, { festivalGrabInfo: t });
                },
                setNoLoginT6GrabInfo: function (e, t) {
                  return (0, L.Z)(
                    (0, L.Z)({}, e),
                    {},
                    {
                      noLoginT6GrabInfo: (0, L.Z)(
                        (0, L.Z)({}, e.noLoginT6GrabInfo),
                        t
                      ),
                    }
                  );
                },
              },
            },
            J = {
              state: {
                faceType: -1,
                faceSwipingData: null,
                orderInterceptT6AccountInfo: null,
                isShowPreLoginBanner: !1,
                orderInterceptInfo: null,
                mobileVerify: {
                  mobileVerifyKey: "",
                  verifyJumpUrl: "",
                  mobileVerifyPassengerList: [],
                },
              },
              reducers: {
                setOrderInterceptT6AccountInfo: function (e, t) {
                  return (0, L.Z)(
                    (0, L.Z)({}, e),
                    {},
                    {
                      orderInterceptT6AccountInfo: (0, L.Z)(
                        (0, L.Z)({}, e.orderInterceptT6AccountInfo),
                        t
                      ),
                    }
                  );
                },
                setFaceType: function (e, t) {
                  return (0, L.Z)((0, L.Z)({}, e), {}, { faceType: t });
                },
                setFaceSwipingData: function (e, t) {
                  return (0, L.Z)((0, L.Z)({}, e), {}, { faceSwipingData: t });
                },
                setIsShowPreLoginBanner: function (e, t) {
                  return (0, L.Z)(
                    (0, L.Z)({}, e),
                    {},
                    { isShowPreLoginBanner: t }
                  );
                },
                setOrderInterceptInfo: function (e, t) {
                  return (0, L.Z)(
                    (0, L.Z)({}, e),
                    {},
                    { orderInterceptInfo: t }
                  );
                },
                setMobileVerify: function (e, t) {
                  return (0, L.Z)(
                    (0, L.Z)({}, e),
                    {},
                    { mobileVerify: (0, L.Z)((0, L.Z)({}, e.mobileVerify), t) }
                  );
                },
              },
            },
            E = {
              state: {
                promiseCarInfo: {
                  promiseToast: null,
                  detailRolls: null,
                  promiseCarRecommendInfo: null,
                  isDisplayPromiseCar: 0,
                  showPromiseCarTip: !1,
                },
                crossStationSchemeInfos: [],
                relativeAccountInfo: {
                  relativeAccountShareInfo: null,
                  relativeKey: "",
                  selfAccountShareInfo: null,
                  accountDesc: null,
                  multiplyAccountGrabBannerInfo: null,
                  isAgreeProtocol: !1,
                },
                recommendedScheme: {
                  recommendedSchemeBannerCheckedList: [],
                  recommendedSchemeBannerInfo: null,
                  recommendedSchemeDrawerInfo: null,
                  recommendedSchemeDrawerIsSelectFirst: !1,
                  recommendedSchemeDrawerType: -1,
                },
              },
              reducers: {
                setPromiseCarInfo: function (e, t) {
                  return (0, L.Z)(
                    (0, L.Z)({}, e),
                    {},
                    {
                      promiseCarInfo: (0, L.Z)(
                        (0, L.Z)({}, e.promiseCarInfo),
                        t
                      ),
                    }
                  );
                },
                setCrossStationSchemeInfos: function (e, t) {
                  return (0, L.Z)(
                    (0, L.Z)({}, e),
                    {},
                    { crossStationSchemeInfos: t }
                  );
                },
                setRelativeAccountInfo: function (e, t) {
                  return (0, L.Z)(
                    (0, L.Z)({}, e),
                    {},
                    {
                      relativeAccountInfo: (0, L.Z)(
                        (0, L.Z)({}, e.relativeAccountInfo),
                        t
                      ),
                    }
                  );
                },
                setRecommendedScheme: function (e, t) {
                  return (0, L.Z)(
                    (0, L.Z)({}, e),
                    {},
                    {
                      recommendedScheme: (0, L.Z)(
                        (0, L.Z)({}, e.recommendedScheme),
                        t
                      ),
                    }
                  );
                },
              },
            },
            H = {
              state: { toasts: [], notices: [], areas: [] },
              reducers: {
                setOctopus: function (e, t) {
                  var a = t.notices,
                    n = t.toasts,
                    i = t.areas;
                  return (0, L.Z)(
                    (0, L.Z)({}, e),
                    {},
                    { notices: a, toasts: n, areas: i }
                  );
                },
              },
            },
            q = {
              my12306Model: G.Z,
              grabOrderModel: F,
              pageModel: j,
              productModel: R,
              t6Model: J,
              planModel: E,
              octopusModel: H,
            },
            U = (0, O.M)({ models: q }),
            K = a(10741),
            W = a(25391),
            Y = a(13025),
            Q = a(18783),
            $ = a(94190),
            ee = a(86977);
          (function (e) {
            (e.speedGrabTaskDrawer = "SpeedGrabTaskDrawer"),
              (e.goAppForPreSale = "goAppForPreSale"),
              (e.springFestivalDrawerVisible = "springFestivalDrawerVisible"),
              (e.productIntroductionDrawer = "productIntroductionDrawer"),
              (e.crossStation = "cross-station"),
              (e.prepaySuccessGuidePopup = "prepay-success-guide-popup"),
              (e.addToMyMiniappGuide = "add-to-my-miniapp-guide"),
              (e.hotelGrabVipDialog = "hotelGrabVipDialog"),
              (e.cancelSmartTicket = "cancelSmartTicket"),
              (e.showShareDrawer = "showShareDrawer"),
              (e.showHouBuOrderDetail = "showHouBuOrderDetail"),
              (e.showHouBuToast = "show-houbu-toast"),
              (e.showOpenHouBuPop = "showOpenHouBuPop"),
              (e.openHouBuFailToast = "openHouBuFailToast"),
              (e.showPriorityPopup = "showPriorityPopup"),
              (e.greenChannelPopup = "greenChannelPopup"),
              (e.showClaimPop = "showClaimPop"),
              (e.showCuiBelowVipPrompt = "showCuiBelowVipPrompt"),
              (e.showCuiWithVipPrompt = "showCuiWithVipPrompt"),
              (e.gzhPopup = "gzhPopup"),
              (e.recommendGrabOrderCommonToast =
                "recommendGrabOrderCommonToast"),
              (e.studentCardHasGotPop = "studentCardHasGotPop"),
              (e.showStudentActivity = "showStudentActivity"),
              (e.showStudentActivityNormal = "showStudentActivityNormal"),
              (e.studentCardUnlockPopup = "student-card-unlock-popup"),
              (e.confirmCompensate = "confirmCompensate"),
              (e.compensateSuccess = "compensateSuccess"),
              (e.payToUnlock = "payToUnlock"),
              (e.showStuAndNewGuestPrompt = "showStuAndNewGuestPrompt"),
              (e.showMobileVerifyPrompt = "showMobileVerifyPrompt"),
              (e.showSubscribeMask = "showSubscribeMask"),
              (e.subscribePopRobTicketPopup = "subscribePop_RobTicket_Popup"),
              (e.grabFailClaimDrawerVisible = "grabFailClaimDrawerVisible"),
              (e.settleClaimDialogVisible = "settleClaimDialogVisible"),
              (e.dualChannelGuideDialog = "dualChannelGuideDialog"),
              (e.houBuProgressPopVisible = "houBuProgressPopVisible"),
              (e.multiplyAccountQADrawerVisible =
                "multiplyAccountQADrawerVisible"),
              (e.claimFailReasonPop = "claim-fail-reason-pop"),
              (e.promiseIntoCarDrawer = "promiseIntoCarDrawer"),
              (e.idealTrainRescheduleDrawer = "idealTrainRescheduleDrawer"),
              (e.friendAccountDrawer = "friendAccountDrawer"),
              (e.specificallyGrabDrawer = "specificallyGrabDrawer"),
              (e.marketBigAmountCouponGiftsPopup =
                "market-big-amount-couponGifts-popup"),
              (e.recommendedSchemeDrawer = "recommendedSchemeDrawer"),
              (e.seasonMemberShipDrawer = "seasonMemberShipDrawer"),
              (e.activate12306AccountDrawer = "activate12306AccountDrawer"),
              (e.studentGrabTaskDrawer = "studentGrabTaskDrawer"),
              (e.seatProductDrawer = "seatProductDrawer"),
              (e.urgeSpecificallyGrabDrawer = "urgeSpecificallyGrabDrawer"),
              (e.urgeLoadingDrawer = "urgeLoadingDrawer"),
              (e.qwTaskDrawer = "qwTaskDrawer"),
              (e.isShowCancelConfirmDrawer = "isShowCancelConfirmDrawer"),
              (e.sfActivityFinishedDrawer = "sfActivityFinishedDrawer"),
              (e.waitOpenQADrawer = "waitOpenQADrawer"),
              (e.studentWelfareUnlockDrawer = "studentWelfareUnlockDrawer"),
              (e.studentWelfareDrawer = "studentWelfareDrawer"),
              (e.noLoginT6GrabDrawer = "noLoginT6GrabDrawer"),
              (e.grabShareImagePop = "grabShareImagePop"),
              (e.multiplyGrabShareImagePop = "multiplyGrabShareImagePop"),
              (e.otherSeatsDrawer = "otherSeatsDrawer"),
              (e.otherDatesDrawer = "otherDatesDrawer");
          })(D || (D = {})),
            (function (e) {
              (e.seckillToast = "seckillToast"),
                (e.wxOfficialGuideToast = "wxOfficialGuideToast"),
                (e.ideaTrainToast = "ideaTrainToast"),
                (e.grabCancelHotelToast = "grabCancelHotelToast"),
                (e.wxBigCouponToast = "wxBigCouponToast"),
                (e.nightTicketToast = "nightTicketToast"),
                (e.grabDetailCandidateClickToast =
                  "grabDetailCandidateClickToast"),
                (e.grabDetailRecommendCrossToast =
                  "GrabDetailRecommendCrossToast"),
                (e.grabStudentWelfareToast = "grabStudentWelfareToast"),
                (e.grabbingAddWeChat = "grabbingAddWeChat"),
                (e.publicSpringFestivalActivityDetail =
                  "publicSpringFestivalActivityDetail");
            })(k || (k = {})),
            (function (e) {
              (e.wxOfficialGuideToast = "gzhPopup"),
                (e.ideaTrainToast = "idealTrainRescheduleDrawer"),
                (e.grabCancelHotelToast = "hotelGrabVipDialog"),
                (e.wxBigCouponToast = "marketBigAmountCouponGiftsPopup"),
                (e.nightTicketToast = "specificallyGrabDrawer"),
                (e.grabDetailCandidateClickToast =
                  "activate12306AccountDrawer"),
                (e.grabDetailRecommendCrossToast = "recommendedSchemeDrawer"),
                (e.grabStudentWelfareToast = "studentGrabTaskDrawer"),
                (e.grabbingAddWeChat = "qwTaskDrawer"),
                (e.publicSpringFestivalActivityDetail =
                  "sfActivityFinishedDrawer");
            })(B || (B = {})),
            (function (e) {
              (e.studentVerifyArea = "studentVerifyArea"),
                (e.wxTaskResultArea = "wxTaskResultArea"),
                (e.hotelSpeedAndInviteArea = "hotelSpeedAndInviteArea"),
                (e.grabTicketSplitArea = "grabTicketSplitArea"),
                (e.weixinDiversionArea = "weixinDiversionArea"),
                (e.wxBigCouponArea = "wxBigCouponArea"),
                (e.smartSeatRecommendArea = "smartSeatRecommendArea");
            })(x || (x = {}));
          var te = a(76290),
            ae = a(20592),
            ne = a(5050),
            ie = function (e) {
              try {
                return "string" != typeof e ? e : JSON.parse(e);
              } catch (t) {
                return e;
              }
            },
            re = function (e) {
              var t = U.getState().octopusModel.notices,
                a = (void 0 === t ? [] : t).find(function (t) {
                  return t.noticeCode === e;
                }),
                n = ie(null == a ? void 0 : a.noticeJson);
              return (
                a &&
                (0, L.Z)(
                  (0, L.Z)({}, a),
                  {},
                  {
                    _jsonInfo: n
                      ? (0, L.Z)((0, L.Z)({}, n), {}, { _codeName: e })
                      : null,
                  }
                )
              );
            },
            oe = function (e) {
              var t = U.getState().octopusModel.areas,
                a = (void 0 === t ? [] : t).find(function (t) {
                  return t.areaCode === e;
                }),
                n = ie(null == a ? void 0 : a.areaJson);
              return (
                a &&
                (0, L.Z)(
                  (0, L.Z)({}, a),
                  {},
                  {
                    _jsonInfo: n
                      ? (0, L.Z)((0, L.Z)({}, n), {}, { _codeName: e })
                      : null,
                  }
                )
              );
            },
            ce = function (e) {
              var t = U.getState().octopusModel.toasts,
                a = (void 0 === t ? [] : t).find(function (t) {
                  return t.toastCode === e;
                }),
                n = ie(null == a ? void 0 : a.toastJson);
              return (
                a &&
                (0, L.Z)(
                  (0, L.Z)({}, a),
                  {},
                  {
                    _jsonInfo: n
                      ? (0, L.Z)(
                          (0, L.Z)((0, L.Z)({}, n), {
                            toastJson: ie(n.toastJson) || void 0,
                          }),
                          {},
                          { _codeName: e }
                        )
                      : null,
                  }
                )
              );
            },
            se = function () {
              var e,
                t = U.getPage().oid;
              return (
                (e = {}),
                (0, u.Z)(e, k.seckillToast, { id: t, maxTime: 1 }),
                (0, u.Z)(e, k.wxOfficialGuideToast, { id: t, maxTime: 1 }),
                (0, u.Z)(e, k.ideaTrainToast, { id: t, maxTime: 1 }),
                (0, u.Z)(e, k.wxBigCouponToast, { id: t, maxTime: 1 }),
                (0, u.Z)(e, k.nightTicketToast, { id: t, maxTime: 1 }),
                (0, u.Z)(e, k.grabDetailCandidateClickToast, {
                  id: t,
                  maxTime: 1,
                }),
                (0, u.Z)(e, k.grabStudentWelfareToast, { id: t, maxTime: 1 }),
                (0, u.Z)(e, k.grabDetailRecommendCrossToast, {
                  id: t,
                  maxTime: 1,
                }),
                (0, u.Z)(e, k.grabbingAddWeChat, { id: t, maxTime: 1 }),
                e
              );
            },
            le = (function () {
              var e = (0, r.Z)(
                (0, i.Z)().mark(function e(t) {
                  var a, n, r, o, c, s, l, d;
                  return (0, i.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (a = U.getPage().oid),
                              (n = t.orderInfo),
                              (r = t.orderInterceptInfo),
                              (o = (n || {}).monitorStatus),
                              (c = []),
                              r &&
                                0 !== r.hasLogin &&
                                0 === r.candidateStatus &&
                                c.push({ key: "autoActiveT6Flag", value: "1" }),
                              c.push({ key: "monitorStatus", value: o + "" }),
                              (s = se()),
                              (l = {}),
                              Object.keys(s).forEach(function (e) {
                                s[e].id && (l[e] = s[e].id);
                              }),
                              (e.next = 12),
                              (0, K.SON)({
                                orderNumber: a,
                                fromSource: 2,
                                ruleShowInfoList:
                                  te.ZP.getTrainCrossToastCountInStore4Service(
                                    l,
                                    te.y3.grabDetail
                                  ),
                                clientExtInfoList: c,
                              })
                            );
                          case 12:
                            return (d = e.sent), e.abrupt("return", d);
                          case 16:
                            return (
                              (e.prev = 16),
                              (e.t0 = e.catch(0)),
                              e.abrupt("return", null)
                            );
                          case 19:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 16]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            de = function () {
              var e,
                t,
                a =
                  null === (e = oe(x.hotelSpeedAndInviteArea)) || void 0 === e
                    ? void 0
                    : e._jsonInfo;
              console.log("speedTaskData", a);
              var n =
                  (a &&
                    (null === (t = Object.keys(a)) || void 0 === t
                      ? void 0
                      : t.find(function (e) {
                          var t;
                          return (
                            "hotel" ==
                            (null === (t = a[e]) || void 0 === t
                              ? void 0
                              : t.type)
                          );
                        }))) ||
                  -1,
                i = n >= 0 && a[n];
              2 === ae.Tr.scanHotelVipTaskStatus &&
                ae.Tr.oid === U.getPage().oid &&
                ((0, I.showToast)(
                  "已浏览酒店，抢票".concat(ne.Z.SPEED_PACK, "+2")
                ),
                (ae.Tr.scanHotelVipTaskStatus = 3)),
                i.tag
                  ? ((ae.Tr.oid = U.getPage().oid),
                    (ae.Tr.scanHotelVipTaskStatus = 0))
                  : ((ae.Tr.oid = U.getPage().oid),
                    (ae.Tr.scanHotelVipTaskStatus = 3));
            },
            ue = function () {
              var e,
                t = ($.t1.get() || {}).gzhgrabToast,
                a =
                  null === (e = oe("wxTaskResultArea")) || void 0 === e
                    ? void 0
                    : e._jsonInfo;
              a &&
                t &&
                f().showToast({ title: a, icon: "none", duration: 2e3 });
            },
            _e = function (e) {
              var t,
                a,
                n = U.getState().grabOrderModel.orderInfo.monitorStatus,
                i =
                  null ===
                    (t = U.getState().t6Model.orderInterceptT6AccountInfo) ||
                  void 0 === t
                    ? void 0
                    : t.interceptType,
                r = U.getState().my12306Model.memberStatus12306,
                o =
                  null == e ||
                  null ===
                    (a = e.filter(function (e) {
                      var t = e.toastType,
                        a = e.toastCode;
                      return 1 === t && k[a];
                    })[0]) ||
                  void 0 === a
                    ? void 0
                    : a.toastCode;
              if (o) {
                var c;
                if (
                  (o === k.nightTicketToast &&
                    (U.getDispatch().productModel.setSpecificallyGrab({
                      isAutoShowSpecificallyGrabDrawer: !0,
                    }),
                    U.ubtTrace(205920, {
                      exposureType: "popup",
                      bizKey: "z_detail_grab_24h_zrq_popup_show",
                    })),
                  o === k.ideaTrainToast && -1 === [2, 9].indexOf(n))
                )
                  return;
                if (o === k.grabDetailCandidateClickToast && "0" === r) return;
                if (
                  o === k.grabDetailCandidateClickToast &&
                  18 === n &&
                  [
                    "studentVerify",
                    "student_time_limit",
                    "student_invalid_gap",
                  ].includes(i)
                )
                  return;
                te.ZP.countTrainCrossToastInStore({
                  codeName: o,
                  fromPage: te.y3.grabDetail,
                  uniqueCountId:
                    null === (c = se()[o]) || void 0 === c ? void 0 : c.id,
                }),
                  B[o] && fa(B[o]);
              }
            },
            me = (function () {
              var e = (0, r.Z)(
                (0, i.Z)().mark(function e(t) {
                  var a, n, r, o, c, s, l;
                  return (0, i.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          (n = (a = t || {}).notices),
                            (r = void 0 === n ? [] : n),
                            (o = a.toasts),
                            (c = void 0 === o ? [] : o),
                            (s = a.areas),
                            (l = void 0 === s ? [] : s),
                            U.getDispatch().octopusModel.setOctopus({
                              notices: r,
                              toasts: c,
                              areas: l,
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
            pe = a(93761),
            fe = a(59076),
            he = a(2657),
            ge = function (e) {
              var t = e.helpMonitorInfo,
                a = e.passengerList;
              return Math.floor(t.helpMonitorSum / a.length);
            },
            be = function () {
              var e = U.getState().grabOrderModel.orderInfo.train,
                t = {
                  DepartStation: e.DepartureStationName,
                  ArriveStation: e.ArrivalStationName,
                  DepartDate: e.DepartureDate,
                };
              return (
                (0, I.showLoading)(),
                W.ZP.getTrainList(t)
                  .then(
                    (function () {
                      var e = (0, r.Z)(
                        (0, i.Z)().mark(function e(a) {
                          var n, r, o, c, s;
                          return (0, i.Z)().wrap(function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  (n = W.ZP.handleTrainsNotFilter(
                                    a,
                                    t.DepartDate
                                  )),
                                    (r =
                                      U.getState().grabOrderModel.ticketInfo),
                                    (o = r.trainStationInfos),
                                    (c = r.seatType),
                                    (s =
                                      (null == o ? void 0 : o.length) > 0
                                        ? n.filter(function (e) {
                                            return o.some(function (t) {
                                              return (
                                                ""
                                                  .concat(e.DepartStation, "-")
                                                  .concat(e.TrainNumber, "-")
                                                  .concat(e.ArriveStation) ===
                                                ""
                                                  .concat(t.departStation, "-")
                                                  .concat(t.trainNumber, "-")
                                                  .concat(t.arriveStation)
                                              );
                                            });
                                          })
                                        : n.filter(function (e) {
                                            return (
                                              c
                                                .split(",")
                                                .indexOf(e.TrainNumber) > -1
                                            );
                                          })),
                                    U.getDispatch().grabOrderModel.setOrderInfo(
                                      { chosenTrainList: s }
                                    ),
                                    (0, I.hideLoading)();
                                case 5:
                                case "end":
                                  return e.stop();
                              }
                          }, e);
                        })
                      );
                      return function (t) {
                        return e.apply(this, arguments);
                      };
                    })()
                  )
                  .catch(function (e) {
                    console.log(e),
                      (0, I.hideLoading)(),
                      f().showModal({
                        title: "提示",
                        content: "网络异常，请稍后再试。",
                        showCancel: !1,
                        confirmText: "确定",
                      });
                  })
              );
            },
            we = function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                t = e.resultMessage || "",
                a = e.resultCode;
              return !(
                (1 === a && e.orderInfo) ||
                (-1 === a
                  ? setTimeout(function () {
                      U.showCommonDialog({
                        title: "温馨提示",
                        content: "网络异常，请稍后重试～",
                        buttonName: "我知道了",
                        onButtonClick: function () {
                          f().navigateBack({
                            fail: function () {
                              h.Z.relaunchHome();
                            },
                          });
                        },
                      });
                    }, 0)
                  : 25122001 === a
                  ? setTimeout(function () {
                      U.showCommonDialog({
                        title: "温馨提示",
                        content: "未找到该订单，请确认您的账号是否登录正确～",
                        buttonName: "我知道了",
                        onButtonClick: function () {
                          f().navigateBack({
                            fail: function () {
                              h.Z.relaunchHome();
                            },
                          });
                        },
                      });
                    }, 0)
                  : (t.indexOf("未找到该监控订单") > -1 ||
                      t.indexOf("未找到该订单") > -1) &&
                    U.showCommonDialog({
                      content: "未找到该订单，请确认您的账号是否登录正确~",
                      onButtonClick: function () {
                        f().switchTab({ url: "/pages/myctrip/list/list" });
                      },
                    }),
                0)
              );
            },
            ve = function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                t = e.orderInfo,
                a = void 0 === t ? {} : t,
                n = a.monitorStatus,
                i = U.getPage() || {},
                r = i.oid,
                o = i.originOrderNumber;
              return [7, 8].includes(n)
                ? (U.redirectTo({
                    url: "/pages/trainDetail/grabsuccess/grabsuccess?oid="
                      .concat(r, "&originOrderNumber=")
                      .concat(o),
                  }),
                  !0)
                : 19 === n
                ? (U.redirectTo({
                    url: "/pages/trainDetail/jianlouConfirm/index?orderNumber=".concat(
                      r
                    ),
                  }),
                  !0)
                : void (
                    11 === n &&
                    U.redirectTo({
                      url: "/pages/trainsmart/smartCSTicket/index?orderNumber=".concat(
                        r
                      ),
                    })
                  );
            },
            Ze = function () {
              var e = U.getState().my12306Model || {},
                t = e.login12306Name,
                a = void 0 === t ? "" : t,
                n = e.login12306Pas,
                o = void 0 === n ? "" : n,
                c = e.auth12306Status,
                s = W.ZP.encode12306Account({
                  login12306Name: a,
                  login12306Pas: o,
                }),
                l = {
                  orderNumber: U.getPage().oid,
                  userAuth12306Status: c || -1,
                  userName: s.login12306Name || "",
                };
              return (0, fe.dl)(l).then(
                (function () {
                  var e = (0, r.Z)(
                    (0, i.Z)().mark(function e(t) {
                      return (0, i.Z)().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), we(t);
                            case 2:
                              if (!e.sent) {
                                e.next = 5;
                                break;
                              }
                              return e.abrupt("return");
                            case 5:
                              return (e.next = 7), ve(t);
                            case 7:
                              if (!e.sent) {
                                e.next = 10;
                                break;
                              }
                              return e.abrupt("return");
                            case 10:
                              return e.abrupt("return", t);
                            case 11:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })()
              );
            },
            Ne = function (e) {
              (function (e) {
                var t,
                  a,
                  n = U.getDispatch(),
                  i = e || {},
                  r = i.speedPointConfig,
                  o = i.vipFlag,
                  c = i.grabSpeedInfo,
                  s = i.hotelCouponInfo;
                o && r
                  ? (a = Math.floor(r.minCount * r.speedFactor + ge(e)))
                  : r && (a = Math.floor(r.minCount + ge(e)));
                for (
                  var l = 0,
                    d =
                      (null == r || null === (t = r.speedRange) || void 0 === t
                        ? void 0
                        : t.split(",")) || [],
                    u = 0;
                  u < d.length - 1;
                  u++
                )
                  if (a < d[u + 1]) {
                    l = d[u + 1] - a;
                    break;
                  }
                var _ = "",
                  m = [];
                c &&
                  (c.desc &&
                    ((_ = c.desc.replace(/<a([^>]*)>([^<]*)<\/a>/gi, "")),
                    (_ = h.Z.convertStr(_))),
                  (m = W.ZP.SPEED_LEVEL_NAME_LIST.map(function (e, t) {
                    return {
                      name: e.name,
                      isCurrent: t === c.speed - 1,
                      speed: t,
                    };
                  })));
                var p = !1;
                if (m) {
                  var f = m.find(function (e) {
                    return e.isCurrent;
                  });
                  f && -1 !== f.name.indexOf("VIP") && (p = !0);
                }
                n.grabOrderModel.setGrabSpeedInfo({
                  speedPointConfig: e.speedPointConfig,
                  vipName: e.vipName,
                  packPrice: e.orderInfo.packPrice,
                  speedPacks: e.orderInfo.speedPacks,
                  availablePackageNum: e.availableSpeedPoint,
                  isSpeedGrabBtnABTest: e.isResearchVersion,
                  speedPackageNum: l,
                  usedPackageNum: a,
                  speedLevels: m,
                  speed: null == c ? void 0 : c.speed,
                  buttonType: (null == c ? void 0 : c.buttonType) || "",
                  acceDesc: _,
                  isVIPGrab: p,
                  goldGrabFlag: !(null == c || !c.goldGrabFlag),
                  hotelCouponInfo: s,
                });
              })(e),
                (function (e) {
                  console.log(JSON.stringify(e), "抢票信息grabOrder");
                  var t = U.getDispatch(),
                    a = {},
                    n = e.grabDetailExt,
                    i = void 0 === n ? "" : n;
                  if (null != e && e.orderInfo) {
                    var r = e.orderInfo,
                      o = r.updateFlagStr,
                      c = r.fromStation,
                      s = void 0 === c ? {} : c,
                      l = r.toStation,
                      d = void 0 === l ? {} : l,
                      u = r.leaveDate,
                      _ = void 0 === u ? "" : u,
                      m = r.rescheduleGrabTips,
                      p = void 0 === m ? [] : m,
                      f = r.monitorStatus,
                      h = void 0 === f ? "" : f,
                      g = r.monitorStatusDesc,
                      b = void 0 === g ? "" : g,
                      w = r.monitorStatusDetial,
                      v = void 0 === w ? "" : w,
                      Z = r.deleteFlag,
                      N = void 0 !== Z && Z,
                      I = r.cancelFlag,
                      S = void 0 !== I && I,
                      T = r.payPrice,
                      y = void 0 === T ? "" : T,
                      V = r.payFlag,
                      C = void 0 !== V && V,
                      D = r.updateFlag,
                      k = r.timeRangEnd,
                      B = void 0 === k ? "" : k,
                      x = r.saleTime,
                      P = void 0 === x ? "" : x,
                      M = r.packPrice,
                      A = void 0 === M ? "" : M,
                      X = {
                        DepartureStationName: s.name || "",
                        ArrivalStationName: d.name || "",
                        DepartureDate: _.split(",")[0],
                      };
                    (a.train = X),
                      (a.rescheduleGrabTips = p),
                      (a.monitorStatus = h),
                      (a.monitorStatusDesc = b),
                      (a.monitorStatusDetail = v),
                      (a.deleteFlag = N),
                      (a.cancelFlag = S),
                      (a.updateFlag = D),
                      (a.updateFlagStr = o),
                      (a.payPrice = y),
                      (a.payFlag = C),
                      (a.grabDetailExt = i),
                      (a.timeRangEnd = B),
                      (a.saleTime = P),
                      (a.packPrice = A);
                  }
                  if (
                    ((a.crossStationInfos = e.crossStationInfos || []),
                    e.originalOrder)
                  ) {
                    var z = e.originalOrder;
                    a.originalOrder = z;
                  }
                  t.grabOrderModel.setOrderInfo(a);
                })(e),
                (function (e) {
                  var t = U.getDispatch(),
                    a = U.getState().grabOrderModel,
                    n = a.trainInfo || {},
                    i = a.dateInfo || {};
                  if (null != e && e.orderInfo) {
                    var r = e.passengerList,
                      o = void 0 === r ? [] : r,
                      c = e.orderInfo || {},
                      s = c.trainNo,
                      l = void 0 === s ? "" : s,
                      d = c.saleTime,
                      u = void 0 === d ? "" : d,
                      _ = c.seatType,
                      m = void 0 === _ ? "" : _,
                      p = c.fromStation,
                      f = void 0 === p ? {} : p,
                      h = c.toStation,
                      g = void 0 === h ? {} : h,
                      b = c.passenger,
                      w = void 0 === b ? "" : b,
                      v = c.leaveDate,
                      Z = void 0 === v ? "" : v,
                      N = c.arrivalDateTime,
                      I = void 0 === N ? "" : N,
                      S = c.trainStationInfos,
                      T = void 0 === S ? [] : S,
                      y = {
                        trainNo: l,
                        saleTime: u,
                        seatType: m,
                        fromStation: f,
                        toStation: g,
                        passenger: w,
                        leaveDate: Z,
                        passengerList: o,
                        arrivalDateTime: I,
                        trainStationInfos: T,
                      };
                    if (
                      (0 === Reflect.ownKeys(i).length
                        ? t.grabOrderModel.setDateInfo({
                            currLeaveDate: Z,
                            isEditor: !1,
                          })
                        : Reflect.has(i, "currLeaveDate") &&
                          (null == i ? void 0 : i.currLeaveDate) !== Z &&
                          t.grabOrderModel.setDateInfo({
                            currLeaveDate: Z,
                            isEditor: !0,
                          }),
                      0 === Reflect.ownKeys(n).length)
                    )
                      t.grabOrderModel.setTrainInfo({
                        oldStationInfos: T,
                        isEditor: !1,
                      });
                    else {
                      var V = JSON.stringify(T);
                      if (Reflect.has(n, "oldStationInfos")) {
                        var C = n.oldStationInfos;
                        if (JSON.stringify(C) !== V) {
                          var D = W.ZP.findDifferentItems(T, C, [
                            "departTime",
                            "departStation",
                            "trainNumber",
                          ]);
                          t.grabOrderModel.setTrainInfo({
                            currentStationInfos: D,
                            isEditor: !0,
                            oldStationInfos: T,
                          });
                        }
                      }
                    }
                    t.grabOrderModel.setTicketInfo(y);
                  }
                })(e),
                (function (e) {
                  var t,
                    a = e.candidateOrderInfo,
                    n = e.commonToasts,
                    i = void 0 === n ? [] : n,
                    r = e.orderInfo,
                    o = void 0 === r ? {} : r,
                    c = U.getDispatch(),
                    s = {};
                  1 ===
                    (null == a ||
                    null === (t = a.candidateStatus) ||
                    void 0 === t
                      ? void 0
                      : t.code) &&
                    (a.candidateStatus.remarkStr = h.Z.convertStr(
                      a.candidateStatus.remark
                    )),
                    (s.grabHouBuInfo = a);
                  var l = i.find(function (e) {
                    return "candidateOpen" === e.name;
                  });
                  l &&
                    l.content.length > 0 &&
                    (l.contentList = l.content.map(function (e) {
                      return "• " + h.Z.convertStr(e);
                    })),
                    (s.grabHouBuToast = l),
                    null == a ||
                      !a.candidateStatus ||
                      (2 !== o.monitorStatus && 9 !== o.monitorStatus) ||
                      U.ubtTrace(205910, {
                        exposureType: "normal",
                        bizKey: "z_hybq_houbu_module_show",
                      });
                  var d =
                    "B" == (0, he.XQ)() &&
                    a &&
                    a.candidateStatus &&
                    4 === a.candidateStatus.code &&
                    ![16, 17, 18].includes(e.orderInfo.monitorStatus);
                  (s.dualChannelGuideVisible = d),
                    d &&
                      !U.getPage().hasShowDualChannelGuideDialog &&
                      ((U.getPage().hasShowDualChannelGuideDialog = !0),
                      fa(D.dualChannelGuideDialog));
                  var u =
                    (null == a ? void 0 : a.candidateTicketDetail) || null;
                  (s.candidateTicketDetail = u),
                    c.grabOrderModel.setCandidateInfo(s);
                })(e),
                (function (e) {
                  var t = e.helpMonitorInfo;
                  U.getDispatch().grabOrderModel.setHelpMonitorInfo(t);
                })(e),
                (function (e) {
                  var t = e.grabProcessInfo;
                  if (
                    e.grabProcessInfo &&
                    ![4, 5, 6].includes(e.grabProcessInfo.processFlag)
                  ) {
                    var a,
                      n,
                      i = t.welfareInfo ? JSON.parse(t.welfareInfo) : null,
                      r = t.payToUnLockToast
                        ? JSON.parse(t.payToUnLockToast)
                        : null,
                      o = t.claimInfo ? JSON.parse(t.claimInfo) : null,
                      c = t.friendShareToast
                        ? JSON.parse(t.friendShareToast)
                        : null,
                      s =
                        null !== (a = c) && void 0 !== a && a.shareList
                          ? c.shareList
                          : [],
                      l =
                        null !== (n = c) && void 0 !== n && n.needShareCount
                          ? c.needShareCount
                          : 5,
                      d = 0;
                    if (s && Array.isArray(s))
                      for (var u = 0; u < l; u++) s[u] && d++;
                    r &&
                      (r = (0, L.Z)(
                        (0, L.Z)({}, r),
                        {},
                        {
                          title: h.Z.convertStr(r.title || ""),
                          freeButtonDesc: h.Z.convertStr(
                            r.freeButtonDesc ||
                              "邀请".concat(l, "位好友解锁全部学生福利")
                          ),
                        }
                      )),
                      c &&
                        (c = (0, L.Z)(
                          (0, L.Z)({}, c),
                          {},
                          { title: h.Z.convertStr(c.title) }
                        ));
                    var _ = (f().getStorageSync("firstShare") || []).some(
                        function (e) {
                          return e === U.getPage().oid;
                        }
                      ),
                      m = d > 0 || !!_;
                    U.getDispatch().grabOrderModel.setGrabProcessInfo({
                      processFlag: t.processFlag,
                      unlockFlag: t.unlockFlag,
                      welfareInfo: i,
                      claimInfo: o,
                      invitedNum: d,
                      payToUnLockToast: r,
                      friendShareToast: c,
                      isSecondShare: m,
                    });
                  } else
                    U.getDispatch().grabOrderModel.setGrabProcessInfo({
                      processFlag: 0,
                      realProcessFlag:
                        null != t && t.processFlag ? t.processFlag : 0,
                    });
                })(e),
                (function (e) {
                  var t = e.priceDetail;
                  U.getDispatch().grabOrderModel.setPriceDetail(t);
                })(e);
            },
            Ie = function (e) {
              var t, a;
              e &&
                1 ===
                  (null == e ||
                  null === (t = e.candidateOrderInfo) ||
                  void 0 === t ||
                  null === (a = t.candidateStatus) ||
                  void 0 === a
                    ? void 0
                    : a.code) &&
                U.getPage().oid &&
                (0, fe.N3)({
                  orderNumber: U.getPage().oid,
                  candidateOrderNum:
                    null == e ? void 0 : e.candidateOrderInfo.candidateOrderNum,
                }).then(function () {});
            },
            Se = function (e) {
              var t = ((e || {}).orderInfo || {}).monitorStatus;
              be(), [2, 9].includes(t) && ze();
            },
            Te = function (e) {
              return pe.ZP.doPayment({
                business: "train",
                orderNumber: e || U.getPage().oid,
              });
            },
            ye = function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : [],
                t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : [];
              return (0, K.ggz)({ orderNumber: U.getPage().oid })
                .then(function (t) {
                  if (1 == t.resultCode)
                    return W.ZP.formatCrossSolutionsV2(t.crossStationInfos, e);
                })
                .then(function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : [];
                  return t.length > 0
                    ? e.filter(function (e) {
                        return !!t.find(function (t) {
                          return W.ZP.isSameCrossStationSolution(e, t);
                        });
                      })
                    : e.filter(function (e) {
                        return (null == e ? void 0 : e.chooseType) > -1;
                      });
                })
                .catch(function (e) {
                  console.log("获取跨站抢信息报错"), console.log(e);
                });
            },
            Ve = (function () {
              var e = (0, r.Z)(
                (0, i.Z)().mark(function e() {
                  var t,
                    a,
                    n,
                    r,
                    o,
                    c,
                    s,
                    l,
                    d = arguments;
                  return (0, i.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ((t = d.length > 0 && void 0 !== d[0] ? d[0] : {}),
                            (a = d.length > 1 ? d[1] : void 0),
                            (n =
                              U.getState().grabOrderModel.orderInfo
                                .crossStationInfos),
                            (r =
                              U.getState().grabOrderModel.ticketInfo.seatType.split(
                                ","
                              )),
                            (o = function (e) {
                              console.log(e),
                                f().showModal({
                                  title: "提示",
                                  content:
                                    e ||
                                    "系统异常，提交订单失败。我们正在努力修复，请稍候再试。",
                                  showCancel: !1,
                                  confirmText: "确定",
                                });
                            }),
                            (c = {
                              orderNumber: U.getPage().oid,
                              mobile: Q.ZP.userName,
                              contactMobile: "",
                              crossStationFlag: -1,
                              speedSum: -1,
                              nearTrainFlag: -1,
                              trainInfo: {
                                trainNo: "",
                                seatName: "",
                                fromName: "",
                                toName: "",
                                fromDate: "",
                              },
                              crossStationInfos: [],
                            }),
                            t.updatedTrainInfoList &&
                              t.updatedTrainInfoList.length > 0 &&
                              ((s = t.updatedTrainInfoList),
                              (c.trainInfo.trainNo = Array.from(
                                new Set(
                                  s.map(function (e) {
                                    return e.trainNumber;
                                  })
                                )
                              ).join(",")),
                              (c.trainInfo.trainStationInfos = s)),
                            t.updatedDateList &&
                              t.updatedDateList.length > 0 &&
                              (c.trainInfo.fromDate =
                                t.updatedDateList.join(",")),
                            t.updatedSpeedNum &&
                              ((c.speedSum = t.updatedSpeedNum),
                              (c.selectSpeed = t.selectSpeed),
                              t.treasuresGoods &&
                                (c.treasuresGoods = t.treasuresGoods)),
                            !(
                              t.updatedSeatNameList &&
                              t.updatedSeatNameList.length > 0
                            ))
                          ) {
                            e.next = 17;
                            break;
                          }
                          if (
                            ((c.trainInfo.seatName =
                              t.updatedSeatNameList.join(",")),
                            !n)
                          ) {
                            e.next = 17;
                            break;
                          }
                          return (e.next = 14), ye(t.updatedSeatNameList, n);
                        case 14:
                          (l = e.sent),
                            (c.crossStationFlag = 1),
                            (c.crossStationInfos = l);
                        case 17:
                          if (
                            !(
                              t.updatedCrossStationsInfos &&
                              t.updatedCrossStationsInfos.length > 0
                            )
                          ) {
                            e.next = 26;
                            break;
                          }
                          if (
                            ((c.crossStationFlag = 1), !t.isNeedGetSeatPrice)
                          ) {
                            e.next = 25;
                            break;
                          }
                          return (
                            (e.next = 22), ye(r, t.updatedCrossStationsInfos)
                          );
                        case 22:
                          (c.crossStationInfos = e.sent), (e.next = 26);
                          break;
                        case 25:
                          c.crossStationInfos = t.updatedCrossStationsInfos;
                        case 26:
                          return e.abrupt(
                            "return",
                            (0, fe.hc)(c)
                              .then(function (e) {
                                return 1 == e.resultCode
                                  ? e.needPay
                                    ? Te(e.payOrderNumber)
                                        .then(function () {
                                          return (
                                            (0, I.showToast)("抢票详情已更新"),
                                            setTimeout(function () {
                                              wa();
                                            }, 200),
                                            { success: !0 }
                                          );
                                        })
                                        .catch(function () {
                                          var e =
                                              arguments.length > 0 &&
                                              void 0 !== arguments[0]
                                                ? arguments[0]
                                                : {},
                                            t = e.errorMsg;
                                          console.log("支付失败", t);
                                        })
                                    : (a
                                        ? a()
                                        : (0, I.showToast)("抢票详情已更新"),
                                      setTimeout(function () {
                                        wa();
                                      }, 200),
                                      { success: !0 })
                                  : o(e.resultMessage);
                              })
                              .catch(o)
                          );
                        case 27:
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
            Ce = function (e) {
              var t = e || {},
                a = t.num,
                n = void 0 === a ? 0 : a,
                i = t.speedPackageNum,
                r = void 0 === i ? 0 : i,
                o = t.selectSpeedIndex,
                c = t.goodsInfo,
                s = U.getState().grabOrderModel,
                l = {
                  updatedSpeedNum:
                    0 === n
                      ? +r + s.grabSpeedInfo.speedPacks
                      : n - s.helpMonitorInfo.helpMonitorSum,
                };
              o >= 0 && (l.selectSpeed = o + 1), c && (l.treasuresGoods = [c]);
              return (
                (0, I.showLoading)(),
                Ve(l, function () {
                  U.showCommonDialog({
                    content: "".concat(
                      ne.Z.SPEED_PACK,
                      "金额将在抢票成功后从绑定的支付账户中自动扣除，抢不到不收取任何费用"
                    ),
                    buttonName: "我知道了",
                  });
                }).finally(function () {
                  (0, I.hideLoading)();
                })
              );
            },
            De = function (e) {
              var t = (U.getState().pageModel.configData || {}).shareImgs,
                a = {
                  grabOrder: U.getPage().grabOrder,
                  shareImgs: t,
                  oid: U.getPage().oid,
                  cancelGrabTicketTotalInfo: e,
                };
              U.navigateTo({
                url: "/pages/train/detention/detention",
                data: a,
                callback: function (e) {
                  null != e &&
                    e.isRefreshPage &&
                    setTimeout(function () {
                      wa();
                    }, 300);
                },
              });
            },
            ke = (function () {
              var e = (0, r.Z)(
                (0, i.Z)().mark(function e() {
                  var t, a, n, r, o, c, s, l, d, u, _, m;
                  return (0, i.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (t =
                                U.getState().grabOrderModel.candidateInfo
                                  .grabHouBuInfo),
                              (a = {
                                orderNumber: U.getPage().oid,
                                standByOrderNum:
                                  (null == t ? void 0 : t.candidateOrderNum) ||
                                  "0",
                              }),
                              (e.next = 4),
                              (0, fe.C9)(a).catch()
                            );
                          case 4:
                            if (
                              ((n = e.sent),
                              (r = "确认取消抢票？"),
                              (o = ["是否现在取消抢票"]),
                              !n || 1 != n.resultCode)
                            ) {
                              e.next = 12;
                              break;
                            }
                            if (!n.cancelGrabTicketTotal) {
                              e.next = 11;
                              break;
                            }
                            return (
                              De(n.cancelGrabTicketTotal), e.abrupt("return")
                            );
                          case 11:
                            n.cancelAppointment &&
                              n.cancelAppointment.title &&
                              ((c = n.cancelAppointment),
                              (r = c.title),
                              (o = c.descList));
                          case 12:
                            if (
                              ((s = { title: r, desc: o.join() }),
                              (l = U.getState().grabOrderModel.orderInfo),
                              (d = l.monitorStatus),
                              (u = l.originalOrder),
                              !!(10 === d || (9 === d && u)))
                            ) {
                              e.next = 26;
                              break;
                            }
                            return (
                              (e.prev = 16),
                              (e.next = 19),
                              (0, K.TSq)({ orderNumber: U.getPage().oid })
                            );
                          case 19:
                            1 ===
                              (null == (m = e.sent) ? void 0 : m.resultCode) &&
                              null != m &&
                              null !== (_ = m.cancelEntity) &&
                              void 0 !== _ &&
                              _.windowEntity &&
                              (s.memberCancelInfo =
                                m.cancelEntity.windowEntity),
                              (e.next = 26);
                            break;
                          case 23:
                            (e.prev = 23),
                              (e.t0 = e.catch(16)),
                              console.log(e.t0);
                          case 26:
                            fa(D.isShowCancelConfirmDrawer),
                              U.getDispatch().grabOrderModel.setCancelOrderDrawerInfo(
                                s
                              );
                          case 28:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[16, 23]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            Be = function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              U.getDispatch().grabOrderModel.setIsShowModal(e);
            },
            xe = function () {
              pe.ZP.doPayment({
                business: "train",
                orderNumber: U.getPage().oid,
              })
                .then(function () {
                  (0, K.hx)({
                    fromPage: 2,
                    orderNumber: U.getPage().oid,
                  }).catch(function (e) {
                    console.log(e);
                  }),
                    (U.getPage().jumpFromPayFlag = !0),
                    wa();
                })
                .catch(function (e) {
                  console.error("toPay", e);
                });
            },
            Pe = (function () {
              var e = (0, r.Z)(
                (0, i.Z)().mark(function e() {
                  var t;
                  return (0, i.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              U.ubtTrace(195703),
                              (e.prev = 1),
                              (0, I.showLoading)("正在删除订单..."),
                              (e.next = 5),
                              (0, K.FBT)({ orderNumber: U.getPage().oid })
                            );
                          case 5:
                            1 === (t = e.sent).resultCode
                              ? setTimeout(function () {
                                  (0, I.hideLoading)();
                                  var e = f().getCurrentPages();
                                  1 === (e ? e.length : 1)
                                    ? h.Z.relaunchHome()
                                    : f().navigateBack();
                                }, 1e3)
                              : ((0, I.hideLoading)(),
                                f().showToast({
                                  title:
                                    t.resultMessage || "删除失败，请稍后再试~",
                                  icon: "none",
                                  duration: 2e3,
                                })),
                              (e.next = 14);
                            break;
                          case 9:
                            (e.prev = 9),
                              (e.t0 = e.catch(1)),
                              (0, I.hideLoading)(),
                              console.log(e.t0),
                              f().showToast({
                                title: "删除失败，请稍后再试~",
                                icon: "none",
                                duration: 2e3,
                              });
                          case 14:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[1, 9]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            Me = function () {
              var e = U.getState().grabOrderModel.ticketInfo,
                t = {
                  fromStation: e.fromStation || "",
                  toStation: e.toStation || "",
                  passengerList: e.passengerList,
                  submitedTrainNumberList: e.trainNo.split(","),
                  submitedCusIndexList: e.trainStationInfos.map(function (e) {
                    return ""
                      .concat(e.departStation, "-")
                      .concat(e.trainNumber, "-")
                      .concat(e.arriveStation);
                  }),
                  submitedDateList: e.leaveDate.split(","),
                  submitedSeatList: e.seatType.split(","),
                };
              U.navigateTo({ data: t, url: "/pages/trainRob/setgrab/setgrab" });
            },
            Ae = (function () {
              var e = (0, r.Z)(
                (0, i.Z)().mark(function e(t, a) {
                  return (0, i.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          a || pa();
                          try {
                            pe.ZP.doPayment({
                              business: "train",
                              orderNumber: t,
                            })
                              .then(function () {
                                return (
                                  setTimeout(function () {
                                    wa();
                                  }, 200),
                                  { success: !0 }
                                );
                              })
                              .catch(function () {});
                          } catch (e) {
                            console.log(e);
                          } finally {
                            (0, I.hideLoading)();
                          }
                        case 2:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t, a) {
                return e.apply(this, arguments);
              };
            })(),
            Xe = (function () {
              var e = (0, r.Z)(
                (0, i.Z)().mark(function e() {
                  var t,
                    a,
                    n,
                    r,
                    o,
                    c,
                    s,
                    l,
                    d,
                    u,
                    m,
                    p,
                    h,
                    g,
                    b,
                    w,
                    v,
                    Z,
                    N,
                    S,
                    T,
                    y = arguments;
                  return (0, i.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((t =
                                y.length > 0 && void 0 !== y[0] ? y[0] : {}),
                              (a = t.action),
                              (n = void 0 === a ? "" : a),
                              (r = t.pollingKey),
                              (o = void 0 === r ? "" : r),
                              (c = t.productList),
                              (s = void 0 === c ? [] : c),
                              (l = t.treasuresGoods),
                              (d = void 0 === l ? [] : l),
                              (u = t.pollingInterval),
                              (m = void 0 === u ? 0 : u),
                              (p = t.totalPollingTime),
                              (h = void 0 === p ? 20 : p),
                              (g = t.noCloseShowType),
                              (b = void 0 !== g && g),
                              !(m >= h))
                            ) {
                              e.next = 5;
                              break;
                            }
                            return (
                              b || pa(),
                              f().showToast({
                                title: "超时",
                                icon: "none",
                                duration: 2e3,
                              }),
                              e.abrupt("return")
                            );
                          case 5:
                            return (
                              (e.prev = 5),
                              (0, I.showLoading)(),
                              (e.next = 9),
                              (0, fe.uA)({
                                orderNumber: U.getPage().oid,
                                action: n,
                                pollingKey: o,
                                productList: s,
                                treasuresGoods: d,
                              })
                            );
                          case 9:
                            if (
                              ((w = e.sent),
                              (v = w.resultCode),
                              (Z = w.needPay),
                              (N = w.updateFailToast),
                              (S = w.resultMessage),
                              (T = w.payOrderNumber),
                              !Z)
                            ) {
                              e.next = 14;
                              break;
                            }
                            return (
                              (0, I.hideLoading)(), e.abrupt("return", Ae(T, b))
                            );
                          case 14:
                            if (1 !== v) {
                              e.next = 21;
                              break;
                            }
                            return (
                              (0, I.hideLoading)(),
                              b || pa(),
                              wa(),
                              e.abrupt("return", { success: !0 })
                            );
                          case 21:
                            2 === v
                              ? ((0, I.hideLoading)(),
                                f().showModal({
                                  title: N ? N.title : "温馨提示",
                                  content: N
                                    ? N.contents[0]
                                    : "网络开小差，请稍后再试",
                                  success: function () {},
                                }))
                              : 3 === v
                              ? setTimeout(function () {
                                  Xe({
                                    action: "query",
                                    pollingKey: w.pollingKey || o,
                                    productList: s,
                                    pollingInterval: w.pollingInterval + m,
                                    totalPollingTime: w.totalPollingTime || h,
                                    noCloseShowType: b,
                                  });
                                }, 1e3 * w.pollingInterval || 1e3)
                              : (b || pa(),
                                (0, I.hideLoading)(),
                                f().showModal({
                                  title: "提示",
                                  content: S || "系统改单失败",
                                  showCancel: !1,
                                  confirmText: "我知道了",
                                  confirmColor: _.default.isTieyou
                                    ? "#fc6e51"
                                    : "#0080FF",
                                  success: function (e) {
                                    e.confirm && wa();
                                  },
                                }));
                          case 22:
                            e.next = 28;
                            break;
                          case 24:
                            (e.prev = 24),
                              (e.t0 = e.catch(5)),
                              (0, I.hideLoading)(),
                              console.log(e.t0);
                          case 28:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[5, 24]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            ze = function () {
              var e = { orderNumber: U.getPage().oid, fromPage: 0 };
              return (0, fe.Kb)(e)
                .then(function (e) {
                  if (1 === e.resultCode) {
                    var t,
                      a,
                      n,
                      i,
                      r = {
                        title: e.title,
                        freeImproveSeat: e.freeImproveSeat,
                        grabFailReparation: e.grabFailReparation,
                        fullYearHighSpeedGrab: e.fullYearHighSpeedGrab,
                      },
                      o = {
                        desc:
                          (null === (t = e.banner) || void 0 === t
                            ? void 0
                            : t.buttonDesc) || "",
                        tag:
                          (null === (a = e.banner) || void 0 === a
                            ? void 0
                            : a.tag) || "",
                        title:
                          (null === (n = e.banner) || void 0 === n
                            ? void 0
                            : n.title) || "",
                        icon:
                          (null === (i = e.banner) || void 0 === i
                            ? void 0
                            : i.icon) || "",
                      };
                    U.getDispatch().grabOrderModel.setStudentWelfare({
                      studentWelfareDrawerInfo: r,
                      studentWelfareInfo: o,
                    });
                  } else U.getDispatch().grabOrderModel.setStudentWelfare({ studentWelfareDrawerInfo: null, studentWelfareInfo: null });
                })
                .catch(function () {
                  U.getDispatch().grabOrderModel.setStudentWelfare({
                    studentWelfareDrawerInfo: null,
                    studentWelfareInfo: null,
                  });
                });
            },
            Oe = function () {
              var e,
                t = ($.Kt.get() || {}).studentWelfareDrawerList || [],
                a =
                  U.getState().grabOrderModel.studentWelfare
                    .studentWelfareDrawerInfo;
              return !(
                null == a ||
                null === (e = a.freeImproveSeat) ||
                void 0 === e ||
                !e.unlock ||
                t.includes(U.getPage().oid) ||
                (Le(), 0)
              );
            },
            Ge = function () {
              var e = ($.Kt.get() || {}).studentWelfareDrawerList || [];
              e.push(U.getPage().oid),
                $.Kt.setAttr("studentWelfareDrawerList", e);
            },
            Le = function () {
              if (
                U.getState().grabOrderModel.studentWelfare
                  .studentWelfareUnlockDrawerInfo
              )
                return ga(D.studentWelfareUnlockDrawer), void Ge();
              var e = { orderNumber: U.getPage().oid, fromPage: 1 };
              return (
                (0, I.showLoading)(),
                (0, fe.Kb)(e)
                  .then(function (e) {
                    1 === e.resultCode
                      ? (ga(D.studentWelfareUnlockDrawer),
                        U.getDispatch().grabOrderModel.setStudentWelfare({
                          studentWelfareUnlockDrawerInfo:
                            e.unlockImproveSeatRights,
                        }),
                        Ge())
                      : U.getDispatch().grabOrderModel.setStudentWelfare({
                          studentWelfareUnlockDrawerInfo: null,
                        });
                  })
                  .finally(function () {
                    (0, I.hideLoading)();
                  })
              );
            },
            Fe = a(22276),
            je = function (e) {
              var t = U.getPage().oid,
                a = U.getDispatch();
              if (
                e &&
                e.grabDetailProductList &&
                Array.isArray(e.grabDetailProductList)
              ) {
                var n =
                    e.grabDetailProductList.find(function (e) {
                      return 9 === e.productType;
                    }) || null,
                  i = {};
                if (n) {
                  var r,
                    o = (0, L.Z)(
                      (0, L.Z)({}, n.saleShowInfo),
                      {},
                      { status: n.productStatus }
                    ),
                    c = JSON.parse(n.saleToastJson || "{}"),
                    s = n.productStatus;
                  o &&
                    -1 !=
                      [2, 9].indexOf(
                        null === (r = e.orderInfo) || void 0 === r
                          ? void 0
                          : r.monitorStatus
                      ) &&
                    U.ubtTrace("s_trn_z_10650060279", {
                      exposureType: "normal",
                      bizKey: "z_grab_detail_select_seattype_show",
                      type: o.title,
                      orderId: t,
                    }),
                    (i = {
                      seatProductBannerInfo: o,
                      seatProductToastInfo: c,
                      seatProductStatus: s,
                    });
                } else
                  i = {
                    seatProductBannerInfo: null,
                    seatProductToastInfo: null,
                    seatProductStatus: void 0,
                  };
                a.productModel.setSeatProduct(i);
                var l =
                    e.grabDetailProductList.find(function (e) {
                      return 34 === e.productType;
                    }) || null,
                  d = {};
                if (l) {
                  var u = (0, L.Z)(
                      (0, L.Z)({}, l.saleShowInfo),
                      {},
                      { type: l.productType }
                    ),
                    _ = l.productStatus;
                  d = {
                    noLoginT6GrabBannerInfo: u,
                    goodsInfo:
                      JSON.parse(l.saleToastJson || "{}").goodsInfo || null,
                    status: _,
                  };
                } else
                  d = {
                    noLoginT6GrabBannerInfo: null,
                    goodsInfo: null,
                    status: -1,
                  };
                a.productModel.setNoLoginT6GrabInfo(d);
                var m =
                    e.grabDetailProductList.find(function (e) {
                      return 29 === e.productType;
                    }) || null,
                  p = {};
                if (m)
                  p = {
                    seatUpgradeProductBannerInfo: (0, L.Z)(
                      (0, L.Z)({}, m.saleShowInfo),
                      {},
                      { status: m.productStatus }
                    ),
                    upSeatName: JSON.parse(m.ext || "{}").upSeatName || "",
                  };
                else p = { seatUpgradeProductBannerInfo: null, upSeatName: "" };
                a.productModel.setSeatUpgradeProduct(p);
              }
              var f = e.moduleInfo;
              f
                ? a.productModel.setNoLoginT6GrabInfo({
                    noLoginT6PurchasedBanner: f,
                  })
                : a.productModel.setNoLoginT6GrabInfo({
                    noLoginT6PurchasedBanner: null,
                  });
              var h = e.greenChannelDetail;
              a.productModel.setGreenChannelDetail(h);
              var g = e.guaranteerInfo;
              a.productModel.setGuaranteeInfo(g), Je(e);
            },
            Re = function (e) {
              var t = ((e || {}).orderInfo || {}).monitorStatus;
              Ee(e),
                He(),
                tt({ fromPage: 4, orderNumber: U.getPage().oid }),
                -1 === [16, 17, 18].indexOf(t) && (et(), qe()),
                (e.grabProcessInfo && 0 !== e.grabProcessInfo.processFlag) ||
                  We("query");
            },
            Je = function (e) {
              var t,
                a,
                n = e.nightSpecificallyGrabInfo,
                i = U.getDispatch(),
                r = {
                  specificallyGrabBannerDisplay: null,
                  specificallyGrabBannerInfo: null,
                  specificallyGrabDrawerInfo: null,
                  specialPersonGrabBoxInfo: null,
                };
              null !== (t = e.tabs) &&
                void 0 !== t &&
                null !== (a = t[1]) &&
                void 0 !== a &&
                a.specialPersonGrabInfo &&
                ((r.specialPersonGrabBoxInfo = e.tabs[1].specialPersonGrabInfo),
                U.ubtTrace("s_trn_z_10650060279", {
                  exposureType: "normal",
                  bizKey: "z_grab_detail_zrqp_tab_show",
                })),
                n &&
                  (n.display &&
                    n.nightGrabSpecificallyBanner &&
                    U.ubtTrace(205920, {
                      exposureType: "normal",
                      bizKey: "z_grab_detail_24h_zrq_modelue_show",
                    }),
                  Object.assign(r, {
                    specificallyGrabBannerDisplay: n.display || null,
                    specificallyGrabBannerInfo:
                      n.nightGrabSpecificallyBanner || null,
                    specificallyGrabDrawerInfo:
                      n.nightGrabSpecificallyToast || null,
                  })),
                i.productModel.setSpecificallyGrab(r);
            },
            Ee = function (e) {
              var t = U.getDispatch(),
                a = function () {
                  t.productModel.setVipInfo({
                    seasonMemberShipDrawerInfo: null,
                    seasonMemberShipBannerInfo: null,
                  });
                };
              if (1 === e.isCanOpenVip)
                return (0, fe.Z8)({ isAllStudent: 0, scene: 101 })
                  .then(function (e) {
                    var n;
                    1 === e.resultCode && e.wechatVipInfoV1
                      ? (e.wechatVipInfoV1.recommendVipInfo &&
                          U.ubtTrace(205920, {
                            exposureType: "normal",
                            bizKey: "z_detail_grab_applet_vip_modeule_show",
                          }),
                        t.productModel.setVipInfo({
                          seasonMemberShipDrawerInfo:
                            (null ===
                              (n = e.wechatVipInfoV1.vipDetailInfoList) ||
                            void 0 === n
                              ? void 0
                              : n[0]) || null,
                          seasonMemberShipBannerInfo:
                            e.wechatVipInfoV1.recommendVipInfo || null,
                        }))
                      : a();
                  })
                  .catch(function (e) {
                    a(), console.log(e);
                  });
              a();
            },
            He = function () {
              var e = { fromPage: 2, orderNumber: U.getPage().oid };
              return (0, fe.v6)(e)
                .then(function (e) {
                  if (1 === e.resultCode) {
                    var t = e.productInfo,
                      a = JSON.parse(t || "{}");
                    U.getDispatch().productModel.setSpecificallyGrab({
                      enterpriseWechatBtnInfo: a,
                    });
                  } else console.error("attractWeChatGroupLikePromise");
                })
                .catch(function () {});
            },
            qe = function () {
              var e = { orderNumber: U.getPage().oid };
              return (0, fe.LN)(e)
                .then(function (e) {
                  var t = {};
                  if (1 === e.resultCode) {
                    if (
                      (e.activityInfo
                        ? (t.springFestivalGrabDetailClaimInfo = (0, L.Z)(
                            (0, L.Z)({}, e.activityInfo),
                            {},
                            { activityState: e.activityState }
                          ))
                        : (t.springFestivalGrabDetailClaimInfo = null),
                      e.activityToast)
                    ) {
                      var a = JSON.parse(e.activityToast.toastJson || '""');
                      t.springFestivalDrawerInfo = (0, L.Z)(
                        { data: a, code: e.activityCode },
                        e.activityToast
                      );
                    }
                  } else (t.springFestivalGrabDetailClaimInfo = null), (t.springFestivalDrawerInfo = null);
                  U.getDispatch().productModel.setFailClaimProduct(t);
                })
                .catch(function (e) {
                  return console.log(e);
                });
            },
            Ue = function (e) {
              var t = 0;
              if (e <= 0) return t;
              for (var a = 1; a <= e; a++)
                t += ((Math.log(a + 1) - Math.log(a)) / 20) * 100;
              return +t.toFixed(1);
            },
            Ke = function () {
              var e = U.getState().grabOrderModel.grabSpeedInfo,
                t = !!(e && e.speed >= 6),
                a = e && e.speed ? e.speed - 1 : 0,
                n = U.getPage().oid || "",
                i = n.charAt(n.length - 1);
              i = i < 0 ? 0 : +i;
              var r = [9.2, 9.4, 9.6, 9.8, 10, 10.2, 10.4, 10.6, 10.8, 11];
              return t ? r[i] + 70 : r[i] + 10 * a;
            },
            We = function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "query",
                t = U.getDispatch().productModel.setCuiChuPiaoData,
                a = U.getState().grabOrderModel.grabSpeedInfo,
                n = U.getState().productModel.cuiChuPiaoData.cuiChuPiaoInfo,
                i = (null == a ? void 0 : a.speed) >= 6 ? 1 : 0,
                r = { orderNumber: U.getPage().oid, speedType: i, action: e };
              return (
                (0, I.showLoading)(),
                (0, fe.GQ)(r)
                  .then(function (a) {
                    if (a && 1 === a.resultCode) {
                      if ("query" === e) {
                        var i = {
                          jumpState: a.jumpState,
                          jumpUrl: a.jumpUrl,
                          specialGrabToastInfo: a.specialGrabToastInfo,
                        };
                        n = {
                          state: a.state,
                          speedUpTipInfo: a.speedUpTipInfo,
                          toast: a.toast,
                          times: a.times,
                        };
                        var r = Ue(a.times - 1),
                          o = Ue(a.times),
                          c = Ue(a.times + 1),
                          s = 2 === a.state ? o - r : c - o;
                        s = +s.toFixed(1);
                        var l =
                            "已获得" ===
                            (U.getState().productModel.festivalGrabInfo || {})
                              .status,
                          d = Ke() + o + (l ? 10 : 0);
                        n._showTag = !1;
                        var u = ($.t1.get() || {}).cuigrabId || [];
                        2 !== a.state &&
                          -1 === u.indexOf(U.getPage().oid) &&
                          (n._showTag = !0),
                          t({
                            cuiChuPiaoInfo: n,
                            cuiChuPiaoPath: i,
                            currentCuiSpeed: d,
                            speedDiff: s,
                          });
                      }
                    } else t({ showCuiChuPiaoBanner: !1 });
                  })
                  .catch(function (e) {
                    t({ showCuiChuPiaoBanner: !1 }), console.log(e);
                  })
                  .finally(function () {
                    (0, I.hideLoading)();
                  })
              );
            },
            Ye = function () {
              var e = U.getState().grabOrderModel,
                t = e.orderInfo,
                a = e.ticketInfo,
                n = JSON.parse(t.grabDetailExt),
                i = a.fromStation.name,
                r = a.toStation.name,
                o = a.leaveDate,
                c = n && n.ticketTime,
                s = a.arrivalDateTime,
                l = {};
              (l.data = {
                channel: "train",
                orderNumber: U.getPage().oid,
                departDateTime: o + " " + c,
                arriveDateTime: s,
                departStation: i,
                arriveStation: r,
                pageSource: "trainGrabSpeedUpTask",
              }),
                (0, K.tI_)(l).then(function (e) {
                  if (1 === e.resultCode) {
                    pa(),
                      U.getDispatch().grabOrderModel.setGrabSpeedInfo({
                        triggerSource: "",
                      });
                    var t = e.data.jumpUrl,
                      a = h.Z.parseQuery(t),
                      n = JSON.parse(a.filterDatas),
                      i = JSON.parse(a.script_data);
                    U.navigateTo({
                      url: ""
                        .concat("/pages/hotel/list/list", "?data=")
                        .concat(
                          encodeURIComponent(
                            JSON.stringify({
                              queryModel: i,
                              fromPage: "applets_qpUpToVip",
                              filterInfos: n,
                            })
                          )
                        ),
                    });
                  }
                });
            },
            Qe = function () {
              U.ubtTrace(199780);
              var e = U.getState().my12306Model || {},
                t = e.login12306Name,
                a = {
                  user12306Name: void 0 === t ? "" : t,
                  userAuth12306Status: e.auth12306Status || -1,
                  clickType: 0,
                  orderNumber: U.getPage().oid,
                };
              if (0 === ae.Tr.scanHotelVipTaskStatus)
                try {
                  (0, K.MyN)(a).then(function (e) {
                    if (1 === e.resultCode) {
                      var t = (0, L.Z)({}, a);
                      (t.clickType = 8),
                        (0, K.MyN)(t).then(function (e) {
                          1 === e.resultCode
                            ? ((ae.Tr.scanHotelVipTaskStatus = 1), Ye())
                            : (0, I.showToast)("网络错误，请稍后重试");
                        });
                    } else (0, I.showToast)("网络错误，请稍后重试");
                  });
                } catch (e) {
                  (0, I.showToast)("网络错误，请稍后重试");
                }
              else Ye();
            },
            $e = function () {
              var e = U.getState().productModel.festivalGrabInfo,
                t = (void 0 === e ? {} : e) || {},
                a = t.action,
                n = void 0 === a ? 0 : a,
                i = t.spCount,
                r = void 0 === i ? 0 : i,
                o = t.version,
                c = void 0 === o ? "" : o,
                s = U.getState().grabOrderModel.grabSpeedInfo.speedPacks,
                l = void 0 === s ? 50 : s;
              if (1 == n) {
                var d = { orderNumber: U.getPage().oid };
                r > 0
                  ? ((d.speedSum = r + l), (d.spUpdateFlag = 1))
                  : (0 !== c.indexOf("B") && 0 !== r) ||
                    ((d.speedSum = -1), (d.spUpdateFlag = 1)),
                  (function () {
                    var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : {},
                      t = arguments.length > 1 ? arguments[1] : void 0,
                      a = function (e) {
                        console.log(e),
                          f().showModal({
                            title: "提示",
                            content:
                              e ||
                              "系统异常，提交订单失败。我们正在努力修复，请稍候再试。",
                            showCancel: !1,
                            confirmText: "确定",
                          });
                      },
                      n = {
                        orderNumber: U.getPage().oid,
                        mobile: Q.ZP.userName,
                        contactMobile: "",
                        crossStationFlag: -1,
                        speedSum: -1,
                        nearTrainFlag: -1,
                        trainInfo: {
                          trainNo: "",
                          seatName: "",
                          fromName: "",
                          toName: "",
                          fromDate: "",
                        },
                        crossStationInfos: [],
                      };
                    return (
                      h.Z.mergeDeep(n, e),
                      (0, fe.hc)(n)
                        .then(function (e) {
                          return 1 == e.resultCode
                            ? e.needPay
                              ? Te(e.payOrderNumber)
                                  .then(function () {
                                    return (
                                      (0, I.showToast)("抢票详情已更新"),
                                      setTimeout(function () {
                                        wa();
                                      }, 200),
                                      { success: !0 }
                                    );
                                  })
                                  .catch(function () {
                                    var e =
                                        arguments.length > 0 &&
                                        void 0 !== arguments[0]
                                          ? arguments[0]
                                          : {},
                                      t = e.errorMsg;
                                    console.log("支付失败", t);
                                  })
                              : (t ? t() : (0, I.showToast)("抢票详情已更新"),
                                setTimeout(function () {
                                  wa();
                                }, 200),
                                { success: !0 })
                            : a(e.resultMessage);
                        })
                        .catch(a)
                    );
                  })(d).finally(function () {
                    (0, I.hideLoading)();
                  }),
                  U.ubtTrace(103418, { openId: Q.ZP.openid || "" });
              }
            },
            et = function () {
              var e = { orderNumber: U.getPage().oid };
              return (0, K.JkZ)(e)
                .then(function (e) {
                  var t = {};
                  1 === e.resultCode
                    ? (e.alternateClaimInfo &&
                        (t.grabDetailClaimInfo = (0, L.Z)(
                          (0, L.Z)({ status: e.status }, e.alternateClaimInfo),
                          {},
                          { type: e.type }
                        )),
                      e.alternateClaimToast &&
                        (t.alternateClaimToast = (0, L.Z)(
                          (0, L.Z)({}, e.alternateClaimToast),
                          {},
                          { type: e.type }
                        )),
                      U.getDispatch().productModel.setFailClaimProduct(t))
                    : U.getDispatch().productModel.setFailClaimProduct({
                        grabDetailClaimInfo: null,
                        alternateClaimToast: null,
                      });
                })
                .catch(function (e) {
                  return console.log(e);
                });
            },
            tt = (function () {
              var e = (0, r.Z)(
                (0, i.Z)().mark(function e() {
                  var t,
                    a,
                    n,
                    r,
                    o,
                    c,
                    s,
                    l,
                    d,
                    u,
                    _,
                    m,
                    p,
                    f,
                    h,
                    g,
                    b = arguments;
                  return (0, i.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((t =
                                b.length > 0 && void 0 !== b[0] ? b[0] : {}),
                              (a = t.fromPage),
                              (n = void 0 === a ? 0 : a),
                              (r = t.orderNumber),
                              (o = void 0 === r ? "" : r),
                              !U.getState().grabOrderModel.orderInfo.payFlag)
                            ) {
                              e.next = 3;
                              break;
                            }
                            return e.abrupt("return");
                          case 3:
                            return (
                              (c = { fromPage: n, orderNumber: o }),
                              (e.prev = 4),
                              (s =
                                U.getDispatch().productModel
                                  .setFailClaimProduct),
                              (e.next = 8),
                              (0, K.hx)(c)
                            );
                          case 8:
                            (l = e.sent) && 1 === l.resultCode
                              ? ((d = l.title),
                                (u = l.subTitle),
                                (_ = l.shareStatus),
                                (m = l.taskProducts),
                                (p = l.pictureList),
                                (f = l.grabDetailClaimInfo),
                                U.getDispatch().grabOrderModel.setGrabSpeedUpInfo(
                                  {
                                    title: d,
                                    subTitle: u,
                                    shareStatus: _,
                                    taskProducts: m,
                                    pictureList: p,
                                  }
                                ),
                                f &&
                                  ((h = (0, L.Z)(
                                    (0, L.Z)({}, f),
                                    {},
                                    { status: _, type: -1 }
                                  )),
                                  (g = (0, L.Z)(
                                    (0, L.Z)({}, f.claimToastInfo),
                                    {},
                                    { type: -1 }
                                  )),
                                  s({
                                    speedUpGrabDetailClaimInfo: h,
                                    speedUpAlternateClaimToast: g,
                                  })))
                              : s({ speedUpGrabDetailClaimInfo: null }),
                              (e.next = 15);
                            break;
                          case 12:
                            (e.prev = 12),
                              (e.t0 = e.catch(4)),
                              console.log(e.t0);
                          case 15:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[4, 12]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            at = (function () {
              var e = (0, r.Z)(
                (0, i.Z)().mark(function e(t) {
                  var a, n, r, o;
                  return (0, i.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              1 == (a = t.type) && U.ubtTrace(198095),
                              (n = {
                                orderNumber: U.getPage().oid,
                                claimType: 4,
                              }),
                              (0, I.showLoading)(),
                              (e.prev = 4),
                              (e.next = 7),
                              (0, K.LCX)(n)
                            );
                          case 7:
                            if (1 !== (r = e.sent).resultCode) {
                              e.next = 20;
                              break;
                            }
                            if (
                              ((o = r.noClaimReason || "") &&
                                (fa(D.claimFailReasonPop),
                                U.getDispatch().productModel.setFailClaimProduct(
                                  { claimFailReason: o }
                                )),
                              1 != a)
                            ) {
                              e.next = 16;
                              break;
                            }
                            return (e.next = 14), et();
                          case 14:
                            e.next = 19;
                            break;
                          case 16:
                            if (-1 != a) {
                              e.next = 19;
                              break;
                            }
                            return (
                              (e.next = 19),
                              tt({ fromPage: 4, orderNumber: U.getPage().oid })
                            );
                          case 19:
                            o || pa();
                          case 20:
                            e.next = 25;
                            break;
                          case 22:
                            (e.prev = 22),
                              (e.t0 = e.catch(4)),
                              console.warn(e.t0);
                          case 25:
                            return (
                              (e.prev = 25), (0, I.hideLoading)(), e.finish(25)
                            );
                          case 28:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[4, 22, 25, 28]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            nt = function () {
              var e = (
                  U.getState().productModel.noLoginT6GrabInfo
                    .noLoginT6PurchasedBanner || {}
                ).bizStatus,
                t = ($.Kt.get() || {}).hasShowNoLoginDrawerList || [];
              return !(
                ![1, 2].includes(e) ||
                t.includes(U.getPage().oid) ||
                (fa(D.noLoginT6GrabDrawer),
                $.Kt.setAttr(
                  "hasShowNoLoginDrawerList",
                  [].concat((0, Fe.Z)(t), [U.getPage().oid])
                ),
                0)
              );
            },
            it = function (e) {
              3 === (e.moduleInfo || {}).bizStatus &&
                setTimeout(function () {
                  wa();
                }, 2500);
            },
            rt = a(477),
            ot = (function () {
              var e = (0, r.Z)(
                (0, i.Z)().mark(function e(t) {
                  var a, n, r, o, c;
                  return (0, i.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((a = U.getDispatch().pageModel.setSubscribeInfo),
                              (e.prev = 1),
                              _.default.isWechat)
                            ) {
                              e.next = 4;
                              break;
                            }
                            return e.abrupt("return");
                          case 4:
                            if (
                              [2, 3, 4, 6, 9].includes(
                                t ||
                                  U.getState().grabOrderModel.orderInfo
                                    .monitorStatus
                              )
                            ) {
                              e.next = 7;
                              break;
                            }
                            return (
                              a({ showRobSubscription: !1 }), e.abrupt("return")
                            );
                          case 7:
                            return (
                              (e.next = 9), h.Z.getSubscribe(rt.Z.TMPIDS_LONG)
                            );
                          case 9:
                            if (
                              ((n = e.sent),
                              (r = n.mainSwitch),
                              (o = n.unKnownList),
                              r && h.Z.notEmptyArray(o) && o.length)
                            ) {
                              e.next = 19;
                              break;
                            }
                            return (e.next = 15), h.Z.getSubscribe(rt.Z.TMPIDS);
                          case 15:
                            (c = e.sent).mainSwitch &&
                            h.Z.notEmptyArray(c.unKnownList) &&
                            c.unKnownList.length
                              ? a({ showRobSubscription: !1 })
                              : a({
                                  showRobSubscriptionInfo: {
                                    tmpid: c.unKnownList,
                                  },
                                  showRobSubscription: !0,
                                }),
                              (e.next = 20);
                            break;
                          case 19:
                            a({
                              showRobSubscriptionInfo: { tmpid: o },
                              showRobSubscription: !0,
                            });
                          case 20:
                            e.next = 25;
                            break;
                          case 22:
                            (e.prev = 22),
                              (e.t0 = e.catch(1)),
                              console.log(e.t0);
                          case 25:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[1, 22]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            ct = (function () {
              var e = (0, r.Z)(
                (0, i.Z)().mark(function e() {
                  var t, a, n, r;
                  return (0, i.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (((e.prev = 0), _.default.isWechat)) {
                              e.next = 3;
                              break;
                            }
                            return e.abrupt("return");
                          case 3:
                            return (
                              (e.next = 5), h.Z.getSubscribe(rt.Z.TMPIDS_LONG)
                            );
                          case 5:
                            if (
                              ((t = e.sent),
                              (a = t.mainSwitch),
                              (n = t.unKnownList),
                              a && h.Z.notEmptyArray(n) && n.length)
                            ) {
                              e.next = 15;
                              break;
                            }
                            return (e.next = 11), h.Z.getSubscribe(rt.Z.TMPIDS);
                          case 11:
                            ((r = e.sent).mainSwitch &&
                              h.Z.notEmptyArray(r.unKnownList) &&
                              r.unKnownList.length) ||
                              (ga(D.showSubscribeMask),
                              h.Z.doSubscribe(r.unKnownList, "robTicket_share")
                                .then(function () {
                                  console.log("授权订阅 成功"), ba();
                                })
                                .catch(function (e) {
                                  console.log("授权订阅 取消或者失败", e), ba();
                                })),
                              (e.next = 17);
                            break;
                          case 15:
                            ga(D.showSubscribeMask),
                              h.Z.doSubscribe(n, "robTicket_share")
                                .then(function () {
                                  console.log("授权订阅 成功"), ba();
                                })
                                .catch(function (e) {
                                  console.log("授权订阅 取消或者失败", e), ba();
                                });
                          case 17:
                            e.next = 22;
                            break;
                          case 19:
                            (e.prev = 19),
                              (e.t0 = e.catch(0)),
                              console.log(e.t0);
                          case 22:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 19]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            st = (function () {
              var e = (0, r.Z)(
                (0, i.Z)().mark(function e() {
                  var t, a, n;
                  return (0, i.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              pa(),
                              (e.prev = 1),
                              (t = _.default.isTieyou
                                ? [
                                    "1Umg-WA3HbJAH3rWSCPNL2WgKdD_5fqpFJ2R0wwLGxc",
                                  ]
                                : [
                                    "EMW7V8tiT9y5fp2nlM1ewAxAePDGam3yPx4kpVCGTq0",
                                  ]),
                              (a = _.default.isTieyou
                                ? [
                                    "wIBbFH__8nnot_4Icg9TnQRZQ7U04TzBYQUZPMrn4l4",
                                  ]
                                : [
                                    "I-0p6TkhnI0vZFS-gddUN_p3dyAFz_zznOrSyCDm5nc",
                                  ]),
                              (e.next = 6),
                              h.Z.getSubscribe([].concat(t, a))
                            );
                          case 6:
                            (n = e.sent),
                              U.getDispatch().setSubscribeInfo({
                                needSubscribeSeckillList: n.unKnownList
                                  ? n.unKnownList.filter(function (e) {
                                      return e === a[0];
                                    })
                                  : [],
                                toSubscribeIds: n.unKnownList
                                  ? n.unKnownList.filter(function (e) {
                                      return e === t[0];
                                    })
                                  : [],
                              }),
                              ot(),
                              (e.next = 14);
                            break;
                          case 11:
                            (e.prev = 11),
                              (e.t0 = e.catch(1)),
                              console.log(e.t0);
                          case 14:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[1, 11]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            lt = function () {
              return new Promise(function (e) {
                if (!_.default.isWechat) return e(!1);
                var t = ($.t1.get() || {}).orderSubscribePop || [];
                if (-1 !== t.indexOf(U.getPage().oid)) return e(!1);
                h.Z.getSubscribe(
                  rt.Z.TMPIDS_LONG_INFO.map(function (e) {
                    return e.tempId;
                  })
                )
                  .then(function (a) {
                    var n = a.mainSwitch,
                      i = a.unKnownList;
                    n && Array.isArray(i) && i.length > 0
                      ? (fa(D.subscribePopRobTicketPopup),
                        U.getDispatch().pageModel.setSubscribeInfo({
                          subscribeModalInfo: {
                            title: "开启提醒",
                            desc: "关注好友加速进度 掌握订单成功率变化",
                            subList: rt.Z.TMPIDS_LONG_INFO.filter(function (e) {
                              return i.includes(e.tempId);
                            }),
                            sourceCode: "RobTicket_Popup",
                          },
                        }),
                        t.push(U.getPage().oid),
                        $.t1.setAttr("orderSubscribePop", t.slice(-100)),
                        e(!0))
                      : h.Z.getSubscribe(
                          rt.Z.TMPIDS_GRAB.map(function (e) {
                            return e.tempId;
                          })
                        )
                          .then(function (a) {
                            a.mainSwitch &&
                            Array.isArray(a.unKnownList) &&
                            a.unKnownList.length > 0
                              ? (fa(D.subscribePopRobTicketPopup),
                                U.getDispatch().pageModel.setSubscribeInfo({
                                  subscribeModalInfo: {
                                    title: "开启提醒",
                                    desc: "关注好友加速进度 掌握订单成功率变化",
                                    subList: rt.Z.TMPIDS_GRAB.filter(function (
                                      e
                                    ) {
                                      return a.unKnownList.includes(e.tempId);
                                    }),
                                    sourceCode: "RobTicket_Popup",
                                  },
                                }),
                                t.push(U.getPage().oid),
                                $.t1.setAttr(
                                  "orderSubscribePop",
                                  t.slice(-100)
                                ),
                                e(!0))
                              : e(!1);
                          })
                          .catch(function (t) {
                            console.log(t), e(!1);
                          });
                  })
                  .catch(function (t) {
                    console.log(t), e(!1);
                  });
              });
            },
            dt = (function () {
              var e = (0, r.Z)(
                (0, i.Z)().mark(function e(t) {
                  var a;
                  return (0, i.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              (0, K.ZEE)({
                                shareChannel: 1,
                                toStation: t.orderInfo.toStation.name || "",
                                ticketType:
                                  9 === t.orderInfo.monitorStatus ? "pre" : "",
                                shareKey: t.helpMonitorInfo.shareKey || "",
                              })
                            );
                          case 3:
                            (a = e.sent) &&
                              1 === a.resultCode &&
                              U.getDispatch().pageModel.setShareInfo({
                                isShareGZH:
                                  -1 !== [1, 2, 3, 4].indexOf(a.userShareType),
                                shareInfoList: a.shareInfoList,
                                customizeTagList: a.customizeTagList,
                              }),
                              console.log("getCustomizeShareInfoPromise", a),
                              (e.next = 11);
                            break;
                          case 8:
                            (e.prev = 8),
                              (e.t0 = e.catch(0)),
                              console.log(e.t0);
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
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            ut = function () {
              var e = U.getState().pageModel.shareInfo,
                t = e.shareIndex,
                a = e.customizeTagList,
                n = null;
              a && a.length > 0 && (n = a[t]);
              return n;
            },
            _t = function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "";
              (0, I.showLoading)();
              var t = { shareType: "weixin", shareKey: e };
              return (0, K._0V)(t).finally(function () {
                return (0, I.hideLoading)();
              });
            },
            mt = function () {
              U.getDispatch().pageModel.setToastCode(D.grabShareImagePop);
            },
            pt = function () {
              U.getDispatch().pageModel.setToastCode(
                D.multiplyGrabShareImagePop
              );
            },
            ft = function (e) {
              gt(e);
            },
            ht = function (e) {
              (function (e) {
                var t,
                  a,
                  n,
                  i = U.getDispatch(),
                  r = JSON.parse(
                    (null == e ? void 0 : e.grabDetailExt) || "{}"
                  ),
                  o = e.orderInfo,
                  c = {
                    departStation:
                      null == o || null === (t = o.fromStation) || void 0 === t
                        ? void 0
                        : t.name,
                    arriveStation:
                      null == o || null === (a = o.toStation) || void 0 === a
                        ? void 0
                        : a.name,
                    trainNumbers: null == o ? void 0 : o.trainNo,
                    seatNames: null == o ? void 0 : o.seatType,
                    departDate:
                      null == o || null === (n = o.leaveDate) || void 0 === n
                        ? void 0
                        : n.split(",")[0],
                    departTime: r.ticketTime,
                    orderNumber: U.getPage().oid,
                    source: "detailPage",
                  };
                (0, K.pe1)(c)
                  .then(function (e) {
                    if (e)
                      if (1 == e.resultCode) {
                        var t = (e.promiseEnter || {}).detailRolls;
                        i.planModel.setPromiseCarInfo({
                          promiseToast: e.promiseToast || {},
                          detailRolls: t,
                        });
                      } else {
                        var a = "网络请求失败，请重试";
                        e.resultMessage && (a = e.resultMessage),
                          console.warn(a),
                          i.planModel.setPromiseCarInfo({
                            promiseToast: null,
                            detailRolls: null,
                          });
                      }
                    else
                      console.error("网络请求失败，请重试"),
                        i.planModel.setPromiseCarInfo({
                          promiseToast: null,
                          detailRolls: null,
                        });
                  })
                  .catch(function (e) {
                    console.error(e),
                      i.planModel.setPromiseCarInfo({
                        promiseToast: null,
                        detailRolls: null,
                      });
                  });
              })(e),
                bt().then(function () {
                  wt(),
                    (function () {
                      var e,
                        t =
                          (null ===
                            (e =
                              U.getState().grabOrderModel.ticketInfo
                                .toStation) || void 0 === e
                            ? void 0
                            : e.name) || "",
                        a =
                          U.getState().planModel.relativeAccountInfo
                            .relativeAccountShareInfo,
                        n = "/pages/home/index",
                        i = "";
                      a &&
                        ((n = (0, ee.JP)(
                          "/pages/train/accounthelp/index1?relativeKey=".concat(
                            encodeURIComponent(a.relativeKey)
                          )
                        )),
                        (i = "我正在抢「".concat(t || "", "」的火车票"))),
                        U.getDispatch().pageModel.setMultiplyShareImageInfo({
                          path: n,
                          title: i,
                        });
                    })();
                }),
                (function (e) {
                  for (var t = !1, a = 0; a < e.length; a++) {
                    if ("学生票" == e[a].passengerType) {
                      t = !0;
                      break;
                    }
                  }
                  return t;
                })(null == e ? void 0 : e.passengerList) || vt(),
                e.originalOrder || Dt();
            };
          var gt = function (e) {
            var t = U.getDispatch(),
              a = (e || {}).promiseCarRecommendInfo;
            t.planModel.setPromiseCarInfo({
              promiseCarRecommendInfo: a,
              isDisplayPromiseCar: (null == a ? void 0 : a.display) || 0,
            });
          };
          var bt = function () {
              var e = U.getDispatch();
              return (0, fe.ze)({ orderNumber: U.getPage().oid })
                .then(function (t) {
                  if (t && 1 == t.resultCode) {
                    var a = t.commonShareList,
                      n = (void 0 === a ? [] : a).find(function (e) {
                        return "relativeAccount" == e.shareType;
                      });
                    if (n) {
                      var i = JSON.parse(n.shareInfoJson),
                        r = {
                          icon: i.icon,
                          title: i.title,
                          subTitle: i.subTitle,
                          relativeKey: i.relativeKey,
                          tag: i.tag,
                          showType: i.showType,
                        },
                        o = i.relativeKey;
                      e.planModel.setRelativeAccountInfo({
                        relativeAccountShareInfo: r,
                        relativeKey: o,
                      });
                      try {
                        var c =
                            U.getState().grabOrderModel.orderInfo.monitorStatus,
                          s = U.getState().t6Model.orderInterceptT6AccountInfo;
                        U.ubtTrace("QP_detail_train_wx_hybq_show", {
                          status: c,
                          interceptType:
                            (null == s ? void 0 : s.interceptType) || "",
                        });
                      } catch (e) {
                        console.log(e);
                      }
                      return;
                    }
                  }
                  e.planModel.setRelativeAccountInfo({
                    relativeAccountShareInfo: null,
                  });
                })
                .catch(function (t) {
                  console.log("getGrabOrderAccountRelativeInfo ERROR", t),
                    e.planModel.setRelativeAccountInfo({
                      relativeAccountShareInfo: null,
                    });
                });
            },
            wt = function () {
              var e = U.getDispatch(),
                t = U.getState().planModel.relativeAccountInfo.relativeKey;
              (0, fe.aA)(
                { relativeKey: t },
                { checkFrameworkLogin: !0, checkLogin: !0 }
              )
                .then(function (t) {
                  if (t && 1 == t.resultCode) {
                    if (
                      (t.relativeKey &&
                        e.planModel.setRelativeAccountInfo({
                          relativeKey: t.relativeKey,
                        }),
                      t.selfAccountShareInfo)
                    ) {
                      var a,
                        n,
                        i = t.selfAccountShareInfo,
                        r = i.relativeBindInfo,
                        o = i.orderRelativeInfo,
                        c = i.relativeAccountDesc,
                        s = i.relativeAccountArea,
                        l = {};
                      (l.title = null == c ? void 0 : c.title),
                        (l.descList =
                          null == c || null === (a = c.descList) || void 0 === a
                            ? void 0
                            : a.map(function (e) {
                                return {
                                  title: e.title,
                                  subTitle: e.subTitle,
                                  icon: e.icon,
                                };
                              })),
                        e.planModel.setRelativeAccountInfo({
                          selfAccountShareInfo: {
                            relativeBindInfo: {
                              currentBindCount:
                                (null == r ? void 0 : r.currentBindCount) || 0,
                              maxBindCount:
                                (null == r ? void 0 : r.maxBindCount) || 0,
                              selfInviteState:
                                null == r ? void 0 : r.selfInviteState,
                            },
                            orderRelativeInfo: {
                              title: null == o ? void 0 : o.title,
                              subTitle: null == o ? void 0 : o.subTitle,
                              btnName: null == o ? void 0 : o.btnName,
                              orderRelativeRecord:
                                null == o ||
                                null === (n = o.orderRelativeRecord) ||
                                void 0 === n
                                  ? void 0
                                  : n.map(function (e) {
                                      return {
                                        tag: e.tag,
                                        photo: e.photo,
                                        name: e.name,
                                      };
                                    }),
                              remark: null == o ? void 0 : o.remark,
                            },
                            isAgreeProtocal:
                              0 != (null == r ? void 0 : r.currentBindCount),
                          },
                          accountDesc: l,
                          multiplyAccountGrabBannerInfo: {
                            title: (null == s ? void 0 : s.title) || "",
                            freeTag: (null == s ? void 0 : s.freeTag) || "",
                            successTag:
                              (null == s ? void 0 : s.successTag) || "",
                            subTitle: (null == s ? void 0 : s.subTitle) || "",
                            photos: (null == s ? void 0 : s.photos) || [],
                            currentBindCount:
                              (null == r ? void 0 : r.currentBindCount) || 0,
                            maxBindCount:
                              (null == r ? void 0 : r.maxBindCount) || 0,
                          },
                        });
                    }
                  } else console.error("init data  result error ", t);
                })
                .catch(function (e) {
                  console.error("init data error ", e);
                });
            },
            vt = (function () {
              var e = (0, r.Z)(
                (0, i.Z)().mark(function e() {
                  var t, a;
                  return (0, i.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (t =
                                U.getDispatch().planModel.setRecommendedScheme),
                              (e.prev = 1),
                              (e.next = 4),
                              (0, fe.gH)({ orderNumber: U.getPage().oid })
                            );
                          case 4:
                            1 === (a = e.sent).resultCode
                              ? (console.log(
                                  "getGrabDetailPageCrossStationInfoPromise",
                                  a
                                ),
                                t({
                                  recommendedSchemeBannerCheckedList: [],
                                  recommendedSchemeBannerInfo:
                                    a.recommendBanner || null,
                                  recommendedSchemeDrawerInfo:
                                    a.recommendToast || null,
                                }))
                              : (t({
                                  recommendedSchemeBannerCheckedList: [],
                                  recommendedSchemeBannerInfo: null,
                                  recommendedSchemeDrawerInfo: null,
                                }),
                                console.log(
                                  "getGrabDetailPageCrossStationInfoPromise",
                                  a.resultMessage
                                )),
                              (e.next = 12);
                            break;
                          case 8:
                            (e.prev = 8),
                              (e.t0 = e.catch(1)),
                              console.log(
                                "getGrabDetailPageCrossStationInfoPromise",
                                e.t0
                              ),
                              t({
                                recommendedSchemeBannerCheckedList: [],
                                recommendedSchemeBannerInfo: null,
                                recommendedSchemeDrawerInfo: null,
                              });
                          case 12:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[1, 8]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            Zt = (function () {
              var e = (0, r.Z)(
                (0, i.Z)().mark(function e(t, a) {
                  var n, r, o, c, s, l, d, u, _, m;
                  return (0, i.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          (n = U.getState().grabOrderModel.ticketInfo),
                            (r = n.seatType),
                            (o = void 0 === r ? "" : r),
                            (c = n.trainStationInfos),
                            (s = void 0 === c ? [] : c),
                            (l = o.split(",")),
                            (d = s),
                            (u = {}),
                            2 === t && a.length
                              ? (u.updatedCrossStationsInfos = a)
                              : ((_ = l),
                                (m = d),
                                1 === t
                                  ? ((m = [].concat(d, a)),
                                    (u.updatedTrainInfoList = m))
                                  : 3 === t &&
                                    ((_ = [].concat(l, a)),
                                    (u.updatedSeatNameList = _))),
                            Ve(u);
                        case 6:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t, a) {
                return e.apply(this, arguments);
              };
            })(),
            Nt = function () {
              var e,
                t = U.getState().grabOrderModel.orderInfo.train,
                a = U.getState().grabOrderModel.ticketInfo,
                n = a.trainStationInfos,
                i = a.trainNo,
                r = a.leaveDate,
                o = a.seatType,
                c =
                  U.getState().planModel.recommendedScheme
                    .recommendedSchemeDrawerInfo,
                s = U.getState().grabOrderModel,
                l = s.isShowModal,
                d = s.dateInfo,
                u = s.trainInfo,
                _ = i,
                m =
                  (null == n ? void 0 : n.length) > 0
                    ? n
                        .map(function (e) {
                          return ""
                            .concat(e.departStation, "-")
                            .concat(e.trainNumber, "-")
                            .concat(e.arriveStation);
                        })
                        .join(",")
                    : "",
                p = t.DepartureStationName,
                f = t.ArrivalStationName,
                g = r,
                b = t.DepartureDate,
                w = o,
                v = [];
              h.Z.isNotEmptyObj(c) &&
                (null === (e = c.nearStationList) || void 0 === e
                  ? void 0
                  : e.length) > 0 &&
                (v = c.nearStationList.map(function (e) {
                  return (0, L.Z)((0, L.Z)({}, e), {}, { tips: e.desc || "" });
                })),
                U.navigateTo({
                  url: "/pages/trainRob/otherlist/otherlist?excludeTrainStrs="
                    .concat(encodeURIComponent(m), "&TrainNumber=")
                    .concat(_, "&DepartStation=")
                    .concat(p, "&ArriveStation=")
                    .concat(f, "&DepartureDates=")
                    .concat(g, "&DepartureDate=")
                    .concat(b, "&SeatName=")
                    .concat(w),
                  data: {
                    trainInfo: u,
                    dateInfo: d,
                    isShowModal: l,
                    fromPage: "grabDetail",
                    nearTrainList: JSON.parse(JSON.stringify(v)),
                    chosenTrainList: n.map(function (e) {
                      return {
                        DepartStation: e.departStation,
                        ArriveStation: e.arriveStation,
                        TrainNumber: e.trainNumber,
                      };
                    }),
                  },
                  callback: function (e) {
                    var t;
                    if (
                      (null === (t = e.chosenTrainList) || void 0 === t
                        ? void 0
                        : t.length) > 0
                    ) {
                      var a = e.chosenTrainList.map(function (e) {
                        return {
                          departStation: e.DepartStation,
                          arriveStation: e.ArriveStation,
                          trainNumber: e.TrainNumber,
                        };
                      });
                      console.log("/pages/trainRob/otherlist/otherlist", a),
                        Ve({ updatedTrainInfoList: a }),
                        Be((null == e ? void 0 : e.isShowModal) || !1);
                    }
                  },
                });
            },
            It = function () {
              fa(D.otherDatesDrawer);
            },
            St = function () {
              fa(D.otherSeatsDrawer);
            },
            Tt = function (e) {
              U.ubtTrace("TZWgrabDetail_grabDetail_UpSeatWarmTipsPopup_exp", {
                PageId: U.getPage().pageId,
              });
              var t = U.getState().productModel.seatUpgradeProduct.upSeatName;
              return new Promise(function (a) {
                e
                  ? e === t
                    ? U.showMultiButtonDialog({
                        content:
                          "您的升级座席服务将会自动取消，服务费会在订单结束后退回您的支付账户。",
                        leftButtonName: "在想想",
                        rightButtonName: "确定",
                        onLeftButtonClick: function () {
                          U.ubtTrace(
                            "TZWgrabDetail_grabDetail_UpSeatWarm_Recon_click",
                            { PageId: U.getPage().pageId }
                          );
                        },
                        onRightButtonClick: function () {
                          U.ubtTrace(
                            "TZWgrabDetail_grabDetail_UpSeatWarm_Confirm_click",
                            { PageId: U.getPage().pageId }
                          ),
                            a(!0);
                        },
                      })
                    : a(!1)
                  : a(!0);
              });
            },
            yt = (function () {
              var e = (0, r.Z)(
                (0, i.Z)().mark(function e() {
                  var t,
                    a,
                    n = arguments;
                  return (0, i.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (t = n.length > 0 && void 0 !== n[0] ? n[0] : []),
                            (e.next = 3),
                            Promise.all(
                              t.map(function (e) {
                                return Tt(e.SeatName);
                              })
                            )
                          );
                        case 3:
                          if (
                            !e.sent.some(function (e) {
                              return !e;
                            })
                          ) {
                            e.next = 7;
                            break;
                          }
                          e.next = 8;
                          break;
                        case 7:
                          return e.abrupt("return");
                        case 8:
                          pa(),
                            (a = t
                              .filter(function (e) {
                                return e.selected;
                              })
                              .map(function (e) {
                                return e.SeatName;
                              })),
                            Ve({ updatedSeatNameList: a });
                        case 11:
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
            Vt = function (e, t) {
              var a = (t || { isShowModal: !1 }).isShowModal;
              pa(), Be(a), Ve({ updatedDateList: e });
            },
            Ct = function () {
              var e = U.getState().planModel.crossStationSchemeInfos,
                t = U.getState().grabOrderModel.orderInfo,
                a = t.train,
                n = t.crossStationInfos,
                i = void 0 === n ? [] : n,
                r = [];
              e.forEach(function (e) {
                var t = (0, L.Z)({}, e);
                i.some(function (e) {
                  return W.ZP.isSameCrossStationSolution(e, t);
                })
                  ? (t.disabled = !0)
                  : (t.disabled = !1),
                  r.push(t);
              }),
                r.length &&
                  U.navigateTo({
                    url: "/pages/trainRob/crossTrainList/crossTrainList",
                    data: {
                      CrossStationGrabTicketInfoList: r,
                      originalTrain: {
                        ArriveStation: a.ArrivalStationName,
                        DepartStation: a.DepartureStationName,
                      },
                    },
                    callback: function (e) {
                      if ((null == e ? void 0 : e.length) > 0) {
                        var t = e.filter(function (e) {
                          return (
                            e.disabled || e.isCrossStationGrabCheckoutSelected
                          );
                        });
                        console.log("crossTrainList cb:", t),
                          Ve({ updatedCrossStationsInfos: t });
                      }
                    },
                  });
            },
            Dt = function () {
              var e = U.getState().grabOrderModel.orderInfo.train,
                t = U.getState().grabOrderModel.ticketInfo,
                a = t.trainNo,
                n = t.seatType,
                i = t.leaveDate,
                r = {
                  departStation: e.DepartureStationName,
                  arriveStation: e.ArrivalStationName,
                  departDate: e.DepartureDate,
                  alternativeTrainNums: a,
                  alternativeTrainSeats: n,
                  alternativeDepartDates: i,
                  fromPage: 1,
                };
              return (0, K.YFh)(r)
                .then(function (e) {
                  if (1 === e.resultCode)
                    return W.ZP.formatCrossSolutionsV2(
                      e.crossStationInfos,
                      n.split(",")
                    );
                })
                .then(function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : [];
                  U.getDispatch().planModel.setCrossStationSchemeInfos(e);
                })
                .catch(function (e) {
                  console.log("获取跨站抢信息报错"), console.log(e);
                });
            },
            kt = function () {
              var e = U.getState().grabOrderModel.orderInfo.monitorStatus;
              -1 !== [16, 17, 18].indexOf(e) &&
                (U.ubtTrace(205910, {
                  exposureType: "popup",
                  bizKey: "z_grabdetail_hybq_popup_show",
                }),
                fa(D.friendAccountDrawer),
                (U.getPage().hasOpenedFriendAccountDrawer = !0));
            },
            Bt = function () {
              var e,
                t = U.getState().grabOrderModel.orderInfo.monitorStatus,
                a =
                  null ===
                    (e = U.getState().t6Model.orderInterceptT6AccountInfo) ||
                  void 0 === e
                    ? void 0
                    : e.interceptType,
                n = U.getPage();
              if (
                ![18].includes(t) ||
                ![
                  "studentVerify",
                  "student_time_limit",
                  "student_invalid_gap",
                ].includes(a)
              )
                if (
                  -1 === [16, 17, 18].indexOf(t) ||
                  n.hasOpenedFriendAccountDrawer
                ) {
                  if (
                    (n.openFriendAccountDrawerTimer &&
                      (clearTimeout(n.openFriendAccountDrawerTimer),
                      (n.openFriendAccountDrawerTimer = null)),
                    ha() === D.friendAccountDrawer)
                  )
                    return pa(), !0;
                } else {
                  if (n.isToDealAbnormalStatus)
                    return (
                      n.openFriendAccountDrawerTimer &&
                        (clearTimeout(n.openFriendAccountDrawerTimer),
                        (n.openFriendAccountDrawerTimer = null)),
                      kt(),
                      (n.isToDealAbnormalStatus = !1),
                      !0
                    );
                  n.openFriendAccountDrawerTimer ||
                    ((n.openFriendAccountDrawerTimer = setTimeout(function () {
                      kt();
                    }, 1e4)),
                    p.eventCenter.once(
                      "closeFriendAccountDrawerTimer",
                      function () {
                        clearTimeout(n.openFriendAccountDrawerTimer),
                          (n.openFriendAccountDrawerTimer = null);
                      }
                    ));
                }
            },
            xt = a(97939),
            Pt = a(90129),
            Mt = a(96158),
            At = a(88424),
            Xt = _.default.isTieyou,
            zt = {
              0: "成功",
              3: "正在处理中",
              4: "12306异常",
              5: "夜间系统维护中",
              6: "用户名或密码错误",
              7: "需要短信解封",
              8: "需要刷脸解封",
            },
            Ot = function (e) {
              var t = e.pageName,
                a = void 0 === t ? "" : t,
                n = (function () {
                  var e = (0, r.Z)(
                    (0, i.Z)().mark(function e(t) {
                      var a,
                        n,
                        r,
                        o,
                        c,
                        s,
                        l,
                        d,
                        u,
                        _,
                        m,
                        p,
                        f,
                        h,
                        g,
                        b,
                        w,
                        v,
                        Z;
                      return (0, i.Z)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  (console.log(
                                    "orderdetail successCallBack e = ",
                                    t
                                  ),
                                  (e.prev = 1),
                                  Array.isArray(t) ||
                                    null === (a = t[0]) ||
                                    void 0 === a ||
                                    !a.account)
                                ) {
                                  e.next = 11;
                                  break;
                                }
                                return (
                                  (n = (0, Pt.Z)(t, 1)),
                                  (r = n[0]),
                                  (o = r.account),
                                  (c = r.password),
                                  (0, I.showLoading)("校验中..."),
                                  (e.next = 7),
                                  (0, xt.L5)({
                                    UserName: o,
                                    Password: c,
                                    Channel: "WX",
                                  })
                                );
                              case 7:
                                (s = e.sent),
                                  (l = s.PassengerList),
                                  (d = void 0 === l ? [] : l),
                                  (u = s.MemberStatus),
                                  (_ = void 0 === u ? "" : u),
                                  (m = s.IDCardNumber),
                                  (p = void 0 === m ? "" : m),
                                  (f = s.RealName),
                                  (h = void 0 === f ? "" : f),
                                  (g = s.MobilePhone),
                                  (b = void 0 === g ? "" : g),
                                  (w = s.UserID12306),
                                  (v = [
                                    {
                                      userName: (void 0 === w ? "" : w) || o,
                                      loginPW: c,
                                      passengerListJSON: JSON.stringify(d),
                                      memberStatus: _,
                                      iDCardNumber: p,
                                      realName: h,
                                      mobile: b,
                                      inputUserName: b,
                                    },
                                  ]),
                                  (0, Mt.Tq)(v);
                              case 11:
                                Gt({
                                  operateResult: 1,
                                  operateResultMsg: "操作成功",
                                }),
                                  (e.next = 19);
                                break;
                              case 14:
                                (e.prev = 14),
                                  (e.t0 = e.catch(1)),
                                  (Z = e.t0 ? e.t0.Code : -1),
                                  Gt({
                                    operateResult: 2,
                                    operateResultMsg: zt[Z],
                                  });
                              case 19:
                                return (
                                  (e.prev = 19),
                                  setTimeout(function () {
                                    (0, I.hideLoading)(), wa();
                                  }, 3e3),
                                  e.finish(19)
                                );
                              case 22:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [[1, 14, 19, 22]]
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })();
              W.ZP.goto12306H5({ pageName: a }).then(function (e) {
                n(e);
              }),
                pa();
            },
            Gt = (function () {
              var e = (0, r.Z)(
                (0, i.Z)().mark(function e(t) {
                  var a, n, r, o, c, s, l, d, u, _, m, p, f;
                  return (0, i.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (a = t.operateResult),
                              (n = t.operateResultMsg),
                              (r = void 0 === n ? "" : n),
                              (e.prev = 1),
                              (o =
                                U.getState().t6Model
                                  .orderInterceptT6AccountInfo),
                              (c = void 0 === o ? {} : o),
                              U.getDispatch().my12306Model.refresh(),
                              (s = U.getState().my12306Model),
                              (l = s.login12306Name),
                              (d = s.login12306Pas),
                              (u = s.memberStatus12306),
                              (_ = null == c ? void 0 : c.interceptType),
                              (m = W.ZP.encode12306Account({
                                login12306Name: l,
                                login12306Pas: d,
                              })),
                              (p = {
                                orderNumber: U.getPage().oid,
                                operateType: _,
                                operateResult: a,
                                operateResultMsg: r,
                                userT6LoginName: l,
                                userT6LoginPsw: m.login12306Pas,
                                isMemberShip: "0" === u ? 1 : 0,
                              }),
                              (e.next = 10),
                              (0, fe.lz)(p)
                            );
                          case 10:
                            return (
                              (f = e.sent),
                              1 === a && Lt(),
                              e.abrupt("return", f)
                            );
                          case 15:
                            (e.prev = 15),
                              (e.t0 = e.catch(1)),
                              console.log(e.t0);
                          case 18:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[1, 15]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            Lt = function () {
              var e = U.getState().grabOrderModel.orderInfo.monitorStatus,
                t = U.getState().t6Model.orderInterceptT6AccountInfo,
                a = void 0 === t ? {} : t,
                n = null == a ? void 0 : a.interceptType;
              "switchAccount" === n
                ? U.ubtTrace(180580)
                : "login" === n || "preLogin" === n
                ? (U.ubtTrace(180581),
                  17 === e
                    ? U.ubtTrace(180585)
                    : 18 === e && U.ubtTrace(180584))
                : "register" === n
                ? U.ubtTrace(180582)
                : "changePsw" === n && U.ubtTrace(180583);
            },
            Ft = function () {
              U.getPage().isToDealAbnormalStatus = !0;
              var e = U.getState().t6Model,
                t = e.faceType,
                a = e.faceSwipingData,
                n = a || {},
                i = n.userName,
                r = n.verifyOperation,
                o = void 0 === r ? "" : r,
                c = n.accountMobile,
                s = void 0 === c ? "" : c,
                l = n.accountName,
                d = void 0 === l ? "" : l;
              U.ubtDevTrace("o_train_detail_face_info", {
                faceType: t,
                faceSwipingData: a,
                userName: i,
                verifyOperation: o,
                accountMobile: s,
                action: "toFaceCheck",
              });
              var u = [16, 18].includes(t) ? 4 : 1;
              if ("M" === String(o).toUpperCase())
                return jt({
                  userName: i,
                  mobile: s,
                  success: function () {
                    Rt();
                  },
                });
              if ("FM" === String(o).toUpperCase()) {
                var _ = "/pages/train/certificateVerification/index?userName="
                  .concat(i, "&fromType=")
                  .concat(u, "&checkType=", "FM", "&accountName=")
                  .concat(d, "&accountMobile=")
                  .concat(s);
                U.navigateTo({
                  url: _,
                  callback: function (e) {
                    var t = e || {},
                      a = t.resultCode,
                      n = t.resultMessage;
                    1 === a
                      ? Rt()
                      : 2 === a &&
                        setTimeout(function () {
                          f().showModal({
                            title: "温馨提示",
                            content: n || "核验失败",
                            confirmText: "知道了",
                            showCancel: !1,
                            confirmColor: Xt ? "#fc6e51" : "#0080FF",
                            success: function () {},
                          });
                        }, 500);
                  },
                });
              } else {
                var m = "/pages/12306/face/face?userName="
                  .concat(i, "&fromType=")
                  .concat(u, "&businessType=1");
                U.navigateTo({
                  url: m,
                  callback: function (e) {
                    var t = e || {},
                      a = t.certificationResultCode,
                      n = t.retMessage;
                    1 === a
                      ? Rt()
                      : 2 === a &&
                        setTimeout(function () {
                          f().showModal({
                            title: "温馨提示",
                            content: n || "核验失败",
                            confirmText: "知道了",
                            showCancel: !1,
                            confirmColor: Xt ? "#fc6e51" : "#0080FF",
                            success: function () {},
                          });
                        }, 500);
                  },
                });
              }
            },
            jt = function (e) {
              var t = e.userName,
                a = void 0 === t ? "" : t,
                n = e.mobile,
                i = void 0 === n ? "" : n,
                r = e.password,
                o = void 0 === r ? "" : r,
                c = e.success,
                s = void 0 === c ? function () {} : c,
                l = e.fail,
                d = void 0 === l ? function () {} : l;
              p.eventCenter.trigger("closeFriendAccountDrawerTimer"),
                (0, At.pS)({ userName: a, mobile: i, password: o }, U)
                  .then(function (e) {
                    s(e);
                  })
                  .catch(function (e) {
                    console.error(e), d();
                  });
            },
            Rt = function () {
              var e = (U.getState().t6Model.faceSwipingData || {}).userName,
                t = { orderNumber: U.getPage().oid, accountNumber: e };
              (0, K.Q6O)(t).then(
                function (e) {
                  var t = e || {},
                    a = t.resultCode,
                    n = t.resultMessage;
                  1 === a
                    ? (f().showToast({
                        title: "核验成功",
                        icon: "none",
                        duration: 1e3,
                      }),
                      wa())
                    : f().showModal({
                        title: "温馨提示",
                        content: n || "网络错误，请稍后再试",
                        confirmText: "知道了",
                        showCancel: !1,
                        confirmColor: Xt ? "#fc6e51" : "#0080FF",
                        success: function () {},
                      });
                },
                function (e) {
                  console.log(e);
                }
              );
            },
            Jt = function (e, t, a, n, i) {
              U.ubtTrace(197139);
              var r = U.getState().my12306Model,
                o = r.login12306Name,
                c = r.login12306Pas,
                s = r.memberStatus12306,
                l = !1,
                d = "login";
              if (o && c && !e)
                if ("-1" === s)
                  (d = "member"),
                    h.Z.insertActionLog("member_active", "start"),
                    (l = !0);
                else if ("2" === s)
                  (d = "member"),
                    h.Z.insertActionLog("member_active", "start"),
                    (l = !0);
                else {
                  if ("0" === s) return void (t && t());
                  d = "login";
                }
              else d = "login";
              W.ZP.goto12306H5({ pageName: d })
                .then(function (e) {
                  a && a(),
                    (function (e) {
                      console.log("orderdetail successCallBack e = ", e),
                        l
                          ? (n && n(),
                            h.Z.insertActionLog("member_active", "success"),
                            (0, Mt.Mm)(o, c).then(function () {
                              U.getDispatch().my12306Model.refresh(), wa();
                            }))
                          : (i && i(e), wa());
                    })(e);
                })
                .catch(function (e) {
                  a && a(),
                    l
                      ? h.Z.insertActionLog("member_active", "fail")
                      : console.error("gotoLogin12306AndAuth error", e);
                });
            },
            Et = function () {
              U.getPage().isToDealAbnormalStatus = !0;
              var e = U.getState().t6Model.orderInterceptT6AccountInfo,
                t = U.getState().grabOrderModel.orderInfo.monitorStatus,
                a = null == e ? void 0 : e.interceptType,
                n = "login";
              if (
                ("switchAccount" === a
                  ? U.ubtTrace(180451)
                  : "login" === a || "preLogin" === a
                  ? 17 === t
                    ? U.ubtTrace(180464)
                    : 18 === t && U.ubtTrace(180454)
                  : "register" === a
                  ? U.ubtTrace(180456)
                  : "changePsw" === a && U.ubtTrace(180460),
                "login" === a || "preLogin" === a)
              )
                n = "login";
              else if ("switchAccount" === a) n = "login";
              else if ("register" === a) n = "register";
              else if ("changePsw" === a || "resetPsw" == a)
                h.Z.insertActionLog("RETRIEVE_PASSWORD", a, ""),
                  (n = "retrievePassword"),
                  "resetPsw" == a && (n = "retrievePasBySms");
              else if ("f" === a || "m" === a || "fm" === a) {
                var i, r, o, c;
                return (
                  U.getDispatch().t6Model.setFaceSwipingData({
                    userName:
                      null == e ||
                      null === (i = e.userOperateInfo) ||
                      void 0 === i ||
                      null === (r = i.currentrOrderAccountInfo) ||
                      void 0 === r
                        ? void 0
                        : r.userName,
                    accountMobile:
                      null == e ||
                      null === (o = e.userOperateInfo) ||
                      void 0 === o ||
                      null === (c = o.currentrOrderAccountInfo) ||
                      void 0 === c
                        ? void 0
                        : c.accountMobile,
                    verifyOperation: a,
                  }),
                  f().nextTick(function () {
                    Ft();
                  })
                );
              }
              Ot({ pageName: n });
            },
            Ht = function (e) {
              return (
                1 === e &&
                  U.ubtTrace(205920, {
                    exposureType: "normal",
                    bizKey: "z_detail_grab_12306vip_shualian2_nodeal_show",
                    orderId: U.getPage().oid,
                  }),
                (0, fe.oy)({ orderNumber: U.getPage().oid, type: e })
              );
            },
            qt = function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "";
              return (0, fe.oy)({
                orderNumber: U.getPage().oid,
                action: e,
                type: 3,
              })
                .then(function (e) {
                  return e && -1 !== e.resultCode
                    ? 1 === e.resultCode
                      ? wa()
                      : void 0
                    : (0, I.showToast)(e.resultMessage);
                })
                .catch(function (e) {
                  return console.log(e);
                });
            },
            Ut = (function () {
              var e = (0, r.Z)(
                (0, i.Z)().mark(function e(t) {
                  var a,
                    n,
                    r,
                    o,
                    c,
                    s,
                    l,
                    d,
                    u,
                    _,
                    m,
                    p,
                    h,
                    g,
                    b,
                    w,
                    v,
                    Z,
                    N,
                    S,
                    T;
                  return (0, i.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((a = t._pollingKey),
                              (n = void 0 === a ? "" : a),
                              (r = t.psgModifyInfos),
                              (o = void 0 === r ? [] : r),
                              (c = t.curInterval),
                              (s = void 0 === c ? 0 : c),
                              20,
                              (l = U.getDispatch().t6Model.setMobileVerify),
                              (e.prev = 3),
                              !(s > 20))
                            ) {
                              e.next = 7;
                              break;
                            }
                            return (
                              f().showToast({
                                title: "超时",
                                icon: "none",
                                duration: 2e3,
                              }),
                              e.abrupt("return")
                            );
                          case 7:
                            return (
                              (d =
                                U.getState().t6Model.mobileVerify
                                  .mobileVerifyKey),
                              (u = void 0 === d ? "" : d),
                              (_ =
                                n && 0 !== o.length
                                  ? {
                                      pollingKey: n,
                                      requestKey: u,
                                      psgModifyInfos: o,
                                      fromPage: "grabdetail",
                                    }
                                  : { requestKey: u, fromPage: "grabdetail" }),
                              (0, I.showLoading)(),
                              (e.next = 12),
                              (0, fe.XF)(_)
                            );
                          case 12:
                            1 === (m = e.sent).resultCode &&
                              ((p = m.pollingKey),
                              (h = m.pollingResult),
                              (g = m.verifyJumpUrl),
                              (b = void 0 === g ? "" : g),
                              (w = m.passengerList),
                              (v = void 0 === w ? [] : w),
                              (Z = m.pollingInterval),
                              (N = []),
                              Array.isArray(v) &&
                                v.length > 0 &&
                                (N = v.map(function (e) {
                                  return {
                                    name: e.passengerName,
                                    mobile: e.mobileNo,
                                    statusCode: e.verifyStatus,
                                    statusDesc:
                                      0 === e.verifyStatus
                                        ? "待核验"
                                        : "已核验",
                                  };
                                })),
                              1 === h || 2 === h
                                ? (l({
                                    verifyJumpUrl: b,
                                    mobileVerifyPassengerList: N,
                                  }),
                                  U.ubtTrace(180461))
                                : 3 === h &&
                                  ((!Z || Z <= 0) && (Z = 1),
                                  (S = []),
                                  Array.isArray(v) &&
                                    v.length > 0 &&
                                    (S = v.map(function (e) {
                                      return {
                                        passengerKey: e.passengerKey,
                                        mobileNumber: e.mobileNo,
                                      };
                                    })),
                                  (T = setTimeout(function () {
                                    clearTimeout(T),
                                      Ut({
                                        _pollingKey: p,
                                        psgModifyInfos: S,
                                        curInterval: s + Z,
                                      });
                                  }, 1e3 * Z)))),
                              (e.next = 19);
                            break;
                          case 16:
                            (e.prev = 16),
                              (e.t0 = e.catch(3)),
                              console.log(e.t0);
                          case 19:
                            return (
                              (e.prev = 19), (0, I.hideLoading)(), e.finish(19)
                            );
                          case 22:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[3, 16, 19, 22]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            Kt = function () {
              var e;
              U.getPage().isToDealAbnormalStatus = !0;
              var t = U.getState().grabOrderModel.orderInfo.payPrice,
                a =
                  null === (e = U.getState().t6Model.orderInterceptInfo) ||
                  void 0 === e
                    ? void 0
                    : e.hasLogin;
              U.ubtTrace(205922, {
                bizKey: "z_detail_grab_12306vip_activate_click",
                orderId: U.getPage().oid,
              }),
                (ae.ET.GRAB_ORDER_FACE_DATA = { grabOrderId: U.getPage().oid });
              Jt(
                !a,
                function () {
                  Ht(1),
                    (0, I.showLoading)(),
                    setTimeout(function () {
                      wa(), (0, I.hideLoading)();
                    }, 2e3);
                },
                function () {
                  ae.ET.GRAB_ORDER_FACE_DATA = null;
                },
                function () {
                  t ? qt() : Ht(2);
                },
                function () {
                  U.getDispatch().my12306Model.refresh();
                  var e = U.getState().my12306Model.memberStatus12306;
                  Gt({ operateResult: 1, operateResultMsg: "操作成功" }),
                    "0" === e &&
                      setTimeout(function () {
                        t ? qt() : Ht(2);
                      }, 1e3),
                    setTimeout(function () {
                      wa();
                    }, 3e3);
                }
              );
            },
            Wt = function (e) {
              var t,
                a =
                  null === (t = e.orderInfo) || void 0 === t
                    ? void 0
                    : t.monitorStatus;
              [13, 14].includes(a) && Ut({});
            },
            Yt = function () {
              var e;
              1 ===
              (
                (null === (e = U.getState().pageModel.configData) ||
                void 0 === e
                  ? void 0
                  : e.preSaleNotLoginConfig) || {}
              ).btnType
                ? fa(D.goAppForPreSale)
                : Ot({ pageName: "login" });
            },
            Qt = function (e) {
              var t = U.getPage();
              e.orderInterceptInfo &&
              0 !== e.orderInterceptInfo.hasLogin &&
              0 === e.orderInterceptInfo.candidateStatus
                ? t.skipWaitOpenExpansionTimer ||
                  (t.skipWaitOpenExpansionTimer = setTimeout(function () {
                    Ht(5),
                      setTimeout(function () {
                        wa();
                      }, 2e3);
                  }, 12e4))
                : t.skipWaitOpenExpansionTimer &&
                  (clearTimeout(t.skipWaitOpenExpansionTimer),
                  (t.skipWaitOpenExpansionTimer = null));
            },
            $t = function () {
              var e = U.getPage();
              e.skipWaitOpenExpansionTimer &&
                (clearTimeout(e.skipWaitOpenExpansionTimer),
                (e.skipWaitOpenExpansionTimer = null));
            },
            ea = (function () {
              var e = (0, r.Z)(
                (0, i.Z)().mark(function e() {
                  var t;
                  return (0, i.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            null == (t = ae.ET.GRAB_ORDER_FACE_DATA) ||
                            !t.isSkipFace
                          ) {
                            e.next = 7;
                            break;
                          }
                          return (
                            (ae.ET.GRAB_ORDER_FACE_DATA = null),
                            (e.next = 5),
                            Ht(1)
                          );
                        case 5:
                          1 === e.sent.resultCode &&
                            (0, I.showToast)(
                              "刷脸暂时出现异常，无法开启候补，先为您开启单通道抢票"
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
            ta = function (e) {
              var t,
                a,
                n = U.getDispatch();
              if (
                (9 ===
                  (null === (t = e.orderInfo) || void 0 === t
                    ? void 0
                    : t.monitorStatus) &&
                  (function () {
                    var e = U.getState().my12306Model,
                      t = e.login12306Name,
                      a = e.login12306Pas,
                      n = U.getDispatch();
                    if (t && a)
                      try {
                        (0, xt.L5)({ UserName: t, Password: a, Channel: "WX" }),
                          n.t6Model.setIsShowPreLoginBanner(!1);
                      } catch (e) {
                        n.t6Model.setIsShowPreLoginBanner(!1), console.log(e);
                      }
                    else n.t6Model.setIsShowPreLoginBanner(!0);
                  })(),
                e.orderInterceptT6AccountInfo)
              ) {
                var i = (0, L.Z)({}, e.orderInterceptT6AccountInfo),
                  r = e.orderInterceptT6AccountInfo.userOperateInfo.icon;
                (i.interceptIcon = r),
                  n.t6Model.setOrderInterceptT6AccountInfo(i);
              }
              null !== (a = e.orderInfo) &&
                void 0 !== a &&
                a.mobileVerifyKey &&
                n.t6Model.setMobileVerify({
                  mobileVerifyKey: e.orderInfo.mobileVerifyKey,
                }),
                (function (e) {
                  var t = U.getDispatch().t6Model;
                  console.log(
                    "人脸核验（15 or 16）: ",
                    e.orderInfo.monitorStatus
                  );
                  var a = e.orderInfo.monitorStatus;
                  if (-1 !== [15, 2, 16].indexOf(a)) {
                    var n = e.faceSwipingInfo,
                      i = "";
                    (15 === a || 2 === a) && n && n.weakGuidingModel
                      ? (i = n.weakGuidingModel)
                      : 16 === a &&
                        n &&
                        n.hardGuidingModel &&
                        (i = n.hardGuidingModel);
                    try {
                      t.setFaceType(a),
                        t.setFaceSwipingData(i ? JSON.parse(i) : "");
                    } catch (e) {
                      console.log(e);
                    }
                  } else t.setFaceType(-1);
                })(e),
                (function (e) {
                  e.orderInterceptInfo &&
                    (U.getDispatch().t6Model.setOrderInterceptInfo(
                      e.orderInterceptInfo
                    ),
                    U.ubtTrace(205920, {
                      exposureType: "normal",
                      bizKey: "z_detail_grab_12306vip_activate_show",
                      orderId: U.getPage().oid,
                    }));
                })(e);
            },
            aa = (function () {
              var e = (0, r.Z)(
                (0, i.Z)().mark(function e() {
                  var t, a, n, r, o, c, s, l, d;
                  return (0, i.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (t = {
                                keys: [
                                  "ztrip-fe-train-robshare-config",
                                  "ztrip-fe-train-orderdetail-config",
                                ],
                              }),
                              (e.next = 4),
                              (0, Y.yp)(t)
                            );
                          case 4:
                            (a = e.sent) &&
                              1 === a.resultCode &&
                              ((n = a.configData),
                              (r = void 0 === n ? [] : n),
                              h.Z.notEmptyArray(r) &&
                                ((o =
                                  r.find(function (e) {
                                    return (
                                      "ztrip-fe-train-robshare-config" === e.key
                                    );
                                  }) || {}),
                                (c =
                                  r.find(function (e) {
                                    return (
                                      "ztrip-fe-train-orderdetail-config" ===
                                      e.key
                                    );
                                  }) || {}),
                                (s = o.data || {}),
                                (l = c.data || {}),
                                (d = [
                                  _.default.isTieyou
                                    ? s.shareImgTY
                                    : s.shareImgZX,
                                ]),
                                s.speedADOpened &&
                                  !_.default.isTieyou &&
                                  (d = [s.speedADShareImageUrl]),
                                U.getDispatch().pageModel.setConfigData({
                                  shareImgs: d,
                                  preSaleLoginConfig: l.preSaleLoginConfig,
                                  preSaleNotLoginConfig:
                                    l.preSaleNotLoginConfig,
                                }))),
                              (e.next = 11);
                            break;
                          case 8:
                            (e.prev = 8),
                              (e.t0 = e.catch(0)),
                              console.log(e.t0);
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
            na = function () {
              var e = _.default.isTieyou
                ? ["1Umg-WA3HbJAH3rWSCPNL2WgKdD_5fqpFJ2R0wwLGxc"]
                : ["EMW7V8tiT9y5fp2nlM1ewAxAePDGam3yPx4kpVCGTq0"];
              h.Z.getSubscribe(e)
                .then(function (e) {
                  U.getDispatch().pageModel.setSubscribeInfo({
                    toSubscribeIds: e.unKnownList,
                  });
                })
                .catch(function (e) {
                  console.log(e);
                });
            },
            ia = function () {
              var e = { orderNumber: U.getPage().oid };
              U.getPage().originOrderNumber &&
                (e.originOrderNumber = U.getPage().originOrderNumber),
                _.default.isTT
                  ? U.getDispatch().pageModel.setIsCanFriendSpeed(!0)
                  : (0, K.jLV)(e).then(function (e) {
                      1 === e.resultCode
                        ? U.getDispatch().pageModel.setIsCanFriendSpeed(!1)
                        : -1 === e.resultCode &&
                          U.getDispatch().pageModel.setIsCanFriendSpeed(!0);
                    });
            },
            ra = function () {
              var e = U.getPage().oid;
              if (e) {
                var t = $.rJ.getAttr(e) || {},
                  a = (t.showCount || 0) + 1;
                U.getDispatch().pageModel.setShowCount(a),
                  $.rJ.setAttr(
                    e,
                    (0, L.Z)((0, L.Z)({}, t), {}, { showCount: a })
                  );
              }
            },
            oa = function () {
              var e = +(U.getPage().grabListOperation || 0);
              if (1 === e) {
                var t =
                  U.getState().planModel.recommendedScheme
                    .recommendedSchemeBannerInfo;
                if (t) {
                  var a = Object.keys(t) || [];
                  if (a && a.length > 0)
                    return (
                      fa(D.recommendedSchemeDrawer),
                      U.getDispatch().planModel.setRecommendedScheme({
                        recommendedSchemeDrawerType: {
                          nearStationInfo: 1,
                          crossStationInfo: 2,
                          recommendSeatInfo: 3,
                        }[a[0]],
                        recommendedSchemeDrawerIsSelectFirst: !1,
                      }),
                      !0
                    );
                }
              } else if (2 === e) {
                var n,
                  i = U.getState().grabOrderModel,
                  r = i.grabProcessInfo,
                  o = i.grabSpeedInfo,
                  c = o.isVIPGrab;
                if (
                  0 === r.processFlag &&
                  3 != (null == o ? void 0 : o.buttonType) &&
                  !c
                )
                  return fa(D.speedGrabTaskDrawer), !0;
                if (
                  U.getState().pageModel.isCanFriendSpeed &&
                  (null == r ? void 0 : r.processFlag) > 0 &&
                  0 === r.unlockFlag &&
                  null !== (n = r.welfareInfo) &&
                  void 0 !== n &&
                  n.welfareList
                )
                  return fa(D.showStuAndNewGuestPrompt), !0;
              }
            },
            ca = function (e) {
              e.grabSpeedInfo && e.grabSpeedInfo.goldGrabFlag
                ? ((0, I.setNavigationBarColor)({
                    frontColor: "#ffffff",
                    backgroundColor: "#F0C66F",
                  }),
                  (0, I.setBackgroundColor)("#F0C66F"))
                : (0, I.setNavigationBarColor)({
                    frontColor: "#ffffff",
                    backgroundColor: _.default.isTieyou ? "#3C4365" : "#0066E6",
                  });
            },
            sa = function (e, t) {
              var a;
              U.getDispatch().pageModel.setTabsInfo({
                multiplyGrabTabs: e.tabs || [],
              }),
                ot(
                  null === (a = e.orderInfo) || void 0 === a
                    ? void 0
                    : a.monitorStatus
                ),
                Promise.all([dt(e), t.configPromise]).then(function () {
                  !(function () {
                    var e = w.Z.getUnionData(),
                      t = U.getState().grabOrderModel,
                      a = t.helpMonitorInfo,
                      n = t.grabSpeedInfo,
                      i = t.ticketInfo,
                      r = U.getState().pageModel.shareInfo,
                      o = r.isShareGZH,
                      c = r.shareAim,
                      s = r.shareIndex,
                      l = r.shareInfoList,
                      d = (U.getState().pageModel.configData || {}).shareImgs;
                    if (a.shareKey && 3 !== n.buttonType) {
                      var u,
                        _,
                        m,
                        p,
                        f,
                        h = W.ZP.getRobShareObj({
                          showArriveStation: 0 == s ? "" : c,
                          shareKey: a.shareKey,
                          arriveStation:
                            null === (u = i.toStation) || void 0 === u
                              ? void 0
                              : u.name,
                          allianceid: e.aid,
                          sid: e.sid,
                          shareImgs: d,
                          type: "pyq",
                          abChannelType: "pyq",
                          isShareGZH: o,
                        }),
                        g = ut(),
                        b =
                          (null == g ? void 0 : g.tag) ||
                          (null === (_ = i.toStation) || void 0 === _
                            ? void 0
                            : _.name),
                        v = l.find(function (e) {
                          return "pyq" == e.channel;
                        }),
                        Z =
                          (null == v ||
                          null === (m = v.picContent) ||
                          void 0 === m
                            ? void 0
                            : m.underDesc) || "",
                        N =
                          (null == v ||
                          null === (p = v.picContent) ||
                          void 0 === p ||
                          null === (f = p.title) ||
                          void 0 === f
                            ? void 0
                            : f.replace("{tagName}", b)) || "";
                      U.getDispatch().pageModel.setShareImageInfo({
                        path: h.path.slice(1),
                        desc: Z,
                        title: N,
                      });
                    }
                  })();
                });
            },
            la = (function () {
              var e = (0, r.Z)(
                (0, i.Z)().mark(function e(t) {
                  var a,
                    n = arguments;
                  return (0, i.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ((a = !(n.length > 1 && void 0 !== n[1]) || n[1]),
                            !U.getPage().cancelSmartTicket)
                          ) {
                            e.next = 4;
                            break;
                          }
                          return fa(D.cancelSmartTicket), e.abrupt("return");
                        case 4:
                          if (!nt()) {
                            e.next = 6;
                            break;
                          }
                          return e.abrupt("return");
                        case 6:
                          if (!oa()) {
                            e.next = 8;
                            break;
                          }
                          return e.abrupt("return");
                        case 8:
                          if (!U.getPage().isCreditPay || !a) {
                            e.next = 14;
                            break;
                          }
                          return (e.next = 11), lt();
                        case 11:
                          if (!e.sent) {
                            e.next = 14;
                            break;
                          }
                          return e.abrupt("return");
                        case 14:
                          if (!Oe()) {
                            e.next = 16;
                            break;
                          }
                          return e.abrupt("return");
                        case 16:
                          if (!Bt()) {
                            e.next = 18;
                            break;
                          }
                          return e.abrupt("return");
                        case 18:
                          null != t && t.toasts && _e(t.toasts);
                        case 19:
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
            da = (function () {
              var e = (0, r.Z)(
                (0, i.Z)().mark(function e(t) {
                  var a;
                  return (0, i.Z)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ((a =
                              U.getState().grabOrderModel.orderInfo
                                .monitorStatus),
                            !nt())
                          ) {
                            e.next = 3;
                            break;
                          }
                          return e.abrupt("return");
                        case 3:
                          if (!U.getPage().jumpFromPayFlag) {
                            e.next = 14;
                            break;
                          }
                          return (
                            (U.getPage().jumpFromPayFlag = !1),
                            (e.next = 7),
                            lt()
                          );
                        case 7:
                          if (!e.sent) {
                            e.next = 10;
                            break;
                          }
                          return e.abrupt("return");
                        case 10:
                          if (2 !== a) {
                            e.next = 14;
                            break;
                          }
                          return (
                            fa(D.prepaySuccessGuidePopup),
                            U.ubtTrace(102356, {
                              openId: Q.ZP.openid || "",
                              orderId: U.getPage().oid,
                            }),
                            e.abrupt("return")
                          );
                        case 14:
                          if (!Oe()) {
                            e.next = 16;
                            break;
                          }
                          return e.abrupt("return");
                        case 16:
                          if (!Bt()) {
                            e.next = 18;
                            break;
                          }
                          return e.abrupt("return");
                        case 18:
                          null != t && t.toasts && _e(t.toasts);
                        case 19:
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
            ua = function (e) {
              var t = U.getState().pageModel.showCount,
                a =
                  U.getState().productModel.specificallyGrab
                    .specialPersonGrabBoxInfo,
                n = U.getState().grabOrderModel.orderInfo.monitorStatus,
                i = U.getState().grabOrderModel.candidateInfo.grabHouBuInfo,
                r =
                  U.getState().grabOrderModel.candidateInfo
                    .candidateTicketDetail,
                o =
                  (null == i ? void 0 : i.candidateStatus) &&
                  ((1 === i.candidateStatus.code && r) ||
                    1 !== i.candidateStatus.code);
              "candidateOrderUpdate" === U.getPage().fromPage
                ? U.getPage().isGrab24
                  ? U.getDispatch().pageModel.setTabsInfo({
                      tabCode: "multiply-grab-tab",
                    })
                  : o &&
                    U.getDispatch().pageModel.setTabsInfo({
                      tabCode: "candidate-grab-tab",
                    })
                : 2 === t &&
                  a &&
                  -1 !== [2, 9].indexOf(n) &&
                  U.getDispatch().pageModel.setTabsInfo({
                    tabCode: "multiply-grab-tab",
                  }),
                (function (e) {
                  var t;
                  (null === (t = ce(k.grabDetailCandidateClickToast)) ||
                  void 0 === t
                    ? void 0
                    : t._jsonInfo) ||
                    (e.orderInterceptInfo &&
                      0 !== e.orderInterceptInfo.hasLogin &&
                      0 === e.orderInterceptInfo.candidateStatus &&
                      (Ht(5),
                      (0, I.showLoading)(),
                      setTimeout(function () {
                        wa(), (0, I.hideLoading)();
                      }, 2e3)));
                })(e),
                ue(),
                de(),
                Qt(e),
                it(e);
            },
            _a = function (e) {
              ue(), de(), Qt(e), it(e);
            },
            ma = (function () {
              var e = (0, r.Z)(
                (0, i.Z)().mark(function e() {
                  var t, a, n, r, o;
                  return (0, i.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              (U.getPage().freezePullDown(),
                              (e.prev = 1),
                              Q.ZP.isLogin)
                            ) {
                              e.next = 5;
                              break;
                            }
                            return (
                              setTimeout(function () {
                                Q.ZP.doLogin();
                              }, 300),
                              e.abrupt("return")
                            );
                          case 5:
                            return (
                              U.getDispatch().my12306Model.refresh(),
                              ra(),
                              na(),
                              ia(),
                              (t = aa()),
                              (0, Y.fu)({
                                ConfigKey: "tieyou_wx_opencrossstation",
                              })
                                .then(function (e) {
                                  e.ConfigInfo &&
                                    e.ConfigInfo.Content &&
                                    U.getDispatch().pageModel.setConfigData({
                                      isShowCrossStationRevise: !!parseInt(
                                        e.ConfigInfo.Content
                                      ),
                                    });
                                })
                                .catch(function () {}),
                              (U.getPage().hasInitPage = !0),
                              (e.next = 14),
                              Ze()
                            );
                          case 14:
                            if (!(a = e.sent)) {
                              e.next = 38;
                              break;
                            }
                            return (
                              (U.getPage().grabOrder = a),
                              ca(a),
                              Ie(a),
                              Ne(a),
                              Se(a),
                              sa(a, { configPromise: t }),
                              ft(a),
                              ht(a),
                              je(a),
                              Re(a),
                              ta(a),
                              Wt(a),
                              (r = !0),
                              "排队中" ===
                                (null == a ||
                                null === (n = a.orderInfo) ||
                                void 0 === n
                                  ? void 0
                                  : n.monitorStatusDesc) && (r = !1),
                              (e.next = 32),
                              le(a)
                            );
                          case 32:
                            return (o = e.sent), (e.next = 35), me(o);
                          case 35:
                            U.getDispatch().pageModel.setPageLoading(!1),
                              ua(a),
                              la(o, r);
                          case 38:
                            e.next = 44;
                            break;
                          case 40:
                            (e.prev = 40),
                              (e.t0 = e.catch(1)),
                              console.log(e.t0),
                              b.Z.commonDebugTrace(
                                "init page err: ".concat(e.t0)
                              );
                          case 44:
                            U.getPage().unfreezePullDown();
                          case 45:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[1, 40]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            pa = function () {
              U.getDispatch().pageModel.setToastCode("");
            },
            fa = function (e) {
              U.getDispatch().pageModel.setToastCode(e);
            },
            ha = function () {
              return U.getState().pageModel.toastCode;
            },
            ga = function (e) {
              U.getDispatch().pageModel.setSecondToastCode(e);
            },
            ba = function () {
              U.getDispatch().pageModel.setSecondToastCode("");
            },
            wa = (function () {
              var e = (0, r.Z)(
                (0, i.Z)().mark(function e() {
                  var t, a;
                  return (0, i.Z)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              U.getPage().freezePullDown(),
                              (e.prev = 1),
                              (0, I.showLoading)(),
                              U.getDispatch().my12306Model.refresh(),
                              (e.next = 6),
                              Ze()
                            );
                          case 6:
                            if (((t = e.sent), (0, I.hideLoading)(), !t)) {
                              e.next = 27;
                              break;
                            }
                            return (
                              (U.getPage().grabOrder = t),
                              ca(t),
                              Ne(t),
                              Se(t),
                              sa(t, { configPromise: Promise.resolve() }),
                              ft(t),
                              ht(t),
                              je(t),
                              Re(t),
                              ta(t),
                              Wt(t),
                              (e.next = 22),
                              le(t)
                            );
                          case 22:
                            return (a = e.sent), (e.next = 25), me(a);
                          case 25:
                            _a(t), da(a);
                          case 27:
                            e.next = 33;
                            break;
                          case 29:
                            (e.prev = 29),
                              (e.t0 = e.catch(1)),
                              console.log(e.t0),
                              b.Z.commonDebugTrace(
                                "refresh page err: ".concat(e.t0)
                              );
                          case 33:
                            U.getPage().unfreezePullDown();
                          case 34:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[1, 29]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            va = a(71515),
            Za = a(1269),
            Na = function () {
              return (0, S.BX)(va.View, {
                className: " _v _s _q _t _r _a _VJ _o",
                children: [
                  (0, S.tZ)(va.View, {
                    className: " _WJ _F _Kc",
                    children: "正在为你生成订单详情，请耐心等待",
                  }),
                  (0, S.tZ)(va.View, {
                    className: " _XJ _Ug _og",
                    children: (0, S.tZ)(va.Icon, {
                      className: " _Ug _og _YJ _ZJ _aK _bK",
                    }),
                  }),
                ],
              });
            },
            Ia = a(3205),
            Sa = a(93917),
            Ta = function (e) {
              var t = e.endTime,
                a = (0, Sa.Z)(t, "dhms");
              return (0, S.tZ)(S.HY, {
                children:
                  t &&
                  (0, S.BX)(va.View, {
                    className: " _i _l",
                    children: [
                      (0, S.tZ)(va.View, {
                        className:
                          " _rb  _nc _Ij _a _hb _S _o color-primary  _Ne -Se -Te",
                        children: a.days > 9 ? a.days : "0" + a.days,
                      }),
                      (0, S.tZ)(va.View, {
                        className: " _sL  _Ne -Se -Te",
                        children: "天",
                      }),
                      (0, S.tZ)(va.View, {
                        className:
                          " _rb  _nc _Ij _a _hb _S _o color-primary  _Ne -Se -Te",
                        children: a.hours > 9 ? a.hours : "0" + a.hours,
                      }),
                      (0, S.tZ)(va.View, {
                        className: " _sL  _Ne -Se -Te",
                        children: "时",
                      }),
                      (0, S.tZ)(va.View, {
                        className:
                          " _rb  _nc _Ij _a _hb _S _o color-primary  _Ne -Se -Te",
                        children: a.minutes > 9 ? a.minutes : "0" + a.minutes,
                      }),
                      (0, S.tZ)(va.View, {
                        className: " _sL  _Ne -Se -Te",
                        children: "分",
                      }),
                      (0, S.tZ)(va.View, {
                        className:
                          " _rb  _nc _Ij _a _hb _S _o color-primary  _Ne -Se -Te",
                        children: a.seconds > 9 ? a.seconds : "0" + a.seconds,
                      }),
                      (0, S.tZ)(va.View, {
                        className: " _sL  _Ne -Se -Te",
                        children: "秒",
                      }),
                    ],
                  }),
              });
            };
          function ya(e) {
            if (!e) return "";
            var t = e.slice(0, -3).split(" "),
              a = t[0].split("-"),
              n = t[1].split(":");
            return "该车次"
              .concat(a[1], "月")
              .concat(a[2], "日")
              .concat(n[0], "点")
              .concat(n[1], "分");
          }
          var Va = _.default.isTieyou,
            Ca = (0, X.$j)(function (e) {
              var t,
                a = e.pageModel,
                n = e.grabOrderModel,
                i = e.t6Model,
                r = e.productModel;
              return {
                orderInfo: n.orderInfo,
                ticketInfo: n.ticketInfo,
                grabSpeedInfo: n.grabSpeedInfo,
                faceType: i.faceType,
                faceSwipingData: i.faceSwipingData,
                grabHouBuInfo: n.candidateInfo.grabHouBuInfo,
                grabProcessInfo: n.grabProcessInfo,
                grabTicketSplitInfo:
                  null === (t = oe(x.grabTicketSplitArea)) || void 0 === t
                    ? void 0
                    : t._jsonInfo,
                showCuiChuPiaoBanner: r.cuiChuPiaoData.showCuiChuPiaoBanner,
                cuiChuPiaoInfo: r.cuiChuPiaoData.cuiChuPiaoInfo,
                cuiChuPiaoPath: r.cuiChuPiaoData.cuiChuPiaoPath,
                isSecondShowGrabOrder: 2 === a.showCount,
                orderInterceptInfo: i.orderInterceptInfo,
              };
            })(function (e) {
              var t = e.orderInfo,
                a = e.ticketInfo,
                n = e.grabSpeedInfo,
                i = e.faceType,
                r = e.faceSwipingData,
                o = e.grabHouBuInfo,
                c = void 0 === o ? {} : o,
                s = e.grabProcessInfo,
                l = e.grabTicketSplitInfo,
                d = e.showCuiChuPiaoBanner,
                u = e.cuiChuPiaoInfo,
                _ = e.cuiChuPiaoPath,
                p = e.isSecondShowGrabOrder,
                f = e.orderInterceptInfo,
                g = t || {},
                b = g.monitorStatus,
                w = g.monitorStatusDesc,
                v = g.monitorStatusDetail,
                Z = "animate6";
              if (n.speedLevels) {
                var N = n.speedLevels.find(function (e) {
                  return e.isCurrent;
                });
                N && (Z = "animate" + N.speed);
              }
              var I = 2 === b && 0 === s.processFlag && !l && d;
              (0, m.useEffect)(
                function () {
                  I &&
                    U.ubtTrace(205920, {
                      exposureType: "normal",
                      bizKey: "z_cchup_button_show",
                    });
                },
                [I]
              );
              return (0, S.tZ)(va.View, {
                className: ""
                  .concat(" _p _XI _b -sd -sd", " ")
                  .concat(15 === i ? "-td" : "", " ")
                  .concat(n.goldGrabFlag ? "-ud" : ""),
                children: (0, S.tZ)(va.View, {
                  className: " _i _l",
                  children: (0, S.BX)(va.View, {
                    className: " _i _l _j",
                    children: [
                      (0, S.BX)(va.View, {
                        className: " _Bn _bn _p",
                        children: [
                          (0, S.tZ)(va.Icon, {
                            className: " _fb _eg _u _yi _Jn _JD _bJ",
                          }),
                          (0, S.tZ)(va.Icon, {
                            className:
                              2 === b || 10 === b
                                ? " _Bn _Tb _u _Sw _Jn _cJ _dJ -vd " + Z
                                : " _Bn _Tb _u _Sw _Jn _cJ _dJ",
                          }),
                        ],
                      }),
                      (0, S.BX)(va.View, {
                        className: " _j",
                        children: [
                          w &&
                            (0, S.BX)(va.View, {
                              className: " _yA _kt _b _i",
                              children: [
                                w,
                                9 === b &&
                                  (0, S.tZ)(Ta, { endTime: a.saleTime }),
                                c.candidateTag &&
                                  (0, S.BX)(va.Text, {
                                    className:
                                      " _Ua _yE _eJ _Qi _Rk _fJ _U _mE _gJ color-primary",
                                    id: "AJDQ",
                                    onClick: function () {
                                      var e = c.jumpUrl,
                                        t = void 0 === e ? "" : e;
                                      Ia.Z.twebview({ data: { url: t } });
                                    },
                                    "data-ubt-key":
                                      "wx_orderdetail_gotoDualChannelH5Page",
                                    children: [
                                      c.candidateTag,
                                      (0, S.tZ)(va.Text, {
                                        className: "ifont-detail iconfont",
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                          v &&
                            (0, S.tZ)(va.View, {
                              className: " _Ac _tj _F _aJ _U",
                              children:
                                9 === b ? "".concat(ya(a.saleTime), "开售") : v,
                            }),
                        ],
                      }),
                      I &&
                        (0, S.BX)(va.View, {
                          className: " _vp _p",
                          children: [
                            u._showTag &&
                              (0, S.tZ)(va.View, {
                                className:
                                  " _u _hJ _t _Q _iJ _Rk _C _b _Rs -wd -xd " +
                                  (Va ? "ty" : "zx"),
                                children: "免费提速",
                              }),
                            (0, S.BX)(va.Button, {
                              className:
                                " _p _lk _nf _jJ _Mj _a _ck _Mb -yd " +
                                (2 === u.state ? "-zd" : "-Ad") +
                                " " +
                                (n.goldGrabFlag ? "-Bd" : ""),
                              id: "AJDR",
                              onClick: function () {
                                var e = n.speed >= 6;
                                if (
                                  (U.ubtTrace(205922, {
                                    bizKey: "z_cchup_button_click",
                                  }),
                                  _ && 1 === _.jumpState && _.jumpUrl && !Va)
                                )
                                  h.Z.commonNavigator(_.jumpUrl);
                                else {
                                  var t = ($.t1.get() || {}).cuigrabId || [];
                                  if (e) fa(D.showCuiWithVipPrompt);
                                  else
                                    U.getState().productModel.specificallyGrab
                                      .specialPersonGrabBoxInfo &&
                                    null != _ &&
                                    _.specialGrabToastInfo
                                      ? -1 !== t.indexOf(U.getPage().oid)
                                        ? fa(D.urgeSpecificallyGrabDrawer)
                                        : (fa(D.urgeLoadingDrawer),
                                          (U.getPage().urgeLoadingDrawerTimer =
                                            setTimeout(function () {
                                              var e = (0, L.Z)(
                                                (0, L.Z)({}, u),
                                                {},
                                                { _showTag: !1 }
                                              );
                                              U.getDispatch().productModel.setCuiChuPiaoData(
                                                { cuiChuPiaoInfo: e }
                                              ),
                                                fa(
                                                  D.urgeSpecificallyGrabDrawer
                                                );
                                            }, 2e3)))
                                      : fa(D.showCuiBelowVipPrompt);
                                  t.push(U.getPage().oid),
                                    $.t1.setAttr("cuigrabId", t.slice(-100)),
                                    U.ubtTrace(205920, {
                                      exposureType: "popup",
                                      bizKey: "z_cchup_popup_show",
                                      series: e ? 1 : 0,
                                    });
                                }
                              },
                              disabled: 2 === u.state,
                              children: [
                                (0, S.BX)(va.Text, {
                                  children: [
                                    " ",
                                    2 === u.state ? "已催出票" : "去催出票",
                                  ],
                                }),
                                p &&
                                  (0, S.tZ)(va.Image, {
                                    className: " _u _kJ _lJ _nf _mJ",
                                    src: "https://images3.c-ctrip.com/ztrip/train_zhu/img_btn_ani_gy.png",
                                  }),
                              ],
                            }),
                          ],
                        }),
                      16 === i &&
                        r &&
                        (0, S.tZ)(va.View, {
                          className: " _vp _p",
                          children: (0, S.tZ)(va.Button, {
                            className:
                              " _p _lk _nf _jJ _Mj _a _ck _Mb -yd color-primary",
                            id: "AJDS",
                            onClick: function () {
                              U.navigateTo({
                                url: "/pages/train/darkReason/darkReason",
                                callback: function (e) {
                                  e && e.onComfirm && Ft();
                                },
                              });
                            },
                            children: "查看原因",
                          }),
                        }),
                      f &&
                        17 === b &&
                        (0, S.tZ)(va.Button, {
                          className: " _nJ _oJ _qb _qe _jc _O",
                          id: "AJDT",
                          onClick: function () {
                            fa(D.waitOpenQADrawer);
                          },
                          children: "待开启原因",
                        }),
                    ],
                  }),
                }),
              });
            }),
            Da = _.default.isTieyou,
            ka = m.default.memo(
              (0, X.$j)(function (e) {
                var t = e.t6Model;
                return {
                  faceType: t.faceType,
                  faceSwipingData: t.faceSwipingData,
                };
              })(function (e) {
                var t = e.faceType,
                  a = e.faceSwipingData;
                return (
                  (15 === t || 2 === t) &&
                  a &&
                  (0, S.BX)(va.View, {
                    className:
                      " _dc _NM _p _in _OM _i _l _PM -Lf" +
                      (Da ? " ty" : " zx"),
                    children: [
                      (0, S.tZ)(va.View, { className: "-Mf  _Vf _Gc _Qf _Nz" }),
                      (0, S.BX)(va.View, {
                        className: "cont",
                        children: [
                          (0, S.tZ)(va.View, {
                            className: " _MJ _Mi",
                            children: a.title,
                          }),
                          a.descList[0] &&
                            a.descList.map(function (e) {
                              return (0,
                              S.tZ)(va.View, { className: " _D _Kc", children: e }, "index");
                            }),
                        ],
                      }),
                      (0, S.tZ)(va.Button, {
                        className: " _ue _nf _zF _yA _qy _b _QM",
                        id: "AJDt",
                        onClick: Ft,
                        children: a.buttonName,
                      }),
                    ],
                  })
                );
              })
            ),
            Ba = _.default.isTieyou,
            xa = m.default.memo(
              (0, X.$j)(function (e) {
                var t = e.grabOrderModel,
                  a = e.pageModel;
                return {
                  show:
                    e.t6Model.isShowPreLoginBanner &&
                    9 === t.orderInfo.monitorStatus,
                  preSaleBannerInfo: a.configData.preSaleNotLoginConfig,
                };
              })(function (e) {
                var t = e.show,
                  a = void 0 !== t && t,
                  n = e.preSaleBannerInfo,
                  i = (void 0 === n ? {} : n) || {},
                  r = i.title,
                  o = void 0 === r ? "" : r,
                  c = i.subTitle,
                  s = void 0 === c ? "" : c,
                  l = i.btnName,
                  d = void 0 === l ? "" : l,
                  u = i.tag,
                  _ = void 0 === u ? "" : u;
                return o
                  ? (0, S.tZ)(va.View, {
                      children:
                        a &&
                        (0, S.BX)(va.View, {
                          className: " _i _l _m _jj _dc _MM _KC _p _yc",
                          children: [
                            (0, S.tZ)(va.Image, {
                              src: "https://images3.c-ctrip.com/train/tieyou-mini-img/202012/presale-bg.png",
                              className: " _UM _hs _u _s _q _fm",
                            }),
                            (0, S.BX)(va.View, {
                              className: " _j _gl",
                              children: [
                                (0, S.BX)(va.View, {
                                  className: " _i _l _VM",
                                  children: [
                                    (0, S.tZ)(va.View, {
                                      className: " _WM _Iq _ok",
                                      children: o,
                                    }),
                                    _ &&
                                      (0, S.tZ)(va.Text, {
                                        className: " _b _C _XM _YM _ji",
                                        children: _,
                                      }),
                                  ],
                                }),
                                (0, S.tZ)(va.View, {
                                  className: " _Kc _D",
                                  children: s,
                                }),
                              ],
                            }),
                            d &&
                              (0, S.tZ)(va.Button, {
                                className: ""
                                  .concat(" _ye _F _b _Am _db _Pd _Mj -Nf", " ")
                                  .concat(Ba ? "ty" : "zx"),
                                id: "AJDw",
                                onClick: Yt,
                                children: d,
                              }),
                          ],
                        }),
                    })
                  : (0, S.tZ)(va.View, {});
              })
            ),
            Pa = (0, X.$j)(function (e) {
              return { greenChannelDetail: e.productModel.greenChannelDetail };
            })(function (e) {
              var t = e.greenChannelDetail,
                a = function () {
                  fa(D.greenChannelPopup);
                };
              return !t || (7 === t.claimType && 0 === t.claimStatus)
                ? (0, S.tZ)(va.View, {})
                : (0, S.tZ)(S.HY, {
                    children: (0, S.BX)(va.View, {
                      className: " _i _l _m _jj _dc _MM _KC _p _yc",
                      children: [
                        (0, S.tZ)(va.View, {
                          className: " _cc _bc _lj",
                          children: (0, S.tZ)(va.Image, {
                            className: " _cc _bc",
                            src: t.iconUrl,
                          }),
                        }),
                        4 === t.claimStatus &&
                          (0, S.tZ)(va.View, {
                            className: " _cs _Xb _U _Ua _j _yc",
                            children: "抱歉，理赔失败，无法理赔",
                          }),
                        3 === t.claimStatus &&
                          (0, S.tZ)(va.View, {
                            className: " _cs _Xb _U _Ua _j _yc",
                            children:
                              "理赔提交已成功，您可去智行-我的钱包查看进度",
                          }),
                        3 !== t.claimStatus &&
                          4 !== t.claimStatus &&
                          (0, S.tZ)(va.View, {
                            className: " _cs _Xb _U _Ua _j _yc",
                            children: t.content,
                          }),
                        (1 === t.claimStatus || 4 === t.claimStatus) &&
                          (0, S.BX)(S.HY, {
                            children: [
                              (0, S.tZ)(va.View, {
                                className: " _Ua _U _Di _cs color-primary",
                                id: "AJDu",
                                onClick: a,
                                children: 4 === t.claimStatus ? "查看" : "申请",
                              }),
                              (0, S.tZ)(va.View, {
                                className: " _Ua _xl _Sf -Kf",
                                children: (0, S.tZ)(va.Text, {
                                  className: "ifont-arr iconfont",
                                  id: "AJDv",
                                  onClick: a,
                                }),
                              }),
                            ],
                          }),
                      ],
                    }),
                  });
            }),
            Ma = a(34229),
            Aa = m.default.memo(
              (0, X.$j)(function (e) {
                return {
                  content: e.productModel.vipInfo.seasonMemberShipBannerInfo,
                  propStyle: { margin: "0 20rpx 20rpx" },
                };
              })(function (e) {
                var t = e.content,
                  a = e.propStyle;
                if (!t) return (0, S.tZ)(va.View, {});
                var n = t.leftIcon,
                  i = t.backgroundIcon,
                  r = t.buttonText,
                  o = t.title,
                  c = t.openTitleEntities,
                  s = void 0 === c ? [] : c;
                return (0, S.BX)(va.View, {
                  className: " _Id _dN _Mb _p _eN _i _l -Xf",
                  style: a,
                  children: [
                    (0, S.tZ)(va.Image, { className: "-Yf", src: i, webp: !0 }),
                    (0, S.tZ)(va.Image, { className: "-Zf", src: n, webp: !0 }),
                    (0, S.BX)(va.View, {
                      className: "-ag",
                      children: [
                        (0, S.tZ)(Ma.ZtRichText, {
                          className: "-bg",
                          nodes: o,
                        }),
                        (0, S.tZ)(va.View, {
                          className: "-cg",
                          children: s.map(function (e, t) {
                            return (0,
                            S.BX)(S.HY, { children: [(0, S.BX)(va.View, { className: "-dg", children: [e.iconUrl && (0, S.tZ)(va.Image, { className: "-eg", src: e.iconUrl, webp: !0 }), (0, S.tZ)(va.View, { className: "-fg", children: e.openDesc })] }, e.openDesc), t < s.length - 1 && (0, S.tZ)(va.View, { className: "-gg" })] });
                          }),
                        }),
                      ],
                    }),
                    (0, S.tZ)(va.View, {
                      className: "-hg",
                      id: "AJDx",
                      onClick: function () {
                        U.ubtTrace(205922, {
                          bizKey: "z_detail_grab_applet_vip_modeule_click",
                        }),
                          U.getDispatch().productModel.setVipInfo({
                            seasonMemberOrderScene: 35,
                          }),
                          fa(D.seasonMemberShipDrawer);
                      },
                      children: r,
                    }),
                  ],
                });
              })
            ),
            Xa = (0, X.$j)(function (e) {
              var t = e.grabOrderModel;
              return {
                content: t.studentWelfare.studentWelfareInfo,
                monitorStatus: t.orderInfo.monitorStatus,
              };
            })(function (e) {
              var t = e.content,
                a = e.monitorStatus,
                n = e.propStyle;
              if (
                ((0, m.useEffect)(
                  function () {
                    null != t &&
                      t.title &&
                      [2, 9].includes(a) &&
                      U.ubtTrace(
                        "TZWgrabDetail_grabDetail_StudentButton_exposure",
                        { PageId: U.getPage().pageId }
                      );
                  },
                  [t, a]
                ),
                null == t || !t.title || ![2, 9].includes(a))
              )
                return (0, S.tZ)(va.View, {});
              var i = t.title,
                r = void 0 === i ? "" : i,
                o = t.tag,
                c = void 0 === o ? "" : o,
                s = t.desc,
                l = void 0 === s ? "" : s,
                d = t.icon,
                u = void 0 === d ? "" : d,
                _ = function () {
                  U.ubtTrace("TZWgrabDetail_grabDetail_StudentButton_click", {
                    PageId: U.getPage().pageId,
                  }),
                    ga(D.studentWelfareDrawer);
                };
              return (0,
              S.BX)(va.View, { className: " _i _l _Ei _KC _Vb _Oa", style: n, children: [(0, S.tZ)(va.Image, { className: " _cc _bc", src: u || "https://images3.c-ctrip.com/ztrip/train_zhu/icon_QP_xscq_tqrk@3x.png" }), (0, S.tZ)(va.View, { className: " _ZM _sb _aN", children: r }), (0, S.tZ)(va.View, { className: " _bh _Rj _O _sh _aj _kc _p -Of", children: c }), (0, S.tZ)(va.View, { className: " _Oc _j _Di _Ma _Na", id: "AJDy", onClick: _, children: l }), (0, S.tZ)(va.Image, { className: " _Og _og _Ye", src: "https://images3.c-ctrip.com/ztrip/train_zhu/icon_jt_12_hui99.png", id: "AJDz", onClick: _ })] });
            }),
            za = m.default.memo(
              (0, X.$j)(function (e) {
                var t = e.productModel,
                  a = e.t6Model;
                return {
                  content: t.noLoginT6GrabInfo.noLoginT6PurchasedBanner,
                  orderInterceptInfo: a.orderInterceptInfo,
                  faceSwipingData: a.faceSwipingData,
                  orderInterceptT6AccountInfo: a.orderInterceptT6AccountInfo,
                };
              })(function (e) {
                var t = e.content,
                  a = e.faceSwipingData,
                  n = e.orderInterceptInfo,
                  i = e.orderInterceptT6AccountInfo,
                  r = t || {},
                  o = r.title,
                  c = void 0 === o ? "" : o,
                  s = r.subTitle,
                  l = void 0 === s ? "" : s,
                  d = r.tag,
                  u = void 0 === d ? "" : d,
                  _ = r.orderStatus,
                  m = void 0 === _ ? -1 : _;
                return (0, S.tZ)(va.View, {
                  children:
                    t &&
                    (0, S.BX)(va.View, {
                      className: " _Fi _RM _Vb _dc _i _l",
                      children: [
                        (0, S.BX)(va.View, {
                          className: " _j",
                          children: [
                            (0, S.BX)(va.View, {
                              className: " _i _l",
                              children: [
                                (0, S.tZ)(va.View, {
                                  className: " _Xb _xe",
                                  children: c,
                                }),
                                (0, S.tZ)(va.View, {
                                  className: " _Zg _Hi _ji _SM _qb _aj",
                                  children: u,
                                }),
                              ],
                            }),
                            (0, S.tZ)(va.View, {
                              className: " _gj _Ma _Ag _P",
                              children: l,
                            }),
                          ],
                        }),
                        (0, S.tZ)(va.View, {
                          className: " _Ys _ye _TM _qb _Vz",
                          onClick: function () {
                            16 === m && a
                              ? Ft()
                              : n && 17 === m
                              ? Kt()
                              : 18 === m && i && Et();
                          },
                          children: 17 === m ? "去登录" : "解决问题",
                        }),
                      ],
                    }),
                });
              })
            ),
            Oa = function () {
              return (0, S.BX)(S.HY, {
                children: [
                  (0, S.tZ)(ka, {}),
                  (0, S.tZ)(xa, {}),
                  (0, S.tZ)(Pa, {}),
                  (0, S.tZ)(Xa, {}),
                  (0, S.tZ)(Aa, {}),
                  (0, S.tZ)(za, {}),
                ],
              });
            },
            Ga = (0, X.$j)(
              function (e) {
                var t,
                  a = e.pageModel,
                  n = e.grabOrderModel,
                  i = e.productModel,
                  r = n.orderInfo.monitorStatus,
                  o =
                    null === (t = re("trainStopNotice")) || void 0 === t
                      ? void 0
                      : t._jsonInfo,
                  c = n.candidateInfo.grabHouBuInfo,
                  s = n.candidateInfo.candidateTicketDetail,
                  l = i.specificallyGrab.specialPersonGrabBoxInfo,
                  d = 2 === r && o;
                return {
                  tabCode: a.tabsInfo.tabCode,
                  multiplyGrabTabs: a.tabsInfo.multiplyGrabTabs,
                  isShowShutDownTipInfo: d,
                  monitorStatus: r,
                  grabHouBuInfo: c,
                  specialPersonGrabBoxInfo: l,
                  candidateTicketDetail: s,
                };
              },
              function (e) {
                var t = e.pageModel;
                return {
                  setTabCode: function (e) {
                    t.setTabsInfo({ tabCode: e });
                  },
                };
              }
            )(function (e) {
              var t,
                a,
                n,
                i = e.tabCode,
                r = void 0 === i ? "" : i,
                o = e.multiplyGrabTabs,
                c = e.isShowShutDownTipInfo,
                s = e.monitorStatus,
                l = e.grabHouBuInfo,
                d = e.specialPersonGrabBoxInfo,
                u = e.candidateTicketDetail,
                _ = e.setTabCode,
                m = void 0 === _ ? function () {} : _,
                p =
                  l &&
                  l.candidateStatus &&
                  ((1 === l.candidateStatus.code && u) ||
                    1 !== l.candidateStatus.code),
                f = o && !c && o.length > 0 && (2 === s || 9 === s),
                h = function (e) {
                  m(e),
                    "multiply-grab-tab" == e &&
                      d &&
                      U.ubtTrace("c_trn_z_10650060279", {
                        bizKey: "z_grab_detail_zrqp_tab_click",
                      });
                };
              return (
                f &&
                (0, S.BX)(va.View, {
                  className: " _zJ _rn _p _mh _i _lb _m",
                  children: [
                    (0, S.BX)(va.View, {
                      className: ""
                        .concat(" _o _Wc _Xb _p _AJ _i _k _l -Hd", " ")
                        .concat("-Kd", " ")
                        .concat("single-grab-tab" === r ? "-Rd" : "", " ")
                        .concat(p ? "-Md" : "-Id"),
                      id: "AJDq",
                      onClick: function () {
                        h("single-grab-tab");
                      },
                      children: [
                        (0, S.tZ)(va.View, {
                          className: " _p _in",
                          children:
                            (null === (t = o[0]) || void 0 === t
                              ? void 0
                              : t.name) || "",
                        }),
                        "single-grab-tab" === r &&
                          (0, S.tZ)(va.Image, {
                            src: p
                              ? "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/left@3x.png"
                              : "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/z@3x.png",
                            className: "-Jd -Kd",
                          }),
                      ],
                    }),
                    !!p &&
                      (0, S.BX)(va.View, {
                        className: ""
                          .concat(" _o _Wc _Xb _p _AJ _i _k _l -Hd", " ")
                          .concat("-Nd", " ")
                          .concat("-Md", " ")
                          .concat("candidate-grab-tab" === r ? "-Rd" : ""),
                        id: "AJDr",
                        onClick: function () {
                          return h("candidate-grab-tab");
                        },
                        children: [
                          (0, S.tZ)(va.View, {
                            className: " _p _in",
                            children: "候补兑现",
                          }),
                          "candidate-grab-tab" === r &&
                            (0, S.tZ)(va.Image, {
                              src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/tabchange@3x.png",
                              className: "-Jd",
                            }),
                        ],
                      }),
                    (0, S.BX)(va.View, {
                      className: ""
                        .concat(" _o _Wc _Xb _p _AJ _i _k _l -Hd", " ")
                        .concat("-Ld", " ")
                        .concat("multiply-grab-tab" === r ? "-Rd" : "", " ")
                        .concat(p ? "-Md" : "-Id"),
                      id: "AJDs",
                      onClick: function () {
                        return h("multiply-grab-tab");
                      },
                      children: [
                        (0, S.BX)(va.View, {
                          className: " _p _in",
                          children: [
                            (0, S.tZ)(va.View, {
                              children:
                                (null === (a = o[1]) || void 0 === a
                                  ? void 0
                                  : a.name) || "",
                            }),
                            (null === (n = o[1]) || void 0 === n
                              ? void 0
                              : n.tag) &&
                              (o[1].tag.includes("https")
                                ? (0, S.tZ)(S.HY, {})
                                : (0, S.tZ)(va.View, {
                                    className: ""
                                      .concat(" _Zg _dz -Od", " ")
                                      .concat((o[1].tag, "-Qd"), " ")
                                      .concat(p ? "-Md" : "-Id"),
                                    children: o[1].tag,
                                  })),
                          ],
                        }),
                        "multiply-grab-tab" === r &&
                          (0, S.tZ)(va.Image, {
                            src: p
                              ? "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/right@3x.png"
                              : "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/y@3x.png",
                            className: "-Jd -Ld",
                          }),
                      ],
                    }),
                  ],
                })
              );
            }),
            La = function (e) {
              var t = e.showAcce,
                a = e.propStyle,
                n = void 0 === a ? "" : a,
                i = function (t) {
                  try {
                    e.ubtTrace(t, {
                      openId: Q.ZP.openid || "",
                      userName: Q.ZP.userName || "",
                      cid: Q.ZP.cid || "",
                    });
                  } catch (e) {
                    console.log(e);
                  }
                };
              return (
                (0, m.useEffect)(
                  function () {
                    i(192528), t && i(197136);
                  },
                  [t]
                ),
                (0, S.tZ)(va.View, {
                  children: (0, S.BX)(va.View, {
                    className: " _i _l",
                    style: n,
                    children: [
                      (0, S.tZ)(va.View, {
                        className: ""
                          .concat(" _j _w _Oa _Gc _Xc _i _l _n -Mh", " ")
                          .concat(_.default.isTieyou ? "ty" : "zx"),
                        id: "AJEb",
                        onClick: function () {
                          i(192529), e.doShare();
                        },
                        children: (0, S.tZ)(va.View, {
                          className: "-Nh",
                          children: "好友加速",
                        }),
                      }),
                      t &&
                        (0, S.tZ)(va.View, {
                          className: ""
                            .concat(" _fP _Ae _dm _dr _i _k _l _n _b _gP", " ")
                            .concat(_.default.isTieyou ? "ty" : "zx"),
                          id: "AJEc",
                          onClick: function () {
                            i(197137), e.onClick();
                          },
                          children: (0, S.tZ)(va.View, {
                            className: " _MJ _W",
                            children: "手动提速",
                          }),
                        }),
                    ],
                  }),
                })
              );
            },
            Fa = m.default.memo(function (e) {
              var t = e.isTieyou,
                a = void 0 !== t && t,
                n = e.onFreeBtnClick,
                i = void 0 === n ? function () {} : n,
                r = e.onSpeedBtnClick,
                o = void 0 === r ? function () {} : r;
              (0, m.useEffect)(function () {
                var e,
                  t,
                  a = (0, I.getCurrentPage)();
                null == a ||
                  null === (e = a.ubtTrace) ||
                  void 0 === e ||
                  e.call(a, "s_trn_z_10650060279", {
                    exposureType: "normal",
                    bizKey: "z_grab_detail_speedup_fee_button_show",
                  }),
                  null == a ||
                    null === (t = a.ubtTrace) ||
                    void 0 === t ||
                    t.call(a, "s_trn_z_10650060279", {
                      exposureType: "normal",
                      bizKey: "z_grab_detail_speedup_nofee_button_show",
                    });
              }, []);
              var c =
                "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/".concat(
                  a ? "bql" : "bqc",
                  "@3x.png"
                );
              return (0,
              S.BX)(va.View, { className: " _i _m", children: [(0, S.tZ)(va.View, { className: " _Oa _Gc _Xc _fu _o _j  _vd _x _Qf -Kh", id: "AJEZ", onClick: i, children: "免费加速" }), (0, S.BX)(va.View, { className: " _Oa _Gc _Xc _fu _o _j  _w _qb _p -Lh", id: "AJEa", onClick: o, children: [(0, S.tZ)(va.Text, { children: "立即加速" }), (0, S.tZ)(va.View, { className: " _UM _ug _R _o _u _io _eP _qb _rF", style: "background: url('".concat(c, "') no-repeat;background-size: contain;"), children: (0, S.tZ)(va.Text, { children: "可直升VIP" }) })] })] });
            }),
            ja = _.default.isTieyou,
            Ra = {
              interrupt: " _u _GK _U _Al _ji _C _b _tO _vO -ah",
              stuOrNewGuest: " _rD",
              switchAccount: " _rD",
              default: " _u _GK _U _Al _ji _C _b _tO _uO -Zg",
            },
            Ja = m.default.memo(
              (0, X.$j)(function (e) {
                return {
                  relativeAccountShareInfo:
                    e.planModel.relativeAccountInfo.relativeAccountShareInfo,
                };
              })(function (e) {
                var t = e.propStyle,
                  a = e.relativeAccountShareInfo,
                  n = e.from,
                  i = void 0 === n ? "default" : n;
                return a && _.default.isWechat
                  ? (0, S.BX)(va.Button, {
                      className: ""
                        .concat(" _Fa _Ae _fD _i _k _l _n _sO -Xg", " ")
                        .concat(
                          "stuOrNewGuest" === i || "switchAccount" === i
                            ? "-bh"
                            : "-Yg",
                          " "
                        )
                        .concat(ja ? "ty" : "zx"),
                      style: t,
                      id: "AJEP",
                      onClick: function () {
                        !(function () {
                          var e =
                            U.getState().grabOrderModel.orderInfo.monitorStatus;
                          U.ubtTrace("QP_detail_train_wx_hybq_click", {
                            status: e,
                          }),
                            U.navigateTo({
                              url: "/pages/train/accounthelp/index1?relativeKey=".concat(
                                encodeURIComponent(a.relativeKey)
                              ),
                            });
                        })();
                      },
                      "data-flag": "account-relative",
                      children: [
                        (0, S.tZ)(va.View, {
                          className: " _MJ _x _W -ch",
                          children:
                            "switchAccount" === i
                              ? "无账号可用？试试好友帮抢"
                              : a.title,
                        }),
                        (0, S.tZ)(va.View, {
                          className: " _C _Ge _O -dh",
                          children: a.subTitle,
                        }),
                        (0, S.tZ)(va.View, {
                          className: Ra[i],
                          children: a.tag,
                        }),
                      ],
                    })
                  : (0, S.tZ)(va.View, {});
              })
            ),
            Ea = (0, X.$j)(function (e) {
              var t = e.pageModel,
                a = e.grabOrderModel;
              return {
                isCanFriendSpeed: t.isCanFriendSpeed,
                monitorStatus: a.orderInfo.monitorStatus,
                grabSpeedInfo: a.grabSpeedInfo,
                grabProcessInfo: a.grabProcessInfo,
              };
            })(function (e) {
              var t = e.isCanFriendSpeed,
                a = e.grabSpeedInfo,
                n = e.monitorStatus,
                i = e.grabProcessInfo,
                r = a || {},
                o = r.isSpeedGrabBtnABTest,
                c = r.acceDesc,
                s = r.shareStatus,
                l = r.isVIPGrab,
                d = i || {},
                u = d.processFlag,
                p = d.realProcessFlag,
                f = d.unlockFlag,
                h = function () {
                  fa(D.speedGrabTaskDrawer);
                },
                g = function () {
                  U.navigateTo({
                    url: "/pages/trainDetail/friendSpeedUp/index?oid="
                      .concat(U.getPage().oid, "&isCanFriendSpeed=")
                      .concat(t ? 1 : 0),
                  });
                };
              return (0, S.BX)(S.HY, {
                children: [
                  (0, S.tZ)(va.View, {
                    className: " _bd _rJ",
                    children: "当前速度",
                  }),
                  (0, S.BX)(va.View, {
                    className: " _tc",
                    children: [
                      (0, S.tZ)(va.View, {
                        className: " _Lc _i",
                        children: a.speedLevels.map(function (e) {
                          return (0, S.BX)(
                            va.View,
                            {
                              className: ""
                                .concat(" _Dp _F _Kc _o -vh -wh -xh", " ")
                                .concat(e.isCurrent ? "-yh" : ""),
                              id: "AJET",
                              onClick: function () {
                                (U.getPage().seasonMemberOrderScene = 38),
                                  fa(D.seasonMemberShipDrawer);
                              },
                              children: [
                                e.isVIP &&
                                  (0, S.tZ)(va.Icon, { className: "-zh" }),
                                e.name,
                              ],
                            },
                            e.name
                          );
                        }),
                      }),
                      (0, S.BX)(va.View, {
                        className: " _ii _XO _vi _YO _yc",
                        children: [
                          (0, S.tZ)(va.View, {
                            className:
                              " _ZO _ii _YJ _p -Ah -Bh -Ch -Dh -Eh -Fh -Gh -Hh",
                          }),
                          [1, 2, 3, 4, 5, 6, 7].map(function (e) {
                            return (0,
                            S.tZ)(m.default.Fragment, { children: e < a.speed && (0, S.tZ)(va.View, { className: " _ZO _ii _YJ _p -Ah -Bh -Ch -Dh -Eh -Fh -Gh -Hh" }) }, "index");
                          }),
                        ],
                      }),
                      0 === u
                        ? (0, S.tZ)(va.View, {
                            className: " _aP _G _oc _m flex-align-items-center",
                            children:
                              3 == a.buttonType
                                ? (0, S.tZ)(S.HY, {
                                    children: (0, S.tZ)(va.Text, {
                                      children: "已用VIP抢票券，有票优先出",
                                    }),
                                  })
                                : (0, S.BX)(S.HY, {
                                    children: [
                                      (0, S.tZ)(va.View, {
                                        className: "add-speed",
                                        children: (0, S.tZ)(Ma.ZtRichText, {
                                          className: " _S",
                                          space: "nbsp",
                                          nodes: c,
                                        }),
                                      }),
                                      !o &&
                                        !l &&
                                        (0, S.tZ)(va.View, {
                                          className:
                                            " _pb _Qr _SK _Mb  _dv _Zn _x _Qj -Ih",
                                          id: "AJEU",
                                          onClick: h,
                                          children: "去加速",
                                        }),
                                      o &&
                                        l &&
                                        (0, S.tZ)(va.View, {
                                          className:
                                            " _pb _Qr _SK _Mb  _bP _ob _cP _Jh",
                                          id: "AJEV",
                                          onClick: g,
                                          children: t
                                            ? "邀好友得好礼"
                                            : "做任务得好礼",
                                        }),
                                    ],
                                  }),
                          })
                        : 0 === f &&
                          (0, S.BX)(va.View, {
                            className: " _i _l _mj _F _Nd",
                            children: [
                              (0, S.BX)(va.View, {
                                className: " _j",
                                children: [
                                  "您可",
                                  (0, S.tZ)(va.Text, {
                                    className: " _dP",
                                    children: "免费享VIP",
                                  }),
                                  "抢票速度，请尽快",
                                  5 === p || 6 === p ? "去APP" : "",
                                  "解锁",
                                ],
                              }),
                              t &&
                                (0, S.tZ)(va.Button, {
                                  className: " _ek _mb _Jf _nb _F -Jh",
                                  id: "AJEW",
                                  onClick: function () {
                                    fa(D.showStuAndNewGuestPrompt);
                                  },
                                  children: "免费提速",
                                }),
                            ],
                          }),
                      u > 0
                        ? 2 !== n &&
                          9 !== n &&
                          (0, S.tZ)(Ja, { from: "stuOrNewGuest" })
                        : (0, S.BX)(S.HY, {
                            children: [
                              1 === a.buttonType && 0 === u
                                ? (0, S.BX)(S.HY, {
                                    children: [
                                      !o &&
                                        (0, S.tZ)(La, {
                                          id: "AJEX",
                                          onClick: function () {
                                            h();
                                          },
                                          ubtTrace: U.ubtTrace,
                                          doShare: function () {
                                            g();
                                          },
                                        }),
                                      o &&
                                        (0, S.tZ)(Fa, {
                                          isTieyou: _.default.isTieyou,
                                          onFreeBtnClick: function () {
                                            g(),
                                              U.ubtTrace(
                                                "c_trn_z_10650060279",
                                                {
                                                  bizKey:
                                                    "z_grab_detail_speedup_nofee_button_click",
                                                }
                                              );
                                          },
                                          onSpeedBtnClick: function () {
                                            h(),
                                              U.ubtTrace(
                                                "c_trn_z_10650060279",
                                                {
                                                  bizKey:
                                                    "z_grab_detail_speedup_fee_button_click",
                                                }
                                              );
                                          },
                                        }),
                                    ],
                                  })
                                : (0, S.tZ)(S.HY, {
                                    children:
                                      0 === s &&
                                      l &&
                                      !o &&
                                      (0, S.tZ)(La, {
                                        id: "AJEY",
                                        onClick: function () {
                                          h();
                                        },
                                        ubtTrace: U.ubtTrace,
                                        showAcce: !1,
                                        doShare: function () {
                                          g();
                                        },
                                      }),
                                  }),
                              2 !== n && 9 !== n && (0, S.tZ)(Ja, {}),
                            ],
                          }),
                    ],
                  }),
                ],
              });
            }),
            Ha = (0, X.$j)(function (e) {
              var t = e.grabOrderModel;
              return {
                festivalGrabInfo: e.productModel.festivalGrabInfo,
                processFlag: t.grabProcessInfo.processFlag,
                monitorStatus: t.orderInfo.monitorStatus,
              };
            })(function (e) {
              var t,
                a,
                n = e.festivalGrabInfo,
                i = e.processFlag,
                r = e.monitorStatus,
                o = _.default.isTieyou;
              if (!n || 0 !== i || [16, 17, 18].includes(r))
                return (0, S.tZ)(va.View, {});
              return (0, S.BX)(va.View, {
                className: " _oO _HL _vi _TC",
                children: [
                  (0, S.BX)(va.View, {
                    className: " _i _l",
                    children: [
                      (0, S.tZ)(va.Image, {
                        src:
                          "https://pic.c-ctrip.com/train/zt/wechat/icon-youxian-" +
                          (o ? "ty" : "zx") +
                          ".png",
                        className: " _da _Te _Io",
                      }),
                      (0, S.BX)(va.View, {
                        className: " _j",
                        children: [
                          n.title &&
                            (0, S.tZ)(va.View, {
                              className: " _tb _IL",
                              children: (0, S.tZ)(Ma.ZtRichText, {
                                nodes:
                                  n.title ||
                                  "".concat(ne.Z.PRIORITY_TICKET, "特权"),
                              }),
                            }),
                          (0, S.tZ)(va.View, {
                            className: " _E _Kc",
                            children:
                              n.subTitle || "抢票速度相同时，优先为您出票",
                          }),
                        ],
                      }),
                      (0, S.tZ)(va.Button, {
                        className: " _If _ie _je _Pd _Cm _pO",
                        id: "AJEQ",
                        onClick: function () {
                          fa(D.showPriorityPopup);
                        },
                        children: n.status,
                      }),
                    ],
                  }),
                  (null === (t = n.toast) || void 0 === t
                    ? void 0
                    : t.newDescTitle) &&
                    (0, S.BX)(va.View, {
                      className: " _Bj _i _W",
                      children: [
                        (0, S.tZ)(va.View, {
                          className: " _qO _ve _rb _b bgcolor-primary",
                          children: (0, S.tZ)(Ma.ZtRichText, {
                            nodes: n.toast.newDescTitle,
                          }),
                        }),
                        (null === (a = n.toast) || void 0 === a
                          ? void 0
                          : a.newDescSubTitle) &&
                          (0, S.tZ)(va.View, {
                            className: " _j _HL _rO _Ik _E _yc _Ym _Xm -Wg",
                            children: (0, S.tZ)(Ma.ZtRichText, {
                              nodes: n.toast.newDescSubTitle,
                            }),
                          }),
                      ],
                    }),
                ],
              });
            }),
            qa = (0, X.$j)(function (e) {
              var t = e.grabOrderModel;
              return {
                unlockFlag: t.grabProcessInfo.unlockFlag,
                welfareInfo: t.grabProcessInfo.welfareInfo,
              };
            })(function (e) {
              var t = e.unlockFlag,
                a = e.welfareInfo;
              return (
                1 === t &&
                (null == a ? void 0 : a.welfareList) &&
                (0, S.tZ)(va.View, {
                  className: " _pb _Zn _oO -Rg",
                  children: a.welfareList.map(function (e) {
                    return (0,
                    S.BX)(va.View, { className: " _ss _vD _i _l -Sg", children: [(0, S.tZ)(va.Image, { src: e.icon, className: " _cc _bc _lj" }), (0, S.BX)(va.View, { className: " _j", children: [(0, S.tZ)(va.View, { className: " _os _IL", children: e.title }), (0, S.tZ)(va.View, { className: " _D _Kc", children: e.desc })] }), (0, S.tZ)(va.View, { className: " _Rd _D -Tg -Ug", children: e.price }), (0, S.BX)(va.Button, { className: " _ek _mb _Jf _nb _F -Vg", children: [(0, S.tZ)(va.Text, { className: "ifont-list iconfont" }), e.buttonName] })] }, "index");
                  }),
                })
              );
            }),
            Ua = function () {
              return (0, S.BX)(va.View, {
                className: " _KC _a _uH _Np _yc",
                children: [
                  (0, S.tZ)(Ea, {}),
                  (0, S.tZ)(Ha, {}),
                  (0, S.tZ)(qa, {}),
                ],
              });
            },
            Ka = a(4102),
            Wa = a(74921),
            Ya = ["candidateList"];
          function Qa() {
            (0, I.showLoading)(),
              (0, fe.HF)({ orderNumber: U.getPage().oid })
                .then(function (e) {
                  if (1 === e.resultCode) {
                    var t = e.candidateList,
                      a = void 0 === t ? [] : t,
                      n = (0, Wa.Z)(e, Ya);
                    Array.isArray(a) &&
                      a.length > 0 &&
                      a.forEach(function (e) {
                        var t = e.departTime,
                          a = void 0 === t ? "" : t,
                          n = e.arriveTime,
                          i = void 0 === n ? "" : n;
                        (e.departHourMinute = N()(a).format("HH:mm")),
                          (e.arriveHourMinute = N()(i).format("HH:mm")),
                          (e.departMonthDay = N()(a).format("MM月D日")),
                          (e.weekDay = Ka.Z.getWeekDay(a));
                        var r = (N()(i).valueOf() - N()(a).valueOf()) / 6e4;
                        e.costTime = Ka.Z.getHourMinuteByMinute(r);
                      });
                    var i = (0, L.Z)((0, L.Z)({}, n), {}, { candidateList: a });
                    U.getDispatch().grabOrderModel.setCandidateInfo({
                      houBuOrderDetailInfo: i,
                    });
                  }
                })
                .catch(function (e) {
                  return console.log(e);
                })
                .finally(function () {
                  return (0, I.hideLoading)();
                }),
              fa(D.showHouBuOrderDetail);
          }
          function $a() {
            fa(D.showOpenHouBuPop),
              (function e() {
                var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : "",
                  a =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 0;
                return (0, fe.oy)({ orderNumber: U.getPage().oid, action: t })
                  .then(function (t) {
                    var n = a;
                    if (
                      (n || (n = 0),
                      3 !== t.resultCode && pa(),
                      !t || -1 === t.resultCode)
                    )
                      return (0, I.showToast)(t.resultMessage);
                    if (1 === t.resultCode) return wa();
                    if (2 === t.resultCode)
                      return (
                        U.getDispatch().grabOrderModel.setCandidateInfo({
                          openHouBuFailToast: t.openFailToast,
                        }),
                        void fa(D.openHouBuFailToast)
                      );
                    if (3 === t.resultCode) {
                      var i;
                      a > t.totalPollingTime && pa(), (n += t.pollingInterval);
                      var r = new Promise(function (e) {
                        return (i = e);
                      });
                      return (
                        setTimeout(i, 1e3 * t.pollingInterval),
                        r.then(function () {
                          return e("query", n);
                        })
                      );
                    }
                  })
                  .catch(function (e) {
                    return console.log(e);
                  });
              })();
          }
          function en() {
            var e =
                U.getState().planModel.recommendedScheme
                  .recommendedSchemeBannerInfo,
              t = void 0 === e ? {} : e,
              a = U.getDispatch().planModel.setRecommendedScheme;
            if (h.Z.isNotEmptyObj(t)) {
              var n = [];
              for (var i in t) t[i] && n.push(t[i]);
              n.sort(function (e, t) {
                return e.index - t.index;
              });
              var r = [];
              (r[0] = !0),
                a({
                  recommendedSchemeBannerCheckedList: r,
                  recommendedSchemeDrawerType: {
                    nearStationInfo: 1,
                    crossStationInfo: 2,
                    recommendSeatInfo: 3,
                  }[n[0].type],
                  recommendedSchemeDrawerIsSelectFirst: !0,
                }),
                fa(D.recommendedSchemeDrawer);
            } else Nt();
          }
          var tn = function (e) {
              var t = "";
              switch (e) {
                case 1:
                  t = "查看待兑现订单";
                  break;
                case 4:
                  t = "免费激活12306会员, 开启候补";
                  break;
                case 7:
                  t = "开启候补通道";
              }
              return t;
            },
            an = function (e) {
              var t = "";
              return 1 === e ? (t = "-jh") : 2 === e && (t = "-ih"), t;
            },
            nn = function (e) {
              var t = e.content,
                a = void 0 === t ? {} : t,
                n = e.propStyle,
                i = void 0 === n ? "" : n,
                r = e.showCandidateQueue,
                o = void 0 === r ? function () {} : r,
                c = a,
                s = c.departTime,
                l = c.arriveTime,
                d = c.departStation,
                u = c.arriveStation,
                _ = c.trainNo,
                m = c.ticketDate,
                p = c.costTime,
                f = c.seatName,
                h = c.candidateDesc,
                g = c.rankDesc;
              return (0, S.BX)(va.View, {
                className: " _Vb",
                style: i,
                children: [
                  (0, S.BX)(va.View, {
                    className: " _CO _DO _i _l",
                    children: [
                      (0, S.BX)(va.View, {
                        className: " _i _l _Eb _uC _EO",
                        children: [
                          (0, S.tZ)(va.View, {
                            className: " _C _sh",
                            children: h,
                          }),
                          (0, S.tZ)(va.Image, {
                            className: " _gb _FO _cN",
                            src: "https://images3.c-ctrip.com/ztrip/train_snow/2023_06/1@3x.png",
                          }),
                        ],
                      }),
                      g &&
                        (0, S.BX)(va.View, {
                          className: " _GO _i _l",
                          onClick: o,
                          children: [
                            (0, S.tZ)(va.Image, {
                              className: " _aa _gb",
                              src: "https://images3.c-ctrip.com/ztrip/train_snow/2023_06/2@3x.png",
                            }),
                            (0, S.BX)(va.View, {
                              className: " _i _l _HO",
                              children: [
                                (0, S.tZ)(va.View, {
                                  className: " _x _Vc",
                                  children: g || "",
                                }),
                                (0, S.tZ)(va.Image, {
                                  className: " _HO _Og _Bb _dg",
                                  src: "https://images3.c-ctrip.com/ztrip/train_snow/2023_06/i@3x.png",
                                }),
                              ],
                            }),
                            (0, S.tZ)(va.Image, {
                              className: " _gb _FO",
                              src: "https://images3.c-ctrip.com/ztrip/train_snow/2023_06/3@3x.png",
                            }),
                          ],
                        }),
                    ],
                  }),
                  (0, S.tZ)(va.View, {
                    className: "ticketInfo",
                    children: (0, S.BX)(va.View, {
                      className: " _p _Ei",
                      children: [
                        (0, S.BX)(va.View, {
                          className: " _i _m _AO _Xb _yf _Bf",
                          children: [
                            (0, S.tZ)(va.View, {
                              className: "depart",
                              children: s,
                            }),
                            (0, S.tZ)(va.View, {
                              className:
                                " _p _yO _zO _U _Ua _rl _Vf _o -eh -fh",
                              id: "AJEL",
                              onClick: function () {
                                !(function (e, t, a, n) {
                                  W.ZP.goTimeTable(e, t, a, n);
                                })(d, u, _, m);
                              },
                              children: "时刻表",
                            }),
                            (0, S.tZ)(va.View, {
                              className: "arrive",
                              children: l,
                            }),
                          ],
                        }),
                        (0, S.BX)(va.View, {
                          className: " _cg _i _m _Xb _BO _De _Q",
                          children: [
                            (0, S.tZ)(va.View, {
                              className: "depart",
                              children: d,
                            }),
                            (0, S.tZ)(va.View, {
                              className: "no",
                              children: _ + "·" + p,
                            }),
                            (0, S.tZ)(va.View, {
                              className: "arrive",
                              children: u,
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, S.tZ)(va.View, { className: " _ls _wO _Zf _Yf" }),
                  (0, S.BX)(va.View, {
                    className: " _xO _St _i _oc _mk",
                    children: [
                      (0, S.tZ)(va.View, {
                        className: "depart",
                        children: "出发时间 "
                          .concat(N()(m).format("MM月DD日"), " ")
                          .concat(Ka.Z.getWeekDay(m)),
                      }),
                      (0, S.tZ)(va.View, {
                        className: " _j _Di _oc",
                        children: f,
                      }),
                    ],
                  }),
                ],
              });
            },
            rn = (0, X.$j)(function (e) {
              var t = e.grabOrderModel.candidateInfo,
                a = t.grabHouBuInfo,
                n = t.candidateTicketDetail;
              return {
                propStyle: {
                  margin: "0 20rpx",
                  borderRadius: "0 0 20rpx 20rpx",
                },
                candidateStatus: a.candidateStatus,
                candidateInfo: n,
                checkHouBuOrderDetail: Qa,
                gotoLogin12306AndAuth: Jt,
                openHouBuDualChannel: $a,
                onMoreScheme: en,
              };
            })(function (e) {
              var t = e.propStyle,
                a = e.candidateStatus,
                n = void 0 === a ? {} : a,
                i = e.candidateInfo,
                r = void 0 === i ? {} : i,
                o = n || {},
                c = o.code,
                s = o.icon,
                l = o.title,
                d = o.desc,
                u = r || {},
                _ = u.successRateInfo,
                p = void 0 === _ ? {} : _,
                f = u.ticketInfoList,
                h = void 0 === f ? [] : f,
                g = u.realizeLimitTimeDesc,
                b = void 0 === g ? "" : g,
                w = u.candidateRankToast,
                v = (0, m.useState)(!0),
                Z = (0, Pt.Z)(v, 2),
                N = Z[0],
                I = Z[1],
                T = h[0],
                y = h.slice(1);
              return (0, S.BX)(va.View, {
                className: " _lb",
                style: t,
                children: [
                  [0, 2, 3, 4, 5, 6, 7, 8].includes(c) &&
                    (0, S.BX)(va.View, {
                      className: " _Vb _uH _i _k _l _IO",
                      children: [
                        (0, S.BX)(va.View, {
                          className: " _o _Ic _W _Ld _bz",
                          children: [
                            (0, S.tZ)(va.Image, {
                              className: " _yE _Ij _nc _p _zE _On",
                              src: s,
                            }),
                            l,
                          ],
                        }),
                        d &&
                          (0, S.tZ)(va.View, {
                            className: " _gj _Ma _F _W _o",
                            children: d,
                          }),
                        tn(c) &&
                          (0, S.tZ)(va.View, {
                            className: " _kg _JO _lc _qc _w _Oa _qb _xe _o -gh",
                            id: "AJEM",
                            onClick: function () {
                              1 === c ? Qa() : 4 === c ? Jt() : 7 === c && $a();
                            },
                            children: tn(c),
                          }),
                      ],
                    }),
                  1 === c &&
                    (0, S.BX)(S.HY, {
                      children: [
                        (0, S.BX)(va.View, {
                          className: " _Vb _Fv _mk _p _in",
                          children: [
                            (0, S.BX)(va.View, {
                              className: ""
                                .concat("-hh  _Tr _Mb _KO _LO _i _MO _p", "  ")
                                .concat(an(p.successFlag)),
                              children: [
                                (0, S.tZ)(va.Image, {
                                  src:
                                    1 === p.successFlag
                                      ? "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/zsb@3x.png"
                                      : "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/zax@3x.png",
                                  className: " _De _Ce",
                                }),
                                (0, S.BX)(va.View, {
                                  className: " _i _F _uh _nc _S",
                                  id: "AJEN",
                                  onClick: function () {
                                    1 === p.successFlag && en();
                                  },
                                  children: [
                                    (0, S.tZ)(va.RichText, {
                                      className: "-kh",
                                      space: "nbsp",
                                      nodes: "".concat(p.successDesc),
                                    }),
                                    1 === p.successFlag &&
                                      (0, S.tZ)(va.View, {
                                        className: " _Og _OO _S -lh",
                                      }),
                                  ],
                                }),
                                (0, S.tZ)(va.Image, {
                                  src:
                                    1 === p.successFlag
                                      ? "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/zdsb@3x.png"
                                      : "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/dxcg@3x.png",
                                  className: " _NO _u _q _t _ht _Qb",
                                }),
                              ],
                            }),
                            (0, S.tZ)(nn, {
                              content: T,
                              showCandidateQueue: function () {
                                U.getPage().$CommonSceneDrawer &&
                                  w &&
                                  U.getPage().$CommonSceneDrawer.alertAsync({
                                    title: w.title || "排队位次说明",
                                    content: function () {
                                      return (0, S.BX)(va.View, {
                                        className: "grab-queue",
                                        children: [
                                          (0, S.tZ)(va.View, {
                                            className: "grab-queue-main",
                                            children: w.content || "",
                                          }),
                                          (0, S.tZ)(va.View, {
                                            className: "grab-queue-sub",
                                            children: w.tips || "",
                                          }),
                                        ],
                                      });
                                    },
                                    button: [{ name: w.buttonName || "" }],
                                  });
                              },
                              propStyle:
                                "margin-top: -44rpx;border-radius: 24rpx;position:relative;",
                            }),
                            y.length > 0 &&
                              N &&
                              (0, S.tZ)(va.View, {
                                className: " _PO _im _QO _Mb _Vb _Jb",
                                children: (0, S.BX)(va.View, {
                                  className:
                                    " _fc _ij _oc _i _n _yd _dc _E _l -mh",
                                  id: "AJEO",
                                  onClick: function () {
                                    I(!N);
                                  },
                                  children: [
                                    (0, S.tZ)(va.View, {
                                      className: "-nh",
                                      children: "查看全部",
                                    }),
                                    (0, S.tZ)(va.Image, {
                                      className: "-oh",
                                      src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/icon_more@3x.png",
                                    }),
                                  ],
                                }),
                              }),
                          ],
                        }),
                        !N &&
                          y.map(function (e) {
                            return (0,
                            S.tZ)(nn, { propStyle: "margin-top: 16rpx;border-radius: 24rpx", content: e }, e.trainNo);
                          }),
                        b &&
                          (0, S.tZ)(va.View, {
                            className: " _RO _Qd _ad _SO _Jb _TO _Mb",
                            children: (0, S.BX)(va.View, {
                              className: " _i _l _nc",
                              children: [
                                (0, S.tZ)(va.Image, {
                                  src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon/icon_time@3x.png",
                                  className: " _Ye _og _mn",
                                }),
                                (0, S.tZ)(va.View, {
                                  className: " _Zg _Ma _mk",
                                  children: b,
                                }),
                              ],
                            }),
                          }),
                      ],
                    }),
                ],
              });
            }),
            on = function () {
              return (0, S.tZ)(S.HY, { children: (0, S.tZ)(rn, {}) });
            },
            cn = a(35657),
            sn = a(17368),
            ln = a(83011),
            dn = (0, X.$j)(function (e) {
              var t = e.productModel;
              return {
                propStyle: {
                  margin: "0 20rpx",
                  borderRadius: "0 0 20rpx 20rpx",
                },
                content: t.specificallyGrab.specialPersonGrabBoxInfo,
                enterpriseWechatBtnInfo:
                  t.specificallyGrab.enterpriseWechatBtnInfo,
              };
            })(function (e) {
              var t = e.propStyle,
                a = e.content,
                n = e.enterpriseWechatBtnInfo,
                i = a || {},
                r = i.buyState,
                o = i.optionsInfo,
                c = void 0 === o ? [] : o,
                s = i.btnDesc,
                l = i.buyedInfo,
                d = i.productDescList,
                u = (0, m.useRef)({ title: "", salePrice: "" }),
                p = (0, m.useState)(function () {
                  var e;
                  return (
                    (1 === r &&
                      (null === (e = c[c.length - 1]) || void 0 === e
                        ? void 0
                        : e.type)) ||
                    -1
                  );
                }),
                f = (0, Pt.Z)(p, 2),
                g = f[0],
                b = f[1];
              (0, m.useEffect)(function () {
                a &&
                  1 === r &&
                  U.ubtTrace("s_trn_z_10650060279", {
                    exposureType: "normal",
                    bizKey: "z_grab_detail_zrqp_ljkq_button_show",
                  }),
                  n &&
                    U.ubtTrace("s_trn_z_10650060279", {
                      exposureType: "normal",
                      bizKey: "z_grab_detail_qywx_button_show",
                    });
              }, []);
              var w = (0, m.useCallback)(function (e) {
                  b(e);
                }, []),
                v = function (e) {
                  U.ubtTrace("c_trn_z_10650060279", {
                    bizKey: "z_grab_detail_zrqp_ljkq_button_click",
                  }),
                    e.salePrice &&
                      (function (e) {
                        var t =
                            U.getState().grabOrderModel.ticketInfo
                              .passengerList,
                          a = [];
                        if (e.goodsInfo) {
                          var n = (0, L.Z)({}, e.goodsInfo);
                          (n.goodsNum = t.length), a.push(n);
                        }
                        Xe({
                          productList: [{ type: e.type, num: t.length }],
                          treasuresGoods: a,
                          noCloseShowType: !0,
                        });
                      })(e);
                };
              if (!a) return (0, S.tZ)(va.View, {});
              var Z =
                c.find(function (e) {
                  return e.type === g;
                }) || {};
              return (
                Z.title && (u.current = Z),
                (0, S.tZ)(va.View, {
                  className: " _i _k _l _a _dc _nO _yc",
                  style: t,
                  children:
                    1 === r
                      ? (0, S.BX)(va.View, {
                          className: "no-open-box",
                          children: [
                            (0, S.tZ)(cn.Z, {
                              content: c,
                              type: g,
                              fromPage: "grabDetail",
                              onTypeChange: w,
                            }),
                            (0, S.tZ)(ln.Z, {
                              content: d,
                              style: { marginTop: "16rpx" },
                              dotStyle: {
                                color: "#cccccc",
                                marginRight: "12rpx",
                              },
                              txtStyle: { color: "#999" },
                            }),
                            (0, S.BX)(va.View, {
                              className: " _kg _UO _i _m",
                              children: [
                                n &&
                                  (0, S.BX)(va.View, {
                                    className: " _rg _Gc _vd _Oa _i _k _l",
                                    id: "AJER",
                                    onClick: function () {
                                      U.ubtTrace("c_trn_z_10650060279", {
                                        bizKey:
                                          "z_grab_detail_qywx_button_click",
                                      }),
                                        h.Z.commonNavigator(n.jumpUrl);
                                    },
                                    children: [
                                      (0, S.BX)(va.View, {
                                        className: " _ub _i _l",
                                        children: [
                                          (0, S.tZ)(va.View, {
                                            className: " _tl _rm _VO _Wc",
                                            children: n.buttonName,
                                          }),
                                          (0, S.tZ)(va.View, {
                                            className:
                                              " _Zg _bh _Rj _x _O _zy _kc _p -sh",
                                            children: n.notation,
                                          }),
                                        ],
                                      }),
                                      (0, S.BX)(va.View, {
                                        className: " _Km _i _l _Dn _x _aj",
                                        children: [
                                          (0, S.tZ)(va.View, {
                                            className: " _zl",
                                            children: "".concat(
                                              n.originalPriceTag || ""
                                            ),
                                          }),
                                          (0, S.tZ)(va.View, {
                                            className: " _Og",
                                            children: n.curPriceTag,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                Z &&
                                  (0, S.BX)(va.View, {
                                    className: ""
                                      .concat(
                                        " _WO _w _Oa _Gc _rg _o _i _k _l _Mb -th",
                                        " "
                                      )
                                      .concat(Z.title ? "" : "-uh"),
                                    style: n ? "" : "width:658rpx;",
                                    id: "AJES",
                                    onClick: function () {
                                      return v(Z);
                                    },
                                    children: [
                                      (0, S.BX)(va.View, {
                                        className: " _qb _oB _rm _V",
                                        children: [
                                          "开启",
                                          Z.title || u.current.title,
                                        ],
                                      }),
                                      (0, S.BX)(va.View, {
                                        className: " _i _qb _aj _BI _l _Dn _bb",
                                        children: [
                                          (0, S.tZ)(va.View, {
                                            className: "price",
                                            children: "¥".concat(
                                              Z.salePrice ||
                                                u.current.salePrice ||
                                                "",
                                              "/人"
                                            ),
                                          }),
                                          (0, S.tZ)(va.View, {
                                            className: " _Vb _sf _cj _FK",
                                          }),
                                          (0, S.tZ)(va.View, {
                                            className: "desc",
                                            children: s,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                          ],
                        })
                      : (0, S.BX)(va.View, {
                          className: " _uI _Ak _dc _vI _rd _i _k _l _Mb -ph",
                          children: [
                            (0, S.BX)(va.View, {
                              className: " _i _l",
                              children: [
                                (0, S.tZ)(va.Image, {
                                  className: ""
                                    .concat(" _mb _Tk -qh", " ")
                                    .concat(
                                      l.subTitle.includes("3位") ? "-rh" : ""
                                    ),
                                  src: l.icon,
                                }),
                                (0, S.BX)(va.View, {
                                  className: " _Sf",
                                  children: [
                                    (0, S.BX)(va.View, {
                                      className: "flex-align-items-center",
                                      children: [
                                        (0, S.tZ)(Ma.ZtRichText, {
                                          className: " _sb _pq _Ua _U",
                                          nodes: l.title,
                                        }),
                                        (0, S.tZ)(sn.Z, {
                                          mode: "img",
                                          iconUrl:
                                            "https://images3.c-ctrip.com/ztrip/train_zhu/icon_ty_info_16.png",
                                          jumpUrl:
                                            "https://market.suanya.com/document/static/".concat(
                                              _.default.isTieyou ? "ty" : "zx",
                                              "_24zrqpfw.html"
                                            ),
                                        }),
                                      ],
                                    }),
                                    (0, S.tZ)(va.View, {
                                      className: " _Ac _Ma _pu _De _Q",
                                      children: l.subTitle,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, S.tZ)(va.View, {
                              className: " _fA _i _Z _m",
                              children: l.descs.map(function (e) {
                                return (0,
                                S.BX)(va.View, { className: " _mf _i _k _l", children: [(0, S.tZ)(va.Image, { className: " _nf _mf", src: e.img }), (0, S.tZ)(va.View, { className: " _cg _oc _mF _eg _R _Bi", children: e.title })] }, e.title);
                              }),
                            }),
                          ],
                        }),
                })
              );
            }),
            un = m.default.memo(
              (0, X.$j)(function (e) {
                return {
                  propStyle: {
                    margin: "0 20rpx",
                    borderRadius: "0 0 20rpx 20rpx",
                  },
                  selfAccountShareInfo:
                    e.planModel.relativeAccountInfo.selfAccountShareInfo,
                };
              })(function (e) {
                var t,
                  a,
                  n,
                  i,
                  r,
                  o,
                  c,
                  s,
                  l,
                  d,
                  u,
                  p,
                  f,
                  h,
                  g = e.selfAccountShareInfo,
                  b = e.isFromAccountHelp,
                  w = e.propStyle,
                  v = (0, m.useState)(!1),
                  Z = (0, Pt.Z)(v, 2),
                  N = Z[0],
                  T = Z[1],
                  y =
                    null == g ||
                    null === (t = g.relativeBindInfo) ||
                    void 0 === t
                      ? void 0
                      : t.currentBindCount;
                (0, m.useEffect)(
                  function () {
                    y > 0 && T(!0);
                  },
                  [y]
                );
                var V = function () {
                    T(!N);
                  },
                  C = function () {
                    fa(D.multiplyAccountQADrawerVisible);
                  },
                  k = function () {
                    Ia.Z.twebview({
                      data: {
                        url: "https://pages.c-ctrip.com/ztrip/document/hybq_br_rule.html?appid=".concat(
                          _.default.isTieyou ? "1002" : "1003"
                        ),
                      },
                    });
                  },
                  B = function () {
                    N
                      ? (0, ee.JO)() || pt()
                      : (0, I.showToast)("请先阅读并同意下方服务协议~");
                  },
                  x =
                    (null == g ||
                    null === (a = g.relativeBindInfo) ||
                    void 0 === a
                      ? void 0
                      : a.maxBindCount) > 2
                      ? 2
                      : null == g ||
                        null === (n = g.relativeBindInfo) ||
                        void 0 === n
                      ? void 0
                      : n.maxBindCount;
                return (0, S.BX)(va.View, {
                  className: "multiply-account-grab-box",
                  style: w,
                  children: [
                    0 ==
                      (null == g
                        ? void 0
                        : g.relativeBindInfo.currentBindCount) &&
                      (0, S.BX)(va.View, {
                        className: "invite-none-v2",
                        children: [
                          (0, S.tZ)(va.View, {
                            className: "tit",
                            children: (0, S.tZ)(va.View, {
                              className: "rich-box",
                              children: (0, S.tZ)(Ma.ZtRichText, {
                                nodes:
                                  null == g ||
                                  null === (i = g.orderRelativeInfo) ||
                                  void 0 === i
                                    ? void 0
                                    : i.title,
                              }),
                            }),
                          }),
                          (0, S.tZ)(Ma.ZtRichText, {
                            className: "txt",
                            nodes:
                              null == g ||
                              null === (r = g.orderRelativeInfo) ||
                              void 0 === r
                                ? void 0
                                : r.subTitle,
                          }),
                          (0, S.tZ)(va.View, {
                            className: "invite-none-bd",
                            children: (0, S.tZ)(va.View, {
                              className: "invite-none-list",
                              children: new Array(x)
                                .fill(0)
                                .map(function (e, t) {
                                  return (0,
                                  S.BX)(va.View, { className: "item", children: [(0, S.tZ)(va.View, { className: "icon-people" }), (0, S.tZ)(va.View, { className: "txt", children: "待邀请" })] }, t);
                                }),
                            }),
                          }),
                          0 ==
                            (null == g ||
                            null === (o = g.relativeBindInfo) ||
                            void 0 === o
                              ? void 0
                              : o.selfInviteState) &&
                            (0, S.tZ)(va.Button, {
                              className: "btn-submit",
                              openType: "".concat(
                                N && (0, ee.JO)() ? "share" : ""
                              ),
                              onClick: function () {
                                B();
                              },
                              "data-flag": "account-relative",
                              children: (0, S.tZ)(va.View, {
                                children:
                                  g.orderRelativeInfo.btnName || "免费邀请好友",
                              }),
                            }),
                          0 !=
                            (null == g ||
                            null === (c = g.relativeBindInfo) ||
                            void 0 === c
                              ? void 0
                              : c.selfInviteState) &&
                            (0, S.tZ)(va.Button, {
                              className: "btn-submit-grey",
                              children:
                                g.orderRelativeInfo.btnName || "免费邀请好友",
                            }),
                          (0, S.BX)(va.View, {
                            className: "txt tips",
                            children: [
                              (0, S.BX)(va.View, {
                                onClick: function () {
                                  V();
                                },
                                children: [
                                  (0, S.tZ)(va.Text, {
                                    className: N
                                      ? "ifont-radioed iconfont"
                                      : "ifont-radio iconfont",
                                  }),
                                  " 阅读并同意",
                                  (0, S.tZ)(va.Text, {
                                    className: "color-primary",
                                    onClick: function (e) {
                                      e.stopPropagation(), k();
                                    },
                                    children: "《好友帮抢票相关须知》",
                                  }),
                                ],
                              }),
                              !b &&
                                (0, S.tZ)(va.Text, {
                                  className: "color-primary qa",
                                  onClick: function () {
                                    C();
                                  },
                                  children: "常见问题",
                                }),
                            ],
                          }),
                          (0, S.tZ)(va.View, {
                            className: "remark",
                            children: (0, S.tZ)(Ma.ZtRichText, {
                              nodes:
                                (null == g ||
                                null === (s = g.orderRelativeInfo) ||
                                void 0 === s
                                  ? void 0
                                  : s.remark) || "",
                            }),
                          }),
                        ],
                      }),
                    0 !=
                      (null == g
                        ? void 0
                        : g.relativeBindInfo.currentBindCount) &&
                      (null == g ||
                      null === (l = g.orderRelativeInfo) ||
                      void 0 === l
                        ? void 0
                        : l.orderRelativeRecord) &&
                      (0, S.BX)(va.View, {
                        className: "invite-box",
                        children: [
                          (0, S.tZ)(va.View, {
                            className: "tit",
                            children: (0, S.tZ)(va.View, {
                              className: "rich-box",
                              children: (0, S.tZ)(Ma.ZtRichText, {
                                nodes:
                                  null == g ||
                                  null === (d = g.orderRelativeInfo) ||
                                  void 0 === d
                                    ? void 0
                                    : d.title,
                              }),
                            }),
                          }),
                          (0, S.tZ)(Ma.ZtRichText, {
                            className: "txt",
                            nodes:
                              null == g ||
                              null === (u = g.orderRelativeInfo) ||
                              void 0 === u
                                ? void 0
                                : u.subTitle,
                          }),
                          (0, S.tZ)(va.View, {
                            className: "invite-bd",
                            children: (0, S.tZ)(va.View, {
                              className: "invite-list",
                              children: new Array(x)
                                .fill(0)
                                .map(function (e, t) {
                                  var a,
                                    n =
                                      null == g ||
                                      null === (a = g.orderRelativeInfo) ||
                                      void 0 === a
                                        ? void 0
                                        : a.orderRelativeRecord[t];
                                  if (n) {
                                    var i = "";
                                    try {
                                      i = decodeURIComponent(n.name);
                                    } catch (e) {
                                      i = "用户";
                                    }
                                    return (
                                      i.length > 3 &&
                                        (i = i.substring(0, 2) + "..."),
                                      (0, S.BX)(
                                        va.View,
                                        {
                                          className: "item",
                                          children: [
                                            n.tag &&
                                              (0, S.tZ)(va.View, {
                                                className: "tag",
                                                children: n.tag,
                                              }),
                                            (0, S.tZ)(va.Image, {
                                              src:
                                                n.photo ||
                                                "https://pic.c-ctrip.com/train/zt/wechat/avatar-default-zx.png",
                                              className: "avatar",
                                            }),
                                            (0, S.tZ)(va.View, {
                                              className: "name",
                                              children:
                                                i ||
                                                "".concat(
                                                  _.default.isTieyou
                                                    ? "铁友"
                                                    : "智行",
                                                  "用户"
                                                ),
                                            }),
                                          ],
                                        },
                                        t
                                      )
                                    );
                                  }
                                  return (0,
                                  S.BX)(va.View, { className: "item", children: [(0, S.tZ)(va.Button, { className: "btn-add" }), (0, S.tZ)(va.View, { className: "txt", children: "待邀请" })] });
                                }),
                            }),
                          }),
                          0 ==
                            (null == g ||
                            null === (p = g.relativeBindInfo) ||
                            void 0 === p
                              ? void 0
                              : p.selfInviteState) &&
                            (0, S.tZ)(va.Button, {
                              className: "btn-submit",
                              openType: "".concat(
                                N && (0, ee.JO)() ? "share" : ""
                              ),
                              onClick: function () {
                                B();
                              },
                              "data-flag": "account-relative",
                              children:
                                g.orderRelativeInfo.btnName || "邀请好友帮抢票",
                            }),
                          0 !=
                            (null == g ||
                            null === (f = g.relativeBindInfo) ||
                            void 0 === f
                              ? void 0
                              : f.selfInviteState) &&
                            (0, S.tZ)(va.Button, {
                              className: "btn-submit-grey",
                              children:
                                g.orderRelativeInfo.btnName || "邀请好友帮抢票",
                            }),
                          (0, S.BX)(va.View, {
                            className: "txt tips",
                            onClick: function () {
                              V();
                            },
                            children: [
                              (0, S.tZ)(va.Text, {
                                className: N
                                  ? "ifont-radioed iconfont"
                                  : "ifont-radio iconfont",
                              }),
                              " 阅读并同意",
                              (0, S.tZ)(va.Text, {
                                className: "color-primary",
                                onClick: function (e) {
                                  e.stopPropagation(), k();
                                },
                                children: "《好友帮抢票相关须知》",
                              }),
                              !b &&
                                (0, S.tZ)(va.Text, {
                                  className: "color-primary qa",
                                  onClick: function (e) {
                                    e.stopPropagation(), C();
                                  },
                                  children: "常见问题",
                                }),
                            ],
                          }),
                          (0, S.tZ)(va.View, {
                            className: "remark",
                            children: (0, S.tZ)(Ma.ZtRichText, {
                              nodes:
                                (null == g ||
                                null === (h = g.orderRelativeInfo) ||
                                void 0 === h
                                  ? void 0
                                  : h.remark) || "",
                            }),
                          }),
                        ],
                      }),
                  ],
                });
              })
            ),
            _n = (0, X.$j)(function (e) {
              return {
                specialPersonGrabBoxInfo:
                  e.productModel.specificallyGrab.specialPersonGrabBoxInfo,
              };
            })(function (e) {
              var t = e.specialPersonGrabBoxInfo;
              return (0,
              S.BX)(S.HY, { children: [t && (0, S.tZ)(dn, {}), !t && (0, S.tZ)(un, {})] });
            }),
            mn = a(75492),
            pn = function (e) {
              var t = e.passgerInfo,
                a = void 0 === t ? {} : t;
              return (0, S.BX)(va.View, {
                className: " _i _l _GJ",
                children: [
                  (0, S.tZ)(va.View, {
                    className: " _H _Fl",
                    children: a.name,
                  }),
                  (0, S.tZ)(va.View, {
                    className: ""
                      .concat(" _HJ _C _o _IJ -Sd", " ")
                      .concat(0 === a.statusCode ? "-Td" : "-Ud"),
                    children: a.statusDesc,
                  }),
                  (0, S.tZ)(va.View, {
                    className: " _G _Kc _j _Di",
                    children: a.mobile,
                  }),
                ],
              });
            },
            fn = (0, X.$j)(function (e) {
              var t = e.grabOrderModel,
                a = e.t6Model;
              return {
                show: 13 === t.orderInfo.monitorStatus,
                propStyle: "margin-top: 0rpx;",
                passenger: a.mobileVerify.mobileVerifyPassengerList,
              };
            })(function (e) {
              var t = (0, m.useState)(0),
                a = (0, Pt.Z)(t, 2),
                n = a[0],
                i = a[1],
                r = (0, m.useState)(!1),
                o = (0, Pt.Z)(r, 2),
                c = o[0],
                s = o[1],
                l = e.passenger,
                d = void 0 === l ? [] : l,
                u = e.show,
                _ = void 0 !== u && u,
                p = e.propStyle,
                f = void 0 === p ? "" : p,
                h = e.buttonName,
                g = void 0 === h ? "立即核验" : h;
              (0, m.useEffect)(
                function () {
                  var e = d.length;
                  i(e);
                  var t = setTimeout(function () {
                    c && s(!1);
                  }, 300);
                  return function () {
                    clearTimeout(t);
                  };
                },
                [d, c]
              );
              var b = mn.Z.useDebounce(function () {
                s(!0), wa();
              }, 500);
              return (0, S.tZ)(S.HY, {
                children:
                  _ &&
                  (0, S.BX)(va.View, {
                    className: " _j _KC _dc _a _BJ",
                    style: "".concat(f),
                    children: [
                      (0, S.BX)(va.View, {
                        className: " _i _l",
                        children: [
                          (0, S.BX)(va.View, {
                            className: " _Db _i _n",
                            children: [
                              (0, S.BX)(va.Text, {
                                className: " _CJ",
                                children: [n, "位乘客手机号未核验"],
                              }),
                              (0, S.tZ)(va.Text, {
                                className: " _E _Kc",
                                children:
                                  "请立即进行核验，核验通过后可继续抢票",
                              }),
                            ],
                          }),
                          (0, S.BX)(va.View, {
                            className: " _DJ _be _EJ _F color-primary",
                            id: "AJDI",
                            onClick: b,
                            children: [
                              (0, S.tZ)(va.Text, {
                                className: "ifont-refresh iconfont ".concat(
                                  c ? " _FJ" : ""
                                ),
                              }),
                              "刷新",
                            ],
                          }),
                        ],
                      }),
                      (0, S.tZ)(va.View, {
                        className: "bd",
                        children: d.map(function (e) {
                          return (0, S.tZ)(pn, { passgerInfo: e });
                        }),
                      }),
                      (0, S.tZ)(va.View, {
                        className: " _Z _dr _Wn _j _o _ME btn-primary",
                        id: "AJDJ",
                        onClick: function () {
                          var e =
                            U.getState().t6Model.mobileVerify.verifyJumpUrl;
                          e &&
                            (U.ubtTrace(180462),
                            Ia.Z.twebview({ data: { url: e } }));
                        },
                        children: g,
                      }),
                    ],
                  }),
              });
            }),
            hn = _.default.isTieyou;
          var gn = (0, X.$j)(function (e) {
              var t,
                a = e.grabOrderModel;
              return {
                content:
                  null === (t = re("trainStopNotice")) || void 0 === t
                    ? void 0
                    : t._jsonInfo,
                monitorStatus: a.orderInfo.monitorStatus,
              };
            })(function (e) {
              var t = e.propStyle,
                a = e.content,
                n = e.monitorStatus,
                i = a || {},
                r = i.title,
                o = void 0 === r ? "" : r,
                c = i.subTitle,
                s = void 0 === c ? "" : c,
                l = i.btnName,
                d = void 0 === l ? "" : l,
                u = i.secondBtnName,
                _ = void 0 === u ? "" : u;
              return (
                (0, m.useEffect)(function () {
                  U.ubtTrace(205910, {
                    exposureType: "normal",
                    bizKey: "z_checi_stop_inform_show",
                  });
                }, []),
                2 === n && a
                  ? (0, S.BX)(va.View, {
                      className: " _lb _PJ _Vb _dc _Mb _i _k _l",
                      style: t,
                      children: [
                        (0, S.tZ)(va.Image, {
                          className: " _Id _Fq",
                          src: "".concat(
                            hn
                              ? "https://images3.c-ctrip.com/ztrip/train_zhu/icon_trainTY_ty.png"
                              : "https://images3.c-ctrip.com/ztrip/train_zhu/icon_trainTY_zx.png"
                          ),
                        }),
                        (0, S.tZ)(Ma.ZtRichText, {
                          className: " _Zm _Xb _QJ _Fm",
                          nodes: o,
                        }),
                        (0, S.tZ)(va.View, {
                          className: " _RJ _o _Ma _Zp _R",
                          children: s,
                        }),
                        (0, S.BX)(va.View, {
                          className: " _SJ _i _n",
                          children: [
                            (0, S.tZ)(va.Button, {
                              className: " _xa _yb _TJ _fd _o _UJ -ie -je",
                              id: "AJDL",
                              onClick: function () {
                                U.ubtTrace(205914, {
                                  bizKey: "z_checi_stop_addcc_click",
                                }),
                                  (function () {
                                    var e =
                                        U.getState().grabOrderModel.ticketInfo,
                                      t = {
                                        departDate:
                                          e.leaveDate &&
                                          e.leaveDate.split(",")[0],
                                        fromLocation: e.fromStation.name,
                                        fromStationType: "T",
                                        toLocation: e.toStation.name,
                                        toStationType: "T",
                                      };
                                    U.navigateTo({
                                      data: t,
                                      url: "/pages/smart/packageA/searchList/index",
                                    });
                                  })();
                              },
                              children: d,
                            }),
                            (0, S.tZ)(va.Button, {
                              className: " _xa _yb _TJ _fd _o _UJ -ie -ke",
                              id: "AJDM",
                              onClick: function () {
                                U.ubtTrace(205914, {
                                  bizKey: "z_checi_stop_look_otherplan_click",
                                }),
                                  Nt();
                              },
                              children: _,
                            }),
                          ],
                        }),
                      ],
                    })
                  : (0, S.tZ)(va.View, {})
              );
            }),
            bn = _.default.isTieyou,
            wn = (0, X.$j)(function (e) {
              var t = e.t6Model;
              return {
                faceType: t.faceType,
                faceSwipingData: t.faceSwipingData,
              };
            })(function (e) {
              var t = e.faceType,
                a = e.faceSwipingData;
              return 16 === t && a
                ? (0, S.BX)(va.View, {
                    className: " _a _Ki _p _in _KJ _dc",
                    children: [
                      (0, S.tZ)(va.View, {
                        className: " _h _dm _ru _od _Nz -ge",
                      }),
                      (0, S.BX)(va.View, {
                        className: " _o _qf",
                        children: [
                          (0, S.tZ)(va.View, {
                            className: " _km _Gi",
                            children: (0, S.tZ)(Ma.ZtRichText, {
                              nodes: a.title,
                            }),
                          }),
                          (0, S.tZ)(va.View, {
                            className: " _G _Nd",
                            children: (0, S.tZ)(Ma.ZtRichText, {
                              nodes: a.desc,
                            }),
                          }),
                          (0, S.tZ)(va.View, {
                            className: " _G _Nd",
                            children: (0, S.tZ)(Ma.ZtRichText, {
                              nodes: a.userDesc,
                            }),
                          }),
                        ],
                      }),
                      (0, S.tZ)(va.Button, {
                        className: " _LJ _Ae _fD _ng _MJ _b _NJ -he",
                        id: "AJDK",
                        onClick: function () {
                          Ft();
                        },
                        children: a.buttonName,
                      }),
                      (0, S.tZ)(Ja, {
                        propStyle: "margin: 0 40rpx;margin-top: 40rpx;",
                        from: "interrupt",
                      }),
                      (0, S.tZ)(va.View, {
                        className: " _Fa _vi _OJ _Ii _Q _fJ _bf",
                        children: "温馨提示：避免在非".concat(
                          bn ? "铁友" : "智行",
                          "平台登陆12306账号，可有效降低重复核验"
                        ),
                      }),
                    ],
                  })
                : (0, S.tZ)(va.View, {});
            }),
            vn = _.default.isTieyou,
            Zn = (0, X.$j)(function (e) {
              var t = e.t6Model,
                a = e.grabOrderModel;
              return {
                orderInterceptInfo: t.orderInterceptInfo,
                monitorStatus: a.orderInfo.monitorStatus,
              };
            })(function (e) {
              var t = e.orderInterceptInfo,
                a = e.monitorStatus;
              return (0, S.tZ)(S.HY, {
                children:
                  t &&
                  17 === a &&
                  (0, S.BX)(va.View, {
                    className: " _a _Ki _p _in _oL _o _dc",
                    children: [
                      (0, S.tZ)(va.Image, {
                        src: vn
                          ? "https://images3.c-ctrip.com/ztrip/train_zhu/icon_12306_DKQ_ty.png"
                          : "https://images3.c-ctrip.com/ztrip/train_zhu/icon_12306_DKQ_zx.png",
                        className: " _Fq _Id _h _dm",
                      }),
                      (0, S.BX)(va.View, {
                        children: [
                          (0, S.tZ)(va.View, {
                            className: " _pL _kg",
                            children: (0, S.tZ)(Ma.ZtRichText, {
                              nodes: t.orderInterceptTitle,
                            }),
                          }),
                          (0, S.BX)(va.View, {
                            className: " _ol _pb _qL _kg",
                            children: [
                              (0, S.BX)(va.View, {
                                className: ""
                                  .concat(" _i -Pe", " ")
                                  .concat(0 === t.hasLogin ? "-Le" : ""),
                                children: [
                                  (0, S.tZ)(va.Image, {
                                    src:
                                      0 === t.hasLogin
                                        ? vn
                                          ? "https://images3.c-ctrip.com/ztrip/train_zhu/icon_mini_12306_No1_ty.png"
                                          : "https://images3.c-ctrip.com/ztrip/train_zhu/icon_mini_12306_No1_zx.png"
                                        : "https://images3.c-ctrip.com/ztrip/train_zhu/icon_mini_12306_dagou.png",
                                    className: " _Ce _bc",
                                  }),
                                  (0, S.tZ)(va.View, {
                                    className: " _j _Ee _Fe _Ma _hu _V -Me",
                                    children: "登录12306账号",
                                  }),
                                  0 === t.hasLogin &&
                                    (0, S.tZ)(va.Image, {
                                      src: "https://images3.c-ctrip.com/ztrip/train_zhu/icon_mini_gth.png",
                                      className: "-Oe",
                                    }),
                                  (0, S.tZ)(va.View, {
                                    className: " _Ma _Zg _rL _S -Ne",
                                    children:
                                      0 === t.hasLogin ? "待登陆" : "已完成",
                                  }),
                                ],
                              }),
                              (0, S.BX)(va.View, {
                                className: ""
                                  .concat(" _i _ub -Qe", " ")
                                  .concat(0 === t.candidateStatus ? "-Le" : ""),
                                children: [
                                  (0, S.tZ)(va.Image, {
                                    src:
                                      0 === t.candidateStatus
                                        ? vn
                                          ? "https://images3.c-ctrip.com/ztrip/train_zhu/icon_mini_12306_No2_ty.png"
                                          : "https://images3.c-ctrip.com/ztrip/train_zhu/icon_mini_12306_No2_zx.png"
                                        : "https://images3.c-ctrip.com/ztrip/train_zhu/icon_mini_12306_dagou.png",
                                    className: " _Ce _bc",
                                  }),
                                  (0, S.tZ)(va.View, {
                                    className: " _j _Ee _Fe _Ma _hu _V -Me",
                                    children: "开启候补功能",
                                  }),
                                  0 === t.candidateStatus &&
                                    (0, S.tZ)(va.Image, {
                                      src: "https://images3.c-ctrip.com/ztrip/train_zhu/icon_mini_gth.png",
                                      className: "-Oe",
                                    }),
                                  (0, S.tZ)(va.View, {
                                    className: " _Ma _Zg _rL _S -Ne",
                                    children:
                                      0 === t.candidateStatus
                                        ? "待开启"
                                        : "已完成",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, S.BX)(va.View, {
                        className: "btn-box-wait-open",
                        children: [
                          (0, S.tZ)(va.Button, {
                            className:
                              " _Fa _Ae _fD _ng _MJ _b _NJ -Re" +
                              (vn ? " ty" : " zx"),
                            id: "AJDP",
                            onClick: function () {
                              Kt();
                            },
                            children: t.orderInterceptButton,
                          }),
                          0 === t.hasLogin &&
                            (0, S.tZ)(Ja, { propStyle: { marginTop: "10px" } }),
                        ],
                      }),
                    ],
                  }),
              });
            }),
            Nn = a(71625),
            In = (0, X.$j)(function (e) {
              var t = e.grabOrderModel,
                a = e.t6Model;
              return {
                monitorStatus: t.orderInfo.monitorStatus,
                orderInterceptT6AccountInfo: a.orderInterceptT6AccountInfo,
              };
            })(function (e) {
              var t,
                a,
                n = e.orderInterceptT6AccountInfo,
                i =
                  null == n || null === (t = n.userOperateInfo) || void 0 === t
                    ? void 0
                    : t.currentrOrderAccountInfo;
              if (!i) return (0, S.tZ)(S.HY, {});
              i.accountPassportNumber &&
                (i.accountPassportNumber =
                  "*" + i.accountPassportNumber.slice(-3));
              return (0, S.tZ)(Nn.Z, {
                style: { margin: "20rpx" },
                accountInfo:
                  null == n || null === (a = n.userOperateInfo) || void 0 === a
                    ? void 0
                    : a.currentrOrderAccountInfo,
                callback: function (e, t) {
                  e
                    ? Gt({ operateResult: 1, operateResultMsg: "操作成功" })
                        .then(function (e) {
                          1 === e.resultCode
                            ? wa()
                            : ((0, I.showToast)("网络异常～"),
                              console.error(e.resultMessage));
                        })
                        .catch(function (e) {
                          console.error(e);
                        })
                    : (0, I.showToast)(
                        (null == t ? void 0 : t.message) || "网络异常～"
                      );
                },
              });
            }),
            Sn = _.default.isTieyou,
            Tn = (0, X.$j)(function (e) {
              var t = e.grabOrderModel,
                a = e.t6Model;
              return {
                monitorStatus: t.orderInfo.monitorStatus,
                orderInterceptInfo: a.orderInterceptInfo,
                orderInterceptT6AccountInfo: a.orderInterceptT6AccountInfo,
              };
            })(function (e) {
              var t = e.monitorStatus,
                a = e.orderInterceptInfo,
                n = e.orderInterceptT6AccountInfo;
              return 18 === t &&
                "msg_before_login" === (null == n ? void 0 : n.interceptType)
                ? (0, S.tZ)(In, {})
                : (0, S.tZ)(S.HY, {
                    children:
                      !(a && 17 === t) &&
                      (17 === t || 18 === t) &&
                      n &&
                      n.userOperateInfo &&
                      (0, S.BX)(va.View, {
                        className: " _eK _o _a _fK _p _in _dc",
                        children: [
                          (0, S.tZ)(va.Image, {
                            src: "https://images3.c-ctrip.com/ztrip/train.song/grab/icon_cxdl.png",
                            mode: "widthFix",
                            className: " _Fq _Id",
                          }),
                          (0, S.BX)(va.View, {
                            className: " _o _qf",
                            children: [
                              (0, S.tZ)(va.View, {
                                className: " _km _Gi",
                                children: (0, S.tZ)(Ma.ZtRichText, {
                                  nodes: n.userOperateInfo.title,
                                }),
                              }),
                              (0, S.tZ)(va.View, {
                                className: " _G _Nd",
                                children: (0, S.tZ)(Ma.ZtRichText, {
                                  nodes: n.userOperateInfo.subTitle,
                                }),
                              }),
                            ],
                          }),
                          "switchAccount" ===
                          (null == n ? void 0 : n.interceptType)
                            ? (0, S.BX)(va.View, {
                                children: [
                                  (0, S.tZ)(Ja, { from: "switchAccount" }),
                                  (0, S.tZ)(va.Button, {
                                    className:
                                      " _Lc _xa _Ae _ng _MJ -le" +
                                      (Sn ? " ty" : " zx"),
                                    id: "AJDN",
                                    onClick: function () {
                                      Et();
                                    },
                                    children: n.userOperateInfo.operateBtnName,
                                  }),
                                ],
                              })
                            : "studentVerify" ===
                              (null == n ? void 0 : n.interceptType)
                            ? (0, S.tZ)(va.View, {
                                children: (0, S.tZ)(va.Button, {
                                  className:
                                    " _Lc _xa _Ae _ng _MJ -le" +
                                    (Sn ? " ty" : " zx"),
                                  onClick: function () {
                                    (U.getPage().isToDealAbnormalStatus = !0),
                                      (0, Mt.Zs)({
                                        jumpStudentH5Callback: function () {
                                          U.getPage().showAutoRefreshDelay = 1500;
                                        },
                                      });
                                  },
                                  children: n.userOperateInfo.operateBtnName,
                                }),
                              })
                            : [
                                "student_time_limit",
                                "student_invalid_gap",
                              ].includes(null == n ? void 0 : n.interceptType)
                            ? (0, S.tZ)(va.View, {
                                children: (0, S.tZ)(va.Button, {
                                  className:
                                    " _Lc _xa _Ae _ng _MJ -le" +
                                    (Sn ? " ty" : " zx"),
                                  onClick: function () {
                                    ke();
                                  },
                                  children: n.userOperateInfo.operateBtnName,
                                }),
                              })
                            : (0, S.BX)(va.View, {
                                children: [
                                  (0, S.tZ)(va.Button, {
                                    className:
                                      " _Fa _Ae _fD _ng _MJ _b _NJ -me" +
                                      (Sn ? " ty" : " zx"),
                                    id: "AJDO",
                                    onClick: function () {
                                      Et();
                                    },
                                    children: n.userOperateInfo.operateBtnName,
                                  }),
                                  (0, S.tZ)(Ja, {}),
                                ],
                              }),
                        ],
                      }),
                  });
            }),
            yn = function () {
              return (0, S.BX)(S.HY, {
                children: [
                  (0, S.tZ)(fn, {}),
                  (0, S.tZ)(gn, {}),
                  (0, S.tZ)(wn, {}),
                  (0, S.tZ)(Zn, {}),
                  (0, S.tZ)(Tn, {}),
                ],
              });
            },
            Vn = (0, X.$j)(function (e) {
              var t,
                a = e.pageModel,
                n = e.grabOrderModel;
              return {
                tabCode: a.tabsInfo.tabCode,
                trainShutDownTipInfo:
                  null === (t = re("trainStopNotice")) || void 0 === t
                    ? void 0
                    : t._jsonInfo,
                grabSpeedInfo: n.grabSpeedInfo,
                monitorStatus: n.orderInfo.monitorStatus,
              };
            })(function (e) {
              var t = e.tabCode,
                a = e.trainShutDownTipInfo,
                n = e.grabSpeedInfo,
                i = e.monitorStatus,
                r = 2 === i && a;
              return (0,
              S.BX)(S.HY, { children: [(0, S.tZ)(Ga, {}), (0, S.BX)(S.HY, { children: [(0, S.tZ)(va.View, { children: "single-grab-tab" === t && !r && n.speed && !(17 === i || 18 === i || 16 === i) && (0, S.tZ)(Ua, {}) }), (0, S.tZ)(va.View, { children: "candidate-grab-tab" === t && !r && (2 === i || 9 === i) && (0, S.tZ)(on, {}) }), (0, S.tZ)(va.View, { children: "multiply-grab-tab" === t && !r && (2 === i || 9 === i) && (0, S.tZ)(_n, {}) })] }), (0, S.tZ)(yn, {})] });
            });
          var Cn = (0, X.$j)(function (e) {
              var t = e.productModel,
                a = e.grabOrderModel;
              return {
                content: t.noLoginT6GrabInfo.noLoginT6GrabBannerInfo,
                goodsInfo: t.noLoginT6GrabInfo.goodsInfo,
                passengerLength: a.ticketInfo.passengerList.length,
              };
            })(function (e) {
              var t = e.content,
                a = e.goodsInfo,
                n = e.passengerLength,
                i = t || {},
                r = i.icon,
                o = i.title,
                c = i.subTitle,
                s = i.btnName,
                l = i.priceTag,
                d = i.type;
              return t
                ? (0, S.BX)(va.View, {
                    className: " _Vb _dc _Dj _LL _i _l",
                    children: [
                      (0, S.tZ)(va.Image, { src: r, className: " _Ef _db" }),
                      (0, S.BX)(va.View, {
                        className: " _j _Ee",
                        children: [
                          (0, S.tZ)(va.View, {
                            className: " _Xb _yg _U",
                            children: o,
                          }),
                          (0, S.tZ)(va.View, {
                            className: " _gj _Ma _Na _U",
                            children: c,
                          }),
                        ],
                      }),
                      (0, S.tZ)(va.View, {
                        className: " _Ma _Na",
                        children: l,
                      }),
                      s &&
                        (0, S.tZ)(va.View, {
                          className: " _Zg _kc _p _Ge _pc _oJ -Ze",
                          onClick: function () {
                            var e = [{ type: d, num: n }],
                              t = [],
                              i = (0, L.Z)({}, a);
                            i && ((i.goodsNum = n), t.push(i)),
                              Xe({ productList: e, treasuresGoods: t }).then(
                                function (e) {
                                  e &&
                                    e.success &&
                                    U.getDispatch().pageModel.setTabsInfo({
                                      tabCode: "multiply-grab-tab",
                                    });
                                }
                              );
                          },
                          children: s,
                        }),
                    ],
                  })
                : (0, S.tZ)(S.HY, {});
            }),
            Dn = a(65592),
            kn = m.default.memo(
              (0, X.$j)(function (e) {
                var t = e.productModel;
                return {
                  specificallyGrabBannerInfo:
                    t.specificallyGrab.specificallyGrabBannerInfo,
                  specificallyGrabBannerDisplay:
                    t.specificallyGrab.specificallyGrabBannerDisplay,
                };
              })(function (e) {
                var t = e.specificallyGrabBannerDisplay,
                  a = e.specificallyGrabBannerInfo;
                if (!t || !a) return (0, S.tZ)(S.HY, {});
                return (0, S.tZ)(Dn.Z, {
                  content: a,
                  isChecked: 1 !== a.status,
                  onChecked: function () {
                    1 === a.status &&
                      (U.ubtTrace(205922, {
                        bizKey: "z_grab_detail_24h_zrq_modelue_click",
                      }),
                      U.ubtTrace(205920, {
                        exposureType: "actionbar",
                        bizKey: "z_grab_detail_24h_zrq_actionbar_show",
                      }),
                      fa(D.specificallyGrabDrawer));
                  },
                  onShowDetail: function () {
                    1 === a.status &&
                      (U.ubtTrace(205922, {
                        bizKey: "z_grab_detail_24h_zrq_modelue_click",
                      }),
                      fa(D.specificallyGrabDrawer));
                  },
                  fromPage: "graborder",
                  propStyle: "margin: 20rpx;",
                });
              })
            );
          var Bn = (0, X.$j)(function (e) {
            var t = e.grabOrderModel,
              a = e.productModel;
            return {
              processFlag: t.grabProcessInfo.processFlag,
              grabDetailClaimInfo:
                a.failClaimProduct.grabDetailClaimInfo ||
                a.failClaimProduct.speedUpGrabDetailClaimInfo,
            };
          })(function (e) {
            var t = e.processFlag,
              a = e.grabDetailClaimInfo,
              n = a || {},
              i = n.icon,
              r = n.title,
              o = n.subTitle,
              c = n.buttonName,
              s = n.status,
              l = n.type;
            (0, m.useEffect)(
              function () {
                1 == l && (U.ubtTrace(198089), 2 == s && U.ubtTrace(198092));
              },
              [s]
            );
            var d = function (e) {
              var t = e.status,
                a = e.type;
              0 === t
                ? fa(D.grabFailClaimDrawerVisible)
                : 2 === t
                ? (1 == a && (U.ubtTrace(198093), U.ubtTrace(198094)),
                  fa(D.settleClaimDialogVisible))
                : 4 === t && fa(D.settleClaimDialogVisible);
            };
            return 0 == t && a
              ? (0, S.BX)(va.View, {
                  className: " _Ki _HL _dc _jF _i _l _p",
                  children: [
                    (0, S.tZ)(va.Image, { src: i, className: " _da _Te _lj" }),
                    (0, S.BX)(va.View, {
                      className: " _j",
                      children: [
                        (0, S.tZ)(va.View, {
                          className: " _vl _IL",
                          children: (0, S.tZ)(va.RichText, {
                            nodes: h.Z.convertAppTextToHtmlStr(r),
                            space: "nbsp",
                          }),
                        }),
                        (0, S.tZ)(va.View, {
                          className: " _D _Kc",
                          children: o,
                        }),
                      ],
                    }),
                    c &&
                      (0, S.tZ)(va.View, {
                        className: " _u _Jn _FH _JL _w _ye _KL _qb _GG _R",
                        id: "AJDe",
                        onClick: function () {
                          d && d({ status: s, type: l });
                        },
                        children: c,
                      }),
                  ],
                })
              : (0, S.tZ)(S.HY, {});
          });
          var xn = (0, X.$j)(function (e) {
              return {
                content:
                  e.productModel.failClaimProduct
                    .springFestivalGrabDetailClaimInfo,
              };
            })(function (e) {
              var t = e.content,
                a = t || {},
                n = a.icon,
                i = a.title,
                r = a.subTitle,
                o = a.btnName,
                c = a.activityState,
                s = a.tag;
              if (
                ((0, m.useEffect)(function () {
                  t &&
                    U.ubtTrace(205910, {
                      exposureType: "normal",
                      bizKey: "z_spring_qbdp_chuxing_modeule_show",
                    });
                }, []),
                !t)
              )
                return (0, S.tZ)(S.HY, {});
              var l = function () {
                0 === c && fa(D.springFestivalDrawerVisible);
              };
              return (0, S.BX)(va.View, {
                className: " _Vb _Oa _Ki _hM _i _l _p",
                children: [
                  (0, S.tZ)(va.Image, { src: n, className: " _db _Ef _Qf" }),
                  (0, S.BX)(va.View, {
                    className: " _j",
                    children: [
                      (0, S.BX)(va.View, {
                        className: " _i _l",
                        children: [
                          (0, S.tZ)(va.View, {
                            className: " _sb _vl _Ua _U",
                            children: i,
                          }),
                          (0, S.tZ)(va.View, {
                            className: " _cf _iM _gF _Rj _bh _O _qb _B",
                            children: s,
                          }),
                        ],
                      }),
                      (0, S.tZ)(va.View, {
                        className: " _gj _Ma _xJ _Q",
                        children: r,
                      }),
                    ],
                  }),
                  o &&
                    (0, S.tZ)(va.View, {
                      className: ""
                        .concat(" _ye _jM _x _Cm _eg _R _Dz -kf", " ")
                        .concat(1 === c ? "active" : ""),
                      id: "AJDl",
                      onClick: function () {
                        U.ubtTrace(205914, {
                          bizKey: "z_spring_qbdp_chuxing_modeule_click",
                        }),
                          l && l();
                      },
                      children: o,
                    }),
                ],
              });
            }),
            Pn = (0, X.$j)(function (e) {
              var t = e.pageModel;
              return {
                grabProcessInfo: e.grabOrderModel.grabProcessInfo,
                isCanFriendSpeed: t.isCanFriendSpeed,
              };
            })(function (e) {
              var t = e.isCanFriendSpeed,
                a = e.grabProcessInfo,
                n = a.processFlag,
                i = a.unlockFlag,
                r = a.welfareInfo,
                o = a.invitedNum,
                c = a.needShareCount,
                s = a.claimInfo;
              if (!(n > 0)) return (0, S.tZ)(va.View, {});
              var l = function () {
                fa(D.showStuAndNewGuestPrompt);
              };
              return (0, S.BX)(S.HY, {
                children: [
                  t &&
                    (0, S.tZ)(S.HY, {
                      children:
                        0 === i &&
                        (null == r ? void 0 : r.welfareList) &&
                        (0, S.BX)(va.View, {
                          className: "welfare-box",
                          children: [
                            1 === n &&
                              (0, S.BX)(va.View, {
                                className: "welfare-hd",
                                children: [
                                  "您可免费解锁以下",
                                  (0, S.tZ)(va.Text, {
                                    className: "color-red",
                                    children: "学生福利",
                                  }),
                                ],
                              }),
                            (3 === n || 2 === n) &&
                              (0, S.BX)(va.View, {
                                className: "welfare-hd",
                                children: [
                                  "您可免费解锁以下",
                                  (0, S.tZ)(va.Text, {
                                    className: "color-red",
                                    children: "新客福利",
                                  }),
                                ],
                              }),
                            (0, S.tZ)(va.View, {
                              className:
                                "welfare-bd " +
                                (_.default.isTieyou ? "ty" : "zx"),
                              children: r.welfareList.map(function (e) {
                                return (0,
                                S.BX)(va.View, { className: "item", children: [(0, S.tZ)(va.Image, { src: e.icon, className: "icon" }), (0, S.BX)(va.View, { className: "cont", children: [(0, S.tZ)(va.View, { className: "tit", children: e.title }), (0, S.tZ)(va.View, { className: "txt", children: e.desc })] }), (0, S.tZ)(va.View, { className: "price", children: e.price }), (0, S.BX)(va.Button, { className: "btn-go", children: [(0, S.tZ)(va.Text, { className: "ifont-lock iconfont" }), e.buttonName] })] }, "index");
                              }),
                            }),
                            0 === o
                              ? (0, S.BX)(va.View, {
                                  className: "welfare-btn",
                                  children: [
                                    (0, S.BX)(va.Button, {
                                      className: "btn-line",
                                      id: "AJDm",
                                      onClick: function () {
                                        fa(D.payToUnlock);
                                      },
                                      children: [
                                        null == r ? void 0 : r.payButton,
                                        (0, S.tZ)(va.Text, {
                                          children: r.payButtonDesc,
                                        }),
                                      ],
                                    }),
                                    (0, S.BX)(va.Button, {
                                      className: "btn-primary",
                                      id: "AJDn",
                                      onClick: function () {
                                        l();
                                      },
                                      children: [
                                        null == r ? void 0 : r.freeButton,
                                        (0, S.tZ)(va.Text, {
                                          children:
                                            null == r
                                              ? void 0
                                              : r.freeButtonDesc,
                                        }),
                                      ],
                                    }),
                                  ],
                                })
                              : (0, S.tZ)(va.View, {
                                  className: "welfare-btn",
                                  children: (0, S.BX)(va.Button, {
                                    className: "btn-primary",
                                    id: "AJDo",
                                    onClick: function () {
                                      l();
                                    },
                                    children: [
                                      "继续邀请",
                                      (0, S.tZ)(va.Text, {
                                        children:
                                          "再邀请" + (c - o) + "位好友即可解锁",
                                      }),
                                    ],
                                  }),
                                }),
                          ],
                        }),
                    }),
                  s &&
                    (0, S.BX)(va.View, {
                      className: " _Ki _a _dc _kM _yc _p -lf -mf",
                      children: [
                        (0, S.tZ)(va.View, {
                          className: " _bd _rJ _lM",
                          children: s.title,
                        }),
                        (0, S.BX)(va.View, {
                          className: " _G _Ac _i _Yl _l",
                          id: "AJDp",
                          onClick: function () {
                            fa(D.confirmCompensate);
                          },
                          children: [
                            (0, S.tZ)(va.Text, {
                              className: "ifont-list iconfont color-primary",
                            }),
                            s.content[0].desc,
                            s.content[0].buttonName &&
                              (0, S.BX)(va.Text, {
                                className: "".concat(
                                  " _F _mM",
                                  " color-primary"
                                ),
                                children: [
                                  s.content[0].buttonName,
                                  s.content[0].buttonName &&
                                    (0, S.tZ)(va.Text, {
                                      className: "ifont-arr iconfont",
                                    }),
                                ],
                              }),
                          ],
                        }),
                        (0, S.BX)(va.View, {
                          className: " _G _Ac _i _Yl _l",
                          children: [
                            (0, S.tZ)(va.Text, {
                              className: "ifont-list iconfont color-primary",
                            }),
                            s.content[1].desc,
                          ],
                        }),
                      ],
                    }),
                ],
              });
            });
          var Mn = function (e) {
            var t = e.content,
              a = void 0 === t ? {} : t,
              n = e.propStyle,
              i = void 0 === n ? {} : n,
              r = e.onClick,
              o = void 0 === r ? function () {} : r;
            if (!a) return (0, S.tZ)(S.HY, {});
            var c = a.icon,
              s = a.title,
              l = a.subTitle,
              d = a.btnName,
              u = a.status,
              _ = a.priceTag,
              m = a.payType;
            return (0, S.BX)(va.View, {
              className: "seat-product-banner",
              style: i,
              children: [
                (0, S.tZ)(va.Image, { src: c, className: "i-img", webp: !0 }),
                (0, S.BX)(va.View, {
                  className: "cont",
                  children: [
                    (0, S.tZ)(va.View, {
                      className: "tit",
                      children: (0, S.tZ)(va.RichText, {
                        nodes: h.Z.convertAppTextToHtmlStr(s),
                        space: "nbsp",
                      }),
                    }),
                    (0, S.tZ)(va.View, { className: "txt", children: l }),
                  ],
                }),
                _ &&
                  (0, S.tZ)(va.View, {
                    className: "price-tag",
                    style: 1 === m ? { textDecoration: "line-through" } : {},
                    children: _,
                  }),
                d &&
                  (0, S.BX)(S.HY, {
                    children: [
                      2 === u &&
                        (0, S.tZ)(va.Image, {
                          className: "opened-icon",
                          src: "https://images3.c-ctrip.com/ztrip/train_zhu/icon_circle_gou.png",
                        }),
                      (0, S.tZ)(va.View, {
                        className: "button ".concat(2 === u ? "opened" : ""),
                        id: "AJDj",
                        onClick: o,
                        children: d,
                      }),
                    ],
                  }),
              ],
            });
          };
          var An = (0, X.$j)(function (e) {
              var t = e.productModel;
              return {
                seatUpgradeProductBannerInfo:
                  t.seatUpgradeProduct.seatUpgradeProductBannerInfo,
                seatProductBannerInfo: t.seatProduct.seatProductBannerInfo,
                seatProductToastInfo: t.seatProduct.seatProductToastInfo,
                seatProductStatus: t.seatProduct.seatProductStatus,
              };
            })(function (e) {
              var t = e.seatUpgradeProductBannerInfo,
                a = e.seatProductStatus,
                n = e.seatProductBannerInfo,
                i = e.seatProductToastInfo,
                r = [
                  { content: t, onClick: function () {} },
                  {
                    content: n,
                    onClick: function () {
                      1 === a
                        ? (U.ubtTrace("c_trn_z_10650060279", {
                            exposureType: "normal",
                            bizKey: "z_grab_detail_select_seattype_click",
                            type: (null == n ? void 0 : n.title) || "",
                            orderId: U.getPage().oid,
                          }),
                          fa(D.seatProductDrawer))
                        : 2 === a &&
                          (0, I.showToast)(
                            (null == i ? void 0 : i.tipInfo) || ""
                          );
                    },
                  },
                ];
              return 0 === r.length ||
                r.every(function (e) {
                  return !e.content;
                })
                ? (0, S.tZ)(va.View, {})
                : (0, S.tZ)(va.View, {
                    className: " _Ki _Oa _Vb",
                    children: r.map(function (e, t) {
                      return (0,
                      S.tZ)(Mn, { content: e.content, id: "AJDf", onClick: e.onClick, ubtTrace: U.ubtTrace }, t);
                    }),
                  });
            }),
            Xn = a(94912),
            zn = (0, X.$j)(function (e) {
              return { guaranteeInfo: e.productModel.guaranteeInfo };
            })(function (e) {
              var t = e.guaranteeInfo;
              return (0, S.tZ)(va.View, {
                children:
                  t &&
                  (0, S.BX)(va.View, {
                    className: " _Ki _a _dc _yc _Gc _i _l _Os -Ye",
                    id: "AJDg",
                    onClick: function () {
                      2 !== t.type &&
                        Ia.Z.twebview({
                          data: {
                            url: "https://pages.ctrip.com/ztrip/member/info_qpbz.html",
                            bridgeIns: function () {},
                            needLogin: !0,
                          },
                        });
                    },
                    "data-ubt-key": "wx_orderdetail_gotoMemberH5",
                    children: [
                      (0, S.tZ)(va.Text, { className: "ifont-save iconfont" }),
                      (0, S.tZ)(va.View, {
                        className: " _F _FL _j",
                        children: t.title,
                      }),
                      2 === t.type
                        ? (0, S.tZ)(va.Button, {
                            className: " _Am _yf _Oc _GL _FL _Cm _a",
                            id: "AJDh",
                            onClick: function () {
                              fa(D.showClaimPop);
                            },
                            "data-ubt-key": "wx_orderdetail_claim",
                            children: t.buttonName || "申请补偿",
                          })
                        : (0, S.tZ)(va.Text, {
                            className: "ifont-arr iconfont",
                          }),
                    ],
                  }),
              });
            }),
            On = _.default.isTieyou,
            Gn = (0, X.$j)(function (e) {
              var t,
                a = e.grabOrderModel;
              return {
                grabTicketSplitInfo:
                  null === (t = oe(x.grabTicketSplitArea)) || void 0 === t
                    ? void 0
                    : t._jsonInfo,
                grabOrderStatus: a.orderInfo.monitorStatus,
              };
            })(function (e) {
              var t = e.grabTicketSplitInfo,
                a = e.grabOrderStatus;
              return (0, S.tZ)(va.View, {
                children:
                  t &&
                  (1 === a || 2 === a || 13 === a || 14 === a) &&
                  (0, S.BX)(va.View, {
                    className: " _Ki _a _dc _yc _OL",
                    children: [
                      (0, S.BX)(va.View, {
                        className: " _i _l _Sc",
                        children: [
                          (0, S.tZ)(va.View, {
                            className: " _D _b _ji _TB _lj bgcolor-primary",
                            children: "正在抢",
                          }),
                          (0, S.tZ)(va.Text, {
                            className: " _bd",
                            children: t.title,
                          }),
                        ],
                      }),
                      (0, S.BX)(va.View, {
                        className: " _i _l",
                        children: [
                          (0, S.tZ)(va.Text, { children: t.subTitle }),
                          (0, S.tZ)(va.Text, {
                            className: ""
                              .concat(" _G _Nd _Qf -df", " ")
                              .concat(On ? "ty" : "zx"),
                            id: "AJDk",
                            onClick: function () {
                              var e = t.jumpUrl;
                              e && f().redirectTo({ url: e });
                            },
                            children: t.buttonName,
                          }),
                        ],
                      }),
                      (0, S.tZ)(va.View, { className: " _j _Zf _PL _Vs" }),
                      (0, S.BX)(va.View, {
                        className: " _i _F _k _jc _Lo -ef",
                        children: [
                          (0, S.BX)(va.View, {
                            className: "-ff",
                            children: [
                              (0, S.BX)(va.View, {
                                className: " _QL _i _l _Va",
                                children: [
                                  (0, S.tZ)(va.View, {
                                    className: " _TL _UL _Qo _VL _Va",
                                  }),
                                  (0, S.tZ)(va.Text, {
                                    className: " _RL",
                                    children: "抢票成功",
                                  }),
                                ],
                              }),
                              (0, S.tZ)(va.View, {
                                className: " _j _oc",
                                children: t.successDesc,
                              }),
                            ],
                          }),
                          (0, S.BX)(va.View, {
                            className: "-ff",
                            children: [
                              (0, S.BX)(va.View, {
                                className: " _QL _i _l _Va",
                                children: [
                                  (0, S.tZ)(va.View, {
                                    className: " _TL _UL _Qo _VL _Va",
                                  }),
                                  (0, S.tZ)(va.Text, {
                                    className: " _SL",
                                    children: "抢票失败",
                                  }),
                                ],
                              }),
                              (0, S.tZ)(va.View, {
                                className: " _j _oc",
                                children: t.failDesc,
                              }),
                            ],
                          }),
                          t.tip &&
                            (0, S.tZ)(va.View, {
                              className: " _WL _XL _vi _Vv _Rq",
                              children: (0, S.tZ)(va.Text, { children: t.tip }),
                            }),
                        ],
                      }),
                    ],
                  }),
              });
            });
          var Ln = (0, X.$j)(function (e) {
              var t = e.grabOrderModel;
              return {
                rescheduleGrabTips: t.orderInfo.rescheduleGrabTips,
                originalOrder: t.orderInfo.originalOrder,
              };
            })(function (e) {
              var t = e.rescheduleGrabTips,
                a = void 0 === t ? [] : t,
                n = e.originalOrder,
                i = void 0 === n ? {} : n,
                r = i || {},
                o = r.stationInfo,
                c = r.departTimeInfo,
                s = r.orderNumber;
              return i
                ? (0, S.BX)(va.View, {
                    className: " _Ki _Wn _Vb _pb -af",
                    children: [
                      (0, S.tZ)(va.View, {
                        className: " _gd _sb _au _rm _V",
                        children: "原车票信息",
                      }),
                      (0, S.BX)(va.View, {
                        className: " _p _ML _i",
                        children: [
                          (0, S.tZ)(va.View, {
                            className: " _sb _mu _nc _S _le",
                            children: o,
                          }),
                          (0, S.tZ)(va.View, {
                            className: " _Ma _iu _nc _S",
                            children: c,
                          }),
                          (0, S.BX)(va.View, {
                            className: " _u _t",
                            id: "AJDi",
                            onClick: function () {
                              return (function (e) {
                                f().navigateTo({
                                  url: W.ZP.getTrainDetailUrl(e),
                                });
                              })(s);
                            },
                            children: [
                              (0, S.tZ)(va.Text, {
                                className: " _UE _iu _nc _S",
                                children: "详情",
                              }),
                              (0, S.tZ)(va.Text, {
                                className: "ifont-arr iconfont",
                              }),
                            ],
                          }),
                        ],
                      }),
                      a &&
                        a.length > 0 &&
                        (0, S.tZ)(va.View, {
                          className: " _NL _Ii _tB _vi",
                          children: a.map(function (e, t) {
                            return (0,
                            S.BX)(va.View, { className: " _mE _i _Gi _R -bf", children: [(0, S.tZ)(va.Text, { className: " _Qf _i _l _eg -cf" }), (0, S.tZ)(va.Text, { className: " _oc _rL", children: e })] }, t);
                          }),
                        }),
                    ],
                  })
                : (0, S.tZ)(S.HY, {});
            }),
            Fn = a(58117),
            jn = m.default.memo(
              (0, X.$j)(function (e) {
                var t,
                  a,
                  n = e.grabOrderModel;
                return {
                  chosenTrain:
                    null === (t = n.orderInfo) ||
                    void 0 === t ||
                    null === (a = t.chosenTrainList) ||
                    void 0 === a
                      ? void 0
                      : a[0],
                  ticketInfo: n.ticketInfo,
                };
              })(function (e) {
                var t = e.smartJianLouInfo,
                  a = e.chosenTrain,
                  n = e.ticketInfo;
                if (!t || !a) return (0, S.tZ)(S.HY, {});
                var i = t.tripDetailSmartSchemeInfo,
                  r = t.source,
                  o = a.DepartStation,
                  c = a.ArriveStation,
                  s = a.TrainNumber,
                  l = a.DepartTime,
                  d = a.ArriveTime,
                  u = {
                    fromStation: o,
                    toStation: c,
                    trainNum: s,
                    fromDate: n.leaveDate,
                    fromTime: l,
                    toTime: d,
                    source: r,
                  };
                return (0, S.tZ)(Fn.Z, { smartSchemeInfo: i, trainInfo: u });
              })
            ),
            Rn = (0, X.$j)(function (e) {
              var t, a, n;
              return {
                monitorStatus: e.grabOrderModel.orderInfo.monitorStatus,
                friendActivityInfo:
                  null === (t = oe(x.weixinDiversionArea)) ||
                  void 0 === t ||
                  null === (a = t._jsonInfo) ||
                  void 0 === a
                    ? void 0
                    : a.orderBanner,
                smartJianLouInfo:
                  null === (n = oe(x.smartSeatRecommendArea)) || void 0 === n
                    ? void 0
                    : n._jsonInfo,
              };
            })(function (e) {
              var t = e.monitorStatus,
                a = e.friendActivityInfo,
                n = e.smartJianLouInfo;
              return (0,
              S.BX)(S.HY, { children: [(0, S.tZ)(Cn, {}), (0, S.tZ)(kn, {}), (0, S.tZ)(Bn, {}), (0, S.tZ)(xn, {}), (0, S.tZ)(Pn, {}), (0, S.tZ)(An, {}), 4 !== t && _.default.isWechat && (0, S.tZ)(Xn.Z, { friendActivityInfo: a }), (0, S.tZ)(zn, {}), (0, S.tZ)(Gn, {}), (0, S.tZ)(Ln, {}), (0, S.tZ)(jn, { smartJianLouInfo: n })] });
            }),
            Jn = function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : [],
                t = "";
              if (e.length > 0) {
                var a = e[0];
                t = a.recommendDepartStation + "-" + a.recommendArriveStation;
              }
              return e.length > 1 && (t += "等"), t;
            },
            En = function (e) {
              f().setClipboardData({
                data: e,
                success: function () {
                  f().showToast({ title: "复制成功", icon: "none" });
                },
              });
            },
            Hn = (0, X.$j)(function (e) {
              var t,
                a = e.grabOrderModel,
                n = e.pageModel,
                i = e.planModel;
              return {
                grabTicketSplitInfo:
                  null === (t = oe(x.grabTicketSplitArea)) || void 0 === t
                    ? void 0
                    : t._jsonInfo,
                isShowCrossStationRevise: n.configData.isShowCrossStationRevise,
                orderInfo: a.orderInfo,
                ticketInfo: a.ticketInfo,
                crossStationSchemeInfos: i.crossStationSchemeInfos,
                isDisplayPromiseCar: i.promiseCarInfo.isDisplayPromiseCar,
                showPromiseCarTip: i.promiseCarInfo.showPromiseCarTip,
                promiseToast: i.promiseCarInfo.promiseToast,
                promiseCarRecommendInfo:
                  i.promiseCarInfo.promiseCarRecommendInfo,
              };
            })(function (e) {
              var t,
                a,
                n = e || {},
                i = n.orderInfo,
                r = n.ticketInfo,
                o = n.grabTicketSplitInfo,
                c = n.crossStationSchemeInfos,
                s = n.promiseCarRecommendInfo,
                l = n.promiseToast,
                d = n.showPromiseCarTip,
                u = n.isDisplayPromiseCar,
                _ = n.isShowCrossStationRevise,
                p = n.isFoldSomeTask;
              if (!r) return (0, S.tZ)(S.HY, {});
              var f = r.fromStation.name
                  ? ""
                      .concat(r.fromStation.name, " - ")
                      .concat(r.toStation.name)
                  : "",
                h = r.passenger,
                g = r.leaveDate
                  ? r.leaveDate
                      .split(",")
                      .map(function (e) {
                        return N()(e).format("M月D日");
                      })
                      .join(",")
                  : "",
                b = r.trainNo,
                w = r.seatType,
                v = i.crossStationInfos,
                Z = i.updateFlagStr,
                I = i.updateFlag,
                T = function (e) {
                  if (!Z) return !0;
                  var t = Z.indexOf(e);
                  return -1 !== t && "1" === Z.slice(t + 1, t + 2);
                },
                y = T("D") && I && !o,
                V = T("T") && I && !o,
                C = T("S") && I,
                k = T("C") && I && _;
              return (0, S.tZ)(S.HY, {
                children: (0, S.BX)(va.View, {
                  className: "-Ue",
                  children: [
                    f &&
                      (0, S.BX)(va.View, {
                        className: " _tL _p _i _U",
                        children: [
                          (0, S.tZ)(va.View, {
                            className: " _Fq _G _Kc",
                            children: "行程",
                          }),
                          (0, S.tZ)(va.View, {
                            className: " _G _dd _uL _yc  _G _dd _uL _j _yc",
                            children: f,
                          }),
                        ],
                      }),
                    (0, S.BX)(va.View, {
                      className: " _tL _p _i _U",
                      children: [
                        (0, S.tZ)(va.View, {
                          className: " _Fq _G _Kc",
                          children: "乘客",
                        }),
                        (0, S.tZ)(va.View, {
                          className: " _G _dd _uL _yc  _G _dd _uL _j _yc",
                          children: h,
                        }),
                      ],
                    }),
                    g &&
                      (0, S.BX)(va.View, {
                        className: " _tL _p _i _U",
                        children: [
                          (0, S.tZ)(va.View, {
                            className: " _Fq _G _Kc",
                            children: "日期",
                          }),
                          (0, S.tZ)(va.View, {
                            className: " _G _dd _uL _yc  _G _dd _uL _j _yc",
                            children: g,
                          }),
                          !!y &&
                            (0, S.BX)(m.default.Fragment, {
                              children: [
                                (0, S.tZ)(va.View, {
                                  className: "color-primary  _G",
                                  id: "AJDU",
                                  onClick: It,
                                  children: "推荐多选",
                                }),
                                (0, S.tZ)(va.Text, {
                                  className: "ifont-arr iconfont",
                                }),
                              ],
                            }),
                        ],
                      }),
                    b &&
                      (0, S.BX)(va.View, {
                        className: " _tL _p _i _U",
                        children: [
                          (0, S.tZ)(va.View, {
                            className: " _Fq _G _Kc",
                            children: "车次",
                          }),
                          (0, S.tZ)(va.View, {
                            className: " _G _dd _uL _yc  _G _dd _uL _j _yc",
                            children: b,
                          }),
                          !!V &&
                            (0, S.BX)(m.default.Fragment, {
                              children: [
                                (0, S.tZ)(va.View, {
                                  className: "color-primary  _G",
                                  id: "AJDV",
                                  onClick: Nt,
                                  children: "推荐多选",
                                }),
                                (0, S.tZ)(va.Text, {
                                  className: "ifont-arr iconfont",
                                }),
                              ],
                            }),
                        ],
                      }),
                    w &&
                      (0, S.BX)(va.View, {
                        className: " _tL _p _i _U",
                        children: [
                          (0, S.tZ)(va.View, {
                            className: " _Fq _G _Kc",
                            children: "座席",
                          }),
                          (0, S.tZ)(va.View, {
                            className: " _G _dd _uL _yc  _G _dd _uL _j _yc",
                            children: w,
                          }),
                          !!C &&
                            (0, S.BX)(m.default.Fragment, {
                              children: [
                                (0, S.tZ)(va.View, {
                                  className: "color-primary  _G",
                                  id: "AJDW",
                                  onClick: St,
                                  children: "推荐多选",
                                }),
                                (0, S.tZ)(va.Text, {
                                  className: "ifont-arr iconfont",
                                }),
                              ],
                            }),
                        ],
                      }),
                    !p &&
                      (0, S.BX)(S.HY, {
                        children: [
                          !(null == c || !c.length) &&
                            (0, S.BX)(va.View, {
                              className: " _tL _p _i _U",
                              children: [
                                (0, S.tZ)(va.View, {
                                  className: " _Fq _G _Kc",
                                  children: "跨站",
                                }),
                                (0, S.tZ)(va.View, {
                                  className:
                                    " _G _dd _uL _yc  _G _dd _uL _j _yc",
                                  children: Jn(v) || "上车补票或者多买几站",
                                }),
                                !!k &&
                                  (0, S.BX)(m.default.Fragment, {
                                    children: [
                                      (0, S.tZ)(va.View, {
                                        className: "color-primary  _G",
                                        id: "AJDX",
                                        onClick: Ct,
                                        children: "推荐多选",
                                      }),
                                      (0, S.tZ)(va.Text, {
                                        className: "ifont-arr iconfont",
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                          1 === u &&
                            !(
                              (null == l ||
                                null === (t = l.plans) ||
                                void 0 === t ||
                                !t.length) &&
                              0 === (null == s ? void 0 : s.selected)
                            ) &&
                            (0, S.BX)(va.View, {
                              className: " _tL _p _i _U",
                              children: [
                                (0, S.tZ)(va.View, {
                                  className: " _Fq _G _Kc",
                                  children: "保障",
                                }),
                                (0, S.BX)(va.View, {
                                  className: " _p _j",
                                  children: [
                                    (0, S.tZ)(va.View, {
                                      className:
                                        " _G _dd _uL _yc  _G _dd _uL _j _yc",
                                      children:
                                        (null == s ? void 0 : s.showMsg) || "",
                                    }),
                                    d &&
                                      (0, S.BX)(va.View, {
                                        className: " _u _wo _Dd _i _l",
                                        id: "AJDY",
                                        onClick: function () {
                                          U.getDispatch().planModel.setPromiseCarInfo(
                                            { showPromiseCarTip: !1 }
                                          );
                                        },
                                        children: [
                                          (0, S.tZ)(va.View, {
                                            className: " _Mx _ee _vL _u _wL",
                                          }),
                                          (0, S.tZ)(va.View, {
                                            className:
                                              " _vi _qb _xL _mF _yL _Zn _yA _Mb",
                                            children: "在这设置保障上车哦~",
                                          }),
                                        ],
                                      }),
                                  ],
                                }),
                                !(
                                  (null == l ||
                                    null === (a = l.plans) ||
                                    void 0 === a ||
                                    !a.length) &&
                                  1 === (null == s ? void 0 : s.selected)
                                ) &&
                                  (0, S.BX)(S.HY, {
                                    children: [
                                      (0, S.tZ)(va.View, {
                                        className: "color-primary  _G",
                                        id: "AJDZ",
                                        onClick: function () {
                                          U.ubtTrace(205914, {
                                            bizKey: "z_guarantee_display_click",
                                            state:
                                              null != s && s.selected ? 0 : 1,
                                          }),
                                            fa(D.promiseIntoCarDrawer);
                                        },
                                        children:
                                          1 ===
                                          (null == s ? void 0 : s.selected)
                                            ? "修改设置"
                                            : "推荐设置",
                                      }),
                                      (0, S.tZ)(va.Text, {
                                        className: "ifont-arr iconfont",
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                          (0, S.BX)(va.View, {
                            className: " _tL _p _i _U",
                            children: [
                              (0, S.tZ)(va.View, {
                                className: " _Fq _G _Kc",
                                children: "订单号",
                              }),
                              (0, S.tZ)(va.View, {
                                className: " _G _dd _uL _yc  _G _dd _uL _j _yc",
                                style: "flex: unset",
                                children: U.getPage().oid,
                              }),
                              (0, S.tZ)(va.View, {
                                className: " _UE _iu _Sf",
                                id: "AJDa",
                                onClick: function () {
                                  return En(U.getPage().oid);
                                },
                                children: "复制",
                              }),
                            ],
                          }),
                        ],
                      }),
                  ],
                }),
              });
            }),
            qn = function (e) {
              var t = e.content,
                a = e.propStyle;
              return t
                ? (0, S.BX)(va.View, {
                    className: "stride-train-box",
                    style: a,
                    children: [
                      t.recommendDepartCount > 0 &&
                        (0, S.BX)(va.View, {
                          className: "list",
                          children: [
                            (0, S.tZ)(va.View, {
                              className: "station",
                              children: t.recommendDepartStation,
                            }),
                            (0, S.tZ)(va.View, {
                              className: "info",
                              children: "多买" + t.recommendDepartCount + "站",
                            }),
                          ],
                        }),
                      (0, S.BX)(va.View, {
                        className:
                          "list list-original " +
                          (t.recommendDepartCount < 0 ? "bu" : ""),
                        children: [
                          (0, S.BX)(va.View, {
                            className: "station now",
                            children: [
                              (0, S.tZ)(va.View, {
                                className: "station-tag ".concat(
                                  t.recommendDepartCount > 0 ? "middle" : ""
                                ),
                                children: "上车",
                              }),
                              t.originalDepartStation,
                            ],
                          }),
                          t.recommendDepartCount < 0 &&
                            (0, S.tZ)(va.View, {
                              className: "info info-left-middle",
                              children: "补票" + -t.recommendDepartCount + "站",
                            }),
                        ],
                      }),
                      t.recommendDepartCount < 0 &&
                        (0, S.tZ)(va.View, {
                          className:
                            "list " + (t.recommendDepartCount < 0 ? "bu" : ""),
                          children: (0, S.tZ)(va.View, {
                            className: "station",
                            children: t.recommendDepartStation,
                          }),
                        }),
                      t.recommendArriveCount < 0 &&
                        (0, S.tZ)(va.View, {
                          className: "list",
                          children: (0, S.tZ)(va.View, {
                            className: "station",
                            children: t.recommendArriveStation,
                          }),
                        }),
                      (0, S.BX)(va.View, {
                        className:
                          "list list-original " +
                          (t.recommendArriveCount < 0 ? "bu" : ""),
                        children: [
                          (0, S.BX)(va.View, {
                            className: "station now",
                            children: [
                              (0, S.tZ)(va.View, {
                                className: "station-tag ".concat(
                                  t.recommendArriveCount > 0 ? "middle" : ""
                                ),
                                children: "下车",
                              }),
                              t.originalArriveStation,
                            ],
                          }),
                          t.recommendArriveCount < 0 &&
                            (0, S.tZ)(va.View, {
                              className: "info info-right-middle",
                              children: "补票" + -t.recommendArriveCount + "站",
                            }),
                        ],
                      }),
                      t.recommendArriveCount > 0 &&
                        (0, S.BX)(va.View, {
                          className: "list",
                          children: [
                            (0, S.tZ)(va.View, {
                              className: "station",
                              children: t.recommendArriveStation,
                            }),
                            (0, S.tZ)(va.View, {
                              className: "info",
                              children: "多抢" + t.recommendArriveCount + "站",
                            }),
                          ],
                        }),
                    ],
                  })
                : (0, S.tZ)(va.View, {});
            },
            Un = a(58789),
            Kn = a(52392),
            Wn = {
              nearStationInfo: 1,
              crossStationInfo: 2,
              recommendSeatInfo: 3,
            },
            Yn = { 1: 1, 2: 0, 3: 2 };
          var Qn = (0, X.$j)(function (e) {
              var t = e.planModel;
              return {
                content: t.recommendedScheme.recommendedSchemeBannerInfo,
                isCheckedList:
                  t.recommendedScheme.recommendedSchemeBannerCheckedList,
              };
            })(function (e) {
              var t = e.isCheckedList,
                a = e.content,
                n = [];
              for (var i in a) a[i] && ((a[i].type = i), n.push(a[i]));
              return (
                n.sort(function (e, t) {
                  return e.index - t.index;
                }),
                (0, m.useEffect)(function () {
                  var e;
                  U.ubtTrace(205920, {
                    exposureType: "normal",
                    bizKey: "z_detail_grab_fatj_module_show",
                    type: Yn[
                      Wn[null === (e = n[0]) || void 0 === e ? void 0 : e.type]
                    ],
                  });
                }, []),
                h.Z.isNotEmptyObj(a)
                  ? (0, S.tZ)(va.Swiper, {
                      nextMargin: n.length > 1 ? "48rpx" : "20rpx",
                      className: " _zL _i _FD _Cy",
                      onChange: function (e) {
                        var t;
                        U.ubtTrace(205920, {
                          exposureType: "normal",
                          bizKey: "z_detail_grab_fatj_module_show",
                          type: Yn[
                            Wn[
                              null === (t = n[e.detail.current]) || void 0 === t
                                ? void 0
                                : t.type
                            ]
                          ],
                        });
                      },
                      snapToEdge: !0,
                      children: n.map(function (e, a) {
                        return (0, S.tZ)(
                          va.SwiperItem,
                          {
                            children: (0, S.BX)(va.View, {
                              className: ""
                                .concat(
                                  " _zB _AL _pb _Cy _BL _Mb _CL _p -Ve",
                                  " "
                                )
                                .concat(1 === n.length ? "-We" : ""),
                              children: [
                                (0, S.BX)(va.View, {
                                  className: " _i _l",
                                  children: [
                                    (0, S.tZ)(va.View, {
                                      className: " _Xb _GG _nc _S",
                                      children: e.title,
                                    }),
                                    (0, S.tZ)(va.View, {
                                      className:
                                        " _Zg _Al _Ze _uG _O _Rj _kc _p -Xe",
                                      children: e.tag,
                                    }),
                                    "crossStationInfo" === e.type &&
                                      (null == e
                                        ? void 0
                                        : e.recommendArriveCount) < 0 &&
                                      (0, S.tZ)(Un.Z, {}),
                                  ],
                                }),
                                (0, S.BX)(va.View, {
                                  className: "scheme-bd ".concat(
                                    "crossStationInfo" === e.type
                                      ? "cross-station"
                                      : "no-cross-station"
                                  ),
                                  children: [
                                    "crossStationInfo" === e.type &&
                                      (0, S.tZ)(qn, { content: e }),
                                    "nearStationInfo" === e.type &&
                                      (0, S.tZ)(Kn.Z, { ticketInfo: e }),
                                    "recommendSeatInfo" === e.type &&
                                      (0, S.BX)(va.View, {
                                        className: " _i",
                                        children: [
                                          (0, S.tZ)(va.View, {
                                            className: " _sb _pq _Ua _U",
                                            children: e.seatName || "",
                                          }),
                                          e.price &&
                                            (0, S.tZ)(va.View, {
                                              className: " _oc _YE _Ua _U",
                                              children: "￥" + e.price || 0,
                                            }),
                                        ],
                                      }),
                                    (0, S.tZ)(va.Image, {
                                      src: "".concat(
                                        null != t && t[a]
                                          ? "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/06/icon_fill_20_checkbox_on.webp"
                                          : "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/06/icon_line_20_checkbox_off.webp"
                                      ),
                                      className: " _Ua _Ta",
                                      id: "AJDb",
                                      onClick: function () {
                                        U.ubtTrace(205922, {
                                          bizKey:
                                            "z_detail_grab_fatj_module_click",
                                          type: Yn[Wn[e.type]],
                                        }),
                                          (function (e, t) {
                                            var a = [];
                                            (a[t] = !0),
                                              U.getDispatch().planModel.setRecommendedScheme(
                                                {
                                                  recommendedSchemeBannerCheckedList:
                                                    a,
                                                  recommendedSchemeDrawerType:
                                                    e,
                                                  recommendedSchemeDrawerIsSelectFirst:
                                                    !0,
                                                }
                                              ),
                                              fa(D.recommendedSchemeDrawer);
                                          })(Wn[e.type], a);
                                      },
                                      webp: !0,
                                    }),
                                  ],
                                }),
                                (0, S.tZ)(va.View, {
                                  className: " _DL _Yq _EL",
                                }),
                                (0, S.tZ)(Ma.ZtRichText, {
                                  className: " _oc _nF _De _Q",
                                  nodes: e.desc || e.subTitle,
                                }),
                              ],
                            }),
                          },
                          a
                        );
                      }),
                    })
                  : (0, S.tZ)(S.HY, {})
              );
            }),
            $n = function (e, t, a, n) {
              var i =
                e &&
                e.candidateStatus &&
                ((1 === e.candidateStatus.code && a) ||
                  1 !== e.candidateStatus.code);
              return (0, S.tZ)(S.HY, {
                children:
                  !i &&
                  e &&
                  e.candidateStatus &&
                  !(16 === t || 17 === n || 18 === n) &&
                  (0, S.BX)(va.View, {
                    className: ""
                      .concat(" _sJ _pb _tJ _uJ _i _p -Dd", " ")
                      .concat(
                        4 === e.candidateStatus.code ||
                          7 === e.candidateStatus.code
                          ? "-Ed"
                          : ""
                      ),
                    children: [
                      (0, S.tZ)(va.View, {
                        className: " _j _yJ _mk _S -Fd",
                        children: e.candidateStatus.detailDesc,
                      }),
                      (0, S.tZ)(va.View, {
                        className: " _yJ _mk _S _i _l -Cd -Gd iconfont",
                        id: "AJDc",
                        onClick: function () {
                          var t;
                          U.ubtTrace(205914, {
                            bizKey: "z_hybq_houbu_module_click",
                            state:
                              null == e ||
                              null === (t = e.candidateStatus) ||
                              void 0 === t
                                ? void 0
                                : t.code,
                          }),
                            fa(D.houBuProgressPopVisible);
                        },
                        children:
                          4 === e.candidateStatus.code ||
                          7 === e.candidateStatus.code
                            ? "开启"
                            : "详情",
                      }),
                    ],
                  }),
              });
            },
            ei = function (e, t, a) {
              return (0, S.tZ)(S.HY, {
                children:
                  h.Z.isNotEmptyObj(t) &&
                  (0, S.tZ)(va.View, {
                    style: {
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "-22rpx",
                      marginBottom: "8rpx",
                    },
                    children: (0, S.tZ)(va.View, {
                      className: " _Fq _Rj _i _l _n",
                      children: (0, S.tZ)(va.Image, {
                        className: " _Rj _ka",
                        style: e ? "" : "transform: rotate(180deg);",
                        src: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/06/icon_linea_49_zhankai.webp",
                        id: "AJDd",
                        onClick: a,
                        webp: !0,
                      }),
                    }),
                  }),
              });
            },
            ti = (0, X.$j)(
              function (e) {
                var t,
                  a = e.pageModel,
                  n = e.grabOrderModel,
                  i = e.planModel,
                  r = e.t6Model;
                return {
                  studentCertificationInfo:
                    null === (t = oe(x.studentVerifyArea)) || void 0 === t
                      ? void 0
                      : t._jsonInfo,
                  isFoldRobTaskInfo: a.isFoldRobTaskInfo,
                  recommendedSchemeBannerInfo:
                    i.recommendedScheme.recommendedSchemeBannerInfo,
                  originalOrder: n.orderInfo.originalOrder,
                  grabHouBuInfo: n.candidateInfo.grabHouBuInfo,
                  faceType: r.faceType,
                  candidateTicketDetail: n.candidateInfo.candidateTicketDetail,
                  monitorStatus: n.orderInfo.monitorStatus,
                };
              },
              function (e) {
                return {
                  setIsFoldRobTaskInfo: e.pageModel.setIsFoldRobTaskInfo,
                };
              }
            )(function (e) {
              var t = e.studentCertificationInfo,
                a = e.isFoldRobTaskInfo,
                n = e.setIsFoldRobTaskInfo,
                i = e.originalOrder,
                r = e.recommendedSchemeBannerInfo,
                o = e.grabHouBuInfo,
                c = e.faceType,
                s = e.candidateTicketDetail,
                l = e.monitorStatus;
              return (0, S.BX)(S.HY, {
                children: [
                  t &&
                    [2, 9].includes(l) &&
                    (0, S.tZ)(va.Image, {
                      className: " _Oa _h _pJ _qJ _ht",
                      src: t.imgUrl,
                      onClick: Mt.Zs,
                    }),
                  (0, S.BX)(va.View, {
                    className: " _Ki _a _dc _Np _yc",
                    children: [
                      (0, S.tZ)(va.View, {
                        className: " _bd _rJ",
                        children: i ? "改签抢票任务" : "抢票任务",
                      }),
                      $n(o, c, s, l),
                      (0, S.tZ)(Hn, {
                        isFoldSomeTask: h.Z.isNotEmptyObj(r) && a,
                      }),
                      ei(a, r, function () {
                        n(!a);
                      }),
                      (0, S.tZ)(Qn, {}),
                    ],
                  }),
                ],
              });
            }),
            ai = a(69510),
            ni = _.default.isTieyou;
          var ii = m.default.memo(
            (0, X.$j)(function (e) {
              var t = e.grabOrderModel;
              return {
                content:
                  e.planModel.relativeAccountInfo.multiplyAccountGrabBannerInfo,
                monitorStatus: t.orderInfo.monitorStatus,
                propStyle: { margin: "20rpx" },
              };
            })(function (e) {
              var t = e.propStyle,
                a = e.content,
                n = e.monitorStatus,
                i = a || {},
                r = i.title,
                o = i.freeTag,
                c = i.successTag,
                s = i.subTitle,
                l = i.photos,
                d = i.maxBindCount,
                u = i.currentBindCount,
                p = (0, m.useState)(!1),
                f = (0, Pt.Z)(p, 2),
                h = f[0],
                g = f[1];
              return (
                (0, m.useEffect)(
                  function () {
                    u > 0 && g(!0);
                  },
                  [u]
                ),
                [2, 9].includes(n) && a
                  ? (0, S.BX)(va.View, {
                      className: " _Vb _dc _fN _Mb _gN",
                      style: t,
                      children: [
                        (0, S.BX)(va.View, {
                          className: " _hN _i _l",
                          children: [
                            (0, S.BX)(va.View, {
                              className: "tit-box",
                              children: [
                                (0, S.BX)(va.View, {
                                  className: " _i _l",
                                  children: [
                                    (0, S.tZ)(va.View, {
                                      className: " _Xb _oB _Ld _W",
                                      children: r,
                                    }),
                                    (0, S.tZ)(va.View, {
                                      className: " _Zg _oc _uG _iN _SM",
                                      children: o,
                                    }),
                                    (0, S.tZ)(va.View, {
                                      className: " _Zg _jN _Hi _Nt _qb _rF",
                                      children: c,
                                    }),
                                  ],
                                }),
                                (0, S.tZ)(va.View, {
                                  className: " _Km _Ma _Zp _eg _R",
                                  children: s,
                                }),
                              ],
                            }),
                            (0, S.tZ)(va.View, {
                              className: " _i _Sj _j",
                              children: new Array(d)
                                .fill(0)
                                .map(function (e, t) {
                                  var a = null == l ? void 0 : l[t];
                                  return (0,
                                  S.tZ)(va.View, { className: "".concat(" _mb _Tk _i _n _l _Vb _kN -ig", " index").concat(t), children: (0, S.tZ)(va.Image, { src: a || (ni ? "https://images3.c-ctrip.com/ztrip/train_zhu/icon_QP_rx_ty@3x.png" : "https://images3.c-ctrip.com/ztrip/train_zhu/icon_QP_rx_zx@3x.png"), className: " _kN _bc _cc" }) }, t);
                                }),
                            }),
                            (0, S.tZ)(va.View, {
                              className: " _Ee",
                              children:
                                u < d
                                  ? (0, S.tZ)(va.Button, {
                                      className:
                                        " _Og _Dz _ye _mb _nb _Gq _o _x _lN -jg",
                                      openType: "".concat(
                                        h && (0, ee.JO)() ? "share" : ""
                                      ),
                                      id: "AJEC",
                                      onClick: function () {
                                        h
                                          ? (0, ee.JO)() || pt()
                                          : (0, I.showToast)(
                                              "请先阅读并同意下方服务协议~"
                                            );
                                      },
                                      "data-flag": "account-relative",
                                      children: (0, S.tZ)(va.View, {
                                        children: "邀请",
                                      }),
                                    })
                                  : (0, S.BX)(va.View, {
                                      className: " _i _l _Ma _iu _Ua _U -kg",
                                      children: [
                                        (0, S.tZ)(va.Text, {
                                          children: "帮抢中",
                                        }),
                                        (0, S.tZ)(va.Text, {
                                          className: "ifont-arr iconfont",
                                        }),
                                      ],
                                    }),
                            }),
                          ],
                        }),
                        (0, S.tZ)(va.View, { className: " _mN _vC _Zf _gh" }),
                        (0, S.BX)(va.View, {
                          className: " _js _i _l _De _Q _Na",
                          children: [
                            (0, S.BX)(va.View, {
                              className: " _Ma _i",
                              id: "AJED",
                              onClick: function () {
                                g(u > 0 || !h);
                              },
                              children: [
                                (0, S.tZ)(va.Image, {
                                  src: h
                                    ? u > 0
                                      ? "https://images3.c-ctrip.com/ztrip/train_zhu/icon_select_ed_forbidden.png"
                                      : ni
                                      ? "https://images3.c-ctrip.com/ztrip/train_zhu/icon_select_ed_ty.png"
                                      : "https://images3.c-ctrip.com/ztrip/train_zhu/icon_select_ed_zx.png"
                                    : "https://images3.c-ctrip.com/ztrip/train_zhu/icon_select_normal.png",
                                  className: " _De _Ce _Va",
                                  webp: !0,
                                }),
                                (0, S.tZ)(va.View, { children: "阅读并同意" }),
                              ],
                            }),
                            (0, S.tZ)(va.View, {
                              className: " _Fc -lg",
                              id: "AJEE",
                              onClick: function () {
                                Ia.Z.twebview({
                                  data: {
                                    url: "https://pages.c-ctrip.com/ztrip/document/hybq_br_rule.html?appid=".concat(
                                      _.default.isTieyou ? "1002" : "1003"
                                    ),
                                  },
                                });
                              },
                              children: "《好友帮抢票相关须知》",
                            }),
                            (0, S.tZ)(va.View, {
                              className: " _Fc -mg",
                              id: "AJEF",
                              onClick: function () {
                                fa(D.multiplyAccountQADrawerVisible);
                              },
                              children: "常见问题",
                            }),
                          ],
                        }),
                      ],
                    })
                  : (0, S.tZ)(S.HY, {})
              );
            })
          );
          function ri(e) {
            var t = e.data;
            if (!t) return null;
            var a = t.link,
              n = t.icon,
              i = t.bannerTitle,
              r = t.bannerButtonName,
              o = i,
              c = t.describeBanner,
              s = r || "去领取",
              l =
                n ||
                "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/05/img_order_banner_icon.webp";
            return (0, S.BX)(va.View, {
              className: " _i _n _l _bN _Ki _dc _cN _yc -Pf -Qf",
              children: [
                (function (e) {
                  var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : "scaleToFill";
                  return (0, S.tZ)(va.Image, {
                    src: e,
                    webp: !0,
                    mode: t,
                    className: "-Rf",
                  });
                })(
                  "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/05/img_order_banner_coupon.webp"
                ),
                l &&
                  (0, S.tZ)(va.Image, {
                    src: l,
                    webp: !0,
                    mode: "aspectFit",
                    className: "-Sf",
                  }),
                (0, S.BX)(va.View, {
                  className: "-Uf",
                  children: [
                    (0, S.tZ)(va.View, {
                      className: "-Vf",
                      children: (0, S.tZ)(Ma.ZtRichText, {
                        nodes: o,
                        space: "nbsp",
                      }),
                    }),
                    (0, S.tZ)(va.View, { className: "-Wf", children: c }),
                  ],
                }),
                (0, S.tZ)(va.View, {
                  className: "-Tf",
                  id: "AJEB",
                  onClick: function () {
                    h.Z.commonNavigator(a);
                  },
                  children: s,
                }),
              ],
            });
          }
          var oi,
            ci = (0, X.$j)(function (e) {
              var t,
                a,
                n,
                i = e.grabOrderModel,
                r = e.pageModel;
              return {
                specialPersonGrabBoxInfo:
                  e.productModel.specificallyGrab.specialPersonGrabBoxInfo,
                monitorStatus: i.orderInfo.monitorStatus,
                showRobSubscription: r.subscribeInfo.showRobSubscription,
                showRobSubscriptionInfo:
                  r.subscribeInfo.showRobSubscriptionInfo,
                friendActivityInfo:
                  null === (t = oe(x.weixinDiversionArea)) ||
                  void 0 === t ||
                  null === (a = t._jsonInfo) ||
                  void 0 === a
                    ? void 0
                    : a.orderBanner,
                marketBigAmoutGiftsBannerInfo:
                  null === (n = oe(x.wxBigCouponArea)) || void 0 === n
                    ? void 0
                    : n._jsonInfo,
              };
            })(function (e) {
              var t = e.monitorStatus,
                a = e.friendActivityInfo,
                n = e.marketBigAmoutGiftsBannerInfo,
                i = e.showRobSubscription,
                r = e.showRobSubscriptionInfo,
                o = e.specialPersonGrabBoxInfo;
              return (0, S.BX)(S.HY, {
                children: [
                  o && (0, S.tZ)(ii, {}),
                  i &&
                    (0, S.tZ)(ai.Z, {
                      isTieyou: _.default.isTieyou,
                      buttonName: "提醒我",
                      subTitle: "实时掌握余票信息和订单状态",
                      sourceCode:
                        2 === t
                          ? "RobTicket_Module"
                          : 4 === t
                          ? "RobTicket_cancel_orderDetail"
                          : "OD_Module",
                      title:
                        2 === t || 9 === t ? "抢票进度通知" : "高峰期购票提醒",
                      tmplIds: r.tmpid,
                      confirm: function () {
                        wa();
                      },
                    }),
                  4 === t &&
                    _.default.isWechat &&
                    (0, S.tZ)(Xn.Z, { friendActivityInfo: a }),
                  n && (0, S.tZ)(ri, { data: n }),
                ],
              });
            }),
            si = m.default.memo(function (e) {
              var t = e.orderNumber,
                a = e.page,
                n = void 0 === a ? 0 : a,
                o = e.ubtTrace,
                c = void 0 === o ? function () {} : o,
                s = (0, m.useState)([]),
                l = (0, Pt.Z)(s, 2),
                d = l[0],
                u = l[1],
                _ = (0, m.useState)(""),
                p = (0, Pt.Z)(_, 2),
                f = p[0],
                h = p[1];
              (0, m.useEffect)(
                function () {
                  (0, K.LJ5)({ orderNumber: t, fromPage: n })
                    .then(function (e) {
                      1 == e.resultCode
                        ? (u(e.ScenceInfos), h(e.ChatScenceUrl))
                        : (u([]), h(""));
                    })
                    .catch(function () {});
                },
                [t]
              );
              var g = (function () {
                var e = (0, r.Z)(
                  (0, i.Z)().mark(function e(t, a) {
                    return (0, i.Z)().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            a &&
                              c("c_trn_z_10650060639", {
                                bizKey: "z_mini_ordDetail_IM_click",
                                IMType: a,
                              }),
                              (0, v.e)(t);
                          case 2:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t, a) {
                  return e.apply(this, arguments);
                };
              })();
              return (0, S.tZ)(va.View, {
                className: "train-faq ".concat(1 === n ? "new" : ""),
                children:
                  d &&
                  d.length > 0 &&
                  (0, S.BX)(va.View, {
                    className: "jcwt-list",
                    children: [
                      (0, S.BX)(va.View, {
                        className: "tit",
                        children: [
                          "常见问题",
                          f &&
                            (0 === n
                              ? (0, S.tZ)(va.View, {
                                  className: "more",
                                  id: "AJEI",
                                  onClick: function () {
                                    g(f);
                                  },
                                  children: "其它问题",
                                })
                              : (0, S.BX)(va.View, {
                                  className: "more-v2",
                                  id: "AJEJ",
                                  onClick: function () {
                                    g(f);
                                  },
                                  children: [
                                    (0, S.tZ)(va.Image, {
                                      className: "icon-more",
                                      src: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/09/qpcg/icon_20_kefu.png",
                                    }),
                                    (0, S.tZ)(va.View, {
                                      children: "联系客服",
                                    }),
                                  ],
                                })),
                        ],
                      }),
                      (0, S.tZ)(va.View, {
                        children: d.map(function (e, t) {
                          return (0, S.BX)(
                            va.View,
                            {
                              className: "item",
                              "data-item": e,
                              id: "AJEK",
                              onClick: function () {
                                g(e.ScenceUrl, e.ScenceContent);
                              },
                              children: [
                                (0, S.tZ)(va.View, {
                                  className: "cont",
                                  children: e.ScenceContent,
                                }),
                                (0, S.tZ)(va.Text, {
                                  className: "ifont-arr iconfont",
                                }),
                              ],
                            },
                            t
                          );
                        }),
                      }),
                    ],
                  }),
              });
            }),
            li = (0, X.$j)(function () {
              return { oid: U.getPage().oid };
            })(function (e) {
              var t = e.oid;
              return (0,
              S.tZ)(S.HY, { children: (0, S.tZ)(si, { orderNumber: t, page: 1 }) });
            }),
            di = (0, X.$j)(function (e) {
              return { cancelFlag: e.grabOrderModel.orderInfo.cancelFlag };
            })(function (e) {
              var t = e.cancelFlag;
              return (0,
              S.tZ)(S.HY, { children: !!t && (0, S.tZ)(va.View, { className: " _zo", children: (0, S.tZ)(va.Button, { className: " _a _Gc _Xc _I _Kc _dc color-primary", hoverClass: "btn-cancel_hover", id: "AJBS", onClick: ke, "data-ubt-key": "wx_orderdetail_cancelOrder", children: "取消任务" }) }) });
            }),
            ui = (0, X.$j)(function (e) {
              var t = e.grabOrderModel;
              return {
                payFlag: !!t.orderInfo.payFlag,
                priceDetail: t.priceDetail,
              };
            })(function (e) {
              var t = e.payFlag,
                a = e.priceDetail,
                n = (0, m.useState)(!1),
                i = (0, Pt.Z)(n, 2),
                r = i[0],
                o = i[1];
              return (0, S.BX)(va.View, {
                style: "min-height: 1px",
                children: [
                  t &&
                    (0, S.tZ)(va.View, {
                      className: ""
                        .concat(" _v _s _q _t _kD _lD _Nb _b _mD -wa", " ")
                        .concat(r ? "-xa" : ""),
                      id: "AJBP",
                      onClick: function () {
                        o(!1);
                      },
                      "data-ubt-key": "wx_orderdetail_hidePrice",
                      children: (0, S.tZ)(va.View, {
                        className: ""
                          .concat(
                            " _nD _oD _pD _a _qD _rD _v _sD _s _kD _t _Nd -ya",
                            "  "
                          )
                          .concat(r ? "-xa" : ""),
                        children: (0, S.tZ)(va.View, {
                          children:
                            a &&
                            a.detail.map(function (e) {
                              return (0,
                              S.BX)(va.View, { className: " _yc _p _ls _Xc _vD -za", children: [(0, S.tZ)(va.Text, { className: " _uD", children: e.key }), (0, S.tZ)(va.View, { className: " _I _bf _tD", children: (0, S.tZ)(va.Text, { children: e.value }) })] }, "index");
                            }),
                        }),
                      }),
                    }),
                  t &&
                    (0, S.BX)(va.View, {
                      className: " _Z _wD _a _ng _xD _yD _i _l",
                      children: [
                        (0, S.tZ)(va.Text, {
                          className: " _rk _bf _p _uh _j -Aa",
                          children: (null == a ? void 0 : a.totalPrice) || "",
                        }),
                        (0, S.BX)(va.View, {
                          className: ""
                            .concat(" _tD _Kc _E _Md -Ba", "  ")
                            .concat(r ? "-Ca" : ""),
                          id: "AJBQ",
                          onClick: function () {
                            o(!r);
                          },
                          "data-ubt-key": "wx_orderdetail_openPrice",
                          children: [
                            "明细",
                            (0, S.tZ)(va.Text, {
                              className: "ifont-arr iconfont",
                            }),
                          ],
                        }),
                        (0, S.tZ)(va.Button, {
                          className: " _rg _Gc _zD _Xc _Pd _b _AD -Da",
                          id: "AJBR",
                          onClick: xe,
                          "data-ubt-key": "wx_orderdetail_pay",
                          children: "去支付",
                        }),
                      ],
                    }),
                ],
              });
            }),
            _i = _.default.isTieyou,
            mi = (0, X.$j)(function (e) {
              var t = e.grabOrderModel;
              return {
                monitorStatus: t.orderInfo.monitorStatus,
                deleteFlag: t.orderInfo.deleteFlag,
              };
            })(function (e) {
              var t = e.monitorStatus,
                a = e.deleteFlag,
                n = !(1 === t || 2 === t || t > 6),
                i = !!a && !(7 === t || 8 === t);
              return (
                (0, m.useEffect)(
                  function () {
                    n && U.ubtTrace(195702);
                  },
                  [n]
                ),
                (0, S.tZ)(S.HY, {
                  children:
                    (n || i) &&
                    (0, S.BX)(va.View, {
                      className: " _cD _Vb _i _p _Zd",
                      children: [
                        i &&
                          (0, S.tZ)(va.Button, {
                            className: " _Ff -va  _j _dD _eD _oc",
                            id: "AJBN",
                            onClick: Pe,
                            "data-ubt-key": "c_train_wx_orderdetail_rob_delete",
                            children: "删除订单",
                          }),
                        n &&
                          (0, S.tZ)(va.Button, {
                            className: ""
                              .concat(" _j _fD _gD", " ")
                              .concat(_i ? " _y _b" : " _Jc _jD"),
                            hoverClass: "btn-cancel_hover",
                            id: "AJBO",
                            onClick: Me,
                            "data-ubt-key":
                              "c_train_wx_orderdetail_rob_buyagain",
                            children: "重新开始抢票",
                          }),
                      ],
                    }),
                })
              );
            }),
            pi = function () {
              return (0, S.BX)(S.HY, {
                children: [(0, S.tZ)(ui, {}), (0, S.tZ)(mi, {})],
              });
            },
            fi = (0, X.$j)(function (e) {
              return { pageLoading: e.pageModel.pageLoading };
            })(function (e) {
              var t = e.pageLoading;
              return (
                console.log("pageLoading", t),
                (0, S.BX)(S.HY, {
                  children: [
                    t && (0, S.tZ)(Na, {}),
                    !t &&
                      (0, S.BX)(va.View, {
                        className: ""
                          .concat(
                            _.default.isBaidu ? " _Vd _Wd _Xd" : "page",
                            " "
                          )
                          .concat(_.default.isTieyou ? " ty" : " zx"),
                        children: [
                          (0, S.BX)(va.View, {
                            className: " _Ob _Pb _j",
                            children: [
                              (0, S.tZ)(Ca, {}),
                              (0, S.BX)(va.View, {
                                className: " _Yd _p _Zd",
                                children: [
                                  (0, S.tZ)(Oa, {}),
                                  (0, S.tZ)(Vn, {}),
                                  (0, S.tZ)(Rn, {}),
                                  (0, S.tZ)(ti, {}),
                                  (0, S.tZ)(ci, {}),
                                  (0, S.tZ)(li, {}),
                                  (0, S.tZ)(di, {}),
                                  (0, S.tZ)(Za.Z, {}),
                                  (0, S.tZ)(va.View, {
                                    style: "height: 200rpx",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, S.tZ)(pi, {}),
                        ],
                      }),
                  ],
                })
              );
            }),
            hi = a(58676),
            gi = a(26676),
            bi = a(48792),
            wi =
              a.n(bi)()({
                properties: { isTieyou: { type: Boolean, value: !0 } },
                methods: {
                  hideBackdrop: function () {
                    this.triggerEvent("hideBackdrop");
                  },
                },
              })(
                (oi = (function (e) {
                  (0, l.Z)(a, e);
                  var t = (0, d.Z)(a);
                  function a() {
                    return (0, o.Z)(this, a), t.apply(this, arguments);
                  }
                  return (
                    (0, c.Z)(a, [
                      {
                        key: "render",
                        value: function () {
                          var e = this.data.isTieyou;
                          return (0, S.tZ)(va.View, {
                            className: "common-add-my-miniapp",
                            children: (0, S.BX)(va.View, {
                              className: "pop-full pop-full-guide",
                              children: [
                                (0, S.tZ)(va.Icon, {
                                  className:
                                    "icon-guide-arr " + (e ? "ty" : "zx"),
                                }),
                                (0, S.BX)(va.View, {
                                  className: "cont",
                                  children: [
                                    (0, S.BX)(va.View, {
                                      className: "add-txt",
                                      children: [
                                        "1. 点击右上角按钮",
                                        (0, S.tZ)(va.Image, {
                                          src:
                                            "http://images3.c-ctrip.com/zt/wechat/guide-" +
                                            (e ? "ty" : "zx") +
                                            "-4.png",
                                          className: "guide-dot",
                                        }),
                                        "选择“添加到我的小程序”",
                                      ],
                                    }),
                                    (0, S.tZ)(va.Image, {
                                      src:
                                        "http://images3.c-ctrip.com/zt/wechat/guide-" +
                                        (e ? "ty" : "zx") +
                                        "-6.png",
                                      className: "guide-6",
                                    }),
                                    (0, S.tZ)(va.View, {
                                      className: "add-txt",
                                      children:
                                        "2. 在微信首页下拉打开任务栏，可在【最近使用】和【我的小程序】中打开“" +
                                        (e ? "铁友" : "智行火车票") +
                                        "”小程序。",
                                    }),
                                    (0, S.tZ)(va.Image, {
                                      src:
                                        "http://images3.c-ctrip.com/zt/wechat/guide-" +
                                        (e ? "ty" : "zx") +
                                        "-7.png",
                                      className: "guide-7",
                                    }),
                                  ],
                                }),
                                (0, S.tZ)(va.Icon, {
                                  className: "icon-closed",
                                  id: "AACY",
                                  onClick: this.hideBackdrop,
                                }),
                              ],
                            }),
                          });
                        },
                      },
                    ]),
                    a
                  );
                })(m.default.Component))
              ) || oi,
            vi = a(61896),
            Zi = function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : [],
                t = [],
                a = {};
              return (
                e.forEach(function (e) {
                  var t;
                  null === (t = e.SeatList) ||
                    void 0 === t ||
                    t.forEach(function (e) {
                      a[e.SeatName]
                        ? parseFloat(e.SeatPrice) > a[e.SeatName].SeatPrice &&
                          (a[e.SeatName] = {
                            SeatPrice: parseFloat(e.SeatPrice),
                            ShowSeatPrice: Number.parseFloat(e.ShowSeatPrice),
                          })
                        : (a[e.SeatName] = {
                            SeatPrice: parseFloat(e.SeatPrice),
                            ShowSeatPrice: Number.parseFloat(e.ShowSeatPrice),
                          });
                    });
                }),
                Object.keys(a).forEach(function (e) {
                  t.push((0, L.Z)((0, L.Z)({}, a[e]), {}, { SeatName: e }));
                }),
                t
              );
            },
            Ni = m.default.memo(function (e) {
              var t,
                a = e.isTieyou,
                n = e.visible,
                i = e.chosenTrainList,
                r = e.chosenSeatStr,
                o = void 0 === r ? "" : r,
                c = e.mainTrainSeatName,
                s = void 0 === c ? "" : c,
                l = e.onClose,
                d = void 0 === l ? function () {} : l,
                u = e.onConfirm,
                _ = void 0 === u ? function () {} : u,
                p = (0, m.useState)(o.split(",")),
                f = (0, Pt.Z)(p, 2),
                h = f[0],
                g = f[1];
              (t = Array.isArray(s) ? s : [s]),
                (0, m.useEffect)(
                  function () {
                    g(n ? o.split(",") : []);
                  },
                  [o, n]
                );
              var b = [],
                w = [];
              i.forEach(function (e) {
                var t;
                ["C", "D", "G"].includes(
                  null === (t = e.TrainNumber) || void 0 === t ? void 0 : t[0]
                )
                  ? b.push(e)
                  : w.push(e);
              });
              var v = Zi(i),
                Z = Zi(b),
                N = Zi(w),
                T = {};
              Z.forEach(function (e) {
                "无座" === e.SeatName &&
                  (!T.SeatPrice || e.SeatPrice > T.SeatPrice) &&
                  Object.assign(T, e);
              }),
                N.forEach(function (e) {
                  "无座" === e.SeatName &&
                    (!T.SeatPrice || e.SeatPrice > T.SeatPrice) &&
                    Object.assign(T, e);
                });
              var y = function (e) {
                  t.indexOf(e) > -1 ||
                    g(function (t) {
                      return t.indexOf(e) > -1
                        ? t.filter(function (t) {
                            return t !== e;
                          })
                        : [].concat((0, Fe.Z)(t), [e]);
                    });
                },
                V = function (e) {
                  return t.includes(e)
                    ? "https://images3.c-ctrip.com/ztrip/train_zhu/icon_select_ed_forbidden.png"
                    : h.includes(e)
                    ? "https://images3.c-ctrip.com/ztrip/train_zhu/icon_select_ed_".concat(
                        a ? "ty" : "zx",
                        ".png"
                      )
                    : "https://images3.c-ctrip.com/ztrip/train_zhu/icon_select_normal.png";
                };
              return (0, S.BX)(Ma.ZtDrawer, {
                className: "seat-selector-drawer",
                show: n,
                onWrapClose: d,
                onClose: d,
                maxHeight: "80%",
                children: [
                  (0, S.tZ)(va.View, {
                    className: "hd",
                    children: (0, S.tZ)(va.View, {
                      className: "tit",
                      children: "选择座席(建议多选)",
                    }),
                  }),
                  (0, S.BX)(va.View, {
                    className: "bd",
                    children: [
                      (0, S.BX)(va.View, {
                        className: "tips",
                        children: [
                          (0, S.tZ)(va.View, {
                            className: "tip",
                            children: "多选几个座席，抢票成功率更高。",
                          }),
                          (0, S.tZ)(va.View, {
                            className: "tip",
                            children:
                              "选择后暂收最高票价，出票后根据情况退还差额",
                          }),
                        ],
                      }),
                      T &&
                        T.SeatName &&
                        (0, S.BX)(va.View, {
                          className: "no-seat",
                          id: "AAEG",
                          onClick: function () {
                            return y(T.SeatName);
                          },
                          children: [
                            (0, S.tZ)(va.View, {
                              className: "name",
                              children: T.SeatName,
                            }),
                            (0, S.BX)(va.View, {
                              className: "price",
                              children: ["¥", T.ShowSeatPrice || T.SeatPrice],
                            }),
                            (0, S.tZ)(va.Image, {
                              className: "icon-checkbox",
                              src: V(T.SeatName),
                            }),
                          ],
                        }),
                      (null == Z
                        ? void 0
                        : Z.filter(function (e) {
                            return "无座" != e.SeatName;
                          }).length) > 0 &&
                        (0, S.BX)(va.View, {
                          className: "CDG-train",
                          children: [
                            (0, S.tZ)(va.View, {
                              className: "tit",
                              children: "选择高铁/动车坐席",
                            }),
                            (0, S.tZ)(va.View, {
                              className: "seat-box",
                              children: Z.filter(function (e) {
                                return "无座" != e.SeatName;
                              }).map(function (e) {
                                return (0, S.BX)(
                                  va.View,
                                  {
                                    className: "seat-info",
                                    id: "AAEH",
                                    onClick: function () {
                                      return y(e.SeatName);
                                    },
                                    children: [
                                      (0, S.tZ)(va.View, {
                                        className: "name",
                                        children: e.SeatName,
                                      }),
                                      (0, S.BX)(va.View, {
                                        className: "price",
                                        children: [
                                          "¥",
                                          e.ShowSeatPrice || e.SeatPrice,
                                        ],
                                      }),
                                      (0, S.tZ)(va.Image, {
                                        className: "icon-checkbox",
                                        src: V(e.SeatName),
                                      }),
                                    ],
                                  },
                                  e.SeatName
                                );
                              }),
                            }),
                          ],
                        }),
                      (null == N
                        ? void 0
                        : N.filter(function (e) {
                            return "无座" != e.SeatName;
                          }).length) > 0 &&
                        (0, S.BX)(va.View, {
                          className: "no-CDG-train",
                          children: [
                            (0, S.tZ)(va.View, {
                              className: "tit",
                              children: "选择普快/特快座席",
                            }),
                            (0, S.tZ)(va.View, {
                              className: "seat-box",
                              children: N.filter(function (e) {
                                return "无座" != e.SeatName;
                              }).map(function (e) {
                                return (0, S.BX)(
                                  va.View,
                                  {
                                    className: "seat-info",
                                    id: "AAEI",
                                    onClick: function () {
                                      return y(e.SeatName);
                                    },
                                    children: [
                                      (0, S.tZ)(va.View, {
                                        className: "name",
                                        children: e.SeatName,
                                      }),
                                      (0, S.BX)(va.View, {
                                        className: "price",
                                        children: [
                                          "¥",
                                          e.ShowSeatPrice || e.SeatPrice,
                                        ],
                                      }),
                                      (0, S.tZ)(va.Image, {
                                        className: "icon-checkbox",
                                        src: V(e.SeatName),
                                      }),
                                    ],
                                  },
                                  e.SeatName
                                );
                              }),
                            }),
                          ],
                        }),
                    ],
                  }),
                  (0, S.BX)(va.View, {
                    className: "seat-btn-box",
                    children: [
                      (0, S.tZ)(va.Button, {
                        className: "btn btn-cancel",
                        id: "AAEJ",
                        onClick: d,
                        children: "取消",
                      }),
                      (0, S.tZ)(va.Button, {
                        className: "btn btn-confirm",
                        id: "AAEK",
                        onClick: function () {
                          return (function (e) {
                            if (
                              -1 === e.indexOf("无座") &&
                              (null == Z
                                ? void 0
                                : Z.filter(function (e) {
                                    return "无座" != e.SeatName;
                                  }).length) > 0 &&
                              -1 ===
                                Z.findIndex(function (t) {
                                  return e.includes(t.SeatName);
                                })
                            )
                              (0, I.showToast)("请选择高铁/动车座席");
                            else if (
                              -1 === e.indexOf("无座") &&
                              (null == N
                                ? void 0
                                : N.filter(function (e) {
                                    return "无座" != e.SeatName;
                                  }).length) > 0 &&
                              -1 ===
                                N.findIndex(function (t) {
                                  return e.includes(t.SeatName);
                                })
                            )
                              (0, I.showToast)("请选择普快/特快座席");
                            else {
                              var t = v.map(function (t) {
                                return {
                                  ShowSeatPrice: t.ShowSeatPrice,
                                  SeatPrice: t.SeatPrice,
                                  SeatName: t.SeatName,
                                  selected: e.includes(t.SeatName),
                                };
                              });
                              _(t);
                            }
                          })(h);
                        },
                        children: "确定",
                      }),
                    ],
                  }),
                ],
              });
            }),
            Ii = m.default.memo(
              (0, X.$j)(function (e) {
                var t = e.grabOrderModel;
                return {
                  chosenTrainList: t.orderInfo.chosenTrainList,
                  hasSelectedSeatStr: t.ticketInfo.seatType,
                };
              })(function (e) {
                var t = e.visible,
                  a = e.chosenTrainList,
                  n = e.hasSelectedSeatStr,
                  i = void 0 === n ? "" : n;
                return (
                  console.log("SeatSelectorDrawerWrapper", a, i),
                  (0, S.tZ)(Ni, {
                    visible: t,
                    chosenTrainList: a,
                    chosenSeatStr: i,
                    mainTrainSeatName: i,
                    onClose: pa,
                    onConfirm: yt,
                  })
                );
              })
            ),
            Si = a(81380),
            Ti = a(67133),
            yi = a.n(Ti),
            Vi = a(19926),
            Ci = m.default.memo(
              (0, X.$j)(function (e) {
                var t = e.grabOrderModel;
                return {
                  leaveDate: t.ticketInfo.leaveDate,
                  dateInfo: (null == t ? void 0 : t.dateInfo) || {},
                  trainInfo: (null == t ? void 0 : t.trainInfo) || {},
                  isShowModal: (null == t ? void 0 : t.isShowModal) || !1,
                };
              })(function (e) {
                var t = e.visible,
                  a = e.leaveDate,
                  n = void 0 === a ? "" : a,
                  i = Ka.Z.getNow("YYYY-MM-DD"),
                  r = N()(i).add(59, "day").format("YYYY-MM-DD"),
                  o = (0, m.useMemo)(
                    function () {
                      return n.split(",");
                    },
                    [n]
                  );
                return (0, S.tZ)(Si.Z, {
                  visible: t,
                  beginDate: i,
                  endDate: r,
                  tip: "<span style='font-weight:500;font-family:PingFangSC-Medium;color:#FD8700;'>温馨提示：</span>抢票高峰，多选几个日期，成功率更高",
                  preRobDays: 60,
                  hasSelectedDateList: o,
                  mainTrainDate: o,
                  maxOtherDatesLength: 3,
                  maxIntervalDays: 4,
                  onClose: pa,
                  onConfirm: function () {
                    var t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : [],
                      a = e.dateInfo,
                      n = e.trainInfo,
                      i = e.isShowModal,
                      r = t.join(",");
                    if (
                      null != a &&
                      a.currLeaveDate &&
                      r !== (null == a ? void 0 : a.currLeaveDate) &&
                      !1 === i &&
                      !0 === (null == n ? void 0 : n.isEditor) &&
                      null != n &&
                      n.oldStationInfos
                    ) {
                      var o =
                        (null == n ? void 0 : n.currentStationInfos) || [];
                      console.log(o, "currentStationInfos");
                      var c = (null == n ? void 0 : n.oldStationInfos) || [],
                        s = "".concat(null == a ? void 0 : a.currLeaveDate);
                      if (Array.isArray(o) && o.length > 0) {
                        var l = c.filter(function (e) {
                            return o.every(function (t) {
                              return (
                                ""
                                  .concat(t.departTime, "-")
                                  .concat(t.trainNumber, "-")
                                  .concat(t.departStation) !==
                                ""
                                  .concat(e.departTime, "-")
                                  .concat(e.trainNumber, "-")
                                  .concat(e.departStation)
                              );
                            });
                          }),
                          d = yi().isShowModal(l, o, r, r);
                        null != d && d.isShowModal
                          ? (0, I.getCurrentPage)().showCommonDrawer({
                              hideTitle: !0,
                              hideClose: !0,
                              maskClose: !1,
                              content: function (e) {
                                var a = e.onClose;
                                return (0, S.tZ)(Vi.Z, {
                                  content: d.showMsg,
                                  pageType: "日期选择页",
                                  onAdd: function () {
                                    Vt(t, { isShowModal: !0 }), a();
                                  },
                                  onClose: function () {
                                    Vt(s.split(","), { isShowModal: !0 }), a();
                                  },
                                });
                              },
                              className: "stride-train-drawer",
                            })
                          : Vt(t, { isShowModal: !1 });
                      } else Vt(t, { isShowModal: !1 });
                    } else Vt(t, { isShowModal: !1 });
                  },
                });
              })
            ),
            Di = a(92959),
            ki = m.default.memo(
              (0, X.$j)(function (e) {
                var t,
                  a,
                  n,
                  i,
                  r = e.grabOrderModel,
                  o = e.planModel,
                  c = (null == r ? void 0 : r.ticketInfo) || {},
                  s =
                    null == c || null === (t = c.trainNo) || void 0 === t
                      ? void 0
                      : t.split(","),
                  l =
                    (null == s ? void 0 : s.length) > 1
                      ? "等".concat(null == s ? void 0 : s.length, "个车次")
                      : "";
                return {
                  topTitle: "保障乘坐<font color='#FFF194'>「"
                    .concat(null == s ? void 0 : s[0], "」")
                    .concat(l, "；")
                    .concat(
                      null == c || null === (a = c.fromStation) || void 0 === a
                        ? void 0
                        : a.name,
                      "站</font>上车，<font color='#FFF194'>"
                    )
                    .concat(
                      null == c || null === (n = c.toStation) || void 0 === n
                        ? void 0
                        : n.name,
                      "站</font>下车"
                    ),
                  content:
                    null === (i = o.promiseCarInfo) || void 0 === i
                      ? void 0
                      : i.promiseToast,
                  seatNameList: r.ticketInfo.seatType.split(","),
                  onConfirm: function (e) {
                    pa(),
                      (function () {
                        var e =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : [],
                          t = U.getDispatch(),
                          a = { updatedCrossStationsInfos: e };
                        Ve(a).then(function (e) {
                          e &&
                            e.success &&
                            t.planModel.setPromiseCarInfo({
                              showPromiseCarTip: !0,
                            });
                        });
                      })(e);
                  },
                  onClose: pa,
                  ubtTrace: U.ubtTrace,
                };
              })(Di.Z)
            ),
            Bi = m.default.memo(
              (0, X.$j)(function (e) {
                var t = e.planModel.promiseCarInfo,
                  a = void 0 === t ? {} : t;
                return {
                  content: a.detailRolls,
                  isDisplayPromiseCar: a.isDisplayPromiseCar,
                  promiseToast: a.promiseToast,
                  promiseCarRecommendInfo: a.promiseCarRecommendInfo,
                  onClick: function () {
                    fa(D.promiseIntoCarDrawer);
                  },
                };
              })(function (e) {
                var t,
                  a,
                  n = e.content,
                  i = e.isDisplayPromiseCar,
                  r = e.promiseToast,
                  o = e.promiseCarRecommendInfo,
                  c = e.onClick,
                  s = void 0 === c ? function () {} : c,
                  l = (0, m.useState)("close"),
                  d = (0, Pt.Z)(l, 2),
                  u = d[0],
                  _ = d[1],
                  p =
                    i &&
                    1 !== (null == o ? void 0 : o.selected) &&
                    (null == r || null === (t = r.plans) || void 0 === t
                      ? void 0
                      : t.length);
                (0, m.useEffect)(function () {
                  setTimeout(function () {
                    _("open");
                  }, 3e3),
                    p &&
                      U.ubtTrace(205910, {
                        exposureType: "actionbar",
                        bizKey: "z_guarantee_plan_actionbar_show",
                      });
                }, []);
                return i &&
                  1 !== (null == o ? void 0 : o.selected) &&
                  null != r &&
                  null !== (a = r.plans) &&
                  void 0 !== a &&
                  a.length
                  ? (0, S.BX)(va.View, {
                      className: " _v _fG _gG _hG _i",
                      children: [
                        (0, S.tZ)(va.View, {
                          className: " _Ae _Vf _iG _p _ki _kc",
                          id: "AJCH",
                          onClick: function () {
                            "close" === u && _("open");
                          },
                          children: (0, S.tZ)(va.Image, {
                            src: "https://images3.c-ctrip.com/ztrip/train.xin/2021_11/float_little@3x.png",
                            className: ""
                              .concat(" _eg _Qb _u _jG _kG _lG -Rb", " ")
                              .concat("open" === u ? "-Sb" : "-Tb"),
                          }),
                        }),
                        (0, S.BX)(va.View, {
                          className: ""
                            .concat(" _Ae _mG _nG _p _oG _pG -Ub", " ")
                            .concat("close" === u ? "-Sb" : ""),
                          children: [
                            (0, S.tZ)(va.Swiper, {
                              className: "-Vb  _u _qG _rG _Rj _sG",
                              autoplay: "true",
                              vertical: "true",
                              inter: !0,
                              val: "4000",
                              circular: "true",
                              children:
                                n &&
                                n.map(function (e) {
                                  return (0,
                                  S.tZ)(va.SwiperItem, { children: (0, S.tZ)(va.View, { className: " _sG _Ym _yc _Xm _qb _wF _tj", children: e }) }, e);
                                }),
                            }),
                            (0, S.tZ)(va.View, {
                              className: " _u _q _s _t _r",
                              id: "AJCI",
                              onClick: function (e) {
                                U.ubtTrace(205914, {
                                  bizKey: "z_guarantee_plan_see_click",
                                }),
                                  e.stopPropagation(),
                                  s();
                              },
                              children: (0, S.tZ)(va.View, {
                                className: " _u _t _q _De _Ce",
                                id: "AJCJ",
                                onClick: function (e) {
                                  e.stopPropagation(), _("close");
                                },
                              }),
                            }),
                          ],
                        }),
                      ],
                    })
                  : (0, S.tZ)(va.View, {});
              })
            ),
            xi = (function (e) {
              (0, l.Z)(a, e);
              var t = (0, d.Z)(a);
              function a() {
                return (0, o.Z)(this, a), t.apply(this, arguments);
              }
              return (
                (0, c.Z)(a, [
                  {
                    key: "prePayAddMiniapp",
                    value: function () {
                      $.sf.setAttr("prepaySucAddMini", "hasClicked"),
                        fa(D.addToMyMiniappGuide);
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var e = this.props.data || {},
                        t = e.showType,
                        a = e.title;
                      return "prepay-success-guide-popup" !== t
                        ? (0, S.tZ)(va.View, {})
                        : (0, S.tZ)(va.View, {
                            className:
                              " _Z _Y _rD _v _nD _s _q _t _r -Kb -Lb " +
                              (_.default.isTieyou ? "ty" : "zx"),
                            children: (0, S.BX)(va.View, {
                              className: " _mE _AE",
                              children: [
                                (0, S.tZ)(va.View, {
                                  className:
                                    " _mD _v _q _s _Nb _Z _Y _NE -Pb -Lb",
                                  id: "AJBw",
                                  onClick: pa,
                                }),
                                (0, S.BX)(va.View, {
                                  className: " _QF _RF _SF _TF _a _dc",
                                  children: [
                                    (0, S.tZ)(va.Icon, {
                                      className:
                                        " _fg _UF _VF _WF _u _yi _XF _xi -Mb",
                                    }),
                                    (0, S.BX)(va.View, {
                                      className: " _YF",
                                      children: [
                                        (0, S.tZ)(va.View, {
                                          className: " _o _Dv _Xl",
                                          children: a,
                                        }),
                                        (0, S.BX)(va.View, {
                                          className: " _o _H _W _Nd",
                                          children: [
                                            "将" +
                                              (_.default.isTieyou
                                                ? "铁友"
                                                : "智行火车票"),
                                            (0, S.tZ)(va.Text, {
                                              className: " _bf",
                                              children: "添加到【我的小程序】",
                                            }),
                                            "，查看订单更方便！",
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, S.tZ)(va.Button, {
                                      className:
                                        " _lc _bg _ZF _Jc _b _J _qc -Nb -Ob",
                                      hoverClass: "btn-add_hover",
                                      "data-ubt-key":
                                        "wx_orderdetail_toAddMiniappGuide",
                                      id: "AJBx",
                                      onClick: this.prePayAddMiniapp,
                                      children: "去添加",
                                    }),
                                  ],
                                }),
                                (0, S.tZ)(va.Icon, {
                                  className:
                                    " _Vf _Gc _u _RF _yi _Mb _aG _bG _cG -Qb -Qb -Qb",
                                  id: "AJBy",
                                  onClick: pa,
                                }),
                              ],
                            }),
                          });
                    },
                  },
                ]),
                a
              );
            })(m.default.Component),
            Pi = a(45307),
            Mi = m.default.memo(
              (0, X.$j)(function (e) {
                return {
                  subscribeModalInfo:
                    e.pageModel.subscribeInfo.subscribeModalInfo,
                };
              })(function (e) {
                var t = e.visible,
                  a = e.subscribeModalInfo,
                  n = e.onClose,
                  i = void 0 === n ? function () {} : n;
                return (0, S.tZ)(Pi.Z, {
                  show: t,
                  info: a,
                  onSuccess: function () {
                    st();
                  },
                  onFail: i,
                  onCancel: i,
                  onProcess: i,
                });
              })
            ),
            Ai = a(25958),
            Xi = m.default.memo(function (e) {
              var t = e.show,
                a = void 0 !== t && t;
              return (0,
              S.tZ)(Ai.Z, { show: a, onClose: pa, propStyle: "padding: 20rpx", ubtTrace: function () {}, children: (0, S.BX)(va.View, { className: " _Ya _i _k _l", children: [(0, S.tZ)(va.View, { className: " _ok _xF", children: "预约票秒杀攻略" }), (0, S.BX)(va.View, { className: " _Nd _G _yF", children: ["建议您在开售前打开", (0, S.BX)(va.Text, { className: "color-primary", children: ["“", _.default.isTieyou ? "铁友" : "智行", "”享受专属秒杀通道。"] }), "专属秒杀通道成功率更高！出行更有保障！"] }), (0, S.BX)(va.Button, { className: "".concat(" _Z _zF _U _AF -Bb", " ").concat(_.default.isTieyou ? "ty" : "zx"), openType: "contact", children: [(0, S.tZ)(va.View, { className: " _b _ed", children: "了解详情" }), (0, S.tZ)(va.View, { className: " _b _BF", children: "点击跳转至客服消息，回复'6'了解" })] })] }) });
            }),
            zi = m.default.memo(
              (0, X.$j)(function () {
                var e;
                return {
                  cancelHotelSpeedGrabInfo:
                    null === (e = ce("grabCancelHotelToast")) || void 0 === e
                      ? void 0
                      : e._jsonInfo,
                };
              })(function (e) {
                var t = e.visible,
                  a = void 0 !== t && t,
                  n = e.cancelHotelSpeedGrabInfo,
                  i = void 0 === n ? null : n;
                if (!i) return (0, S.tZ)(S.HY, {});
                return (0, S.tZ)(Ai.Z, {
                  show: a,
                  propStyle: "background: transparent;",
                  hiddenCloseIcon: "true",
                  children: (0, S.BX)(va.View, {
                    className: " _Pi _Kd _be _GD _p _kc _Mb _o",
                    children: [
                      (0, S.tZ)(va.View, {
                        className: " _tc _sb _rr _bc _Oc",
                        children: i.title,
                      }),
                      (0, S.tZ)(va.View, {
                        className: " _tc _oc _HD _U",
                        children: i.subTitle,
                      }),
                      (0, S.BX)(va.View, {
                        className: " _i _m",
                        children: [
                          (0, S.tZ)(va.View, {
                            className: " _yd _vi _Gc _uD _Xc _oc _ID -Fa",
                            id: "AJBV",
                            onClick: pa,
                            children: i.content ? i.content[0] : "我知道了",
                          }),
                          (0, S.tZ)(va.View, {
                            className: " _yd _vi _Gc _uD _Xc _oc _ID -Fa -Ga",
                            id: "AJBW",
                            onClick: function () {
                              var e = h.Z.parseQuery(i.jumpUrl);
                              !(function (e) {
                                e
                                  ? U.navigateTo({
                                      url:
                                        "/pages/hotel/order/order?orderId=" + e,
                                    })
                                  : (0, I.showToast)("跳转酒店订单失败");
                              })(null == e ? void 0 : e.orderId);
                            },
                            children: i.content ? i.content[1] : "去查看",
                          }),
                        ],
                      }),
                    ],
                  }),
                });
              })
            ),
            Oi = m.default.memo(function (e) {
              var t = e.show,
                a = void 0 !== t && t;
              return (0,
              S.tZ)(va.View, { children: a && (0, S.BX)(S.HY, { children: [(0, S.tZ)(va.View, { className: " _v _s _q _t _r _em _Rs _yc", id: "AJBX", onClick: pa }), (0, S.BX)(va.View, { className: " _o _v _Pi _yi _Jn _a _GD _be _gl _JD _Mb", children: [(0, S.tZ)(va.View, { className: " _Dv _Oc", children: "车票已取消" }), (0, S.tZ)(va.View, { className: " _KD _G _T _Nd", children: "原方案继续抢票中，后续不会为您推荐其他车次" }), (0, S.tZ)(va.View, { className: " _LD _Ii _MD _E _R _vi", children: "当前方案出票成功率较低，建议您多选抢票方案，提升抢票成功率" }), (0, S.tZ)(va.Button, { className: " _Fa _Gc _ND _Xc _tb btn-primary", id: "AJBY", onClick: pa, children: "我知道了" })] })] }) });
            }),
            Gi = m.default.memo(function (e) {
              var t = e.selectedAimIndex,
                a = void 0 === t ? 0 : t,
                n = e.toStationName,
                i = void 0 === n ? "" : n,
                r = e.chooseAim,
                o = void 0 === r ? function () {} : r,
                c = e.setSubscribe,
                s = void 0 === c ? function () {} : c,
                l = e.shareToPengYouQuan,
                d = void 0 === l ? function () {} : l,
                u = e.onClose,
                p = void 0 === u ? function () {} : u,
                f = (0, m.useState)(a),
                h = (0, Pt.Z)(f, 2),
                g = h[0],
                b = h[1],
                w = _.default.isTieyou,
                v = [
                  "去".concat(i || ""),
                  "回家",
                  "去远方",
                  "去学校",
                  "去你心里",
                ],
                Z = (0, m.useState)(v[a] || ""),
                N = (0, Pt.Z)(Z, 2),
                I = N[0],
                T = N[1];
              (0, m.useEffect)(
                function () {
                  var e = v[a] || "";
                  T(e);
                },
                [g]
              );
              return (0, S.tZ)(Ma.ZtDrawer, {
                show: !0,
                className: "grab-ss-drawer",
                onWrapClose: p,
                onClose: p,
                children: (0, S.BX)(va.View, {
                  className: "pop-share-friend",
                  children: [
                    (0, S.tZ)(va.Image, {
                      className: "share-bg",
                      src: "".concat(
                        w
                          ? "https://pic.c-ctrip.com/train/zt/wechat/share-friend-top-ty.png"
                          : "https://pic.c-ctrip.com/train/zt/wechat/share-friend-top-zx.png"
                      ),
                    }),
                    (0, S.tZ)(va.View, {
                      className: "pop-share-friend-hd",
                      children: (0, S.BX)(va.View, {
                        className: "txt",
                        children: ["分享给好友可随机得1-20个", ne.Z.SPEED_PACK],
                      }),
                    }),
                    (0, S.BX)(va.View, {
                      className: "pop-share-friend-bd",
                      children: [
                        (0, S.tZ)(va.View, {
                          className: "txt",
                          children: "请选择您所要分享的文字内容：",
                        }),
                        (0, S.BX)(va.View, {
                          className: "tit",
                          children: [
                            (0, S.tZ)(va.Text, {
                              className: "color-primary underline",
                              children: I,
                            }),
                            "的火车票太难抢啦，需要你助我一臂之力！",
                          ],
                        }),
                        (0, S.tZ)(va.View, {
                          className: "friend-tag",
                          children: v.map(function (e, t) {
                            return (0, S.tZ)(
                              va.View,
                              {
                                className: "item ".concat(
                                  g === t ? (w ? "ty" : "zx") : ""
                                ),
                                id: "AJAp",
                                onClick: function () {
                                  return (function (e) {
                                    b(e), o(e);
                                  })(t);
                                },
                                children: e,
                              },
                              t
                            );
                          }),
                        }),
                      ],
                    }),
                    (0, S.BX)(va.View, {
                      className: "pop-share-friend-btn",
                      children: [
                        (0, ee.JO)() &&
                          (0, S.BX)(va.Button, {
                            className: "btn-wechat",
                            openType: "share",
                            id: "AJAq",
                            onClick: s,
                            children: [
                              (0, S.tZ)(va.Text, {
                                className: "ifont-wechat iconfont",
                              }),
                              "微信",
                            ],
                          }),
                        (0, S.BX)(va.Button, {
                          className: "btn-primary",
                          id: "AJAr",
                          onClick: d,
                          children: [
                            (0, S.tZ)(va.Text, {
                              className: "ifont-pyq iconfont",
                            }),
                            "保存图片分享",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              });
            }),
            Li = m.default.memo(
              (0, X.$j)(function (e) {
                var t = e.grabOrderModel,
                  a = e.pageModel;
                return {
                  toStationName: t.ticketInfo.toStation.name,
                  selectedAimIndex: a.shareInfo.shareIndex,
                };
              })(function (e) {
                var t = e.toStationName,
                  a = e.selectedAimIndex;
                return (0,
                S.tZ)(Gi, { selectedAimIndex: a, toStationName: t, chooseAim: function () {}, setSubscribe: ct, shareToPengYouQuan: mt, onClose: pa });
              })
            ),
            Fi = (0, X.$j)(function (e) {
              return {
                houBuOrderDetailInfo:
                  e.grabOrderModel.candidateInfo.houBuOrderDetailInfo,
              };
            })(function (e) {
              var t = e.isShow,
                a = e.houBuOrderDetailInfo;
              return (0, S.BX)(S.HY, {
                children: [
                  (0, S.tZ)(va.View, {
                    className: ""
                      .concat(" _mD _v _q _s _Nb _Z _Y _NE -ib", " ")
                      .concat(t ? "-jb" : ""),
                    id: "AJBk",
                    onClick: pa,
                    onTouchMove: function () {},
                  }),
                  (0, S.tZ)(va.View, {
                    className: ""
                      .concat(
                        " _v _s _sD _t _r _nD _oD _OE _pD _a _rn _rD -kb",
                        " "
                      )
                      .concat(t ? "-jb" : ""),
                    children:
                      t &&
                      a &&
                      (0, S.BX)(va.View, {
                        className: " _tB _yc _PE _QE _pv _hl",
                        children: [
                          (0, S.BX)(va.View, {
                            className: " _RE _p",
                            children: [
                              (0, S.BX)(va.View, {
                                className: " _i _n _l",
                                children: [
                                  (0, S.tZ)(va.Image, {
                                    src: "https://images3.c-ctrip.com/zt/robTicket/common/icon_hbcg.png",
                                    className: " _ms _Ld",
                                  }),
                                  (0, S.tZ)(va.View, {
                                    className: " _cf _Xb _Lt _Ld _W",
                                    children: a.candidateTitle || "待兑现车次",
                                  }),
                                ],
                              }),
                              (0, S.tZ)(va.View, {
                                className: " _ub _o _oc _mr _eg _R",
                                children: a.expireTimeDesc,
                              }),
                              (0, S.tZ)(va.View, {
                                id: "AJBl",
                                onClick: pa,
                                children: (0, S.tZ)(va.Icon, {
                                  className: " _u _ac _xr",
                                  type: "cancel",
                                  size: "22",
                                  color: "#C3C3C3",
                                }),
                              }),
                            ],
                          }),
                          a.candidateList &&
                            a.candidateList[0] &&
                            (0, S.tZ)(va.View, {
                              className: "pop-hbp-bd",
                              children: a.candidateList.map(function (e) {
                                return (0,
                                S.BX)(va.View, { className: " _Xk _SE _i _Vb _dc _m -lb", children: [(0, S.BX)(va.View, { className: " _Fe", children: [(0, S.tZ)(va.View, { className: " _Xb _mr _De _Q", children: e.departMonthDay + e.weekDay + " " + e.trainNo }), (0, S.tZ)(va.View, { className: " _Vv _Xb _VE _Ld _W", children: e.departHourMinute }), (0, S.tZ)(va.View, { className: " _Bj _Xb _hk _De _Q", children: e.departStation })] }), (0, S.BX)(va.View, { className: " _i _k _o", children: [(0, S.tZ)(va.View, { className: " _lf _Ma _TE _De", children: e.costTime }), (0, S.tZ)(va.Image, { src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/icon_ht_lb@3x.png", className: " _Ac _at _Ia" }), (0, S.tZ)(va.View, { className: " _gj _Ma _D _De", children: e.seat })] }), (0, S.BX)(va.View, { className: " _Di", children: [(0, S.tZ)(va.View, { className: " _UE _rl _De _Q", children: e.remark }), (0, S.tZ)(va.View, { className: " _Vv _Xb _VE _Ld _W", children: e.arriveHourMinute }), (0, S.tZ)(va.View, { className: " _Bj _Xb _hk _De _Q", children: e.arriveStation })] })] }, "index");
                              }),
                            }),
                        ],
                      }),
                  }),
                ],
              });
            }),
            ji = (0, X.$j)(function (e) {
              return {
                grabHouBuToast: e.grabOrderModel.candidateInfo.grabHouBuToast,
              };
            })(function (e) {
              var t = e.isShow,
                a = e.grabHouBuToast;
              return (0, S.tZ)(Ma.ZtActivityPop, {
                show: t,
                className: "OpenHouBuFailToast",
                onClose: pa,
                onWrapClose: pa,
                children:
                  a &&
                  a.contentList &&
                  (0, S.tZ)(va.View, {
                    className: " _mE _AE _CF",
                    children: (0, S.BX)(va.View, {
                      className: " _a _ls _dc _p _DF",
                      children: [
                        (0, S.BX)(va.View, {
                          className: "pop-content  _jl",
                          children: [
                            (0, S.tZ)(va.View, {
                              className: " _o _Dv _Xl",
                              children: a.title || "根据铁路局规定",
                            }),
                            (0, S.tZ)(va.View, {
                              className: " _I _o _ok _Xl",
                              children:
                                a.desc || "开启【候补购票】，需先预付车票款",
                            }),
                            (0, S.tZ)(va.View, {
                              className: " _EF _Ya _Xl _Nd",
                              children: a.contentList.map(function (e) {
                                return (0,
                                S.tZ)(va.View, { className: " _p _G _U _du _do -yc", children: (0, S.tZ)(Ma.ZtRichText, { nodes: e }) }, "index");
                              }),
                            }),
                          ],
                        }),
                        (0, S.tZ)(va.View, {
                          className: " _i _IE _yc -zc",
                          children: (0, S.tZ)(va.Button, {
                            className: "btn-primary",
                            hoverClass: "btn_hover",
                            id: "AJCd",
                            onClick: $a,
                            "data-ubt-key":
                              "wx_orderdetail_openHouBuDualChannel",
                            children: "确认开启",
                          }),
                        }),
                      ],
                    }),
                  }),
              });
            }),
            Ri = function (e) {
              var t = e.isShow;
              return (0, S.tZ)(Ma.ZtActivityPop, {
                show: t,
                isShowClose: !1,
                children: (0, S.tZ)(va.View, {
                  className: " _mE _AE",
                  children: (0, S.BX)(va.View, {
                    className: " _a _BE _dc _p _Pd",
                    children: [
                      (0, S.BX)(va.View, {
                        className: " _CE",
                        children: [
                          (0, S.tZ)(va.View, {
                            className: " _o _Dv _Xl",
                            children: "正在开启双通道...",
                          }),
                          (0, S.tZ)(va.View, {
                            children:
                              "发起扣款中，扣款成功将自动开启候补购票通道...",
                          }),
                        ],
                      }),
                      (0, S.BX)(va.View, {
                        className: " _tH _b _Mb _uH _F bgcolor-primary",
                        children: [
                          (0, S.tZ)(va.View, {
                            className:
                              " _Z _ii _vi _vH _p -Ac" +
                              (_.default.isTieyou ? " ty" : " zx"),
                            children: (0, S.tZ)(va.View, {
                              className: "-Bc  _og _wH _s _ni _xH _u _yH",
                            }),
                          }),
                          (0, S.tZ)(va.Text, {
                            children: "双通道开启中，请耐心等候~",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              });
            },
            Ji = (0, X.$j)(function (e) {
              return {
                openHouBuFailToast:
                  e.grabOrderModel.candidateInfo.openHouBuFailToast,
              };
            })(function (e) {
              var t = e.isShow,
                a = e.openHouBuFailToast;
              return (0, S.tZ)(Ma.ZtActivityPop, {
                show: t,
                onClose: pa,
                onWrapClose: pa,
                children:
                  a &&
                  (0, S.tZ)(va.View, {
                    className: " _mE _AE _CF",
                    children: (0, S.tZ)(va.View, {
                      className: " _a _ls _dc _p _DF",
                      children: (0, S.BX)(va.View, {
                        className: " _jl",
                        children: [
                          (0, S.tZ)(va.View, {
                            className: " _o _Dv _Xl",
                            children: a.title || "开通失败",
                          }),
                          (0, S.tZ)(va.View, {
                            className: " _EF _Ya _Xl _Nd",
                            children: a.contents.map(function (e) {
                              return (0,
                              S.tZ)(va.View, { className: " _FF _p _G _U _du -Ib", children: e }, "index");
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
              });
            }),
            Ei = m.default.memo(
              (0, X.$j)(function (e) {
                var t;
                return {
                  applyedClaimToast:
                    null === (t = e.grabOrderModel.grabProcessInfo.claimInfo) ||
                    void 0 === t
                      ? void 0
                      : t.applyedClaimToast,
                };
              })(function (e) {
                var t,
                  a = e.visible,
                  n = void 0 !== a && a,
                  i = e.festivalGrabInfo,
                  r = e.onClose,
                  o = void 0 === r ? function () {} : r;
                if (!i) return (0, S.tZ)(va.View, {});
                var c = function () {
                    o(), $e();
                  },
                  s = function () {
                    f().showModal({
                      title: "确认退订".concat(ne.Z.PRIORITY_TICKET, "特权？"),
                      content:
                        "正在努力为您抢票中，若退订特权，放票时将不再享受".concat(
                          ne.Z.PRIORITY_TICKET,
                          "。"
                        ),
                      cancelText: "算了",
                      showCancel: !0,
                      confirmText: "确认退订",
                      success: function (e) {
                        if (e.confirm)
                          return (0, fe.a5)({ orderNumber: U.getPage().oid })
                            .then(function (e) {
                              1 === e.resultCode
                                ? wa()
                                : e.resultMessage &&
                                  (0, I.showToast)(e.resultMessage);
                            })
                            .catch(function (e) {
                              return console.log(e);
                            })
                            .finally(function () {
                              return o();
                            });
                        o();
                      },
                    });
                  };
                return (0,
                S.tZ)(Ma.ZtActivityPop, { show: n, onWrapClose: o, className: "graborder-cs-popup", children: null !== (t = i.toast) && void 0 !== t && t.descTitle ? (0, S.BX)(va.View, { className: "pop-youxian card active", children: ["已获得" === i.status ? (0, S.BX)(va.Button, { className: "btn-big btn-get", id: "AJBz", onClick: o, children: [(0, S.tZ)(va.Text, { className: "ifont-list iconfont" }), i.toast.btnName || "已获得该特权"] }) : (0, S.BX)(va.Button, { className: "btn-big btn-go", id: "AJCA", onClick: c, children: [i.toast.btnName || "获取该特权", (0, S.tZ)(va.Text, { children: "¥" + i.price + " 抢票失败全额退款" })] }), i.toast.deBookBtnName && (0, S.BX)(va.View, { className: "txt-tuiding", id: "AJCB", onClick: s, children: [i.toast.deBookBtnName || "退订特权", (0, S.tZ)(va.Text, { className: "ifont-arr iconfont" })] }), (0, S.BX)(va.View, { className: "pop-youxian-bd", children: [(0, S.BX)(va.View, { className: "tit", children: [i.toast.descTitle, i.toast.tag && (0, S.tZ)(va.Text, { className: "tag", children: i.toast.tag })] }), i.toast.newDescSubTitle && (0, S.tZ)(va.View, { className: "txt", children: (0, S.tZ)(Ma.ZtRichText, { nodes: i.toast.newDescSubTitle }) }), (0, S.tZ)(va.View, { className: "tgrey", children: (i.toast.desc && i.toast.desc.join()) || "若该时段内未抢票成功，可退订".concat(ne.Z.PRIORITY_TICKET, "特权") })] }), (0, S.tZ)(va.Text, { className: "ifont-closed iconfont", id: "AJCC", onClick: o })] }) : (0, S.BX)(va.View, { className: "pop-youxian active", children: [i && "已获得" === i.status ? (0, S.BX)(va.Button, { className: "btn-big btn-get", id: "AJCD", onClick: o, children: [(0, S.tZ)(va.Text, { className: "ifont-list iconfont" }), i.toast.btnName || "已获得该特权"] }) : (0, S.BX)(va.Button, { className: "btn-big btn-go", id: "AJCE", onClick: c, children: [(i && i.toast.btnName) || "获取该特权", (0, S.tZ)(va.Text, { children: "¥" + i.price + " 抢票失败全额退款" })] }), i && i.toast.deBookBtnName && (0, S.BX)(va.View, { className: "txt-tuiding", id: "AJCF", onClick: s, children: [i.toast.deBookBtnName || "退订特权", (0, S.tZ)(va.Text, { className: "ifont-arr iconfont" })] }), (0, S.tZ)(va.Text, { className: "ifont-closed iconfont", id: "AJCG", onClick: o })] }) });
              })
            ),
            Hi = a(17377),
            qi =
              ((0, Hi.ZP)({ serviceCode: "14228", path: "addVipGrabSpeed" }),
              (0, Hi.ZP)({
                serviceCode: "16312",
                path: "getStudentActivityInfo",
              }),
              (0, Hi.ZP)({
                serviceCode: "19480",
                path: "grabApplyClaim",
                correctVersion: "32",
              })),
            Ui = m.default.memo(
              (0, X.$j)(function (e) {
                return {
                  greenChannelDetail: e.productModel.greenChannelDetail,
                };
              })(function (e) {
                var t = e.visible,
                  a = void 0 !== t && t,
                  n = e.greenChannelDetail,
                  o = void 0 === n ? null : n,
                  c = e.onClose,
                  s = void 0 === c ? function () {} : c;
                if (!o) return (0, S.tZ)(va.View, {});
                var l = (function () {
                  var e = (0, r.Z)(
                    (0, i.Z)().mark(function e() {
                      var t, a;
                      return (0, i.Z)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (1 !== (o.claimStatus || -1)) {
                                  e.next = 17;
                                  break;
                                }
                                return (
                                  U.ubtTrace(192153),
                                  (e.prev = 3),
                                  (e.next = 6),
                                  qi({
                                    orderNumber: U.getPage().oid,
                                    claimType: o.claimType,
                                  })
                                );
                              case 6:
                                1 === (t = e.sent).resultCode
                                  ? ((a = t.noClaimReason || ""),
                                    U.getDispatch().productModel.setGreenChannelDetail(
                                      (0, L.Z)(
                                        (0, L.Z)({}, o),
                                        {},
                                        {
                                          claimStatus: 3,
                                          content:
                                            "理赔提交已成功，您可去智行-我的钱包查看进度",
                                        }
                                      )
                                    ),
                                    a
                                      ? (fa(D.claimFailReasonPop),
                                        U.getDispatch().productModel.setFailClaimProduct(
                                          { claimFailReason: a }
                                        ))
                                      : s())
                                  : (f().showToast({
                                      title:
                                        t.resultMessage ||
                                        "申请失败，请稍后再试",
                                      icon: "none",
                                      duration: 2e3,
                                    }),
                                    s()),
                                  (e.next = 15);
                                break;
                              case 10:
                                (e.prev = 10),
                                  (e.t0 = e.catch(3)),
                                  console.log(e.t0),
                                  f().showToast({
                                    title: "申请失败，请稍后再试",
                                    icon: "none",
                                    duration: 2e3,
                                  }),
                                  s();
                              case 15:
                                e.next = 18;
                                break;
                              case 17:
                                s();
                              case 18:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [[3, 10]]
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })();
                return (0, S.tZ)(Ma.ZtActivityPop, {
                  show: a,
                  onWrapClose: s,
                  isShowClose: !1,
                  children:
                    o.greenChannelDetailPage &&
                    (0, S.BX)(va.View, {
                      className: " _a _GF _Pi _be",
                      children: [
                        (0, S.tZ)(va.View, {
                          className: " _u _dm _ue _It _in _HF _IF _JF _KF",
                        }),
                        (0, S.tZ)(va.View, {
                          className: " _Dv _Xb _o _du",
                          children: o.greenChannelDetailPage.title,
                        }),
                        o.greenChannelDetailPage.contentList &&
                          o.greenChannelDetailPage.contentList.map(function (
                            e
                          ) {
                            return (0, S.tZ)(
                              va.View,
                              { className: " _cs _LF _du _oc", children: e },
                              e
                            );
                          }),
                        o.greenChannelDetailPage.tips &&
                          (0, S.tZ)(va.View, {
                            className: " _LD _vi _MF _NF _Rq _Ya _S",
                            children: o.greenChannelDetailPage.tips,
                          }),
                        (0, S.tZ)(va.View, {
                          className: " _Gc _Xc _pb _OF _PF _I _o _b",
                          id: "AJBv",
                          onClick: l,
                          children:
                            1 === o.claimStatus ? "提交理赔申请" : "确定",
                        }),
                      ],
                    }),
                });
              })
            ),
            Ki = m.default.memo(
              (0, X.$j)(function (e) {
                var t;
                return {
                  popupInfo:
                    null === (t = e.productModel.guaranteeInfo) || void 0 === t
                      ? void 0
                      : t.toast,
                };
              })(function (e) {
                var t = e.visible,
                  a = void 0 !== t && t,
                  n = e.popupInfo,
                  i = void 0 === n ? null : n;
                if (!i) return (0, S.tZ)(va.View, {});
                var r = _.default.isTieyou;
                return (0, S.tZ)(Ma.ZtActivityPop, {
                  show: a,
                  onClose: pa,
                  onWrapClose: pa,
                  children: (0, S.tZ)(va.View, {
                    className: " _mE _AE",
                    children: (0, S.BX)(va.View, {
                      className: " _Pi _a _BE _dc _p _Pd",
                      children: [
                        (0, S.BX)(va.View, {
                          className: " _CE",
                          children: [
                            (0, S.tZ)(va.View, {
                              className: " _o _Dv _Xl",
                              children: i.title,
                            }),
                            (0, S.tZ)(va.View, {
                              className: " _Nd",
                              children: (0, S.tZ)(va.View, {
                                className: " _p _G _U _du _do -ab",
                                children: i.subtitle,
                              }),
                            }),
                            (0, S.BX)(va.View, {
                              className: ""
                                .concat(" _DE _i", " ")
                                .concat(r ? "ty" : "zx"),
                              children: [
                                (0, S.BX)(va.View, {
                                  className: " _j _o _p -bb -cb -db",
                                  children: [
                                    (0, S.tZ)(va.View, {
                                      className:
                                        " _Tj _Rj _Xa _O _dm _b _EE -eb",
                                      children: "1",
                                    }),
                                    (0, S.tZ)(va.View, {
                                      className: " _rb _R _Km -fb",
                                      children: "权益生效",
                                    }),
                                  ],
                                }),
                                (0, S.BX)(va.View, {
                                  className: " _j _o _p -bb -cb -db",
                                  children: [
                                    (0, S.tZ)(va.View, {
                                      className:
                                        " _Tj _Rj _Xa _O _dm _b _EE -eb",
                                      children: "2",
                                    }),
                                    (0, S.tZ)(va.View, {
                                      className: " _rb _R _Km -fb",
                                      children: "申请补偿",
                                    }),
                                  ],
                                }),
                                (0, S.BX)(va.View, {
                                  className: " _j _o _p -bb -cb -db",
                                  children: [
                                    (0, S.tZ)(va.View, {
                                      className:
                                        " _Tj _Rj _Xa _O _dm _b _EE -eb",
                                      children: "3",
                                    }),
                                    (0, S.tZ)(va.View, {
                                      className: " _rb _R _Km -fb",
                                      children:
                                        (r ? "铁友" : "智行") + "钱包到账",
                                    }),
                                  ],
                                }),
                                (0, S.BX)(va.View, {
                                  className: " _j _o _p -bb -cb -db",
                                  children: [
                                    (0, S.tZ)(va.View, {
                                      className:
                                        " _Tj _Rj _Xa _O _dm _b _EE -eb",
                                      children: "4",
                                    }),
                                    (0, S.tZ)(va.View, {
                                      className: " _rb _R _Km -fb",
                                      children: "前往提现",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, S.BX)(va.View, {
                              className: ""
                                .concat(" _FE _vi _GE _HE _E -gb", " ")
                                .concat(r ? "ty" : "zx"),
                              children: [
                                (0, S.tZ)(va.Text, {
                                  className: "ifont-tips iconfont",
                                }),
                                i.tip,
                              ],
                            }),
                          ],
                        }),
                        (0, S.BX)(va.View, {
                          className: " _i _IE _yc -hb",
                          children: [
                            (0, S.tZ)(va.Button, {
                              className: " _wp _JE _KE",
                              id: "AJBf",
                              onClick: pa,
                              "data-ubt-key": "wx_orderdetail_hideClaimPop",
                              children: "我再想想",
                            }),
                            (0, S.tZ)(va.Button, {
                              className: " _b _LE _ME",
                              id: "AJBg",
                              onClick: function () {
                                return (0, fe.DY)({
                                  orderNumber: U.getPage().oid,
                                })
                                  .then(function (e) {
                                    e.claimFlag
                                      ? (pa(), wa())
                                      : e.resultMessage &&
                                        ((0, I.showToast)(e.resultMessage),
                                        wa(),
                                        pa());
                                  })
                                  .catch(function (e) {
                                    return console.log(e);
                                  });
                              },
                              "data-ubt-key": "wx_orderdetail_confirmClaim",
                              children: "确认申请",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                });
              })
            ),
            Wi = m.default.memo(
              (0, X.$j)(function (e) {
                var t = e.pageModel,
                  a = e.productModel;
                return {
                  isCanFriendSpeed: t.isCanFriendSpeed,
                  festivalGrabInfo: a.festivalGrabInfo,
                  currentCuiSpeed: a.cuiChuPiaoData.currentCuiSpeed,
                };
              })(function (e) {
                var t = e.isCanFriendSpeed,
                  a = e.visible,
                  n = void 0 !== a && a,
                  i = e.festivalGrabInfo,
                  r = void 0 === i ? null : i,
                  o = e.currentCuiSpeed,
                  c = void 0 === o ? 0 : o,
                  s = _.default.isTieyou;
                return (0, S.tZ)(Ma.ZtActivityPop, {
                  show: n,
                  onWrapClose: pa,
                  children: (0, S.BX)(va.View, {
                    className: " _Pi _u _gl _yi _Jn _JG _JD _Mb _KG _LG _o -kc",
                    children: [
                      (0, S.BX)(va.View, {
                        className: "pop-cui-disabled-hd",
                        children: [
                          (0, S.tZ)(va.View, {
                            className: "-dc  _bd _MG -dc -dc",
                            children: s ? "当前无法催出票" : "已为您催出票",
                          }),
                          (0, S.tZ)(va.View, {
                            className: " _F _NG _Km",
                            children: s
                              ? "vip速度可免费享受催出票权益"
                              : "福利官已通知程序员加急抢票",
                          }),
                        ],
                      }),
                      (0, S.BX)(va.View, {
                        className: " _Fa _i _Yl _n _l",
                        children: [
                          (0, S.tZ)(va.View, {
                            className: "-ec  _Z _Cm _MG _Rh -ec -ec",
                            children: "抢票速度可超越人数",
                          }),
                          (0, S.BX)(va.View, {
                            className: "-gc  _ek _OG _MG",
                            children: [
                              (0, S.tZ)(va.View, {
                                className: " _D  _D",
                                children: "当前",
                              }),
                              (0, S.BX)(va.View, {
                                className: " _rb _fk _ij _yc",
                                children: [
                                  (0, S.tZ)(va.Text, {
                                    className: "-ic",
                                    children: c,
                                  }),
                                  "%",
                                ],
                              }),
                            ],
                          }),
                          (0, S.tZ)(va.Icon, {
                            className: "-fc  _ca _og _Rd _RG",
                          }),
                          (0, S.BX)(va.View, {
                            className: "-hc  _Ug _PG _QG _ME",
                            children: [
                              (0, S.tZ)(va.View, {
                                className: " _D  _D",
                                children: "催出票之后",
                              }),
                              (0, S.BX)(va.View, {
                                className: " _rb _fk _ij _yc",
                                children: [
                                  (0, S.tZ)(va.Text, {
                                    className: "-ic",
                                    children:
                                      "已获得" !==
                                      (null == r ? void 0 : r.status)
                                        ? 80
                                        : 90,
                                  }),
                                  "%",
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, S.BX)(va.View, {
                        className: " _rs _i",
                        children: [
                          t &&
                            (0, S.tZ)(va.Button, {
                              className: " _Gc _j _SG _tb _en _le _jc _TG",
                              openType: (0, ee.JO)() ? "share" : "",
                              id: "AJCQ",
                              onClick: function () {
                                U.ubtTrace(205922, {
                                  bizKey: "z_cchup_popup_click",
                                  series: 0,
                                }),
                                  (0, ee.JO)() || mt();
                              },
                              children: "好友加速",
                            }),
                          (0, S.tZ)(va.Button, {
                            className: " _Gc _j _ND _tb _Xc _UG _VG",
                            id: "AJCR",
                            onClick: function () {
                              U.ubtTrace(205922, {
                                bizKey: "z_cchup_popup_click",
                                series: 0,
                              }),
                                pa(),
                                Ce(50);
                            },
                            children: "手动提速至VIP",
                          }),
                        ],
                      }),
                      r &&
                        "已获得" !== (null == r ? void 0 : r.status) &&
                        (0, S.BX)(va.View, {
                          className: " _D _WG -jc",
                          id: "AJCS",
                          onClick: function () {
                            pa(), $e();
                          },
                          children: [
                            "TIP:获得",
                            ne.Z.PRIORITY_TICKET,
                            "特权，可额外再超越10%的人",
                            (0, S.tZ)(va.Text, {
                              className: "ifont-arr iconfont",
                            }),
                          ],
                        }),
                    ],
                  }),
                });
              })
            ),
            Yi = m.default.memo(
              (0, X.$j)(function (e) {
                var t = e.productModel;
                return {
                  festivalGrabInfo: t.festivalGrabInfo,
                  rushTicketInfo: t.cuiChuPiaoData.cuiChuPiaoInfo,
                  currentCuiSpeed: t.cuiChuPiaoData.currentCuiSpeed,
                  speedDiff: t.cuiChuPiaoData.speedDiff,
                };
              })(function (e) {
                var t = e.visible,
                  a = void 0 !== t && t,
                  n = e.festivalGrabInfo,
                  i = void 0 === n ? null : n,
                  r = e.rushTicketInfo,
                  o = void 0 === r ? null : r,
                  c = e.currentCuiSpeed,
                  s = void 0 === c ? 0 : c,
                  l = e.speedDiff,
                  d = void 0 === l ? 0 : l;
                return (0, S.tZ)(Ma.ZtActivityPop, {
                  onWrapClose: pa,
                  show: a,
                  children: (0, S.BX)(va.View, {
                    className: " _Pi _u _gl _yi _Jn _XG _JD _Mb _YG _o _ZG",
                    children: [
                      (0, S.BX)(va.View, {
                        className: " _Dv _tc _Oc -lc",
                        children: [
                          "抢票速度超越人数",
                          (0, S.tZ)(va.Text, { children: s + "%" }),
                        ],
                      }),
                      (0, S.BX)(va.View, {
                        className: "pop-cui-bd",
                        children: [
                          (0, S.BX)(va.View, {
                            className:
                              " _Yn _i _aH _Yl _m _p _G _bH _V -mc -nc -oc",
                            children: [
                              (0, S.tZ)(va.View, {
                                className: "txt",
                                children: "今日催出票将为您提升" + d + "%",
                              }),
                              (0, S.tZ)(va.Icon, { className: " _Ta _Ua _cH" }),
                            ],
                          }),
                          (0, S.BX)(va.View, {
                            className:
                              " _Yn _i _aH _Yl _m _p _G _bH _V -mc -nc -oc",
                            children: [
                              (0, S.tZ)(va.View, {
                                className: "txt",
                                children: "我们已增添服务器为您抢票",
                              }),
                              (0, S.tZ)(va.Icon, { className: " _Ta _Ua _cH" }),
                            ],
                          }),
                          (o.times <= 1 || (2 === o.times && 2 === o.state)) &&
                            (0, S.BX)(va.View, {
                              className:
                                " _Yn _i _aH _Yl _m _p _G _bH _V -mc -nc -oc -pc",
                              children: [
                                (0, S.tZ)(va.View, {
                                  className: "txt",
                                  children: "明天可以继续催出票",
                                }),
                                (0, S.tZ)(va.Icon, {
                                  className: " _Ta _Ua _cH",
                                }),
                              ],
                            }),
                          3 === o.times &&
                            2 === o.state &&
                            (0, S.BX)(va.View, {
                              className:
                                " _Yn _i _aH _Yl _m _p _G _bH _V -mc -nc -oc -pc",
                              children: [
                                (0, S.tZ)(va.View, {
                                  className: "txt",
                                  children: "您的“催出票”权益已经生效",
                                }),
                                (0, S.tZ)(va.Icon, {
                                  className: " _Ta _Ua _cH",
                                }),
                              ],
                            }),
                        ],
                      }),
                      (0, S.tZ)(va.View, {
                        className: " _Fa",
                        children: (0, S.tZ)(va.Button, {
                          className: " _fH _Gc _ND _Xc _gH _hH _tb _VG",
                          id: "AJCT",
                          onClick: function () {
                            var e =
                                U.getState().productModel.cuiChuPiaoData
                                  .cuiChuPiaoInfo,
                              t = null == e ? void 0 : e.state;
                            U.ubtTrace(205922, {
                              bizKey: "z_cchup_popup_click",
                              series: 1,
                            }),
                              2 !== t
                                ? We("")
                                    .then(function () {
                                      We("query");
                                    })
                                    .catch(function (e) {
                                      console.log(e);
                                    })
                                : (pa(), wa());
                          },
                          children:
                            2 === o.state
                              ? 3 === o.times
                                ? "好的，谢谢"
                                : "已催出票"
                              : "催出票",
                        }),
                      }),
                      i &&
                        "已获得" !== (null == i ? void 0 : i.status) &&
                        (0, S.BX)(va.View, {
                          className: " _iH _D _WG -qc",
                          id: "AJCU",
                          onClick: function () {
                            pa(), $e();
                          },
                          children: [
                            "TIP:获得",
                            ne.Z.PRIORITY_TICKET,
                            "特权，可额外再超越10%的人",
                            (0, S.tZ)(va.Text, {
                              className: "ifont-arr iconfont",
                            }),
                          ],
                        }),
                    ],
                  }),
                });
              })
            ),
            Qi = a(30541),
            $i = m.default.memo(
              (0, X.$j)(function () {
                var e;
                return {
                  gzhPopInfo:
                    _.default.isWechat &&
                    (null === (e = ce("wxOfficialGuideToast")) || void 0 === e
                      ? void 0
                      : e._jsonInfo),
                };
              })(function (e) {
                var t = e.isShow,
                  a = e.gzhPopInfo;
                return a
                  ? ((a.desc = a.subTitle),
                    (0, S.tZ)(Qi.Z, {
                      show: t,
                      info: a,
                      onSuccess: function () {
                        $.t1.setAttr("gzhgrabToast", !0),
                          Ia.Z.twebview({ data: { url: a.jumpUrl } });
                      },
                      onCancel: function () {
                        pa();
                      },
                    }))
                  : (0, S.tZ)(va.View, {});
              })
            ),
            er = m.default.memo(
              (0, X.$j)(function (e) {
                var t;
                return {
                  claimToastInfo:
                    null === (t = e.grabOrderModel.grabProcessInfo.claimInfo) ||
                    void 0 === t
                      ? void 0
                      : t.applyClaimToast,
                };
              })(function (e) {
                var t = e.visible,
                  a = void 0 !== t && t,
                  n = e.claimToastInfo,
                  i = void 0 === n ? null : n,
                  r = e.onClose,
                  o = void 0 === r ? function () {} : r;
                if (!i) return (0, S.tZ)(va.View, {});
                return (0, S.tZ)(Ma.ZtActivityPop, {
                  show: a,
                  isShowClose: !1,
                  children: (0, S.BX)(va.View, {
                    className: " _Pi _Mb _v _yi _Jn _a _be _GD _gl _JD",
                    children: [
                      (0, S.BX)(va.View, {
                        children: [
                          (0, S.tZ)(va.View, {
                            className: " _o _Dv _du",
                            children: i.title,
                          }),
                          (0, S.tZ)(va.View, {
                            className: " _o _G _Nd _ym",
                            children: i.desc + i.tip,
                          }),
                        ],
                      }),
                      (0, S.BX)(va.View, {
                        className: " _Fa _i -Jb",
                        children: [
                          (0, S.tZ)(va.Button, {
                            className: " _vj _Nd",
                            id: "AJBt",
                            onClick: o,
                            children: "取消",
                          }),
                          (0, S.tZ)(va.Button, {
                            className: " _ME btn-primary",
                            id: "AJBu",
                            onClick: function () {
                              !(function () {
                                var e = {
                                  orderNumber: U.getPage().oid,
                                  claimType: 1,
                                };
                                qi(e)
                                  .then(function (e) {
                                    if (1 !== e.resultCode)
                                      return e.resultMessage;
                                    fa(D.compensateSuccess);
                                  })
                                  .catch(function (e) {
                                    pa(),
                                      f().showToast({ title: e, icon: "none" }),
                                      console.log(e);
                                  });
                              })();
                            },
                            children: i.buttonName,
                          }),
                        ],
                      }),
                    ],
                  }),
                });
              })
            ),
            tr = m.default.memo(
              (0, X.$j)(function (e) {
                var t;
                return {
                  applyedClaimToast:
                    null === (t = e.grabOrderModel.grabProcessInfo.claimInfo) ||
                    void 0 === t
                      ? void 0
                      : t.applyedClaimToast,
                };
              })(function (e) {
                var t = e.visible,
                  a = void 0 !== t && t,
                  n = e.applyedClaimToast,
                  i = void 0 === n ? null : n,
                  r = e.onClose,
                  o = void 0 === r ? function () {} : r;
                return i
                  ? (0, S.tZ)(Ma.ZtActivityPop, {
                      show: a,
                      children: (0, S.BX)(va.View, {
                        className: " _Pi _Mb _v _yi _Jn _a _be _GD _gl _JD",
                        children: [
                          (0, S.BX)(va.View, {
                            className: "pop-mid-modal-bd",
                            children: [
                              (0, S.tZ)(va.View, {
                                className: " _o _Dv _du",
                                children: i.title,
                              }),
                              (0, S.tZ)(va.View, {
                                className: " _o _G _Nd _ym",
                                children: i.desc,
                              }),
                            ],
                          }),
                          i.tips &&
                            (0, S.tZ)(va.View, {
                              className: " _Lc",
                              children: i.tips.map(function (e) {
                                return (0,
                                S.BX)(va.View, { className: " _du _ht _i _l _oE _b -Sa", children: [(0, S.tZ)(va.View, { className: " _If _o _pE _Io -Ta", children: e.price }), (0, S.BX)(va.View, { className: " _j", children: [(0, S.tZ)(va.View, { className: " _tb", children: e.title }), (0, S.tZ)(va.View, { className: " _D _tj", children: e.subTitle })] })] }, "index");
                              }),
                            }),
                          (0, S.tZ)(va.View, {
                            className: " _Fa _i",
                            children: (0, S.tZ)(va.Button, {
                              className:
                                " _Gc _vi _Xc _le _tb _j -Ra btn-primary",
                              id: "AJBa",
                              onClick: function () {
                                o(), wa();
                              },
                              children: i.buttonName,
                            }),
                          }),
                        ],
                      }),
                    })
                  : (0, S.tZ)(va.View, {});
              })
            ),
            ar = m.default.memo(
              (0, X.$j)(function (e) {
                var t = e.grabOrderModel;
                return {
                  payToUnLockToast: t.grabProcessInfo.payToUnLockToast,
                  processFlag: t.grabProcessInfo.processFlag,
                };
              })(function (e) {
                var t = e.visible,
                  a = void 0 !== t && t,
                  n = e.payToUnLockToast,
                  i = void 0 === n ? null : n,
                  r = e.processFlag,
                  o = e.onClose,
                  c = void 0 === o ? function () {} : o;
                if (!i) return (0, S.tZ)(va.View, {});
                return (0, S.tZ)(Ma.ZtDrawer, {
                  show: a,
                  onWrapClose: fa,
                  isShowClose: !1,
                  isDefineHead: !0,
                  className: "graborder-su-drawer",
                  children: (0, S.BX)(va.View, {
                    className: "pop-welfare-pay",
                    children: [
                      (0, S.BX)(va.View, {
                        className: "pop-welfare-pay-hd",
                        children: [
                          i.title &&
                            (0, S.tZ)(va.View, {
                              className: "tit",
                              children: (0, S.tZ)(Ma.ZtRichText, {
                                nodes: i.title,
                              }),
                            }),
                          (0, S.tZ)(va.Text, {
                            className: "ifont-closed iconfont",
                            id: "AJCi",
                            onClick: c,
                          }),
                        ],
                      }),
                      i.welfareList &&
                        (0, S.tZ)(va.View, {
                          className:
                            "welfare-bd " + (_.default.isTieyou ? "ty" : "zx"),
                          children: i.welfareList.map(function (e) {
                            return (0,
                            S.BX)(va.View, { className: "item", children: [(0, S.tZ)(va.Image, { src: e.icon, className: "icon" }), (0, S.BX)(va.View, { className: "cont", children: [(0, S.tZ)(va.View, { className: "tit", children: e.title }), (0, S.tZ)(va.View, { className: "txt", children: e.desc })] }), (0, S.tZ)(va.View, { className: "price", children: e.price }), (0, S.BX)(va.Button, { className: "btn-go", children: [(0, S.tZ)(va.Text, { className: "ifont-lock iconfont" }), e.buttonName] })] }, "index");
                          }),
                        }),
                      (0, S.BX)(va.View, {
                        className: "welfare-btn",
                        children: [
                          (0, S.BX)(va.Button, {
                            className: "btn-line",
                            id: "AJCj",
                            onClick: function () {
                              1 === r
                                ? U.ubtTrace(151876)
                                : (2 !== r && 3 !== r) || U.ubtTrace(151796),
                                c(),
                                Xe({ productList: [{ type: 16, code: "" }] })
                                  .then(function (e) {
                                    e.success &&
                                      f().showModal({
                                        title: "解锁成功",
                                        content:
                                          "您已成功解锁，我们将在抢票成功后，从您的账户发起扣款",
                                        showCancel: !1,
                                        confirmText: "好的",
                                      });
                                  })
                                  .catch(function (e) {
                                    return console.log(e);
                                  });
                            },
                            children: [
                              i.payButton,
                              (0, S.tZ)(va.Text, { children: i.payButtonDesc }),
                            ],
                          }),
                          (0, S.BX)(va.Button, {
                            className: "btn-primary",
                            id: "AJCk",
                            onClick: function () {
                              return (
                                1 === r && U.ubtTrace(151879),
                                void fa(D.showStuAndNewGuestPrompt)
                              );
                            },
                            children: [
                              i.freeButton,
                              i.freeButtonDesc &&
                                (0, S.tZ)(Ma.ZtRichText, {
                                  nodes: i.freeButtonDesc,
                                }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                });
              })
            ),
            nr = (0, X.$j)(function (e) {
              var t = e.grabOrderModel;
              return {
                friendShareToast: t.grabProcessInfo.friendShareToast,
                invitedNum: t.grabProcessInfo.invitedNum,
                isSecondShare: t.grabProcessInfo.isSecondShare,
                processFlag: t.grabProcessInfo.processFlag,
              };
            })(function (e) {
              var t = e.visible,
                a = void 0 !== t && t,
                n = e.processFlag,
                i = e.friendShareToast,
                r = e.invitedNum,
                o = e.isSecondShare,
                c = void 0 !== o && o;
              if (!i) return (0, S.tZ)(va.View, {});
              var s = function () {
                if (!c) {
                  U.getDispatch().grabOrderModel.setGrabProcessInfo({
                    isSecondShare: !0,
                  });
                  var e = f().getStorageSync("firstShare") || [];
                  e.push(U.getPage().oid),
                    (e = (0, Fe.Z)(new Set(e))),
                    f().setStorageSync("firstShare", e);
                }
              };
              return (0, S.tZ)(Ma.ZtDrawer, {
                show: a,
                onWrapClose: pa,
                isShowClose: !1,
                className: "graborder-sang-drawer",
                children: (0, S.BX)(va.View, {
                  className: "pop-welfare-invite",
                  children: [
                    (0, S.tZ)(m.Fragment, {
                      children: c
                        ? (0, S.BX)(va.View, {
                            className: "pop-welfare-invite-hd",
                            children: [
                              i.title &&
                                (0, S.tZ)(va.View, {
                                  className: "tit",
                                  children: (0, S.tZ)(Ma.ZtRichText, {
                                    nodes: i.title,
                                  }),
                                }),
                              i.subTitle &&
                                (0, S.tZ)(va.View, {
                                  className: "txt",
                                  children: i.subTitle,
                                }),
                            ],
                          })
                        : (0, S.BX)(va.View, {
                            className: "pop-welfare-invite-hd",
                            children: [
                              (0, S.tZ)(va.View, {
                                className: "tit",
                                children: (0, S.tZ)(Ma.ZtRichText, {
                                  nodes:
                                    '分享后有机会<span style="color: #FE4839;">一键解锁</span>所有权益',
                                }),
                              }),
                              i.subTitle &&
                                (0, S.tZ)(va.View, {
                                  className: "txt",
                                  children: i.subTitle,
                                }),
                            ],
                          }),
                    }),
                    (0, S.BX)(va.View, {
                      className: "welfare-btn",
                      style: "margin-top: 0px;",
                      children: [
                        (0, ee.JO)() &&
                          (0, S.BX)(va.Button, {
                            className: "btn-wechat",
                            openType: "share",
                            "data-flag": "stuAndNewGuest",
                            id: "AJCr",
                            onClick: function () {
                              U.ubtTrace(206556), pa(), s();
                            },
                            children: [
                              (0, S.tZ)(va.Icon, { className: "icon-wechat" }),
                              "好友",
                            ],
                          }),
                        (!r || !(0, ee.JO)()) &&
                          (0, S.BX)(va.Button, {
                            className: "btn-primary",
                            id: "AJCs",
                            onClick: function () {
                              U.ubtTrace(206558),
                                1 === n
                                  ? U.ubtTrace(151884)
                                  : (2 !== n && 2 !== n) || U.ubtTrace(151803),
                                s(),
                                mt();
                            },
                            children: [
                              (0, S.tZ)(va.Icon, { className: "icon-pyq" }),
                              "保存图片分享",
                            ],
                          }),
                      ],
                    }),
                  ],
                }),
              });
            }),
            ir = function (e) {
              var t = e.show,
                a = e.passenger,
                n = void 0 === a ? [] : a,
                i = e.desc,
                r = void 0 === i ? "" : i,
                o = e.onClose,
                c = void 0 === o ? function () {} : o,
                s = e.ubtTrace,
                l = void 0 === s ? function () {} : s,
                d = e.doMobileVerifyAction,
                u = void 0 === d ? function () {} : d,
                _ = n.length;
              return (0, S.tZ)(Ai.Z, {
                show: t,
                onClose: c,
                ubtTrace: l,
                children: (0, S.BX)(va.View, {
                  className: " _pl _p",
                  children: [
                    (0, S.tZ)(va.Image, {
                      src: "https://images3.c-ctrip.com/train/tieyou-mini-img/202012/icon.png",
                      className: " _ue _It _u _yi _q _JD",
                    }),
                    (0, S.tZ)(va.Image, {
                      src: "https://images3.c-ctrip.com/train/tieyou-mini-img/202012/img__Insurance@3x.png",
                      mode: "widthFix",
                      className: " _Z _be",
                    }),
                    (0, S.BX)(va.View, {
                      className: " _i _k _l _Np",
                      children: [
                        (0, S.BX)(va.View, {
                          className: " _Dv _ok",
                          children: [_, "位乘车人手机号待核验"],
                        }),
                        (0, S.tZ)(va.View, {
                          className: " _G _Nd _o _Bj",
                          children: r,
                        }),
                        (0, S.tZ)(va.View, {
                          className: " _Fa _Z",
                          children: n.map(function (e, t) {
                            return (0,
                            S.BX)(va.View, { className: " _i _l _m _Em -Ua", children: [(0, S.BX)(va.View, { className: " _i _l", children: [(0, S.tZ)(va.View, { className: " _ok _H _lj", children: e.name }), (0, S.BX)(va.View, { className: " _qE _C _b _i _l _rE _Ka _sE", children: [0 === e.statusCode && (0, S.tZ)(va.Image, { src: "https://images3.c-ctrip.com/train/tieyou-mini-img/202012/light-icon.png", className: " _Bb _dg _jb" }), (0, S.tZ)(va.View, { children: e.statusDesc })] })] }), (0, S.tZ)(va.View, { className: " _Kc _G", children: e.mobile })] }, "".concat(e.name, "_").concat(t));
                          }),
                        }),
                      ],
                    }),
                    (0, S.tZ)(va.View, {
                      className: "btn-primary  _j _dr _o _aE _tE",
                      id: "AJBs",
                      onClick: u,
                      children: "立即核验",
                    }),
                  ],
                }),
              });
            };
          var rr = (0, X.$j)(function (e) {
            var t = e.productModel;
            return {
              alternateClaimToast:
                t.failClaimProduct.alternateClaimToast ||
                t.failClaimProduct.speedUpAlternateClaimToast,
            };
          })(function (e) {
            var t = e.visible,
              a = e.alternateClaimToast;
            if (
              ((0, m.useEffect)(
                function () {
                  a && 1 == a.type && t && U.ubtTrace(198090);
                },
                [t]
              ),
              !a)
            )
              return (0, S.tZ)(va.View, {});
            var n = function (e) {
                var t = e.type;
                pa(), 1 == t && U.ubtTrace(198091), fa(D.speedGrabTaskDrawer);
              },
              i = a.title,
              r = a.contents,
              o = void 0 === r ? [] : r,
              c = a.type,
              s = a.status;
            return (0, S.tZ)(Ma.ZtDrawer, {
              show: t,
              onWrapClose: pa,
              onClose: pa,
              drawerStyle: { borderRadius: "32rpx 32rpx 0 0" },
              children: (0, S.BX)(va.View, {
                className: " _p _hE _Vb _hl",
                children: [
                  (0, S.tZ)(va.Image, {
                    src: "https://images3.c-ctrip.com/ztrip/train_xie/2021-08/icon_compensation_big.png",
                    className: " _iE _jE _u _yi _kE _JD",
                  }),
                  (0, S.tZ)(va.View, {
                    className: " _Xb _xx _mb _nb _o",
                    children: i,
                  }),
                  (0, S.tZ)(va.View, {
                    className: " _lE",
                    children: o.map(function (e, t) {
                      return (0,
                      S.BX)(va.View, { className: " _mE _i _Rh _U -Pa", children: [(0, S.tZ)(va.Text, { className: " _Qf _i _l _Ua -Qa" }), (0, S.tZ)(va.Text, { className: " _oc _iu", children: e })] }, t);
                    }),
                  }),
                  (0, S.tZ)(va.View, {
                    className: " _nE _w _dr _Ae _ng _qb _au _o",
                    id: "AJBj",
                    onClick: function () {
                      return n && n({ type: c, status: s });
                    },
                    children: "确定",
                  }),
                ],
              }),
            });
          });
          var or = (0, X.$j)(function (e) {
            var t = e.productModel;
            return {
              alternateClaimToast:
                t.failClaimProduct.alternateClaimToast ||
                t.failClaimProduct.speedUpAlternateClaimToast,
            };
          })(function (e) {
            var t = e.visible,
              a = e.alternateClaimToast,
              n = void 0 === a ? {} : a;
            if (!n) return (0, S.tZ)(va.View, {});
            var i = function (e) {
                4 === e.status ? pa() : at(e);
              },
              r = n.title,
              o = n.type,
              c = n.contents,
              s = void 0 === c ? [] : c,
              l = n.buttonName,
              d = void 0 === l ? "申请理赔" : l;
            return (0, S.tZ)(Ma.ZtActivityPop, {
              show: t,
              onClose: pa,
              animation: "normal",
              children: (0, S.BX)(va.View, {
                className: " _rH _Vb _be _p _TD",
                children: [
                  (0, S.tZ)(va.Image, {
                    src: "https://images3.c-ctrip.com/ztrip/train.xin/2021_08/compensate_large@3x.png",
                    className: " _yB _xB _u _yi _q _JD",
                  }),
                  (0, S.tZ)(va.View, {
                    className: " _Xb _xx _nb _o",
                    children: r,
                  }),
                  (0, S.tZ)(va.View, {
                    className: " _sH _oc _iu _V _o",
                    children: s.length > 0 && s[0],
                  }),
                  (0, S.tZ)(va.View, {
                    className: " _w _vi _Gc _o _qb _pq _Xc",
                    id: "AJCZ",
                    onClick: function () {
                      return i && i({ type: o });
                    },
                    children: d,
                  }),
                ],
              }),
            });
          });
          var cr = (0, X.$j)(function (e) {
              return {
                drawerInfo:
                  e.productModel.failClaimProduct.springFestivalDrawerInfo,
              };
            })(function (e) {
              var t = e.visible,
                a = e.onClose,
                n = e.drawerInfo;
              if (
                ((0, m.useEffect)(function () {
                  U.ubtTrace(205910, {
                    exposureType: "actionbar",
                    bizKey: "z_spring_qbdp_actionbar_show",
                  });
                }, []),
                !n)
              )
                return (0, S.tZ)(va.View, {});
              var i = n.data,
                r = void 0 === i ? [] : i,
                o = n.underDesc,
                c = n.headImg,
                s = void 0 === c ? "" : c,
                l = r[1],
                d = function () {
                  h.Z.commonNavigator(n.activityRuleUrl);
                },
                u = function () {
                  fa(D.speedGrabTaskDrawer);
                };
              return (0, S.tZ)(Ma.ZtDrawer, {
                show: t,
                className: "spring-festival-grab-fail-claim-drawer-box",
                isShowClose: !1,
                onWrapClose: a,
                onClose: a,
                drawerStyle: { borderRadius: "32rpx 32rpx 0 0" },
                children: (0, S.BX)(va.View, {
                  className: "spring-festival-grab-fail-claim-drawer-v2",
                  children: [
                    (0, S.tZ)(va.Image, {
                      className: "drawer-bg",
                      src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/Marketing/jbbj@3x.png",
                    }),
                    (0, S.BX)(va.View, {
                      className: "header",
                      children: [
                        (0, S.tZ)(va.View, {
                          className: "img-head-box",
                          children: (0, S.tZ)(va.Image, {
                            className: "img-head",
                            src: s || "",
                            webp: !0,
                          }),
                        }),
                        (0, S.tZ)(va.Image, {
                          className: "icon-closed-gfcd",
                          src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/Marketing/icon_gb@3x.png",
                          id: "AJCn",
                          onClick: a,
                          webp: !0,
                        }),
                      ],
                    }),
                    (0, S.BX)(va.View, {
                      className: "content",
                      children: [
                        (0, S.tZ)(va.Image, {
                          className: "bg",
                          src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/Marketing/db@3x.png",
                        }),
                        (0, S.BX)(va.View, {
                          className: "title-box",
                          children: [
                            (0, S.tZ)(va.View, {
                              className: "title-image-box",
                              children: (0, S.tZ)(va.Image, {
                                className: "title",
                                src: "https://images3.c-ctrip.com/ztrip/train.song/order_details/Marketing/btt@3x.png",
                                webp: !0,
                              }),
                            }),
                            (0, S.tZ)(va.View, {
                              className: "sub-title",
                              children: l.desc,
                            }),
                          ],
                        }),
                        (0, S.tZ)(va.View, {
                          className: "btn",
                          id: "AJCo",
                          onClick: function () {
                            return (function (e) {
                              1 === e &&
                                (U.ubtTrace(205914, {
                                  bizKey: "z_spring_qbdp_action_buy_click",
                                }),
                                null == u || u());
                            })(1);
                          },
                          children: "去升级",
                        }),
                      ],
                    }),
                    (0, S.tZ)(va.View, {
                      className: "activity-rule",
                      id: "AJCp",
                      onClick: d,
                      children: (0, S.BX)(va.Text, {
                        children: [
                          o,
                          (0, S.tZ)(va.Text, {
                            style: { color: "#FF5959" },
                            children: "《赔付规则》",
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              });
            }),
            sr = a(9173);
          var lr = (0, X.$j)(function (e) {
              return { isShowPreLoginBanner: e.t6Model.isShowPreLoginBanner };
            })(function (e) {
              var t = e.visible,
                a = void 0 !== t && t,
                n = e.isShowPreLoginBanner,
                i = "dualChannelGuideDialog-".concat(U.getPage().oid),
                r = i && f().getStorageSync(i);
              (0, m.useEffect)(
                function () {
                  a && !r && U.ubtTrace(199775);
                },
                [a]
              );
              var o = function () {
                  i && f().setStorageSync(i, !0);
                },
                c = function () {
                  o(), pa();
                };
              return r || n
                ? (0, S.tZ)(va.View, {})
                : (0, S.tZ)(Ma.ZtActivityPop, {
                    show: a,
                    onClose: c,
                    onWrapClose: c,
                    animation: "normal",
                    children: (0, S.BX)(va.View, {
                      className: " _Vb _be _TD _GD -Ka",
                      children: [
                        (0, S.BX)(va.View, {
                          className: " _sb _ED _bc _Oc _UD _i _l _n",
                          children: [
                            "开通",
                            (0, S.tZ)(va.Icon, {
                              className: " _VD _Ua _WD _XD",
                            }),
                            "成功率倍增",
                          ],
                        }),
                        (0, S.tZ)(sr.Z, {}),
                        (0, S.tZ)(va.View, {
                          className: " _bg _Ys _ns _Gc _Xc _qb _pq _o",
                          id: "AJBb",
                          onClick: function () {
                            return o(), U.ubtTrace(199776), pa(), void Jt();
                          },
                          children: "去免费开通",
                        }),
                      ],
                    }),
                  });
            }),
            dr = _.default.isTieyou,
            ur = (0, X.$j)(function (e) {
              return {
                grabHouBuInfo: e.grabOrderModel.candidateInfo.grabHouBuInfo,
              };
            })(function (e) {
              var t = e.visible,
                a = e.grabHouBuInfo,
                n = void 0 === a ? {} : a;
              if (null == n || !n.candidateStatus)
                return (0, S.tZ)(va.View, {});
              var i = pa;
              return (0,
              S.tZ)(Ma.ZtDrawer, { show: t, onClose: i, title: "候补购票", onWrapClose: i, className: "-Va", children: (0, S.BX)(va.View, { className: " _Kd _uE _dc _vE", children: [(0 === n.candidateStatus.code || 2 === n.candidateStatus.code || 3 === n.candidateStatus.code || 5 === n.candidateStatus.code || 6 === n.candidateStatus.code || 8 === n.candidateStatus.code) && (0, S.BX)(va.View, { children: [(0, S.BX)(va.View, { className: " _o _Ic _W _Ld _hi -Za", children: [(0, S.tZ)(va.Image, { className: " _yE _Ij _nc _p _zE _On", src: n.candidateStatus.icon }), n.candidateStatus.title] }), (0, S.tZ)(va.View, { className: " _gj _Ma _F _Ld _W _o", children: n.candidateStatus.desc })] }), 1 === n.candidateStatus.code && (0, S.tZ)(va.Block, { children: (0, S.BX)(va.View, { children: [(0, S.BX)(va.View, { className: " _o _Ic _W _Ld _hi -Za", children: [(0, S.tZ)(va.Image, { className: " _yE _Ij _nc _p _zE _On", src: n.candidateStatus.icon }), n.candidateStatus.title] }), n.candidateStatus.desc && (0, S.tZ)(va.View, { className: " _gj _Ma _F _Ld _W _o", children: n.candidateStatus.desc }), (0, S.tZ)(va.View, { className: "".concat(" _xE _lc _i _n _l", " ").concat(dr ? "ty" : "zx"), id: "AJBm", onClick: Qa, "data-ubt-key": "wx_orderdetail_checkHouBuOrderDetail", children: (0, S.tZ)(va.Text, { className: " _ns _Np _Ys _qb _vl _qc _o", children: "查看待兑现订单" }) })] }) }), 4 === n.candidateStatus.code && (0, S.tZ)(va.Block, { children: (0, S.BX)(va.View, { children: [(0, S.BX)(va.View, { className: " _o _Ic _W _Ld _hi -Za", children: [(0, S.tZ)(va.Image, { className: " _yE _Ij _nc _p _zE _On", src: n.candidateStatus.icon }), n.candidateStatus.title] }), (0, S.tZ)(va.View, { className: " _gj _Ma _F _Ld _W _o", children: n.candidateStatus.desc }), (0, S.tZ)(va.View, { className: "".concat(" _xE _lc _i _n _l", " ").concat(dr ? "ty" : "zx"), id: "AJBn", onClick: Jt, "data-ubt-key": "wx_orderdetail_gotoLogin12306AndAuth", children: (0, S.tZ)(va.Text, { className: " _ns _Np _Ys _qb _vl _qc _o", children: "开通激活铁路畅行会员" }) })] }) }), 7 === n.candidateStatus.code && (0, S.tZ)(va.Block, { children: (0, S.BX)(va.View, { children: [(0, S.BX)(va.View, { className: " _o _Ic _W _Ld _hi -Za", children: [(0, S.tZ)(va.Image, { className: " _yE _Ij _nc _p _zE _On", src: n.candidateStatus.icon }), n.candidateStatus.title] }), (0, S.tZ)(va.View, { className: " _gj _Ma _F _Ld _W _o", children: n.candidateStatus.desc }), (0, S.tZ)(va.View, { className: "".concat(" _xE _lc _i _n _l", " ").concat(dr ? "ty" : "zx"), id: "AJBo", onClick: $a, "data-ubt-key": "wx_orderdetail_gotoLogin12306AndAuth", children: (0, S.tZ)(va.Text, { className: " _ns _Np _Ys _qb _vl _qc _o", children: "开启候补通道" }) })] }) })] }) });
            });
          var _r = (0, X.$j)(function (e) {
              return {
                accountDesc: e.planModel.relativeAccountInfo.accountDesc,
              };
            })(function (e) {
              var t,
                a = e.visible,
                n = e.accountDesc;
              if (!n) return (0, S.tZ)(va.View, {});
              var i = pa;
              return (0, S.tZ)(Ma.ZtDrawer, {
                show: a,
                title: n.title,
                onWrapClose: i,
                onClose: i,
                drawerStyle: {
                  borderRadius: "32rpx 32rpx 0 0",
                  background: "#f8f8f8",
                },
                children: (0, S.tZ)(va.View, {
                  className: " _bE",
                  children:
                    n &&
                    n.title &&
                    (0, S.tZ)(va.View, {
                      className: " _cE _dE _dc",
                      children:
                        null === (t = n.descList) || void 0 === t
                          ? void 0
                          : t.map(function (e, t) {
                              return (0,
                              S.BX)(va.Block, { children: [(0, S.tZ)(va.View, { className: " _eE _p _fE _Gi _W -Ma", children: e.title }), (0, S.tZ)(va.View, { className: " _gE _F _Kc -Na", children: e.subTitle })] }, t);
                            }),
                    }),
                }),
              });
            }),
            mr = (0, X.$j)(function (e) {
              return {
                claimFailReason:
                  e.productModel.failClaimProduct.claimFailReason || "",
              };
            })(function (e) {
              var t = e.visible,
                a = e.claimFailReason,
                n = void 0 === a ? "" : a;
              return (0,
              S.tZ)(Ma.ZtActivityPop, { show: t, onClose: pa, children: (0, S.BX)(va.View, { className: "".concat(" _Vb _be _Pi _pl", " ").concat(_.default.isTieyou ? "ty" : "zx"), children: [(0, S.tZ)(va.View, { className: " _YD _Ae _p _vr -La" }), (0, S.tZ)(va.View, { className: " _o _Bj _Xb _rr _Te _Qj", children: "抱歉，理赔申请失败" }), (0, S.tZ)(va.View, { className: " _ZD _o _oc _G _V", children: n }), (0, S.tZ)(va.Button, { className: " _w _vi _Gc _TD _aE _o _qb _Ec _Xc", id: "AJBZ", onClick: pa, children: "我知道了" })] }) });
            }),
            pr = _.default.isTieyou;
          var fr = (0, X.$j)(function () {
              var e,
                t =
                  null === (e = ce("ideaTrainToast")) || void 0 === e
                    ? void 0
                    : e._jsonInfo,
                a = null == t ? void 0 : t.toastJson,
                n = null;
              return (
                a &&
                  (n = {
                    btnName: t.btnName,
                    subTitle: t.subTitle,
                    title: t.title,
                    idealTrainList: a,
                  }),
                { content: n }
              );
            })(function (e) {
              var t = e.visible,
                a = e.content,
                n = a || {},
                i = n.title,
                r = n.subTitle,
                o = n.btnName,
                c = n.idealTrainList,
                s = void 0 === c ? [] : c,
                l = U.getState().grabOrderModel.orderInfo,
                d = (0, m.useState)(-1),
                u = (0, Pt.Z)(d, 2),
                _ = u[0],
                p = u[1];
              return a
                ? (0, S.tZ)(Ma.ZtDrawer, {
                    show: t,
                    onWrapClose: pa,
                    onClose: pa,
                    children: (0, S.BX)(va.View, {
                      className: " _yd _hl -ub",
                      children: [
                        (0, S.BX)(va.View, {
                          className: " _vA _hl _fF _i _l",
                          children: [
                            (0, S.tZ)(Ma.ZtRichText, {
                              className: " _Xb _ED _nb",
                              nodes: i,
                            }),
                            (0, S.tZ)(Ma.ZtRichText, {
                              className: " _Zg _w _gF _U _Ua _ve _D",
                              nodes: r,
                            }),
                          ],
                        }),
                        (0, S.tZ)(va.View, {
                          className: " _i _k _l _hF _iF",
                          children: s.map(function (e, t) {
                            return (0, S.BX)(
                              va.View,
                              {
                                className: ""
                                  .concat(
                                    " _i _l _Vb _dc _jF _Rh _kF _Qd _Mb -vb -wb",
                                    " "
                                  )
                                  .concat(t === _ ? "-xb" : ""),
                                id: "AJBp",
                                onClick: function () {
                                  !(function (e) {
                                    p(e);
                                  })(t);
                                },
                                children: [
                                  (0, S.BX)(va.View, {
                                    className: "-zb  _i _k -yb",
                                    children: [
                                      (0, S.tZ)(va.View, {
                                        className: " _Xb _lF _Oc",
                                        children: e.departTime || "",
                                      }),
                                      (0, S.tZ)(va.View, {
                                        className: " _ub _Xb _mF _Q",
                                        children: e.departStation || "",
                                      }),
                                    ],
                                  }),
                                  (0, S.BX)(va.View, {
                                    className: " _i _nj _n _l",
                                    children: [
                                      (0, S.tZ)(va.View, {
                                        className: " _oc _nF _Q",
                                        children: e.time,
                                      }),
                                      (0, S.tZ)(va.View, {
                                        className: " _gj _Ia _at _oF",
                                      }),
                                      (0, S.BX)(va.View, {
                                        className: " _gj _i _l",
                                        children: [
                                          (0, S.tZ)(va.View, {
                                            className: " _oc _nF _Q",
                                            children: e.trainNumber,
                                          }),
                                          1 === e.exchangeable &&
                                            (0, S.tZ)(va.Image, {
                                              src: "https://images3.c-ctrip.com/ztrip/train_zhu/tg_TrainList_dui.png",
                                              className:
                                                " _Og _og _Ye  _Og _og _Ye",
                                            }),
                                          1 === e.fastPass &&
                                            (0, S.tZ)(va.Image, {
                                              src: "https://images3.c-ctrip.com/ztrip/train_zhu/tg_TrainList_IDcard.png",
                                              className: " _Og _og _Ce",
                                            }),
                                          1 === e.isJy &&
                                            (0, S.tZ)(va.Image, {
                                              src: "https://images3.c-ctrip.com/ztrip/train_zhu/tg_TrainList_jing.png",
                                              className: "icon-jing",
                                            }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, S.BX)(va.View, {
                                    className: "-Ab  _i _k -yb",
                                    children: [
                                      (0, S.tZ)(va.View, {
                                        className: " _Xb _lF _Oc",
                                        children: e.arriveTime || "",
                                      }),
                                      (0, S.tZ)(va.View, {
                                        className: " _ub _Xb _mF _Q",
                                        children: e.arriveStation || "",
                                      }),
                                    ],
                                  }),
                                  (0, S.BX)(va.View, {
                                    className: " _i _Sj _l _pF",
                                    children: [
                                      t === _ &&
                                        (0, S.tZ)(Ma.ZtRichText, {
                                          className: " _qF _P _gb _Al _x _rF",
                                          nodes: o || "",
                                        }),
                                      (0, S.tZ)(va.View, {
                                        className: "iconfont "
                                          .concat(
                                            t === _
                                              ? "ifont-radioed"
                                              : "ifont-radio",
                                            " "
                                          )
                                          .concat(" _Zg _sF"),
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              e.trainNumber
                            );
                          }),
                        }),
                        (0, S.BX)(va.View, {
                          className: " _xD _i _m _Vb",
                          children: [
                            (0, S.tZ)(va.View, {
                              className: " _o _tF _Mb _Ae _ng _xb _x _au",
                              id: "AJBq",
                              onClick: pa,
                              children: "暂不需要",
                            }),
                            (0, S.BX)(va.View, {
                              className: " _i _k _w _dr _Mb _Ae _ng _Pr _o",
                              id: "AJBr",
                              onClick: function () {
                                if (_ > -1) {
                                  var e,
                                    t,
                                    a = s[_];
                                  U.ubtTrace(
                                    "ZN_detail_train_lixiangcheciqueren_click",
                                    {
                                      userId: Q.ZP.uid,
                                      enterTime: Ka.Z.getNow(),
                                      partner: pr ? "tieyou" : "zhixing",
                                      orderId: U.getPage().oid,
                                      idealTrainInfo: JSON.stringify({
                                        arriveStation:
                                          null == a ? void 0 : a.arriveStation,
                                        trainNumber:
                                          null == a ? void 0 : a.trainNumber,
                                        departStation:
                                          null == a ? void 0 : a.departStation,
                                        departDateTime: ""
                                          .concat(
                                            null == l ||
                                              null === (e = l.leaveDate) ||
                                              void 0 === e ||
                                              null === (t = e.split(",")) ||
                                              void 0 === t
                                              ? void 0
                                              : t[0],
                                            " "
                                          )
                                          .concat(
                                            (null == a
                                              ? void 0
                                              : a.departTime) + ":00"
                                          ),
                                        durationMinute:
                                          (null == a
                                            ? void 0
                                            : a.durationMinute) + "",
                                      }),
                                    }
                                  ),
                                    pa(),
                                    (0, I.showToast)(
                                      "我们会优先抢该车次，但也有可能抢到您的其他备选车次"
                                    );
                                } else (0, I.showToast)("请先选择车次");
                              },
                              children: [
                                (0, S.tZ)(va.View, {
                                  className: " _uF _ub _au _Qj",
                                  children: "确定",
                                }),
                                (0, S.tZ)(va.View, {
                                  className: " _tj _vF _qb _wF _O",
                                  children: "其他车次仍正常抢票",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  })
                : (0, S.tZ)(va.View, {});
            }),
            hr = _.default.isTieyou;
          var gr = function (e) {
              var t = e.visible,
                a = ["分享到好友微信", "好友账号授权，无需支付"];
              return (0, S.tZ)(Ma.ZtDrawer, {
                show: t,
                onWrapClose: pa,
                onClose: pa,
                drawerStyle: { borderRadius: "40rpx 40rpx 0 0" },
                className: "-mb",
                children: (0, S.BX)(va.View, {
                  className: " _kd _BD _Vb",
                  children: [
                    (0, S.tZ)(va.Image, {
                      className: " _jw _nd",
                      src: hr
                        ? "https://images3.c-ctrip.com/ztrip/train.xin/2022_02/windows_help_ty.webp"
                        : "https://images3.c-ctrip.com/ztrip/train.xin/2022_02/windows_help_zx.webp",
                      webp: !0,
                    }),
                    (0, S.BX)(va.View, {
                      className: " _o _WE",
                      children: [
                        (0, S.tZ)(va.View, {
                          className: " _Xb _XE _db _Mj",
                          children: "账号问题还没解决？",
                        }),
                        (0, S.tZ)(Ma.ZtRichText, {
                          className: " _oc _YE _nc _S",
                          nodes: hr
                            ? '你可以邀请好友<Font color="#FC6E51">帮你抢</Font>这一单'
                            : '你可以邀请好友<Font color="#198CFF">帮你抢</Font>这一单',
                        }),
                      ],
                    }),
                    (0, S.BX)(va.View, {
                      className: " _ZE _Oa _aF _ss",
                      children: [
                        (0, S.tZ)(va.View, {
                          className: " _x _YE _nc _S _o _i _n _l -nb -ob -pb",
                          children: "只需2步 5秒搞定",
                        }),
                        (0, S.BX)(va.View, {
                          className: " _bF _i _l",
                          children: [
                            (0, S.tZ)(va.View, {
                              className: " _i _k _l _cF _Qf _pa _dF -qb",
                              children: a.map(function (e, t) {
                                return (0,
                                S.tZ)(m.default.Fragment, { children: (0, S.tZ)(va.View, { className: "-rb", children: t }) }, t);
                              }),
                            }),
                            (0, S.tZ)(va.View, {
                              children: a.map(function (e, t) {
                                return (0,
                                S.tZ)(m.default.Fragment, { children: (0, S.tZ)(va.View, { className: " _oc _YE _nc _S -sb", children: e }) }, t);
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, S.tZ)(va.View, {
                      className: " _aE _i _n",
                      children: (0, S.tZ)(va.Button, {
                        className: " _w _pb _Gc _eF _qb _pq _Xc -tb",
                        id: "AJBc",
                        onClick: function () {
                          pa(),
                            (function () {
                              var e =
                                U.getState().planModel.relativeAccountInfo
                                  .relativeKey;
                              U.navigateTo({
                                url: "/pages/train/accounthelp/index1?relativeKey=".concat(
                                  encodeURIComponent(e)
                                ),
                              });
                            })(),
                            U.ubtTrace(205914, {
                              bizKey: "z_grabdetail_hybq_popup_click",
                            });
                        },
                        children: "立即邀请",
                      }),
                    }),
                  ],
                }),
              });
            },
            br = a(67813),
            wr = m.default.memo(
              (0, X.$j)(function (e) {
                var t,
                  a = e.productModel;
                return {
                  specificallyGrabDrawerInfo:
                    (null === (t = ce(k.nightTicketToast)) || void 0 === t
                      ? void 0
                      : t._jsonInfo) ||
                    a.specificallyGrab.specificallyGrabDrawerInfo,
                  isAutoShowSpecificallyGrabDrawer:
                    a.specificallyGrab.isAutoShowSpecificallyGrabDrawer,
                };
              })(function (e) {
                var t = e.visible,
                  a = e.specificallyGrabDrawerInfo,
                  n = e.isAutoShowSpecificallyGrabDrawer,
                  i = function () {
                    pa(),
                      n &&
                        U.getDispatch().productModel.setSpecificallyGrab({
                          isAutoShowSpecificallyGrabDrawer: !1,
                        });
                  };
                return (0, S.tZ)(br.Z, {
                  visible: t,
                  content: a,
                  onClose: i,
                  onConfirm: function () {
                    U.ubtTrace(205922, {
                      bizKey: n
                        ? "z_detail_grab_24h_zrq_popup_click"
                        : "z_grab_detail_24h_zrq_actionbar_click",
                    }),
                      i();
                    var e =
                      U.getState().grabOrderModel.ticketInfo.passengerList;
                    Xe({ productList: [{ type: 25, num: e.length }] });
                  },
                  ubtTrace: U.ubtTrace,
                });
              })
            ),
            vr = a(54675),
            Zr = { 1: 1, 2: 0, 3: 2 },
            Nr = function (e) {
              var t = e.checked,
                a = e.propStyle,
                n = e.content,
                i = e.onChecked,
                r = n || {},
                o = r.title,
                c = r.tag,
                s = (r.type, r.desc);
              return n
                ? (0, S.BX)(va.View, {
                    className: " _xG _Vb _Oa _jA _Mb",
                    style: a,
                    children: [
                      (0, S.BX)(va.View, {
                        className: " _i _l",
                        children: [
                          (0, S.tZ)(va.View, {
                            className: " _Xb _yG _rm _V",
                            children: o,
                          }),
                          (0, S.tZ)(va.View, {
                            className: " _Zg _Al _Ze _uG _O _Rj _kc _p -Xb",
                            children: c,
                          }),
                        ],
                      }),
                      (0, S.BX)(va.View, {
                        className: " _Z _Mb _i _Tb -Yb",
                        children: [
                          (0, S.tZ)(qn, { content: n }),
                          (0, S.tZ)(va.Image, {
                            src: "".concat(
                              t
                                ? "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/06/icon_fill_20_checkbox_on.webp"
                                : "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/06/icon_line_20_checkbox_off.webp"
                            ),
                            className: " _Xk _Ua _Ta",
                            id: "AJCK",
                            onClick: i,
                            webp: !0,
                          }),
                        ],
                      }),
                      (0, S.tZ)(va.View, { className: " _zG _Yq _wG" }),
                      (0, S.tZ)(Ma.ZtRichText, {
                        className: " _oc _nF _De _Q",
                        nodes: s,
                      }),
                    ],
                  })
                : (0, S.tZ)(va.View, {});
            },
            Ir = function (e) {
              var t = e.checked,
                a = e.isShowTitle,
                n = e.propStyle,
                i = e.content,
                r = e.onChecked,
                o = i || {},
                c = o.title,
                s = o.tag,
                l = (o.type, o.desc);
              return i
                ? (0, S.BX)(va.View, {
                    className: " _xG _Vb _Oa _Mb",
                    style: n,
                    children: [
                      a &&
                        (0, S.BX)(va.View, {
                          className: " _i _l",
                          children: [
                            (0, S.tZ)(va.View, {
                              className: " _Xb _yG _rm _V",
                              children: c,
                            }),
                            (0, S.tZ)(va.View, {
                              className: " _Zg _Al _Ze _uG _O _Rj _kc _p -bc",
                              children: s,
                            }),
                          ],
                        }),
                      (0, S.BX)(va.View, {
                        className: " _Z _Mb _i _l _Id -cc",
                        style: a
                          ? {}
                          : { height: "40px", marginBottom: "15px" },
                        children: [
                          (0, S.tZ)(Kn.Z, { ticketInfo: i }),
                          (0, S.tZ)(va.Image, {
                            src: "".concat(
                              t
                                ? "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/06/icon_fill_20_checkbox_on.webp"
                                : "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/06/icon_line_20_checkbox_off.webp"
                            ),
                            className: " _Ua _Ta",
                            id: "AJCL",
                            onClick: r,
                            webp: !0,
                          }),
                        ],
                      }),
                      (0, S.tZ)(va.View, { className: " _zG _Yq _wG" }),
                      (0, S.tZ)(Ma.ZtRichText, {
                        className: " _oc _nF _De _Q",
                        nodes: l,
                      }),
                    ],
                  })
                : (0, S.tZ)(va.View, {});
            },
            Sr =
              (_.default.isTieyou,
              function (e) {
                var t = e.visible,
                  a = e.type,
                  n = e.content,
                  o = e.isSelectFirst,
                  c = void 0 === o || o,
                  s = e.upSeatName,
                  l = n || {},
                  d =
                    (l.title,
                    l.crossStationTitle,
                    l.nearByTitle,
                    l.crossStationList),
                  u = l.nearStationList,
                  _ = (l.recSeatTitle, l.recommendSeatList),
                  p = l.firstToastIndex,
                  h = -1,
                  g = !1;
                -1 !== [1, 2, 3].indexOf(a) ? (h = a) : ((h = p), (g = !0));
                var b = (0, m.useState)([]),
                  w = (0, Pt.Z)(b, 2),
                  v = w[0],
                  Z = w[1];
                if (
                  ((0, m.useRef)({ index: -1 }),
                  (0, m.useEffect)(
                    function () {
                      t &&
                        U.ubtTrace(205920, {
                          exposureType: "actionbar",
                          bizKey: "z_detail_grab_fatj_actionbar_show",
                          type: Zr[h],
                          from: g ? 1 : 0,
                        });
                    },
                    [t]
                  ),
                  (0, m.useEffect)(
                    function () {
                      Z(c ? (g ? [] : [1]) : []);
                    },
                    [t]
                  ),
                  !n)
                )
                  return (0, S.tZ)(va.View, {});
                var N = function (e) {
                    var t = [];
                    switch (e) {
                      case 1:
                        t = u;
                        break;
                      case 2:
                        t = d;
                        break;
                      case 3:
                        t = _;
                    }
                    return t;
                  },
                  I = function () {
                    pa(),
                      U.getDispatch().planModel.setRecommendedScheme({
                        recommendedSchemeBannerCheckedList: [],
                      });
                  },
                  T = function (e, t) {
                    I(), Zt(e, t);
                  },
                  y = (function () {
                    var e = (0, r.Z)(
                      (0, i.Z)().mark(function e() {
                        var t, a;
                        return (0, i.Z)().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((t = N(h)),
                                  (a = []),
                                  v.forEach(function (e, n) {
                                    if (e && t[n])
                                      if (1 === h) {
                                        var i = {
                                          arriveStation:
                                            t[n].arriveStation || "",
                                          departStation:
                                            t[n].departStation || "",
                                          trainNumber: t[n].trainNumber || "",
                                        };
                                        a.push(i);
                                      } else if (2 === h) {
                                        var r,
                                          o,
                                          c,
                                          s = t[n];
                                        null === (r = s.extraAmountInfos) ||
                                          void 0 === r ||
                                          r.forEach(function (e) {
                                            o
                                              ? o < e.amount &&
                                                ((o = e.amount),
                                                (c = e.successRate))
                                              : ((o = e.amount),
                                                (c = e.successRate));
                                          });
                                        var l = {
                                          recommendDepartStation:
                                            s.recommendDepartStation,
                                          recommendArriveStation:
                                            s.recommendArriveStation,
                                          recommendDepartCount:
                                            s.recommendDepartCount,
                                          recommendArriveCount:
                                            s.recommendArriveCount,
                                          extraAmount: o,
                                          successRate: c,
                                          defaultOpen: s.defaultOpen,
                                        };
                                        a.push(l);
                                      } else if (3 === h) {
                                        var d;
                                        a.push(
                                          (null === (d = t[n]) || void 0 === d
                                            ? void 0
                                            : d.seatName) || ""
                                        );
                                      }
                                  }),
                                  3 !== h ||
                                    !a.some(function (e) {
                                      return e === s;
                                    }))
                                ) {
                                  e.next = 11;
                                  break;
                                }
                                return (
                                  (e.next = 6),
                                  U.ubtTrace(
                                    "TZWgrabDetail_grabDetail_UpSeatWarmTipsPopup_exp",
                                    { PageId: U.getPage().pageId }
                                  ),
                                  new Promise(function (e) {
                                    U.showMultiButtonDialog({
                                      content:
                                        "您的升级座席服务将会自动取消，服务费会在订单结束后退回您的支付账户。",
                                      leftButtonName: "在想想",
                                      rightButtonName: "确定",
                                      onLeftButtonClick: function () {
                                        U.ubtTrace(
                                          "TZWgrabDetail_grabDetail_UpSeatWarm_Recon_click",
                                          { PageId: U.getPage().pageId }
                                        ),
                                          e(!1);
                                      },
                                      onRightButtonClick: function () {
                                        U.ubtTrace(
                                          "TZWgrabDetail_grabDetail_UpSeatWarm_Confirm_click",
                                          { PageId: U.getPage().pageId }
                                        ),
                                          e(!0);
                                      },
                                    });
                                  })
                                );
                              case 6:
                                if (!e.sent) {
                                  e.next = 10;
                                  break;
                                }
                                e.next = 11;
                                break;
                              case 10:
                                return e.abrupt("return");
                              case 11:
                                U.ubtTrace(205920, {
                                  bizKey: "z_detail_grab_fatj_actionbar_click",
                                  plan: v.reduce(function (e, t, a) {
                                    return t && e.push(a + 1), e;
                                  }, []),
                                  from: g ? 1 : 0,
                                }),
                                  T(h, a);
                              case 13:
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
                  V = function (e) {
                    Z(function (t) {
                      var a = (0, Fe.Z)(t);
                      return (a[e] = !a[e]), a;
                    });
                  },
                  C =
                    null == _
                      ? void 0
                      : _.find(function (e) {
                          return 1 === e.isBannerChoice;
                        }),
                  D =
                    null == _
                      ? void 0
                      : _.filter(function (e) {
                          return !e.isBannerChoice;
                        }),
                  k = function (e) {
                    var t = !1;
                    switch (e) {
                      case 1:
                        (null == u
                          ? void 0
                          : u.filter(function (e) {
                              return !e.isBannerChoice;
                            }).length) > 0 && (t = !0);
                        break;
                      case 2:
                        (null == d
                          ? void 0
                          : d.filter(function (e) {
                              return !e.isBannerChoice;
                            }).length) > 0 && (t = !0);
                        break;
                      case 3:
                        (null == D ? void 0 : D.length) > 0 && (t = !0);
                    }
                    return t;
                  };
                return (0, S.BX)(Ma.ZtDrawer, {
                  show: t,
                  className: "-Zb",
                  isShowClose: !1,
                  onWrapClose: I,
                  maxHeight: "80vh",
                  drawerStyle: { borderRadius: "32rpx 32rpx 0 0" },
                  children: [
                    (0, S.tZ)(va.View, { className: " _u _q _AG _hl _Xs _Z" }),
                    (0, S.BX)(va.View, {
                      className: " _i _p _BG",
                      children: [
                        (0, S.tZ)(va.View, {
                          className: " _Xb _xx _bc _Oc",
                          children: (function (e) {
                            var t = "";
                            switch (e) {
                              case 1:
                                t = n.nearStationTitle;
                                break;
                              case 2:
                                t = n.crossStationTitle;
                                break;
                              case 3:
                                t = n.recSeatTitle;
                            }
                            return t;
                          })(h),
                        }),
                        2 === h &&
                          (0, S.tZ)(Un.Z, {
                            customizeStyle: {
                              container: "margin-left:".concat(
                                f().pxTransform(8)
                              ),
                              content: "font-size:".concat(f().pxTransform(28)),
                              icon: "width: "
                                .concat(f().pxTransform(32), ";height: ")
                                .concat(f().pxTransform(32), ";margin-left:")
                                .concat(f().pxTransform(2)),
                            },
                          }),
                        (0, S.tZ)(va.Image, {
                          src: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/06/icon_line_24_close.webp",
                          className: " _u _bc _cc _CG _ac",
                          id: "AJCM",
                          onClick: I,
                          webp: !0,
                        }),
                      ],
                    }),
                    (0, S.BX)(va.View, {
                      className: " _p _DG _EG _qr",
                      children: [
                        (0, S.BX)(va.View, {
                          className: " _Rd",
                          children: [
                            1 === h &&
                              (0, S.tZ)(Ir, {
                                isShowTitle: !0,
                                content:
                                  null == u
                                    ? void 0
                                    : u.find(function (e) {
                                        return 1 === e.isBannerChoice;
                                      }),
                                checked: v[0],
                                onChecked: function () {
                                  return V(0);
                                },
                              }),
                            2 === h &&
                              (0, S.tZ)(Nr, {
                                content:
                                  null == d
                                    ? void 0
                                    : d.find(function (e) {
                                        return 1 === e.isBannerChoice;
                                      }),
                                checked: v[0],
                                onChecked: function () {
                                  return V(0);
                                },
                              }),
                            3 === h &&
                              C &&
                              (0, S.BX)(va.View, {
                                className: " _Vb _Oa _tG",
                                children: [
                                  (0, S.BX)(va.View, {
                                    className: " _i _m",
                                    children: [
                                      (0, S.BX)(va.View, {
                                        className: " _j _ru _i _l",
                                        children: [
                                          (0, S.tZ)(va.View, {
                                            className: " _sb _pq _Ua _U",
                                            children: C.seatName,
                                          }),
                                          (0, S.tZ)(va.View, {
                                            className:
                                              " _Zg _Al _Ze _uG _O _Rj _kc _p -Wb",
                                            children: C.tag,
                                          }),
                                        ],
                                      }),
                                      C.price &&
                                        (0, S.tZ)(va.View, {
                                          className: " _oc _YE _Ua _U",
                                          children: "￥" + C.price,
                                        }),
                                      (0, S.tZ)(va.View, {
                                        className: " _j _ru",
                                        children: (0, S.tZ)(va.Image, {
                                          src: "".concat(
                                            v[0]
                                              ? "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/06/icon_fill_20_checkbox_on.webp"
                                              : "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/06/icon_line_20_checkbox_off.webp"
                                          ),
                                          className: " _tD _Ua _Ta",
                                          id: "AJCN",
                                          onClick: function () {
                                            return V(0);
                                          },
                                          webp: !0,
                                        }),
                                      }),
                                    ],
                                  }),
                                  (0, S.tZ)(va.View, {
                                    className: " _vG _Yq _wG",
                                  }),
                                  (0, S.tZ)(Ma.ZtRichText, {
                                    className: " _oc _nF _De _Q",
                                    nodes: C.subTitle,
                                  }),
                                ],
                              }),
                          ],
                        }),
                        k(h) &&
                          (0, S.tZ)(va.View, {
                            className: " _FG _oc _GG _eg _R",
                            children: (function (e) {
                              var t = "";
                              switch (e) {
                                case 1:
                                  t = n.nearStationSubTitle;
                                  break;
                                case 2:
                                  t = n.crossStationSubTitle;
                                  break;
                                case 3:
                                  t = n.recSeatSubTitle;
                              }
                              return t;
                            })(h),
                          }),
                        k(h) &&
                          (0, S.BX)(va.View, {
                            className: " _er",
                            children: [
                              1 === h &&
                                u
                                  .filter(function (e) {
                                    return !e.isBannerChoice;
                                  })
                                  .map(function (e, t) {
                                    return (0, S.tZ)(
                                      va.View,
                                      {
                                        children: (0, S.tZ)(Ir, {
                                          propStyle: { marginTop: "8px" },
                                          content: e,
                                          checked: v[t + 1],
                                          onChecked: function () {
                                            return V(t + 1);
                                          },
                                        }),
                                      },
                                      t
                                    );
                                  }),
                              2 === h &&
                                d
                                  .filter(function (e) {
                                    return !e.isBannerChoice;
                                  })
                                  .map(function (e, t) {
                                    return (0, S.tZ)(
                                      va.View,
                                      {
                                        children: (0, S.tZ)(Nr, {
                                          propStyle: { marginTop: "8px" },
                                          content: e,
                                          checked: v[t + 1],
                                          onChecked: function () {
                                            return V(t + 1);
                                          },
                                        }),
                                      },
                                      t
                                    );
                                  }),
                              3 === h &&
                                (0, S.tZ)(va.View, {
                                  className: " _Vb _Oa",
                                  children:
                                    D &&
                                    D.map(function (e, t) {
                                      return (0, S.BX)(
                                        va.View,
                                        {
                                          className: " _Wn _ag _yb _Mb _i _m",
                                          style:
                                            t !== D.length - 1
                                              ? "border-bottom: 1px solid #ededed;"
                                              : "",
                                          children: [
                                            (0, S.tZ)(va.View, {
                                              className: " _j _ru",
                                              children: (0, S.tZ)(va.View, {
                                                className: " _sb _pq _Ua _U",
                                                children: e.seatName,
                                              }),
                                            }),
                                            e.price &&
                                              (0, S.tZ)(va.View, {
                                                className: " _oc _YE _Ua _U",
                                                children: "￥" + e.price,
                                              }),
                                            (0, S.tZ)(va.View, {
                                              className: " _j _ru",
                                              children: (0, S.tZ)(va.Image, {
                                                src: "".concat(
                                                  v[t + 1]
                                                    ? "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/06/icon_fill_20_checkbox_on.webp"
                                                    : "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/06/icon_line_20_checkbox_off.webp"
                                                ),
                                                className: " _tD _Ua _Ta",
                                                id: "AJCO",
                                                onClick: function () {
                                                  return V(t + 1);
                                                },
                                                webp: !0,
                                              }),
                                            }),
                                          ],
                                        },
                                        t
                                      );
                                    }),
                                }),
                            ],
                          }),
                      ],
                    }),
                    (0, S.tZ)(va.View, {
                      className: " _Vb _hl _HG _u _r _s _t _IG",
                      children: (0, S.tZ)(va.Button, {
                        className: " _w _Oa _Gc _qb _fu _Xc -ac",
                        id: "AJCP",
                        onClick: y,
                        children: "确认添加",
                      }),
                    }),
                  ],
                });
              }),
            Tr = m.default.memo(
              (0, X.$j)(function (e) {
                var t = e.planModel,
                  a = e.productModel;
                return {
                  content: t.recommendedScheme.recommendedSchemeDrawerInfo,
                  type: t.recommendedScheme.recommendedSchemeDrawerType,
                  isSelectFirst:
                    t.recommendedScheme.recommendedSchemeDrawerIsSelectFirst,
                  upSeatName: a.seatUpgradeProduct.upSeatName,
                };
              })(Sr)
            ),
            yr = a(43809),
            Vr = m.default.memo(
              (0, X.$j)(function (e) {
                return {
                  seasonMemberShipDrawerInfo:
                    e.productModel.vipInfo.seasonMemberShipDrawerInfo,
                };
              })(function (e) {
                var t = e.visible,
                  a = e.seasonMemberShipDrawerInfo,
                  n = function () {
                    pa();
                  };
                return (0, S.tZ)(yr.Z, {
                  visible: t,
                  content: a,
                  onClose: n,
                  onConfirm: function () {
                    n(),
                      (function () {
                        var e,
                          t =
                            U.getState().productModel.vipInfo
                              .seasonMemberShipDrawerInfo,
                          a = U.getState().grabOrderModel.orderInfo.timeRangEnd,
                          n = [];
                        n.push({
                          name: "ubtAppId",
                          value: _.default.memberSellUbtValue || "10000",
                        });
                        var i = {
                          vipCode: t.cardCode,
                          packageType: 0,
                          price:
                            null === (e = t.openVipDescEntity) || void 0 === e
                              ? void 0
                              : e.salePrice,
                          orderScene: U.getPage().seasonMemberOrderScene || 35,
                          trainOrderNumber: U.getPage().oid,
                          grabEndTime: a,
                        };
                        (0, K.dDf)(i, { extension: n })
                          .then(function (e) {
                            1 === e.resultCode
                              ? pe.ZP.doPayment({
                                  business: "train",
                                  orderNumber: e.orderNumber,
                                  goodsId: parseInt(e.goodsId),
                                  title: "火车票订单",
                                })
                                  .then(function () {
                                    setTimeout(function () {
                                      wa(),
                                        U.getDispatch().productModel.setVipInfo(
                                          {
                                            seasonMemberShipDrawerInfo: null,
                                            seasonMemberShipBannerInfo: null,
                                          }
                                        );
                                    }, 200);
                                  })
                                  .catch(function (e) {
                                    console.log(e);
                                  })
                              : (0, I.showModal)(
                                  e.resultMessage || "网络出小差，请稍后重试"
                                );
                          })
                          .catch(function (e) {
                            console.log(e);
                          });
                      })();
                  },
                });
              })
            );
          var Cr = m.default.memo(
              (0, X.$j)(function () {
                var e;
                return {
                  content:
                    null === (e = ce(k.grabDetailCandidateClickToast)) ||
                    void 0 === e
                      ? void 0
                      : e._jsonInfo,
                };
              })(function (e) {
                var t = e.visible,
                  a = e.content,
                  n = (0, m.useState)(3),
                  i = (0, Pt.Z)(n, 2),
                  r = i[0],
                  o = i[1],
                  c = (0, m.useRef)({ timer: null, count: 3 }).current,
                  s = function () {
                    pa();
                  },
                  l = function () {
                    Kt();
                  };
                return (
                  (0, m.useEffect)(
                    function () {
                      if (t)
                        return (
                          (c.timer = setInterval(function () {
                            (c.count = c.count - 1),
                              o(c.count),
                              c.count <= 0 &&
                                (clearInterval(c.timer), s(), l());
                          }, 1e3)),
                          function () {
                            clearInterval(c.timer);
                          }
                        );
                    },
                    [t]
                  ),
                  a
                    ? (0, S.tZ)(Ma.ZtDrawer, {
                        show: t,
                        isDefineHead: !0,
                        onWrapClose: s,
                        drawerStyle: { borderRadius: "40rpx 40rpx 0 0" },
                        children: (0, S.BX)(va.View, {
                          className: " _i _k _l _p _BD _kd _Vb",
                          children: [
                            (0, S.tZ)(va.Image, {
                              className: " _u _q _s _t _kd _CD _DD _Z",
                              src: "https://images3.c-ctrip.com/ztrip/train_zhu/img_Ticket_tui_BG_zx.png",
                            }),
                            (0, S.tZ)(va.Image, {
                              className: " _p _Lp _Pp",
                              src: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/07/img_yanzheng.webp",
                              webp: !0,
                            }),
                            (0, S.tZ)(va.Icon, {
                              className: " _u _qk _xr",
                              size: "48rpx",
                              type: "cancel",
                              color: "#cccccc",
                              id: "AJBT",
                              onClick: function () {
                                s();
                              },
                            }),
                            (0, S.tZ)(va.View, {
                              className: " _p _ub _sb _ED _bc _Oc",
                              children: a.title,
                            }),
                            (0, S.tZ)(va.View, {
                              className: " _p _qd _oc _iu _Ua _U",
                              children: a.desc,
                            }),
                            (0, S.tZ)(va.View, {
                              className:
                                " _o _p _td _w _Oa _Gc _FD _qb _fu _Xc -Ea",
                              id: "AJBU",
                              onClick: function () {
                                c.timer && clearInterval(c.timer), s(), l();
                              },
                              children: ""
                                .concat(a.btn, " （")
                                .concat(r, "s）"),
                            }),
                          ],
                        }),
                      })
                    : (0, S.tZ)(va.View, {})
                );
              })
            ),
            Dr = m.default.memo(
              (0, X.$j)(function (e) {
                var t,
                  a,
                  n = e.grabOrderModel;
                return (
                  (a = {
                    config: n.grabSpeedInfo.speedPointConfig,
                    passengerNum:
                      (null === (t = n.ticketInfo.passengerList) || void 0 === t
                        ? void 0
                        : t.length) || 1,
                    speedLevel: n.grabSpeedInfo.speed || 1,
                    packageNum: n.grabSpeedInfo.usedPackageNum,
                    selectVipDefault: n.grabSpeedInfo.selectVipDefault,
                    vipName: n.grabSpeedInfo.vipName,
                    packPrice: n.grabSpeedInfo.packPrice,
                    availablePackageNum: n.grabSpeedInfo.availablePackageNum,
                  }),
                  (0, u.Z)(
                    a,
                    "selectVipDefault",
                    n.grabSpeedInfo.selectVipDefault
                  ),
                  (0, u.Z)(
                    a,
                    "selectVipDefault",
                    n.grabSpeedInfo.selectVipDefault
                  ),
                  a
                );
              })(function (e) {
                var t,
                  a,
                  n,
                  i = e.isShow,
                  r = void 0 !== i && i,
                  o = e.isTieyou,
                  c = void 0 !== o && o,
                  s = e.config,
                  l = void 0 === s ? {} : s,
                  d = e.packageNum,
                  u = e.speedLevel,
                  _ = e.selectVipDefault,
                  p = void 0 !== _ && _,
                  f = e.vipName,
                  g = e.packPrice,
                  b = e.availablePackageNum,
                  w = void 0 === b ? 0 : b,
                  v = e.passengerNum,
                  Z = void 0 === v ? 1 : v,
                  N =
                    null === (t = oe(x.hotelSpeedAndInviteArea)) || void 0 === t
                      ? void 0
                      : t._jsonInfo,
                  I =
                    (N &&
                      (null === (a = Object.keys(N)) || void 0 === a
                        ? void 0
                        : a.find(function (e) {
                            var t;
                            return (
                              "hotel" ==
                              (null === (t = N[e]) || void 0 === t
                                ? void 0
                                : t.type)
                            );
                          }))) ||
                    -1,
                  T =
                    (N &&
                      (null === (n = Object.keys(N)) || void 0 === n
                        ? void 0
                        : n.find(function (e) {
                            var t;
                            return (
                              "wechat" ==
                              (null === (t = N[e]) || void 0 === t
                                ? void 0
                                : t.type)
                            );
                          }))) ||
                    -1,
                  y = I >= 0 && N[I],
                  V = T >= 0 && N[T];
                (0, m.useEffect)(
                  function () {
                    r && y && U.ubtTrace(199777);
                  },
                  [r, y]
                );
                var C = (0, m.useState)([]),
                  k = (0, Pt.Z)(C, 2),
                  B = k[0],
                  P = k[1],
                  M = (0, m.useState)(""),
                  A = (0, Pt.Z)(M, 2),
                  X = A[0],
                  z = A[1],
                  O = (0, m.useState)(0),
                  G = (0, Pt.Z)(O, 2),
                  L = G[0],
                  F = G[1];
                (0, m.useEffect)(
                  function () {
                    r &&
                      (h.Z.isNotEmptyObj(l) &&
                        U.ubtTrace("s_trn_z_10650060279", {
                          exposureType: "normal",
                          bizKey: "z_grabdetail_sudu_sdjs_show",
                        }),
                      h.Z.isNotEmptyObj(y) &&
                        U.ubtTrace("s_trn_z_10650060279", {
                          exposureType: "normal",
                          bizKey: "z_grabdetail_hotelorder_vip_show",
                        }),
                      V &&
                        U.ubtTrace("s_trn_z_10650060279", {
                          exposureType: "normal",
                          bizKey: "z_grab_detail_vipright_tjflg_show",
                        }));
                  },
                  [r, l, y, V]
                ),
                  (0, m.useEffect)(
                    function () {
                      for (
                        var e = (l.speedRange || "").split(","),
                          t = (l.speedRangeName || "").split(","),
                          a = [],
                          n = 1;
                        n < e.length;
                        n += 1
                      )
                        if (d < +e[n]) {
                          var i = +e[n] - d;
                          a.push({ num: i, name: t[n] });
                        } else a.push({ num: e[n], name: t[n] });
                      P(a);
                      var r = a[u - 1] && a[u - 1].num;
                      if (p) {
                        var o = a.length;
                        r = o > 0 && a[o - 1].num;
                      }
                      z(r);
                    },
                    [l, d, p, u]
                  ),
                  (0, m.useEffect)(
                    function () {
                      var e = Math.round((l.speedFactor - 1) * X);
                      F(e);
                    },
                    [X, l]
                  );
                var j,
                  R = function () {
                    pa(),
                      U.getDispatch().grabOrderModel.setGrabSpeedInfo({
                        triggerSource: "",
                      });
                  },
                  J = l.couponPrices || [],
                  E = (l.speedRangeName && l.speedRangeName.split(",")) || [],
                  H = "";
                if (g * (X * Z - w) > 0) {
                  var q,
                    K =
                      (null ===
                        (q = B.find(function (e) {
                          return e.num === X;
                        })) || void 0 === q
                        ? void 0
                        : q.name) || "";
                  (j = E.indexOf(K)), (H = J[j - 1]);
                }
                var W = g * (w > X * Z ? X * Z : w),
                  Y =
                    "https://images3.c-ctrip.com/ztrip/train_zhu/icon_tag-jb_selected".concat(
                      j == (null == B ? void 0 : B.length)
                        ? "_VIP"
                        : c
                        ? "_ty"
                        : "",
                      ".png"
                    );
                return (0, S.BX)(Ma.ZtDrawer, {
                  show: r,
                  onWrapClose: R,
                  onClose: R,
                  className: "-Cc",
                  children: [
                    (0, S.tZ)(va.Image, {
                      className: " _Hg _fe _u _t _q",
                      src: "https://images3.c-ctrip.com/ztrip/train_zhu/img_qpjs_sheets_bg_zx.png",
                    }),
                    (0, S.BX)(va.View, {
                      className: " _Xb _xx _nb _Uc _lx",
                      children: [
                        (0, S.tZ)(va.Text, { children: "提升抢票速度·" }),
                        (0, S.tZ)(va.Text, {
                          className: "color-primary",
                          children: "出票更快",
                        }),
                      ],
                    }),
                    (0, S.BX)(va.View, {
                      className: " _p _Rs _Vb _Oa _zH _AH",
                      children: [
                        (0, S.tZ)(va.Image, {
                          className: " _Zl _ij _u",
                          src: "https://images3.c-ctrip.com/ztrip/train_zhu/icon_qpjs_shoudong_zx.png",
                        }),
                        (0, S.BX)(va.View, {
                          className: " _i _l _Xb _pq _Ld _Uc _BH",
                          children: [
                            (0, S.tZ)(va.View, { children: "手动提速" }),
                            (0, S.tZ)(va.View, {
                              className: " _oc _C _O _Uc _TB _Zg -Dc bd-1rpx",
                              children: "抢票失败退全款",
                            }),
                            !!H &&
                              (0, S.tZ)(sn.Z, {
                                mode: "img",
                                iconUrl:
                                  "https://images3.c-ctrip.com/ztrip/train_zhu/icon_ty_info_16.png",
                                onClickHandle: function () {
                                  return (function (e) {
                                    U.getDispatch().grabOrderModel.setGrabSpeedInfo(
                                      { couponPrice: e }
                                    ),
                                      ga(D.productIntroductionDrawer);
                                  })(H);
                                },
                              }),
                          ],
                        }),
                        (0, S.BX)(va.View, {
                          className: " _Ma _pu _eg _Uc _R _CH",
                          children: [
                            (0, S.BX)(va.Text, {
                              children: [
                                f,
                                "会员额外赠",
                                (0, S.BX)(va.Text, {
                                  className: "color-primary",
                                  children: [L, "个"],
                                }),
                                "加速包",
                              ],
                            }),
                            (0, S.tZ)(va.Text, {
                              className: " _tA _dg _cj _DH",
                            }),
                            !!H &&
                              (0, S.BX)(va.Text, {
                                children: [
                                  "抢票成功赠",
                                  (0, S.BX)(va.Text, {
                                    className: "color-primary",
                                    children: [H, "元"],
                                  }),
                                  "酒店券",
                                ],
                              }),
                          ],
                        }),
                        (0, S.tZ)(va.View, {
                          className: " _i _Xk _zc",
                          children: B.map(function (e, t) {
                            return (0, S.BX)(
                              va.View,
                              {
                                className: ""
                                  .concat(
                                    " _ol _EH _Gc _en _sb _mu _o _Xk _p _Mb -Ec -Ec",
                                    " "
                                  )
                                  .concat(
                                    t === B.length - 1
                                      ? "flex-1"
                                      : 1 === t
                                      ? "-Gc"
                                      : "-Fc",
                                    " "
                                  )
                                  .concat(
                                    (t + 1) % 3 != 0 && t != B.length - 1
                                      ? "-Hc"
                                      : "",
                                    " "
                                  )
                                  .concat(X === e.num ? "-Kc" : "", " ")
                                  .concat(t < u - 1 && "-Ic"),
                                id: "AJCe",
                                onClick: function () {
                                  t < u - 1 || z(e.num);
                                },
                                children: [
                                  (0, S.tZ)(va.Text, { children: e.name }),
                                  t >= u - 1 &&
                                    (0, S.BX)(va.Text, {
                                      className: "-Jc",
                                      style: X === e.num ? "opacity:.5" : "",
                                      children: ["¥", e.num, "/人"],
                                    }),
                                  t == B.length - 1 &&
                                    (0, S.tZ)(va.View, {
                                      className:
                                        " _u _JC _FH _GH _zh _De _fg _Q _o _qb _HH",
                                      children: "最高速抢票",
                                    }),
                                  X === e.num &&
                                    (0, S.tZ)(va.Image, {
                                      className: " _Tj _Rj _u _Nu _Ou",
                                      src: Y,
                                    }),
                                  X === e.num &&
                                    j === B.length &&
                                    (0, S.tZ)(va.Image, {
                                      className: " _Fq _Gc _u _s _q",
                                      src: "https://images3.c-ctrip.com/ztrip/train_zhu/img_jsb_selected_VIP.png",
                                    }),
                                ],
                              },
                              "ite".concat(t)
                            );
                          }),
                        }),
                        (0, S.BX)(va.View, {
                          className: " _kg _w _dc _Gc _Xc _o _qb _fu -Lc",
                          id: "AJCf",
                          onClick: function () {
                            return (function (e, t) {
                              var a,
                                n =
                                  U.getState().grabOrderModel.grabSpeedInfo
                                    .triggerSource;
                              "nhspeedup" == n
                                ? U.newUbtTrace(198084)
                                : "" == n &&
                                  U.ubtTrace("c_trn_z_10650060279", {
                                    bizKey: "z_grabdetail_sudu_sdjs_click",
                                  }),
                                R(),
                                null != l &&
                                  l.goodsInfo &&
                                  ((a = l.goodsInfo).goodsNum = e),
                                Ce({
                                  num: 0,
                                  speedPackageNum: e,
                                  selectSpeedIndex: t,
                                  goodsInfo: a,
                                });
                            })(X, j);
                          },
                          children: [
                            (0, S.tZ)(va.Text, { children: "确认加速" }),
                            (0, S.BX)(va.Text, {
                              className: " _qb _YE _tj _Zg",
                              children: [
                                "¥",
                                g * (X * Z - w <= 0 ? 0 : X * Z - w),
                              ],
                            }),
                          ],
                        }),
                        (0, S.BX)(va.View, {
                          className: " _bg _oc _pu _o",
                          children: [
                            "账户中有",
                            (0, S.BX)(va.Text, {
                              className: "color-primary",
                              children: [w, "个"],
                            }),
                            ne.Z.SPEED_PACK,
                            "， 使用",
                            W,
                            "个可抵扣¥",
                            W,
                          ],
                        }),
                      ],
                    }),
                    (y || V) &&
                      (0, S.BX)(va.View, {
                        className: " _p _Rs _Vb _Oa _IH _er",
                        children: [
                          (0, S.BX)(va.View, {
                            className: " _Xb _kH _Ld _W",
                            children: [
                              (0, S.tZ)(va.Text, { children: "做任务" }),
                              (0, S.tZ)(va.Text, {
                                className: " _JH _Og",
                                children: "享免费VIP抢票",
                              }),
                            ],
                          }),
                          V &&
                            (0, S.BX)(S.HY, {
                              children: [
                                (0, S.BX)(va.View, {
                                  className: " _i _Lc _m _l",
                                  children: [
                                    (0, S.tZ)(va.Image, {
                                      className: " _Zl _ij _Qf",
                                      src: "https://images3.c-ctrip.com/ztrip/train_zhu/icon_QP_fuliguanV.png",
                                    }),
                                    (0, S.BX)(va.View, {
                                      className: " _j",
                                      children: [
                                        (0, S.BX)(va.View, {
                                          className: " _i _l _Xb _pq",
                                          children: [
                                            (0, S.tZ)(va.Text, {
                                              children: V.title,
                                            }),
                                            V.tag &&
                                              (0, S.tZ)(va.Text, {
                                                className:
                                                  " _oc _HH _TB _Zg -Mc bd-1rpx",
                                                children: V.tag,
                                              }),
                                          ],
                                        }),
                                        (0, S.tZ)(va.View, {
                                          className: " _Ma _pu _eg _R _Ac",
                                          children: V.subTitle,
                                        }),
                                      ],
                                    }),
                                    (0, S.tZ)(va.View, {
                                      className:
                                        " _KH _ra _gg _hg _ue _o _JH _mu",
                                      id: "AJCg",
                                      onClick: function () {
                                        U.ubtTrace("c_trn_z_10650060279", {
                                          bizKey:
                                            "z_grab_detail_vipright_tjflg_click",
                                        }),
                                          V &&
                                            V.jumpUrl &&
                                            h.Z.commonNavigator(V.jumpUrl);
                                      },
                                      children: "去添加",
                                    }),
                                  ],
                                }),
                                (0, S.tZ)(va.View, {
                                  className: " _Yq _tA _LH _mo",
                                }),
                              ],
                            }),
                          y &&
                            (0, S.BX)(va.View, {
                              className: " _i _Lc _m _l flex",
                              children: [
                                (0, S.tZ)(va.Image, {
                                  className: " _Zl _ij _Qf",
                                  src: "https://images3.c-ctrip.com/ztrip/train_zhu/icon_QP_orderHotel.png",
                                }),
                                (0, S.BX)(va.View, {
                                  className: " _j",
                                  children: [
                                    (0, S.BX)(va.View, {
                                      className: " _i _l _Xb _pq",
                                      children: [
                                        (0, S.tZ)(va.Text, {
                                          children: y.title,
                                        }),
                                        y.tag &&
                                          (0, S.tZ)(va.Text, {
                                            className:
                                              " _oc _HH _TB _Zg -Mc bd-1rpx",
                                            children: y.tag,
                                          }),
                                      ],
                                    }),
                                    (0, S.tZ)(va.View, {
                                      className: " _Ma _pu _eg _R _Ac",
                                      children: y.subTitle,
                                    }),
                                  ],
                                }),
                                (0, S.tZ)(va.View, {
                                  className: " _KH _ra _gg _hg _ue _o _JH _mu",
                                  id: "AJCh",
                                  onClick: function () {
                                    U.ubtTrace("c_trn_z_10650060279", {
                                      bizKey:
                                        "z_grabdetail_hotelorder_vip_click",
                                    }),
                                      (U.getPage().showAutoRefresh = !0),
                                      Qe();
                                  },
                                  children: "查酒店",
                                }),
                              ],
                            }),
                        ],
                      }),
                  ],
                });
              })
            ),
            kr = m.default.memo(
              (0, X.$j)(function () {
                var e;
                return {
                  drawerInfo:
                    null === (e = ce("grabStudentWelfareToast")) || void 0 === e
                      ? void 0
                      : e._jsonInfo,
                };
              })(function (e) {
                var t,
                  a = e.isShow,
                  n = e.drawerInfo,
                  i = void 0 === n ? {} : n,
                  r =
                    (null === (t = i.banners) || void 0 === t
                      ? void 0
                      : t.filter(function (e) {
                          return "invite" !== e.type;
                        })) || [];
                if (null == i || !i.backgroundImage || r.length <= 0)
                  return (0, S.tZ)(S.HY, {});
                return (0, S.tZ)(Ma.ZtDrawer, {
                  show: a,
                  onWrapClose: pa,
                  onClose: pa,
                  className: "-Nc",
                  children: (0, S.BX)(va.View, {
                    className: " _a",
                    style: "background: url('".concat(
                      i.backgroundImage,
                      "') no-repeat top / contain;"
                    ),
                    children: [
                      (0, S.tZ)(va.View, {
                        className: " _MH",
                        children: i.title,
                      }),
                      (0, S.tZ)(va.View, {
                        className: " _a _Cc _Oa _NH",
                        children: r.map(function (e, t) {
                          return (0, S.BX)(
                            va.View,
                            {
                              className: " _OH -Oc flex-align-items-center",
                              id: "AJCt",
                              onClick: function () {
                                return (function (e, t) {
                                  switch (e) {
                                    case "welfare":
                                      pa(), h.Z.commonNavigator(t);
                                      break;
                                    case "hotel":
                                      Qe();
                                  }
                                })(e.type, e.jumpUrl);
                              },
                              children: [
                                (0, S.tZ)(va.Image, {
                                  className: " _ij _Zl _Qf",
                                  src: e.icon,
                                }),
                                (0, S.BX)(va.View, {
                                  className: "m-box flex-1",
                                  children: [
                                    (0, S.BX)(va.View, {
                                      className:
                                        " _ok _pq _W flex-align-items-center",
                                      children: [
                                        (0, S.tZ)(va.View, {
                                          children: e.title,
                                        }),
                                        e.tag &&
                                          (0, S.tZ)(va.View, {
                                            className:
                                              " _hb _sh _HH _O _TB _Zg -Pc bd-1rpx",
                                            children: e.tag,
                                          }),
                                      ],
                                    }),
                                    (0, S.tZ)(va.View, {
                                      className: " _Kc _pu _eg _Ac",
                                      children: e.subTitle,
                                    }),
                                  ],
                                }),
                                (0, S.tZ)(va.View, {
                                  className: " _w _ra _gg _hg _Zn _b _mu",
                                  children: e.buttonName,
                                }),
                              ],
                            },
                            t
                          );
                        }),
                      }),
                    ],
                  }),
                });
              })
            ),
            Br = [11, 28],
            xr = [9, 10, 11, 12, 27],
            Pr = [28];
          var Mr = m.default.memo(
              (0, X.$j)(function (e) {
                var t,
                  a,
                  n,
                  i = e.grabOrderModel,
                  r = e.productModel;
                return {
                  content: r.seatProduct.seatProductToastInfo,
                  isFree:
                    1 ===
                    (null === (t = r.seatProduct.seatProductBannerInfo) ||
                    void 0 === t
                      ? void 0
                      : t.payType),
                  passengerNum:
                    (null === (a = i.ticketInfo.passengerList) || void 0 === a
                      ? void 0
                      : a.length) || 1,
                  typeName:
                    (null === (n = r.seatProduct.seatProductBannerInfo) ||
                    void 0 === n
                      ? void 0
                      : n.title) || "",
                };
              })(function (e) {
                var t = e.visible,
                  a = e.content,
                  n = e.isFree,
                  i = e.passengerNum,
                  r = e.typeName,
                  o = a || {},
                  c = o.grabDetailProducts,
                  s = void 0 === c ? [] : c,
                  l = o.descList,
                  d = void 0 === l ? [] : l,
                  u = (0, m.useState)({}),
                  p = (0, Pt.Z)(u, 2),
                  f = p[0],
                  h = p[1];
                if (
                  ((0, m.useEffect)(
                    function () {
                      t || h({});
                    },
                    [t]
                  ),
                  !a)
                )
                  return (0, S.tZ)(va.View, {});
                var g = function () {
                    pa();
                  },
                  b = 0,
                  w = 0;
                Object.keys(f).forEach(function (e) {
                  xr.includes(+e)
                    ? (b += f[e] || 0)
                    : Pr.includes(+e) && (w += f[e] || 0);
                });
                var v = "";
                (v = s.some(function (e) {
                  return -1 !== [9, 10, 11].indexOf(e.productType);
                })
                  ? "指定靠窗/过道 行程更舒适"
                  : v),
                  (v = s.some(function (e) {
                    return -1 !== [12, 27].indexOf(e.productType);
                  })
                    ? "指定铺席 行程更舒适"
                    : v);
                var Z = function (e) {
                  return !xr.includes(e) || b !== i;
                };
                return (0, S.tZ)(Ma.ZtDrawer, {
                  show: t,
                  isShowClose: !1,
                  isDefineHead: !0,
                  onWrapClose: g,
                  drawerStyle: { borderRadius: "32rpx 32rpx 0 0" },
                  children: (0, S.BX)(va.View, {
                    className: " _p _vr _yd",
                    children: [
                      (0, S.tZ)(va.View, {
                        className: " _vr _u _q _AG _od _nd",
                      }),
                      (0, S.tZ)(va.Image, {
                        className: " _u _q _t _Gy _oH",
                        src: "https://images3.c-ctrip.com/ztrip/train.song/grab/xqy/img_zdpx@3x.webp",
                        webp: !0,
                      }),
                      (0, S.BX)(va.View, {
                        className: " _p _i _l _m _pH",
                        children: [
                          (0, S.tZ)(va.View, {
                            className: " _sb _xx _Ld _W",
                            children: v,
                          }),
                          (0, S.tZ)(va.Image, {
                            src: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/06/icon_line_24_close.webp",
                            className: " _bc _cc",
                            id: "AJCV",
                            onClick: g,
                            webp: !0,
                          }),
                        ],
                      }),
                      (0, S.BX)(va.View, {
                        className: " _p _Rd _Ls _Oa _Vb",
                        children: [
                          (0, S.tZ)(va.View, {
                            className: "-rc",
                            children: s.map(function (e, t) {
                              return (0, S.BX)(
                                m.default.Fragment,
                                {
                                  children: [
                                    (0, S.BX)(va.View, {
                                      className: " _Vb _Oa _Qd _Mb _jk _i _l",
                                      children: [
                                        (0, S.tZ)(va.View, {
                                          className: " _jH _sb _kH _Ld _W _Wz",
                                          children: e.title,
                                        }),
                                        (0, S.tZ)(va.View, {
                                          className: " _Sf _j _sb _nF _De _Q",
                                          style: n
                                            ? { textDecoration: "line-through" }
                                            : {},
                                          children: e.priceTag,
                                        }),
                                        Br.includes(e.productType)
                                          ? (0, S.BX)(va.View, {
                                              className:
                                                " _nH _vd _ra _gg _x _ou _o _i _l _n -uc",
                                              id: "AJCY",
                                              onClick: function () {
                                                !(function (e) {
                                                  var t = (0, L.Z)({}, f);
                                                  if (xr.includes(e))
                                                    if (
                                                      0 === t[e] &&
                                                      b + 1 > i
                                                    );
                                                    else {
                                                      var a =
                                                        0 === (t[e] || 0)
                                                          ? 1
                                                          : 0;
                                                      (t[e] = a), h(t);
                                                    }
                                                  else {
                                                    28 === e &&
                                                      U.ubtTrace(
                                                        "c_trn_z_10650060279",
                                                        {
                                                          bizKey:
                                                            "z_grab_detail_select_seattype_same_carriage_click",
                                                          type: r,
                                                          orderId:
                                                            U.getPage().oid,
                                                        }
                                                      );
                                                    var n =
                                                      0 === (t[e] || 0) ? 1 : 0;
                                                    (t[e] = n), h(t);
                                                  }
                                                })(e.productType);
                                              },
                                              style: Z(e.productType)
                                                ? f[e.productType] > 0
                                                  ? "background: #f8f8f8;"
                                                  : ""
                                                : "background: #f8f8f8;color: #999999;",
                                              children: [
                                                (!f[e.productType] ||
                                                  0 === f[e.productType]) &&
                                                  (0, S.tZ)(va.Image, {
                                                    className: "-tc",
                                                    src: Z(e.productType)
                                                      ? _.default.isTieyou
                                                        ? "https://images3.c-ctrip.com/ztrip/train.song/grab/10.0/xqy/icon_jh_ty@3x.webp.webp"
                                                        : "https://images3.c-ctrip.com/ztrip/train.song/grab/10.0/xqy/icon_jh_k@3x.webp"
                                                      : "https://images3.c-ctrip.com/ztrip/train.song/grab/10.0/xqy/icon_jh_h@3x.webp",
                                                    webp: !0,
                                                  }),
                                                (0, S.tZ)(va.View, {
                                                  style:
                                                    f[e.productType] > 0
                                                      ? "color: #666666;"
                                                      : "",
                                                  children:
                                                    f[e.productType] > 0
                                                      ? "已选择"
                                                      : "选择",
                                                }),
                                              ],
                                            })
                                          : (0, S.BX)(va.View, {
                                              className: " _i _l _m _lH",
                                              children: [
                                                (0, S.tZ)(va.View, {
                                                  className:
                                                    " _mf _nf _mH _dc _i _l _n -sc",
                                                  id: "AJCW",
                                                  onClick: function () {
                                                    !(function (e) {
                                                      var t = (0, L.Z)({}, f);
                                                      if (xr.includes(e)) {
                                                        var a = t[e] || 0;
                                                        a - 1 >= 0 &&
                                                          ((t[e] = a - 1),
                                                          h(t));
                                                      }
                                                    })(e.productType);
                                                  },
                                                  style:
                                                    f[e.productType] &&
                                                    0 !== f[e.productType]
                                                      ? ""
                                                      : "background: #f8f8f8",
                                                  children: (0, S.tZ)(
                                                    va.Image,
                                                    {
                                                      className: "-tc",
                                                      src:
                                                        f[e.productType] &&
                                                        0 !== f[e.productType]
                                                          ? _.default.isTieyou
                                                            ? "https://images3.c-ctrip.com/ztrip/train.song/grab/10.0/xqy/icon_js_ty@3x.webp.webp"
                                                            : "https://images3.c-ctrip.com/ztrip/train.song/grab/10.0/xqy/icon_js_k@3x.webp"
                                                          : "https://images3.c-ctrip.com/ztrip/train.song/grab/10.0/xqy/icon_js_h@3x.webp",
                                                      webp: !0,
                                                    }
                                                  ),
                                                }),
                                                (0, S.tZ)(va.View, {
                                                  className: " _sb _Ml _Kv _T",
                                                  children:
                                                    f[e.productType] || 0,
                                                }),
                                                (0, S.tZ)(va.View, {
                                                  className:
                                                    " _mf _nf _mH _dc _i _l _n -sc",
                                                  id: "AJCX",
                                                  onClick: function () {
                                                    !(function (e) {
                                                      var t = (0, L.Z)({}, f);
                                                      xr.includes(e) &&
                                                        b + 1 <= i &&
                                                        (t[e] =
                                                          (t[e] || 0) + 1),
                                                        h(t);
                                                    })(e.productType);
                                                  },
                                                  style:
                                                    b === i
                                                      ? "background: #f8f8f8"
                                                      : "",
                                                  children: (0, S.tZ)(
                                                    va.Image,
                                                    {
                                                      className: "-tc",
                                                      src:
                                                        b === i
                                                          ? "https://images3.c-ctrip.com/ztrip/train.song/grab/10.0/xqy/icon_jh_h@3x.webp"
                                                          : _.default.isTieyou
                                                          ? "https://images3.c-ctrip.com/ztrip/train.song/grab/10.0/xqy/icon_jh_ty@3x.webp.webp"
                                                          : "https://images3.c-ctrip.com/ztrip/train.song/grab/10.0/xqy/icon_jh_k@3x.webp",
                                                      webp: !0,
                                                    }
                                                  ),
                                                }),
                                              ],
                                            }),
                                      ],
                                    }),
                                    t < s.length - 1 &&
                                      (0, S.tZ)(va.View, {
                                        className: " _Yq _gh _ve",
                                      }),
                                  ],
                                },
                                e.productType
                              );
                            }),
                          }),
                          d &&
                            (0, S.tZ)(va.View, {
                              className: " _gx _Rd _ol _pb _ij _fk _Ma _mF",
                              children: d,
                            }),
                        ],
                      }),
                      (0, S.tZ)(va.View, {
                        className: " _p _Fa _Vb _ld _kd",
                        children: (0, S.tZ)(va.View, {
                          id: "AJHc",
                          className: ""
                            .concat(" _w _Oa _Gc _Xc _Qd _o _qb _oB -vc", " ")
                            .concat(b > 0 || w > 0 ? "" : "-wc"),
                          onClick: function () {
                            if (b > 0 || w > 0) {
                              var e = [],
                                t = [];
                              Object.keys(f).forEach(function (a) {
                                if (f[a] > 0) {
                                  e.push({ type: a, num: f[a] });
                                  var n = (
                                    s.find(function (e) {
                                      return e.productType === +a;
                                    }) || {}
                                  ).goodsInfo;
                                  n && ((n.goodsNum = f[a]), t.push(n));
                                }
                              }),
                                U.ubtTrace("c_trn_z_10650060279", {
                                  bizKey:
                                    "z_grab_detail_select_seattype_same_carriage_confirm_click",
                                  type: r,
                                  productType: e.map(function (e) {
                                    return +e.type;
                                  }),
                                  orderId: U.getPage().oid,
                                }),
                                (function (e) {
                                  var t =
                                    arguments.length > 1 &&
                                    void 0 !== arguments[1]
                                      ? arguments[1]
                                      : [];
                                  pa(),
                                    Xe({ productList: e, treasuresGoods: t });
                                })(e, t);
                            }
                          },
                          children: "确定选择",
                        }),
                      }),
                    ],
                  }),
                });
              })
            ),
            Ar = m.default.memo(
              (0, X.$j)(function (e) {
                var t,
                  a = e.productModel;
                return {
                  content:
                    null === (t = a.cuiChuPiaoData.cuiChuPiaoPath) ||
                    void 0 === t
                      ? void 0
                      : t.specialGrabToastInfo,
                  specialPersonGrabBoxInfo:
                    a.specificallyGrab.specialPersonGrabBoxInfo,
                };
              })(function (e) {
                var t = e.propStyle,
                  a = e.visible,
                  n = e.content,
                  i = e.specialPersonGrabBoxInfo,
                  r = n || {},
                  o = r.desc,
                  c = r.topTitle,
                  s = i || {},
                  l = s.buyState,
                  d = s.optionsInfo,
                  u = void 0 === d ? [] : d,
                  p = s.btnDesc,
                  f = s.buyedInfo,
                  h = (0, m.useRef)({ title: "", salePrice: "" }),
                  g = (0, m.useState)(-1),
                  b = (0, Pt.Z)(g, 2),
                  w = b[0],
                  v = b[1];
                (0, m.useEffect)(
                  function () {
                    var e;
                    i &&
                      1 === l &&
                      v(
                        (null === (e = u[u.length - 1]) || void 0 === e
                          ? void 0
                          : e.type) || -1
                      );
                  },
                  [i, l]
                ),
                  (0, m.useEffect)(
                    function () {
                      n &&
                        1 === l &&
                        a &&
                        U.ubtTrace(
                          "TZWgrabDetail_urgeExpertActionbar_confirm_exposure",
                          {
                            PageId: _.default.isTieyou
                              ? "10650060277"
                              : "10650060279",
                            orderId: U.getPage().oid,
                          }
                        );
                    },
                    [a]
                  );
                var Z = function () {
                    pa();
                  },
                  N = (0, m.useCallback)(function (e) {
                    v(e);
                  }, []),
                  I = function (e, t) {
                    U.ubtTrace(
                      "TZWgrabDetail_urgeExpertActionbar_confirm_click",
                      {
                        PageId: _.default.isTieyou
                          ? "10650060277"
                          : "10650060279",
                        orderId: U.getPage().oid,
                        zGrabProductType: t - 1,
                      }
                    ),
                      e.salePrice &&
                        (function (e) {
                          var t =
                            U.getState().grabOrderModel.ticketInfo
                              .passengerList;
                          Xe({
                            productList: [{ type: e, num: t.length }],
                            noCloseShowType: !0,
                          });
                        })(e.type);
                  };
                if (!n || !i) return (0, S.tZ)(va.View, {});
                var T =
                    u.find(function (e) {
                      return e.type === w;
                    }) || {},
                  y =
                    u.findIndex(function (e) {
                      return e.type === w;
                    }) || {};
                return (
                  T.title && (h.current = T),
                  n
                    ? (0, S.BX)(Ma.ZtDrawer, {
                        show: a,
                        onClose: Z,
                        onWrapClose: Z,
                        isDefineHead: !0,
                        className: "-Xc",
                        style: t,
                        children: [
                          (0, S.tZ)(va.View, {
                            className: " _u _s _t _q _wI _od _Wb",
                          }),
                          (0, S.BX)(va.View, {
                            className: " _i _l _p _xI",
                            children: [
                              (0, S.tZ)(va.Image, {
                                className: " _ug _rf _Ff",
                                src: "https://images3.c-ctrip.com/ztrip/train_zhu/icon_QP_gou_golden.png",
                              }),
                              (0, S.tZ)(Ma.ZtRichText, {
                                space: "nbsp",
                                className: " _Xb _xx _mb _nb",
                                nodes: c,
                              }),
                              (0, S.tZ)(va.Image, {
                                src: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/06/icon_line_24_close.webp",
                                className: " _u _yI _qk _bc _cc",
                                id: "AJDE",
                                onClick: Z,
                                webp: !0,
                              }),
                            ],
                          }),
                          (0, S.tZ)(va.View, {
                            className: " _p _Rd _Vb _Oa",
                            style:
                              1 === l
                                ? "padding: 34rpx 0 20rpx;"
                                : "padding: 24rpx 0",
                            children:
                              1 === l
                                ? (0, S.BX)(va.View, {
                                    className: " _ls",
                                    children: [
                                      (0, S.tZ)(Ma.ZtRichText, {
                                        space: "nbsp",
                                        className: " _Ld _sb _Pa _bo",
                                        nodes: o,
                                      }),
                                      (0, S.tZ)(cn.Z, {
                                        propStyle: { marginTop: "26rpx" },
                                        content: u,
                                        type: w,
                                        fromPage: "grabDetail",
                                        onTypeChange: N,
                                      }),
                                    ],
                                  })
                                : (0, S.BX)(va.View, {
                                    className:
                                      " _fc _uI _Ak _dc _vI _rd _i _k _l _Mb -Uc",
                                    children: [
                                      (0, S.BX)(va.View, {
                                        className: " _i _l",
                                        children: [
                                          (0, S.tZ)(va.Image, {
                                            className: ""
                                              .concat(" _mb _Tk -Vc", " ")
                                              .concat(
                                                f.subTitle.includes("3位")
                                                  ? "-Wc"
                                                  : ""
                                              ),
                                            src: f.icon,
                                          }),
                                          (0, S.BX)(va.View, {
                                            className: " _Sf",
                                            children: [
                                              (0, S.tZ)(Ma.ZtRichText, {
                                                className: " _sb _pq _Ua _U",
                                                nodes: f.title,
                                              }),
                                              (0, S.tZ)(va.View, {
                                                className:
                                                  " _Ac _Ma _pu _De _Q",
                                                children: f.subTitle,
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, S.tZ)(va.View, {
                                        className: " _fA _i _Z _m",
                                        children: f.descs.map(function (e) {
                                          return (0,
                                          S.BX)(va.View, { className: " _mf _i _k _l", children: [(0, S.tZ)(va.Image, { className: " _nf _mf", src: e.img }), (0, S.tZ)(va.View, { className: " _cg _oc _mF _eg _R _Bi", children: e.title })] }, e.title);
                                        }),
                                      }),
                                    ],
                                  }),
                          }),
                          (0, S.tZ)(va.View, {
                            className: " _kg _Vb _Wb _Hd _zI",
                            children:
                              1 === l
                                ? T &&
                                  (0, S.BX)(va.View, {
                                    className: ""
                                      .concat(
                                        " _AI _w _Oa _Gc _Qd _o _i _k _l _Mb -Yc",
                                        " "
                                      )
                                      .concat(T.title ? "" : "-Zc"),
                                    id: "AJDF",
                                    onClick: function () {
                                      return I(T, y);
                                    },
                                    children: [
                                      (0, S.BX)(va.View, {
                                        className: " _qb _oB _rm _V",
                                        children: [
                                          "开启",
                                          T.title || h.current.title,
                                        ],
                                      }),
                                      (0, S.BX)(va.View, {
                                        className:
                                          " _Km _i _qb _aj _BI _l _Dn _bb -ad",
                                        children: [
                                          (0, S.tZ)(va.View, {
                                            className: "price",
                                            children: "¥".concat(
                                              T.salePrice ||
                                                h.current.salePrice ||
                                                "",
                                              "/人"
                                            ),
                                          }),
                                          (0, S.tZ)(va.View, {
                                            className: "-bd",
                                          }),
                                          (0, S.tZ)(va.View, {
                                            className: "desc",
                                            children: p,
                                          }),
                                        ],
                                      }),
                                    ],
                                  })
                                : (0, S.tZ)(va.View, {
                                    className:
                                      " _Mb _w _qb _Oa _Gc _Xc _Qd _o -cd",
                                    id: "AJDG",
                                    onClick: Z,
                                    children: "知道了",
                                  }),
                          }),
                        ],
                      })
                    : (0, S.tZ)(va.View, {})
                );
              })
            ),
            Xr = m.default.memo(function (e) {
              var t = e.propStyle,
                a = e.visible,
                n = e.onClose,
                i = void 0 === n ? function () {} : n;
              return (0, S.BX)(Ma.ZtDrawer, {
                show: a,
                onClose: i,
                isDefineHead: !0,
                className: "-Tc",
                style: t,
                children: [
                  (0, S.tZ)(va.View, { className: " _u _s _t _q _sI _Lp _Wb" }),
                  (0, S.tZ)(va.Image, {
                    src: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/06/icon_line_24_close.webp",
                    className: " _u _xr _qk _bc _cc _in",
                    id: "AJDD",
                    onClick: function () {
                      clearTimeout(U.getPage().urgeLoadingDrawerTimer), i();
                    },
                    webp: !0,
                  }),
                  (0, S.BX)(va.View, {
                    className: " _i _k _l _p",
                    children: [
                      (0, S.tZ)(va.Image, {
                        className: " _tI _Lp _Pp",
                        src: "https://images3.c-ctrip.com/ztrip/train_zhu/img_QP_ccp_laba.png",
                      }),
                      (0, S.tZ)(va.View, {
                        className: " _qd _bc _sb _dq _Oc",
                        children: "正在为您催出票...",
                      }),
                    ],
                  }),
                ],
              });
            }),
            zr = m.default.memo(function (e) {
              var t = e.drawerInfo,
                a = void 0 === t ? null : t,
                n = e.onClose,
                i = void 0 === n ? function () {} : n,
                r = e.onConfirm,
                o = void 0 === r ? function () {} : r,
                c = e.ubtTrace,
                s = void 0 === c ? function () {} : c;
              if (
                ((0, m.useEffect)(function () {
                  a && s("exposure");
                }, []),
                !a)
              )
                return (0, S.tZ)(S.HY, {});
              return (0, S.tZ)(Ma.ZtDrawer, {
                show: !0,
                isDefineHead: !0,
                onWrapClose: i,
                className: "-Ja",
                children: (0, S.BX)(va.View, {
                  className:
                    " _RD _Mb _m _kd _PD _p flex-column flex-align-items-center",
                  children: [
                    (0, S.tZ)(va.Image, {
                      className: " _u _xr _qk _cc _bc",
                      src: "https://images3.c-ctrip.com/ztrip/train_zhu/icon_close_circle_black.png",
                      id: "AJBh",
                      onClick: i,
                    }),
                    a.topImg &&
                      (0, S.tZ)(va.Image, {
                        className: " _Lp _Pp",
                        src: a.topImg,
                        webp: !0,
                      }),
                    a.title &&
                      (0, S.tZ)(Ma.ZtRichText, {
                        className: " _ok _ED _nb _Uc _Xk",
                        nodes: a.title,
                      }),
                    a.desc &&
                      (0, S.tZ)(Ma.ZtRichText, {
                        className: " _Nd _iu _U _SD _j _o",
                        nodes: a.desc,
                      }),
                    (0, S.tZ)(va.View, {
                      className: " _w _Oa _Gc _Xc _o _b _oB _qf _Sn",
                      id: "AJBi",
                      onClick: function () {
                        s("click"), o();
                      },
                      children: a.btnTxt,
                    }),
                  ],
                }),
              });
            }),
            Or = m.default.memo(
              (0, X.$j)(function () {
                var e,
                  t =
                    (null === (e = ce("grabbingAddWeChat")) || void 0 === e
                      ? void 0
                      : e._jsonInfo) || {};
                return h.Z.isNotEmptyObj(t)
                  ? {
                      qwTaskDrawerInfo: {
                        topImg:
                          t.icon ||
                          "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/10/img_tc_jiasu.webp",
                        title: t.title,
                        desc: t.desc,
                        btnTxt: t.buttonName,
                        jumpUrl: t.jumpUrl,
                      },
                    }
                  : { qwTaskDrawerInfo: null };
              })(function (e) {
                var t = e.qwTaskDrawerInfo,
                  a = e.isShow;
                return (0, S.tZ)(va.View, {
                  children:
                    a &&
                    (0, S.tZ)(zr, {
                      drawerInfo: t,
                      onClose: pa,
                      onConfirm: function () {
                        null != t &&
                          t.jumpUrl &&
                          (h.Z.commonNavigator(t.jumpUrl), pa());
                      },
                      ubtTrace: function (e) {
                        switch (e) {
                          case "exposure":
                            U.ubtTrace(223419, {
                              PageId: U.getPage().pageId,
                              orderId: U.getPage().oid + "",
                            });
                            break;
                          case "click":
                            U.ubtTrace(223418, {
                              PageId: U.getPage().pageId,
                              orderId: U.getPage().oid + "",
                            });
                        }
                      },
                    }),
                });
              })
            ),
            Gr = a(8724),
            Lr = m.default.memo(
              (0, X.$j)(function (e) {
                var t,
                  a = e.grabOrderModel,
                  n = a.grabSpeedInfo.hotelCouponInfo || {},
                  i = n.commonHeadTitle,
                  r = n.hotelCoupons,
                  o = void 0 === r ? [] : r,
                  c = a.grabSpeedInfo.couponPrice,
                  s =
                    null == o ||
                    null ===
                      (t = o.find(function (e) {
                        return e.couponPrice === c;
                      })) ||
                    void 0 === t
                      ? void 0
                      : t.couponDesc,
                  l = "";
                return (
                  s && i && (l = i.replace("%s", s)),
                  l
                    ? { detailInfo: { title: "产品说明", content: l } }
                    : { detailInfo: null }
                );
              })(function (e) {
                var t = e.detailInfo;
                return (0, S.tZ)(Gr.Z, {
                  detailInfo: t,
                  onClose: function () {
                    ba();
                  },
                });
              })
            ),
            Fr = a(97620),
            jr = m.default.memo(
              (0, X.$j)(function (e) {
                return { info: e.grabOrderModel.cancelOrderDrawerInfo };
              })(function (e) {
                var t = e.isShow,
                  a = e.info,
                  n = void 0 === a ? null : a,
                  i = (0, m.useState)(!1),
                  r = (0, Pt.Z)(i, 2),
                  o = r[0],
                  c = r[1];
                if (
                  ((0, m.useEffect)(
                    function () {
                      null != n && n.memberCancelInfo && c(!0);
                    },
                    [n]
                  ),
                  !n)
                )
                  return (0, S.tZ)(va.View, {});
                return (0, S.tZ)(Ma.ZtDrawer, {
                  show: t,
                  onWrapClose: pa,
                  onClose: pa,
                  className: "-Ha",
                  children: (0, S.BX)(va.View, {
                    className:
                      " _OD _Mb _kd _PD flex-align-items-center flex-column",
                    children: [
                      (0, S.tZ)(va.View, {
                        className: " _dd _pd _Oc",
                        children: n.title,
                      }),
                      (0, S.tZ)(va.View, {
                        className: " _QD _Nd _sd _U _o",
                        children: n.desc,
                      }),
                      (0, S.tZ)(Fr.Z, {
                        data: n.memberCancelInfo,
                        fromSource: "drawer",
                        isCancelMember: o,
                        onChooseChange: function (e) {
                          c(e);
                        },
                      }),
                      (0, S.BX)(va.View, {
                        className: " _kg _Sn flex-align-items-center",
                        children: [
                          (0, S.tZ)(va.Button, {
                            className:
                              " _Gc _Xc _Oa _Wc _Uc -Ia  _x _vd flex-1",
                            id: "AJBd",
                            onClick: function () {
                              pa(),
                                (function (e) {
                                  (0, I.showLoading)();
                                  var t = {
                                    orderNumber: U.getPage().oid,
                                    partnerName: _.default.partner,
                                    cancelVip: e ? 1 : 0,
                                  };
                                  (0, K.FHX)(t)
                                    .then(function (e) {
                                      1 === e.resultCode
                                        ? wa()
                                        : f().showModal({
                                            title: "温馨提示",
                                            content: e.resultMessage,
                                            showCancel: !1,
                                            confirmText: "确定",
                                          });
                                    })
                                    .finally(function () {
                                      (0, I.hideLoading)();
                                    });
                                })(o);
                            },
                            children: "确认取消",
                          }),
                          (0, S.tZ)(va.Button, {
                            className: " _Gc _Xc _Oa _Wc _Uc -Ia  _b _w flex-1",
                            id: "AJBe",
                            onClick: pa,
                            children: "继续抢票",
                          }),
                        ],
                      }),
                    ],
                  }),
                });
              })
            );
          var Rr = m.default.memo(
              (0, X.$j)(function (e) {
                var t;
                return {
                  content:
                    null === (t = e.t6Model.orderInterceptInfo) || void 0 === t
                      ? void 0
                      : t.interceptDetail,
                };
              })(function (e) {
                var t = e.visible,
                  a = e.content,
                  n = e.onClose,
                  i = void 0 === n ? function () {} : n;
                return a
                  ? (0, S.tZ)(Ma.ZtDrawer, {
                      show: t,
                      isShowClose: !1,
                      isDefineHead: !0,
                      onWrapClose: i,
                      drawerStyle: { borderRadius: "40rpx 40rpx 0 0" },
                      children: (0, S.BX)(va.View, {
                        className: " _p _kd _CI _yd",
                        children: [
                          (0, S.BX)(va.View, {
                            className: " _p _i _l _n _Wn",
                            children: [
                              (0, S.tZ)(va.View, {
                                className: " _Xb _Yb",
                                children: "抢票待开启说明",
                              }),
                              (0, S.tZ)(va.Image, {
                                src: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/06/icon_line_24_close.webp",
                                className: " _u _Zb _qk _bc _cc",
                                id: "AJDH",
                                onClick: i,
                                webp: !0,
                              }),
                            ],
                          }),
                          (0, S.tZ)(va.View, {
                            className: " _DI _Rd _Oa _Vb",
                            children: a.map(function (e, t) {
                              return (0,
                              S.BX)(va.View, { className: " _Qq -dd", children: [(0, S.tZ)(va.View, { className: " _Xb _bp _i _l _Ua _U -ed", children: e.title }), (0, S.tZ)(va.View, { className: " _T _Ma _mk _Xk", children: e.content })] }, t);
                            }),
                          }),
                        ],
                      }),
                    })
                  : (0, S.tZ)(va.View, {});
              })
            ),
            Jr = function (e, t, a) {
              var n =
                  arguments.length > 3 && void 0 !== arguments[3]
                    ? arguments[3]
                    : function () {},
                i = arguments.length > 4 ? arguments[4] : void 0;
              return (0, S.BX)(va.View, {
                className: " _uk _ol _pb _i _l",
                children: [
                  (0, S.tZ)(va.Image, { src: e, className: " _Ta _Ua" }),
                  (0, S.tZ)(va.View, {
                    className: " _j _Sf _Xb _sd",
                    children: t,
                  }),
                  (0, S.tZ)(va.Button, {
                    openType: i ? "share" : "",
                    className:
                      "已完成" === a
                        ? " _Ma _G _at _mb _o"
                        : " _qb _qe _w _pb _at _mb _nb _o",
                    id: "AJCv",
                    onClick: n,
                    children: a,
                  }),
                ],
              });
            };
          var Er = m.default.memo(
              (0, X.$j)(function (e) {
                var t = e.grabOrderModel,
                  a = e.pageModel;
                return {
                  content: t.studentWelfare.studentWelfareDrawerInfo,
                  visible: a.secondToastCode === D.studentWelfareDrawer,
                };
              })(function (e) {
                var t = e.visible,
                  a = e.content || {},
                  n = a.freeImproveSeat,
                  i = a.fullYearHighSpeedGrab,
                  r = a.grabFailReparation;
                return (
                  (0, m.useEffect)(function () {
                    U.ubtTrace("TZWgrabDetail_StudentRightsAction_exposure", {
                      PageId: U.getPage().pageId,
                    });
                  }, []),
                  (0, S.tZ)(Ma.ZtDrawer, {
                    show: t,
                    isShowClose: !1,
                    isDefineHead: !0,
                    onWrapClose: ba,
                    maxHeight: "90vh",
                    drawerStyle: { borderRadius: "32rpx 32rpx 0 0" },
                    children: (0, S.BX)(va.View, {
                      className: " _p _vr _yd _i _k",
                      children: [
                        (0, S.tZ)(va.View, {
                          className: " _vr _u _q _AG _od _nd",
                        }),
                        (0, S.tZ)(va.Image, {
                          className: " _u _q _t _nd _lm _Wb",
                          src: "https://images3.c-ctrip.com/ztrip/train_zhu/img_QP_xscq_tc_bg.png",
                          webp: !0,
                        }),
                        (0, S.BX)(va.View, {
                          className: " _p _i _l _PH _zB",
                          children: [
                            (0, S.tZ)(va.Image, {
                              src: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/23_05/stds/title_stds.webp",
                              className: " _CA _rm",
                              webp: !0,
                            }),
                            (0, S.tZ)(va.View, {
                              className: " _Ee _ve _S _QH _oc _gi",
                              id: "AJCw",
                              onClick: function () {
                                [0].includes(null == n ? void 0 : n.isAvailable)
                                  ? h.Z.commonNavigator(
                                      _.default.isTieyou
                                        ? "https://market.suanya.com/weblc/robticket/studentActivityTy2.html?version=254075"
                                        : "https://market.suanya.com/weblc/robticket/studentActivity2.html?version=691858"
                                    )
                                  : [1, 2].includes(
                                      null == n ? void 0 : n.isAvailable
                                    ) &&
                                    h.Z.commonNavigator(
                                      _.default.isTieyou
                                        ? "https://market.suanya.com/weblc/robticket/studentActivityTy.html?version=323094"
                                        : "https://market.suanya.com/weblc/robticket/studentActivity.html?version=269896"
                                    );
                              },
                              children: "规则",
                            }),
                            (0, S.tZ)(va.Image, {
                              src: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/06/icon_line_24_close.webp",
                              className: " _u _xr _qk _bc _cc",
                              id: "AJCx",
                              onClick: ba,
                              webp: !0,
                            }),
                          ],
                        }),
                        (0, S.BX)(va.View, {
                          className: " _j _p _Rd _RH _Zr",
                          children: [
                            n &&
                              [1, 2].includes(
                                null == n ? void 0 : n.isAvailable
                              ) &&
                              (0, S.BX)(va.View, {
                                className: " _SH _Rh _Vb _Oa",
                                children: [
                                  (0, S.BX)(va.View, {
                                    className: " _i _l _Yn",
                                    children: [
                                      (0, S.tZ)(va.View, {
                                        className: " _vp _Xb _Nc",
                                        children: n.title,
                                      }),
                                      (0, S.tZ)(va.View, {
                                        className:
                                          " _Ee _TH _bh _x _zy _Q _Mb _De",
                                        children: n.tag,
                                      }),
                                      (0, S.tZ)(va.View, { className: " _j" }),
                                      !!n.unlock &&
                                        (0, S.tZ)(va.View, {
                                          className:
                                            " _w _pb _at _mb _nb _o _qb _qe",
                                          id: "AJCy",
                                          onClick: function () {
                                            U.ubtTrace(
                                              "TZWgrabDetail_UpseatShowPopup_Upseat_click",
                                              { PageId: U.getPage().pageId }
                                            ),
                                              Le();
                                          },
                                          children: "去升级",
                                        }),
                                    ],
                                  }),
                                  (0, S.BX)(va.View, {
                                    className: "itemBd",
                                    children: [
                                      Jr(
                                        "https://images3.c-ctrip.com/ztrip/train_zhu/icon_QP_xscq_rw_01.png",
                                        n.miniInviteDesc,
                                        n.inviteButton,
                                        function () {
                                          U.ubtTrace(
                                            "TZWgrabDetail_StudentRightsAction_ZhuliUp_click",
                                            { PageId: U.getPage().pageId }
                                          );
                                        },
                                        !0
                                      ),
                                      (0, S.tZ)(va.View, {
                                        className: " _UH _oc _D",
                                        children: n.subTitle,
                                      }),
                                      Jr(
                                        "https://images3.c-ctrip.com/ztrip/train_zhu/icon_QP_xscq_rw_02.png",
                                        n.optionalDateDesc,
                                        n.dateDescButton,
                                        function () {
                                          U.ubtTrace(
                                            "TZWgrabDetail_StudentRightsAction_MutliDate_click",
                                            { PageId: U.getPage().pageId }
                                          ),
                                            It();
                                        }
                                      ),
                                      Jr(
                                        "https://images3.c-ctrip.com/ztrip/train_zhu/icon_QP_xscq_rw_03.png",
                                        n.optionalSeatDesc,
                                        n.seatDescButton,
                                        function () {
                                          U.ubtTrace(
                                            "TZWgrabDetail_StudentRightsAction_MutliTrn_click",
                                            { PageId: U.getPage().pageId }
                                          ),
                                            Nt();
                                        }
                                      ),
                                    ],
                                  }),
                                ],
                              }),
                            i &&
                              (0, S.BX)(va.View, {
                                className: " _SH _Rh _Vb _Oa",
                                children: [
                                  (0, S.BX)(va.View, {
                                    className: " _i _l _Yn",
                                    children: [
                                      (0, S.tZ)(va.View, {
                                        className: " _vp _Xb _Nc",
                                        children: i.title,
                                      }),
                                      i.tag &&
                                        (0, S.tZ)(va.View, {
                                          className:
                                            " _Ee _TH _bh _x _zy _Q _Mb _De",
                                          children: i.tag,
                                        }),
                                    ],
                                  }),
                                  (0, S.tZ)(va.View, {
                                    className: "itemBd",
                                    children: Jr(
                                      "https://images3.c-ctrip.com/ztrip/train_zhu/icon_QP_xscq_rw_mfgsq.png",
                                      i.desc,
                                      i.buttonName,
                                      function () {
                                        U.ubtTrace(
                                          "TZWgrabDetail_StudentRightsAction_StuInvite_click",
                                          { PageId: U.getPage().pageId }
                                        ),
                                          i.jumpUrl &&
                                            h.Z.commonNavigator(i.jumpUrl);
                                      }
                                    ),
                                  }),
                                ],
                              }),
                            r &&
                              (0, S.BX)(va.View, {
                                className: " _SH _Rh _Vb _Oa",
                                children: [
                                  (0, S.BX)(va.View, {
                                    className: " _i _l _Yn",
                                    children: [
                                      (0, S.tZ)(va.View, {
                                        className: " _vp _Xb _Nc",
                                        children: r.title,
                                      }),
                                      r.tag &&
                                        (0, S.tZ)(va.View, {
                                          className:
                                            " _Ee _TH _bh _x _zy _Q _Mb _De",
                                          children: r.tag,
                                        }),
                                    ],
                                  }),
                                  (0, S.tZ)(va.View, {
                                    className: "itemBd",
                                    children: Jr(
                                      "https://images3.c-ctrip.com/ztrip/train_zhu/icon_QP_xscq_rw_yqhy.png",
                                      r.miniDesc,
                                      r.buttonName,
                                      function () {
                                        U.ubtTrace(
                                          "TZWgrabDetail_StudentRightsAction_ZhuliQbdp_click",
                                          { PageId: U.getPage().pageId }
                                        );
                                      },
                                      !0
                                    ),
                                  }),
                                ],
                              }),
                            n &&
                              [0].includes(
                                null == n ? void 0 : n.isAvailable
                              ) &&
                              (0, S.BX)(va.View, {
                                className: " _SH _Rh _Vb _Oa",
                                children: [
                                  (0, S.BX)(va.View, {
                                    className: " _i _l _Yn",
                                    children: [
                                      (0, S.tZ)(va.View, {
                                        className: " _vp _Xb _Nc",
                                        children: n.title,
                                      }),
                                      (0, S.BX)(va.View, {
                                        className: " _i _l _Ee _XC _bh _Mb _De",
                                        children: [
                                          (0, S.tZ)(va.Image, {
                                            className: " _tf _dj",
                                            src: "https://images3.c-ctrip.com/ztrip/train_zhu/icon_QP_suo.png",
                                          }),
                                          (0, S.tZ)(va.View, {
                                            className: " _Og _oc _zy _Q",
                                            children: n.tag,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, S.tZ)(va.View, {
                                    className: "itemBd",
                                    children: (0, S.tZ)(va.View, {
                                      className: " _VH _Ma _Na",
                                      children: n.desc,
                                    }),
                                  }),
                                ],
                              }),
                            (0, S.tZ)(va.View, { className: " _WH" }),
                          ],
                        }),
                      ],
                    }),
                  })
                );
              })
            ),
            Hr = function (e, t) {
              return (0, S.BX)(va.View, {
                className: " _cg _e _i",
                children: [
                  (0, S.tZ)(va.View, { className: " _zB _oc _G", children: e }),
                  (0, S.tZ)(va.View, { className: " _xh _G _rI", children: t }),
                ],
              });
            };
          var qr,
            Ur = m.default.memo(
              (0, X.$j)(function (e) {
                var t = e.pageModel,
                  a = e.grabOrderModel;
                return {
                  visible: t.secondToastCode === D.studentWelfareUnlockDrawer,
                  content: a.studentWelfare.studentWelfareUnlockDrawerInfo,
                  trainInfo: a.orderInfo.train,
                };
              })(function (e) {
                var t = e.visible,
                  a = e.content,
                  n = e.trainInfo,
                  i = a || {},
                  r = i.title,
                  o = void 0 === r ? "" : r,
                  c = i.availableDates,
                  s = void 0 === c ? "" : c,
                  l = i.availableSeats,
                  d = void 0 === l ? "" : l,
                  u = i.buttonName,
                  p = void 0 === u ? "" : u,
                  f = i.notation,
                  g = void 0 === f ? "" : f,
                  b = i.relations,
                  w = void 0 === b ? "" : b,
                  v = i.unlock,
                  Z = void 0 === v ? 0 : v;
                (0, m.useEffect)(
                  function () {
                    a &&
                      U.ubtTrace("TZWgrabDetail_UpseatShowPopup_exposure", {
                        PageId: U.getPage().pageId,
                      });
                  },
                  [a]
                );
                var N = function () {
                  h.Z.commonNavigator(
                    _.default.isTieyou
                      ? "https://market.suanya.com/weblc/robticket/upgradeSeatGuideTy.html?version=38438"
                      : "https://market.suanya.com/weblc/robticket/upgeadeSeatGuide.html?version=249059"
                  );
                };
                return (0, S.tZ)(va.View, {
                  children:
                    a &&
                    (0, S.tZ)(Ma.ZtDrawer, {
                      show: t,
                      isShowClose: !1,
                      isDefineHead: !0,
                      onWrapClose: ba,
                      maxHeight: "90vh",
                      drawerStyle: { borderRadius: "40rpx 40rpx 0 0" },
                      children: (0, S.BX)(va.View, {
                        className: " _p _kd _yd _i _k",
                        children: [
                          (0, S.tZ)(va.Image, {
                            className: " _u _q _t _nd _Lp _Wb",
                            src: "https://images3.c-ctrip.com/ztrip/train_zhu/img_Ticket_BG_jianbian_zx.png",
                            webp: !0,
                          }),
                          (0, S.BX)(va.View, {
                            className: " _zB _p _i _l _n _kI",
                            children: [
                              (0, S.tZ)(va.Image, {
                                src: "https://images3.c-ctrip.com/ztrip/train_zhu/img_QP_xscq_gxjs.png",
                                className: " _Pp _bc",
                                id: "AJDA",
                                onClick: ba,
                                webp: !0,
                              }),
                              (0, S.tZ)(va.Image, {
                                src: "https://images3.c-ctrip.com/ztrip/zhixingios/z_22/06/icon_line_24_close.webp",
                                className: " _bc _cc _u _xr _qk",
                                id: "AJDB",
                                onClick: ba,
                                webp: !0,
                              }),
                            ],
                          }),
                          (0, S.BX)(va.View, {
                            className: " _j _RH _Zr _p _Rd",
                            children: [
                              (0, S.BX)(va.View, {
                                className: " _i _mI _Vb _Oa",
                                children: [
                                  (0, S.tZ)(va.Image, {
                                    className: " _nI _Bb _oI _zB",
                                    src: "https://images3.c-ctrip.com/ztrip/train_zhu/img_QP_dottedLine.png?2",
                                  }),
                                  (0, S.BX)(va.View, {
                                    className: " _vp",
                                    children: [
                                      (0, S.BX)(va.View, {
                                        className: " _kn",
                                        children: [
                                          (0, S.tZ)(va.View, {
                                            className: " _sb _Pa _W",
                                            children: a.tipOne,
                                          }),
                                          (0, S.tZ)(Ma.ZtRichText, {
                                            nodes: a.tipOneDesc,
                                            className: " _Ac _Ma _Na",
                                          }),
                                        ],
                                      }),
                                      (0, S.BX)(va.View, {
                                        className: " _kn",
                                        children: [
                                          (0, S.tZ)(va.View, {
                                            className: " _sb _Pa _W",
                                            children: a.tipTwo,
                                          }),
                                          (0, S.tZ)(Ma.ZtRichText, {
                                            nodes: a.tipTwoDesc,
                                            className: " _Ac _Ma _Na",
                                          }),
                                        ],
                                      }),
                                      (0, S.BX)(va.View, {
                                        className: "lastContentItem",
                                        children: [
                                          (0, S.tZ)(va.View, {
                                            className: " _sb _Pa _W",
                                            children: a.tipThree,
                                          }),
                                          (0, S.tZ)(Ma.ZtRichText, {
                                            nodes: a.tipThreeDesc,
                                            className: " _Ac _Ma _Na",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, S.BX)(va.View, {
                                className: " _Xk _Vb _SH _Oa",
                                children: [
                                  (0, S.BX)(va.View, {
                                    className: " _i _l _xp",
                                    children: [
                                      (0, S.tZ)(va.View, {
                                        className: " _Ja _Rj _w",
                                      }),
                                      (0, S.tZ)(va.View, {
                                        className: " _Ee _Xb _Nc",
                                        children: o,
                                      }),
                                      (0, S.BX)(va.View, {
                                        className: " _Ee _qI _tq _i _l",
                                        id: "AJCz",
                                        onClick: N,
                                        children: [
                                          (0, S.tZ)(va.View, {
                                            className: " _oc _gi",
                                            children: "查看教程",
                                          }),
                                          (0, S.tZ)(va.Image, {
                                            className: " _Bb _dg",
                                            src: "https://images3.c-ctrip.com/ztrip/train_zhu/icon_jt_99.png",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, S.BX)(va.View, {
                                    className: " _Xk _pI _pb _oy _i _l",
                                    children: [
                                      (0, S.tZ)(va.Image, {
                                        className: " _Ye _og",
                                        src: "https://images3.c-ctrip.com/ztrip/train_zhu/icon_info_orange_12.png",
                                      }),
                                      (0, S.tZ)(va.View, {
                                        className: " _Ee _Xh _Na",
                                        children: g,
                                      }),
                                    ],
                                  }),
                                  (0, S.BX)(va.View, {
                                    className: " _qd _bh",
                                    children: [
                                      Hr("可用车次：", d),
                                      Hr("可用日期：", s),
                                      Hr("对应关系：", w),
                                    ],
                                  }),
                                ],
                              }),
                              (0, S.tZ)(va.View, { className: " _lI" }),
                            ],
                          }),
                          (0, S.tZ)(va.View, {
                            className: " _v _Vb _ld _kd _r",
                            children: (0, S.tZ)(va.View, {
                              className: ""
                                .concat(
                                  " _w _Oa _Gc _Xc _Qd _o _qb _oB -Rc",
                                  " "
                                )
                                .concat(Z ? "" : "-Sc"),
                              id: "AJDC",
                              onClick: function () {
                                Z &&
                                  U.navigateTo({
                                    url: "/pages/train/list/list?dstation="
                                      .concat(
                                        n.DepartureStationName,
                                        "&astation="
                                      )
                                      .concat(n.ArrivalStationName, "&date=")
                                      .concat(
                                        n.DepartureDate,
                                        "&isGaotieOnly=0&isStudent=0"
                                      ),
                                  });
                              },
                              children: Z ? "去升级" : p,
                            }),
                          }),
                        ],
                      }),
                    }),
                });
              })
            ),
            Kr = m.default.memo(
              (0, X.$j)(function (e) {
                var t,
                  a,
                  n = e.productModel,
                  i = e.t6Model;
                return {
                  bizStatus:
                    (null ===
                      (t = n.noLoginT6GrabInfo.noLoginT6PurchasedBanner) ||
                    void 0 === t
                      ? void 0
                      : t.bizStatus) || 1,
                  orderStatus:
                    null ===
                      (a = n.noLoginT6GrabInfo.noLoginT6PurchasedBanner) ||
                    void 0 === a
                      ? void 0
                      : a.orderStatus,
                  faceSwipingData: i.faceSwipingData,
                  orderInterceptInfo: i.orderInterceptInfo,
                  orderInterceptT6AccountInfo: i.orderInterceptT6AccountInfo,
                };
              })(function (e) {
                var t = e.visible,
                  a = e.bizStatus,
                  n = e.orderStatus,
                  i = e.faceSwipingData,
                  r = e.orderInterceptInfo,
                  o = e.orderInterceptT6AccountInfo,
                  c = {
                    title: "本单赠你免登录12306账号抢票",
                    subTitle: "若需提升抢票成功率，建议登录账号",
                    refuseBtn: 17 === n ? "暂不登录" : "暂不解决",
                    confirmBtn: 17 === n ? "立即登录" : "立即解决",
                  };
                1 === a
                  ? (c.title = "本次赠您免登录12306账号抢票")
                  : 2 === a && (c.title = "您本单可享免登录12306账号抢票");
                return (0, S.tZ)(Ma.ZtDrawer, {
                  show: t,
                  onClose: pa,
                  onWrapClose: pa,
                  isDefineHead: !0,
                  drawerStyle: { borderRadius: "48rpx 48rpx 0 0" },
                  children:
                    c &&
                    (0, S.BX)(va.View, {
                      className: " _p _i _k _l",
                      children: [
                        (0, S.tZ)(va.Image, {
                          className: " _u _q _s _t _nd _dG",
                          src: "https://images3.c-ctrip.com/ztrip/train_xie/2022-03/img_bj.png",
                        }),
                        (0, S.tZ)(va.Image, {
                          src: "https://images3.c-ctrip.com/ztrip/train_xie/2023/06/img_lb.webp",
                          className: " _p _Pp _Lp",
                          webp: !0,
                        }),
                        (0, S.tZ)(va.View, {
                          className: " _o _Ac _p _sb _pd _Oc",
                          children: c.title || "",
                        }),
                        (0, S.tZ)(va.View, {
                          className: " _o _qd _p _oc _Ti _U",
                          children: c.subTitle || "",
                        }),
                        (0, S.BX)(va.View, {
                          className: " _nd _Mb _m _eG _p _i _l",
                          children: [
                            (0, S.tZ)(va.View, {
                              className: " _vd _Oa _x _Yb _nB _Gc _Xc _o",
                              onClick: pa,
                              children: c.refuseBtn || "暂不登录",
                            }),
                            (0, S.tZ)(va.View, {
                              className: " _qb _Oa _w _Yb _nB _Gc _Xc _o",
                              onClick: function () {
                                pa(),
                                  16 === n && i
                                    ? Ft()
                                    : r && 17 === n
                                    ? Kt()
                                    : 18 === n && o && Et();
                              },
                              children: c.confirmBtn || "立即登录",
                            }),
                          ],
                        }),
                      ],
                    }),
                });
              })
            ),
            Wr = a(24565),
            Yr = m.default.memo(
              (0, X.$j)(function (e) {
                var t = e.pageModel;
                return {
                  visible: D.grabShareImagePop === t.toastCode,
                  shareImageInfo: t.shareImageInfo,
                };
              })(function (e) {
                var t = e.visible,
                  a = e.shareImageInfo,
                  n = a.title,
                  i = a.desc,
                  r = a.path;
                return (0,
                S.tZ)(Wr.Z, { title: n, desc: i, shareUrl: r, type: "normal", visible: t, onClose: pa });
              })
            ),
            Qr = m.default.memo(
              (0, X.$j)(function (e) {
                var t = e.pageModel;
                return {
                  visible: D.multiplyGrabShareImagePop === t.toastCode,
                  multiplyShareImageInfo: t.multiplyShareImageInfo,
                };
              })(function (e) {
                var t = e.visible,
                  a = e.multiplyShareImageInfo,
                  n = a.title,
                  i = a.desc,
                  r = a.path;
                return (0,
                S.tZ)(Wr.Z, { title: n, desc: i, shareUrl: r, type: "multiply", visible: t, onClose: pa });
              })
            ),
            $r = m.default.memo(
              (0, X.$j)(function (e) {
                var t = e.pageModel;
                return {
                  toastCode: t.toastCode,
                  secondToastCode: t.secondToastCode,
                };
              })(function (e) {
                var t,
                  a = e.toastCode,
                  n = e.secondToastCode;
                return (0, S.BX)(va.View, {
                  children: [
                    (0, S.BX)(va.CustomWrapper, {
                      children: [
                        (0, S.tZ)(Yr, {}),
                        (0, S.tZ)(Qr, {}),
                        (0, S.tZ)(xi, { data: { showType: a } }),
                        (0, S.tZ)(va.View, {
                          children:
                            a === D.addToMyMiniappGuide &&
                            (0, S.tZ)(wi, {
                              isTieyou: _.default.isTieyou,
                              onHideBackdrop: pa,
                            }),
                        }),
                        (0, S.tZ)(Xi, { show: a === D.goAppForPreSale }),
                        (0, S.tZ)(zi, { visible: a === D.hotelGrabVipDialog }),
                        (0, S.tZ)(Oi, { show: a === D.cancelSmartTicket }),
                        (0, S.tZ)(Fi, { isShow: a === D.showHouBuOrderDetail }),
                        (0, S.tZ)(ji, { isShow: a === D.showHouBuToast }),
                        (0, S.tZ)(Ri, { isShow: a === D.showOpenHouBuPop }),
                        (0, S.tZ)(Ji, { isShow: a === D.openHouBuFailToast }),
                        (0, S.tZ)(Ei, { visible: a === D.showPriorityPopup }),
                        (0, S.tZ)(Ui, {
                          visible: a === D.greenChannelPopup,
                          onClose: pa,
                        }),
                        (0, S.tZ)(Ki, { visible: a === D.showClaimPop }),
                        (0, S.tZ)(Wi, {
                          visible: a === D.showCuiBelowVipPrompt,
                        }),
                        (0, S.tZ)(Yi, {
                          visible: a === D.showCuiWithVipPrompt,
                        }),
                        (0, S.tZ)($i, { isShow: a === D.gzhPopup }),
                        (0, S.tZ)(er, {
                          visible: a === D.confirmCompensate,
                          onClose: pa,
                        }),
                        (0, S.tZ)(tr, {
                          visible: a === D.compensateSuccess,
                          onClose: pa,
                        }),
                        (0, S.tZ)(ir, { show: a === D.showMobileVerifyPrompt }),
                        (0, S.tZ)(va.View, {
                          children:
                            n === D.showSubscribeMask &&
                            (0, S.tZ)(vi.Z, { style: { top: "5%" } }),
                        }),
                        (0, S.tZ)(Mi, {
                          visible: a === D.subscribePopRobTicketPopup,
                          onClose: pa,
                        }),
                        (0, S.tZ)(rr, {
                          visible: a === D.grabFailClaimDrawerVisible,
                        }),
                        (0, S.tZ)(or, {
                          visible: a === D.settleClaimDialogVisible,
                        }),
                        (0, S.tZ)(cr, {
                          visible: a === D.springFestivalDrawerVisible,
                          onClose: pa,
                        }),
                        (0, S.tZ)(lr, {
                          visible: a === D.dualChannelGuideDialog,
                        }),
                        (0, S.tZ)(ur, {
                          visible: a === D.houBuProgressPopVisible,
                        }),
                        (0, S.tZ)(_r, {
                          visible: a === D.multiplyAccountQADrawerVisible,
                        }),
                        (0, S.tZ)(mr, { visible: a === D.claimFailReasonPop }),
                        (0, S.tZ)(ki, {
                          fromPage: "graborder",
                          visible: a === D.promiseIntoCarDrawer,
                        }),
                        (0, S.tZ)(Bi, {}),
                        (0, S.tZ)(fr, {
                          visible: a === D.idealTrainRescheduleDrawer,
                        }),
                        (0, S.tZ)(gr, { visible: a === D.friendAccountDrawer }),
                        (0, S.tZ)(wr, {
                          visible: a === D.specificallyGrabDrawer,
                        }),
                        (0, S.tZ)(vr.Z, {
                          isShow: a === D.marketBigAmountCouponGiftsPopup,
                          info:
                            null === (t = ce("wxBigCouponToast")) ||
                            void 0 === t
                              ? void 0
                              : t._jsonInfo,
                          onClose: pa,
                        }),
                        (0, S.tZ)(Tr, {
                          visible: a === D.recommendedSchemeDrawer,
                        }),
                        (0, S.tZ)(Vr, {
                          visible: a === D.seasonMemberShipDrawer,
                        }),
                        (0, S.tZ)(Cr, {
                          visible: a === D.activate12306AccountDrawer,
                        }),
                        (0, S.tZ)(Dr, { isShow: a === D.speedGrabTaskDrawer }),
                        (0, S.tZ)(kr, {
                          isShow: a === D.studentGrabTaskDrawer,
                        }),
                        (0, S.tZ)(Mr, { visible: a === D.seatProductDrawer }),
                        (0, S.tZ)(Ar, {
                          visible: a === D.urgeSpecificallyGrabDrawer,
                        }),
                        (0, S.tZ)(Xr, {
                          visible: a === D.urgeLoadingDrawer,
                          onClose: pa,
                        }),
                        (0, S.tZ)(Or, { isShow: a === D.qwTaskDrawer }),
                        n === D.productIntroductionDrawer && (0, S.tZ)(Lr, {}),
                        (0, S.tZ)(jr, {
                          isShow: a === D.isShowCancelConfirmDrawer,
                        }),
                        (0, S.tZ)(Rr, {
                          visible: a === D.waitOpenQADrawer,
                          onClose: pa,
                        }),
                        (0, S.tZ)(Kr, { visible: a === D.noLoginT6GrabDrawer }),
                        (0, S.tZ)(va.View, {
                          children:
                            a === D.showShareDrawer && (0, S.tZ)(Li, {}),
                        }),
                        (0, S.tZ)(ar, {
                          visible: a === D.payToUnlock,
                          onClose: pa,
                        }),
                        (0, S.tZ)(nr, {
                          visible: a === D.showStuAndNewGuestPrompt,
                        }),
                        (0, S.tZ)(Er, {}),
                        (0, S.tZ)(Ur, {}),
                        (0, S.tZ)(Ii, { visible: a === D.otherSeatsDrawer }),
                        (0, S.tZ)(Ci, { visible: a === D.otherDatesDrawer }),
                      ],
                    }),
                    (0, S.tZ)(z.Z, {
                      ref: function (e) {
                        U.getPage().onDrawerAttach(e);
                      },
                    }),
                    (0, S.tZ)(gi.Z, {
                      ref: function (e) {
                        U.getPage().$CommonSceneDrawer = e;
                      },
                    }),
                    (0, S.tZ)(hi.Z, {
                      ref: function (e) {
                        U.getPage().onDialogAttach(e);
                      },
                    }),
                  ],
                });
              })
            ),
            eo =
              (0, A.h)()(
                (qr = (function (e) {
                  (0, l.Z)(a, e);
                  var t = (0, d.Z)(a);
                  function a(e) {
                    var n, i;
                    (0, o.Z)(this, a),
                      (i = t.call(this, e)),
                      (0, u.Z)((0, s.Z)(i), "$CommonSceneDrawer", null),
                      (0, u.Z)((0, s.Z)(i), "store", void 0),
                      (0, u.Z)((0, s.Z)(i), "hasInitPage", !1),
                      (0, u.Z)((0, s.Z)(i), "showAutoRefresh", !1),
                      (0, u.Z)((0, s.Z)(i), "showAutoRefreshDelay", void 0),
                      (0, u.Z)((0, s.Z)(i), "grabOrder", void 0),
                      (0, u.Z)((0, s.Z)(i), "jumpFromPayFlag", !1),
                      (0, u.Z)(
                        (0, s.Z)(i),
                        "pageId",
                        _.default.isTieyou ? "10650060277" : "10650060279"
                      ),
                      (0, u.Z)((0, s.Z)(i), "oid", ""),
                      (0, u.Z)((0, s.Z)(i), "originOrderNumber", void 0),
                      (0, u.Z)((0, s.Z)(i), "isCreditPay", void 0),
                      (0, u.Z)((0, s.Z)(i), "grabListOperation", void 0),
                      (0, u.Z)((0, s.Z)(i), "fromPage", void 0),
                      (0, u.Z)((0, s.Z)(i), "isGrab24", void 0),
                      (0, u.Z)((0, s.Z)(i), "isFreezePullDown", void 0),
                      (0, u.Z)((0, s.Z)(i), "cancelSmartTicket", void 0),
                      (0, u.Z)(
                        (0, s.Z)(i),
                        "skipWaitOpenExpansionTimer",
                        void 0
                      ),
                      (0, u.Z)(
                        (0, s.Z)(i),
                        "hasOpenedFriendAccountDrawer",
                        void 0
                      ),
                      (0, u.Z)((0, s.Z)(i), "isToDealAbnormalStatus", void 0),
                      (0, u.Z)(
                        (0, s.Z)(i),
                        "openFriendAccountDrawerTimer",
                        void 0
                      );
                    var r =
                        (null === (n = e.$router) || void 0 === n
                          ? void 0
                          : n.params) || {},
                      c = r.oid,
                      l = r.originOrderNumber,
                      d = r.isCreditPay,
                      m = r.operation,
                      p = r.cancelSmartTicket,
                      f = r.fromPage,
                      h = r.isGrab24;
                    return (
                      (i.oid = c || ""),
                      (i.originOrderNumber = l || ""),
                      (i.isCreditPay = d || ""),
                      (i.grabListOperation = m || ""),
                      (i.cancelSmartTicket = p || ""),
                      (i.fromPage = f || ""),
                      (i.isGrab24 = "true" === h),
                      (i.store = U.create((0, s.Z)(i)).store),
                      i
                    );
                  }
                  return (
                    (0, c.Z)(a, [
                      {
                        key: "componentDidMount",
                        value: function () {
                          f().hideShareMenu && f().hideShareMenu(), ma();
                        },
                      },
                      {
                        key: "onPullDownRefresh",
                        value: (function () {
                          var e = (0, r.Z)(
                            (0, i.Z)().mark(function e() {
                              return (0, i.Z)().wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        if (
                                          ((e.t0 = !this.isFreezePullDown),
                                          !e.t0)
                                        ) {
                                          e.next = 4;
                                          break;
                                        }
                                        return (e.next = 4), wa();
                                      case 4:
                                        f().stopPullDownRefresh();
                                      case 5:
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
                        key: "componentDidShow",
                        value: function () {
                          !(function () {
                            if (Q.ZP.isLogin) {
                              if (!U.getPage().hasInitPage) return ma();
                              ea(),
                                U.getPage().showAutoRefresh &&
                                  ((U.getPage().showAutoRefresh = !1), wa());
                              var e = U.getPage().showAutoRefreshDelay;
                              e &&
                                ((U.getPage().showAutoRefreshDelay = 0),
                                setTimeout(function () {
                                  wa();
                                }, e || 1e3));
                            } else
                              setTimeout(function () {
                                Q.ZP.doLogin();
                              }, 300);
                          })();
                        },
                      },
                      {
                        key: "componentDidHide",
                        value: function () {
                          $t();
                        },
                      },
                      {
                        key: "onUnload",
                        value: function () {
                          $t();
                        },
                      },
                      {
                        key: "freezePullDown",
                        value: function () {
                          this.isFreezePullDown = !0;
                        },
                      },
                      {
                        key: "unfreezePullDown",
                        value: function () {
                          this.isFreezePullDown = !1;
                        },
                      },
                      {
                        key: "onShareAppMessage",
                        value: function (e) {
                          return (function (e) {
                            var t = w.Z.getUnionData(),
                              a = U.getState().pageModel.isCanFriendSpeed,
                              n = U.getState().grabOrderModel,
                              i = n.ticketInfo,
                              r = n.helpMonitorInfo,
                              o = n.grabSpeedInfo,
                              c =
                                U.getState().planModel.relativeAccountInfo
                                  .relativeAccountShareInfo,
                              s = U.getState().pageModel.shareInfo,
                              l = s.shareIndex,
                              d = s.shareAim,
                              u = s.isShareGZH,
                              _ = void 0 !== u && u,
                              m = s.shareInfoList,
                              p = void 0 === m ? [] : m;
                            if ("button" === e.from) {
                              var f,
                                h = e.target.dataset.flag;
                              if (
                                "account-relative" === (void 0 === h ? "" : h)
                              )
                                return {
                                  title: "「去".concat(
                                    (null === (f = i.toStation) || void 0 === f
                                      ? void 0
                                      : f.name) || "",
                                    "」的火车票太难抢啦，求助我一臂之力"
                                  ),
                                  path: (0, ee.JP)(
                                    "/pages/train/accounthelp/index1?relativeKey=".concat(
                                      encodeURIComponent(
                                        null == c ? void 0 : c.relativeKey
                                      )
                                    )
                                  ),
                                  imageUrl:
                                    "https://images3.c-ctrip.com/ztrip/train.song/grab/xqy/img_bqfxt@2x.png",
                                  desc: "",
                                };
                            }
                            if (a && r && 3 !== o.buttonType) {
                              var g, b, v;
                              _t(r.shareKey);
                              var Z = ut(),
                                N =
                                  (null == Z ? void 0 : Z.tag) ||
                                  (null === (g = i.toStation) || void 0 === g
                                    ? void 0
                                    : g.name) ||
                                  "",
                                I = p.find(function (e) {
                                  return (
                                    "weixin" == (null == e ? void 0 : e.channel)
                                  );
                                }),
                                S =
                                  (null == I ||
                                  null === (b = I.title) ||
                                  void 0 === b
                                    ? void 0
                                    : b.replace("{tagName}", N)) || "",
                                T =
                                  (null == Z ? void 0 : Z.iconUrl) ||
                                  "https://images3.c-ctrip.com/zt/robTicket/common/nnn_prebook_festiva_share_wx.png";
                              return W.ZP.getRobShareObj({
                                showArriveStation: 0 == l ? "" : d,
                                shareKey: r.shareKey,
                                arriveStation:
                                  (null === (v = i.toStation) || void 0 === v
                                    ? void 0
                                    : v.name) || "",
                                allianceid: t.aid,
                                sid: t.sid,
                                shareImgs: [T],
                                type: "weixin",
                                abChannelType: "wxFriend",
                                from: "orderdetail",
                                isShareGZH: _,
                                shareTitle: S,
                              });
                            }
                            return { bu: "train", path: "/pages/home/index" };
                          })(e);
                        },
                      },
                      {
                        key: "render",
                        value: function () {
                          var e = this;
                          return (0, S.BX)(X.zt, {
                            store: this.store,
                            children: [
                              (0, S.tZ)(fi, {}),
                              (0, S.tZ)($r, {}),
                              (0, S.tZ)(z.Z, {
                                ref: function (t) {
                                  e.onDrawerAttach(t);
                                },
                              }),
                            ],
                          });
                        },
                      },
                    ]),
                    a
                  );
                })(M))
              ) || qr;
          (eo.enableShareAppMessage = !0),
            Page(
              (0, n.createPageConfig)(
                eo,
                "pages/trainDetail/graborder/graborder",
                { root: { cn: [] } },
                {
                  navigationBarTitleText: "抢票详情",
                  navigationBarBackgroundColor: "#0066E6",
                  backgroundColorTop: "#0066E6",
                  backgroundColorBottom: "#EFEFEF",
                  enablePullDownRefresh: !0,
                } || {}
              )
            );
        },
      },
      function (e) {
        e.O(
          0,
          [
            93611, 3322, 36332, 95854, 35203, 4978, 31162, 52593, 34335, 74731,
            10560, 32690, 11748, 83067, 74171, 60579, 50127, 77585, 31472,
            85379, 43412, 5207, 36250, 55525, 25323, 58792, 50460, 86167, 7934,
            74492, 79204, 77923, 41950, 35835, 78419, 1768, 37210, 94181, 96468,
            5182, 88520, 53533, 31882, 3993, 56474, 22703, 18210, 92167, 56562,
            70592, 15924, 77294, 301, 45279, 10162, 42658, 77097, 42500, 43954,
            63585, 69455, 79793, 42421, 42162, 91159, 13092, 21272, 9481, 28718,
            25561, 81604, 70613, 62070, 19559, 11216, 68592,
          ],
          function () {
            return (function (t) {
              return e((e.s = t));
            })(72230);
          }
        ),
          e.O();
      },
    ]);
})();
